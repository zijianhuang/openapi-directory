export namespace My_Demo_Client {
	export interface AddTagsToResourceResponse {
		Status: string;
	}

	export interface AddTagsToResourceRequest {
		ResourceArn: string;
		TagList: Array<Tag>;
	}


	/**Indicates that an exception occurred in the AWS CloudHSM service. */
	export interface CloudHsmServiceException {
		message?: string;
		retryable?: boolean;
	}


	/**Contains the output of the <a>CreateHAPartitionGroup</a> action. */
	export interface CreateHapgResponse {
		HapgArn?: string;
	}


	/**Contains the inputs for the <a>CreateHapgRequest</a> action. */
	export interface CreateHapgRequest {
		Label: string;
	}


	/**Contains the output of the <code>CreateHsm</code> operation. */
	export interface CreateHsmResponse {

		/**
		 * An ARN that identifies an HSM.
		 * Pattern: arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}
		 */
		HsmArn?: string;
	}


	/**Contains the inputs for the <code>CreateHsm</code> operation. */
	export interface CreateHsmRequest {
		SubnetId: string;
		SshKey: string;
		EniIp?: string;
		IamRoleArn: string;
		ExternalId?: string;

		/**<p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul> */
		SubscriptionType: CreateHsmRequestSubscriptionType;
		ClientToken?: string;
		SyslogIp?: string;
	}

	export enum CreateHsmRequestSubscriptionType { PRODUCTION = 0 }


	/**Contains the output of the <a>CreateLunaClient</a> action. */
	export interface CreateLunaClientResponse {
		ClientArn?: string;
	}


	/**Contains the inputs for the <a>CreateLunaClient</a> action. */
	export interface CreateLunaClientRequest {
		Label?: string;
		Certificate: string;
	}


	/**Contains the output of the <a>DeleteHapg</a> action. */
	export interface DeleteHapgResponse {
		Status: string;
	}


	/**Contains the inputs for the <a>DeleteHapg</a> action. */
	export interface DeleteHapgRequest {
		HapgArn: string;
	}


	/**Contains the output of the <a>DeleteHsm</a> operation. */
	export interface DeleteHsmResponse {
		Status: string;
	}


	/**Contains the inputs for the <a>DeleteHsm</a> operation. */
	export interface DeleteHsmRequest {

		/**
		 * An ARN that identifies an HSM.
		 * Pattern: arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}
		 */
		HsmArn: string;
	}

	export interface DeleteLunaClientResponse {
		Status: string;
	}

	export interface DeleteLunaClientRequest {
		ClientArn: string;
	}


	/**Contains the output of the <a>DescribeHapg</a> action. */
	export interface DescribeHapgResponse {
		HapgArn?: string;
		HapgSerial?: string;

		/**Contains a list of ARNs that identify the HSMs. */
		HsmsLastActionFailed?: Array<HsmArn>;

		/**Contains a list of ARNs that identify the HSMs. */
		HsmsPendingDeletion?: Array<HsmArn>;

		/**Contains a list of ARNs that identify the HSMs. */
		HsmsPendingRegistration?: Array<HsmArn>;
		Label?: string;
		LastModifiedTimestamp?: string;
		PartitionSerialList?: Array<PartitionSerial>;
		State?: DescribeHapgResponseState;
	}

	export enum DescribeHapgResponseState { READY = 0, UPDATING = 1, DEGRADED = 2 }


	/**Contains the inputs for the <a>DescribeHapg</a> action. */
	export interface DescribeHapgRequest {
		HapgArn: string;
	}


	/**Contains the output of the <a>DescribeHsm</a> operation. */
	export interface DescribeHsmResponse {

		/**
		 * An ARN that identifies an HSM.
		 * Pattern: arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}
		 */
		HsmArn?: string;
		Status?: DescribeHsmResponseStatus;
		StatusDetails?: string;
		AvailabilityZone?: string;
		EniId?: string;
		EniIp?: string;

		/**<p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul> */
		SubscriptionType?: DescribeHsmResponseSubscriptionType;
		SubscriptionStartDate?: string;
		SubscriptionEndDate?: string;
		VpcId?: string;
		SubnetId?: string;
		IamRoleArn?: string;
		SerialNumber?: string;
		VendorName?: string;
		HsmType?: string;
		SoftwareVersion?: string;
		SshPublicKey?: string;
		SshKeyLastUpdated?: string;
		ServerCertUri?: string;
		ServerCertLastUpdated?: string;
		Partitions?: Array<PartitionArn>;
	}

	export enum DescribeHsmResponseStatus { PENDING = 0, RUNNING = 1, UPDATING = 2, SUSPENDED = 3, TERMINATING = 4, TERMINATED = 5, DEGRADED = 6 }

	export enum DescribeHsmResponseSubscriptionType { PRODUCTION = 0 }


	/**Contains the inputs for the <a>DescribeHsm</a> operation. */
	export interface DescribeHsmRequest {

		/**
		 * An ARN that identifies an HSM.
		 * Pattern: arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}
		 */
		HsmArn?: string;
		HsmSerialNumber?: string;
	}

	export interface DescribeLunaClientResponse {
		ClientArn?: string;
		Certificate?: string;
		CertificateFingerprint?: string;
		LastModifiedTimestamp?: string;
		Label?: string;
	}

	export interface DescribeLunaClientRequest {
		ClientArn?: string;
		CertificateFingerprint?: string;
	}

	export interface GetConfigResponse {
		ConfigType?: string;
		ConfigFile?: string;
		ConfigCred?: string;
	}

	export interface GetConfigRequest {
		ClientArn: string;
		ClientVersion: GetConfigRequestClientVersion;
		HapgList: Array<HapgArn>;
	}

	export enum GetConfigRequestClientVersion { 5.1 = 0, 5.3 = 1 }

	export interface ListAvailableZonesResponse {
		AZList?: Array<AZ>;
	}

	export interface ListHapgsResponse {
		HapgList: Array<HapgArn>;
		NextToken?: string;
	}

	export interface ListHapgsRequest {
		NextToken?: string;
	}


	/**Contains the output of the <code>ListHsms</code> operation. */
	export interface ListHsmsResponse {

		/**Contains a list of ARNs that identify the HSMs. */
		HsmList?: Array<HsmArn>;
		NextToken?: string;
	}

	export interface ListHsmsRequest {
		NextToken?: string;
	}

	export interface ListLunaClientsResponse {
		ClientList: Array<ClientArn>;
		NextToken?: string;
	}

	export interface ListLunaClientsRequest {
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		TagList: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
	}

	export interface ModifyHapgResponse {
		HapgArn?: string;
	}

	export interface ModifyHapgRequest {
		HapgArn: string;
		Label?: string;
		PartitionSerialList?: Array<PartitionSerial>;
	}


	/**Contains the output of the <a>ModifyHsm</a> operation. */
	export interface ModifyHsmResponse {

		/**
		 * An ARN that identifies an HSM.
		 * Pattern: arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}
		 */
		HsmArn?: string;
	}


	/**Contains the inputs for the <a>ModifyHsm</a> operation. */
	export interface ModifyHsmRequest {

		/**
		 * An ARN that identifies an HSM.
		 * Pattern: arn:aws(-iso)?:cloudhsm:[a-zA-Z0-9\-]*:[0-9]{12}:hsm-[0-9a-f]{8}
		 */
		HsmArn: string;
		SubnetId?: string;
		EniIp?: string;
		IamRoleArn?: string;
		ExternalId?: string;
		SyslogIp?: string;
	}

	export interface ModifyLunaClientResponse {
		ClientArn?: string;
	}

	export interface ModifyLunaClientRequest {
		ClientArn: string;
		Certificate: string;
	}

	export interface RemoveTagsFromResourceResponse {
		Status: string;
	}

	export interface RemoveTagsFromResourceRequest {
		ResourceArn: string;
		TagKeyList: Array<TagKey>;
	}

	export enum ClientVersion { 5.1 = 0, 5.3 = 1 }

	export enum CloudHsmObjectState { READY = 0, UPDATING = 1, DEGRADED = 2 }


	/**<p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul> */
	export enum SubscriptionType { PRODUCTION = 0 }

	export enum HsmStatus { PENDING = 0, RUNNING = 1, UPDATING = 2, SUSPENDED = 3, TERMINATING = 4, TERMINATED = 5, DEGRADED = 6 }


	/**A key-value pair that identifies or specifies metadata about an AWS CloudHSM resource. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Adds or overwrites one or more tags for the specified AWS CloudHSM resource.</p> <p>Each tag consists of a key and a value. Tag keys must be unique to each resource.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource
		 * @return {AddTagsToResourceResponse} Success
		 */
		AddTagsToResource(requestBody: AddTagsToResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<AddTagsToResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates a high-availability partition group. A high-availability partition group is a group of partitions that spans multiple physical HSMs.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.CreateHapg
		 * @return {CreateHapgResponse} Success
		 */
		CreateHapg(requestBody: CreateHapgRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateHapgResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.CreateHapg', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an uninitialized HSM instance.</p> <p>There is an upfront fee charged for each HSM instance that you create with the <code>CreateHsm</code> operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the <a>DeleteHsm</a> operation, go to the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>, create a new case, and select <b>Account and Billing Support</b>.</p> <important> <p>It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the <a>DescribeHsm</a> operation. The HSM is ready to be initialized when the status changes to <code>RUNNING</code>.</p> </important>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.CreateHsm
		 * @return {CreateHsmResponse} Success
		 */
		CreateHsm(requestBody: CreateHsmRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateHsmResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.CreateHsm', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an HSM client.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient
		 * @return {CreateLunaClientResponse} Success
		 */
		CreateLunaClient(requestBody: CreateLunaClientRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateLunaClientResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a high-availability partition group.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DeleteHapg
		 * @return {DeleteHapgResponse} Success
		 */
		DeleteHapg(requestBody: DeleteHapgRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteHapgResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DeleteHapg', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes an HSM. After completion, this operation cannot be undone and your key material cannot be recovered.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DeleteHsm
		 * @return {DeleteHsmResponse} Success
		 */
		DeleteHsm(requestBody: DeleteHsmRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteHsmResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DeleteHsm', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a client.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient
		 * @return {DeleteLunaClientResponse} Success
		 */
		DeleteLunaClient(requestBody: DeleteLunaClientRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteLunaClientResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about a high-availability partition group.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DescribeHapg
		 * @return {DescribeHapgResponse} Success
		 */
		DescribeHapg(requestBody: DescribeHapgRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeHapgResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DescribeHapg', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DescribeHsm
		 * @return {DescribeHsmResponse} Success
		 */
		DescribeHsm(requestBody: DescribeHsmRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeHsmResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DescribeHsm', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM client.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient
		 * @return {DescribeLunaClientResponse} Success
		 */
		DescribeLunaClient(requestBody: DescribeLunaClientRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeLunaClientResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Gets the configuration files necessary to connect to all high availability partition groups the client is associated with.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.GetConfig
		 * @return {GetConfigResponse} Success
		 */
		GetConfig(requestBody: GetConfigRequest, headersHandler?: () => {[header: string]: string}): Promise<GetConfigResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.GetConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the Availability Zones that have available AWS CloudHSM capacity.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones
		 * @return {ListAvailableZonesResponse} Success
		 */
		ListAvailableZones(requestBody: ListAvailableZonesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListAvailableZonesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the high-availability partition groups for the account.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHapgs</code> to retrieve the next set of items.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListHapgs
		 * @return {ListHapgsResponse} Success
		 */
		ListHapgs(requestBody: ListHapgsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListHapgsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListHapgs', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves the identifiers of all of the HSMs provisioned for the current customer.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHsms</code> to retrieve the next set of items.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListHsms
		 * @return {ListHsmsResponse} Success
		 */
		ListHsms(requestBody: ListHsmsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListHsmsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListHsms', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists all of the clients.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListLunaClients</code> to retrieve the next set of items.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListLunaClients
		 * @return {ListLunaClientsResponse} Success
		 */
		ListLunaClients(requestBody: ListLunaClientsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListLunaClientsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListLunaClients', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Returns a list of all tags for the specified AWS CloudHSM resource.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an existing high-availability partition group.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ModifyHapg
		 * @return {ModifyHapgResponse} Success
		 */
		ModifyHapg(requestBody: ModifyHapgRequest, headersHandler?: () => {[header: string]: string}): Promise<ModifyHapgResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ModifyHapg', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an HSM.</p> <important> <p>This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window.</p> </important>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ModifyHsm
		 * @return {ModifyHsmResponse} Success
		 */
		ModifyHsm(requestBody: ModifyHsmRequest, headersHandler?: () => {[header: string]: string}): Promise<ModifyHsmResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ModifyHsm', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies the certificate used by the client.</p> <p>This action can potentially start a workflow to install the new certificate on the client's HSMs.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient
		 * @return {ModifyLunaClientResponse} Success
		 */
		ModifyLunaClient(requestBody: ModifyLunaClientRequest, headersHandler?: () => {[header: string]: string}): Promise<ModifyLunaClientResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Removes one or more tags from the specified AWS CloudHSM resource.</p> <p>To remove a tag, specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use <a>AddTagsToResource</a>.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResponse} Success
		 */
		RemoveTagsFromResource(requestBody: RemoveTagsFromResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<RemoveTagsFromResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

