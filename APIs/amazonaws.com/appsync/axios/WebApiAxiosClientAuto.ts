import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {

	/**Represents the output of a <code>CreateApiCache</code> operation. */
	export interface CreateApiCacheResponse {

		/**The <code>ApiCache</code> object. */
		apiCache?: ApiCache;
	}

	export interface CreateApiKeyResponse {

		/**<p>Describes an API key.</p> <p>Customers invoke AWS AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: This version was introduced at launch in November 2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB TTL. The keys ceased to be valid after February 21, 2018 and should not be used after that date.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we will delete these keys from the table after February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: This version was introduced in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds. Key expiration can only be updated while the key has not expired.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as seconds.</p> </li> </ul> */
		apiKey?: ApiKey;
	}

	export interface CreateDataSourceResponse {

		/**Describes a data source. */
		dataSource?: DataSource;
	}


	/**Describes a Delta Sync configuration. */
	export interface DeltaSyncConfig {
		baseTableTTL?: number;
		deltaSyncTableName?: string;
		deltaSyncTableTTL?: number;
	}


	/**The authorization config in case the HTTP endpoint requires authorization. */
	export interface AuthorizationConfig {
		authorizationType: AuthorizationConfigAuthorizationType;

		/**The AWS IAM configuration. */
		awsIamConfig?: AwsIamConfig;
	}

	export enum AuthorizationConfigAuthorizationType { AWS_IAM = 0 }

	export enum RelationalDatabaseSourceType { RDS_HTTP_ENDPOINT = 0 }


	/**The Amazon RDS HTTP endpoint configuration. */
	export interface RdsHttpEndpointConfig {
		awsRegion?: string;
		dbClusterIdentifier?: string;
		databaseName?: string;
		schema?: string;
		awsSecretStoreArn?: string;
	}

	export interface CreateFunctionResponse {

		/**A function is a reusable entity. Multiple functions can be used to compose the resolver logic. */
		functionConfiguration?: FunctionConfiguration;
	}

	export interface CreateGraphqlApiResponse {

		/**Describes a GraphQL API. */
		graphqlApi?: GraphqlApi;
	}

	export enum FieldLogLevel { NONE = 0, ERROR = 1, ALL = 2 }

	export enum DefaultAction { ALLOW = 0, DENY = 1 }


	/**Describes an additional authentication provider. */
	export interface AdditionalAuthenticationProvider {
		authenticationType?: AdditionalAuthenticationProviderAuthenticationType;

		/**Describes an OpenID Connect configuration. */
		openIDConnectConfig?: OpenIDConnectConfig;

		/**Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: CognitoUserPoolConfig;
	}

	export enum AdditionalAuthenticationProviderAuthenticationType { API_KEY = 0, AWS_IAM = 1, AMAZON_COGNITO_USER_POOLS = 2, OPENID_CONNECT = 3 }

	export interface CreateResolverResponse {

		/**Describes a resolver. */
		resolver?: Resolver;
	}

	export enum ConflictHandlerType { OPTIMISTIC_CONCURRENCY = 0, LAMBDA = 1, AUTOMERGE = 2, NONE = 3 }

	export enum ConflictDetectionType { VERSION = 0, NONE = 1 }


	/**The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler. */
	export interface LambdaConflictHandlerConfig {
		lambdaConflictHandlerArn?: string;
	}

	export interface CreateTypeResponse {

		/**Describes a type. */
		type?: Type;
	}


	/**Represents the output of a <code>GetApiCache</code> operation. */
	export interface GetApiCacheResponse {

		/**The <code>ApiCache</code> object. */
		apiCache?: ApiCache;
	}

	export interface GetDataSourceResponse {

		/**Describes a data source. */
		dataSource?: DataSource;
	}

	export interface GetFunctionResponse {

		/**A function is a reusable entity. Multiple functions can be used to compose the resolver logic. */
		functionConfiguration?: FunctionConfiguration;
	}

	export interface GetGraphqlApiResponse {

		/**Describes a GraphQL API. */
		graphqlApi?: GraphqlApi;
	}

	export interface GetIntrospectionSchemaResponse {
		schema?: string;
	}

	export interface GetResolverResponse {

		/**Describes a resolver. */
		resolver?: Resolver;
	}

	export interface GetSchemaCreationStatusResponse {
		status?: GetSchemaCreationStatusResponseStatus;
		details?: string;
	}

	export enum GetSchemaCreationStatusResponseStatus { PROCESSING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, SUCCESS = 4, NOT_APPLICABLE = 5 }

	export interface GetTypeResponse {

		/**Describes a type. */
		type?: Type;
	}

	export interface ListApiKeysResponse {
		apiKeys?: Array<ApiKey>;
		nextToken?: string;
	}

	export interface ListDataSourcesResponse {
		dataSources?: Array<DataSource>;
		nextToken?: string;
	}

	export interface ListFunctionsResponse {
		functions?: Array<FunctionConfiguration>;
		nextToken?: string;
	}

	export interface ListGraphqlApisResponse {
		graphqlApis?: Array<GraphqlApi>;
		nextToken?: string;
	}

	export interface ListResolversResponse {
		resolvers?: Array<Resolver>;
		nextToken?: string;
	}

	export interface ListResolversByFunctionResponse {
		resolvers?: Array<Resolver>;
		nextToken?: string;
	}

	export interface ListTagsForResourceResponse {

		/**A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags?: TagMap;
	}

	export interface ListTypesResponse {
		types?: Array<Type>;
		nextToken?: string;
	}

	export interface StartSchemaCreationResponse {
		status?: StartSchemaCreationResponseStatus;
	}

	export enum StartSchemaCreationResponseStatus { PROCESSING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, SUCCESS = 4, NOT_APPLICABLE = 5 }


	/**Represents the output of a <code>UpdateApiCache</code> operation. */
	export interface UpdateApiCacheResponse {

		/**The <code>ApiCache</code> object. */
		apiCache?: ApiCache;
	}

	export interface UpdateApiKeyResponse {

		/**<p>Describes an API key.</p> <p>Customers invoke AWS AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: This version was introduced at launch in November 2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB TTL. The keys ceased to be valid after February 21, 2018 and should not be used after that date.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we will delete these keys from the table after February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: This version was introduced in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds. Key expiration can only be updated while the key has not expired.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as seconds.</p> </li> </ul> */
		apiKey?: ApiKey;
	}

	export interface UpdateDataSourceResponse {

		/**Describes a data source. */
		dataSource?: DataSource;
	}

	export interface UpdateFunctionResponse {

		/**A function is a reusable entity. Multiple functions can be used to compose the resolver logic. */
		functionConfiguration?: FunctionConfiguration;
	}

	export interface UpdateGraphqlApiResponse {

		/**Describes a GraphQL API. */
		graphqlApi?: GraphqlApi;
	}

	export interface UpdateResolverResponse {

		/**Describes a resolver. */
		resolver?: Resolver;
	}

	export interface UpdateTypeResponse {

		/**Describes a type. */
		type?: Type;
	}

	export enum AuthenticationType { API_KEY = 0, AWS_IAM = 1, AMAZON_COGNITO_USER_POOLS = 2, OPENID_CONNECT = 3 }


	/**Describes an OpenID Connect configuration. */
	export interface OpenIDConnectConfig {
		issuer: string;
		clientId?: string;
		iatTTL?: number;
		authTTL?: number;
	}


	/**Describes an Amazon Cognito user pool configuration. */
	export interface CognitoUserPoolConfig {
		userPoolId: string;
		awsRegion: string;
		appIdClientRegex?: string;
	}

	export enum ApiCachingBehavior { FULL_REQUEST_CACHING = 0, PER_RESOLVER_CACHING = 1 }

	export enum ApiCacheType { T2_SMALL = 0, T2_MEDIUM = 1, R4_LARGE = 2, R4_XLARGE = 3, R4_2XLARGE = 4, R4_4XLARGE = 5, R4_8XLARGE = 6 }

	export enum ApiCacheStatus { AVAILABLE = 0, CREATING = 1, DELETING = 2, MODIFYING = 3, FAILED = 4 }


	/**The <code>ApiCache</code> object. */
	export interface ApiCache {
		ttl?: number;
		apiCachingBehavior?: ApiCacheApiCachingBehavior;
		transitEncryptionEnabled?: boolean;
		atRestEncryptionEnabled?: boolean;
		type?: ApiCacheType;
		status?: ApiCacheStatus;
	}

	export enum ApiCacheApiCachingBehavior { FULL_REQUEST_CACHING = 0, PER_RESOLVER_CACHING = 1 }

	export enum ApiCacheType { T2_SMALL = 0, T2_MEDIUM = 1, R4_LARGE = 2, R4_XLARGE = 3, R4_2XLARGE = 4, R4_4XLARGE = 5, R4_8XLARGE = 6 }

	export enum ApiCacheStatus { AVAILABLE = 0, CREATING = 1, DELETING = 2, MODIFYING = 3, FAILED = 4 }


	/**<p>Describes an API key.</p> <p>Customers invoke AWS AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: This version was introduced at launch in November 2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB TTL. The keys ceased to be valid after February 21, 2018 and should not be used after that date.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we will delete these keys from the table after February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: This version was introduced in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds. Key expiration can only be updated while the key has not expired.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as seconds.</p> </li> </ul> */
	export interface ApiKey {
		id?: string;
		description?: string;
		expires?: number;
	}

	export enum AuthorizationType { AWS_IAM = 0 }


	/**The AWS IAM configuration. */
	export interface AwsIamConfig {
		signingRegion?: string;
		signingServiceName?: string;
	}


	/**The caching configuration for a resolver that has caching enabled. */
	export interface CachingConfig {
		ttl?: number;
		cachingKeys?: Array<String>;
	}


	/**Represents the input of a <code>CreateApiCache</code> operation. */
	export interface CreateApiCacheRequest {
		ttl: number;
		transitEncryptionEnabled?: boolean;
		atRestEncryptionEnabled?: boolean;
		apiCachingBehavior: CreateApiCacheRequestApiCachingBehavior;
		type: CreateApiCacheRequestType;
	}

	export enum CreateApiCacheRequestApiCachingBehavior { FULL_REQUEST_CACHING = 0, PER_RESOLVER_CACHING = 1 }

	export enum CreateApiCacheRequestType { T2_SMALL = 0, T2_MEDIUM = 1, R4_LARGE = 2, R4_XLARGE = 3, R4_2XLARGE = 4, R4_4XLARGE = 5, R4_8XLARGE = 6 }

	export interface CreateApiKeyRequest {
		description?: string;
		expires?: number;
	}

	export enum DataSourceType { AWS_LAMBDA = 0, AMAZON_DYNAMODB = 1, AMAZON_ELASTICSEARCH = 2, NONE = 3, HTTP = 4, RELATIONAL_DATABASE = 5 }


	/**Describes an Amazon DynamoDB data source configuration. */
	export interface DynamodbDataSourceConfig {
		tableName: string;
		awsRegion: string;
		useCallerCredentials?: boolean;

		/**Describes a Delta Sync configuration. */
		deltaSyncConfig?: DeltaSyncConfig;
		versioned?: boolean;
	}


	/**Describes an AWS Lambda data source configuration. */
	export interface LambdaDataSourceConfig {
		lambdaFunctionArn: string;
	}


	/**Describes an Elasticsearch data source configuration. */
	export interface ElasticsearchDataSourceConfig {
		endpoint: string;
		awsRegion: string;
	}


	/**Describes an HTTP data source configuration. */
	export interface HttpDataSourceConfig {
		endpoint?: string;

		/**The authorization config in case the HTTP endpoint requires authorization. */
		authorizationConfig?: AuthorizationConfig;
	}


	/**Describes a relational database data source configuration. */
	export interface RelationalDatabaseDataSourceConfig {
		relationalDatabaseSourceType?: RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType;

		/**The Amazon RDS HTTP endpoint configuration. */
		rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
	}

	export enum RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType { RDS_HTTP_ENDPOINT = 0 }

	export interface CreateDataSourceRequest {
		name: string;
		description?: string;
		type: CreateDataSourceRequestType;
		serviceRoleArn?: string;

		/**Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: DynamodbDataSourceConfig;

		/**Describes an AWS Lambda data source configuration. */
		lambdaConfig?: LambdaDataSourceConfig;

		/**Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: ElasticsearchDataSourceConfig;

		/**Describes an HTTP data source configuration. */
		httpConfig?: HttpDataSourceConfig;

		/**Describes a relational database data source configuration. */
		relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
	}

	export enum CreateDataSourceRequestType { AWS_LAMBDA = 0, AMAZON_DYNAMODB = 1, AMAZON_ELASTICSEARCH = 2, NONE = 3, HTTP = 4, RELATIONAL_DATABASE = 5 }


	/**Describes a data source. */
	export interface DataSource {
		dataSourceArn?: string;
		name?: string;
		description?: string;
		type?: DataSourceType;
		serviceRoleArn?: string;

		/**Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: DynamodbDataSourceConfig;

		/**Describes an AWS Lambda data source configuration. */
		lambdaConfig?: LambdaDataSourceConfig;

		/**Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: ElasticsearchDataSourceConfig;

		/**Describes an HTTP data source configuration. */
		httpConfig?: HttpDataSourceConfig;

		/**Describes a relational database data source configuration. */
		relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
	}

	export enum DataSourceType { AWS_LAMBDA = 0, AMAZON_DYNAMODB = 1, AMAZON_ELASTICSEARCH = 2, NONE = 3, HTTP = 4, RELATIONAL_DATABASE = 5 }

	export interface CreateFunctionRequest {
		name: string;
		description?: string;
		dataSourceName: string;
		requestMappingTemplate: string;
		responseMappingTemplate?: string;
		functionVersion: string;
	}


	/**A function is a reusable entity. Multiple functions can be used to compose the resolver logic. */
	export interface FunctionConfiguration {
		functionId?: string;
		functionArn?: string;
		name?: string;
		description?: string;
		dataSourceName?: string;
		requestMappingTemplate?: string;
		responseMappingTemplate?: string;
		functionVersion?: string;
	}


	/**The CloudWatch Logs configuration. */
	export interface LogConfig {
		fieldLogLevel: LogConfigFieldLogLevel;
		cloudWatchLogsRoleArn: string;
		excludeVerboseContent?: boolean;
	}

	export enum LogConfigFieldLogLevel { NONE = 0, ERROR = 1, ALL = 2 }


	/**Describes an Amazon Cognito user pool configuration. */
	export interface UserPoolConfig {
		userPoolId: string;
		awsRegion: string;
		defaultAction: UserPoolConfigDefaultAction;
		appIdClientRegex?: string;
	}

	export enum UserPoolConfigDefaultAction { ALLOW = 0, DENY = 1 }

	export interface CreateGraphqlApiRequest {
		name: string;

		/**The CloudWatch Logs configuration. */
		logConfig?: LogConfig;
		authenticationType: CreateGraphqlApiRequestAuthenticationType;

		/**Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: UserPoolConfig;

		/**Describes an OpenID Connect configuration. */
		openIDConnectConfig?: OpenIDConnectConfig;

		/**A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags?: TagMap;
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;
		xrayEnabled?: boolean;
	}

	export enum CreateGraphqlApiRequestAuthenticationType { API_KEY = 0, AWS_IAM = 1, AMAZON_COGNITO_USER_POOLS = 2, OPENID_CONNECT = 3 }


	/**Describes a GraphQL API. */
	export interface GraphqlApi {
		name?: string;
		apiId?: string;
		authenticationType?: GraphqlApiAuthenticationType;

		/**The CloudWatch Logs configuration. */
		logConfig?: LogConfig;

		/**Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: UserPoolConfig;

		/**Describes an OpenID Connect configuration. */
		openIDConnectConfig?: OpenIDConnectConfig;
		arn?: string;
		uris?: MapOfStringToString;

		/**A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags?: TagMap;
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;
		xrayEnabled?: boolean;
	}

	export enum GraphqlApiAuthenticationType { API_KEY = 0, AWS_IAM = 1, AMAZON_COGNITO_USER_POOLS = 2, OPENID_CONNECT = 3 }

	export enum ResolverKind { UNIT = 0, PIPELINE = 1 }


	/**The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
	export interface PipelineConfig {
		functions?: Array<String>;
	}


	/**<p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
	export interface SyncConfig {
		conflictHandler?: SyncConfigConflictHandler;
		conflictDetection?: SyncConfigConflictDetection;

		/**The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler. */
		lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
	}

	export enum SyncConfigConflictHandler { OPTIMISTIC_CONCURRENCY = 0, LAMBDA = 1, AUTOMERGE = 2, NONE = 3 }

	export enum SyncConfigConflictDetection { VERSION = 0, NONE = 1 }

	export interface CreateResolverRequest {
		fieldName: string;
		dataSourceName?: string;
		requestMappingTemplate: string;
		responseMappingTemplate?: string;
		kind?: CreateResolverRequestKind;

		/**The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: PipelineConfig;

		/**<p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: SyncConfig;

		/**The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: CachingConfig;
	}

	export enum CreateResolverRequestKind { UNIT = 0, PIPELINE = 1 }


	/**Describes a resolver. */
	export interface Resolver {
		typeName?: string;
		fieldName?: string;
		dataSourceName?: string;
		resolverArn?: string;
		requestMappingTemplate?: string;
		responseMappingTemplate?: string;
		kind?: ResolverKind;

		/**The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: PipelineConfig;

		/**<p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: SyncConfig;

		/**The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: CachingConfig;
	}

	export enum ResolverKind { UNIT = 0, PIPELINE = 1 }

	export enum TypeDefinitionFormat { SDL = 0, JSON = 1 }

	export interface CreateTypeRequest {
		definition: string;
		format: CreateTypeRequestFormat;
	}

	export enum CreateTypeRequestFormat { SDL = 0, JSON = 1 }


	/**Describes a type. */
	export interface Type {
		name?: string;
		description?: string;
		arn?: string;
		definition?: string;
		format?: TypeFormat;
	}

	export enum TypeFormat { SDL = 0, JSON = 1 }

	export enum OutputType { SDL = 0, JSON = 1 }

	export enum SchemaStatus { PROCESSING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, SUCCESS = 4, NOT_APPLICABLE = 5 }

	export interface StartSchemaCreationRequest {
		definition: string;
	}

	export interface TagResourceRequest {

		/**A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags: TagMap;
	}


	/**Represents the input of a <code>UpdateApiCache</code> operation. */
	export interface UpdateApiCacheRequest {
		ttl: number;
		apiCachingBehavior: UpdateApiCacheRequestApiCachingBehavior;
		type: UpdateApiCacheRequestType;
	}

	export enum UpdateApiCacheRequestApiCachingBehavior { FULL_REQUEST_CACHING = 0, PER_RESOLVER_CACHING = 1 }

	export enum UpdateApiCacheRequestType { T2_SMALL = 0, T2_MEDIUM = 1, R4_LARGE = 2, R4_XLARGE = 3, R4_2XLARGE = 4, R4_4XLARGE = 5, R4_8XLARGE = 6 }

	export interface UpdateApiKeyRequest {
		description?: string;
		expires?: number;
	}

	export interface UpdateDataSourceRequest {
		description?: string;
		type: UpdateDataSourceRequestType;
		serviceRoleArn?: string;

		/**Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: DynamodbDataSourceConfig;

		/**Describes an AWS Lambda data source configuration. */
		lambdaConfig?: LambdaDataSourceConfig;

		/**Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: ElasticsearchDataSourceConfig;

		/**Describes an HTTP data source configuration. */
		httpConfig?: HttpDataSourceConfig;

		/**Describes a relational database data source configuration. */
		relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
	}

	export enum UpdateDataSourceRequestType { AWS_LAMBDA = 0, AMAZON_DYNAMODB = 1, AMAZON_ELASTICSEARCH = 2, NONE = 3, HTTP = 4, RELATIONAL_DATABASE = 5 }

	export interface UpdateFunctionRequest {
		name: string;
		description?: string;
		dataSourceName: string;
		requestMappingTemplate: string;
		responseMappingTemplate?: string;
		functionVersion: string;
	}

	export interface UpdateGraphqlApiRequest {
		name: string;

		/**The CloudWatch Logs configuration. */
		logConfig?: LogConfig;
		authenticationType?: UpdateGraphqlApiRequestAuthenticationType;

		/**Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: UserPoolConfig;

		/**Describes an OpenID Connect configuration. */
		openIDConnectConfig?: OpenIDConnectConfig;
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;
		xrayEnabled?: boolean;
	}

	export enum UpdateGraphqlApiRequestAuthenticationType { API_KEY = 0, AWS_IAM = 1, AMAZON_COGNITO_USER_POOLS = 2, OPENID_CONNECT = 3 }

	export interface UpdateResolverRequest {
		dataSourceName?: string;
		requestMappingTemplate: string;
		responseMappingTemplate?: string;
		kind?: UpdateResolverRequestKind;

		/**The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: PipelineConfig;

		/**<p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: SyncConfig;

		/**The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: CachingConfig;
	}

	export enum UpdateResolverRequestKind { UNIT = 0, PIPELINE = 1 }

	export interface UpdateTypeRequest {
		definition?: string;
		format: UpdateTypeRequestFormat;
	}

	export enum UpdateTypeRequestFormat { SDL = 0, JSON = 1 }

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Creates a cache for the GraphQL API.
		 * Post /v1/apis/{apiId}/ApiCaches
		 * @param {string} apiId The GraphQL API Id.
		 * @return {CreateApiCacheResponse} Success
		 */
		CreateApiCache(apiId: string, requestBody: CreateApiCacheBody, headersHandler?: () => {[header: string]: string}): Promise<CreateApiCacheResponse> {
			return Axios.post<CreateApiCacheResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/ApiCaches', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes an <code>ApiCache</code> object.
		 * Delete /v1/apis/{apiId}/ApiCaches
		 * @param {string} apiId The API ID.
		 * @return {DeleteApiCacheResponse} Success
		 */
		DeleteApiCache(apiId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteApiCacheResponse> {
			return Axios.delete<DeleteApiCacheResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/ApiCaches', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieves an <code>ApiCache</code> object.
		 * Get /v1/apis/{apiId}/ApiCaches
		 * @param {string} apiId The API ID.
		 * @return {GetApiCacheResponse} Success
		 */
		GetApiCache(apiId: string, headersHandler?: () => {[header: string]: string}): Promise<GetApiCacheResponse> {
			return Axios.get<GetApiCacheResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/ApiCaches', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Creates a unique key that you can distribute to clients who are executing your API.
		 * Post /v1/apis/{apiId}/apikeys
		 * @param {string} apiId The ID for your GraphQL API.
		 * @return {CreateApiKeyResponse} Success
		 */
		CreateApiKey(apiId: string, requestBody: CreateApiKeyBody, headersHandler?: () => {[header: string]: string}): Promise<CreateApiKeyResponse> {
			return Axios.post<CreateApiKeyResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/apikeys', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically sometime after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
		 * Get /v1/apis/{apiId}/apikeys
		 * @param {string} apiId The API ID.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListApiKeysResponse} Success
		 */
		ListApiKeys(apiId: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListApiKeysResponse> {
			return Axios.get<ListApiKeysResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/apikeys&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Creates a <code>DataSource</code> object.
		 * Post /v1/apis/{apiId}/datasources
		 * @param {string} apiId The API ID for the GraphQL API for the <code>DataSource</code>.
		 * @return {CreateDataSourceResponse} Success
		 */
		CreateDataSource(apiId: string, requestBody: CreateDataSourceBody, headersHandler?: () => {[header: string]: string}): Promise<CreateDataSourceResponse> {
			return Axios.post<CreateDataSourceResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/datasources', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists the data sources for a given API.
		 * Get /v1/apis/{apiId}/datasources
		 * @param {string} apiId The API ID.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListDataSourcesResponse} Success
		 */
		ListDataSources(apiId: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListDataSourcesResponse> {
			return Axios.get<ListDataSourcesResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/datasources&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. Multiple functions can be used to compose the resolver logic.</p>
		 * Post /v1/apis/{apiId}/functions
		 * @param {string} apiId The GraphQL API ID.
		 * @return {CreateFunctionResponse} Success
		 */
		CreateFunction(apiId: string, requestBody: CreateFunctionBody, headersHandler?: () => {[header: string]: string}): Promise<CreateFunctionResponse> {
			return Axios.post<CreateFunctionResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/functions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * List multiple functions.
		 * Get /v1/apis/{apiId}/functions
		 * @param {string} apiId The GraphQL API ID.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListFunctionsResponse} Success
		 */
		ListFunctions(apiId: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListFunctionsResponse> {
			return Axios.get<ListFunctionsResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/functions&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Creates a <code>GraphqlApi</code> object.
		 * Post /v1/apis
		 * @return {CreateGraphqlApiResponse} Success
		 */
		CreateGraphqlApi(requestBody: CreateGraphqlApiBody, headersHandler?: () => {[header: string]: string}): Promise<CreateGraphqlApiResponse> {
			return Axios.post<CreateGraphqlApiResponse>(this.baseUri + '/v1/apis', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists your GraphQL APIs.
		 * Get /v1/apis
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListGraphqlApisResponse} Success
		 */
		ListGraphqlApis(nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListGraphqlApisResponse> {
			return Axios.get<ListGraphqlApisResponse>(this.baseUri + '/v1/apis?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand and converts the data source's responses into GraphQL.</p>
		 * Post /v1/apis/{apiId}/types/{typeName}/resolvers
		 * @param {string} apiId The ID for the GraphQL API for which the resolver is being created.
		 * @param {string} typeName The name of the <code>Type</code>.
		 * @return {CreateResolverResponse} Success
		 */
		CreateResolver(apiId: string, typeName: string, requestBody: CreateResolverBody, headersHandler?: () => {[header: string]: string}): Promise<CreateResolverResponse> {
			return Axios.post<CreateResolverResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '/resolvers', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists the resolvers for a given API and type.
		 * Get /v1/apis/{apiId}/types/{typeName}/resolvers
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The type name.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListResolversResponse} Success
		 */
		ListResolvers(apiId: string, typeName: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListResolversResponse> {
			return Axios.get<ListResolversResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '/resolvers&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Creates a <code>Type</code> object.
		 * Post /v1/apis/{apiId}/types
		 * @param {string} apiId The API ID.
		 * @return {CreateTypeResponse} Success
		 */
		CreateType(apiId: string, requestBody: CreateTypeBody, headersHandler?: () => {[header: string]: string}): Promise<CreateTypeResponse> {
			return Axios.post<CreateTypeResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes an API key.
		 * Delete /v1/apis/{apiId}/apikeys/{id}
		 * @param {string} apiId The API ID.
		 * @param {string} id The ID for the API key.
		 * @return {DeleteApiKeyResponse} Success
		 */
		DeleteApiKey(apiId: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteApiKeyResponse> {
			return Axios.delete<DeleteApiKeyResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/apikeys/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates an API key.
		 * Post /v1/apis/{apiId}/apikeys/{id}
		 * @param {string} apiId The ID for the GraphQL API.
		 * @param {string} id The API key ID.
		 * @return {UpdateApiKeyResponse} Success
		 */
		UpdateApiKey(apiId: string, id: string, requestBody: UpdateApiKeyBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateApiKeyResponse> {
			return Axios.post<UpdateApiKeyResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/apikeys/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes a <code>DataSource</code> object.
		 * Delete /v1/apis/{apiId}/datasources/{name}
		 * @param {string} apiId The API ID.
		 * @param {string} name The name of the data source.
		 * @return {DeleteDataSourceResponse} Success
		 */
		DeleteDataSource(apiId: string, name: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteDataSourceResponse> {
			return Axios.delete<DeleteDataSourceResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/datasources/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieves a <code>DataSource</code> object.
		 * Get /v1/apis/{apiId}/datasources/{name}
		 * @param {string} apiId The API ID.
		 * @param {string} name The name of the data source.
		 * @return {GetDataSourceResponse} Success
		 */
		GetDataSource(apiId: string, name: string, headersHandler?: () => {[header: string]: string}): Promise<GetDataSourceResponse> {
			return Axios.get<GetDataSourceResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/datasources/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates a <code>DataSource</code> object.
		 * Post /v1/apis/{apiId}/datasources/{name}
		 * @param {string} apiId The API ID.
		 * @param {string} name The new name for the data source.
		 * @return {UpdateDataSourceResponse} Success
		 */
		UpdateDataSource(apiId: string, name: string, requestBody: UpdateDataSourceBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateDataSourceResponse> {
			return Axios.post<UpdateDataSourceResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/datasources/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes a <code>Function</code>.
		 * Delete /v1/apis/{apiId}/functions/{functionId}
		 * @param {string} apiId The GraphQL API ID.
		 * @param {string} functionId The <code>Function</code> ID.
		 * @return {DeleteFunctionResponse} Success
		 */
		DeleteFunction(apiId: string, functionId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteFunctionResponse> {
			return Axios.delete<DeleteFunctionResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/functions/' + (functionId == null ? '' : encodeURIComponent(functionId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get a <code>Function</code>.
		 * Get /v1/apis/{apiId}/functions/{functionId}
		 * @param {string} apiId The GraphQL API ID.
		 * @param {string} functionId The <code>Function</code> ID.
		 * @return {GetFunctionResponse} Success
		 */
		GetFunction(apiId: string, functionId: string, headersHandler?: () => {[header: string]: string}): Promise<GetFunctionResponse> {
			return Axios.get<GetFunctionResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/functions/' + (functionId == null ? '' : encodeURIComponent(functionId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates a <code>Function</code> object.
		 * Post /v1/apis/{apiId}/functions/{functionId}
		 * @param {string} apiId The GraphQL API ID.
		 * @param {string} functionId The function ID.
		 * @return {UpdateFunctionResponse} Success
		 */
		UpdateFunction(apiId: string, functionId: string, requestBody: UpdateFunctionBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateFunctionResponse> {
			return Axios.post<UpdateFunctionResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/functions/' + (functionId == null ? '' : encodeURIComponent(functionId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes a <code>GraphqlApi</code> object.
		 * Delete /v1/apis/{apiId}
		 * @param {string} apiId The API ID.
		 * @return {DeleteGraphqlApiResponse} Success
		 */
		DeleteGraphqlApi(apiId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteGraphqlApiResponse> {
			return Axios.delete<DeleteGraphqlApiResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieves a <code>GraphqlApi</code> object.
		 * Get /v1/apis/{apiId}
		 * @param {string} apiId The API ID for the GraphQL API.
		 * @return {GetGraphqlApiResponse} Success
		 */
		GetGraphqlApi(apiId: string, headersHandler?: () => {[header: string]: string}): Promise<GetGraphqlApiResponse> {
			return Axios.get<GetGraphqlApiResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates a <code>GraphqlApi</code> object.
		 * Post /v1/apis/{apiId}
		 * @param {string} apiId The API ID.
		 * @return {UpdateGraphqlApiResponse} Success
		 */
		UpdateGraphqlApi(apiId: string, requestBody: UpdateGraphqlApiBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateGraphqlApiResponse> {
			return Axios.post<UpdateGraphqlApiResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes a <code>Resolver</code> object.
		 * Delete /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The name of the resolver type.
		 * @param {string} fieldName The resolver field name.
		 * @return {DeleteResolverResponse} Success
		 */
		DeleteResolver(apiId: string, typeName: string, fieldName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteResolverResponse> {
			return Axios.delete<DeleteResolverResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '/resolvers/' + (fieldName == null ? '' : encodeURIComponent(fieldName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieves a <code>Resolver</code> object.
		 * Get /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The resolver type name.
		 * @param {string} fieldName The resolver field name.
		 * @return {GetResolverResponse} Success
		 */
		GetResolver(apiId: string, typeName: string, fieldName: string, headersHandler?: () => {[header: string]: string}): Promise<GetResolverResponse> {
			return Axios.get<GetResolverResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '/resolvers/' + (fieldName == null ? '' : encodeURIComponent(fieldName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates a <code>Resolver</code> object.
		 * Post /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The new type name.
		 * @param {string} fieldName The new field name.
		 * @return {UpdateResolverResponse} Success
		 */
		UpdateResolver(apiId: string, typeName: string, fieldName: string, requestBody: UpdateResolverBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateResolverResponse> {
			return Axios.post<UpdateResolverResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '/resolvers/' + (fieldName == null ? '' : encodeURIComponent(fieldName)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes a <code>Type</code> object.
		 * Delete /v1/apis/{apiId}/types/{typeName}
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The type name.
		 * @return {DeleteTypeResponse} Success
		 */
		DeleteType(apiId: string, typeName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteTypeResponse> {
			return Axios.delete<DeleteTypeResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates a <code>Type</code> object.
		 * Post /v1/apis/{apiId}/types/{typeName}
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The new type name.
		 * @return {UpdateTypeResponse} Success
		 */
		UpdateType(apiId: string, typeName: string, requestBody: UpdateTypeBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateTypeResponse> {
			return Axios.post<UpdateTypeResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Flushes an <code>ApiCache</code> object.
		 * Delete /v1/apis/{apiId}/FlushCache
		 * @param {string} apiId The API ID.
		 * @return {FlushApiCacheResponse} Success
		 */
		FlushApiCache(apiId: string, headersHandler?: () => {[header: string]: string}): Promise<FlushApiCacheResponse> {
			return Axios.delete<FlushApiCacheResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/FlushCache', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieves the introspection schema for a GraphQL API.
		 * Get /v1/apis/{apiId}/schema#format
		 * @param {string} apiId The API ID.
		 * @param {TypeDefinitionFormat} format The schema format: SDL or JSON.
		 * @param {boolean} includeDirectives A flag that specifies whether the schema introspection should contain directives.
		 * @return {GetIntrospectionSchemaResponse} Success
		 */
		GetIntrospectionSchema(apiId: string, format: TypeDefinitionFormat, includeDirectives: boolean, headersHandler?: () => {[header: string]: string}): Promise<GetIntrospectionSchemaResponse> {
			return Axios.get<GetIntrospectionSchemaResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/schema#format&format=' + format + '&includeDirectives=' + includeDirectives, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieves the current status of a schema creation operation.
		 * Get /v1/apis/{apiId}/schemacreation
		 * @param {string} apiId The API ID.
		 * @return {GetSchemaCreationStatusResponse} Success
		 */
		GetSchemaCreationStatus(apiId: string, headersHandler?: () => {[header: string]: string}): Promise<GetSchemaCreationStatusResponse> {
			return Axios.get<GetSchemaCreationStatusResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/schemacreation', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>
		 * Post /v1/apis/{apiId}/schemacreation
		 * @param {string} apiId The API ID.
		 * @return {StartSchemaCreationResponse} Success
		 */
		StartSchemaCreation(apiId: string, requestBody: StartSchemaCreationBody, headersHandler?: () => {[header: string]: string}): Promise<StartSchemaCreationResponse> {
			return Axios.post<StartSchemaCreationResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/schemacreation', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Retrieves a <code>Type</code> object.
		 * Get /v1/apis/{apiId}/types/{typeName}#format
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The type name.
		 * @param {TypeDefinitionFormat} format The type format: SDL or JSON.
		 * @return {GetTypeResponse} Success
		 */
		GetType(apiId: string, typeName: string, format: TypeDefinitionFormat, headersHandler?: () => {[header: string]: string}): Promise<GetTypeResponse> {
			return Axios.get<GetTypeResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '#format&format=' + format, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * List the resolvers that are associated with a specific function.
		 * Get /v1/apis/{apiId}/functions/{functionId}/resolvers
		 * @param {string} apiId The API ID.
		 * @param {string} functionId The Function ID.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListResolversByFunctionResponse} Success
		 */
		ListResolversByFunction(apiId: string, functionId: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListResolversByFunctionResponse> {
			return Axios.get<ListResolversByFunctionResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/functions/' + (functionId == null ? '' : encodeURIComponent(functionId)) + '/resolvers&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Lists the tags for a resource.
		 * Get /v1/tags/{resourceArn}
		 * @param {string} resourceArn The <code>GraphqlApi</code> ARN.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return Axios.get<ListTagsForResourceResponse>(this.baseUri + '/v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Tags a resource with user-supplied tags.
		 * Post /v1/tags/{resourceArn}
		 * @param {string} resourceArn The <code>GraphqlApi</code> ARN.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return Axios.post<TagResourceResponse>(this.baseUri + '/v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists the types for a given API.
		 * Get /v1/apis/{apiId}/types#format
		 * @param {string} apiId The API ID.
		 * @param {TypeDefinitionFormat} format The type format: SDL or JSON.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListTypesResponse} Success
		 */
		ListTypes(apiId: string, format: TypeDefinitionFormat, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListTypesResponse> {
			return Axios.get<ListTypesResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types#format&format=' + format + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Untags a resource.
		 * Delete /v1/tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The <code>GraphqlApi</code> ARN.
		 * @param {Array<TagKey>} tagKeys A list of <code>TagKey</code> objects.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<TagKey>, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return Axios.delete<UntagResourceResponse>(this.baseUri + '/v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates the cache for the GraphQL API.
		 * Post /v1/apis/{apiId}/ApiCaches/update
		 * @param {string} apiId The GraphQL API Id.
		 * @return {UpdateApiCacheResponse} Success
		 */
		UpdateApiCache(apiId: string, requestBody: UpdateApiCacheBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateApiCacheResponse> {
			return Axios.post<UpdateApiCacheResponse>(this.baseUri + '/v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/ApiCaches/update', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

	export interface CreateApiCacheBody {

		/**<p>TTL in seconds for cache entries.</p> <p>Valid values are between 1 and 3600 seconds.</p> */
		ttl: number;

		/**Transit encryption flag when connecting to cache. This setting cannot be updated after creation. */
		transitEncryptionEnabled?: boolean;

		/**At rest encryption flag for cache. This setting cannot be updated after creation. */
		atRestEncryptionEnabled?: boolean;

		/**<p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resovlers that you specify are cached.</p> </li> </ul> */
		apiCachingBehavior: CreateApiCacheBodyApiCachingBehavior;

		/**<p>The cache instance type.</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul> */
		type: CreateApiCacheBodyType;
	}

	export enum CreateApiCacheBodyApiCachingBehavior { FULL_REQUEST_CACHING = 0, PER_RESOLVER_CACHING = 1 }

	export enum CreateApiCacheBodyType { T2_SMALL = 0, T2_MEDIUM = 1, R4_LARGE = 2, R4_XLARGE = 3, R4_2XLARGE = 4, R4_4XLARGE = 5, R4_8XLARGE = 6 }

	export interface CreateApiKeyBody {

		/**A description of the purpose of the API key. */
		description?: string;

		/**The time from creation time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see . */
		expires?: number;
	}

	export interface CreateDataSourceBody {

		/**
		 * A user-supplied name for the <code>DataSource</code>.
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: string;

		/**A description of the <code>DataSource</code>. */
		description?: string;

		/**The type of the <code>DataSource</code>. */
		type: CreateDataSourceBodyType;

		/**The AWS IAM service role ARN for the data source. The system assumes this role when accessing the data source. */
		serviceRoleArn?: string;

		/**Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: string;

		/**Describes an AWS Lambda data source configuration. */
		lambdaConfig?: string;

		/**Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: string;

		/**Describes an HTTP data source configuration. */
		httpConfig?: string;

		/**Describes a relational database data source configuration. */
		relationalDatabaseConfig?: string;
	}

	export enum CreateDataSourceBodyType { AWS_LAMBDA = 0, AMAZON_DYNAMODB = 1, AMAZON_ELASTICSEARCH = 2, NONE = 3, HTTP = 4, RELATIONAL_DATABASE = 5 }

	export interface CreateFunctionBody {

		/**
		 * The <code>Function</code> name. The function name does not have to be unique.
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: string;

		/**The <code>Function</code> description. */
		description?: string;

		/**
		 * The <code>Function</code> <code>DataSource</code> name.
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: string;

		/**
		 * The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: string;

		/**
		 * The <code>Function</code> response mapping template.
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string;

		/**The <code>version</code> of the request mapping template. Currently the supported value is 2018-05-29. */
		functionVersion: string;
	}

	export interface CreateGraphqlApiBody {

		/**A user-supplied name for the <code>GraphqlApi</code>. */
		name: string;

		/**The CloudWatch Logs configuration. */
		logConfig?: string;

		/**The authentication type: API key, AWS IAM, OIDC, or Amazon Cognito user pools. */
		authenticationType: CreateGraphqlApiBodyAuthenticationType;

		/**Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: string;

		/**Describes an OpenID Connect configuration. */
		openIDConnectConfig?: string;

		/**A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags?: string;

		/**A list of additional authentication providers for the <code>GraphqlApi</code> API. */
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;

		/**A flag indicating whether to enable X-Ray tracing for the <code>GraphqlApi</code>. */
		xrayEnabled?: boolean;
	}

	export enum CreateGraphqlApiBodyAuthenticationType { API_KEY = 0, AWS_IAM = 1, AMAZON_COGNITO_USER_POOLS = 2, OPENID_CONNECT = 3 }

	export interface CreateResolverBody {

		/**
		 * The name of the field to attach the resolver to.
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		fieldName: string;

		/**
		 * The name of the data source for which the resolver is being created.
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName?: string;

		/**
		 * <p>The mapping template to be used for requests.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p>
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: string;

		/**
		 * The mapping template to be used for responses from the data source.
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string;

		/**<p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of <code>Function</code> in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.</p> </li> </ul> */
		kind?: CreateResolverBodyKind;

		/**The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: string;

		/**<p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: string;

		/**The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: string;
	}

	export enum CreateResolverBodyKind { UNIT = 0, PIPELINE = 1 }

	export interface CreateTypeBody {

		/**<p>The type definition, in GraphQL Schema Definition Language (SDL) format.</p> <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL documentation</a>.</p> */
		definition: string;

		/**The type format: SDL or JSON. */
		format: CreateTypeBodyFormat;
	}

	export enum CreateTypeBodyFormat { SDL = 0, JSON = 1 }

	export interface UpdateApiKeyBody {

		/**A description of the purpose of the API key. */
		description?: string;

		/**The time from update time after which the API key expires. The date is represented as seconds since the epoch. For more information, see . */
		expires?: number;
	}

	export interface UpdateDataSourceBody {

		/**The new description for the data source. */
		description?: string;

		/**The new data source type. */
		type: UpdateDataSourceBodyType;

		/**The new service role ARN for the data source. */
		serviceRoleArn?: string;

		/**Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: string;

		/**Describes an AWS Lambda data source configuration. */
		lambdaConfig?: string;

		/**Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: string;

		/**Describes an HTTP data source configuration. */
		httpConfig?: string;

		/**Describes a relational database data source configuration. */
		relationalDatabaseConfig?: string;
	}

	export enum UpdateDataSourceBodyType { AWS_LAMBDA = 0, AMAZON_DYNAMODB = 1, AMAZON_ELASTICSEARCH = 2, NONE = 3, HTTP = 4, RELATIONAL_DATABASE = 5 }

	export interface UpdateFunctionBody {

		/**
		 * The <code>Function</code> name.
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: string;

		/**The <code>Function</code> description. */
		description?: string;

		/**
		 * The <code>Function</code> <code>DataSource</code> name.
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: string;

		/**
		 * The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: string;

		/**
		 * The <code>Function</code> request mapping template.
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string;

		/**The <code>version</code> of the request mapping template. Currently the supported value is 2018-05-29. */
		functionVersion: string;
	}

	export interface UpdateGraphqlApiBody {

		/**The new name for the <code>GraphqlApi</code> object. */
		name: string;

		/**The CloudWatch Logs configuration. */
		logConfig?: string;

		/**The new authentication type for the <code>GraphqlApi</code> object. */
		authenticationType?: UpdateGraphqlApiBodyAuthenticationType;

		/**Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: string;

		/**Describes an OpenID Connect configuration. */
		openIDConnectConfig?: string;

		/**A list of additional authentication providers for the <code>GraphqlApi</code> API. */
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;

		/**A flag indicating whether to enable X-Ray tracing for the <code>GraphqlApi</code>. */
		xrayEnabled?: boolean;
	}

	export enum UpdateGraphqlApiBodyAuthenticationType { API_KEY = 0, AWS_IAM = 1, AMAZON_COGNITO_USER_POOLS = 2, OPENID_CONNECT = 3 }

	export interface UpdateResolverBody {

		/**
		 * The new data source name.
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName?: string;

		/**
		 * The new request mapping template.
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: string;

		/**
		 * The new response mapping template.
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string;

		/**<p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of <code>Function</code> in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.</p> </li> </ul> */
		kind?: UpdateResolverBodyKind;

		/**The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: string;

		/**<p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: string;

		/**The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: string;
	}

	export enum UpdateResolverBodyKind { UNIT = 0, PIPELINE = 1 }

	export interface UpdateTypeBody {

		/**The new definition. */
		definition?: string;

		/**The new type format: SDL or JSON. */
		format: UpdateTypeBodyFormat;
	}

	export enum UpdateTypeBodyFormat { SDL = 0, JSON = 1 }

	export interface StartSchemaCreationBody {

		/**The schema definition, in GraphQL schema language format. */
		definition: string;
	}

	export interface TagResourceBody {

		/**A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags: string;
	}

	export interface UpdateApiCacheBody {

		/**<p>TTL in seconds for cache entries.</p> <p>Valid values are between 1 and 3600 seconds.</p> */
		ttl: number;

		/**<p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resovlers that you specify are cached.</p> </li> </ul> */
		apiCachingBehavior: UpdateApiCacheBodyApiCachingBehavior;

		/**<p>The cache instance type.</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul> */
		type: UpdateApiCacheBodyType;
	}

	export enum UpdateApiCacheBodyApiCachingBehavior { FULL_REQUEST_CACHING = 0, PER_RESOLVER_CACHING = 1 }

	export enum UpdateApiCacheBodyType { T2_SMALL = 0, T2_MEDIUM = 1, R4_LARGE = 2, R4_XLARGE = 3, R4_2XLARGE = 4, R4_4XLARGE = 5, R4_8XLARGE = 6 }

}

