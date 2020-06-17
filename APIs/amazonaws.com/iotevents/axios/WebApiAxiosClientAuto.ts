import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface CreateDetectorModelResponse {

		/**Information about how the detector model is configured. */
		detectorModelConfiguration?: DetectorModelConfiguration;
	}


	/**Metadata that can be used to manage the resource. */
	export interface Tag {
		key: string;
		value: string;
	}

	export interface CreateInputResponse {

		/**Information about the configuration of an input. */
		inputConfiguration?: InputConfiguration;
	}

	export interface DescribeDetectorModelResponse {

		/**Information about the detector model. */
		detectorModel?: DetectorModel;
	}

	export interface DescribeInputResponse {

		/**Information about the input. */
		input?: Input;
	}

	export interface DescribeLoggingOptionsResponse {

		/**The values of the AWS IoT Events logging options. */
		loggingOptions?: LoggingOptions;
	}

	export interface ListDetectorModelVersionsResponse {
		detectorModelVersionSummaries?: Array<DetectorModelVersionSummary>;
		nextToken?: string;
	}

	export interface ListDetectorModelsResponse {
		detectorModelSummaries?: Array<DetectorModelSummary>;
		nextToken?: string;
	}

	export interface ListInputsResponse {
		inputSummaries?: Array<InputSummary>;
		nextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
	}

	export enum LoggingLevel { ERROR = 0, INFO = 1, DEBUG = 2 }

	export interface UpdateDetectorModelResponse {

		/**Information about how the detector model is configured. */
		detectorModelConfiguration?: DetectorModelConfiguration;
	}

	export interface UpdateInputResponse {

		/**Information about the configuration of an input. */
		inputConfiguration?: InputConfiguration;
	}


	/**Information about the variable and its new value. */
	export interface SetVariableAction {
		variableName: string;
		value: string;
	}


	/**Information required to publish the Amazon SNS message. */
	export interface SNSTopicPublishAction {
		targetArn: string;

		/**<p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}


	/**Information required to publish the MQTT message through the AWS IoT message broker. */
	export interface IotTopicPublishAction {
		mqttTopic: string;

		/**<p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}


	/**Information needed to set the timer. */
	export interface SetTimerAction {
		timerName: string;
		seconds?: number;
		durationExpression?: string;
	}


	/**Information needed to clear the timer. */
	export interface ClearTimerAction {
		timerName: string;
	}


	/**Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer. */
	export interface ResetTimerAction {
		timerName: string;
	}


	/**Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. */
	export interface LambdaAction {
		functionArn: string;

		/**<p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}


	/**Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action. */
	export interface IotEventsAction {
		inputName: string;

		/**<p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}


	/**Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue. */
	export interface SqsAction {
		queueUrl: string;
		useBase64?: boolean;

		/**<p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}


	/**Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream. */
	export interface FirehoseAction {
		deliveryStreamName: string;
		separator?: string;

		/**<p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}


	/**<p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>The <code>tableName</code> and <code>hashKeyField</code> values must match the table name and the partition key of the DynamoDB table. </p> <note> <p>If the DynamoDB table also has a sort key, you must specify <code>rangeKeyField</code>. The <code>rangeKeyField</code> value must match the sort key.</p> </note> <p/> <p>The <code>hashKeyValue</code> and <code>rangeKeyValue</code> use substitution templates. These templates provide data at runtime. The syntax is <code>${sql-expression}</code>.</p> <p>You can use expressions for parameters that are string data type. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <note> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The <code>payloadField</code> is <code>&lt;payload-field&gt;_raw</code>.</p> </note> */
	export interface DynamoDBAction {
		hashKeyType?: string;
		hashKeyField: string;
		hashKeyValue: string;
		rangeKeyType?: string;
		rangeKeyField?: string;
		rangeKeyValue?: string;
		operation?: string;
		payloadField?: string;
		tableName: string;

		/**<p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}


	/**<p>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</p> <important> <p>The <code>type</code> value for <code>Payload</code> must be <code>JSON</code>.</p> </important> <p>You can use expressions for parameters that are strings. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> */
	export interface DynamoDBv2Action {
		tableName: string;

		/**<p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}


	/**<p>Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.</p> <important> <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p> </important> <p>For parameters that are string data type, you can specify the following options: </p> <ul> <li> <p>Use a string. For example, the <code>propertyAlias</code> value can be <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>propertyAlias</code> value can be <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/${$input.TemperatureInput.sensorData.turbineID}/temperature'</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
	export interface IotSiteWiseAction {
		entryId?: string;
		assetId?: string;
		propertyId?: string;
		propertyAlias?: string;

		/**<p>A structure that contains value information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>For parameters that are string data type, you can specify the following options: </p> <ul> <li> <p>Use a string. For example, the <code>quality</code> value can be <code>'GOOD'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>quality</code> value can be <code>$input.TemperatureInput.sensorData.quality</code> .</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
		propertyValue: AssetPropertyValue;
	}


	/**An action to be performed when the <code>condition</code> is TRUE. */
	export interface Action {

		/**Information about the variable and its new value. */
		setVariable?: SetVariableAction;

		/**Information required to publish the Amazon SNS message. */
		sns?: SNSTopicPublishAction;

		/**Information required to publish the MQTT message through the AWS IoT message broker. */
		iotTopicPublish?: IotTopicPublishAction;

		/**Information needed to set the timer. */
		setTimer?: SetTimerAction;

		/**Information needed to clear the timer. */
		clearTimer?: ClearTimerAction;

		/**Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer. */
		resetTimer?: ResetTimerAction;

		/**Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. */
		lambda?: LambdaAction;

		/**Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action. */
		iotEvents?: IotEventsAction;

		/**Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue. */
		sqs?: SqsAction;

		/**Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream. */
		firehose?: FirehoseAction;

		/**<p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>The <code>tableName</code> and <code>hashKeyField</code> values must match the table name and the partition key of the DynamoDB table. </p> <note> <p>If the DynamoDB table also has a sort key, you must specify <code>rangeKeyField</code>. The <code>rangeKeyField</code> value must match the sort key.</p> </note> <p/> <p>The <code>hashKeyValue</code> and <code>rangeKeyValue</code> use substitution templates. These templates provide data at runtime. The syntax is <code>${sql-expression}</code>.</p> <p>You can use expressions for parameters that are string data type. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <note> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The <code>payloadField</code> is <code>&lt;payload-field&gt;_raw</code>.</p> </note> */
		dynamoDB?: DynamoDBAction;

		/**<p>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</p> <important> <p>The <code>type</code> value for <code>Payload</code> must be <code>JSON</code>.</p> </important> <p>You can use expressions for parameters that are strings. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> */
		dynamoDBv2?: DynamoDBv2Action;

		/**<p>Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.</p> <important> <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p> </important> <p>For parameters that are string data type, you can specify the following options: </p> <ul> <li> <p>Use a string. For example, the <code>propertyAlias</code> value can be <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>propertyAlias</code> value can be <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/${$input.TemperatureInput.sensorData.turbineID}/temperature'</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
		iotSiteWise?: IotSiteWiseAction;
	}


	/**<p>A structure that contains timestamp information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html">TimeInNanos</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>For parameters that are string data type, you can specify the following options:</p> <ul> <li> <p>Use a string. For example, the <code>timeInSeconds</code> value can be <code>'1586400675'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>timeInSeconds</code> value can be <code>'${$input.TemperatureInput.sensorData.timestamp/1000}'</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
	export interface AssetPropertyTimestamp {
		timeInSeconds: string;
		offsetInNanos?: string;
	}


	/**<p>A structure that contains an asset property value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html">Variant</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <important> <p>You must specify one of the following value types, depending on the <code>dataType</code> of the specified asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html">AssetProperty</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> </important> <p>For parameters that are string data type, you can specify the following options:</p> <ul> <li> <p>Use a string. For example, the <code>doubleValue</code> value can be <code>'47.9'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>doubleValue</code> value can be <code>$input.TemperatureInput.sensorData.temperature</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
	export interface AssetPropertyVariant {
		stringValue?: string;
		integerValue?: string;
		doubleValue?: string;
		booleanValue?: string;
	}


	/**<p>A structure that contains value information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>For parameters that are string data type, you can specify the following options: </p> <ul> <li> <p>Use a string. For example, the <code>quality</code> value can be <code>'GOOD'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>quality</code> value can be <code>$input.TemperatureInput.sensorData.quality</code> .</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
	export interface AssetPropertyValue {

		/**<p>A structure that contains an asset property value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html">Variant</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <important> <p>You must specify one of the following value types, depending on the <code>dataType</code> of the specified asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html">AssetProperty</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> </important> <p>For parameters that are string data type, you can specify the following options:</p> <ul> <li> <p>Use a string. For example, the <code>doubleValue</code> value can be <code>'47.9'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>doubleValue</code> value can be <code>$input.TemperatureInput.sensorData.temperature</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
		value: AssetPropertyVariant;

		/**<p>A structure that contains timestamp information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html">TimeInNanos</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>For parameters that are string data type, you can specify the following options:</p> <ul> <li> <p>Use a string. For example, the <code>timeInSeconds</code> value can be <code>'1586400675'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>timeInSeconds</code> value can be <code>'${$input.TemperatureInput.sensorData.timestamp/1000}'</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
		timestamp?: AssetPropertyTimestamp;
		quality?: string;
	}


	/**The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload. Those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors.  */
	export interface Attribute {
		jsonPath: string;
	}


	/**Information that defines how a detector operates. */
	export interface DetectorModelDefinition {
		states: Array<State>;
		initialStateName: string;
	}

	export enum EvaluationMethod { BATCH = 0, SERIAL = 1 }

	export interface CreateDetectorModelRequest {
		detectorModelName: string;

		/**Information that defines how a detector operates. */
		detectorModelDefinition: DetectorModelDefinition;
		detectorModelDescription?: string;
		key?: string;
		roleArn: string;
		tags?: Array<Tag>;
		evaluationMethod?: CreateDetectorModelRequestEvaluationMethod;
	}

	export enum CreateDetectorModelRequestEvaluationMethod { BATCH = 0, SERIAL = 1 }


	/**Information about how the detector model is configured. */
	export interface DetectorModelConfiguration {
		detectorModelName?: string;
		detectorModelVersion?: string;
		detectorModelDescription?: string;
		detectorModelArn?: string;
		roleArn?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
		status?: DetectorModelConfigurationStatus;
		key?: string;
		evaluationMethod?: DetectorModelConfigurationEvaluationMethod;
	}

	export enum DetectorModelConfigurationStatus { ACTIVE = 0, ACTIVATING = 1, INACTIVE = 2, DEPRECATED = 3, DRAFT = 4, PAUSED = 5, FAILED = 6 }

	export enum DetectorModelConfigurationEvaluationMethod { BATCH = 0, SERIAL = 1 }


	/**The definition of the input. */
	export interface InputDefinition {
		attributes: Array<Attribute>;
	}

	export interface CreateInputRequest {
		inputName: string;
		inputDescription?: string;

		/**The definition of the input. */
		inputDefinition: InputDefinition;
		tags?: Array<Tag>;
	}


	/**Information about the configuration of an input. */
	export interface InputConfiguration {
		inputName: string;
		inputDescription?: string;
		inputArn: string;
		creationTime: Date;
		lastUpdateTime: Date;
		status: InputConfigurationStatus;
	}

	export enum InputConfigurationStatus { CREATING = 0, UPDATING = 1, ACTIVE = 2, DELETING = 3 }


	/**Information about the detector model. */
	export interface DetectorModel {

		/**Information that defines how a detector operates. */
		detectorModelDefinition?: DetectorModelDefinition;

		/**Information about how the detector model is configured. */
		detectorModelConfiguration?: DetectorModelConfiguration;
	}


	/**Information about the input. */
	export interface Input {

		/**Information about the configuration of an input. */
		inputConfiguration?: InputConfiguration;

		/**The definition of the input. */
		inputDefinition?: InputDefinition;
	}


	/**The values of the AWS IoT Events logging options. */
	export interface LoggingOptions {
		roleArn: string;
		level: LoggingOptionsLevel;
		enabled: boolean;
		detectorDebugOptions?: Array<DetectorDebugOption>;
	}

	export enum LoggingOptionsLevel { ERROR = 0, INFO = 1, DEBUG = 2 }


	/**The detector model and the specific detectors (instances) for which the logging level is given. */
	export interface DetectorDebugOption {
		detectorModelName: string;
		keyValue?: string;
	}

	export enum DetectorModelVersionStatus { ACTIVE = 0, ACTIVATING = 1, INACTIVE = 2, DEPRECATED = 3, DRAFT = 4, PAUSED = 5, FAILED = 6 }


	/**Information about the detector model. */
	export interface DetectorModelSummary {
		detectorModelName?: string;
		detectorModelDescription?: string;
		creationTime?: Date;
	}


	/**Information about the detector model version. */
	export interface DetectorModelVersionSummary {
		detectorModelName?: string;
		detectorModelVersion?: string;
		detectorModelArn?: string;
		roleArn?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
		status?: DetectorModelVersionSummaryStatus;
		evaluationMethod?: DetectorModelVersionSummaryEvaluationMethod;
	}

	export enum DetectorModelVersionSummaryStatus { ACTIVE = 0, ACTIVATING = 1, INACTIVE = 2, DEPRECATED = 3, DRAFT = 4, PAUSED = 5, FAILED = 6 }

	export enum DetectorModelVersionSummaryEvaluationMethod { BATCH = 0, SERIAL = 1 }


	/**<p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
	export interface Payload {
		contentExpression: string;
		type: PayloadType;
	}

	export enum PayloadType { STRING = 0, JSON = 1 }


	/**Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE. */
	export interface Event {
		eventName: string;
		condition?: string;
		actions?: Array<Action>;
	}

	export enum InputStatus { CREATING = 0, UPDATING = 1, ACTIVE = 2, DELETING = 3 }


	/**Information about the input. */
	export interface InputSummary {
		inputName?: string;
		inputDescription?: string;
		inputArn?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
		status?: InputSummaryStatus;
	}

	export enum InputSummaryStatus { CREATING = 0, UPDATING = 1, ACTIVE = 2, DELETING = 3 }


	/**When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE. */
	export interface OnEnterLifecycle {
		events?: Array<Event>;
	}


	/**When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>. */
	export interface OnExitLifecycle {
		events?: Array<Event>;
	}


	/**Specifies the actions performed when the <code>condition</code> evaluates to TRUE. */
	export interface OnInputLifecycle {
		events?: Array<Event>;
		transitionEvents?: Array<TransitionEvent>;
	}

	export enum PayloadType { STRING = 0, JSON = 1 }

	export interface PutLoggingOptionsRequest {

		/**The values of the AWS IoT Events logging options. */
		loggingOptions: LoggingOptions;
	}


	/**Information that defines a state of a detector. */
	export interface State {
		stateName: string;

		/**Specifies the actions performed when the <code>condition</code> evaluates to TRUE. */
		onInput?: OnInputLifecycle;

		/**When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE. */
		onEnter?: OnEnterLifecycle;

		/**When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>. */
		onExit?: OnExitLifecycle;
	}

	export interface TagResourceRequest {
		tags: Array<Tag>;
	}


	/**Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE. */
	export interface TransitionEvent {
		eventName: string;
		condition: string;
		actions?: Array<Action>;
		nextState: string;
	}

	export interface UpdateDetectorModelRequest {

		/**Information that defines how a detector operates. */
		detectorModelDefinition: DetectorModelDefinition;
		detectorModelDescription?: string;
		roleArn: string;
		evaluationMethod?: UpdateDetectorModelRequestEvaluationMethod;
	}

	export enum UpdateDetectorModelRequestEvaluationMethod { BATCH = 0, SERIAL = 1 }

	export interface UpdateInputRequest {
		inputDescription?: string;

		/**The definition of the input. */
		inputDefinition: InputDefinition;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Creates a detector model.
		 * Post /detector-models
		 * @return {CreateDetectorModelResponse} Success
		 */
		CreateDetectorModel(requestBody: CreateDetectorModelBody, headersHandler?: () => {[header: string]: string}): Promise<CreateDetectorModelResponse> {
			return Axios.post<CreateDetectorModelResponse>(this.baseUri + '/detector-models', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists the detector models you have created. Only the metadata associated with each detector model is returned.
		 * Get /detector-models
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListDetectorModelsResponse} Success
		 */
		ListDetectorModels(nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListDetectorModelsResponse> {
			return Axios.get<ListDetectorModelsResponse>(this.baseUri + '/detector-models?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Creates an input.
		 * Post /inputs
		 * @return {void} 
		 */
		CreateInput(requestBody: CreateInputBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/inputs', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Lists the inputs you have created.
		 * Get /inputs
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListInputsResponse} Success
		 */
		ListInputs(nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListInputsResponse> {
			return Axios.get<ListInputsResponse>(this.baseUri + '/inputs?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Deletes a detector model. Any active instances of the detector model are also deleted.
		 * Delete /detector-models/{detectorModelName}
		 * @param {string} detectorModelName The name of the detector model to be deleted.
		 * @return {void} 
		 */
		DeleteDetectorModel(detectorModelName: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/detector-models/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
		 * Get /detector-models/{detectorModelName}
		 * @param {string} detectorModelName The name of the detector model.
		 * @param {string} version The version of the detector model.
		 * @return {DescribeDetectorModelResponse} Success
		 */
		DescribeDetectorModel(detectorModelName: string, version: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeDetectorModelResponse> {
			return Axios.get<DescribeDetectorModelResponse>(this.baseUri + '/detector-models/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)) + '&version=' + (version == null ? '' : encodeURIComponent(version)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
		 * Post /detector-models/{detectorModelName}
		 * @param {string} detectorModelName The name of the detector model that is updated.
		 * @return {UpdateDetectorModelResponse} Success
		 */
		UpdateDetectorModel(detectorModelName: string, requestBody: UpdateDetectorModelBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateDetectorModelResponse> {
			return Axios.post<UpdateDetectorModelResponse>(this.baseUri + '/detector-models/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes an input.
		 * Delete /inputs/{inputName}
		 * @param {string} inputName The name of the input to delete.
		 * @return {DeleteInputResponse} Success
		 */
		DeleteInput(inputName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteInputResponse> {
			return Axios.delete<DeleteInputResponse>(this.baseUri + '/inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Describes an input.
		 * Get /inputs/{inputName}
		 * @param {string} inputName The name of the input.
		 * @return {DescribeInputResponse} Success
		 */
		DescribeInput(inputName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeInputResponse> {
			return Axios.get<DescribeInputResponse>(this.baseUri + '/inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates an input.
		 * Put /inputs/{inputName}
		 * @param {string} inputName The name of the input you want to update.
		 * @return {UpdateInputResponse} Success
		 */
		UpdateInput(inputName: string, requestBody: UpdateInputBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateInputResponse> {
			return Axios.put<UpdateInputResponse>(this.baseUri + '/inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Retrieves the current settings of the AWS IoT Events logging options.
		 * Get /logging
		 * @return {DescribeLoggingOptionsResponse} Success
		 */
		DescribeLoggingOptions(headersHandler?: () => {[header: string]: string}): Promise<DescribeLoggingOptionsResponse> {
			return Axios.get<DescribeLoggingOptionsResponse>(this.baseUri + '/logging', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
		 * Put /logging
		 * @return {void} Success
		 */
		PutLoggingOptions(requestBody: PutLoggingOptionsBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + '/logging', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
		 * Get /detector-models/{detectorModelName}/versions
		 * @param {string} detectorModelName The name of the detector model whose versions are returned.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListDetectorModelVersionsResponse} Success
		 */
		ListDetectorModelVersions(detectorModelName: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListDetectorModelVersionsResponse> {
			return Axios.get<ListDetectorModelVersionsResponse>(this.baseUri + '/detector-models/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)) + '/versions&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Lists the tags (metadata) you have assigned to the resource.
		 * Get /tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return Axios.get<ListTagsForResourceResponse>(this.baseUri + '/tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
		 * Post /tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return Axios.post<TagResourceResponse>(this.baseUri + '/tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Removes the given tags (metadata) from the resource.
		 * Delete /tags#resourceArn&tagKeys
		 * @param {string} resourceArn The ARN of the resource.
		 * @param {Array<TagKey>} tagKeys A list of the keys of the tags to be removed from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<TagKey>, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return Axios.delete<UntagResourceResponse>(this.baseUri + '/tags#resourceArn&tagKeys?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}
	}

	export interface CreateDetectorModelBody {

		/**
		 * The name of the detector model.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: string;

		/**Information that defines how a detector operates. */
		detectorModelDefinition: string;

		/**
		 * A brief description of the detector model.
		 * Max length: 128
		 */
		detectorModelDescription?: string;

		/**
		 * The input attribute key used to identify a device or system to create a detector (an instance of the detector model) and then to route each input received to the appropriate detector (instance). This parameter uses a JSON-path expression in the message payload of each input to specify the attribute-value pair that is used to identify the device associated with the input.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$
		 */
		key?: string;

		/**
		 * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: string;

		/**Metadata that can be used to manage the detector model. */
		tags?: Array<Tag>;

		/**Information about the order in which events are evaluated and how actions are executed. */
		evaluationMethod?: CreateDetectorModelBodyEvaluationMethod;
	}

	export enum CreateDetectorModelBodyEvaluationMethod { BATCH = 0, SERIAL = 1 }

	export interface CreateInputBody {

		/**
		 * The name you want to give to the input.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		inputName: string;

		/**
		 * A brief description of the input.
		 * Max length: 128
		 */
		inputDescription?: string;

		/**The definition of the input. */
		inputDefinition: string;

		/**Metadata that can be used to manage the input. */
		tags?: Array<Tag>;
	}

	export interface UpdateDetectorModelBody {

		/**Information that defines how a detector operates. */
		detectorModelDefinition: string;

		/**
		 * A brief description of the detector model.
		 * Max length: 128
		 */
		detectorModelDescription?: string;

		/**
		 * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: string;

		/**Information about the order in which events are evaluated and how actions are executed. */
		evaluationMethod?: UpdateDetectorModelBodyEvaluationMethod;
	}

	export enum UpdateDetectorModelBodyEvaluationMethod { BATCH = 0, SERIAL = 1 }

	export interface UpdateInputBody {

		/**
		 * A brief description of the input.
		 * Max length: 128
		 */
		inputDescription?: string;

		/**The definition of the input. */
		inputDefinition: string;
	}

	export interface PutLoggingOptionsBody {

		/**The values of the AWS IoT Events logging options. */
		loggingOptions: string;
	}

	export interface TagResourceBody {

		/**The new or modified tags for the resource. */
		tags: Array<Tag>;
	}

}

