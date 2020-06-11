import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {

	/**An AGCO Power ECU */
	export interface AGCOPowerServices.Models.ECU {

		/**The code used to activate the ECU. May not be modified. Returned only on activation. */
		ActivationCode?: string;

		/**
		 * A description why the ECU cannot be deactivated.
		 * Pattern: ^[a-zA-Z0-9]{0,4096}$
		 */
		DamagedDescription?: string;

		/**
		 * The serial number of the ECU’s engine
		 * Pattern: (^[A-Z][0-9]+$)|(^[ABCDEFGHJKLMNPRSTVWX1-9][5CMB][ED][0-5][0-9][0-7][0-9][0-9][0-9]$)
		 */
		EngineSerialNumber: string;

		/**
		 * The serial number of the ECU that this ECU replaces. Required if activating an ECU..
		 * Pattern: ^0?\d{23}$
		 */
		ReplacesECUSerialNumber?: string;

		/**
		 * The serial number of the ECU
		 * Pattern: ^0?\d{23}$
		 */
		SerialNumber: string;

		/**The state of the ECU */
		State: AGCOPowerServices.Models.ECUState;
	}

	export enum AGCOPowerServices.Models.ECUState { Active = 0, Inactive = 1, Damaged = 2 }


	/**Production data for an AGCO Power engine. */
	export interface AGCOPowerServices.Models.ProductionData {

		/**
		 * Type of data. Valid types are (but not limited to)
		 * 'PowerCalibration'
		 */
		DataType: string;

		/**Raw values of the calibration data */
		DataValues: string;
	}


	/**Status of a voucher in the AGCO Power system */
	export interface AGCOPowerServices.Models.UserStatus {

		/**The dealer code of the voucher */
		DealerCode: string;

		/**The state of the voucher */
		State?: AGCOPowerServices.Models.UserStatusState;

		/**The voucher code */
		VoucherCode: string;
	}

	export enum AGCOPowerServices.Models.UserStatusState { Active = 0, Inactive = 1, None = 2 }

	export interface API.IPagedResponse[AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition] {
		Entities?: Array<AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition>;

		/**Metadata for the paged response */
		Metadata?: API.PagedResponseMetadata;
	}

	export interface API.IPagedResponse[AuthorizationCodes.Shared.Models.AuthorizationCode] {
		Entities?: Array<AuthorizationCodes.Shared.Models.AuthorizationCode>;

		/**Metadata for the paged response */
		Metadata?: API.PagedResponseMetadata;
	}

	export interface API.Models.ApiError {
		DeveloperMessage?: string;
		ErrorCode?: number;
		MoreInfo?: string;
		UserMessage?: string;
	}

	export interface API.Models.AuthenticatedUser {

		/**The user's email address */
		Email?: string;

		/**The MAC identifier to use for API access */
		MACId?: string;

		/**The MAC token to use for API access */
		MACToken?: string;

		/**The user's name */
		Name?: string;

		/**The token to use for API access */
		Token?: string;

		/**The user ID */
		UserID?: number;

		/**The username used for authentication */
		Username?: string;
	}

	export interface API.Models.Credentials {

		/**The action to perform on the bearer token. Optional. Defaults to ‘None’. */
		BearerAction?: API.Models.CredentialsBearerAction;

		/**The action to perform on the MAC token. Optional. Defaults to ‘None’. */
		MACAction?: API.Models.CredentialsMACAction;

		/**A secret word or phrase that must be used to gain admission */
		password: string;

		/**A unique ID a user needs to login with */
		username: string;
	}

	export enum API.Models.CredentialsBearerAction { None = 0, Reset = 1, Disable = 2 }

	export enum API.Models.CredentialsMACAction { None = 0, Reset = 1, Disable = 2 }

	export interface API.Models.Log {
		ID?: string;
		Message?: string;
		TimeStamp?: Date;
	}

	export interface API.Models.Notification {
		CC_Addresses?: Array<string>;
		IsBodyHtml: boolean;
		MessageBody: string;
		Subject: string;
		To_Addresses: Array<string>;
	}

	export interface API.Models.PasswordReset {

		/**The new password */
		NewPassword: string;

		/**The password reset token */
		Token: string;
	}

	export interface API.Models.PasswordResetRequest {

		/**The query string parameter name to use for supplying the password reset token */
		ParameterName: string;

		/**The URL to direct the user to reset the password. */
		Url: string;

		/**The username to reset the password for */
		Username: string;
	}

	export interface API.Models.Permission {

		/**Description of data to be provided with Role Authorization */
		DataDescription?: string;

		/**Indicates if data is required or optional */
		DataRequired: API.Models.PermissionDataRequired;
		Description?: string;

		/**The identifier of the permission. */
		Id?: number;

		/**The name of the permission. */
		Name: string;
	}

	export enum API.Models.PermissionDataRequired { Yes = 0, No = 1, Optional = 2 }


	/**Defines an API Role */
	export interface API.Models.Role {

		/**Role description */
		Description: string;

		/**The role's identifier. */
		Id?: number;

		/**
		 * The name of the role. Must be alpha-numeric strings separated by a period (.).
		 * Pattern: ^[0-9a-zA-Z]+(\.[0-9a-zA-Z]+)*$
		 */
		Name: string;
	}


	/**Change to the Permissions that a Role is given. */
	export interface API.Models.RolePermissionChange {

		/**The action to take. */
		Action: API.Models.RolePermissionChangeAction;

		/**The name of the permission to grant or revoke. */
		Permission: string;
	}

	export enum API.Models.RolePermissionChangeAction { Grant = 0, Revoke = 1 }

	export interface API.Models.RoleUserChange {

		/**The action to take with the user */
		Action: API.Models.RoleUserChangeAction;

		/**The Id of the User */
		Id: number;
	}

	export enum API.Models.RoleUserChangeAction { Grant = 0, Revoke = 1 }

	export interface API.Models.TokenOptions {

		/**The action to perform on the bearer token. Optional. Defaults to ‘None’. */
		BearerAction?: API.Models.TokenOptionsBearerAction;

		/**The action to perform on the MAC token. Optional. Defaults to ‘None’. */
		MACAction?: API.Models.TokenOptionsMACAction;
	}

	export enum API.Models.TokenOptionsBearerAction { None = 0, Reset = 1, Disable = 2 }

	export enum API.Models.TokenOptionsMACAction { None = 0, Reset = 1, Disable = 2 }

	export interface API.Models.User {

		/**Never Returned.  When changing a user's password, this field must contain the new password. */
		ChangePassword?: string;

		/**The user's email address */
		Email?: string;

		/**The user's name */
		Name?: string;

		/**Never Returned.  Required when creating a new user or updating a user.  When changing a user's password this field must contain the current password. */
		Password?: string;

		/**The user ID */
		UserID?: number;

		/**The username used for authentication */
		Username?: string;
	}

	export interface API.Models.UserEffectivePermission {
		PermissionId?: number;
		PermissionName?: string;
		UserID?: number;
	}

	export interface API.Models.UserRoleChange {

		/**The action to take with the role */
		Action: API.Models.UserRoleChangeAction;

		/**The name of the role */
		Name: string;
	}

	export enum API.Models.UserRoleChangeAction { Grant = 0, Revoke = 1 }


	/**Metadata for the paged response */
	export interface API.PagedResponseMetadata {

		/**The number of entities this paged response is limited to. */
		Limit: number;

		/**The number of entities prior to this page of items. */
		Offset: number;

		/**The total number of entities matching the request. */
		TotalCount: number;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[API.Models.Log] {
		Entities: Array<API.Models.Log>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[API.Models.Permission] {
		Entities: Array<API.Models.Permission>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[API.Models.Role] {
		Entities: Array<API.Models.Role>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[API.Models.UserEffectivePermission] {
		Entities: Array<API.Models.UserEffectivePermission>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[API.Models.User] {
		Entities: Array<API.Models.User>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[BuildSystem.Shared.DTO.ActivityRun] {
		Entities: Array<BuildSystem.Shared.DTO.ActivityRun>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[BuildSystem.Shared.DTO.Activity] {
		Entities: Array<BuildSystem.Shared.DTO.Activity>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[BuildSystem.Shared.DTO.Agent] {
		Entities: Array<BuildSystem.Shared.DTO.Agent>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[BuildSystem.Shared.DTO.JobRun] {
		Entities: Array<BuildSystem.Shared.DTO.JobRun>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[BuildSystem.Shared.DTO.Job] {
		Entities: Array<BuildSystem.Shared.DTO.Job>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[BuildSystem.Shared.DTO.Step] {
		Entities: Array<BuildSystem.Shared.DTO.Step>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[ContentSubmission.Shared.BusinessEntities.ContentDefinition] {
		Entities: Array<ContentSubmission.Shared.BusinessEntities.ContentDefinition>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion] {
		Entities: Array<ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[ContentSubmission.Shared.BusinessEntities.ContentSubmission] {
		Entities: Array<ContentSubmission.Shared.BusinessEntities.ContentSubmission>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[ContentSubmission.Shared.BusinessEntities.Release] {
		Entities: Array<ContentSubmission.Shared.BusinessEntities.Release>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[ContentSubmission.Shared.BusinessEntities.UserContentDefinition] {
		Entities: Array<ContentSubmission.Shared.BusinessEntities.UserContentDefinition>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[DealerDB.Models.Dealer] {
		Entities: Array<DealerDB.Models.Dealer>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[DealerDB.Models.DealersPerCountry] {
		Entities: Array<DealerDB.Models.DealersPerCountry>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[DealerDB.Models.License] {
		Entities: Array<DealerDB.Models.License>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[DealerDB.Models.VoucherHistory] {
		Entities: Array<DealerDB.Models.VoucherHistory>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[DealerDB.Models.Voucher] {
		Entities: Array<DealerDB.Models.Voucher>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[UpdateSystem.Models.AvailableUpdateGroupSubscription] {
		Entities: Array<UpdateSystem.Models.AvailableUpdateGroupSubscription>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[UpdateSystem.Models.Bundle] {
		Entities: Array<UpdateSystem.Models.Bundle>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[UpdateSystem.Models.ClientStatus,UpdateSystem.Models.PagedClientStatusMetadata] {
		Entities: Array<UpdateSystem.Models.ClientStatus>;
		Metadata: UpdateSystem.Models.PagedClientStatusMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[UpdateSystem.Models.Client] {
		Entities: Array<UpdateSystem.Models.Client>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[UpdateSystem.Models.PackageStatusSummary] {
		Entities: Array<UpdateSystem.Models.PackageStatusSummary>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[UpdateSystem.Models.PackageTypeIDtoBundle] {
		Entities: Array<UpdateSystem.Models.PackageTypeIDtoBundle>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[UpdateSystem.Models.PackageType] {
		Entities: Array<UpdateSystem.Models.PackageType>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[UpdateSystem.Models.Package] {
		Entities: Array<UpdateSystem.Models.Package>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[UpdateSystem.Models.PriorityPackage] {
		Entities: Array<UpdateSystem.Models.PriorityPackage>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[UpdateSystem.Models.UpdateGroupClientRelationship] {
		Entities: Array<UpdateSystem.Models.UpdateGroupClientRelationship>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[UpdateSystem.Models.UpdateGroupSubscription] {
		Entities: Array<UpdateSystem.Models.UpdateGroupSubscription>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**A response containing a page of results and metadata concerning the results */
	export interface API.PagedResponse[UpdateSystem.Models.UpdateGroup] {
		Entities: Array<UpdateSystem.Models.UpdateGroup>;

		/**Metadata for the paged response */
		Metadata: API.PagedResponseMetadata;
	}


	/**Represents the model containing an authorization code used to unlock a feature in machines and EDT */
	export interface AuthorizationCodes.Shared.Models.AuthorizationCode {

		/**The code to enter to unlock a feature. Read only. */
		Code?: string;

		/**The ID of the user that created this authorization code. Read only. */
		CreatedByUserID?: number;

		/**A timestamp of when this code was created. Read only. */
		CreatedDate?: Date;

		/**The parameters and values contained as data in this authorization code. May not be updated. */
		DataParameters?: Array<AuthorizationCodes.Shared.Models.Parameter>;

		/**The id of the definition for this authorization code. May not be updated. */
		DefinitionID?: string;

		/**The ID of the user that deleted this authorization code. Read only. */
		DeletedByUserID?: number;

		/**A timestamp of when this authorization code was deleted. Read only. */
		DeletedDate?: Date;

		/**The identifier for the authorization code. Read only. */
		ID?: number;

		/**Indicates whether this code is deleted. */
		IsDeleted?: boolean;

		/**The parameters and values used to validate this authorization code. May not be updated. */
		ValidationParameters?: Array<AuthorizationCodes.Shared.Models.Parameter>;
	}


	/**Represents the model used to define how a type of authorization code is generated. */
	export interface AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition {

		/**The ID of the user that created this definition. Read only. */
		CreatedByUserID?: number;

		/**A timestamp of when this definition was created. Read only. */
		CreatedDate?: Date;

		/**The defined fields to include in authorization codes generated from this definition. May not be updated. */
		DataFields?: Array<AuthorizationCodes.Shared.Models.DataField>;

		/**The ID of the user that deleted this definition. Read only. */
		DeletedByUserID?: number;

		/**A timestamp of when this definition was deleted. Read only. */
		DeletedDate?: Date;

		/**A description of this definition. May not be updated. */
		Description?: string;

		/**The number of bits used for timestamp verification. Defaults to 5. May not be updated. */
		DurationAccuracy?: number;

		/**The amount of duration for the specified duration unit used to calculate the Authorization Code. Defaults to 1. May not be updated. */
		DurationAmount?: number;

		/**The units of duration used to calculate the Authorization Code. Defaults to 'Days'. May not be updated. */
		DurationUnits?: AuthorizationCodes.Shared.Models.AuthorizationCodeDefinitionDurationUnits;

		/**The bit length of the hash data which will be used for the authorization code. Defaults to 20. May not be updated. */
		HashLength?: number;

		/**The ID of the authorization code definition. Read only. */
		ID?: string;

		/**Indicates whether this definition is enabled. True if generating codes is disabled. */
		IsDeleted?: boolean;

		/**The name of the authorization code definition. May not be updated. */
		Name: string;

		/**The bit length of random data which will be included in the authorization code.  This is necessary to allow creation of "identical" authorization codes containing the same timestamp. Defaults to 5. May not be updated. */
		RandomLength?: number;

		/**The defined fields to verify when reading authorization codes generated from this definition. May not be updated. */
		ValidationFields?: Array<AuthorizationCodes.Shared.Models.ValidationField>;
	}

	export enum AuthorizationCodes.Shared.Models.AuthorizationCodeDefinitionDurationUnits { Weeks = 0, Days = 1, Hours = 2, Minutes = 3 }

	export interface AuthorizationCodes.Shared.Models.DataField {

		/**The number of decimal digits to be used by this data field. Required only by the 'Float' data type. Must be in range 1 - 15. */
		DigitsPrecision?: number;

		/**The maximum exponent to be used by this data field. Required only by the 'Float' data type. May not be greater than 307. */
		MaxExponent?: number;

		/**The maximum value that can be represented by this data field. Required only by the 'Decimal' data type. */
		MaxValue?: number;

		/**The minimum exponent to be used by this data field. Required only by the 'Float' data type. May not be less than -292. */
		MinExponent?: number;

		/**The minimum value that can be represented by this data field. Required only by the 'Decimal' data type. */
		MinValue?: number;

		/**The name of the field. */
		Name: string;

		/**The resolution of values that can be represented by this data field. The base value is multiplied by this to compute the final value. Required only by the 'Decimal' data type. */
		ScaleFactor?: number;

		/**Indicates whether this value is signed. Required only by the 'Float' data type. */
		Signed?: boolean;

		/**The type of this data field. */
		Type: AuthorizationCodes.Shared.Models.DataFieldType;
	}

	export enum AuthorizationCodes.Shared.Models.DataFieldType { Boolean = 0, Decimal = 1, Float = 2, VariableLengthByteArray = 3 }


	/**A parameter used to create an authorization code. */
	export interface AuthorizationCodes.Shared.Models.Parameter {

		/**The name of the parameter. May not be updated. */
		Name: string;

		/**The value of the parameter. May not be updated. */
		Value: string;
	}

	export interface AuthorizationCodes.Shared.Models.ValidationField {

		/**The name of the field. */
		Name: string;

		/**The type for this validation field. */
		Type: AuthorizationCodes.Shared.Models.ValidationFieldType;
	}

	export enum AuthorizationCodes.Shared.Models.ValidationFieldType { Boolean = 0, Float = 1, Int = 2, StringCaseInsensitive = 3, StringCaseSensitive = 4 }


	/**A DTO for an IActivity */
	export interface BuildSystem.Shared.DTO.Activity {

		/**The ID of the activity */
		ActivityID?: number;
		Deleted?: boolean;

		/**The name of the activity */
		Name?: string;

		/**The parameters for this activity */
		Parameters?: Array<BuildSystem.Shared.DTO.Parameter>;

		/**The steps which are performed for this activity */
		Steps?: Array<BuildSystem.Shared.DTO.ActivityStep>;
	}


	/**A DTO for an IActivityRun */
	export interface BuildSystem.Shared.DTO.ActivityRun {

		/**The identifier for the ActivityRun */
		ActivityRunID?: number;

		/**Read Only. The UTC date and time when the activity completed */
		EndDate?: Date;

		/**Read Only. The ID of the Job Activity that defines this activity run */
		JobActivityID?: number;

		/**Read Only. The ID of the JobRun under which this ActivityRun is executing */
		JobRunID?: number;

		/**The parameters used for this run of the activity.  Parameters cannot be added or removed, but output parameter values may be updated. */
		Parameters?: Array<BuildSystem.Shared.DTO.ParameterValue>;

		/**Read Only. The UTC date and time when the activity started */
		StartDate?: Date;

		/**A DTO for an IActivityRunStatus */
		Status: BuildSystem.Shared.DTO.ActivityRunStatus;

		/**Read Only. The steps to be executed for the activity.  These steps come from the relationship through JobActivity down to ActivityStep */
		Steps?: Array<BuildSystem.Shared.DTO.ActivityStep>;
	}


	/**A DTO for an IActivityRunStatus */
	export interface BuildSystem.Shared.DTO.ActivityRunStatus {

		/**The activity step currently executing, indicated by numeric order */
		CurrentStep?: number;

		/**The status of the ActivityRun */
		Status?: BuildSystem.Shared.DTO.ActivityRunStatusStatus;

		/**The percent progress from the currently executing step.  This value shall be null if progress is not available */
		StepProgress?: number;

		/**The status text from the currently executing step */
		StepStatus?: string;
	}

	export enum BuildSystem.Shared.DTO.ActivityRunStatusStatus { Ready = 0, InProgress = 1, Succeeded = 2, Cancelled = 3, Failed = 4 }


	/**A DTO for an IActivityStep */
	export interface BuildSystem.Shared.DTO.ActivityStep {

		/**The id of the activity this activity step belongs to */
		ActivityID?: number;

		/**The id of this activity step */
		ActivityStepID?: number;

		/**The implementation id which is used to look up the step implementation */
		ImplementationID?: string;

		/**The mapping of values from a source to be used for the step parameters */
		ParameterMappings?: Array<BuildSystem.Shared.DTO.ParameterMapping>;

		/**The order of this activity step relative to other activity steps */
		RunOrder?: number;

		/**The id of the step */
		StepID?: number;

		/**The name of the step */
		StepName?: string;

		/**Indicates the configuration for the ActivityStep to use at runtime.  The build agent must provide this configuration */
		UseConfig?: string;
	}


	/**A DTO for an IAgent */
	export interface BuildSystem.Shared.DTO.Agent {

		/**The id of the Agent */
		AgentID?: number;

		/**The 'Heartbeat Interval' used by the Build Agent. */
		KeepAliveInterval: number;

		/**The machine name of the computer the agent is running on */
		MachineName: string;

		/**A DTO for an IAgentStatus */
		Status: BuildSystem.Shared.DTO.AgentStatus;

		/**The agent's step configurations */
		StepConfigurations?: Array<BuildSystem.Shared.DTO.StepConfiguration>;

		/**The UserID of the Agent */
		UserID: number;
	}


	/**A DTO for an IAgentStatus */
	export interface BuildSystem.Shared.DTO.AgentStatus {

		/**ReadOnly. The UTC date and time of the last status update */
		LastStatusUpdate?: Date;

		/**Indicates if the agent is online */
		Online: boolean;
	}


	/**A DTO for an IJob */
	export interface BuildSystem.Shared.DTO.Job {

		/**The activities which are performed for the job */
		Activities?: Array<BuildSystem.Shared.DTO.JobActivity>;

		/**Indicates if the job has been deleted. */
		Deleted?: boolean;

		/**The ID of the job */
		JobID?: number;

		/**The name of the job */
		Name?: string;

		/**The parameters for the job */
		Parameters?: Array<BuildSystem.Shared.DTO.Parameter>;
	}


	/**A DTO for an IJobActivity */
	export interface BuildSystem.Shared.DTO.JobActivity {

		/**The ID of the activity to be run as part of the job */
		ActivityID?: number;

		/**The ID of this job activity */
		JobActivityID?: number;

		/**The ID of the job this job activity belongs to */
		JobID?: number;

		/**The mapping of values from a source to be used for the activity parameters */
		ParameterMappings?: Array<BuildSystem.Shared.DTO.ParameterMapping>;

		/**The order of this job activity relative to others in the job */
		RunOrder?: number;
	}


	/**A DTO for an IJobRun */
	export interface BuildSystem.Shared.DTO.JobRun {

		/**The activity runs belonging to this JobRun */
		ActivityRuns?: Array<BuildSystem.Shared.DTO.ActivityRun>;

		/**The UTC date and time when the job completed */
		EndDate?: Date;

		/**The ID of the job that defines the run */
		JobID?: number;

		/**The ID of this JobRun */
		JobRunID?: number;

		/**The parameters used for this run of the job */
		Parameters?: Array<BuildSystem.Shared.DTO.ParameterValue>;

		/**The UTC date and time when the job started */
		StartDate?: Date;

		/**The status of this JobRun */
		Status?: BuildSystem.Shared.DTO.JobRunStatus;
	}

	export enum BuildSystem.Shared.DTO.JobRunStatus { Ready = 0, InProgress = 1, Succeeded = 2, Cancelled = 3, Failed = 4 }


	/**A DTO for an IParameter */
	export interface BuildSystem.Shared.DTO.Parameter {

		/**The parameter direction (Input or Output) */
		Direction?: BuildSystem.Shared.DTO.ParameterDirection;

		/**The name of the parameter */
		Name?: string;

		/**The data type of the parameter */
		Type?: BuildSystem.Shared.DTO.ParameterType;
	}

	export enum BuildSystem.Shared.DTO.ParameterDirection { Input = 0, Output = 1 }

	export enum BuildSystem.Shared.DTO.ParameterType { String = 0, Boolean = 1, Integer = 2, Float = 3, StringDictionary = 4 }


	/**A DTO for an IParameterMapping */
	export interface BuildSystem.Shared.DTO.ParameterMapping {

		/**The name of the parameter this mapping applies to */
		Name?: string;

		/**The source of the value.  The meaning of this value is determined by the source type.  When the source type is “Constant” then source is the value formatted as a string.  When the source type is “Variable” then the source is the name of the variable */
		Source?: string;

		/**The source type used for supplying the parameter */
		SourceType?: BuildSystem.Shared.DTO.ParameterMappingSourceType;
	}

	export enum BuildSystem.Shared.DTO.ParameterMappingSourceType { Constant = 0, Variable = 1 }


	/**A DTO for an IParameterValue */
	export interface BuildSystem.Shared.DTO.ParameterValue {

		/**The parameter direction (Input or Output) */
		Direction?: BuildSystem.Shared.DTO.ParameterValueDirection;

		/**The name of the parameter this value is for */
		Name?: string;

		/**The parameter value in string representation */
		Value?: string;
	}

	export enum BuildSystem.Shared.DTO.ParameterValueDirection { Input = 0, Output = 1 }


	/**Step */
	export interface BuildSystem.Shared.DTO.Step {

		/**Indicates if the step requires configuration values to be provided by the build agent */
		ConfigRequired: boolean;

		/**Read Only.  Indicates if the record is deleted. */
		Deleted?: boolean;

		/**A description of the step to be presented to a user */
		Description?: string;

		/**The implementation ID used to lookup the step implementation when it is executed */
		ImplementationID: string;

		/**The name of the step */
		Name: string;

		/**The parameters for this step */
		Parameters?: Array<BuildSystem.Shared.DTO.Parameter>;

		/**The ID of the step */
		StepID?: number;
	}


	/**Step Configuration */
	export interface BuildSystem.Shared.DTO.StepConfiguration {

		/**The configuration names supported.  The configurations collection is empty for steps which do not require configuration. */
		Configurations?: Array<string>;

		/**The Implementation ID of the step this configuration is for */
		StepImplementationID: string;
	}

	export interface ContentSubmission.Shared.BusinessEntities.ContentDefinition {
		ContentDefinitionID?: number;
		Description?: string;
		Name?: string;
		PackageTypeID?: string;
		TypeID?: number;
	}

	export interface ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion {
		ContentDefinitionID?: number;
		ContentReleaseID?: number;
		Deleted?: boolean;
		PublisherUserID?: number;
		ReleaseID?: number;
		TestReportUrl?: string;
		UpdatedDate?: Date;
		Version?: number;
	}

	export interface ContentSubmission.Shared.BusinessEntities.ContentSubmission {
		ContentDefinitionID?: number;
		ContentSubmissionID?: number;
		JobRunID?: number;
		PackageID?: string;
		ReleaseNotes?: string;
		Repository?: string;
		Revision?: number;
		SubmissionDate?: Date;
		UserID?: number;
		Version?: number;
	}

	export interface ContentSubmission.Shared.BusinessEntities.ContentSubmissionType {
		AttributeTemplate?: string;
		CategoryTemplate?: string;
		Description: string;
		Enabled?: boolean;
		ID?: number;
		InventoryPackageID?: string;
		JobID?: number;
		Name: string;
		ReleaseNotesDescription?: string;
	}

	export interface ContentSubmission.Shared.BusinessEntities.Release {
		BuildDate?: Date;
		ReleaseDate?: Date;
		ReleaseID?: number;
		ReleaseNumber?: string;
		Visible?: boolean;
	}

	export interface ContentSubmission.Shared.BusinessEntities.UserContentDefinition {
		ContentDefinitionID?: number;
		UserContentDefinitionID?: number;
		UserID?: number;
	}

	export interface DealerDB.Models.Dealer {
		BillingAddress?: string;
		BillingAddress2?: string;
		BillingAddress3?: string;
		BillingAddress4?: string;
		BillingCity?: string;
		BillingCountry?: string;
		BillingCountryCode?: string;
		BillingState?: string;
		BillingZip?: string;
		Brands?: Array<string>;
		DealerCode?: string;
		DealerName?: string;
		DealerStatus?: string;
		DealerStatusUpdateDate?: string;
		Filler?: string;
		IsValid?: boolean;
		LanguagePreference?: string;
		Region1?: string;
		Region2?: string;
		RegionMapping?: string;
		RoleBrand?: string;
		ShippingAddress2?: string;
		ShippingAddress3?: string;
		ShippingAddress4?: string;
		ShippingCity?: string;
		ShippingCountry?: string;
		ShippingState?: string;
		ShippingStreet?: string;
		ShippingZip?: string;
		Telephone?: string;
		VATCode?: string;
	}

	export interface DealerDB.Models.DealersPerCountry {
		Count?: number;
		Country?: string;
	}


	/**Registration for an EDT Lite */
	export interface DealerDB.Models.EDTLiteRegistration {

		/**The dealer code with which the EDT Lite was created. */
		DealerCode?: string;

		/**The date at which the content of the EDT Lite expires. */
		ExpirationDate: Date;

		/**The identifier for the EDT Lite. */
		InstanceID: string;

		/**The voucher code with which the EDT Lite was created. */
		VoucherCode: string;
	}

	export interface DealerDB.Models.License {

		/**True if license is active. */
		Active?: boolean;

		/**The date the license was created. */
		CreatedDate?: Date;

		/**The date the license was deactivated. */
		DeactivatedDate?: Date;

		/**The type of license (e.g. EDT, EDT Lite) */
		LicenseActivationType?: DealerDB.Models.LicenseLicenseActivationType;

		/**The LicenseID */
		LicenseID?: string;

		/**The version of the license. */
		LicenseVersion?: string;

		/**The date the license was refreshed. */
		RefreshDate?: Date;

		/**Information about the system which is licensed. */
		SystemInfo?: string;

		/**The updated version of the license.  A value in this field indicates that the update has not been confirmed. */
		UpdatedLicenseVersion?: string;

		/**The voucher code that generated the license. */
		VoucherCode?: string;
	}

	export enum DealerDB.Models.LicenseLicenseActivationType { EDT = 0, EDTLite = 1 }

	export interface DealerDB.Models.LicenseActivation {

		/**The license key in base64 format.  This is only provided when the LicenseData is a new license. */
		Key?: string;

		/**The license data in base64 format. */
		LicenseData?: string;
	}

	export interface DealerDB.Models.LicenseActivationConfirm {

		/**The license version to confirm */
		LicenseVersion: string;
	}

	export interface DealerDB.Models.LicenseActivationCreate {

		/**The Dealer Code of the dealer activating the license */
		DealerCode: string;

		/**The type of license to create (e.g. EDT, EDT Lite) */
		LicenseActivationType?: DealerDB.Models.LicenseActivationCreateLicenseActivationType;

		/**The dealer's postal code (zip code) */
		PostalCode: string;

		/**Information about  the system being activated */
		SystemInfo: string;

		/**The Voucher Code to use for activation */
		VoucherCode: string;
	}

	export enum DealerDB.Models.LicenseActivationCreateLicenseActivationType { EDT = 0, EDTLite = 1 }

	export interface DealerDB.Models.LicenseActivationUpdate {

		/**The license version to update */
		LicenseVersion: string;

		/**Information about  the system being activated */
		SystemInfo?: string;
	}


	/**A voucher for EDT activation */
	export interface DealerDB.Models.Voucher {

		/**Read-Only. The date the voucher was created. */
		CreatedDate?: Date;

		/**The dealer code the voucher is assigned to.  Required for commercial vouchers. */
		DealerCode?: string;

		/**Read-Only. True if voucher has been deleted. */
		Deleted?: boolean;

		/**The email address. Required for Internal Vouchers */
		Email?: string;

		/**The expiration date of the voucher. Required for Temporary Vouchers. */
		ExpirationDate?: Date;

		/**Required for Internal Vouchers */
		LicenseTo?: string;

		/**Read-Only. The user that made the last modification to the voucher. */
		ModifiedBy?: string;

		/**The order number of a commercial license. Required for Commercial Vouchers. Not supported for other Vouchers. */
		OrderNumber?: string;

		/**True if voucher has aleady been used.  False if the voucher has not been used. */
		Punched?: boolean;

		/**Read-Only. The date the voucher was punched. */
		PunchedDate?: Date;

		/**Required for Internal Vouchers */
		Purpose?: string;

		/**The type of voucher. Commercial is the default if not specified. */
		Type?: DealerDB.Models.VoucherType;

		/**The voucher code. */
		VoucherCode?: string;
	}

	export enum DealerDB.Models.VoucherType { Commercial = 0, Internal = 1, Temporary = 2 }

	export interface DealerDB.Models.VoucherHistory {
		ChangedDate?: Date;

		/**Read-Only. The date the voucher was created. */
		CreatedDate?: Date;

		/**The dealer code the voucher is assigned to.  Required for commercial vouchers. */
		DealerCode?: string;

		/**Read-Only. True if voucher has been deleted. */
		Deleted?: boolean;

		/**The email address. Required for Internal Vouchers */
		Email?: string;

		/**The expiration date of the voucher. Required for Temporary Vouchers. */
		ExpirationDate?: Date;

		/**The id of the voucher history item */
		ID?: number;

		/**Required for Internal Vouchers */
		LicenseTo?: string;

		/**Read-Only. The user that made the last modification to the voucher. */
		ModifiedBy?: string;

		/**The order number of a commercial license. Required for Commercial Vouchers. Not supported for other Vouchers. */
		OrderNumber?: string;

		/**True if voucher has aleady been used.  False if the voucher has not been used. */
		Punched?: boolean;

		/**Read-Only. The date the voucher was punched. */
		PunchedDate?: Date;

		/**Required for Internal Vouchers */
		Purpose?: string;

		/**The type of voucher. */
		Type?: DealerDB.Models.VoucherHistoryType;

		/**The voucher code. */
		VoucherCode?: string;
	}

	export enum DealerDB.Models.VoucherHistoryType { Commercial = 0, Internal = 1, Temporary = 2 }

	export interface UpdateSystem.Models.AttributeValue {

		/**The attribute name */
		Key: string;

		/**Read Only. The timestamp. */
		TimeStamp?: Date;

		/**The value */
		Value?: string;
	}

	export interface UpdateSystem.Models.AvailableSubscription {
		PackageType?: UpdateSystem.Models.PackageType;

		/**The type of subscription supported. */
		SubscriptionType?: UpdateSystem.Models.AvailableSubscriptionSubscriptionType;
	}

	export enum UpdateSystem.Models.AvailableSubscriptionSubscriptionType { Required = 0, IncludeByDefault = 1, ExcludeByDefault = 2 }

	export interface UpdateSystem.Models.AvailableUpdateGroupSubscription {

		/**The available subscriptions for this update group. */
		AvailableSubscriptions?: Array<UpdateSystem.Models.AvailableSubscription>;
		UpdateGroup?: UpdateSystem.Models.UpdateGroup;
	}

	export interface UpdateSystem.Models.Bundle {

		/**Default Value: false. During the creation of the Bundle, this field must be false. */
		Active?: boolean;

		/**Read-Only. */
		BundleID?: string;

		/**The bundle number */
		BundleNumber: number;

		/**The Bundle description. */
		Description: string;

		/**The update group this bundle belongs to. */
		UpdateGroupID: string;
	}

	export interface UpdateSystem.Models.Category {
		Values?: Array<UpdateSystem.Models.AttributeValue>;

		/**The category name */
		category: string;
	}

	export interface UpdateSystem.Models.CheckinResult {

		/**The packages for the client to run. */
		Packages?: Array<UpdateSystem.Models.Package>;

		/**The package ids for the client to remove. */
		RemovePackages?: Array<string>;
	}

	export interface UpdateSystem.Models.Client {

		/**Read Only. The id of the client */
		ClientID?: string;

		/**Read Only. The time of the client's last checkin with the server. */
		LastCheckin?: Date;

		/**A description of the client that can be used for easy reference */
		Tag?: string;
	}

	export interface UpdateSystem.Models.ClientInfo {

		/**The id of the client */
		ClientID?: string;

		/**The packages */
		Package?: Array<UpdateSystem.Models.PackageReport>;
	}

	export interface UpdateSystem.Models.ClientStatus {

		/**The Client ID */
		ClientID?: string;

		/**The time of the client's last check-in */
		LastCheckin?: Date;

		/**The number of minutes that have passed since the last check-in */
		MinutesElapsed?: number;

		/**The result for the client included in the UpdateGroup's report */
		ReportResult?: string;

		/**True if the result for the client matches what is expected for the UpdateGroup */
		ReportResultIsValid?: boolean;

		/**The value for the client included in the UpdateGroup's report */
		ReportValue?: string;

		/**A descriptive name for the client */
		Tag?: string;
	}

	export interface UpdateSystem.Models.Package {

		/**Value is true if package should run automatically. Default value is false. */
		Autorun?: boolean;

		/**The CRC used to validate the download. */
		CRC: string;

		/**The package description */
		Description: string;

		/**Optional. The StringID used to localize the name of the Package */
		LocalizedName?: string;

		/**Notes about the package */
		Notes?: string;

		/**Read Only. The package ID */
		PackageID?: string;

		/**The id of the package type this package belongs to. */
		PackageTypeID: string;

		/**
		 * For delta packages, the previous version required.  For non-delta packages, the Previous version is 0.  Default value is 0.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		PreviousVersion?: number;

		/**The date the package was released */
		ReleaseDate: Date;

		/**True if the package is released.  Default value is False. */
		Released?: boolean;

		/**True to remove the package after successful execution.  Default value is False. */
		RemoveOnSuccess?: boolean;

		/**
		 * The size of the file at the specified URL.  If a size is not supplied at creation time, the size will be determined by the response from the URL.
		 * If the size provided does not match the size in the response from the URL an error will be returned.
		 */
		Size?: number;

		/**The command line arguments for the package.  Default value is an empty string. */
		Switches?: string;

		/**The Url to download the package from. */
		Url: string;

		/**
		 * The version.
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		Version: number;
	}

	export interface UpdateSystem.Models.PackageReport {

		/**The package report's categories. */
		Categories?: Array<UpdateSystem.Models.Category>;

		/**Read Only. The package description */
		PackageDescription?: string;

		/**The PackageID. */
		PackageID?: string;
	}

	export interface UpdateSystem.Models.PackageStatus {

		/**The id of the client */
		ClientID?: string;

		/**The client's tag */
		ClientKey?: string;

		/**The amount of time spent downloading */
		DownloadTime?: string;

		/**The number of bytes downloaded */
		Downloaded?: string;

		/**The time the package completed */
		InstallCompleted?: string;

		/**The package result */
		InstallResult?: string;

		/**The time the package was started */
		InstallStarted?: string;

		/**The amount of time required to run the package */
		InstallTime?: string;

		/**The download completion percentage */
		Percentage?: string;

		/**The total size of the package */
		Size?: string;

		/**The time the status was last updated */
		Timestamp?: Date;
	}

	export interface UpdateSystem.Models.PackageStatusSummary {

		/**The average time required to complete the download */
		AverageDownloadTime?: string;

		/**The average time required to complete the install */
		AverageInstallTime?: string;

		/**The number of clients that have completed the download */
		Downloaded?: number;

		/**The result of the install */
		Error?: number;

		/**The number of clients that have completed the install */
		Installed?: number;

		/**The name of the package */
		Package?: string;

		/**The ID of the package */
		PackageID?: string;

		/**The individual package status items */
		PackageStatusItems?: Array<UpdateSystem.Models.PackageStatus>;
	}

	export interface UpdateSystem.Models.PackageType {

		/**The inventory attribute (from the InventoryPackage) used to determine what version of this package type is installed. */
		Attribute?: string;

		/**The inventory category (from the InventoryPackage) used to determine what version of this package type is installed. */
		Category?: string;

		/**The description of the package type */
		Description: string;

		/**Optional.  The icon to use for the PackageType, in base 64 */
		Icon?: string;

		/**The number of minutes to wait before requesting another inventory.  The default value is 1440 (24 hours). */
		InventoryFrequency?: number;

		/**The inventory package used to determine what version of this package type is installed. */
		InventoryPackage?: string;

		/**Optional. The StringID used to localize the description of the PackageType */
		LocalizedDescription?: string;

		/**Optional. The StringID used to localize the name of the PackageType */
		LocalizedName?: string;

		/**The maximum number of "chained" delta packages to use when updating the client */
		MaxDeltaPackages?: number;

		/**Read Only. The package type id. */
		PackageTypeID?: string;
	}

	export interface UpdateSystem.Models.PackageTypeIDtoBundle {

		/**The bundle to include the package in. */
		BundleID: string;

		/**The package type id of the package to include */
		PackageTypeID: string;

		/**The package version of the package to include */
		PackageVersion: number;

		/**
		 * The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.
		 * Minimum: 1
		 * Maximum: 100
		 */
		Priority?: number;

		/**Optional. The type of subscription supported.  The default subscription type is Required. */
		SubscriptionType?: UpdateSystem.Models.PackageTypeIDtoBundleSubscriptionType;
	}

	export enum UpdateSystem.Models.PackageTypeIDtoBundleSubscriptionType { Required = 0, IncludeByDefault = 1, ExcludeByDefault = 2 }

	export interface UpdateSystem.Models.PagedClientStatusMetadata {

		/**The number of entities this paged response is limited to. */
		Limit: number;

		/**The number of entities prior to this page of items. */
		Offset: number;

		/**The label for data contained in ClientStatus.ReportResults */
		ReportResultExpected: string;

		/**The label for data contained in ClientStatus.ReportResults */
		ReportResultLabel: string;

		/**The label for data contained in ClientStatus.ReportValue */
		ReportValueLabel: string;

		/**The total number of entities matching the request. */
		TotalCount: number;
	}

	export interface UpdateSystem.Models.PriorityPackage {

		/**
		 * Read Only. From the package specified by package ID.
		 * Value is true if package should run automatically. Default value is false.
		 */
		Autorun?: boolean;

		/**Read Only. From the package specified by package ID. */
		CRC?: string;

		/**The ID of the client to receive the priority package */
		ClientID: string;

		/**Read Only. From the package specified by package ID. */
		Description?: string;

		/**Read Only. From the package specified by package ID. */
		Notes?: string;

		/**The ID of the package to push as a priority package. */
		PackageID: string;

		/**Read Only. From the package specified by package ID. */
		PackageTypeID?: string;

		/**Read Only. From the package specified by package ID. */
		PreviousVersion?: number;

		/**Read Only. The ID of the priority package. */
		PriorityPackageID?: string;

		/**
		 * Read Only. From the package specified by package ID.
		 * The date the package was released
		 */
		ReleaseDate?: Date;

		/**Read Only. From the package specified by package ID. */
		Released?: boolean;

		/**Read Only. From the package specified by package ID. */
		RemoveOnSuccess?: boolean;

		/**Read Only. From the package specified by package ID. */
		Size?: number;

		/**The command line arguments for the priority package.  Default value is an empty string. */
		Switches?: string;

		/**Read Only. The timestamp of the priority package. */
		TimeStamp?: Date;

		/**Read Only. From the package specified by package ID. */
		Url?: string;

		/**Read Only. From the package specified by package ID. */
		Version?: number;
	}

	export interface UpdateSystem.Models.UpdateGroup {

		/**The description of the update group */
		Description: string;
		ID?: string;

		/**The time in minutes between inventory checks. Default value is 1440 minutes (one day). */
		InventoryFrequency?: number;

		/**The Package ID of the package used for inventory */
		InventoryPackage?: string;

		/**Optional. The StringID used to localize the description of the update group */
		LocalizedDescription?: string;

		/**Optional. The StringID used to localize the name of the update group */
		LocalizedName?: string;

		/**
		 * A field to return in the status report for this update group.
		 * Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})
		 */
		ReportField?: string;

		/**The update type name */
		UpdateType: string;

		/**
		 * A field used for validation in the status report for this update group.
		 * Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})
		 */
		ValidatingField?: string;

		/**The value to validate the ValidationField against. */
		ValueToValidate?: string;

		/**The version of the UpdateGroup, this value is incremented with each modification to a related Bundle or PackageType */
		Version?: string;
	}

	export interface UpdateSystem.Models.UpdateGroupClientRelationship {

		/**The subscription status.  The status is active by default. */
		Active?: boolean;

		/**Read Only after creation. The client id of the subscriber. */
		ClientID: string;

		/**ReadOnly. The timestamp of the last checkin. */
		LastCheckin?: Date;

		/**Read Only after creation. The relationship id.  A relationship id will be assigned if not provided on creation. */
		RelationshipID?: string;

		/**Read Only after creation. The update group to subscribe to. */
		UpdateGroupID: string;
	}

	export interface UpdateSystem.Models.UpdateGroupSubscription {

		/**The ClientID. */
		ClientID: string;

		/**True to receive content of type indicated by PackageTypeID. */
		Include: boolean;

		/**The PackageType to set subscription status for */
		PackageTypeID: string;

		/**The Update Group this subscription is relevant for. */
		UpdateGroupID: string;

		/**The Update Group Subscription ID.  This ID will be automatically assigned when creating an Update Group Subscription. */
		UpdateGroupSubscriptionID?: number;
	}


	/**Model that retrieves the data for UpdateMetrics */
	export interface UpdateSystem.Models.UpdateMetricsData {

		/**Active version (bundle number) of update type. */
		ActiveVersion?: string;

		/**Generic collection that is of type ActiveVersionByClientRecord */
		ActiveVersionByClient?: Array<UpdateSystem.Models.UpdateMetricsData.ActiveVersionByClientRecord>;

		/**Generic collection that is of type CurrentStateByClientRecord */
		CurrentStateByClient?: Array<UpdateSystem.Models.UpdateMetricsData.CurrentStateByClientRecord>;

		/**Date that has been configured to only show the most recent clients with a cut off date. (Ex. year from current date) */
		CutOffDate?: Date;

		/**Data was refreshed at this time. */
		DataRefreshed?: Date;

		/**
		 * Sum of clients represented
		 * Filtered by updateType and lastCheckedInDate
		 */
		FilteredClientCount?: number;

		/**Generic collection that is of type PackageErrorsRecord */
		PackageErrors?: Array<UpdateSystem.Models.UpdateMetricsData.PackageErrorsRecord>;

		/**Total clients we have ever serviced */
		TotalClientCount?: number;
	}

	export interface UpdateSystem.Models.UpdateMetricsData.ActiveVersionByClientRecord {
		BundleNumber?: number;
		ClientCount?: number;
		ReleaseName?: string;
	}

	export interface UpdateSystem.Models.UpdateMetricsData.CurrentStateByClientRecord {
		ClientCount?: number;
		State?: string;
	}

	export interface UpdateSystem.Models.UpdateMetricsData.PackageErrorsRecord {
		ClientCount?: number;
		ErrorCode?: string;
		LongDescription?: string;
		ShortDescription?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * No Documentation Found.
		 * No Documentation Found.
		 * Get api/v2/AftermarketServices/Certificates
		 * @return {any} OK
		 */
		AftermarketServices_GetCerts(headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/AftermarketServices/Certificates', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Activate or Deactivate an ECU, or Report an ECU as Damaged.
		 * No Documentation Found.
		 * Put api/v2/AftermarketServices/ECUs/{serialNumber}
		 * @param {string} serialNumber The serial number of the ECU.
		 * @param {string} EDTInstanceId The EDT Instance Id of the kit calling this method.
		 * @param {AGCOPowerServices.Models.ECU} requestBody The ecu to modify.
		 * @return {AGCOPowerServices.Models.ECU} OK
		 */
		AftermarketServices_PutECU(serialNumber: string, EDTInstanceId: string, requestBody: AGCOPowerServices.Models.ECU, headersHandler?: () => {[header: string]: string}): Promise<AGCOPowerServices.Models.ECU> {
			return Axios.put<AGCOPowerServices.Models.ECU>(this.baseUri + 'api/v2/AftermarketServices/ECUs/' + (serialNumber == null ? '' : encodeURIComponent(serialNumber)) + '&EDTInstanceId=' + (EDTInstanceId == null ? '' : encodeURIComponent(EDTInstanceId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Get injector codes given engine.
		 * No Documentation Found.
		 * Get api/v2/AftermarketServices/Engines/{serialNumber}/IQACodes
		 * @param {string} serialNumber The serial number of the engine.
		 * @param {string} EDTInstanceId The EDT Instance Id of the kit calling this method.
		 * @return {Array<string>} OK
		 */
		AftermarketServices_GetEngineIQACodes(serialNumber: string, EDTInstanceId: string, headersHandler?: () => {[header: string]: string}): Promise<Array<string>> {
			return Axios.get<Array<string>>(this.baseUri + 'api/v2/AftermarketServices/Engines/' + (serialNumber == null ? '' : encodeURIComponent(serialNumber)) + '/IQACodes&EDTInstanceId=' + (EDTInstanceId == null ? '' : encodeURIComponent(EDTInstanceId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Report the IQA codes used by an engine
		 * No Documentation Found.
		 * Put api/v2/AftermarketServices/Engines/{serialNumber}/IQACodes
		 * @param {string} serialNumber The serial number of the Engine
		 * @param {string} EDTInstanceId The EDT Instance Id of the kit calling this method.
		 * @param {Array<string>} requestBody A string array of IQA codes in physical order
		 * @return {boolean} OK
		 */
		AftermarketServices_PutIQACodes(serialNumber: string, EDTInstanceId: string, requestBody: Array<string>, headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return Axios.put<boolean>(this.baseUri + 'api/v2/AftermarketServices/Engines/' + (serialNumber == null ? '' : encodeURIComponent(serialNumber)) + '/IQACodes&EDTInstanceId=' + (EDTInstanceId == null ? '' : encodeURIComponent(EDTInstanceId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Get production calibration data for given engine.
		 * No Documentation Found.
		 * Get api/v2/AftermarketServices/Engines/{serialNumber}/ProductionData
		 * @param {string} serialNumber The serial number of the engine.
		 * @param {string} EDTInstanceId The EDT Instance Id of the kit calling this method.
		 * @return {Array<AGCOPowerServices.Models.ProductionData>} OK
		 */
		AftermarketServices_GetProductionData(serialNumber: string, EDTInstanceId: string, headersHandler?: () => {[header: string]: string}): Promise<Array<AGCOPowerServices.Models.ProductionData>> {
			return Axios.get<Array<AGCOPowerServices.Models.ProductionData>>(this.baseUri + 'api/v2/AftermarketServices/Engines/' + (serialNumber == null ? '' : encodeURIComponent(serialNumber)) + '/ProductionData&EDTInstanceId=' + (EDTInstanceId == null ? '' : encodeURIComponent(EDTInstanceId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Check whether there is connectivity to AGCO Power Web Services
		 * No Documentation Found.
		 * Get api/v2/AftermarketServices/Hello
		 * @return {boolean} OK
		 */
		AftermarketServices_GetConnectionStatus(headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return Axios.get<boolean>(this.baseUri + 'api/v2/AftermarketServices/Hello', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieve the status of an EDT Kit Registration with AGCO Power Web Services
		 * No Documentation Found.
		 * Get api/v2/AftermarketServices/UserStatuses
		 * @return {AGCOPowerServices.Models.UserStatus} OK
		 */
		AftermarketServices_GetUserStatus(voucherCode: string, dealerCode: string, headersHandler?: () => {[header: string]: string}): Promise<AGCOPowerServices.Models.UserStatus> {
			return Axios.get<AGCOPowerServices.Models.UserStatus>(this.baseUri + 'api/v2/AftermarketServices/UserStatuses?voucherCode=' + (voucherCode == null ? '' : encodeURIComponent(voucherCode)) + '&dealerCode=' + (dealerCode == null ? '' : encodeURIComponent(dealerCode)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update the status of an EDT Kit Registration with AGCO Power Web Services
		 * No Documentation Found.
		 * Put api/v2/AftermarketServices/UserStatuses
		 * @return {boolean} OK
		 */
		AftermarketServices_UpdateUserStatus(requestBody: AGCOPowerServices.Models.UserStatus, headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return Axios.put<boolean>(this.baseUri + 'api/v2/AftermarketServices/UserStatuses', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Manage API tokens.
		 * No Documentation Found.
		 * Put api/v2/AuthenticatedUsers/{UserID}/Tokens
		 * @param {API.Models.TokenOptions} requestBody The options for token management.
		 * @return {void} 
		 */
		Authentication_PutManageTokens(UserID: number, requestBody: API.Models.TokenOptions, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/AuthenticatedUsers/' + UserID + '/Tokens', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Authenticate a user.
		 * No Documentation Found.
		 * Post api/v2/Authentication
		 * @param {API.Models.Credentials} requestBody Create a user account.
		 * @return {API.Models.AuthenticatedUser} OK
		 */
		Authentication_Default(requestBody: API.Models.Credentials, headersHandler?: () => {[header: string]: string}): Promise<API.Models.AuthenticatedUser> {
			return Axios.post<API.Models.AuthenticatedUser>(this.baseUri + 'api/v2/Authentication', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Acknowledges the connection to the API
		 * No Documentation Found.
		 * Get api/v2/Authentication/IsAlive
		 * @return {void} 
		 */
		Authentication_IsAlive(headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + 'api/v2/Authentication/IsAlive', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Request a password reset.
		 * No Documentation Found.
		 * Post api/v2/Authentication/RequestPasswordReset
		 * @param {API.Models.PasswordResetRequest} requestBody The password reset request.
		 * @return {void} 
		 */
		Authentication_RequestPasswordReset(requestBody: API.Models.PasswordResetRequest, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + 'api/v2/Authentication/RequestPasswordReset', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Reset a password
		 * No Documentation Found.
		 * Post api/v2/Authentication/ResetPasword
		 * @param {API.Models.PasswordReset} requestBody The password reset detail.
		 * @return {void} 
		 */
		Authentication_ResetPasword(requestBody: API.Models.PasswordReset, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + 'api/v2/Authentication/ResetPasword', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get authorization code definitions.
		 * Additional searches: validationFields[Name]=true and dataFields[Name]=true. These can be used to search for authorization code definitions that have the specified data or validation fields.
		 * Get api/v2/AuthorizationCodeDefinitions
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 * @param {string} name Optional. If specified, filters definitions by name. Starting and ending wildcards (*) supported.
		 * @param {number} createdByUserID Optional. If specified, filters definitions to those created by the given User ID.
		 * @param {number} deletedByUserID Optional. If specified, filters definitions to those deleted by the given User ID.
		 * @param {boolean} includeDeleted Optional. Whether to include deleted definitions. 'False' by default.
		 * @return {any} OK
		 */
		AuthorizationCodeDefinitionsGetByLimitAndOffsetAndNameAndCreatedByUserIDAndDeletedByUserIDAndIncludeDeleted(limit: number, offset: number, name: string, createdByUserID: number, deletedByUserID: number, includeDeleted: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/AuthorizationCodeDefinitions?limit=' + limit + '&offset=' + offset + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&createdByUserID=' + createdByUserID + '&deletedByUserID=' + deletedByUserID + '&includeDeleted=' + includeDeleted, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add an authorization code definition.
		 * No Documentation Found.
		 * Post api/v2/AuthorizationCodeDefinitions
		 * @param {AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition} requestBody An authorization code definition.
		 * @return {string} OK
		 */
		AuthorizationCodeDefinitions_PostAuthorizationCodeDefinition(requestBody: AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.post(this.baseUri + 'api/v2/AuthorizationCodeDefinitions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' },  responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Disable an authorization code definition
		 * No Documentation Found.
		 * Delete api/v2/AuthorizationCodeDefinitions/{id}
		 * @param {string} id The ID of the authorization code definition.
		 * @return {void} 
		 */
		AuthorizationCodeDefinitions_DeleteAuthorizationCodeDefinition(id: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/AuthorizationCodeDefinitions/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get an authorization code definition by its ID
		 * No Documentation Found.
		 * Get api/v2/AuthorizationCodeDefinitions/{id}
		 * @param {string} id The ID of the authorization code definition.
		 * @return {AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition} OK
		 */
		AuthorizationCodeDefinitionsGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition> {
			return Axios.get<AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition>(this.baseUri + 'api/v2/AuthorizationCodeDefinitions/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update an authorization code definition
		 * No Documentation Found.
		 * Put api/v2/AuthorizationCodeDefinitions/{id}
		 * @param {string} id The ID of the authorization code definition.
		 * @param {AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition} requestBody An authorization code definition.
		 * @return {void} 
		 */
		AuthorizationCodeDefinitions_PutAuthorizationCodeDefinition(id: string, requestBody: AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/AuthorizationCodeDefinitions/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get authorization codes.
		 * Additional searches: validationParameters[Name]=Value and dataParameters[Name]=Value. These can be used to search for authorization codes that have been generated using specified values for data or validation parameters.
		 * Get api/v2/AuthorizationCodes
		 * @param {string} code Optional. If provided, searches for entities with the provided authorization code.
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 * @param {string} definitionID Optional. If specified, filters codes by definition id.
		 * @param {number} createdByUserID Optional. If specified, filters codes to those created by the given User ID.
		 * @param {number} deletedByUserID Optional. If specified, filters codes to those deleted by the given User ID.
		 * @param {boolean} includeDeleted Optional. Whether to include deleted codes. 'False' by default.
		 * @return {any} OK
		 */
		AuthorizationCodes_GetAuthorizationCodes(code: string, limit: number, offset: number, definitionID: string, createdByUserID: number, deletedByUserID: number, includeDeleted: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/AuthorizationCodes?code=' + (code == null ? '' : encodeURIComponent(code)) + '&limit=' + limit + '&offset=' + offset + '&definitionID=' + (definitionID == null ? '' : encodeURIComponent(definitionID)) + '&createdByUserID=' + createdByUserID + '&deletedByUserID=' + deletedByUserID + '&includeDeleted=' + includeDeleted, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Generates an authorization code using the provided definition and parameters.
		 * No Documentation Found.
		 * Post api/v2/AuthorizationCodes
		 * @param {AuthorizationCodes.Shared.Models.AuthorizationCode} requestBody The model from which to generate an authorization code.
		 * @return {number} OK
		 */
		AuthorizationCodes_PostAuthorizationCode(requestBody: AuthorizationCodes.Shared.Models.AuthorizationCode, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/AuthorizationCodes', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Hide an authorization code.
		 * No Documentation Found.
		 * Delete api/v2/AuthorizationCodes/{id}
		 * @param {number} id The id of the authorization code.
		 * @return {void} 
		 */
		AuthorizationCodes_DeleteAuthorizationCode(id: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/AuthorizationCodes/' + id, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get an authorization code by its ID.
		 * No Documentation Found.
		 * Get api/v2/AuthorizationCodes/{id}
		 * @param {number} id The id of the authorization code.
		 * @return {AuthorizationCodes.Shared.Models.AuthorizationCode} OK
		 */
		AuthorizationCodes_GetAuthorizationCode(id: number, headersHandler?: () => {[header: string]: string}): Promise<AuthorizationCodes.Shared.Models.AuthorizationCode> {
			return Axios.get<AuthorizationCodes.Shared.Models.AuthorizationCode>(this.baseUri + 'api/v2/AuthorizationCodes/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update an authorization code.
		 * No Documentation Found.
		 * Put api/v2/AuthorizationCodes/{id}
		 * @param {number} id The id of the authorization code.
		 * @param {AuthorizationCodes.Shared.Models.AuthorizationCode} requestBody The model from which to update an authorization code.
		 * @return {void} 
		 */
		AuthorizationCodes_PutAuthorizationCode(id: number, requestBody: AuthorizationCodes.Shared.Models.AuthorizationCode, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/AuthorizationCodes/' + id, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Gets a list of Brands.
		 * No Documentation Found.
		 * Get api/v2/Brands
		 * @return {Array<string>} OK
		 */
		Brands_Brands(headersHandler?: () => {[header: string]: string}): Promise<Array<string>> {
			return Axios.get<Array<string>>(this.baseUri + 'api/v2/Brands', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get the list of bundles.
		 * No Documentation Found.
		 * Get api/v2/Bundles
		 * @param {string} UpdateGroupID Optional. Filter by UpdateGroup ID.
		 * @param {boolean} Active Optional. Filter by active status.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		Bundles_GetBundles(UpdateGroupID: string, Active: boolean, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Bundles?UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&Active=' + Active + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a Bundle to the Update System.
		 * No Documentation Found.
		 * Post api/v2/Bundles
		 * @param {UpdateSystem.Models.Bundle} requestBody The bundle to add
		 * @return {string} OK
		 */
		Bundles_PostBundle(requestBody: UpdateSystem.Models.Bundle, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.post(this.baseUri + 'api/v2/Bundles', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' },  responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Delete a Bundle.
		 * No Documentation Found.
		 * Delete api/v2/Bundles/{ID}
		 * @param {string} ID The Bundle ID to Delete
		 * @return {void} 
		 */
		Bundles_DeleteBundle(ID: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/Bundles/' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a specific Bundle by ID.
		 * No Documentation Found.
		 * Get api/v2/Bundles/{ID}
		 * @param {string} ID The Bundle ID
		 * @return {UpdateSystem.Models.Bundle} OK
		 */
		Bundles_GetBundle(ID: string, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystem.Models.Bundle> {
			return Axios.get<UpdateSystem.Models.Bundle>(this.baseUri + 'api/v2/Bundles/' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Modify a Bundle in the Update System.
		 * No Documentation Found.
		 * Put api/v2/Bundles/{ID}
		 * @param {string} ID The unique ID of the Bundle
		 * @param {UpdateSystem.Models.Bundle} requestBody The bundle to modify
		 * @return {void} 
		 */
		Bundles_PutBundle(ID: string, requestBody: UpdateSystem.Models.Bundle, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Bundles/' + (ID == null ? '' : encodeURIComponent(ID)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get a List of Clients in the Update System.
		 * No Documentation Found.
		 * Get api/v2/Clients
		 * @param {string} Tag Optional. Filter clients by Tag. Wildcards are supported (*).
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		ClientsGetByTagAndLimitAndOffset(Tag: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Clients?Tag=' + (Tag == null ? '' : encodeURIComponent(Tag)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of Cached Files installed on the client Machine.
		 * No Documentation Found.
		 * Get api/v2/Clients/{ClientID}/CachedFiles
		 * @param {string} ClientID The ClientID of the Client
		 * @param {boolean} Expired Only Expired Files (true|false)
		 * @return {Array<string>} OK
		 */
		UpdateSystem_GetCachedFiles(ClientID: string, Expired: boolean, headersHandler?: () => {[header: string]: string}): Promise<Array<string>> {
			return Axios.get<Array<string>>(this.baseUri + 'api/v2/Clients/' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '/CachedFiles&Expired=' + Expired, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get the package reports for a client.
		 * No Documentation Found.
		 * Get api/v2/Clients/{ClientID}/PackageReports
		 * @param {string} ClientID The Client ID
		 * @return {Array<UpdateSystem.Models.PackageReport>} OK
		 */
		PackageReportsGetByClientID(ClientID: string, headersHandler?: () => {[header: string]: string}): Promise<Array<UpdateSystem.Models.PackageReport>> {
			return Axios.get<Array<UpdateSystem.Models.PackageReport>>(this.baseUri + 'api/v2/Clients/' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '/PackageReports', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Submit a package report
		 * No Documentation Found.
		 * Put api/v2/Clients/{ClientID}/PackageReports
		 * @param {string} ClientID The Client ID
		 * @param {UpdateSystem.Models.PackageReport} requestBody The Package Report
		 * @return {void} 
		 */
		PackageReportsPutByClientID(ClientID: string, requestBody: UpdateSystem.Models.PackageReport, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Clients/' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '/PackageReports', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Submit a batch of package reports
		 * No Documentation Found.
		 * Put api/v2/Clients/{ClientID}/PackageReports/Batch
		 * @param {string} ClientID The Client ID
		 * @param {Array<UpdateSystem.Models.PackageReport>} requestBody The Package Reports
		 * @return {void} 
		 */
		PackageReports_Batch(ClientID: string, requestBody: Array<UpdateSystem.Models.PackageReport>, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Clients/' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '/PackageReports/Batch', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get a Client in the Update System.
		 * No Documentation Found.
		 * Get api/v2/Clients/{ID}
		 * @param {string} ID The Client ID
		 * @return {UpdateSystem.Models.Client} OK
		 */
		ClientsGetByID(ID: string, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystem.Models.Client> {
			return Axios.get<UpdateSystem.Models.Client>(this.baseUri + 'api/v2/Clients/' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a Client.
		 * No Documentation Found.
		 * Put api/v2/Clients/{ID}
		 * @param {string} ID The Client ID
		 * @param {UpdateSystem.Models.Client} requestBody Updated Client Object.
		 * @return {void} 
		 */
		Clients_Put(ID: string, requestBody: UpdateSystem.Models.Client, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Clients/' + (ID == null ? '' : encodeURIComponent(ID)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get a Client's Available Update Group Subscriptions
		 * No Documentation Found.
		 * Get api/v2/Clients/{ID}/AvailableUpdateGroupSubscriptions
		 * @param {string} ID The Client ID
		 * @param {string} UpdateGroupID Optional. Filter by Update Group.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		Clients_GetAvailableSubscriptions(ID: string, UpdateGroupID: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Clients/' + (ID == null ? '' : encodeURIComponent(ID)) + '/AvailableUpdateGroupSubscriptions&UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a Client's Current Update Group Subscriptions
		 * No Documentation Found.
		 * Get api/v2/Clients/{ID}/UpdateGroupSubscriptions
		 * @param {string} ID The Client ID
		 * @param {string} UpdateGroupID Optional. Filter by Update Group.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		Clients_GetSubscriptions(ID: string, UpdateGroupID: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Clients/' + (ID == null ? '' : encodeURIComponent(ID)) + '/UpdateGroupSubscriptions&UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get ContentDefinitions
		 * Gets a collection of ContentDefinitions. When successful, the response is a PagedResponse of ContentDefinitions.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/ContentDefinitions
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 * @param {number} userID Optional. Filter by UserID.
		 * @return {any} OK
		 */
		ContentDefinitions_GetContentDefinitions(limit: number, offset: number, userID: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/ContentDefinitions?limit=' + limit + '&offset=' + offset + '&userID=' + userID, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a ContentDefinition
		 * Creates a ContentDefinition.  The body of the POST is the ContentDefinition to create.
		 * The ContentDefinitionID will be assigned on creation of the Job.  When successful, the response
		 * is the JobID.  If unsuccessful, an appropriate ApiError is returned.
		 * Post api/v2/ContentDefinitions
		 * @param {ContentSubmission.Shared.BusinessEntities.ContentDefinition} requestBody The ContentDefinition to create.
		 * @return {number} OK
		 */
		ContentDefinitions_PostContentDefinition(requestBody: ContentSubmission.Shared.BusinessEntities.ContentDefinition, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/ContentDefinitions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete a ContentDefinition
		 * Deletes an ContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/ContentDefinitions/{contentDefinitionID}
		 * @param {number} contentDefinitionID The ID of the ContentDefinition to delete
		 * @return {void} 
		 */
		ContentDefinitions_DeleteContentDefinition(contentDefinitionID: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/ContentDefinitions/' + contentDefinitionID, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a ContentDefinition by ID
		 * Gets a ContentDefinition by ID. When successful, the response is the requested ContentDefinition.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/ContentDefinitions/{contentDefinitionID}
		 * @param {number} contentDefinitionID The ID of the ContentDefinition to get.
		 * @return {ContentSubmission.Shared.BusinessEntities.ContentDefinition} OK
		 */
		ContentDefinitions_GetContentDefinition(contentDefinitionID: number, headersHandler?: () => {[header: string]: string}): Promise<ContentSubmission.Shared.BusinessEntities.ContentDefinition> {
			return Axios.get<ContentSubmission.Shared.BusinessEntities.ContentDefinition>(this.baseUri + 'api/v2/ContentDefinitions/' + contentDefinitionID, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a ContentDefinition
		 * Updates a ContentDefinition.  The body of the PUT is the updated ContentDefinition.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/ContentDefinitions/{contentDefinitionID}
		 * @param {number} contentDefinitionID The ID of the ContentDefinition to update
		 * @param {ContentSubmission.Shared.BusinessEntities.ContentDefinition} requestBody The updated ContentDefinition
		 * @return {void} 
		 */
		ContentDefinitions_PutContentDefinition(contentDefinitionID: number, requestBody: ContentSubmission.Shared.BusinessEntities.ContentDefinition, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/ContentDefinitions/' + contentDefinitionID, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get ContentReleaseVersion
		 * Gets a collection of ContentReleaseVersion. When successful, the response is a PagedResponse of ContentReleaseVersion.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/ContentReleases
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 * @param {boolean} deleted Optional. Filter by deleted.
		 * @param {number} releaseID Optional. Filter by releaseID.
		 * @param {number} userId Optional. Filter by UserID.
		 * @param {number} contentDefinitionID Optional. Filter by ContentDefinitionID.
		 * @param {number} version Optional. Filter by Version.
		 * @return {any} OK
		 */
		ContentReleaseGetByLimitAndOffsetAndDeletedAndReleaseIDAndUserIdAndContentDefinitionIDAndVersion(limit: number, offset: number, deleted: boolean, releaseID: number, userId: number, contentDefinitionID: number, version: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/ContentReleases?limit=' + limit + '&offset=' + offset + '&deleted=' + deleted + '&releaseID=' + releaseID + '&userId=' + userId + '&contentDefinitionID=' + contentDefinitionID + '&version=' + version, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a ContentReleaseVersion
		 * Creates a ContentReleaseVersion.  The body of the POST is the ContentReleaseVersion to create.
		 * The ContentReleaseId will be assigned on creation of the Job.  When successful, the response
		 * is the contentReleaseId.  If unsuccessful, an appropriate ApiError is returned.
		 * Post api/v2/ContentReleases
		 * @param {ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion} requestBody The ContentReleaseVersion to create.
		 * @return {number} OK
		 */
		ContentRelease_PostContentRelease(requestBody: ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/ContentReleases', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete a ContentReleaseVersion
		 * Deletes an ContentReleaseVersion. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/ContentReleases/{ContentReleaseId}
		 * @param {number} ContentReleaseId The ID of the ContentReleaseVersion to delete
		 * @return {void} 
		 */
		ContentRelease_DeleteContentReleaseVersionn(ContentReleaseId: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/ContentReleases/' + ContentReleaseId, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a Content Release Version by ID
		 * Gets a ContentReleaseVersion by ID. When successful, the response is the requested ContentReleaseVersion.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/ContentReleases/{ContentReleaseId}
		 * @param {number} ContentReleaseId The ID of the ContentReleaseVersion to get.
		 * @return {ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion} OK
		 */
		ContentReleaseGetByContentReleaseId(ContentReleaseId: number, headersHandler?: () => {[header: string]: string}): Promise<ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion> {
			return Axios.get<ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion>(this.baseUri + 'api/v2/ContentReleases/' + ContentReleaseId, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a ContentReleaseVersion
		 * Updates a ContentReleaseVersion.  The body of the PUT is the updated ContentReleaseVersion.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/ContentReleases/{ContentReleaseId}
		 * @param {number} ContentReleaseId The ID of the ContentReleaseVersion to update
		 * @param {ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion} requestBody The updated ContentReleaseVersion
		 * @return {void} 
		 */
		ContentRelease_PutContentDefinition(ContentReleaseId: number, requestBody: ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/ContentReleases/' + ContentReleaseId, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns available Content Submission Types.
		 * No Documentation Found.
		 * Get api/v2/ContentSubmissionTypes
		 * @return {Array<ContentSubmission.Shared.BusinessEntities.ContentSubmissionType>} OK
		 */
		ContentSubmissionTypes_GetContentSubmissionTypes(enabled: boolean, headersHandler?: () => {[header: string]: string}): Promise<Array<ContentSubmission.Shared.BusinessEntities.ContentSubmissionType>> {
			return Axios.get<Array<ContentSubmission.Shared.BusinessEntities.ContentSubmissionType>>(this.baseUri + 'api/v2/ContentSubmissionTypes?enabled=' + enabled, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Add a Content Submission Type
		 * No Documentation Found.
		 * Post api/v2/ContentSubmissionTypes
		 * @param {ContentSubmission.Shared.BusinessEntities.ContentSubmissionType} requestBody The Content Submission Type
		 * @return {number} OK
		 */
		ContentSubmissionTypes_PostContentSubmissionType(requestBody: ContentSubmission.Shared.BusinessEntities.ContentSubmissionType, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/ContentSubmissionTypes', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Remove a Content Submission Type
		 * No Documentation Found.
		 * Delete api/v2/ContentSubmissionTypes/{id}
		 * @param {number} id The ID of the Content Submission Type
		 * @return {void} 
		 */
		ContentSubmissionTypes_DeleteContentSubmissionType(id: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/ContentSubmissionTypes/' + id, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieves a Content Submission Type by its ID.
		 * No Documentation Found.
		 * Get api/v2/ContentSubmissionTypes/{id}
		 * @param {number} id The ID of the Content Submission Type
		 * @return {ContentSubmission.Shared.BusinessEntities.ContentSubmissionType} OK
		 */
		ContentSubmissionTypes_GetContentSubmissionType(id: number, headersHandler?: () => {[header: string]: string}): Promise<ContentSubmission.Shared.BusinessEntities.ContentSubmissionType> {
			return Axios.get<ContentSubmission.Shared.BusinessEntities.ContentSubmissionType>(this.baseUri + 'api/v2/ContentSubmissionTypes/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a Content Submission Type
		 * No Documentation Found.
		 * Put api/v2/ContentSubmissionTypes/{id}
		 * @param {number} id The ID of the Content Submission Type
		 * @param {ContentSubmission.Shared.BusinessEntities.ContentSubmissionType} requestBody The Content Submission Type
		 * @return {void} 
		 */
		ContentSubmissionTypes_PutContentSubmissionType(id: number, requestBody: ContentSubmission.Shared.BusinessEntities.ContentSubmissionType, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/ContentSubmissionTypes/' + id, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get ContentSubmissions
		 * Gets a collection of ContentSubmissions. When successful, the response is a PagedResponse of ContentSubmissions.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/ContentSubmissions
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 * @param {number} userID Optional. Filter by UserID.
		 * @param {number} contentDefinitionID Optional. Filter by ContentDefinitionID
		 * @return {any} OK
		 */
		ContentSubmissions_GetContentSubmissions(limit: number, offset: number, userID: number, contentDefinitionID: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/ContentSubmissions?limit=' + limit + '&offset=' + offset + '&userID=' + userID + '&contentDefinitionID=' + contentDefinitionID, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a ContentSubmission
		 * Creates a ContentSubmission.  The body of the POST is the ContentSubmission to create.
		 * The ContentSubmissionID will be assigned on creation of the Job.  When successful, the response
		 * is the ContentSubmissionID.  If unsuccessful, an appropriate ApiError is returned.
		 * Post api/v2/ContentSubmissions
		 * @param {ContentSubmission.Shared.BusinessEntities.ContentSubmission} requestBody The ContentSubmission to create.
		 * @return {number} OK
		 */
		ContentSubmissions_PostContentSubmission(requestBody: ContentSubmission.Shared.BusinessEntities.ContentSubmission, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/ContentSubmissions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete a ContentSubmission
		 * Deletes an ContentSubmission. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/ContentSubmissions/{contentSubmissionID}
		 * @param {number} contentSubmissionID The ID of the ContentSubmission to delete
		 * @return {void} 
		 */
		ContentSubmissions_DeleteContentSubmission(contentSubmissionID: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/ContentSubmissions/' + contentSubmissionID, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a ContentSubmission by ID
		 * Gets a ContentSubmission by ID. When successful, the response is the requested ContentSubmission.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/ContentSubmissions/{contentSubmissionID}
		 * @param {number} contentSubmissionID The ID of the ContentSubmission to get.
		 * @return {ContentSubmission.Shared.BusinessEntities.ContentSubmission} OK
		 */
		ContentSubmissions_GetContentSubmission(contentSubmissionID: number, headersHandler?: () => {[header: string]: string}): Promise<ContentSubmission.Shared.BusinessEntities.ContentSubmission> {
			return Axios.get<ContentSubmission.Shared.BusinessEntities.ContentSubmission>(this.baseUri + 'api/v2/ContentSubmissions/' + contentSubmissionID, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a ContentSubmission
		 * Updates a ContentSubmission.  The body of the PUT is the updated ContentSubmission.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/ContentSubmissions/{contentSubmissionID}
		 * @param {number} contentSubmissionID The ID of the ContentSubmission to update
		 * @param {ContentSubmission.Shared.BusinessEntities.ContentSubmission} requestBody The updated ContentSubmission
		 * @return {void} 
		 */
		ContentSubmissions_PutContentSubmission(contentSubmissionID: number, requestBody: ContentSubmission.Shared.BusinessEntities.ContentSubmission, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/ContentSubmissions/' + contentSubmissionID, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get a total count of dealers per country
		 * No Documentation Found.
		 * Get api/v2/DealerByCountry
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		DealerByCountry_GetCountries(limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/DealerByCountry?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of dealers.
		 * No Documentation Found.
		 * Get api/v2/Dealers
		 * @param {string} Brand The brand to filter by.
		 * @param {string} ShippingCountry The country to filter by.
		 * @param {string} DealerName The partial Dealer Name to filter by. Wildcard supported (*).
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		Dealers_GetDealers(Brand: string, ShippingCountry: string, DealerName: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Dealers?Brand=' + (Brand == null ? '' : encodeURIComponent(Brand)) + '&ShippingCountry=' + (ShippingCountry == null ? '' : encodeURIComponent(ShippingCountry)) + '&DealerName=' + (DealerName == null ? '' : encodeURIComponent(DealerName)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lookup a dealer using a dealer code.
		 * No Documentation Found.
		 * Get api/v2/Dealers/{DealerCode}
		 * @param {string} DealerCode The Dealer Code to Search for
		 * @return {DealerDB.Models.Dealer} OK
		 */
		Dealers_GetDealerbyDealerCode(DealerCode: string, headersHandler?: () => {[header: string]: string}): Promise<DealerDB.Models.Dealer> {
			return Axios.get<DealerDB.Models.Dealer>(this.baseUri + 'api/v2/Dealers/' + (DealerCode == null ? '' : encodeURIComponent(DealerCode)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a license activation.
		 * No Documentation Found.
		 * Post api/v2/LicenseActivations
		 * @param {DealerDB.Models.LicenseActivationCreate} requestBody The data required for creating the license.
		 * @return {DealerDB.Models.LicenseActivation} OK
		 */
		LicenseActivations_Post(requestBody: DealerDB.Models.LicenseActivationCreate, headersHandler?: () => {[header: string]: string}): Promise<DealerDB.Models.LicenseActivation> {
			return Axios.post<DealerDB.Models.LicenseActivation>(this.baseUri + 'api/v2/LicenseActivations', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Register an EDT Lite with the Server
		 * No Documentation Found.
		 * Post api/v2/LicenseActivations/RegisterEDTLite
		 * @param {DealerDB.Models.EDTLiteRegistration} requestBody The information required for registration.
		 * @return {boolean} OK
		 */
		LicenseActivations_PostRegisterEDTLite(requestBody: DealerDB.Models.EDTLiteRegistration, headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return Axios.post<boolean>(this.baseUri + 'api/v2/LicenseActivations/RegisterEDTLite', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Update a license activiation.
		 * No Documentation Found.
		 * Put api/v2/LicenseActivations/{ID}
		 * @param {string} ID The ID of the license.
		 * @param {DealerDB.Models.LicenseActivationUpdate} requestBody The data required for updating the license.
		 * @return {DealerDB.Models.LicenseActivation} OK
		 */
		LicenseActivations_Put(ID: string, requestBody: DealerDB.Models.LicenseActivationUpdate, headersHandler?: () => {[header: string]: string}): Promise<DealerDB.Models.LicenseActivation> {
			return Axios.put<DealerDB.Models.LicenseActivation>(this.baseUri + 'api/v2/LicenseActivations/' + (ID == null ? '' : encodeURIComponent(ID)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Confirm that the client has applied the updated license.
		 * No Documentation Found.
		 * Put api/v2/LicenseActivations/{ID}/Confirm
		 * @param {string} ID The ID of the license
		 * @param {DealerDB.Models.LicenseActivationConfirm} requestBody The license data.
		 * @return {void} 
		 */
		LicenseActivations_PutConfirm(ID: string, requestBody: DealerDB.Models.LicenseActivationConfirm, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/LicenseActivations/' + (ID == null ? '' : encodeURIComponent(ID)) + '/Confirm', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Gets a list of licenses with the specified criteria.
		 * No Documentation Found.
		 * Get api/v2/Licenses
		 * @param {string} VoucherCode Optional. Filter by VoucherCode
		 * @param {string} DealerCode Optional. Filter by DealerCode
		 * @param {string} Status Optional. Filter by Status.  By default only active licenses will be returned.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		LicensesGetByVoucherCodeAndDealerCodeAndStatusAndLimitAndOffset(VoucherCode: string, DealerCode: string, Status: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Licenses?VoucherCode=' + (VoucherCode == null ? '' : encodeURIComponent(VoucherCode)) + '&DealerCode=' + (DealerCode == null ? '' : encodeURIComponent(DealerCode)) + '&Status=' + (Status == null ? '' : encodeURIComponent(Status)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a license.
		 * No Documentation Found.
		 * Get api/v2/Licenses/{ID}
		 * @param {string} ID The ID of the license to get.
		 * @return {DealerDB.Models.License} OK
		 */
		LicensesGetByID(ID: string, headersHandler?: () => {[header: string]: string}): Promise<DealerDB.Models.License> {
			return Axios.get<DealerDB.Models.License>(this.baseUri + 'api/v2/Licenses/' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get the API System logs, most recent first.
		 * No Documentation Found.
		 * Get api/v2/Logs
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		Logs_GetLogs(limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Logs?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a Log entry
		 * No Documentation Found.
		 * Post api/v2/Logs
		 * @param {string} Message Message to enter into the log
		 * @return {string} OK
		 */
		Logs_PostLog(Message: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.post(this.baseUri + 'api/v2/Logs?Message=' + (Message == null ? '' : encodeURIComponent(Message)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Get a log by ID
		 * No Documentation Found.
		 * Get api/v2/Logs/{ID}
		 * @param {string} ID The Log ID
		 * @return {API.Models.Log} OK
		 */
		Logs_GetLog(ID: string, headersHandler?: () => {[header: string]: string}): Promise<API.Models.Log> {
			return Axios.get<API.Models.Log>(this.baseUri + 'api/v2/Logs/' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Sends an email message.
		 * No Documentation Found.
		 * Post api/v2/Notifications
		 * @param {API.Models.Notification} requestBody The Notification Object.
		 * @return {void} 
		 */
		Notifications_PostMail(requestBody: API.Models.Notification, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + 'api/v2/Notifications', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get all of the Package Types.
		 * No Documentation Found.
		 * Get api/v2/PackageTypes
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		PackageTypesGetByLimitAndOffset(limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/PackageTypes?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a Package Type.
		 * No Documentation Found.
		 * Post api/v2/PackageTypes
		 * @param {UpdateSystem.Models.PackageType} requestBody The Package Type to add
		 * @return {string} OK
		 */
		PackageTypes_Post(requestBody: UpdateSystem.Models.PackageType, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.post(this.baseUri + 'api/v2/PackageTypes', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' },  responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Delete a Package Type.
		 * No Documentation Found.
		 * Delete api/v2/PackageTypes/{ID}
		 * @param {string} ID The Package Type ID
		 * @return {void} 
		 */
		PackageTypes_Delete(ID: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/PackageTypes/' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a specific Package Type.
		 * No Documentation Found.
		 * Get api/v2/PackageTypes/{ID}
		 * @param {string} ID The Package Type ID
		 * @return {UpdateSystem.Models.PackageType} OK
		 */
		PackageTypesGetByID(ID: string, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystem.Models.PackageType> {
			return Axios.get<UpdateSystem.Models.PackageType>(this.baseUri + 'api/v2/PackageTypes/' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Modify a Package Type.
		 * No Documentation Found.
		 * Put api/v2/PackageTypes/{ID}
		 * @param {string} ID The ID of the Package Type
		 * @param {UpdateSystem.Models.PackageType} requestBody The Package Type to update
		 * @return {void} 
		 */
		PackageTypes_Put(ID: string, requestBody: UpdateSystem.Models.PackageType, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/PackageTypes/' + (ID == null ? '' : encodeURIComponent(ID)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Delete a Package Type to Bundle Relationship.
		 * No Documentation Found.
		 * Delete api/v2/PackageTypetoBundles
		 * @param {string} BundleID The BundleID
		 * @param {string} PackageTypeID The PackageTypeID
		 * @return {void} 
		 */
		PackageTypetoBundles_Delete(BundleID: string, PackageTypeID: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/PackageTypetoBundles?BundleID=' + (BundleID == null ? '' : encodeURIComponent(BundleID)) + '&PackageTypeID=' + (PackageTypeID == null ? '' : encodeURIComponent(PackageTypeID)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get all of the Package Type to Bundle Relationships.
		 * No Documentation Found.
		 * Get api/v2/PackageTypetoBundles
		 * @param {string} BundleID Optional. Filter by BundleID.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		PackageTypetoBundles_Get(BundleID: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/PackageTypetoBundles?BundleID=' + (BundleID == null ? '' : encodeURIComponent(BundleID)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a new Package Type ID to Bundle Relationship.
		 * No Documentation Found.
		 * Post api/v2/PackageTypetoBundles
		 * @param {UpdateSystem.Models.PackageTypeIDtoBundle} requestBody The PackageTypeToBundle to add.
		 * @return {void} 
		 */
		PackageTypetoBundles_Post(requestBody: UpdateSystem.Models.PackageTypeIDtoBundle, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + 'api/v2/PackageTypetoBundles', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Update a Package Type ID to Bundle Relationship.
		 * No Documentation Found.
		 * Put api/v2/PackageTypetoBundles
		 * @param {UpdateSystem.Models.PackageTypeIDtoBundle} requestBody The PackageTypeToBundle to update.
		 * @return {void} 
		 */
		PackageTypetoBundles_Put(requestBody: UpdateSystem.Models.PackageTypeIDtoBundle, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/PackageTypetoBundles', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List Packages.
		 * No Documentation Found.
		 * Get api/v2/Packages
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		Packages_GetPackages(limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Packages?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a Packge to the Update System.
		 * No Documentation Found.
		 * Post api/v2/Packages
		 * @param {UpdateSystem.Models.Package} requestBody The package to add.
		 * @return {string} OK
		 */
		Packages_PostPackage(requestBody: UpdateSystem.Models.Package, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.post(this.baseUri + 'api/v2/Packages', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' },  responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Delete a Package.
		 * No Documentation Found.
		 * Delete api/v2/Packages/{ID}
		 * @param {string} ID The Package ID to Delete
		 * @return {void} 
		 */
		Packages_DeletePackage(ID: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/Packages/' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Find a Package.
		 * No Documentation Found.
		 * Get api/v2/Packages/{ID}
		 * @param {string} ID The Package ID to Search for
		 * @return {UpdateSystem.Models.Package} OK
		 */
		Packages_GetPackage(ID: string, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystem.Models.Package> {
			return Axios.get<UpdateSystem.Models.Package>(this.baseUri + 'api/v2/Packages/' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Modify a Packge to the Update System.
		 * No Documentation Found.
		 * Put api/v2/Packages/{ID}
		 * @param {string} ID The unique ID of the Package
		 * @param {UpdateSystem.Models.Package} requestBody The package to update.
		 * @return {void} 
		 */
		Packages_PutPackage(ID: string, requestBody: UpdateSystem.Models.Package, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Packages/' + (ID == null ? '' : encodeURIComponent(ID)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List Permissions
		 * No Documentation Found.
		 * Get api/v2/Permissions
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @param {string} name Filter by permission name. Supports ending wildcard (*). Optional.
		 * @return {any} OK
		 */
		Permissions_GetPermissions(limit: number, offset: number, name: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Permissions?limit=' + limit + '&offset=' + offset + '&name=' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds a Permission
		 * No Documentation Found.
		 * Post api/v2/Permissions
		 * @param {API.Models.Permission} requestBody Permission to add
		 * @return {number} OK
		 */
		Permissions_PostPermission(requestBody: API.Models.Permission, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/Permissions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes a Permission
		 * No Documentation Found.
		 * Delete api/v2/Permissions/{id}
		 * @param {number} id Id of Permission
		 * @return {void} 
		 */
		Permissions_DeletePermission(id: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/Permissions/' + id, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Gets a Permission
		 * No Documentation Found.
		 * Get api/v2/Permissions/{id}
		 * @param {number} id Id of Permission
		 * @return {API.Models.Permission} OK
		 */
		Permissions_GetPermission(id: number, headersHandler?: () => {[header: string]: string}): Promise<API.Models.Permission> {
			return Axios.get<API.Models.Permission>(this.baseUri + 'api/v2/Permissions/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates a Permission
		 * No Documentation Found.
		 * Put api/v2/Permissions/{id}
		 * @param {number} id Id of Permission
		 * @param {API.Models.Permission} requestBody The Updated Permission
		 * @return {void} 
		 */
		Permissions_PutPermission(id: number, requestBody: API.Models.Permission, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Permissions/' + id, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get a list of Priority Packages by Client.
		 * No Documentation Found.
		 * Get api/v2/PriorityPackages
		 * @param {string} ClientID Optional. Filter priority packages by ClientID.
		 * @param {string} Status Optional. Filter returned packages by status. By default only active packages will be returned.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		PriorityPackages_GetPriorityPackages(ClientID: string, Status: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/PriorityPackages?ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&Status=' + (Status == null ? '' : encodeURIComponent(Status)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a Priority Package for a Client.
		 * No Documentation Found.
		 * Post api/v2/PriorityPackages
		 * @param {UpdateSystem.Models.PriorityPackage} requestBody The PriorityPackage to add
		 * @return {string} OK
		 */
		PriorityPackages_PostPriorityPackages(requestBody: UpdateSystem.Models.PriorityPackage, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.post(this.baseUri + 'api/v2/PriorityPackages', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' },  responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Delete a Priority Package for a Client.
		 * No Documentation Found.
		 * Delete api/v2/PriorityPackages/{ID}
		 * @param {string} ID The Priority Package ID
		 * @return {void} 
		 */
		PriorityPackages_DeletePriorityPackages(ID: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/PriorityPackages/' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a Priority Packages for a Client.
		 * No Documentation Found.
		 * Get api/v2/PriorityPackages/{ID}
		 * @param {string} ID The Priority Package ID
		 * @return {UpdateSystem.Models.PriorityPackage} OK
		 */
		PriorityPackages_GetPriorityPackage(ID: string, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystem.Models.PriorityPackage> {
			return Axios.get<UpdateSystem.Models.PriorityPackage>(this.baseUri + 'api/v2/PriorityPackages/' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get Release
		 * Gets a collection of Release. When successful, the response is a PagedResponse of Release.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/Releases
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 * @param {boolean} visible Optional. Filter by visible.
		 * @return {any} OK
		 */
		Release_GetReleases(limit: number, offset: number, visible: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Releases?limit=' + limit + '&offset=' + offset + '&visible=' + visible, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Release
		 * Creates a Release.  The body of the POST is the Release to create.
		 * The ReleaseId will be assigned on creation of the Job.  When successful, the response
		 * is the Release Id.  If unsuccessful, an appropriate ApiError is returned.
		 * Post api/v2/Releases
		 * @param {ContentSubmission.Shared.BusinessEntities.Release} requestBody The Release to create.
		 * @return {number} OK
		 */
		Release_PostRelease(requestBody: ContentSubmission.Shared.BusinessEntities.Release, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/Releases', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Get a  Release by ID
		 * Gets a Release by ID. When successful, the response is the requested Release.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/Releases/{ReleaseId}
		 * @param {number} ReleaseId The ID of the Release to get.
		 * @return {ContentSubmission.Shared.BusinessEntities.Release} OK
		 */
		Release_GetRelease(ReleaseId: number, headersHandler?: () => {[header: string]: string}): Promise<ContentSubmission.Shared.BusinessEntities.Release> {
			return Axios.get<ContentSubmission.Shared.BusinessEntities.Release>(this.baseUri + 'api/v2/Releases/' + ReleaseId, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a Release
		 * Updates a Release.  The body of the PUT is the updated Release.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/Releases/{releaseId}
		 * @param {number} releaseId The ID of the Release to update
		 * @param {ContentSubmission.Shared.BusinessEntities.Release} requestBody The updated Release
		 * @return {void} 
		 */
		Release_PutContentDefinition(releaseId: number, requestBody: ContentSubmission.Shared.BusinessEntities.Release, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Releases/' + releaseId, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get a summary of all Packages in a Bundle
		 * No Documentation Found.
		 * Get api/v2/Reporting/BundleStatusSummary
		 * @param {string} BundleID The BundleID
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		Reporting_BundleStatusSummary(BundleID: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Reporting/BundleStatusSummary?BundleID=' + (BundleID == null ? '' : encodeURIComponent(BundleID)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of bundles for UpdateGroup.
		 * No Documentation Found.
		 * Get api/v2/Reporting/BundlesInUpdateGroup
		 * @param {string} ID The UpdateGroupID
		 * @param {boolean} IncludeInactive Include Inactive Bundles (true|false)
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		Reporting_BundlesInUpdateGroup(ID: string, IncludeInactive: boolean, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Reporting/BundlesInUpdateGroup?ID=' + (ID == null ? '' : encodeURIComponent(ID)) + '&IncludeInactive=' + IncludeInactive + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Client Information
		 * No Documentation Found.
		 * Get api/v2/Reporting/ClientInfo
		 * @param {string} ClientID The Client ID
		 * @return {UpdateSystem.Models.ClientInfo} OK
		 */
		Reporting_ClientInfo(ClientID: string, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystem.Models.ClientInfo> {
			return Axios.get<UpdateSystem.Models.ClientInfo>(this.baseUri + 'api/v2/Reporting/ClientInfo?ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get the current packages for an update group.
		 * No Documentation Found.
		 * Get api/v2/Reporting/CurrentPackagesInUpdateGroup
		 * @param {string} ID The UpdateGroupID
		 * @param {string} SubscriptionTypeFilter Optional.  The subscription type filter to use.  By default the Default packages (Required and IncludeByDefault) will be returned.
		 * @return {Array<UpdateSystem.Models.Package>} OK
		 */
		Reporting_CurrentPackagesInUpdateGroup(ID: string, SubscriptionTypeFilter: string, headersHandler?: () => {[header: string]: string}): Promise<Array<UpdateSystem.Models.Package>> {
			return Axios.get<Array<UpdateSystem.Models.Package>>(this.baseUri + 'api/v2/Reporting/CurrentPackagesInUpdateGroup?ID=' + (ID == null ? '' : encodeURIComponent(ID)) + '&SubscriptionTypeFilter=' + (SubscriptionTypeFilter == null ? '' : encodeURIComponent(SubscriptionTypeFilter)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get a Client in the Update System.
		 * No Documentation Found.
		 * Get api/v2/Reporting/GetClient
		 * @param {string} ID The Client ID
		 * @return {UpdateSystem.Models.Client} OK
		 */
		Reporting_GetClient(ID: string, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystem.Models.Client> {
			return Axios.get<UpdateSystem.Models.Client>(this.baseUri + 'api/v2/Reporting/GetClient?ID=' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get a list of current Client Subscriptions.
		 * No Documentation Found.
		 * Get api/v2/Reporting/GetSubscriptions
		 * @param {string} ClientID Optional. Filter by Client ID
		 * @param {string} UpdateGroupID Optional. Filter by Update Group ID
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		Reporting_GetSubscriptions(ClientID: string, UpdateGroupID: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Reporting/GetSubscriptions?ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a summary report for a Specific Package
		 * No Documentation Found.
		 * Get api/v2/Reporting/PackageStatusSummary
		 * @param {string} PackageID The Package ID
		 * @return {UpdateSystem.Models.PackageStatusSummary} OK
		 */
		Reporting_PackageStatusSummary(PackageID: string, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystem.Models.PackageStatusSummary> {
			return Axios.get<UpdateSystem.Models.PackageStatusSummary>(this.baseUri + 'api/v2/Reporting/PackageStatusSummary?PackageID=' + (PackageID == null ? '' : encodeURIComponent(PackageID)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get a list of subscribed clients
		 * No Documentation Found.
		 * Get api/v2/Reporting/RegisteredClients
		 * @param {string} UpdateGroupID Optional. The Update Group ID. If not provided, all clients will be returned.
		 * @param {string} ClientID Optional. Filter where ClientID matches a value. Wildcards are supported (*).
		 * @param {string} Tag Optional. Filter where Tag matches a value. Wildcards are supported (*).
		 * @param {string} ReportResult Optional. Filter where ReportResult matches a value. Wildcards are supported (*).
		 * @param {boolean} ReportResultIsValid Optional. When 'true' filters results where ReportResult equals ReportResultExpected.  When 'false' filters results where ValueToValidate does not equal ReportResults.
		 * @param {string} ReportValue Optional. Filter where ReportValue matches a value. Wildcards are supported (*).
		 * @param {Date} LastCheckInBefore Optional. Filter where LastCheckIn occured before the provided date.
		 * @param {Date} LastCheckInAfter Optional. Filter where LastCheckIn occured after the provided date.
		 * @param {string} OrderBy Optional. Specify the order in which results should be returned. Use this format: [FieldName] [ASC|ASCENDING|DESC|DESCENDING],...   
		 *             If sort direction is not provided for a field, it will be sorted ascending.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		Reporting_RegisteredClients(UpdateGroupID: string, ClientID: string, Tag: string, ReportResult: string, ReportResultIsValid: boolean, ReportValue: string, LastCheckInBefore: Date, LastCheckInAfter: Date, OrderBy: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Reporting/RegisteredClients?UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&Tag=' + (Tag == null ? '' : encodeURIComponent(Tag)) + '&ReportResult=' + (ReportResult == null ? '' : encodeURIComponent(ReportResult)) + '&ReportResultIsValid=' + ReportResultIsValid + '&ReportValue=' + (ReportValue == null ? '' : encodeURIComponent(ReportValue)) + '&LastCheckInBefore=' + LastCheckInBefore.toISOString() + '&LastCheckInAfter=' + LastCheckInAfter.toISOString() + '&OrderBy=' + (OrderBy == null ? '' : encodeURIComponent(OrderBy)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
		 * No Documentation Found.
		 * Get api/v2/Reporting/UpdateGroups
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		Reporting_UpdateGroups(limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Reporting/UpdateGroups?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get data for pie charts in UpdateMetrics.
		 * No Documentation Found.
		 * Get api/v2/Reporting/UpdateMetrics
		 * @param {string} UpdateGroupID The UpdateType in which clients must be for the report to include them.
		 * @param {number} bundleNumber Optional. Tells us which chart to show based upon filter.
		 * @return {UpdateSystem.Models.UpdateMetricsData} OK
		 */
		Reporting_UpdateMetrics(UpdateGroupID: string, bundleNumber: number, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystem.Models.UpdateMetricsData> {
			return Axios.get<UpdateSystem.Models.UpdateMetricsData>(this.baseUri + 'api/v2/Reporting/UpdateMetrics?UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&bundleNumber=' + bundleNumber, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * List Roles
		 * No Documentation Found.
		 * Get api/v2/Roles
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @param {string} name Optional. Finds a role with the given name.
		 * @return {any} OK
		 */
		Roles_GetRoles(limit: number, offset: number, name: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Roles?limit=' + limit + '&offset=' + offset + '&name=' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds a User Role
		 * No Documentation Found.
		 * Post api/v2/Roles
		 * @param {API.Models.Role} requestBody Role to add
		 * @return {number} OK
		 */
		Roles_PostRole(requestBody: API.Models.Role, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/Roles', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes a User Role
		 * No Documentation Found.
		 * Delete api/v2/Roles/{id}
		 * @param {number} id The role's id
		 * @return {void} 
		 */
		Roles_DeleteRole(id: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/Roles/' + id, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Gets a User Role
		 * No Documentation Found.
		 * Get api/v2/Roles/{id}
		 * @param {number} id The role's id
		 * @return {API.Models.Role} OK
		 */
		Roles_GetRole(id: number, headersHandler?: () => {[header: string]: string}): Promise<API.Models.Role> {
			return Axios.get<API.Models.Role>(this.baseUri + 'api/v2/Roles/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates a User Role
		 * No Documentation Found.
		 * Put api/v2/Roles/{id}
		 * @param {number} id The role's id
		 * @param {API.Models.Role} requestBody The Updated Role
		 * @return {void} 
		 */
		Roles_PutRole(id: number, requestBody: API.Models.Role, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Roles/' + id, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get the Permissions for a Role
		 * No Documentation Found.
		 * Get api/v2/Roles/{id}/Permissions
		 * @param {number} id The id of the Role
		 * @param {string} name Filter by permission name. Optional.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		Roles_GetRolePermissions(id: number, name: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Roles/' + id + '/Permissions?name=' + (name == null ? '' : encodeURIComponent(name)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Manage the Permissions for a Role
		 * No Documentation Found.
		 * Put api/v2/Roles/{id}/Permissions
		 * @param {number} id The id of the Role
		 * @param {Array<API.Models.RolePermissionChange>} requestBody Permissions Changes for the Role
		 * @return {void} 
		 */
		Roles_PutRolePermissions(id: number, requestBody: Array<API.Models.RolePermissionChange>, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Roles/' + id + '/Permissions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get all user's in a role
		 * No Documentation Found.
		 * Get api/v2/Roles/{id}/Users
		 * @param {number} id The Role's ID
		 * @param {number} limit The page limit. The default page limit is 10.
		 * @param {number} offset The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		UserPermissions_GetUsers(id: number, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Roles/' + id + '/Users?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Role's users
		 * No Documentation Found.
		 * Put api/v2/Roles/{id}/Users
		 * @param {number} id The Role's ID
		 * @param {Array<API.Models.RoleUserChange>} requestBody A list of changes to the Role's Users
		 * @return {void} 
		 */
		UserPermissionsPutById(id: number, requestBody: Array<API.Models.RoleUserChange>, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Roles/' + id + '/Users', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get a list of current Client Subscriptions.
		 * No Documentation Found.
		 * Get api/v2/UpdateGroupClientRelationships
		 * @param {string} ClientID Optional. Filter by Client ID
		 * @param {string} UpdateGroupID Optional. Filter by Update Group ID
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		UpdateGroupClientRelationships_GetSubscriptions(ClientID: string, UpdateGroupID: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/UpdateGroupClientRelationships?ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a subscription
		 * No Documentation Found.
		 * Post api/v2/UpdateGroupClientRelationships
		 * @param {UpdateSystem.Models.UpdateGroupClientRelationship} requestBody The UpdateGroupClientRelationship to add.
		 * @return {string} OK
		 */
		UpdateGroupClientRelationships_PostSubscription(requestBody: UpdateSystem.Models.UpdateGroupClientRelationship, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.post(this.baseUri + 'api/v2/UpdateGroupClientRelationships', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' },  responseType: 'text' }).then(d => d.data);
		}

		/**
		 * DEPRECATED. Set client subscription status for an update group.
		 * No Documentation Found.
		 * Put api/v2/UpdateGroupClientRelationships
		 * @param {string} ClientID The Client ID.  This can be a client ID that has not been registered yet.
		 * @param {string} UpdateGroupID The Update Group ID
		 * @param {boolean} Active Subscribe the client to the Update Group.
		 * @return {void} 
		 */
		UpdateGroupClientRelationships_PutSubscriptionByClientIDUpdateGroupID(ClientID: string, UpdateGroupID: string, Active: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/UpdateGroupClientRelationships?ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&Active=' + Active, null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a subscription by RelationshipID
		 * No Documentation Found.
		 * Get api/v2/UpdateGroupClientRelationships/{RelationshipID}
		 * @param {string} RelationshipID The RelationshipID.
		 * @return {UpdateSystem.Models.UpdateGroupClientRelationship} OK
		 */
		UpdateGroupClientRelationships_GetSubscription(RelationshipID: string, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystem.Models.UpdateGroupClientRelationship> {
			return Axios.get<UpdateSystem.Models.UpdateGroupClientRelationship>(this.baseUri + 'api/v2/UpdateGroupClientRelationships/' + (RelationshipID == null ? '' : encodeURIComponent(RelationshipID)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates a Subscription
		 * No Documentation Found.
		 * Put api/v2/UpdateGroupClientRelationships/{RelationshipID}
		 * @param {string} RelationshipID The relationship id of the UpdateGroupClientRelationship
		 * @param {UpdateSystem.Models.UpdateGroupClientRelationship} requestBody The updated UpdateGroupClientRelationship
		 * @return {void} 
		 */
		UpdateGroupClientRelationships_PutSubscription(RelationshipID: string, requestBody: UpdateSystem.Models.UpdateGroupClientRelationship, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/UpdateGroupClientRelationships/' + (RelationshipID == null ? '' : encodeURIComponent(RelationshipID)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get Update Group Subscriptions
		 * No Documentation Found.
		 * Get api/v2/UpdateGroupSubscriptions
		 * @param {string} UpdateGroupID Optional. Filter by Update Group ID.
		 * @param {string} PackageTypeID Optional. Filter by Package Type ID.
		 * @param {string} ClientID Optional. Filter by Client ID.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		UpdateGroupSubscriptions_GetUpdateGroupSubscriptions(UpdateGroupID: string, PackageTypeID: string, ClientID: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/UpdateGroupSubscriptions?UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&PackageTypeID=' + (PackageTypeID == null ? '' : encodeURIComponent(PackageTypeID)) + '&ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add an Update Group Subscription
		 * No Documentation Found.
		 * Post api/v2/UpdateGroupSubscriptions
		 * @param {UpdateSystem.Models.UpdateGroupSubscription} requestBody The Update Group Subscription to add
		 * @return {number} OK
		 */
		UpdateGroupSubscriptions_PostUpdateGroupSubscription(requestBody: UpdateSystem.Models.UpdateGroupSubscription, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/UpdateGroupSubscriptions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete an Update Group Subscription
		 * No Documentation Found.
		 * Delete api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}
		 * @param {number} UpdateGroupSubscriptionID The Update Group Subscription ID to delete
		 * @return {void} 
		 */
		UpdateGroupSubscriptions_DeleteUpdateGroupSubscription(UpdateGroupSubscriptionID: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/UpdateGroupSubscriptions/' + UpdateGroupSubscriptionID, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get an Update Group Subscription
		 * No Documentation Found.
		 * Get api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}
		 * @param {number} UpdateGroupSubscriptionID The Update Group Subscription ID
		 * @return {UpdateSystem.Models.UpdateGroupSubscription} OK
		 */
		UpdateGroupSubscriptions_GetUpdateGroupSubscription(UpdateGroupSubscriptionID: number, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystem.Models.UpdateGroupSubscription> {
			return Axios.get<UpdateSystem.Models.UpdateGroupSubscription>(this.baseUri + 'api/v2/UpdateGroupSubscriptions/' + UpdateGroupSubscriptionID, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update an Update Group Subscription
		 * No Documentation Found.
		 * Put api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}
		 * @param {number} UpdateGroupSubscriptionID The Update Group Subscription ID
		 * @param {UpdateSystem.Models.UpdateGroupSubscription} requestBody The updated Update Group Subscription
		 * @return {void} 
		 */
		UpdateGroupSubscriptions_PutUpdateGroupSubscription(UpdateGroupSubscriptionID: number, requestBody: UpdateSystem.Models.UpdateGroupSubscription, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/UpdateGroupSubscriptions/' + UpdateGroupSubscriptionID, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
		 * No Documentation Found.
		 * Get api/v2/UpdateGroups
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		UpdateGroupsGetByLimitAndOffset(limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/UpdateGroups?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a new Update Group.  The report field is a string that has a dot based request for a specific piece of submitted data.
		 * No Documentation Found.
		 * Post api/v2/UpdateGroups
		 * @return {string} OK
		 */
		UpdateGroups_Post(requestBody: UpdateSystem.Models.UpdateGroup, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.post(this.baseUri + 'api/v2/UpdateGroups', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' },  responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Delete an Update Group.
		 * No Documentation Found.
		 * Delete api/v2/UpdateGroups/{ID}
		 * @param {string} ID The ID of the Update Group to Delete
		 * @return {void} 
		 */
		UpdateGroups_Delete(ID: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/UpdateGroups/' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a specific Update Group by ID.
		 * No Documentation Found.
		 * Get api/v2/UpdateGroups/{ID}
		 * @param {string} ID The ID of the Update Group
		 * @return {UpdateSystem.Models.UpdateGroup} OK
		 */
		UpdateGroupsGetByID(ID: string, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystem.Models.UpdateGroup> {
			return Axios.get<UpdateSystem.Models.UpdateGroup>(this.baseUri + 'api/v2/UpdateGroups/' + (ID == null ? '' : encodeURIComponent(ID)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Modify an Update Group.
		 * No Documentation Found.
		 * Put api/v2/UpdateGroups/{ID}
		 * @param {string} ID ID of the Update Group
		 * @return {void} 
		 */
		UpdateGroups_Put(ID: string, requestBody: UpdateSystem.Models.UpdateGroup, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/UpdateGroups/' + (ID == null ? '' : encodeURIComponent(ID)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get a list of bundles for UpdateGroup.
		 * No Documentation Found.
		 * Get api/v2/UpdateGroups/{ID}/Bundles
		 * @param {string} ID The UpdateGroupID
		 * @param {boolean} IncludeInactive Include Inactive Bundles (true|false)
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		UpdateGroups_GetUpdateGroupBundles(ID: string, IncludeInactive: boolean, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/UpdateGroups/' + (ID == null ? '' : encodeURIComponent(ID)) + '/Bundles&IncludeInactive=' + IncludeInactive + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Checks the Client ID into the Update System.
		 * No Documentation Found.
		 * Get api/v2/UpdateSystem
		 * @param {string} ClientID The Client ID to check-in.  If this is a new client ID it will be added to Clients.
		 * @param {boolean} Preview Get Pkgs w\o updating Datetimes(true|false)
		 * @return {UpdateSystem.Models.CheckinResult} OK
		 */
		UpdateSystem_GetCheckin(ClientID: string, Preview: boolean, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystem.Models.CheckinResult> {
			return Axios.get<UpdateSystem.Models.CheckinResult>(this.baseUri + 'api/v2/UpdateSystem?ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&Preview=' + Preview, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get UserContentDefinitions
		 * Gets a collection of UserContentDefinitions. When successful, the response is a PagedResponse of UserContentDefinitions.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/UserContentDefinitions
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 * @param {number} userID Optional. Filter by UserID.
		 * @param {number} contentDefinitionID Optional. Filter by ContentDefinitionID
		 * @return {any} OK
		 */
		UserContentDefinitions_GetUserContentDefinitions(limit: number, offset: number, userID: number, contentDefinitionID: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/UserContentDefinitions?limit=' + limit + '&offset=' + offset + '&userID=' + userID + '&contentDefinitionID=' + contentDefinitionID, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a UserContentDefinition
		 * Creates a UserContentDefinition.  The body of the POST is the UserContentDefinition to create.
		 * The UserContentDefinitionID will be assigned on creation of the Job.  When successful, the response
		 * is the UserContentDefinitionID.  If unsuccessful, an appropriate ApiError is returned.
		 * Post api/v2/UserContentDefinitions
		 * @param {ContentSubmission.Shared.BusinessEntities.UserContentDefinition} requestBody The UserContentDefinition to create.
		 * @return {number} OK
		 */
		UserContentDefinitions_PostUserContentDefinition(requestBody: ContentSubmission.Shared.BusinessEntities.UserContentDefinition, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/UserContentDefinitions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete a UserContentDefinition
		 * Deletes an UserContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/UserContentDefinitions/{userContentDefinitionID}
		 * @param {number} userContentDefinitionID The ID of the UserContentDefinition to delete
		 * @return {void} 
		 */
		UserContentDefinitions_DeleteUserContentDefinition(userContentDefinitionID: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/UserContentDefinitions/' + userContentDefinitionID, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a UserContentDefinition by ID
		 * Gets a UserContentDefinition by ID. When successful, the response is the requested UserContentDefinition.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/UserContentDefinitions/{userContentDefinitionID}
		 * @param {number} userContentDefinitionID The ID of the UserContentDefinition to get.
		 * @return {ContentSubmission.Shared.BusinessEntities.UserContentDefinition} OK
		 */
		UserContentDefinitions_GetUserContentDefinition(userContentDefinitionID: number, headersHandler?: () => {[header: string]: string}): Promise<ContentSubmission.Shared.BusinessEntities.UserContentDefinition> {
			return Axios.get<ContentSubmission.Shared.BusinessEntities.UserContentDefinition>(this.baseUri + 'api/v2/UserContentDefinitions/' + userContentDefinitionID, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get users
		 * No Documentation Found.
		 * Get api/v2/Users
		 * @param {string} username Optional. Search by username. Supports beginning and ending wildcards (*).
		 * @param {string} email Optional. Search by email. Supports beginning and ending wildcards (*).
		 * @param {string} name Optional. Search by name. Supports beginning and ending wildcards (*).
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		UsersGetByUsernameAndEmailAndNameAndLimitAndOffset(username: string, email: string, name: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Users?username=' + (username == null ? '' : encodeURIComponent(username)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a user
		 * No Documentation Found.
		 * Post api/v2/Users
		 * @param {API.Models.User} requestBody The user to create.
		 * @return {API.Models.User} OK
		 */
		Users_Post(requestBody: API.Models.User, headersHandler?: () => {[header: string]: string}): Promise<API.Models.User> {
			return Axios.post<API.Models.User>(this.baseUri + 'api/v2/Users', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets the current user
		 * No Documentation Found.
		 * Get api/v2/Users/Current
		 * @return {API.Models.User} OK
		 */
		Users_GetCurrentUser(headersHandler?: () => {[header: string]: string}): Promise<API.Models.User> {
			return Axios.get<API.Models.User>(this.baseUri + 'api/v2/Users/Current', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a user
		 * No Documentation Found.
		 * Put api/v2/Users/Current
		 * @param {API.Models.User} requestBody The user
		 * @return {void} 
		 */
		Users_PutCurrentUser(requestBody: API.Models.User, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Users/Current', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get a user's permissions
		 * No Documentation Found.
		 * Get api/v2/Users/Current/Permissions
		 * @param {string} Permission Filter by permission name. Supports ending wildcard (*). Optional.
		 * @param {number} limit The page limit. The default page limit is 10.
		 * @param {number} offset The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		UserPermissionsGetByPermissionAndLimitAndOffset(Permission: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Users/Current/Permissions?Permission=' + (Permission == null ? '' : encodeURIComponent(Permission)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the current user's roles
		 * No Documentation Found.
		 * Get api/v2/Users/Current/Roles
		 * @param {string} Role Filter by role name. Supports ending wildcard (*). Optional.
		 * @param {number} limit The page limit. The default page limit is 10.
		 * @param {number} offset The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		UserPermissions_GetCurrentUserRoles(Role: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Users/Current/Roles?Role=' + (Role == null ? '' : encodeURIComponent(Role)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a user
		 * No Documentation Found.
		 * Delete api/v2/Users/{id}
		 * @param {number} id The user id
		 * @return {void} 
		 */
		Users_Delete(id: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/Users/' + id, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a specific user
		 * No Documentation Found.
		 * Get api/v2/Users/{id}
		 * @param {number} id The user ID
		 * @return {API.Models.User} OK
		 */
		UsersGetById(id: number, headersHandler?: () => {[header: string]: string}): Promise<API.Models.User> {
			return Axios.get<API.Models.User>(this.baseUri + 'api/v2/Users/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a user
		 * No Documentation Found.
		 * Put api/v2/Users/{id}
		 * @param {number} id The user id
		 * @param {API.Models.User} requestBody The user
		 * @return {void} 
		 */
		Users_Put(id: number, requestBody: API.Models.User, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Users/' + id, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get a user's permissions
		 * No Documentation Found.
		 * Get api/v2/Users/{id}/Permissions
		 * @param {number} id The User's ID
		 * @param {string} Permission Filter by permission name. Supports ending wildcard (*). Optional.
		 * @param {number} limit The page limit. The default page limit is 10.
		 * @param {number} offset The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		UserPermissionsGetByIdAndPermissionAndLimitAndOffset(id: number, Permission: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Users/' + id + '/Permissions?Permission=' + (Permission == null ? '' : encodeURIComponent(Permission)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a user's roles
		 * No Documentation Found.
		 * Get api/v2/Users/{id}/Roles
		 * @param {number} id The User's ID
		 * @param {string} Role Filter by role name. Supports ending wildcard (*). Optional.
		 * @param {number} limit The page limit. The default page limit is 10.
		 * @param {number} offset The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		UserPermissions_GetRoles(id: number, Role: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Users/' + id + '/Roles?Role=' + (Role == null ? '' : encodeURIComponent(Role)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a user's roles
		 * No Documentation Found.
		 * Put api/v2/Users/{id}/Roles
		 * @param {number} id The User's ID
		 * @param {Array<API.Models.UserRoleChange>} requestBody A list of changes to the User's Roles
		 * @return {void} 
		 */
		UserPermissionsPutById(id: number, requestBody: Array<API.Models.UserRoleChange>, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Users/' + id + '/Roles', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Gets voucher history data
		 * No Documentation Found.
		 * Get api/v2/VoucherHistory
		 * @param {string} VoucherCode Optional. Filter history data by Voucher Code.
		 * @param {Date} ChangedBefore Optional. Filter history data where changes occured before provided date.
		 * @param {Date} ChangedAfter Optional. Filter history data where changes occured after provided date.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		VoucherHistory_GetVoucherHistory(VoucherCode: string, ChangedBefore: Date, ChangedAfter: Date, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/VoucherHistory?VoucherCode=' + (VoucherCode == null ? '' : encodeURIComponent(VoucherCode)) + '&ChangedBefore=' + ChangedBefore.toISOString() + '&ChangedAfter=' + ChangedAfter.toISOString() + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of vouchers
		 * No Documentation Found.
		 * Get api/v2/Vouchers
		 * @param {DealerDB.Models.VoucherType} Type Optional. Filter vouchers by Type
		 * @param {string} DealerCode Optional. Filter vouchers by DealerCode
		 * @param {string} LicenseTo Optional. Filter vouchers by LicenseTo. Wildcard supported (*).
		 * @param {string} Purpose Optional. Filter vouchers by Purpose. Wildcard supported (*).
		 * @param {string} OrderNumber Optional. Filter vouchers by OrderNumber
		 * @param {string} Email Optional. Filter vouchers by Email. Wildcard supported (*).
		 * @param {string} ModifiedBy Optional. Filter vouchers by ModifiedBy
		 * @param {Date} CreatedAfter Optional. Filter vouchers by CreatedDate
		 * @param {Date} CreatedBefore Optional. Filter vouchers by CreatedDate
		 * @param {Date} PunchedAfter Optional. Filter vouchers by PunchedDate
		 * @param {Date} PunchedBefore Optional. Filter vouchers by PunchedDate
		 * @param {boolean} Punched Optional. Filter vouchers by Punched status
		 * @param {Date} ExpirationAfter Optional. Filter vouchers by ExpirationDate
		 * @param {Date} ExpirationBefore Optional. Filter vouchers by ExpirationDate
		 * @param {string} Deleted Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		VouchersGetByTypeAndDealerCodeAndLicenseToAndPurposeAndOrderNumberAndEmailAndModifiedByAndCreatedAfterAndCreatedBeforeAndPunchedAfterAndPunchedBeforeAndPunchedAndExpirationAfterAndExpirationBeforeAndDeletedAndLimitAndOffset(Type: DealerDB.Models.VoucherType, DealerCode: string, LicenseTo: string, Purpose: string, OrderNumber: string, Email: string, ModifiedBy: string, CreatedAfter: Date, CreatedBefore: Date, PunchedAfter: Date, PunchedBefore: Date, Punched: boolean, ExpirationAfter: Date, ExpirationBefore: Date, Deleted: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Vouchers?Type=' + Type + '&DealerCode=' + (DealerCode == null ? '' : encodeURIComponent(DealerCode)) + '&LicenseTo=' + (LicenseTo == null ? '' : encodeURIComponent(LicenseTo)) + '&Purpose=' + (Purpose == null ? '' : encodeURIComponent(Purpose)) + '&OrderNumber=' + (OrderNumber == null ? '' : encodeURIComponent(OrderNumber)) + '&Email=' + (Email == null ? '' : encodeURIComponent(Email)) + '&ModifiedBy=' + (ModifiedBy == null ? '' : encodeURIComponent(ModifiedBy)) + '&CreatedAfter=' + CreatedAfter.toISOString() + '&CreatedBefore=' + CreatedBefore.toISOString() + '&PunchedAfter=' + PunchedAfter.toISOString() + '&PunchedBefore=' + PunchedBefore.toISOString() + '&Punched=' + Punched + '&ExpirationAfter=' + ExpirationAfter.toISOString() + '&ExpirationBefore=' + ExpirationBefore.toISOString() + '&Deleted=' + (Deleted == null ? '' : encodeURIComponent(Deleted)) + '&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a voucher
		 * No Documentation Found.
		 * Post api/v2/Vouchers
		 * @param {DealerDB.Models.Voucher} requestBody The voucher to add.
		 * @return {string} OK
		 */
		Vouchers_Post(requestBody: DealerDB.Models.Voucher, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.post(this.baseUri + 'api/v2/Vouchers', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' },  responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Delete a voucher
		 * No Documentation Found.
		 * Delete api/v2/Vouchers/{VoucherCode}
		 * @param {string} VoucherCode The voucher code of the voucher to delete.
		 * @return {void} 
		 */
		Vouchers_Delete(VoucherCode: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/Vouchers/' + (VoucherCode == null ? '' : encodeURIComponent(VoucherCode)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a voucher
		 * No Documentation Found.
		 * Get api/v2/Vouchers/{VoucherCode}
		 * @param {string} VoucherCode The voucher code of the voucher to get.
		 * @param {string} Deleted Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned.
		 * @return {DealerDB.Models.Voucher} OK
		 */
		VouchersGetByVoucherCodeAndDeleted(VoucherCode: string, Deleted: string, headersHandler?: () => {[header: string]: string}): Promise<DealerDB.Models.Voucher> {
			return Axios.get<DealerDB.Models.Voucher>(this.baseUri + 'api/v2/Vouchers/' + (VoucherCode == null ? '' : encodeURIComponent(VoucherCode)) + '&Deleted=' + (Deleted == null ? '' : encodeURIComponent(Deleted)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a voucher
		 * No Documentation Found.
		 * Put api/v2/Vouchers/{VoucherCode}
		 * @param {string} VoucherCode The voucher code of the voucher to update.
		 * @param {DealerDB.Models.Voucher} requestBody The updated voucher.
		 * @return {void} 
		 */
		Vouchers_Put(VoucherCode: string, requestBody: DealerDB.Models.Voucher, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/Vouchers/' + (VoucherCode == null ? '' : encodeURIComponent(VoucherCode)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get a voucher's history.
		 * No Documentation Found.
		 * Get api/v2/Vouchers/{VoucherCode}/VoucherHistory
		 * @param {string} VoucherCode The voucher code to get history for.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 * @return {any} OK
		 */
		Vouchers_GetVoucherHistory(VoucherCode: string, limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/Vouchers/' + (VoucherCode == null ? '' : encodeURIComponent(VoucherCode)) + '/VoucherHistory&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Activities
		 * Gets a collection of Activities. When successful, the response is a PagedResponse of Activities.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/activities
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 * @param {boolean} isIncludeDeleted Does it include deleted activity, or not
		 * @return {any} OK
		 */
		Activities_GetActivities(limit: number, offset: number, isIncludeDeleted: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/activities?limit=' + limit + '&offset=' + offset + '&isIncludeDeleted=' + isIncludeDeleted, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an Activity
		 * Creates an Activity.  The body of the POST is the Activity to create.  The ActivityID will be assigned
		 * on creation of the Activity.  When successful, the response is the ActivityID.  If unsuccessful, an
		 * appropriate ApiError is returned.
		 * Post api/v2/activities
		 * @param {BuildSystem.Shared.DTO.Activity} requestBody The activity to create.  The ActivityID will be assigned on creation of the Activity.
		 * @return {number} OK
		 */
		Activities_PostActivity(requestBody: BuildSystem.Shared.DTO.Activity, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/activities', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Mark the delete flag for the Activity
		 * Deletes an Activity. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/activities/{activityID}
		 * @param {number} activityID The id of the activity to delete
		 * @return {void} 
		 */
		Activities_DeleteActivity(activityID: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/activities/' + activityID, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get an Activity by ID
		 * Gets an Activity by ID. When successful, the response is the requested Activity.  If unsuccessful,
		 * an appropriate ApiError is returned.
		 * Get api/v2/activities/{activityID}
		 * @param {number} activityID The ID of the Activity to get.
		 * @param {boolean} isIncludeDeleted Does it include deleted activity, or not
		 * @return {BuildSystem.Shared.DTO.Activity} OK
		 */
		Activities_GetActivity(activityID: number, isIncludeDeleted: boolean, headersHandler?: () => {[header: string]: string}): Promise<BuildSystem.Shared.DTO.Activity> {
			return Axios.get<BuildSystem.Shared.DTO.Activity>(this.baseUri + 'api/v2/activities/' + activityID + '?isIncludeDeleted=' + isIncludeDeleted, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update an Activity
		 * Updates an Activity.  The body of the PUT is the updated Activity.  When successful, the response is empty.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/activities/{activityID}
		 * @param {number} activityID The id of the activity to update
		 * @param {BuildSystem.Shared.DTO.Activity} requestBody The updated activity
		 * @return {void} 
		 */
		Activities_PutActivity(activityID: number, requestBody: BuildSystem.Shared.DTO.Activity, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/activities/' + activityID, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get ActivityRuns
		 * Gets a collection of ActivityRuns. When successful, the response is a PagedResponse of ActivityRuns.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/activityRuns
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 * @param {BuildSystem.Shared.DTO.ActivityRunStatusStatus} status Optional. Filter activity runs by status.  Value should be a comma separated list of status to include.
		 *             If not specified, the default status filter is “InProgress”.
		 * @return {any} OK
		 */
		ActivityRuns_GetActivityRuns(limit: number, offset: number, status: BuildSystem.Shared.DTO.ActivityRunStatusStatus, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/activityRuns?limit=' + limit + '&offset=' + offset + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get an ActivityRun by ID
		 * Gets an ActivityRun by ID. When successful, the response is the requested ActivityRun.  If unsuccessful,
		 * an appropriate ApiError is returned.
		 * Get api/v2/activityRuns/{activityRunID}
		 * @param {number} activityRunID The ID of the ActivityRun to get.
		 * @return {BuildSystem.Shared.DTO.ActivityRun} OK
		 */
		ActivityRuns_GetActivityRun(activityRunID: number, headersHandler?: () => {[header: string]: string}): Promise<BuildSystem.Shared.DTO.ActivityRun> {
			return Axios.get<BuildSystem.Shared.DTO.ActivityRun>(this.baseUri + 'api/v2/activityRuns/' + activityRunID, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update an ActivityRun
		 * Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/activityRuns/{activityRunID}
		 * @param {number} activityRunID The ID of the ActivityRun to update ActivityRunStatus for.
		 * @param {BuildSystem.Shared.DTO.ActivityRun} requestBody The updated ActivityRun.
		 * @return {void} 
		 */
		ActivityRuns_PutActivityRun(activityRunID: number, requestBody: BuildSystem.Shared.DTO.ActivityRun, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/activityRuns/' + activityRunID, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get the ActivityRunStatus of an ActivityRun
		 * Gets the ActivityRunStatus of an ActivityRun.  When successful, the response is the requested ActivityRunStatus.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/activityRuns/{activityRunID}/status
		 * @param {number} activityRunID The ID of the ActivityRun to get ActivityRunStatus for.
		 * @return {BuildSystem.Shared.DTO.ActivityRunStatus} OK
		 */
		ActivityRuns_GetActivityRunStatus(activityRunID: number, headersHandler?: () => {[header: string]: string}): Promise<BuildSystem.Shared.DTO.ActivityRunStatus> {
			return Axios.get<BuildSystem.Shared.DTO.ActivityRunStatus>(this.baseUri + 'api/v2/activityRuns/' + activityRunID + '/status', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update the ActivityRunStatus of an ActivityRun
		 * Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/activityRuns/{activityRunID}/status
		 * @param {number} activityRunID The ID of the ActivityRun to update ActivityRunStatus for.
		 * @param {BuildSystem.Shared.DTO.ActivityRunStatus} requestBody The updated ActivityRunStatus.
		 * @return {void} 
		 */
		ActivityRuns_PutActivityRunStatus(activityRunID: number, requestBody: BuildSystem.Shared.DTO.ActivityRunStatus, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/activityRuns/' + activityRunID + '/status', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get Agents
		 * Gets a collection of Agents. When successful, the response is a PagedResponse of Agents.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/agents
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 * @return {any} OK
		 */
		Agents_GetAgents(limit: number, offset: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/agents?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an Agent
		 * Creates an Agent.  The body of the POST is the Agent to create.  The AgentID will be assigned
		 * on creation of the Agent.  When successful, the response is the AgentID.  If unsuccessful, an
		 * appropriate ApiError is returned.
		 * Post api/v2/agents
		 * @param {BuildSystem.Shared.DTO.Agent} requestBody The Agent to create.  The AgentID will be assigned on creation of the Agent.
		 * @return {number} OK
		 */
		Agents_PostAgent(requestBody: BuildSystem.Shared.DTO.Agent, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/agents', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Get Agent associated with the current user
		 * Gets the Agent associated with the current user. When successful, the response is the requested Agent.  If unsuccessful,
		 * an appropriate ApiError is returned.
		 * Get api/v2/agents/Current
		 * @return {BuildSystem.Shared.DTO.Agent} OK
		 */
		Agents_GetCurrentAgent(headersHandler?: () => {[header: string]: string}): Promise<BuildSystem.Shared.DTO.Agent> {
			return Axios.get<BuildSystem.Shared.DTO.Agent>(this.baseUri + 'api/v2/agents/Current', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get the ActivityRun of Agent associated with the current user
		 * Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
		 * assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/agents/Current/ActivityRun
		 * @return {BuildSystem.Shared.DTO.ActivityRun} OK
		 */
		Agents_GetCurrentAgentActivityRun(headersHandler?: () => {[header: string]: string}): Promise<BuildSystem.Shared.DTO.ActivityRun> {
			return Axios.get<BuildSystem.Shared.DTO.ActivityRun>(this.baseUri + 'api/v2/agents/Current/ActivityRun', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Delete an Agent
		 * Deletes an Agent. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/agents/{agentID}
		 * @param {number} agentID The id of the Agent to delete.
		 * @return {void} 
		 */
		Agents_DeleteAgent(agentID: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/agents/' + agentID, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get Agent
		 * Gets an Agent by ID. When successful, the response is the requested Agent.  If unsuccessful,
		 * an appropriate ApiError is returned.
		 * Get api/v2/agents/{agentID}
		 * @param {number} agentID The id of the Agent to get.
		 * @return {BuildSystem.Shared.DTO.Agent} OK
		 */
		Agents_GetAgent(agentID: number, headersHandler?: () => {[header: string]: string}): Promise<BuildSystem.Shared.DTO.Agent> {
			return Axios.get<BuildSystem.Shared.DTO.Agent>(this.baseUri + 'api/v2/agents/' + agentID, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update an Agent
		 * Updates an Agent.  The body of the PUT is the updated Agent.  When successful, the response is empty.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/agents/{agentID}
		 * @param {number} agentID The id of the Agent to update.
		 * @param {BuildSystem.Shared.DTO.Agent} requestBody The updated Agent
		 * @return {void} 
		 */
		Agents_PutAgent(agentID: number, requestBody: BuildSystem.Shared.DTO.Agent, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/agents/' + agentID, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get an Agent's ActivityRun
		 * Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
		 * assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/agents/{agentID}/ActivityRun
		 * @param {number} agentID The id of the Agent to get.
		 * @return {BuildSystem.Shared.DTO.ActivityRun} OK
		 */
		Agents_GetAgentActivityRun(agentID: number, headersHandler?: () => {[header: string]: string}): Promise<BuildSystem.Shared.DTO.ActivityRun> {
			return Axios.get<BuildSystem.Shared.DTO.ActivityRun>(this.baseUri + 'api/v2/agents/' + agentID + '/ActivityRun', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update the ActivityRun assigned to the Agent.
		 * No Documentation Found.
		 * Put api/v2/agents/{agentID}/ActivityRun
		 * @param {number} agentID The id of the Agent to update.
		 * @param {BuildSystem.Shared.DTO.ActivityRun} requestBody The ActivityRun assigned to the agent.  Only the ActivityRunID is used.
		 * @return {void} 
		 */
		Agents_PutAgentActivityRun(agentID: number, requestBody: BuildSystem.Shared.DTO.ActivityRun, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/agents/' + agentID + '/ActivityRun', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Update an Agent
		 * Updates the status of an Agent.The body of the PUT is the updated Agent status.  When successful,
		 * the response is empty.If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/agents/{agentID}/Status
		 * @param {number} agentID The id of the Agent to update.
		 * @param {BuildSystem.Shared.DTO.AgentStatus} requestBody The updated AgentStatus.
		 * @return {void} 
		 */
		Agents_PutAgentStatus(agentID: number, requestBody: BuildSystem.Shared.DTO.AgentStatus, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/agents/' + agentID + '/Status', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get JobRuns
		 * Gets a collection of JobRuns. When successful, the response is a PagedResponse of JobRuns.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/jobRuns
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 * @param {boolean} includeActivityRunDetails Optional. Indicates whether to include ActivityRun details.  Defaults to false.
		 * @return {any} OK
		 */
		JobRuns_GetJobRuns(limit: number, offset: number, includeActivityRunDetails: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/jobRuns?limit=' + limit + '&offset=' + offset + '&includeActivityRunDetails=' + includeActivityRunDetails, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a JobRun
		 * Creates a JobRun.  The body of the POST is the JobRun to create.  The JobRunID will be assigned on
		 * creation of the JobRun.  When successful, the response is the JobRunID.  If unsuccessful, an
		 * appropriate ApiError is returned.
		 * Post api/v2/jobRuns
		 * @param {BuildSystem.Shared.DTO.JobRun} requestBody The JobRun to create.  The JobRunID will be assigned on creation of the JobRun.
		 * @return {number} OK
		 */
		JobRuns_PostJobRun(requestBody: BuildSystem.Shared.DTO.JobRun, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/jobRuns', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete a JobRun
		 * Deletes a JobRun. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/jobRuns/{jobRunID}
		 * @param {number} jobRunID The id of the JobRun to delete
		 * @return {void} 
		 */
		JobRuns_DeleteJobRun(jobRunID: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/jobRuns/' + jobRunID, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a JobRun by ID
		 * Gets a JobRun by ID. When successful, the response is the requested JobRun.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/jobRuns/{jobRunID}
		 * @param {number} jobRunID The ID of the JobRun to get.
		 * @param {boolean} includeActivityRunDetails Optional. Indicates whether to include ActivityRun details.  Defaults to false.
		 * @return {BuildSystem.Shared.DTO.JobRun} OK
		 */
		JobRuns_GetJobRun(jobRunID: number, includeActivityRunDetails: boolean, headersHandler?: () => {[header: string]: string}): Promise<BuildSystem.Shared.DTO.JobRun> {
			return Axios.get<BuildSystem.Shared.DTO.JobRun>(this.baseUri + 'api/v2/jobRuns/' + jobRunID + '?includeActivityRunDetails=' + includeActivityRunDetails, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a JobRun
		 * ///
		 * Updates a JobRun.  The body of the PUT is the updated JobRun.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/jobRuns/{jobRunID}
		 * @param {number} jobRunID The id of the JobRun to update
		 * @param {BuildSystem.Shared.DTO.JobRun} requestBody The updated JobRun
		 * @return {void} 
		 */
		JobRuns_PutJobRun(jobRunID: number, requestBody: BuildSystem.Shared.DTO.JobRun, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/jobRuns/' + jobRunID, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get Jobs
		 * Gets a collection of Jobs. When successful, the response is a PagedResponse of Jobs.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * ///
		 * Get api/v2/jobs
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 * @param {boolean} isIncludeDeleted Does it include deleted job, or not
		 * @return {any} OK
		 */
		Jobs_GetJobs(limit: number, offset: number, isIncludeDeleted: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/jobs?limit=' + limit + '&offset=' + offset + '&isIncludeDeleted=' + isIncludeDeleted, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Job
		 * Creates a Job.  The body of the POST is the Job to create.  The JobID will be assigned on
		 * creation of the Job.  When successful, the response is the JobID.  If unsuccessful, an
		 * appropriate ApiError is returned.
		 * Post api/v2/jobs
		 * @param {BuildSystem.Shared.DTO.Job} requestBody The job to create.  The JobID will be assigned on creation of the Job.
		 * @return {number} OK
		 */
		Jobs_PostJob(requestBody: BuildSystem.Shared.DTO.Job, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/jobs', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Mark the delete flag for the Job
		 * Deletes a Job. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/jobs/{jobID}
		 * @param {number} jobID The id of the job to delete
		 * @return {void} 
		 */
		Jobs_DeleteJob(jobID: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'api/v2/jobs/' + jobID, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a Job by ID
		 * Gets a Job by ID. When successful, the response is the requested Job.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/jobs/{jobID}
		 * @param {number} jobID The ID of the Job to get.
		 * @param {boolean} isIncludeDeleted Does it include deleted job, or not
		 * @return {BuildSystem.Shared.DTO.Job} OK
		 */
		Jobs_GetJob(jobID: number, isIncludeDeleted: boolean, headersHandler?: () => {[header: string]: string}): Promise<BuildSystem.Shared.DTO.Job> {
			return Axios.get<BuildSystem.Shared.DTO.Job>(this.baseUri + 'api/v2/jobs/' + jobID + '?isIncludeDeleted=' + isIncludeDeleted, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a Job
		 * Updates a Job.  The body of the PUT is the updated Job.  When successful, the response is empty.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/jobs/{jobID}
		 * @param {number} jobID The id of the job to update
		 * @param {BuildSystem.Shared.DTO.Job} requestBody The updated job
		 * @return {void} 
		 */
		Jobs_PutJob(jobID: number, requestBody: BuildSystem.Shared.DTO.Job, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/jobs/' + jobID, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get Steps
		 * Gets a collection of Steps. When successful, the response is a PagedResponse of Steps.
		 * If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.
		 * Get api/v2/steps
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 * @param {boolean} includeDeleted Does it include deleted step, or not
		 * @return {any} OK
		 */
		Steps_GetSteps(limit: number, offset: number, includeDeleted: boolean, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse> {
			return Axios.get(this.baseUri + 'api/v2/steps?limit=' + limit + '&offset=' + offset + '&includeDeleted=' + includeDeleted, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Step
		 * No Documentation Found.
		 * Post api/v2/steps
		 * @param {BuildSystem.Shared.DTO.Step} requestBody The step to create
		 * @return {number} OK
		 */
		Steps_PostStep(requestBody: BuildSystem.Shared.DTO.Step, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return Axios.post<number>(this.baseUri + 'api/v2/steps', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Get a Step by ID
		 * Gets a Step by ID. When successful, the response is the requested Step.
		 * If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.
		 * Get api/v2/steps/{stepID}
		 * @param {number} stepID The ID of the Step to get.
		 * @param {boolean} isIncludeDeleted Does it include deleted step, or not
		 * @return {BuildSystem.Shared.DTO.Step} OK
		 */
		Steps_GetStep(stepID: number, isIncludeDeleted: boolean, headersHandler?: () => {[header: string]: string}): Promise<BuildSystem.Shared.DTO.Step> {
			return Axios.get<BuildSystem.Shared.DTO.Step>(this.baseUri + 'api/v2/steps/' + stepID + '?isIncludeDeleted=' + isIncludeDeleted, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a Step
		 * No Documentation Found.
		 * Put api/v2/steps/{stepID}
		 * @param {number} stepID The step ID of the step to update
		 * @param {BuildSystem.Shared.DTO.Step} requestBody The updated step
		 * @return {void} 
		 */
		Steps_PutStep(stepID: number, requestBody: BuildSystem.Shared.DTO.Step, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'api/v2/steps/' + stepID, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}
	}

}

