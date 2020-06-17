export namespace My_Demo_Client {

	/**Information about a tag. */
	export interface Tag {
		Key: string;
		Value?: string;
	}


	/**Contains the output of ApplySecurityGroupsToLoadBalancer. */
	export interface ApplySecurityGroupsToLoadBalancerOutput {
		SecurityGroups?: Array<SecurityGroupId>;
	}


	/**Contains the output of AttachLoadBalancerToSubnets. */
	export interface AttachLoadBalancerToSubnetsOutput {
		Subnets?: Array<SubnetId>;
	}


	/**Contains the output of ConfigureHealthCheck. */
	export interface ConfigureHealthCheckOutput {

		/**Information about a health check. */
		HealthCheck?: HealthCheck;
	}


	/**Contains the output for CreateLoadBalancer. */
	export interface CreateAccessPointOutput {
		DNSName?: string;
	}


	/**<p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p> */
	export interface Listener {
		Protocol: string;
		LoadBalancerPort: number;
		InstanceProtocol?: string;
		InstancePort: number;
		SSLCertificateId?: string;
	}


	/**Information about a policy attribute. */
	export interface PolicyAttribute {
		AttributeName?: string;
		AttributeValue?: string;
	}


	/**Contains the output of DeregisterInstancesFromLoadBalancer. */
	export interface DeregisterEndPointsOutput {
		Instances?: Array<Instance>;
	}


	/**The ID of an EC2 instance. */
	export interface Instance {
		InstanceId?: string;
	}

	export interface DescribeAccountLimitsOutput {
		Limits?: Array<Limit>;
		NextMarker?: string;
	}


	/**Contains the output for DescribeInstanceHealth. */
	export interface DescribeEndPointStateOutput {
		InstanceStates?: Array<InstanceState>;
	}


	/**Contains the output of DescribeLoadBalancerAttributes. */
	export interface DescribeLoadBalancerAttributesOutput {

		/**The attributes for a load balancer. */
		LoadBalancerAttributes?: LoadBalancerAttributes;
	}


	/**Contains the output of DescribeLoadBalancerPolicies. */
	export interface DescribeLoadBalancerPoliciesOutput {
		PolicyDescriptions?: Array<PolicyDescription>;
	}


	/**Contains the output of DescribeLoadBalancerPolicyTypes. */
	export interface DescribeLoadBalancerPolicyTypesOutput {
		PolicyTypeDescriptions?: Array<PolicyTypeDescription>;
	}


	/**Contains the parameters for DescribeLoadBalancers. */
	export interface DescribeAccessPointsOutput {
		LoadBalancerDescriptions?: Array<LoadBalancerDescription>;
		NextMarker?: string;
	}


	/**Contains the output for DescribeTags. */
	export interface DescribeTagsOutput {
		TagDescriptions?: Array<TagDescription>;
	}


	/**Contains the output of DetachLoadBalancerFromSubnets. */
	export interface DetachLoadBalancerFromSubnetsOutput {
		Subnets?: Array<SubnetId>;
	}


	/**Contains the output for DisableAvailabilityZonesForLoadBalancer. */
	export interface RemoveAvailabilityZonesOutput {
		AvailabilityZones?: Array<AvailabilityZone>;
	}


	/**Contains the output of EnableAvailabilityZonesForLoadBalancer. */
	export interface AddAvailabilityZonesOutput {
		AvailabilityZones?: Array<AvailabilityZone>;
	}


	/**Contains the output of ModifyLoadBalancerAttributes. */
	export interface ModifyLoadBalancerAttributesOutput {
		LoadBalancerName?: string;

		/**The attributes for a load balancer. */
		LoadBalancerAttributes?: LoadBalancerAttributes;
	}


	/**Information about the <code>CrossZoneLoadBalancing</code> attribute. */
	export interface CrossZoneLoadBalancing {
		Enabled: boolean;
	}


	/**Information about the <code>AccessLog</code> attribute. */
	export interface AccessLog {
		Enabled: boolean;
		S3BucketName?: string;
		EmitInterval?: number;
		S3BucketPrefix?: string;
	}


	/**Information about the <code>ConnectionDraining</code> attribute. */
	export interface ConnectionDraining {
		Enabled: boolean;
		Timeout?: number;
	}


	/**Information about the <code>ConnectionSettings</code> attribute. */
	export interface ConnectionSettings {
		IdleTimeout: number;
	}


	/**Contains the output of RegisterInstancesWithLoadBalancer. */
	export interface RegisterEndPointsOutput {
		Instances?: Array<Instance>;
	}


	/**The key of a tag. */
	export interface TagKeyOnly {
		Key?: string;
	}


	/**Contains the parameters for EnableAvailabilityZonesForLoadBalancer. */
	export interface AddAvailabilityZonesInput {
		LoadBalancerName: string;
		AvailabilityZones: Array<AvailabilityZone>;
	}


	/**Contains the parameters for AddTags. */
	export interface AddTagsInput {
		LoadBalancerNames: Array<AccessPointName>;
		Tags: Array<Tag>;
	}


	/**This data type is reserved. */
	export interface AdditionalAttribute {
		Key?: string;
		Value?: string;
	}


	/**Information about a policy for application-controlled session stickiness. */
	export interface AppCookieStickinessPolicy {
		PolicyName?: string;
		CookieName?: string;
	}


	/**Contains the parameters for ApplySecurityGroupsToLoadBalancer. */
	export interface ApplySecurityGroupsToLoadBalancerInput {
		LoadBalancerName: string;
		SecurityGroups: Array<SecurityGroupId>;
	}


	/**Contains the parameters for AttachLoaBalancerToSubnets. */
	export interface AttachLoadBalancerToSubnetsInput {
		LoadBalancerName: string;
		Subnets: Array<SubnetId>;
	}


	/**Information about the configuration of an EC2 instance. */
	export interface BackendServerDescription {
		InstancePort?: number;
		PolicyNames?: Array<PolicyName>;
	}


	/**Information about a health check. */
	export interface HealthCheck {
		Target: string;
		Interval: number;
		Timeout: number;
		UnhealthyThreshold: number;
		HealthyThreshold: number;
	}


	/**Contains the parameters for ConfigureHealthCheck. */
	export interface ConfigureHealthCheckInput {
		LoadBalancerName: string;

		/**Information about a health check. */
		HealthCheck: HealthCheck;
	}


	/**Contains the parameters for CreateLoadBalancer. */
	export interface CreateAccessPointInput {
		LoadBalancerName: string;
		Listeners: Array<Listener>;
		AvailabilityZones?: Array<AvailabilityZone>;
		Subnets?: Array<SubnetId>;
		SecurityGroups?: Array<SecurityGroupId>;
		Scheme?: string;
		Tags?: Array<Tag>;
	}


	/**Contains the parameters for CreateAppCookieStickinessPolicy. */
	export interface CreateAppCookieStickinessPolicyInput {
		LoadBalancerName: string;
		PolicyName: string;
		CookieName: string;
	}


	/**Contains the parameters for CreateLBCookieStickinessPolicy. */
	export interface CreateLBCookieStickinessPolicyInput {
		LoadBalancerName: string;
		PolicyName: string;
		CookieExpirationPeriod?: number;
	}


	/**Contains the parameters for CreateLoadBalancerListeners. */
	export interface CreateLoadBalancerListenerInput {
		LoadBalancerName: string;
		Listeners: Array<Listener>;
	}


	/**Contains the parameters for CreateLoadBalancerPolicy. */
	export interface CreateLoadBalancerPolicyInput {
		LoadBalancerName: string;
		PolicyName: string;
		PolicyTypeName: string;
		PolicyAttributes?: Array<PolicyAttribute>;
	}


	/**Contains the parameters for DeleteLoadBalancer. */
	export interface DeleteAccessPointInput {
		LoadBalancerName: string;
	}


	/**Contains the parameters for DeleteLoadBalancerListeners. */
	export interface DeleteLoadBalancerListenerInput {
		LoadBalancerName: string;
		LoadBalancerPorts: Array<AccessPointPort>;
	}


	/**Contains the parameters for DeleteLoadBalancerPolicy. */
	export interface DeleteLoadBalancerPolicyInput {
		LoadBalancerName: string;
		PolicyName: string;
	}


	/**Contains the parameters for DeregisterInstancesFromLoadBalancer. */
	export interface DeregisterEndPointsInput {
		LoadBalancerName: string;
		Instances: Array<Instance>;
	}


	/**Contains the parameters for DescribeLoadBalancers. */
	export interface DescribeAccessPointsInput {
		LoadBalancerNames?: Array<AccessPointName>;
		Marker?: string;
		PageSize?: number;
	}

	export interface DescribeAccountLimitsInput {
		Marker?: string;
		PageSize?: number;
	}


	/**Contains the parameters for DescribeInstanceHealth. */
	export interface DescribeEndPointStateInput {
		LoadBalancerName: string;
		Instances?: Array<Instance>;
	}


	/**Contains the parameters for DescribeLoadBalancerAttributes. */
	export interface DescribeLoadBalancerAttributesInput {
		LoadBalancerName: string;
	}


	/**The attributes for a load balancer. */
	export interface LoadBalancerAttributes {

		/**Information about the <code>CrossZoneLoadBalancing</code> attribute. */
		CrossZoneLoadBalancing?: CrossZoneLoadBalancing;

		/**Information about the <code>AccessLog</code> attribute. */
		AccessLog?: AccessLog;

		/**Information about the <code>ConnectionDraining</code> attribute. */
		ConnectionDraining?: ConnectionDraining;

		/**Information about the <code>ConnectionSettings</code> attribute. */
		ConnectionSettings?: ConnectionSettings;
		AdditionalAttributes?: Array<AdditionalAttribute>;
	}


	/**Contains the parameters for DescribeLoadBalancerPolicies. */
	export interface DescribeLoadBalancerPoliciesInput {
		LoadBalancerName?: string;
		PolicyNames?: Array<PolicyName>;
	}


	/**Contains the parameters for DescribeLoadBalancerPolicyTypes. */
	export interface DescribeLoadBalancerPolicyTypesInput {
		PolicyTypeNames?: Array<PolicyTypeName>;
	}


	/**Contains the parameters for DescribeTags. */
	export interface DescribeTagsInput {
		LoadBalancerNames: Array<AccessPointName>;
	}


	/**Contains the parameters for DetachLoadBalancerFromSubnets. */
	export interface DetachLoadBalancerFromSubnetsInput {
		LoadBalancerName: string;
		Subnets: Array<SubnetId>;
	}


	/**Information about the state of an EC2 instance. */
	export interface InstanceState {
		InstanceId?: string;
		State?: string;
		ReasonCode?: string;
		Description?: string;
	}


	/**Information about a policy for duration-based session stickiness. */
	export interface LBCookieStickinessPolicy {
		PolicyName?: string;
		CookieExpirationPeriod?: number;
	}


	/**Information about an Elastic Load Balancing resource limit for your AWS account. */
	export interface Limit {
		Name?: string;
		Max?: string;
	}


	/**The policies enabled for a listener. */
	export interface ListenerDescription {

		/**<p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p> */
		Listener?: Listener;
		PolicyNames?: Array<PolicyName>;
	}


	/**The policies for a load balancer. */
	export interface Policies {
		AppCookieStickinessPolicies?: Array<AppCookieStickinessPolicy>;
		LBCookieStickinessPolicies?: Array<LBCookieStickinessPolicy>;
		OtherPolicies?: Array<PolicyName>;
	}


	/**Information about a source security group. */
	export interface SourceSecurityGroup {
		OwnerAlias?: string;
		GroupName?: string;
	}


	/**Information about a load balancer. */
	export interface LoadBalancerDescription {
		LoadBalancerName?: string;
		DNSName?: string;
		CanonicalHostedZoneName?: string;
		CanonicalHostedZoneNameID?: string;
		ListenerDescriptions?: Array<ListenerDescription>;

		/**The policies for a load balancer. */
		Policies?: Policies;
		BackendServerDescriptions?: Array<BackendServerDescription>;
		AvailabilityZones?: Array<AvailabilityZone>;
		Subnets?: Array<SubnetId>;
		VPCId?: string;
		Instances?: Array<Instance>;

		/**Information about a health check. */
		HealthCheck?: HealthCheck;

		/**Information about a source security group. */
		SourceSecurityGroup?: SourceSecurityGroup;
		SecurityGroups?: Array<SecurityGroupId>;
		CreatedTime?: Date;
		Scheme?: string;
	}


	/**Contains the parameters for ModifyLoadBalancerAttributes. */
	export interface ModifyLoadBalancerAttributesInput {
		LoadBalancerName: string;

		/**The attributes for a load balancer. */
		LoadBalancerAttributes: LoadBalancerAttributes;
	}


	/**Information about a policy attribute. */
	export interface PolicyAttributeDescription {
		AttributeName?: string;
		AttributeValue?: string;
	}


	/**Information about a policy attribute type. */
	export interface PolicyAttributeTypeDescription {
		AttributeName?: string;
		AttributeType?: string;
		Description?: string;
		DefaultValue?: string;
		Cardinality?: string;
	}


	/**Information about a policy. */
	export interface PolicyDescription {
		PolicyName?: string;
		PolicyTypeName?: string;
		PolicyAttributeDescriptions?: Array<PolicyAttributeDescription>;
	}


	/**Information about a policy type. */
	export interface PolicyTypeDescription {
		PolicyTypeName?: string;
		Description?: string;
		PolicyAttributeTypeDescriptions?: Array<PolicyAttributeTypeDescription>;
	}


	/**Contains the parameters for RegisterInstancesWithLoadBalancer. */
	export interface RegisterEndPointsInput {
		LoadBalancerName: string;
		Instances: Array<Instance>;
	}


	/**Contains the parameters for DisableAvailabilityZonesForLoadBalancer. */
	export interface RemoveAvailabilityZonesInput {
		LoadBalancerName: string;
		AvailabilityZones: Array<AvailabilityZone>;
	}


	/**Contains the parameters for RemoveTags. */
	export interface RemoveTagsInput {
		LoadBalancerNames: Array<AccessPointName>;
		Tags: Array<TagKeyOnly>;
	}


	/**Contains the parameters for SetLoadBalancerListenerSSLCertificate. */
	export interface SetLoadBalancerListenerSSLCertificateInput {
		LoadBalancerName: string;
		LoadBalancerPort: number;
		SSLCertificateId: string;
	}


	/**Contains the parameters for SetLoadBalancerPoliciesForBackendServer. */
	export interface SetLoadBalancerPoliciesForBackendServerInput {
		LoadBalancerName: string;
		InstancePort: number;
		PolicyNames: Array<PolicyName>;
	}


	/**Contains the parameters for SetLoadBalancePoliciesOfListener. */
	export interface SetLoadBalancerPoliciesOfListenerInput {
		LoadBalancerName: string;
		LoadBalancerPort: number;
		PolicyNames: Array<PolicyName>;
	}


	/**The tags associated with a load balancer. */
	export interface TagDescription {
		LoadBalancerName?: string;
		Tags?: Array<Tag>;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, <code>AddTags</code> updates its value.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=AddTags
		 * @param {Array<AccessPointName>} LoadBalancerNames The name of the load balancer. You can specify one load balancer only.
		 * @param {Array<Tag>} Tags The tags.
		 * @return {void} Success
		 */
		GET_AddTags(LoadBalancerNames: Array<AccessPointName>, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=AddTags?' + LoadBalancerNames.map(z => `LoadBalancerNames=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=ApplySecurityGroupsToLoadBalancer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<SecurityGroupId>} SecurityGroups The IDs of the security groups to associate with the load balancer. Note that you cannot specify the name of the security group.
		 * @return {void} Success
		 */
		GET_ApplySecurityGroupsToLoadBalancer(LoadBalancerName: string, SecurityGroups: Array<SecurityGroupId>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ApplySecurityGroupsToLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + SecurityGroups.map(z => `SecurityGroups=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p> <p>The load balancer evenly distributes requests across all registered subnets. For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=AttachLoadBalancerToSubnets
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<SubnetId>} Subnets The IDs of the subnets to add. You can add only one subnet per Availability Zone.
		 * @return {void} Success
		 */
		GET_AttachLoadBalancerToSubnets(LoadBalancerName: string, Subnets: Array<SubnetId>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=AttachLoadBalancerToSubnets?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Subnets.map(z => `Subnets=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=ConfigureHealthCheck
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {string} HealthCheck The configuration information.
		 * @return {void} Success
		 */
		GET_ConfigureHealthCheck(LoadBalancerName: string, HealthCheck: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ConfigureHealthCheck?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&HealthCheck=' + (HealthCheck == null ? '' : encodeURIComponent(HealthCheck)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>, except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.</p> <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=CreateAppCookieStickinessPolicy
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {string} PolicyName The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.
		 * @param {string} CookieName The name of the application cookie used for stickiness.
		 * @return {void} Success
		 */
		GET_CreateAppCookieStickinessPolicy(LoadBalancerName: string, PolicyName: string, CookieName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateAppCookieStickinessPolicy?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&CookieName=' + (CookieName == null ? '' : encodeURIComponent(CookieName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p> <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=CreateLBCookieStickinessPolicy
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {string} PolicyName The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.
		 * @param {number} CookieExpirationPeriod The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.
		 * @return {void} Success
		 */
		GET_CreateLBCookieStickinessPolicy(LoadBalancerName: string, PolicyName: string, CookieExpirationPeriod: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateLBCookieStickinessPolicy?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&CookieExpirationPeriod=' + CookieExpirationPeriod + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a Classic Load Balancer.</p> <p>You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using <a>CreateLoadBalancerListeners</a>, <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>, and <a>AddTags</a>.</p> <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>. When you are finished with a load balancer, you can delete it using <a>DeleteLoadBalancer</a>.</p> <p>You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=CreateLoadBalancer
		 * @param {string} LoadBalancerName <p>The name of the load balancer.</p> <p>This name must be unique within your set of load balancers for the region, must have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and cannot begin or end with a hyphen.</p>
		 * @param {Array<Listener>} Listeners <p>The listeners.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * @param {Array<AvailabilityZone>} AvailabilityZones <p>One or more Availability Zones from the same region as the load balancer.</p> <p>You must specify at least one Availability Zone.</p> <p>You can add more Availability Zones after you create the load balancer using <a>EnableAvailabilityZonesForLoadBalancer</a>.</p>
		 * @param {Array<SubnetId>} Subnets The IDs of the subnets in your VPC to attach to the load balancer. Specify one subnet per Availability Zone specified in <code>AvailabilityZones</code>.
		 * @param {Array<SecurityGroupId>} SecurityGroups The IDs of the security groups to assign to the load balancer.
		 * @param {string} Scheme <p>The type of a load balancer. Valid only for load balancers in a VPC.</p> <p>By default, Elastic Load Balancing creates an Internet-facing load balancer with a DNS name that resolves to public IP addresses. For more information about Internet-facing and Internal load balancers, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#load-balancer-scheme">Load Balancer Scheme</a> in the <i>Elastic Load Balancing User Guide</i>.</p> <p>Specify <code>internal</code> to create a load balancer with a DNS name that resolves to private IP addresses.</p>
		 * @param {Array<Tag>} Tags <p>A list of tags to assign to the load balancer.</p> <p>For more information about tagging your load balancer, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_CreateLoadBalancer(LoadBalancerName: string, Listeners: Array<Listener>, AvailabilityZones: Array<AvailabilityZone>, Subnets: Array<SubnetId>, SecurityGroups: Array<SecurityGroupId>, Scheme: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Listeners.map(z => `Listeners=${z}`).join('&') + '&' + AvailabilityZones.map(z => `AvailabilityZones=${z}`).join('&') + '&' + Subnets.map(z => `Subnets=${z}`).join('&') + '&' + SecurityGroups.map(z => `SecurityGroups=${z}`).join('&') + '&Scheme=' + (Scheme == null ? '' : encodeURIComponent(Scheme)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=CreateLoadBalancerListeners
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<Listener>} Listeners The listeners.
		 * @return {void} Success
		 */
		GET_CreateLoadBalancerListeners(LoadBalancerName: string, Listeners: Array<Listener>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateLoadBalancerListeners?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Listeners.map(z => `Listeners=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a policy with the specified attributes for the specified load balancer.</p> <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>
		 * Get /#Action=CreateLoadBalancerPolicy
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {string} PolicyName The name of the load balancer policy to be created. This name must be unique within the set of policies for this load balancer.
		 * @param {string} PolicyTypeName The name of the base policy type. To get the list of policy types, use <a>DescribeLoadBalancerPolicyTypes</a>.
		 * @param {Array<PolicyAttribute>} PolicyAttributes The policy attributes.
		 * @return {void} Success
		 */
		GET_CreateLoadBalancerPolicy(LoadBalancerName: string, PolicyName: string, PolicyTypeName: string, PolicyAttributes: Array<PolicyAttribute>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateLoadBalancerPolicy?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&PolicyTypeName=' + (PolicyTypeName == null ? '' : encodeURIComponent(PolicyTypeName)) + '&' + PolicyAttributes.map(z => `PolicyAttributes=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Deletes the specified load balancer.</p> <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p> <p>If the load balancer does not exist or has already been deleted, the call to <code>DeleteLoadBalancer</code> still succeeds.</p>
		 * Get /#Action=DeleteLoadBalancer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @return {void} Success
		 */
		GET_DeleteLoadBalancer(LoadBalancerName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified listeners from the specified load balancer.
		 * Get /#Action=DeleteLoadBalancerListeners
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<AccessPointPort>} LoadBalancerPorts The client port numbers of the listeners.
		 * @return {void} Success
		 */
		GET_DeleteLoadBalancerListeners(LoadBalancerName: string, LoadBalancerPorts: Array<AccessPointPort>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteLoadBalancerListeners?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + LoadBalancerPorts.map(z => `LoadBalancerPorts=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.
		 * Get /#Action=DeleteLoadBalancerPolicy
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {string} PolicyName The name of the policy.
		 * @return {void} Success
		 */
		GET_DeleteLoadBalancerPolicy(LoadBalancerName: string, PolicyName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteLoadBalancerPolicy?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.</p> <p>You can use <a>DescribeLoadBalancers</a> to verify that the instance is deregistered from the load balancer.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=DeregisterInstancesFromLoadBalancer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<Instance>} Instances The IDs of the instances.
		 * @return {void} Success
		 */
		GET_DeregisterInstancesFromLoadBalancer(LoadBalancerName: string, Instances: Array<Instance>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeregisterInstancesFromLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Instances.map(z => `Instances=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=DescribeAccountLimits
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeAccountLimits(Marker: string, PageSize: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeAccountLimits?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.
		 * Get /#Action=DescribeInstanceHealth
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<Instance>} Instances The IDs of the instances.
		 * @return {void} Success
		 */
		GET_DescribeInstanceHealth(LoadBalancerName: string, Instances: Array<Instance>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeInstanceHealth?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Instances.map(z => `Instances=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes the attributes for the specified load balancer.
		 * Get /#Action=DescribeLoadBalancerAttributes
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancerAttributes(LoadBalancerName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeLoadBalancerAttributes?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Describes the specified policies.</p> <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the <code>ELBSample-</code> prefix.</p>
		 * Get /#Action=DescribeLoadBalancerPolicies
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<PolicyName>} PolicyNames The names of the policies.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancerPolicies(LoadBalancerName: string, PolicyNames: Array<PolicyName>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeLoadBalancerPolicies?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + PolicyNames.map(z => `PolicyNames=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Describes the specified load balancer policy types or all load balancer policy types.</p> <p>The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances.</p> <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types. Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>
		 * Get /#Action=DescribeLoadBalancerPolicyTypes
		 * @param {Array<PolicyTypeName>} PolicyTypeNames The names of the policy types. If no names are specified, describes all policy types defined by Elastic Load Balancing.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancerPolicyTypes(PolicyTypeNames: Array<PolicyTypeName>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeLoadBalancerPolicyTypes?' + PolicyTypeNames.map(z => `PolicyTypeNames=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.
		 * Get /#Action=DescribeLoadBalancers
		 * @param {Array<AccessPointName>} LoadBalancerNames The names of the load balancers.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call (a number from 1 to 400). The default is 400.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancers(LoadBalancerNames: Array<AccessPointName>, Marker: string, PageSize: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeLoadBalancers?' + LoadBalancerNames.map(z => `LoadBalancerNames=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes the tags associated with the specified load balancers.
		 * Get /#Action=DescribeTags
		 * @param {Array<AccessPointName>} LoadBalancerNames The names of the load balancers.
		 * @return {void} Success
		 */
		GET_DescribeTags(LoadBalancerNames: Array<AccessPointName>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeTags?' + LoadBalancerNames.map(z => `LoadBalancerNames=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Removes the specified subnets from the set of configured subnets for the load balancer.</p> <p>After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the <code>OutOfService</code> state. Then, the load balancer balances the traffic among the remaining routable subnets.</p>
		 * Get /#Action=DetachLoadBalancerFromSubnets
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<SubnetId>} Subnets The IDs of the subnets.
		 * @return {void} Success
		 */
		GET_DetachLoadBalancerFromSubnets(LoadBalancerName: string, Subnets: Array<SubnetId>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DetachLoadBalancerFromSubnets?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Subnets.map(z => `Subnets=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p> <p>There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=DisableAvailabilityZonesForLoadBalancer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<AvailabilityZone>} AvailabilityZones The Availability Zones.
		 * @return {void} Success
		 */
		GET_DisableAvailabilityZonesForLoadBalancer(LoadBalancerName: string, AvailabilityZones: Array<AvailabilityZone>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DisableAvailabilityZonesForLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + AvailabilityZones.map(z => `AvailabilityZones=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p> <p>The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=EnableAvailabilityZonesForLoadBalancer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<AvailabilityZone>} AvailabilityZones The Availability Zones. These must be in the same region as the load balancer.
		 * @return {void} Success
		 */
		GET_EnableAvailabilityZonesForLoadBalancer(LoadBalancerName: string, AvailabilityZones: Array<AvailabilityZone>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=EnableAvailabilityZonesForLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + AvailabilityZones.map(z => `AvailabilityZones=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Modifies the attributes of the specified load balancer.</p> <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p> <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a> </p> </li> </ul>
		 * Get /#Action=ModifyLoadBalancerAttributes
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {string} LoadBalancerAttributes The attributes for the load balancer.
		 * @return {void} Success
		 */
		GET_ModifyLoadBalancerAttributes(LoadBalancerName: string, LoadBalancerAttributes: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyLoadBalancerAttributes?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&LoadBalancerAttributes=' + (LoadBalancerAttributes == null ? '' : encodeURIComponent(LoadBalancerAttributes)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Adds the specified instances to the specified load balancer.</p> <p>The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.</p> <p>Note that <code>RegisterInstanceWithLoadBalancer</code> completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use <a>DescribeLoadBalancers</a> or <a>DescribeInstanceHealth</a>.</p> <p>After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the <code>OutOfService</code> state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the <code>InService</code> state.</p> <p>To deregister instances from a load balancer, use <a>DeregisterInstancesFromLoadBalancer</a>.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=RegisterInstancesWithLoadBalancer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<Instance>} Instances The IDs of the instances.
		 * @return {void} Success
		 */
		GET_RegisterInstancesWithLoadBalancer(LoadBalancerName: string, Instances: Array<Instance>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=RegisterInstancesWithLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Instances.map(z => `Instances=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Removes one or more tags from the specified load balancer.
		 * Get /#Action=RemoveTags
		 * @param {Array<AccessPointName>} LoadBalancerNames The name of the load balancer. You can specify a maximum of one load balancer name.
		 * @param {Array<TagKeyOnly>} Tags The list of tag keys to remove.
		 * @return {void} Success
		 */
		GET_RemoveTags(LoadBalancerNames: Array<AccessPointName>, Tags: Array<TagKeyOnly>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=RemoveTags?' + LoadBalancerNames.map(z => `LoadBalancerNames=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p> <p>For more information about updating your SSL certificate, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=SetLoadBalancerListenerSSLCertificate
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {number} LoadBalancerPort The port that uses the specified SSL certificate.
		 * @param {string} SSLCertificateId The Amazon Resource Name (ARN) of the SSL certificate.
		 * @return {void} Success
		 */
		GET_SetLoadBalancerListenerSSLCertificate(LoadBalancerName: string, LoadBalancerPort: number, SSLCertificateId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=SetLoadBalancerListenerSSLCertificate?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&LoadBalancerPort=' + LoadBalancerPort + '&SSLCertificateId=' + (SSLCertificateId == null ? '' : encodeURIComponent(SSLCertificateId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p> <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies, use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p> <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy is associated with the EC2 instance.</p> <p>For more information about enabling back-end instance authentication, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a> in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=SetLoadBalancerPoliciesForBackendServer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {number} InstancePort The port number associated with the EC2 instance.
		 * @param {Array<PolicyName>} PolicyNames The names of the policies. If the list is empty, then all current polices are removed from the EC2 instance.
		 * @return {void} Success
		 */
		GET_SetLoadBalancerPoliciesForBackendServer(LoadBalancerName: string, InstancePort: number, PolicyNames: Array<PolicyName>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=SetLoadBalancerPoliciesForBackendServer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&InstancePort=' + InstancePort + '&' + PolicyNames.map(z => `PolicyNames=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p> <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p> <p>For more information about setting policies, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>, <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get /#Action=SetLoadBalancerPoliciesOfListener
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {number} LoadBalancerPort The external port of the load balancer.
		 * @param {Array<PolicyName>} PolicyNames The names of the policies. This list must include all policies to be enabled. If you omit a policy that is currently enabled, it is disabled. If the list is empty, all current policies are disabled.
		 * @return {void} Success
		 */
		GET_SetLoadBalancerPoliciesOfListener(LoadBalancerName: string, LoadBalancerPort: number, PolicyNames: Array<PolicyName>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=SetLoadBalancerPoliciesOfListener?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&LoadBalancerPort=' + LoadBalancerPort + '&' + PolicyNames.map(z => `PolicyNames=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

