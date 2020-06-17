export namespace My_Demo_Client {
	export interface AssociateResolverEndpointIpAddressResponse {

		/**In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}

	export interface AssociateResolverEndpointIpAddressRequest {
		ResolverEndpointId: string;

		/**In an <a>UpdateResolverEndpoint</a> request, information about an IP address to update. */
		IpAddress: IpAddressUpdate;
	}

	export interface AssociateResolverRuleResponse {

		/**In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC. */
		ResolverRuleAssociation?: ResolverRuleAssociation;
	}

	export interface AssociateResolverRuleRequest {
		ResolverRuleId: string;
		Name?: string;
		VPCId: string;
	}

	export interface CreateResolverEndpointResponse {

		/**In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}

	export interface CreateResolverEndpointRequest {
		CreatorRequestId: string;
		Name?: string;
		SecurityGroupIds: Array<ResourceId>;
		Direction: CreateResolverEndpointRequestDirection;
		IpAddresses: Array<IpAddressRequest>;
		Tags?: Array<Tag>;
	}

	export enum CreateResolverEndpointRequestDirection { INBOUND = 0, OUTBOUND = 1 }

	export interface CreateResolverRuleResponse {

		/**For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
		ResolverRule?: ResolverRule;
	}

	export interface CreateResolverRuleRequest {
		CreatorRequestId: string;
		Name?: string;
		RuleType: CreateResolverRuleRequestRuleType;
		DomainName: string;
		TargetIps?: Array<TargetAddress>;
		ResolverEndpointId?: string;
		Tags?: Array<Tag>;
	}

	export enum CreateResolverRuleRequestRuleType { FORWARD = 0, SYSTEM = 1, RECURSIVE = 2 }

	export interface DeleteResolverEndpointResponse {

		/**In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}

	export interface DeleteResolverEndpointRequest {
		ResolverEndpointId: string;
	}

	export interface DeleteResolverRuleResponse {

		/**For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
		ResolverRule?: ResolverRule;
	}

	export interface DeleteResolverRuleRequest {
		ResolverRuleId: string;
	}

	export interface DisassociateResolverEndpointIpAddressResponse {

		/**In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}

	export interface DisassociateResolverEndpointIpAddressRequest {
		ResolverEndpointId: string;

		/**In an <a>UpdateResolverEndpoint</a> request, information about an IP address to update. */
		IpAddress: IpAddressUpdate;
	}

	export interface DisassociateResolverRuleResponse {

		/**In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC. */
		ResolverRuleAssociation?: ResolverRuleAssociation;
	}

	export interface DisassociateResolverRuleRequest {
		VPCId: string;
		ResolverRuleId: string;
	}

	export interface GetResolverEndpointResponse {

		/**In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}

	export interface GetResolverEndpointRequest {
		ResolverEndpointId: string;
	}

	export interface GetResolverRuleResponse {

		/**For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
		ResolverRule?: ResolverRule;
	}

	export interface GetResolverRuleRequest {
		ResolverRuleId: string;
	}

	export interface GetResolverRuleAssociationResponse {

		/**In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC. */
		ResolverRuleAssociation?: ResolverRuleAssociation;
	}

	export interface GetResolverRuleAssociationRequest {
		ResolverRuleAssociationId: string;
	}

	export interface GetResolverRulePolicyResponse {
		ResolverRulePolicy?: string;
	}

	export interface GetResolverRulePolicyRequest {
		Arn: string;
	}

	export interface ListResolverEndpointIpAddressesResponse {
		NextToken?: string;
		MaxResults?: number;
		IpAddresses?: Array<IpAddressResponse>;
	}

	export interface ListResolverEndpointIpAddressesRequest {
		ResolverEndpointId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListResolverEndpointsResponse {
		NextToken?: string;
		MaxResults?: number;
		ResolverEndpoints?: Array<ResolverEndpoint>;
	}

	export interface ListResolverEndpointsRequest {
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<Filter>;
	}

	export interface ListResolverRuleAssociationsResponse {
		NextToken?: string;
		MaxResults?: number;
		ResolverRuleAssociations?: Array<ResolverRuleAssociation>;
	}

	export interface ListResolverRuleAssociationsRequest {
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<Filter>;
	}

	export interface ListResolverRulesResponse {
		NextToken?: string;
		MaxResults?: number;
		ResolverRules?: Array<ResolverRule>;
	}

	export interface ListResolverRulesRequest {
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<Filter>;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
		MaxResults?: number;
		NextToken?: string;
	}


	/**The response to a <code>PutResolverRulePolicy</code> request. */
	export interface PutResolverRulePolicyResponse {
		ReturnValue?: boolean;
	}

	export interface PutResolverRulePolicyRequest {
		Arn: string;
		ResolverRulePolicy: string;
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateResolverEndpointResponse {

		/**In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}

	export interface UpdateResolverEndpointRequest {
		ResolverEndpointId: string;
		Name?: string;
	}

	export interface UpdateResolverRuleResponse {

		/**For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
		ResolverRule?: ResolverRule;
	}

	export interface UpdateResolverRuleRequest {
		ResolverRuleId: string;

		/**In an <a>UpdateResolverRule</a> request, information about the changes that you want to make. */
		Config: ResolverRuleConfig;
	}


	/**In an <a>UpdateResolverEndpoint</a> request, information about an IP address to update. */
	export interface IpAddressUpdate {
		IpId?: string;
		SubnetId?: string;
		Ip?: string;
	}


	/**In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
	export interface ResolverEndpoint {
		Id?: string;
		CreatorRequestId?: string;
		Arn?: string;
		Name?: string;
		SecurityGroupIds?: Array<ResourceId>;
		Direction?: ResolverEndpointDirection;
		IpAddressCount?: number;
		HostVPCId?: string;
		Status?: ResolverEndpointStatus;
		StatusMessage?: string;
		CreationTime?: string;
		ModificationTime?: string;
	}

	export enum ResolverEndpointDirection { INBOUND = 0, OUTBOUND = 1 }

	export enum ResolverEndpointStatus { CREATING = 0, OPERATIONAL = 1, UPDATING = 2, AUTO_RECOVERING = 3, ACTION_NEEDED = 4, DELETING = 5 }


	/**In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC. */
	export interface ResolverRuleAssociation {
		Id?: string;
		ResolverRuleId?: string;
		Name?: string;
		VPCId?: string;
		Status?: ResolverRuleAssociationStatus;
		StatusMessage?: string;
	}

	export enum ResolverRuleAssociationStatus { CREATING = 0, COMPLETE = 1, DELETING = 2, FAILED = 3, OVERRIDDEN = 4 }

	export enum ResolverEndpointDirection { INBOUND = 0, OUTBOUND = 1 }

	export enum RuleTypeOption { FORWARD = 0, SYSTEM = 1, RECURSIVE = 2 }


	/**For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
	export interface ResolverRule {
		Id?: string;
		CreatorRequestId?: string;
		Arn?: string;
		DomainName?: string;
		Status?: ResolverRuleStatus;
		StatusMessage?: string;
		RuleType?: ResolverRuleRuleType;
		Name?: string;
		TargetIps?: Array<TargetAddress>;
		ResolverEndpointId?: string;
		OwnerId?: string;
		ShareStatus?: ResolverRuleShareStatus;
	}

	export enum ResolverRuleStatus { COMPLETE = 0, DELETING = 1, UPDATING = 2, FAILED = 3 }

	export enum ResolverRuleRuleType { FORWARD = 0, SYSTEM = 1, RECURSIVE = 2 }

	export enum ResolverRuleShareStatus { NOT_SHARED = 0, SHARED_WITH_ME = 1, SHARED_BY_ME = 2 }


	/**For <code>List</code> operations, an optional specification to return a subset of objects, such as resolver endpoints or resolver rules. */
	export interface Filter {
		Name?: string;
		Values?: Array<FilterValue>;
	}


	/**In an <a>CreateResolverEndpoint</a> request, a subnet and IP address that you want to use for DNS queries. */
	export interface IpAddressRequest {
		SubnetId: string;
		Ip?: string;
	}

	export enum IpAddressStatus { CREATING = 0, FAILED_CREATION = 1, ATTACHING = 2, ATTACHED = 3, REMAP_DETACHING = 4, REMAP_ATTACHING = 5, DETACHING = 6, FAILED_RESOURCE_GONE = 7, DELETING = 8, DELETE_FAILED_FAS_EXPIRED = 9 }


	/**In the response to a <a>GetResolverEndpoint</a> request, information about the IP addresses that the resolver endpoint uses for DNS queries. */
	export interface IpAddressResponse {
		IpId?: string;
		SubnetId?: string;
		Ip?: string;
		Status?: IpAddressResponseStatus;
		StatusMessage?: string;
		CreationTime?: string;
		ModificationTime?: string;
	}

	export enum IpAddressResponseStatus { CREATING = 0, FAILED_CREATION = 1, ATTACHING = 2, ATTACHED = 3, REMAP_DETACHING = 4, REMAP_ATTACHING = 5, DETACHING = 6, FAILED_RESOURCE_GONE = 7, DELETING = 8, DELETE_FAILED_FAS_EXPIRED = 9 }

	export enum ResolverEndpointStatus { CREATING = 0, OPERATIONAL = 1, UPDATING = 2, AUTO_RECOVERING = 3, ACTION_NEEDED = 4, DELETING = 5 }

	export enum ResolverRuleStatus { COMPLETE = 0, DELETING = 1, UPDATING = 2, FAILED = 3 }

	export enum ShareStatus { NOT_SHARED = 0, SHARED_WITH_ME = 1, SHARED_BY_ME = 2 }

	export enum ResolverRuleAssociationStatus { CREATING = 0, COMPLETE = 1, DELETING = 2, FAILED = 3, OVERRIDDEN = 4 }


	/**In an <a>UpdateResolverRule</a> request, information about the changes that you want to make. */
	export interface ResolverRuleConfig {
		Name?: string;
		TargetIps?: Array<TargetAddress>;
		ResolverEndpointId?: string;
	}


	/**One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}


	/**In a <a>CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to. */
	export interface TargetAddress {
		Ip: string;
		Port?: number;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Adds IP addresses to an inbound or an outbound resolver endpoint. If you want to adding more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a>DisassociateResolverEndpointIpAddress</a>.</p>
		 * Post /#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress
		 * @return {AssociateResolverEndpointIpAddressResponse} Success
		 */
		AssociateResolverEndpointIpAddress(requestBody: AssociateResolverEndpointIpAddressRequest, headersHandler?: () => {[header: string]: string}): Promise<AssociateResolverEndpointIpAddressResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Associates a resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a>CreateResolverRule</a>.
		 * Post /#X-Amz-Target=Route53Resolver.AssociateResolverRule
		 * @return {AssociateResolverRuleResponse} Success
		 */
		AssociateResolverRule(requestBody: AssociateResolverRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<AssociateResolverRuleResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.AssociateResolverRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a resolver endpoint. There are two types of resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network or another VPC.</p> </li> <li> <p>An <i>outbound resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network or another VPC.</p> </li> </ul>
		 * Post /#X-Amz-Target=Route53Resolver.CreateResolverEndpoint
		 * @return {CreateResolverEndpointResponse} Success
		 */
		CreateResolverEndpoint(requestBody: CreateResolverEndpointRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateResolverEndpointResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.CreateResolverEndpoint', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * For DNS queries that originate in your VPCs, specifies which resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
		 * Post /#X-Amz-Target=Route53Resolver.CreateResolverRule
		 * @return {CreateResolverRuleResponse} Success
		 */
		CreateResolverRule(requestBody: CreateResolverRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateResolverRuleResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.CreateResolverRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes a resolver endpoint. The effect of deleting a resolver endpoint depends on whether it's an inbound or an outbound resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network or another VPC are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network or to another VPC.</p> </li> </ul>
		 * Post /#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint
		 * @return {DeleteResolverEndpointResponse} Success
		 */
		DeleteResolverEndpoint(requestBody: DeleteResolverEndpointRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteResolverEndpointResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a resolver rule. Before you can delete a resolver rule, you must disassociate it from all the VPCs that you associated the resolver rule with. For more infomation, see <a>DisassociateResolverRule</a>.
		 * Post /#X-Amz-Target=Route53Resolver.DeleteResolverRule
		 * @return {DeleteResolverRuleResponse} Success
		 */
		DeleteResolverRule(requestBody: DeleteResolverRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteResolverRuleResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.DeleteResolverRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Removes IP addresses from an inbound or an outbound resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a>AssociateResolverEndpointIpAddress</a>.</p>
		 * Post /#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress
		 * @return {DisassociateResolverEndpointIpAddressResponse} Success
		 */
		DisassociateResolverEndpointIpAddress(requestBody: DisassociateResolverEndpointIpAddressRequest, headersHandler?: () => {[header: string]: string}): Promise<DisassociateResolverEndpointIpAddressResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Removes the association between a specified resolver rule and a specified VPC.</p> <important> <p>If you disassociate a resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the resolver rule. </p> </important>
		 * Post /#X-Amz-Target=Route53Resolver.DisassociateResolverRule
		 * @return {DisassociateResolverRuleResponse} Success
		 */
		DisassociateResolverRule(requestBody: DisassociateResolverRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<DisassociateResolverRuleResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.DisassociateResolverRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about a specified resolver endpoint, such as whether it's an inbound or an outbound resolver endpoint, and the current status of the endpoint.
		 * Post /#X-Amz-Target=Route53Resolver.GetResolverEndpoint
		 * @return {GetResolverEndpointResponse} Success
		 */
		GetResolverEndpoint(requestBody: GetResolverEndpointRequest, headersHandler?: () => {[header: string]: string}): Promise<GetResolverEndpointResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.GetResolverEndpoint', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about a specified resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound resolver endpoint that the rule is associated with.
		 * Post /#X-Amz-Target=Route53Resolver.GetResolverRule
		 * @return {GetResolverRuleResponse} Success
		 */
		GetResolverRule(requestBody: GetResolverRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<GetResolverRuleResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.GetResolverRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about an association between a specified resolver rule and a VPC. You associate a resolver rule and a VPC using <a>AssociateResolverRule</a>.
		 * Post /#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation
		 * @return {GetResolverRuleAssociationResponse} Success
		 */
		GetResolverRuleAssociation(requestBody: GetResolverRuleAssociationRequest, headersHandler?: () => {[header: string]: string}): Promise<GetResolverRuleAssociationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about a resolver rule policy. A resolver rule policy specifies the Resolver operations and resources that you want to allow another AWS account to be able to use.
		 * Post /#X-Amz-Target=Route53Resolver.GetResolverRulePolicy
		 * @return {GetResolverRulePolicyResponse} Success
		 */
		GetResolverRulePolicy(requestBody: GetResolverRulePolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<GetResolverRulePolicyResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.GetResolverRulePolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the IP addresses for a specified resolver endpoint.
		 * Post /#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverEndpointIpAddressesResponse} Success
		 */
		ListResolverEndpointIpAddresses(MaxResults: string, NextToken: string, requestBody: ListResolverEndpointIpAddressesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListResolverEndpointIpAddressesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists all the resolver endpoints that were created using the current AWS account.
		 * Post /#X-Amz-Target=Route53Resolver.ListResolverEndpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverEndpointsResponse} Success
		 */
		ListResolverEndpoints(MaxResults: string, NextToken: string, requestBody: ListResolverEndpointsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListResolverEndpointsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.ListResolverEndpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the associations that were created between resolver rules and VPCs using the current AWS account.
		 * Post /#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverRuleAssociationsResponse} Success
		 */
		ListResolverRuleAssociations(MaxResults: string, NextToken: string, requestBody: ListResolverRuleAssociationsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListResolverRuleAssociationsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the resolver rules that were created using the current AWS account.
		 * Post /#X-Amz-Target=Route53Resolver.ListResolverRules
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverRulesResponse} Success
		 */
		ListResolverRules(MaxResults: string, NextToken: string, requestBody: ListResolverRulesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListResolverRulesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.ListResolverRules?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the tags that you associated with the specified resource.
		 * Post /#X-Amz-Target=Route53Resolver.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.ListTagsForResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Specifies the Resolver operations and resources that you want to allow another AWS account to be able to use.
		 * Post /#X-Amz-Target=Route53Resolver.PutResolverRulePolicy
		 * @return {PutResolverRulePolicyResponse} Success
		 */
		PutResolverRulePolicy(requestBody: PutResolverRulePolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<PutResolverRulePolicyResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.PutResolverRulePolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Adds one or more tags to a specified resource.
		 * Post /#X-Amz-Target=Route53Resolver.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.TagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes one or more tags from a specified resource.
		 * Post /#X-Amz-Target=Route53Resolver.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.UntagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Updates the name of an inbound or an outbound resolver endpoint.
		 * Post /#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint
		 * @return {UpdateResolverEndpointResponse} Success
		 */
		UpdateResolverEndpoint(requestBody: UpdateResolverEndpointRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateResolverEndpointResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Updates settings for a specified resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.
		 * Post /#X-Amz-Target=Route53Resolver.UpdateResolverRule
		 * @return {UpdateResolverRuleResponse} Success
		 */
		UpdateResolverRule(requestBody: UpdateResolverRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateResolverRuleResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Resolver.UpdateResolverRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

