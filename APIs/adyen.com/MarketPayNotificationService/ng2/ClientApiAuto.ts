import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface AccountCloseNotification {
		content: CloseAccountResponse;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface AccountCreateNotification {
		content: CreateAccountResponse;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface AccountEvent {

		/**
		 * The event.
		 * >Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`.
		 * For more information, refer to [Verification checks](https://docs.adyen.com/marketpay/onboarding-and-verification/verification-checks).
		 */
		event: AccountEventEvent;

		/**The date on which the event will take place. */
		executionDate: Date;

		/**The reason why this event has been created. */
		reason: string;
	}

	export enum AccountEventEvent { InactivateAccount = 0, RefundNotPaidOutTransfers = 1 }

	export interface AccountHolderCreateNotification {
		content: CreateAccountHolderResponse;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface AccountHolderDetails {
		address?: ViasAddress;

		/**
		 * Each of the bank accounts associated with the account holder.
		 * > Each array entry should represent one bank account.
		 * > For comprehensive detail regarding the required `BankAccountDetail` fields, please refer to the [KYC Verification documentation](https://docs.adyen.com/marketpay/onboarding-and-verification/verification-checks).
		 */
		bankAccountDetails?: Array<BankAccountDetail>;
		businessDetails?: BusinessDetails;

		/**The email address of the account holder. */
		email: string;

		/**
		 * The phone number of the account holder provided as a single string. It will be handled as a landline phone.
		 * **Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
		 */
		fullPhoneNumber: string;
		individualDetails?: IndividualDetails;

		/**
		 * The Merchant Category Code of the account holder.
		 * > If not specified in the request, this will be derived from the platform account (which is configured by Adyen).
		 */
		merchantCategoryCode?: string;

		/**
		 * A set of key and value pairs for general use by the account holder or merchant.
		 * The keys do not have specific names and may be used for storing miscellaneous data as desired.
		 * > The values being stored have a maximum length of eighty (80) characters and will be truncated if necessary.
		 * > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
		 */
		metadata?: string;

		/**
		 * Each of the card tokens associated with the account holder.
		 * > Each array entry should represent one card token.
		 * > For comprehensive detail regarding the required `CardToken` fields, please refer to the [KYC Verification documentation](https://docs.adyen.com/marketpay/onboarding-and-verification/verification-checks).
		 */
		payoutMethods?: Array<PayoutMethod>;

		/**The URL of the website of the account holder. */
		webAddress?: string;
	}

	export interface AccountHolderPayoutNotification {
		content: AccountHolderPayoutNotificationContent;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface AccountHolderPayoutNotificationContent {

		/**The code of the account from which the payout was made. */
		accountCode: string;

		/**The code of the Account Holder to which the payout was made. */
		accountHolderCode: string;
		amount?: Amount;

		/**payout amounts (per currency) */
		amounts?: Array<Amount>;
		bankAccountDetail: BankAccountDetail;

		/**A description of the payout. */
		description?: string;

		/**Invalid fields list. */
		invalidFields?: Array<ErrorFieldType>;

		/**merchant reference */
		merchantReference?: string;
		status?: OperationStatus;
	}

	export interface AccountHolderStatus {

		/**A list of events scheduled for the account holder. */
		events: Array<AccountEvent>;
		payoutState: AccountPayoutState;
		processingState: AccountProcessingState;

		/**
		 * The status of the account holder.
		 * >Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.
		 */
		status: AccountHolderStatusStatus;

		/**The reason why the status was assigned to the account holder. */
		statusReason: string;
	}

	export enum AccountHolderStatusStatus { Active = 0, Closed = 1, Inactive = 2, Suspended = 3 }

	export interface AccountHolderStatusChangeNotification {
		content?: AccountHolderStatusChangeNotificationContent;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface AccountHolderStatusChangeNotificationContent {

		/**The code of the account holder. */
		accountHolderCode: string;

		/**in case the account holder has not been updated, contains account holder fields, that did not pass the validation. */
		invalidFields?: Array<ErrorFieldType>;
		newStatus: AccountHolderStatus;
		oldStatus: AccountHolderStatus;

		/**The reason for the status change. */
		reason: string;
	}

	export interface AccountHolderUpdateNotification {
		content: UpdateAccountHolderResponse;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface AccountHolderVerificationNotification {
		content: AccountHolderVerificationNotificationContent;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface AccountHolderVerificationNotificationContent {

		/**The code of the account holder. */
		accountHolderCode: string;

		/**The unique ID of the bank account that has been verified. */
		bankAccountUUID?: string;
		kycCheckStatusData?: KYCCheckStatusData;

		/**The code of the shareholder that has been verified. */
		shareholderCode?: string;
	}

	export interface AccountPayoutState {

		/**Indicates whether payouts are allowed. This field is the overarching payout status, and is the aggregate of multiple conditions (e.g., KYC status, disabled flag, etc). If this field is false, no payouts will be permitted for any of the account holder's accounts. If this field is true, payouts will be permitted for any of the account holder's accounts. */
		allowPayout: boolean;

		/**The reason why payouts (to all of the account holder's accounts) have been disabled (by the platform). If the `disabled` field is true, this field can be used to explain why. */
		disableReason: string;

		/**Indicates whether payouts have been disabled (by the platform) for all of the account holder's accounts. A platform may enable and disable this field at their discretion. If this field is true, `allowPayout` will be false and no payouts will be permitted for any of the account holder's accounts. If this field is false, `allowPayout` may or may not be enabled, depending on other factors. */
		disabled: boolean;

		/**The reason why payouts (to all of the account holder's accounts) have been disabled (by Adyen). If payouts have been disabled by Adyen, this field will explain why. If this field is blank, payouts have not been disabled by Adyen. */
		notAllowedReason: string;
		payoutLimit: Amount;

		/**The payout tier that the account holder occupies. */
		tierNumber: number;
	}

	export interface AccountProcessingState {

		/**The reason why processing has been disabled. */
		disableReason: string;

		/**Indicates whether the processing of payments is allowed. */
		disabled: boolean;
		processedFrom: Amount;
		processedTo: Amount;

		/**The processing tier that the account holder occupies. */
		tierNumber: number;
	}

	export interface AccountUpdateNotification {
		content: UpdateAccountResponse;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface Amount {

		/**
		 * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
		 * Max length: 3
		 * Min length: 3
		 */
		currency: string;

		/**
		 * The payable amount that can be charged for the transaction.
		 * The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
		 */
		value: number;
	}

	export interface BankAccountDetail {

		/**
		 * The bank account number (without separators).
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		accountNumber?: string;

		/**
		 * The type of bank account.
		 * Only applicable to bank accounts held in the USA.
		 * The permitted values are: `checking`, `savings`.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		accountType?: string;

		/**The name of the bank account. */
		bankAccountName?: string;

		/**Merchant reference to the bank account. */
		bankAccountReference?: string;

		/**
		 * The unique identifier (UUID) of the Bank Account.
		 * >If, during an account holder create or update request, this field is left blank (but other fields provided), a new Bank Account will be created with a procedurally-generated UUID.
		 * >If, during an account holder create request, a UUID is provided, the creation of the Bank Account will fail while the creation of the account holder will continue.
		 * >If, during an account holder update request, a UUID that is not correlated with an existing Bank Account is provided, the update of the account holder will fail.
		 * >If, during an account holder update request, a UUID that is correlated with an existing Bank Account is provided, the existing Bank Account will be updated.
		 */
		bankAccountUUID?: string;

		/**
		 * The bank identifier code.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		bankBicSwift?: string;

		/**
		 * The city in which the bank branch is located.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		bankCity?: string;

		/**
		 * The bank code of the banking institution with which the bank account is registered.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		bankCode?: string;

		/**
		 * The name of the banking institution with which the bank account is held.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		bankName?: string;

		/**
		 * The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account:
		 * * United States - Routing number
		 * * United Kingdom - Sort code
		 * * Germany - Bankleitzahl
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		branchCode?: string;

		/**
		 * The check code of the bank account.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		checkCode?: string;

		/**
		 * The two-letter country code in which the bank account is registered.
		 * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		countryCode?: string;

		/**
		 * The currency in which the bank account deals.
		 * >The permitted currency codes are defined in ISO-4217 (e.g. 'EUR').
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		currencyCode?: string;

		/**
		 * The international bank account number.
		 * >The IBAN standard is defined in ISO-13616.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		iban?: string;

		/**
		 * The city of residence of the bank account owner.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerCity?: string;

		/**
		 * The country code of the country of residence of the bank account owner.
		 * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerCountryCode?: string;

		/**
		 * The date of birth of the bank account owner.
		 */
		ownerDateOfBirth?: string;

		/**
		 * The house name or number of the residence of the bank account owner.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerHouseNumberOrName?: string;

		/**
		 * The name of the bank account owner.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerName?: string;

		/**
		 * The country code of the country of nationality of the bank account owner.
		 * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerNationality?: string;

		/**
		 * The postal code of the residence of the bank account owner.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerPostalCode?: string;

		/**
		 * The state of residence of the bank account owner.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerState?: string;

		/**
		 * The street name of the residence of the bank account owner.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerStreet?: string;

		/**If set to true, the bank account is a primary account. */
		primaryAccount?: boolean;

		/**
		 * The tax ID number.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		taxId?: string;

		/**
		 * The URL to be used for bank account verification.
		 * This may be generated on bank account creation.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		urlForVerification?: string;
	}

	export interface BeneficiarySetupNotification {
		content: BeneficiarySetupNotificationContent;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface BeneficiarySetupNotificationContent {

		/**The code of the beneficiary account. */
		destinationAccountCode: string;

		/**The code of the beneficiary Account Holder. */
		destinationAccountHolderCode: string;

		/**A listing of the invalid fields which have caused the Setup Beneficiary request to fail. If this is empty, the Setup Beneficiary request has succeeded. */
		invalidFields?: Array<ErrorFieldType>;

		/**The reference provided by the merchant. */
		merchantReference?: string;

		/**The code of the benefactor account. */
		sourceAccountCode: string;

		/**The code of the benefactor Account Holder. */
		sourceAccountHolderCode: string;

		/**The date on which the beneficiary was set up and funds transferred from benefactor to beneficiary. */
		transferDate: Date;
	}

	export interface BusinessDetails {

		/**The registered name of the company (if it differs from the legal name of the company). */
		doingBusinessAs?: string;

		/**The legal name of the company. */
		legalBusinessName?: string;

		/**The registration number of the company. */
		registrationNumber?: string;

		/**
		 * Each of the shareholders associated with the company.
		 * Each array entry should represent one shareholder.
		 */
		shareholders?: Array<ShareholderContact>;

		/**The tax ID of the company. */
		taxId?: string;
	}

	export interface CloseAccountResponse {

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;

		/**
		 * The new status of the account.
		 * >Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.
		 */
		status: CloseAccountResponseStatus;
	}

	export enum CloseAccountResponseStatus { Active = 0, Closed = 1, Inactive = 2, Suspended = 3 }

	export interface CompensateNegativeBalanceNotification {
		content?: CompensateNegativeBalanceNotificationContent;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface CompensateNegativeBalanceNotificationContent {

		/**A list of the negative balances compensated. */
		records: Array<CompensateNegativeBalanceNotificationRecord>;
	}

	export interface CompensateNegativeBalanceNotificationRecord {

		/**The code of the account whose negative balance has been compensated. */
		accountCode: string;
		amount: Amount;

		/**The date on which the compensation took place. */
		transferDate: Date;
	}

	export interface CreateAccountHolderResponse {

		/**The code of a new account created for the account holder. */
		accountCode?: string;

		/**The code of the new account holder. */
		accountHolderCode: string;
		accountHolderDetails: AccountHolderDetails;
		accountHolderStatus: AccountHolderStatus;

		/**The description of the new account holder. */
		description?: string;

		/**A list of fields that caused the `/createAccountHolder` request to fail. */
		invalidFields?: Array<ErrorFieldType>;

		/**The type of legal entity of the new account holder. */
		legalEntity: CreateAccountHolderResponseLegalEntity;

		/**The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals. */
		primaryCurrency?: string;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
		verification: KYCVerificationResult;
	}

	export enum CreateAccountHolderResponseLegalEntity { Business = 0, Individual = 1, NonProfit = 2, PublicCompany = 3 }

	export interface CreateAccountResponse {

		/**The code of the new account. */
		accountCode: string;

		/**The code of the account holder. */
		accountHolderCode: string;

		/**The description of the account. */
		description?: string;

		/**A list of fields that caused the `/createAccount` request to fail. */
		invalidFields?: Array<ErrorFieldType>;
		metadata?: string;
		payoutSchedule?: PayoutScheduleResponse;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;

		/**
		 * The status of the account.
		 * >Permitted values: `Active`.
		 */
		status: CreateAccountResponseStatus;
	}

	export enum CreateAccountResponseStatus { Active = 0, Closed = 1, Inactive = 2, Suspended = 3 }

	export interface ErrorFieldType {

		/**The validation error code. */
		errorCode?: number;

		/**A description of the validation error. */
		errorDescription?: string;
		fieldType?: FieldType;
	}

	export interface FieldType {

		/**The full name of the property. */
		field?: string;

		/**The type of the field. */
		fieldName?: FieldTypeFieldName;

		/**The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder. */
		shareholderCode?: string;
	}

	export enum FieldTypeFieldName { accountCode = 0, accountHolderCode = 1, accountHolderDetails = 2, accountNumber = 3, accountStateType = 4, accountStatus = 5, accountType = 6, address = 7, bankAccount = 8, bankAccountCode = 9, bankAccountName = 10, bankBicSwift = 11, bankCity = 12, bankCode = 13, bankName = 14, bankStatement = 15, branchCode = 16, businessContact = 17, cardToken = 18, checkCode = 19, city = 20, country = 21, countryCode = 22, currency = 23, currencyCode = 24, dateOfBirth = 25, description = 26, destinationAccountCode = 27, document = 28, documentExpirationDate = 29, documentIssuerCountry = 30, documentIssuerState = 31, documentName = 32, documentNumber = 33, documentType = 34, doingBusinessAs = 35, drivingLicence = 36, drivingLicenceBack = 37, drivingLicense = 38, email = 39, firstName = 40, fullPhoneNumber = 41, gender = 42, houseNumberOrName = 43, iban = 44, idCard = 45, idCardBack = 46, idCardFront = 47, idNumber = 48, identityDocument = 49, individualDetails = 50, lastName = 51, legalBusinessName = 52, legalEntity = 53, legalEntityType = 54, merchantCategoryCode = 55, merchantCode = 56, merchantReference = 57, microDeposit = 58, name = 59, nationality = 60, ownerCity = 61, ownerCountryCode = 62, ownerHouseNumberOrName = 63, ownerName = 64, ownerPostalCode = 65, ownerState = 66, ownerStreet = 67, passport = 68, passportNumber = 69, personalData = 70, phoneCountryCode = 71, phoneNumber = 72, postalCode = 73, primaryCurrency = 74, reason = 75, registrationNumber = 76, schedule = 77, shareholder = 78, shareholderCode = 79, socialSecurityNumber = 80, sourceAccountCode = 81, stateOrProvince = 82, status = 83, storeCode = 84, storeDetail = 85, storeReference = 86, street = 87, taxId = 88, tierNumber = 89, transferCode = 90, unknown = 91, value = 92, virtualAccount = 93, visaNumber = 94, webAddress = 95 }

	export interface IndividualDetails {
		name?: ViasName;
		personalData?: ViasPersonalData;
	}

	export interface KYCBankAccountCheckResult {

		/**The unique ID of the bank account to which the check applies. */
		bankAccountUUID: string;

		/**A list of the checks and their statuses. */
		checks: Array<KYCCheckStatusData>;
	}

	export interface KYCCheckResult {

		/**A list of the checks and their statuses. */
		checks: Array<KYCCheckStatusData>;
	}

	export interface KYCCheckStatusData {

		/**A list of the fields required for execution of the check. */
		requiredFields: Array<string>;

		/**
		 * The status of the check.
		 * >Permitted Values: `UNCHECKED`, `DATA_PROVIDED`, `PASSED`, `PENDING`, `AWAITING_DATA`, `RETRY_LIMIT_REACHED`, `INVALID_DATA`, `FAILED`.
		 */
		status: KYCCheckStatusDataStatus;
		summary: KYCCheckSummary;

		/**
		 * The type of check.
		 * >Permitted Values: `COMPANY_VERIFICATION`, `IDENTITY_VERIFICATION`, `PASSPORT_VERIFICATION`, `BANK_ACCOUNT_VERIFICATION`, `NONPROFIT_VERIFICATION`.
		 */
		type: KYCCheckStatusDataType;
	}

	export enum KYCCheckStatusDataStatus { AWAITING_DATA = 0, DATA_PROVIDED = 1, FAILED = 2, INVALID_DATA = 3, PASSED = 4, PENDING = 5, PENDING_REVIEW = 6, RETRY_LIMIT_REACHED = 7, UNCHECKED = 8 }

	export enum KYCCheckStatusDataType { BANK_ACCOUNT_VERIFICATION = 0, COMPANY_VERIFICATION = 1, IDENTITY_VERIFICATION = 2, NONPROFIT_VERIFICATION = 3, PASSPORT_VERIFICATION = 4 }

	export interface KYCCheckSummary {

		/**The code of the check. */
		kycCheckCode?: number;

		/**A description of the check. */
		kycCheckDescription?: string;
	}

	export interface KYCShareholderCheckResult {

		/**A list of the checks and their statuses. */
		checks: Array<KYCCheckStatusData>;

		/**The code of the shareholder to which the check applies. */
		shareholderCode: string;
	}

	export interface KYCVerificationResult {
		accountHolder: KYCCheckResult;

		/**The result(s) of the checks on the bank account(s). */
		bankAccounts: Array<KYCBankAccountCheckResult>;

		/**The result(s) of the checks on the shareholder(s). */
		shareholders: Array<KYCShareholderCheckResult>;
	}

	export interface Message {

		/**The message code. */
		code?: string;

		/**The message text. */
		text?: string;
	}

	export interface NotificationErrorContainer {

		/**The Adyen code that is mapped to the error message. */
		errorCode?: string;

		/**A short explanation of the issue. */
		message?: string;
	}

	export interface NotificationResponse {

		/**Set this property to **[accepted]** to acknowledge that you received a notification from Adyen. */
		notificationResponse: string;
	}

	export interface OperationStatus {
		message?: Message;

		/**The status code. */
		statusCode?: string;
	}

	export interface PaymentFailureNotification {
		content: PaymentFailureNotificationContent;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface PaymentFailureNotificationContent {

		/**Missing or invalid fields that caused the payment error. */
		errorFields: Array<ErrorFieldType>;
		errorMessage: Message;
	}

	export interface PayoutMethod {
		merchantAccount: string;
		payoutMethodCode?: string;
		payoutMethodType?: PayoutMethodPayoutMethodType;
		recurringDetailReference: string;
		shopperReference: string;
	}

	export enum PayoutMethodPayoutMethodType { CardToken = 0 }

	export interface PayoutScheduleResponse {

		/**The date of the next scheduled payout. */
		nextScheduledPayout: Date;

		/**
		 * The payout schedule of the account.
		 * >Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`.
		 */
		schedule: PayoutScheduleResponseSchedule;
	}

	export enum PayoutScheduleResponseSchedule { BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT = 0, BIWEEKLY_ON_1ST_AND_15TH_AT_NOON = 1, DAILY = 2, DAILY_6PM = 3, DEFAULT = 4, EVERY_6_HOURS_FROM_MIDNIGHT = 5, HOLD = 6, MONTHLY = 7, WEEKLY = 8, WEEKLY_ON_TUE_FRI_MIDNIGHT = 9, YEARLY = 10 }

	export interface PersonalDocumentData {

		/**
		 * The expiration date of the document.
		 * The date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).
		 */
		expirationDate?: string;

		/**
		 * The two-character country code of the issuer.
		 * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
		 * Max length: 2
		 * Min length: 2
		 */
		issuerCountry?: string;

		/**The state issued the document (if applicable) */
		issuerState?: string;

		/**The number of the document. Delete the given type if the value empty. */
		number: string;

		/**
		 * The type of the document. More then one item pert type does not allowed.
		 * Valid values: ID, PASSPORT, VISA, DRIVINGLICENSE
		 */
		type: PersonalDocumentDataType;
	}

	export enum PersonalDocumentDataType { DRIVINGLICENSE = 0, ID = 1, PASSPORT = 2, SOCIALSECURITY = 3, VISA = 4 }

	export interface RefundResult {
		originalTransaction: Transaction;

		/**The reference of the refund. */
		pspReference: string;

		/**The response indicating if the refund has been received for processing. */
		response?: string;
	}

	export interface ReportAvailableNotification {
		content: ReportAvailableNotificationContent;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface ReportAvailableNotificationContent {

		/**The code of the Account to which the report applies. */
		accountCode?: string;

		/**The type of Account to which the report applies. */
		accountType?: string;

		/**The date of the event to which the report applies. */
		eventDate?: Date;

		/**The URL at which the report can be accessed. */
		remoteAccessUrl?: string;

		/**Indicates whether the event resulted in a success. */
		success?: boolean;
	}

	export interface ScheduledRefundsNotification {
		content: ScheduledRefundsNotificationContent;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface ScheduledRefundsNotificationContent {

		/**The code of the account. */
		accountCode: string;

		/**The code of the Account Holder. */
		accountHolderCode: string;

		/**Invalid fields list. */
		invalidFields?: Array<ErrorFieldType>;
		lastPayout: Transaction;

		/**A list of the refunds that have been scheduled and their results. */
		refundResults: Array<RefundResult>;
	}

	export interface ShareholderContact {
		address?: ViasAddress;

		/**The e-mail address of the contact. */
		email?: string;

		/**
		 * The phone number of the contact provided as a single string.  It will be handled as a landline phone.
		 * **Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
		 */
		fullPhoneNumber?: string;
		name?: ViasName;
		personalData?: ViasPersonalData;
		phoneNumber?: ViasPhoneNumber;

		/**
		 * The unique identifier (UUID) of the Shareholder.
		 * >**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Shareholder will be created with a procedurally-generated UUID.**
		 * >**If, during an Account Holder create request, a UUID is provided, the creation of the Shareholder will fail while the creation of the Account Holder will continue.**
		 * >**If, during an Account Holder update request, a UUID that is not correlated with an existing Shareholder is provided, the update of the Shareholder will fail.**
		 * >**If, during an Account Holder update request, a UUID that is correlated with an existing Shareholder is provided, the existing Bank Account will be updated.**
		 */
		shareholderCode?: string;
		shareholderReference?: string;

		/**The URL of the website of the contact. */
		webAddress?: string;
	}

	export interface Transaction {
		amount?: Amount;
		bankAccountDetail?: BankAccountDetail;

		/**The merchant reference of a related capture. */
		captureMerchantReference?: string;

		/**The psp reference of a related capture. */
		capturePspReference?: string;

		/**The date on which the transaction was performed. */
		creationDate?: Date;

		/**A description of the transaction. */
		description?: string;

		/**The code of the account to which funds were credited during an outgoing fund transfer. */
		destinationAccountCode?: string;

		/**The psp reference of the related dispute. */
		disputePspReference?: string;

		/**The reason code of a dispute. */
		disputeReasonCode?: string;

		/**The merchant reference of a transaction. */
		merchantReference?: string;

		/**The psp reference of the related authorisation or transfer. */
		paymentPspReference?: string;

		/**The psp reference of the related payout. */
		payoutPspReference?: string;

		/**The psp reference of a transaction. */
		pspReference?: string;

		/**The code of the account from which funds were debited during an incoming fund transfer. */
		sourceAccountCode?: string;

		/**
		 * The status of the transaction.
		 * >Permitted values: `PendingCredit`, `CreditFailed`, `Credited`, `Converted`, `PendingDebit`, `DebitFailed`, `Debited`, `DebitReversedReceived`, `DebitedReversed`, `ChargebackReceived`, `Chargeback`, `ChargebackReversedReceived`, `ChargebackReversed`, `Payout`, `PayoutReversed`, `FundTransfer`, `PendingFundTransfer`, `ManualCorrected`.
		 */
		transactionStatus?: TransactionTransactionStatus;

		/**The transfer code of the transaction. */
		transferCode?: string;
	}

	export enum TransactionTransactionStatus { Chargeback = 0, ChargebackReceived = 1, ChargebackReversed = 2, ChargebackReversedReceived = 3, Converted = 4, CreditFailed = 5, Credited = 6, DebitFailed = 7, DebitReversedReceived = 8, Debited = 9, DebitedReversed = 10, FundTransfer = 11, ManualCorrected = 12, Payout = 13, PayoutReversed = 14, PendingCredit = 15, PendingDebit = 16, PendingFundTransfer = 17, SecondChargeback = 18, SecondChargebackReceived = 19 }

	export interface TransferFundsNotification {
		content: TransferFundsNotificationContent;
		error?: NotificationErrorContainer;

		/**The date and time when an event has been completed. */
		eventDate: Date;

		/**The event type of the notification. */
		eventType: string;

		/**The user or process that has triggered the notification. */
		executingUserKey: string;

		/**Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment. */
		live: boolean;

		/**The PSP reference of the request from which the notification originates. */
		pspReference: string;
	}

	export interface TransferFundsNotificationContent {
		amount: Amount;

		/**The code of the Account to which funds were credited. */
		destinationAccountCode: string;

		/**Invalid fields list. */
		invalidFields?: Array<ErrorFieldType>;

		/**The reference provided by the merchant. */
		merchantReference?: string;

		/**The code of the Account from which funds were debited. */
		sourceAccountCode: string;
		status?: OperationStatus;

		/**The transfer code. */
		transferCode: string;
	}

	export interface UpdateAccountHolderResponse {

		/**The code of the account holder. */
		accountHolderCode?: string;
		accountHolderDetails?: AccountHolderDetails;
		accountHolderStatus: AccountHolderStatus;

		/**The description of the account holder. */
		description?: string;

		/**in case the account holder has not been updated, contains account holder fields, that did not pass the validation. */
		invalidFields?: Array<ErrorFieldType>;

		/**The legal entity of the account holder. */
		legalEntity: UpdateAccountHolderResponseLegalEntity;

		/**The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals. */
		primaryCurrency?: string;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
		verification: KYCVerificationResult;
	}

	export enum UpdateAccountHolderResponseLegalEntity { Business = 0, Individual = 1, NonProfit = 2, PublicCompany = 3 }

	export interface UpdateAccountResponse {

		/**The code of the account. */
		accountCode: string;

		/**The description of the account. */
		description?: string;

		/**A list of fields that caused the `/updateAccount` request to fail. */
		invalidFields?: Array<ErrorFieldType>;
		metadata?: string;
		payoutSchedule: PayoutScheduleResponse;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
	}

	export interface ViasAddress {

		/**
		 * The name of the city.
		 * >Required if either `houseNumberOrName`, `street`, `postalCode`, or `stateOrProvince` are provided.
		 */
		city?: string;

		/**
		 * The two-character country code of the address. The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
		 * > If you don't know the country or are not collecting the country from the shopper, provide `countryCode` as `ZZ`.
		 */
		country: string;

		/**The number or name of the house. */
		houseNumberOrName?: string;

		/**
		 * The postal code.
		 * >A maximum of five (5) digits for an address in the USA, or a maximum of ten (10) characters for an address in all other countries.
		 * >Required if either `houseNumberOrName`, `street`, `city`, or `stateOrProvince` are provided.
		 */
		postalCode?: string;

		/**
		 * The abbreviation of the state or province.
		 * >Two (2) characters for an address in the USA or Canada, or a maximum of three (3) characters for an address in all other countries.
		 * >Required for an address in the USA or Canada if either `houseNumberOrName`, `street`, `city`, or `postalCode` are provided.
		 */
		stateOrProvince?: string;

		/**
		 * The name of the street.
		 * >The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.
		 * >Required if either `houseNumberOrName`, `city`, `postalCode`, or `stateOrProvince` are provided.
		 */
		street?: string;
	}

	export interface ViasName {

		/**The first name. */
		firstName: string;

		/**
		 * The gender.
		 * >The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.
		 * Max length: 1
		 * Min length: 1
		 */
		gender: ViasNameGender;

		/**
		 * The name's infix, if applicable.
		 * >A maximum length of twenty (20) characters is imposed.
		 */
		infix?: string;

		/**The last name. */
		lastName: string;
	}

	export enum ViasNameGender { MALE = 0, FEMALE = 1, UNKNOWN = 2 }

	export interface ViasPersonalData {

		/**
		 * The date of birth of the person.
		 * The date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).
		 */
		dateOfBirth?: string;

		/**Key value pairs of document type and identify numbers */
		documentData?: Array<PersonalDocumentData>;

		/**
		 * The nationality of the person represented by a two-character country code.
		 * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
		 * Max length: 2
		 * Min length: 2
		 */
		nationality?: string;
	}

	export interface ViasPhoneNumber {

		/**
		 * The two-character country code of the phone number.
		 * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
		 */
		phoneCountryCode: string;

		/**
		 * The phone number.
		 * >The inclusion of the phone number country code is not necessary.
		 */
		phoneNumber: string;

		/**
		 * The type of the phone number.
		 * >The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`.
		 */
		phoneType?: ViasPhoneNumberPhoneType;
	}

	export enum ViasPhoneNumberPhoneType { Fax = 0, Landline = 1, Mobile = 2, SIP = 3 }

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Triggered upon the closure of an account.
		 * This notification is sent when an account has been closed.
		 * Post ACCOUNT_CLOSED
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		ACCOUNT_CLOSEDPost(requestBody: AccountCloseNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'ACCOUNT_CLOSED', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggered upon the creation of an account.
		 * This notification is sent when an account has been created.
		 * Post ACCOUNT_CREATED
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		ACCOUNT_CREATEDPost(requestBody: AccountCreateNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'ACCOUNT_CREATED', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggered upon the creation of an account holder.
		 * This notification is sent when an account holder has been created.
		 * Post ACCOUNT_HOLDER_CREATED
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		ACCOUNT_HOLDER_CREATEDPost(requestBody: AccountHolderCreateNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'ACCOUNT_HOLDER_CREATED', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggered upon a payout to an account holder.
		 * This notification is sent when a payout request to an account holder has been processed and the payout has been scheduled.
		 * Post ACCOUNT_HOLDER_PAYOUT
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		ACCOUNT_HOLDER_PAYOUTPost(requestBody: AccountHolderPayoutNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'ACCOUNT_HOLDER_PAYOUT', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggered upon the status change of an account holder.
		 * This notification is sent when the status of an account holder has been changed.
		 * Post ACCOUNT_HOLDER_STATUS_CHANGE
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		ACCOUNT_HOLDER_STATUS_CHANGEPost(requestBody: AccountHolderStatusChangeNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'ACCOUNT_HOLDER_STATUS_CHANGE', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggered upon the update of an account holder.
		 * This notification is sent when an account holder has been updated.
		 * Post ACCOUNT_HOLDER_UPDATED
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		ACCOUNT_HOLDER_UPDATEDPost(requestBody: AccountHolderUpdateNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'ACCOUNT_HOLDER_UPDATED', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggered upon the receipt of KYC Verification results.
		 * This notification is sent when KYC Verification results are made available.
		 * Post ACCOUNT_HOLDER_VERIFICATION
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		ACCOUNT_HOLDER_VERIFICATIONPost(requestBody: AccountHolderVerificationNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'ACCOUNT_HOLDER_VERIFICATION', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggered upon the update of an account.
		 * This notification is sent when an account has been updated.
		 * Post ACCOUNT_UPDATED
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		ACCOUNT_UPDATEDPost(requestBody: AccountUpdateNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'ACCOUNT_UPDATED', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggered upon the setup of a beneficiary.
		 * This notification is sent when a benefactor/beneficiary relationship between accounts has been set up.
		 * Post BENEFICIARY_SETUP
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		BENEFICIARY_SETUPPost(requestBody: BeneficiarySetupNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'BENEFICIARY_SETUP', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggered upon the compensation of negative account balances.
		 * This notification is sent when funds have been transferred from the Marketplace's liable account to an overdrawn account in order to compensate for the overdraft.
		 * Post COMPENSATE_NEGATIVE_BALANCE
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		COMPENSATE_NEGATIVE_BALANCEPost(requestBody: CompensateNegativeBalanceNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'COMPENSATE_NEGATIVE_BALANCE', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggered upon an account payment failure.
		 * This notification is sent when a payment to an account has failed. In these cases, the funds which were meant for the account are redirected to the Marketplace's liable account.
		 * Post PAYMENT_FAILURE
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		PAYMENT_FAILUREPost(requestBody: PaymentFailureNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'PAYMENT_FAILURE', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggered when a report is made available.
		 * This notification is sent when a report has been made available.
		 * Post REPORT_AVAILABLE
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		REPORT_AVAILABLEPost(requestBody: ReportAvailableNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'REPORT_AVAILABLE', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggered upon the scheduling of refunds requested by a 'Refund Transfers Not Paid Out' call.
		 * This notification is sent when a 'Refund Transfers Not Paid Out' call has been processed and the associated refunds have been scheduled.
		 * Post SCHEDULED_REFUNDS
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		SCHEDULED_REFUNDSPost(requestBody: ScheduledRefundsNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'SCHEDULED_REFUNDS', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggered upon the transfer of funds between accounts.
		 * This notification is sent when the funds from an account have been transferred to another account.
		 * Post TRANSFER_FUNDS
		 * @return {NotificationResponse} OK - the request has succeeded.
		 */
		TRANSFER_FUNDSPost(requestBody: TransferFundsNotification, headersHandler?: () => HttpHeaders): Observable<NotificationResponse> {
			return this.http.post<NotificationResponse>(this.baseUri + 'TRANSFER_FUNDS', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

