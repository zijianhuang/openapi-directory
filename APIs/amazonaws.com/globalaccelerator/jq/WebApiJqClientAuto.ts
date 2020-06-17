///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface AdvertiseByoipCidrResponse {

		/**<p>Information about an IP address range that is provisioned for use with your AWS resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with AWS Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with AWS Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for AWS Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from AWS Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from AWS Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for AWS Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> </ul> */
		ByoipCidr?: ByoipCidr;
	}

	export interface AdvertiseByoipCidrRequest {
		Cidr: string;
	}

	export interface CreateAcceleratorResponse {

		/**An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers. */
		Accelerator?: Accelerator;
	}

	export interface CreateAcceleratorRequest {
		Name: string;
		IpAddressType?: CreateAcceleratorRequestIpAddressType;
		IpAddresses?: Array<IpAddress>;
		Enabled?: boolean;
		IdempotencyToken: string;
		Tags?: Array<Tag>;
	}

	export enum CreateAcceleratorRequestIpAddressType { IPV4 = 0 }

	export interface CreateEndpointGroupResponse {

		/**A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener. */
		EndpointGroup?: EndpointGroup;
	}

	export interface CreateEndpointGroupRequest {
		ListenerArn: string;
		EndpointGroupRegion: string;
		EndpointConfigurations?: Array<EndpointConfiguration>;
		TrafficDialPercentage?: number;
		HealthCheckPort?: number;
		HealthCheckProtocol?: CreateEndpointGroupRequestHealthCheckProtocol;
		HealthCheckPath?: string;
		HealthCheckIntervalSeconds?: number;
		ThresholdCount?: number;
		IdempotencyToken: string;
	}

	export enum CreateEndpointGroupRequestHealthCheckProtocol { TCP = 0, HTTP = 1, HTTPS = 2 }

	export interface CreateListenerResponse {

		/**A complex type for a listener. */
		Listener?: Listener;
	}

	export interface CreateListenerRequest {
		AcceleratorArn: string;
		PortRanges: Array<PortRange>;
		Protocol: CreateListenerRequestProtocol;
		ClientAffinity?: CreateListenerRequestClientAffinity;
		IdempotencyToken: string;
	}

	export enum CreateListenerRequestProtocol { TCP = 0, UDP = 1 }

	export enum CreateListenerRequestClientAffinity { NONE = 0, SOURCE_IP = 1 }

	export interface DeleteAcceleratorRequest {
		AcceleratorArn: string;
	}

	export interface DeleteEndpointGroupRequest {
		EndpointGroupArn: string;
	}

	export interface DeleteListenerRequest {
		ListenerArn: string;
	}

	export interface DeprovisionByoipCidrResponse {

		/**<p>Information about an IP address range that is provisioned for use with your AWS resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with AWS Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with AWS Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for AWS Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from AWS Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from AWS Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for AWS Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> </ul> */
		ByoipCidr?: ByoipCidr;
	}

	export interface DeprovisionByoipCidrRequest {
		Cidr: string;
	}

	export interface DescribeAcceleratorResponse {

		/**An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers. */
		Accelerator?: Accelerator;
	}

	export interface DescribeAcceleratorRequest {
		AcceleratorArn: string;
	}

	export interface DescribeAcceleratorAttributesResponse {

		/**Attributes of an accelerator. */
		AcceleratorAttributes?: AcceleratorAttributes;
	}

	export interface DescribeAcceleratorAttributesRequest {
		AcceleratorArn: string;
	}

	export interface DescribeEndpointGroupResponse {

		/**A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener. */
		EndpointGroup?: EndpointGroup;
	}

	export interface DescribeEndpointGroupRequest {
		EndpointGroupArn: string;
	}

	export interface DescribeListenerResponse {

		/**A complex type for a listener. */
		Listener?: Listener;
	}

	export interface DescribeListenerRequest {
		ListenerArn: string;
	}

	export interface ListAcceleratorsResponse {
		Accelerators?: Array<Accelerator>;
		NextToken?: string;
	}

	export interface ListAcceleratorsRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListByoipCidrsResponse {
		ByoipCidrs?: Array<ByoipCidr>;
		NextToken?: string;
	}

	export interface ListByoipCidrsRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListEndpointGroupsResponse {
		EndpointGroups?: Array<EndpointGroup>;
		NextToken?: string;
	}

	export interface ListEndpointGroupsRequest {
		ListenerArn: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListListenersResponse {
		Listeners?: Array<Listener>;
		NextToken?: string;
	}

	export interface ListListenersRequest {
		AcceleratorArn: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
	}

	export interface ProvisionByoipCidrResponse {

		/**<p>Information about an IP address range that is provisioned for use with your AWS resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with AWS Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with AWS Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for AWS Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from AWS Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from AWS Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for AWS Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> </ul> */
		ByoipCidr?: ByoipCidr;
	}

	export interface ProvisionByoipCidrRequest {
		Cidr: string;

		/**<p>Provides authorization for Amazon to bring a specific IP address range to a specific AWS account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p> */
		CidrAuthorizationContext: CidrAuthorizationContext;
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateAcceleratorResponse {

		/**An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers. */
		Accelerator?: Accelerator;
	}

	export interface UpdateAcceleratorRequest {
		AcceleratorArn: string;
		Name?: string;
		IpAddressType?: UpdateAcceleratorRequestIpAddressType;
		Enabled?: boolean;
	}

	export enum UpdateAcceleratorRequestIpAddressType { IPV4 = 0 }

	export interface UpdateAcceleratorAttributesResponse {

		/**Attributes of an accelerator. */
		AcceleratorAttributes?: AcceleratorAttributes;
	}

	export interface UpdateAcceleratorAttributesRequest {
		AcceleratorArn: string;
		FlowLogsEnabled?: boolean;
		FlowLogsS3Bucket?: string;
		FlowLogsS3Prefix?: string;
	}

	export interface UpdateEndpointGroupResponse {

		/**A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener. */
		EndpointGroup?: EndpointGroup;
	}

	export interface UpdateEndpointGroupRequest {
		EndpointGroupArn: string;
		EndpointConfigurations?: Array<EndpointConfiguration>;
		TrafficDialPercentage?: number;
		HealthCheckPort?: number;
		HealthCheckProtocol?: UpdateEndpointGroupRequestHealthCheckProtocol;
		HealthCheckPath?: string;
		HealthCheckIntervalSeconds?: number;
		ThresholdCount?: number;
	}

	export enum UpdateEndpointGroupRequestHealthCheckProtocol { TCP = 0, HTTP = 1, HTTPS = 2 }

	export interface UpdateListenerResponse {

		/**A complex type for a listener. */
		Listener?: Listener;
	}

	export interface UpdateListenerRequest {
		ListenerArn: string;
		PortRanges?: Array<PortRange>;
		Protocol?: UpdateListenerRequestProtocol;
		ClientAffinity?: UpdateListenerRequestClientAffinity;
	}

	export enum UpdateListenerRequestProtocol { TCP = 0, UDP = 1 }

	export enum UpdateListenerRequestClientAffinity { NONE = 0, SOURCE_IP = 1 }

	export interface WithdrawByoipCidrResponse {

		/**<p>Information about an IP address range that is provisioned for use with your AWS resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with AWS Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with AWS Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for AWS Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from AWS Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from AWS Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for AWS Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> </ul> */
		ByoipCidr?: ByoipCidr;
	}

	export interface WithdrawByoipCidrRequest {
		Cidr: string;
	}

	export enum IpAddressType { IPV4 = 0 }

	export enum AcceleratorStatus { DEPLOYED = 0, IN_PROGRESS = 1 }


	/**An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers. */
	export interface Accelerator {
		AcceleratorArn?: string;
		Name?: string;
		IpAddressType?: AcceleratorIpAddressType;
		Enabled?: boolean;
		IpSets?: Array<IpSet>;
		DnsName?: string;
		Status?: AcceleratorStatus;
		CreatedTime?: Date;
		LastModifiedTime?: Date;
	}

	export enum AcceleratorIpAddressType { IPV4 = 0 }

	export enum AcceleratorStatus { DEPLOYED = 0, IN_PROGRESS = 1 }


	/**Attributes of an accelerator. */
	export interface AcceleratorAttributes {
		FlowLogsEnabled?: boolean;
		FlowLogsS3Bucket?: string;
		FlowLogsS3Prefix?: string;
	}


	/**<p>Information about an IP address range that is provisioned for use with your AWS resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with AWS Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with AWS Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for AWS Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from AWS Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from AWS Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for AWS Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> </ul> */
	export interface ByoipCidr {
		Cidr?: string;
		State?: ByoipCidrState;
		Events?: Array<ByoipCidrEvent>;
	}

	export enum ByoipCidrState { PENDING_PROVISIONING = 0, READY = 1, PENDING_ADVERTISING = 2, ADVERTISING = 3, PENDING_WITHDRAWING = 4, PENDING_DEPROVISIONING = 5, DEPROVISIONED = 6, FAILED_PROVISION = 7, FAILED_ADVERTISING = 8, FAILED_WITHDRAW = 9, FAILED_DEPROVISION = 10 }

	export enum ByoipCidrState { PENDING_PROVISIONING = 0, READY = 1, PENDING_ADVERTISING = 2, ADVERTISING = 3, PENDING_WITHDRAWING = 4, PENDING_DEPROVISIONING = 5, DEPROVISIONED = 6, FAILED_PROVISION = 7, FAILED_ADVERTISING = 8, FAILED_WITHDRAW = 9, FAILED_DEPROVISION = 10 }


	/**A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes that you make in the status an IP address range that you bring to AWS Global Accelerator through bring your own IP address (BYOIP). */
	export interface ByoipCidrEvent {
		Message?: string;
		Timestamp?: Date;
	}


	/**<p>Provides authorization for Amazon to bring a specific IP address range to a specific AWS account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p> */
	export interface CidrAuthorizationContext {
		Message: string;
		Signature: string;
	}

	export enum ClientAffinity { NONE = 0, SOURCE_IP = 1 }

	export enum HealthCheckProtocol { TCP = 0, HTTP = 1, HTTPS = 2 }


	/**A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener.  */
	export interface EndpointGroup {
		EndpointGroupArn?: string;
		EndpointGroupRegion?: string;
		EndpointDescriptions?: Array<EndpointDescription>;
		TrafficDialPercentage?: number;
		HealthCheckPort?: number;
		HealthCheckProtocol?: EndpointGroupHealthCheckProtocol;
		HealthCheckPath?: string;
		HealthCheckIntervalSeconds?: number;
		ThresholdCount?: number;
	}

	export enum EndpointGroupHealthCheckProtocol { TCP = 0, HTTP = 1, HTTPS = 2 }

	export enum Protocol { TCP = 0, UDP = 1 }


	/**A complex type for a listener. */
	export interface Listener {
		ListenerArn?: string;
		PortRanges?: Array<PortRange>;
		Protocol?: ListenerProtocol;
		ClientAffinity?: ListenerClientAffinity;
	}

	export enum ListenerProtocol { TCP = 0, UDP = 1 }

	export enum ListenerClientAffinity { NONE = 0, SOURCE_IP = 1 }


	/**A complex type for endpoints. */
	export interface EndpointConfiguration {
		EndpointId?: string;
		Weight?: number;
		ClientIPPreservationEnabled?: boolean;
	}

	export enum HealthState { INITIAL = 0, HEALTHY = 1, UNHEALTHY = 2 }


	/**A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers. */
	export interface EndpointDescription {
		EndpointId?: string;
		Weight?: number;
		HealthState?: EndpointDescriptionHealthState;
		HealthReason?: string;
		ClientIPPreservationEnabled?: boolean;
	}

	export enum EndpointDescriptionHealthState { INITIAL = 0, HEALTHY = 1, UNHEALTHY = 2 }


	/**A complex type for the set of IP addresses for an accelerator. */
	export interface IpSet {
		IpFamily?: string;
		IpAddresses?: Array<IpAddress>;
	}


	/**A complex type for a range of ports for a listener. */
	export interface PortRange {
		FromPort?: number;
		ToPort?: number;
	}


	/**A complex type that contains a <code>Tag</code> key and <code>Tag</code> value. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * <p>Advertises an IPv4 address range that is provisioned for use with your AWS resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to AWS because of propagation delays. To see an AWS CLI example of advertising an address range, scroll down to <b>Example</b>.</p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr
		 * @return {AdvertiseByoipCidrResponse} Success
		 */
		AdvertiseByoipCidr(callback: (data : AdvertiseByoipCidrResponse) => any, requestBody: AdvertiseByoipCidrRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. To see an AWS CLI example of creating an accelerator, scroll down to <b>Example</b>.</p> <p>If you bring your own IP address ranges to AWS Global Accelerator (BYOIP), you can assign IP addresses from your own pool to your accelerator as the static IP address entry points. Only one IP address from each of your IP address ranges can be used for each accelerator.</p> <important> <p>You must specify the US West (Oregon) Region to create or update accelerators.</p> </important>
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator
		 * @return {CreateAcceleratorResponse} Success
		 */
		CreateAccelerator(callback: (data : CreateAcceleratorResponse) => any, requestBody: CreateAcceleratorRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one AWS Region. To see an AWS CLI example of creating an endpoint group, scroll down to <b>Example</b>.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup
		 * @return {CreateEndpointGroupResponse} Success
		 */
		CreateEndpointGroup(callback: (data : CreateEndpointGroupResponse) => any, requestBody: CreateEndpointGroupRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. To see an AWS CLI example of creating a listener, scroll down to <b>Example</b>.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener
		 * @return {CreateListenerResponse} Success
		 */
		CreateListener(callback: (data : CreateListenerResponse) => any, requestBody: CreateListenerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Authentication and Access Control</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p> </important>
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator
		 * @return {void} Success
		 */
		DeleteAccelerator(callback: (data : void) => any, requestBody: DeleteAcceleratorRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Delete an endpoint group from a listener.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup
		 * @return {void} Success
		 */
		DeleteEndpointGroup(callback: (data : void) => any, requestBody: DeleteEndpointGroupRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Delete a listener from an accelerator.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener
		 * @return {void} Success
		 */
		DeleteListener(callback: (data : void) => any, requestBody: DeleteListenerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Releases the specified address range that you provisioned to use with your AWS resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. To see an AWS CLI example of deprovisioning an address range, scroll down to <b>Example</b>.</p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr
		 * @return {DeprovisionByoipCidrResponse} Success
		 */
		DeprovisionByoipCidr(callback: (data : DeprovisionByoipCidrResponse) => any, requestBody: DeprovisionByoipCidrRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describe an accelerator. To see an AWS CLI example of describing an accelerator, scroll down to <b>Example</b>.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator
		 * @return {DescribeAcceleratorResponse} Success
		 */
		DescribeAccelerator(callback: (data : DescribeAcceleratorResponse) => any, requestBody: DescribeAcceleratorRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describe the attributes of an accelerator. To see an AWS CLI example of describing the attributes of an accelerator, scroll down to <b>Example</b>.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes
		 * @return {DescribeAcceleratorAttributesResponse} Success
		 */
		DescribeAcceleratorAttributes(callback: (data : DescribeAcceleratorAttributesResponse) => any, requestBody: DescribeAcceleratorAttributesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describe an endpoint group. To see an AWS CLI example of describing an endpoint group, scroll down to <b>Example</b>.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup
		 * @return {DescribeEndpointGroupResponse} Success
		 */
		DescribeEndpointGroup(callback: (data : DescribeEndpointGroupResponse) => any, requestBody: DescribeEndpointGroupRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describe a listener. To see an AWS CLI example of describing a listener, scroll down to <b>Example</b>.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener
		 * @return {DescribeListenerResponse} Success
		 */
		DescribeListener(callback: (data : DescribeListenerResponse) => any, requestBody: DescribeListenerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * List the accelerators for an AWS account. To see an AWS CLI example of listing the accelerators for an AWS account, scroll down to <b>Example</b>.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators
		 * @return {ListAcceleratorsResponse} Success
		 */
		ListAccelerators(callback: (data : ListAcceleratorsResponse) => any, requestBody: ListAcceleratorsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.</p> <p>To see an AWS CLI example of listing BYOIP CIDR addresses, scroll down to <b>Example</b>.</p>
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs
		 * @return {ListByoipCidrsResponse} Success
		 */
		ListByoipCidrs(callback: (data : ListByoipCidrsResponse) => any, requestBody: ListByoipCidrsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * List the endpoint groups that are associated with a listener. To see an AWS CLI example of listing the endpoint groups for listener, scroll down to <b>Example</b>.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups
		 * @return {ListEndpointGroupsResponse} Success
		 */
		ListEndpointGroups(callback: (data : ListEndpointGroupsResponse) => any, requestBody: ListEndpointGroupsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * List the listeners for an accelerator. To see an AWS CLI example of listing the listeners for an accelerator, scroll down to <b>Example</b>.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners
		 * @return {ListListenersResponse} Success
		 */
		ListListeners(callback: (data : ListListenersResponse) => any, requestBody: ListListenersRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>List all tags for an accelerator. To see an AWS CLI example of listing tags for an accelerator, scroll down to <b>Example</b>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>. </p>
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(callback: (data : ListTagsForResourceResponse) => any, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Provisions an IP address range to use with your AWS resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>To see an AWS CLI example of provisioning an address range for BYOIP, scroll down to <b>Example</b>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr
		 * @return {ProvisionByoipCidrResponse} Success
		 */
		ProvisionByoipCidr(callback: (data : ProvisionByoipCidrResponse) => any, requestBody: ProvisionByoipCidrRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Add tags to an accelerator resource. To see an AWS CLI example of adding tags to an accelerator, scroll down to <b>Example</b>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>. </p>
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(callback: (data : TagResourceResponse) => any, requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.TagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. To see an AWS CLI example of removing tags from an accelerator, scroll down to <b>Example</b>. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(callback: (data : UntagResourceResponse) => any, requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Update an accelerator. To see an AWS CLI example of updating an accelerator, scroll down to <b>Example</b>.</p> <important> <p>You must specify the US West (Oregon) Region to create or update accelerators.</p> </important>
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator
		 * @return {UpdateAcceleratorResponse} Success
		 */
		UpdateAccelerator(callback: (data : UpdateAcceleratorResponse) => any, requestBody: UpdateAcceleratorRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update the attributes for an accelerator. To see an AWS CLI example of updating an accelerator to enable flow logs, scroll down to <b>Example</b>.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes
		 * @return {UpdateAcceleratorAttributesResponse} Success
		 */
		UpdateAcceleratorAttributes(callback: (data : UpdateAcceleratorAttributesResponse) => any, requestBody: UpdateAcceleratorAttributesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update an endpoint group. To see an AWS CLI example of updating an endpoint group, scroll down to <b>Example</b>.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup
		 * @return {UpdateEndpointGroupResponse} Success
		 */
		UpdateEndpointGroup(callback: (data : UpdateEndpointGroupResponse) => any, requestBody: UpdateEndpointGroupRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update a listener. To see an AWS CLI example of updating listener, scroll down to <b>Example</b>.
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener
		 * @return {UpdateListenerResponse} Success
		 */
		UpdateListener(callback: (data : UpdateListenerResponse) => any, requestBody: UpdateListenerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time. To see an AWS CLI example of withdrawing an address range for BYOIP so it will no longer be advertised by AWS, scroll down to <b>Example</b>.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to AWS because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
		 * Post /#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr
		 * @return {WithdrawByoipCidrResponse} Success
		 */
		WithdrawByoipCidr(callback: (data : WithdrawByoipCidrResponse) => any, requestBody: WithdrawByoipCidrRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

