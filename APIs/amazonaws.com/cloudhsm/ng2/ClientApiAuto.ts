import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
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

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Adds or overwrites one or more tags for the specified AWS CloudHSM resource.</p> <p>Each tag consists of a key and a value. Tag keys must be unique to each resource.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource
		 * @return {AddTagsToResourceResponse} Success
		 */
		AddTagsToResource(requestBody: AddTagsToResourceRequest, headersHandler?: () => HttpHeaders): Observable<AddTagsToResourceResponse> {
			return this.http.post<AddTagsToResourceResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates a high-availability partition group. A high-availability partition group is a group of partitions that spans multiple physical HSMs.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.CreateHapg
		 * @return {CreateHapgResponse} Success
		 */
		CreateHapg(requestBody: CreateHapgRequest, headersHandler?: () => HttpHeaders): Observable<CreateHapgResponse> {
			return this.http.post<CreateHapgResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.CreateHapg', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an uninitialized HSM instance.</p> <p>There is an upfront fee charged for each HSM instance that you create with the <code>CreateHsm</code> operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the <a>DeleteHsm</a> operation, go to the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>, create a new case, and select <b>Account and Billing Support</b>.</p> <important> <p>It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the <a>DescribeHsm</a> operation. The HSM is ready to be initialized when the status changes to <code>RUNNING</code>.</p> </important>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.CreateHsm
		 * @return {CreateHsmResponse} Success
		 */
		CreateHsm(requestBody: CreateHsmRequest, headersHandler?: () => HttpHeaders): Observable<CreateHsmResponse> {
			return this.http.post<CreateHsmResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.CreateHsm', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an HSM client.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient
		 * @return {CreateLunaClientResponse} Success
		 */
		CreateLunaClient(requestBody: CreateLunaClientRequest, headersHandler?: () => HttpHeaders): Observable<CreateLunaClientResponse> {
			return this.http.post<CreateLunaClientResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a high-availability partition group.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DeleteHapg
		 * @return {DeleteHapgResponse} Success
		 */
		DeleteHapg(requestBody: DeleteHapgRequest, headersHandler?: () => HttpHeaders): Observable<DeleteHapgResponse> {
			return this.http.post<DeleteHapgResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DeleteHapg', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes an HSM. After completion, this operation cannot be undone and your key material cannot be recovered.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DeleteHsm
		 * @return {DeleteHsmResponse} Success
		 */
		DeleteHsm(requestBody: DeleteHsmRequest, headersHandler?: () => HttpHeaders): Observable<DeleteHsmResponse> {
			return this.http.post<DeleteHsmResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DeleteHsm', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a client.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient
		 * @return {DeleteLunaClientResponse} Success
		 */
		DeleteLunaClient(requestBody: DeleteLunaClientRequest, headersHandler?: () => HttpHeaders): Observable<DeleteLunaClientResponse> {
			return this.http.post<DeleteLunaClientResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about a high-availability partition group.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DescribeHapg
		 * @return {DescribeHapgResponse} Success
		 */
		DescribeHapg(requestBody: DescribeHapgRequest, headersHandler?: () => HttpHeaders): Observable<DescribeHapgResponse> {
			return this.http.post<DescribeHapgResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DescribeHapg', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DescribeHsm
		 * @return {DescribeHsmResponse} Success
		 */
		DescribeHsm(requestBody: DescribeHsmRequest, headersHandler?: () => HttpHeaders): Observable<DescribeHsmResponse> {
			return this.http.post<DescribeHsmResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DescribeHsm', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM client.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient
		 * @return {DescribeLunaClientResponse} Success
		 */
		DescribeLunaClient(requestBody: DescribeLunaClientRequest, headersHandler?: () => HttpHeaders): Observable<DescribeLunaClientResponse> {
			return this.http.post<DescribeLunaClientResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Gets the configuration files necessary to connect to all high availability partition groups the client is associated with.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.GetConfig
		 * @return {GetConfigResponse} Success
		 */
		GetConfig(requestBody: GetConfigRequest, headersHandler?: () => HttpHeaders): Observable<GetConfigResponse> {
			return this.http.post<GetConfigResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.GetConfig', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the Availability Zones that have available AWS CloudHSM capacity.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones
		 * @return {ListAvailableZonesResponse} Success
		 */
		ListAvailableZones(requestBody: ListAvailableZonesRequest, headersHandler?: () => HttpHeaders): Observable<ListAvailableZonesResponse> {
			return this.http.post<ListAvailableZonesResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the high-availability partition groups for the account.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHapgs</code> to retrieve the next set of items.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListHapgs
		 * @return {ListHapgsResponse} Success
		 */
		ListHapgs(requestBody: ListHapgsRequest, headersHandler?: () => HttpHeaders): Observable<ListHapgsResponse> {
			return this.http.post<ListHapgsResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListHapgs', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves the identifiers of all of the HSMs provisioned for the current customer.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHsms</code> to retrieve the next set of items.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListHsms
		 * @return {ListHsmsResponse} Success
		 */
		ListHsms(requestBody: ListHsmsRequest, headersHandler?: () => HttpHeaders): Observable<ListHsmsResponse> {
			return this.http.post<ListHsmsResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListHsms', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists all of the clients.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListLunaClients</code> to retrieve the next set of items.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListLunaClients
		 * @return {ListLunaClientsResponse} Success
		 */
		ListLunaClients(requestBody: ListLunaClientsRequest, headersHandler?: () => HttpHeaders): Observable<ListLunaClientsResponse> {
			return this.http.post<ListLunaClientsResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListLunaClients', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Returns a list of all tags for the specified AWS CloudHSM resource.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest, headersHandler?: () => HttpHeaders): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an existing high-availability partition group.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ModifyHapg
		 * @return {ModifyHapgResponse} Success
		 */
		ModifyHapg(requestBody: ModifyHapgRequest, headersHandler?: () => HttpHeaders): Observable<ModifyHapgResponse> {
			return this.http.post<ModifyHapgResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ModifyHapg', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an HSM.</p> <important> <p>This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window.</p> </important>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ModifyHsm
		 * @return {ModifyHsmResponse} Success
		 */
		ModifyHsm(requestBody: ModifyHsmRequest, headersHandler?: () => HttpHeaders): Observable<ModifyHsmResponse> {
			return this.http.post<ModifyHsmResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ModifyHsm', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies the certificate used by the client.</p> <p>This action can potentially start a workflow to install the new certificate on the client's HSMs.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient
		 * @return {ModifyLunaClientResponse} Success
		 */
		ModifyLunaClient(requestBody: ModifyLunaClientRequest, headersHandler?: () => HttpHeaders): Observable<ModifyLunaClientResponse> {
			return this.http.post<ModifyLunaClientResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Removes one or more tags from the specified AWS CloudHSM resource.</p> <p>To remove a tag, specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use <a>AddTagsToResource</a>.</p>
		 * Post /#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResponse} Success
		 */
		RemoveTagsFromResource(requestBody: RemoveTagsFromResourceRequest, headersHandler?: () => HttpHeaders): Observable<RemoveTagsFromResourceResponse> {
			return this.http.post<RemoveTagsFromResourceResponse>(this.baseUri + '/#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

