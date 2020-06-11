import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface CreateMeshOutput {

		/**An object that represents a service mesh returned by a describe operation. */
		mesh: MeshData;
	}


	/**An object that represents the egress filter rules for a service mesh. */
	export interface EgressFilter {
		type: EgressFilterType;
	}

	export enum EgressFilterType { ALLOW_ALL = 0, DROP_ALL = 1 }


	/**
	 * Optional metadata that you apply to a resource to assist with categorization and
	 *          organization. Each tag consists of a key and an optional value, both of which you define.
	 *          Tag keys can have a maximum character length of 128 characters, and tag values can have
	 *             a maximum length of 256 characters.
	 */
	export interface TagRef {
		key: string;
		value?: string;
	}

	export interface CreateRouteOutput {

		/**An object that represents a route returned by a describe operation. */
		route: RouteData;
	}


	/**An object that represents a gRPC route type. */
	export interface GrpcRoute {

		/**An object that represents the action to take if a match is determined. */
		action: GrpcRouteAction;

		/**An object that represents the criteria for determining a request match. */
		match: GrpcRouteMatch;

		/**An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. */
		retryPolicy?: GrpcRetryPolicy;
	}


	/**An object that represents an HTTP or HTTP/2 route type. */
	export interface HttpRoute {

		/**An object that represents the action to take if a match is determined. */
		action: HttpRouteAction;

		/**
		 * An object that represents the requirements for a route to match HTTP requests for a
		 * virtual router.
		 */
		match: HttpRouteMatch;

		/**An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. */
		retryPolicy?: HttpRetryPolicy;
	}


	/**An object that represents a TCP route type. */
	export interface TcpRoute {

		/**An object that represents the action to take if a match is determined. */
		action: TcpRouteAction;
	}

	export interface CreateVirtualNodeOutput {

		/**An object that represents a virtual node returned by a describe operation. */
		virtualNode: VirtualNodeData;
	}


	/**An object that represents the default properties for a backend. */
	export interface BackendDefaults {

		/**An object that represents a client policy. */
		clientPolicy?: ClientPolicy;
	}


	/**An object that represents the logging information for a virtual node. */
	export interface Logging {

		/**An object that represents the access logging information for a virtual node. */
		accessLog?: AccessLog;
	}


	/**An object that represents the service discovery information for a virtual node. */
	export interface ServiceDiscovery {

		/**
		 * An object that represents the AWS Cloud Map service discovery information for your virtual
		 * node.
		 */
		awsCloudMap?: AwsCloudMapServiceDiscovery;

		/**
		 * An object that represents the DNS service discovery information for your virtual
		 * node.
		 */
		dns?: DnsServiceDiscovery;
	}

	export interface CreateVirtualRouterOutput {

		/**An object that represents a virtual router returned by a describe operation. */
		virtualRouter: VirtualRouterData;
	}

	export interface CreateVirtualServiceOutput {

		/**An object that represents a virtual service returned by a describe operation. */
		virtualService: VirtualServiceData;
	}


	/**An object that represents the provider for a virtual service. */
	export interface VirtualServiceProvider {

		/**An object that represents a virtual node service provider. */
		virtualNode?: VirtualNodeServiceProvider;

		/**An object that represents a virtual node service provider. */
		virtualRouter?: VirtualRouterServiceProvider;
	}

	export interface DeleteMeshOutput {

		/**An object that represents a service mesh returned by a describe operation. */
		mesh: MeshData;
	}

	export interface DeleteRouteOutput {

		/**An object that represents a route returned by a describe operation. */
		route: RouteData;
	}

	export interface DeleteVirtualNodeOutput {

		/**An object that represents a virtual node returned by a describe operation. */
		virtualNode: VirtualNodeData;
	}

	export interface DeleteVirtualRouterOutput {

		/**An object that represents a virtual router returned by a describe operation. */
		virtualRouter: VirtualRouterData;
	}

	export interface DeleteVirtualServiceOutput {

		/**An object that represents a virtual service returned by a describe operation. */
		virtualService: VirtualServiceData;
	}

	export interface DescribeMeshOutput {

		/**An object that represents a service mesh returned by a describe operation. */
		mesh: MeshData;
	}

	export interface DescribeRouteOutput {

		/**An object that represents a route returned by a describe operation. */
		route: RouteData;
	}

	export interface DescribeVirtualNodeOutput {

		/**An object that represents a virtual node returned by a describe operation. */
		virtualNode: VirtualNodeData;
	}

	export interface DescribeVirtualRouterOutput {

		/**An object that represents a virtual router returned by a describe operation. */
		virtualRouter: VirtualRouterData;
	}

	export interface DescribeVirtualServiceOutput {

		/**An object that represents a virtual service returned by a describe operation. */
		virtualService: VirtualServiceData;
	}

	export interface ListMeshesOutput {
		meshes: Array<MeshRef>;
		nextToken?: string;
	}

	export interface ListRoutesOutput {
		nextToken?: string;
		routes: Array<RouteRef>;
	}

	export interface ListTagsForResourceOutput {
		nextToken?: string;
		tags: Array<TagRef>;
	}

	export interface ListVirtualNodesOutput {
		nextToken?: string;
		virtualNodes: Array<VirtualNodeRef>;
	}

	export interface ListVirtualRoutersOutput {
		nextToken?: string;
		virtualRouters: Array<VirtualRouterRef>;
	}

	export interface ListVirtualServicesOutput {
		nextToken?: string;
		virtualServices: Array<VirtualServiceRef>;
	}

	export interface UpdateMeshOutput {

		/**An object that represents a service mesh returned by a describe operation. */
		mesh: MeshData;
	}

	export interface UpdateRouteOutput {

		/**An object that represents a route returned by a describe operation. */
		route: RouteData;
	}

	export interface UpdateVirtualNodeOutput {

		/**An object that represents a virtual node returned by a describe operation. */
		virtualNode: VirtualNodeData;
	}

	export interface UpdateVirtualRouterOutput {

		/**An object that represents a virtual router returned by a describe operation. */
		virtualRouter: VirtualRouterData;
	}

	export interface UpdateVirtualServiceOutput {

		/**An object that represents a virtual service returned by a describe operation. */
		virtualService: VirtualServiceData;
	}


	/**An object that represents a port mapping. */
	export interface PortMapping {
		port: number;
		protocol: PortMappingProtocol;
	}

	export enum PortMappingProtocol { grpc = 0, http = 1, http2 = 2, tcp = 3 }


	/**An object that represents a virtual router listener. */
	export interface VirtualRouterListener {

		/**An object that represents a port mapping. */
		portMapping: PortMapping;
	}

	export enum VirtualRouterStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }


	/**An object that represents a duration of time. */
	export interface Duration {
		unit?: DurationUnit;
		value?: number;
	}

	export enum DurationUnit { ms = 0, s = 1 }


	/**An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. */
	export interface GrpcRetryPolicy {
		grpcRetryEvents?: Array<GrpcRetryPolicyEvent>;
		httpRetryEvents?: Array<HttpRetryPolicyEvent>;
		maxRetries: number;

		/**An object that represents a duration of time. */
		perRetryTimeout: Duration;
		tcpRetryEvents?: Array<TcpRetryPolicyEvent>;
	}


	/**An object that represents a virtual node returned by a describe operation. */
	export interface VirtualNodeData {
		meshName: string;

		/**An object that represents metadata for a resource. */
		metadata: ResourceMetadata;

		/**An object that represents the specification of a virtual node. */
		spec: VirtualNodeSpec;

		/**An object that represents the current status of the virtual node. */
		status: VirtualNodeStatus;
		virtualNodeName: string;
	}


	/**An object that represents the access logging information for a virtual node. */
	export interface AccessLog {

		/**An object that represents an access log file. */
		file?: FileAccessLog;
	}


	/**An object that represents a virtual router returned by a describe operation. */
	export interface VirtualRouterData {
		meshName: string;

		/**An object that represents metadata for a resource. */
		metadata: ResourceMetadata;

		/**An object that represents the specification of a virtual router. */
		spec: VirtualRouterSpec;

		/**An object that represents the status of a virtual router. */
		status: VirtualRouterStatus;
		virtualRouterName: string;
	}


	/**An object that represents metadata for a resource. */
	export interface ResourceMetadata {
		arn: string;
		createdAt: Date;
		lastUpdatedAt: Date;
		meshOwner: string;
		resourceOwner: string;
		uid: string;
		version: number;
	}


	/**An object that represents a client policy. */
	export interface ClientPolicy {

		/**An object that represents a Transport Layer Security (TLS) client policy. */
		tls?: ClientPolicyTls;
	}


	/**An object that represents a virtual service backend for a virtual node. */
	export interface VirtualServiceBackend {

		/**An object that represents a client policy. */
		clientPolicy?: ClientPolicy;
		virtualServiceName: string;
	}


	/**An object that represents the match metadata for the route. */
	export interface GrpcRouteMetadata {
		invert?: boolean;

		/**An object that represents the match method. Specify one of the match values. */
		match?: GrpcRouteMetadataMatchMethod;
		name: string;
	}

	export enum ListenerTlsMode { DISABLED = 0, PERMISSIVE = 1, STRICT = 2 }

	export enum PortProtocol { grpc = 0, http = 1, http2 = 2, tcp = 3 }


	/**An object that represents the health check policy for a virtual node's listener. */
	export interface HealthCheckPolicy {
		healthyThreshold: number;
		intervalMillis: number;
		path?: string;
		port?: number;
		protocol: HealthCheckPolicyProtocol;
		timeoutMillis: number;
		unhealthyThreshold: number;
	}

	export enum HealthCheckPolicyProtocol { grpc = 0, http = 1, http2 = 2, tcp = 3 }

	export enum EgressFilterType { ALLOW_ALL = 0, DROP_ALL = 1 }


	/**An object that represents a virtual service returned by a list operation. */
	export interface VirtualServiceRef {
		arn: string;
		createdAt: Date;
		lastUpdatedAt: Date;
		meshName: string;
		meshOwner: string;
		resourceOwner: string;
		version: number;
		virtualServiceName: string;
	}


	/**An object that represents a Transport Layer Security (TLS) client policy. */
	export interface ClientPolicyTls {
		enforce?: boolean;
		ports?: Array<PortNumber>;

		/**An object that represents a Transport Layer Security (TLS) validation context. */
		validation: TlsValidationContext;
	}


	/**An object that represents a virtual service returned by a describe operation. */
	export interface VirtualServiceData {
		meshName: string;

		/**An object that represents metadata for a resource. */
		metadata: ResourceMetadata;

		/**An object that represents the specification of a virtual service. */
		spec: VirtualServiceSpec;

		/**An object that represents the status of a virtual service. */
		status: VirtualServiceStatus;
		virtualServiceName: string;
	}


	/**An object that represents a route returned by a describe operation. */
	export interface RouteData {
		meshName: string;

		/**An object that represents metadata for a resource. */
		metadata: ResourceMetadata;
		routeName: string;

		/**An object that represents a route specification. Specify one route type. */
		spec: RouteSpec;

		/**An object that represents the current status of a route. */
		status: RouteStatus;
		virtualRouterName: string;
	}


	/**
	 * An object that represents the DNS service discovery information for your virtual
	 *          node.
	 */
	export interface DnsServiceDiscovery {
		hostname: string;
	}


	/**An object that represents the specification of a virtual node. */
	export interface VirtualNodeSpec {

		/**An object that represents the default properties for a backend. */
		backendDefaults?: BackendDefaults;
		backends?: Array<Backend>;
		listeners?: Array<Listener>;

		/**An object that represents the logging information for a virtual node. */
		logging?: Logging;

		/**An object that represents the service discovery information for a virtual node. */
		serviceDiscovery?: ServiceDiscovery;
	}


	/**An object that represents the current status of the virtual node. */
	export interface VirtualNodeStatus {
		status: VirtualNodeStatusStatus;
	}

	export enum VirtualNodeStatusStatus { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export enum TcpRetryPolicyEvent { connection-error = 0 }


	/**
	 * An object that represents the backends that a virtual node is expected to send outbound
	 *          traffic to. 
	 */
	export interface Backend {

		/**An object that represents a virtual service backend for a virtual node. */
		virtualService?: VirtualServiceBackend;
	}


	/**An object that represents the specification of a virtual router. */
	export interface VirtualRouterSpec {
		listeners?: Array<VirtualRouterListener>;
	}


	/**An object that represents the status of a virtual router.  */
	export interface VirtualRouterStatus {
		status: VirtualRouterStatusStatus;
	}

	export enum VirtualRouterStatusStatus { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }


	/**An object that represents the specification of a service mesh. */
	export interface MeshSpec {

		/**An object that represents the egress filter rules for a service mesh. */
		egressFilter?: EgressFilter;
	}

	export interface UpdateMeshInput {
		clientToken?: string;

		/**An object that represents the specification of a service mesh. */
		spec?: MeshSpec;
	}

	export interface CreateVirtualRouterInput {
		clientToken?: string;

		/**An object that represents the specification of a virtual router. */
		spec: VirtualRouterSpec;
		tags?: Array<TagRef>;
		virtualRouterName: string;
	}


	/**An object that represents a service mesh returned by a describe operation. */
	export interface MeshData {
		meshName: string;

		/**An object that represents metadata for a resource. */
		metadata: ResourceMetadata;

		/**An object that represents the specification of a service mesh. */
		spec: MeshSpec;

		/**An object that represents the status of a service mesh. */
		status: MeshStatus;
	}

	export enum VirtualServiceStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }


	/**An object that represents the status of a virtual service. */
	export interface VirtualServiceStatus {
		status: VirtualServiceStatusStatus;
	}

	export enum VirtualServiceStatusStatus { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }


	/**An object that represents an AWS Certicate Manager (ACM) certificate. */
	export interface ListenerTlsAcmCertificate {
		certificateArn: string;
	}


	/**
	 * An object that represents a local file certificate.
	 *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
	 */
	export interface ListenerTlsFileCertificate {
		certificateChain: string;
		privateKey: string;
	}


	/**An object that represents a listener's Transport Layer Security (TLS) certificate. */
	export interface ListenerTlsCertificate {

		/**An object that represents an AWS Certicate Manager (ACM) certificate. */
		acm?: ListenerTlsAcmCertificate;

		/**
		 * An object that represents a local file certificate.
		 * The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
		 */
		file?: ListenerTlsFileCertificate;
	}

	export enum HttpMethod { CONNECT = 0, DELETE = 1, GET = 2, HEAD = 3, OPTIONS = 4, PATCH = 5, POST = 6, PUT = 7, TRACE = 8 }


	/**An object that represents a service mesh returned by a list operation. */
	export interface MeshRef {
		arn: string;
		createdAt: Date;
		lastUpdatedAt: Date;
		meshName: string;
		meshOwner: string;
		resourceOwner: string;
		version: number;
	}


	/**
	 * An object that represents a TLS validation context trust for an AWS Certicate Manager (ACM)
	 *          certificate.
	 */
	export interface TlsValidationContextAcmTrust {
		certificateAuthorityArns: Array<Arn>;
	}


	/**An object that represents a Transport Layer Security (TLS) validation context trust for a local file. */
	export interface TlsValidationContextFileTrust {
		certificateChain: string;
	}


	/**An object that represents a Transport Layer Security (TLS) validation context trust. */
	export interface TlsValidationContextTrust {

		/**
		 * An object that represents a TLS validation context trust for an AWS Certicate Manager (ACM)
		 * certificate.
		 */
		acm?: TlsValidationContextAcmTrust;

		/**An object that represents a Transport Layer Security (TLS) validation context trust for a local file. */
		file?: TlsValidationContextFileTrust;
	}


	/**
	 * An object that represents a target and its relative weight. Traffic is distributed
	 *          across targets according to their relative weight. For example, a weighted target with a
	 *          relative weight of 50 receives five times as much traffic as one with a relative weight of
	 *          10. The total weight for all targets combined must be less than or equal to 100.
	 */
	export interface WeightedTarget {
		virtualNode: string;
		weight: number;
	}


	/**An object that represents a route returned by a list operation. */
	export interface RouteRef {
		arn: string;
		createdAt: Date;
		lastUpdatedAt: Date;
		meshName: string;
		meshOwner: string;
		resourceOwner: string;
		routeName: string;
		version: number;
		virtualRouterName: string;
	}


	/**An object that represents a route specification. Specify one route type. */
	export interface RouteSpec {

		/**An object that represents a gRPC route type. */
		grpcRoute?: GrpcRoute;

		/**An object that represents an HTTP or HTTP/2 route type. */
		http2Route?: HttpRoute;

		/**An object that represents an HTTP or HTTP/2 route type. */
		httpRoute?: HttpRoute;
		priority?: number;

		/**An object that represents a TCP route type. */
		tcpRoute?: TcpRoute;
	}


	/**An object that represents the current status of a route. */
	export interface RouteStatus {
		status: RouteStatusStatus;
	}

	export enum RouteStatusStatus { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export enum RouteStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export enum GrpcRetryPolicyEvent { cancelled = 0, deadline-exceeded = 1, internal = 2, resource-exhausted = 3, unavailable = 4 }


	/**An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched. */
	export interface MatchRange {
		end: number;
		start: number;
	}


	/**
	 * An object that represents the method and value to match with the header value sent in a
	 *          request. Specify one match method.
	 */
	export interface HeaderMatchMethod {
		exact?: string;
		prefix?: string;

		/**An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched. */
		range?: MatchRange;
		regex?: string;
		suffix?: string;
	}

	export interface TagResourceInput {
		tags: Array<TagRef>;
	}


	/**An object that represents a virtual node service provider. */
	export interface VirtualNodeServiceProvider {
		virtualNodeName: string;
	}


	/**An object that represents a virtual node service provider. */
	export interface VirtualRouterServiceProvider {
		virtualRouterName: string;
	}


	/**An object that represents the criteria for determining a request match. */
	export interface GrpcRouteMatch {
		metadata?: Array<GrpcRouteMetadata>;
		methodName?: string;
		serviceName?: string;
	}


	/**
	 * An object that represents the AWS Cloud Map service discovery information for your virtual
	 *          node.
	 */
	export interface AwsCloudMapServiceDiscovery {
		attributes?: Array<AwsCloudMapInstanceAttribute>;
		namespaceName: string;
		serviceName: string;
	}

	export enum MeshStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }


	/**An object that represents the status of a service mesh. */
	export interface MeshStatus {
		status?: MeshStatusStatus;
	}

	export enum MeshStatusStatus { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export interface CreateVirtualNodeInput {
		clientToken?: string;

		/**An object that represents the specification of a virtual node. */
		spec: VirtualNodeSpec;
		tags?: Array<TagRef>;
		virtualNodeName: string;
	}


	/**An object that represents an access log file. */
	export interface FileAccessLog {
		path: string;
	}


	/**An object that represents a Transport Layer Security (TLS) validation context. */
	export interface TlsValidationContext {

		/**An object that represents a Transport Layer Security (TLS) validation context trust. */
		trust: TlsValidationContextTrust;
	}

	export interface UpdateVirtualNodeInput {
		clientToken?: string;

		/**An object that represents the specification of a virtual node. */
		spec: VirtualNodeSpec;
	}


	/**An object that represents the Transport Layer Security (TLS) properties for a listener. */
	export interface ListenerTls {

		/**An object that represents a listener's Transport Layer Security (TLS) certificate. */
		certificate: ListenerTlsCertificate;
		mode: ListenerTlsMode;
	}

	export enum ListenerTlsMode { DISABLED = 0, PERMISSIVE = 1, STRICT = 2 }


	/**An object that represents the specification of a virtual service. */
	export interface VirtualServiceSpec {

		/**An object that represents the provider for a virtual service. */
		provider?: VirtualServiceProvider;
	}

	export interface CreateVirtualServiceInput {
		clientToken?: string;

		/**An object that represents the specification of a virtual service. */
		spec: VirtualServiceSpec;
		tags?: Array<TagRef>;
		virtualServiceName: string;
	}

	export interface UpdateVirtualRouterInput {
		clientToken?: string;

		/**An object that represents the specification of a virtual router. */
		spec: VirtualRouterSpec;
	}


	/**An object that represents a listener for a virtual node. */
	export interface Listener {

		/**An object that represents the health check policy for a virtual node's listener. */
		healthCheck?: HealthCheckPolicy;

		/**An object that represents a port mapping. */
		portMapping: PortMapping;

		/**An object that represents the Transport Layer Security (TLS) properties for a listener. */
		tls?: ListenerTls;
	}

	export enum VirtualNodeStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export interface UpdateVirtualServiceInput {
		clientToken?: string;

		/**An object that represents the specification of a virtual service. */
		spec: VirtualServiceSpec;
	}


	/**An object that represents the action to take if a match is determined. */
	export interface HttpRouteAction {
		weightedTargets: Array<WeightedTarget>;
	}


	/**An object that represents a virtual router returned by a list operation. */
	export interface VirtualRouterRef {
		arn: string;
		createdAt: Date;
		lastUpdatedAt: Date;
		meshName: string;
		meshOwner: string;
		resourceOwner: string;
		version: number;
		virtualRouterName: string;
	}


	/**An object that represents the HTTP header in the request. */
	export interface HttpRouteHeader {
		invert?: boolean;

		/**
		 * An object that represents the method and value to match with the header value sent in a
		 * request. Specify one match method.
		 */
		match?: HeaderMatchMethod;
		name: string;
	}


	/**
	 * An object that represents the AWS Cloud Map attribute information for your virtual
	 *          node.
	 */
	export interface AwsCloudMapInstanceAttribute {
		key: string;
		value: string;
	}


	/**An object that represents a virtual node returned by a list operation. */
	export interface VirtualNodeRef {
		arn: string;
		createdAt: Date;
		lastUpdatedAt: Date;
		meshName: string;
		meshOwner: string;
		resourceOwner: string;
		version: number;
		virtualNodeName: string;
	}

	export interface CreateMeshInput {
		clientToken?: string;
		meshName: string;

		/**An object that represents the specification of a service mesh. */
		spec?: MeshSpec;
		tags?: Array<TagRef>;
	}


	/**An object that represents the action to take if a match is determined. */
	export interface GrpcRouteAction {
		weightedTargets: Array<WeightedTarget>;
	}


	/**An object that represents the match method. Specify one of the match values. */
	export interface GrpcRouteMetadataMatchMethod {
		exact?: string;
		prefix?: string;

		/**An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched. */
		range?: MatchRange;
		regex?: string;
		suffix?: string;
	}


	/**An object that represents the action to take if a match is determined. */
	export interface TcpRouteAction {
		weightedTargets: Array<WeightedTarget>;
	}

	export enum DurationUnit { ms = 0, s = 1 }

	export enum HttpScheme { http = 0, https = 1 }


	/**
	 * An object that represents the requirements for a route to match HTTP requests for a
	 *          virtual router.
	 */
	export interface HttpRouteMatch {
		headers?: Array<HttpRouteHeader>;
		method?: HttpRouteMatchMethod;
		prefix: string;
		scheme?: HttpRouteMatchScheme;
	}

	export enum HttpRouteMatchMethod { CONNECT = 0, DELETE = 1, GET = 2, HEAD = 3, OPTIONS = 4, PATCH = 5, POST = 6, PUT = 7, TRACE = 8 }

	export enum HttpRouteMatchScheme { http = 0, https = 1 }


	/**An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. */
	export interface HttpRetryPolicy {
		httpRetryEvents?: Array<HttpRetryPolicyEvent>;
		maxRetries: number;

		/**An object that represents a duration of time. */
		perRetryTimeout: Duration;
		tcpRetryEvents?: Array<TcpRetryPolicyEvent>;
	}

	export interface CreateRouteInput {
		clientToken?: string;
		routeName: string;

		/**An object that represents a route specification. Specify one route type. */
		spec: RouteSpec;
		tags?: Array<TagRef>;
	}

	export interface UpdateRouteInput {
		clientToken?: string;

		/**An object that represents a route specification. Specify one route type. */
		spec: RouteSpec;
	}

	export interface UntagResourceInput {
		tagKeys: Array<TagKey>;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Creates a service mesh.</p>
		 * <p> A service mesh is a logical boundary for network traffic between services that are
		 * represented by resources within the mesh. After you create your service mesh, you can
		 * create virtual services, virtual nodes, virtual routers, and routes to distribute traffic
		 * between the applications in your mesh.</p>
		 * <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
		 * Put /v20190125/meshes
		 * @return {CreateMeshOutput} Success
		 */
		CreateMesh(requestBody: CreateMeshBody, headersHandler?: () => {[header: string]: string}): Promise<CreateMeshOutput> {
			return Axios.put<CreateMeshOutput>(this.baseUri + '/v20190125/meshes', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns a list of existing service meshes.
		 * Get /v20190125/meshes
		 * @param {number} limit The maximum number of results returned by <code>ListMeshes</code> in paginated output.
		 *          When you use this parameter, <code>ListMeshes</code> returns only <code>limit</code>
		 *          results in a single page along with a <code>nextToken</code> response element. You can see
		 *          the remaining results of the initial request by sending another <code>ListMeshes</code>
		 *          request with the returned <code>nextToken</code> value. This value can be between
		 *          1 and 100. If you don't use this parameter,
		 *             <code>ListMeshes</code> returns up to 100 results and a
		 *             <code>nextToken</code> value if applicable.
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated
		 *             <code>ListMeshes</code> request where <code>limit</code> was used and the results
		 *          exceeded the value of that parameter. Pagination continues from the end of the previous
		 *          results that returned the <code>nextToken</code> value.</p> 
		 *          <note>
		 *             <p>This token should be treated as an opaque identifier that is used only to
		 *                 retrieve the next items in a list and not for other programmatic purposes.</p>
		 *         </note>
		 * @return {ListMeshesOutput} Success
		 */
		ListMeshes(limit: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListMeshesOutput> {
			return Axios.get<ListMeshesOutput>(this.baseUri + '/v20190125/meshes?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Creates a route that is associated with a virtual router.</p>
		 * <p> You can route several different protocols and define a retry policy for a route.
		 * Traffic can be routed to one or more virtual nodes.</p>
		 * <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
		 * Put /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes
		 * @param {string} meshName The name of the service mesh to create the route in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
		 *                the account that you specify must share the mesh with your account before you can create 
		 *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualRouterName The name of the virtual router in which to create the route. If the virtual router is in
		 *          a shared mesh, then you must be the owner of the virtual router resource.
		 * @return {CreateRouteOutput} Success
		 */
		CreateRoute(meshName: string, meshOwner: string, virtualRouterName: string, requestBody: CreateRouteBody, headersHandler?: () => {[header: string]: string}): Promise<CreateRouteOutput> {
			return Axios.put<CreateRouteOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns a list of existing routes in a service mesh.
		 * Get /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes
		 * @param {number} limit The maximum number of results returned by <code>ListRoutes</code> in paginated output.
		 *          When you use this parameter, <code>ListRoutes</code> returns only <code>limit</code>
		 *          results in a single page along with a <code>nextToken</code> response element. You can see
		 *          the remaining results of the initial request by sending another <code>ListRoutes</code>
		 *          request with the returned <code>nextToken</code> value. This value can be between
		 *          1 and 100. If you don't use this parameter,
		 *             <code>ListRoutes</code> returns up to 100 results and a
		 *             <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list routes in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated
		 *             <code>ListRoutes</code> request where <code>limit</code> was used and the results
		 *          exceeded the value of that parameter. Pagination continues from the end of the previous
		 *          results that returned the <code>nextToken</code> value.
		 * @param {string} virtualRouterName The name of the virtual router to list routes in.
		 * @return {ListRoutesOutput} Success
		 */
		ListRoutes(limit: number, meshName: string, meshOwner: string, nextToken: string, virtualRouterName: string, headersHandler?: () => {[header: string]: string}): Promise<ListRoutesOutput> {
			return Axios.get<ListRoutesOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Creates a virtual node within a service mesh.</p>
		 * <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS
		 * service or a Kubernetes deployment. When you create a virtual node, you can specify the
		 * service discovery information for your task group, and whether the proxy running in a task
		 * group will communicate with other proxies using Transport Layer Security (TLS).</p>
		 * <p>You define a <code>listener</code> for any inbound traffic that your virtual node
		 * expects. Any virtual service that your virtual node expects to communicate to is specified
		 * as a <code>backend</code>.</p>
		 * <p>The response metadata for your new virtual node contains the <code>arn</code> that is
		 * associated with the virtual node. Set this value (either the full ARN or the truncated
		 * resource name: for example, <code>mesh/default/virtualNode/simpleapp</code>) as the
		 * <code>APPMESH_VIRTUAL_NODE_NAME</code> environment variable for your task group's Envoy
		 * proxy container in your task definition or pod spec. This is then mapped to the
		 * <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p>
		 * <note>
		 * <p>If you require your Envoy stats or tracing to use a different name, you can override
		 * the <code>node.cluster</code> value that is set by
		 * <code>APPMESH_VIRTUAL_NODE_NAME</code> with the
		 * <code>APPMESH_VIRTUAL_NODE_CLUSTER</code> environment variable.</p>
		 * </note>
		 * <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>.</p>
		 * Put /v20190125/meshes/{meshName}/virtualNodes
		 * @param {string} meshName The name of the service mesh to create the virtual node in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
		 *                the account that you specify must share the mesh with your account before you can create 
		 *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @return {CreateVirtualNodeOutput} Success
		 */
		CreateVirtualNode(meshName: string, meshOwner: string, requestBody: CreateVirtualNodeBody, headersHandler?: () => {[header: string]: string}): Promise<CreateVirtualNodeOutput> {
			return Axios.put<CreateVirtualNodeOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns a list of existing virtual nodes.
		 * Get /v20190125/meshes/{meshName}/virtualNodes
		 * @param {number} limit The maximum number of results returned by <code>ListVirtualNodes</code> in paginated
		 *          output. When you use this parameter, <code>ListVirtualNodes</code> returns only
		 *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
		 *          element. You can see the remaining results of the initial request by sending another
		 *             <code>ListVirtualNodes</code> request with the returned <code>nextToken</code> value.
		 *          This value can be between 1 and 100. If you don't use this
		 *          parameter, <code>ListVirtualNodes</code> returns up to 100 results and a
		 *             <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list virtual nodes in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated
		 *             <code>ListVirtualNodes</code> request where <code>limit</code> was used and the results
		 *          exceeded the value of that parameter. Pagination continues from the end of the previous
		 *          results that returned the <code>nextToken</code> value.
		 * @return {ListVirtualNodesOutput} Success
		 */
		ListVirtualNodes(limit: number, meshName: string, meshOwner: string, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListVirtualNodesOutput> {
			return Axios.get<ListVirtualNodesOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Creates a virtual router within a service mesh.</p>
		 * <p>Specify a <code>listener</code> for any inbound traffic that your virtual router
		 * receives. Create a virtual router for each protocol and port that you need to route.
		 * Virtual routers handle traffic for one or more virtual services within your mesh. After you
		 * create your virtual router, create and associate routes for your virtual router that direct
		 * incoming requests to different virtual nodes.</p>
		 * <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
		 * Put /v20190125/meshes/{meshName}/virtualRouters
		 * @param {string} meshName The name of the service mesh to create the virtual router in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
		 *                the account that you specify must share the mesh with your account before you can create 
		 *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @return {CreateVirtualRouterOutput} Success
		 */
		CreateVirtualRouter(meshName: string, meshOwner: string, requestBody: CreateVirtualRouterBody, headersHandler?: () => {[header: string]: string}): Promise<CreateVirtualRouterOutput> {
			return Axios.put<CreateVirtualRouterOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns a list of existing virtual routers in a service mesh.
		 * Get /v20190125/meshes/{meshName}/virtualRouters
		 * @param {number} limit The maximum number of results returned by <code>ListVirtualRouters</code> in paginated
		 *          output. When you use this parameter, <code>ListVirtualRouters</code> returns only
		 *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
		 *          element. You can see the remaining results of the initial request by sending another
		 *             <code>ListVirtualRouters</code> request with the returned <code>nextToken</code> value.
		 *          This value can be between 1 and 100. If you don't use this
		 *          parameter, <code>ListVirtualRouters</code> returns up to 100 results and
		 *          a <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list virtual routers in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated
		 *             <code>ListVirtualRouters</code> request where <code>limit</code> was used and the
		 *          results exceeded the value of that parameter. Pagination continues from the end of the
		 *          previous results that returned the <code>nextToken</code> value.
		 * @return {ListVirtualRoutersOutput} Success
		 */
		ListVirtualRouters(limit: number, meshName: string, meshOwner: string, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListVirtualRoutersOutput> {
			return Axios.get<ListVirtualRoutersOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Creates a virtual service within a service mesh.</p>
		 * <p>A virtual service is an abstraction of a real service that is provided by a virtual node
		 * directly or indirectly by means of a virtual router. Dependent services call your virtual
		 * service by its <code>virtualServiceName</code>, and those requests are routed to the
		 * virtual node or virtual router that is specified as the provider for the virtual
		 * service.</p>
		 * <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
		 * Put /v20190125/meshes/{meshName}/virtualServices
		 * @param {string} meshName The name of the service mesh to create the virtual service in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
		 *                the account that you specify must share the mesh with your account before you can create 
		 *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @return {CreateVirtualServiceOutput} Success
		 */
		CreateVirtualService(meshName: string, meshOwner: string, requestBody: CreateVirtualServiceBody, headersHandler?: () => {[header: string]: string}): Promise<CreateVirtualServiceOutput> {
			return Axios.put<CreateVirtualServiceOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns a list of existing virtual services in a service mesh.
		 * Get /v20190125/meshes/{meshName}/virtualServices
		 * @param {number} limit The maximum number of results returned by <code>ListVirtualServices</code> in paginated
		 *          output. When you use this parameter, <code>ListVirtualServices</code> returns only
		 *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
		 *          element. You can see the remaining results of the initial request by sending another
		 *             <code>ListVirtualServices</code> request with the returned <code>nextToken</code> value.
		 *          This value can be between 1 and 100. If you don't use this
		 *          parameter, <code>ListVirtualServices</code> returns up to 100 results and
		 *          a <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list virtual services in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated
		 *             <code>ListVirtualServices</code> request where <code>limit</code> was used and the
		 *          results exceeded the value of that parameter. Pagination continues from the end of the
		 *          previous results that returned the <code>nextToken</code> value.
		 * @return {ListVirtualServicesOutput} Success
		 */
		ListVirtualServices(limit: number, meshName: string, meshOwner: string, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListVirtualServicesOutput> {
			return Axios.get<ListVirtualServicesOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Deletes an existing service mesh.</p>
		 * <p>You must delete all resources (virtual services, routes, virtual routers, and virtual
		 * nodes) in the service mesh before you can delete the mesh itself.</p>
		 * Delete /v20190125/meshes/{meshName}
		 * @param {string} meshName The name of the service mesh to delete.
		 * @return {DeleteMeshOutput} Success
		 */
		DeleteMesh(meshName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteMeshOutput> {
			return Axios.delete<DeleteMeshOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Describes an existing service mesh.
		 * Get /v20190125/meshes/{meshName}
		 * @param {string} meshName The name of the service mesh to describe.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @return {DescribeMeshOutput} Success
		 */
		DescribeMesh(meshName: string, meshOwner: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeMeshOutput> {
			return Axios.get<DescribeMeshOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates an existing service mesh.
		 * Put /v20190125/meshes/{meshName}
		 * @param {string} meshName The name of the service mesh to update.
		 * @return {UpdateMeshOutput} Success
		 */
		UpdateMesh(meshName: string, requestBody: UpdateMeshBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateMeshOutput> {
			return Axios.put<UpdateMeshOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes an existing route.
		 * Delete /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}
		 * @param {string} meshName The name of the service mesh to delete the route in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} routeName The name of the route to delete.
		 * @param {string} virtualRouterName The name of the virtual router to delete the route in.
		 * @return {DeleteRouteOutput} Success
		 */
		DeleteRoute(meshName: string, meshOwner: string, routeName: string, virtualRouterName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteRouteOutput> {
			return Axios.delete<DeleteRouteOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Describes an existing route.
		 * Get /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}
		 * @param {string} meshName The name of the service mesh that the route resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} routeName The name of the route to describe.
		 * @param {string} virtualRouterName The name of the virtual router that the route is associated with.
		 * @return {DescribeRouteOutput} Success
		 */
		DescribeRoute(meshName: string, meshOwner: string, routeName: string, virtualRouterName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeRouteOutput> {
			return Axios.get<DescribeRouteOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates an existing route for a specified service mesh and virtual router.
		 * Put /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}
		 * @param {string} meshName The name of the service mesh that the route resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} routeName The name of the route to update.
		 * @param {string} virtualRouterName The name of the virtual router that the route is associated with.
		 * @return {UpdateRouteOutput} Success
		 */
		UpdateRoute(meshName: string, meshOwner: string, routeName: string, virtualRouterName: string, requestBody: UpdateRouteBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateRouteOutput> {
			return Axios.put<UpdateRouteOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Deletes an existing virtual node.</p>
		 * <p>You must delete any virtual services that list a virtual node as a service provider
		 * before you can delete the virtual node itself.</p>
		 * Delete /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}
		 * @param {string} meshName The name of the service mesh to delete the virtual node in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualNodeName The name of the virtual node to delete.
		 * @return {DeleteVirtualNodeOutput} Success
		 */
		DeleteVirtualNode(meshName: string, meshOwner: string, virtualNodeName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteVirtualNodeOutput> {
			return Axios.delete<DeleteVirtualNodeOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes/' + (virtualNodeName == null ? '' : encodeURIComponent(virtualNodeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Describes an existing virtual node.
		 * Get /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}
		 * @param {string} meshName The name of the service mesh that the virtual node resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualNodeName The name of the virtual node to describe.
		 * @return {DescribeVirtualNodeOutput} Success
		 */
		DescribeVirtualNode(meshName: string, meshOwner: string, virtualNodeName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeVirtualNodeOutput> {
			return Axios.get<DescribeVirtualNodeOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes/' + (virtualNodeName == null ? '' : encodeURIComponent(virtualNodeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates an existing virtual node in a specified service mesh.
		 * Put /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}
		 * @param {string} meshName The name of the service mesh that the virtual node resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualNodeName The name of the virtual node to update.
		 * @return {UpdateVirtualNodeOutput} Success
		 */
		UpdateVirtualNode(meshName: string, meshOwner: string, virtualNodeName: string, requestBody: UpdateVirtualNodeBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateVirtualNodeOutput> {
			return Axios.put<UpdateVirtualNodeOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes/' + (virtualNodeName == null ? '' : encodeURIComponent(virtualNodeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Deletes an existing virtual router.</p>
		 * <p>You must delete any routes associated with the virtual router before you can delete the
		 * router itself.</p>
		 * Delete /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}
		 * @param {string} meshName The name of the service mesh to delete the virtual router in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualRouterName The name of the virtual router to delete.
		 * @return {DeleteVirtualRouterOutput} Success
		 */
		DeleteVirtualRouter(meshName: string, meshOwner: string, virtualRouterName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteVirtualRouterOutput> {
			return Axios.delete<DeleteVirtualRouterOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Describes an existing virtual router.
		 * Get /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}
		 * @param {string} meshName The name of the service mesh that the virtual router resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualRouterName The name of the virtual router to describe.
		 * @return {DescribeVirtualRouterOutput} Success
		 */
		DescribeVirtualRouter(meshName: string, meshOwner: string, virtualRouterName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeVirtualRouterOutput> {
			return Axios.get<DescribeVirtualRouterOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates an existing virtual router in a specified service mesh.
		 * Put /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}
		 * @param {string} meshName The name of the service mesh that the virtual router resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualRouterName The name of the virtual router to update.
		 * @return {UpdateVirtualRouterOutput} Success
		 */
		UpdateVirtualRouter(meshName: string, meshOwner: string, virtualRouterName: string, requestBody: UpdateVirtualRouterBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateVirtualRouterOutput> {
			return Axios.put<UpdateVirtualRouterOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes an existing virtual service.
		 * Delete /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}
		 * @param {string} meshName The name of the service mesh to delete the virtual service in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualServiceName The name of the virtual service to delete.
		 * @return {DeleteVirtualServiceOutput} Success
		 */
		DeleteVirtualService(meshName: string, meshOwner: string, virtualServiceName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteVirtualServiceOutput> {
			return Axios.delete<DeleteVirtualServiceOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices/' + (virtualServiceName == null ? '' : encodeURIComponent(virtualServiceName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Describes an existing virtual service.
		 * Get /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}
		 * @param {string} meshName The name of the service mesh that the virtual service resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualServiceName The name of the virtual service to describe.
		 * @return {DescribeVirtualServiceOutput} Success
		 */
		DescribeVirtualService(meshName: string, meshOwner: string, virtualServiceName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeVirtualServiceOutput> {
			return Axios.get<DescribeVirtualServiceOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices/' + (virtualServiceName == null ? '' : encodeURIComponent(virtualServiceName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates an existing virtual service in a specified service mesh.
		 * Put /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}
		 * @param {string} meshName The name of the service mesh that the virtual service resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualServiceName The name of the virtual service to update.
		 * @return {UpdateVirtualServiceOutput} Success
		 */
		UpdateVirtualService(meshName: string, meshOwner: string, virtualServiceName: string, requestBody: UpdateVirtualServiceBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateVirtualServiceOutput> {
			return Axios.put<UpdateVirtualServiceOutput>(this.baseUri + '/v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices/' + (virtualServiceName == null ? '' : encodeURIComponent(virtualServiceName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * List the tags for an App Mesh resource.
		 * Get /v20190125/tags#resourceArn
		 * @param {number} limit The maximum number of tag results returned by <code>ListTagsForResource</code> in
		 *          paginated output. When this parameter is used, <code>ListTagsForResource</code> returns
		 *          only <code>limit</code> results in a single page along with a <code>nextToken</code>
		 *          response element. You can see the remaining results of the initial request by sending
		 *          another <code>ListTagsForResource</code> request with the returned <code>nextToken</code>
		 *          value. This value can be between 1 and 100. If you don't use
		 *          this parameter, <code>ListTagsForResource</code> returns up to 100
		 *          results and a <code>nextToken</code> value if applicable.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated
		 *             <code>ListTagsForResource</code> request where <code>limit</code> was used and the
		 *          results exceeded the value of that parameter. Pagination continues from the end of the
		 *          previous results that returned the <code>nextToken</code> value.
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the resource to list the tags for.
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(limit: number, nextToken: string, resourceArn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceOutput> {
			return Axios.get<ListTagsForResourceOutput>(this.baseUri + '/v20190125/tags#resourceArn?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Associates the specified tags to a resource with the specified <code>resourceArn</code>.
		 * If existing tags on a resource aren't specified in the request parameters, they aren't
		 * changed. When a resource is deleted, the tags associated with that resource are also
		 * deleted.
		 * Put /v20190125/tag#resourceArn
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource to add tags to.
		 * @return {TagResourceOutput} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceOutput> {
			return Axios.put<TagResourceOutput>(this.baseUri + '/v20190125/tag#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes specified tags from a resource.
		 * Put /v20190125/untag#resourceArn
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource to delete tags from.
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(resourceArn: string, requestBody: UntagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceOutput> {
			return Axios.put<UntagResourceOutput>(this.baseUri + '/v20190125/untag#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

	export interface CreateMeshBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string;

		/**
		 * The name to use for the service mesh.
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: string;

		/**An object that represents the specification of a service mesh. */
		spec?: string;

		/**
		 * Optional metadata that you can apply to the service mesh to assist with categorization
		 * and organization. Each tag consists of a key and an optional value, both of which you
		 * define. Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;
	}

	export interface CreateRouteBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string;

		/**
		 * The name to use for the route.
		 * Max length: 255
		 * Min length: 1
		 */
		routeName: string;

		/**An object that represents a route specification. Specify one route type. */
		spec: string;

		/**
		 * Optional metadata that you can apply to the route to assist with categorization and
		 * organization. Each tag consists of a key and an optional value, both of which you define.
		 * Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;
	}

	export interface CreateVirtualNodeBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string;

		/**An object that represents the specification of a virtual node. */
		spec: string;

		/**
		 * Optional metadata that you can apply to the virtual node to assist with categorization
		 * and organization. Each tag consists of a key and an optional value, both of which you
		 * define. Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;

		/**
		 * The name to use for the virtual node.
		 * Max length: 255
		 * Min length: 1
		 */
		virtualNodeName: string;
	}

	export interface CreateVirtualRouterBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string;

		/**An object that represents the specification of a virtual router. */
		spec: string;

		/**
		 * Optional metadata that you can apply to the virtual router to assist with categorization
		 * and organization. Each tag consists of a key and an optional value, both of which you
		 * define. Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;

		/**
		 * The name to use for the virtual router.
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: string;
	}

	export interface CreateVirtualServiceBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string;

		/**An object that represents the specification of a virtual service. */
		spec: string;

		/**
		 * Optional metadata that you can apply to the virtual service to assist with
		 * categorization and organization. Each tag consists of a key and an optional value, both of
		 * which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;

		/**The name to use for the virtual service. */
		virtualServiceName: string;
	}

	export interface UpdateMeshBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string;

		/**An object that represents the specification of a service mesh. */
		spec?: string;
	}

	export interface UpdateRouteBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string;

		/**An object that represents a route specification. Specify one route type. */
		spec: string;
	}

	export interface UpdateVirtualNodeBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string;

		/**An object that represents the specification of a virtual node. */
		spec: string;
	}

	export interface UpdateVirtualRouterBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string;

		/**An object that represents the specification of a virtual router. */
		spec: string;
	}

	export interface UpdateVirtualServiceBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string;

		/**An object that represents the specification of a virtual service. */
		spec: string;
	}

	export interface TagResourceBody {

		/**
		 * The tags to add to the resource. A tag is an array of key-value pairs.
		 * Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags: Array<TagRef>;
	}

	export interface UntagResourceBody {

		/**
		 * The keys of the tags to be removed.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tagKeys: Array<TagKey>;
	}

}

