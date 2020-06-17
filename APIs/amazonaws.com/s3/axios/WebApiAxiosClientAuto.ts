import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface CompleteMultipartUploadOutput {
		Location?: string;
		Bucket?: string;
		Key?: string;
		ETag?: string;
	}

	export interface CopyObjectOutput {

		/**Container for all response elements. */
		CopyObjectResult?: CopyObjectResult;
	}

	export enum BucketLocationConstraint { EU = 0, eu-west-1 = 1, us-west-1 = 2, us-west-2 = 3, ap-south-1 = 4, ap-southeast-1 = 5, ap-southeast-2 = 6, ap-northeast-1 = 7, sa-east-1 = 8, cn-north-1 = 9, eu-central-1 = 10 }

	export interface CreateMultipartUploadOutput {
		Bucket?: string;
		Key?: string;
		UploadId?: string;
	}

	export interface DeleteObjectsOutput {
		Deleted?: Array<DeletedObject>;
		Errors?: Array<Error>;
	}

	export interface GetBucketAccelerateConfigurationOutput {
		Status?: GetBucketAccelerateConfigurationOutputStatus;
	}

	export enum GetBucketAccelerateConfigurationOutputStatus { Enabled = 0, Suspended = 1 }

	export interface GetBucketAclOutput {

		/**Container for the owner's display name and ID. */
		Owner?: Owner;
		Grants?: Array<Grant>;
	}

	export interface GetBucketAnalyticsConfigurationOutput {

		/**Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket. */
		AnalyticsConfiguration?: AnalyticsConfiguration;
	}

	export interface GetBucketCorsOutput {
		CORSRules?: Array<CORSRule>;
	}

	export interface GetBucketEncryptionOutput {

		/**Specifies the default server-side-encryption configuration. */
		ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
	}

	export interface GetBucketInventoryConfigurationOutput {

		/**Specifies the inventory configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html">GET Bucket inventory</a> in the <i>Amazon Simple Storage Service API Reference</i>. */
		InventoryConfiguration?: InventoryConfiguration;
	}

	export interface GetBucketLifecycleOutput {
		Rules?: Array<Rule>;
	}

	export interface GetBucketLifecycleConfigurationOutput {
		Rules?: Array<LifecycleRule>;
	}

	export interface GetBucketLocationOutput {
		LocationConstraint?: GetBucketLocationOutputLocationConstraint;
	}

	export enum GetBucketLocationOutputLocationConstraint { EU = 0, eu-west-1 = 1, us-west-1 = 2, us-west-2 = 3, ap-south-1 = 4, ap-southeast-1 = 5, ap-southeast-2 = 6, ap-northeast-1 = 7, sa-east-1 = 8, cn-north-1 = 9, eu-central-1 = 10 }

	export interface GetBucketLoggingOutput {

		/**Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the <i>Amazon Simple Storage Service API Reference</i>. */
		LoggingEnabled?: LoggingEnabled;
	}

	export interface GetBucketMetricsConfigurationOutput {

		/**Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html"> PUT Bucket metrics</a> in the <i>Amazon Simple Storage Service API Reference</i>. */
		MetricsConfiguration?: MetricsConfiguration;
	}

	export interface NotificationConfigurationDeprecated {

		/**A container for specifying the configuration for publication of messages to an Amazon Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events. This data type is deprecated. Use <a>TopicConfiguration</a> instead. */
		TopicConfiguration?: TopicConfigurationDeprecated;

		/**This data type is deprecated. Use <a>QueueConfiguration</a> for the same purposes. This data type specifies the configuration for publishing messages to an Amazon Simple Queue Service (Amazon SQS) queue when Amazon S3 detects specified events. */
		QueueConfiguration?: QueueConfigurationDeprecated;

		/**Container for specifying the AWS Lambda notification configuration. */
		CloudFunctionConfiguration?: CloudFunctionConfiguration;
	}


	/**A container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off for the bucket. */
	export interface NotificationConfiguration {
		TopicConfigurations?: Array<TopicConfiguration>;
		QueueConfigurations?: Array<QueueConfiguration>;
		LambdaFunctionConfigurations?: Array<LambdaFunctionConfiguration>;
	}

	export interface GetBucketPolicyOutput {
		Policy?: string;
	}

	export interface GetBucketPolicyStatusOutput {

		/**The container element for a bucket's policy status. */
		PolicyStatus?: PolicyStatus;
	}

	export interface GetBucketReplicationOutput {

		/**A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB. */
		ReplicationConfiguration?: ReplicationConfiguration;
	}

	export interface GetBucketRequestPaymentOutput {
		Payer?: GetBucketRequestPaymentOutputPayer;
	}

	export enum GetBucketRequestPaymentOutputPayer { Requester = 0, BucketOwner = 1 }

	export interface GetBucketTaggingOutput {
		TagSet: Array<Tag>;
	}

	export interface GetBucketVersioningOutput {
		Status?: GetBucketVersioningOutputStatus;
		MFADelete?: GetBucketVersioningOutputMFADelete;
	}

	export enum GetBucketVersioningOutputStatus { Enabled = 0, Suspended = 1 }

	export enum GetBucketVersioningOutputMFADelete { Enabled = 0, Disabled = 1 }

	export interface GetBucketWebsiteOutput {

		/**Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket. */
		RedirectAllRequestsTo?: RedirectAllRequestsTo;

		/**Container for the <code>Suffix</code> element. */
		IndexDocument?: IndexDocument;

		/**The error information. */
		ErrorDocument?: ErrorDocument;
		RoutingRules?: Array<RoutingRule>;
	}

	export interface GetObjectOutput {
		Body?: string;
		Metadata?: Metadata;
	}

	export interface GetObjectAclOutput {

		/**Container for the owner's display name and ID. */
		Owner?: Owner;
		Grants?: Array<Grant>;
	}

	export interface GetObjectLegalHoldOutput {

		/**A Legal Hold configuration for an object. */
		LegalHold?: ObjectLockLegalHold;
	}

	export interface GetObjectLockConfigurationOutput {

		/**The container element for Object Lock configuration parameters. */
		ObjectLockConfiguration?: ObjectLockConfiguration;
	}

	export interface GetObjectRetentionOutput {

		/**A Retention configuration for an object. */
		Retention?: ObjectLockRetention;
	}

	export interface GetObjectTaggingOutput {
		TagSet: Array<Tag>;
	}

	export interface GetObjectTorrentOutput {
		Body?: string;
	}

	export interface GetPublicAccessBlockOutput {

		/**The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
	}

	export interface HeadObjectOutput {
		Metadata?: Metadata;
	}

	export interface ListBucketAnalyticsConfigurationsOutput {
		IsTruncated?: boolean;
		ContinuationToken?: string;
		NextContinuationToken?: string;
		AnalyticsConfigurationList?: Array<AnalyticsConfiguration>;
	}

	export interface ListBucketInventoryConfigurationsOutput {
		ContinuationToken?: string;
		InventoryConfigurationList?: Array<InventoryConfiguration>;
		IsTruncated?: boolean;
		NextContinuationToken?: string;
	}

	export interface ListBucketMetricsConfigurationsOutput {
		IsTruncated?: boolean;
		ContinuationToken?: string;
		NextContinuationToken?: string;
		MetricsConfigurationList?: Array<MetricsConfiguration>;
	}

	export interface ListBucketsOutput {
		Buckets?: Array<Bucket>;

		/**Container for the owner's display name and ID. */
		Owner?: Owner;
	}

	export interface ListMultipartUploadsOutput {
		Bucket?: string;
		KeyMarker?: string;
		UploadIdMarker?: string;
		NextKeyMarker?: string;
		Prefix?: string;
		Delimiter?: string;
		NextUploadIdMarker?: string;
		MaxUploads?: number;
		IsTruncated?: boolean;
		Uploads?: Array<MultipartUpload>;
		CommonPrefixes?: Array<CommonPrefix>;

		/**Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. */
		EncodingType?: ListMultipartUploadsOutputEncodingType;
	}

	export enum ListMultipartUploadsOutputEncodingType { url = 0 }

	export interface ListObjectVersionsOutput {
		IsTruncated?: boolean;
		KeyMarker?: string;
		VersionIdMarker?: string;
		NextKeyMarker?: string;
		NextVersionIdMarker?: string;
		Versions?: Array<ObjectVersion>;
		DeleteMarkers?: Array<DeleteMarkerEntry>;
		Name?: string;
		Prefix?: string;
		Delimiter?: string;
		MaxKeys?: number;
		CommonPrefixes?: Array<CommonPrefix>;

		/**Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. */
		EncodingType?: ListObjectVersionsOutputEncodingType;
	}

	export enum ListObjectVersionsOutputEncodingType { url = 0 }

	export interface ListObjectsOutput {
		IsTruncated?: boolean;
		Marker?: string;
		NextMarker?: string;
		Contents?: Array<Object>;
		Name?: string;
		Prefix?: string;
		Delimiter?: string;
		MaxKeys?: number;
		CommonPrefixes?: Array<CommonPrefix>;

		/**Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. */
		EncodingType?: ListObjectsOutputEncodingType;
	}

	export enum ListObjectsOutputEncodingType { url = 0 }

	export interface ListObjectsV2Output {
		IsTruncated?: boolean;
		Contents?: Array<Object>;
		Name?: string;
		Prefix?: string;
		Delimiter?: string;
		MaxKeys?: number;
		CommonPrefixes?: Array<CommonPrefix>;

		/**Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. */
		EncodingType?: ListObjectsV2OutputEncodingType;
		KeyCount?: number;
		ContinuationToken?: string;
		NextContinuationToken?: string;
		StartAfter?: string;
	}

	export enum ListObjectsV2OutputEncodingType { url = 0 }

	export interface ListPartsOutput {
		Bucket?: string;
		Key?: string;
		UploadId?: string;
		PartNumberMarker?: number;
		NextPartNumberMarker?: number;
		MaxParts?: number;
		IsTruncated?: boolean;
		Parts?: Array<Part>;

		/**Container element that identifies who initiated the multipart upload. */
		Initiator?: Initiator;

		/**Container for the owner's display name and ID. */
		Owner?: Owner;
		StorageClass?: ListPartsOutputStorageClass;
	}

	export enum ListPartsOutputStorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, STANDARD_IA = 2, ONEZONE_IA = 3, INTELLIGENT_TIERING = 4, GLACIER = 5, DEEP_ARCHIVE = 6 }

	export enum BucketAccelerateStatus { Enabled = 0, Suspended = 1 }


	/**Container for the owner's display name and ID. */
	export interface Owner {
		DisplayName?: string;
		ID?: string;
	}


	/**The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis. */
	export interface AnalyticsFilter {
		Prefix?: string;

		/**A container of a key value name pair. */
		Tag?: Tag;

		/**A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates in any combination, and an object must match all of the predicates for the filter to apply. */
		And?: AnalyticsAndOperator;
	}


	/**Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket. */
	export interface StorageClassAnalysis {

		/**Container for data related to the storage class analysis for an Amazon S3 bucket for export. */
		DataExport?: StorageClassAnalysisDataExport;
	}


	/**Specifies the inventory configuration for an Amazon S3 bucket. */
	export interface InventoryDestination {

		/**Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where inventory results are published. */
		S3BucketDestination: InventoryS3BucketDestination;
	}


	/**Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria. */
	export interface InventoryFilter {
		Prefix: string;
	}

	export enum InventoryIncludedObjectVersions { All = 0, Current = 1 }


	/**Specifies the schedule for generating inventory results. */
	export interface InventorySchedule {
		Frequency: InventoryScheduleFrequency;
	}

	export enum InventoryScheduleFrequency { Daily = 0, Weekly = 1 }


	/**Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the <i>Amazon Simple Storage Service API Reference</i>. */
	export interface LoggingEnabled {
		TargetBucket: string;
		TargetGrants?: Array<TargetGrant>;
		TargetPrefix: string;
	}


	/**Specifies a metrics configuration filter. The metrics configuration only includes objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction (MetricsAndOperator). */
	export interface MetricsFilter {
		Prefix?: string;

		/**A container of a key value name pair. */
		Tag?: Tag;

		/**A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply. */
		And?: MetricsAndOperator;
	}


	/**A container for specifying the configuration for publication of messages to an Amazon Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events. This data type is deprecated. Use <a>TopicConfiguration</a> instead. */
	export interface TopicConfigurationDeprecated {

		/**An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID. */
		Id?: string;
		Events?: Array<Event>;

		/**The bucket event for which to send notifications. */
		Event?: TopicConfigurationDeprecatedEvent;
		Topic?: string;
	}

	export enum TopicConfigurationDeprecatedEvent { s3:ReducedRedundancyLostObject = 0, s3:ObjectCreated:* = 1, s3:ObjectCreated:Put = 2, s3:ObjectCreated:Post = 3, s3:ObjectCreated:Copy = 4, s3:ObjectCreated:CompleteMultipartUpload = 5, s3:ObjectRemoved:* = 6, s3:ObjectRemoved:Delete = 7, s3:ObjectRemoved:DeleteMarkerCreated = 8, s3:ObjectRestore:* = 9, s3:ObjectRestore:Post = 10, s3:ObjectRestore:Completed = 11, s3:Replication:* = 12, s3:Replication:OperationFailedReplication = 13, s3:Replication:OperationNotTracked = 14, s3:Replication:OperationMissedThreshold = 15, s3:Replication:OperationReplicatedAfterThreshold = 16 }


	/**This data type is deprecated. Use <a>QueueConfiguration</a> for the same purposes. This data type specifies the configuration for publishing messages to an Amazon Simple Queue Service (Amazon SQS) queue when Amazon S3 detects specified events.  */
	export interface QueueConfigurationDeprecated {

		/**An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID. */
		Id?: string;

		/**The bucket event for which to send notifications. */
		Event?: QueueConfigurationDeprecatedEvent;
		Events?: Array<Event>;
		Queue?: string;
	}

	export enum QueueConfigurationDeprecatedEvent { s3:ReducedRedundancyLostObject = 0, s3:ObjectCreated:* = 1, s3:ObjectCreated:Put = 2, s3:ObjectCreated:Post = 3, s3:ObjectCreated:Copy = 4, s3:ObjectCreated:CompleteMultipartUpload = 5, s3:ObjectRemoved:* = 6, s3:ObjectRemoved:Delete = 7, s3:ObjectRemoved:DeleteMarkerCreated = 8, s3:ObjectRestore:* = 9, s3:ObjectRestore:Post = 10, s3:ObjectRestore:Completed = 11, s3:Replication:* = 12, s3:Replication:OperationFailedReplication = 13, s3:Replication:OperationNotTracked = 14, s3:Replication:OperationMissedThreshold = 15, s3:Replication:OperationReplicatedAfterThreshold = 16 }


	/**Container for specifying the AWS Lambda notification configuration. */
	export interface CloudFunctionConfiguration {

		/**An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID. */
		Id?: string;

		/**The bucket event for which to send notifications. */
		Event?: CloudFunctionConfigurationEvent;
		Events?: Array<Event>;
		CloudFunction?: string;
		InvocationRole?: string;
	}

	export enum CloudFunctionConfigurationEvent { s3:ReducedRedundancyLostObject = 0, s3:ObjectCreated:* = 1, s3:ObjectCreated:Put = 2, s3:ObjectCreated:Post = 3, s3:ObjectCreated:Copy = 4, s3:ObjectCreated:CompleteMultipartUpload = 5, s3:ObjectRemoved:* = 6, s3:ObjectRemoved:Delete = 7, s3:ObjectRemoved:DeleteMarkerCreated = 8, s3:ObjectRestore:* = 9, s3:ObjectRestore:Post = 10, s3:ObjectRestore:Completed = 11, s3:Replication:* = 12, s3:Replication:OperationFailedReplication = 13, s3:Replication:OperationNotTracked = 14, s3:Replication:OperationMissedThreshold = 15, s3:Replication:OperationReplicatedAfterThreshold = 16 }

	export enum Payer { Requester = 0, BucketOwner = 1 }

	export enum MFADelete { Enabled = 0, Disabled = 1 }

	export enum BucketVersioningStatus { Enabled = 0, Suspended = 1 }


	/**The error information. */
	export interface ErrorDocument {
		Key: string;
	}


	/**Container for the <code>Suffix</code> element. */
	export interface IndexDocument {
		Suffix: string;
	}


	/**Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket. */
	export interface RedirectAllRequestsTo {
		HostName: string;
		Protocol?: RedirectAllRequestsToProtocol;
	}

	export enum RedirectAllRequestsToProtocol { http = 0, https = 1 }

	export enum ObjectLockLegalHoldStatus { ON = 0, OFF = 1 }

	export enum ObjectLockEnabled { Enabled = 0 }


	/**The container element for an Object Lock rule. */
	export interface ObjectLockRule {

		/**The container element for specifying the default Object Lock retention settings for new objects placed in the specified bucket. */
		DefaultRetention?: DefaultRetention;
	}

	export enum ObjectLockRetentionMode { GOVERNANCE = 0, COMPLIANCE = 1 }


	/**Container for S3 Glacier job parameters. */
	export interface GlacierJobParameters {
		Tier: GlacierJobParametersTier;
	}

	export enum GlacierJobParametersTier { Standard = 0, Bulk = 1, Expedited = 2 }

	export enum RestoreRequestType { SELECT = 0 }

	export enum Tier { Standard = 0, Bulk = 1, Expedited = 2 }


	/**Describes the parameters for Select job types. */
	export interface SelectParameters {

		/**Describes the serialization format of the object. */
		InputSerialization: InputSerialization;
		ExpressionType: SelectParametersExpressionType;
		Expression: string;

		/**Describes how results of the Select job are serialized. */
		OutputSerialization: OutputSerialization;
	}

	export enum SelectParametersExpressionType { SQL = 0 }


	/**Describes the location where the restore job's output is stored. */
	export interface OutputLocation {

		/**Describes an Amazon S3 location that will receive the results of the restore request. */
		S3?: S3Location;
	}

	export interface SelectObjectContentOutput {

		/**The container for selecting objects from a content event stream. */
		Payload?: SelectObjectContentEventStream;
	}


	/**Describes how an uncompressed comma-separated values (CSV)-formatted input object is formatted. */
	export interface CSVInput {
		FileHeaderInfo?: CSVInputFileHeaderInfo;
		Comments?: string;
		QuoteEscapeCharacter?: string;
		RecordDelimiter?: string;
		FieldDelimiter?: string;
		QuoteCharacter?: string;
		AllowQuotedRecordDelimiter?: boolean;
	}

	export enum CSVInputFileHeaderInfo { USE = 0, IGNORE = 1, NONE = 2 }

	export enum CompressionType { NONE = 0, GZIP = 1, BZIP2 = 2 }


	/**Specifies JSON as object's input serialization format. */
	export interface JSONInput {
		Type?: JSONInputType;
	}

	export enum JSONInputType { DOCUMENT = 0, LINES = 1 }


	/**Describes how uncompressed comma-separated values (CSV)-formatted results are formatted. */
	export interface CSVOutput {
		QuoteFields?: CSVOutputQuoteFields;
		QuoteEscapeCharacter?: string;
		RecordDelimiter?: string;
		FieldDelimiter?: string;
		QuoteCharacter?: string;
	}

	export enum CSVOutputQuoteFields { ALWAYS = 0, ASNEEDED = 1 }


	/**Specifies JSON as request's output serialization format. */
	export interface JSONOutput {
		RecordDelimiter?: string;
	}

	export interface UploadPartCopyOutput {

		/**Container for all response elements. */
		CopyPartResult?: CopyPartResult;
	}


	/**Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config"> Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
	export interface AbortIncompleteMultipartUpload {
		DaysAfterInitiation?: number;
	}


	/**If present, indicates that the requester was successfully charged for the request. */
	export enum RequestCharged { requester = 0 }


	/**Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>. */
	export enum RequestPayer { requester = 0 }


	/**Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Amazon S3 Transfer Acceleration</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
	export interface AccelerateConfiguration {
		Status?: AccelerateConfigurationStatus;
	}

	export enum AccelerateConfigurationStatus { Enabled = 0, Suspended = 1 }


	/**Contains the elements that set the ACL permissions for an object per grantee. */
	export interface AccessControlPolicy {
		Grants?: Array<Grant>;

		/**Container for the owner's display name and ID. */
		Owner?: Owner;
	}

	export enum OwnerOverride { Destination = 0 }


	/**A container for information about access control for replicas. */
	export interface AccessControlTranslation {
		Owner: AccessControlTranslationOwner;
	}

	export enum AccessControlTranslationOwner { Destination = 0 }


	/**A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates in any combination, and an object must match all of the predicates for the filter to apply. */
	export interface AnalyticsAndOperator {
		Prefix?: string;
		Tags?: Array<Tag>;
	}


	/** Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket. */
	export interface AnalyticsConfiguration {
		Id: string;

		/**The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis. */
		Filter?: AnalyticsFilter;

		/**Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket. */
		StorageClassAnalysis: StorageClassAnalysis;
	}


	/**Contains information about where to publish the analytics results. */
	export interface AnalyticsS3BucketDestination {
		Format: AnalyticsS3BucketDestinationFormat;
		BucketAccountId?: string;
		Bucket: string;
		Prefix?: string;
	}

	export enum AnalyticsS3BucketDestinationFormat { CSV = 0 }


	/**Where to publish the analytics results. */
	export interface AnalyticsExportDestination {

		/**Contains information about where to publish the analytics results. */
		S3BucketDestination: AnalyticsS3BucketDestination;
	}


	/**A container of a key value name pair. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export enum AnalyticsS3ExportFileFormat { CSV = 0 }


	/** In terms of implementation, a Bucket is a resource. An Amazon S3 bucket name is globally unique, and the namespace is shared by all AWS accounts.  */
	export interface Bucket {
		Name?: string;
		CreationDate?: Date;
	}

	export enum BucketCannedACL { private = 0, public-read = 1, public-read-write = 2, authenticated-read = 3 }


	/**Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
	export interface BucketLifecycleConfiguration {
		Rules: Array<LifecycleRule>;
	}


	/**Container for logging status information. */
	export interface BucketLoggingStatus {

		/**Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the <i>Amazon Simple Storage Service API Reference</i>. */
		LoggingEnabled?: LoggingEnabled;
	}

	export enum BucketLogsPermission { FULL_CONTROL = 0, READ = 1, WRITE = 2 }


	/**Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource Sharing</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
	export interface CORSConfiguration {
		CORSRules: Array<CORSRule>;
	}


	/**Specifies a cross-origin access rule for an Amazon S3 bucket. */
	export interface CORSRule {
		AllowedHeaders?: Array<AllowedHeader>;
		AllowedMethods: Array<AllowedMethod>;
		AllowedOrigins: Array<AllowedOrigin>;
		ExposeHeaders?: Array<ExposeHeader>;
		MaxAgeSeconds?: number;
	}

	export enum FileHeaderInfo { USE = 0, IGNORE = 1, NONE = 2 }

	export enum QuoteFields { ALWAYS = 0, ASNEEDED = 1 }


	/**The bucket event for which to send notifications. */
	export enum Event { s3:ReducedRedundancyLostObject = 0, s3:ObjectCreated:* = 1, s3:ObjectCreated:Put = 2, s3:ObjectCreated:Post = 3, s3:ObjectCreated:Copy = 4, s3:ObjectCreated:CompleteMultipartUpload = 5, s3:ObjectRemoved:* = 6, s3:ObjectRemoved:Delete = 7, s3:ObjectRemoved:DeleteMarkerCreated = 8, s3:ObjectRestore:* = 9, s3:ObjectRestore:Post = 10, s3:ObjectRestore:Completed = 11, s3:Replication:* = 12, s3:Replication:OperationFailedReplication = 13, s3:Replication:OperationNotTracked = 14, s3:Replication:OperationMissedThreshold = 15, s3:Replication:OperationReplicatedAfterThreshold = 16 }


	/**Container for all (if there are any) keys between Prefix and the next occurrence of the string specified by a delimiter. CommonPrefixes lists keys that act like subdirectories in the directory specified by Prefix. For example, if the prefix is notes/ and the delimiter is a slash (/) as in notes/summer/july, the common prefix is notes/summer/.  */
	export interface CommonPrefix {
		Prefix?: string;
	}

	export enum ServerSideEncryption { AES256 = 0, aws:kms = 1 }


	/**The container for the completed multipart upload details. */
	export interface CompletedMultipartUpload {
		Parts?: Array<CompletedPart>;
	}

	export interface CompleteMultipartUploadRequest {

		/**The container for the completed multipart upload details. */
		MultipartUpload?: CompletedMultipartUpload;
	}


	/**Details of the parts that were uploaded. */
	export interface CompletedPart {
		ETag?: string;
		PartNumber?: number;
	}


	/**A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error. */
	export interface Condition {
		HttpErrorCodeReturnedEquals?: string;
		KeyPrefixEquals?: string;
	}


	/**Container for all response elements. */
	export interface CopyObjectResult {
		ETag?: string;
		LastModified?: Date;
	}

	export enum ObjectCannedACL { private = 0, public-read = 1, public-read-write = 2, authenticated-read = 3, aws-exec-read = 4, bucket-owner-read = 5, bucket-owner-full-control = 6 }

	export enum MetadataDirective { COPY = 0, REPLACE = 1 }

	export enum TaggingDirective { COPY = 0, REPLACE = 1 }

	export enum StorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, STANDARD_IA = 2, ONEZONE_IA = 3, INTELLIGENT_TIERING = 4, GLACIER = 5, DEEP_ARCHIVE = 6 }

	export enum ObjectLockMode { GOVERNANCE = 0, COMPLIANCE = 1 }

	export interface CopyObjectRequest {
		Metadata?: Metadata;
	}


	/**Container for all response elements. */
	export interface CopyPartResult {
		ETag?: string;
		LastModified?: Date;
	}


	/**The configuration information for the bucket. */
	export interface CreateBucketConfiguration {
		LocationConstraint?: CreateBucketConfigurationLocationConstraint;
	}

	export enum CreateBucketConfigurationLocationConstraint { EU = 0, eu-west-1 = 1, us-west-1 = 2, us-west-2 = 3, ap-south-1 = 4, ap-southeast-1 = 5, ap-southeast-2 = 6, ap-northeast-1 = 7, sa-east-1 = 8, cn-north-1 = 9, eu-central-1 = 10 }

	export interface CreateBucketRequest {

		/**The configuration information for the bucket. */
		CreateBucketConfiguration?: CreateBucketConfiguration;
	}

	export interface CreateMultipartUploadRequest {
		Metadata?: Metadata;
	}


	/**The container element for specifying the default Object Lock retention settings for new objects placed in the specified bucket. */
	export interface DefaultRetention {
		Mode?: DefaultRetentionMode;
		Days?: number;
		Years?: number;
	}

	export enum DefaultRetentionMode { GOVERNANCE = 0, COMPLIANCE = 1 }


	/**Container for the objects to delete. */
	export interface Delete {
		Objects: Array<ObjectIdentifier>;
		Quiet?: boolean;
	}


	/**Information about the delete marker. */
	export interface DeleteMarkerEntry {

		/**Container for the owner's display name and ID. */
		Owner?: Owner;
		Key?: string;
		VersionId?: string;
		IsLatest?: boolean;
		LastModified?: Date;
	}

	export enum DeleteMarkerReplicationStatus { Enabled = 0, Disabled = 1 }


	/**<p>Specifies whether Amazon S3 replicates the delete markers. If you specify a <code>Filter</code>, you must specify this element. However, in the latest version of replication configuration (when <code>Filter</code> is specified), Amazon S3 doesn't replicate delete markers. Therefore, the <code>DeleteMarkerReplication</code> element can contain only &lt;Status&gt;Disabled&lt;/Status&gt;. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>. </p> <note> <p> If you don't specify the <code>Filter</code> element, Amazon S3 assumes that the replication configuration is the earlier version, V1. In the earlier version, Amazon S3 handled replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p> </note> */
	export interface DeleteMarkerReplication {
		Status?: DeleteMarkerReplicationStatus;
	}

	export enum DeleteMarkerReplicationStatus { Enabled = 0, Disabled = 1 }

	export interface DeleteObjectsRequest {

		/**Container for the objects to delete. */
		Delete: Delete;
	}


	/**Information about the deleted object. */
	export interface DeletedObject {
		Key?: string;
		VersionId?: string;
		DeleteMarker?: boolean;
		DeleteMarkerVersionId?: string;
	}


	/**Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects. */
	export interface EncryptionConfiguration {
		ReplicaKmsKeyID?: string;
	}


	/** A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a <code>Metrics</code> block.  */
	export interface ReplicationTime {
		Status: ReplicationTimeStatus;

		/**A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics <code>EventThreshold</code>. */
		Time: ReplicationTimeValue;
	}

	export enum ReplicationTimeStatus { Enabled = 0, Disabled = 1 }


	/** A container specifying replication metrics-related settings enabling metrics and Amazon S3 events for S3 Replication Time Control (S3 RTC). Must be specified together with a <code>ReplicationTime</code> block.  */
	export interface Metrics {
		Status: MetricsStatus;

		/**A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics <code>EventThreshold</code>. */
		EventThreshold: ReplicationTimeValue;
	}

	export enum MetricsStatus { Enabled = 0, Disabled = 1 }


	/**Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket and S3 Replication Time Control (S3 RTC). */
	export interface Destination {
		Bucket: string;
		Account?: string;
		StorageClass?: DestinationStorageClass;

		/**A container for information about access control for replicas. */
		AccessControlTranslation?: AccessControlTranslation;

		/**Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects. */
		EncryptionConfiguration?: EncryptionConfiguration;

		/**A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a <code>Metrics</code> block. */
		ReplicationTime?: ReplicationTime;

		/**A container specifying replication metrics-related settings enabling metrics and Amazon S3 events for S3 Replication Time Control (S3 RTC). Must be specified together with a <code>ReplicationTime</code> block. */
		Metrics?: Metrics;
	}

	export enum DestinationStorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, STANDARD_IA = 2, ONEZONE_IA = 3, INTELLIGENT_TIERING = 4, GLACIER = 5, DEEP_ARCHIVE = 6 }


	/**Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. */
	export enum EncodingType { url = 0 }


	/**Contains the type of server-side encryption used. */
	export interface Encryption {
		EncryptionType: EncryptionEncryptionType;
		KMSKeyId?: string;
		KMSContext?: string;
	}

	export enum EncryptionEncryptionType { AES256 = 0, aws:kms = 1 }


	/**Container for all error elements. */
	export interface Error {
		Key?: string;
		VersionId?: string;
		Code?: string;
		Message?: string;
	}

	export enum ExistingObjectReplicationStatus { Enabled = 0, Disabled = 1 }


	/**Optional configuration to replicate existing source bucket objects. For more information, see <a href=" https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-what-is-isnot-replicated.html#existing-object-replication">Replicating Existing Objects</a> in the <i>Amazon S3 Developer Guide</i>.  */
	export interface ExistingObjectReplication {
		Status: ExistingObjectReplicationStatus;
	}

	export enum ExistingObjectReplicationStatus { Enabled = 0, Disabled = 1 }

	export enum ExpirationStatus { Enabled = 0, Disabled = 1 }

	export enum ExpressionType { SQL = 0 }

	export enum FilterRuleName { prefix = 0, suffix = 1 }


	/**Specifies the Amazon S3 object key name to filter on and whether to filter on the suffix or prefix of the key name. */
	export interface FilterRule {
		Name?: FilterRuleName;
		Value?: string;
	}

	export enum FilterRuleName { prefix = 0, suffix = 1 }


	/**Specifies the default server-side-encryption configuration. */
	export interface ServerSideEncryptionConfiguration {
		Rules: Array<ServerSideEncryptionRule>;
	}


	/**Specifies the inventory configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html">GET Bucket inventory</a> in the <i>Amazon Simple Storage Service API Reference</i>.  */
	export interface InventoryConfiguration {

		/**Specifies the inventory configuration for an Amazon S3 bucket. */
		Destination: InventoryDestination;
		IsEnabled: boolean;

		/**Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria. */
		Filter?: InventoryFilter;
		Id: string;
		IncludedObjectVersions: InventoryConfigurationIncludedObjectVersions;
		OptionalFields?: Array<InventoryOptionalField>;

		/**Specifies the schedule for generating inventory results. */
		Schedule: InventorySchedule;
	}

	export enum InventoryConfigurationIncludedObjectVersions { All = 0, Current = 1 }


	/**Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html"> PUT Bucket metrics</a> in the <i>Amazon Simple Storage Service API Reference</i>. */
	export interface MetricsConfiguration {
		Id: string;

		/**Specifies a metrics configuration filter. The metrics configuration only includes objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction (MetricsAndOperator). */
		Filter?: MetricsFilter;
	}


	/**The container element for a bucket's policy status. */
	export interface PolicyStatus {
		IsPublic?: boolean;
	}


	/**A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB. */
	export interface ReplicationConfiguration {
		Role: string;
		Rules: Array<ReplicationRule>;
	}

	export enum MFADeleteStatus { Enabled = 0, Disabled = 1 }


	/**A Legal Hold configuration for an object. */
	export interface ObjectLockLegalHold {
		Status?: ObjectLockLegalHoldStatus;
	}

	export enum ObjectLockLegalHoldStatus { ON = 0, OFF = 1 }


	/**The container element for Object Lock configuration parameters. */
	export interface ObjectLockConfiguration {
		ObjectLockEnabled?: ObjectLockConfigurationObjectLockEnabled;

		/**The container element for an Object Lock rule. */
		Rule?: ObjectLockRule;
	}

	export enum ObjectLockConfigurationObjectLockEnabled { Enabled = 0 }

	export enum ReplicationStatus { COMPLETE = 0, PENDING = 1, FAILED = 2, REPLICA = 3 }


	/**A Retention configuration for an object. */
	export interface ObjectLockRetention {
		Mode?: ObjectLockRetentionMode;
		RetainUntilDate?: Date;
	}

	export enum ObjectLockRetentionMode { GOVERNANCE = 0, COMPLIANCE = 1 }


	/**The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.  */
	export interface PublicAccessBlockConfiguration {
		BlockPublicAcls?: boolean;
		IgnorePublicAcls?: boolean;
		BlockPublicPolicy?: boolean;
		RestrictPublicBuckets?: boolean;
	}


	/**Container for the person being granted permissions. */
	export interface Grantee {
		DisplayName?: string;
		EmailAddress?: string;
		ID?: string;
		Type: GranteeType;
		URI?: string;
	}

	export enum GranteeType { CanonicalUser = 0, AmazonCustomerByEmail = 1, Group = 2 }

	export enum Permission { FULL_CONTROL = 0, WRITE = 1, WRITE_ACP = 2, READ = 3, READ_ACP = 4 }


	/**Container for grant information. */
	export interface Grant {

		/**Container for the person being granted permissions. */
		Grantee?: Grantee;
		Permission?: GrantPermission;
	}

	export enum GrantPermission { FULL_CONTROL = 0, WRITE = 1, WRITE_ACP = 2, READ = 3, READ_ACP = 4 }

	export enum Type { CanonicalUser = 0, AmazonCustomerByEmail = 1, Group = 2 }


	/**Container element that identifies who initiated the multipart upload.  */
	export interface Initiator {
		ID?: string;
		DisplayName?: string;
	}


	/**Describes the serialization format of the object. */
	export interface InputSerialization {

		/**Describes how an uncompressed comma-separated values (CSV)-formatted input object is formatted. */
		CSV?: CSVInput;
		CompressionType?: InputSerializationCompressionType;

		/**Specifies JSON as object's input serialization format. */
		JSON?: JSONInput;

		/**Container for Parquet. */
		Parquet?: ParquetInput;
	}

	export enum InputSerializationCompressionType { NONE = 0, GZIP = 1, BZIP2 = 2 }


	/**Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where inventory results are published. */
	export interface InventoryS3BucketDestination {
		AccountId?: string;
		Bucket: string;
		Format: InventoryS3BucketDestinationFormat;
		Prefix?: string;

		/**Contains the type of server-side encryption used to encrypt the inventory results. */
		Encryption?: InventoryEncryption;
	}

	export enum InventoryS3BucketDestinationFormat { CSV = 0, ORC = 1, Parquet = 2 }


	/**Specifies the use of SSE-KMS to encrypt delivered inventory reports. */
	export interface SSEKMS {
		KeyId: string;
	}


	/**Contains the type of server-side encryption used to encrypt the inventory results. */
	export interface InventoryEncryption {

		/**Specifies the use of SSE-S3 to encrypt delivered inventory reports. */
		SSES3?: SSES3;

		/**Specifies the use of SSE-KMS to encrypt delivered inventory reports. */
		SSEKMS?: SSEKMS;
	}

	export enum InventoryFormat { CSV = 0, ORC = 1, Parquet = 2 }

	export enum InventoryFrequency { Daily = 0, Weekly = 1 }

	export enum InventoryOptionalField { Size = 0, LastModifiedDate = 1, StorageClass = 2, ETag = 3, IsMultipartUploaded = 4, ReplicationStatus = 5, EncryptionStatus = 6, ObjectLockRetainUntilDate = 7, ObjectLockMode = 8, ObjectLockLegalHoldStatus = 9, IntelligentTieringAccessTier = 10 }

	export enum JSONType { DOCUMENT = 0, LINES = 1 }


	/**Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
	export interface NotificationConfigurationFilter {

		/**A container for object key name prefix and suffix filtering rules. */
		Key?: S3KeyFilter;
	}


	/**A container for specifying the configuration for AWS Lambda notifications. */
	export interface LambdaFunctionConfiguration {

		/**An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID. */
		Id?: string;
		LambdaFunctionArn: string;
		Events: Array<Event>;

		/**Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		Filter?: NotificationConfigurationFilter;
	}


	/**Container for lifecycle rules. You can add as many as 1000 rules. */
	export interface LifecycleConfiguration {
		Rules: Array<Rule>;
	}


	/**Container for the expiration for the lifecycle of the object. */
	export interface LifecycleExpiration {
		Date?: Date;
		Days?: number;
		ExpiredObjectDeleteMarker?: boolean;
	}


	/**The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or <code>And</code> specified. */
	export interface LifecycleRuleFilter {
		Prefix?: string;

		/**A container of a key value name pair. */
		Tag?: Tag;

		/**This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator. */
		And?: LifecycleRuleAndOperator;
	}


	/**Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime. */
	export interface NoncurrentVersionExpiration {
		NoncurrentDays?: number;
	}


	/**A lifecycle rule for individual objects in an Amazon S3 bucket. */
	export interface LifecycleRule {

		/**Container for the expiration for the lifecycle of the object. */
		Expiration?: LifecycleExpiration;
		ID?: string;
		Prefix?: string;

		/**The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or <code>And</code> specified. */
		Filter?: LifecycleRuleFilter;
		Status: LifecycleRuleStatus;
		Transitions?: Array<Transition>;
		NoncurrentVersionTransitions?: Array<NoncurrentVersionTransition>;

		/**Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime. */
		NoncurrentVersionExpiration?: NoncurrentVersionExpiration;

		/**Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config"> Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
	}

	export enum LifecycleRuleStatus { Enabled = 0, Disabled = 1 }


	/**This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator. */
	export interface LifecycleRuleAndOperator {
		Prefix?: string;
		Tags?: Array<Tag>;
	}


	/**A metadata key-value pair to store with an object. */
	export interface MetadataEntry {
		Name?: string;
		Value?: string;
	}

	export enum MetricsStatus { Enabled = 0, Disabled = 1 }


	/** A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics <code>EventThreshold</code>.  */
	export interface ReplicationTimeValue {
		Minutes?: number;
	}


	/**A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply. */
	export interface MetricsAndOperator {
		Prefix?: string;
		Tags?: Array<Tag>;
	}


	/**Container for the <code>MultipartUpload</code> for the Amazon S3 object. */
	export interface MultipartUpload {
		UploadId?: string;
		Key?: string;
		Initiated?: Date;
		StorageClass?: MultipartUploadStorageClass;

		/**Container for the owner's display name and ID. */
		Owner?: Owner;

		/**Container element that identifies who initiated the multipart upload. */
		Initiator?: Initiator;
	}

	export enum MultipartUploadStorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, STANDARD_IA = 2, ONEZONE_IA = 3, INTELLIGENT_TIERING = 4, GLACIER = 5, DEEP_ARCHIVE = 6 }

	export enum TransitionStorageClass { GLACIER = 0, STANDARD_IA = 1, ONEZONE_IA = 2, INTELLIGENT_TIERING = 3, DEEP_ARCHIVE = 4 }


	/**Container for the transition rule that describes when noncurrent objects transition to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class at a specific period in the object's lifetime. */
	export interface NoncurrentVersionTransition {
		NoncurrentDays?: number;
		StorageClass?: NoncurrentVersionTransitionStorageClass;
	}

	export enum NoncurrentVersionTransitionStorageClass { GLACIER = 0, STANDARD_IA = 1, ONEZONE_IA = 2, INTELLIGENT_TIERING = 3, DEEP_ARCHIVE = 4 }


	/**A container for object key name prefix and suffix filtering rules. */
	export interface S3KeyFilter {

		/**A list of containers for the key-value pair that defines the criteria for the filter rule. */
		FilterRules?: Array<FilterRule>;
	}

	export enum ObjectStorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, GLACIER = 2, STANDARD_IA = 3, ONEZONE_IA = 4, INTELLIGENT_TIERING = 5, DEEP_ARCHIVE = 6 }


	/**An object consists of data and its descriptive metadata. */
	export interface Object {
		Key?: string;
		LastModified?: Date;
		ETag?: string;
		Size?: number;
		StorageClass?: ObjectStorageClass;

		/**Container for the owner's display name and ID. */
		Owner?: Owner;
	}

	export enum ObjectStorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, GLACIER = 2, STANDARD_IA = 3, ONEZONE_IA = 4, INTELLIGENT_TIERING = 5, DEEP_ARCHIVE = 6 }


	/**Object Identifier is unique value to identify objects. */
	export interface ObjectIdentifier {
		Key: string;
		VersionId?: string;
	}

	export enum ObjectVersionStorageClass { STANDARD = 0 }


	/**The version of an object. */
	export interface ObjectVersion {
		ETag?: string;
		Size?: number;
		StorageClass?: ObjectVersionStorageClass;
		Key?: string;
		VersionId?: string;
		IsLatest?: boolean;
		LastModified?: Date;

		/**Container for the owner's display name and ID. */
		Owner?: Owner;
	}

	export enum ObjectVersionStorageClass { STANDARD = 0 }


	/**Describes an Amazon S3 location that will receive the results of the restore request. */
	export interface S3Location {
		BucketName: string;
		Prefix: string;

		/**Contains the type of server-side encryption used. */
		Encryption?: Encryption;
		CannedACL?: S3LocationCannedACL;
		AccessControlList?: Array<Grant>;

		/**Container for <code>TagSet</code> elements. */
		Tagging?: Tagging;
		UserMetadata?: Array<MetadataEntry>;
		StorageClass?: S3LocationStorageClass;
	}

	export enum S3LocationCannedACL { private = 0, public-read = 1, public-read-write = 2, authenticated-read = 3, aws-exec-read = 4, bucket-owner-read = 5, bucket-owner-full-control = 6 }

	export enum S3LocationStorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, STANDARD_IA = 2, ONEZONE_IA = 3, INTELLIGENT_TIERING = 4, GLACIER = 5, DEEP_ARCHIVE = 6 }


	/**Describes how results of the Select job are serialized. */
	export interface OutputSerialization {

		/**Describes how uncompressed comma-separated values (CSV)-formatted results are formatted. */
		CSV?: CSVOutput;

		/**Specifies JSON as request's output serialization format. */
		JSON?: JSONOutput;
	}


	/**Container for elements related to a part. */
	export interface Part {
		PartNumber?: number;
		LastModified?: Date;
		ETag?: string;
		Size?: number;
	}


	/**This data type contains information about progress of an operation. */
	export interface Progress {
		BytesScanned?: number;
		BytesProcessed?: number;
		BytesReturned?: number;
	}


	/**This data type contains information about the progress event of an operation. */
	export interface ProgressEvent {

		/**This data type contains information about progress of an operation. */
		Details?: Progress;
	}

	export enum Protocol { http = 0, https = 1 }

	export interface PutBucketAccelerateConfigurationRequest {

		/**Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Amazon S3 Transfer Acceleration</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		AccelerateConfiguration: AccelerateConfiguration;
	}

	export interface PutBucketAclRequest {

		/**Contains the elements that set the ACL permissions for an object per grantee. */
		AccessControlPolicy?: AccessControlPolicy;
	}

	export interface PutBucketAnalyticsConfigurationRequest {

		/**Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket. */
		AnalyticsConfiguration: AnalyticsConfiguration;
	}

	export interface PutBucketCorsRequest {

		/**Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource Sharing</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		CORSConfiguration: CORSConfiguration;
	}

	export interface PutBucketEncryptionRequest {

		/**Specifies the default server-side-encryption configuration. */
		ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
	}

	export interface PutBucketInventoryConfigurationRequest {

		/**Specifies the inventory configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html">GET Bucket inventory</a> in the <i>Amazon Simple Storage Service API Reference</i>. */
		InventoryConfiguration: InventoryConfiguration;
	}

	export interface PutBucketLifecycleConfigurationRequest {

		/**Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		LifecycleConfiguration?: BucketLifecycleConfiguration;
	}

	export interface PutBucketLifecycleRequest {

		/**Container for lifecycle rules. You can add as many as 1000 rules. */
		LifecycleConfiguration?: LifecycleConfiguration;
	}

	export interface PutBucketLoggingRequest {

		/**Container for logging status information. */
		BucketLoggingStatus: BucketLoggingStatus;
	}

	export interface PutBucketMetricsConfigurationRequest {

		/**Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html"> PUT Bucket metrics</a> in the <i>Amazon Simple Storage Service API Reference</i>. */
		MetricsConfiguration: MetricsConfiguration;
	}

	export interface PutBucketNotificationConfigurationRequest {

		/**A container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off for the bucket. */
		NotificationConfiguration: NotificationConfiguration;
	}

	export interface PutBucketNotificationRequest {
		NotificationConfiguration: NotificationConfigurationDeprecated;
	}

	export interface PutBucketPolicyRequest {
		Policy: string;
	}

	export interface PutBucketReplicationRequest {

		/**A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB. */
		ReplicationConfiguration: ReplicationConfiguration;
	}


	/**Container for Payer. */
	export interface RequestPaymentConfiguration {
		Payer: RequestPaymentConfigurationPayer;
	}

	export enum RequestPaymentConfigurationPayer { Requester = 0, BucketOwner = 1 }

	export interface PutBucketRequestPaymentRequest {

		/**Container for Payer. */
		RequestPaymentConfiguration: RequestPaymentConfiguration;
	}


	/**Container for <code>TagSet</code> elements. */
	export interface Tagging {
		TagSet: Array<Tag>;
	}

	export interface PutBucketTaggingRequest {

		/**Container for <code>TagSet</code> elements. */
		Tagging: Tagging;
	}


	/**Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT Bucket versioning</a> in the <i>Amazon Simple Storage Service API Reference</i>. */
	export interface VersioningConfiguration {
		MFADelete?: VersioningConfigurationMFADelete;
		Status?: VersioningConfigurationStatus;
	}

	export enum VersioningConfigurationMFADelete { Enabled = 0, Disabled = 1 }

	export enum VersioningConfigurationStatus { Enabled = 0, Suspended = 1 }

	export interface PutBucketVersioningRequest {

		/**Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT Bucket versioning</a> in the <i>Amazon Simple Storage Service API Reference</i>. */
		VersioningConfiguration: VersioningConfiguration;
	}


	/**Specifies website configuration parameters for an Amazon S3 bucket. */
	export interface WebsiteConfiguration {

		/**The error information. */
		ErrorDocument?: ErrorDocument;

		/**Container for the <code>Suffix</code> element. */
		IndexDocument?: IndexDocument;

		/**Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket. */
		RedirectAllRequestsTo?: RedirectAllRequestsTo;
		RoutingRules?: Array<RoutingRule>;
	}

	export interface PutBucketWebsiteRequest {

		/**Specifies website configuration parameters for an Amazon S3 bucket. */
		WebsiteConfiguration: WebsiteConfiguration;
	}

	export interface PutObjectAclRequest {

		/**Contains the elements that set the ACL permissions for an object per grantee. */
		AccessControlPolicy?: AccessControlPolicy;
	}

	export interface PutObjectLegalHoldRequest {

		/**A Legal Hold configuration for an object. */
		LegalHold?: ObjectLockLegalHold;
	}

	export interface PutObjectLockConfigurationRequest {

		/**The container element for Object Lock configuration parameters. */
		ObjectLockConfiguration?: ObjectLockConfiguration;
	}

	export interface PutObjectRequest {
		Body?: string;
		Metadata?: Metadata;
	}

	export interface PutObjectRetentionRequest {

		/**A Retention configuration for an object. */
		Retention?: ObjectLockRetention;
	}

	export interface PutObjectTaggingRequest {

		/**Container for <code>TagSet</code> elements. */
		Tagging: Tagging;
	}

	export interface PutPublicAccessBlockRequest {

		/**The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		PublicAccessBlockConfiguration: PublicAccessBlockConfiguration;
	}


	/**Specifies the configuration for publishing messages to an Amazon Simple Queue Service (Amazon SQS) queue when Amazon S3 detects specified events. */
	export interface QueueConfiguration {

		/**An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID. */
		Id?: string;
		QueueArn: string;
		Events: Array<Event>;

		/**Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		Filter?: NotificationConfigurationFilter;
	}


	/**The container for the records event. */
	export interface RecordsEvent {
		Payload?: string;
	}


	/**Specifies how requests are redirected. In the event of an error, you can specify a different error code to return. */
	export interface Redirect {
		HostName?: string;
		HttpRedirectCode?: string;
		Protocol?: RedirectProtocol;
		ReplaceKeyPrefixWith?: string;
		ReplaceKeyWith?: string;
	}

	export enum RedirectProtocol { http = 0, https = 1 }


	/**A filter that identifies the subset of objects to which the replication rule applies. A <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or an <code>And</code> child element. */
	export interface ReplicationRuleFilter {
		Prefix?: string;

		/**A container of a key value name pair. */
		Tag?: Tag;

		/**<p>A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. </p> <p>For example:</p> <ul> <li> <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in an <code>And</code> tag. </p> </li> <li> <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an <code>And</code> tag</p> </li> </ul> */
		And?: ReplicationRuleAndOperator;
	}

	export enum ReplicationRuleStatus { Enabled = 0, Disabled = 1 }


	/**A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using a customer master key (CMK) stored in AWS Key Management Service (SSE-KMS). */
	export interface SourceSelectionCriteria {

		/**A container for filter information for the selection of S3 objects encrypted with AWS KMS. */
		SseKmsEncryptedObjects?: SseKmsEncryptedObjects;
	}


	/**Specifies which Amazon S3 objects to replicate and where to store the replicas. */
	export interface ReplicationRule {
		ID?: string;
		Priority?: number;
		Prefix?: string;

		/**A filter that identifies the subset of objects to which the replication rule applies. A <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or an <code>And</code> child element. */
		Filter?: ReplicationRuleFilter;
		Status: ReplicationRuleStatus;

		/**A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using a customer master key (CMK) stored in AWS Key Management Service (SSE-KMS). */
		SourceSelectionCriteria?: SourceSelectionCriteria;

		/**Optional configuration to replicate existing source bucket objects. For more information, see <a href=" https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-what-is-isnot-replicated.html#existing-object-replication">Replicating Existing Objects</a> in the <i>Amazon S3 Developer Guide</i>. */
		ExistingObjectReplication?: ExistingObjectReplication;

		/**Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket and S3 Replication Time Control (S3 RTC). */
		Destination: Destination;

		/**<p>Specifies whether Amazon S3 replicates the delete markers. If you specify a <code>Filter</code>, you must specify this element. However, in the latest version of replication configuration (when <code>Filter</code> is specified), Amazon S3 doesn't replicate delete markers. Therefore, the <code>DeleteMarkerReplication</code> element can contain only &lt;Status&gt;Disabled&lt;/Status&gt;. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>. </p> <note> <p> If you don't specify the <code>Filter</code> element, Amazon S3 assumes that the replication configuration is the earlier version, V1. In the earlier version, Amazon S3 handled replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p> </note> */
		DeleteMarkerReplication?: DeleteMarkerReplication;
	}

	export enum ReplicationRuleStatus { Enabled = 0, Disabled = 1 }


	/**<p>A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. </p> <p>For example:</p> <ul> <li> <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in an <code>And</code> tag. </p> </li> <li> <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an <code>And</code> tag</p> </li> </ul> */
	export interface ReplicationRuleAndOperator {
		Prefix?: string;
		Tags?: Array<Tag>;
	}

	export enum ReplicationTimeStatus { Enabled = 0, Disabled = 1 }


	/**Container for specifying if periodic <code>QueryProgress</code> messages should be sent. */
	export interface RequestProgress {
		Enabled?: boolean;
	}


	/**Container for restore job parameters. */
	export interface RestoreRequest {
		Days?: number;

		/**Container for S3 Glacier job parameters. */
		GlacierJobParameters?: GlacierJobParameters;
		Type?: RestoreRequestType;
		Tier?: RestoreRequestTier;
		Description?: string;

		/**Describes the parameters for Select job types. */
		SelectParameters?: SelectParameters;

		/**Describes the location where the restore job's output is stored. */
		OutputLocation?: OutputLocation;
	}

	export enum RestoreRequestType { SELECT = 0 }

	export enum RestoreRequestTier { Standard = 0, Bulk = 1, Expedited = 2 }

	export interface RestoreObjectRequest {

		/**Container for restore job parameters. */
		RestoreRequest?: RestoreRequest;
	}


	/**Specifies the redirect behavior and when a redirect is applied. */
	export interface RoutingRule {

		/**A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error. */
		Condition?: Condition;

		/**Specifies how requests are redirected. In the event of an error, you can specify a different error code to return. */
		Redirect: Redirect;
	}


	/**Specifies when an object transitions to a specified storage class. For more information about Amazon S3 lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html">Transitioning Objects Using Amazon S3 Lifecycle</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
	export interface Transition {
		Date?: Date;
		Days?: number;
		StorageClass?: TransitionStorageClass;
	}

	export enum TransitionStorageClass { GLACIER = 0, STANDARD_IA = 1, ONEZONE_IA = 2, INTELLIGENT_TIERING = 3, DEEP_ARCHIVE = 4 }


	/**Specifies lifecycle rules for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlifecycle.html">Put Bucket Lifecycle Configuration</a> in the <i>Amazon Simple Storage Service API Reference</i>. For examples, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html#API_PutBucketLifecycleConfiguration_Examples">Put Bucket Lifecycle Configuration Examples</a>  */
	export interface Rule {

		/**Container for the expiration for the lifecycle of the object. */
		Expiration?: LifecycleExpiration;
		ID?: string;
		Prefix: string;
		Status: RuleStatus;

		/**Specifies when an object transitions to a specified storage class. For more information about Amazon S3 lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html">Transitioning Objects Using Amazon S3 Lifecycle</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		Transition?: Transition;

		/**Container for the transition rule that describes when noncurrent objects transition to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class at a specific period in the object's lifetime. */
		NoncurrentVersionTransition?: NoncurrentVersionTransition;

		/**Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime. */
		NoncurrentVersionExpiration?: NoncurrentVersionExpiration;

		/**Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config"> Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
	}

	export enum RuleStatus { Enabled = 0, Disabled = 1 }


	/**Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional, but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range. */
	export interface ScanRange {
		Start?: number;
		End?: number;
	}


	/**Container for the Stats Event. */
	export interface StatsEvent {

		/**Container for the stats details. */
		Details?: Stats;
	}


	/**The container for selecting objects from a content event stream. */
	export interface SelectObjectContentEventStream {

		/**The container for the records event. */
		Records?: RecordsEvent;

		/**Container for the Stats Event. */
		Stats?: StatsEvent;

		/**This data type contains information about the progress event of an operation. */
		Progress?: ProgressEvent;

		/**<p/> */
		Cont?: ContinuationEvent;

		/**A message that indicates the request is complete and no more messages will be sent. You should not assume that the request is complete until the client receives an <code>EndEvent</code>. */
		End?: EndEvent;
	}


	/**Request to filter the contents of an Amazon S3 object based on a simple Structured Query Language (SQL) statement. In the request, along with the SQL expression, you must specify a data serialization format (JSON or CSV) of the object. Amazon S3 uses this to parse object data into records. It returns only records that match the specified SQL expression. You must also specify the data serialization format for the response. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html">S3Select API Documentation</a>. */
	export interface SelectObjectContentRequest {
		Expression: string;
		ExpressionType: SelectObjectContentRequestExpressionType;

		/**Container for specifying if periodic <code>QueryProgress</code> messages should be sent. */
		RequestProgress?: RequestProgress;

		/**Describes the serialization format of the object. */
		InputSerialization: InputSerialization;

		/**Describes how results of the Select job are serialized. */
		OutputSerialization: OutputSerialization;

		/**Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional, but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range. */
		ScanRange?: ScanRange;
	}

	export enum SelectObjectContentRequestExpressionType { SQL = 0 }


	/**Describes the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html">PUT Bucket encryption</a> in the <i>Amazon Simple Storage Service API Reference</i>. */
	export interface ServerSideEncryptionByDefault {
		SSEAlgorithm: ServerSideEncryptionByDefaultSSEAlgorithm;
		KMSMasterKeyID?: string;
	}

	export enum ServerSideEncryptionByDefaultSSEAlgorithm { AES256 = 0, aws:kms = 1 }


	/**Specifies the default server-side encryption configuration. */
	export interface ServerSideEncryptionRule {

		/**Describes the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html">PUT Bucket encryption</a> in the <i>Amazon Simple Storage Service API Reference</i>. */
		ApplyServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;
	}


	/**A container for filter information for the selection of S3 objects encrypted with AWS KMS. */
	export interface SseKmsEncryptedObjects {
		Status: SseKmsEncryptedObjectsStatus;
	}

	export enum SseKmsEncryptedObjectsStatus { Enabled = 0, Disabled = 1 }

	export enum SseKmsEncryptedObjectsStatus { Enabled = 0, Disabled = 1 }


	/**Container for the stats details. */
	export interface Stats {
		BytesScanned?: number;
		BytesProcessed?: number;
		BytesReturned?: number;
	}


	/**Container for data related to the storage class analysis for an Amazon S3 bucket for export. */
	export interface StorageClassAnalysisDataExport {
		OutputSchemaVersion: StorageClassAnalysisDataExportOutputSchemaVersion;

		/**Where to publish the analytics results. */
		Destination: AnalyticsExportDestination;
	}

	export enum StorageClassAnalysisDataExportOutputSchemaVersion { V_1 = 0 }

	export enum StorageClassAnalysisSchemaVersion { V_1 = 0 }


	/**Container for granting information. */
	export interface TargetGrant {

		/**Container for the person being granted permissions. */
		Grantee?: Grantee;
		Permission?: TargetGrantPermission;
	}

	export enum TargetGrantPermission { FULL_CONTROL = 0, READ = 1, WRITE = 2 }


	/**A container for specifying the configuration for publication of messages to an Amazon Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events. */
	export interface TopicConfiguration {

		/**An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID. */
		Id?: string;
		TopicArn: string;
		Events: Array<Event>;

		/**Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		Filter?: NotificationConfigurationFilter;
	}

	export interface UploadPartRequest {
		Body?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>This operation aborts a multipart upload. After a multipart upload is aborted, no additional parts can be uploaded using that upload ID. The storage consumed by any previously uploaded parts will be freed. However, if any part uploads are currently in progress, those part uploads might or might not succeed. As a result, it might be necessary to abort a given multipart upload multiple times in order to completely free all storage consumed by all parts. </p> <p>To verify that all parts have been removed, so you don't get charged for the part storage, you should call the <a>ListParts</a> operation and ensure that the parts list is empty.</p> <p>For information about permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload API and Permissions</a>.</p> <p>The following operations are related to <code>AbortMultipartUpload</code>:</p> <ul> <li> <p> <a>CreateMultipartUpload</a> </p> </li> <li> <p> <a>UploadPart</a> </p> </li> <li> <p> <a>CompleteMultipartUpload</a> </p> </li> <li> <p> <a>ListParts</a> </p> </li> <li> <p> <a>ListMultipartUploads</a> </p> </li> </ul>
		 * Delete /{Bucket}/{Key}#uploadId
		 * @param {string} Bucket <p>The bucket name to which the upload was taking place. </p> <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
		 * @param {string} Key Key of the object for which the multipart upload was initiated.
		 * @param {string} uploadId Upload ID that identifies the multipart upload.
		 * @return {void} 
		 */
		AbortMultipartUpload(Bucket: string, Key: string, uploadId: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '/' + (Key == null ? '' : encodeURIComponent(Key)) + '#uploadId&uploadId=' + (uploadId == null ? '' : encodeURIComponent(uploadId)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Lists the parts that have been uploaded for a specific multipart upload. This operation must include the upload ID, which you obtain by sending the initiate multipart upload request (see <a>CreateMultipartUpload</a>). This request returns a maximum of 1,000 uploaded parts. The default number of parts returned is 1,000 parts. You can restrict the number of parts returned by specifying the <code>max-parts</code> request parameter. If your multipart upload consists of more than 1,000 parts, the response returns an <code>IsTruncated</code> field with the value of true, and a <code>NextPartNumberMarker</code> element. In subsequent <code>ListParts</code> requests you can include the part-number-marker query string parameter and set its value to the <code>NextPartNumberMarker</code> field value from the previous response.</p> <p>For more information on multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html">Uploading Objects Using Multipart Upload</a>.</p> <p>For information on permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload API and Permissions</a>.</p> <p>The following operations are related to <code>ListParts</code>:</p> <ul> <li> <p> <a>CreateMultipartUpload</a> </p> </li> <li> <p> <a>UploadPart</a> </p> </li> <li> <p> <a>CompleteMultipartUpload</a> </p> </li> <li> <p> <a>AbortMultipartUpload</a> </p> </li> <li> <p> <a>ListMultipartUploads</a> </p> </li> </ul>
		 * Get /{Bucket}/{Key}#uploadId
		 * @param {string} Bucket <p>Name of the bucket to which the parts are being uploaded. </p> <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
		 * @param {string} Key Object key for which the multipart upload was initiated.
		 * @param {number} max_parts Sets the maximum number of parts to return.
		 * @param {number} part_number_marker Specifies the part after which listing should begin. Only parts with higher part numbers will be listed.
		 * @param {string} uploadId Upload ID identifying the multipart upload whose parts are being listed.
		 * @param {string} MaxParts Pagination limit
		 * @param {string} PartNumberMarker Pagination token
		 * @return {void} Success
		 */
		ListParts(Bucket: string, Key: string, max_parts: number, part_number_marker: number, uploadId: string, MaxParts: string, PartNumberMarker: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '/' + (Key == null ? '' : encodeURIComponent(Key)) + '#uploadId&max_parts=' + max_parts + '&part_number_marker=' + part_number_marker + '&uploadId=' + (uploadId == null ? '' : encodeURIComponent(uploadId)) + '&MaxParts=' + (MaxParts == null ? '' : encodeURIComponent(MaxParts)) + '&PartNumberMarker=' + (PartNumberMarker == null ? '' : encodeURIComponent(PartNumberMarker)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Deletes the bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted.</p> <p class="title"> <b>Related Resources</b> </p> <ul> <li> <p> </p> </li> <li> <p> </p> </li> </ul>
		 * Delete /{Bucket}
		 * @param {string} Bucket Specifies the bucket being deleted.
		 * @return {void} 
		 */
		DeleteBucket(Bucket: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns some or all (up to 1,000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Be sure to design your application to parse the contents of the response and handle it appropriately.</p> <important> <p>This API has been revised. We recommend that you use the newer version, <a>ListObjectsV2</a>, when developing applications. For backward compatibility, Amazon S3 continues to support <code>ListObjects</code>.</p> </important> <p>The following operations are related to <code>ListObjects</code>:</p> <ul> <li> <p> <a>ListObjectsV2</a> </p> </li> <li> <p> <a>GetObject</a> </p> </li> <li> <p> <a>PutObject</a> </p> </li> <li> <p> <a>CreateBucket</a> </p> </li> <li> <p> <a>ListBuckets</a> </p> </li> </ul>
		 * Get /{Bucket}
		 * @param {string} Bucket The name of the bucket containing the objects.
		 * @param {string} delimiter A delimiter is a character you use to group keys.
		 * @param {string} marker Specifies the key to start with when listing objects in a bucket.
		 * @param {number} max_keys Sets the maximum number of keys returned in the response. By default the API returns up to 1,000 key names. The response might contain fewer keys but will never contain more. 
		 * @param {string} prefix Limits the response to keys that begin with the specified prefix.
		 * @param {string} MaxKeys Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {void} Success
		 */
		ListObjects(Bucket: string, delimiter: string, encoding_type: ListMultipartUploadsOutputEncodingType, marker: string, max_keys: number, prefix: string, MaxKeys: string, Marker: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '&delimiter=' + (delimiter == null ? '' : encodeURIComponent(delimiter)) + '&encoding_type=' + encoding_type + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&max_keys=' + max_keys + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&MaxKeys=' + (MaxKeys == null ? '' : encodeURIComponent(MaxKeys)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Deletes an analytics configuration for the bucket (specified by the analytics configuration ID).</p> <p>To use this operation, you must have permissions to perform the <code>s3:PutAnalyticsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For information about the Amazon S3 analytics feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/analytics-storage-class.html">Amazon S3 Analytics – Storage Class Analysis</a>. </p> <p>The following operations are related to <code>DeleteBucketAnalyticsConfiguration</code>:</p> <ul> <li> <p> </p> </li> <li> <p> </p> </li> <li> <p> </p> </li> </ul>
		 * Delete /{Bucket}#analytics&id
		 * @param {string} Bucket The name of the bucket from which an analytics configuration is deleted.
		 * @param {string} id The ID that identifies the analytics configuration.
		 * @return {void} 
		 */
		DeleteBucketAnalyticsConfiguration(Bucket: string, id: string, analytics: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#analytics&id&id=' + (id == null ? '' : encodeURIComponent(id)) + '&analytics=' + analytics, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>This implementation of the GET operation returns an analytics configuration (identified by the analytics configuration ID) from the bucket.</p> <p>To use this operation, you must have permissions to perform the <code>s3:GetAnalyticsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources"> Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. </p> <p>For information about Amazon S3 analytics feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/analytics-storage-class.html">Amazon S3 Analytics – Storage Class Analysis</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> <p class="title"> <b>Related Resources</b> </p> <ul> <li> <p> </p> </li> <li> <p> </p> </li> <li> <p> </p> </li> </ul>
		 * Get /{Bucket}#analytics&id
		 * @param {string} Bucket The name of the bucket from which an analytics configuration is retrieved.
		 * @param {string} id The ID that identifies the analytics configuration.
		 * @return {void} Success
		 */
		GetBucketAnalyticsConfiguration(Bucket: string, id: string, analytics: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#analytics&id&id=' + (id == null ? '' : encodeURIComponent(id)) + '&analytics=' + analytics, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Deletes the <code>cors</code> configuration information set for the bucket.</p> <p>To use this operation, you must have permission to perform the <code>s3:PutBucketCORS</code> action. The bucket owner has this permission by default and can grant this permission to others. </p> <p>For information about <code>cors</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource Sharing</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> <p class="title"> <b>Related Resources:</b> </p> <ul> <li> <p> </p> </li> <li> <p> <a>RESTOPTIONSobject</a> </p> </li> </ul>
		 * Delete /{Bucket}#cors
		 * @param {string} Bucket Specifies the bucket whose <code>cors</code> configuration is being deleted.
		 * @return {void} 
		 */
		DeleteBucketCors(Bucket: string, cors: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#cors&cors=' + cors, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns the cors configuration information set for the bucket.</p> <p> To use this operation, you must have permission to perform the s3:GetBucketCORS action. By default, the bucket owner has this permission and can grant it to others.</p> <p> For more information about cors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html"> Enabling Cross-Origin Resource Sharing</a>.</p> <p>The following operations are related to <code>GetBucketCors</code>:</p> <ul> <li> <p> <a>PutBucketCors</a> </p> </li> <li> <p> <a>DeleteBucketCors</a> </p> </li> </ul>
		 * Get /{Bucket}#cors
		 * @param {string} Bucket The bucket name for which to get the cors configuration.
		 * @return {void} Success
		 */
		GetBucketCors(Bucket: string, cors: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#cors&cors=' + cors, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>This implementation of the DELETE operation removes default encryption from the bucket. For information about the Amazon S3 default encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Default Bucket Encryption</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> <p>To use this operation, you must have permissions to perform the <code>s3:PutEncryptionConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to your Amazon S3 Resources</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> <p class="title"> <b>Related Resources</b> </p> <ul> <li> <p> <a>PutBucketEncryption</a> </p> </li> <li> <p> <a>GetBucketEncryption</a> </p> </li> </ul>
		 * Delete /{Bucket}#encryption
		 * @param {string} Bucket The name of the bucket containing the server-side encryption configuration to delete.
		 * @return {void} 
		 */
		DeleteBucketEncryption(Bucket: string, encryption: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#encryption&encryption=' + encryption, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns the default encryption configuration for an Amazon S3 bucket. For information about the Amazon S3 default encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Default Bucket Encryption</a>.</p> <p> To use this operation, you must have permission to perform the <code>s3:GetEncryptionConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>The following operations are related to <code>GetBucketEncryption</code>:</p> <ul> <li> <p> <a>PutBucketEncryption</a> </p> </li> <li> <p> <a>DeleteBucketEncryption</a> </p> </li> </ul>
		 * Get /{Bucket}#encryption
		 * @param {string} Bucket The name of the bucket from which the server-side encryption configuration is retrieved.
		 * @return {void} Success
		 */
		GetBucketEncryption(Bucket: string, encryption: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#encryption&encryption=' + encryption, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Deletes an inventory configuration (identified by the inventory ID) from the bucket.</p> <p>To use this operation, you must have permissions to perform the <code>s3:PutInventoryConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a>.</p> <p>Operations related to <code>DeleteBucketInventoryConfiguration</code> include: </p> <ul> <li> <p> <a>GetBucketInventoryConfiguration</a> </p> </li> <li> <p> <a>PutBucketInventoryConfiguration</a> </p> </li> <li> <p> <a>ListBucketInventoryConfigurations</a> </p> </li> </ul>
		 * Delete /{Bucket}#inventory&id
		 * @param {string} Bucket The name of the bucket containing the inventory configuration to delete.
		 * @param {string} id The ID used to identify the inventory configuration.
		 * @return {void} 
		 */
		DeleteBucketInventoryConfiguration(Bucket: string, id: string, inventory: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#inventory&id&id=' + (id == null ? '' : encodeURIComponent(id)) + '&inventory=' + inventory, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns an inventory configuration (identified by the inventory configuration ID) from the bucket.</p> <p>To use this operation, you must have permissions to perform the <code>s3:GetInventoryConfiguration</code> action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a>.</p> <p>The following operations are related to <code>GetBucketInventoryConfiguration</code>:</p> <ul> <li> <p> <a>DeleteBucketInventoryConfiguration</a> </p> </li> <li> <p> <a>ListBucketInventoryConfigurations</a> </p> </li> <li> <p> <a>PutBucketInventoryConfiguration</a> </p> </li> </ul>
		 * Get /{Bucket}#inventory&id
		 * @param {string} Bucket The name of the bucket containing the inventory configuration to retrieve.
		 * @param {string} id The ID used to identify the inventory configuration.
		 * @return {void} Success
		 */
		GetBucketInventoryConfiguration(Bucket: string, id: string, inventory: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#inventory&id&id=' + (id == null ? '' : encodeURIComponent(id)) + '&inventory=' + inventory, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Deletes the lifecycle configuration from the specified bucket. Amazon S3 removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration.</p> <p>To use this operation, you must have permission to perform the <code>s3:PutLifecycleConfiguration</code> action. By default, the bucket owner has this permission and the bucket owner can grant this permission to others.</p> <p>There is usually some time lag before lifecycle configuration deletion is fully propagated to all the Amazon S3 systems.</p> <p>For more information about the object expiration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#intro-lifecycle-rules-actions">Elements to Describe Lifecycle Actions</a>.</p> <p>Related actions include:</p> <ul> <li> <p> <a>PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a>GetBucketLifecycleConfiguration</a> </p> </li> </ul>
		 * Delete /{Bucket}#lifecycle
		 * @param {string} Bucket The bucket name of the lifecycle to delete.
		 * @return {void} 
		 */
		DeleteBucketLifecycle(Bucket: string, lifecycle: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#lifecycle&lifecycle=' + lifecycle, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <note> <p>Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, or a combination of both. Accordingly, this section describes the latest API. The response describes the new filter element that you can use to specify a filter to select a subset of objects to which the rule applies. If you are still using previous version of the lifecycle configuration, it works. For the earlier API description, see <a>GetBucketLifecycle</a>.</p> </note> <p>Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a>.</p> <p>To use this operation, you must have permission to perform the <code>s3:GetLifecycleConfiguration</code> action. The bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p> <code>GetBucketLifecycleConfiguration</code> has the following special error:</p> <ul> <li> <p>Error code: <code>NoSuchLifecycleConfiguration</code> </p> <ul> <li> <p>Description: The lifecycle configuration does not exist.</p> </li> <li> <p>HTTP Status Code: 404 Not Found</p> </li> <li> <p>SOAP Fault Code Prefix: Client</p> </li> </ul> </li> </ul> <p>The following operations are related to <code>GetBucketLifecycleConfiguration</code>:</p> <ul> <li> <p> <a>GetBucketLifecycle</a> </p> </li> <li> <p> <a>PutBucketLifecycle</a> </p> </li> <li> <p> <a>DeleteBucketLifecycle</a> </p> </li> </ul>
		 * Get /{Bucket}#lifecycle
		 * @param {string} Bucket The name of the bucket for which to get the lifecycle information.
		 * @return {void} Success
		 */
		GetBucketLifecycleConfiguration(Bucket: string, lifecycle: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#lifecycle&lifecycle=' + lifecycle, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Deletes a metrics configuration for the Amazon CloudWatch request metrics (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics.</p> <p> To use this operation, you must have permissions to perform the <code>s3:PutMetricsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For information about CloudWatch request metrics for Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon CloudWatch</a>. </p> <p>The following operations are related to <code>DeleteBucketMetricsConfiguration</code>:</p> <ul> <li> <p> <a>GetBucketMetricsConfiguration</a> </p> </li> <li> <p> <a>PutBucketMetricsConfiguration</a> </p> </li> <li> <p> <a>ListBucketMetricsConfigurations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon CloudWatch</a> </p> </li> </ul>
		 * Delete /{Bucket}#metrics&id
		 * @param {string} Bucket The name of the bucket containing the metrics configuration to delete.
		 * @param {string} id The ID used to identify the metrics configuration.
		 * @return {void} 
		 */
		DeleteBucketMetricsConfiguration(Bucket: string, id: string, metrics: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#metrics&id&id=' + (id == null ? '' : encodeURIComponent(id)) + '&metrics=' + metrics, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Gets a metrics configuration (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics.</p> <p> To use this operation, you must have permissions to perform the <code>s3:GetMetricsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p> For information about CloudWatch request metrics for Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon CloudWatch</a>.</p> <p>The following operations are related to <code>GetBucketMetricsConfiguration</code>:</p> <ul> <li> <p> <a>PutBucketMetricsConfiguration</a> </p> </li> <li> <p> <a>DeleteBucketMetricsConfiguration</a> </p> </li> <li> <p> <a>ListBucketMetricsConfigurations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon CloudWatch</a> </p> </li> </ul>
		 * Get /{Bucket}#metrics&id
		 * @param {string} Bucket The name of the bucket containing the metrics configuration to retrieve.
		 * @param {string} id The ID used to identify the metrics configuration.
		 * @return {void} Success
		 */
		GetBucketMetricsConfiguration(Bucket: string, id: string, metrics: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#metrics&id&id=' + (id == null ? '' : encodeURIComponent(id)) + '&metrics=' + metrics, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>This implementation of the DELETE operation uses the policy subresource to delete the policy of a specified bucket. If you are using an identity other than the root user of the AWS account that owns the bucket, the calling identity must have the <code>DeleteBucketPolicy</code> permissions on the specified bucket and belong to the bucket owner's account to use this operation. </p> <p>If you don't have <code>DeleteBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error. </p> <important> <p>As a security precaution, the root user of the AWS account that owns a bucket can always use this operation, even if the policy explicitly denies the root user the ability to perform this action.</p> </important> <p>For more information about bucket policies, see <a href=" https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and UserPolicies</a>. </p> <p>The following operations are related to <code>DeleteBucketPolicy</code> </p> <ul> <li> <p> <a>CreateBucket</a> </p> </li> <li> <p> <a>DeleteObject</a> </p> </li> </ul>
		 * Delete /{Bucket}#policy
		 * @param {string} Bucket The bucket name.
		 * @return {void} 
		 */
		DeleteBucketPolicy(Bucket: string, policy: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#policy&policy=' + policy, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns the policy of a specified bucket. If you are using an identity other than the root user of the AWS account that owns the bucket, the calling identity must have the <code>GetBucketPolicy</code> permissions on the specified bucket and belong to the bucket owner's account in order to use this operation.</p> <p>If you don't have <code>GetBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error.</p> <important> <p>As a security precaution, the root user of the AWS account that owns a bucket can always use this operation, even if the policy explicitly denies the root user the ability to perform this action.</p> </important> <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p> <p>The following operation is related to <code>GetBucketPolicy</code>:</p> <ul> <li> <p> <a>GetObject</a> </p> </li> </ul>
		 * Get /{Bucket}#policy
		 * @param {string} Bucket The bucket name for which to get the bucket policy.
		 * @return {void} Success
		 */
		GetBucketPolicy(Bucket: string, policy: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#policy&policy=' + policy, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p> Deletes the replication configuration from the bucket.</p> <p>To use this operation, you must have permissions to perform the <code>s3:PutReplicationConfiguration</code> action. The bucket owner has these permissions by default and can grant it to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>. </p> <note> <p>It can take a while for the deletion of a replication configuration to fully propagate.</p> </note> <p> For information about replication configuration, see <a href=" https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">Replication</a> in the <i>Amazon S3 Developer Guide</i>. </p> <p>The following operations are related to <code>DeleteBucketReplication</code>:</p> <ul> <li> <p> <a>PutBucketReplication</a> </p> </li> <li> <p> <a>GetBucketReplication</a> </p> </li> </ul>
		 * Delete /{Bucket}#replication
		 * @param {string} Bucket  The bucket name. 
		 * @return {void} 
		 */
		DeleteBucketReplication(Bucket: string, replication: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#replication&replication=' + replication, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns the replication configuration of a bucket.</p> <note> <p> It can take a while to propagate the put or delete a replication configuration to all Amazon S3 systems. Therefore, a get request soon after put or delete can return a wrong result. </p> </note> <p> For information about replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">Replication</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> <p>This operation requires permissions for the <code>s3:GetReplicationConfiguration</code> action. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p> <p>If you include the <code>Filter</code> element in a replication configuration, you must also include the <code>DeleteMarkerReplication</code> and <code>Priority</code> elements. The response also returns those elements.</p> <p>For information about <code>GetBucketReplication</code> errors, see <a>ReplicationErrorCodeList</a> </p> <p>The following operations are related to <code>GetBucketReplication</code>:</p> <ul> <li> <p> <a>PutBucketReplication</a> </p> </li> <li> <p> <a>DeleteBucketReplication</a> </p> </li> </ul>
		 * Get /{Bucket}#replication
		 * @param {string} Bucket The bucket name for which to get the replication information.
		 * @return {void} Success
		 */
		GetBucketReplication(Bucket: string, replication: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#replication&replication=' + replication, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Deletes the tags from the bucket.</p> <p>To use this operation, you must have permission to perform the <code>s3:PutBucketTagging</code> action. By default, the bucket owner has this permission and can grant this permission to others. </p> <p>The following operations are related to <code>DeleteBucketTagging</code>:</p> <ul> <li> <p> <a>GetBucketTagging</a> </p> </li> <li> <p> <a>PutBucketTagging</a> </p> </li> </ul>
		 * Delete /{Bucket}#tagging
		 * @param {string} Bucket The bucket that has the tag set to be removed.
		 * @return {void} 
		 */
		DeleteBucketTagging(Bucket: string, tagging: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#tagging&tagging=' + tagging, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns the tag set associated with the bucket.</p> <p>To use this operation, you must have permission to perform the <code>s3:GetBucketTagging</code> action. By default, the bucket owner has this permission and can grant this permission to others.</p> <p> <code>GetBucketTagging</code> has the following special error:</p> <ul> <li> <p>Error code: <code>NoSuchTagSetError</code> </p> <ul> <li> <p>Description: There is no tag set associated with the bucket.</p> </li> </ul> </li> </ul> <p>The following operations are related to <code>GetBucketTagging</code>:</p> <ul> <li> <p> <a>PutBucketTagging</a> </p> </li> <li> <p> <a>DeleteBucketTagging</a> </p> </li> </ul>
		 * Get /{Bucket}#tagging
		 * @param {string} Bucket The name of the bucket for which to get the tagging information.
		 * @return {void} Success
		 */
		GetBucketTagging(Bucket: string, tagging: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#tagging&tagging=' + tagging, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>This operation removes the website configuration for a bucket. Amazon S3 returns a <code>200 OK</code> response upon successfully deleting a website configuration on the specified bucket. You will get a <code>200 OK</code> response if the website configuration you are trying to delete does not exist on the bucket. Amazon S3 returns a <code>404</code> response if the bucket specified in the request does not exist.</p> <p>This DELETE operation requires the <code>S3:DeleteBucketWebsite</code> permission. By default, only the bucket owner can delete the website configuration attached to a bucket. However, bucket owners can grant other users permission to delete the website configuration by writing a bucket policy granting them the <code>S3:DeleteBucketWebsite</code> permission. </p> <p>For more information about hosting websites, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a>. </p> <p>The following operations are related to <code>DeleteBucketWebsite</code>:</p> <ul> <li> <p> <a>GetBucketWebsite</a> </p> </li> <li> <p> <a>PutBucketWebsite</a> </p> </li> </ul>
		 * Delete /{Bucket}#website
		 * @param {string} Bucket The bucket name for which you want to remove the website configuration. 
		 * @return {void} 
		 */
		DeleteBucketWebsite(Bucket: string, website: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#website&website=' + website, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns the website configuration for a bucket. To host website on Amazon S3, you can configure a bucket as website by adding a website configuration. For more information about hosting websites, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a>. </p> <p>This GET operation requires the <code>S3:GetBucketWebsite</code> permission. By default, only the bucket owner can read the bucket website configuration. However, bucket owners can allow other users to read the website configuration by writing a bucket policy granting them the <code>S3:GetBucketWebsite</code> permission.</p> <p>The following operations are related to <code>DeleteBucketWebsite</code>:</p> <ul> <li> <p> <a>DeleteBucketWebsite</a> </p> </li> <li> <p> <a>PutBucketWebsite</a> </p> </li> </ul>
		 * Get /{Bucket}#website
		 * @param {string} Bucket The bucket name for which to get the website configuration.
		 * @return {void} Success
		 */
		GetBucketWebsite(Bucket: string, website: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#website&website=' + website, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Removes the null version (if there is one) of an object and inserts a delete marker, which becomes the latest version of the object. If there isn't a null version, Amazon S3 does not remove any objects.</p> <p>To remove a specific version, you must be the bucket owner and you must use the version Id subresource. Using this subresource permanently deletes the version. If the object deleted is a delete marker, Amazon S3 sets the response header, <code>x-amz-delete-marker</code>, to true. </p> <p>If the object you want to delete is in a bucket where the bucket versioning configuration is MFA Delete enabled, you must include the <code>x-amz-mfa</code> request header in the DELETE <code>versionId</code> request. Requests that include <code>x-amz-mfa</code> must use HTTPS. </p> <p> For more information about MFA Delete, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMFADelete.html">Using MFA Delete</a>. To see sample requests that use versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectDELETE.html#ExampleVersionObjectDelete">Sample Request</a>. </p> <p>You can delete objects by explicitly calling the DELETE Object API or configure its lifecycle (<a>PutBucketLifecycle</a>) to enable Amazon S3 to remove them for you. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them the <code>s3:DeleteObject</code>, <code>s3:DeleteObjectVersion</code>, and <code>s3:PutLifeCycleConfiguration</code> actions. </p> <p>The following operation is related to <code>DeleteObject</code>:</p> <ul> <li> <p> <a>PutObject</a> </p> </li> </ul>
		 * Delete /{Bucket}/{Key}
		 * @param {string} Bucket <p>The bucket name of the bucket containing the object. </p> <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
		 * @param {string} Key Key name of the object to delete.
		 * @param {string} versionId VersionId used to reference a specific version of the object.
		 * @return {void} 
		 */
		DeleteObject(Bucket: string, Key: string, versionId: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '/' + (Key == null ? '' : encodeURIComponent(Key)) + '&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Retrieves objects from Amazon S3. To use <code>GET</code>, you must have <code>READ</code> access to the object. If you grant <code>READ</code> access to the anonymous user, you can return the object without using an authorization header.</p> <p>An Amazon S3 bucket has no directory hierarchy such as you would find in a typical computer file system. You can, however, create a logical hierarchy by using object key names that imply a folder structure. For example, instead of naming an object <code>sample.jpg</code>, you can name it <code>photos/2006/February/sample.jpg</code>.</p> <p>To get an object from such a logical hierarchy, specify the full key name for the object in the <code>GET</code> operation. For a virtual hosted-style request example, if you have the object <code>photos/2006/February/sample.jpg</code>, specify the resource as <code>/photos/2006/February/sample.jpg</code>. For a path-style request example, if you have the object <code>photos/2006/February/sample.jpg</code> in the bucket named <code>examplebucket</code>, specify the resource as <code>/examplebucket/photos/2006/February/sample.jpg</code>. For more information about request types, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingSpecifyBucket">HTTP Host Header Bucket Specification</a>.</p> <p>To distribute large files to many people, you can save bandwidth costs by using BitTorrent. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3Torrent.html">Amazon S3 Torrent</a>. For more information about returning the ACL of an object, see <a>GetObjectAcl</a>.</p> <p>If the object you are retrieving is stored in the GLACIER or DEEP_ARCHIVE storage classes, before you can retrieve the object you must first restore a copy using . Otherwise, this operation returns an <code>InvalidObjectStateError</code> error. For information about restoring archived objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/restoring-objects.html">Restoring Archived Objects</a>.</p> <p>Encryption request headers, like <code>x-amz-server-side-encryption</code>, should not be sent for GET requests if your object uses server-side encryption with CMKs stored in AWS KMS (SSE-KMS) or server-side encryption with Amazon S3–managed encryption keys (SSE-S3). If your object does use these types of keys, you’ll get an HTTP 400 BadRequest error.</p> <p>If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you GET the object, you must use the following headers:</p> <ul> <li> <p>x-amz-server-side​-encryption​-customer-algorithm</p> </li> <li> <p>x-amz-server-side​-encryption​-customer-key</p> </li> <li> <p>x-amz-server-side​-encryption​-customer-key-MD5</p> </li> </ul> <p>For more information about SSE-C, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption (Using Customer-Provided Encryption Keys)</a>.</p> <p>Assuming you have permission to read object tags (permission for the <code>s3:GetObjectVersionTagging</code> action), the response also returns the <code>x-amz-tagging-count</code> header that provides the count of number of tags associated with the object. You can use <a>GetObjectTagging</a> to retrieve the tag set associated with an object.</p> <p> <b>Permissions</b> </p> <p>You need the <code>s3:GetObject</code> permission for this operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a Policy</a>. If the object you request does not exist, the error Amazon S3 returns depends on whether you also have the <code>s3:ListBucket</code> permission.</p> <ul> <li> <p>If you have the <code>s3:ListBucket</code> permission on the bucket, Amazon S3 will return an HTTP status code 404 ("no such key") error.</p> </li> <li> <p>If you don’t have the <code>s3:ListBucket</code> permission, Amazon S3 will return an HTTP status code 403 ("access denied") error.</p> </li> </ul> <p> <b>Versioning</b> </p> <p>By default, the GET operation returns the current version of an object. To return a different version, use the <code>versionId</code> subresource.</p> <note> <p>If the current version of the object is a delete marker, Amazon S3 behaves as if the object was deleted and includes <code>x-amz-delete-marker: true</code> in the response.</p> </note> <p>For more information about versioning, see <a>PutBucketVersioning</a>. </p> <p> <b>Overriding Response Header Values</b> </p> <p>There are times when you want to override certain response header values in a GET response. For example, you might override the Content-Disposition response header value in your GET request.</p> <p>You can override values for a set of response headers using the following query parameters. These response header values are sent only on a successful request, that is, when status code 200 OK is returned. The set of headers you can override using these parameters is a subset of the headers that Amazon S3 accepts when you create an object. The response headers that you can override for the GET response are <code>Content-Type</code>, <code>Content-Language</code>, <code>Expires</code>, <code>Cache-Control</code>, <code>Content-Disposition</code>, and <code>Content-Encoding</code>. To override these header values in the GET response, you use the following request parameters.</p> <note> <p>You must sign the request, either using an Authorization header or a presigned URL, when using these parameters. They cannot be used with an unsigned (anonymous) request.</p> </note> <ul> <li> <p> <code>response-content-type</code> </p> </li> <li> <p> <code>response-content-language</code> </p> </li> <li> <p> <code>response-expires</code> </p> </li> <li> <p> <code>response-cache-control</code> </p> </li> <li> <p> <code>response-content-disposition</code> </p> </li> <li> <p> <code>response-content-encoding</code> </p> </li> </ul> <p> <b>Additional Considerations about Request Headers</b> </p> <p>If both of the <code>If-Match</code> and <code>If-Unmodified-Since</code> headers are present in the request as follows: <code>If-Match</code> condition evaluates to <code>true</code>, and; <code>If-Unmodified-Since</code> condition evaluates to <code>false</code>; then, S3 returns 200 OK and the data requested. </p> <p>If both of the <code>If-None-Match</code> and <code>If-Modified-Since</code> headers are present in the request as follows:<code> If-None-Match</code> condition evaluates to <code>false</code>, and; <code>If-Modified-Since</code> condition evaluates to <code>true</code>; then, S3 returns 304 Not Modified response code.</p> <p>For more information about conditional requests, see <a href="https://tools.ietf.org/html/rfc7232">RFC 7232</a>.</p> <p>The following operations are related to <code>GetObject</code>:</p> <ul> <li> <p> <a>ListBuckets</a> </p> </li> <li> <p> <a>GetObjectAcl</a> </p> </li> </ul>
		 * Get /{Bucket}/{Key}
		 * @param {string} Bucket <p>The bucket name containing the object. </p> <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
		 * @param {string} Key Key of the object to get.
		 * @param {string} response_cache_control Sets the <code>Cache-Control</code> header of the response.
		 * @param {string} response_content_disposition Sets the <code>Content-Disposition</code> header of the response
		 * @param {string} response_content_encoding Sets the <code>Content-Encoding</code> header of the response.
		 * @param {string} response_content_language Sets the <code>Content-Language</code> header of the response.
		 * @param {string} response_content_type Sets the <code>Content-Type</code> header of the response.
		 * @param {Date} response_expires Sets the <code>Expires</code> header of the response.
		 * @param {string} versionId VersionId used to reference a specific version of the object.
		 * @param {number} partNumber Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' GET request for the part specified. Useful for downloading just a part of an object.
		 * @return {void} Success
		 */
		GetObject(Bucket: string, Key: string, response_cache_control: string, response_content_disposition: string, response_content_encoding: string, response_content_language: string, response_content_type: string, response_expires: Date, versionId: string, partNumber: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '/' + (Key == null ? '' : encodeURIComponent(Key)) + '&response_cache_control=' + (response_cache_control == null ? '' : encodeURIComponent(response_cache_control)) + '&response_content_disposition=' + (response_content_disposition == null ? '' : encodeURIComponent(response_content_disposition)) + '&response_content_encoding=' + (response_content_encoding == null ? '' : encodeURIComponent(response_content_encoding)) + '&response_content_language=' + (response_content_language == null ? '' : encodeURIComponent(response_content_language)) + '&response_content_type=' + (response_content_type == null ? '' : encodeURIComponent(response_content_type)) + '&response_expires=' + response_expires.toISOString() + '&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)) + '&partNumber=' + partNumber, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Removes the entire tag set from the specified object. For more information about managing object tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html"> Object Tagging</a>.</p> <p>To use this operation, you must have permission to perform the <code>s3:DeleteObjectTagging</code> action.</p> <p>To delete tags of a specific object version, add the <code>versionId</code> query parameter in the request. You will need permission for the <code>s3:DeleteObjectVersionTagging</code> action.</p> <p>The following operations are related to <code>DeleteBucketMetricsConfiguration</code>:</p> <ul> <li> <p> <a>PutObjectTagging</a> </p> </li> <li> <p> <a>GetObjectTagging</a> </p> </li> </ul>
		 * Delete /{Bucket}/{Key}#tagging
		 * @param {string} Bucket <p>The bucket name containing the objects from which to remove the tags. </p> <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
		 * @param {string} Key Name of the tag.
		 * @param {string} versionId The versionId of the object that the tag-set will be removed from.
		 * @return {void} 
		 */
		DeleteObjectTagging(Bucket: string, Key: string, versionId: string, tagging: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '/' + (Key == null ? '' : encodeURIComponent(Key)) + '#tagging&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)) + '&tagging=' + tagging, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns the tag-set of an object. You send the GET request against the tagging subresource associated with the object.</p> <p>To use this operation, you must have permission to perform the <code>s3:GetObjectTagging</code> action. By default, the GET operation returns information about current version of an object. For a versioned bucket, you can have multiple versions of an object in your bucket. To retrieve tags of any other version, use the versionId query parameter. You also need permission for the <code>s3:GetObjectVersionTagging</code> action.</p> <p> By default, the bucket owner has this permission and can grant this permission to others.</p> <p> For information about the Amazon S3 object tagging feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html">Object Tagging</a>.</p> <p>The following operation is related to <code>GetObjectTagging</code>:</p> <ul> <li> <p> <a>PutObjectTagging</a> </p> </li> </ul>
		 * Get /{Bucket}/{Key}#tagging
		 * @param {string} Bucket <p>The bucket name containing the object for which to get the tagging information. </p> <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
		 * @param {string} Key Object key for which to get the tagging information.
		 * @param {string} versionId The versionId of the object for which to get the tagging information.
		 * @return {void} Success
		 */
		GetObjectTagging(Bucket: string, Key: string, versionId: string, tagging: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '/' + (Key == null ? '' : encodeURIComponent(Key)) + '#tagging&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)) + '&tagging=' + tagging, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Removes the <code>PublicAccessBlock</code> configuration for an Amazon S3 bucket. To use this operation, you must have the <code>s3:PutBucketPublicAccessBlock</code> permission. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>The following operations are related to <code>DeletePublicAccessBlock</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 Block Public Access</a> </p> </li> <li> <p> <a>GetPublicAccessBlock</a> </p> </li> <li> <p> <a>PutPublicAccessBlock</a> </p> </li> <li> <p> <a>GetBucketPolicyStatus</a> </p> </li> </ul>
		 * Delete /{Bucket}#publicAccessBlock
		 * @param {string} Bucket The Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want to delete. 
		 * @return {void} 
		 */
		DeletePublicAccessBlock(Bucket: string, publicAccessBlock: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#publicAccessBlock&publicAccessBlock=' + publicAccessBlock, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Retrieves the <code>PublicAccessBlock</code> configuration for an Amazon S3 bucket. To use this operation, you must have the <code>s3:GetBucketPublicAccessBlock</code> permission. For more information about Amazon S3 permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a Policy</a>.</p> <important> <p>When Amazon S3 evaluates the <code>PublicAccessBlock</code> configuration for a bucket or an object, it checks the <code>PublicAccessBlock</code> configuration for both the bucket (or the bucket that contains the object) and the bucket owner's account. If the <code>PublicAccessBlock</code> settings are different between the bucket and the account, Amazon S3 uses the most restrictive combination of the bucket-level and account-level settings.</p> </important> <p>For more information about when Amazon S3 considers a bucket or an object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a>.</p> <p>The following operations are related to <code>GetPublicAccessBlock</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 Block Public Access</a> </p> </li> <li> <p> <a>PutPublicAccessBlock</a> </p> </li> <li> <p> <a>GetPublicAccessBlock</a> </p> </li> <li> <p> <a>DeletePublicAccessBlock</a> </p> </li> </ul>
		 * Get /{Bucket}#publicAccessBlock
		 * @param {string} Bucket The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want to retrieve. 
		 * @return {void} Success
		 */
		GetPublicAccessBlock(Bucket: string, publicAccessBlock: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#publicAccessBlock&publicAccessBlock=' + publicAccessBlock, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>This implementation of the GET operation uses the <code>accelerate</code> subresource to return the Transfer Acceleration state of a bucket, which is either <code>Enabled</code> or <code>Suspended</code>. Amazon S3 Transfer Acceleration is a bucket-level feature that enables you to perform faster data transfers to and from Amazon S3.</p> <p>To use this operation, you must have permission to perform the <code>s3:GetAccelerateConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to your Amazon S3 Resources</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> <p>You set the Transfer Acceleration state of an existing bucket to <code>Enabled</code> or <code>Suspended</code> by using the <a>PutBucketAccelerateConfiguration</a> operation. </p> <p>A GET <code>accelerate</code> request does not return a state value for a bucket that has no transfer acceleration state. A bucket has no Transfer Acceleration state if a state has never been set on the bucket. </p> <p>For more information about transfer acceleration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Transfer Acceleration</a> in the Amazon Simple Storage Service Developer Guide.</p> <p class="title"> <b>Related Resources</b> </p> <ul> <li> <p> <a>PutBucketAccelerateConfiguration</a> </p> </li> </ul>
		 * Get /{Bucket}#accelerate
		 * @param {string} Bucket Name of the bucket for which the accelerate configuration is retrieved.
		 * @return {void} Success
		 */
		GetBucketAccelerateConfiguration(Bucket: string, accelerate: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#accelerate&accelerate=' + accelerate, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>This implementation of the <code>GET</code> operation uses the <code>acl</code> subresource to return the access control list (ACL) of a bucket. To use <code>GET</code> to return the ACL of the bucket, you must have <code>READ_ACP</code> access to the bucket. If <code>READ_ACP</code> permission is granted to the anonymous user, you can return the ACL of the bucket without using an authorization header.</p> <p class="title"> <b>Related Resources</b> </p> <ul> <li> <p> </p> </li> </ul>
		 * Get /{Bucket}#acl
		 * @param {string} Bucket Specifies the S3 bucket whose ACL is being requested.
		 * @return {void} Success
		 */
		GetBucketAcl(Bucket: string, acl: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#acl&acl=' + acl, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <important> <p>For an updated version of this API, see <a>GetBucketLifecycleConfiguration</a>. If you configured a bucket lifecycle using the <code>filter</code> element, you should see the updated version of this topic. This topic is provided for backward compatibility.</p> </important> <p>Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a>.</p> <p> To use this operation, you must have permission to perform the <code>s3:GetLifecycleConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p> <code>GetBucketLifecycle</code> has the following special error:</p> <ul> <li> <p>Error code: <code>NoSuchLifecycleConfiguration</code> </p> <ul> <li> <p>Description: The lifecycle configuration does not exist.</p> </li> <li> <p>HTTP Status Code: 404 Not Found</p> </li> <li> <p>SOAP Fault Code Prefix: Client</p> </li> </ul> </li> </ul> <p>The following operations are related to <code>GetBucketLifecycle</code>:</p> <ul> <li> <p> <a>GetBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a>PutBucketLifecycle</a> </p> </li> <li> <p> <a>DeleteBucketLifecycle</a> </p> </li> </ul>
		 * Get /{Bucket}#lifecycle&deprecated!
		 * @param {string} Bucket The name of the bucket for which to get the lifecycle information.
		 * @return {void} Success
		 */
		GetBucketLifecycle(Bucket: string, lifecycle: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#lifecycle&deprecated!&lifecycle=' + lifecycle, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns the Region the bucket resides in. You set the bucket's Region using the <code>LocationConstraint</code> request parameter in a <code>CreateBucket</code> request. For more information, see <a>CreateBucket</a>.</p> <p> To use this implementation of the operation, you must be the bucket owner.</p> <p>The following operations are related to <code>GetBucketLocation</code>:</p> <ul> <li> <p> <a>GetObject</a> </p> </li> <li> <p> <a>CreateBucket</a> </p> </li> </ul>
		 * Get /{Bucket}#location
		 * @param {string} Bucket The name of the bucket for which to get the location.
		 * @return {void} Success
		 */
		GetBucketLocation(Bucket: string, location: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#location&location=' + location, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns the logging status of a bucket and the permissions users have to view and modify that status. To use GET, you must be the bucket owner.</p> <p>The following operations are related to <code>GetBucketLogging</code>:</p> <ul> <li> <p> <a>CreateBucket</a> </p> </li> <li> <p> <a>PutBucketLogging</a> </p> </li> </ul>
		 * Get /{Bucket}#logging
		 * @param {string} Bucket The bucket name for which to get the logging information.
		 * @return {void} Success
		 */
		GetBucketLogging(Bucket: string, logging: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#logging&logging=' + logging, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns the notification configuration of a bucket.</p> <p>If notifications are not enabled on the bucket, the operation returns an empty <code>NotificationConfiguration</code> element.</p> <p>By default, you must be the bucket owner to read the notification configuration of a bucket. However, the bucket owner can use a bucket policy to grant permission to other users to read this configuration with the <code>s3:GetBucketNotification</code> permission.</p> <p>For more information about setting and reading the notification configuration on a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Setting Up Notification of Bucket Events</a>. For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies</a>.</p> <p>The following operation is related to <code>GetBucketNotification</code>:</p> <ul> <li> <p> <a>PutBucketNotification</a> </p> </li> </ul>
		 * Get /{Bucket}#notification
		 * @param {string} Bucket Name of the bucket for which to get the notification configuration.
		 * @return {void} Success
		 */
		GetBucketNotificationConfiguration(Bucket: string, notification: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#notification&notification=' + notification, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * No longer used, see <a>GetBucketNotificationConfiguration</a>.
		 * Get /{Bucket}#notification&deprecated!
		 * @param {string} Bucket Name of the bucket for which to get the notification configuration.
		 * @return {void} Success
		 */
		GetBucketNotification(Bucket: string, notification: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#notification&deprecated!&notification=' + notification, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Retrieves the policy status for an Amazon S3 bucket, indicating whether the bucket is public. In order to use this operation, you must have the <code>s3:GetBucketPolicyStatus</code> permission. For more information about Amazon S3 permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a Policy</a>.</p> <p> For more information about when Amazon S3 considers a bucket public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a>. </p> <p>The following operations are related to <code>GetBucketPolicyStatus</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 Block Public Access</a> </p> </li> <li> <p> <a>GetPublicAccessBlock</a> </p> </li> <li> <p> <a>PutPublicAccessBlock</a> </p> </li> <li> <p> <a>DeletePublicAccessBlock</a> </p> </li> </ul>
		 * Get /{Bucket}#policyStatus
		 * @param {string} Bucket The name of the Amazon S3 bucket whose policy status you want to retrieve.
		 * @return {void} Success
		 */
		GetBucketPolicyStatus(Bucket: string, policyStatus: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#policyStatus&policyStatus=' + policyStatus, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns the request payment configuration of a bucket. To use this version of the operation, you must be the bucket owner. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a>.</p> <p>The following operations are related to <code>GetBucketRequestPayment</code>:</p> <ul> <li> <p> <a>ListObjects</a> </p> </li> </ul>
		 * Get /{Bucket}#requestPayment
		 * @param {string} Bucket The name of the bucket for which to get the payment request configuration
		 * @return {void} Success
		 */
		GetBucketRequestPayment(Bucket: string, requestPayment: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#requestPayment&requestPayment=' + requestPayment, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns the versioning state of a bucket.</p> <p>To retrieve the versioning state of a bucket, you must be the bucket owner.</p> <p>This implementation also returns the MFA Delete status of the versioning state. If the MFA Delete status is <code>enabled</code>, the bucket owner must use an authentication device to change the versioning state of the bucket.</p> <p>The following operations are related to <code>GetBucketVersioning</code>:</p> <ul> <li> <p> <a>GetObject</a> </p> </li> <li> <p> <a>PutObject</a> </p> </li> <li> <p> <a>DeleteObject</a> </p> </li> </ul>
		 * Get /{Bucket}#versioning
		 * @param {string} Bucket The name of the bucket for which to get the versioning information.
		 * @return {void} Success
		 */
		GetBucketVersioning(Bucket: string, versioning: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#versioning&versioning=' + versioning, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns the access control list (ACL) of an object. To use this operation, you must have READ_ACP access to the object.</p> <p> <b>Versioning</b> </p> <p>By default, GET returns ACL information about the current version of an object. To return ACL information about a different version, use the versionId subresource.</p> <p>The following operations are related to <code>GetObjectAcl</code>:</p> <ul> <li> <p> <a>GetObject</a> </p> </li> <li> <p> <a>DeleteObject</a> </p> </li> <li> <p> <a>PutObject</a> </p> </li> </ul>
		 * Get /{Bucket}/{Key}#acl
		 * @param {string} Bucket <p>The bucket name that contains the object for which to get the ACL information. </p> <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
		 * @param {string} Key The key of the object for which to get the ACL information.
		 * @param {string} versionId VersionId used to reference a specific version of the object.
		 * @return {void} Success
		 */
		GetObjectAcl(Bucket: string, Key: string, versionId: string, acl: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '/' + (Key == null ? '' : encodeURIComponent(Key)) + '#acl&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)) + '&acl=' + acl, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Gets an object's current Legal Hold status. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.
		 * Get /{Bucket}/{Key}#legal-hold
		 * @param {string} Bucket <p>The bucket name containing the object whose Legal Hold status you want to retrieve. </p> <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
		 * @param {string} Key The key name for the object whose Legal Hold status you want to retrieve.
		 * @param {string} versionId The version ID of the object whose Legal Hold status you want to retrieve.
		 * @return {void} Success
		 */
		GetObjectLegalHold(Bucket: string, Key: string, versionId: string, legal_hold: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '/' + (Key == null ? '' : encodeURIComponent(Key)) + '#legal-hold&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)) + '&legal_hold=' + legal_hold, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Gets the Object Lock configuration for a bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.
		 * Get /{Bucket}#object-lock
		 * @param {string} Bucket The bucket whose Object Lock configuration you want to retrieve.
		 * @return {void} Success
		 */
		GetObjectLockConfiguration(Bucket: string, object_lock: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#object-lock&object_lock=' + object_lock, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieves an object's retention settings. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.
		 * Get /{Bucket}/{Key}#retention
		 * @param {string} Bucket <p>The bucket name containing the object whose retention settings you want to retrieve. </p> <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
		 * @param {string} Key The key name for the object whose retention settings you want to retrieve.
		 * @param {string} versionId The version ID for the object whose retention settings you want to retrieve.
		 * @return {void} Success
		 */
		GetObjectRetention(Bucket: string, Key: string, versionId: string, retention: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '/' + (Key == null ? '' : encodeURIComponent(Key)) + '#retention&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)) + '&retention=' + retention, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Return torrent files from a bucket. BitTorrent can save you bandwidth when you're distributing large files. For more information about BitTorrent, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3Torrent.html">Amazon S3 Torrent</a>.</p> <note> <p>You can get torrent only for objects that are less than 5 GB in size and that are not encrypted using server-side encryption with customer-provided encryption key.</p> </note> <p>To use GET, you must have READ access to the object.</p> <p>The following operation is related to <code>GetObjectTorrent</code>:</p> <ul> <li> <p> <a>GetObject</a> </p> </li> </ul>
		 * Get /{Bucket}/{Key}#torrent
		 * @param {string} Bucket The name of the bucket containing the object for which to get the torrent files.
		 * @param {string} Key The object key for which to get the information.
		 * @return {void} Success
		 */
		GetObjectTorrent(Bucket: string, Key: string, torrent: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '/' + (Key == null ? '' : encodeURIComponent(Key)) + '#torrent&torrent=' + torrent, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Lists the analytics configurations for the bucket. You can have up to 1,000 analytics configurations per bucket.</p> <p>This operation supports list pagination and does not return more than 100 configurations at a time. You should always check the <code>IsTruncated</code> element in the response. If there are no more configurations to list, <code>IsTruncated</code> is set to false. If there are more configurations to list, <code>IsTruncated</code> is set to true, and there will be a value in <code>NextContinuationToken</code>. You use the <code>NextContinuationToken</code> value to continue the pagination of the list by passing the value in continuation-token in the request to <code>GET</code> the next page.</p> <p>To use this operation, you must have permissions to perform the <code>s3:GetAnalyticsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For information about Amazon S3 analytics feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/analytics-storage-class.html">Amazon S3 Analytics – Storage Class Analysis</a>. </p> <p>The following operations are related to <code>ListBucketAnalyticsConfigurations</code>:</p> <ul> <li> <p> <a>GetBucketAnalyticsConfiguration</a> </p> </li> <li> <p> <a>DeleteBucketAnalyticsConfiguration</a> </p> </li> <li> <p> <a>PutBucketAnalyticsConfiguration</a> </p> </li> </ul>
		 * Get /{Bucket}#analytics
		 * @param {string} Bucket The name of the bucket from which analytics configurations are retrieved.
		 * @param {string} continuation_token The ContinuationToken that represents a placeholder from where this request should begin.
		 * @return {void} Success
		 */
		ListBucketAnalyticsConfigurations(Bucket: string, continuation_token: string, analytics: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#analytics&continuation_token=' + (continuation_token == null ? '' : encodeURIComponent(continuation_token)) + '&analytics=' + analytics, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns a list of inventory configurations for the bucket. You can have up to 1,000 analytics configurations per bucket.</p> <p>This operation supports list pagination and does not return more than 100 configurations at a time. Always check the <code>IsTruncated</code> element in the response. If there are no more configurations to list, <code>IsTruncated</code> is set to false. If there are more configurations to list, <code>IsTruncated</code> is set to true, and there is a value in <code>NextContinuationToken</code>. You use the <code>NextContinuationToken</code> value to continue the pagination of the list by passing the value in continuation-token in the request to <code>GET</code> the next page.</p> <p> To use this operation, you must have permissions to perform the <code>s3:GetInventoryConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a> </p> <p>The following operations are related to <code>ListBucketInventoryConfigurations</code>:</p> <ul> <li> <p> <a>GetBucketInventoryConfiguration</a> </p> </li> <li> <p> <a>DeleteBucketInventoryConfiguration</a> </p> </li> <li> <p> <a>PutBucketInventoryConfiguration</a> </p> </li> </ul>
		 * Get /{Bucket}#inventory
		 * @param {string} Bucket The name of the bucket containing the inventory configurations to retrieve.
		 * @param {string} continuation_token The marker used to continue an inventory configuration listing that has been truncated. Use the NextContinuationToken from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.
		 * @return {void} Success
		 */
		ListBucketInventoryConfigurations(Bucket: string, continuation_token: string, inventory: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#inventory&continuation_token=' + (continuation_token == null ? '' : encodeURIComponent(continuation_token)) + '&inventory=' + inventory, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Lists the metrics configurations for the bucket. The metrics configurations are only for the request metrics of the bucket and do not provide information on daily storage metrics. You can have up to 1,000 configurations per bucket.</p> <p>This operation supports list pagination and does not return more than 100 configurations at a time. Always check the <code>IsTruncated</code> element in the response. If there are no more configurations to list, <code>IsTruncated</code> is set to false. If there are more configurations to list, <code>IsTruncated</code> is set to true, and there is a value in <code>NextContinuationToken</code>. You use the <code>NextContinuationToken</code> value to continue the pagination of the list by passing the value in <code>continuation-token</code> in the request to <code>GET</code> the next page.</p> <p>To use this operation, you must have permissions to perform the <code>s3:GetMetricsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For more information about metrics configurations and CloudWatch request metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon CloudWatch</a>.</p> <p>The following operations are related to <code>ListBucketMetricsConfigurations</code>:</p> <ul> <li> <p> <a>PutBucketMetricsConfiguration</a> </p> </li> <li> <p> <a>GetBucketMetricsConfiguration</a> </p> </li> <li> <p> <a>DeleteBucketMetricsConfiguration</a> </p> </li> </ul>
		 * Get /{Bucket}#metrics
		 * @param {string} Bucket The name of the bucket containing the metrics configurations to retrieve.
		 * @param {string} continuation_token The marker that is used to continue a metrics configuration listing that has been truncated. Use the NextContinuationToken from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.
		 * @return {void} Success
		 */
		ListBucketMetricsConfigurations(Bucket: string, continuation_token: string, metrics: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#metrics&continuation_token=' + (continuation_token == null ? '' : encodeURIComponent(continuation_token)) + '&metrics=' + metrics, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Returns a list of all buckets owned by the authenticated sender of the request.
		 * Get /
		 * @return {void} Success
		 */
		ListBuckets(headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>This operation lists in-progress multipart uploads. An in-progress multipart upload is a multipart upload that has been initiated using the Initiate Multipart Upload request, but has not yet been completed or aborted.</p> <p>This operation returns at most 1,000 multipart uploads in the response. 1,000 multipart uploads is the maximum number of uploads a response can include, which is also the default value. You can further limit the number of uploads in a response by specifying the <code>max-uploads</code> parameter in the response. If additional multipart uploads satisfy the list criteria, the response will contain an <code>IsTruncated</code> element with the value true. To list the additional multipart uploads, use the <code>key-marker</code> and <code>upload-id-marker</code> request parameters.</p> <p>In the response, the uploads are sorted by key. If your application has initiated more than one multipart upload using the same object key, then uploads in the response are first sorted by key. Additionally, uploads are sorted in ascending order within each key by the upload initiation time.</p> <p>For more information on multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html">Uploading Objects Using Multipart Upload</a>.</p> <p>For information on permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload API and Permissions</a>.</p> <p>The following operations are related to <code>ListMultipartUploads</code>:</p> <ul> <li> <p> <a>CreateMultipartUpload</a> </p> </li> <li> <p> <a>UploadPart</a> </p> </li> <li> <p> <a>CompleteMultipartUpload</a> </p> </li> <li> <p> <a>ListParts</a> </p> </li> <li> <p> <a>AbortMultipartUpload</a> </p> </li> </ul>
		 * Get /{Bucket}#uploads
		 * @param {string} Bucket <p>Name of the bucket to which the multipart upload was initiated. </p> <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
		 * @param {string} delimiter <p>Character you use to group keys.</p> <p>All keys that contain the same string between the prefix, if specified, and the first occurrence of the delimiter after the prefix are grouped under a single result element, <code>CommonPrefixes</code>. If you don't specify the prefix parameter, then the substring starts at the beginning of the key. The keys that are grouped under <code>CommonPrefixes</code> result element are not returned elsewhere in the response.</p>
		 * @param {string} key_marker <p>Together with upload-id-marker, this parameter specifies the multipart upload after which listing should begin.</p> <p>If <code>upload-id-marker</code> is not specified, only the keys lexicographically greater than the specified <code>key-marker</code> will be included in the list.</p> <p>If <code>upload-id-marker</code> is specified, any multipart uploads for a key equal to the <code>key-marker</code> might also be included, provided those multipart uploads have upload IDs lexicographically greater than the specified <code>upload-id-marker</code>.</p>
		 * @param {number} max_uploads Sets the maximum number of multipart uploads, from 1 to 1,000, to return in the response body. 1,000 is the maximum number of uploads that can be returned in a response.
		 * @param {string} prefix Lists in-progress uploads only for those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different grouping of keys. (You can think of using prefix to make groups in the same way you'd use a folder in a file system.)
		 * @param {string} upload_id_marker Together with key-marker, specifies the multipart upload after which listing should begin. If key-marker is not specified, the upload-id-marker parameter is ignored. Otherwise, any multipart uploads for a key equal to the key-marker might be included in the list only if they have an upload ID lexicographically greater than the specified <code>upload-id-marker</code>.
		 * @param {string} MaxUploads Pagination limit
		 * @param {string} KeyMarker Pagination token
		 * @param {string} UploadIdMarker Pagination token
		 * @return {void} Success
		 */
		ListMultipartUploads(Bucket: string, delimiter: string, encoding_type: ListMultipartUploadsOutputEncodingType, key_marker: string, max_uploads: number, prefix: string, upload_id_marker: string, MaxUploads: string, KeyMarker: string, UploadIdMarker: string, uploads: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#uploads&delimiter=' + (delimiter == null ? '' : encodeURIComponent(delimiter)) + '&encoding_type=' + encoding_type + '&key_marker=' + (key_marker == null ? '' : encodeURIComponent(key_marker)) + '&max_uploads=' + max_uploads + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&upload_id_marker=' + (upload_id_marker == null ? '' : encodeURIComponent(upload_id_marker)) + '&MaxUploads=' + (MaxUploads == null ? '' : encodeURIComponent(MaxUploads)) + '&KeyMarker=' + (KeyMarker == null ? '' : encodeURIComponent(KeyMarker)) + '&UploadIdMarker=' + (UploadIdMarker == null ? '' : encodeURIComponent(UploadIdMarker)) + '&uploads=' + uploads, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns metadata about all of the versions of objects in a bucket. You can also use request parameters as selection criteria to return metadata about a subset of all the object versions. </p> <note> <p> A 200 OK response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately.</p> </note> <p>To use this operation, you must have READ access to the bucket.</p> <p>The following operations are related to <code>ListObjectVersions</code>:</p> <ul> <li> <p> <a>ListObjectsV2</a> </p> </li> <li> <p> <a>GetObject</a> </p> </li> <li> <p> <a>PutObject</a> </p> </li> <li> <p> <a>DeleteObject</a> </p> </li> </ul>
		 * Get /{Bucket}#versions
		 * @param {string} Bucket <p>The bucket name that contains the objects. </p> <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
		 * @param {string} delimiter A delimiter is a character that you specify to group keys. All keys that contain the same string between the <code>prefix</code> and the first occurrence of the delimiter are grouped under a single result element in CommonPrefixes. These groups are counted as one result against the max-keys limitation. These keys are not returned elsewhere in the response.
		 * @param {string} key_marker Specifies the key to start with when listing objects in a bucket.
		 * @param {number} max_keys Sets the maximum number of keys returned in the response. By default the API returns up to 1,000 key names. The response might contain fewer keys but will never contain more. If additional keys satisfy the search criteria, but were not returned because max-keys was exceeded, the response contains &lt;isTruncated&gt;true&lt;/isTruncated&gt;. To return the additional keys, see key-marker and version-id-marker.
		 * @param {string} prefix Use this parameter to select only those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different groupings of keys. (You can think of using prefix to make groups in the same way you'd use a folder in a file system.) You can use prefix with delimiter to roll up numerous objects into a single result under CommonPrefixes. 
		 * @param {string} version_id_marker Specifies the object version you want to start listing from.
		 * @param {string} MaxKeys Pagination limit
		 * @param {string} KeyMarker Pagination token
		 * @param {string} VersionIdMarker Pagination token
		 * @return {void} Success
		 */
		ListObjectVersions(Bucket: string, delimiter: string, encoding_type: ListMultipartUploadsOutputEncodingType, key_marker: string, max_keys: number, prefix: string, version_id_marker: string, MaxKeys: string, KeyMarker: string, VersionIdMarker: string, versions: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#versions&delimiter=' + (delimiter == null ? '' : encodeURIComponent(delimiter)) + '&encoding_type=' + encoding_type + '&key_marker=' + (key_marker == null ? '' : encodeURIComponent(key_marker)) + '&max_keys=' + max_keys + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&version_id_marker=' + (version_id_marker == null ? '' : encodeURIComponent(version_id_marker)) + '&MaxKeys=' + (MaxKeys == null ? '' : encodeURIComponent(MaxKeys)) + '&KeyMarker=' + (KeyMarker == null ? '' : encodeURIComponent(KeyMarker)) + '&VersionIdMarker=' + (VersionIdMarker == null ? '' : encodeURIComponent(VersionIdMarker)) + '&versions=' + versions, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Returns some or all (up to 1,000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A <code>200 OK</code> response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately.</p> <p>To use this operation, you must have READ access to the bucket.</p> <p>To use this operation in an AWS Identity and Access Management (IAM) policy, you must have permissions to perform the <code>s3:ListBucket</code> action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <important> <p>This section describes the latest revision of the API. We recommend that you use this revised API for application development. For backward compatibility, Amazon S3 continues to support the prior version of this API, <a>ListObjects</a>.</p> </important> <p>To get a list of your buckets, see <a>ListBuckets</a>.</p> <p>The following operations are related to <code>ListObjectsV2</code>:</p> <ul> <li> <p> <a>GetObject</a> </p> </li> <li> <p> <a>PutObject</a> </p> </li> <li> <p> <a>CreateBucket</a> </p> </li> </ul>
		 * Get /{Bucket}#list-type=2
		 * @param {string} Bucket <p>Bucket name to list. </p> <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
		 * @param {string} delimiter A delimiter is a character you use to group keys.
		 * @param {ListMultipartUploadsOutputEncodingType} encoding_type Encoding type used by Amazon S3 to encode object keys in the response.
		 * @param {number} max_keys Sets the maximum number of keys returned in the response. By default the API returns up to 1,000 key names. The response might contain fewer keys but will never contain more.
		 * @param {string} prefix Limits the response to keys that begin with the specified prefix.
		 * @param {string} continuation_token ContinuationToken indicates Amazon S3 that the list is being continued on this bucket with a token. ContinuationToken is obfuscated and is not a real key.
		 * @param {boolean} fetch_owner The owner field is not present in listV2 by default, if you want to return owner field with each key in the result then set the fetch owner field to true.
		 * @param {string} start_after StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. StartAfter can be any key in the bucket.
		 * @param {string} MaxKeys Pagination limit
		 * @param {string} ContinuationToken Pagination token
		 * @return {void} Success
		 */
		ListObjectsV2(Bucket: string, delimiter: string, encoding_type: ListMultipartUploadsOutputEncodingType, max_keys: number, prefix: string, continuation_token: string, fetch_owner: boolean, start_after: string, MaxKeys: string, ContinuationToken: string, list_type: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '#list-type=2&delimiter=' + (delimiter == null ? '' : encodeURIComponent(delimiter)) + '&encoding_type=' + encoding_type + '&max_keys=' + max_keys + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&continuation_token=' + (continuation_token == null ? '' : encodeURIComponent(continuation_token)) + '&fetch_owner=' + fetch_owner + '&start_after=' + (start_after == null ? '' : encodeURIComponent(start_after)) + '&MaxKeys=' + (MaxKeys == null ? '' : encodeURIComponent(MaxKeys)) + '&ContinuationToken=' + (ContinuationToken == null ? '' : encodeURIComponent(ContinuationToken)) + '&list_type=' + (list_type == null ? '' : encodeURIComponent(list_type)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * <p>Uploads a part by copying data from an existing object as data source. You specify the data source by adding the request header <code>x-amz-copy-source</code> in your request and a byte range by adding the request header <code>x-amz-copy-source-range</code> in your request. </p> <p>The minimum allowable part size for a multipart upload is 5 MB. For more information about multipart upload limits, go to <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/qfacts.html">Quick Facts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. </p> <note> <p>Instead of using an existing object as part data, you might use the <a>UploadPart</a> operation and provide data in your request.</p> </note> <p>You must initiate a multipart upload before you can upload any part. In response to your initiate request. Amazon S3 returns a unique identifier, the upload ID, that you must include in your upload part request.</p> <p>For more information about using the <code>UploadPartCopy</code> operation, see the following:</p> <ul> <li> <p>For conceptual information about multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html">Uploading Objects Using Multipart Upload</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> </li> <li> <p>For information about permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload API and Permissions</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> </li> <li> <p>For information about copying objects using a single atomic operation vs. the multipart upload, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectOperations.html">Operations on Objects</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> </li> <li> <p>For information about using server-side encryption with customer-provided encryption keys with the UploadPartCopy operation, see <a>CopyObject</a> and <a>UploadPart</a>.</p> </li> </ul> <p>Note the following additional considerations about the request headers <code>x-amz-copy-source-if-match</code>, <code>x-amz-copy-source-if-none-match</code>, <code>x-amz-copy-source-if-unmodified-since</code>, and <code>x-amz-copy-source-if-modified-since</code>:</p> <p> </p> <ul> <li> <p> <b>Consideration 1</b> - If both of the <code>x-amz-copy-source-if-match</code> and <code>x-amz-copy-source-if-unmodified-since</code> headers are present in the request as follows:</p> <p> <code>x-amz-copy-source-if-match</code> condition evaluates to <code>true</code>, and;</p> <p> <code>x-amz-copy-source-if-unmodified-since</code> condition evaluates to <code>false</code>;</p> <p>Amazon S3 returns <code>200 OK</code> and copies the data. </p> </li> <li> <p> <b>Consideration 2</b> - If both of the <code>x-amz-copy-source-if-none-match</code> and <code>x-amz-copy-source-if-modified-since</code> headers are present in the request as follows:</p> <p> <code>x-amz-copy-source-if-none-match</code> condition evaluates to <code>false</code>, and;</p> <p> <code>x-amz-copy-source-if-modified-since</code> condition evaluates to <code>true</code>;</p> <p>Amazon S3 returns <code>412 Precondition Failed</code> response code. </p> </li> </ul> <p> <b>Versioning</b> </p> <p>If your bucket has versioning enabled, you could have multiple versions of the same object. By default, <code>x-amz-copy-source</code> identifies the current version of the object to copy. If the current version is a delete marker and you don't specify a versionId in the <code>x-amz-copy-source</code>, Amazon S3 returns a 404 error, because the object does not exist. If you specify versionId in the <code>x-amz-copy-source</code> and the versionId is a delete marker, Amazon S3 returns an HTTP 400 error, because you are not allowed to specify a delete marker as a version for the <code>x-amz-copy-source</code>. </p> <p>You can optionally specify a specific version of the source object to copy by adding the <code>versionId</code> subresource as shown in the following example:</p> <p> <code>x-amz-copy-source: /bucket/object?versionId=version id</code> </p> <p class="title"> <b>Special Errors</b> </p> <ul> <li> <p class="title"> <b/> </p> <ul> <li> <p> <i>Code: NoSuchUpload</i> </p> </li> <li> <p> <i>Cause: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.</i> </p> </li> <li> <p> <i>HTTP Status Code: 404 Not Found</i> </p> </li> </ul> </li> <li> <p class="title"> <b/> </p> <ul> <li> <p> <i>Code: InvalidRequest</i> </p> </li> <li> <p> <i>Cause: The specified copy source is not supported as a byte-range copy source.</i> </p> </li> <li> <p> <i>HTTP Status Code: 400 Bad Request</i> </p> </li> </ul> </li> </ul> <p class="title"> <b>Related Resources</b> </p> <ul> <li> <p> <a>CreateMultipartUpload</a> </p> </li> <li> <p> <a>UploadPart</a> </p> </li> <li> <p> <a>CompleteMultipartUpload</a> </p> </li> <li> <p> <a>AbortMultipartUpload</a> </p> </li> <li> <p> <a>ListParts</a> </p> </li> <li> <p> <a>ListMultipartUploads</a> </p> </li> </ul>
		 * Put /{Bucket}/{Key}#x-amz-copy-source&partNumber&uploadId
		 * @param {string} Bucket The bucket name.
		 * @param {string} Key Object key for which the multipart upload was initiated.
		 * @param {number} partNumber Part number of part being copied. This is a positive integer between 1 and 10,000.
		 * @param {string} uploadId Upload ID identifying the multipart upload whose part is being copied.
		 * @return {void} Success
		 */
		UploadPartCopy(Bucket: string, Key: string, partNumber: number, uploadId: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + '/' + (Bucket == null ? '' : encodeURIComponent(Bucket)) + '/' + (Key == null ? '' : encodeURIComponent(Key)) + '#x-amz-copy-source&partNumber&uploadId&partNumber=' + partNumber + '&uploadId=' + (uploadId == null ? '' : encodeURIComponent(uploadId)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}
	}

}

