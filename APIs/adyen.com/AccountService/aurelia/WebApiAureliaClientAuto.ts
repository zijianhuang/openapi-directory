import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface Account {

		/**The code of the account. */
		accountCode?: string;

		/**The beneficiary of the account. */
		beneficiaryAccount?: string;

		/**The reason that a beneficiary has been set up for this account. This may have been supplied during the setup of a beneficiary at the discretion of the executing user. */
		beneficiaryMerchantReference?: string;

		/**A description of the account. */
		description?: string;

		/**
		 * A set of key and value pairs for general use by the merchant.
		 * The keys do not have specific names and may be used for storing miscellaneous data as desired.
		 * > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
		 */
		metadata?: string;
		payoutSchedule?: PayoutScheduleResponse;

		/**The status of the account. Possible values: `Active`, `Inactive`, `Suspended`, `Closed`. */
		status?: string;
	}

	export interface AccountEvent {

		/**
		 * The event.
		 * >Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`.
		 * For more information, refer to [Verification checks](https://docs.adyen.com/developers/marketpay/onboarding-and-verification/verification-checks).
		 */
		event: AccountEventEvent;

		/**The date on which the event will take place. */
		executionDate: Date;

		/**The reason why this event has been created. */
		reason: string;
	}

	export enum AccountEventEvent { InactivateAccount = 0, RefundNotPaidOutTransfers = 1 }

	export interface AccountHolderDetails {
		address?: ViasAddress;

		/**
		 * Each of the bank accounts associated with the account holder.
		 * > Each array entry should represent one bank account.
		 * > For comprehensive detail regarding the required `BankAccountDetail` fields, please refer to the [KYC Verification documentation](https://docs.adyen.com/developers/marketpay/onboarding-and-verification/verification-checks).
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
		 * > For comprehensive detail regarding the required `CardToken` fields, please refer to the [KYC Verification documentation](https://docs.adyen.com/developers/marketpay/onboarding-and-verification/verification-checks).
		 */
		payoutInstrumentTokens?: Array<PayoutInstrumentToken>;

		/**The URL of the website of the account holder. */
		webAddress?: string;
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

	export interface Amount {

		/**
		 * The three-character [ISO currency code](https://docs.adyen.com/developers/development-resources/currency-codes).
		 * Max length: 3
		 * Min length: 3
		 */
		currency: string;

		/**
		 * The payable amount that can be charged for the transaction.
		 * The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/developers/development-resources/currency-codes).
		 */
		value: number;
	}

	export interface BankAccountDetail {

		/**
		 * The bank account number (without separators).
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		accountNumber?: string;

		/**
		 * The type of bank account.
		 * Only applicable to bank accounts held in the USA.
		 * The permitted values are: `checking`, `savings`.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
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
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		bankBicSwift?: string;

		/**
		 * The city in which the bank branch is located.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		bankCity?: string;

		/**
		 * The bank code of the banking institution with which the bank account is registered.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		bankCode?: string;

		/**
		 * The name of the banking institution with which the bank account is held.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		bankName?: string;

		/**
		 * The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account:
		 * * United States - Routing number
		 * * United Kingdom - Sort code
		 * * Germany - Bankleitzahl
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		branchCode?: string;

		/**
		 * The check code of the bank account.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		checkCode?: string;

		/**
		 * The two-letter country code in which the bank account is registered.
		 * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		countryCode?: string;

		/**
		 * The currency in which the bank account deals.
		 * >The permitted currency codes are defined in ISO-4217 (e.g. 'EUR').
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		currencyCode?: string;

		/**
		 * The international bank account number.
		 * >The IBAN standard is defined in ISO-13616.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		iban?: string;

		/**
		 * The city of residence of the bank account owner.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerCity?: string;

		/**
		 * The country code of the country of residence of the bank account owner.
		 * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerCountryCode?: string;

		/**
		 * The date of birth of the bank account owner.
		 */
		ownerDateOfBirth?: string;

		/**
		 * The house name or number of the residence of the bank account owner.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerHouseNumberOrName?: string;

		/**
		 * The name of the bank account owner.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerName?: string;

		/**
		 * The country code of the country of nationality of the bank account owner.
		 * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerNationality?: string;

		/**
		 * The postal code of the residence of the bank account owner.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerPostalCode?: string;

		/**
		 * The state of residence of the bank account owner.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerState?: string;

		/**
		 * The street name of the residence of the bank account owner.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		ownerStreet?: string;

		/**If set to true, the bank account is a primary account. */
		primaryAccount?: boolean;

		/**
		 * The tax ID number.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		taxId?: string;

		/**
		 * The URL to be used for bank account verification.
		 * This may be generated on bank account creation.
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on field requirements.
		 */
		urlForVerification?: string;
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

	export interface CloseAccountHolderRequest {

		/**The code of the Account Holder to be closed. */
		accountHolderCode: string;
	}

	export interface CloseAccountHolderResponse {
		accountHolderStatus: AccountHolderStatus;

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
	}

	export interface CloseAccountRequest {

		/**The code of account to be closed. */
		accountCode: string;
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

	export interface CreateAccountHolderRequest {

		/**
		 * The desired code of the prospective account holder.
		 * > Must be between three (3) and fifty (50) characters long. Only letters, digits, and hyphens (-) are permitted.
		 */
		accountHolderCode: string;
		accountHolderDetails: AccountHolderDetails;

		/**
		 * If set to true, an account with the default options is created for this account holder.
		 * **Default Value:** true
		 */
		createDefaultAccount?: boolean;

		/**A description of the prospective account holder. */
		description?: string;

		/**
		 * The entity type.
		 * Permitted values: `Business`, `Individual`
		 * If an account holder is 'Business', then `accountHolderDetails.businessDetails` must be provided, as well as at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.
		 * If an account holder is 'Individual', then `accountHolderDetails.individualDetails` must be provided.
		 */
		legalEntity: CreateAccountHolderRequestLegalEntity;

		/**The three-character [ISO currency code](https://docs.adyen.com/developers/development-resources/currency-codes), with which the prospective account holder primarily deals. */
		primaryCurrency?: string;

		/**The starting [processing tier](https://docs.adyen.com/developers/marketpay/onboarding-and-verification/verification-checks#tiers) for the prospective account holder. */
		processingTier?: number;
	}

	export enum CreateAccountHolderRequestLegalEntity { Business = 0, Individual = 1, NonProfit = 2, PublicCompany = 3 }

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

		/**The three-character [ISO currency code](https://docs.adyen.com/developers/development-resources/currency-codes), with which the prospective account holder primarily deals. */
		primaryCurrency?: string;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
		verification: KYCVerificationResult;
	}

	export enum CreateAccountHolderResponseLegalEntity { Business = 0, Individual = 1, NonProfit = 2, PublicCompany = 3 }

	export interface CreateAccountRequest {

		/**The code of Account Holder under which to create the account. */
		accountHolderCode: string;

		/**A description of the account. */
		description: string;

		/**
		 * A set of key and value pairs for general use by the merchant.
		 * The keys do not have specific names and may be used for storing miscellaneous data as desired.
		 * > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
		 */
		metadata?: string;

		/**
		 * The payout schedule of the prospective account.
		 * >Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`.
		 */
		payoutSchedule: CreateAccountRequestPayoutSchedule;

		/**
		 * The reason for the payout schedule choice.
		 * >Required if the payoutSchedule is `HOLD`.
		 */
		payoutScheduleReason: string;
	}

	export enum CreateAccountRequestPayoutSchedule { BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT = 0, BIWEEKLY_ON_1ST_AND_15TH_AT_NOON = 1, DAILY = 2, DAILY_6PM = 3, DEFAULT = 4, EVERY_6_HOURS_FROM_MIDNIGHT = 5, HOLD = 6, MONTHLY = 7, WEEKLY = 8, WEEKLY_ON_TUE_FRI_MIDNIGHT = 9, YEARLY = 10 }

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

	export interface DeleteBankAccountRequest {

		/**The code of the Account Holder from which to delete the Bank Account(s). */
		accountHolderCode: string;

		/**The code(s) of the Bank Accounts to be deleted. */
		bankAccountUUIDs: Array<string>;
	}

	export interface DeletePayoutInstrumentTokenRequest {

		/**The code of the account holder, from which to delete the payout instrument tokens. */
		accountHolderCode: string;

		/**The codes of the payout instrument tokens to be deleted. */
		payoutInstrumentTokenCodes: Array<string>;
	}

	export interface DeleteShareholderRequest {

		/**The code of the Account Holder from which to delete the Shareholders. */
		accountHolderCode: string;

		/**The code(s) of the Shareholders to be deleted. */
		shareholderCodes: Array<string>;
	}

	export interface DocumentDetail {

		/**The code of account holder, to which the document applies. */
		accountHolderCode: string;

		/**
		 * The unique ID of the Bank Account to which the document applies.
		 * >Required if the documentType is `BANK_STATEMENT` (i.e., a document is being submitted in order to verify a bank account).
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on when a document should be submitted in order to verify a bank account.
		 */
		bankAccountUUID?: string;

		/**Description of the document. */
		description?: string;

		/**
		 * The type of a document. Permitted values:
		 * * `BANK_STATEMENT` denotes an image containing a bank statement or other document proving ownership of a specific bank account.
		 * * `PASSPORT` denotes an image containing the identity page(s) of a passport.
		 * * `ID_CARD` denotes an image containing both the front and back of the ID card.
		 * * `ID_CARD_FRONT` denotes an image containing only the front of the ID card. In order for a document to be usable, both the `ID_CARD_FRONT` and `ID_CARD_BACK` must be submitted.
		 * * `ID_CARD_BACK` denotes an image containing only the back of the ID card. In order for a document to be usable, both the `ID_CARD_FRONT` and `ID_CARD_BACK` must be submitted.
		 * * `DRIVING_LICENCE_FRONT` denotes an image containing only the front of the driving licence. In order for a document to be usable, both the `DRIVING_LICENCE_FRONT` and `DRIVING_LICENCE_BACK` must be submitted.
		 * * `DRIVING_LICENCE_BACK` denotes an image containing only the back of the driving licence. In order for a document to be usable, both the `DRIVING_LICENCE_FRONT` and `DRIVING_LICENCE_FRONT` must be submitted.
		 * >Please refer to [Verification checks](https://docs.adyen.com/developers/marketpay/onboarding-and-verification/verification-checks) for details on when each document type should be submitted.
		 */
		documentType: DocumentDetailDocumentType;

		/**Filename of the document. */
		filename: string;

		/**
		 * The code of the shareholder, to which the document applies.
		 * >Required if the account holder referred to by the `accountHolderCode` has a `legalEntity` of type `Business` and the `documentType` is either `PASSPORT`, `ID_CARD`, `ID_CARD_FRONT`, `ID_CARD_BACK`, `DRIVING_LICENCE_FRONT`, `DRIVING_LICENCE_BACK` (i.e. a document is being submitted in order to verify a shareholder).
		 * >Refer to the [Onboarding and verification](https://docs.adyen.com/developers/marketpay/onboarding-and-verification) section for details on when a document should be submitted in order to verify a shareholder.
		 */
		shareholderCode?: string;
	}

	export enum DocumentDetailDocumentType { BANK_STATEMENT = 0, BSN = 1, DRIVING_LICENCE = 2, DRIVING_LICENCE_BACK = 3, DRIVING_LICENCE_FRONT = 4, ID_CARD = 5, ID_CARD_BACK = 6, ID_CARD_FRONT = 7, NHIS = 8, PASSPORT = 9, SSN = 10 }

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

	export enum FieldTypeFieldName { accountCode = 0, accountHolderCode = 1, accountHolderDetails = 2, accountNumber = 3, accountStateType = 4, accountStatus = 5, accountType = 6, address = 7, bankAccount = 8, bankAccountCode = 9, bankAccountName = 10, bankBicSwift = 11, bankCity = 12, bankCode = 13, bankName = 14, bankStatement = 15, branchCode = 16, businessContact = 17, cardToken = 18, checkCode = 19, city = 20, country = 21, countryCode = 22, currency = 23, currencyCode = 24, dateOfBirth = 25, description = 26, destinationAccountCode = 27, document = 28, documentExpirationDate = 29, documentIssuerCountry = 30, documentIssuerState = 31, documentName = 32, documentNumber = 33, documentType = 34, doingBusinessAs = 35, drivingLicence = 36, drivingLicenceBack = 37, drivingLicense = 38, email = 39, firstName = 40, fullPhoneNumber = 41, gender = 42, houseNumberOrName = 43, iban = 44, idCard = 45, idCardBack = 46, idCardFront = 47, idNumber = 48, identityDocument = 49, individualDetails = 50, lastName = 51, legalBusinessName = 52, legalEntity = 53, legalEntityType = 54, merchantCategoryCode = 55, merchantReference = 56, microDeposit = 57, name = 58, nationality = 59, ownerCity = 60, ownerCountryCode = 61, ownerHouseNumberOrName = 62, ownerName = 63, ownerPostalCode = 64, ownerState = 65, ownerStreet = 66, passport = 67, passportNumber = 68, personalData = 69, phoneCountryCode = 70, phoneNumber = 71, postalCode = 72, primaryCurrency = 73, reason = 74, registrationNumber = 75, schedule = 76, shareholder = 77, shareholderCode = 78, socialSecurityNumber = 79, sourceAccountCode = 80, stateOrProvince = 81, street = 82, taxId = 83, tierNumber = 84, transferCode = 85, unknown = 86, value = 87, virtualAccount = 88, visaNumber = 89, webAddress = 90 }

	export interface GenericResponse {

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
	}

	export interface GetAccountHolderRequest {

		/**
		 * The code of the account of which to retrieve the details.
		 * > Required if no `accountHolderCode` is provided.
		 */
		accountCode?: string;

		/**
		 * The code of the account holder of which to retrieve the details.
		 * > Required if no `accountCode` is provided.
		 */
		accountHolderCode?: string;

		/**True if the request should return the account holder details */
		showDetails?: boolean;
	}

	export interface GetAccountHolderResponse {

		/**The code of the account holder. */
		accountHolderCode: string;
		accountHolderDetails: AccountHolderDetails;
		accountHolderStatus: AccountHolderStatus;

		/**A list of the accounts under the account holder. */
		accounts?: Array<Account>;

		/**The description of the account holder. */
		description?: string;

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The legal entity of the account holder. */
		legalEntity: GetAccountHolderResponseLegalEntity;

		/**The three-character [ISO currency code](https://docs.adyen.com/developers/development-resources/currency-codes), with which the prospective account holder primarily deals. */
		primaryCurrency?: string;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
		verification: KYCVerificationResult;
	}

	export enum GetAccountHolderResponseLegalEntity { Business = 0, Individual = 1, NonProfit = 2, PublicCompany = 3 }

	export interface GetAccountHolderStatusResponse {

		/**The code of the Account Holder. */
		accountHolderCode: string;
		accountHolderStatus: AccountHolderStatus;

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
	}

	export interface GetUploadedDocumentsRequest {

		/**The code of the Account Holder for which to retrieve the documents. */
		accountHolderCode: string;

		/**The code of the Bank Account for which to retrieve the documents. */
		bankAccountUUID?: string;

		/**The code of the Shareholder for which to retrieve the documents. */
		shareholderCode?: string;
	}

	export interface GetUploadedDocumentsResponse {

		/**A list of the documents and their details. */
		documentDetails?: Array<DocumentDetail>;

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
	}

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

	export interface PayoutInstrumentToken {
		merchantAccount: string;
		payoutInstrumentTokenCode?: string;
		payoutInstrumentTokenType?: PayoutInstrumentTokenPayoutInstrumentTokenType;
		recurringDetailReference: string;
		shopperReference: string;
	}

	export enum PayoutInstrumentTokenPayoutInstrumentTokenType { CardToken = 0 }

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

	export interface PerformVerificationRequest {

		/**The code of the account holder to verify. */
		accountHolderCode: string;

		/**
		 * The state required for the account holder.
		 * > Permitted values: `Processing`, `Payout`.
		 */
		accountStateType: PerformVerificationRequestAccountStateType;

		/**The tier required for the account holder. */
		tier: number;
	}

	export enum PerformVerificationRequestAccountStateType { LimitedPayout = 0, LimitedProcessing = 1, LimitlessPayout = 2, LimitlessProcessing = 3, Payout = 4, Processing = 5 }

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

	export interface SuspendAccountHolderRequest {

		/**The code of the account holder to be suspended. */
		accountHolderCode: string;
	}

	export interface SuspendAccountHolderResponse {
		accountHolderStatus: AccountHolderStatus;

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
	}

	export interface UnSuspendAccountHolderRequest {

		/**The code of the account holder to be reinstated. */
		accountHolderCode: string;
	}

	export interface UnSuspendAccountHolderResponse {
		accountHolderStatus: AccountHolderStatus;

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
	}

	export interface UpdateAccountHolderRequest {

		/**The code of the Account Holder to be updated. */
		accountHolderCode: string;
		accountHolderDetails?: AccountHolderDetails;

		/**The description to which the Account Holder should be updated. */
		description?: string;

		/**
		 * The entity type.
		 * Permitted values: `Business`, `Individual`
		 * If an account holder is 'Business', then `accountHolderDetails.businessDetails` must be provided, as well as at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.
		 * If an account holder is 'Individual', then `accountHolderDetails.individualDetails` must be provided.
		 */
		legalEntity?: UpdateAccountHolderRequestLegalEntity;

		/**The primary three-character [ISO currency code](https://docs.adyen.com/developers/development-resources/currency-codes), to which the account holder should be updated. */
		primaryCurrency?: string;

		/**
		 * The processing tier to which the Account Holder should be updated.
		 * >The processing tier can not be lowered through this request.
		 * >Required if accountHolderDetails are not provided.
		 */
		processingTier?: number;
	}

	export enum UpdateAccountHolderRequestLegalEntity { Business = 0, Individual = 1, NonProfit = 2, PublicCompany = 3 }

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

		/**The three-character [ISO currency code](https://docs.adyen.com/developers/development-resources/currency-codes), with which the prospective account holder primarily deals. */
		primaryCurrency?: string;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
		verification: KYCVerificationResult;
	}

	export enum UpdateAccountHolderResponseLegalEntity { Business = 0, Individual = 1, NonProfit = 2, PublicCompany = 3 }

	export interface UpdateAccountHolderStateRequest {

		/**The code of the Account Holder on which to update the state. */
		accountHolderCode: string;

		/**If true, disable the requested state.  If false, enable the requested state. */
		disable: boolean;

		/**
		 * The reason that the state is being updated.
		 * >Required if the state is being disabled.
		 */
		reason?: string;

		/**
		 * The state to be updated.
		 * >Permitted values are: `Processing`, `Payout`
		 */
		stateType: UpdateAccountHolderStateRequestStateType;
	}

	export enum UpdateAccountHolderStateRequestStateType { LimitedPayout = 0, LimitedProcessing = 1, LimitlessPayout = 2, LimitlessProcessing = 3, Payout = 4, Processing = 5 }

	export interface UpdateAccountRequest {

		/**The code of the account to update. */
		accountCode: string;

		/**A description of the account. */
		description?: string;

		/**
		 * A set of key and value pairs for general use by the merchant.
		 * The keys do not have specific names and may be used for storing miscellaneous data as desired.
		 * > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
		 */
		metadata?: string;
		payoutSchedule?: UpdatePayoutScheduleRequest;
	}

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

	export interface UpdatePayoutScheduleRequest {

		/**
		 * Direction on how to handle any payouts that have already been scheduled.
		 * Permitted values:
		 * * `CLOSE` will close the existing batch of payouts.
		 * * `UPDATE` will reschedule the existing batch to the new schedule.
		 * * `NOTHING` (**default**) will allow the payout to proceed.
		 */
		action?: UpdatePayoutScheduleRequestAction;

		/**
		 * The reason for the payout schedule update.
		 * > This field is required when the `schedule` parameter is set to `HOLD`.
		 */
		reason?: string;

		/**
		 * The payout schedule to which the account is to be updated.
		 * Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`.
		 * `HOLD` will prevent scheduled payouts from happening but will still allow manual payouts to occur.
		 */
		schedule: UpdatePayoutScheduleRequestSchedule;
	}

	export enum UpdatePayoutScheduleRequestAction { CLOSE = 0, NOTHING = 1, UPDATE = 2 }

	export enum UpdatePayoutScheduleRequestSchedule { BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT = 0, BIWEEKLY_ON_1ST_AND_15TH_AT_NOON = 1, DAILY = 2, DAILY_6PM = 3, DEFAULT = 4, EVERY_6_HOURS_FROM_MIDNIGHT = 5, HOLD = 6, MONTHLY = 7, WEEKLY = 8, WEEKLY_ON_TUE_FRI_MIDNIGHT = 9, YEARLY = 10 }

	export interface UploadDocumentRequest {

		/**
		 * The content of the document as represented by a Base64-encoded string.
		 * To learn about requirements, see [Bank account check](https://docs.adyen.com/developers/marketpay/onboarding-and-verification/verification-checks/bank-account-check#requirements) and [Photo ID check](https://docs.adyen.com/developers/marketpay/onboarding-and-verification/verification-checks/photo-id-check#requirements).
		 */
		documentContent: string;
		documentDetail: DocumentDetail;
	}

	export interface ViasAddress {

		/**
		 * The name of the city.
		 * >Required if either houseNumberOrName, street, postalCode, or stateOrProvince are provided.
		 */
		city?: string;

		/**
		 * The two-character country code of the address
		 * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
		 */
		country: string;

		/**The number or name of the house. */
		houseNumberOrName?: string;

		/**
		 * The postal code.
		 * >A maximum of five (5) digits for an address in the USA, or a maximum of ten (10) characters for an address in all other countries.
		 * >Required if either houseNumberOrName, street, city, or stateOrProvince are provided.
		 */
		postalCode?: string;

		/**
		 * The abbreviation of the state or province.
		 * >Two (2) characters for an address in the USA or Canada, or a maximum of three (3) characters for an address in all other countries.
		 * >Required for an address in the USA or Canada if either houseNumberOrName, street, city, or postalCode are provided.
		 */
		stateOrProvince?: string;

		/**
		 * The name of the street.
		 * >The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.
		 * >Required if either houseNumberOrName, city, postalCode, or stateOrProvince are provided.
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

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Close an existing account under an account holder.
		 * This endpoint is used to close an existing account under an account holder. If an account is closed, it may not process transactions or have its funds paid out,and it may not be reopened. Any payments made to a closed account will be directed to the merchant's liable account.
		 * Post closeAccount
		 * @return {CloseAccountResponse} OK - the request has succeeded.
		 */
		CloseAccountPost(requestBody: CloseAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<CloseAccountResponse> {
			return this.http.post('closeAccount', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Close an existing account holder.
		 * This endpoint is used to close an existing account holder and its accounts. If an account holder is closed, it may not process transactions or pay out funds, and it may not be reopened. Any payments made to a closed account will be directed to the merchant's liable account.
		 * Post closeAccountHolder
		 * @return {CloseAccountHolderResponse} OK - the request has succeeded.
		 */
		CloseAccountHolderPost(requestBody: CloseAccountHolderRequest, headersHandler?: () => {[header: string]: string}): Promise<CloseAccountHolderResponse> {
			return this.http.post('closeAccountHolder', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Create a new account under an existing account holder.
		 * This endpoint is used to create an account under an existing account holder. An account holder may have multiple accounts.
		 * Post createAccount
		 * @return {CreateAccountResponse} OK - the request has succeeded.
		 */
		CreateAccountPost(requestBody: CreateAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateAccountResponse> {
			return this.http.post('createAccount', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Create a new account holder.
		 * This endpoint is used to create an account holder. Each account holder represents a single sub-merchant, and each sub-merchant must be represented by an account holder. Depending on the legal entity type, different details are required to be provided in the call to this endpoint.
		 * Post createAccountHolder
		 * @return {CreateAccountHolderResponse} OK - the request has succeeded.
		 */
		CreateAccountHolderPost(requestBody: CreateAccountHolderRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateAccountHolderResponse> {
			return this.http.post('createAccountHolder', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Delete bank accounts of an existing account holder.
		 * This endpoint is used to delete existing bank accounts from an account holder. For this, pass the `accountHolderCode` you got on the account holder creation, and one or more `bankAccountUUIDs` specifying bank accounts to delete.
		 * Post deleteBankAccounts
		 * @return {GenericResponse} OK - the request has succeeded.
		 */
		DeleteBankAccountsPost(requestBody: DeleteBankAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<GenericResponse> {
			return this.http.post('deleteBankAccounts', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Delete payout instrument tokens of an existing account holder.
		 * This endpoint is used to delete existing payout instrument tokens from an account holder. For this, pass the `accountHolderCode` you got on the account holder creation, and one or more `payoutInstrumentTokenCodes` specifying payout instrument tokens to delete.
		 * Post deletePayoutInstrumentTokens
		 * @return {GenericResponse} OK - the request has succeeded.
		 */
		DeletePayoutInstrumentTokensPost(requestBody: DeletePayoutInstrumentTokenRequest, headersHandler?: () => {[header: string]: string}): Promise<GenericResponse> {
			return this.http.post('deletePayoutInstrumentTokens', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Delete shareholders of an existing account holder.
		 * This endpoint is used to delete existing shareholders from an account holder.
		 * Post deleteShareholders
		 * @return {GenericResponse} OK - the request has succeeded.
		 */
		DeleteShareholdersPost(requestBody: DeleteShareholderRequest, headersHandler?: () => {[header: string]: string}): Promise<GenericResponse> {
			return this.http.post('deleteShareholders', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Retrieve the details of an account holder.
		 * This endpoint is used to retrieve the details of an account holder.
		 * Post getAccountHolder
		 * @return {GetAccountHolderResponse} OK - the request has succeeded.
		 */
		GetAccountHolderPost(requestBody: GetAccountHolderRequest, headersHandler?: () => {[header: string]: string}): Promise<GetAccountHolderResponse> {
			return this.http.post('getAccountHolder', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Retrieve the uploaded documents of an existing account holder.
		 * This endpoint is used to retrieve documents previously uploaded for use in the KYC Verification of an account holder.
		 * For further information regarding KYC Verification, please refer to [Verification checks](https://docs.adyen.com/developers/marketpay/onboarding-and-verification/verification-checks).
		 * Post getUploadedDocuments
		 * @return {GetUploadedDocumentsResponse} OK - the request has succeeded.
		 */
		GetUploadedDocumentsPost(requestBody: GetUploadedDocumentsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetUploadedDocumentsResponse> {
			return this.http.post('getUploadedDocuments', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Suspend an existing account holder.
		 * This endpoint is used to suspend an existing account holder. If an account holder is suspended, it may not process transactions or pay out funds. Any payments made to a suspended account holder will be directed to the merchant's liable account.
		 * Post suspendAccountHolder
		 * @return {SuspendAccountHolderResponse} OK - the request has succeeded.
		 */
		SuspendAccountHolderPost(requestBody: SuspendAccountHolderRequest, headersHandler?: () => {[header: string]: string}): Promise<SuspendAccountHolderResponse> {
			return this.http.post('suspendAccountHolder', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Reinstate a disabled account holder.
		 * This endpoint is used to reinstate an existing account holder, which has been suspended through the `/suspendAccountHolder` endpoint. An account holder which has been suspended due to KYC verification issues cannot be reinstated through this endpoint.
		 * Post unSuspendAccountHolder
		 * @return {UnSuspendAccountHolderResponse} OK - the request has succeeded.
		 */
		UnSuspendAccountHolderPost(requestBody: UnSuspendAccountHolderRequest, headersHandler?: () => {[header: string]: string}): Promise<UnSuspendAccountHolderResponse> {
			return this.http.post('unSuspendAccountHolder', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Update an existing account under an account holder.
		 * This endpoint is used to update the description or payout schedule of an existing account.
		 * Post updateAccount
		 * @return {UpdateAccountResponse} OK - the request has succeeded.
		 */
		UpdateAccountPost(requestBody: UpdateAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateAccountResponse> {
			return this.http.post('updateAccount', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Update an existing account holder.
		 * This endpoint is used to update the `accountHolderDetails` or `processingTier` of an account holder.
		 * If updating the `accountHolderDetails`, only the details which have been provided will be updated. Other details will be left as-is with the exception of the following fields:
		 * * `accountHolderDetails.address`
		 * * `accountHolderDetails.phoneNumber`
		 * * `accountHolderDetails.bankAccountDetails.BankAccountDetail`
		 * * `accountHolderDetails.businessDetails.shareholders.ShareholderContact`, which requires all fields necessary for validation (i.e. in order to update only the `accountHolderDetails.address.postalCode`, the fields `accountHolderDetails.address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` must be provided as well, so that the address can be properly validated).
		 * Note that this endpoint can also be used to create new bank accounts. For this, provide details of a bank account without providing a `bankAccountUUID`.
		 * Similarly, it can also be used to create new shareholders by providing details of a shareholder without providing a `shareholderCode`.
		 * > The updating of the `metadata` field will overwite all of the existing account holder metadata. In order to update an existing metadata key-value pair, all otherkey-value pairs should be provided in order to not delete them.
		 * Post updateAccountHolder
		 * @return {UpdateAccountHolderResponse} OK - the request has succeeded.
		 */
		UpdateAccountHolderPost(requestBody: UpdateAccountHolderRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateAccountHolderResponse> {
			return this.http.post('updateAccountHolder', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Update the state of an existing account holder.
		 * This endpoint is used to disable or enable the processing or payout state of an account holder. It cannot be used to enable an account holder whose processing or payout state has not been disabled through this endpoint.
		 * For further information regarding processing and payout states of an account holder, please refer to the [MarketPay documentation](https://docs.adyen.com/developers/marketpay).
		 * Post updateAccountHolderState
		 * @return {GetAccountHolderStatusResponse} OK - the request has succeeded.
		 */
		UpdateAccountHolderStatePost(requestBody: UpdateAccountHolderStateRequest, headersHandler?: () => {[header: string]: string}): Promise<GetAccountHolderStatusResponse> {
			return this.http.post('updateAccountHolderState', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Upload a document for an existing account holder.
		 * This endpoint is used to upload a document for use in the KYC verification of an account holder.
		 * For further information regarding KYC Verification, please refer to [Verification checks](https://docs.adyen.com/developers/marketpay/onboarding-and-verification/verification-checks).
		 * Post uploadDocument
		 * @return {UpdateAccountHolderResponse} OK - the request has succeeded.
		 */
		UploadDocumentPost(requestBody: UploadDocumentRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateAccountHolderResponse> {
			return this.http.post('uploadDocument', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Request to perform verification for an account holder.
		 * This endpoint allows to trigger the verification of the account holder earlier than it's required by the currently processed volume.
		 * Post verification
		 * @return {GenericResponse} OK - the request has succeeded.
		 */
		VerificationPost(requestBody: PerformVerificationRequest, headersHandler?: () => {[header: string]: string}): Promise<GenericResponse> {
			return this.http.post('verification', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}
	}

}

