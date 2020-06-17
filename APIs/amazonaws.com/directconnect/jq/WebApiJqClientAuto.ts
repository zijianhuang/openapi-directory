///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface AcceptDirectConnectGatewayAssociationProposalResult {

		/**Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway. */
		directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
	}

	export interface AcceptDirectConnectGatewayAssociationProposalRequest {
		directConnectGatewayId: string;
		proposalId: string;
		associatedGatewayOwnerAccount: string;
		overrideAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
	}


	/**Information about an AWS Direct Connect connection. */
	export interface Connection {
		ownerAccount?: string;
		connectionId?: string;
		connectionName?: string;
		connectionState?: ConnectionConnectionState;
		region?: string;
		location?: string;
		bandwidth?: string;
		vlan?: number;
		partnerName?: string;
		loaIssueTime?: Date;
		lagId?: string;
		awsDevice?: string;
		jumboFrameCapable?: boolean;
		awsDeviceV2?: string;
		hasLogicalRedundancy?: ConnectionHasLogicalRedundancy;
		tags?: Array<Tag>;
		providerName?: string;
	}

	export enum ConnectionConnectionState { ordering = 0, requested = 1, pending = 2, available = 3, down = 4, deleting = 5, deleted = 6, rejected = 7, unknown = 8 }

	export enum ConnectionHasLogicalRedundancy { unknown = 0, yes = 1, no = 2 }

	export interface AllocateConnectionOnInterconnectRequest {
		bandwidth: string;
		connectionName: string;
		ownerAccount: string;
		interconnectId: string;
		vlan: number;
	}

	export interface AllocateHostedConnectionRequest {
		connectionId: string;
		ownerAccount: string;
		bandwidth: string;
		connectionName: string;
		vlan: number;
		tags?: Array<Tag>;
	}


	/**Information about a virtual interface. */
	export interface VirtualInterface {
		ownerAccount?: string;
		virtualInterfaceId?: string;
		location?: string;
		connectionId?: string;
		virtualInterfaceType?: string;
		virtualInterfaceName?: string;
		vlan?: number;
		asn?: number;
		amazonSideAsn?: number;
		authKey?: string;
		amazonAddress?: string;
		customerAddress?: string;
		addressFamily?: VirtualInterfaceAddressFamily;
		virtualInterfaceState?: VirtualInterfaceVirtualInterfaceState;
		customerRouterConfig?: string;
		mtu?: number;
		jumboFrameCapable?: boolean;
		virtualGatewayId?: string;
		directConnectGatewayId?: string;
		routeFilterPrefixes?: Array<RouteFilterPrefix>;
		bgpPeers?: Array<BGPPeer>;
		region?: string;
		awsDeviceV2?: string;
		tags?: Array<Tag>;
	}

	export enum VirtualInterfaceAddressFamily { ipv4 = 0, ipv6 = 1 }

	export enum VirtualInterfaceVirtualInterfaceState { confirming = 0, verifying = 1, pending = 2, available = 3, down = 4, deleting = 5, deleted = 6, rejected = 7, unknown = 8 }

	export interface AllocatePrivateVirtualInterfaceRequest {
		connectionId: string;
		ownerAccount: string;

		/**Information about a private virtual interface to be provisioned on a connection. */
		newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;
	}

	export interface AllocatePublicVirtualInterfaceRequest {
		connectionId: string;
		ownerAccount: string;

		/**Information about a public virtual interface to be provisioned on a connection. */
		newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation;
	}

	export interface AllocateTransitVirtualInterfaceResult {

		/**Information about a virtual interface. */
		virtualInterface?: VirtualInterface;
	}

	export interface AllocateTransitVirtualInterfaceRequest {
		connectionId: string;
		ownerAccount: string;

		/**Information about a transit virtual interface to be provisioned on a connection. */
		newTransitVirtualInterfaceAllocation: NewTransitVirtualInterfaceAllocation;
	}

	export interface AssociateConnectionWithLagRequest {
		connectionId: string;
		lagId: string;
	}

	export interface AssociateHostedConnectionRequest {
		connectionId: string;
		parentConnectionId: string;
	}

	export interface AssociateVirtualInterfaceRequest {
		virtualInterfaceId: string;
		connectionId: string;
	}

	export interface ConfirmConnectionResponse {
		connectionState?: ConfirmConnectionResponseConnectionState;
	}

	export enum ConfirmConnectionResponseConnectionState { ordering = 0, requested = 1, pending = 2, available = 3, down = 4, deleting = 5, deleted = 6, rejected = 7, unknown = 8 }

	export interface ConfirmConnectionRequest {
		connectionId: string;
	}

	export interface ConfirmPrivateVirtualInterfaceResponse {
		virtualInterfaceState?: ConfirmPrivateVirtualInterfaceResponseVirtualInterfaceState;
	}

	export enum ConfirmPrivateVirtualInterfaceResponseVirtualInterfaceState { confirming = 0, verifying = 1, pending = 2, available = 3, down = 4, deleting = 5, deleted = 6, rejected = 7, unknown = 8 }

	export interface ConfirmPrivateVirtualInterfaceRequest {
		virtualInterfaceId: string;
		virtualGatewayId?: string;
		directConnectGatewayId?: string;
	}

	export interface ConfirmPublicVirtualInterfaceResponse {
		virtualInterfaceState?: ConfirmPublicVirtualInterfaceResponseVirtualInterfaceState;
	}

	export enum ConfirmPublicVirtualInterfaceResponseVirtualInterfaceState { confirming = 0, verifying = 1, pending = 2, available = 3, down = 4, deleting = 5, deleted = 6, rejected = 7, unknown = 8 }

	export interface ConfirmPublicVirtualInterfaceRequest {
		virtualInterfaceId: string;
	}

	export interface ConfirmTransitVirtualInterfaceResponse {
		virtualInterfaceState?: ConfirmTransitVirtualInterfaceResponseVirtualInterfaceState;
	}

	export enum ConfirmTransitVirtualInterfaceResponseVirtualInterfaceState { confirming = 0, verifying = 1, pending = 2, available = 3, down = 4, deleting = 5, deleted = 6, rejected = 7, unknown = 8 }

	export interface ConfirmTransitVirtualInterfaceRequest {
		virtualInterfaceId: string;
		directConnectGatewayId: string;
	}

	export interface CreateBGPPeerResponse {

		/**Information about a virtual interface. */
		virtualInterface?: VirtualInterface;
	}

	export interface CreateBGPPeerRequest {
		virtualInterfaceId?: string;

		/**Information about a new BGP peer. */
		newBGPPeer?: NewBGPPeer;
	}

	export interface CreateConnectionRequest {
		location: string;
		bandwidth: string;
		connectionName: string;
		lagId?: string;
		tags?: Array<Tag>;
		providerName?: string;
	}

	export interface CreateDirectConnectGatewayResult {

		/**Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways. */
		directConnectGateway?: DirectConnectGateway;
	}

	export interface CreateDirectConnectGatewayRequest {
		directConnectGatewayName: string;
		amazonSideAsn?: number;
	}

	export interface CreateDirectConnectGatewayAssociationResult {

		/**Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway. */
		directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
	}

	export interface CreateDirectConnectGatewayAssociationRequest {
		directConnectGatewayId: string;
		gatewayId?: string;
		addAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
		virtualGatewayId?: string;
	}

	export interface CreateDirectConnectGatewayAssociationProposalResult {

		/**Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway. */
		directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
	}

	export interface CreateDirectConnectGatewayAssociationProposalRequest {
		directConnectGatewayId: string;
		directConnectGatewayOwnerAccount: string;
		gatewayId: string;
		addAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
		removeAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
	}


	/**Information about an interconnect. */
	export interface Interconnect {
		interconnectId?: string;
		interconnectName?: string;
		interconnectState?: InterconnectInterconnectState;
		region?: string;
		location?: string;
		bandwidth?: string;
		loaIssueTime?: Date;
		lagId?: string;
		awsDevice?: string;
		jumboFrameCapable?: boolean;
		awsDeviceV2?: string;
		hasLogicalRedundancy?: InterconnectHasLogicalRedundancy;
		tags?: Array<Tag>;
		providerName?: string;
	}

	export enum InterconnectInterconnectState { requested = 0, pending = 1, available = 2, down = 3, deleting = 4, deleted = 5, unknown = 6 }

	export enum InterconnectHasLogicalRedundancy { unknown = 0, yes = 1, no = 2 }

	export interface CreateInterconnectRequest {
		interconnectName: string;
		bandwidth: string;
		location: string;
		lagId?: string;
		tags?: Array<Tag>;
		providerName?: string;
	}


	/**Information about a link aggregation group (LAG). */
	export interface Lag {
		connectionsBandwidth?: string;
		numberOfConnections?: number;
		lagId?: string;
		ownerAccount?: string;
		lagName?: string;
		lagState?: LagLagState;
		location?: string;
		region?: string;
		minimumLinks?: number;
		awsDevice?: string;
		awsDeviceV2?: string;
		connections?: Array<Connection>;
		allowsHostedConnections?: boolean;
		jumboFrameCapable?: boolean;
		hasLogicalRedundancy?: LagHasLogicalRedundancy;
		tags?: Array<Tag>;
		providerName?: string;
	}

	export enum LagLagState { requested = 0, pending = 1, available = 2, down = 3, deleting = 4, deleted = 5, unknown = 6 }

	export enum LagHasLogicalRedundancy { unknown = 0, yes = 1, no = 2 }

	export interface CreateLagRequest {
		numberOfConnections: number;
		location: string;
		connectionsBandwidth: string;
		lagName: string;
		connectionId?: string;
		tags?: Array<Tag>;
		childConnectionTags?: Array<Tag>;
		providerName?: string;
	}

	export interface CreatePrivateVirtualInterfaceRequest {
		connectionId: string;

		/**Information about a private virtual interface. */
		newPrivateVirtualInterface: NewPrivateVirtualInterface;
	}

	export interface CreatePublicVirtualInterfaceRequest {
		connectionId: string;

		/**Information about a public virtual interface. */
		newPublicVirtualInterface: NewPublicVirtualInterface;
	}

	export interface CreateTransitVirtualInterfaceResult {

		/**Information about a virtual interface. */
		virtualInterface?: VirtualInterface;
	}

	export interface CreateTransitVirtualInterfaceRequest {
		connectionId: string;

		/**Information about a transit virtual interface. */
		newTransitVirtualInterface: NewTransitVirtualInterface;
	}

	export interface DeleteBGPPeerResponse {

		/**Information about a virtual interface. */
		virtualInterface?: VirtualInterface;
	}

	export interface DeleteBGPPeerRequest {
		virtualInterfaceId?: string;
		asn?: number;
		customerAddress?: string;
		bgpPeerId?: string;
	}

	export interface DeleteConnectionRequest {
		connectionId: string;
	}

	export interface DeleteDirectConnectGatewayResult {

		/**Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways. */
		directConnectGateway?: DirectConnectGateway;
	}

	export interface DeleteDirectConnectGatewayRequest {
		directConnectGatewayId: string;
	}

	export interface DeleteDirectConnectGatewayAssociationResult {

		/**Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway. */
		directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
	}

	export interface DeleteDirectConnectGatewayAssociationRequest {
		associationId?: string;
		directConnectGatewayId?: string;
		virtualGatewayId?: string;
	}

	export interface DeleteDirectConnectGatewayAssociationProposalResult {

		/**Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway. */
		directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
	}

	export interface DeleteDirectConnectGatewayAssociationProposalRequest {
		proposalId: string;
	}

	export interface DeleteInterconnectResponse {
		interconnectState?: DeleteInterconnectResponseInterconnectState;
	}

	export enum DeleteInterconnectResponseInterconnectState { requested = 0, pending = 1, available = 2, down = 3, deleting = 4, deleted = 5, unknown = 6 }

	export interface DeleteInterconnectRequest {
		interconnectId: string;
	}

	export interface DeleteLagRequest {
		lagId: string;
	}

	export interface DeleteVirtualInterfaceResponse {
		virtualInterfaceState?: DeleteVirtualInterfaceResponseVirtualInterfaceState;
	}

	export enum DeleteVirtualInterfaceResponseVirtualInterfaceState { confirming = 0, verifying = 1, pending = 2, available = 3, down = 4, deleting = 5, deleted = 6, rejected = 7, unknown = 8 }

	export interface DeleteVirtualInterfaceRequest {
		virtualInterfaceId: string;
	}

	export interface DescribeConnectionLoaResponse {

		/**Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection. */
		loa?: Loa;
	}

	export interface DescribeConnectionLoaRequest {
		connectionId: string;
		providerName?: string;
		loaContentType?: DescribeConnectionLoaRequestLoaContentType;
	}

	export enum DescribeConnectionLoaRequestLoaContentType { application/pdf = 0 }

	export interface Connections {
		connections?: Array<Connection>;
	}

	export interface DescribeConnectionsRequest {
		connectionId?: string;
	}

	export interface DescribeConnectionsOnInterconnectRequest {
		interconnectId: string;
	}

	export interface DescribeDirectConnectGatewayAssociationProposalsResult {
		directConnectGatewayAssociationProposals?: Array<DirectConnectGatewayAssociationProposal>;
		nextToken?: string;
	}

	export interface DescribeDirectConnectGatewayAssociationProposalsRequest {
		directConnectGatewayId?: string;
		proposalId?: string;
		associatedGatewayId?: string;
		maxResults?: number;
		nextToken?: string;
	}

	export interface DescribeDirectConnectGatewayAssociationsResult {
		directConnectGatewayAssociations?: Array<DirectConnectGatewayAssociation>;
		nextToken?: string;
	}

	export interface DescribeDirectConnectGatewayAssociationsRequest {
		associationId?: string;
		associatedGatewayId?: string;
		directConnectGatewayId?: string;
		maxResults?: number;
		nextToken?: string;
		virtualGatewayId?: string;
	}

	export interface DescribeDirectConnectGatewayAttachmentsResult {
		directConnectGatewayAttachments?: Array<DirectConnectGatewayAttachment>;
		nextToken?: string;
	}

	export interface DescribeDirectConnectGatewayAttachmentsRequest {
		directConnectGatewayId?: string;
		virtualInterfaceId?: string;
		maxResults?: number;
		nextToken?: string;
	}

	export interface DescribeDirectConnectGatewaysResult {
		directConnectGateways?: Array<DirectConnectGateway>;
		nextToken?: string;
	}

	export interface DescribeDirectConnectGatewaysRequest {
		directConnectGatewayId?: string;
		maxResults?: number;
		nextToken?: string;
	}

	export interface DescribeHostedConnectionsRequest {
		connectionId: string;
	}

	export interface DescribeInterconnectLoaResponse {

		/**Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection. */
		loa?: Loa;
	}

	export interface DescribeInterconnectLoaRequest {
		interconnectId: string;
		providerName?: string;
		loaContentType?: DescribeInterconnectLoaRequestLoaContentType;
	}

	export enum DescribeInterconnectLoaRequestLoaContentType { application/pdf = 0 }

	export interface Interconnects {
		interconnects?: Array<Interconnect>;
	}

	export interface DescribeInterconnectsRequest {
		interconnectId?: string;
	}

	export interface Lags {
		lags?: Array<Lag>;
	}

	export interface DescribeLagsRequest {
		lagId?: string;
	}


	/**Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection. */
	export interface Loa {
		loaContent?: string;
		loaContentType?: LoaLoaContentType;
	}

	export enum LoaLoaContentType { application/pdf = 0 }

	export interface DescribeLoaRequest {
		connectionId: string;
		providerName?: string;
		loaContentType?: DescribeLoaRequestLoaContentType;
	}

	export enum DescribeLoaRequestLoaContentType { application/pdf = 0 }

	export interface Locations {
		locations?: Array<Location>;
	}

	export interface DescribeTagsResponse {
		resourceTags?: Array<ResourceTag>;
	}

	export interface DescribeTagsRequest {
		resourceArns: Array<ResourceArn>;
	}

	export interface VirtualGateways {
		virtualGateways?: Array<VirtualGateway>;
	}

	export interface VirtualInterfaces {
		virtualInterfaces?: Array<VirtualInterface>;
	}

	export interface DescribeVirtualInterfacesRequest {
		connectionId?: string;
		virtualInterfaceId?: string;
	}

	export interface DisassociateConnectionFromLagRequest {
		connectionId: string;
		lagId: string;
	}

	export interface ListVirtualInterfaceTestHistoryResponse {
		virtualInterfaceTestHistory?: Array<VirtualInterfaceTestHistory>;
		nextToken?: string;
	}

	export interface ListVirtualInterfaceTestHistoryRequest {
		testId?: string;
		virtualInterfaceId?: string;
		bgpPeers?: Array<BGPPeerId>;
		status?: string;
		maxResults?: number;
		nextToken?: string;
	}

	export interface StartBgpFailoverTestResponse {

		/**Information about the virtual interface failover test. */
		virtualInterfaceTest?: VirtualInterfaceTestHistory;
	}

	export interface StartBgpFailoverTestRequest {
		virtualInterfaceId: string;
		bgpPeers?: Array<BGPPeerId>;
		testDurationInMinutes?: number;
	}

	export interface StopBgpFailoverTestResponse {

		/**Information about the virtual interface failover test. */
		virtualInterfaceTest?: VirtualInterfaceTestHistory;
	}

	export interface StopBgpFailoverTestRequest {
		virtualInterfaceId: string;
	}

	export interface TagResourceRequest {
		resourceArn: string;
		tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		resourceArn: string;
		tagKeys: Array<TagKey>;
	}

	export interface UpdateDirectConnectGatewayAssociationResult {

		/**Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway. */
		directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
	}

	export interface UpdateDirectConnectGatewayAssociationRequest {
		associationId?: string;
		addAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
		removeAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
	}

	export interface UpdateLagRequest {
		lagId: string;
		lagName?: string;
		minimumLinks?: number;
	}

	export interface UpdateVirtualInterfaceAttributesRequest {
		virtualInterfaceId: string;
		mtu?: number;
	}


	/**Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway. */
	export interface DirectConnectGatewayAssociation {
		directConnectGatewayId?: string;
		directConnectGatewayOwnerAccount?: string;
		associationState?: DirectConnectGatewayAssociationAssociationState;
		stateChangeError?: string;

		/**Information about the associated gateway. */
		associatedGateway?: AssociatedGateway;
		associationId?: string;
		allowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
		virtualGatewayId?: string;
		virtualGatewayRegion?: string;
		virtualGatewayOwnerAccount?: string;
	}

	export enum DirectConnectGatewayAssociationAssociationState { associating = 0, associated = 1, disassociating = 2, disassociated = 3, updating = 4 }

	export enum AddressFamily { ipv4 = 0, ipv6 = 1 }


	/**Information about a private virtual interface to be provisioned on a connection. */
	export interface NewPrivateVirtualInterfaceAllocation {
		virtualInterfaceName: string;
		vlan: number;
		asn: number;
		mtu?: number;
		authKey?: string;
		amazonAddress?: string;
		addressFamily?: NewPrivateVirtualInterfaceAllocationAddressFamily;
		customerAddress?: string;
		tags?: Array<Tag>;
	}

	export enum NewPrivateVirtualInterfaceAllocationAddressFamily { ipv4 = 0, ipv6 = 1 }


	/**Information about a public virtual interface to be provisioned on a connection. */
	export interface NewPublicVirtualInterfaceAllocation {
		virtualInterfaceName: string;
		vlan: number;
		asn: number;
		authKey?: string;
		amazonAddress?: string;
		customerAddress?: string;
		addressFamily?: NewPublicVirtualInterfaceAllocationAddressFamily;
		routeFilterPrefixes?: Array<RouteFilterPrefix>;
		tags?: Array<Tag>;
	}

	export enum NewPublicVirtualInterfaceAllocationAddressFamily { ipv4 = 0, ipv6 = 1 }


	/**Information about a transit virtual interface to be provisioned on a connection. */
	export interface NewTransitVirtualInterfaceAllocation {
		virtualInterfaceName?: string;
		vlan?: number;
		asn?: number;
		mtu?: number;
		authKey?: string;
		amazonAddress?: string;
		customerAddress?: string;
		addressFamily?: NewTransitVirtualInterfaceAllocationAddressFamily;
		tags?: Array<Tag>;
	}

	export enum NewTransitVirtualInterfaceAllocationAddressFamily { ipv4 = 0, ipv6 = 1 }

	export enum GatewayType { virtualPrivateGateway = 0, transitGateway = 1 }


	/**Information about the associated gateway. */
	export interface AssociatedGateway {
		id?: string;
		type?: AssociatedGatewayType;
		ownerAccount?: string;
		region?: string;
	}

	export enum AssociatedGatewayType { virtualPrivateGateway = 0, transitGateway = 1 }

	export enum BGPPeerState { verifying = 0, pending = 1, available = 2, deleting = 3, deleted = 4 }

	export enum BGPStatus { up = 0, down = 1, unknown = 2 }


	/**Information about a BGP peer. */
	export interface BGPPeer {
		bgpPeerId?: string;
		asn?: number;
		authKey?: string;
		addressFamily?: BGPPeerAddressFamily;
		amazonAddress?: string;
		customerAddress?: string;
		bgpPeerState?: BGPPeerBgpPeerState;
		bgpStatus?: BGPPeerBgpStatus;
		awsDeviceV2?: string;
	}

	export enum BGPPeerAddressFamily { ipv4 = 0, ipv6 = 1 }

	export enum BGPPeerBgpPeerState { verifying = 0, pending = 1, available = 2, deleting = 3, deleted = 4 }

	export enum BGPPeerBgpStatus { up = 0, down = 1, unknown = 2 }

	export enum ConnectionState { ordering = 0, requested = 1, pending = 2, available = 3, down = 4, deleting = 5, deleted = 6, rejected = 7, unknown = 8 }

	export enum VirtualInterfaceState { confirming = 0, verifying = 1, pending = 2, available = 3, down = 4, deleting = 5, deleted = 6, rejected = 7, unknown = 8 }

	export enum HasLogicalRedundancy { unknown = 0, yes = 1, no = 2 }


	/**Information about a new BGP peer. */
	export interface NewBGPPeer {
		asn?: number;
		authKey?: string;
		addressFamily?: NewBGPPeerAddressFamily;
		amazonAddress?: string;
		customerAddress?: string;
	}

	export enum NewBGPPeerAddressFamily { ipv4 = 0, ipv6 = 1 }


	/**Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway.  */
	export interface DirectConnectGatewayAssociationProposal {
		proposalId?: string;
		directConnectGatewayId?: string;
		directConnectGatewayOwnerAccount?: string;
		proposalState?: DirectConnectGatewayAssociationProposalProposalState;

		/**Information about the associated gateway. */
		associatedGateway?: AssociatedGateway;
		existingAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
		requestedAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
	}

	export enum DirectConnectGatewayAssociationProposalProposalState { requested = 0, accepted = 1, deleted = 2 }


	/**Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways. */
	export interface DirectConnectGateway {
		directConnectGatewayId?: string;
		directConnectGatewayName?: string;
		amazonSideAsn?: number;
		ownerAccount?: string;
		directConnectGatewayState?: DirectConnectGatewayDirectConnectGatewayState;
		stateChangeError?: string;
	}

	export enum DirectConnectGatewayDirectConnectGatewayState { pending = 0, available = 1, deleting = 2, deleted = 3 }


	/**Information about a private virtual interface. */
	export interface NewPrivateVirtualInterface {
		virtualInterfaceName: string;
		vlan: number;
		asn: number;
		mtu?: number;
		authKey?: string;
		amazonAddress?: string;
		customerAddress?: string;
		addressFamily?: NewPrivateVirtualInterfaceAddressFamily;
		virtualGatewayId?: string;
		directConnectGatewayId?: string;
		tags?: Array<Tag>;
	}

	export enum NewPrivateVirtualInterfaceAddressFamily { ipv4 = 0, ipv6 = 1 }


	/**Information about a public virtual interface. */
	export interface NewPublicVirtualInterface {
		virtualInterfaceName: string;
		vlan: number;
		asn: number;
		authKey?: string;
		amazonAddress?: string;
		customerAddress?: string;
		addressFamily?: NewPublicVirtualInterfaceAddressFamily;
		routeFilterPrefixes?: Array<RouteFilterPrefix>;
		tags?: Array<Tag>;
	}

	export enum NewPublicVirtualInterfaceAddressFamily { ipv4 = 0, ipv6 = 1 }


	/**Information about a transit virtual interface. */
	export interface NewTransitVirtualInterface {
		virtualInterfaceName?: string;
		vlan?: number;
		asn?: number;
		mtu?: number;
		authKey?: string;
		amazonAddress?: string;
		customerAddress?: string;
		addressFamily?: NewTransitVirtualInterfaceAddressFamily;
		directConnectGatewayId?: string;
		tags?: Array<Tag>;
	}

	export enum NewTransitVirtualInterfaceAddressFamily { ipv4 = 0, ipv6 = 1 }

	export enum InterconnectState { requested = 0, pending = 1, available = 2, down = 3, deleting = 4, deleted = 5, unknown = 6 }

	export enum LoaContentType { application/pdf = 0 }

	export enum DirectConnectGatewayState { pending = 0, available = 1, deleting = 2, deleted = 3 }

	export enum DirectConnectGatewayAssociationState { associating = 0, associated = 1, disassociating = 2, disassociated = 3, updating = 4 }

	export enum DirectConnectGatewayAssociationProposalState { requested = 0, accepted = 1, deleted = 2 }

	export enum DirectConnectGatewayAttachmentState { attaching = 0, attached = 1, detaching = 2, detached = 3 }

	export enum DirectConnectGatewayAttachmentType { TransitVirtualInterface = 0, PrivateVirtualInterface = 1 }


	/**Information about an attachment between a Direct Connect gateway and a virtual interface. */
	export interface DirectConnectGatewayAttachment {
		directConnectGatewayId?: string;
		virtualInterfaceId?: string;
		virtualInterfaceRegion?: string;
		virtualInterfaceOwnerAccount?: string;
		attachmentState?: DirectConnectGatewayAttachmentAttachmentState;
		attachmentType?: DirectConnectGatewayAttachmentAttachmentType;
		stateChangeError?: string;
	}

	export enum DirectConnectGatewayAttachmentAttachmentState { attaching = 0, attached = 1, detaching = 2, detached = 3 }

	export enum DirectConnectGatewayAttachmentAttachmentType { TransitVirtualInterface = 0, PrivateVirtualInterface = 1 }

	export enum LagState { requested = 0, pending = 1, available = 2, down = 3, deleting = 4, deleted = 5, unknown = 6 }


	/**Information about an AWS Direct Connect location. */
	export interface Location {
		locationCode?: string;
		region?: string;
		availablePortSpeeds?: Array<PortSpeed>;
		availableProviders?: Array<ProviderName>;
	}


	/**Information about a tag associated with an AWS Direct Connect resource. */
	export interface ResourceTag {
		resourceArn?: string;
		tags?: Array<Tag>;
	}


	/**Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface. */
	export interface RouteFilterPrefix {
		cidr?: string;
	}


	/**Information about the virtual interface failover test. */
	export interface VirtualInterfaceTestHistory {
		testId?: string;
		virtualInterfaceId?: string;
		bgpPeers?: Array<BGPPeerId>;
		status?: string;
		ownerAccount?: string;
		testDurationInMinutes?: number;
		startTime?: Date;
		endTime?: Date;
	}


	/**Information about a tag. */
	export interface Tag {
		key: string;
		value?: string;
	}


	/**Information about a virtual private gateway for a private virtual interface. */
	export interface VirtualGateway {
		virtualGatewayId?: string;
		virtualGatewayState?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.
		 * Post /#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal
		 * @return {AcceptDirectConnectGatewayAssociationProposalResult} Success
		 */
		AcceptDirectConnectGatewayAssociationProposal(callback: (data : AcceptDirectConnectGatewayAssociationProposalResult) => any, requestBody: AcceptDirectConnectGatewayAssociationProposalRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p> <p>Creates a hosted connection on an interconnect.</p> <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post /#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect
		 * @return {Connection} Success
		 */
		AllocateConnectionOnInterconnect(callback: (data : Connection) => any, requestBody: AllocateConnectionOnInterconnectRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p> <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. AWS polices the hosted connection for the specified capacity and the AWS Direct Connect Partner must also police the hosted connection for the specified capacity.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post /#X-Amz-Target=OvertureService.AllocateHostedConnection
		 * @return {Connection} Success
		 */
		AllocateHostedConnection(callback: (data : Connection) => any, requestBody: AllocateHostedConnectionRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.AllocateHostedConnection', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Provisions a private virtual interface to be owned by the specified AWS account.</p> <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>. Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>
		 * Post /#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface
		 * @return {VirtualInterface} Success
		 */
		AllocatePrivateVirtualInterface(callback: (data : VirtualInterface) => any, requestBody: AllocatePrivateVirtualInterfaceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Provisions a public virtual interface to be owned by the specified AWS account.</p> <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified AWS account.</p> <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>. Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p> <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
		 * Post /#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface
		 * @return {VirtualInterface} Success
		 */
		AllocatePublicVirtualInterface(callback: (data : VirtualInterface) => any, requestBody: AllocatePublicVirtualInterfaceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Provisions a transit virtual interface to be owned by the specified AWS account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p> <p>The owner of a connection provisions a transit virtual interface to be owned by the specified AWS account.</p> <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>
		 * Post /#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface
		 * @return {AllocateTransitVirtualInterfaceResult} Success
		 */
		AllocateTransitVirtualInterface(callback: (data : AllocateTransitVirtualInterfaceResult) => any, requestBody: AllocateTransitVirtualInterfaceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to AWS is interrupted). The connection must be hosted on the same AWS Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails.</p> <p>Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG.</p> <p>For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.</p>
		 * Post /#X-Amz-Target=OvertureService.AssociateConnectionWithLag
		 * @return {Connection} Success
		 */
		AssociateConnectionWithLag(callback: (data : Connection) => any, requestBody: AssociateConnectionWithLagRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.AssociateConnectionWithLag', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to AWS as it is being migrated.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post /#X-Amz-Target=OvertureService.AssociateHostedConnection
		 * @return {Connection} Success
		 */
		AssociateHostedConnection(callback: (data : Connection) => any, requestBody: AssociateHostedConnectionRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.AssociateHostedConnection', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to AWS is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails.</p> <p>Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p> <p>To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.</p>
		 * Post /#X-Amz-Target=OvertureService.AssociateVirtualInterface
		 * @return {VirtualInterface} Success
		 */
		AssociateVirtualInterface(callback: (data : VirtualInterface) => any, requestBody: AssociateVirtualInterfaceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.AssociateVirtualInterface', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Confirms the creation of the specified hosted connection on an interconnect.</p> <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and remains in this state until the owner confirms creation of the hosted connection.</p>
		 * Post /#X-Amz-Target=OvertureService.ConfirmConnection
		 * @return {ConfirmConnectionResponse} Success
		 */
		ConfirmConnection(callback: (data : ConfirmConnectionResponse) => any, requestBody: ConfirmConnectionRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.ConfirmConnection', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Accepts ownership of a private virtual interface created by another AWS account.</p> <p>After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.</p>
		 * Post /#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface
		 * @return {ConfirmPrivateVirtualInterfaceResponse} Success
		 */
		ConfirmPrivateVirtualInterface(callback: (data : ConfirmPrivateVirtualInterfaceResponse) => any, requestBody: ConfirmPrivateVirtualInterfaceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Accepts ownership of a public virtual interface created by another AWS account.</p> <p>After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.</p>
		 * Post /#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface
		 * @return {ConfirmPublicVirtualInterfaceResponse} Success
		 */
		ConfirmPublicVirtualInterface(callback: (data : ConfirmPublicVirtualInterfaceResponse) => any, requestBody: ConfirmPublicVirtualInterfaceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Accepts ownership of a transit virtual interface created by another AWS account.</p> <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>
		 * Post /#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface
		 * @return {ConfirmTransitVirtualInterfaceResponse} Success
		 */
		ConfirmTransitVirtualInterface(callback: (data : ConfirmTransitVirtualInterfaceResponse) => any, requestBody: ConfirmTransitVirtualInterfaceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a BGP peer on the specified virtual interface.</p> <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access AWS resources that also use that address family.</p> <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface.</p> <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p> <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already whitelisted for the virtual interface.</p>
		 * Post /#X-Amz-Target=OvertureService.CreateBGPPeer
		 * @return {CreateBGPPeerResponse} Success
		 */
		CreateBGPPeer(callback: (data : CreateBGPPeerResponse) => any, requestBody: CreateBGPPeerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.CreateBGPPeer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a connection between a customer network and a specific AWS Direct Connect location.</p> <p>A connection links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router.</p> <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p> <p>You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.</p>
		 * Post /#X-Amz-Target=OvertureService.CreateConnection
		 * @return {Connection} Success
		 */
		CreateConnection(callback: (data : Connection) => any, requestBody: CreateConnectionRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.CreateConnection', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any AWS Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different AWS Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.
		 * Post /#X-Amz-Target=OvertureService.CreateDirectConnectGateway
		 * @return {CreateDirectConnectGatewayResult} Success
		 */
		CreateDirectConnectGateway(callback: (data : CreateDirectConnectGatewayResult) => any, requestBody: CreateDirectConnectGatewayRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.CreateDirectConnectGateway', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.
		 * Post /#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation
		 * @return {CreateDirectConnectGatewayAssociationResult} Success
		 */
		CreateDirectConnectGatewayAssociation(callback: (data : CreateDirectConnectGatewayAssociationResult) => any, requestBody: CreateDirectConnectGatewayAssociationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p> <p>You can only associate a Direct Connect gateway and virtual private gateway or transit gateway when the account that owns the Direct Connect gateway and the account that owns the virtual private gateway or transit gateway have the same AWS Payer ID.</p>
		 * Post /#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal
		 * @return {CreateDirectConnectGatewayAssociationProposalResult} Success
		 */
		CreateDirectConnectGatewayAssociationProposal(callback: (data : CreateDirectConnectGatewayAssociationProposalResult) => any, requestBody: CreateDirectConnectGatewayAssociationProposalRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates an interconnect between an AWS Direct Connect Partner's network and a specific AWS Direct Connect location.</p> <p>An interconnect is a connection that is capable of hosting other connections. The AWS Direct Connect partner can use an interconnect to provide AWS Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an AWS Direct Connect router.</p> <p>You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created.</p> <p>For each end customer, the AWS Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>. The end customer can then connect to AWS resources by creating a virtual interface on their connection, using the VLAN assigned to them by the AWS Direct Connect Partner.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post /#X-Amz-Target=OvertureService.CreateInterconnect
		 * @return {Interconnect} Success
		 */
		CreateInterconnect(callback: (data : Interconnect) => any, requestBody: CreateInterconnectRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.CreateInterconnect', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a link aggregation group (LAG) with the specified number of bundled physical connections between the customer network and a specific AWS Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface.</p> <p>All connections in a LAG must use the same bandwidth and must terminate at the same AWS Direct Connect endpoint.</p> <p>You can have up to 10 connections per LAG. Regardless of this limit, if you request more connections for the LAG than AWS Direct Connect can allocate on a single endpoint, no LAG is created.</p> <p>You can specify an existing physical connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical connection or hosted connections, and re-establishes them as a member of the LAG. The LAG will be created on the same AWS Direct Connect endpoint to which the connection terminates. Any virtual interfaces associated with the connection are automatically disassociated and re-associated with the LAG. The connection ID does not change.</p> <p>If the AWS account used to create a LAG is a registered AWS Direct Connect Partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.</p>
		 * Post /#X-Amz-Target=OvertureService.CreateLag
		 * @return {Lag} Success
		 */
		CreateLag(callback: (data : Lag) => any, requestBody: CreateLagRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.CreateLag', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different AWS Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
		 * Post /#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface
		 * @return {VirtualInterface} Success
		 */
		CreatePrivateVirtualInterface(callback: (data : VirtualInterface) => any, requestBody: CreatePrivateVirtualInterfaceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a public virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A public virtual interface supports sending traffic to public services of AWS such as Amazon S3.</p> <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code> and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>
		 * Post /#X-Amz-Target=OvertureService.CreatePublicVirtualInterface
		 * @return {VirtualInterface} Success
		 */
		CreatePublicVirtualInterface(callback: (data : VirtualInterface) => any, requestBody: CreatePublicVirtualInterfaceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.CreatePublicVirtualInterface', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p> <important> <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p> </important> <p>Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
		 * Post /#X-Amz-Target=OvertureService.CreateTransitVirtualInterface
		 * @return {CreateTransitVirtualInterfaceResult} Success
		 */
		CreateTransitVirtualInterface(callback: (data : CreateTransitVirtualInterfaceResult) => any, requestBody: CreateTransitVirtualInterfaceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.CreateTransitVirtualInterface', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p> <p>You cannot delete the last BGP peer from a virtual interface.</p>
		 * Post /#X-Amz-Target=OvertureService.DeleteBGPPeer
		 * @return {DeleteBGPPeerResponse} Success
		 */
		DeleteBGPPeer(callback: (data : DeleteBGPPeerResponse) => any, requestBody: DeleteBGPPeerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DeleteBGPPeer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes the specified connection.</p> <p>Deleting a connection only stops the AWS Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the AWS Direct Connect location, you must cancel your service with them separately.</p>
		 * Post /#X-Amz-Target=OvertureService.DeleteConnection
		 * @return {Connection} Success
		 */
		DeleteConnection(callback: (data : Connection) => any, requestBody: DeleteConnectionRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DeleteConnection', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.
		 * Post /#X-Amz-Target=OvertureService.DeleteDirectConnectGateway
		 * @return {DeleteDirectConnectGatewayResult} Success
		 */
		DeleteDirectConnectGateway(callback: (data : DeleteDirectConnectGatewayResult) => any, requestBody: DeleteDirectConnectGatewayRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DeleteDirectConnectGateway', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p> <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>
		 * Post /#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation
		 * @return {DeleteDirectConnectGatewayAssociationResult} Success
		 */
		DeleteDirectConnectGatewayAssociation(callback: (data : DeleteDirectConnectGatewayAssociationResult) => any, requestBody: DeleteDirectConnectGatewayAssociationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.
		 * Post /#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal
		 * @return {DeleteDirectConnectGatewayAssociationProposalResult} Success
		 */
		DeleteDirectConnectGatewayAssociationProposal(callback: (data : DeleteDirectConnectGatewayAssociationProposalResult) => any, requestBody: DeleteDirectConnectGatewayAssociationProposalRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes the specified interconnect.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post /#X-Amz-Target=OvertureService.DeleteInterconnect
		 * @return {DeleteInterconnectResponse} Success
		 */
		DeleteInterconnect(callback: (data : DeleteInterconnectResponse) => any, requestBody: DeleteInterconnectRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DeleteInterconnect', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.
		 * Post /#X-Amz-Target=OvertureService.DeleteLag
		 * @return {Lag} Success
		 */
		DeleteLag(callback: (data : Lag) => any, requestBody: DeleteLagRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DeleteLag', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes a virtual interface.
		 * Post /#X-Amz-Target=OvertureService.DeleteVirtualInterface
		 * @return {DeleteVirtualInterfaceResponse} Success
		 */
		DeleteVirtualInterface(callback: (data : DeleteVirtualInterfaceResponse) => any, requestBody: DeleteVirtualInterfaceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DeleteVirtualInterface', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for a connection.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to AWS at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a> in the <i>AWS Direct Connect User Guide</i>.</p>
		 * Post /#X-Amz-Target=OvertureService.DescribeConnectionLoa
		 * @return {DescribeConnectionLoaResponse} Success
		 */
		DescribeConnectionLoa(callback: (data : DescribeConnectionLoaResponse) => any, requestBody: DescribeConnectionLoaRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeConnectionLoa', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Displays the specified connection or all connections in this Region.
		 * Post /#X-Amz-Target=OvertureService.DescribeConnections
		 * @return {Connections} Success
		 */
		DescribeConnections(callback: (data : Connections) => any, requestBody: DescribeConnectionsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeConnections', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p> <p>Lists the connections that have been provisioned on the specified interconnect.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post /#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect
		 * @return {Connections} Success
		 */
		DescribeConnectionsOnInterconnect(callback: (data : Connections) => any, requestBody: DescribeConnectionsOnInterconnectRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway.
		 * Post /#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals
		 * @return {DescribeDirectConnectGatewayAssociationProposalsResult} Success
		 */
		DescribeDirectConnectGatewayAssociationProposals(callback: (data : DescribeDirectConnectGatewayAssociationProposalsResult) => any, requestBody: DescribeDirectConnectGatewayAssociationProposalsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the associations between your Direct Connect gateways and virtual private gateways. You must specify a Direct Connect gateway, a virtual private gateway, or both. If you specify a Direct Connect gateway, the response contains all virtual private gateways associated with the Direct Connect gateway. If you specify a virtual private gateway, the response contains all Direct Connect gateways associated with the virtual private gateway. If you specify both, the response contains the association between the Direct Connect gateway and the virtual private gateway.
		 * Post /#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations
		 * @return {DescribeDirectConnectGatewayAssociationsResult} Success
		 */
		DescribeDirectConnectGatewayAssociations(callback: (data : DescribeDirectConnectGatewayAssociationsResult) => any, requestBody: DescribeDirectConnectGatewayAssociationsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.
		 * Post /#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments
		 * @return {DescribeDirectConnectGatewayAttachmentsResult} Success
		 */
		DescribeDirectConnectGatewayAttachments(callback: (data : DescribeDirectConnectGatewayAttachmentsResult) => any, requestBody: DescribeDirectConnectGatewayAttachmentsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.
		 * Post /#X-Amz-Target=OvertureService.DescribeDirectConnectGateways
		 * @return {DescribeDirectConnectGatewaysResult} Success
		 */
		DescribeDirectConnectGateways(callback: (data : DescribeDirectConnectGatewaysResult) => any, requestBody: DescribeDirectConnectGatewaysRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeDirectConnectGateways', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post /#X-Amz-Target=OvertureService.DescribeHostedConnections
		 * @return {Connections} Success
		 */
		DescribeHostedConnections(callback: (data : Connections) => any, requestBody: DescribeHostedConnectionsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeHostedConnections', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for the specified interconnect.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a> in the <i>AWS Direct Connect User Guide</i>.</p>
		 * Post /#X-Amz-Target=OvertureService.DescribeInterconnectLoa
		 * @return {DescribeInterconnectLoaResponse} Success
		 */
		DescribeInterconnectLoa(callback: (data : DescribeInterconnectLoaResponse) => any, requestBody: DescribeInterconnectLoaRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeInterconnectLoa', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the interconnects owned by the AWS account or only the specified interconnect.
		 * Post /#X-Amz-Target=OvertureService.DescribeInterconnects
		 * @return {Interconnects} Success
		 */
		DescribeInterconnects(callback: (data : Interconnects) => any, requestBody: DescribeInterconnectsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeInterconnects', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes all your link aggregation groups (LAG) or the specified LAG.
		 * Post /#X-Amz-Target=OvertureService.DescribeLags
		 * @return {Lags} Success
		 */
		DescribeLags(callback: (data : Lags) => any, requestBody: DescribeLagsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeLags', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a> in the <i>AWS Direct Connect User Guide</i>.</p>
		 * Post /#X-Amz-Target=OvertureService.DescribeLoa
		 * @return {Loa} Success
		 */
		DescribeLoa(callback: (data : Loa) => any, requestBody: DescribeLoaRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeLoa', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the AWS Direct Connect locations in the current AWS Region. These are the locations that can be selected when calling <a>CreateConnection</a> or <a>CreateInterconnect</a>.
		 * Post /#X-Amz-Target=OvertureService.DescribeLocations
		 * @return {Locations} Success
		 */
		DescribeLocations(callback: (data : Locations) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeLocations', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the tags associated with the specified AWS Direct Connect resources.
		 * Post /#X-Amz-Target=OvertureService.DescribeTags
		 * @return {DescribeTagsResponse} Success
		 */
		DescribeTags(callback: (data : DescribeTagsResponse) => any, requestBody: DescribeTagsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeTags', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Lists the virtual private gateways owned by the AWS account.</p> <p>You can create one or more AWS Direct Connect private virtual interfaces linked to a virtual private gateway.</p>
		 * Post /#X-Amz-Target=OvertureService.DescribeVirtualGateways
		 * @return {VirtualGateways} Success
		 */
		DescribeVirtualGateways(callback: (data : VirtualGateways) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeVirtualGateways', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Displays all virtual interfaces for an AWS account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned.</p> <p>A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer network.</p>
		 * Post /#X-Amz-Target=OvertureService.DescribeVirtualInterfaces
		 * @return {VirtualInterfaces} Success
		 */
		DescribeVirtualInterfaces(callback: (data : VirtualInterfaces) => any, requestBody: DescribeVirtualInterfacesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DescribeVirtualInterfaces', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the <a>DeleteConnection</a> request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an AWS Direct Connect Partner is automatically converted to an interconnect.</p> <p>If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. </p>
		 * Post /#X-Amz-Target=OvertureService.DisassociateConnectionFromLag
		 * @return {Connection} Success
		 */
		DisassociateConnectionFromLag(callback: (data : Connection) => any, requestBody: DisassociateConnectionFromLagRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.DisassociateConnectionFromLag', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the virtual interface failover test history.
		 * Post /#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory
		 * @return {ListVirtualInterfaceTestHistoryResponse} Success
		 */
		ListVirtualInterfaceTestHistory(callback: (data : ListVirtualInterfaceTestHistoryResponse) => any, requestBody: ListVirtualInterfaceTestHistoryRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p> <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p> <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p> <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>
		 * Post /#X-Amz-Target=OvertureService.StartBgpFailoverTest
		 * @return {StartBgpFailoverTestResponse} Success
		 */
		StartBgpFailoverTest(callback: (data : StartBgpFailoverTestResponse) => any, requestBody: StartBgpFailoverTestRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.StartBgpFailoverTest', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Stops the virtual interface failover test.
		 * Post /#X-Amz-Target=OvertureService.StopBgpFailoverTest
		 * @return {StopBgpFailoverTestResponse} Success
		 */
		StopBgpFailoverTest(callback: (data : StopBgpFailoverTestResponse) => any, requestBody: StopBgpFailoverTestRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.StopBgpFailoverTest', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Adds the specified tags to the specified AWS Direct Connect resource. Each resource can have a maximum of 50 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>
		 * Post /#X-Amz-Target=OvertureService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(callback: (data : TagResourceResponse) => any, requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.TagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes one or more tags from the specified AWS Direct Connect resource.
		 * Post /#X-Amz-Target=OvertureService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(callback: (data : UntagResourceResponse) => any, requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.UntagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates the specified attributes of the Direct Connect gateway association.</p> <p>Add or remove prefixes from the association.</p>
		 * Post /#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation
		 * @return {UpdateDirectConnectGatewayAssociationResult} Success
		 */
		UpdateDirectConnectGatewayAssociation(callback: (data : UpdateDirectConnectGatewayAssociationResult) => any, requestBody: UpdateDirectConnectGatewayAssociationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates the attributes of the specified link aggregation group (LAG).</p> <p>You can update the following attributes:</p> <ul> <li> <p>The name of the LAG.</p> </li> <li> <p>The value for the minimum number of connections that must be operational for the LAG itself to be operational. </p> </li> </ul> <p>When you create a LAG, the default value for the minimum number of operational connections is zero (0). If you update this value and the number of operational connections falls below the specified value, the LAG automatically goes down to avoid over-utilization of the remaining connections. Adjust this value with care, as it could force the LAG down if it is set higher than the current number of operational connections.</p>
		 * Post /#X-Amz-Target=OvertureService.UpdateLag
		 * @return {Lag} Success
		 */
		UpdateLag(callback: (data : Lag) => any, requestBody: UpdateLagRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.UpdateLag', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates the specified attributes of the specified virtual private interface.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual q interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
		 * Post /#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes
		 * @return {VirtualInterface} Success
		 */
		UpdateVirtualInterfaceAttributes(callback: (data : VirtualInterface) => any, requestBody: UpdateVirtualInterfaceAttributesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

