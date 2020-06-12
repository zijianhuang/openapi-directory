///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
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
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Adds or overwrites one or more tags for the specified AWS CloudHSM resource.</p> <p>Each tag consists of a key and a value. Tag keys must be unique to each resource.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource
		 * @return {AddTagsToResourceResponse} Success
		 */
		AddTagsToResource(callback: (data : AddTagsToResourceResponse) => any, requestBody: AddTagsToResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates a high-availability partition group. A high-availability partition group is a group of partitions that spans multiple physical HSMs.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.CreateHapg
		 * @return {CreateHapgResponse} Success
		 */
		CreateHapg(callback: (data : CreateHapgResponse) => any, requestBody: CreateHapgRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.CreateHapg', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an uninitialized HSM instance.</p> <p>There is an upfront fee charged for each HSM instance that you create with the <code>CreateHsm</code> operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the <a>DeleteHsm</a> operation, go to the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>, create a new case, and select <b>Account and Billing Support</b>.</p> <important> <p>It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the <a>DescribeHsm</a> operation. The HSM is ready to be initialized when the status changes to <code>RUNNING</code>.</p> </important>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.CreateHsm
		 * @return {CreateHsmResponse} Success
		 */
		CreateHsm(callback: (data : CreateHsmResponse) => any, requestBody: CreateHsmRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.CreateHsm', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an HSM client.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient
		 * @return {CreateLunaClientResponse} Success
		 */
		CreateLunaClient(callback: (data : CreateLunaClientResponse) => any, requestBody: CreateLunaClientRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a high-availability partition group.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DeleteHapg
		 * @return {DeleteHapgResponse} Success
		 */
		DeleteHapg(callback: (data : DeleteHapgResponse) => any, requestBody: DeleteHapgRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DeleteHapg', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes an HSM. After completion, this operation cannot be undone and your key material cannot be recovered.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DeleteHsm
		 * @return {DeleteHsmResponse} Success
		 */
		DeleteHsm(callback: (data : DeleteHsmResponse) => any, requestBody: DeleteHsmRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DeleteHsm', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a client.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient
		 * @return {DeleteLunaClientResponse} Success
		 */
		DeleteLunaClient(callback: (data : DeleteLunaClientResponse) => any, requestBody: DeleteLunaClientRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about a high-availability partition group.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DescribeHapg
		 * @return {DescribeHapgResponse} Success
		 */
		DescribeHapg(callback: (data : DescribeHapgResponse) => any, requestBody: DescribeHapgRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DescribeHapg', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DescribeHsm
		 * @return {DescribeHsmResponse} Success
		 */
		DescribeHsm(callback: (data : DescribeHsmResponse) => any, requestBody: DescribeHsmRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DescribeHsm', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM client.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient
		 * @return {DescribeLunaClientResponse} Success
		 */
		DescribeLunaClient(callback: (data : DescribeLunaClientResponse) => any, requestBody: DescribeLunaClientRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Gets the configuration files necessary to connect to all high availability partition groups the client is associated with.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.GetConfig
		 * @return {GetConfigResponse} Success
		 */
		GetConfig(callback: (data : GetConfigResponse) => any, requestBody: GetConfigRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.GetConfig', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the Availability Zones that have available AWS CloudHSM capacity.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones
		 * @return {ListAvailableZonesResponse} Success
		 */
		ListAvailableZones(callback: (data : ListAvailableZonesResponse) => any, requestBody: ListAvailableZonesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the high-availability partition groups for the account.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHapgs</code> to retrieve the next set of items.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListHapgs
		 * @return {ListHapgsResponse} Success
		 */
		ListHapgs(callback: (data : ListHapgsResponse) => any, requestBody: ListHapgsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListHapgs', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves the identifiers of all of the HSMs provisioned for the current customer.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHsms</code> to retrieve the next set of items.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListHsms
		 * @return {ListHsmsResponse} Success
		 */
		ListHsms(callback: (data : ListHsmsResponse) => any, requestBody: ListHsmsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListHsms', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists all of the clients.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListLunaClients</code> to retrieve the next set of items.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListLunaClients
		 * @return {ListLunaClientsResponse} Success
		 */
		ListLunaClients(callback: (data : ListLunaClientsResponse) => any, requestBody: ListLunaClientsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListLunaClients', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Returns a list of all tags for the specified AWS CloudHSM resource.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(callback: (data : ListTagsForResourceResponse) => any, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an existing high-availability partition group.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ModifyHapg
		 * @return {ModifyHapgResponse} Success
		 */
		ModifyHapg(callback: (data : ModifyHapgResponse) => any, requestBody: ModifyHapgRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ModifyHapg', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an HSM.</p> <important> <p>This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window.</p> </important>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ModifyHsm
		 * @return {ModifyHsmResponse} Success
		 */
		ModifyHsm(callback: (data : ModifyHsmResponse) => any, requestBody: ModifyHsmRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ModifyHsm', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies the certificate used by the client.</p> <p>This action can potentially start a workflow to install the new certificate on the client's HSMs.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient
		 * @return {ModifyLunaClientResponse} Success
		 */
		ModifyLunaClient(callback: (data : ModifyLunaClientResponse) => any, requestBody: ModifyLunaClientRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Removes one or more tags from the specified AWS CloudHSM resource.</p> <p>To remove a tag, specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use <a>AddTagsToResource</a>.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResponse} Success
		 */
		RemoveTagsFromResource(callback: (data : RemoveTagsFromResourceResponse) => any, requestBody: RemoveTagsFromResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

