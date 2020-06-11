import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {

	/**<p>A resource that can be distributed to callers for executing <a>Method</a> resources that require an API key. API keys can be mapped to any <a>Stage</a> on any <a>RestApi</a>, which indicates that the callers with the API key can make requests to that stage.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div> */
	export interface ApiKey {
		id?: string;
		value?: string;
		name?: string;
		customerId?: string;
		description?: string;
		enabled?: boolean;
		createdDate?: Date;
		lastUpdatedDate?: Date;
		stageKeys?: Array<String>;
		tags?: MapOfStringToString;
	}


	/**A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>. */
	export interface StageKey {
		restApiId?: string;
		stageName?: string;
	}


	/**<p>Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div> */
	export interface Authorizer {
		id?: string;
		name?: string;

		/**The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool. */
		type?: AuthorizerType;
		providerARNs?: Array<ProviderARN>;
		authType?: string;
		authorizerUri?: string;
		authorizerCredentials?: string;
		identitySource?: string;
		identityValidationExpression?: string;
		authorizerResultTtlInSeconds?: number;
	}

	export enum AuthorizerType { TOKEN = 0, REQUEST = 1, COGNITO_USER_POOLS = 2 }


	/**<p>Represents the base path that callers of the API must provide as part of the URL after the domain name.</p> <div class="remarks">A custom domain name plus a <code>BasePathMapping</code> specification identifies a deployed <a>RestApi</a> in a given stage of the owner <a>Account</a>.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a> </div> */
	export interface BasePathMapping {
		basePath?: string;
		restApiId?: string;
		stage?: string;
	}


	/**<p>An immutable representation of a <a>RestApi</a> resource that can be called by users using <a>Stages</a>. A deployment must be associated with a <a>Stage</a> for it to be callable over the Internet.</p> <div class="remarks">To create a deployment, call <code>POST</code> on the <a>Deployments</a> resource of a <a>RestApi</a>. To view, update, or delete a deployment, call <code>GET</code>, <code>PATCH</code>, or <code>DELETE</code> on the specified deployment resource (<code>/restapis/{restapi_id}/deployments/{deployment_id}</code>).</div> <div class="seeAlso"><a>RestApi</a>, <a>Deployments</a>, <a>Stage</a>, <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-deployment.html">AWS CLI</a>, <a href="https://aws.amazon.com/tools/">AWS SDKs</a> </div> */
	export interface Deployment {
		id?: string;
		description?: string;
		createdDate?: Date;
		apiSummary?: PathToMapOfMethodSnapshot;
	}


	/**<p>A documentation part for a targeted API entity.</p> <div class="remarks"> <p>A documentation part consists of a content map (<code>properties</code>) and a target (<code>location</code>). The target specifies an API entity to which the documentation content applies. The supported API entity types are <code>API</code>, <code>AUTHORIZER</code>, <code>MODEL</code>, <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. Valid <code>location</code> fields depend on the API entity type. All valid fields are not required.</p> <p>The content map is a JSON string of API-specific key-value pairs. Although an API can use any shape for the content map, only the OpenAPI-compliant documentation fields will be injected into the associated API entity definition in the exported OpenAPI definition file.</p></div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationParts</a> </div> */
	export interface DocumentationPart {
		id?: string;

		/**Specifies the target API entity to which the documentation applies. */
		location?: DocumentationPartLocation;
		properties?: string;
	}

	export enum DocumentationPartType { API = 0, AUTHORIZER = 1, MODEL = 2, RESOURCE = 3, METHOD = 4, PATH_PARAMETER = 5, QUERY_PARAMETER = 6, REQUEST_HEADER = 7, REQUEST_BODY = 8, RESPONSE = 9, RESPONSE_HEADER = 10, RESPONSE_BODY = 11 }


	/**<p>A snapshot of the documentation of an API.</p> <div class="remarks"><p>Publishing API documentation involves creating a documentation version associated with an API stage and exporting the versioned documentation to an external (e.g., OpenAPI) file.</p></div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersions</a> </div> */
	export interface DocumentationVersion {
		version?: string;
		createdDate?: Date;
		description?: string;
	}


	/**<p>Represents a custom domain name as a user-friendly host name of an API (<a>RestApi</a>).</p> <div class="Remarks"> <p>When you deploy an API, API Gateway creates a default host name for the API. This default API host name is of the <code>{restapi-id}.execute-api.{region}.amazonaws.com</code> format. With the default host name, you can access the API's root resource with the URL of <code>https://{restapi-id}.execute-api.{region}.amazonaws.com/{stage}/</code>. When you set up a custom domain name of <code>apis.example.com</code> for this API, you can then access the same resource using the URL of the <code>https://apis.examples.com/myApi</code>, where <code>myApi</code> is the base path mapping (<a>BasePathMapping</a>) of your API under the custom domain name. </p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Set a Custom Host Name for an API</a> </div> */
	export interface DomainName {
		domainName?: string;
		certificateName?: string;
		certificateArn?: string;
		certificateUploadDate?: Date;
		regionalDomainName?: string;
		regionalHostedZoneId?: string;
		regionalCertificateName?: string;
		regionalCertificateArn?: string;
		distributionDomainName?: string;
		distributionHostedZoneId?: string;

		/**The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. */
		endpointConfiguration?: EndpointConfiguration;
		domainNameStatus?: DomainNameDomainNameStatus;
		domainNameStatusMessage?: string;
		securityPolicy?: DomainNameSecurityPolicy;
		tags?: MapOfStringToString;
	}

	export enum DomainNameDomainNameStatus { AVAILABLE = 0, UPDATING = 1, PENDING = 2 }

	export enum DomainNameSecurityPolicy { TLS_1_0 = 0, TLS_1_2 = 1 }


	/**<p>Represents the data structure of a method's request or response payload.</p> <div class="remarks"> <p>A request model defines the data structure of the client-supplied request payload. A response model defines the data structure of the response payload returned by the back end. Although not required, models are useful for mapping payloads between the front end and back end.</p> <p>A model is used for generating an API's SDK, validating the input request body, and creating a skeletal mapping template.</p> </div> <div class="seeAlso"> <a>Method</a>, <a>MethodResponse</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Models and Mappings</a> </div> */
	export interface Model {
		id?: string;
		name?: string;
		description?: string;
		schema?: string;
		contentType?: string;
	}


	/**<p>A set of validation rules for incoming <a>Method</a> requests.</p> <div class="remarks"> <p>In OpenAPI, a <a>RequestValidator</a> of an API is defined by the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.requestValidator.html">x-amazon-apigateway-request-validators.requestValidator</a> object. It the referenced using the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validator">x-amazon-apigateway-request-validator</a> property.</p> </div> <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div> */
	export interface RequestValidator {
		id?: string;
		name?: string;
		validateRequestBody?: boolean;
		validateRequestParameters?: boolean;
	}


	/**<p>Represents an API resource.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div> */
	export interface Resource {
		id?: string;
		parentId?: string;
		pathPart?: string;
		path?: string;
		resourceMethods?: MapOfMethod;
	}


	/**<p>Represents a REST API.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div> */
	export interface RestApi {
		id?: string;
		name?: string;
		description?: string;
		createdDate?: Date;
		version?: string;
		warnings?: Array<String>;
		binaryMediaTypes?: Array<String>;
		minimumCompressionSize?: number;
		apiKeySource?: RestApiApiKeySource;

		/**The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. */
		endpointConfiguration?: EndpointConfiguration;
		policy?: string;
		tags?: MapOfStringToString;
	}

	export enum RestApiApiKeySource { HEADER = 0, AUTHORIZER = 1 }


	/**<p>Represents a unique identifier for a version of a deployed <a>RestApi</a> that is callable by users.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploy an API</a> </div> */
	export interface Stage {
		deploymentId?: string;
		clientCertificateId?: string;
		stageName?: string;
		description?: string;
		cacheClusterEnabled?: boolean;

		/**Returns the size of the <b>CacheCluster</b>. */
		cacheClusterSize?: StageCacheClusterSize;

		/**Returns the status of the <b>CacheCluster</b>. */
		cacheClusterStatus?: StageCacheClusterStatus;
		methodSettings?: MapOfMethodSettings;
		variables?: MapOfStringToString;
		documentationVersion?: string;

		/**Access log settings, including the access log format and access log destination ARN. */
		accessLogSettings?: AccessLogSettings;

		/**Configuration settings of a canary deployment. */
		canarySettings?: CanarySettings;
		tracingEnabled?: boolean;
		webAclArn?: string;
		tags?: MapOfStringToString;
		createdDate?: Date;
		lastUpdatedDate?: Date;
	}

	export enum StageCacheClusterSize { 0.5 = 0, 1.6 = 1, 6.1 = 2, 13.5 = 3, 28.4 = 4, 58.2 = 5, 118 = 6, 237 = 7 }

	export enum StageCacheClusterStatus { CREATE_IN_PROGRESS = 0, AVAILABLE = 1, DELETE_IN_PROGRESS = 2, NOT_AVAILABLE = 3, FLUSH_IN_PROGRESS = 4 }


	/**<p>Represents a usage plan than can specify who can assess associated API stages with specified request limits and quotas.</p> <div class="remarks"> <p>In a usage plan, you associate an API by specifying the API's Id and a stage name of the specified API. You add plan customers by adding API keys to the plan. </p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div> */
	export interface UsagePlan {
		id?: string;
		name?: string;
		description?: string;
		apiStages?: Array<ApiStage>;

		/**The API request rate limits. */
		throttle?: ThrottleSettings;

		/**Quotas configured for a usage plan. */
		quota?: QuotaSettings;
		productCode?: string;
		tags?: MapOfStringToString;
	}


	/**API stage name of the associated API stage in a usage plan. */
	export interface ApiStage {
		apiId?: string;
		stage?: string;
		throttle?: MapOfApiStageThrottleSettings;
	}

	export enum QuotaPeriodType { DAY = 0, WEEK = 1, MONTH = 2 }


	/**<p>Represents a usage plan key to identify a plan customer.</p> <div class="remarks"> <p>To associate an API stage with a selected API key in a usage plan, you must create a UsagePlanKey resource to represent the selected <a>ApiKey</a>.</p> </div>" <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div> */
	export interface UsagePlanKey {
		id?: string;
		type?: string;
		value?: string;
		name?: string;
	}


	/**<p>An API Gateway VPC link for a <a>RestApi</a> to access resources in an Amazon Virtual Private Cloud (VPC).</p> <div class="remarks"> <p><p>To enable access to a resource in an Amazon Virtual Private Cloud through Amazon API Gateway, you, as an API developer, create a <a>VpcLink</a> resource targeted for one or more network load balancers of the VPC and then integrate an API method with a private integration that uses the <a>VpcLink</a>. The private integration has an integration type of <code>HTTP</code> or <code>HTTP_PROXY</code> and has a connection type of <code>VPC_LINK</code>. The integration uses the <code>connectionId</code> property to identify the <a>VpcLink</a> used.</p> </p> </div> */
	export interface VpcLink {
		id?: string;
		name?: string;
		description?: string;
		targetArns?: Array<String>;
		status?: VpcLinkStatus;
		statusMessage?: string;
		tags?: MapOfStringToString;
	}

	export enum VpcLinkStatus { AVAILABLE = 0, PENDING = 1, DELETING = 2, FAILED = 3 }


	/**<p>Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.</p> <div class="remarks">Client certificates are used to authenticate an API by the backend server. To authenticate an API client (or user), use IAM roles and policies, a custom <a>Authorizer</a> or an Amazon Cognito user pool.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div> */
	export interface ClientCertificate {
		clientCertificateId?: string;
		description?: string;
		pemEncodedCertificate?: string;
		createdDate?: Date;
		expirationDate?: Date;
		tags?: MapOfStringToString;
	}


	/**<p>Represents an AWS account that is associated with API Gateway.</p> <div class="remarks"> <p>To view the account info, call <code>GET</code> on this resource.</p> <h4>Error Codes</h4> <p>The following exception may be thrown when the request fails.</p> <ul> <li>UnauthorizedException</li> <li>NotFoundException</li> <li>TooManyRequestsException</li> </ul> <p>For detailed error code information, including the corresponding HTTP Status Codes, see <a href="https://docs.aws.amazon.com/apigateway/api-reference/handling-errors/#api-error-codes">API Gateway Error Codes</a></p> <h4>Example: Get the information about an account.</h4> <h5>Request</h5> <pre><code>GET /account HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160531T184618Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash} </code></pre> <h5>Response</h5> <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ "_links": { "curies": { "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/account-apigateway-{rel}.html", "name": "account", "templated": true }, "self": { "href": "/account" }, "account:update": { "href": "/account" } }, "cloudwatchRoleArn": "arn:aws:iam::123456789012:role/apigAwsProxyRole", "throttleSettings": { "rateLimit": 500, "burstLimit": 1000 } } </code></pre> <p>In addition to making the REST API call directly, you can use the AWS CLI and an AWS SDK to access this resource.</p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-limits.html">API Gateway Limits</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html">Developer Guide</a>, <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-account.html">AWS CLI</a> </div> */
	export interface Account {
		cloudwatchRoleArn?: string;

		/**The API request rate limits. */
		throttleSettings?: ThrottleSettings;
		features?: Array<String>;
		apiKeyVersion?: string;
	}


	/**<p>Represents a collection of API keys as represented by an <a>ApiKeys</a> resource.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div> */
	export interface ApiKeys {
		warnings?: Array<String>;
		position?: string;
		items?: Array<ApiKey>;
	}


	/**<p>Represents a collection of <a>Authorizer</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div> */
	export interface Authorizers {
		position?: string;
		items?: Array<Authorizer>;
	}


	/**<p>Represents a collection of <a>BasePathMapping</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a> </div> */
	export interface BasePathMappings {
		position?: string;
		items?: Array<BasePathMapping>;
	}


	/**<p>Represents a collection of <a>ClientCertificate</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div> */
	export interface ClientCertificates {
		position?: string;
		items?: Array<ClientCertificate>;
	}


	/**<p>Represents a collection resource that contains zero or more references to your existing deployments, and links that guide you on how to interact with your collection. The collection offers a paginated view of the contained deployments.</p> <div class="remarks">To create a new deployment of a <a>RestApi</a>, make a <code>POST</code> request against this resource. To view, update, or delete an existing deployment, make a <code>GET</code>, <code>PATCH</code>, or <code>DELETE</code> request, respectively, on a specified <a>Deployment</a> resource.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploying an API</a>, <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-deployment.html">AWS CLI</a>, <a href="https://aws.amazon.com/tools/">AWS SDKs</a> </div> */
	export interface Deployments {
		position?: string;
		items?: Array<Deployment>;
	}


	/**<p>The collection of documentation parts of an API.</p> <div class="remarks"/> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a> </div> */
	export interface DocumentationParts {
		position?: string;
		items?: Array<DocumentationPart>;
	}


	/**<p>The collection of documentation snapshots of an API. </p> <div class="remarks"><p>Use the <a>DocumentationVersions</a> to manage documentation snapshots associated with various API stages.</p></div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersion</a> </div> */
	export interface DocumentationVersions {
		position?: string;
		items?: Array<DocumentationVersion>;
	}


	/**<p>Represents a collection of <a>DomainName</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Client-Side Certificate</a> </div> */
	export interface DomainNames {
		position?: string;
		items?: Array<DomainName>;
	}


	/**The binary blob response to <a>GetExport</a>, which contains the generated SDK. */
	export interface ExportResponse {
		body?: string;
	}


	/**<p>A gateway response of a given response type and status code, with optional response parameters and mapping templates.</p> <div class="remarks"> For more information about valid gateway response types, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html">Gateway Response Types Supported by API Gateway</a> <div class="example"> <h4>Example: Get a Gateway Response of a given response type</h4> <h5>Request</h5> <p>This example shows how to get a gateway response of the <code>MISSING_AUTHENTICATION_TOKEN</code> type.</p> <pre><code>GET /restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN HTTP/1.1 Host: beta-apigateway.us-east-1.amazonaws.com Content-Type: application/json X-Amz-Date: 20170503T202516Z Authorization: AWS4-HMAC-SHA256 Credential={access-key-id}/20170503/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=1b52460e3159c1a26cff29093855d50ea141c1c5b937528fecaf60f51129697a Cache-Control: no-cache Postman-Token: 3b2a1ce9-c848-2e26-2e2f-9c2caefbed45 </code></pre> <p>The response type is specified as a URL path.</p> <h5>Response</h5> <p>The successful operation returns the <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ "_links": { "curies": { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-gatewayresponse-{rel}.html", "name": "gatewayresponse", "templated": true }, "self": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" }, "gatewayresponse:delete": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" } }, "defaultResponse": false, "responseParameters": { "gatewayresponse.header.x-request-path": "method.request.path.petId", "gatewayresponse.header.Access-Control-Allow-Origin": "&apos;a.b.c&apos;", "gatewayresponse.header.x-request-query": "method.request.querystring.q", "gatewayresponse.header.x-request-header": "method.request.header.Accept" }, "responseTemplates": { "application/json": "{\n \"message\": $context.error.messageString,\n \"type\": \"$context.error.responseType\",\n \"stage\": \"$context.stage\",\n \"resourcePath\": \"$context.resourcePath\",\n \"stageVariables.a\": \"$stageVariables.a\",\n \"statusCode\": \"&apos;404&apos;\"\n}" }, "responseType": "MISSING_AUTHENTICATION_TOKEN", "statusCode": "404" }</code></pre> <p></p> </div> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html">Customize Gateway Responses</a> </div> */
	export interface GatewayResponse {
		responseType?: GatewayResponseResponseType;

		/**
		 * The status code.
		 * Pattern: [1-5]\d\d
		 */
		statusCode?: string;
		responseParameters?: MapOfStringToString;
		responseTemplates?: MapOfStringToString;
		defaultResponse?: boolean;
	}

	export enum GatewayResponseResponseType { DEFAULT_4XX = 0, DEFAULT_5XX = 1, RESOURCE_NOT_FOUND = 2, UNAUTHORIZED = 3, INVALID_API_KEY = 4, ACCESS_DENIED = 5, AUTHORIZER_FAILURE = 6, AUTHORIZER_CONFIGURATION_ERROR = 7, INVALID_SIGNATURE = 8, EXPIRED_TOKEN = 9, MISSING_AUTHENTICATION_TOKEN = 10, INTEGRATION_FAILURE = 11, INTEGRATION_TIMEOUT = 12, API_CONFIGURATION_ERROR = 13, UNSUPPORTED_MEDIA_TYPE = 14, BAD_REQUEST_PARAMETERS = 15, BAD_REQUEST_BODY = 16, REQUEST_TOO_LARGE = 17, THROTTLED = 18, QUOTA_EXCEEDED = 19 }


	/**<p>The collection of the <a>GatewayResponse</a> instances of a <a>RestApi</a> as a <code>responseType</code>-to-<a>GatewayResponse</a> object map of key-value pairs. As such, pagination is not supported for querying this collection.</p> <div class="remarks"> For more information about valid gateway response types, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html">Gateway Response Types Supported by API Gateway</a> <div class="example"> <h4>Example: Get the collection of gateway responses of an API</h4> <h5>Request</h5> <p>This example request shows how to retrieve the <a>GatewayResponses</a> collection from an API.</p> <pre><code>GET /restapis/o81lxisefl/gatewayresponses HTTP/1.1 Host: beta-apigateway.us-east-1.amazonaws.com Content-Type: application/json X-Amz-Date: 20170503T220604Z Authorization: AWS4-HMAC-SHA256 Credential={access-key-id}/20170503/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=59b42fe54a76a5de8adf2c67baa6d39206f8e9ad49a1d77ccc6a5da3103a398a Cache-Control: no-cache Postman-Token: 5637af27-dc29-fc5c-9dfe-0645d52cb515 </code></pre> <p></p> <h5>Response</h5> <p>The successful operation returns the <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ "_links": { "curies": { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-gatewayresponse-{rel}.html", "name": "gatewayresponse", "templated": true }, "self": { "href": "/restapis/o81lxisefl/gatewayresponses" }, "first": { "href": "/restapis/o81lxisefl/gatewayresponses" }, "gatewayresponse:by-type": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "item": [ { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE" }, { "href": "/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND" }, { "href": "/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE" }, { "href": "/restapis/o81lxisefl/gatewayresponses/THROTTLED" }, { "href": "/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE" }, { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR" }, { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX" }, { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX" }, { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS" }, { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY" }, { "href": "/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN" }, { "href": "/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED" }, { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY" }, { "href": "/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED" }, { "href": "/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR" }, { "href": "/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED" }, { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT" }, { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" }, { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE" }, { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE" } ] }, "_embedded": { "item": [ { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "INTEGRATION_FAILURE", "statusCode": "504" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "RESOURCE_NOT_FOUND", "statusCode": "404" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "REQUEST_TOO_LARGE", "statusCode": "413" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/THROTTLED" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/THROTTLED" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "THROTTLED", "statusCode": "429" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "UNSUPPORTED_MEDIA_TYPE", "statusCode": "415" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "AUTHORIZER_CONFIGURATION_ERROR", "statusCode": "500" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "DEFAULT_5XX" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "DEFAULT_4XX" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "BAD_REQUEST_PARAMETERS", "statusCode": "400" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "BAD_REQUEST_BODY", "statusCode": "400" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "EXPIRED_TOKEN", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "ACCESS_DENIED", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "INVALID_API_KEY", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "UNAUTHORIZED", "statusCode": "401" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "API_CONFIGURATION_ERROR", "statusCode": "500" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "QUOTA_EXCEEDED", "statusCode": "429" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "INTEGRATION_TIMEOUT", "statusCode": "504" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "MISSING_AUTHENTICATION_TOKEN", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "INVALID_SIGNATURE", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "AUTHORIZER_FAILURE", "statusCode": "500" } ] } }</code></pre> <p></p> </div> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html">Customize Gateway Responses</a> </div> */
	export interface GatewayResponses {
		position?: string;
		items?: Array<GatewayResponse>;
	}


	/**<p>Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.</p> <div class="remarks">In the API Gateway console, the built-in Lambda integration is an AWS integration.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div> */
	export interface Integration {

		/**The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration. */
		type?: IntegrationType;
		httpMethod?: string;
		uri?: string;
		connectionType?: IntegrationConnectionType;
		connectionId?: string;
		credentials?: string;
		requestParameters?: MapOfStringToString;
		requestTemplates?: MapOfStringToString;
		passthroughBehavior?: string;
		contentHandling?: IntegrationContentHandling;
		timeoutInMillis?: number;
		cacheNamespace?: string;
		cacheKeyParameters?: Array<String>;
		integrationResponses?: MapOfIntegrationResponse;
		tlsConfig?: TlsConfig;
	}

	export enum IntegrationType { HTTP = 0, AWS = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }

	export enum IntegrationConnectionType { INTERNET = 0, VPC_LINK = 1 }

	export enum IntegrationContentHandling { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }


	/**<p>Represents an integration response. The status code must map to an existing <a>MethodResponse</a>, and parameters and templates can be used to transform the back-end response.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div> */
	export interface IntegrationResponse {

		/**
		 * The status code.
		 * Pattern: [1-5]\d\d
		 */
		statusCode?: string;
		selectionPattern?: string;
		responseParameters?: MapOfStringToString;
		responseTemplates?: MapOfStringToString;
		contentHandling?: IntegrationResponseContentHandling;
	}

	export enum IntegrationResponseContentHandling { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }


	/**<p> Represents a client-facing interface by which the client calls the API to access back-end resources. A <b>Method</b> resource is integrated with an <a>Integration</a> resource. Both consist of a request and one or more responses. The method request takes the client input that is passed to the back end through the integration request. A method response returns the output from the back end to the client through an integration response. A method request is embodied in a <b>Method</b> resource, whereas an integration request is embodied in an <a>Integration</a> resource. On the other hand, a method response is represented by a <a>MethodResponse</a> resource, whereas an integration response is represented by an <a>IntegrationResponse</a> resource. </p> <div class="remarks"> <p/> <h4>Example: Retrive the GET method on a specified resource</h4> <h5>Request</h5> <p>The following example request retrieves the information about the GET method on an API resource (<code>3kzxbg5sa2</code>) of an API (<code>fugvjdxtri</code>). </p> <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160603T210259Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160603/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre> <h5>Response</h5> <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ "_links": { "curies": [ { "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-{rel}.html", "name": "integration", "templated": true }, { "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html", "name": "integrationresponse", "templated": true }, { "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-{rel}.html", "name": "method", "templated": true }, { "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html", "name": "methodresponse", "templated": true } ], "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET", "name": "GET", "title": "GET" }, "integration:put": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "method:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET" }, "method:integration": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "method:responses": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200", "name": "200", "title": "200" }, "method:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET" }, "methodresponse:put": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/{status_code}", "templated": true } }, "apiKeyRequired": true, "authorizationType": "NONE", "httpMethod": "GET", "_embedded": { "method:integration": { "_links": { "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "integration:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "integration:responses": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200", "name": "200", "title": "200" }, "integration:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "integrationresponse:put": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/{status_code}", "templated": true } }, "cacheKeyParameters": [], "cacheNamespace": "3kzxbg5sa2", "credentials": "arn:aws:iam::123456789012:role/apigAwsProxyRole", "httpMethod": "POST", "passthroughBehavior": "WHEN_NO_MATCH", "requestParameters": { "integration.request.header.Content-Type": "'application/x-amz-json-1.1'" }, "requestTemplates": { "application/json": "{\n}" }, "type": "AWS", "uri": "arn:aws:apigateway:us-east-1:kinesis:action/ListStreams", "_embedded": { "integration:responses": { "_links": { "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200", "name": "200", "title": "200" }, "integrationresponse:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200" }, "integrationresponse:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200" } }, "responseParameters": { "method.response.header.Content-Type": "'application/xml'" }, "responseTemplates": { "application/json": "$util.urlDecode(\"%3CkinesisStreams%3E%23foreach(%24stream%20in%20%24input.path(%27%24.StreamNames%27))%3Cstream%3E%3Cname%3E%24stream%3C%2Fname%3E%3C%2Fstream%3E%23end%3C%2FkinesisStreams%3E\")" }, "statusCode": "200" } } }, "method:responses": { "_links": { "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200", "name": "200", "title": "200" }, "methodresponse:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" }, "methodresponse:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" } }, "responseModels": { "application/json": "Empty" }, "responseParameters": { "method.response.header.Content-Type": false }, "statusCode": "200" } } }</code></pre> <p>In the example above, the response template for the <code>200 OK</code> response maps the JSON output from the <code>ListStreams</code> action in the back end to an XML output. The mapping template is URL-encoded as <code>%3CkinesisStreams%3E%23foreach(%24stream%20in%20%24input.path(%27%24.StreamNames%27))%3Cstream%3E%3Cname%3E%24stream%3C%2Fname%3E%3C%2Fstream%3E%23end%3C%2FkinesisStreams%3E</code> and the output is decoded using the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#util-templat-reference">$util.urlDecode()</a> helper function.</p> </div> <div class="seeAlso"> <a>MethodResponse</a>, <a>Integration</a>, <a>IntegrationResponse</a>, <a>Resource</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-method-settings.html">Set up an API's method</a> </div> */
	export interface Method {
		httpMethod?: string;
		authorizationType?: string;
		authorizerId?: string;
		apiKeyRequired?: boolean;
		requestValidatorId?: string;
		operationName?: string;
		requestParameters?: MapOfStringToBoolean;
		requestModels?: MapOfStringToString;
		methodResponses?: MapOfMethodResponse;

		/**<p>Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.</p> <div class="remarks">In the API Gateway console, the built-in Lambda integration is an AWS integration.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div> */
		methodIntegration?: Integration;
		authorizationScopes?: Array<String>;
	}


	/**<p>Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template. </p> <div class="remarks"> <p/> <h4>Example: A <b>MethodResponse</b> instance of an API</h4> <h5>Request</h5> <p>The example request retrieves a <b>MethodResponse</b> of the 200 status code.</p> <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200 HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160603T222952Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160603/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre> <h5>Response</h5> <p>The successful response returns <code>200 OK</code> status and a payload as follows:</p> <pre><code>{ "_links": { "curies": { "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html", "name": "methodresponse", "templated": true }, "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200", "title": "200" }, "methodresponse:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" }, "methodresponse:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" } }, "responseModels": { "application/json": "Empty" }, "responseParameters": { "method.response.header.Content-Type": false }, "statusCode": "200" }</code></pre> <p/> </div> <div class="seeAlso"> <a>Method</a>, <a>IntegrationResponse</a>, <a>Integration</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div> */
	export interface MethodResponse {

		/**
		 * The status code.
		 * Pattern: [1-5]\d\d
		 */
		statusCode?: string;
		responseParameters?: MapOfStringToBoolean;
		responseModels?: MapOfStringToString;
	}


	/**<p>Represents a mapping template used to transform a payload.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html#models-mappings-mappings">Mapping Templates</a> </div> */
	export interface Template {
		value?: string;
	}


	/**<p>Represents a collection of <a>Model</a> resources.</p> <div class="seeAlso"> <a>Method</a>, <a>MethodResponse</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Models and Mappings</a> </div> */
	export interface Models {
		position?: string;
		items?: Array<Model>;
	}


	/**<p>A collection of <a>RequestValidator</a> resources of a given <a>RestApi</a>.</p> <div class="remarks"> <p>In OpenAPI, the <a>RequestValidators</a> of an API is defined by the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.html">x-amazon-apigateway-request-validators</a> extension.</p> </div> <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div> */
	export interface RequestValidators {
		position?: string;
		items?: Array<RequestValidator>;
	}


	/**<p>Represents a collection of <a>Resource</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div> */
	export interface Resources {
		position?: string;
		items?: Array<Resource>;
	}


	/**<p>Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div> */
	export interface RestApis {
		position?: string;
		items?: Array<RestApi>;
	}


	/**The binary blob response to <a>GetSdk</a>, which contains the generated SDK. */
	export interface SdkResponse {
		body?: string;
	}


	/**A type of SDK that API Gateway can generate. */
	export interface SdkType {
		id?: string;
		friendlyName?: string;
		description?: string;
		configurationProperties?: Array<SdkConfigurationProperty>;
	}


	/**The collection of <a>SdkType</a> instances. */
	export interface SdkTypes {
		position?: string;
		items?: Array<SdkType>;
	}


	/**<p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html">Deploying API in Stages</a></div> */
	export interface Stages {
		item?: Array<Stage>;
	}


	/**The collection of tags. Each tag element is associated with a given resource. */
	export interface Tags {
		tags?: MapOfStringToString;
	}


	/**<p>Represents the usage data of a usage plan.</p> <div class="remarks"/> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html#api-gateway-usage-plan-manage-usage">Manage Usage in a Usage Plan</a> </div> */
	export interface Usage {
		usagePlanId?: string;
		startDate?: string;
		endDate?: string;
		position?: string;
		items?: MapOfKeyUsages;
	}


	/**<p>Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div> */
	export interface UsagePlanKeys {
		position?: string;
		items?: Array<UsagePlanKey>;
	}


	/**<p>Represents a collection of usage plans for an AWS account.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div> */
	export interface UsagePlans {
		position?: string;
		items?: Array<UsagePlan>;
	}


	/**<p>The collection of VPC links under the caller's account in a region.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-private-integration.html">Getting Started with Private Integrations</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html">Set up Private Integrations</a> </div> */
	export interface VpcLinks {
		position?: string;
		items?: Array<VpcLink>;
	}


	/**The identifier of an <a>ApiKey</a> used in a <a>UsagePlan</a>. */
	export interface ApiKeyIds {
		ids?: Array<String>;
		warnings?: Array<String>;
	}


	/**<p>A collection of the imported <a>DocumentationPart</a> identifiers.</p> <div class="remarks">This is used to return the result when documentation parts in an external (e.g., OpenAPI) file are imported into API Gateway</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a href="https://docs.aws.amazon.com/apigateway/api-reference/link-relation/documentationpart-import/">documentationpart:import</a>, <a>DocumentationPart</a> </div> */
	export interface DocumentationPartIds {
		ids?: Array<String>;
		warnings?: Array<String>;
	}


	/**Represents the response of the test invoke request for a custom <a>Authorizer</a> */
	export interface TestInvokeAuthorizerResponse {
		clientStatus?: number;
		log?: string;
		latency?: number;
		principalId?: string;
		policy?: string;
		authorization?: MapOfStringToList;
		claims?: MapOfStringToString;
	}


	/**<p>Represents the response of the test invoke request in the HTTP method.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-test-method.html#how-to-test-method-console">Test API using the API Gateway console</a> </div> */
	export interface TestInvokeMethodResponse {
		status?: number;
		body?: string;
		headers?: MapOfStringToString;
		multiValueHeaders?: MapOfStringToList;
		log?: string;
		latency?: number;
	}


	/**A single patch operation to apply to the specified resource. Please refer to http://tools.ietf.org/html/rfc6902#section-4 for an explanation of how each operation is used. */
	export interface PatchOperation {
		op?: PatchOperationOp;
		path?: string;
		value?: string;
		from?: string;
	}

	export enum PatchOperationOp { add = 0, remove = 1, replace = 2, move = 3, copy = 4, test = 5 }


	/**Access log settings, including the access log format and access log destination ARN. */
	export interface AccessLogSettings {
		format?: string;
		destinationArn?: string;
	}


	/** The API request rate limits. */
	export interface ThrottleSettings {
		burstLimit?: number;
		rateLimit?: number;
	}

	export enum ApiKeySourceType { HEADER = 0, AUTHORIZER = 1 }

	export enum ApiKeysFormat { csv = 0 }


	/**The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool. */
	export enum AuthorizerType { TOKEN = 0, REQUEST = 1, COGNITO_USER_POOLS = 2 }


	/**Returns the size of the <b>CacheCluster</b>. */
	export enum CacheClusterSize { 0.5 = 0, 1.6 = 1, 6.1 = 2, 13.5 = 3, 28.4 = 4, 58.2 = 5, 118 = 6, 237 = 7 }


	/**Returns the status of the <b>CacheCluster</b>. */
	export enum CacheClusterStatus { CREATE_IN_PROGRESS = 0, AVAILABLE = 1, DELETE_IN_PROGRESS = 2, NOT_AVAILABLE = 3, FLUSH_IN_PROGRESS = 4 }


	/**Configuration settings of a canary deployment. */
	export interface CanarySettings {
		percentTraffic?: number;
		deploymentId?: string;
		stageVariableOverrides?: MapOfStringToString;
		useStageCache?: boolean;
	}

	export enum ConnectionType { INTERNET = 0, VPC_LINK = 1 }

	export enum ContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }


	/**Request to create an <a>ApiKey</a> resource. */
	export interface CreateApiKeyRequest {
		name?: string;
		description?: string;
		enabled?: boolean;
		generateDistinctId?: boolean;
		value?: string;
		stageKeys?: Array<StageKey>;
		customerId?: string;
		tags?: MapOfStringToString;
	}


	/**Request to add a new <a>Authorizer</a> to an existing <a>RestApi</a> resource. */
	export interface CreateAuthorizerRequest {
		name: string;

		/**The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool. */
		type: CreateAuthorizerRequestType;
		providerARNs?: Array<ProviderARN>;
		authType?: string;
		authorizerUri?: string;
		authorizerCredentials?: string;
		identitySource?: string;
		identityValidationExpression?: string;
		authorizerResultTtlInSeconds?: number;
	}

	export enum CreateAuthorizerRequestType { TOKEN = 0, REQUEST = 1, COGNITO_USER_POOLS = 2 }


	/**Requests API Gateway to create a new <a>BasePathMapping</a> resource. */
	export interface CreateBasePathMappingRequest {
		basePath?: string;
		restApiId: string;
		stage?: string;
	}


	/**The input configuration for a canary deployment. */
	export interface DeploymentCanarySettings {
		percentTraffic?: number;
		stageVariableOverrides?: MapOfStringToString;
		useStageCache?: boolean;
	}


	/**Requests API Gateway to create a <a>Deployment</a> resource. */
	export interface CreateDeploymentRequest {
		stageName?: string;
		stageDescription?: string;
		description?: string;
		cacheClusterEnabled?: boolean;

		/**Returns the size of the <b>CacheCluster</b>. */
		cacheClusterSize?: CreateDeploymentRequestCacheClusterSize;
		variables?: MapOfStringToString;

		/**The input configuration for a canary deployment. */
		canarySettings?: DeploymentCanarySettings;
		tracingEnabled?: boolean;
	}

	export enum CreateDeploymentRequestCacheClusterSize { 0.5 = 0, 1.6 = 1, 6.1 = 2, 13.5 = 3, 28.4 = 4, 58.2 = 5, 118 = 6, 237 = 7 }


	/**Specifies the target API entity to which the documentation applies. */
	export interface DocumentationPartLocation {
		type: DocumentationPartLocationType;
		path?: string;
		method?: string;
		statusCode?: string;
		name?: string;
	}

	export enum DocumentationPartLocationType { API = 0, AUTHORIZER = 1, MODEL = 2, RESOURCE = 3, METHOD = 4, PATH_PARAMETER = 5, QUERY_PARAMETER = 6, REQUEST_HEADER = 7, REQUEST_BODY = 8, RESPONSE = 9, RESPONSE_HEADER = 10, RESPONSE_BODY = 11 }


	/**Creates a new documentation part of a given API. */
	export interface CreateDocumentationPartRequest {

		/**Specifies the target API entity to which the documentation applies. */
		location: DocumentationPartLocation;
		properties: string;
	}


	/**Creates a new documentation version of a given API. */
	export interface CreateDocumentationVersionRequest {
		documentationVersion: string;
		stageName?: string;
		description?: string;
	}


	/**The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has.  */
	export interface EndpointConfiguration {
		types?: Array<EndpointType>;
		vpcEndpointIds?: Array<String>;
	}

	export enum SecurityPolicy { TLS_1_0 = 0, TLS_1_2 = 1 }


	/**A request to create a new domain name. */
	export interface CreateDomainNameRequest {
		domainName: string;
		certificateName?: string;
		certificateBody?: string;
		certificatePrivateKey?: string;
		certificateChain?: string;
		certificateArn?: string;
		regionalCertificateName?: string;
		regionalCertificateArn?: string;

		/**The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. */
		endpointConfiguration?: EndpointConfiguration;
		tags?: MapOfStringToString;
		securityPolicy?: CreateDomainNameRequestSecurityPolicy;
	}

	export enum CreateDomainNameRequestSecurityPolicy { TLS_1_0 = 0, TLS_1_2 = 1 }


	/**Request to add a new <a>Model</a> to an existing <a>RestApi</a> resource. */
	export interface CreateModelRequest {
		name: string;
		description?: string;
		schema?: string;
		contentType: string;
	}


	/**Creates a <a>RequestValidator</a> of a given <a>RestApi</a>. */
	export interface CreateRequestValidatorRequest {
		name?: string;
		validateRequestBody?: boolean;
		validateRequestParameters?: boolean;
	}


	/**Requests API Gateway to create a <a>Resource</a> resource. */
	export interface CreateResourceRequest {
		pathPart: string;
	}


	/**The POST Request to add a new <a>RestApi</a> resource to your collection. */
	export interface CreateRestApiRequest {
		name: string;
		description?: string;
		version?: string;
		cloneFrom?: string;
		binaryMediaTypes?: Array<String>;
		minimumCompressionSize?: number;
		apiKeySource?: CreateRestApiRequestApiKeySource;

		/**The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. */
		endpointConfiguration?: EndpointConfiguration;
		policy?: string;
		tags?: MapOfStringToString;
	}

	export enum CreateRestApiRequestApiKeySource { HEADER = 0, AUTHORIZER = 1 }


	/**Requests API Gateway to create a <a>Stage</a> resource. */
	export interface CreateStageRequest {
		stageName: string;
		deploymentId: string;
		description?: string;
		cacheClusterEnabled?: boolean;

		/**Returns the size of the <b>CacheCluster</b>. */
		cacheClusterSize?: CreateStageRequestCacheClusterSize;
		variables?: MapOfStringToString;
		documentationVersion?: string;

		/**Configuration settings of a canary deployment. */
		canarySettings?: CanarySettings;
		tracingEnabled?: boolean;
		tags?: MapOfStringToString;
	}

	export enum CreateStageRequestCacheClusterSize { 0.5 = 0, 1.6 = 1, 6.1 = 2, 13.5 = 3, 28.4 = 4, 58.2 = 5, 118 = 6, 237 = 7 }


	/**The POST request to create a usage plan key for adding an existing API key to a usage plan. */
	export interface CreateUsagePlanKeyRequest {
		keyId: string;
		keyType: string;
	}


	/**Quotas configured for a usage plan. */
	export interface QuotaSettings {
		limit?: number;
		offset?: number;
		period?: QuotaSettingsPeriod;
	}

	export enum QuotaSettingsPeriod { DAY = 0, WEEK = 1, MONTH = 2 }


	/**The POST request to create a usage plan with the name, description, throttle limits and quota limits, as well as the associated API stages, specified in the payload. */
	export interface CreateUsagePlanRequest {
		name: string;
		description?: string;
		apiStages?: Array<ApiStage>;

		/**The API request rate limits. */
		throttle?: ThrottleSettings;

		/**Quotas configured for a usage plan. */
		quota?: QuotaSettings;
		tags?: MapOfStringToString;
	}


	/**Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services. */
	export interface CreateVpcLinkRequest {
		name: string;
		description?: string;
		targetArns: Array<String>;
		tags?: MapOfStringToString;
	}

	export enum GatewayResponseType { DEFAULT_4XX = 0, DEFAULT_5XX = 1, RESOURCE_NOT_FOUND = 2, UNAUTHORIZED = 3, INVALID_API_KEY = 4, ACCESS_DENIED = 5, AUTHORIZER_FAILURE = 6, AUTHORIZER_CONFIGURATION_ERROR = 7, INVALID_SIGNATURE = 8, EXPIRED_TOKEN = 9, MISSING_AUTHENTICATION_TOKEN = 10, INTEGRATION_FAILURE = 11, INTEGRATION_TIMEOUT = 12, API_CONFIGURATION_ERROR = 13, UNSUPPORTED_MEDIA_TYPE = 14, BAD_REQUEST_PARAMETERS = 15, BAD_REQUEST_BODY = 16, REQUEST_TOO_LARGE = 17, THROTTLED = 18, QUOTA_EXCEEDED = 19 }

	export enum DomainNameStatus { AVAILABLE = 0, UPDATING = 1, PENDING = 2 }


	/**The endpoint type. The valid values are <code>EDGE</code> for edge-optimized API setup, most suitable for mobile applications; <code>REGIONAL</code> for regional API endpoint setup, most suitable for calling from AWS Region; and <code>PRIVATE</code> for private APIs. */
	export enum EndpointType { REGIONAL = 0, EDGE = 1, PRIVATE = 2 }


	/**A request to generate a <a>ClientCertificate</a> resource. */
	export interface GenerateClientCertificateRequest {
		description?: string;
		tags?: MapOfStringToString;
	}

	export enum LocationStatusType { DOCUMENTED = 0, UNDOCUMENTED = 1 }


	/**The POST request to import API keys from an external source, such as a CSV-formatted file. */
	export interface ImportApiKeysRequest {
		body: string;
	}

	export enum PutMode { merge = 0, overwrite = 1 }


	/**Import documentation parts from an external (e.g., OpenAPI) definition file.  */
	export interface ImportDocumentationPartsRequest {
		body: string;
	}


	/**A POST request to import an API to API Gateway using an input of an API definition file. */
	export interface ImportRestApiRequest {
		body: string;
	}


	/**The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration.  */
	export enum IntegrationType { HTTP = 0, AWS = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }

	export interface TlsConfig {
		insecureSkipVerification?: boolean;
	}


	/**A configuration property of an SDK type. */
	export interface SdkConfigurationProperty {
		name?: string;
		friendlyName?: string;
		description?: string;
		required?: boolean;
		defaultValue?: string;
	}


	/**Specifies the method setting properties. */
	export interface MethodSetting {
		metricsEnabled?: boolean;
		loggingLevel?: string;
		dataTraceEnabled?: boolean;
		throttlingBurstLimit?: number;
		throttlingRateLimit?: number;
		cachingEnabled?: boolean;
		cacheTtlInSeconds?: number;
		cacheDataEncrypted?: boolean;
		requireAuthorizationForCacheControl?: boolean;
		unauthorizedCacheControlHeaderStrategy?: MethodSettingUnauthorizedCacheControlHeaderStrategy;
	}

	export enum MethodSettingUnauthorizedCacheControlHeaderStrategy { FAIL_WITH_403 = 0, SUCCEED_WITH_RESPONSE_HEADER = 1, SUCCEED_WITHOUT_RESPONSE_HEADER = 2 }


	/**Represents a summary of a <a>Method</a> resource, given a particular date and time. */
	export interface MethodSnapshot {
		authorizationType?: string;
		apiKeyRequired?: boolean;
	}

	export enum UnauthorizedCacheControlHeaderStrategy { FAIL_WITH_403 = 0, SUCCEED_WITH_RESPONSE_HEADER = 1, SUCCEED_WITHOUT_RESPONSE_HEADER = 2 }

	export enum Op { add = 0, remove = 1, replace = 2, move = 3, copy = 4, test = 5 }


	/**Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>. */
	export interface PutGatewayResponseRequest {

		/**
		 * The status code.
		 * Pattern: [1-5]\d\d
		 */
		statusCode?: string;
		responseParameters?: MapOfStringToString;
		responseTemplates?: MapOfStringToString;
	}


	/**Sets up a method's integration. */
	export interface PutIntegrationRequest {

		/**The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration. */
		type: PutIntegrationRequestType;
		integrationHttpMethod?: string;
		uri?: string;
		connectionType?: PutIntegrationRequestConnectionType;
		connectionId?: string;
		credentials?: string;
		requestParameters?: MapOfStringToString;
		requestTemplates?: MapOfStringToString;
		passthroughBehavior?: string;
		cacheNamespace?: string;
		cacheKeyParameters?: Array<String>;
		contentHandling?: PutIntegrationRequestContentHandling;
		timeoutInMillis?: number;
		tlsConfig?: TlsConfig;
	}

	export enum PutIntegrationRequestType { HTTP = 0, AWS = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }

	export enum PutIntegrationRequestConnectionType { INTERNET = 0, VPC_LINK = 1 }

	export enum PutIntegrationRequestContentHandling { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }


	/**Represents a put integration response request. */
	export interface PutIntegrationResponseRequest {
		selectionPattern?: string;
		responseParameters?: MapOfStringToString;
		responseTemplates?: MapOfStringToString;
		contentHandling?: PutIntegrationResponseRequestContentHandling;
	}

	export enum PutIntegrationResponseRequestContentHandling { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }


	/**Request to add a method to an existing <a>Resource</a> resource. */
	export interface PutMethodRequest {
		authorizationType: string;
		authorizerId?: string;
		apiKeyRequired?: boolean;
		operationName?: string;
		requestParameters?: MapOfStringToBoolean;
		requestModels?: MapOfStringToString;
		requestValidatorId?: string;
		authorizationScopes?: Array<String>;
	}


	/**Request to add a <a>MethodResponse</a> to an existing <a>Method</a> resource. */
	export interface PutMethodResponseRequest {
		responseParameters?: MapOfStringToBoolean;
		responseModels?: MapOfStringToString;
	}


	/**A PUT request to update an existing API, with external API definitions specified as the request body. */
	export interface PutRestApiRequest {
		body: string;
	}


	/**Adds or updates a tag on a given resource. */
	export interface TagResourceRequest {
		tags: MapOfStringToString;
	}


	/**Make a request to simulate the execution of an <a>Authorizer</a>. */
	export interface TestInvokeAuthorizerRequest {
		headers?: MapOfStringToString;
		multiValueHeaders?: MapOfStringToList;
		pathWithQueryString?: string;
		body?: string;
		stageVariables?: MapOfStringToString;
		additionalContext?: MapOfStringToString;
	}


	/**Make a request to simulate the execution of a <a>Method</a>. */
	export interface TestInvokeMethodRequest {
		pathWithQueryString?: string;
		body?: string;
		headers?: MapOfStringToString;
		multiValueHeaders?: MapOfStringToList;
		clientCertificateId?: string;
		stageVariables?: MapOfStringToString;
	}


	/**Requests API Gateway to change information about the current <a>Account</a> resource. */
	export interface UpdateAccountRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**A request to change information about an <a>ApiKey</a> resource. */
	export interface UpdateApiKeyRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Request to update an existing <a>Authorizer</a> resource. */
	export interface UpdateAuthorizerRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**A request to change information about the <a>BasePathMapping</a> resource. */
	export interface UpdateBasePathMappingRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**A request to change information about an <a>ClientCertificate</a> resource. */
	export interface UpdateClientCertificateRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Requests API Gateway to change information about a <a>Deployment</a> resource. */
	export interface UpdateDeploymentRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Updates an existing documentation part of a given API. */
	export interface UpdateDocumentationPartRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Updates an existing documentation version of an API. */
	export interface UpdateDocumentationVersionRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**A request to change information about the <a>DomainName</a> resource. */
	export interface UpdateDomainNameRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>. */
	export interface UpdateGatewayResponseRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Represents an update integration request. */
	export interface UpdateIntegrationRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Represents an update integration response request. */
	export interface UpdateIntegrationResponseRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Request to update an existing <a>Method</a> resource. */
	export interface UpdateMethodRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**A request to update an existing <a>MethodResponse</a> resource. */
	export interface UpdateMethodResponseRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Request to update an existing model in an existing <a>RestApi</a> resource. */
	export interface UpdateModelRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Updates a <a>RequestValidator</a> of a given <a>RestApi</a>. */
	export interface UpdateRequestValidatorRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Request to change information about a <a>Resource</a> resource. */
	export interface UpdateResourceRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Request to update an existing <a>RestApi</a> resource in your collection. */
	export interface UpdateRestApiRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Requests API Gateway to change information about a <a>Stage</a> resource. */
	export interface UpdateStageRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**The PATCH request to update a usage plan of a given plan Id. */
	export interface UpdateUsagePlanRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**The PATCH request to grant a temporary extension to the remaining quota of a usage plan associated with a specified API key. */
	export interface UpdateUsageRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}


	/**Updates an existing <a>VpcLink</a> of a specified identifier. */
	export interface UpdateVpcLinkRequest {

		/**A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}

	export enum VpcLinkStatus { AVAILABLE = 0, PENDING = 1, DELETING = 2, FAILED = 3 }

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * <p>Create an <a>ApiKey</a> resource. </p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-api-key.html">AWS CLI</a></div>
		 * Post apikeys
		 * @return {void} 
		 */
		CreateApiKey(requestBody: CreateApiKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('apikeys', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the current <a>ApiKeys</a> resource.
		 * Get apikeys
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @param {string} name The name of queried API keys.
		 * @param {string} customerId The identifier of a customer in AWS Marketplace or an external system, such as a developer portal.
		 * @param {boolean} includeValues A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains key values.
		 * @return {ApiKeys} Success
		 */
		GetApiKeys(position: string, limit: number, name: string, customerId: string, includeValues: boolean, headersHandler?: () => {[header: string]: string}): Promise<ApiKeys> {
			return this.http.get('apikeys?position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&includeValues=' + includeValues, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Adds a new <a>Authorizer</a> resource to an existing <a>RestApi</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-authorizer.html">AWS CLI</a></div>
		 * Post restapis/{restapi_id}/authorizers
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @return {void} 
		 */
		CreateAuthorizer(restapi_id: string, requestBody: CreateAuthorizerBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/authorizers', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describe an existing <a>Authorizers</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizers.html">AWS CLI</a></div>
		 * Get restapis/{restapi_id}/authorizers
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {Authorizers} Success
		 */
		GetAuthorizers(restapi_id: string, position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<Authorizers> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/authorizers&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a new <a>BasePathMapping</a> resource.
		 * Post domainnames/{domain_name}/basepathmappings
		 * @param {string} domain_name [Required] The domain name of the <a>BasePathMapping</a> resource to create.
		 * @return {void} 
		 */
		CreateBasePathMapping(domain_name: string, requestBody: CreateBasePathMappingBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '/basepathmappings', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Represents a collection of <a>BasePathMapping</a> resources.
		 * Get domainnames/{domain_name}/basepathmappings
		 * @param {string} domain_name [Required] The domain name of a <a>BasePathMapping</a> resource.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {BasePathMappings} Success
		 */
		GetBasePathMappings(domain_name: string, position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<BasePathMappings> {
			return this.http.get('domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '/basepathmappings&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a <a>Deployment</a> resource, which makes a specified <a>RestApi</a> callable over the internet.
		 * Post restapis/{restapi_id}/deployments
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @return {void} 
		 */
		CreateDeployment(restapi_id: string, requestBody: CreateDeploymentBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/deployments', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a <a>Deployments</a> collection.
		 * Get restapis/{restapi_id}/deployments
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {Deployments} Success
		 */
		GetDeployments(restapi_id: string, position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<Deployments> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/deployments&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Post restapis/{restapi_id}/documentation/parts
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @return {void} 
		 */
		CreateDocumentationPart(restapi_id: string, requestBody: CreateDocumentationPartBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/parts', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get restapis/{restapi_id}/documentation/parts
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {DocumentationPartType} type The type of API entities of the to-be-retrieved documentation parts. 
		 * @param {string} name The name of API entities of the to-be-retrieved documentation parts.
		 * @param {string} path The path of API entities of the to-be-retrieved documentation parts.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @param {LocationStatusType} locationStatus The status of the API documentation parts to retrieve. Valid values are <code>DOCUMENTED</code> for retrieving <a>DocumentationPart</a> resources with content and <code>UNDOCUMENTED</code> for <a>DocumentationPart</a> resources without content.
		 * @return {DocumentationParts} Success
		 */
		GetDocumentationParts(restapi_id: string, type: DocumentationPartType, name: string, path: string, position: string, limit: number, locationStatus: LocationStatusType, headersHandler?: () => {[header: string]: string}): Promise<DocumentationParts> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/parts&type=' + type + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&path=' + (path == null ? '' : encodeURIComponent(path)) + '&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit + '&locationStatus=' + locationStatus, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Put restapis/{restapi_id}/documentation/parts
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {PutMode} mode A query parameter to indicate whether to overwrite (<code>OVERWRITE</code>) any existing <a>DocumentationParts</a> definition or to merge (<code>MERGE</code>) the new definition into the existing one. The default value is <code>MERGE</code>.
		 * @param {boolean} failonwarnings A query parameter to specify whether to rollback the documentation importation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.
		 * @return {DocumentationPartIds} Success
		 */
		ImportDocumentationParts(restapi_id: string, mode: PutMode, failonwarnings: boolean, requestBody: ImportDocumentationPartsBody, headersHandler?: () => {[header: string]: string}): Promise<DocumentationPartIds> {
			return this.http.put('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/parts&mode=' + mode + '&failonwarnings=' + failonwarnings, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Post restapis/{restapi_id}/documentation/versions
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @return {void} 
		 */
		CreateDocumentationVersion(restapi_id: string, requestBody: CreateDocumentationVersionBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/versions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get restapis/{restapi_id}/documentation/versions
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {DocumentationVersions} Success
		 */
		GetDocumentationVersions(restapi_id: string, position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<DocumentationVersions> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/versions&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a new domain name.
		 * Post domainnames
		 * @return {void} 
		 */
		CreateDomainName(requestBody: CreateDomainNameBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('domainnames', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Represents a collection of <a>DomainName</a> resources.
		 * Get domainnames
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {DomainNames} Success
		 */
		GetDomainNames(position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<DomainNames> {
			return this.http.get('domainnames?position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Adds a new <a>Model</a> resource to an existing <a>RestApi</a> resource.
		 * Post restapis/{restapi_id}/models
		 * @param {string} restapi_id [Required] The <a>RestApi</a> identifier under which the <a>Model</a> will be created.
		 * @return {void} 
		 */
		CreateModel(restapi_id: string, requestBody: CreateModelBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/models', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes existing <a>Models</a> defined for a <a>RestApi</a> resource.
		 * Get restapis/{restapi_id}/models
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {Models} Success
		 */
		GetModels(restapi_id: string, position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<Models> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/models&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a <a>ReqeustValidator</a> of a given <a>RestApi</a>.
		 * Post restapis/{restapi_id}/requestvalidators
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @return {void} 
		 */
		CreateRequestValidator(restapi_id: string, requestBody: CreateRequestValidatorBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/requestvalidators', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.
		 * Get restapis/{restapi_id}/requestvalidators
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {RequestValidators} Success
		 */
		GetRequestValidators(restapi_id: string, position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<RequestValidators> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/requestvalidators&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a <a>Resource</a> resource.
		 * Post restapis/{restapi_id}/resources/{parent_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} parent_id [Required] The parent resource's identifier.
		 * @return {void} 
		 */
		CreateResource(restapi_id: string, parent_id: string, requestBody: CreateResourceBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (parent_id == null ? '' : encodeURIComponent(parent_id)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new <a>RestApi</a> resource.
		 * Post restapis
		 * @return {void} 
		 */
		CreateRestApi(requestBody: CreateRestApiBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('restapis', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the <a>RestApis</a> resources for your collection.
		 * Get restapis
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {RestApis} Success
		 */
		GetRestApis(position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<RestApis> {
			return this.http.get('restapis?position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a new <a>Stage</a> resource that references a pre-existing <a>Deployment</a> for the API.
		 * Post restapis/{restapi_id}/stages
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @return {void} 
		 */
		CreateStage(restapi_id: string, requestBody: CreateStageBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more <a>Stage</a> resources.
		 * Get restapis/{restapi_id}/stages
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} deploymentId The stages' deployment identifiers.
		 * @return {Stages} Success
		 */
		GetStages(restapi_id: string, deploymentId: string, headersHandler?: () => {[header: string]: string}): Promise<Stages> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages&deploymentId=' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload.
		 * Post usageplans
		 * @return {void} 
		 */
		CreateUsagePlan(requestBody: CreateUsagePlanBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('usageplans', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all the usage plans of the caller's account.
		 * Get usageplans
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {string} keyId The identifier of the API key associated with the usage plans.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {UsagePlans} Success
		 */
		GetUsagePlans(position: string, keyId: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<UsagePlans> {
			return this.http.get('usageplans?position=' + (position == null ? '' : encodeURIComponent(position)) + '&keyId=' + (keyId == null ? '' : encodeURIComponent(keyId)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a usage plan key for adding an existing API key to a usage plan.
		 * Post usageplans/{usageplanId}/keys
		 * @param {string} usageplanId [Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-created <a>UsagePlanKey</a> resource representing a plan customer.
		 * @return {void} 
		 */
		CreateUsagePlanKey(usageplanId: string, requestBody: CreateUsagePlanKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)) + '/keys', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all the usage plan keys representing the API keys added to a specified usage plan.
		 * Get usageplans/{usageplanId}/keys
		 * @param {string} usageplanId [Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-retrieved <a>UsagePlanKey</a> resource representing a plan customer.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @param {string} name A query parameter specifying the name of the to-be-returned usage plan keys.
		 * @return {UsagePlanKeys} Success
		 */
		GetUsagePlanKeys(usageplanId: string, position: string, limit: number, name: string, headersHandler?: () => {[header: string]: string}): Promise<UsagePlanKeys> {
			return this.http.get('usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)) + '/keys&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit + '&name=' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.
		 * Post vpclinks
		 * @return {void} 
		 */
		CreateVpcLink(requestBody: CreateVpcLinkBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('vpclinks', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the <a>VpcLinks</a> collection under the caller's account in a selected region.
		 * Get vpclinks
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {VpcLinks} Success
		 */
		GetVpcLinks(position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<VpcLinks> {
			return this.http.get('vpclinks?position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes the <a>ApiKey</a> resource.
		 * Delete apikeys/{api_Key}
		 * @param {string} api_Key [Required] The identifier of the <a>ApiKey</a> resource to be deleted.
		 * @return {void} 
		 */
		DeleteApiKey(api_Key: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('apikeys/' + (api_Key == null ? '' : encodeURIComponent(api_Key)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets information about the current <a>ApiKey</a> resource.
		 * Get apikeys/{api_Key}
		 * @param {string} api_Key [Required] The identifier of the <a>ApiKey</a> resource.
		 * @param {boolean} includeValue A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains the key value.
		 * @return {ApiKey} Success
		 */
		GetApiKey(api_Key: string, includeValue: boolean, headersHandler?: () => {[header: string]: string}): Promise<ApiKey> {
			return this.http.get('apikeys/' + (api_Key == null ? '' : encodeURIComponent(api_Key)) + '&includeValue=' + includeValue, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Deletes an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/delete-authorizer.html">AWS CLI</a></div>
		 * Delete restapis/{restapi_id}/authorizers/{authorizer_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} authorizer_id [Required] The identifier of the <a>Authorizer</a> resource.
		 * @return {void} 
		 */
		DeleteAuthorizer(restapi_id: string, authorizer_id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/authorizers/' + (authorizer_id == null ? '' : encodeURIComponent(authorizer_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Describe an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizer.html">AWS CLI</a></div>
		 * Get restapis/{restapi_id}/authorizers/{authorizer_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} authorizer_id [Required] The identifier of the <a>Authorizer</a> resource.
		 * @return {Authorizer} Success
		 */
		GetAuthorizer(restapi_id: string, authorizer_id: string, headersHandler?: () => {[header: string]: string}): Promise<Authorizer> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/authorizers/' + (authorizer_id == null ? '' : encodeURIComponent(authorizer_id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Simulate the execution of an <a>Authorizer</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
		 * Post restapis/{restapi_id}/authorizers/{authorizer_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} authorizer_id [Required] Specifies a test invoke authorizer request's <a>Authorizer</a> ID.
		 * @return {TestInvokeAuthorizerResponse} Success
		 */
		TestInvokeAuthorizer(restapi_id: string, authorizer_id: string, requestBody: TestInvokeAuthorizerBody, headersHandler?: () => {[header: string]: string}): Promise<TestInvokeAuthorizerResponse> {
			return this.http.post('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/authorizers/' + (authorizer_id == null ? '' : encodeURIComponent(authorizer_id)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes the <a>BasePathMapping</a> resource.
		 * Delete domainnames/{domain_name}/basepathmappings/{base_path}
		 * @param {string} domain_name [Required] The domain name of the <a>BasePathMapping</a> resource to delete.
		 * @param {string} base_path <p>[Required] The base path name of the <a>BasePathMapping</a> resource to delete.</p> <p>To specify an empty base path, set this parameter to <code>'(none)'</code>.</p>
		 * @return {void} 
		 */
		DeleteBasePathMapping(domain_name: string, base_path: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '/basepathmappings/' + (base_path == null ? '' : encodeURIComponent(base_path)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describe a <a>BasePathMapping</a> resource.
		 * Get domainnames/{domain_name}/basepathmappings/{base_path}
		 * @param {string} domain_name [Required] The domain name of the <a>BasePathMapping</a> resource to be described.
		 * @param {string} base_path [Required] The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify any base path name after the domain name.
		 * @return {BasePathMapping} Success
		 */
		GetBasePathMapping(domain_name: string, base_path: string, headersHandler?: () => {[header: string]: string}): Promise<BasePathMapping> {
			return this.http.get('domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '/basepathmappings/' + (base_path == null ? '' : encodeURIComponent(base_path)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes the <a>ClientCertificate</a> resource.
		 * Delete clientcertificates/{clientcertificate_id}
		 * @param {string} clientcertificate_id [Required] The identifier of the <a>ClientCertificate</a> resource to be deleted.
		 * @return {void} 
		 */
		DeleteClientCertificate(clientcertificate_id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('clientcertificates/' + (clientcertificate_id == null ? '' : encodeURIComponent(clientcertificate_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets information about the current <a>ClientCertificate</a> resource.
		 * Get clientcertificates/{clientcertificate_id}
		 * @param {string} clientcertificate_id [Required] The identifier of the <a>ClientCertificate</a> resource to be described.
		 * @return {ClientCertificate} Success
		 */
		GetClientCertificate(clientcertificate_id: string, headersHandler?: () => {[header: string]: string}): Promise<ClientCertificate> {
			return this.http.get('clientcertificates/' + (clientcertificate_id == null ? '' : encodeURIComponent(clientcertificate_id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a <a>Deployment</a> resource. Deleting a deployment will only succeed if there are no <a>Stage</a> resources associated with it.
		 * Delete restapis/{restapi_id}/deployments/{deployment_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} deployment_id [Required] The identifier of the <a>Deployment</a> resource to delete.
		 * @return {void} 
		 */
		DeleteDeployment(restapi_id: string, deployment_id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/deployments/' + (deployment_id == null ? '' : encodeURIComponent(deployment_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets information about a <a>Deployment</a> resource.
		 * Get restapis/{restapi_id}/deployments/{deployment_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} deployment_id [Required] The identifier of the <a>Deployment</a> resource to get information about.
		 * @param {Array<String>} embed A query parameter to retrieve the specified embedded resources of the returned <a>Deployment</a> resource in the response. In a REST API call, this <code>embed</code> parameter value is a list of comma-separated strings, as in <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=var1,var2</code>. The SDK and other platform-dependent libraries might use a different format for the list. Currently, this request supports only retrieval of the embedded API summary this way. Hence, the parameter value must be a single-valued list containing only the <code>"apisummary"</code> string. For example, <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=apisummary</code>.
		 * @return {Deployment} Success
		 */
		GetDeployment(restapi_id: string, deployment_id: string, embed: Array<String>, headersHandler?: () => {[header: string]: string}): Promise<Deployment> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/deployments/' + (deployment_id == null ? '' : encodeURIComponent(deployment_id)) + '&' + embed.map(z => `embed=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Delete restapis/{restapi_id}/documentation/parts/{part_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} part_id [Required] The identifier of the to-be-deleted documentation part.
		 * @return {void} 
		 */
		DeleteDocumentationPart(restapi_id: string, part_id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/parts/' + (part_id == null ? '' : encodeURIComponent(part_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get restapis/{restapi_id}/documentation/parts/{part_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} part_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @return {DocumentationPart} Success
		 */
		GetDocumentationPart(restapi_id: string, part_id: string, headersHandler?: () => {[header: string]: string}): Promise<DocumentationPart> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/parts/' + (part_id == null ? '' : encodeURIComponent(part_id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Delete restapis/{restapi_id}/documentation/versions/{doc_version}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} doc_version [Required] The version identifier of a to-be-deleted documentation snapshot.
		 * @return {void} 
		 */
		DeleteDocumentationVersion(restapi_id: string, doc_version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/versions/' + (doc_version == null ? '' : encodeURIComponent(doc_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get restapis/{restapi_id}/documentation/versions/{doc_version}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} doc_version [Required] The version identifier of the to-be-retrieved documentation snapshot.
		 * @return {DocumentationVersion} Success
		 */
		GetDocumentationVersion(restapi_id: string, doc_version: string, headersHandler?: () => {[header: string]: string}): Promise<DocumentationVersion> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/versions/' + (doc_version == null ? '' : encodeURIComponent(doc_version)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes the <a>DomainName</a> resource.
		 * Delete domainnames/{domain_name}
		 * @param {string} domain_name [Required] The name of the <a>DomainName</a> resource to be deleted.
		 * @return {void} 
		 */
		DeleteDomainName(domain_name: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Represents a domain name that is contained in a simpler, more intuitive URL that can be called.
		 * Get domainnames/{domain_name}
		 * @param {string} domain_name [Required] The name of the <a>DomainName</a> resource.
		 * @return {DomainName} Success
		 */
		GetDomainName(domain_name: string, headersHandler?: () => {[header: string]: string}): Promise<DomainName> {
			return this.http.get('domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.
		 * Delete restapis/{restapi_id}/gatewayresponses/{response_type}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {GatewayResponseResponseType} response_type <p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>
		 * @return {void} 
		 */
		DeleteGatewayResponse(restapi_id: string, response_type: GatewayResponseResponseType, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/gatewayresponses/' + response_type, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.
		 * Get restapis/{restapi_id}/gatewayresponses/{response_type}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {GatewayResponseResponseType} response_type <p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>
		 * @return {GatewayResponse} Success
		 */
		GetGatewayResponse(restapi_id: string, response_type: GatewayResponseResponseType, headersHandler?: () => {[header: string]: string}): Promise<GatewayResponse> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/gatewayresponses/' + response_type, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.
		 * Put restapis/{restapi_id}/gatewayresponses/{response_type}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {GatewayResponseResponseType} response_type <p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>
		 * @return {void} 
		 */
		PutGatewayResponse(restapi_id: string, response_type: GatewayResponseResponseType, requestBody: PutGatewayResponseBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.put('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/gatewayresponses/' + response_type, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Represents a delete integration.
		 * Delete restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] Specifies a delete integration request's resource identifier.
		 * @param {string} http_method [Required] Specifies a delete integration request's HTTP method.
		 * @return {void} 
		 */
		DeleteIntegration(restapi_id: string, resource_id: string, http_method: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the integration settings.
		 * Get restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] Specifies a get integration request's resource identifier
		 * @param {string} http_method [Required] Specifies a get integration request's HTTP method.
		 * @return {Integration} Success
		 */
		GetIntegration(restapi_id: string, resource_id: string, http_method: string, headersHandler?: () => {[header: string]: string}): Promise<Integration> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Sets up a method's integration.
		 * Put restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] Specifies a put integration request's resource ID.
		 * @param {string} http_method [Required] Specifies a put integration request's HTTP method.
		 * @return {void} 
		 */
		PutIntegration(restapi_id: string, resource_id: string, http_method: string, requestBody: PutIntegrationBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.put('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Represents a delete integration response.
		 * Delete restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] Specifies a delete integration response request's resource identifier.
		 * @param {string} http_method [Required] Specifies a delete integration response request's HTTP method.
		 * @param {string} status_code [Required] Specifies a delete integration response request's status code.
		 * @return {void} 
		 */
		DeleteIntegrationResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Represents a get integration response.
		 * Get restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] Specifies a get integration response request's resource identifier.
		 * @param {string} http_method [Required] Specifies a get integration response request's HTTP method.
		 * @param {string} status_code [Required] Specifies a get integration response request's status code.
		 * @return {IntegrationResponse} Success
		 */
		GetIntegrationResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string, headersHandler?: () => {[header: string]: string}): Promise<IntegrationResponse> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Represents a put integration.
		 * Put restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] Specifies a put integration response request's resource identifier.
		 * @param {string} http_method [Required] Specifies a put integration response request's HTTP method.
		 * @param {string} status_code [Required] Specifies the status code that is used to map the integration response to an existing <a>MethodResponse</a>.
		 * @return {void} 
		 */
		PutIntegrationResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string, requestBody: PutIntegrationResponseBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.put('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing <a>Method</a> resource.
		 * Delete restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] The <a>Resource</a> identifier for the <a>Method</a> resource.
		 * @param {string} http_method [Required] The HTTP verb of the <a>Method</a> resource.
		 * @return {void} 
		 */
		DeleteMethod(restapi_id: string, resource_id: string, http_method: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describe an existing <a>Method</a> resource.
		 * Get restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] The <a>Resource</a> identifier for the <a>Method</a> resource.
		 * @param {string} http_method [Required] Specifies the method request's HTTP method type.
		 * @return {Method} Success
		 */
		GetMethod(restapi_id: string, resource_id: string, http_method: string, headersHandler?: () => {[header: string]: string}): Promise<Method> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Add a method to an existing <a>Resource</a> resource.
		 * Put restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] The <a>Resource</a> identifier for the new <a>Method</a> resource.
		 * @param {string} http_method [Required] Specifies the method request's HTTP method type.
		 * @return {void} 
		 */
		PutMethod(restapi_id: string, resource_id: string, http_method: string, requestBody: PutMethodBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.put('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Simulate the execution of a <a>Method</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.
		 * Post restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] Specifies a test invoke method request's resource ID.
		 * @param {string} http_method [Required] Specifies a test invoke method request's HTTP method.
		 * @return {TestInvokeMethodResponse} Success
		 */
		TestInvokeMethod(restapi_id: string, resource_id: string, http_method: string, requestBody: TestInvokeMethodBody, headersHandler?: () => {[header: string]: string}): Promise<TestInvokeMethodResponse> {
			return this.http.post('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes an existing <a>MethodResponse</a> resource.
		 * Delete restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] The <a>Resource</a> identifier for the <a>MethodResponse</a> resource.
		 * @param {string} http_method [Required] The HTTP verb of the <a>Method</a> resource.
		 * @param {string} status_code [Required] The status code identifier for the <a>MethodResponse</a> resource.
		 * @return {void} 
		 */
		DeleteMethodResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes a <a>MethodResponse</a> resource.
		 * Get restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] The <a>Resource</a> identifier for the <a>MethodResponse</a> resource.
		 * @param {string} http_method [Required] The HTTP verb of the <a>Method</a> resource.
		 * @param {string} status_code [Required] The status code for the <a>MethodResponse</a> resource.
		 * @return {MethodResponse} Success
		 */
		GetMethodResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string, headersHandler?: () => {[header: string]: string}): Promise<MethodResponse> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Adds a <a>MethodResponse</a> to an existing <a>Method</a> resource.
		 * Put restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] The <a>Resource</a> identifier for the <a>Method</a> resource.
		 * @param {string} http_method [Required] The HTTP verb of the <a>Method</a> resource.
		 * @param {string} status_code [Required] The method response's status code.
		 * @return {void} 
		 */
		PutMethodResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string, requestBody: PutMethodResponseBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.put('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a model.
		 * Delete restapis/{restapi_id}/models/{model_name}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} model_name [Required] The name of the model to delete.
		 * @return {void} 
		 */
		DeleteModel(restapi_id: string, model_name: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/models/' + (model_name == null ? '' : encodeURIComponent(model_name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes an existing model defined for a <a>RestApi</a> resource.
		 * Get restapis/{restapi_id}/models/{model_name}
		 * @param {string} restapi_id [Required] The <a>RestApi</a> identifier under which the <a>Model</a> exists.
		 * @param {string} model_name [Required] The name of the model as an identifier.
		 * @param {boolean} flatten A query parameter of a Boolean value to resolve (<code>true</code>) all external model references and returns a flattened model schema or not (<code>false</code>) The default is <code>false</code>.
		 * @return {Model} Success
		 */
		GetModel(restapi_id: string, model_name: string, flatten: boolean, headersHandler?: () => {[header: string]: string}): Promise<Model> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/models/' + (model_name == null ? '' : encodeURIComponent(model_name)) + '&flatten=' + flatten, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a <a>RequestValidator</a> of a given <a>RestApi</a>.
		 * Delete restapis/{restapi_id}/requestvalidators/{requestvalidator_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} requestvalidator_id [Required] The identifier of the <a>RequestValidator</a> to be deleted.
		 * @return {void} 
		 */
		DeleteRequestValidator(restapi_id: string, requestvalidator_id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/requestvalidators/' + (requestvalidator_id == null ? '' : encodeURIComponent(requestvalidator_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.
		 * Get restapis/{restapi_id}/requestvalidators/{requestvalidator_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} requestvalidator_id [Required] The identifier of the <a>RequestValidator</a> to be retrieved.
		 * @return {RequestValidator} Success
		 */
		GetRequestValidator(restapi_id: string, requestvalidator_id: string, headersHandler?: () => {[header: string]: string}): Promise<RequestValidator> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/requestvalidators/' + (requestvalidator_id == null ? '' : encodeURIComponent(requestvalidator_id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a <a>Resource</a> resource.
		 * Delete restapis/{restapi_id}/resources/{resource_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] The identifier of the <a>Resource</a> resource.
		 * @return {void} 
		 */
		DeleteResource(restapi_id: string, resource_id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists information about a resource.
		 * Get restapis/{restapi_id}/resources/{resource_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} resource_id [Required] The identifier for the <a>Resource</a> resource.
		 * @param {Array<String>} embed A query parameter to retrieve the specified resources embedded in the returned <a>Resource</a> representation in the response. This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded <a>Method</a> resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/{restapi_id}/resources/{resource_id}?embed=methods</code>.
		 * @return {Resource} Success
		 */
		GetResource(restapi_id: string, resource_id: string, embed: Array<String>, headersHandler?: () => {[header: string]: string}): Promise<Resource> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '&' + embed.map(z => `embed=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes the specified API.
		 * Delete restapis/{restapi_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @return {void} 
		 */
		DeleteRestApi(restapi_id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the <a>RestApi</a> resource in the collection.
		 * Get restapis/{restapi_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @return {RestApi} Success
		 */
		GetRestApi(restapi_id: string, headersHandler?: () => {[header: string]: string}): Promise<RestApi> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * A feature of the API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.
		 * Put restapis/{restapi_id}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {PutMode} mode The <code>mode</code> query parameter to specify the update mode. Valid values are "merge" and "overwrite". By default, the update mode is "merge".
		 * @param {boolean} failonwarnings A query parameter to indicate whether to rollback the API update (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.
		 * @param {string} parameters Custom header parameters as part of the request. For example, to exclude <a>DocumentationParts</a> from an imported API, set <code>ignore=documentation</code> as a <code>parameters</code> value, as in the AWS CLI command of <code>aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'</code>.
		 * @return {RestApi} Success
		 */
		PutRestApi(restapi_id: string, mode: PutMode, failonwarnings: boolean, parameters: string, requestBody: PutRestApiBody, headersHandler?: () => {[header: string]: string}): Promise<RestApi> {
			return this.http.put('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '&mode=' + mode + '&failonwarnings=' + failonwarnings + '&parameters=' + (parameters == null ? '' : encodeURIComponent(parameters)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a <a>Stage</a> resource.
		 * Delete restapis/{restapi_id}/stages/{stage_name}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} stage_name [Required] The name of the <a>Stage</a> resource to delete.
		 * @return {void} 
		 */
		DeleteStage(restapi_id: string, stage_name: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages/' + (stage_name == null ? '' : encodeURIComponent(stage_name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets information about a <a>Stage</a> resource.
		 * Get restapis/{restapi_id}/stages/{stage_name}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} stage_name [Required] The name of the <a>Stage</a> resource to get information about.
		 * @return {Stage} Success
		 */
		GetStage(restapi_id: string, stage_name: string, headersHandler?: () => {[header: string]: string}): Promise<Stage> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages/' + (stage_name == null ? '' : encodeURIComponent(stage_name)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a usage plan of a given plan Id.
		 * Delete usageplans/{usageplanId}
		 * @param {string} usageplanId [Required] The Id of the to-be-deleted usage plan.
		 * @return {void} 
		 */
		DeleteUsagePlan(usageplanId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a usage plan of a given plan identifier.
		 * Get usageplans/{usageplanId}
		 * @param {string} usageplanId [Required] The identifier of the <a>UsagePlan</a> resource to be retrieved.
		 * @return {UsagePlan} Success
		 */
		GetUsagePlan(usageplanId: string, headersHandler?: () => {[header: string]: string}): Promise<UsagePlan> {
			return this.http.get('usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a usage plan key and remove the underlying API key from the associated usage plan.
		 * Delete usageplans/{usageplanId}/keys/{keyId}
		 * @param {string} usageplanId [Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-deleted <a>UsagePlanKey</a> resource representing a plan customer.
		 * @param {string} keyId [Required] The Id of the <a>UsagePlanKey</a> resource to be deleted.
		 * @return {void} 
		 */
		DeleteUsagePlanKey(usageplanId: string, keyId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)) + '/keys/' + (keyId == null ? '' : encodeURIComponent(keyId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a usage plan key of a given key identifier.
		 * Get usageplans/{usageplanId}/keys/{keyId}
		 * @param {string} usageplanId [Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-retrieved <a>UsagePlanKey</a> resource representing a plan customer.
		 * @param {string} keyId [Required] The key Id of the to-be-retrieved <a>UsagePlanKey</a> resource representing a plan customer.
		 * @return {UsagePlanKey} Success
		 */
		GetUsagePlanKey(usageplanId: string, keyId: string, headersHandler?: () => {[header: string]: string}): Promise<UsagePlanKey> {
			return this.http.get('usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)) + '/keys/' + (keyId == null ? '' : encodeURIComponent(keyId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes an existing <a>VpcLink</a> of a specified identifier.
		 * Delete vpclinks/{vpclink_id}
		 * @param {string} vpclink_id [Required] The identifier of the <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.
		 * @return {void} 
		 */
		DeleteVpcLink(vpclink_id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('vpclinks/' + (vpclink_id == null ? '' : encodeURIComponent(vpclink_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a specified VPC link under the caller's account in a region.
		 * Get vpclinks/{vpclink_id}
		 * @param {string} vpclink_id [Required] The identifier of the <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.
		 * @return {VpcLink} Success
		 */
		GetVpcLink(vpclink_id: string, headersHandler?: () => {[header: string]: string}): Promise<VpcLink> {
			return this.http.get('vpclinks/' + (vpclink_id == null ? '' : encodeURIComponent(vpclink_id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Flushes all authorizer cache entries on a stage.
		 * Delete restapis/{restapi_id}/stages/{stage_name}/cache/authorizers
		 * @param {string} restapi_id The string identifier of the associated <a>RestApi</a>.
		 * @param {string} stage_name The name of the stage to flush.
		 * @return {void} 
		 */
		FlushStageAuthorizersCache(restapi_id: string, stage_name: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages/' + (stage_name == null ? '' : encodeURIComponent(stage_name)) + '/cache/authorizers', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Flushes a stage's cache.
		 * Delete restapis/{restapi_id}/stages/{stage_name}/cache/data
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} stage_name [Required] The name of the stage to flush its cache.
		 * @return {void} 
		 */
		FlushStageCache(restapi_id: string, stage_name: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages/' + (stage_name == null ? '' : encodeURIComponent(stage_name)) + '/cache/data', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Generates a <a>ClientCertificate</a> resource.
		 * Post clientcertificates
		 * @return {void} 
		 */
		GenerateClientCertificate(requestBody: GenerateClientCertificateBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('clientcertificates', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a collection of <a>ClientCertificate</a> resources.
		 * Get clientcertificates
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {ClientCertificates} Success
		 */
		GetClientCertificates(position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<ClientCertificates> {
			return this.http.get('clientcertificates?position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets information about the current <a>Account</a> resource.
		 * Get account
		 * @return {Account} Success
		 */
		GetAccount(headersHandler?: () => {[header: string]: string}): Promise<Account> {
			return this.http.get('account', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Exports a deployed version of a <a>RestApi</a> in a specified format.
		 * Get restapis/{restapi_id}/stages/{stage_name}/exports/{export_type}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} stage_name [Required] The name of the <a>Stage</a> that will be exported.
		 * @param {string} export_type [Required] The type of export. Acceptable values are 'oas30' for OpenAPI 3.0.x and 'swagger' for Swagger/OpenAPI 2.0.
		 * @param {string} parameters A key-value map of query string parameters that specify properties of the export, depending on the requested <code>exportType</code>. For <code>exportType</code> <code>oas30</code> and <code>swagger</code>, any combination of the following parameters are supported: <code>extensions='integrations'</code> or <code>extensions='apigateway'</code> will export the API with x-amazon-apigateway-integration extensions. <code>extensions='authorizers'</code> will export the API with x-amazon-apigateway-authorizer extensions. <code>postman</code> will export the API with Postman extensions, allowing for import to the Postman tool
		 * @return {ExportResponse} Success
		 */
		GetExport(restapi_id: string, stage_name: string, export_type: string, parameters: string, headersHandler?: () => {[header: string]: string}): Promise<ExportResponse> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages/' + (stage_name == null ? '' : encodeURIComponent(stage_name)) + '/exports/' + (export_type == null ? '' : encodeURIComponent(export_type)) + '&parameters=' + (parameters == null ? '' : encodeURIComponent(parameters)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.
		 * Get restapis/{restapi_id}/gatewayresponses
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} position The current pagination position in the paged result set. The <a>GatewayResponse</a> collection does not support pagination and the position does not apply here.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500. The <a>GatewayResponses</a> collection does not support pagination and the limit does not apply here.
		 * @return {GatewayResponses} Success
		 */
		GetGatewayResponses(restapi_id: string, position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<GatewayResponses> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/gatewayresponses&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Generates a sample mapping template that can be used to transform a payload into the structure of a model.
		 * Get restapis/{restapi_id}/models/{model_name}/default_template
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} model_name [Required] The name of the model for which to generate a template.
		 * @return {Template} Success
		 */
		GetModelTemplate(restapi_id: string, model_name: string, headersHandler?: () => {[header: string]: string}): Promise<Template> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/models/' + (model_name == null ? '' : encodeURIComponent(model_name)) + '/default_template', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists information about a collection of <a>Resource</a> resources.
		 * Get restapis/{restapi_id}/resources
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @param {Array<String>} embed A query parameter used to retrieve the specified resources embedded in the returned <a>Resources</a> resource in the response. This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded <a>Method</a> resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/{restapi_id}/resources?embed=methods</code>.
		 * @return {Resources} Success
		 */
		GetResources(restapi_id: string, position: string, limit: number, embed: Array<String>, headersHandler?: () => {[header: string]: string}): Promise<Resources> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit + '&' + embed.map(z => `embed=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Generates a client SDK for a <a>RestApi</a> and <a>Stage</a>.
		 * Get restapis/{restapi_id}/stages/{stage_name}/sdks/{sdk_type}
		 * @param {string} restapi_id [Required] The string identifier of the associated <a>RestApi</a>.
		 * @param {string} stage_name [Required] The name of the <a>Stage</a> that the SDK will use.
		 * @param {string} sdk_type [Required] The language for the generated SDK. Currently <code>java</code>, <code>javascript</code>, <code>android</code>, <code>objectivec</code> (for iOS), <code>swift</code> (for iOS), and <code>ruby</code> are supported.
		 * @param {string} parameters A string-to-string key-value map of query parameters <code>sdkType</code>-dependent properties of the SDK. For <code>sdkType</code> of <code>objectivec</code> or <code>swift</code>, a parameter named <code>classPrefix</code> is required. For <code>sdkType</code> of <code>android</code>, parameters named <code>groupId</code>, <code>artifactId</code>, <code>artifactVersion</code>, and <code>invokerPackage</code> are required. For <code>sdkType</code> of <code>java</code>, parameters named <code>serviceName</code> and <code>javaPackageName</code> are required. 
		 * @return {SdkResponse} Success
		 */
		GetSdk(restapi_id: string, stage_name: string, sdk_type: string, parameters: string, headersHandler?: () => {[header: string]: string}): Promise<SdkResponse> {
			return this.http.get('restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages/' + (stage_name == null ? '' : encodeURIComponent(stage_name)) + '/sdks/' + (sdk_type == null ? '' : encodeURIComponent(sdk_type)) + '&parameters=' + (parameters == null ? '' : encodeURIComponent(parameters)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Get sdktypes/{sdktype_id}
		 * @param {string} sdktype_id [Required] The identifier of the queried <a>SdkType</a> instance.
		 * @return {SdkType} Success
		 */
		GetSdkType(sdktype_id: string, headersHandler?: () => {[header: string]: string}): Promise<SdkType> {
			return this.http.get('sdktypes/' + (sdktype_id == null ? '' : encodeURIComponent(sdktype_id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Get sdktypes
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {SdkTypes} Success
		 */
		GetSdkTypes(position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<SdkTypes> {
			return this.http.get('sdktypes?position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets the <a>Tags</a> collection for a given resource.
		 * Get tags/{resource_arn}
		 * @param {string} resource_arn [Required] The ARN of a resource that can be tagged.
		 * @param {string} position (Not currently supported) The current pagination position in the paged result set.
		 * @param {number} limit (Not currently supported) The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {Tags} Success
		 */
		GetTags(resource_arn: string, position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<Tags> {
			return this.http.get('tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Adds or updates a tag on a given resource.
		 * Put tags/{resource_arn}
		 * @param {string} resource_arn [Required] The ARN of a resource that can be tagged.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.put('tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the usage data of a usage plan in a specified time interval.
		 * Get usageplans/{usageplanId}/usage#startDate&endDate
		 * @param {string} usageplanId [Required] The Id of the usage plan associated with the usage data.
		 * @param {string} keyId The Id of the API key associated with the resultant usage data.
		 * @param {string} startDate [Required] The starting date (e.g., 2016-01-01) of the usage data.
		 * @param {string} endDate [Required] The ending date (e.g., 2016-12-31) of the usage data.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 * @return {Usage} Success
		 */
		GetUsage(usageplanId: string, keyId: string, startDate: string, endDate: string, position: string, limit: number, headersHandler?: () => {[header: string]: string}): Promise<Usage> {
			return this.http.get('usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)) + '/usage#startDate&endDate&keyId=' + (keyId == null ? '' : encodeURIComponent(keyId)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Import API keys from an external source, such as a CSV-formatted file.
		 * Post apikeys#mode=import&format
		 * @param {ApiKeysFormat} format A query parameter to specify the input format to imported API keys. Currently, only the <code>csv</code> format is supported.
		 * @param {boolean} failonwarnings A query parameter to indicate whether to rollback <a>ApiKey</a> importation (<code>true</code>) or not (<code>false</code>) when error is encountered.
		 * @return {void} 
		 */
		ImportApiKeys(format: ApiKeysFormat, failonwarnings: boolean, mode: string, requestBody: ImportApiKeysBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('apikeys#mode=import&format?format=' + format + '&failonwarnings=' + failonwarnings + '&mode=' + (mode == null ? '' : encodeURIComponent(mode)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A feature of the API Gateway control service for creating a new API from an external API definition file.
		 * Post restapis#mode=import
		 * @param {boolean} failonwarnings A query parameter to indicate whether to rollback the API creation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.
		 * @param {string} parameters <p>A key-value map of context-specific query string parameters specifying the behavior of different API importing operations. The following shows operation-specific parameters and their supported values.</p> <p> To exclude <a>DocumentationParts</a> from the import, set <code>parameters</code> as <code>ignore=documentation</code>.</p> <p> To configure the endpoint type, set <code>parameters</code> as <code>endpointConfigurationTypes=EDGE</code>, <code>endpointConfigurationTypes=REGIONAL</code>, or <code>endpointConfigurationTypes=PRIVATE</code>. The default endpoint type is <code>EDGE</code>.</p> <p> To handle imported <code>basepath</code>, set <code>parameters</code> as <code>basepath=ignore</code>, <code>basepath=prepend</code> or <code>basepath=split</code>.</p> <p>For example, the AWS CLI command to exclude documentation from the imported API is:</p> <pre><code>aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'</code></pre> <p>The AWS CLI command to set the regional endpoint on the imported API is:</p> <pre><code>aws apigateway import-rest-api --parameters endpointConfigurationTypes=REGIONAL --body 'file:///path/to/imported-api-body.json'</code></pre>
		 * @return {void} 
		 */
		ImportRestApi(failonwarnings: boolean, parameters: string, mode: string, requestBody: ImportRestApiBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('restapis#mode=import?failonwarnings=' + failonwarnings + '&parameters=' + (parameters == null ? '' : encodeURIComponent(parameters)) + '&mode=' + (mode == null ? '' : encodeURIComponent(mode)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from a given resource.
		 * Delete tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn [Required] The ARN of a resource that can be tagged.
		 * @param {Array<String>} tagKeys [Required] The Tag keys to delete.
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<String>, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface CreateApiKeyBody {

		/**The name of the <a>ApiKey</a>. */
		name?: string;

		/**The description of the <a>ApiKey</a>. */
		description?: string;

		/**Specifies whether the <a>ApiKey</a> can be used by callers. */
		enabled?: boolean;

		/**Specifies whether (<code>true</code>) or not (<code>false</code>) the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used. */
		generateDistinctId?: boolean;

		/**Specifies a value of the API key. */
		value?: string;

		/**DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key. */
		stageKeys?: Array<StageKey>;

		/**An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace. */
		customerId?: string;

		/**The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: string;
	}

	export interface CreateAuthorizerBody {

		/**[Required] The name of the authorizer. */
		name: string;

		/**The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool. */
		type: CreateAuthorizerBodyType;

		/**A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined. */
		providerARNs?: Array<ProviderARN>;

		/**Optional customer-defined field, used in OpenAPI imports and exports without functional impact. */
		authType?: string;

		/**Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>. */
		authorizerUri?: string;

		/**Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. */
		authorizerCredentials?: string;

		/**The identity source for which authorization is requested. <ul><li>For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is <code>method.request.header.Auth</code>.</li><li>For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth, method.request.querystring.Name</code>. These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.</li></ul> */
		identitySource?: string;

		/**A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer. */
		identityValidationExpression?: string;

		/**The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour. */
		authorizerResultTtlInSeconds?: number;
	}

	export enum CreateAuthorizerBodyType { TOKEN = 0, REQUEST = 1, COGNITO_USER_POOLS = 2 }

	export interface CreateBasePathMappingBody {

		/**The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify a base path name after the domain name. */
		basePath?: string;

		/**[Required] The string identifier of the associated <a>RestApi</a>. */
		restApiId: string;

		/**The name of the API's stage that you want to use for this mapping. Specify '(none)' if you want callers to explicitly specify the stage name after any base path name. */
		stage?: string;
	}

	export interface CreateDeploymentBody {

		/**The name of the <a>Stage</a> resource for the <a>Deployment</a> resource to create. */
		stageName?: string;

		/**The description of the <a>Stage</a> resource for the <a>Deployment</a> resource to create. */
		stageDescription?: string;

		/**The description for the <a>Deployment</a> resource to create. */
		description?: string;

		/**Enables a cache cluster for the <a>Stage</a> resource specified in the input. */
		cacheClusterEnabled?: boolean;

		/**Returns the size of the <b>CacheCluster</b>. */
		cacheClusterSize?: CreateDeploymentBodyCacheClusterSize;

		/**A map that defines the stage variables for the <a>Stage</a> resource that is associated with the new deployment. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>. */
		variables?: string;

		/**The input configuration for a canary deployment. */
		canarySettings?: string;

		/**Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>. */
		tracingEnabled?: boolean;
	}

	export enum CreateDeploymentBodyCacheClusterSize { 0.5 = 0, 1.6 = 1, 6.1 = 2, 13.5 = 3, 28.4 = 4, 58.2 = 5, 118 = 6, 237 = 7 }

	export interface CreateDocumentationPartBody {

		/**Specifies the target API entity to which the documentation applies. */
		location: string;

		/**[Required] The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published. */
		properties: string;
	}

	export interface ImportDocumentationPartsBody {

		/**[Required] Raw byte array representing the to-be-imported documentation parts. To import from an OpenAPI file, this is a JSON object. */
		body: string;
	}

	export interface CreateDocumentationVersionBody {

		/**[Required] The version identifier of the new snapshot. */
		documentationVersion: string;

		/**The stage name to be associated with the new documentation snapshot. */
		stageName?: string;

		/**A description about the new documentation snapshot. */
		description?: string;
	}

	export interface CreateDomainNameBody {

		/**[Required] The name of the <a>DomainName</a> resource. */
		domainName: string;

		/**The user-friendly name of the certificate that will be used by edge-optimized endpoint for this domain name. */
		certificateName?: string;

		/**[Deprecated] The body of the server certificate that will be used by edge-optimized endpoint for this domain name provided by your certificate authority. */
		certificateBody?: string;

		/**[Deprecated] Your edge-optimized endpoint's domain name certificate's private key. */
		certificatePrivateKey?: string;

		/**[Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path. */
		certificateChain?: string;

		/**The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source. */
		certificateArn?: string;

		/**The user-friendly name of the certificate that will be used by regional endpoint for this domain name. */
		regionalCertificateName?: string;

		/**The reference to an AWS-managed certificate that will be used by regional endpoint for this domain name. AWS Certificate Manager is the only supported source. */
		regionalCertificateArn?: string;

		/**The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. */
		endpointConfiguration?: string;

		/**The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: string;

		/**The Transport Layer Security (TLS) version + cipher suite for this <a>DomainName</a>. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>. */
		securityPolicy?: CreateDomainNameBodySecurityPolicy;
	}

	export enum CreateDomainNameBodySecurityPolicy { TLS_1_0 = 0, TLS_1_2 = 1 }

	export interface CreateModelBody {

		/**[Required] The name of the model. Must be alphanumeric. */
		name: string;

		/**The description of the model. */
		description?: string;

		/**The schema for the model. For <code>application/json</code> models, this should be <a href="https://tools.ietf.org/html/draft-zyp-json-schema-04" target="_blank">JSON schema draft 4</a> model. */
		schema?: string;

		/**[Required] The content-type for the model. */
		contentType: string;
	}

	export interface CreateRequestValidatorBody {

		/**The name of the to-be-created <a>RequestValidator</a>. */
		name?: string;

		/**A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (<code>true</code>) or not (<code>false</code>). */
		validateRequestBody?: boolean;

		/**A Boolean flag to indicate whether to validate request parameters, <code>true</code>, or not <code>false</code>. */
		validateRequestParameters?: boolean;
	}

	export interface CreateResourceBody {

		/**The last path segment for this resource. */
		pathPart: string;
	}

	export interface CreateRestApiBody {

		/**[Required] The name of the <a>RestApi</a>. */
		name: string;

		/**The description of the <a>RestApi</a>. */
		description?: string;

		/**A version identifier for the API. */
		version?: string;

		/**The ID of the <a>RestApi</a> that you want to clone from. */
		cloneFrom?: string;

		/**The list of binary media types supported by the <a>RestApi</a>. By default, the <a>RestApi</a> supports only UTF-8-encoded text payloads. */
		binaryMediaTypes?: Array<String>;

		/**A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size. */
		minimumCompressionSize?: number;

		/**The source of the API key for metering requests according to a usage plan. Valid values are: <ul><li><code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. </li><li><code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.</li></ul> */
		apiKeySource?: CreateRestApiBodyApiKeySource;

		/**The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. */
		endpointConfiguration?: string;

		/**A stringified JSON policy document that applies to this RestApi regardless of the caller and <a>Method</a> configuration. */
		policy?: string;

		/**The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: string;
	}

	export enum CreateRestApiBodyApiKeySource { HEADER = 0, AUTHORIZER = 1 }

	export interface CreateStageBody {

		/**[Required] The name for the <a>Stage</a> resource. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters. */
		stageName: string;

		/**[Required] The identifier of the <a>Deployment</a> resource for the <a>Stage</a> resource. */
		deploymentId: string;

		/**The description of the <a>Stage</a> resource. */
		description?: string;

		/**Whether cache clustering is enabled for the stage. */
		cacheClusterEnabled?: boolean;

		/**Returns the size of the <b>CacheCluster</b>. */
		cacheClusterSize?: CreateStageBodyCacheClusterSize;

		/**A map that defines the stage variables for the new <a>Stage</a> resource. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>. */
		variables?: string;

		/**The version of the associated API documentation. */
		documentationVersion?: string;

		/**Configuration settings of a canary deployment. */
		canarySettings?: string;

		/**Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>. */
		tracingEnabled?: boolean;

		/**The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: string;
	}

	export enum CreateStageBodyCacheClusterSize { 0.5 = 0, 1.6 = 1, 6.1 = 2, 13.5 = 3, 28.4 = 4, 58.2 = 5, 118 = 6, 237 = 7 }

	export interface CreateUsagePlanBody {

		/**[Required] The name of the usage plan. */
		name: string;

		/**The description of the usage plan. */
		description?: string;

		/**The associated API stages of the usage plan. */
		apiStages?: Array<ApiStage>;

		/**The API request rate limits. */
		throttle?: string;

		/**Quotas configured for a usage plan. */
		quota?: string;

		/**The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: string;
	}

	export interface CreateUsagePlanKeyBody {

		/**[Required] The identifier of a <a>UsagePlanKey</a> resource for a plan customer. */
		keyId: string;

		/**[Required] The type of a <a>UsagePlanKey</a> resource for a plan customer. */
		keyType: string;
	}

	export interface CreateVpcLinkBody {

		/**[Required] The name used to label and identify the VPC link. */
		name: string;

		/**The description of the VPC link. */
		description?: string;

		/**[Required] The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same AWS account of the API owner. */
		targetArns: Array<String>;

		/**The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: string;
	}

	export interface TestInvokeAuthorizerBody {

		/**[Required] A key-value map of headers to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, should be specified. */
		headers?: string;

		/**[Optional] The headers as a map from string to list of values to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, may be specified. */
		multiValueHeaders?: string;

		/**[Optional] The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters. */
		pathWithQueryString?: string;

		/**[Optional] The simulated request body of an incoming invocation request. */
		body?: string;

		/**A key-value map of stage variables to simulate an invocation on a deployed <a>Stage</a>. */
		stageVariables?: string;

		/**[Optional] A key-value map of additional context variables. */
		additionalContext?: string;
	}

	export interface PutGatewayResponseBody {

		/**
		 * The status code.
		 * Pattern: [1-5]\d\d
		 */
		statusCode?: string;

		/**<p><p>Response parameters (paths, query strings and headers) of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p></p> */
		responseParameters?: string;

		/**<p><p>Response templates of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p></p> */
		responseTemplates?: string;
	}

	export interface PutIntegrationBody {

		/**The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration. */
		type: PutIntegrationBodyType;

		/**Specifies a put integration HTTP method. When the integration type is HTTP or AWS, this field is required. */
		httpMethod?: string;

		/**<p>Specifies Uniform Resource Identifier (URI) of the integration endpoint.</p> <ul> <li><p> For <code>HTTP</code> or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the <a target="_blank" href="https://en.wikipedia.org/wiki/Uniform_Resource_Identifier">RFC-3986 specification</a>, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. </p> </li> <li><p> For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}</code>. Here, <code>{Region}</code> is the API Gateway region (e.g., <code>us-east-1</code>); <code>{service}</code> is the name of the integrated AWS service (e.g., <code>s3</code>); and <code>{subdomain}</code> is a designated subdomain supported by certain AWS service for fast host-name lookup. <code>action</code> can be used for an AWS service action-based API, using an <code>Action={name}&amp;{p1}={v1}&amp;p2={v2}...</code> query string. The ensuing <code>{service_api}</code> refers to a supported action <code>{name}</code> plus any required input parameters. Alternatively, <code>path</code> can be used for an AWS service path-based API. The ensuing <code>service_api</code> refers to the path to an AWS service resource, including the region of the integrated AWS service, if applicable. For example, for integration with the S3 API of <code><a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html">GetObject</a></code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&amp;Bucket={bucket}&amp;Key={key}</code> or <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code></p> </li></ul> */
		uri?: string;

		/**The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>. */
		connectionType?: PutIntegrationBodyConnectionType;

		/**The (<a href="https://docs.aws.amazon.com/apigateway/api-reference/resource/vpc-link/#id"><code>id</code></a>) of the <a>VpcLink</a> used for the integration when <code>connectionType=VPC_LINK</code> and undefined, otherwise. */
		connectionId?: string;

		/**Specifies whether credentials are required for a put integration. */
		credentials?: string;

		/**A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name. */
		requestParameters?: string;

		/**Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. */
		requestTemplates?: string;

		/**<p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the <code>requestTemplates</code> property on the Integration resource. There are three valid values: <code>WHEN_NO_MATCH</code>, <code>WHEN_NO_TEMPLATES</code>, and <code>NEVER</code>. </p> <ul> <li><p><code>WHEN_NO_MATCH</code> passes the request body for unmapped content types through to the integration back end without transformation.</p></li> <li><p><code>NEVER</code> rejects unmapped content types with an HTTP 415 'Unsupported Media Type' response.</p></li> <li><p><code>WHEN_NO_TEMPLATES</code> allows pass-through when the integration has NO content types mapped to templates. However if there is at least one content type defined, unmapped content types will be rejected with the same 415 response.</p></li> </ul> */
		passthroughBehavior?: string;

		/**A list of request parameters whose values are to be cached. */
		cacheNamespace?: string;

		/**An API-specific tag group of related cached parameters. */
		cacheKeyParameters?: Array<String>;

		/**<p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <ul> <li><p><code>CONVERT_TO_BINARY</code>: Converts a request payload from a Base64-encoded string to the corresponding binary blob.</p></li> <li><p><code>CONVERT_TO_TEXT</code>: Converts a request payload from a binary blob to a Base64-encoded string.</p></li> </ul> <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehavior</code> is configured to support payload pass-through.</p> */
		contentHandling?: PutIntegrationBodyContentHandling;

		/**Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds. */
		timeoutInMillis?: number;
		tlsConfig?: string;
	}

	export enum PutIntegrationBodyType { HTTP = 0, AWS = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }

	export enum PutIntegrationBodyConnectionType { INTERNET = 0, VPC_LINK = 1 }

	export enum PutIntegrationBodyContentHandling { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export interface PutIntegrationResponseBody {

		/**Specifies the selection pattern of a put integration response. */
		selectionPattern?: string;

		/**A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.{name}</code> or <code>integration.response.body.{JSON-expression}</code>, where <code>name</code> must be a valid and unique response header name and <code>JSON-expression</code> a valid JSON expression without the <code>$</code> prefix. */
		responseParameters?: string;

		/**Specifies a put integration response's templates. */
		responseTemplates?: string;

		/**<p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <ul> <li><p><code>CONVERT_TO_BINARY</code>: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p></li> <li><p><code>CONVERT_TO_TEXT</code>: Converts a response payload from a binary blob to a Base64-encoded string.</p></li> </ul> <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p> */
		contentHandling?: PutIntegrationResponseBodyContentHandling;
	}

	export enum PutIntegrationResponseBodyContentHandling { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export interface PutMethodBody {

		/**[Required] The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool. */
		authorizationType: string;

		/**Specifies the identifier of an <a>Authorizer</a> to use on this Method, if the type is CUSTOM or COGNITO_USER_POOLS. The authorizer identifier is generated by API Gateway when you created the authorizer. */
		authorizerId?: string;

		/**Specifies whether the method required a valid <a>ApiKey</a>. */
		apiKeyRequired?: boolean;

		/**A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example. */
		operationName?: string;

		/**A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key defines a method request parameter name matching the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>). The method request parameter names defined here are available in <a>Integration</a> to be mapped to integration request parameters or body-mapping templates. */
		requestParameters?: string;

		/**Specifies the <a>Model</a> resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a <a>Model</a> name as the value. */
		requestModels?: string;

		/**The identifier of a <a>RequestValidator</a> for validating the method request. */
		requestValidatorId?: string;

		/**A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		authorizationScopes?: Array<String>;
	}

	export interface TestInvokeMethodBody {

		/**The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters. */
		pathWithQueryString?: string;

		/**The simulated request body of an incoming invocation request. */
		body?: string;

		/**A key-value map of headers to simulate an incoming invocation request. */
		headers?: string;

		/**The headers as a map from string to list of values to simulate an incoming invocation request. */
		multiValueHeaders?: string;

		/**A <a>ClientCertificate</a> identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint. */
		clientCertificateId?: string;

		/**A key-value map of stage variables to simulate an invocation on a deployed <a>Stage</a>. */
		stageVariables?: string;
	}

	export interface PutMethodResponseBody {

		/**A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.) */
		responseParameters?: string;

		/**Specifies the <a>Model</a> resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a <a>Model</a> name as the value. */
		responseModels?: string;
	}

	export interface PutRestApiBody {

		/**[Required] The PUT request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 2MB. */
		body: string;
	}

	export interface GenerateClientCertificateBody {

		/**The description of the <a>ClientCertificate</a>. */
		description?: string;

		/**The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: string;
	}

	export interface TagResourceBody {

		/**[Required] The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags: string;
	}

	export interface ImportApiKeysBody {

		/**The payload of the POST request to import API keys. For the payload format, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-key-file-format.html">API Key File Format</a>. */
		body: string;
	}

	export interface ImportRestApiBody {

		/**[Required] The POST request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 2MB. */
		body: string;
	}

}

