import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface CancelClusterRequest {
		ClusterId: string;
	}

	export interface CancelJobRequest {
		JobId: string;
	}

	export interface CreateAddressResult {
		AddressId?: string;
	}

	export interface CreateAddressRequest {

		/**The address that you want the Snowball or Snowballs associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown. */
		Address: Address;
	}

	export interface CreateClusterResult {
		ClusterId?: string;
	}

	export interface CreateClusterRequest {
		JobType: CreateClusterRequestJobType;

		/**Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources: JobResource;
		Description?: string;
		AddressId: string;
		KmsKeyARN?: string;
		RoleARN: string;
		SnowballType?: CreateClusterRequestSnowballType;
		ShippingOption: CreateClusterRequestShippingOption;

		/**<p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification;
		ForwardingAddressId?: string;

		/**The tax documents required in your AWS Region. */
		TaxDocuments?: TaxDocuments;
	}

	export enum CreateClusterRequestJobType { IMPORT = 0, EXPORT = 1, LOCAL_USE = 2 }

	export enum CreateClusterRequestSnowballType { STANDARD = 0, EDGE = 1, EDGE_C = 2, EDGE_CG = 3, EDGE_S = 4 }

	export enum CreateClusterRequestShippingOption { SECOND_DAY = 0, NEXT_DAY = 1, EXPRESS = 2, STANDARD = 3 }

	export interface CreateJobResult {
		JobId?: string;
	}

	export interface CreateJobRequest {
		JobType?: CreateJobRequestJobType;

		/**Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource;
		Description?: string;
		AddressId?: string;
		KmsKeyARN?: string;
		RoleARN?: string;
		SnowballCapacityPreference?: CreateJobRequestSnowballCapacityPreference;
		ShippingOption?: CreateJobRequestShippingOption;

		/**<p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification;
		ClusterId?: string;
		SnowballType?: CreateJobRequestSnowballType;
		ForwardingAddressId?: string;

		/**The tax documents required in your AWS Region. */
		TaxDocuments?: TaxDocuments;
	}

	export enum CreateJobRequestJobType { IMPORT = 0, EXPORT = 1, LOCAL_USE = 2 }

	export enum CreateJobRequestSnowballCapacityPreference { T50 = 0, T80 = 1, T100 = 2, T42 = 3, T98 = 4, NoPreference = 5 }

	export enum CreateJobRequestShippingOption { SECOND_DAY = 0, NEXT_DAY = 1, EXPRESS = 2, STANDARD = 3 }

	export enum CreateJobRequestSnowballType { STANDARD = 0, EDGE = 1, EDGE_C = 2, EDGE_CG = 3, EDGE_S = 4 }

	export interface DescribeAddressResult {

		/**The address that you want the Snowball or Snowballs associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown. */
		Address?: Address;
	}

	export interface DescribeAddressRequest {
		AddressId: string;
	}

	export interface DescribeAddressesResult {
		Addresses?: Array<Address>;
		NextToken?: string;
	}

	export interface DescribeAddressesRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeClusterResult {

		/**Contains metadata about a specific cluster. */
		ClusterMetadata?: ClusterMetadata;
	}

	export interface DescribeClusterRequest {
		ClusterId: string;
	}

	export interface DescribeJobResult {

		/**Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action. */
		JobMetadata?: JobMetadata;
		SubJobMetadata?: Array<JobMetadata>;
	}

	export interface DescribeJobRequest {
		JobId: string;
	}

	export interface GetJobManifestResult {
		ManifestURI?: string;
	}

	export interface GetJobManifestRequest {
		JobId: string;
	}

	export interface GetJobUnlockCodeResult {
		UnlockCode?: string;
	}

	export interface GetJobUnlockCodeRequest {
		JobId: string;
	}

	export interface GetSnowballUsageResult {
		SnowballLimit?: number;
		SnowballsInUse?: number;
	}

	export interface GetSoftwareUpdatesResult {
		UpdatesURI?: string;
	}

	export interface GetSoftwareUpdatesRequest {
		JobId: string;
	}

	export interface ListClusterJobsResult {
		JobListEntries?: Array<JobListEntry>;
		NextToken?: string;
	}

	export interface ListClusterJobsRequest {
		ClusterId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListClustersResult {
		ClusterListEntries?: Array<ClusterListEntry>;
		NextToken?: string;
	}

	export interface ListClustersRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListCompatibleImagesResult {
		CompatibleImages?: Array<CompatibleImage>;
		NextToken?: string;
	}

	export interface ListCompatibleImagesRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListJobsResult {
		JobListEntries?: Array<JobListEntry>;
		NextToken?: string;
	}

	export interface ListJobsRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface UpdateClusterRequest {
		ClusterId: string;
		RoleARN?: string;
		Description?: string;

		/**Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource;
		AddressId?: string;
		ShippingOption?: UpdateClusterRequestShippingOption;

		/**<p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification;
		ForwardingAddressId?: string;
	}

	export enum UpdateClusterRequestShippingOption { SECOND_DAY = 0, NEXT_DAY = 1, EXPRESS = 2, STANDARD = 3 }

	export interface UpdateJobRequest {
		JobId: string;
		RoleARN?: string;

		/**<p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification;

		/**Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource;
		AddressId?: string;
		ShippingOption?: UpdateJobRequestShippingOption;
		Description?: string;
		SnowballCapacityPreference?: UpdateJobRequestSnowballCapacityPreference;
		ForwardingAddressId?: string;
	}

	export enum UpdateJobRequestShippingOption { SECOND_DAY = 0, NEXT_DAY = 1, EXPRESS = 2, STANDARD = 3 }

	export enum UpdateJobRequestSnowballCapacityPreference { T50 = 0, T80 = 1, T100 = 2, T42 = 3, T98 = 4, NoPreference = 5 }


	/**The address that you want the Snowball or Snowballs associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown. */
	export interface Address {
		AddressId?: string;
		Name?: string;
		Company?: string;
		Street1?: string;
		Street2?: string;
		Street3?: string;
		City?: string;
		StateOrProvince?: string;
		PrefectureOrDistrict?: string;
		Landmark?: string;
		Country?: string;
		PostalCode?: string;
		PhoneNumber?: string;
		IsRestricted?: boolean;
	}

	export enum ClusterState { AwaitingQuorum = 0, Pending = 1, InUse = 2, Complete = 3, Cancelled = 4 }


	/**Contains a cluster's state, a cluster's ID, and other important information. */
	export interface ClusterListEntry {
		ClusterId?: string;
		ClusterState?: ClusterListEntryClusterState;
		CreationDate?: Date;
		Description?: string;
	}

	export enum ClusterListEntryClusterState { AwaitingQuorum = 0, Pending = 1, InUse = 2, Complete = 3, Cancelled = 4 }

	export enum JobType { IMPORT = 0, EXPORT = 1, LOCAL_USE = 2 }

	export enum SnowballType { STANDARD = 0, EDGE = 1, EDGE_C = 2, EDGE_CG = 3, EDGE_S = 4 }


	/**Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
	export interface JobResource {
		S3Resources?: Array<S3Resource>;
		LambdaResources?: Array<LambdaResource>;
		Ec2AmiResources?: Array<Ec2AmiResource>;
	}

	export enum ShippingOption { SECOND_DAY = 0, NEXT_DAY = 1, EXPRESS = 2, STANDARD = 3 }


	/**<p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
	export interface Notification {
		SnsTopicARN?: string;
		JobStatesToNotify?: Array<JobState>;
		NotifyAll?: boolean;
	}


	/**The tax documents required in your AWS Region. */
	export interface TaxDocuments {

		/**The tax documents required in AWS Regions in India. */
		IND?: INDTaxDocuments;
	}


	/**Contains metadata about a specific cluster. */
	export interface ClusterMetadata {
		ClusterId?: string;
		Description?: string;
		KmsKeyARN?: string;
		RoleARN?: string;
		ClusterState?: ClusterMetadataClusterState;
		JobType?: ClusterMetadataJobType;
		SnowballType?: ClusterMetadataSnowballType;
		CreationDate?: Date;

		/**Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource;
		AddressId?: string;
		ShippingOption?: ClusterMetadataShippingOption;

		/**<p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification;
		ForwardingAddressId?: string;

		/**The tax documents required in your AWS Region. */
		TaxDocuments?: TaxDocuments;
	}

	export enum ClusterMetadataClusterState { AwaitingQuorum = 0, Pending = 1, InUse = 2, Complete = 3, Cancelled = 4 }

	export enum ClusterMetadataJobType { IMPORT = 0, EXPORT = 1, LOCAL_USE = 2 }

	export enum ClusterMetadataSnowballType { STANDARD = 0, EDGE = 1, EDGE_C = 2, EDGE_CG = 3, EDGE_S = 4 }

	export enum ClusterMetadataShippingOption { SECOND_DAY = 0, NEXT_DAY = 1, EXPRESS = 2, STANDARD = 3 }


	/**A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snowball Edge AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device. */
	export interface CompatibleImage {
		AmiId?: string;
		Name?: string;
	}

	export enum SnowballCapacity { T50 = 0, T80 = 1, T100 = 2, T42 = 3, T98 = 4, NoPreference = 5 }


	/**Defines the real-time status of a Snowball's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs. */
	export interface DataTransfer {
		BytesTransferred?: number;
		ObjectsTransferred?: number;
		TotalBytes?: number;
		TotalObjects?: number;
	}


	/**Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action. */
	export interface JobMetadata {
		JobId?: string;
		JobState?: JobMetadataJobState;
		JobType?: JobMetadataJobType;
		SnowballType?: JobMetadataSnowballType;
		CreationDate?: Date;

		/**Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource;
		Description?: string;
		KmsKeyARN?: string;
		RoleARN?: string;
		AddressId?: string;

		/**A job's shipping information, including inbound and outbound tracking numbers and shipping speed options. */
		ShippingDetails?: ShippingDetails;
		SnowballCapacityPreference?: JobMetadataSnowballCapacityPreference;

		/**<p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification;

		/**Defines the real-time status of a Snowball's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs. */
		DataTransferProgress?: DataTransfer;

		/**<p>Contains job logs. Whenever Snowball is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snowball for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p> */
		JobLogInfo?: JobLogs;
		ClusterId?: string;
		ForwardingAddressId?: string;

		/**The tax documents required in your AWS Region. */
		TaxDocuments?: TaxDocuments;
	}

	export enum JobMetadataJobState { New = 0, PreparingAppliance = 1, PreparingShipment = 2, InTransitToCustomer = 3, WithCustomer = 4, InTransitToAWS = 5, WithAWSSortingFacility = 6, WithAWS = 7, InProgress = 8, Complete = 9, Cancelled = 10, Listing = 11, Pending = 12 }

	export enum JobMetadataJobType { IMPORT = 0, EXPORT = 1, LOCAL_USE = 2 }

	export enum JobMetadataSnowballType { STANDARD = 0, EDGE = 1, EDGE_C = 2, EDGE_CG = 3, EDGE_S = 4 }

	export enum JobMetadataSnowballCapacityPreference { T50 = 0, T80 = 1, T100 = 2, T42 = 3, T98 = 4, NoPreference = 5 }


	/**A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2 AMI ID and the Snowball Edge AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the AWS Cloud and on the device. */
	export interface Ec2AmiResource {
		AmiId: string;
		SnowballAmiId?: string;
	}


	/**The container for the <a>EventTriggerDefinition$EventResourceARN</a>. */
	export interface EventTriggerDefinition {
		EventResourceARN?: string;
	}


	/**The tax documents required in AWS Regions in India. */
	export interface INDTaxDocuments {
		GSTIN?: string;
	}

	export enum JobState { New = 0, PreparingAppliance = 1, PreparingShipment = 2, InTransitToCustomer = 3, WithCustomer = 4, InTransitToAWS = 5, WithAWSSortingFacility = 6, WithAWS = 7, InProgress = 8, Complete = 9, Cancelled = 10, Listing = 11, Pending = 12 }


	/**Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job. */
	export interface JobListEntry {
		JobId?: string;
		JobState?: JobListEntryJobState;
		IsMaster?: boolean;
		JobType?: JobListEntryJobType;
		SnowballType?: JobListEntrySnowballType;
		CreationDate?: Date;
		Description?: string;
	}

	export enum JobListEntryJobState { New = 0, PreparingAppliance = 1, PreparingShipment = 2, InTransitToCustomer = 3, WithCustomer = 4, InTransitToAWS = 5, WithAWSSortingFacility = 6, WithAWS = 7, InProgress = 8, Complete = 9, Cancelled = 10, Listing = 11, Pending = 12 }

	export enum JobListEntryJobType { IMPORT = 0, EXPORT = 1, LOCAL_USE = 2 }

	export enum JobListEntrySnowballType { STANDARD = 0, EDGE = 1, EDGE_C = 2, EDGE_CG = 3, EDGE_S = 4 }


	/**<p>Contains job logs. Whenever Snowball is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snowball for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p> */
	export interface JobLogs {
		JobCompletionReportURI?: string;
		JobSuccessLogURI?: string;
		JobFailureLogURI?: string;
	}


	/**A job's shipping information, including inbound and outbound tracking numbers and shipping speed options. */
	export interface ShippingDetails {
		ShippingOption?: ShippingDetailsShippingOption;

		/**The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment. */
		InboundShipment?: Shipment;

		/**The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment. */
		OutboundShipment?: Shipment;
	}

	export enum ShippingDetailsShippingOption { SECOND_DAY = 0, NEXT_DAY = 1, EXPRESS = 2, STANDARD = 3 }


	/**Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted. */
	export interface KeyRange {
		BeginMarker?: string;
		EndMarker?: string;
	}


	/**Identifies  */
	export interface LambdaResource {
		LambdaArn?: string;
		EventTriggers?: Array<EventTriggerDefinition>;
	}


	/**Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted. */
	export interface S3Resource {
		BucketArn?: string;

		/**Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted. */
		KeyRange?: KeyRange;
	}


	/**The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment. */
	export interface Shipment {
		Status?: string;
		TrackingNumber?: string;
	}

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Cancels a cluster job. You can only cancel a cluster job while it's in the <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster job to cancel it.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster
		 * @return {CancelClusterResult} Success
		 */
		CancelCluster(requestBody: CancelClusterRequest, headersHandler?: () => {[header: string]: string}): Promise<CancelClusterResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Cancels the specified job. You can only cancel a job before its <code>JobState</code> value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the response element data returned.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob
		 * @return {CancelJobResult} Success
		 */
		CancelJob(requestBody: CancelJobRequest, headersHandler?: () => {[header: string]: string}): Promise<CancelJobResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates an address for a Snowball to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress
		 * @return {CreateAddressResult} Success
		 */
		CreateAddress(requestBody: CreateAddressRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateAddressResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster
		 * @return {CreateClusterResult} Success
		 */
		CreateCluster(requestBody: CreateClusterRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateClusterResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a job to import or export data between Amazon S3 and your on-premises data center. Your AWS account must have the right trust policies and permissions in place to create a job for Snowball. If you're creating a job for a node in a cluster, you only need to provide the <code>clusterId</code> value; the other job attributes are inherited from the cluster.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob
		 * @return {CreateJobResult} Success
		 */
		CreateJob(requestBody: CreateJobRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateJobResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Takes an <code>AddressId</code> and returns specific details about that address in the form of an <code>Address</code> object.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress
		 * @return {DescribeAddressResult} Success
		 */
		DescribeAddress(requestBody: DescribeAddressRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAddressResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAddressesResult} Success
		 */
		DescribeAddresses(MaxResults: string, NextToken: string, requestBody: DescribeAddressesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAddressesResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about a specific cluster including shipping information, cluster status, and other important metadata.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster
		 * @return {DescribeClusterResult} Success
		 */
		DescribeCluster(requestBody: DescribeClusterRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeClusterResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about a specific job including shipping information, job status, and other important metadata.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob
		 * @return {DescribeJobResult} Success
		 */
		DescribeJob(requestBody: DescribeJobRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeJobResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the <code>GetJobManifest</code> action.</p> <p>The manifest is an encrypted file that you can download after your job enters the <code>WithCustomer</code> status. The manifest is decrypted by using the <code>UnlockCode</code> code value, when you pass both values to the Snowball through the Snowball client when the client is started for the first time.</p> <p>As a best practice, we recommend that you don't save a copy of an <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job.</p> <p>The credentials of a given job, including its manifest file and unlock code, expire 90 days after the job is created.</p>
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest
		 * @return {GetJobManifestResult} Success
		 */
		GetJobManifest(requestBody: GetJobManifestRequest, headersHandler?: () => {[header: string]: string}): Promise<GetJobManifestResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular <code>UnlockCode</code> value can be accessed for up to 90 days after the associated job has been created.</p> <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snowball through the Snowball client when the client is started for the first time.</p> <p>As a best practice, we recommend that you don't save a copy of the <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job.</p>
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode
		 * @return {GetJobUnlockCodeResult} Success
		 */
		GetJobUnlockCode(requestBody: GetJobUnlockCodeRequest, headersHandler?: () => {[header: string]: string}): Promise<GetJobUnlockCodeResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Returns information about the Snowball service limit for your account, and also the number of Snowballs your account has in use.</p> <p>The default service limit for the number of Snowballs that you can have at one time is 1. If you want to increase your service limit, contact AWS Support.</p>
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage
		 * @return {GetSnowballUsageResult} Success
		 */
		GetSnowballUsage(requestBody: GetSnowballUsageRequest, headersHandler?: () => {[header: string]: string}): Promise<GetSnowballUsageResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns an Amazon S3 presigned URL for an update file associated with a specified <code>JobId</code>.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates
		 * @return {GetSoftwareUpdatesResult} Success
		 */
		GetSoftwareUpdates(requestBody: GetSoftwareUpdatesRequest, headersHandler?: () => {[header: string]: string}): Promise<GetSoftwareUpdatesResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs
		 * @return {ListClusterJobsResult} Success
		 */
		ListClusterJobs(requestBody: ListClusterJobsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListClusterJobsResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters
		 * @return {ListClustersResult} Success
		 */
		ListClusters(requestBody: ListClustersRequest, headersHandler?: () => {[header: string]: string}): Promise<ListClustersResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs) that are owned by your AWS account that would be supported for use on a Snowball Edge device. Currently, supported AMIs are based on the CentOS 7 (x86_64) - with Updates HVM, Ubuntu Server 14.04 LTS (HVM), and Ubuntu 16.04 LTS - Xenial (HVM) images, available on the AWS Marketplace.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages
		 * @return {ListCompatibleImagesResult} Success
		 */
		ListCompatibleImages(requestBody: ListCompatibleImagesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListCompatibleImagesResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJobsResult} Success
		 */
		ListJobs(MaxResults: string, NextToken: string, requestBody: ListJobsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListJobsResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code> state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster
		 * @return {UpdateClusterResult} Success
		 */
		UpdateCluster(requestBody: UpdateClusterRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateClusterResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * While a job's <code>JobState</code> value is <code>New</code>, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.
		 * Post /#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob
		 * @return {UpdateJobResult} Success
		 */
		UpdateJob(requestBody: UpdateJobRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateJobResult> {
			return this.http.post('/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}
	}

}

