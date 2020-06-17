import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface CreateSignalingChannelOutput {
		ChannelARN?: string;
	}


	/**A key and value pair that is associated with the specified signaling channel. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface CreateStreamOutput {
		StreamARN?: string;
	}

	export interface DescribeSignalingChannelOutput {

		/**A structure that encapsulates a signaling channel's metadata and properties. */
		ChannelInfo?: ChannelInfo;
	}

	export interface DescribeStreamOutput {

		/**An object describing a Kinesis video stream. */
		StreamInfo?: StreamInfo;
	}

	export interface GetDataEndpointOutput {
		DataEndpoint?: string;
	}

	export interface GetSignalingChannelEndpointOutput {
		ResourceEndpointList?: Array<ResourceEndpointListItem>;
	}

	export enum ChannelRole { MASTER = 0, VIEWER = 1 }

	export interface ListSignalingChannelsOutput {
		ChannelInfoList?: Array<ChannelInfo>;
		NextToken?: string;
	}

	export enum ComparisonOperator { BEGINS_WITH = 0 }

	export interface ListStreamsOutput {
		StreamInfoList?: Array<StreamInfo>;
		NextToken?: string;
	}

	export interface ListTagsForResourceOutput {
		NextToken?: string;
		Tags?: ResourceTags;
	}

	export interface ListTagsForStreamOutput {
		NextToken?: string;
		Tags?: ResourceTags;
	}

	export enum APIName { PUT_MEDIA = 0, GET_MEDIA = 1, LIST_FRAGMENTS = 2, GET_MEDIA_FOR_FRAGMENT_LIST = 3, GET_HLS_STREAMING_SESSION_URL = 4, GET_DASH_STREAMING_SESSION_URL = 5, GET_CLIP = 6 }

	export enum ChannelType { SINGLE_MASTER = 0 }

	export enum Status { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3 }


	/**A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
	export interface SingleMasterConfiguration {
		MessageTtlSeconds?: number;
	}


	/**A structure that encapsulates a signaling channel's metadata and properties. */
	export interface ChannelInfo {
		ChannelName?: string;
		ChannelARN?: string;
		ChannelType?: ChannelInfoChannelType;
		ChannelStatus?: ChannelInfoChannelStatus;
		CreationTime?: Date;

		/**A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: SingleMasterConfiguration;
		Version?: string;
	}

	export enum ChannelInfoChannelType { SINGLE_MASTER = 0 }

	export enum ChannelInfoChannelStatus { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3 }


	/**An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>. */
	export interface ChannelNameCondition {
		ComparisonOperator?: ChannelNameConditionComparisonOperator;
		ComparisonValue?: string;
	}

	export enum ChannelNameConditionComparisonOperator { BEGINS_WITH = 0 }

	export enum ChannelProtocol { WSS = 0, HTTPS = 1 }

	export interface CreateSignalingChannelInput {
		ChannelName: string;
		ChannelType?: CreateSignalingChannelInputChannelType;

		/**A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: SingleMasterConfiguration;
		Tags?: Array<Tag>;
	}

	export enum CreateSignalingChannelInputChannelType { SINGLE_MASTER = 0 }

	export interface CreateStreamInput {
		DeviceName?: string;
		StreamName: string;
		MediaType?: string;
		KmsKeyId?: string;
		DataRetentionInHours?: number;
		Tags?: ResourceTags;
	}

	export interface DeleteSignalingChannelInput {
		ChannelARN: string;
		CurrentVersion?: string;
	}

	export interface DeleteStreamInput {
		StreamARN: string;
		CurrentVersion?: string;
	}

	export interface DescribeSignalingChannelInput {
		ChannelName?: string;
		ChannelARN?: string;
	}

	export interface DescribeStreamInput {
		StreamName?: string;
		StreamARN?: string;
	}


	/**An object describing a Kinesis video stream. */
	export interface StreamInfo {
		DeviceName?: string;
		StreamName?: string;
		StreamARN?: string;
		MediaType?: string;
		KmsKeyId?: string;
		Version?: string;
		Status?: StreamInfoStatus;
		CreationTime?: Date;
		DataRetentionInHours?: number;
	}

	export enum StreamInfoStatus { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3 }

	export interface GetDataEndpointInput {
		StreamName?: string;
		StreamARN?: string;
		APIName: GetDataEndpointInputAPIName;
	}

	export enum GetDataEndpointInputAPIName { PUT_MEDIA = 0, GET_MEDIA = 1, LIST_FRAGMENTS = 2, GET_MEDIA_FOR_FRAGMENT_LIST = 3, GET_HLS_STREAMING_SESSION_URL = 4, GET_DASH_STREAMING_SESSION_URL = 5, GET_CLIP = 6 }


	/**An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type.  */
	export interface SingleMasterChannelEndpointConfiguration {
		Protocols?: Array<ChannelProtocol>;
		Role?: SingleMasterChannelEndpointConfigurationRole;
	}

	export enum SingleMasterChannelEndpointConfigurationRole { MASTER = 0, VIEWER = 1 }

	export interface GetSignalingChannelEndpointInput {
		ChannelARN: string;

		/**An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterChannelEndpointConfiguration?: SingleMasterChannelEndpointConfiguration;
	}

	export interface ListSignalingChannelsInput {
		MaxResults?: number;
		NextToken?: string;

		/**An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>. */
		ChannelNameCondition?: ChannelNameCondition;
	}


	/**Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.  */
	export interface StreamNameCondition {
		ComparisonOperator?: StreamNameConditionComparisonOperator;
		ComparisonValue?: string;
	}

	export enum StreamNameConditionComparisonOperator { BEGINS_WITH = 0 }

	export interface ListStreamsInput {
		MaxResults?: number;
		NextToken?: string;

		/**Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. */
		StreamNameCondition?: StreamNameCondition;
	}

	export interface ListTagsForResourceInput {
		NextToken?: string;
		ResourceARN: string;
	}

	export interface ListTagsForStreamInput {
		NextToken?: string;
		StreamARN?: string;
		StreamName?: string;
	}


	/**An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API. */
	export interface ResourceEndpointListItem {
		Protocol?: ResourceEndpointListItemProtocol;
		ResourceEndpoint?: string;
	}

	export enum ResourceEndpointListItemProtocol { WSS = 0, HTTPS = 1 }

	export interface TagResourceInput {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface TagStreamInput {
		StreamARN?: string;
		StreamName?: string;
		Tags: ResourceTags;
	}

	export interface UntagResourceInput {
		ResourceARN: string;
		TagKeyList: Array<TagKey>;
	}

	export interface UntagStreamInput {
		StreamARN?: string;
		StreamName?: string;
		TagKeyList: Array<TagKey>;
	}

	export enum UpdateDataRetentionOperation { INCREASE_DATA_RETENTION = 0, DECREASE_DATA_RETENTION = 1 }

	export interface UpdateDataRetentionInput {
		StreamName?: string;
		StreamARN?: string;
		CurrentVersion: string;
		Operation: UpdateDataRetentionInputOperation;
		DataRetentionChangeInHours: number;
	}

	export enum UpdateDataRetentionInputOperation { INCREASE_DATA_RETENTION = 0, DECREASE_DATA_RETENTION = 1 }

	export interface UpdateSignalingChannelInput {
		ChannelARN: string;
		CurrentVersion: string;

		/**A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: SingleMasterConfiguration;
	}

	export interface UpdateStreamInput {
		StreamName?: string;
		StreamARN?: string;
		CurrentVersion: string;
		DeviceName?: string;
		MediaType?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Creates a signaling channel. </p> <p> <code>CreateSignalingChannel</code> is an asynchronous operation.</p>
		 * Post /createSignalingChannel
		 * @return {CreateSignalingChannelOutput} Success
		 */
		CreateSignalingChannel(requestBody: CreateSignalingChannelBody, headersHandler?: () => {[header: string]: string}): Promise<CreateSignalingChannelOutput> {
			return Axios.post<CreateSignalingChannelOutput>(this.baseUri + '/createSignalingChannel', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Creates a new Kinesis video stream. </p> <p>When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. </p> <p> <code>CreateStream</code> is an asynchronous operation.</p> <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p> <p>You must have permissions for the <code>KinesisVideo:CreateStream</code> action.</p>
		 * Post /createStream
		 * @return {CreateStreamOutput} Success
		 */
		CreateStream(requestBody: CreateStreamBody, headersHandler?: () => {[header: string]: string}): Promise<CreateStreamOutput> {
			return Axios.post<CreateStreamOutput>(this.baseUri + '/createStream', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.
		 * Post /deleteSignalingChannel
		 * @return {DeleteSignalingChannelOutput} Success
		 */
		DeleteSignalingChannel(requestBody: DeleteSignalingChannelBody, headersHandler?: () => {[header: string]: string}): Promise<DeleteSignalingChannelOutput> {
			return Axios.post<DeleteSignalingChannelOutput>(this.baseUri + '/deleteSignalingChannel', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Deletes a Kinesis video stream and the data contained in the stream. </p> <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p> <p> </p> <p> To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code> action.</p>
		 * Post /deleteStream
		 * @return {DeleteStreamOutput} Success
		 */
		DeleteStream(requestBody: DeleteStreamBody, headersHandler?: () => {[header: string]: string}): Promise<DeleteStreamOutput> {
			return Axios.post<DeleteStreamOutput>(this.baseUri + '/deleteStream', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.
		 * Post /describeSignalingChannel
		 * @return {DescribeSignalingChannelOutput} Success
		 */
		DescribeSignalingChannel(requestBody: DescribeSignalingChannelBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeSignalingChannelOutput> {
			return Axios.post<DescribeSignalingChannelOutput>(this.baseUri + '/describeSignalingChannel', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns the most current information about the specified stream. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Post /describeStream
		 * @return {DescribeStreamOutput} Success
		 */
		DescribeStream(requestBody: DescribeStreamBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeStreamOutput> {
			return Axios.post<DescribeStreamOutput>(this.baseUri + '/describeStream', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write to it (using the <code>PutMedia</code> operation). </p> <note> <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p> </note> <p>In the request, specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>
		 * Post /getDataEndpoint
		 * @return {GetDataEndpointOutput} Success
		 */
		GetDataEndpoint(requestBody: GetDataEndpointBody, headersHandler?: () => {[header: string]: string}): Promise<GetDataEndpointOutput> {
			return Axios.post<GetDataEndpointOutput>(this.baseUri + '/getDataEndpoint', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter, which consists of the <code>Protocols</code> and <code>Role</code> properties.</p> <p> <code>Protocols</code> is used to determine the communication mechanism. For example, if you specify <code>WSS</code> as the protocol, this API produces a secure websocket endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS endpoint. </p> <p> <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A <code>VIEWER</code> role results in this API generating an endpoint that a client can use to communicate only with a <code>MASTER</code>. </p>
		 * Post /getSignalingChannelEndpoint
		 * @return {GetSignalingChannelEndpointOutput} Success
		 */
		GetSignalingChannelEndpoint(requestBody: GetSignalingChannelEndpointBody, headersHandler?: () => {[header: string]: string}): Promise<GetSignalingChannelEndpointOutput> {
			return Axios.post<GetSignalingChannelEndpointOutput>(this.baseUri + '/getSignalingChannelEndpoint', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns an array of <code>ChannelInfo</code> objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a <code>ChannelNameCondition</code>.
		 * Post /listSignalingChannels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSignalingChannelsOutput} Success
		 */
		ListSignalingChannels(MaxResults: string, NextToken: string, requestBody: ListSignalingChannelsBody, headersHandler?: () => {[header: string]: string}): Promise<ListSignalingChannelsOutput> {
			return Axios.post<ListSignalingChannelsOutput>(this.baseUri + '/listSignalingChannels?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns an array of <code>StreamInfo</code> objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>.
		 * Post /listStreams
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListStreamsOutput} Success
		 */
		ListStreams(MaxResults: string, NextToken: string, requestBody: ListStreamsBody, headersHandler?: () => {[header: string]: string}): Promise<ListStreamsOutput> {
			return Axios.post<ListStreamsOutput>(this.baseUri + '/listStreams?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns a list of tags associated with the specified signaling channel.
		 * Post /ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceBody, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceOutput> {
			return Axios.post<ListTagsForResourceOutput>(this.baseUri + '/ListTagsForResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Returns a list of tags associated with the specified stream.</p> <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
		 * Post /listTagsForStream
		 * @return {ListTagsForStreamOutput} Success
		 */
		ListTagsForStream(requestBody: ListTagsForStreamBody, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForStreamOutput> {
			return Axios.post<ListTagsForStreamOutput>(this.baseUri + '/listTagsForStream', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Adds one or more tags to a signaling channel. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>.
		 * Post /TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceOutput> {
			return Axios.post<TagResourceOutput>(this.baseUri + '/TagResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>Kinesis video streams support up to 50 tags.</p>
		 * Post /tagStream
		 * @return {TagStreamOutput} Success
		 */
		TagStream(requestBody: TagStreamBody, headersHandler?: () => {[header: string]: string}): Promise<TagStreamOutput> {
			return Axios.post<TagStreamOutput>(this.baseUri + '/tagStream', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.
		 * Post /UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceOutput> {
			return Axios.post<UntagResourceOutput>(this.baseUri + '/UntagResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</p> <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>
		 * Post /untagStream
		 * @return {UntagStreamOutput} Success
		 */
		UntagStream(requestBody: UntagStreamBody, headersHandler?: () => {[header: string]: string}): Promise<UntagStreamOutput> {
			return Axios.post<UntagStreamOutput>(this.baseUri + '/untagStream', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p> Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the <code>Operation</code> parameter in the request body. In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p> <note> <p>The retention period that you specify replaces the current value.</p> </note> <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p> <p>Changing the data retention period affects the data in the stream as follows:</p> <ul> <li> <p>If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.</p> </li> <li> <p>If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.</p> </li> </ul>
		 * Post /updateDataRetention
		 * @return {UpdateDataRetentionOutput} Success
		 */
		UpdateDataRetention(requestBody: UpdateDataRetentionBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateDataRetentionOutput> {
			return Axios.post<UpdateDataRetentionOutput>(this.baseUri + '/updateDataRetention', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. </p> <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous <code>MessageTtlSeconds</code> value.</p>
		 * Post /updateSignalingChannel
		 * @return {UpdateSignalingChannelOutput} Success
		 */
		UpdateSignalingChannel(requestBody: UpdateSignalingChannelBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateSignalingChannelOutput> {
			return Axios.post<UpdateSignalingChannelOutput>(this.baseUri + '/updateSignalingChannel', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Updates stream metadata, such as the device name and media type.</p> <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p> <p>To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p> <code>UpdateStream</code> is an asynchronous operation, and takes time to complete.</p>
		 * Post /updateStream
		 * @return {UpdateStreamOutput} Success
		 */
		UpdateStream(requestBody: UpdateStreamBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateStreamOutput> {
			return Axios.post<UpdateStreamOutput>(this.baseUri + '/updateStream', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

	export interface CreateSignalingChannelBody {

		/**
		 * A name for the signaling channel that you are creating. It must be unique for each AWS account and AWS Region.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ChannelName: string;

		/**A type of the signaling channel that you are creating. Currently, <code>SINGLE_MASTER</code> is the only supported channel type. */
		ChannelType?: CreateSignalingChannelBodyChannelType;

		/**A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: string;

		/**
		 * A set of tags (key-value pairs) that you want to associate with this channel.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}

	export enum CreateSignalingChannelBodyChannelType { SINGLE_MASTER = 0 }

	export interface CreateStreamBody {

		/**
		 * <p>The name of the device that is writing to the stream. </p> <note> <p>In the current implementation, Kinesis Video Streams does not use this name.</p> </note>
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		DeviceName?: string;

		/**
		 * <p>A name for the stream that you are creating.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName: string;

		/**
		 * <p>The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a> for guidelines.</p> <p>Example valid values include "video/h264" and "video/h264,audio/aac".</p> <p>This parameter is optional; the default value is <code>null</code> (or empty in JSON).</p>
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [\w\-\.\+]+/[\w\-\.\+]+(,[\w\-\.\+]+/[\w\-\.\+]+)*
		 */
		MediaType?: string;

		/**
		 * <p>The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data.</p> <p>If no key ID is specified, the default, Kinesis Video-managed key (<code>aws/kinesisvideo</code>) is used.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>. </p>
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: .+
		 */
		KmsKeyId?: string;

		/**
		 * <p>The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.</p> <p>The default value is 0, indicating that the stream does not persist data.</p> <p>When the <code>DataRetentionInHours</code> value is 0, consumers can still consume the fragments that remain in the service host buffer, which has a retention time limit of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the buffer when either limit is reached.</p>
		 * Minimum: 0
		 */
		DataRetentionInHours?: number;

		/**A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional). */
		Tags?: string;
	}

	export interface DeleteSignalingChannelBody {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel that you want to delete.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ChannelARN: string;

		/**
		 * The current version of the signaling channel that you want to delete. You can obtain the current version by invoking the <code>DescribeSignalingChannel</code> or <code>ListSignalingChannels</code> API operations.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9]+
		 */
		CurrentVersion?: string;
	}

	export interface DeleteStreamBody {

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to delete.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN: string;

		/**
		 * <p>Optional: The version of the stream that you want to delete. </p> <p>Specify the version as a safeguard to ensure that your are deleting the correct stream. To get the stream version, use the <code>DescribeStream</code> API.</p> <p>If not specified, only the <code>CreationTime</code> is checked before deleting the stream.</p>
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9]+
		 */
		CurrentVersion?: string;
	}

	export interface DescribeSignalingChannelBody {

		/**
		 * The name of the signaling channel that you want to describe.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ChannelName?: string;

		/**
		 * The ARN of the signaling channel that you want to describe.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ChannelARN?: string;
	}

	export interface DescribeStreamBody {

		/**
		 * The name of the stream.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string;

		/**
		 * The Amazon Resource Name (ARN) of the stream.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string;
	}

	export interface GetDataEndpointBody {

		/**
		 * The name of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamARN</code> in the request.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string;

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamName</code> in the request.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string;

		/**The name of the API action for which to get an endpoint. */
		APIName: GetDataEndpointBodyAPIName;
	}

	export enum GetDataEndpointBodyAPIName { PUT_MEDIA = 0, GET_MEDIA = 1, LIST_FRAGMENTS = 2, GET_MEDIA_FOR_FRAGMENT_LIST = 3, GET_HLS_STREAMING_SESSION_URL = 4, GET_DASH_STREAMING_SESSION_URL = 5, GET_CLIP = 6 }

	export interface GetSignalingChannelEndpointBody {

		/**
		 * The Amazon Resource Name (ARN) of the signalling channel for which you want to get an endpoint.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ChannelARN: string;

		/**An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterChannelEndpointConfiguration?: string;
	}

	export interface ListSignalingChannelsBody {

		/**
		 * The maximum number of channels to return in the response. The default is 500.
		 * Minimum: 1
		 * Maximum: 10000
		 */
		MaxResults?: number;

		/**
		 * If you specify this parameter, when the result of a <code>ListSignalingChannels</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of channels, provide this token in your next request.
		 * Max length: 512
		 * Min length: 0
		 * Pattern: [a-zA-Z0-9+/=]*
		 */
		NextToken?: string;

		/**An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>. */
		ChannelNameCondition?: string;
	}

	export interface ListStreamsBody {

		/**
		 * The maximum number of streams to return in the response. The default is 10,000.
		 * Minimum: 1
		 * Maximum: 10000
		 */
		MaxResults?: number;

		/**
		 * If you specify this parameter, when the result of a <code>ListStreams</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of streams, provide this token in your next request.
		 * Max length: 512
		 * Min length: 0
		 * Pattern: [a-zA-Z0-9+/=]*
		 */
		NextToken?: string;

		/**Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. */
		StreamNameCondition?: string;
	}

	export interface ListTagsForResourceBody {

		/**
		 * If you specify this parameter and the result of a <code>ListTagsForResource</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
		 * Max length: 512
		 * Min length: 0
		 * Pattern: [a-zA-Z0-9+/=]*
		 */
		NextToken?: string;

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel for which you want to list tags.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ResourceARN: string;
	}

	export interface ListTagsForStreamBody {

		/**
		 * If you specify this parameter and the result of a <code>ListTagsForStream</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
		 * Max length: 512
		 * Min length: 0
		 * Pattern: [a-zA-Z0-9+/=]*
		 */
		NextToken?: string;

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to list tags for.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string;

		/**
		 * The name of the stream that you want to list tags for.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string;
	}

	export interface TagResourceBody {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel to which you want to add tags.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ResourceARN: string;

		/**
		 * A list of tags to associate with the specified signaling channel. Each tag is a key-value pair.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}

	export interface TagStreamBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags to.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string;

		/**
		 * The name of the stream that you want to add the tag or tags to.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string;

		/**A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional). */
		Tags: string;
	}

	export interface UntagResourceBody {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel from which you want to remove tags.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ResourceARN: string;

		/**
		 * A list of the keys of the tags that you want to remove.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeyList: Array<TagKey>;
	}

	export interface UntagStreamBody {

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to remove tags from.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string;

		/**
		 * The name of the stream that you want to remove tags from.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string;

		/**
		 * A list of the keys of the tags that you want to remove.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeyList: Array<TagKey>;
	}

	export interface UpdateDataRetentionBody {

		/**
		 * The name of the stream whose retention period you want to change.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string;

		/**
		 * The Amazon Resource Name (ARN) of the stream whose retention period you want to change.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string;

		/**
		 * The version of the stream whose retention period you want to change. To get the version, call either the <code>DescribeStream</code> or the <code>ListStreams</code> API.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9]+
		 */
		CurrentVersion: string;

		/**Indicates whether you want to increase or decrease the retention period. */
		Operation: UpdateDataRetentionBodyOperation;

		/**
		 * The retention period, in hours. The value you specify replaces the current value. The maximum value for this parameter is 87600 (ten years).
		 * Minimum: 1
		 */
		DataRetentionChangeInHours: number;
	}

	export enum UpdateDataRetentionBodyOperation { INCREASE_DATA_RETENTION = 0, DECREASE_DATA_RETENTION = 1 }

	export interface UpdateSignalingChannelBody {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel that you want to update.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ChannelARN: string;

		/**
		 * The current version of the signaling channel that you want to update.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9]+
		 */
		CurrentVersion: string;

		/**A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: string;
	}

	export interface UpdateStreamBody {

		/**
		 * <p>The name of the stream whose metadata you want to update.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string;

		/**
		 * The ARN of the stream whose metadata you want to update.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string;

		/**
		 * The version of the stream whose metadata you want to update.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9]+
		 */
		CurrentVersion: string;

		/**
		 * <p>The name of the device that is writing to the stream. </p> <note> <p> In the current implementation, Kinesis Video Streams does not use this name. </p> </note>
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		DeviceName?: string;

		/**
		 * <p>The stream's media type. Use <code>MediaType</code> to specify the type of content that the stream contains to the consumers of the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a>.</p> <p>To play video on the console, you must specify the correct video type. For example, if the video in the stream is H.264, specify <code>video/h264</code> as the <code>MediaType</code>.</p>
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [\w\-\.\+]+/[\w\-\.\+]+(,[\w\-\.\+]+/[\w\-\.\+]+)*
		 */
		MediaType?: string;
	}

}

