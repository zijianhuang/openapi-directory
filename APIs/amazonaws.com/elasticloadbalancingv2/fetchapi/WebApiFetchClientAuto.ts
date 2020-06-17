export namespace My_Demo_Client {
	export interface AddListenerCertificatesOutput {
		Certificates?: Array<Certificate>;
	}


	/**Information about an SSL server certificate. */
	export interface Certificate {
		CertificateArn?: string;
		IsDefault?: boolean;
	}


	/**Information about a tag. */
	export interface Tag {
		Key: string;
		Value?: string;
	}

	export interface CreateListenerOutput {
		Listeners?: Array<Listener>;
	}


	/**Information about an action. */
	export interface Action {
		Type: ActionType;
		TargetGroupArn?: string;

		/**Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users. */
		AuthenticateOidcConfig?: AuthenticateOidcActionConfig;

		/**Request parameters to use when integrating with Amazon Cognito to authenticate users. */
		AuthenticateCognitoConfig?: AuthenticateCognitoActionConfig;
		Order?: number;

		/**<p>Information about a redirect action.</p> <p>A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.</p> <p>You can reuse URI components using the following reserved keywords:</p> <ul> <li> <p>#{protocol}</p> </li> <li> <p>#{host}</p> </li> <li> <p>#{port}</p> </li> <li> <p>#{path} (the leading "/" is removed)</p> </li> <li> <p>#{query}</p> </li> </ul> <p>For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&amp;value=xyz".</p> */
		RedirectConfig?: RedirectActionConfig;

		/**Information about an action that returns a custom HTTP response. */
		FixedResponseConfig?: FixedResponseActionConfig;

		/**Information about a forward action. */
		ForwardConfig?: ForwardActionConfig;
	}

	export enum ActionType { forward = 0, authenticate-oidc = 1, authenticate-cognito = 2, redirect = 3, fixed-response = 4 }

	export interface CreateLoadBalancerOutput {
		LoadBalancers?: Array<LoadBalancer>;
	}


	/**Information about a subnet mapping. */
	export interface SubnetMapping {
		SubnetId?: string;
		AllocationId?: string;
		PrivateIPv4Address?: string;
	}

	export interface CreateRuleOutput {
		Rules?: Array<Rule>;
	}


	/**Information about a condition for a rule. */
	export interface RuleCondition {
		Field?: string;
		Values?: Array<StringValue>;

		/**Information about a host header condition. */
		HostHeaderConfig?: HostHeaderConditionConfig;

		/**Information about a path pattern condition. */
		PathPatternConfig?: PathPatternConditionConfig;

		/**<p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p> */
		HttpHeaderConfig?: HttpHeaderConditionConfig;

		/**<p>Information about a query string condition.</p> <p>The query string component of a URI starts after the first '?' character and is terminated by either a '#' character or the end of the URI. A typical query string contains key/value pairs separated by '&amp;' characters. The allowed characters are specified by RFC 3986. Any character can be percentage encoded.</p> */
		QueryStringConfig?: QueryStringConditionConfig;

		/**<p>Information about an HTTP method condition.</p> <p>HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the <a href="https://www.iana.org/assignments/http-methods/http-methods.xhtml">HTTP Method Registry</a>. You can also define custom HTTP methods.</p> */
		HttpRequestMethodConfig?: HttpRequestMethodConditionConfig;

		/**<p>Information about a source IP condition.</p> <p>You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.</p> */
		SourceIpConfig?: SourceIpConditionConfig;
	}

	export interface CreateTargetGroupOutput {
		TargetGroups?: Array<TargetGroup>;
	}


	/**Information about a target. */
	export interface TargetDescription {
		Id: string;
		Port?: number;
		AvailabilityZone?: string;
	}

	export interface DescribeAccountLimitsOutput {
		Limits?: Array<Limit>;
		NextMarker?: string;
	}

	export interface DescribeListenerCertificatesOutput {
		Certificates?: Array<Certificate>;
		NextMarker?: string;
	}

	export interface DescribeListenersOutput {
		Listeners?: Array<Listener>;
		NextMarker?: string;
	}

	export interface DescribeLoadBalancerAttributesOutput {
		Attributes?: Array<LoadBalancerAttribute>;
	}

	export interface DescribeLoadBalancersOutput {
		LoadBalancers?: Array<LoadBalancer>;
		NextMarker?: string;
	}

	export interface DescribeRulesOutput {
		Rules?: Array<Rule>;
		NextMarker?: string;
	}

	export interface DescribeSSLPoliciesOutput {
		SslPolicies?: Array<SslPolicy>;
		NextMarker?: string;
	}

	export interface DescribeTagsOutput {
		TagDescriptions?: Array<TagDescription>;
	}

	export interface DescribeTargetGroupAttributesOutput {
		Attributes?: Array<TargetGroupAttribute>;
	}

	export interface DescribeTargetGroupsOutput {
		TargetGroups?: Array<TargetGroup>;
		NextMarker?: string;
	}

	export interface DescribeTargetHealthOutput {
		TargetHealthDescriptions?: Array<TargetHealthDescription>;
	}

	export interface ModifyListenerOutput {
		Listeners?: Array<Listener>;
	}

	export interface ModifyLoadBalancerAttributesOutput {
		Attributes?: Array<LoadBalancerAttribute>;
	}


	/**Information about a load balancer attribute. */
	export interface LoadBalancerAttribute {
		Key?: string;
		Value?: string;
	}

	export interface ModifyRuleOutput {
		Rules?: Array<Rule>;
	}

	export interface ModifyTargetGroupOutput {
		TargetGroups?: Array<TargetGroup>;
	}

	export interface ModifyTargetGroupAttributesOutput {
		Attributes?: Array<TargetGroupAttribute>;
	}


	/**Information about a target group attribute. */
	export interface TargetGroupAttribute {
		Key?: string;
		Value?: string;
	}

	export interface SetIpAddressTypeOutput {
		IpAddressType?: SetIpAddressTypeOutputIpAddressType;
	}

	export enum SetIpAddressTypeOutputIpAddressType { ipv4 = 0, dualstack = 1 }

	export interface SetRulePrioritiesOutput {
		Rules?: Array<Rule>;
	}


	/**Information about the priorities for the rules for a listener. */
	export interface RulePriorityPair {
		RuleArn?: string;
		Priority?: number;
	}

	export interface SetSecurityGroupsOutput {
		SecurityGroupIds?: Array<SecurityGroupId>;
	}

	export interface SetSubnetsOutput {
		AvailabilityZones?: Array<AvailabilityZone>;
	}

	export enum ActionTypeEnum { forward = 0, authenticate-oidc = 1, authenticate-cognito = 2, redirect = 3, fixed-response = 4 }


	/**Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users. */
	export interface AuthenticateOidcActionConfig {
		Issuer: string;
		AuthorizationEndpoint: string;
		TokenEndpoint: string;
		UserInfoEndpoint: string;
		ClientId: string;
		ClientSecret?: string;
		SessionCookieName?: string;
		Scope?: string;
		SessionTimeout?: number;
		AuthenticationRequestExtraParams?: AuthenticateOidcActionAuthenticationRequestExtraParams;
		OnUnauthenticatedRequest?: AuthenticateOidcActionConfigOnUnauthenticatedRequest;
		UseExistingClientSecret?: boolean;
	}

	export enum AuthenticateOidcActionConfigOnUnauthenticatedRequest { deny = 0, allow = 1, authenticate = 2 }


	/**Request parameters to use when integrating with Amazon Cognito to authenticate users. */
	export interface AuthenticateCognitoActionConfig {
		UserPoolArn: string;
		UserPoolClientId: string;
		UserPoolDomain: string;
		SessionCookieName?: string;
		Scope?: string;
		SessionTimeout?: number;
		AuthenticationRequestExtraParams?: AuthenticateCognitoActionAuthenticationRequestExtraParams;
		OnUnauthenticatedRequest?: AuthenticateCognitoActionConfigOnUnauthenticatedRequest;
	}

	export enum AuthenticateCognitoActionConfigOnUnauthenticatedRequest { deny = 0, allow = 1, authenticate = 2 }


	/**<p>Information about a redirect action.</p> <p>A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.</p> <p>You can reuse URI components using the following reserved keywords:</p> <ul> <li> <p>#{protocol}</p> </li> <li> <p>#{host}</p> </li> <li> <p>#{port}</p> </li> <li> <p>#{path} (the leading "/" is removed)</p> </li> <li> <p>#{query}</p> </li> </ul> <p>For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&amp;value=xyz".</p> */
	export interface RedirectActionConfig {
		Protocol?: string;
		Port?: string;
		Host?: string;
		Path?: string;
		Query?: string;
		StatusCode: RedirectActionConfigStatusCode;
	}

	export enum RedirectActionConfigStatusCode { HTTP_301 = 0, HTTP_302 = 1 }


	/**Information about an action that returns a custom HTTP response. */
	export interface FixedResponseActionConfig {
		MessageBody?: string;
		StatusCode: string;
		ContentType?: string;
	}


	/**Information about a forward action. */
	export interface ForwardActionConfig {
		TargetGroups?: Array<TargetGroupTuple>;

		/**Information about the target group stickiness for a rule. */
		TargetGroupStickinessConfig?: TargetGroupStickinessConfig;
	}

	export interface AddListenerCertificatesInput {
		ListenerArn: string;
		Certificates: Array<Certificate>;
	}

	export interface AddTagsInput {
		ResourceArns: Array<ResourceArn>;
		Tags: Array<Tag>;
	}

	export enum AuthenticateCognitoActionConditionalBehaviorEnum { deny = 0, allow = 1, authenticate = 2 }

	export enum AuthenticateOidcActionConditionalBehaviorEnum { deny = 0, allow = 1, authenticate = 2 }


	/**Information about an Availability Zone. */
	export interface AvailabilityZone {
		ZoneName?: string;
		SubnetId?: string;
		LoadBalancerAddresses?: Array<LoadBalancerAddress>;
	}


	/**Information about a cipher used in a policy. */
	export interface Cipher {
		Name?: string;
		Priority?: number;
	}

	export enum ProtocolEnum { HTTP = 0, HTTPS = 1, TCP = 2, TLS = 3, UDP = 4, TCP_UDP = 5 }

	export interface CreateListenerInput {
		LoadBalancerArn: string;
		Protocol: CreateListenerInputProtocol;
		Port: number;
		SslPolicy?: string;
		Certificates?: Array<Certificate>;
		DefaultActions: Array<Action>;
		AlpnPolicy?: Array<AlpnPolicyValue>;
	}

	export enum CreateListenerInputProtocol { HTTP = 0, HTTPS = 1, TCP = 2, TLS = 3, UDP = 4, TCP_UDP = 5 }

	export enum LoadBalancerSchemeEnum { internet-facing = 0, internal = 1 }

	export enum LoadBalancerTypeEnum { application = 0, network = 1 }

	export enum IpAddressType { ipv4 = 0, dualstack = 1 }

	export interface CreateLoadBalancerInput {
		Name: string;
		Subnets?: Array<SubnetId>;
		SubnetMappings?: Array<SubnetMapping>;
		SecurityGroups?: Array<SecurityGroupId>;
		Scheme?: CreateLoadBalancerInputScheme;
		Tags?: Array<Tag>;
		Type?: CreateLoadBalancerInputType;
		IpAddressType?: CreateLoadBalancerInputIpAddressType;
	}

	export enum CreateLoadBalancerInputScheme { internet-facing = 0, internal = 1 }

	export enum CreateLoadBalancerInputType { application = 0, network = 1 }

	export enum CreateLoadBalancerInputIpAddressType { ipv4 = 0, dualstack = 1 }

	export interface CreateRuleInput {
		ListenerArn: string;
		Conditions: Array<RuleCondition>;
		Priority: number;
		Actions: Array<Action>;
	}


	/**Information to use when checking for a successful response from a target. */
	export interface Matcher {
		HttpCode: string;
	}

	export enum TargetTypeEnum { instance = 0, ip = 1, lambda = 2 }

	export interface CreateTargetGroupInput {
		Name: string;
		Protocol?: CreateTargetGroupInputProtocol;
		Port?: number;
		VpcId?: string;
		HealthCheckProtocol?: CreateTargetGroupInputHealthCheckProtocol;
		HealthCheckPort?: string;
		HealthCheckEnabled?: boolean;
		HealthCheckPath?: string;
		HealthCheckIntervalSeconds?: number;
		HealthCheckTimeoutSeconds?: number;
		HealthyThresholdCount?: number;
		UnhealthyThresholdCount?: number;

		/**Information to use when checking for a successful response from a target. */
		Matcher?: Matcher;
		TargetType?: CreateTargetGroupInputTargetType;
	}

	export enum CreateTargetGroupInputProtocol { HTTP = 0, HTTPS = 1, TCP = 2, TLS = 3, UDP = 4, TCP_UDP = 5 }

	export enum CreateTargetGroupInputHealthCheckProtocol { HTTP = 0, HTTPS = 1, TCP = 2, TLS = 3, UDP = 4, TCP_UDP = 5 }

	export enum CreateTargetGroupInputTargetType { instance = 0, ip = 1, lambda = 2 }

	export interface DeleteListenerInput {
		ListenerArn: string;
	}

	export interface DeleteLoadBalancerInput {
		LoadBalancerArn: string;
	}

	export interface DeleteRuleInput {
		RuleArn: string;
	}

	export interface DeleteTargetGroupInput {
		TargetGroupArn: string;
	}

	export interface DeregisterTargetsInput {
		TargetGroupArn: string;
		Targets: Array<TargetDescription>;
	}

	export interface DescribeAccountLimitsInput {
		Marker?: string;
		PageSize?: number;
	}

	export interface DescribeListenerCertificatesInput {
		ListenerArn: string;
		Marker?: string;
		PageSize?: number;
	}

	export interface DescribeListenersInput {
		LoadBalancerArn?: string;
		ListenerArns?: Array<ListenerArn>;
		Marker?: string;
		PageSize?: number;
	}

	export interface DescribeLoadBalancerAttributesInput {
		LoadBalancerArn: string;
	}

	export interface DescribeLoadBalancersInput {
		LoadBalancerArns?: Array<LoadBalancerArn>;
		Names?: Array<LoadBalancerName>;
		Marker?: string;
		PageSize?: number;
	}

	export interface DescribeRulesInput {
		ListenerArn?: string;
		RuleArns?: Array<RuleArn>;
		Marker?: string;
		PageSize?: number;
	}

	export interface DescribeSSLPoliciesInput {
		Names?: Array<SslPolicyName>;
		Marker?: string;
		PageSize?: number;
	}

	export interface DescribeTagsInput {
		ResourceArns: Array<ResourceArn>;
	}

	export interface DescribeTargetGroupAttributesInput {
		TargetGroupArn: string;
	}

	export interface DescribeTargetGroupsInput {
		LoadBalancerArn?: string;
		TargetGroupArns?: Array<TargetGroupArn>;
		Names?: Array<TargetGroupName>;
		Marker?: string;
		PageSize?: number;
	}

	export interface DescribeTargetHealthInput {
		TargetGroupArn: string;
		Targets?: Array<TargetDescription>;
	}


	/**Information about the target group stickiness for a rule. */
	export interface TargetGroupStickinessConfig {
		Enabled?: boolean;
		DurationSeconds?: number;
	}


	/**Information about a host header condition. */
	export interface HostHeaderConditionConfig {
		Values?: Array<StringValue>;
	}


	/**<p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p> */
	export interface HttpHeaderConditionConfig {
		HttpHeaderName?: string;
		Values?: Array<StringValue>;
	}


	/**<p>Information about an HTTP method condition.</p> <p>HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the <a href="https://www.iana.org/assignments/http-methods/http-methods.xhtml">HTTP Method Registry</a>. You can also define custom HTTP methods.</p> */
	export interface HttpRequestMethodConditionConfig {
		Values?: Array<StringValue>;
	}


	/**Information about an Elastic Load Balancing resource limit for your AWS account. */
	export interface Limit {
		Name?: string;
		Max?: string;
	}


	/**Information about a listener. */
	export interface Listener {
		ListenerArn?: string;
		LoadBalancerArn?: string;
		Port?: number;
		Protocol?: ListenerProtocol;
		Certificates?: Array<Certificate>;
		SslPolicy?: string;
		DefaultActions?: Array<Action>;
		AlpnPolicy?: Array<AlpnPolicyValue>;
	}

	export enum ListenerProtocol { HTTP = 0, HTTPS = 1, TCP = 2, TLS = 3, UDP = 4, TCP_UDP = 5 }


	/**Information about the state of the load balancer. */
	export interface LoadBalancerState {
		Code?: LoadBalancerStateCode;
		Reason?: string;
	}

	export enum LoadBalancerStateCode { active = 0, provisioning = 1, active_impaired = 2, failed = 3 }


	/**Information about a load balancer. */
	export interface LoadBalancer {
		LoadBalancerArn?: string;
		DNSName?: string;
		CanonicalHostedZoneId?: string;
		CreatedTime?: Date;
		LoadBalancerName?: string;
		Scheme?: LoadBalancerScheme;
		VpcId?: string;

		/**Information about the state of the load balancer. */
		State?: LoadBalancerState;
		Type?: LoadBalancerType;
		AvailabilityZones?: Array<AvailabilityZone>;
		SecurityGroups?: Array<SecurityGroupId>;
		IpAddressType?: LoadBalancerIpAddressType;
	}

	export enum LoadBalancerScheme { internet-facing = 0, internal = 1 }

	export enum LoadBalancerType { application = 0, network = 1 }

	export enum LoadBalancerIpAddressType { ipv4 = 0, dualstack = 1 }


	/**Information about a static IP address for a load balancer. */
	export interface LoadBalancerAddress {
		IpAddress?: string;
		AllocationId?: string;
		PrivateIPv4Address?: string;
	}

	export enum LoadBalancerStateEnum { active = 0, provisioning = 1, active_impaired = 2, failed = 3 }

	export interface ModifyListenerInput {
		ListenerArn: string;
		Port?: number;
		Protocol?: ModifyListenerInputProtocol;
		SslPolicy?: string;
		Certificates?: Array<Certificate>;
		DefaultActions?: Array<Action>;
		AlpnPolicy?: Array<AlpnPolicyValue>;
	}

	export enum ModifyListenerInputProtocol { HTTP = 0, HTTPS = 1, TCP = 2, TLS = 3, UDP = 4, TCP_UDP = 5 }

	export interface ModifyLoadBalancerAttributesInput {
		LoadBalancerArn: string;
		Attributes: Array<LoadBalancerAttribute>;
	}

	export interface ModifyRuleInput {
		RuleArn: string;
		Conditions?: Array<RuleCondition>;
		Actions?: Array<Action>;
	}

	export interface ModifyTargetGroupAttributesInput {
		TargetGroupArn: string;
		Attributes: Array<TargetGroupAttribute>;
	}

	export interface ModifyTargetGroupInput {
		TargetGroupArn: string;
		HealthCheckProtocol?: ModifyTargetGroupInputHealthCheckProtocol;
		HealthCheckPort?: string;
		HealthCheckPath?: string;
		HealthCheckEnabled?: boolean;
		HealthCheckIntervalSeconds?: number;
		HealthCheckTimeoutSeconds?: number;
		HealthyThresholdCount?: number;
		UnhealthyThresholdCount?: number;

		/**Information to use when checking for a successful response from a target. */
		Matcher?: Matcher;
	}

	export enum ModifyTargetGroupInputHealthCheckProtocol { HTTP = 0, HTTPS = 1, TCP = 2, TLS = 3, UDP = 4, TCP_UDP = 5 }


	/**Information about a path pattern condition. */
	export interface PathPatternConditionConfig {
		Values?: Array<StringValue>;
	}


	/**<p>Information about a query string condition.</p> <p>The query string component of a URI starts after the first '?' character and is terminated by either a '#' character or the end of the URI. A typical query string contains key/value pairs separated by '&amp;' characters. The allowed characters are specified by RFC 3986. Any character can be percentage encoded.</p> */
	export interface QueryStringConditionConfig {
		Values?: Array<QueryStringKeyValuePair>;
	}


	/**Information about a key/value pair. */
	export interface QueryStringKeyValuePair {
		Key?: string;
		Value?: string;
	}

	export enum RedirectActionStatusCodeEnum { HTTP_301 = 0, HTTP_302 = 1 }

	export interface RegisterTargetsInput {
		TargetGroupArn: string;
		Targets: Array<TargetDescription>;
	}

	export interface RemoveListenerCertificatesInput {
		ListenerArn: string;
		Certificates: Array<Certificate>;
	}

	export interface RemoveTagsInput {
		ResourceArns: Array<ResourceArn>;
		TagKeys: Array<TagKey>;
	}


	/**Information about a rule. */
	export interface Rule {
		RuleArn?: string;
		Priority?: string;
		Conditions?: Array<RuleCondition>;
		Actions?: Array<Action>;
		IsDefault?: boolean;
	}


	/**<p>Information about a source IP condition.</p> <p>You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.</p> */
	export interface SourceIpConditionConfig {
		Values?: Array<StringValue>;
	}

	export interface SetIpAddressTypeInput {
		LoadBalancerArn: string;
		IpAddressType: SetIpAddressTypeInputIpAddressType;
	}

	export enum SetIpAddressTypeInputIpAddressType { ipv4 = 0, dualstack = 1 }

	export interface SetRulePrioritiesInput {
		RulePriorities: Array<RulePriorityPair>;
	}

	export interface SetSecurityGroupsInput {
		LoadBalancerArn: string;
		SecurityGroups: Array<SecurityGroupId>;
	}

	export interface SetSubnetsInput {
		LoadBalancerArn: string;
		Subnets?: Array<SubnetId>;
		SubnetMappings?: Array<SubnetMapping>;
	}


	/**Information about a policy used for SSL negotiation. */
	export interface SslPolicy {
		SslProtocols?: Array<SslProtocol>;
		Ciphers?: Array<Cipher>;
		Name?: string;
	}


	/**The tags associated with a resource. */
	export interface TagDescription {
		ResourceArn?: string;
		Tags?: Array<Tag>;
	}


	/**Information about a target group. */
	export interface TargetGroup {
		TargetGroupArn?: string;
		TargetGroupName?: string;
		Protocol?: TargetGroupProtocol;
		Port?: number;
		VpcId?: string;
		HealthCheckProtocol?: TargetGroupHealthCheckProtocol;
		HealthCheckPort?: string;
		HealthCheckEnabled?: boolean;
		HealthCheckIntervalSeconds?: number;
		HealthCheckTimeoutSeconds?: number;
		HealthyThresholdCount?: number;
		UnhealthyThresholdCount?: number;
		HealthCheckPath?: string;

		/**Information to use when checking for a successful response from a target. */
		Matcher?: Matcher;
		LoadBalancerArns?: Array<LoadBalancerArn>;
		TargetType?: TargetGroupTargetType;
	}

	export enum TargetGroupProtocol { HTTP = 0, HTTPS = 1, TCP = 2, TLS = 3, UDP = 4, TCP_UDP = 5 }

	export enum TargetGroupHealthCheckProtocol { HTTP = 0, HTTPS = 1, TCP = 2, TLS = 3, UDP = 4, TCP_UDP = 5 }

	export enum TargetGroupTargetType { instance = 0, ip = 1, lambda = 2 }


	/**Information about how traffic will be distributed between multiple target groups in a forward rule. */
	export interface TargetGroupTuple {
		TargetGroupArn?: string;
		Weight?: number;
	}

	export enum TargetHealthStateEnum { initial = 0, healthy = 1, unhealthy = 2, unused = 3, draining = 4, unavailable = 5 }

	export enum TargetHealthReasonEnum { Elb.RegistrationInProgress = 0, Elb.InitialHealthChecking = 1, Target.ResponseCodeMismatch = 2, Target.Timeout = 3, Target.FailedHealthChecks = 4, Target.NotRegistered = 5, Target.NotInUse = 6, Target.DeregistrationInProgress = 7, Target.InvalidState = 8, Target.IpUnusable = 9, Target.HealthCheckDisabled = 10, Elb.InternalError = 11 }


	/**Information about the current health of a target. */
	export interface TargetHealth {
		State?: TargetHealthState;
		Reason?: TargetHealthReason;
		Description?: string;
	}

	export enum TargetHealthState { initial = 0, healthy = 1, unhealthy = 2, unused = 3, draining = 4, unavailable = 5 }

	export enum TargetHealthReason { Elb.RegistrationInProgress = 0, Elb.InitialHealthChecking = 1, Target.ResponseCodeMismatch = 2, Target.Timeout = 3, Target.FailedHealthChecks = 4, Target.NotRegistered = 5, Target.NotInUse = 6, Target.DeregistrationInProgress = 7, Target.InvalidState = 8, Target.IpUnusable = 9, Target.HealthCheckDisabled = 10, Elb.InternalError = 11 }


	/**Information about the health of a target. */
	export interface TargetHealthDescription {

		/**Information about a target. */
		Target?: TargetDescription;
		HealthCheckPort?: string;

		/**Information about the current health of a target. */
		TargetHealth?: TargetHealth;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener.</p> <p>If the certificate in already in the certificate list, the call is successful but the certificate is not added again.</p> <p>To get the certificate list for a listener, use <a>DescribeListenerCertificates</a>. To remove certificates from the certificate list for a listener, use <a>RemoveListenerCertificates</a>. To replace the default certificate for a listener, use <a>ModifyListener</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL Certificates</a> in the <i>Application Load Balancers Guide</i>.</p>
		 * Get /#Action=AddListenerCertificates
		 * @param {string} ListenerArn The Amazon Resource Name (ARN) of the listener.
		 * @param {Array<Certificate>} Certificates The certificate to add. You can specify one certificate per call. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.
		 * @return {void} Success
		 */
		GET_AddListenerCertificates(ListenerArn: string, Certificates: Array<Certificate>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=AddListenerCertificates?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&' + Certificates.map(z => `Certificates=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, and your target groups.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p> <p>To list the current tags for your resources, use <a>DescribeTags</a>. To remove tags from your resources, use <a>RemoveTags</a>.</p>
		 * Get /#Action=AddTags
		 * @param {Array<ResourceArn>} ResourceArns The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<Tag>} Tags The tags.
		 * @return {void} Success
		 */
		GET_AddTags(ResourceArns: Array<ResourceArn>, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=AddTags?' + ResourceArns.map(z => `ResourceArns=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a listener for the specified Application Load Balancer or Network Load Balancer.</p> <p>To update a listener, use <a>ModifyListener</a>. When you are finished with a listener, you can delete it using <a>DeleteListener</a>. If you are finished with both the listener and the load balancer, you can delete them both using <a>DeleteLoadBalancer</a>.</p> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for Your Application Load Balancers</a> in the <i>Application Load Balancers Guide</i> and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for Your Network Load Balancers</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * Get /#Action=CreateListener
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {ProtocolEnum} Protocol The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, and TCP_UDP.
		 * @param {number} Port The port on which the load balancer is listening.
		 * @param {string} SslPolicy <p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. The following are the possible values:</p> <ul> <li> <p> <code>ELBSecurityPolicy-2016-08</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-TLS-1-0-2015-04</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-TLS-1-1-2017-01</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-TLS-1-2-2017-01</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-TLS-1-2-Ext-2018-06</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-FS-2018-06</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-FS-1-1-2019-08</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-FS-1-2-2019-08</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-FS-1-2-Res-2019-08</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security Policies</a> in the <i>Application Load Balancers Guide</i> and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security Policies</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * @param {Array<Certificate>} Certificates <p>[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.</p> <p>To create a certificate list for the listener, use <a>AddListenerCertificates</a>.</p>
		 * @param {Array<Action>} DefaultActions <p>The actions for the default rule. The rule must include one forward action or one or more fixed-response actions.</p> <p>If the action type is <code>forward</code>, you specify one or more target groups. The protocol of the target group must be HTTP or HTTPS for an Application Load Balancer. The protocol of the target group must be TCP, TLS, UDP, or TCP_UDP for a Network Load Balancer.</p> <p>[HTTPS listeners] If the action type is <code>authenticate-oidc</code>, you authenticate users through an identity provider that is OpenID Connect (OIDC) compliant.</p> <p>[HTTPS listeners] If the action type is <code>authenticate-cognito</code>, you authenticate users through the user pools supported by Amazon Cognito.</p> <p>[Application Load Balancer] If the action type is <code>redirect</code>, you redirect specified client requests from one URL to another.</p> <p>[Application Load Balancer] If the action type is <code>fixed-response</code>, you drop specified client requests and return a custom HTTP response.</p>
		 * @param {Array<AlpnPolicyValue>} AlpnPolicy <p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:</p> <ul> <li> <p> <code>HTTP1Only</code> </p> </li> <li> <p> <code>HTTP2Only</code> </p> </li> <li> <p> <code>HTTP2Optional</code> </p> </li> <li> <p> <code>HTTP2Preferred</code> </p> </li> <li> <p> <code>None</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN Policies</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_CreateListener(LoadBalancerArn: string, Protocol: ProtocolEnum, Port: number, SslPolicy: string, Certificates: Array<Certificate>, DefaultActions: Array<Action>, AlpnPolicy: Array<AlpnPolicyValue>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateListener?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&Protocol=' + Protocol + '&Port=' + Port + '&SslPolicy=' + (SslPolicy == null ? '' : encodeURIComponent(SslPolicy)) + '&' + Certificates.map(z => `Certificates=${z}`).join('&') + '&' + DefaultActions.map(z => `DefaultActions=${z}`).join('&') + '&' + AlpnPolicy.map(z => `AlpnPolicy=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates an Application Load Balancer or a Network Load Balancer.</p> <p>When you create a load balancer, you can specify security groups, public subnets, IP address type, and tags. Otherwise, you could do so later using <a>SetSecurityGroups</a>, <a>SetSubnets</a>, <a>SetIpAddressType</a>, and <a>AddTags</a>.</p> <p>To create listeners for your load balancer, use <a>CreateListener</a>. To describe your current load balancers, see <a>DescribeLoadBalancers</a>. When you are finished with a load balancer, you can delete it using <a>DeleteLoadBalancer</a>.</p> <p>For limit information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Limits for Your Application Load Balancer</a> in the <i>Application Load Balancers Guide</i> and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Limits for Your Network Load Balancer</a> in the <i>Network Load Balancers Guide</i>.</p> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a> in the <i>Application Load Balancers Guide</i> and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load Balancers</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * Get /#Action=CreateLoadBalancer
		 * @param {string} Name <p>The name of the load balancer.</p> <p>This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".</p>
		 * @param {Array<SubnetId>} Subnets <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones.</p>
		 * @param {Array<SubnetMapping>} SubnetMappings <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet.</p>
		 * @param {Array<SecurityGroupId>} SecurityGroups [Application Load Balancers] The IDs of the security groups for the load balancer.
		 * @param {LoadBalancerSchemeEnum} Scheme <p>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.</p> <p>The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.</p> <p>The default is an Internet-facing load balancer.</p>
		 * @param {Array<Tag>} Tags One or more tags to assign to the load balancer.
		 * @param {LoadBalancerTypeEnum} Type The type of load balancer. The default is <code>application</code>.
		 * @param {SetIpAddressTypeOutputIpAddressType} IpAddressType [Application Load Balancers] The type of IP addresses used by the subnets for your load balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). Internal load balancers must use <code>ipv4</code>.
		 * @return {void} Success
		 */
		GET_CreateLoadBalancer(Name: string, Subnets: Array<SubnetId>, SubnetMappings: Array<SubnetMapping>, SecurityGroups: Array<SecurityGroupId>, Scheme: LoadBalancerSchemeEnum, Tags: Array<Tag>, Type: LoadBalancerTypeEnum, IpAddressType: SetIpAddressTypeOutputIpAddressType, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateLoadBalancer?Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&' + Subnets.map(z => `Subnets=${z}`).join('&') + '&' + SubnetMappings.map(z => `SubnetMappings=${z}`).join('&') + '&' + SecurityGroups.map(z => `SecurityGroups=${z}`).join('&') + '&Scheme=' + Scheme + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Type=' + Type + '&IpAddressType=' + IpAddressType + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener Rules</a> in the <i>Application Load Balancers Guide</i>.</p> <p>To view your current rules, use <a>DescribeRules</a>. To update a rule, use <a>ModifyRule</a>. To set the priorities of your rules, use <a>SetRulePriorities</a>. To delete a rule, use <a>DeleteRule</a>.</p>
		 * Get /#Action=CreateRule
		 * @param {string} ListenerArn The Amazon Resource Name (ARN) of the listener.
		 * @param {Array<RuleCondition>} Conditions The conditions. Each rule can include zero or one of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>, and zero or more of the following conditions: <code>http-header</code> and <code>query-string</code>.
		 * @param {number} Priority The rule priority. A listener can't have multiple rules with the same priority.
		 * @param {Array<Action>} Actions <p>The actions. Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p> <p>If the action type is <code>forward</code>, you specify one or more target groups. The protocol of the target group must be HTTP or HTTPS for an Application Load Balancer. The protocol of the target group must be TCP, TLS, UDP, or TCP_UDP for a Network Load Balancer.</p> <p>[HTTPS listeners] If the action type is <code>authenticate-oidc</code>, you authenticate users through an identity provider that is OpenID Connect (OIDC) compliant.</p> <p>[HTTPS listeners] If the action type is <code>authenticate-cognito</code>, you authenticate users through the user pools supported by Amazon Cognito.</p> <p>[Application Load Balancer] If the action type is <code>redirect</code>, you redirect specified client requests from one URL to another.</p> <p>[Application Load Balancer] If the action type is <code>fixed-response</code>, you drop specified client requests and return a custom HTTP response.</p>
		 * @return {void} Success
		 */
		GET_CreateRule(ListenerArn: string, Conditions: Array<RuleCondition>, Priority: number, Actions: Array<Action>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateRule?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&' + Conditions.map(z => `Conditions=${z}`).join('&') + '&Priority=' + Priority + '&' + Actions.map(z => `Actions=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a target group.</p> <p>To register targets with the target group, use <a>RegisterTargets</a>. To update the health check settings for the target group, use <a>ModifyTargetGroup</a>. To monitor the health of targets in the target group, use <a>DescribeTargetHealth</a>.</p> <p>To route traffic to the targets in a target group, specify the target group in an action using <a>CreateListener</a> or <a>CreateRule</a>.</p> <p>To delete a target group, use <a>DeleteTargetGroup</a>.</p> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target Groups for Your Application Load Balancers</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target Groups for Your Network Load Balancers</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * Get /#Action=CreateTargetGroup
		 * @param {string} Name <p>The name of the target group.</p> <p>This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.</p>
		 * @param {ProtocolEnum} Protocol The protocol to use for routing traffic to the targets. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, or TCP_UDP. A TCP_UDP listener must be associated with a TCP_UDP target group. If the target is a Lambda function, this parameter does not apply.
		 * @param {number} Port The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply.
		 * @param {string} VpcId The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply. Otherwise, this parameter is required.
		 * @param {ProtocolEnum} HealthCheckProtocol The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers, the default is TCP. The TCP protocol is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The TLS, UDP, and TCP_UDP protocols are not supported for health checks.
		 * @param {string} HealthCheckPort The port the load balancer uses when performing health checks on targets. The default is <code>traffic-port</code>, which is the port on which each target receives traffic from the load balancer.
		 * @param {boolean} HealthCheckEnabled Indicates whether health checks are enabled. If the target type is <code>lambda</code>, health checks are disabled by default but can be enabled. If the target type is <code>instance</code> or <code>ip</code>, health checks are always enabled and cannot be disabled.
		 * @param {string} HealthCheckPath [HTTP/HTTPS health checks] The ping path that is the destination on the targets for health checks. The default is /.
		 * @param {number} HealthCheckIntervalSeconds The approximate amount of time, in seconds, between health checks of an individual target. For HTTP and HTTPS health checks, the range is 5–300 seconds. For TCP health checks, the supported values are 10 and 30 seconds. If the target type is <code>instance</code> or <code>ip</code>, the default is 30 seconds. If the target type is <code>lambda</code>, the default is 35 seconds.
		 * @param {number} HealthCheckTimeoutSeconds The amount of time, in seconds, during which no response from a target means a failed health check. For target groups with a protocol of HTTP or HTTPS, the default is 5 seconds. For target groups with a protocol of TCP or TLS, this value must be 6 seconds for HTTP health checks and 10 seconds for TCP and HTTPS health checks. If the target type is <code>lambda</code>, the default is 30 seconds.
		 * @param {number} HealthyThresholdCount The number of consecutive health checks successes required before considering an unhealthy target healthy. For target groups with a protocol of HTTP or HTTPS, the default is 5. For target groups with a protocol of TCP or TLS, the default is 3. If the target type is <code>lambda</code>, the default is 5.
		 * @param {number} UnhealthyThresholdCount The number of consecutive health check failures required before considering a target unhealthy. For target groups with a protocol of HTTP or HTTPS, the default is 2. For target groups with a protocol of TCP or TLS, this value must be the same as the healthy threshold count. If the target type is <code>lambda</code>, the default is 2.
		 * @param {string} Matcher [HTTP/HTTPS health checks] The HTTP codes to use when checking for a successful response from a target.
		 * @param {TargetTypeEnum} TargetType <p>The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type.</p> <ul> <li> <p> <code>instance</code> - Targets are specified by instance ID. This is the default value. If the target group protocol is UDP or TCP_UDP, the target type must be <code>instance</code>.</p> </li> <li> <p> <code>ip</code> - Targets are specified by IP address. You can specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.</p> </li> <li> <p> <code>lambda</code> - The target groups contains a single Lambda function.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_CreateTargetGroup(Name: string, Protocol: ProtocolEnum, Port: number, VpcId: string, HealthCheckProtocol: ProtocolEnum, HealthCheckPort: string, HealthCheckEnabled: boolean, HealthCheckPath: string, HealthCheckIntervalSeconds: number, HealthCheckTimeoutSeconds: number, HealthyThresholdCount: number, UnhealthyThresholdCount: number, Matcher: string, TargetType: TargetTypeEnum, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateTargetGroup?Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&Protocol=' + Protocol + '&Port=' + Port + '&VpcId=' + (VpcId == null ? '' : encodeURIComponent(VpcId)) + '&HealthCheckProtocol=' + HealthCheckProtocol + '&HealthCheckPort=' + (HealthCheckPort == null ? '' : encodeURIComponent(HealthCheckPort)) + '&HealthCheckEnabled=' + HealthCheckEnabled + '&HealthCheckPath=' + (HealthCheckPath == null ? '' : encodeURIComponent(HealthCheckPath)) + '&HealthCheckIntervalSeconds=' + HealthCheckIntervalSeconds + '&HealthCheckTimeoutSeconds=' + HealthCheckTimeoutSeconds + '&HealthyThresholdCount=' + HealthyThresholdCount + '&UnhealthyThresholdCount=' + UnhealthyThresholdCount + '&Matcher=' + (Matcher == null ? '' : encodeURIComponent(Matcher)) + '&TargetType=' + TargetType + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached, using <a>DeleteLoadBalancer</a>.</p>
		 * Get /#Action=DeleteListener
		 * @param {string} ListenerArn The Amazon Resource Name (ARN) of the listener.
		 * @return {void} Success
		 */
		GET_DeleteListener(ListenerArn: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteListener?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Deletes the specified Application Load Balancer or Network Load Balancer and its attached listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>
		 * Get /#Action=DeleteLoadBalancer
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @return {void} Success
		 */
		GET_DeleteLoadBalancer(LoadBalancerArn: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteLoadBalancer?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified rule.
		 * Get /#Action=DeleteRule
		 * @param {string} RuleArn The Amazon Resource Name (ARN) of the rule.
		 * @return {void} Success
		 */
		GET_DeleteRule(RuleArn: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteRule?RuleArn=' + (RuleArn == null ? '' : encodeURIComponent(RuleArn)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks.</p>
		 * Get /#Action=DeleteTargetGroup
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @return {void} Success
		 */
		GET_DeleteTargetGroup(TargetGroupArn: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteTargetGroup?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.
		 * Get /#Action=DeregisterTargets
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @param {Array<TargetDescription>} Targets The targets. If you specified a port override when you registered a target, you must specify both the target ID and the port when you deregister it.
		 * @return {void} Success
		 */
		GET_DeregisterTargets(TargetGroupArn: string, Targets: Array<TargetDescription>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeregisterTargets?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&' + Targets.map(z => `Targets=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Limits for Your Application Load Balancers</a> in the <i>Application Load Balancer Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Limits for Your Network Load Balancers</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * Get /#Action=DescribeAccountLimits
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeAccountLimits(Marker: string, PageSize: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeAccountLimits?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL Certificates</a> in the <i>Application Load Balancers Guide</i>.</p>
		 * Get /#Action=DescribeListenerCertificates
		 * @param {string} ListenerArn The Amazon Resource Names (ARN) of the listener.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeListenerCertificates(ListenerArn: string, Marker: string, PageSize: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeListenerCertificates?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Describes the specified listeners or the listeners for the specified Application Load Balancer or Network Load Balancer. You must specify either a load balancer or one or more listeners.</p> <p>For an HTTPS or TLS listener, the output includes the default certificate for the listener. To describe the certificate list for the listener, use <a>DescribeListenerCertificates</a>.</p>
		 * Get /#Action=DescribeListeners
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {Array<ListenerArn>} ListenerArns The Amazon Resource Names (ARN) of the listeners.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeListeners(LoadBalancerArn: string, ListenerArns: Array<ListenerArn>, Marker: string, PageSize: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeListeners?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&' + ListenerArns.map(z => `ListenerArns=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Describes the attributes for the specified Application Load Balancer or Network Load Balancer.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load Balancer Attributes</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load Balancer Attributes</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * Get /#Action=DescribeLoadBalancerAttributes
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancerAttributes(LoadBalancerArn: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeLoadBalancerAttributes?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Describes the specified load balancers or all of your load balancers.</p> <p>To describe the listeners for a load balancer, use <a>DescribeListeners</a>. To describe the attributes for a load balancer, use <a>DescribeLoadBalancerAttributes</a>.</p>
		 * Get /#Action=DescribeLoadBalancers
		 * @param {Array<LoadBalancerArn>} LoadBalancerArns The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.
		 * @param {Array<LoadBalancerName>} Names The names of the load balancers.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancers(LoadBalancerArns: Array<LoadBalancerArn>, Names: Array<LoadBalancerName>, Marker: string, PageSize: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeLoadBalancers?' + LoadBalancerArns.map(z => `LoadBalancerArns=${z}`).join('&') + '&' + Names.map(z => `Names=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
		 * Get /#Action=DescribeRules
		 * @param {string} ListenerArn The Amazon Resource Name (ARN) of the listener.
		 * @param {Array<RuleArn>} RuleArns The Amazon Resource Names (ARN) of the rules.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeRules(ListenerArn: string, RuleArns: Array<RuleArn>, Marker: string, PageSize: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeRules?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&' + RuleArns.map(z => `RuleArns=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security Policies</a> in the <i>Application Load Balancers Guide</i>.</p>
		 * Get /#Action=DescribeSSLPolicies
		 * @param {Array<SslPolicyName>} Names The names of the policies.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeSSLPolicies(Names: Array<SslPolicyName>, Marker: string, PageSize: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeSSLPolicies?' + Names.map(z => `Names=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes the tags for the specified resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, and target groups.
		 * Get /#Action=DescribeTags
		 * @param {Array<ResourceArn>} ResourceArns The Amazon Resource Names (ARN) of the resources. You can specify up to 20 resources in a single call.
		 * @return {void} Success
		 */
		GET_DescribeTags(ResourceArns: Array<ResourceArn>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeTags?' + ResourceArns.map(z => `ResourceArns=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Describes the attributes for the specified target group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target Group Attributes</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target Group Attributes</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * Get /#Action=DescribeTargetGroupAttributes
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @return {void} Success
		 */
		GET_DescribeTargetGroupAttributes(TargetGroupArn: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeTargetGroupAttributes?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.</p> <p>To describe the targets for a target group, use <a>DescribeTargetHealth</a>. To describe the attributes of a target group, use <a>DescribeTargetGroupAttributes</a>.</p>
		 * Get /#Action=DescribeTargetGroups
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {Array<TargetGroupArn>} TargetGroupArns The Amazon Resource Names (ARN) of the target groups.
		 * @param {Array<TargetGroupName>} Names The names of the target groups.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeTargetGroups(LoadBalancerArn: string, TargetGroupArns: Array<TargetGroupArn>, Names: Array<TargetGroupName>, Marker: string, PageSize: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeTargetGroups?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&' + TargetGroupArns.map(z => `TargetGroupArns=${z}`).join('&') + '&' + Names.map(z => `Names=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes the health of the specified targets or all of your targets.
		 * Get /#Action=DescribeTargetHealth
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @param {Array<TargetDescription>} Targets The targets.
		 * @return {void} Success
		 */
		GET_DescribeTargetHealth(TargetGroupArn: string, Targets: Array<TargetDescription>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeTargetHealth?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&' + Targets.map(z => `Targets=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged.</p> <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>
		 * Get /#Action=ModifyListener
		 * @param {string} ListenerArn The Amazon Resource Name (ARN) of the listener.
		 * @param {number} Port The port for connections from clients to the load balancer.
		 * @param {ProtocolEnum} Protocol The protocol for connections from clients to the load balancer. Application Load Balancers support the HTTP and HTTPS protocols. Network Load Balancers support the TCP, TLS, UDP, and TCP_UDP protocols.
		 * @param {string} SslPolicy <p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. The following are the possible values:</p> <ul> <li> <p> <code>ELBSecurityPolicy-2016-08</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-TLS-1-0-2015-04</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-TLS-1-1-2017-01</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-TLS-1-2-2017-01</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-TLS-1-2-Ext-2018-06</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-FS-2018-06</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-FS-1-1-2019-08</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-FS-1-2-2019-08</code> </p> </li> <li> <p> <code>ELBSecurityPolicy-FS-1-2-Res-2019-08</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security Policies</a> in the <i>Application Load Balancers Guide</i> and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security Policies</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * @param {Array<Certificate>} Certificates <p>[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.</p> <p>To create a certificate list, use <a>AddListenerCertificates</a>.</p>
		 * @param {Array<Action>} DefaultActions <p>The actions for the default rule. The rule must include one forward action or one or more fixed-response actions.</p> <p>If the action type is <code>forward</code>, you specify one or more target groups. The protocol of the target group must be HTTP or HTTPS for an Application Load Balancer. The protocol of the target group must be TCP, TLS, UDP, or TCP_UDP for a Network Load Balancer.</p> <p>[HTTPS listeners] If the action type is <code>authenticate-oidc</code>, you authenticate users through an identity provider that is OpenID Connect (OIDC) compliant.</p> <p>[HTTPS listeners] If the action type is <code>authenticate-cognito</code>, you authenticate users through the user pools supported by Amazon Cognito.</p> <p>[Application Load Balancer] If the action type is <code>redirect</code>, you redirect specified client requests from one URL to another.</p> <p>[Application Load Balancer] If the action type is <code>fixed-response</code>, you drop specified client requests and return a custom HTTP response.</p>
		 * @param {Array<AlpnPolicyValue>} AlpnPolicy <p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:</p> <ul> <li> <p> <code>HTTP1Only</code> </p> </li> <li> <p> <code>HTTP2Only</code> </p> </li> <li> <p> <code>HTTP2Optional</code> </p> </li> <li> <p> <code>HTTP2Preferred</code> </p> </li> <li> <p> <code>None</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN Policies</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_ModifyListener(ListenerArn: string, Port: number, Protocol: ProtocolEnum, SslPolicy: string, Certificates: Array<Certificate>, DefaultActions: Array<Action>, AlpnPolicy: Array<AlpnPolicyValue>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyListener?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&Port=' + Port + '&Protocol=' + Protocol + '&SslPolicy=' + (SslPolicy == null ? '' : encodeURIComponent(SslPolicy)) + '&' + Certificates.map(z => `Certificates=${z}`).join('&') + '&' + DefaultActions.map(z => `DefaultActions=${z}`).join('&') + '&' + AlpnPolicy.map(z => `AlpnPolicy=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Modifies the specified attributes of the specified Application Load Balancer or Network Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>
		 * Get /#Action=ModifyLoadBalancerAttributes
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {Array<LoadBalancerAttribute>} Attributes The load balancer attributes.
		 * @return {void} Success
		 */
		GET_ModifyLoadBalancerAttributes(LoadBalancerArn: string, Attributes: Array<LoadBalancerAttribute>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyLoadBalancerAttributes?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&' + Attributes.map(z => `Attributes=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p> <p>To modify the actions for the default rule, use <a>ModifyListener</a>.</p>
		 * Get /#Action=ModifyRule
		 * @param {string} RuleArn The Amazon Resource Name (ARN) of the rule.
		 * @param {Array<RuleCondition>} Conditions The conditions. Each rule can include zero or one of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>, and zero or more of the following conditions: <code>http-header</code> and <code>query-string</code>.
		 * @param {Array<Action>} Actions <p>The actions. Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p> <p>If the action type is <code>forward</code>, you specify one or more target groups. The protocol of the target group must be HTTP or HTTPS for an Application Load Balancer. The protocol of the target group must be TCP, TLS, UDP, or TCP_UDP for a Network Load Balancer.</p> <p>[HTTPS listeners] If the action type is <code>authenticate-oidc</code>, you authenticate users through an identity provider that is OpenID Connect (OIDC) compliant.</p> <p>[HTTPS listeners] If the action type is <code>authenticate-cognito</code>, you authenticate users through the user pools supported by Amazon Cognito.</p> <p>[Application Load Balancer] If the action type is <code>redirect</code>, you redirect specified client requests from one URL to another.</p> <p>[Application Load Balancer] If the action type is <code>fixed-response</code>, you drop specified client requests and return a custom HTTP response.</p>
		 * @return {void} Success
		 */
		GET_ModifyRule(RuleArn: string, Conditions: Array<RuleCondition>, Actions: Array<Action>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyRule?RuleArn=' + (RuleArn == null ? '' : encodeURIComponent(RuleArn)) + '&' + Conditions.map(z => `Conditions=${z}`).join('&') + '&' + Actions.map(z => `Actions=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Modifies the health checks used when evaluating the health state of the targets in the specified target group.</p> <p>To monitor the health of the targets, use <a>DescribeTargetHealth</a>.</p>
		 * Get /#Action=ModifyTargetGroup
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @param {ProtocolEnum} HealthCheckProtocol <p>The protocol the load balancer uses when performing health checks on targets. The TCP protocol is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The TLS, UDP, and TCP_UDP protocols are not supported for health checks.</p> <p>With Network Load Balancers, you can't modify this setting.</p>
		 * @param {string} HealthCheckPort The port the load balancer uses when performing health checks on targets.
		 * @param {string} HealthCheckPath [HTTP/HTTPS health checks] The ping path that is the destination for the health check request.
		 * @param {boolean} HealthCheckEnabled Indicates whether health checks are enabled.
		 * @param {number} HealthCheckIntervalSeconds <p>The approximate amount of time, in seconds, between health checks of an individual target. For Application Load Balancers, the range is 5 to 300 seconds. For Network Load Balancers, the supported values are 10 or 30 seconds.</p> <p>With Network Load Balancers, you can't modify this setting.</p>
		 * @param {number} HealthCheckTimeoutSeconds <p>[HTTP/HTTPS health checks] The amount of time, in seconds, during which no response means a failed health check.</p> <p>With Network Load Balancers, you can't modify this setting.</p>
		 * @param {number} HealthyThresholdCount The number of consecutive health checks successes required before considering an unhealthy target healthy.
		 * @param {number} UnhealthyThresholdCount The number of consecutive health check failures required before considering the target unhealthy. For Network Load Balancers, this value must be the same as the healthy threshold count.
		 * @param {string} Matcher <p>[HTTP/HTTPS health checks] The HTTP codes to use when checking for a successful response from a target.</p> <p>With Network Load Balancers, you can't modify this setting.</p>
		 * @return {void} Success
		 */
		GET_ModifyTargetGroup(TargetGroupArn: string, HealthCheckProtocol: ProtocolEnum, HealthCheckPort: string, HealthCheckPath: string, HealthCheckEnabled: boolean, HealthCheckIntervalSeconds: number, HealthCheckTimeoutSeconds: number, HealthyThresholdCount: number, UnhealthyThresholdCount: number, Matcher: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyTargetGroup?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&HealthCheckProtocol=' + HealthCheckProtocol + '&HealthCheckPort=' + (HealthCheckPort == null ? '' : encodeURIComponent(HealthCheckPort)) + '&HealthCheckPath=' + (HealthCheckPath == null ? '' : encodeURIComponent(HealthCheckPath)) + '&HealthCheckEnabled=' + HealthCheckEnabled + '&HealthCheckIntervalSeconds=' + HealthCheckIntervalSeconds + '&HealthCheckTimeoutSeconds=' + HealthCheckTimeoutSeconds + '&HealthyThresholdCount=' + HealthyThresholdCount + '&UnhealthyThresholdCount=' + UnhealthyThresholdCount + '&Matcher=' + (Matcher == null ? '' : encodeURIComponent(Matcher)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies the specified attributes of the specified target group.
		 * Get /#Action=ModifyTargetGroupAttributes
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @param {Array<TargetGroupAttribute>} Attributes The attributes.
		 * @return {void} Success
		 */
		GET_ModifyTargetGroupAttributes(TargetGroupArn: string, Attributes: Array<TargetGroupAttribute>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyTargetGroupAttributes?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&' + Attributes.map(z => `Attributes=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Registers the specified targets with the specified target group.</p> <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p> <p>To remove a target from a target group, use <a>DeregisterTargets</a>.</p>
		 * Get /#Action=RegisterTargets
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @param {Array<TargetDescription>} Targets <p>The targets.</p> <p>To register a target by instance ID, specify the instance ID. To register a target by IP address, specify the IP address. To register a Lambda function, specify the ARN of the Lambda function.</p>
		 * @return {void} Success
		 */
		GET_RegisterTargets(TargetGroupArn: string, Targets: Array<TargetDescription>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=RegisterTargets?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&' + Targets.map(z => `Targets=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.</p> <p>You can't remove the default certificate for a listener. To replace the default certificate, call <a>ModifyListener</a>.</p> <p>To list the certificates for your listener, use <a>DescribeListenerCertificates</a>.</p>
		 * Get /#Action=RemoveListenerCertificates
		 * @param {string} ListenerArn The Amazon Resource Name (ARN) of the listener.
		 * @param {Array<Certificate>} Certificates The certificate to remove. You can specify one certificate per call. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.
		 * @return {void} Success
		 */
		GET_RemoveListenerCertificates(ListenerArn: string, Certificates: Array<Certificate>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=RemoveListenerCertificates?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&' + Certificates.map(z => `Certificates=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Removes the specified tags from the specified Elastic Load Balancing resource.</p> <p>To list the current tags for your resources, use <a>DescribeTags</a>.</p>
		 * Get /#Action=RemoveTags
		 * @param {Array<ResourceArn>} ResourceArns The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<TagKey>} TagKeys The tag keys for the tags to remove.
		 * @return {void} Success
		 */
		GET_RemoveTags(ResourceArns: Array<ResourceArn>, TagKeys: Array<TagKey>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=RemoveTags?' + ResourceArns.map(z => `ResourceArns=${z}`).join('&') + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the type of IP addresses used by the subnets of the specified Application Load Balancer or Network Load Balancer.
		 * Get /#Action=SetIpAddressType
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {SetIpAddressTypeOutputIpAddressType} IpAddressType The IP address type. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). Internal load balancers must use <code>ipv4</code>. Network Load Balancers must use <code>ipv4</code>.
		 * @return {void} Success
		 */
		GET_SetIpAddressType(LoadBalancerArn: string, IpAddressType: SetIpAddressTypeOutputIpAddressType, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=SetIpAddressType?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&IpAddressType=' + IpAddressType + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>
		 * Get /#Action=SetRulePriorities
		 * @param {Array<RulePriorityPair>} RulePriorities The rule priorities.
		 * @return {void} Success
		 */
		GET_SetRulePriorities(RulePriorities: Array<RulePriorityPair>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=SetRulePriorities?' + RulePriorities.map(z => `RulePriorities=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer.</p>
		 * Get /#Action=SetSecurityGroups
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {Array<SecurityGroupId>} SecurityGroups The IDs of the security groups.
		 * @return {void} Success
		 */
		GET_SetSecurityGroups(LoadBalancerArn: string, SecurityGroups: Array<SecurityGroupId>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=SetSecurityGroups?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&' + SecurityGroups.map(z => `SecurityGroups=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Enables the Availability Zones for the specified public subnets for the specified load balancer. The specified subnets replace the previously enabled subnets.</p> <p>When you specify subnets for a Network Load Balancer, you must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.</p>
		 * Get /#Action=SetSubnets
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {Array<SubnetId>} Subnets The IDs of the public subnets. You must specify subnets from at least two Availability Zones. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.
		 * @param {Array<SubnetMapping>} SubnetMappings <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. If you need static IP addresses for your internet-facing load balancer, you can specify one Elastic IP address per subnet. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet.</p>
		 * @return {void} Success
		 */
		GET_SetSubnets(LoadBalancerArn: string, Subnets: Array<SubnetId>, SubnetMappings: Array<SubnetMapping>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=SetSubnets?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&' + Subnets.map(z => `Subnets=${z}`).join('&') + '&' + SubnetMappings.map(z => `SubnetMappings=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

