import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {

	/**<p/> */
	export interface ContactIdResponse {
		contactId?: string;
	}


	/**<p/> */
	export interface ConfigIdResponse {
		configArn?: string;
		configId?: string;
		configType?: ConfigIdResponseConfigType;
	}

	export enum ConfigIdResponseConfigType { antenna-downlink = 0, antenna-downlink-demod-decode = 1, antenna-uplink = 2, dataflow-endpoint = 3, tracking = 4, uplink-echo = 5 }


	/**Information about how AWS Ground Station should configure an antenna for downlink during a contact. */
	export interface AntennaDownlinkConfig {

		/**Object that describes a spectral <code>Config</code>. */
		spectrumConfig: SpectrumConfig;
	}


	/**Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact. */
	export interface AntennaDownlinkDemodDecodeConfig {

		/**Information about the decode <code>Config</code>. */
		decodeConfig: DecodeConfig;

		/**Information about the demodulation <code>Config</code>. */
		demodulationConfig: DemodulationConfig;

		/**Object that describes a spectral <code>Config</code>. */
		spectrumConfig: SpectrumConfig;
	}


	/**Information about the uplink <code>Config</code> of an antenna. */
	export interface AntennaUplinkConfig {

		/**Information about the uplink spectral <code>Config</code>. */
		spectrumConfig: UplinkSpectrumConfig;

		/**Object that represents EIRP. */
		targetEirp: Eirp;
	}


	/**Information about the dataflow endpoint <code>Config</code>. */
	export interface DataflowEndpointConfig {
		dataflowEndpointName: string;
		dataflowEndpointRegion?: string;
	}


	/**Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. */
	export interface TrackingConfig {
		autotrack: TrackingConfigAutotrack;
	}

	export enum TrackingConfigAutotrack { PREFERRED = 0, REMOVED = 1, REQUIRED = 2 }


	/**<p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p> */
	export interface UplinkEchoConfig {
		antennaUplinkConfigArn: string;
		enabled: boolean;
	}


	/**<p/> */
	export interface DataflowEndpointGroupIdResponse {
		dataflowEndpointGroupId?: string;
	}


	/**Information about the endpoint details. */
	export interface EndpointDetails {

		/**Information about a dataflow endpoint. */
		endpoint?: DataflowEndpoint;

		/**Information about endpoints. */
		securityDetails?: SecurityDetails;
	}


	/**<p/> */
	export interface MissionProfileIdResponse {
		missionProfileId?: string;
	}


	/**<p/> */
	export interface DescribeContactResponse {
		contactId?: string;
		contactStatus?: DescribeContactResponseContactStatus;
		endTime?: Date;
		errorMessage?: string;
		groundStation?: string;

		/**Elevation angle of the satellite in the sky during a contact. */
		maximumElevation?: Elevation;
		missionProfileArn?: string;
		postPassEndTime?: Date;
		prePassStartTime?: Date;
		region?: string;
		satelliteArn?: string;
		startTime?: Date;
		tags?: TagsMap;
	}

	export enum DescribeContactResponseContactStatus { AVAILABLE = 0, AWS_CANCELLED = 1, CANCELLED = 2, CANCELLING = 3, COMPLETED = 4, FAILED = 5, FAILED_TO_SCHEDULE = 6, PASS = 7, POSTPASS = 8, PREPASS = 9, SCHEDULED = 10, SCHEDULING = 11 }


	/**<p/> */
	export interface GetConfigResponse {
		configArn: string;

		/**<p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p> */
		configData: ConfigTypeData;
		configId: string;
		configType?: GetConfigResponseConfigType;
		name: string;
		tags?: TagsMap;
	}

	export enum GetConfigResponseConfigType { antenna-downlink = 0, antenna-downlink-demod-decode = 1, antenna-uplink = 2, dataflow-endpoint = 3, tracking = 4, uplink-echo = 5 }


	/**<p/> */
	export interface GetDataflowEndpointGroupResponse {
		dataflowEndpointGroupArn?: string;
		dataflowEndpointGroupId?: string;
		endpointsDetails?: Array<EndpointDetails>;
		tags?: TagsMap;
	}


	/**<p/> */
	export interface GetMinuteUsageResponse {
		estimatedMinutesRemaining?: number;
		isReservedMinutesCustomer?: boolean;
		totalReservedMinuteAllocation?: number;
		totalScheduledMinutes?: number;
		upcomingMinutesScheduled?: number;
	}


	/**<p/> */
	export interface GetMissionProfileResponse {
		contactPostPassDurationSeconds?: number;
		contactPrePassDurationSeconds?: number;
		dataflowEdges?: Array<DataflowEdge>;
		minimumViableContactDurationSeconds?: number;
		missionProfileArn?: string;
		missionProfileId?: string;
		name?: string;
		region?: string;
		tags?: TagsMap;
		trackingConfigArn?: string;
	}


	/**<p/> */
	export interface GetSatelliteResponse {
		groundStations?: Array<String>;
		noradSatelliteID?: number;
		satelliteArn?: string;
		satelliteId?: string;
	}


	/**<p/> */
	export interface ListConfigsResponse {
		configList?: Array<ConfigListItem>;
		nextToken?: string;
	}


	/**<p/> */
	export interface ListContactsResponse {
		contactList?: Array<ContactData>;
		nextToken?: string;
	}

	export enum ContactStatus { AVAILABLE = 0, AWS_CANCELLED = 1, CANCELLED = 2, CANCELLING = 3, COMPLETED = 4, FAILED = 5, FAILED_TO_SCHEDULE = 6, PASS = 7, POSTPASS = 8, PREPASS = 9, SCHEDULED = 10, SCHEDULING = 11 }


	/**<p/> */
	export interface ListDataflowEndpointGroupsResponse {
		dataflowEndpointGroupList?: Array<DataflowEndpointListItem>;
		nextToken?: string;
	}


	/**<p/> */
	export interface ListGroundStationsResponse {
		groundStationList?: Array<GroundStationData>;
		nextToken?: string;
	}


	/**<p/> */
	export interface ListMissionProfilesResponse {
		missionProfileList?: Array<MissionProfileListItem>;
		nextToken?: string;
	}


	/**<p/> */
	export interface ListSatellitesResponse {
		nextToken?: string;
		satellites?: Array<SatelliteListItem>;
	}


	/**<p/> */
	export interface ListTagsForResourceResponse {
		tags?: TagsMap;
	}

	export enum AngleUnits { DEGREE_ANGLE = 0, RADIAN = 1 }


	/**Object that describes a spectral <code>Config</code>. */
	export interface SpectrumConfig {

		/**Object that describes the frequency bandwidth. */
		bandwidth: FrequencyBandwidth;

		/**Object that describes the frequency. */
		centerFrequency: Frequency;
		polarization?: SpectrumConfigPolarization;
	}

	export enum SpectrumConfigPolarization { LEFT_HAND = 0, NONE = 1, RIGHT_HAND = 2 }


	/**Information about the decode <code>Config</code>. */
	export interface DecodeConfig {
		unvalidatedJSON: string;
	}


	/**Information about the demodulation <code>Config</code>. */
	export interface DemodulationConfig {
		unvalidatedJSON: string;
	}


	/**Information about the uplink spectral <code>Config</code>. */
	export interface UplinkSpectrumConfig {

		/**Object that describes the frequency. */
		centerFrequency: Frequency;
		polarization?: UplinkSpectrumConfigPolarization;
	}

	export enum UplinkSpectrumConfigPolarization { LEFT_HAND = 0, NONE = 1, RIGHT_HAND = 2 }


	/**Object that represents EIRP. */
	export interface Eirp {
		units: EirpUnits;
		value: number;
	}

	export enum EirpUnits { dBW = 0 }

	export enum BandwidthUnits { GHz = 0, MHz = 1, kHz = 2 }

	export enum ConfigCapabilityType { antenna-downlink = 0, antenna-downlink-demod-decode = 1, antenna-uplink = 2, dataflow-endpoint = 3, tracking = 4, uplink-echo = 5 }


	/**An item in a list of <code>Config</code> objects. */
	export interface ConfigListItem {
		configArn?: string;
		configId?: string;
		configType?: ConfigListItemConfigType;
		name?: string;
	}

	export enum ConfigListItemConfigType { antenna-downlink = 0, antenna-downlink-demod-decode = 1, antenna-uplink = 2, dataflow-endpoint = 3, tracking = 4, uplink-echo = 5 }


	/**<p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p> */
	export interface ConfigTypeData {

		/**Information about how AWS Ground Station should configure an antenna for downlink during a contact. */
		antennaDownlinkConfig?: AntennaDownlinkConfig;

		/**Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact. */
		antennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;

		/**Information about the uplink <code>Config</code> of an antenna. */
		antennaUplinkConfig?: AntennaUplinkConfig;

		/**Information about the dataflow endpoint <code>Config</code>. */
		dataflowEndpointConfig?: DataflowEndpointConfig;

		/**Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. */
		trackingConfig?: TrackingConfig;

		/**<p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p> */
		uplinkEchoConfig?: UplinkEchoConfig;
	}


	/**Elevation angle of the satellite in the sky during a contact. */
	export interface Elevation {
		unit: ElevationUnit;
		value: number;
	}

	export enum ElevationUnit { DEGREE_ANGLE = 0, RADIAN = 1 }


	/**Data describing a contact. */
	export interface ContactData {
		contactId?: string;
		contactStatus?: ContactDataContactStatus;
		endTime?: Date;
		errorMessage?: string;
		groundStation?: string;

		/**Elevation angle of the satellite in the sky during a contact. */
		maximumElevation?: Elevation;
		missionProfileArn?: string;
		postPassEndTime?: Date;
		prePassStartTime?: Date;
		region?: string;
		satelliteArn?: string;
		startTime?: Date;
		tags?: TagsMap;
	}

	export enum ContactDataContactStatus { AVAILABLE = 0, AWS_CANCELLED = 1, CANCELLED = 2, CANCELLING = 3, COMPLETED = 4, FAILED = 5, FAILED_TO_SCHEDULE = 6, PASS = 7, POSTPASS = 8, PREPASS = 9, SCHEDULED = 10, SCHEDULING = 11 }


	/**<p/> */
	export interface CreateConfigRequest {

		/**<p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p> */
		configData: ConfigTypeData;
		name: string;
		tags?: TagsMap;
	}


	/**<p/> */
	export interface CreateDataflowEndpointGroupRequest {
		endpointDetails: Array<EndpointDetails>;
		tags?: TagsMap;
	}


	/**<p/> */
	export interface CreateMissionProfileRequest {
		contactPostPassDurationSeconds?: number;
		contactPrePassDurationSeconds?: number;
		dataflowEdges: Array<DataflowEdge>;
		minimumViableContactDurationSeconds: number;
		name: string;
		tags?: TagsMap;
		trackingConfigArn: string;
	}

	export enum Criticality { PREFERRED = 0, REMOVED = 1, REQUIRED = 2 }


	/**Information about the socket address. */
	export interface SocketAddress {
		name: string;
		port: number;
	}

	export enum EndpointStatus { created = 0, creating = 1, deleted = 2, deleting = 3, failed = 4 }


	/**Information about a dataflow endpoint. */
	export interface DataflowEndpoint {

		/**Information about the socket address. */
		address?: SocketAddress;
		name?: string;
		status?: DataflowEndpointStatus;
	}

	export enum DataflowEndpointStatus { created = 0, creating = 1, deleted = 2, deleting = 3, failed = 4 }


	/**Item in a list of <code>DataflowEndpoint</code> groups. */
	export interface DataflowEndpointListItem {
		dataflowEndpointGroupArn?: string;
		dataflowEndpointGroupId?: string;
	}

	export enum EirpUnits { dBW = 0 }


	/**Information about endpoints. */
	export interface SecurityDetails {
		roleArn: string;
		securityGroupIds: Array<String>;
		subnetIds: Array<String>;
	}

	export enum FrequencyUnits { GHz = 0, MHz = 1, kHz = 2 }


	/**Object that describes the frequency. */
	export interface Frequency {
		units: FrequencyUnits;
		value: number;
	}

	export enum FrequencyUnits { GHz = 0, MHz = 1, kHz = 2 }


	/**Object that describes the frequency bandwidth. */
	export interface FrequencyBandwidth {
		units: FrequencyBandwidthUnits;
		value: number;
	}

	export enum FrequencyBandwidthUnits { GHz = 0, MHz = 1, kHz = 2 }


	/**<p/> */
	export interface GetMinuteUsageRequest {
		month: number;
		year: number;
	}


	/**Information about the ground station data. */
	export interface GroundStationData {
		groundStationId?: string;
		groundStationName?: string;
		region?: string;
	}


	/**<p/> */
	export interface ListContactsRequest {
		endTime: Date;
		groundStation?: string;
		maxResults?: number;
		missionProfileArn?: string;
		nextToken?: string;
		satelliteArn?: string;
		startTime: Date;
		statusList: Array<ContactStatus>;
	}


	/**Item in a list of mission profiles. */
	export interface MissionProfileListItem {
		missionProfileArn?: string;
		missionProfileId?: string;
		name?: string;
		region?: string;
	}

	export enum Polarization { LEFT_HAND = 0, NONE = 1, RIGHT_HAND = 2 }


	/**<p/> */
	export interface ReserveContactRequest {
		endTime: Date;
		groundStation: string;
		missionProfileArn: string;
		satelliteArn: string;
		startTime: Date;
		tags?: TagsMap;
	}


	/**Item in a list of satellites. */
	export interface SatelliteListItem {
		groundStations?: Array<String>;
		noradSatelliteID?: number;
		satelliteArn?: string;
		satelliteId?: string;
	}


	/**<p/> */
	export interface TagResourceRequest {
		tags: TagsMap;
	}


	/**<p/> */
	export interface UpdateConfigRequest {

		/**<p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p> */
		configData: ConfigTypeData;
		name: string;
	}


	/**<p/> */
	export interface UpdateMissionProfileRequest {
		contactPostPassDurationSeconds?: number;
		contactPrePassDurationSeconds?: number;
		dataflowEdges?: Array<DataflowEdge>;
		minimumViableContactDurationSeconds?: number;
		name?: string;
		trackingConfigArn?: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancels a contact with a specified contact ID.
		 * Delete /contact/{contactId}
		 * @param {string} contactId UUID of a contact.
		 * @return {ContactIdResponse} Success
		 */
		CancelContact(contactId: string, headersHandler?: () => HttpHeaders): Observable<ContactIdResponse> {
			return this.http.delete<ContactIdResponse>(this.baseUri + '/contact/' + (contactId == null ? '' : encodeURIComponent(contactId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes an existing contact.
		 * Get /contact/{contactId}
		 * @param {string} contactId UUID of a contact.
		 * @return {DescribeContactResponse} Success
		 */
		DescribeContact(contactId: string, headersHandler?: () => HttpHeaders): Observable<DescribeContactResponse> {
			return this.http.get<DescribeContactResponse>(this.baseUri + '/contact/' + (contactId == null ? '' : encodeURIComponent(contactId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>
		 * Post /config
		 * @return {ConfigIdResponse} Success
		 */
		CreateConfig(requestBody: CreateConfigBody, headersHandler?: () => HttpHeaders): Observable<ConfigIdResponse> {
			return this.http.post<ConfigIdResponse>(this.baseUri + '/config', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of <code>Config</code> objects.
		 * Get /config
		 * @param {number} maxResults Maximum number of <code>Configs</code> returned.
		 * @param {string} nextToken Next token returned in the request of a previous <code>ListConfigs</code> call. Used to get the next page of results.
		 * @return {ListConfigsResponse} Success
		 */
		ListConfigs(maxResults: number, nextToken: string, headersHandler?: () => HttpHeaders): Observable<ListConfigsResponse> {
			return this.http.get<ListConfigsResponse>(this.baseUri + '/config?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>
		 * Post /dataflowEndpointGroup
		 * @return {DataflowEndpointGroupIdResponse} Success
		 */
		CreateDataflowEndpointGroup(requestBody: CreateDataflowEndpointGroupBody, headersHandler?: () => HttpHeaders): Observable<DataflowEndpointGroupIdResponse> {
			return this.http.post<DataflowEndpointGroupIdResponse>(this.baseUri + '/dataflowEndpointGroup', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of <code>DataflowEndpoint</code> groups.
		 * Get /dataflowEndpointGroup
		 * @param {number} maxResults Maximum number of dataflow endpoint groups returned.
		 * @param {string} nextToken Next token returned in the request of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.
		 * @return {ListDataflowEndpointGroupsResponse} Success
		 */
		ListDataflowEndpointGroups(maxResults: number, nextToken: string, headersHandler?: () => HttpHeaders): Observable<ListDataflowEndpointGroupsResponse> {
			return this.http.get<ListDataflowEndpointGroupsResponse>(this.baseUri + '/dataflowEndpointGroup?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
		 * Post /missionprofile
		 * @return {MissionProfileIdResponse} Success
		 */
		CreateMissionProfile(requestBody: CreateMissionProfileBody, headersHandler?: () => HttpHeaders): Observable<MissionProfileIdResponse> {
			return this.http.post<MissionProfileIdResponse>(this.baseUri + '/missionprofile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of mission profiles.
		 * Get /missionprofile
		 * @param {number} maxResults Maximum number of mission profiles returned.
		 * @param {string} nextToken Next token returned in the request of a previous <code>ListMissionProfiles</code> call. Used to get the next page of results.
		 * @return {ListMissionProfilesResponse} Success
		 */
		ListMissionProfiles(maxResults: number, nextToken: string, headersHandler?: () => HttpHeaders): Observable<ListMissionProfilesResponse> {
			return this.http.get<ListMissionProfilesResponse>(this.baseUri + '/missionprofile?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a <code>Config</code>.
		 * Delete /config/{configType}/{configId}
		 * @param {string} configId UUID of a <code>Config</code>.
		 * @param {ConfigIdResponseConfigType} configType Type of a <code>Config</code>.
		 * @return {ConfigIdResponse} Success
		 */
		DeleteConfig(configId: string, configType: ConfigIdResponseConfigType, headersHandler?: () => HttpHeaders): Observable<ConfigIdResponse> {
			return this.http.delete<ConfigIdResponse>(this.baseUri + '/config/' + configType + '/' + (configId == null ? '' : encodeURIComponent(configId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>
		 * Get /config/{configType}/{configId}
		 * @param {string} configId UUID of a <code>Config</code>.
		 * @param {ConfigIdResponseConfigType} configType Type of a <code>Config</code>.
		 * @return {GetConfigResponse} Success
		 */
		GetConfig(configId: string, configType: ConfigIdResponseConfigType, headersHandler?: () => HttpHeaders): Observable<GetConfigResponse> {
			return this.http.get<GetConfigResponse>(this.baseUri + '/config/' + configType + '/' + (configId == null ? '' : encodeURIComponent(configId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>
		 * Put /config/{configType}/{configId}
		 * @param {string} configId UUID of a <code>Config</code>.
		 * @param {ConfigIdResponseConfigType} configType Type of a <code>Config</code>.
		 * @return {ConfigIdResponse} Success
		 */
		UpdateConfig(configId: string, configType: ConfigIdResponseConfigType, requestBody: UpdateConfigBody, headersHandler?: () => HttpHeaders): Observable<ConfigIdResponse> {
			return this.http.put<ConfigIdResponse>(this.baseUri + '/config/' + configType + '/' + (configId == null ? '' : encodeURIComponent(configId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a dataflow endpoint group.
		 * Delete /dataflowEndpointGroup/{dataflowEndpointGroupId}
		 * @param {string} dataflowEndpointGroupId UUID of a dataflow endpoint group.
		 * @return {DataflowEndpointGroupIdResponse} Success
		 */
		DeleteDataflowEndpointGroup(dataflowEndpointGroupId: string, headersHandler?: () => HttpHeaders): Observable<DataflowEndpointGroupIdResponse> {
			return this.http.delete<DataflowEndpointGroupIdResponse>(this.baseUri + '/dataflowEndpointGroup/' + (dataflowEndpointGroupId == null ? '' : encodeURIComponent(dataflowEndpointGroupId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the dataflow endpoint group.
		 * Get /dataflowEndpointGroup/{dataflowEndpointGroupId}
		 * @param {string} dataflowEndpointGroupId UUID of a dataflow endpoint group.
		 * @return {GetDataflowEndpointGroupResponse} Success
		 */
		GetDataflowEndpointGroup(dataflowEndpointGroupId: string, headersHandler?: () => HttpHeaders): Observable<GetDataflowEndpointGroupResponse> {
			return this.http.get<GetDataflowEndpointGroupResponse>(this.baseUri + '/dataflowEndpointGroup/' + (dataflowEndpointGroupId == null ? '' : encodeURIComponent(dataflowEndpointGroupId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a mission profile.
		 * Delete /missionprofile/{missionProfileId}
		 * @param {string} missionProfileId UUID of a mission profile.
		 * @return {MissionProfileIdResponse} Success
		 */
		DeleteMissionProfile(missionProfileId: string, headersHandler?: () => HttpHeaders): Observable<MissionProfileIdResponse> {
			return this.http.delete<MissionProfileIdResponse>(this.baseUri + '/missionprofile/' + (missionProfileId == null ? '' : encodeURIComponent(missionProfileId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a mission profile.
		 * Get /missionprofile/{missionProfileId}
		 * @param {string} missionProfileId UUID of a mission profile.
		 * @return {GetMissionProfileResponse} Success
		 */
		GetMissionProfile(missionProfileId: string, headersHandler?: () => HttpHeaders): Observable<GetMissionProfileResponse> {
			return this.http.get<GetMissionProfileResponse>(this.baseUri + '/missionprofile/' + (missionProfileId == null ? '' : encodeURIComponent(missionProfileId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>
		 * Put /missionprofile/{missionProfileId}
		 * @param {string} missionProfileId UUID of a mission profile.
		 * @return {MissionProfileIdResponse} Success
		 */
		UpdateMissionProfile(missionProfileId: string, requestBody: UpdateMissionProfileBody, headersHandler?: () => HttpHeaders): Observable<MissionProfileIdResponse> {
			return this.http.put<MissionProfileIdResponse>(this.baseUri + '/missionprofile/' + (missionProfileId == null ? '' : encodeURIComponent(missionProfileId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns the number of minutes used by account.
		 * Post /minute-usage
		 * @return {GetMinuteUsageResponse} Success
		 */
		GetMinuteUsage(requestBody: GetMinuteUsageBody, headersHandler?: () => HttpHeaders): Observable<GetMinuteUsageResponse> {
			return this.http.post<GetMinuteUsageResponse>(this.baseUri + '/minute-usage', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a satellite.
		 * Get /satellite/{satelliteId}
		 * @param {string} satelliteId UUID of a satellite.
		 * @return {GetSatelliteResponse} Success
		 */
		GetSatellite(satelliteId: string, headersHandler?: () => HttpHeaders): Observable<GetSatelliteResponse> {
			return this.http.get<GetSatelliteResponse>(this.baseUri + '/satellite/' + (satelliteId == null ? '' : encodeURIComponent(satelliteId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>
		 * Post /contacts
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListContactsResponse} Success
		 */
		ListContacts(maxResults: string, nextToken: string, requestBody: ListContactsBody, headersHandler?: () => HttpHeaders): Observable<ListContactsResponse> {
			return this.http.post<ListContactsResponse>(this.baseUri + '/contacts?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of ground stations.
		 * Get /groundstation
		 * @param {number} maxResults Maximum number of ground stations returned.
		 * @param {string} nextToken Next token that can be supplied in the next call to get the next page of ground stations.
		 * @param {string} satelliteId Satellite ID to retrieve on-boarded ground stations.
		 * @return {ListGroundStationsResponse} Success
		 */
		ListGroundStations(maxResults: number, nextToken: string, satelliteId: string, headersHandler?: () => HttpHeaders): Observable<ListGroundStationsResponse> {
			return this.http.get<ListGroundStationsResponse>(this.baseUri + '/groundstation?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&satelliteId=' + (satelliteId == null ? '' : encodeURIComponent(satelliteId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of satellites.
		 * Get /satellite
		 * @param {number} maxResults Maximum number of satellites returned.
		 * @param {string} nextToken Next token that can be supplied in the next call to get the next page of satellites.
		 * @return {ListSatellitesResponse} Success
		 */
		ListSatellites(maxResults: number, nextToken: string, headersHandler?: () => HttpHeaders): Observable<ListSatellitesResponse> {
			return this.http.get<ListSatellitesResponse>(this.baseUri + '/satellite?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of tags for a specified resource.
		 * Get /tags/{resourceArn}
		 * @param {string} resourceArn ARN of a resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, headersHandler?: () => HttpHeaders): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Assigns a tag to a resource.
		 * Post /tags/{resourceArn}
		 * @param {string} resourceArn ARN of a resource tag.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourceBody, headersHandler?: () => HttpHeaders): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Reserves a contact using specified parameters.
		 * Post /contact
		 * @return {ContactIdResponse} Success
		 */
		ReserveContact(requestBody: ReserveContactBody, headersHandler?: () => HttpHeaders): Observable<ContactIdResponse> {
			return this.http.post<ContactIdResponse>(this.baseUri + '/contact', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deassigns a resource tag.
		 * Delete /tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn ARN of a resource.
		 * @param {Array<String>} tagKeys Keys of a resource tag.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<String>, headersHandler?: () => HttpHeaders): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface CreateConfigBody {

		/**<p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p> */
		configData: string;

		/**
		 * Name of a <code>Config</code>.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^[ a-zA-Z0-9_:-]{1,256}$
		 */
		name: string;

		/**Tags assigned to a <code>Config</code>. */
		tags?: string;
	}

	export interface CreateDataflowEndpointGroupBody {

		/**Endpoint details of each endpoint in the dataflow endpoint group. */
		endpointDetails: Array<EndpointDetails>;

		/**Tags of a dataflow endpoint group. */
		tags?: string;
	}

	export interface CreateMissionProfileBody {

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds?: number;

		/**
		 * Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds?: number;

		/**A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>. */
		dataflowEdges: Array<DataflowEdge>;

		/**
		 * Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		minimumViableContactDurationSeconds: number;

		/**
		 * Name of a mission profile.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^[ a-zA-Z0-9_:-]{1,256}$
		 */
		name: string;

		/**Tags assigned to a mission profile. */
		tags?: string;

		/**ARN of a tracking <code>Config</code>. */
		trackingConfigArn: string;
	}

	export interface UpdateConfigBody {

		/**<p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p> */
		configData: string;

		/**
		 * Name of a <code>Config</code>.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^[ a-zA-Z0-9_:-]{1,256}$
		 */
		name: string;
	}

	export interface UpdateMissionProfileBody {

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPostPassDurationSeconds?: number;

		/**
		 * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		contactPrePassDurationSeconds?: number;

		/**A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>. */
		dataflowEdges?: Array<DataflowEdge>;

		/**
		 * Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
		 * Minimum: 1
		 * Maximum: 21600
		 */
		minimumViableContactDurationSeconds?: number;

		/**
		 * Name of a mission profile.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^[ a-zA-Z0-9_:-]{1,256}$
		 */
		name?: string;

		/**ARN of a tracking <code>Config</code>. */
		trackingConfigArn?: string;
	}

	export interface GetMinuteUsageBody {

		/**The month being requested, with a value of 1-12. */
		month: number;

		/**The year being requested, in the format of YYYY. */
		year: number;
	}

	export interface ListContactsBody {

		/**End time of a contact. */
		endTime: Date;

		/**Name of a ground station. */
		groundStation?: string;

		/**Maximum number of contacts returned. */
		maxResults?: number;

		/**ARN of a mission profile. */
		missionProfileArn?: string;

		/**Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results. */
		nextToken?: string;

		/**ARN of a satellite. */
		satelliteArn?: string;

		/**Start time of a contact. */
		startTime: Date;

		/**Status of a contact reservation. */
		statusList: Array<ContactStatus>;
	}

	export interface TagResourceBody {

		/**Tags assigned to a resource. */
		tags: string;
	}

	export interface ReserveContactBody {

		/**End time of a contact. */
		endTime: Date;

		/**Name of a ground station. */
		groundStation: string;

		/**ARN of a mission profile. */
		missionProfileArn: string;

		/**ARN of a satellite */
		satelliteArn: string;

		/**Start time of a contact. */
		startTime: Date;

		/**Tags assigned to a contact. */
		tags?: string;
	}

}

