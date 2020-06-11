///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface CreateApiResponse {
		ApiEndpoint?: string;

		/**The identifier. */
		ApiId?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string;

		/**Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;
		CreatedDate?: Date;

		/**A string with a length between [0-1024]. */
		Description?: string;
		DisableSchemaValidation?: boolean;
		ImportInfo?: Array<__string>;

		/**A string with a length between [1-128]. */
		Name?: string;

		/**Represents a protocol type. */
		ProtocolType?: CreateApiResponseProtocolType;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/**A string with a length between [1-64]. */
		Version?: string;
		Warnings?: Array<__string>;
	}

	export enum CreateApiResponseProtocolType { WEBSOCKET = 0, HTTP = 1 }

	export interface CreateApiMappingResponse {

		/**The identifier. */
		ApiId?: string;

		/**The identifier. */
		ApiMappingId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey?: string;

		/**A string with a length between [1-128]. */
		Stage?: string;
	}

	export interface CreateAuthorizerResponse {

		/**Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn?: string;

		/**The identifier. */
		AuthorizerId?: string;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds?: number;

		/**The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType?: CreateAuthorizerResponseAuthorizerType;

		/**A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri?: string;

		/**The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		IdentitySource?: Array<__string>;

		/**A string with a length between [0-1024]. */
		IdentityValidationExpression?: string;

		/**Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration;

		/**A string with a length between [1-128]. */
		Name?: string;
	}

	export enum CreateAuthorizerResponseAuthorizerType { REQUEST = 0, JWT = 1 }

	export interface CreateDeploymentResponse {
		AutoDeployed?: boolean;
		CreatedDate?: Date;

		/**The identifier. */
		DeploymentId?: string;

		/**Represents a deployment status. */
		DeploymentStatus?: CreateDeploymentResponseDeploymentStatus;
		DeploymentStatusMessage?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;
	}

	export enum CreateDeploymentResponseDeploymentStatus { PENDING = 0, FAILED = 1, DEPLOYED = 2 }

	export interface CreateDomainNameResponse {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression?: string;

		/**A string with a length between [1-512]. */
		DomainName?: string;

		/**The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration>;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}


	/**The domain name configuration. */
	export interface DomainNameConfiguration {
		ApiGatewayDomainName?: string;

		/**Represents an Amazon Resource Name (ARN). */
		CertificateArn?: string;

		/**A string with a length between [1-128]. */
		CertificateName?: string;
		CertificateUploadDate?: Date;

		/**The status of the domain name migration. The valid values are AVAILABLE and UPDATING. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated. */
		DomainNameStatus?: DomainNameConfigurationDomainNameStatus;
		DomainNameStatusMessage?: string;

		/**Represents an endpoint type. */
		EndpointType?: DomainNameConfigurationEndpointType;
		HostedZoneId?: string;

		/**The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2. */
		SecurityPolicy?: DomainNameConfigurationSecurityPolicy;
	}

	export enum DomainNameConfigurationDomainNameStatus { AVAILABLE = 0, UPDATING = 1 }

	export enum DomainNameConfigurationEndpointType { REGIONAL = 0, EDGE = 1 }

	export enum DomainNameConfigurationSecurityPolicy { TLS_1_0 = 0, TLS_1_2 = 1 }

	export interface CreateIntegrationResult {
		ApiGatewayManaged?: boolean;

		/**A string with a length between [1-1024]. */
		ConnectionId?: string;

		/**Represents a connection type. */
		ConnectionType?: CreateIntegrationResultConnectionType;

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy;

		/**Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**The identifier. */
		IntegrationId?: string;

		/**A string with a length between [1-64]. */
		IntegrationMethod?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		IntegrationResponseSelectionExpression?: string;

		/**Represents an API method integration type. */
		IntegrationType?: CreateIntegrationResultIntegrationType;

		/**A string representation of a URI with a length between [1-2048]. */
		IntegrationUri?: string;

		/**Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior?: CreateIntegrationResultPassthroughBehavior;

		/**A string with a length between [1-64]. */
		PayloadFormatVersion?: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		RequestParameters?: IntegrationParameters;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number;

		/**The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfig;
	}

	export enum CreateIntegrationResultConnectionType { INTERNET = 0, VPC_LINK = 1 }

	export enum CreateIntegrationResultContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export enum CreateIntegrationResultIntegrationType { AWS = 0, HTTP = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }

	export enum CreateIntegrationResultPassthroughBehavior { WHEN_NO_MATCH = 0, NEVER = 1, WHEN_NO_TEMPLATES = 2 }

	export interface CreateIntegrationResponseResponse {

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResponseResponseContentHandlingStrategy;

		/**The identifier. */
		IntegrationResponseId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey?: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string;
	}

	export enum CreateIntegrationResponseResponseContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export interface CreateModelResponse {

		/**A string with a length between [1-256]. */
		ContentType?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**The identifier. */
		ModelId?: string;

		/**A string with a length between [1-128]. */
		Name?: string;

		/**A string with a length between [0-32768]. */
		Schema?: string;
	}

	export interface CreateRouteResult {
		ApiGatewayManaged?: boolean;
		ApiKeyRequired?: boolean;

		/**A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<StringWithLengthBetween1And64>;

		/**The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteResultAuthorizationType;

		/**The identifier. */
		AuthorizerId?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string;

		/**A string with a length between [1-64]. */
		OperationName?: string;

		/**The route models. */
		RequestModels?: RouteModels;

		/**The route parameters. */
		RequestParameters?: RouteParameters;

		/**The identifier. */
		RouteId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string;

		/**A string with a length between [1-128]. */
		Target?: string;
	}

	export enum CreateRouteResultAuthorizationType { NONE = 0, AWS_IAM = 1, CUSTOM = 2, JWT = 3 }


	/**Validation constraints imposed on parameters of a request (path, query string, headers). */
	export interface ParameterConstraints {
		Required?: boolean;
	}

	export interface CreateRouteResponseResponse {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string;

		/**The route models. */
		ResponseModels?: RouteModels;

		/**The route parameters. */
		ResponseParameters?: RouteParameters;

		/**The identifier. */
		RouteResponseId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey?: string;
	}

	export interface CreateStageResponse {

		/**Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings;
		ApiGatewayManaged?: boolean;
		AutoDeploy?: boolean;

		/**The identifier. */
		ClientCertificateId?: string;
		CreatedDate?: Date;

		/**Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings;

		/**The identifier. */
		DeploymentId?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;
		LastDeploymentStatusMessage?: string;
		LastUpdatedDate?: Date;

		/**The route settings map. */
		RouteSettings?: RouteSettingsMap;

		/**A string with a length between [1-128]. */
		StageName?: string;

		/**The stage variable map. */
		StageVariables?: StageVariablesMap;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}


	/**The logging level. */
	export enum LoggingLevel { ERROR = 0, INFO = 1, OFF = 2 }


	/**Represents a collection of route settings. */
	export interface RouteSettings {
		DataTraceEnabled?: boolean;
		DetailedMetricsEnabled?: boolean;

		/**The logging level. */
		LoggingLevel?: RouteSettingsLoggingLevel;
		ThrottlingBurstLimit?: number;
		ThrottlingRateLimit?: number;
	}

	export enum RouteSettingsLoggingLevel { ERROR = 0, INFO = 1, OFF = 2 }

	export interface CreateVpcLinkResponse {
		CreatedDate?: Date;

		/**A string with a length between [1-128]. */
		Name?: string;

		/**A list of security group IDs for the VPC link. */
		SecurityGroupIds?: Array<__string>;

		/**A list of subnet IDs to include in the VPC link. */
		SubnetIds?: Array<__string>;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/**The identifier. */
		VpcLinkId?: string;

		/**The status of the VPC link. */
		VpcLinkStatus?: CreateVpcLinkResponseVpcLinkStatus;

		/**A string with a length between [0-1024]. */
		VpcLinkStatusMessage?: string;

		/**The version of the VPC link. */
		VpcLinkVersion?: CreateVpcLinkResponseVpcLinkVersion;
	}

	export enum CreateVpcLinkResponseVpcLinkStatus { PENDING = 0, AVAILABLE = 1, DELETING = 2, FAILED = 3, INACTIVE = 4 }

	export enum CreateVpcLinkResponseVpcLinkVersion { V2 = 0 }

	export interface ExportApiResponse {

		/**Represents an exported definition of an API in a particular output format, for example, YAML. The API is serialized to the requested specification, for example, OpenAPI 3.0. */
		body?: string;
	}

	export interface GetApiResponse {
		ApiEndpoint?: string;

		/**The identifier. */
		ApiId?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string;

		/**Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;
		CreatedDate?: Date;

		/**A string with a length between [0-1024]. */
		Description?: string;
		DisableSchemaValidation?: boolean;
		ImportInfo?: Array<__string>;

		/**A string with a length between [1-128]. */
		Name?: string;

		/**Represents a protocol type. */
		ProtocolType?: GetApiResponseProtocolType;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/**A string with a length between [1-64]. */
		Version?: string;
		Warnings?: Array<__string>;
	}

	export enum GetApiResponseProtocolType { WEBSOCKET = 0, HTTP = 1 }

	export interface GetApiMappingResponse {

		/**The identifier. */
		ApiId?: string;

		/**The identifier. */
		ApiMappingId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey?: string;

		/**A string with a length between [1-128]. */
		Stage?: string;
	}

	export interface GetApiMappingsResponse {
		Items?: Array<ApiMapping>;

		/**The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string;
	}

	export interface GetApisResponse {
		Items?: Array<Api>;

		/**The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string;
	}

	export interface GetAuthorizerResponse {

		/**Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn?: string;

		/**The identifier. */
		AuthorizerId?: string;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds?: number;

		/**The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType?: GetAuthorizerResponseAuthorizerType;

		/**A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri?: string;

		/**The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		IdentitySource?: Array<__string>;

		/**A string with a length between [0-1024]. */
		IdentityValidationExpression?: string;

		/**Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration;

		/**A string with a length between [1-128]. */
		Name?: string;
	}

	export enum GetAuthorizerResponseAuthorizerType { REQUEST = 0, JWT = 1 }

	export interface GetAuthorizersResponse {
		Items?: Array<Authorizer>;

		/**The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string;
	}

	export interface GetDeploymentResponse {
		AutoDeployed?: boolean;
		CreatedDate?: Date;

		/**The identifier. */
		DeploymentId?: string;

		/**Represents a deployment status. */
		DeploymentStatus?: GetDeploymentResponseDeploymentStatus;
		DeploymentStatusMessage?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;
	}

	export enum GetDeploymentResponseDeploymentStatus { PENDING = 0, FAILED = 1, DEPLOYED = 2 }

	export interface GetDeploymentsResponse {
		Items?: Array<Deployment>;

		/**The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string;
	}

	export interface GetDomainNameResponse {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression?: string;

		/**A string with a length between [1-512]. */
		DomainName?: string;

		/**The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration>;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}

	export interface GetDomainNamesResponse {
		Items?: Array<DomainName>;

		/**The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string;
	}

	export interface GetIntegrationResult {
		ApiGatewayManaged?: boolean;

		/**A string with a length between [1-1024]. */
		ConnectionId?: string;

		/**Represents a connection type. */
		ConnectionType?: GetIntegrationResultConnectionType;

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: GetIntegrationResultContentHandlingStrategy;

		/**Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**The identifier. */
		IntegrationId?: string;

		/**A string with a length between [1-64]. */
		IntegrationMethod?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		IntegrationResponseSelectionExpression?: string;

		/**Represents an API method integration type. */
		IntegrationType?: GetIntegrationResultIntegrationType;

		/**A string representation of a URI with a length between [1-2048]. */
		IntegrationUri?: string;

		/**Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior?: GetIntegrationResultPassthroughBehavior;

		/**A string with a length between [1-64]. */
		PayloadFormatVersion?: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		RequestParameters?: IntegrationParameters;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number;

		/**The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfig;
	}

	export enum GetIntegrationResultConnectionType { INTERNET = 0, VPC_LINK = 1 }

	export enum GetIntegrationResultContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export enum GetIntegrationResultIntegrationType { AWS = 0, HTTP = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }

	export enum GetIntegrationResultPassthroughBehavior { WHEN_NO_MATCH = 0, NEVER = 1, WHEN_NO_TEMPLATES = 2 }

	export interface GetIntegrationResponseResponse {

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: GetIntegrationResponseResponseContentHandlingStrategy;

		/**The identifier. */
		IntegrationResponseId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey?: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string;
	}

	export enum GetIntegrationResponseResponseContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export interface GetIntegrationResponsesResponse {
		Items?: Array<IntegrationResponse>;

		/**The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string;
	}

	export interface GetIntegrationsResponse {
		Items?: Array<Integration>;

		/**The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string;
	}

	export interface GetModelResponse {

		/**A string with a length between [1-256]. */
		ContentType?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**The identifier. */
		ModelId?: string;

		/**A string with a length between [1-128]. */
		Name?: string;

		/**A string with a length between [0-32768]. */
		Schema?: string;
	}

	export interface GetModelTemplateResponse {
		Value?: string;
	}

	export interface GetModelsResponse {
		Items?: Array<Model>;

		/**The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string;
	}

	export interface GetRouteResult {
		ApiGatewayManaged?: boolean;
		ApiKeyRequired?: boolean;

		/**A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<StringWithLengthBetween1And64>;

		/**The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: GetRouteResultAuthorizationType;

		/**The identifier. */
		AuthorizerId?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string;

		/**A string with a length between [1-64]. */
		OperationName?: string;

		/**The route models. */
		RequestModels?: RouteModels;

		/**The route parameters. */
		RequestParameters?: RouteParameters;

		/**The identifier. */
		RouteId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string;

		/**A string with a length between [1-128]. */
		Target?: string;
	}

	export enum GetRouteResultAuthorizationType { NONE = 0, AWS_IAM = 1, CUSTOM = 2, JWT = 3 }

	export interface GetRouteResponseResponse {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string;

		/**The route models. */
		ResponseModels?: RouteModels;

		/**The route parameters. */
		ResponseParameters?: RouteParameters;

		/**The identifier. */
		RouteResponseId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey?: string;
	}

	export interface GetRouteResponsesResponse {
		Items?: Array<RouteResponse>;

		/**The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string;
	}

	export interface GetRoutesResponse {
		Items?: Array<Route>;

		/**The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string;
	}

	export interface GetStageResponse {

		/**Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings;
		ApiGatewayManaged?: boolean;
		AutoDeploy?: boolean;

		/**The identifier. */
		ClientCertificateId?: string;
		CreatedDate?: Date;

		/**Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings;

		/**The identifier. */
		DeploymentId?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;
		LastDeploymentStatusMessage?: string;
		LastUpdatedDate?: Date;

		/**The route settings map. */
		RouteSettings?: RouteSettingsMap;

		/**A string with a length between [1-128]. */
		StageName?: string;

		/**The stage variable map. */
		StageVariables?: StageVariablesMap;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}

	export interface GetStagesResponse {
		Items?: Array<Stage>;

		/**The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string;
	}

	export interface GetTagsResponse {

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}

	export interface GetVpcLinkResponse {
		CreatedDate?: Date;

		/**A string with a length between [1-128]. */
		Name?: string;

		/**A list of security group IDs for the VPC link. */
		SecurityGroupIds?: Array<__string>;

		/**A list of subnet IDs to include in the VPC link. */
		SubnetIds?: Array<__string>;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/**The identifier. */
		VpcLinkId?: string;

		/**The status of the VPC link. */
		VpcLinkStatus?: GetVpcLinkResponseVpcLinkStatus;

		/**A string with a length between [0-1024]. */
		VpcLinkStatusMessage?: string;

		/**The version of the VPC link. */
		VpcLinkVersion?: GetVpcLinkResponseVpcLinkVersion;
	}

	export enum GetVpcLinkResponseVpcLinkStatus { PENDING = 0, AVAILABLE = 1, DELETING = 2, FAILED = 3, INACTIVE = 4 }

	export enum GetVpcLinkResponseVpcLinkVersion { V2 = 0 }

	export interface GetVpcLinksResponse {
		Items?: Array<VpcLink>;

		/**The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string;
	}

	export interface ImportApiResponse {
		ApiEndpoint?: string;

		/**The identifier. */
		ApiId?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string;

		/**Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;
		CreatedDate?: Date;

		/**A string with a length between [0-1024]. */
		Description?: string;
		DisableSchemaValidation?: boolean;
		ImportInfo?: Array<__string>;

		/**A string with a length between [1-128]. */
		Name?: string;

		/**Represents a protocol type. */
		ProtocolType?: ImportApiResponseProtocolType;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/**A string with a length between [1-64]. */
		Version?: string;
		Warnings?: Array<__string>;
	}

	export enum ImportApiResponseProtocolType { WEBSOCKET = 0, HTTP = 1 }

	export interface ReimportApiResponse {
		ApiEndpoint?: string;

		/**The identifier. */
		ApiId?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string;

		/**Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;
		CreatedDate?: Date;

		/**A string with a length between [0-1024]. */
		Description?: string;
		DisableSchemaValidation?: boolean;
		ImportInfo?: Array<__string>;

		/**A string with a length between [1-128]. */
		Name?: string;

		/**Represents a protocol type. */
		ProtocolType?: ReimportApiResponseProtocolType;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/**A string with a length between [1-64]. */
		Version?: string;
		Warnings?: Array<__string>;
	}

	export enum ReimportApiResponseProtocolType { WEBSOCKET = 0, HTTP = 1 }

	export interface UpdateApiResponse {
		ApiEndpoint?: string;

		/**The identifier. */
		ApiId?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string;

		/**Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;
		CreatedDate?: Date;

		/**A string with a length between [0-1024]. */
		Description?: string;
		DisableSchemaValidation?: boolean;
		ImportInfo?: Array<__string>;

		/**A string with a length between [1-128]. */
		Name?: string;

		/**Represents a protocol type. */
		ProtocolType?: UpdateApiResponseProtocolType;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/**A string with a length between [1-64]. */
		Version?: string;
		Warnings?: Array<__string>;
	}

	export enum UpdateApiResponseProtocolType { WEBSOCKET = 0, HTTP = 1 }

	export interface UpdateApiMappingResponse {

		/**The identifier. */
		ApiId?: string;

		/**The identifier. */
		ApiMappingId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey?: string;

		/**A string with a length between [1-128]. */
		Stage?: string;
	}

	export interface UpdateAuthorizerResponse {

		/**Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn?: string;

		/**The identifier. */
		AuthorizerId?: string;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds?: number;

		/**The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType?: UpdateAuthorizerResponseAuthorizerType;

		/**A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri?: string;

		/**The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		IdentitySource?: Array<__string>;

		/**A string with a length between [0-1024]. */
		IdentityValidationExpression?: string;

		/**Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration;

		/**A string with a length between [1-128]. */
		Name?: string;
	}

	export enum UpdateAuthorizerResponseAuthorizerType { REQUEST = 0, JWT = 1 }

	export interface UpdateDeploymentResponse {
		AutoDeployed?: boolean;
		CreatedDate?: Date;

		/**The identifier. */
		DeploymentId?: string;

		/**Represents a deployment status. */
		DeploymentStatus?: UpdateDeploymentResponseDeploymentStatus;
		DeploymentStatusMessage?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;
	}

	export enum UpdateDeploymentResponseDeploymentStatus { PENDING = 0, FAILED = 1, DEPLOYED = 2 }

	export interface UpdateDomainNameResponse {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression?: string;

		/**A string with a length between [1-512]. */
		DomainName?: string;

		/**The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration>;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}

	export interface UpdateIntegrationResult {
		ApiGatewayManaged?: boolean;

		/**A string with a length between [1-1024]. */
		ConnectionId?: string;

		/**Represents a connection type. */
		ConnectionType?: UpdateIntegrationResultConnectionType;

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: UpdateIntegrationResultContentHandlingStrategy;

		/**Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**The identifier. */
		IntegrationId?: string;

		/**A string with a length between [1-64]. */
		IntegrationMethod?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		IntegrationResponseSelectionExpression?: string;

		/**Represents an API method integration type. */
		IntegrationType?: UpdateIntegrationResultIntegrationType;

		/**A string representation of a URI with a length between [1-2048]. */
		IntegrationUri?: string;

		/**Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior?: UpdateIntegrationResultPassthroughBehavior;

		/**A string with a length between [1-64]. */
		PayloadFormatVersion?: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		RequestParameters?: IntegrationParameters;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number;

		/**The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfig;
	}

	export enum UpdateIntegrationResultConnectionType { INTERNET = 0, VPC_LINK = 1 }

	export enum UpdateIntegrationResultContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export enum UpdateIntegrationResultIntegrationType { AWS = 0, HTTP = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }

	export enum UpdateIntegrationResultPassthroughBehavior { WHEN_NO_MATCH = 0, NEVER = 1, WHEN_NO_TEMPLATES = 2 }

	export interface UpdateIntegrationResponseResponse {

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: UpdateIntegrationResponseResponseContentHandlingStrategy;

		/**The identifier. */
		IntegrationResponseId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey?: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string;
	}

	export enum UpdateIntegrationResponseResponseContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export interface UpdateModelResponse {

		/**A string with a length between [1-256]. */
		ContentType?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**The identifier. */
		ModelId?: string;

		/**A string with a length between [1-128]. */
		Name?: string;

		/**A string with a length between [0-32768]. */
		Schema?: string;
	}

	export interface UpdateRouteResult {
		ApiGatewayManaged?: boolean;
		ApiKeyRequired?: boolean;

		/**A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<StringWithLengthBetween1And64>;

		/**The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: UpdateRouteResultAuthorizationType;

		/**The identifier. */
		AuthorizerId?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string;

		/**A string with a length between [1-64]. */
		OperationName?: string;

		/**The route models. */
		RequestModels?: RouteModels;

		/**The route parameters. */
		RequestParameters?: RouteParameters;

		/**The identifier. */
		RouteId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string;

		/**A string with a length between [1-128]. */
		Target?: string;
	}

	export enum UpdateRouteResultAuthorizationType { NONE = 0, AWS_IAM = 1, CUSTOM = 2, JWT = 3 }

	export interface UpdateRouteResponseResponse {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string;

		/**The route models. */
		ResponseModels?: RouteModels;

		/**The route parameters. */
		ResponseParameters?: RouteParameters;

		/**The identifier. */
		RouteResponseId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey?: string;
	}

	export interface UpdateStageResponse {

		/**Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings;
		ApiGatewayManaged?: boolean;
		AutoDeploy?: boolean;

		/**The identifier. */
		ClientCertificateId?: string;
		CreatedDate?: Date;

		/**Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings;

		/**The identifier. */
		DeploymentId?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;
		LastDeploymentStatusMessage?: string;
		LastUpdatedDate?: Date;

		/**The route settings map. */
		RouteSettings?: RouteSettingsMap;

		/**A string with a length between [1-128]. */
		StageName?: string;

		/**The stage variable map. */
		StageVariables?: StageVariablesMap;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}

	export interface UpdateVpcLinkResponse {
		CreatedDate?: Date;

		/**A string with a length between [1-128]. */
		Name?: string;

		/**A list of security group IDs for the VPC link. */
		SecurityGroupIds?: Array<__string>;

		/**A list of subnet IDs to include in the VPC link. */
		SubnetIds?: Array<__string>;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/**The identifier. */
		VpcLinkId?: string;

		/**The status of the VPC link. */
		VpcLinkStatus?: UpdateVpcLinkResponseVpcLinkStatus;

		/**A string with a length between [0-1024]. */
		VpcLinkStatusMessage?: string;

		/**The version of the VPC link. */
		VpcLinkVersion?: UpdateVpcLinkResponseVpcLinkVersion;
	}

	export enum UpdateVpcLinkResponseVpcLinkStatus { PENDING = 0, AVAILABLE = 1, DELETING = 2, FAILED = 3, INACTIVE = 4 }

	export enum UpdateVpcLinkResponseVpcLinkVersion { V2 = 0 }


	/**Settings for logging access in a stage. */
	export interface AccessLogSettings {

		/**Represents an Amazon Resource Name (ARN). */
		DestinationArn?: string;

		/**A string with a length between [1-1024]. */
		Format?: string;
	}


	/**Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
	export interface Cors {
		AllowCredentials?: boolean;

		/**Represents a collection of allowed headers. Supported only for HTTP APIs. */
		AllowHeaders?: Array<__string>;

		/**Represents a collection of methods. Supported only for HTTP APIs. */
		AllowMethods?: Array<StringWithLengthBetween1And64>;

		/**Represents a collection of origins. Supported only for HTTP APIs. */
		AllowOrigins?: Array<__string>;

		/**Represents a collection of allowed headers. Supported only for HTTP APIs. */
		ExposeHeaders?: Array<__string>;

		/**
		 * An integer with a value between -1 and 86400. Supported only for HTTP APIs.
		 * Minimum: -1
		 * Maximum: 86400
		 */
		MaxAge?: number;
	}


	/**Represents a protocol type. */
	export enum ProtocolType { WEBSOCKET = 0, HTTP = 1 }


	/**Represents an API. */
	export interface Api {
		ApiEndpoint?: string;

		/**The identifier. */
		ApiId?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string;

		/**Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;
		CreatedDate?: Date;

		/**A string with a length between [0-1024]. */
		Description?: string;
		DisableSchemaValidation?: boolean;
		ImportInfo?: Array<__string>;

		/**A string with a length between [1-128]. */
		Name: string;

		/**Represents a protocol type. */
		ProtocolType: ApiProtocolType;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression: string;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/**A string with a length between [1-64]. */
		Version?: string;
		Warnings?: Array<__string>;
	}

	export enum ApiProtocolType { WEBSOCKET = 0, HTTP = 1 }


	/**Represents an API mapping. */
	export interface ApiMapping {

		/**The identifier. */
		ApiId: string;

		/**The identifier. */
		ApiMappingId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey?: string;

		/**A string with a length between [1-128]. */
		Stage: string;
	}


	/**The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
	export enum AuthorizationType { NONE = 0, AWS_IAM = 1, CUSTOM = 2, JWT = 3 }


	/**The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
	export enum AuthorizerType { REQUEST = 0, JWT = 1 }


	/**Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
	export interface JWTConfiguration {
		Audience?: Array<__string>;

		/**A string representation of a URI with a length between [1-2048]. */
		Issuer?: string;
	}


	/**Represents an authorizer. */
	export interface Authorizer {

		/**Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn?: string;

		/**The identifier. */
		AuthorizerId?: string;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds?: number;

		/**The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType?: AuthorizerAuthorizerType;

		/**A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri?: string;

		/**The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		IdentitySource?: Array<__string>;

		/**A string with a length between [0-1024]. */
		IdentityValidationExpression?: string;

		/**Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration;

		/**A string with a length between [1-128]. */
		Name: string;
	}

	export enum AuthorizerAuthorizerType { REQUEST = 0, JWT = 1 }


	/**Represents a connection type. */
	export enum ConnectionType { INTERNET = 0, VPC_LINK = 1 }


	/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
	export enum ContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }


	/**Creates a new ApiMapping resource to represent an API mapping. */
	export interface CreateApiMappingRequest {

		/**The identifier. */
		ApiId: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey?: string;

		/**A string with a length between [1-128]. */
		Stage: string;
	}


	/**Creates a new Api resource to represent an API. */
	export interface CreateApiRequest {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string;

		/**Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;

		/**Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;
		DisableSchemaValidation?: boolean;

		/**A string with a length between [1-128]. */
		Name: string;

		/**Represents a protocol type. */
		ProtocolType: CreateApiRequestProtocolType;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/**A string representation of a URI with a length between [1-2048]. */
		Target?: string;

		/**A string with a length between [1-64]. */
		Version?: string;
	}

	export enum CreateApiRequestProtocolType { WEBSOCKET = 0, HTTP = 1 }


	/**Creates a new Authorizer resource to represent an authorizer. */
	export interface CreateAuthorizerRequest {

		/**Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn?: string;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds?: number;

		/**The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType: CreateAuthorizerRequestAuthorizerType;

		/**A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri?: string;

		/**The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		IdentitySource: Array<__string>;

		/**A string with a length between [0-1024]. */
		IdentityValidationExpression?: string;

		/**Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration;

		/**A string with a length between [1-128]. */
		Name: string;
	}

	export enum CreateAuthorizerRequestAuthorizerType { REQUEST = 0, JWT = 1 }


	/**Creates a new Deployment resource to represent a deployment. */
	export interface CreateDeploymentRequest {

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**A string with a length between [1-128]. */
		StageName?: string;
	}


	/**Represents a deployment status. */
	export enum DeploymentStatus { PENDING = 0, FAILED = 1, DEPLOYED = 2 }


	/**Creates a new DomainName resource to represent a domain name. */
	export interface CreateDomainNameRequest {

		/**A string with a length between [1-512]. */
		DomainName: string;

		/**The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration>;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}


	/**Represents an API method integration type. */
	export enum IntegrationType { AWS = 0, HTTP = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }


	/**Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
	export enum PassthroughBehavior { WHEN_NO_MATCH = 0, NEVER = 1, WHEN_NO_TEMPLATES = 2 }


	/**The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
	export interface TlsConfigInput {

		/**A string with a length between [1-512]. */
		ServerNameToVerify?: string;
	}


	/**Creates a new Integration resource to represent an integration. */
	export interface CreateIntegrationRequest {

		/**A string with a length between [1-1024]. */
		ConnectionId?: string;

		/**Represents a connection type. */
		ConnectionType?: CreateIntegrationRequestConnectionType;

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationRequestContentHandlingStrategy;

		/**Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**A string with a length between [1-64]. */
		IntegrationMethod?: string;

		/**Represents an API method integration type. */
		IntegrationType: CreateIntegrationRequestIntegrationType;

		/**A string representation of a URI with a length between [1-2048]. */
		IntegrationUri?: string;

		/**Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior?: CreateIntegrationRequestPassthroughBehavior;

		/**A string with a length between [1-64]. */
		PayloadFormatVersion?: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		RequestParameters?: IntegrationParameters;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number;

		/**The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfigInput;
	}

	export enum CreateIntegrationRequestConnectionType { INTERNET = 0, VPC_LINK = 1 }

	export enum CreateIntegrationRequestContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export enum CreateIntegrationRequestIntegrationType { AWS = 0, HTTP = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }

	export enum CreateIntegrationRequestPassthroughBehavior { WHEN_NO_MATCH = 0, NEVER = 1, WHEN_NO_TEMPLATES = 2 }


	/**The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
	export interface TlsConfig {

		/**A string with a length between [1-512]. */
		ServerNameToVerify?: string;
	}


	/**Creates a new IntegrationResponse resource to represent an integration response. */
	export interface CreateIntegrationResponseRequest {

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResponseRequestContentHandlingStrategy;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string;
	}

	export enum CreateIntegrationResponseRequestContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }


	/**Creates a new Model. */
	export interface CreateModelRequest {

		/**A string with a length between [1-256]. */
		ContentType?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**A string with a length between [1-128]. */
		Name: string;

		/**A string with a length between [0-32768]. */
		Schema: string;
	}


	/**Creates a new Route resource to represent a route. */
	export interface CreateRouteRequest {
		ApiKeyRequired?: boolean;

		/**A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<StringWithLengthBetween1And64>;

		/**The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteRequestAuthorizationType;

		/**The identifier. */
		AuthorizerId?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string;

		/**A string with a length between [1-64]. */
		OperationName?: string;

		/**The route models. */
		RequestModels?: RouteModels;

		/**The route parameters. */
		RequestParameters?: RouteParameters;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string;

		/**A string with a length between [1-128]. */
		Target?: string;
	}

	export enum CreateRouteRequestAuthorizationType { NONE = 0, AWS_IAM = 1, CUSTOM = 2, JWT = 3 }


	/**Creates a new RouteResponse resource to represent a route response. */
	export interface CreateRouteResponseRequest {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string;

		/**The route models. */
		ResponseModels?: RouteModels;

		/**The route parameters. */
		ResponseParameters?: RouteParameters;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey: string;
	}


	/**Creates a new Stage resource to represent a stage. */
	export interface CreateStageRequest {

		/**Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings;
		AutoDeploy?: boolean;

		/**The identifier. */
		ClientCertificateId?: string;

		/**Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings;

		/**The identifier. */
		DeploymentId?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**The route settings map. */
		RouteSettings?: RouteSettingsMap;

		/**A string with a length between [1-128]. */
		StageName: string;

		/**The stage variable map. */
		StageVariables?: StageVariablesMap;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}


	/**Creates a VPC link */
	export interface CreateVpcLinkRequest {

		/**A string with a length between [1-128]. */
		Name: string;

		/**A list of security group IDs for the VPC link. */
		SecurityGroupIds?: Array<__string>;

		/**A list of subnet IDs to include in the VPC link. */
		SubnetIds: Array<__string>;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}


	/**The status of the VPC link. */
	export enum VpcLinkStatus { PENDING = 0, AVAILABLE = 1, DELETING = 2, FAILED = 3, INACTIVE = 4 }


	/**The version of the VPC link. */
	export enum VpcLinkVersion { V2 = 0 }


	/**An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet. */
	export interface Deployment {
		AutoDeployed?: boolean;
		CreatedDate?: Date;

		/**The identifier. */
		DeploymentId?: string;

		/**Represents a deployment status. */
		DeploymentStatus?: DeploymentDeploymentStatus;
		DeploymentStatusMessage?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;
	}

	export enum DeploymentDeploymentStatus { PENDING = 0, FAILED = 1, DEPLOYED = 2 }


	/**Represents a domain name. */
	export interface DomainName {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression?: string;

		/**A string with a length between [1-512]. */
		DomainName: string;

		/**The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration>;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}


	/**The status of the domain name migration. The valid values are AVAILABLE and UPDATING. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated. */
	export enum DomainNameStatus { AVAILABLE = 0, UPDATING = 1 }


	/**Represents an endpoint type. */
	export enum EndpointType { REGIONAL = 0, EDGE = 1 }


	/**The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2. */
	export enum SecurityPolicy { TLS_1_0 = 0, TLS_1_2 = 1 }

	export interface ImportApiRequest {
		Body: string;
	}


	/**Represents an integration. */
	export interface Integration {
		ApiGatewayManaged?: boolean;

		/**A string with a length between [1-1024]. */
		ConnectionId?: string;

		/**Represents a connection type. */
		ConnectionType?: IntegrationConnectionType;

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: IntegrationContentHandlingStrategy;

		/**Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**The identifier. */
		IntegrationId?: string;

		/**A string with a length between [1-64]. */
		IntegrationMethod?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		IntegrationResponseSelectionExpression?: string;

		/**Represents an API method integration type. */
		IntegrationType?: IntegrationIntegrationType;

		/**A string representation of a URI with a length between [1-2048]. */
		IntegrationUri?: string;

		/**Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior?: IntegrationPassthroughBehavior;

		/**A string with a length between [1-64]. */
		PayloadFormatVersion?: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		RequestParameters?: IntegrationParameters;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number;

		/**The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfig;
	}

	export enum IntegrationConnectionType { INTERNET = 0, VPC_LINK = 1 }

	export enum IntegrationContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export enum IntegrationIntegrationType { AWS = 0, HTTP = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }

	export enum IntegrationPassthroughBehavior { WHEN_NO_MATCH = 0, NEVER = 1, WHEN_NO_TEMPLATES = 2 }


	/**Represents an integration response. */
	export interface IntegrationResponse {

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: IntegrationResponseContentHandlingStrategy;

		/**The identifier. */
		IntegrationResponseId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string;
	}

	export enum IntegrationResponseContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }


	/**Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>. */
	export interface Model {

		/**A string with a length between [1-256]. */
		ContentType?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**The identifier. */
		ModelId?: string;

		/**A string with a length between [1-128]. */
		Name: string;

		/**A string with a length between [0-32768]. */
		Schema?: string;
	}

	export interface ReimportApiRequest {
		Body: string;
	}


	/**Represents a route. */
	export interface Route {
		ApiGatewayManaged?: boolean;
		ApiKeyRequired?: boolean;

		/**A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<StringWithLengthBetween1And64>;

		/**The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: RouteAuthorizationType;

		/**The identifier. */
		AuthorizerId?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string;

		/**A string with a length between [1-64]. */
		OperationName?: string;

		/**The route models. */
		RequestModels?: RouteModels;

		/**The route parameters. */
		RequestParameters?: RouteParameters;

		/**The identifier. */
		RouteId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string;

		/**A string with a length between [1-128]. */
		Target?: string;
	}

	export enum RouteAuthorizationType { NONE = 0, AWS_IAM = 1, CUSTOM = 2, JWT = 3 }


	/**Represents a route response. */
	export interface RouteResponse {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string;

		/**The route models. */
		ResponseModels?: RouteModels;

		/**The route parameters. */
		ResponseParameters?: RouteParameters;

		/**The identifier. */
		RouteResponseId?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey: string;
	}


	/**Represents an API stage. */
	export interface Stage {

		/**Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings;
		ApiGatewayManaged?: boolean;
		AutoDeploy?: boolean;

		/**The identifier. */
		ClientCertificateId?: string;
		CreatedDate?: Date;

		/**Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings;

		/**The identifier. */
		DeploymentId?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;
		LastDeploymentStatusMessage?: string;
		LastUpdatedDate?: Date;

		/**The route settings map. */
		RouteSettings?: RouteSettingsMap;

		/**A string with a length between [1-128]. */
		StageName: string;

		/**The stage variable map. */
		StageVariables?: StageVariablesMap;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}


	/**Creates a new Tag resource to represent a tag. */
	export interface TagResourceRequest {

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}


	/**Updates an ApiMapping. */
	export interface UpdateApiMappingRequest {

		/**The identifier. */
		ApiId: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey?: string;

		/**A string with a length between [1-128]. */
		Stage?: string;
	}


	/**Updates an Api. */
	export interface UpdateApiRequest {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string;

		/**Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;

		/**Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;
		DisableSchemaValidation?: boolean;

		/**A string with a length between [1-128]. */
		Name?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string;

		/**A string representation of a URI with a length between [1-2048]. */
		Target?: string;

		/**A string with a length between [1-64]. */
		Version?: string;
	}


	/**Updates an Authorizer. */
	export interface UpdateAuthorizerRequest {

		/**Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn?: string;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds?: number;

		/**The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType?: UpdateAuthorizerRequestAuthorizerType;

		/**A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri?: string;

		/**The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		IdentitySource?: Array<__string>;

		/**A string with a length between [0-1024]. */
		IdentityValidationExpression?: string;

		/**Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration;

		/**A string with a length between [1-128]. */
		Name?: string;
	}

	export enum UpdateAuthorizerRequestAuthorizerType { REQUEST = 0, JWT = 1 }


	/**Updates a Deployment. */
	export interface UpdateDeploymentRequest {

		/**A string with a length between [0-1024]. */
		Description?: string;
	}


	/**Updates a DomainName. */
	export interface UpdateDomainNameRequest {

		/**The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration>;
	}


	/**Updates an Integration. */
	export interface UpdateIntegrationRequest {

		/**A string with a length between [1-1024]. */
		ConnectionId?: string;

		/**Represents a connection type. */
		ConnectionType?: UpdateIntegrationRequestConnectionType;

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: UpdateIntegrationRequestContentHandlingStrategy;

		/**Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**A string with a length between [1-64]. */
		IntegrationMethod?: string;

		/**Represents an API method integration type. */
		IntegrationType?: UpdateIntegrationRequestIntegrationType;

		/**A string representation of a URI with a length between [1-2048]. */
		IntegrationUri?: string;

		/**Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior?: UpdateIntegrationRequestPassthroughBehavior;

		/**A string with a length between [1-64]. */
		PayloadFormatVersion?: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		RequestParameters?: IntegrationParameters;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number;

		/**The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfigInput;
	}

	export enum UpdateIntegrationRequestConnectionType { INTERNET = 0, VPC_LINK = 1 }

	export enum UpdateIntegrationRequestContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export enum UpdateIntegrationRequestIntegrationType { AWS = 0, HTTP = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }

	export enum UpdateIntegrationRequestPassthroughBehavior { WHEN_NO_MATCH = 0, NEVER = 1, WHEN_NO_TEMPLATES = 2 }


	/**Updates an IntegrationResponses. */
	export interface UpdateIntegrationResponseRequest {

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: UpdateIntegrationResponseRequestContentHandlingStrategy;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey?: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string;
	}

	export enum UpdateIntegrationResponseRequestContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }


	/**Updates a Model. */
	export interface UpdateModelRequest {

		/**A string with a length between [1-256]. */
		ContentType?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**A string with a length between [1-128]. */
		Name?: string;

		/**A string with a length between [0-32768]. */
		Schema?: string;
	}


	/**Updates a Route. */
	export interface UpdateRouteRequest {
		ApiKeyRequired?: boolean;

		/**A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<StringWithLengthBetween1And64>;

		/**The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: UpdateRouteRequestAuthorizationType;

		/**The identifier. */
		AuthorizerId?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string;

		/**A string with a length between [1-64]. */
		OperationName?: string;

		/**The route models. */
		RequestModels?: RouteModels;

		/**The route parameters. */
		RequestParameters?: RouteParameters;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string;

		/**A string with a length between [1-128]. */
		Target?: string;
	}

	export enum UpdateRouteRequestAuthorizationType { NONE = 0, AWS_IAM = 1, CUSTOM = 2, JWT = 3 }


	/**Updates a RouteResponse. */
	export interface UpdateRouteResponseRequest {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string;

		/**The route models. */
		ResponseModels?: RouteModels;

		/**The route parameters. */
		ResponseParameters?: RouteParameters;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey?: string;
	}


	/**Updates a Stage. */
	export interface UpdateStageRequest {

		/**Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings;
		AutoDeploy?: boolean;

		/**The identifier. */
		ClientCertificateId?: string;

		/**Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings;

		/**The identifier. */
		DeploymentId?: string;

		/**A string with a length between [0-1024]. */
		Description?: string;

		/**The route settings map. */
		RouteSettings?: RouteSettingsMap;

		/**The stage variable map. */
		StageVariables?: StageVariablesMap;
	}


	/**Updates a VPC link. */
	export interface UpdateVpcLinkRequest {

		/**A string with a length between [1-128]. */
		Name?: string;
	}


	/**Represents a VPC link. */
	export interface VpcLink {
		CreatedDate?: Date;

		/**A string with a length between [1-128]. */
		Name: string;

		/**A list of security group IDs for the VPC link. */
		SecurityGroupIds: Array<__string>;

		/**A list of subnet IDs to include in the VPC link. */
		SubnetIds: Array<__string>;

		/**Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/**The identifier. */
		VpcLinkId: string;

		/**The status of the VPC link. */
		VpcLinkStatus?: VpcLinkVpcLinkStatus;

		/**A string with a length between [0-1024]. */
		VpcLinkStatusMessage?: string;

		/**The version of the VPC link. */
		VpcLinkVersion?: VpcLinkVpcLinkVersion;
	}

	export enum VpcLinkVpcLinkStatus { PENDING = 0, AVAILABLE = 1, DELETING = 2, FAILED = 3, INACTIVE = 4 }

	export enum VpcLinkVpcLinkVersion { V2 = 0 }

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Creates an Api resource.
		 * Post /v2/apis
		 * @return {void} 
		 */
		CreateApi(callback: (data : void) => any, requestBody: CreateApiBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/v2/apis', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets a collection of Api resources.
		 * Get /v2/apis
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetApisResponse} Success
		 */
		GetApis(maxResults: string, nextToken: string, callback: (data : GetApisResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Imports an API.
		 * Put /v2/apis
		 * @param {string} basepath Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.
		 * @param {boolean} failOnWarnings Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.
		 * @return {void} 
		 */
		ImportApi(basepath: string, failOnWarnings: boolean, callback: (data : void) => any, requestBody: ImportApiBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/v2/apis?basepath=' + (basepath == null ? '' : encodeURIComponent(basepath)) + '&failOnWarnings=' + failOnWarnings, requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates an API mapping.
		 * Post /v2/domainnames/{domainName}/apimappings
		 * @param {string} domainName The domain name.
		 * @return {void} 
		 */
		CreateApiMapping(domainName: string, callback: (data : void) => any, requestBody: CreateApiMappingBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/apimappings', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets API mappings.
		 * Get /v2/domainnames/{domainName}/apimappings
		 * @param {string} domainName The domain name.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetApiMappingsResponse} Success
		 */
		GetApiMappings(domainName: string, maxResults: string, nextToken: string, callback: (data : GetApiMappingsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/apimappings&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates an Authorizer for an API.
		 * Post /v2/apis/{apiId}/authorizers
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		CreateAuthorizer(apiId: string, callback: (data : void) => any, requestBody: CreateAuthorizerBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/authorizers', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the Authorizers for an API.
		 * Get /v2/apis/{apiId}/authorizers
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetAuthorizersResponse} Success
		 */
		GetAuthorizers(apiId: string, maxResults: string, nextToken: string, callback: (data : GetAuthorizersResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/authorizers&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a Deployment for an API.
		 * Post /v2/apis/{apiId}/deployments
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		CreateDeployment(apiId: string, callback: (data : void) => any, requestBody: CreateDeploymentBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/deployments', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the Deployments for an API.
		 * Get /v2/apis/{apiId}/deployments
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetDeploymentsResponse} Success
		 */
		GetDeployments(apiId: string, maxResults: string, nextToken: string, callback: (data : GetDeploymentsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/deployments&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a domain name.
		 * Post /v2/domainnames
		 * @return {void} 
		 */
		CreateDomainName(callback: (data : void) => any, requestBody: CreateDomainNameBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/v2/domainnames', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the domain names for an AWS account.
		 * Get /v2/domainnames
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetDomainNamesResponse} Success
		 */
		GetDomainNames(maxResults: string, nextToken: string, callback: (data : GetDomainNamesResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/domainnames?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates an Integration.
		 * Post /v2/apis/{apiId}/integrations
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		CreateIntegration(apiId: string, callback: (data : void) => any, requestBody: CreateIntegrationBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the Integrations for an API.
		 * Get /v2/apis/{apiId}/integrations
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetIntegrationsResponse} Success
		 */
		GetIntegrations(apiId: string, maxResults: string, nextToken: string, callback: (data : GetIntegrationsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates an IntegrationResponses.
		 * Post /v2/apis/{apiId}/integrations/{integrationId}/integrationresponses
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @return {void} 
		 */
		CreateIntegrationResponse(apiId: string, integrationId: string, callback: (data : void) => any, requestBody: CreateIntegrationResponseBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)) + '/integrationresponses', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the IntegrationResponses for an Integration.
		 * Get /v2/apis/{apiId}/integrations/{integrationId}/integrationresponses
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetIntegrationResponsesResponse} Success
		 */
		GetIntegrationResponses(apiId: string, integrationId: string, maxResults: string, nextToken: string, callback: (data : GetIntegrationResponsesResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)) + '/integrationresponses&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a Model for an API.
		 * Post /v2/apis/{apiId}/models
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		CreateModel(apiId: string, callback: (data : void) => any, requestBody: CreateModelBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/models', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the Models for an API.
		 * Get /v2/apis/{apiId}/models
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetModelsResponse} Success
		 */
		GetModels(apiId: string, maxResults: string, nextToken: string, callback: (data : GetModelsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/models&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a Route for an API.
		 * Post /v2/apis/{apiId}/routes
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		CreateRoute(apiId: string, callback: (data : void) => any, requestBody: CreateRouteBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the Routes for an API.
		 * Get /v2/apis/{apiId}/routes
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetRoutesResponse} Success
		 */
		GetRoutes(apiId: string, maxResults: string, nextToken: string, callback: (data : GetRoutesResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a RouteResponse for a Route.
		 * Post /v2/apis/{apiId}/routes/{routeId}/routeresponses
		 * @param {string} apiId The API identifier.
		 * @param {string} routeId The route ID.
		 * @return {void} 
		 */
		CreateRouteResponse(apiId: string, routeId: string, callback: (data : void) => any, requestBody: CreateRouteResponseBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)) + '/routeresponses', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the RouteResponses for a Route.
		 * Get /v2/apis/{apiId}/routes/{routeId}/routeresponses
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @param {string} routeId The route ID.
		 * @return {GetRouteResponsesResponse} Success
		 */
		GetRouteResponses(apiId: string, maxResults: string, nextToken: string, routeId: string, callback: (data : GetRouteResponsesResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)) + '/routeresponses&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a Stage for an API.
		 * Post /v2/apis/{apiId}/stages
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		CreateStage(apiId: string, callback: (data : void) => any, requestBody: CreateStageBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the Stages for an API.
		 * Get /v2/apis/{apiId}/stages
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetStagesResponse} Success
		 */
		GetStages(apiId: string, maxResults: string, nextToken: string, callback: (data : GetStagesResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a VPC link.
		 * Post /v2/vpclinks
		 * @return {void} 
		 */
		CreateVpcLink(callback: (data : void) => any, requestBody: CreateVpcLinkBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/v2/vpclinks', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets a collection of VPC links.
		 * Get /v2/vpclinks
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetVpcLinksResponse} Success
		 */
		GetVpcLinks(maxResults: string, nextToken: string, callback: (data : GetVpcLinksResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/vpclinks?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.
		 * Delete /v2/apis/{apiId}/stages/{stageName}/accesslogsettings
		 * @param {string} apiId The API identifier.
		 * @param {string} stageName The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
		 * @return {void} 
		 */
		DeleteAccessLogSettings(apiId: string, stageName: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages/' + (stageName == null ? '' : encodeURIComponent(stageName)) + '/accesslogsettings', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes an Api resource.
		 * Delete /v2/apis/{apiId}
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		DeleteApi(apiId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets an Api resource.
		 * Get /v2/apis/{apiId}
		 * @param {string} apiId The API identifier.
		 * @return {GetApiResponse} Success
		 */
		GetApi(apiId: string, callback: (data : GetApiResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Puts an Api resource.
		 * Put /v2/apis/{apiId}
		 * @param {string} apiId The API identifier.
		 * @param {string} basepath Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.
		 * @param {boolean} failOnWarnings Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.
		 * @return {void} 
		 */
		ReimportApi(apiId: string, basepath: string, failOnWarnings: boolean, callback: (data : void) => any, requestBody: ReimportApiBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '&basepath=' + (basepath == null ? '' : encodeURIComponent(basepath)) + '&failOnWarnings=' + failOnWarnings, requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes an API mapping.
		 * Delete /v2/domainnames/{domainName}/apimappings/{apiMappingId}
		 * @param {string} apiMappingId The API mapping identifier.
		 * @param {string} domainName The domain name.
		 * @return {void} 
		 */
		DeleteApiMapping(apiMappingId: string, domainName: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/apimappings/' + (apiMappingId == null ? '' : encodeURIComponent(apiMappingId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets an API mapping.
		 * Get /v2/domainnames/{domainName}/apimappings/{apiMappingId}
		 * @param {string} apiMappingId The API mapping identifier.
		 * @param {string} domainName The domain name.
		 * @return {GetApiMappingResponse} Success
		 */
		GetApiMapping(apiMappingId: string, domainName: string, callback: (data : GetApiMappingResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/apimappings/' + (apiMappingId == null ? '' : encodeURIComponent(apiMappingId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes an Authorizer.
		 * Delete /v2/apis/{apiId}/authorizers/{authorizerId}
		 * @param {string} apiId The API identifier.
		 * @param {string} authorizerId The authorizer identifier.
		 * @return {void} 
		 */
		DeleteAuthorizer(apiId: string, authorizerId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/authorizers/' + (authorizerId == null ? '' : encodeURIComponent(authorizerId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets an Authorizer.
		 * Get /v2/apis/{apiId}/authorizers/{authorizerId}
		 * @param {string} apiId The API identifier.
		 * @param {string} authorizerId The authorizer identifier.
		 * @return {GetAuthorizerResponse} Success
		 */
		GetAuthorizer(apiId: string, authorizerId: string, callback: (data : GetAuthorizerResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/authorizers/' + (authorizerId == null ? '' : encodeURIComponent(authorizerId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a CORS configuration.
		 * Delete /v2/apis/{apiId}/cors
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		DeleteCorsConfiguration(apiId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/cors', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a Deployment.
		 * Delete /v2/apis/{apiId}/deployments/{deploymentId}
		 * @param {string} apiId The API identifier.
		 * @param {string} deploymentId The deployment ID.
		 * @return {void} 
		 */
		DeleteDeployment(apiId: string, deploymentId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/deployments/' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets a Deployment.
		 * Get /v2/apis/{apiId}/deployments/{deploymentId}
		 * @param {string} apiId The API identifier.
		 * @param {string} deploymentId The deployment ID.
		 * @return {GetDeploymentResponse} Success
		 */
		GetDeployment(apiId: string, deploymentId: string, callback: (data : GetDeploymentResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/deployments/' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a domain name.
		 * Delete /v2/domainnames/{domainName}
		 * @param {string} domainName The domain name.
		 * @return {void} 
		 */
		DeleteDomainName(domainName: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets a domain name.
		 * Get /v2/domainnames/{domainName}
		 * @param {string} domainName The domain name.
		 * @return {GetDomainNameResponse} Success
		 */
		GetDomainName(domainName: string, callback: (data : GetDomainNameResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes an Integration.
		 * Delete /v2/apis/{apiId}/integrations/{integrationId}
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @return {void} 
		 */
		DeleteIntegration(apiId: string, integrationId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets an Integration.
		 * Get /v2/apis/{apiId}/integrations/{integrationId}
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @return {GetIntegrationResult} Success
		 */
		GetIntegration(apiId: string, integrationId: string, callback: (data : GetIntegrationResult) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes an IntegrationResponses.
		 * Delete /v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @param {string} integrationResponseId The integration response ID.
		 * @return {void} 
		 */
		DeleteIntegrationResponse(apiId: string, integrationId: string, integrationResponseId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)) + '/integrationresponses/' + (integrationResponseId == null ? '' : encodeURIComponent(integrationResponseId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets an IntegrationResponses.
		 * Get /v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @param {string} integrationResponseId The integration response ID.
		 * @return {GetIntegrationResponseResponse} Success
		 */
		GetIntegrationResponse(apiId: string, integrationId: string, integrationResponseId: string, callback: (data : GetIntegrationResponseResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)) + '/integrationresponses/' + (integrationResponseId == null ? '' : encodeURIComponent(integrationResponseId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a Model.
		 * Delete /v2/apis/{apiId}/models/{modelId}
		 * @param {string} apiId The API identifier.
		 * @param {string} modelId The model ID.
		 * @return {void} 
		 */
		DeleteModel(apiId: string, modelId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets a Model.
		 * Get /v2/apis/{apiId}/models/{modelId}
		 * @param {string} apiId The API identifier.
		 * @param {string} modelId The model ID.
		 * @return {GetModelResponse} Success
		 */
		GetModel(apiId: string, modelId: string, callback: (data : GetModelResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a Route.
		 * Delete /v2/apis/{apiId}/routes/{routeId}
		 * @param {string} apiId The API identifier.
		 * @param {string} routeId The route ID.
		 * @return {void} 
		 */
		DeleteRoute(apiId: string, routeId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets a Route.
		 * Get /v2/apis/{apiId}/routes/{routeId}
		 * @param {string} apiId The API identifier.
		 * @param {string} routeId The route ID.
		 * @return {GetRouteResult} Success
		 */
		GetRoute(apiId: string, routeId: string, callback: (data : GetRouteResult) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a route request parameter.
		 * Delete /v2/apis/{apiId}/routes/{routeId}/requestparameters/{requestParameterKey}
		 * @param {string} apiId The API identifier.
		 * @param {string} requestParameterKey The route request parameter key.
		 * @param {string} routeId The route ID.
		 * @return {void} 
		 */
		DeleteRouteRequestParameter(apiId: string, requestParameterKey: string, routeId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)) + '/requestparameters/' + (requestParameterKey == null ? '' : encodeURIComponent(requestParameterKey)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a RouteResponse.
		 * Delete /v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}
		 * @param {string} apiId The API identifier.
		 * @param {string} routeId The route ID.
		 * @param {string} routeResponseId The route response ID.
		 * @return {void} 
		 */
		DeleteRouteResponse(apiId: string, routeId: string, routeResponseId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)) + '/routeresponses/' + (routeResponseId == null ? '' : encodeURIComponent(routeResponseId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets a RouteResponse.
		 * Get /v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}
		 * @param {string} apiId The API identifier.
		 * @param {string} routeId The route ID.
		 * @param {string} routeResponseId The route response ID.
		 * @return {GetRouteResponseResponse} Success
		 */
		GetRouteResponse(apiId: string, routeId: string, routeResponseId: string, callback: (data : GetRouteResponseResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)) + '/routeresponses/' + (routeResponseId == null ? '' : encodeURIComponent(routeResponseId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes the RouteSettings for a stage.
		 * Delete /v2/apis/{apiId}/stages/{stageName}/routesettings/{routeKey}
		 * @param {string} apiId The API identifier.
		 * @param {string} routeKey The route key.
		 * @param {string} stageName The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
		 * @return {void} 
		 */
		DeleteRouteSettings(apiId: string, routeKey: string, stageName: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages/' + (stageName == null ? '' : encodeURIComponent(stageName)) + '/routesettings/' + (routeKey == null ? '' : encodeURIComponent(routeKey)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a Stage.
		 * Delete /v2/apis/{apiId}/stages/{stageName}
		 * @param {string} apiId The API identifier.
		 * @param {string} stageName The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
		 * @return {void} 
		 */
		DeleteStage(apiId: string, stageName: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages/' + (stageName == null ? '' : encodeURIComponent(stageName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets a Stage.
		 * Get /v2/apis/{apiId}/stages/{stageName}
		 * @param {string} apiId The API identifier.
		 * @param {string} stageName The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
		 * @return {GetStageResponse} Success
		 */
		GetStage(apiId: string, stageName: string, callback: (data : GetStageResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages/' + (stageName == null ? '' : encodeURIComponent(stageName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a VPC link.
		 * Delete /v2/vpclinks/{vpcLinkId}
		 * @param {string} vpcLinkId The ID of the VPC link.
		 * @return {void} 
		 */
		DeleteVpcLink(vpcLinkId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/vpclinks/' + (vpcLinkId == null ? '' : encodeURIComponent(vpcLinkId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets a VPC link.
		 * Get /v2/vpclinks/{vpcLinkId}
		 * @param {string} vpcLinkId The ID of the VPC link.
		 * @return {GetVpcLinkResponse} Success
		 */
		GetVpcLink(vpcLinkId: string, callback: (data : GetVpcLinkResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/vpclinks/' + (vpcLinkId == null ? '' : encodeURIComponent(vpcLinkId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get /v2/apis/{apiId}/exports/{specification}#outputType
		 * @param {string} apiId The API identifier.
		 * @param {string} exportVersion The version of the API Gateway export algorithm. API Gateway uses the latest version by default. Currently, the only supported version is 1.0.
		 * @param {boolean} includeExtensions Specifies whether to include <a href="https://docs.aws.amazon.com//apigateway/latest/developerguide/api-gateway-swagger-extensions.html">API Gateway extensions</a> in the exported API definition. API Gateway extensions are included by default.
		 * @param {string} outputType The output type of the exported definition file. Valid values are JSON and YAML.
		 * @param {string} specification The version of the API specification to use. OAS30, for OpenAPI 3.0, is the only supported value.
		 * @param {string} stageName The name of the API stage to export. If you don't specify this property, a representation of the latest API configuration is exported.
		 * @return {ExportApiResponse} Success
		 */
		ExportApi(apiId: string, exportVersion: string, includeExtensions: boolean, outputType: string, specification: string, stageName: string, callback: (data : ExportApiResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/exports/' + (specification == null ? '' : encodeURIComponent(specification)) + '#outputType&exportVersion=' + (exportVersion == null ? '' : encodeURIComponent(exportVersion)) + '&includeExtensions=' + includeExtensions + '&outputType=' + (outputType == null ? '' : encodeURIComponent(outputType)) + '&stageName=' + (stageName == null ? '' : encodeURIComponent(stageName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets a model template.
		 * Get /v2/apis/{apiId}/models/{modelId}/template
		 * @param {string} apiId The API identifier.
		 * @param {string} modelId The model ID.
		 * @return {GetModelTemplateResponse} Success
		 */
		GetModelTemplate(apiId: string, modelId: string, callback: (data : GetModelTemplateResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/models/' + (modelId == null ? '' : encodeURIComponent(modelId)) + '/template', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets a collection of Tag resources.
		 * Get /v2/tags/{resource_arn}
		 * @param {string} resource_arn The resource ARN for the tag.
		 * @return {GetTagsResponse} Success
		 */
		GetTags(resource_arn: string, callback: (data : GetTagsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/v2/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a new Tag resource to represent a tag.
		 * Post /v2/tags/{resource_arn}
		 * @param {string} resource_arn The resource ARN for the tag.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, callback: (data : void) => any, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/v2/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes a Tag.
		 * Delete /v2/tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The resource ARN for the tag.
		 * @param {Array<__string>} tagKeys The Tag keys to delete
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<__string>, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/v2/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}
	}

	export interface CreateApiBody {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		apiKeySelectionExpression?: string;

		/**Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		corsConfiguration?: string;

		/**Represents an Amazon Resource Name (ARN). */
		credentialsArn?: string;

		/**A string with a length between [0-1024]. */
		description?: string;

		/**Avoid validating models when creating a deployment. Supported only for WebSocket APIs. */
		disableSchemaValidation?: boolean;

		/**A string with a length between [1-128]. */
		name: string;

		/**Represents a protocol type. */
		protocolType: CreateApiBodyProtocolType;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		routeKey?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		routeSelectionExpression?: string;

		/**Represents a collection of tags associated with the resource. */
		tags?: string;

		/**A string representation of a URI with a length between [1-2048]. */
		target?: string;

		/**A string with a length between [1-64]. */
		version?: string;
	}

	export enum CreateApiBodyProtocolType { WEBSOCKET = 0, HTTP = 1 }

	export interface ImportApiBody {

		/**The OpenAPI definition. Supported only for HTTP APIs. */
		body: string;
	}

	export interface CreateApiMappingBody {

		/**The identifier. */
		apiId: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		apiMappingKey?: string;

		/**A string with a length between [1-128]. */
		stage: string;
	}

	export interface CreateAuthorizerBody {

		/**Represents an Amazon Resource Name (ARN). */
		authorizerCredentialsArn?: string;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		authorizerResultTtlInSeconds?: number;

		/**The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		authorizerType: CreateAuthorizerBodyAuthorizerType;

		/**A string representation of a URI with a length between [1-2048]. */
		authorizerUri?: string;

		/**The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		identitySource: Array<__string>;

		/**A string with a length between [0-1024]. */
		identityValidationExpression?: string;

		/**Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		jwtConfiguration?: string;

		/**A string with a length between [1-128]. */
		name: string;
	}

	export enum CreateAuthorizerBodyAuthorizerType { REQUEST = 0, JWT = 1 }

	export interface CreateDeploymentBody {

		/**A string with a length between [0-1024]. */
		description?: string;

		/**A string with a length between [1-128]. */
		stageName?: string;
	}

	export interface CreateDomainNameBody {

		/**A string with a length between [1-512]. */
		domainName: string;

		/**The domain name configurations. */
		domainNameConfigurations?: Array<DomainNameConfiguration>;

		/**Represents a collection of tags associated with the resource. */
		tags?: string;
	}

	export interface CreateIntegrationBody {

		/**A string with a length between [1-1024]. */
		connectionId?: string;

		/**Represents a connection type. */
		connectionType?: CreateIntegrationBodyConnectionType;

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy?: CreateIntegrationBodyContentHandlingStrategy;

		/**Represents an Amazon Resource Name (ARN). */
		credentialsArn?: string;

		/**A string with a length between [0-1024]. */
		description?: string;

		/**A string with a length between [1-64]. */
		integrationMethod?: string;

		/**Represents an API method integration type. */
		integrationType: CreateIntegrationBodyIntegrationType;

		/**A string representation of a URI with a length between [1-2048]. */
		integrationUri?: string;

		/**Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		passthroughBehavior?: CreateIntegrationBodyPassthroughBehavior;

		/**A string with a length between [1-64]. */
		payloadFormatVersion?: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		requestParameters?: string;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		requestTemplates?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression?: string;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		timeoutInMillis?: number;

		/**The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		tlsConfig?: string;
	}

	export enum CreateIntegrationBodyConnectionType { INTERNET = 0, VPC_LINK = 1 }

	export enum CreateIntegrationBodyContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export enum CreateIntegrationBodyIntegrationType { AWS = 0, HTTP = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }

	export enum CreateIntegrationBodyPassthroughBehavior { WHEN_NO_MATCH = 0, NEVER = 1, WHEN_NO_TEMPLATES = 2 }

	export interface CreateIntegrationResponseBody {

		/**Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy?: CreateIntegrationResponseBodyContentHandlingStrategy;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		integrationResponseKey: string;

		/**A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		responseParameters?: string;

		/**A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		responseTemplates?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression?: string;
	}

	export enum CreateIntegrationResponseBodyContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export interface CreateModelBody {

		/**A string with a length between [1-256]. */
		contentType?: string;

		/**A string with a length between [0-1024]. */
		description?: string;

		/**A string with a length between [1-128]. */
		name: string;

		/**A string with a length between [0-32768]. */
		schema: string;
	}

	export interface CreateRouteBody {

		/**Specifies whether an API key is required for the route. Supported only for WebSocket APIs. */
		apiKeyRequired?: boolean;

		/**A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		authorizationScopes?: Array<StringWithLengthBetween1And64>;

		/**The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		authorizationType?: CreateRouteBodyAuthorizationType;

		/**The identifier. */
		authorizerId?: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression?: string;

		/**A string with a length between [1-64]. */
		operationName?: string;

		/**The route models. */
		requestModels?: string;

		/**The route parameters. */
		requestParameters?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		routeKey: string;

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		routeResponseSelectionExpression?: string;

		/**A string with a length between [1-128]. */
		target?: string;
	}

	export enum CreateRouteBodyAuthorizationType { NONE = 0, AWS_IAM = 1, CUSTOM = 2, JWT = 3 }

	export interface CreateRouteResponseBody {

		/**An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression?: string;

		/**The route models. */
		responseModels?: string;

		/**The route parameters. */
		responseParameters?: string;

		/**After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		routeResponseKey: string;
	}

	export interface CreateStageBody {

		/**Settings for logging access in a stage. */
		accessLogSettings?: string;

		/**Specifies whether updates to an API automatically trigger a new deployment. The default value is false. */
		autoDeploy?: boolean;

		/**The identifier. */
		clientCertificateId?: string;

		/**Represents a collection of route settings. */
		defaultRouteSettings?: string;

		/**The identifier. */
		deploymentId?: string;

		/**A string with a length between [0-1024]. */
		description?: string;

		/**The route settings map. */
		routeSettings?: string;

		/**A string with a length between [1-128]. */
		stageName: string;

		/**The stage variable map. */
		stageVariables?: string;

		/**Represents a collection of tags associated with the resource. */
		tags?: string;
	}

	export interface CreateVpcLinkBody {

		/**A string with a length between [1-128]. */
		name: string;

		/**A list of security group IDs for the VPC link. */
		securityGroupIds?: Array<__string>;

		/**A list of subnet IDs to include in the VPC link. */
		subnetIds: Array<__string>;

		/**Represents a collection of tags associated with the resource. */
		tags?: string;
	}

	export interface ReimportApiBody {

		/**The OpenAPI definition. Supported only for HTTP APIs. */
		body: string;
	}

	export interface TagResourceBody {

		/**Represents a collection of tags associated with the resource. */
		tags?: string;
	}

}

