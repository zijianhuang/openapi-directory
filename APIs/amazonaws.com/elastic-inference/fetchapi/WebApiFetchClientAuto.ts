export namespace My_Demo_Client {
	export interface DescribeAcceleratorOfferingsResponse {
		acceleratorTypeOfferings?: Array<AcceleratorTypeOffering>;
	}

	export interface DescribeAcceleratorTypesResponse {
		acceleratorTypes?: Array<AcceleratorType>;
	}

	export interface DescribeAcceleratorsResponse {
		acceleratorSet?: Array<ElasticInferenceAccelerator>;
		nextToken?: string;
	}


	/** A filter expression for the Elastic Inference Accelerator list.  */
	export interface Filter {
		name?: string;
		values?: Array<String>;
	}

	export interface ListTagsForResourceResult {
		tags?: TagMap;
	}


	/** The memory information of an Elastic Inference Accelerator type.  */
	export interface MemoryInfo {
		sizeInMiB?: number;
	}


	/** The details of an Elastic Inference Accelerator type.  */
	export interface AcceleratorType {
		acceleratorTypeName?: string;

		/**The memory information of an Elastic Inference Accelerator type. */
		memoryInfo?: MemoryInfo;
		throughputInfo?: Array<KeyValuePair>;
	}

	export enum LocationType { region = 0, availability-zone = 1, availability-zone-id = 2 }


	/** The offering for an Elastic Inference Accelerator type.  */
	export interface AcceleratorTypeOffering {
		acceleratorType?: string;
		locationType?: AcceleratorTypeOfferingLocationType;
		location?: string;
	}

	export enum AcceleratorTypeOfferingLocationType { region = 0, availability-zone = 1, availability-zone-id = 2 }

	export interface DescribeAcceleratorOfferingsRequest {
		locationType: DescribeAcceleratorOfferingsRequestLocationType;
		acceleratorTypes?: Array<AcceleratorTypeName>;
	}

	export enum DescribeAcceleratorOfferingsRequestLocationType { region = 0, availability-zone = 1, availability-zone-id = 2 }

	export interface DescribeAcceleratorsRequest {
		acceleratorIds?: Array<AcceleratorId>;
		filters?: Array<Filter>;
		maxResults?: number;
		nextToken?: string;
	}


	/** The health details of an Elastic Inference Accelerator.  */
	export interface ElasticInferenceAcceleratorHealth {
		status?: string;
	}


	/** The details of an Elastic Inference Accelerator.  */
	export interface ElasticInferenceAccelerator {

		/**The health details of an Elastic Inference Accelerator. */
		acceleratorHealth?: ElasticInferenceAcceleratorHealth;
		acceleratorType?: string;
		acceleratorId?: string;
		availabilityZone?: string;
		attachedResource?: string;
	}


	/** A throughput entry for an Elastic Inference Accelerator type.  */
	export interface KeyValuePair {
		key?: string;
		value?: number;
	}

	export interface TagResourceRequest {
		tags: TagMap;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Describes the locations in which a given accelerator type or set of types is present in a given region.
		 * Post /describe-accelerator-offerings
		 * @return {DescribeAcceleratorOfferingsResponse} Success
		 */
		DescribeAcceleratorOfferings(requestBody: DescribeAcceleratorOfferingsBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeAcceleratorOfferingsResponse> {
			return fetch(this.baseUri + '/describe-accelerator-offerings', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput.
		 * Get /describe-accelerator-types
		 * @return {DescribeAcceleratorTypesResponse} Success
		 */
		DescribeAcceleratorTypes(headersHandler?: () => {[header: string]: string}): Promise<DescribeAcceleratorTypesResponse> {
			return fetch(this.baseUri + '/describe-accelerator-types', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Describes information over a provided set of accelerators belonging to an account.
		 * Post /describe-accelerators
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeAcceleratorsResponse} Success
		 */
		DescribeAccelerators(maxResults: string, nextToken: string, requestBody: DescribeAcceleratorsBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeAcceleratorsResponse> {
			return fetch(this.baseUri + '/describe-accelerators?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns all tags of an Elastic Inference Accelerator.
		 * Get /tags/{resourceArn}
		 * @param {string} resourceArn  The ARN of the Elastic Inference Accelerator to list the tags for. 
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(resourceArn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResult> {
			return fetch(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Adds the specified tags to an Elastic Inference Accelerator.
		 * Post /tags/{resourceArn}
		 * @param {string} resourceArn  The ARN of the Elastic Inference Accelerator to tag. 
		 * @return {TagResourceResult} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResult> {
			return fetch(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes the specified tags from an Elastic Inference Accelerator.
		 * Delete /tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn  The ARN of the Elastic Inference Accelerator to untag. 
		 * @param {Array<TagKey>} tagKeys  The list of tags to remove from the Elastic Inference Accelerator. 
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<TagKey>, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResult> {
			return fetch(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}
	}

	export interface DescribeAcceleratorOfferingsBody {

		/**
		 * The location type that you want to describe accelerator type offerings for. It can assume the following values: region: will return the accelerator type offering at the regional level. availability-zone: will return the accelerator type offering at the availability zone level. availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id.
		 * Max length: 256
		 * Min length: 1
		 */
		locationType: DescribeAcceleratorOfferingsBodyLocationType;

		/**
		 * The list of accelerator types to describe.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		acceleratorTypes?: Array<AcceleratorTypeName>;
	}

	export enum DescribeAcceleratorOfferingsBodyLocationType { region = 0, availability-zone = 1, availability-zone-id = 2 }

	export interface DescribeAcceleratorsBody {

		/**
		 * The IDs of the accelerators to describe.
		 * Minimum items: 0
		 * Maximum items: 1000
		 */
		acceleratorIds?: Array<AcceleratorId>;

		/**
		 * One or more filters. Filter names and values are case-sensitive. Valid filter names are: accelerator-types: can provide a list of accelerator type names to filter for. instance-id: can provide a list of EC2 instance ids to filter for.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		filters?: Array<Filter>;

		/**
		 * The total number of items to return in the command's output. If the total number of items available is more than the value specified, a NextToken is provided in the command's output. To resume pagination, provide the NextToken value in the starting-token argument of a subsequent command. Do not use the NextToken response element directly outside of the AWS CLI.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxResults?: number;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^[A-Za-z0-9+/]+={0,2}$
		 */
		nextToken?: string;
	}

	export interface TagResourceBody {

		/**The tags to add to the Elastic Inference Accelerator. */
		tags: string;
	}

}

