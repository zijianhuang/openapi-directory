import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface AssociateCustomerGatewayResponse {

		/**Describes the association between a customer gateway, a device, and a link. */
		CustomerGatewayAssociation?: CustomerGatewayAssociation;
	}

	export interface AssociateLinkResponse {

		/**Describes the association between a device and a link. */
		LinkAssociation?: LinkAssociation;
	}

	export interface CreateDeviceResponse {

		/**Describes a device. */
		Device?: Device;
	}


	/**Describes a tag. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export interface CreateGlobalNetworkResponse {

		/**Describes a global network. */
		GlobalNetwork?: GlobalNetwork;
	}

	export interface CreateLinkResponse {

		/**Describes a link. */
		Link?: Link;
	}

	export interface CreateSiteResponse {

		/**Describes a site. */
		Site?: Site;
	}

	export interface DeleteDeviceResponse {

		/**Describes a device. */
		Device?: Device;
	}

	export interface DeleteGlobalNetworkResponse {

		/**Describes a global network. */
		GlobalNetwork?: GlobalNetwork;
	}

	export interface DeleteLinkResponse {

		/**Describes a link. */
		Link?: Link;
	}

	export interface DeleteSiteResponse {

		/**Describes a site. */
		Site?: Site;
	}

	export interface DeregisterTransitGatewayResponse {

		/**Describes the registration of a transit gateway to a global network. */
		TransitGatewayRegistration?: TransitGatewayRegistration;
	}

	export interface DescribeGlobalNetworksResponse {
		GlobalNetworks?: Array<GlobalNetwork>;
		NextToken?: string;
	}

	export interface DisassociateCustomerGatewayResponse {

		/**Describes the association between a customer gateway, a device, and a link. */
		CustomerGatewayAssociation?: CustomerGatewayAssociation;
	}

	export interface DisassociateLinkResponse {

		/**Describes the association between a device and a link. */
		LinkAssociation?: LinkAssociation;
	}

	export interface GetCustomerGatewayAssociationsResponse {
		CustomerGatewayAssociations?: Array<CustomerGatewayAssociation>;
		NextToken?: string;
	}

	export interface GetDevicesResponse {
		Devices?: Array<Device>;
		NextToken?: string;
	}

	export interface GetLinkAssociationsResponse {
		LinkAssociations?: Array<LinkAssociation>;
		NextToken?: string;
	}

	export interface GetLinksResponse {
		Links?: Array<Link>;
		NextToken?: string;
	}

	export interface GetSitesResponse {
		Sites?: Array<Site>;
		NextToken?: string;
	}

	export interface GetTransitGatewayRegistrationsResponse {
		TransitGatewayRegistrations?: Array<TransitGatewayRegistration>;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		TagList?: Array<Tag>;
	}

	export interface RegisterTransitGatewayResponse {

		/**Describes the registration of a transit gateway to a global network. */
		TransitGatewayRegistration?: TransitGatewayRegistration;
	}

	export interface UpdateDeviceResponse {

		/**Describes a device. */
		Device?: Device;
	}

	export interface UpdateGlobalNetworkResponse {

		/**Describes a global network. */
		GlobalNetwork?: GlobalNetwork;
	}

	export interface UpdateLinkResponse {

		/**Describes a link. */
		Link?: Link;
	}

	export interface UpdateSiteResponse {

		/**Describes a site. */
		Site?: Site;
	}

	export interface AssociateCustomerGatewayRequest {
		CustomerGatewayArn: string;
		DeviceId: string;
		LinkId?: string;
	}


	/**Describes the association between a customer gateway, a device, and a link. */
	export interface CustomerGatewayAssociation {
		CustomerGatewayArn?: string;
		GlobalNetworkId?: string;
		DeviceId?: string;
		LinkId?: string;
		State?: CustomerGatewayAssociationState;
	}

	export enum CustomerGatewayAssociationState { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3 }

	export interface AssociateLinkRequest {
		DeviceId: string;
		LinkId: string;
	}


	/**Describes the association between a device and a link. */
	export interface LinkAssociation {
		GlobalNetworkId?: string;
		DeviceId?: string;
		LinkId?: string;
		LinkAssociationState?: LinkAssociationLinkAssociationState;
	}

	export enum LinkAssociationLinkAssociationState { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3 }


	/**Describes bandwidth information. */
	export interface Bandwidth {
		UploadSpeed?: number;
		DownloadSpeed?: number;
	}


	/**Describes a location. */
	export interface Location {
		Address?: string;
		Latitude?: string;
		Longitude?: string;
	}

	export interface CreateDeviceRequest {
		Description?: string;
		Type?: string;
		Vendor?: string;
		Model?: string;
		SerialNumber?: string;

		/**Describes a location. */
		Location?: Location;
		SiteId?: string;
		Tags?: Array<Tag>;
	}


	/**Describes a device. */
	export interface Device {
		DeviceId?: string;
		DeviceArn?: string;
		GlobalNetworkId?: string;
		Description?: string;
		Type?: string;
		Vendor?: string;
		Model?: string;
		SerialNumber?: string;

		/**Describes a location. */
		Location?: Location;
		SiteId?: string;
		CreatedAt?: Date;
		State?: DeviceState;
		Tags?: Array<Tag>;
	}

	export enum DeviceState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export interface CreateGlobalNetworkRequest {
		Description?: string;
		Tags?: Array<Tag>;
	}


	/**Describes a global network. */
	export interface GlobalNetwork {
		GlobalNetworkId?: string;
		GlobalNetworkArn?: string;
		Description?: string;
		CreatedAt?: Date;
		State?: GlobalNetworkState;
		Tags?: Array<Tag>;
	}

	export enum GlobalNetworkState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export interface CreateLinkRequest {
		Description?: string;
		Type?: string;

		/**Describes bandwidth information. */
		Bandwidth: Bandwidth;
		Provider?: string;
		SiteId: string;
		Tags?: Array<Tag>;
	}


	/**Describes a link. */
	export interface Link {
		LinkId?: string;
		LinkArn?: string;
		GlobalNetworkId?: string;
		SiteId?: string;
		Description?: string;
		Type?: string;

		/**Describes bandwidth information. */
		Bandwidth?: Bandwidth;
		Provider?: string;
		CreatedAt?: Date;
		State?: LinkState;
		Tags?: Array<Tag>;
	}

	export enum LinkState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export interface CreateSiteRequest {
		Description?: string;

		/**Describes a location. */
		Location?: Location;
		Tags?: Array<Tag>;
	}


	/**Describes a site. */
	export interface Site {
		SiteId?: string;
		SiteArn?: string;
		GlobalNetworkId?: string;
		Description?: string;

		/**Describes a location. */
		Location?: Location;
		CreatedAt?: Date;
		State?: SiteState;
		Tags?: Array<Tag>;
	}

	export enum SiteState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export enum CustomerGatewayAssociationState { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3 }


	/**Describes the registration of a transit gateway to a global network. */
	export interface TransitGatewayRegistration {
		GlobalNetworkId?: string;
		TransitGatewayArn?: string;

		/**Describes the status of a transit gateway registration. */
		State?: TransitGatewayRegistrationStateReason;
	}

	export enum DeviceState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export enum GlobalNetworkState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export enum LinkState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export enum LinkAssociationState { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3 }

	export interface RegisterTransitGatewayRequest {
		TransitGatewayArn: string;
	}

	export enum SiteState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export interface TagResourceRequest {
		Tags: Array<Tag>;
	}


	/**Describes the status of a transit gateway registration. */
	export interface TransitGatewayRegistrationStateReason {
		Code?: TransitGatewayRegistrationStateReasonCode;
		Message?: string;
	}

	export enum TransitGatewayRegistrationStateReasonCode { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3, FAILED = 4 }

	export enum TransitGatewayRegistrationState { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3, FAILED = 4 }

	export interface UpdateDeviceRequest {
		Description?: string;
		Type?: string;
		Vendor?: string;
		Model?: string;
		SerialNumber?: string;

		/**Describes a location. */
		Location?: Location;
		SiteId?: string;
	}

	export interface UpdateGlobalNetworkRequest {
		Description?: string;
	}

	export interface UpdateLinkRequest {
		Description?: string;
		Type?: string;

		/**Describes bandwidth information. */
		Bandwidth?: Bandwidth;
		Provider?: string;
	}

	export interface UpdateSiteRequest {
		Description?: string;

		/**Describes a location. */
		Location?: Location;
	}

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * <p>Associates a customer gateway with a device and optionally, with a link. If you specify a link, it must be associated with the specified device. </p> <p>You can only associate customer gateways that are connected to a VPN attachment on a transit gateway. The transit gateway must be registered in your global network. When you register a transit gateway, customer gateways that are connected to the transit gateway are automatically included in the global network. To list customer gateways that are connected to a transit gateway, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html">DescribeVpnConnections</a> EC2 API and filter by <code>transit-gateway-id</code>.</p> <p>You cannot associate a customer gateway with more than one device and link. </p>
		 * Post /global-networks/{globalNetworkId}/customer-gateway-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {AssociateCustomerGatewayResponse} Success
		 */
		AssociateCustomerGateway(globalNetworkId: string, requestBody: AssociateCustomerGatewayBody, headersHandler?: () => {[header: string]: string}): Promise<AssociateCustomerGatewayResponse> {
			return this.http.post('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/customer-gateway-associations', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets the association information for customer gateways that are associated with devices and links in your global network.
		 * Get /global-networks/{globalNetworkId}/customer-gateway-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<String>} customerGatewayArns One or more customer gateway Amazon Resource Names (ARNs). For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCustomerGatewayAssociationsResponse} Success
		 */
		GetCustomerGatewayAssociations(globalNetworkId: string, customerGatewayArns: Array<String>, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<GetCustomerGatewayAssociationsResponse> {
			return this.http.get('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/customer-gateway-associations&' + customerGatewayArns.map(z => `customerGatewayArns=${z}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.
		 * Post /global-networks/{globalNetworkId}/link-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {AssociateLinkResponse} Success
		 */
		AssociateLink(globalNetworkId: string, requestBody: AssociateLinkBody, headersHandler?: () => {[header: string]: string}): Promise<AssociateLinkResponse> {
			return this.http.post('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/link-associations', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets the link associations for a device or a link. Either the device ID or the link ID must be specified.
		 * Get /global-networks/{globalNetworkId}/link-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @param {string} linkId The ID of the link.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetLinkAssociationsResponse} Success
		 */
		GetLinkAssociations(globalNetworkId: string, deviceId: string, linkId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<GetLinkAssociationsResponse> {
			return this.http.get('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/link-associations&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&linkId=' + (linkId == null ? '' : encodeURIComponent(linkId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a new device in a global network. If you specify both a site ID and a location, the location of the site is used for visualization in the Network Manager console.
		 * Post /global-networks/{globalNetworkId}/devices
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {CreateDeviceResponse} Success
		 */
		CreateDevice(globalNetworkId: string, requestBody: CreateDeviceBody, headersHandler?: () => {[header: string]: string}): Promise<CreateDeviceResponse> {
			return this.http.post('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets information about one or more of your devices in a global network.
		 * Get /global-networks/{globalNetworkId}/devices
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<String>} deviceIds One or more device IDs. The maximum is 10.
		 * @param {string} siteId The ID of the site.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetDevicesResponse} Success
		 */
		GetDevices(globalNetworkId: string, deviceIds: Array<String>, siteId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<GetDevicesResponse> {
			return this.http.get('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices&' + deviceIds.map(z => `deviceIds=${z}`).join('&') + '&siteId=' + (siteId == null ? '' : encodeURIComponent(siteId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a new, empty global network.
		 * Post /global-networks
		 * @return {CreateGlobalNetworkResponse} Success
		 */
		CreateGlobalNetwork(requestBody: CreateGlobalNetworkBody, headersHandler?: () => {[header: string]: string}): Promise<CreateGlobalNetworkResponse> {
			return this.http.post('/global-networks', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Describes one or more global networks. By default, all global networks are described. To describe the objects in your global network, you must use the appropriate <code>Get*</code> action. For example, to list the transit gateways in your global network, use <a>GetTransitGatewayRegistrations</a>.
		 * Get /global-networks
		 * @param {Array<String>} globalNetworkIds The IDs of one or more global networks. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeGlobalNetworksResponse} Success
		 */
		DescribeGlobalNetworks(globalNetworkIds: Array<String>, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeGlobalNetworksResponse> {
			return this.http.get('/global-networks?' + globalNetworkIds.map(z => `globalNetworkIds=${z}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a new link for a specified site.
		 * Post /global-networks/{globalNetworkId}/links
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {CreateLinkResponse} Success
		 */
		CreateLink(globalNetworkId: string, requestBody: CreateLinkBody, headersHandler?: () => {[header: string]: string}): Promise<CreateLinkResponse> {
			return this.http.post('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Gets information about one or more links in a specified global network.</p> <p>If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.</p>
		 * Get /global-networks/{globalNetworkId}/links
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<String>} linkIds One or more link IDs. The maximum is 10.
		 * @param {string} siteId The ID of the site.
		 * @param {string} type The link type.
		 * @param {string} provider The link provider.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetLinksResponse} Success
		 */
		GetLinks(globalNetworkId: string, linkIds: Array<String>, siteId: string, type: string, provider: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<GetLinksResponse> {
			return this.http.get('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links&' + linkIds.map(z => `linkIds=${z}`).join('&') + '&siteId=' + (siteId == null ? '' : encodeURIComponent(siteId)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&provider=' + (provider == null ? '' : encodeURIComponent(provider)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a new site in a global network.
		 * Post /global-networks/{globalNetworkId}/sites
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {CreateSiteResponse} Success
		 */
		CreateSite(globalNetworkId: string, requestBody: CreateSiteBody, headersHandler?: () => {[header: string]: string}): Promise<CreateSiteResponse> {
			return this.http.post('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets information about one or more of your sites in a global network.
		 * Get /global-networks/{globalNetworkId}/sites
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<String>} siteIds One or more site IDs. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetSitesResponse} Success
		 */
		GetSites(globalNetworkId: string, siteIds: Array<String>, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<GetSitesResponse> {
			return this.http.get('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites&' + siteIds.map(z => `siteIds=${z}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes an existing device. You must first disassociate the device from any links and customer gateways.
		 * Delete /global-networks/{globalNetworkId}/devices/{deviceId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @return {DeleteDeviceResponse} Success
		 */
		DeleteDevice(globalNetworkId: string, deviceId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteDeviceResponse> {
			return this.http.delete('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes an existing global network. You must first delete all global network objects (devices, links, and sites) and deregister all transit gateways.
		 * Delete /global-networks/{globalNetworkId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {DeleteGlobalNetworkResponse} Success
		 */
		DeleteGlobalNetwork(globalNetworkId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteGlobalNetworkResponse> {
			return this.http.delete('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes an existing link. You must first disassociate the link from any devices and customer gateways.
		 * Delete /global-networks/{globalNetworkId}/links/{linkId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} linkId The ID of the link.
		 * @return {DeleteLinkResponse} Success
		 */
		DeleteLink(globalNetworkId: string, linkId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteLinkResponse> {
			return this.http.delete('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links/' + (linkId == null ? '' : encodeURIComponent(linkId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes an existing site. The site cannot be associated with any device or link.
		 * Delete /global-networks/{globalNetworkId}/sites/{siteId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} siteId The ID of the site.
		 * @return {DeleteSiteResponse} Success
		 */
		DeleteSite(globalNetworkId: string, siteId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteSiteResponse> {
			return this.http.delete('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites/' + (siteId == null ? '' : encodeURIComponent(siteId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deregisters a transit gateway from your global network. This action does not delete your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.
		 * Delete /global-networks/{globalNetworkId}/transit-gateway-registrations/{transitGatewayArn}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} transitGatewayArn The Amazon Resource Name (ARN) of the transit gateway.
		 * @return {DeregisterTransitGatewayResponse} Success
		 */
		DeregisterTransitGateway(globalNetworkId: string, transitGatewayArn: string, headersHandler?: () => {[header: string]: string}): Promise<DeregisterTransitGatewayResponse> {
			return this.http.delete('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-registrations/' + (transitGatewayArn == null ? '' : encodeURIComponent(transitGatewayArn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Disassociates a customer gateway from a device and a link.
		 * Delete /global-networks/{globalNetworkId}/customer-gateway-associations/{customerGatewayArn}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} customerGatewayArn The Amazon Resource Name (ARN) of the customer gateway. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.
		 * @return {DisassociateCustomerGatewayResponse} Success
		 */
		DisassociateCustomerGateway(globalNetworkId: string, customerGatewayArn: string, headersHandler?: () => {[header: string]: string}): Promise<DisassociateCustomerGatewayResponse> {
			return this.http.delete('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/customer-gateway-associations/' + (customerGatewayArn == null ? '' : encodeURIComponent(customerGatewayArn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Disassociates an existing device from a link. You must first disassociate any customer gateways that are associated with the link.
		 * Delete /global-networks/{globalNetworkId}/link-associations#deviceId&linkId
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @param {string} linkId The ID of the link.
		 * @return {DisassociateLinkResponse} Success
		 */
		DisassociateLink(globalNetworkId: string, deviceId: string, linkId: string, headersHandler?: () => {[header: string]: string}): Promise<DisassociateLinkResponse> {
			return this.http.delete('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/link-associations#deviceId&linkId&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&linkId=' + (linkId == null ? '' : encodeURIComponent(linkId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets information about the transit gateway registrations in a specified global network.
		 * Get /global-networks/{globalNetworkId}/transit-gateway-registrations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<String>} transitGatewayArns The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTransitGatewayRegistrationsResponse} Success
		 */
		GetTransitGatewayRegistrations(globalNetworkId: string, transitGatewayArns: Array<String>, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<GetTransitGatewayRegistrationsResponse> {
			return this.http.get('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-registrations&' + transitGatewayArns.map(z => `transitGatewayArns=${z}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Registers a transit gateway in your global network. The transit gateway can be in any AWS Region, but it must be owned by the same AWS account that owns the global network. You cannot register a transit gateway in more than one global network.
		 * Post /global-networks/{globalNetworkId}/transit-gateway-registrations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {RegisterTransitGatewayResponse} Success
		 */
		RegisterTransitGateway(globalNetworkId: string, requestBody: RegisterTransitGatewayBody, headersHandler?: () => {[header: string]: string}): Promise<RegisterTransitGatewayResponse> {
			return this.http.post('/global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-registrations', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Lists the tags for a specified resource.
		 * Get /tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return this.http.get('/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Tags a specified resource.
		 * Post /tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return this.http.post('/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Removes tags from a specified resource.
		 * Delete /tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<TagKey>} tagKeys The tag keys to remove from the specified resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<TagKey>, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return this.http.delete('/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}
	}

	export interface AssociateCustomerGatewayBody {

		/**The Amazon Resource Name (ARN) of the customer gateway. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>. */
		CustomerGatewayArn: string;

		/**The ID of the device. */
		DeviceId: string;

		/**The ID of the link. */
		LinkId?: string;
	}

	export interface AssociateLinkBody {

		/**The ID of the device. */
		DeviceId: string;

		/**The ID of the link. */
		LinkId: string;
	}

	export interface CreateDeviceBody {

		/**<p>A description of the device.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string;

		/**The type of the device. */
		Type?: string;

		/**<p>The vendor of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Vendor?: string;

		/**<p>The model of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Model?: string;

		/**<p>The serial number of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		SerialNumber?: string;

		/**Describes a location. */
		Location?: string;

		/**The ID of the site. */
		SiteId?: string;

		/**The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}

	export interface CreateGlobalNetworkBody {

		/**<p>A description of the global network.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string;

		/**The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}

	export interface CreateLinkBody {

		/**<p>A description of the link.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string;

		/**<p>The type of the link.</p> <p>Constraints: Cannot include the following characters: | \ ^</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Type?: string;

		/**Describes bandwidth information. */
		Bandwidth: string;

		/**<p>The provider of the link.</p> <p>Constraints: Cannot include the following characters: | \ ^</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Provider?: string;

		/**The ID of the site. */
		SiteId: string;

		/**The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}

	export interface CreateSiteBody {

		/**<p>A description of your site.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string;

		/**Describes a location. */
		Location?: string;

		/**The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}

	export interface RegisterTransitGatewayBody {

		/**The Amazon Resource Name (ARN) of the transit gateway. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>. */
		TransitGatewayArn: string;
	}

	export interface TagResourceBody {

		/**The tags to apply to the specified resource. */
		Tags: Array<Tag>;
	}

}

