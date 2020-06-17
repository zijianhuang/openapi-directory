///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface CreateApplicationResponse {
		ApplicationId?: string;
		Author?: string;
		CreationTime?: string;
		Description?: string;
		HomePageUrl?: string;
		IsVerifiedAuthor?: boolean;
		Labels?: Array<__string>;
		LicenseUrl?: string;
		Name?: string;
		ReadmeUrl?: string;
		SpdxLicenseId?: string;
		VerifiedAuthorUrl?: string;

		/**Application version details. */
		Version?: Version;
	}

	export interface CreateApplicationVersionResponse {
		ApplicationId?: string;
		CreationTime?: string;
		ParameterDefinitions?: Array<ParameterDefinition>;
		RequiredCapabilities?: Array<Capability>;
		ResourcesSupported?: boolean;
		SemanticVersion?: string;
		SourceCodeArchiveUrl?: string;
		SourceCodeUrl?: string;
		TemplateUrl?: string;
	}

	export interface CreateCloudFormationChangeSetResponse {
		ApplicationId?: string;
		ChangeSetId?: string;
		SemanticVersion?: string;
		StackId?: string;
	}


	/**Parameter value of the application. */
	export interface ParameterValue {
		Name: string;
		Value: string;
	}


	/**
	 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag">Tag</a>
	 *  </i> Data Type.
	 */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface CreateCloudFormationTemplateResponse {
		ApplicationId?: string;
		CreationTime?: string;
		ExpirationTime?: string;
		SemanticVersion?: string;
		Status?: CreateCloudFormationTemplateResponseStatus;
		TemplateId?: string;
		TemplateUrl?: string;
	}

	export enum CreateCloudFormationTemplateResponseStatus { PREPARING = 0, ACTIVE = 1, EXPIRED = 2 }

	export interface GetApplicationResponse {
		ApplicationId?: string;
		Author?: string;
		CreationTime?: string;
		Description?: string;
		HomePageUrl?: string;
		IsVerifiedAuthor?: boolean;
		Labels?: Array<__string>;
		LicenseUrl?: string;
		Name?: string;
		ReadmeUrl?: string;
		SpdxLicenseId?: string;
		VerifiedAuthorUrl?: string;

		/**Application version details. */
		Version?: Version;
	}

	export interface GetApplicationPolicyResponse {
		Statements?: Array<ApplicationPolicyStatement>;
	}

	export interface GetCloudFormationTemplateResponse {
		ApplicationId?: string;
		CreationTime?: string;
		ExpirationTime?: string;
		SemanticVersion?: string;
		Status?: GetCloudFormationTemplateResponseStatus;
		TemplateId?: string;
		TemplateUrl?: string;
	}

	export enum GetCloudFormationTemplateResponseStatus { PREPARING = 0, ACTIVE = 1, EXPIRED = 2 }

	export interface ListApplicationDependenciesResponse {
		Dependencies?: Array<ApplicationDependencySummary>;
		NextToken?: string;
	}

	export interface ListApplicationVersionsResponse {
		NextToken?: string;
		Versions?: Array<VersionSummary>;
	}

	export interface ListApplicationsResponse {
		Applications?: Array<ApplicationSummary>;
		NextToken?: string;
	}

	export interface PutApplicationPolicyResponse {
		Statements?: Array<ApplicationPolicyStatement>;
	}


	/**Policy statement applied to the application. */
	export interface ApplicationPolicyStatement {
		Actions: Array<__string>;
		PrincipalOrgIDs?: Array<__string>;
		Principals: Array<__string>;
		StatementId?: string;
	}

	export interface UpdateApplicationResponse {
		ApplicationId?: string;
		Author?: string;
		CreationTime?: string;
		Description?: string;
		HomePageUrl?: string;
		IsVerifiedAuthor?: boolean;
		Labels?: Array<__string>;
		LicenseUrl?: string;
		Name?: string;
		ReadmeUrl?: string;
		SpdxLicenseId?: string;
		VerifiedAuthorUrl?: string;

		/**Application version details. */
		Version?: Version;
	}


	/**A nested application summary. */
	export interface ApplicationDependencySummary {
		ApplicationId: string;
		SemanticVersion: string;
	}


	/**Summary of details about the application. */
	export interface ApplicationSummary {
		ApplicationId: string;
		Author: string;
		CreationTime?: string;
		Description: string;
		HomePageUrl?: string;
		Labels?: Array<__string>;
		Name: string;
		SpdxLicenseId?: string;
	}


	/**Values that must be specified in order to deploy some applications. */
	export enum Capability { CAPABILITY_IAM = 0, CAPABILITY_NAMED_IAM = 1, CAPABILITY_AUTO_EXPAND = 2, CAPABILITY_RESOURCE_POLICY = 3 }

	export interface CreateApplicationRequest {
		Author: string;
		Description: string;
		HomePageUrl?: string;
		Labels?: Array<__string>;
		LicenseBody?: string;
		LicenseUrl?: string;
		Name: string;
		ReadmeBody?: string;
		ReadmeUrl?: string;
		SemanticVersion?: string;
		SourceCodeArchiveUrl?: string;
		SourceCodeUrl?: string;
		SpdxLicenseId?: string;
		TemplateBody?: string;
		TemplateUrl?: string;
	}


	/**Application version details. */
	export interface Version {
		ApplicationId: string;
		CreationTime: string;
		ParameterDefinitions: Array<ParameterDefinition>;
		RequiredCapabilities: Array<Capability>;
		ResourcesSupported: boolean;
		SemanticVersion: string;
		SourceCodeArchiveUrl?: string;
		SourceCodeUrl?: string;
		TemplateUrl: string;
	}

	export interface CreateApplicationVersionRequest {
		SourceCodeArchiveUrl?: string;
		SourceCodeUrl?: string;
		TemplateBody?: string;
		TemplateUrl?: string;
	}


	/**
	 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
	 *  </i> Data Type.
	 */
	export interface RollbackConfiguration {
		MonitoringTimeInMinutes?: number;
		RollbackTriggers?: Array<RollbackTrigger>;
	}

	export interface CreateCloudFormationChangeSetRequest {
		Capabilities?: Array<__string>;
		ChangeSetName?: string;
		ClientToken?: string;
		Description?: string;
		NotificationArns?: Array<__string>;
		ParameterOverrides?: Array<ParameterValue>;
		ResourceTypes?: Array<__string>;

		/**
		 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
		 * </i> Data Type.
		 */
		RollbackConfiguration?: RollbackConfiguration;
		SemanticVersion?: string;
		StackName: string;
		Tags?: Array<Tag>;
		TemplateId?: string;
	}

	export interface CreateCloudFormationTemplateRequest {
		SemanticVersion?: string;
	}

	export enum Status { PREPARING = 0, ACTIVE = 1, EXPIRED = 2 }


	/**Parameters supported by the application. */
	export interface ParameterDefinition {
		AllowedPattern?: string;
		AllowedValues?: Array<__string>;
		ConstraintDescription?: string;
		DefaultValue?: string;
		Description?: string;
		MaxLength?: number;
		MaxValue?: number;
		MinLength?: number;
		MinValue?: number;
		Name: string;
		NoEcho?: boolean;
		ReferencedByResources: Array<__string>;
		Type?: string;
	}

	export interface PutApplicationPolicyRequest {
		Statements: Array<ApplicationPolicyStatement>;
	}


	/**
	 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger">RollbackTrigger</a>
	 *  </i> Data Type.
	 */
	export interface RollbackTrigger {
		Arn: string;
		Type: string;
	}

	export interface UnshareApplicationRequest {
		OrganizationId: string;
	}

	export interface UpdateApplicationRequest {
		Author?: string;
		Description?: string;
		HomePageUrl?: string;
		Labels?: Array<__string>;
		ReadmeBody?: string;
		ReadmeUrl?: string;
	}


	/**An application version summary. */
	export interface VersionSummary {
		ApplicationId: string;
		CreationTime: string;
		SemanticVersion: string;
		SourceCodeUrl?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Creates an application, optionally including an AWS SAM file to create the first application version in the same call.
		 * Post /applications
		 * @return {void} 
		 */
		CreateApplication(callback: (data : void) => any, requestBody: CreateApplicationBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/applications', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists applications owned by the requester.
		 * Get /applications
		 * @param {number} maxItems The total number of items to return.
		 * @param {string} nextToken A token to specify where to start paginating.
		 * @param {string} MaxItems Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(maxItems: number, nextToken: string, MaxItems: string, NextToken: string, callback: (data : ListApplicationsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/applications?maxItems=' + maxItems + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates an application version.
		 * Put /applications/{applicationId}/versions/{semanticVersion}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {string} semanticVersion The semantic version of the new version.
		 * @return {void} 
		 */
		CreateApplicationVersion(applicationId: string, semanticVersion: string, callback: (data : void) => any, requestBody: CreateApplicationVersionBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/versions/' + (semanticVersion == null ? '' : encodeURIComponent(semanticVersion)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates an AWS CloudFormation change set for the given application.
		 * Post /applications/{applicationId}/changesets
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {void} 
		 */
		CreateCloudFormationChangeSet(applicationId: string, callback: (data : void) => any, requestBody: CreateCloudFormationChangeSetBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/changesets', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates an AWS CloudFormation template.
		 * Post /applications/{applicationId}/templates
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {void} 
		 */
		CreateCloudFormationTemplate(applicationId: string, callback: (data : void) => any, requestBody: CreateCloudFormationTemplateBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/templates', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the specified application.
		 * Delete /applications/{applicationId}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {void} 
		 */
		DeleteApplication(applicationId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets the specified application.
		 * Get /applications/{applicationId}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {string} semanticVersion The semantic version of the application to get.
		 * @return {GetApplicationResponse} Success
		 */
		GetApplication(applicationId: string, semanticVersion: string, callback: (data : GetApplicationResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&semanticVersion=' + (semanticVersion == null ? '' : encodeURIComponent(semanticVersion)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves the policy for the application.
		 * Get /applications/{applicationId}/policy
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {GetApplicationPolicyResponse} Success
		 */
		GetApplicationPolicy(applicationId: string, callback: (data : GetApplicationPolicyResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/policy', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Sets the permission policy for an application. For the list of actions supported for this operation, see
		 * <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application
		 * Permissions</a>
		 * .
		 * Put /applications/{applicationId}/policy
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {PutApplicationPolicyResponse} Success
		 */
		PutApplicationPolicy(applicationId: string, callback: (data : PutApplicationPolicyResponse) => any, requestBody: PutApplicationPolicyBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/policy', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the specified AWS CloudFormation template.
		 * Get /applications/{applicationId}/templates/{templateId}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {string} templateId <p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p>
		 * @return {GetCloudFormationTemplateResponse} Success
		 */
		GetCloudFormationTemplate(applicationId: string, templateId: string, callback: (data : GetCloudFormationTemplateResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/templates/' + (templateId == null ? '' : encodeURIComponent(templateId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves the list of applications nested in the containing application.
		 * Get /applications/{applicationId}/dependencies
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {number} maxItems The total number of items to return.
		 * @param {string} nextToken A token to specify where to start paginating.
		 * @param {string} semanticVersion The semantic version of the application to get.
		 * @param {string} MaxItems Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationDependenciesResponse} Success
		 */
		ListApplicationDependencies(applicationId: string, maxItems: number, nextToken: string, semanticVersion: string, MaxItems: string, NextToken: string, callback: (data : ListApplicationDependenciesResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/dependencies&maxItems=' + maxItems + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&semanticVersion=' + (semanticVersion == null ? '' : encodeURIComponent(semanticVersion)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Lists versions for the specified application.
		 * Get /applications/{applicationId}/versions
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {number} maxItems The total number of items to return.
		 * @param {string} nextToken A token to specify where to start paginating.
		 * @param {string} MaxItems Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationVersionsResponse} Success
		 */
		ListApplicationVersions(applicationId: string, maxItems: number, nextToken: string, MaxItems: string, NextToken: string, callback: (data : ListApplicationVersionsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/versions&maxItems=' + maxItems + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * <p>Unshares an application from an AWS Organization.</p><p>This operation can be called only from the organization's master account.</p>
		 * Post /applications/{applicationId}/unshare
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {void} 
		 */
		UnshareApplication(applicationId: string, callback: (data : void) => any, requestBody: UnshareApplicationBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/unshare', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

	export interface CreateApplicationBody {

		/**<p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p> */
		author: string;

		/**<p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p> */
		description: string;

		/**A URL with more information about the application, for example the location of your GitHub repository for the application. */
		homePageUrl?: string;

		/**<p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p> */
		labels?: Array<__string>;

		/**
		 * <p>A local text file that contains the license of the app that matches the spdxLicenseID value of your application.
		 * The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p>
		 */
		licenseBody?: string;

		/**<p>A link to the S3 object that contains the license of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p> */
		licenseUrl?: string;

		/**<p>The name of the application that you want to publish.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\-]+";</p> */
		name: string;

		/**
		 * <p>A local text readme file in Markdown language that contains a more detailed description of the application and how it works.
		 * The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p>
		 */
		readmeBody?: string;

		/**<p>A link to the S3 object in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p> */
		readmeUrl?: string;

		/**
		 * <p>The semantic version of the application:</p><p>
		 * <a href="https://semver.org/">https://semver.org/</a>
		 * </p>
		 */
		semanticVersion?: string;

		/**<p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p> */
		sourceCodeArchiveUrl?: string;

		/**A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit. */
		sourceCodeUrl?: string;

		/**A valid identifier from <a href="https://spdx.org/licenses/">https://spdx.org/licenses/</a>. */
		spdxLicenseId?: string;

		/**
		 * <p>The local raw packaged AWS SAM template file of your application.
		 * The file has the format file://&lt;path>/&lt;filename>.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p>
		 */
		templateBody?: string;

		/**<p>A link to the S3 object containing the packaged AWS SAM template of your application.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p> */
		templateUrl?: string;
	}

	export interface CreateApplicationVersionBody {

		/**<p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p> */
		sourceCodeArchiveUrl?: string;

		/**A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit. */
		sourceCodeUrl?: string;

		/**The raw packaged AWS SAM template of your application. */
		templateBody?: string;

		/**A link to the packaged AWS SAM template of your application. */
		templateUrl?: string;
	}

	export interface CreateCloudFormationChangeSetBody {

		/**
		 * <p>A list of values that you must specify before you can deploy certain applications.
		 * Some applications might include resources that can affect permissions in your AWS
		 * account, for example, by creating new AWS Identity and Access Management (IAM) users.
		 * For those applications, you must explicitly acknowledge their capabilities by
		 * specifying this parameter.</p><p>The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM,
		 * CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.</p><p>The following resources require you to specify CAPABILITY_IAM or
		 * CAPABILITY_NAMED_IAM:
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">AWS::IAM::Group</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM::Policy</a>, and
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">AWS::IAM::Role</a>.
		 * If the application contains IAM resources, you can specify either CAPABILITY_IAM
		 * or CAPABILITY_NAMED_IAM. If the application contains IAM resources
		 * with custom names, you must specify CAPABILITY_NAMED_IAM.</p><p>The following resources require you to specify CAPABILITY_RESOURCE_POLICY:
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html">AWS::Lambda::Permission</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM:Policy</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html">AWS::ApplicationAutoScaling::ScalingPolicy</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html">AWS::S3::BucketPolicy</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html">AWS::SQS::QueuePolicy</a>, and
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html">AWS::SNS:TopicPolicy</a>.</p><p>Applications that contain one or more nested applications require you to specify
		 * CAPABILITY_AUTO_EXPAND.</p><p>If your application template contains any of the above resources, we recommend that you review
		 * all permissions associated with the application before deploying. If you don't specify
		 * this parameter for an application that requires capabilities, the call will fail.</p>
		 */
		capabilities?: Array<__string>;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		changeSetName?: string;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		clientToken?: string;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		description?: string;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		notificationArns?: Array<__string>;

		/**A list of parameter values for the parameters of the application. */
		parameterOverrides?: Array<ParameterValue>;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		resourceTypes?: Array<__string>;

		/**
		 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
		 * </i> Data Type.
		 */
		rollbackConfiguration?: string;

		/**
		 * <p>The semantic version of the application:</p><p>
		 * <a href="https://semver.org/">https://semver.org/</a>
		 * </p>
		 */
		semanticVersion?: string;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		stackName: string;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		tags?: Array<Tag>;

		/**<p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p> */
		templateId?: string;
	}

	export interface CreateCloudFormationTemplateBody {

		/**
		 * <p>The semantic version of the application:</p><p>
		 * <a href="https://semver.org/">https://semver.org/</a>
		 * </p>
		 */
		semanticVersion?: string;
	}

	export interface PutApplicationPolicyBody {

		/**An array of policy statements applied to the application. */
		statements: Array<ApplicationPolicyStatement>;
	}

	export interface UnshareApplicationBody {

		/**The AWS Organization ID to unshare the application from. */
		organizationId: string;
	}

}

