///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface AddApplicationCloudWatchLoggingOptionRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;

		/**Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN. */
		CloudWatchLoggingOption: CloudWatchLoggingOption;
	}


	/**<p/> */
	export interface AddApplicationInputRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;

		/**When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. */
		Input: Input;
	}

	export interface AddApplicationInputProcessingConfigurationRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;
		InputId: string;

		/**Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>. */
		InputProcessingConfiguration: InputProcessingConfiguration;
	}


	/**<p/> */
	export interface AddApplicationOutputRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;

		/**<p> Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p> <p/> <p>For limits on how many destinations an application can write and other limitations, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> */
		Output: Output;
	}


	/**<p/> */
	export interface AddApplicationReferenceDataSourceRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;

		/**Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table. */
		ReferenceDataSource: ReferenceDataSource;
	}


	/**TBD */
	export interface CreateApplicationResponse {

		/**<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p> */
		ApplicationSummary: ApplicationSummary;
	}


	/**TBD */
	export interface CreateApplicationRequest {
		ApplicationName: string;
		ApplicationDescription?: string;
		Inputs?: Array<Input>;
		Outputs?: Array<Output>;
		CloudWatchLoggingOptions?: Array<CloudWatchLoggingOption>;
		ApplicationCode?: string;
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface DeleteApplicationRequest {
		ApplicationName: string;
		CreateTimestamp: Date;
	}

	export interface DeleteApplicationCloudWatchLoggingOptionRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;
		CloudWatchLoggingOptionId: string;
	}

	export interface DeleteApplicationInputProcessingConfigurationRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;
		InputId: string;
	}


	/**<p/> */
	export interface DeleteApplicationOutputRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;
		OutputId: string;
	}

	export interface DeleteApplicationReferenceDataSourceRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;
		ReferenceId: string;
	}


	/**<p/> */
	export interface DescribeApplicationResponse {

		/**<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p> */
		ApplicationDetail: ApplicationDetail;
	}


	/**<p/> */
	export interface DescribeApplicationRequest {
		ApplicationName: string;
	}


	/**<p/> */
	export interface DiscoverInputSchemaResponse {

		/**Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		InputSchema?: SourceSchema;
		ParsedInputRecords?: Array<ParsedInputRecord>;
		ProcessedInputRecords?: Array<ProcessedInputRecord>;
		RawInputRecords?: Array<RawInputRecord>;
	}

	export interface DiscoverInputSchemaRequest {
		ResourceARN?: string;
		RoleARN?: string;

		/**Describes the point at which the application reads from the streaming source. */
		InputStartingPositionConfiguration?: InputStartingPositionConfiguration;

		/**Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the Amazon S3 object that contains the data. */
		S3Configuration?: S3Configuration;

		/**Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>. */
		InputProcessingConfiguration?: InputProcessingConfiguration;
	}


	/**<p/> */
	export interface ListApplicationsResponse {
		ApplicationSummaries: Array<ApplicationSummary>;
		HasMoreApplications: boolean;
	}


	/**<p/> */
	export interface ListApplicationsRequest {
		Limit?: number;
		ExclusiveStartApplicationName?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}


	/**<p/> */
	export interface StartApplicationRequest {
		ApplicationName: string;
		InputConfigurations: Array<InputConfiguration>;
	}


	/**<p/> */
	export interface StopApplicationRequest {
		ApplicationName: string;
	}

	export interface TagResourceRequest {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		ResourceARN: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateApplicationRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;

		/**Describes updates to apply to an existing Amazon Kinesis Analytics application. */
		ApplicationUpdate: ApplicationUpdate;
	}


	/**Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN. */
	export interface CloudWatchLoggingOption {
		LogStreamARN: string;
		RoleARN: string;
	}


	/**Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>. */
	export interface InputProcessingConfiguration {

		/**An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function. */
		InputLambdaProcessor: InputLambdaProcessor;
	}


	/**When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.  */
	export interface Input {
		NamePrefix: string;

		/**Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>. */
		InputProcessingConfiguration?: InputProcessingConfiguration;

		/**Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf. */
		KinesisStreamsInput?: KinesisStreamsInput;

		/**Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf. */
		KinesisFirehoseInput?: KinesisFirehoseInput;

		/**Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. */
		InputParallelism?: InputParallelism;

		/**Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		InputSchema: SourceSchema;
	}


	/**<p> Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p> <p/> <p>For limits on how many destinations an application can write and other limitations, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> */
	export interface Output {
		Name: string;

		/**When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf. */
		KinesisStreamsOutput?: KinesisStreamsOutput;

		/**When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf. */
		KinesisFirehoseOutput?: KinesisFirehoseOutput;

		/**When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf. */
		LambdaOutput?: LambdaOutput;

		/**Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>. */
		DestinationSchema: DestinationSchema;
	}


	/**Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table. */
	export interface ReferenceDataSource {
		TableName: string;

		/**<p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p> <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger reloading of data into your application.</p> */
		S3ReferenceDataSource?: S3ReferenceDataSource;

		/**Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		ReferenceSchema: SourceSchema;
	}

	export enum ApplicationStatus { DELETING = 0, STARTING = 1, STOPPING = 2, READY = 3, RUNNING = 4, UPDATING = 5 }


	/**<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p> */
	export interface ApplicationDetail {
		ApplicationName: string;
		ApplicationDescription?: string;
		ApplicationARN: string;
		ApplicationStatus: ApplicationDetailApplicationStatus;
		CreateTimestamp?: Date;
		LastUpdateTimestamp?: Date;
		InputDescriptions?: Array<InputDescription>;
		OutputDescriptions?: Array<OutputDescription>;
		ReferenceDataSourceDescriptions?: Array<ReferenceDataSourceDescription>;
		CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription>;
		ApplicationCode?: string;
		ApplicationVersionId: number;
	}

	export enum ApplicationDetailApplicationStatus { DELETING = 0, STARTING = 1, STOPPING = 2, READY = 3, RUNNING = 4, UPDATING = 5 }


	/**<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p> */
	export interface ApplicationSummary {
		ApplicationName: string;
		ApplicationARN: string;
		ApplicationStatus: ApplicationSummaryApplicationStatus;
	}

	export enum ApplicationSummaryApplicationStatus { DELETING = 0, STARTING = 1, STOPPING = 2, READY = 3, RUNNING = 4, UPDATING = 5 }


	/**Describes updates to apply to an existing Amazon Kinesis Analytics application. */
	export interface ApplicationUpdate {
		InputUpdates?: Array<InputUpdate>;
		ApplicationCodeUpdate?: string;
		OutputUpdates?: Array<OutputUpdate>;
		ReferenceDataSourceUpdates?: Array<ReferenceDataSourceUpdate>;
		CloudWatchLoggingOptionUpdates?: Array<CloudWatchLoggingOptionUpdate>;
	}


	/**<p>Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p> */
	export interface CSVMappingParameters {
		RecordRowDelimiter: string;
		RecordColumnDelimiter: string;
	}


	/**Description of the CloudWatch logging option. */
	export interface CloudWatchLoggingOptionDescription {
		CloudWatchLoggingOptionId?: string;
		LogStreamARN: string;
		RoleARN: string;
	}


	/**Describes CloudWatch logging option updates. */
	export interface CloudWatchLoggingOptionUpdate {
		CloudWatchLoggingOptionId: string;
		LogStreamARNUpdate?: string;
		RoleARNUpdate?: string;
	}

	export enum RecordFormatType { JSON = 0, CSV = 1 }


	/**Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.  */
	export interface DestinationSchema {
		RecordFormatType: DestinationSchemaRecordFormatType;
	}

	export enum DestinationSchemaRecordFormatType { JSON = 0, CSV = 1 }


	/**Describes the point at which the application reads from the streaming source. */
	export interface InputStartingPositionConfiguration {
		InputStartingPosition?: InputStartingPositionConfigurationInputStartingPosition;
	}

	export enum InputStartingPositionConfigurationInputStartingPosition { NOW = 0, TRIM_HORIZON = 1, LAST_STOPPED_POINT = 2 }


	/**Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the Amazon S3 object that contains the data. */
	export interface S3Configuration {
		RoleARN: string;
		BucketARN: string;
		FileKey: string;
	}


	/**Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
	export interface SourceSchema {

		/**Describes the record format and relevant mapping information that should be applied to schematize the records on the stream. */
		RecordFormat: RecordFormat;
		RecordEncoding?: string;
		RecordColumns: Array<RecordColumn>;
	}


	/** Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf. */
	export interface KinesisStreamsInput {
		ResourceARN: string;
		RoleARN: string;
	}


	/** Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf. */
	export interface KinesisFirehoseInput {
		ResourceARN: string;
		RoleARN: string;
	}


	/**Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.  */
	export interface InputParallelism {
		Count?: number;
	}


	/**When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records. */
	export interface InputConfiguration {
		Id: string;

		/**Describes the point at which the application reads from the streaming source. */
		InputStartingPositionConfiguration: InputStartingPositionConfiguration;
	}


	/**Provides configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>. */
	export interface InputProcessingConfigurationDescription {

		/**An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda expression. */
		InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
	}


	/** Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisStreamsInputDescription {
		ResourceARN?: string;
		RoleARN?: string;
	}


	/** Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisFirehoseInputDescription {
		ResourceARN?: string;
		RoleARN?: string;
	}


	/**Describes the application input configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.  */
	export interface InputDescription {
		InputId?: string;
		NamePrefix?: string;
		InAppStreamNames?: Array<InAppStreamName>;

		/**Provides configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>. */
		InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

		/**Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration. */
		KinesisStreamsInputDescription?: KinesisStreamsInputDescription;

		/**Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration. */
		KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;

		/**Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		InputSchema?: SourceSchema;

		/**Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. */
		InputParallelism?: InputParallelism;

		/**Describes the point at which the application reads from the streaming source. */
		InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
	}


	/**An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function.  */
	export interface InputLambdaProcessor {
		ResourceARN: string;
		RoleARN: string;
	}


	/**An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda expression. */
	export interface InputLambdaProcessorDescription {
		ResourceARN?: string;
		RoleARN?: string;
	}


	/**Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream. */
	export interface InputLambdaProcessorUpdate {
		ResourceARNUpdate?: string;
		RoleARNUpdate?: string;
	}


	/**Provides updates to the parallelism count. */
	export interface InputParallelismUpdate {
		CountUpdate?: number;
	}


	/**Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>.  */
	export interface InputProcessingConfigurationUpdate {

		/**Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream. */
		InputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
	}


	/** Describes the record format and relevant mapping information that should be applied to schematize the records on the stream.  */
	export interface RecordFormat {
		RecordFormatType: RecordFormatRecordFormatType;

		/**When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source. */
		MappingParameters?: MappingParameters;
	}

	export enum RecordFormatRecordFormatType { JSON = 0, CSV = 1 }


	/**Describes updates for the application's input schema. */
	export interface InputSchemaUpdate {

		/**Describes the record format and relevant mapping information that should be applied to schematize the records on the stream. */
		RecordFormatUpdate?: RecordFormat;
		RecordEncodingUpdate?: string;
		RecordColumnUpdates?: Array<RecordColumn>;
	}

	export enum InputStartingPosition { NOW = 0, TRIM_HORIZON = 1, LAST_STOPPED_POINT = 2 }


	/**When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source. */
	export interface KinesisStreamsInputUpdate {
		ResourceARNUpdate?: string;
		RoleARNUpdate?: string;
	}


	/**When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source. */
	export interface KinesisFirehoseInputUpdate {
		ResourceARNUpdate?: string;
		RoleARNUpdate?: string;
	}


	/**Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).  */
	export interface InputUpdate {
		InputId: string;
		NamePrefixUpdate?: string;

		/**Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>. */
		InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;

		/**When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source. */
		KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;

		/**When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source. */
		KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;

		/**Describes updates for the application's input schema. */
		InputSchemaUpdate?: InputSchemaUpdate;

		/**Provides updates to the parallelism count. */
		InputParallelismUpdate?: InputParallelismUpdate;
	}


	/**Provides additional mapping information when JSON is the record format on the streaming source. */
	export interface JSONMappingParameters {
		RecordRowPath: string;
	}


	/**When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf. */
	export interface KinesisFirehoseOutput {
		ResourceARN: string;
		RoleARN: string;
	}


	/** For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination.  */
	export interface KinesisFirehoseOutputDescription {
		ResourceARN?: string;
		RoleARN?: string;
	}


	/** When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis Firehose delivery stream configured as the destination.  */
	export interface KinesisFirehoseOutputUpdate {
		ResourceARNUpdate?: string;
		RoleARNUpdate?: string;
	}


	/**When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf. */
	export interface KinesisStreamsOutput {
		ResourceARN: string;
		RoleARN: string;
	}


	/** For an application output, describes the Amazon Kinesis stream configured as its destination.  */
	export interface KinesisStreamsOutputDescription {
		ResourceARN?: string;
		RoleARN?: string;
	}


	/** When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis stream configured as the destination.  */
	export interface KinesisStreamsOutputUpdate {
		ResourceARNUpdate?: string;
		RoleARNUpdate?: string;
	}


	/**When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf.  */
	export interface LambdaOutput {
		ResourceARN: string;
		RoleARN: string;
	}


	/**For an application output, describes the AWS Lambda function configured as its destination.  */
	export interface LambdaOutputDescription {
		ResourceARN?: string;
		RoleARN?: string;
	}


	/**When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an AWS Lambda function configured as the destination. */
	export interface LambdaOutputUpdate {
		ResourceARNUpdate?: string;
		RoleARNUpdate?: string;
	}


	/**When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source. */
	export interface MappingParameters {

		/**Provides additional mapping information when JSON is the record format on the streaming source. */
		JSONMappingParameters?: JSONMappingParameters;

		/**<p>Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p> */
		CSVMappingParameters?: CSVMappingParameters;
	}


	/**Describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream.  */
	export interface OutputDescription {
		OutputId?: string;
		Name?: string;

		/**For an application output, describes the Amazon Kinesis stream configured as its destination. */
		KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;

		/**For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination. */
		KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;

		/**For an application output, describes the AWS Lambda function configured as its destination. */
		LambdaOutputDescription?: LambdaOutputDescription;

		/**Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>. */
		DestinationSchema?: DestinationSchema;
	}


	/** Describes updates to the output configuration identified by the <code>OutputId</code>.  */
	export interface OutputUpdate {
		OutputId: string;
		NameUpdate?: string;

		/**When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis stream configured as the destination. */
		KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;

		/**When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis Firehose delivery stream configured as the destination. */
		KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;

		/**When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an AWS Lambda function configured as the destination. */
		LambdaOutputUpdate?: LambdaOutputUpdate;

		/**Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>. */
		DestinationSchemaUpdate?: DestinationSchema;
	}


	/**<p>Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p> */
	export interface RecordColumn {
		Name: string;
		Mapping?: string;
		SqlType: string;
	}


	/**<p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p> <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger reloading of data into your application.</p> */
	export interface S3ReferenceDataSource {
		BucketARN: string;
		FileKey: string;
		ReferenceRoleARN: string;
	}


	/**Provides the bucket name and object key name that stores the reference data. */
	export interface S3ReferenceDataSourceDescription {
		BucketARN: string;
		FileKey: string;
		ReferenceRoleARN: string;
	}


	/**Describes the reference data source configured for an application. */
	export interface ReferenceDataSourceDescription {
		ReferenceId: string;
		TableName: string;

		/**Provides the bucket name and object key name that stores the reference data. */
		S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;

		/**Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		ReferenceSchema?: SourceSchema;
	}


	/**Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table. */
	export interface S3ReferenceDataSourceUpdate {
		BucketARNUpdate?: string;
		FileKeyUpdate?: string;
		ReferenceRoleARNUpdate?: string;
	}


	/**When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created. */
	export interface ReferenceDataSourceUpdate {
		ReferenceId: string;
		TableNameUpdate?: string;

		/**Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table. */
		S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;

		/**Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		ReferenceSchemaUpdate?: SourceSchema;
	}


	/**A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>. */
	export interface Tag {
		Key: string;
		Value?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a CloudWatch log stream to monitor application configuration errors. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption
		 * @return {AddApplicationCloudWatchLoggingOptionResponse} Success
		 */
		AddApplicationCloudWatchLoggingOption(callback: (data : AddApplicationCloudWatchLoggingOptionResponse) => any, requestBody: AddApplicationCloudWatchLoggingOptionRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Adds a streaming source to your Amazon Kinesis application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p> <p>You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationInput</code> action.</p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput
		 * @return {AddApplicationInputResponse} Success
		 */
		AddApplicationInput(callback: (data : AddApplicationInputResponse) => any, requestBody: AddApplicationInputRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration
		 * @return {AddApplicationInputProcessingConfigurationResponse} Success
		 */
		AddApplicationInputProcessingConfiguration(callback: (data : AddApplicationInputProcessingConfigurationResponse) => any, requestBody: AddApplicationInputProcessingConfigurationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an external destination to your Amazon Kinesis Analytics application.</p> <p>If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Understanding Application Output (Destination)</a>. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version.</p> <p>For the limits on the number of application inputs and outputs you can configure, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.</p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput
		 * @return {AddApplicationOutputResponse} Success
		 */
		AddApplicationOutput(callback: (data : AddApplicationOutputResponse) => any, requestBody: AddApplicationOutputRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a reference data source to an existing application.</p> <p>Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.</p> <p> For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. For the limits on data sources you can add to your application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action. </p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource
		 * @return {AddApplicationReferenceDataSourceResponse} Success
		 */
		AddApplicationReferenceDataSource(callback: (data : AddApplicationReferenceDataSourceResponse) => any, requestBody: AddApplicationReferenceDataSourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to three destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html">How it Works</a>. </p> <p>In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source.</p> <p>Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.</p> <p>In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.</p> <p> To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the <code>kinesisanalytics:CreateApplication</code> action. </p> <p> For introductory exercises to create an Amazon Kinesis Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/getting-started.html">Getting Started</a>. </p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication
		 * @return {CreateApplicationResponse} Success
		 */
		CreateApplication(callback: (data : CreateApplicationResponse) => any, requestBody: CreateApplicationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code).</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplication</code> action.</p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication
		 * @return {DeleteApplicationResponse} Success
		 */
		DeleteApplication(callback: (data : DeleteApplicationResponse) => any, requestBody: DeleteApplicationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption
		 * @return {DeleteApplicationCloudWatchLoggingOptionResponse} Success
		 */
		DeleteApplicationCloudWatchLoggingOption(callback: (data : DeleteApplicationCloudWatchLoggingOptionResponse) => any, requestBody: DeleteApplicationCloudWatchLoggingOptionRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> from an input.</p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration
		 * @return {DeleteApplicationInputProcessingConfigurationResponse} Success
		 */
		DeleteApplicationInputProcessingConfiguration(callback: (data : DeleteApplicationInputProcessingConfigurationResponse) => any, requestBody: DeleteApplicationInputProcessingConfigurationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplicationOutput</code> action.</p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput
		 * @return {DeleteApplicationOutputResponse} Success
		 */
		DeleteApplicationOutput(callback: (data : DeleteApplicationOutputResponse) => any, requestBody: DeleteApplicationOutputRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a reference data source configuration from the specified application configuration.</p> <p>If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics.DeleteApplicationReferenceDataSource</code> action.</p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource
		 * @return {DeleteApplicationReferenceDataSourceResponse} Success
		 */
		DeleteApplicationReferenceDataSource(callback: (data : DeleteApplicationReferenceDataSourceResponse) => any, requestBody: DeleteApplicationReferenceDataSourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns information about a specific Amazon Kinesis Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html">ListApplications</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DescribeApplication</code> action. You can use <code>DescribeApplication</code> to get the current application versionId, which you need to call other operations such as <code>Update</code>. </p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication
		 * @return {DescribeApplicationResponse} Success
		 */
		DescribeApplication(callback: (data : DescribeApplicationResponse) => any, requestBody: DescribeApplicationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. Note that when you create an application using the Amazon Kinesis Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:DiscoverInputSchema</code> action. </p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema
		 * @return {DiscoverInputSchemaResponse} Success
		 */
		DiscoverInputSchema(callback: (data : DiscoverInputSchemaResponse) => any, requestBody: DiscoverInputSchemaRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the <code>HasMoreApplications</code> value as true, you can send another request by adding the <code>ExclusiveStartApplicationName</code> in the request body, and set the value of this to the last application name from the previous response. </p> <p>If you want detailed information about a specific application, use <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:ListApplications</code> action.</p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.ListApplications
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(callback: (data : ListApplicationsResponse) => any, requestBody: ListApplicationsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.ListApplications', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(callback: (data : ListTagsForResourceResponse) => any, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.</p> <p>After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.</p> <p> The application status must be <code>READY</code> for you to start an application. You can get the application status in the console or using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p> <p>After you start the application, you can stop the application from processing the input by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html">StopApplication</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StartApplication</code> action.</p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.StartApplication
		 * @return {StartApplicationResponse} Success
		 */
		StartApplication(callback: (data : StartApplicationResponse) => any, requestBody: StartApplicationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.StartApplication', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StopApplication</code> action.</p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.StopApplication
		 * @return {StopApplicationResponse} Success
		 */
		StopApplication(callback: (data : StopApplicationResponse) => any, requestBody: StopApplicationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.StopApplication', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(callback: (data : TagResourceResponse) => any, requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.TagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes one or more tags from a Kinesis Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(callback: (data : UntagResourceResponse) => any, requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.UntagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration. </p> <p>Note that Amazon Kinesis Analytics updates the <code>CurrentApplicationVersionId</code> each time you update your application. </p> <p>This operation requires permission for the <code>kinesisanalytics:UpdateApplication</code> action.</p>
		 * Post /#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(callback: (data : UpdateApplicationResponse) => any, requestBody: UpdateApplicationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

