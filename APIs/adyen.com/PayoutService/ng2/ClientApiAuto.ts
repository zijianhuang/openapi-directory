import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface Address {

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

	export interface Amount {

		/**
		 * The three-character [ISO currency code](https://docs.adyen.com/developers/currency-codes).
		 * Max length: 3
		 * Min length: 3
		 */
		currency: string;

		/**
		 * The payable amount that can be charged for the transaction.
		 * The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/developers/currency-codes).
		 */
		value: number;
	}

	export interface BankAccount {

		/**The bank account number (without separators). */
		bankAccountNumber?: string;

		/**The bank city. */
		bankCity?: string;

		/**The location id of the bank. The field value is `nil` in most cases. */
		bankLocationId?: string;

		/**The name of the bank. */
		bankName?: string;

		/**The [Business Identifier Code](https://en.wikipedia.org/wiki/ISO_9362) (BIC) is the SWIFT address assigned to a bank. The field value is `nil` in most cases. */
		bic?: string;

		/**
		 * Country code where the bank is located.
		 * A valid value is an ISO two-character country code (e.g. 'NL').
		 */
		countryCode?: string;

		/**The [International Bank Account Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (IBAN). */
		iban?: string;

		/**
		 * The name of the bank account holder.
		 * If you submit a name with non-Latin characters, we automatically replace some of them with corresponding Latin characters to meet the FATF recommendations. For example:
		 * * χ12 is converted to ch12.
		 * * üA is converted to euA.
		 * * Peter Møller is converted to Peter Mller, because banks don't accept 'ø'.
		 * After replacement, the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least one of them must be a valid Latin character (A-Z, a-z). For example:
		 * * John17 - allowed.
		 * * J17 - allowed.
		 * * 171 - not allowed.
		 * * John-7 - allowed.
		 * > If provided details don't match the required format, the response returns the error message: 203 'Invalid bank account holder name'.
		 */
		ownerName?: string;

		/**The bank account holder's tax ID. */
		taxId?: string;
	}

	export interface BrowserInfo {

		/**
		 * The accept header value of the shopper's browser.
		 * Max length: 50
		 * Min length: 10
		 */
		acceptHeader: string;

		/**
		 * The user agent value of the shopper's browser.
		 * Max length: 50
		 * Min length: 10
		 */
		userAgent: string;
	}

	export interface Card {

		/**
		 * The [card verification code](https://docs.adyen.com/developers/payment-glossary#cardsecuritycodecvccvvcid) (1-20 characters). Depending on the card brand, it is known also as:
		 * * CVV2/CVC2 – length: 3 digits
		 * * CID – length: 4 digits
		 * > If you are using [Client-Side Encryption](https://docs.adyen.com/developers/ecommerce-integration), the CVC code is present in the encrypted data. You must never post the card details to the server.
		 * > This field must be always present in a [one-click payment request](https://docs.adyen.com/developers/features/recurring-payments).
		 * > When this value is returned in a response, it is always empty because it is not stored.
		 * Max length: 20
		 * Min length: 1
		 */
		cvc?: string;

		/**
		 * The card expiry month.
		 * Format: 2 digits, zero-padded for single digits. For example:
		 * * 03 = March
		 * * 11 = November
		 * Max length: 2
		 * Min length: 1
		 */
		expiryMonth: string;

		/**
		 * The card expiry year.
		 * Format: 4 digits. For example: 2018
		 * Max length: 4
		 * Min length: 4
		 */
		expiryYear: string;

		/**
		 * The name of the cardholder, as printed on the card.
		 * Max length: 50
		 * Min length: 1
		 */
		holderName: string;

		/**
		 * The issue number of the card (for some UK debit cards only).
		 * Max length: 2
		 * Min length: 1
		 */
		issueNumber?: string;

		/**
		 * The card number (4-19 characters). Do not use any separators.
		 * When this value is returned in a response, only the last 4 digits of the card number are returned.
		 * Max length: 19
		 * Min length: 4
		 */
		number: string;

		/**
		 * The month component of the start date (for some UK debit cards only).
		 * Max length: 2
		 * Min length: 1
		 */
		startMonth?: string;

		/**
		 * The year component of the start date (for some UK debit cards only).
		 * Max length: 4
		 * Min length: 4
		 */
		startYear?: string;
	}

	export interface ForexQuote {

		/**The account name. */
		account?: string;

		/**The account type. */
		accountType?: string;
		baseAmount?: Amount;

		/**The base points. */
		basePoints: number;
		buy?: Amount;
		interbank?: Amount;

		/**The reference assigned to the forex quote request. */
		reference?: string;
		sell?: Amount;

		/**The signature to validate the integrity. */
		signature?: string;

		/**The source of the forex quote. */
		source?: string;

		/**The type of forex. */
		type?: string;

		/**The date until which the forex quote is valid. */
		validTill: Date;
	}

	export interface FraudCheckResult {

		/**The fraud score generated by the risk check. */
		accountScore: number;

		/**The ID of the risk check. */
		checkId: number;

		/**The name of the risk check. */
		name: string;
	}

	export interface FraudResult {

		/**The total fraud score generated by the risk checks. */
		accountScore: number;

		/**The result of the individual risk checks. */
		results?: Array<FraudCheckResult>;
	}

	export interface FundSource {

		/**a map of name/value pairs for passing in additional/industry-specific data */
		additionalData?: string;
		billingAddress?: Address;
		card?: Card;

		/**the email address of the person */
		shopperEmail?: string;
		shopperName?: Name;

		/**the telephone number of the person */
		telephoneNumber?: string;
	}

	export interface Installments {

		/**
		 * Defines the number of installments. Its value needs to be greater than zero.
		 * Usually, the maximum allowed number of installments is capped. For example, it may not be possible to split a payment in more than 24 installments. The acquirer sets this upper limit, so its value may vary.
		 */
		value: number;
	}

	export interface ModifyRequest {

		/**This field contains additional data, which may be required for a particular payout request. */
		additionalData?: string;

		/**The merchant account identifier, with which you want to process the transaction. */
		merchantAccount: string;

		/**The PSP reference received in the `/submitThirdParty` response. */
		originalReference: string;
	}

	export interface ModifyResponse {

		/**This field contains additional data, which may be returned in a particular response. */
		additionalData?: string;

		/**Adyen's 16-digit unique reference associated with the transaction. This value is globally unique; quote it when communicating with us about this request. */
		pspReference: string;

		/**
		 * The response:
		 * * In case of success, it is either `payout-confirm-received` or `payout-decline-received`.
		 * * In case of an error, an informational message is returned.
		 */
		response: string;
	}

	export interface Name {

		/**The first name. */
		firstName: string;

		/**
		 * The gender.
		 * >The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.
		 * Max length: 1
		 * Min length: 1
		 */
		gender: NameGender;

		/**
		 * The name's infix, if applicable.
		 * >A maximum length of twenty (20) characters is imposed.
		 */
		infix?: string;

		/**The last name. */
		lastName: string;
	}

	export enum NameGender { MALE = 0, FEMALE = 1, UNKNOWN = 2 }

	export interface PayoutRequest {
		additionalAmount?: Amount;

		/**
		 * This field contains additional data, which may be required for a particular payment request.
		 * The `additionalData` object consists of entries, each of which includes the key and value. For more information on possible key-value pairs, refer to the [additionalData section](https://docs.adyen.com/developers/api-reference/payments-api#paymentrequestadditionaldata).
		 */
		additionalData?: string;
		amount: Amount;
		bankAccount?: BankAccount;
		billingAddress?: Address;
		browserInfo?: BrowserInfo;

		/**The delay between the authorisation and scheduled auto-capture, specified in hours. */
		captureDelayHours?: number;
		card?: Card;

		/**
		 * The shopper's date of birth.
		 * Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
		 */
		dateOfBirth?: Date;
		dccQuote?: ForexQuote;
		deliveryAddress?: Address;

		/**
		 * The date and time the purchased goods should be delivered.
		 * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD
		 * Example: 2017-07-17T13:42:40.428+01:00
		 */
		deliveryDate?: Date;

		/**A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/developers/risk-management/device-fingerprinting). */
		deviceFingerprint?: string;

		/**The type of the entity the payment is processed for. */
		entityType?: PayoutRequestEntityType;

		/**An integer value that is added to the normal fraud score. The value can be either positive or negative. */
		fraudOffset?: number;
		fundSource?: FundSource;
		installments?: Installments;

		/**The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant. */
		mcc?: string;

		/**The merchant account identifier, with which you want to process the transaction. */
		merchantAccount: string;

		/**
		 * This reference allows linking multiple transactions to each other.
		 * > When providing the `merchantOrderReference` value, we also recommend you submit `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values.
		 */
		merchantOrderReference?: string;

		/**
		 * Metadata consists of entries, each of which includes a key and a value.
		 * Limitations: Error "177", "Metadata size exceeds limit"
		 */
		metadata?: string;
		mpiData?: ThreeDSecureData;

		/**
		 * The two-character country code of the shopper's nationality.
		 * Max length: 2
		 */
		nationality?: string;

		/**The order reference to link multiple partial payments. */
		orderReference?: string;
		recurring?: Recurring;

		/**
		 * Defines a recurring payment type.
		 * Allowed values:
		 * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.
		 * * `CardOnFile` – Card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
		 */
		recurringProcessingModel?: PayoutRequestRecurringProcessingModel;

		/**
		 * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
		 * If you need to provide multiple references for a transaction, separate them with hyphens ("-").
		 * Maximum length: 80 characters.
		 */
		reference: string;

		/**
		 * Some payment methods require defining a value for this field to specify how to process the transaction.
		 * For the Bancontact payment method, it can be set to:
		 * * `maestro` (default), to be processed like a Maestro card, or
		 * * `bcmc`, to be processed like a Bancontact card.
		 */
		selectedBrand?: string;

		/**The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail. */
		selectedRecurringDetailReference?: string;

		/**A session ID used to identify a payment session. */
		sessionId?: string;

		/**The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. */
		shopperEmail?: string;

		/**
		 * The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).
		 * > This field is mandatory for some merchants depending on your business model. For more information, [contact Support](https://support.adyen.com/hc/en-us/requests/new).
		 */
		shopperIP?: string;

		/**
		 * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
		 * For the web service API, Adyen assumes Ecommerce shopper interaction by default.
		 * This field has the following possible values:
		 * * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.
		 * * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).
		 * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.
		 * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
		 */
		shopperInteraction?: PayoutRequestShopperInteraction;

		/**The combination of a language code and a country code to specify the language to be used in the payment. */
		shopperLocale?: string;
		shopperName?: Name;

		/**
		 * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
		 * > This field is required for recurring payments.
		 */
		shopperReference?: string;

		/**The text to appear on the shopper's bank statement. */
		shopperStatement?: string;

		/**The shopper's social security number. */
		socialSecurityNumber?: string;

		/**
		 * The physical store, for which this payment is processed.
		 * Max length: 16
		 * Min length: 1
		 */
		store?: string;

		/**The shopper's telephone number. */
		telephoneNumber?: string;

		/**
		 * The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).
		 * Max length: 16
		 * Min length: 1
		 */
		totalsGroup?: string;
	}

	export enum PayoutRequestEntityType { NaturalPerson = 0, CompanyName = 1 }

	export enum PayoutRequestRecurringProcessingModel { CardOnFile = 0, Subscription = 1 }

	export enum PayoutRequestShopperInteraction { Ecommerce = 0, ContAuth = 1, Moto = 2, POS = 3 }

	export interface PayoutResponse {

		/**This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Settings** > **API and Response**. */
		additionalData?: string;

		/**
		 * Authorisation code:
		 * * When the payment is authorised successfully, this field holds the authorisation code for the payment.
		 * * When the payment is not authorised, this field is empty.
		 */
		authCode?: string;
		dccAmount?: Amount;

		/**
		 * Cryptographic signature used to verify `dccQuote`.
		 * > This value only applies if you have implemented Dynamic Currency Conversion. For more information, [contact Support](https://support.adyen.com/hc/en-us/requests/new).
		 */
		dccSignature?: string;
		fraudResult?: FraudResult;

		/**
		 * The URL to direct the shopper to.
		 * > In case of SecurePlus, do not redirect a shopper to this URL.
		 */
		issuerUrl?: string;

		/**The payment session. */
		md?: string;

		/**
		 * The 3D request data for the issuer.
		 * If the value is **CUPSecurePlus-CollectSMSVerificationCode**, collect an SMS code from the shopper and pass it in the `/authorise3D` request. For more information, see [3D Secure](https://docs.adyen.com/developers/risk-management/3d-secure).
		 */
		paRequest?: string;

		/**
		 * Adyen's 16-digit unique reference associated with the transaction/the request. This value is globally unique; quote it when communicating with us about this request.
		 * > `pspReference` is returned only for non-redirect payment methods.
		 */
		pspReference?: string;

		/**
		 * If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error.
		 * When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
		 */
		refusalReason?: string;

		/**
		 * The result of the payment. Possible values:
		 * * **Authorised** – Indicates the payment authorisation was successfully completed. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.
		 * * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.
		 * * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation. For more information on handling a redirect, refer to [Handling a redirect](https://docs.adyen.com/developers/checkout/api-integration/make-a-payment#idealpayments).
		 * * **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.
		 * * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.
		 * * **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment. For more information on handling a pending payment, refer to [Payments with pending status](https://docs.adyen.com/developers/development-resources/payments-with-pending-status).
		 * * **Error** – Indicates an error occurred during processing of the payment. The reason is given in the `refusalReason` field. This is a final state.
		 */
		resultCode?: PayoutResponseResultCode;
	}

	export enum PayoutResponseResultCode { Authorised = 0, PartiallyAuthorised = 1, Refused = 2, Error = 3, Cancelled = 4, Received = 5, RedirectShopper = 6 }

	export interface Recurring {

		/**
		 * The type of recurring contract to be used.
		 * Possible values:
		 * * `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/developers/payment-glossary#cardsecuritycodecvccvvcid).
		 * * `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/developers/payment-glossary#cardnotpresentcnp).
		 * * `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not.
		 * * `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/developers/features/third-party-payouts).
		 */
		contract?: RecurringContract;

		/**A descriptive name for this detail. */
		recurringDetailName?: string;

		/**The name of the token service. */
		tokenService?: RecurringTokenService;
	}

	export enum RecurringContract { ONECLICK = 0, RECURRING = 1, PAYOUT = 2 }

	export enum RecurringTokenService { VISATOKENSERVICE = 0, MCTOKENSERVICE = 1 }

	export interface StoreDetailAndSubmitRequest {

		/**This field contains additional data, which may be required for a particular request. */
		additionalData?: string;
		amount: Amount;
		bank?: BankAccount;
		billingAddress?: Address;
		card?: Card;

		/**
		 * The date of birth.
		 * Format: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD
		 * For Paysafecard it must be the same as used when registering the Paysafecard account.
		 * > This field is mandatory for natural persons.
		 */
		dateOfBirth: Date;

		/**The type of the entity the payout is processed for. */
		entityType: StoreDetailAndSubmitRequestEntityType;

		/**An integer value that is added to the normal fraud score. The value can be either positive or negative. */
		fraudOffset?: number;

		/**The merchant account identifier, with which you want to process the transaction. */
		merchantAccount: string;

		/**
		 * The shopper's nationality.
		 * A valid value is an ISO 2-character country code (e.g. 'NL').
		 * Max length: 2
		 */
		nationality: string;
		recurring: Recurring;

		/**The merchant reference for this payment. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement. */
		reference: string;

		/**
		 * The name of the brand to make a payout to.
		 * For Paysafecard it must be set to `paysafecard`.
		 */
		selectedBrand?: string;

		/**The shopper's email address. */
		shopperEmail: string;
		shopperName?: Name;

		/**The shopper's reference for the payment transaction. */
		shopperReference: string;

		/**The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method). */
		shopperStatement?: string;

		/**The shopper's social security number. */
		socialSecurityNumber?: string;
	}

	export enum StoreDetailAndSubmitRequestEntityType { NaturalPerson = 0, Company = 1 }

	export interface StoreDetailAndSubmitResponse {

		/**This field contains additional data, which may be returned in a particular response. */
		additionalData?: string;

		/**A new reference to uniquely identify this request. */
		pspReference: string;

		/**In case of refusal, an informational message for the reason. */
		refusalReason?: string;

		/**
		 * The response:
		 * * In case of success is payout-submit-received.
		 * * In case of an error, an informational message is returned.
		 */
		resultCode: string;
	}

	export interface StoreDetailRequest {

		/**This field contains additional data, which may be required for a particular request. */
		additionalData?: string;
		bank?: BankAccount;
		billingAddress?: Address;
		card?: Card;

		/**
		 * The date of birth.
		 * Format: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD
		 * For Paysafecard it must be the same as used when registering the Paysafecard account.
		 * > This field is mandatory for natural persons.
		 */
		dateOfBirth: Date;

		/**The type of the entity the payout is processed for. */
		entityType: StoreDetailRequestEntityType;

		/**An integer value that is added to the normal fraud score. The value can be either positive or negative. */
		fraudOffset?: number;

		/**The merchant account identifier, with which you want to process the transaction. */
		merchantAccount: string;

		/**
		 * The shopper's nationality.
		 * A valid value is an ISO 2-character country code (e.g. 'NL').
		 * Max length: 2
		 */
		nationality: string;
		recurring: Recurring;

		/**
		 * The name of the brand to make a payout to.
		 * For Paysafecard it must be set to `paysafecard`.
		 */
		selectedBrand?: string;

		/**The shopper's email address. */
		shopperEmail: string;
		shopperName?: Name;

		/**The shopper's reference for the payment transaction. */
		shopperReference: string;

		/**The shopper's social security number. */
		socialSecurityNumber?: string;
	}

	export enum StoreDetailRequestEntityType { NaturalPerson = 0, Company = 1 }

	export interface StoreDetailResponse {

		/**This field contains additional data, which may be returned in a particular response. */
		additionalData?: string;

		/**A new reference to uniquely identify this request. */
		pspReference: string;

		/**The token which you can use later on for submitting the payout. */
		recurringDetailReference: string;

		/**The result code of the transaction. `Success` indicates that the details were stored successfully. */
		resultCode: string;
	}

	export interface SubmitRequest {

		/**This field contains additional data, which may be required for a particular request. */
		additionalData?: string;
		amount: Amount;

		/**
		 * The date of birth.
		 * Format: ISO-8601; example: YYYY-MM-DD
		 * For Paysafecard it must be the same as used when registering the Paysafecard account.
		 * > This field is mandatory for natural persons.
		 * > This field is required to update the existing `dateOfBirth` that is associated with this recurring contract.
		 */
		dateOfBirth?: Date;

		/**
		 * The type of the entity the payout is processed for.
		 * Allowed values:
		 * * NaturalPerson
		 * * Company
		 * > This field is required to update the existing `entityType` that is associated with this recurring contract.
		 */
		entityType?: SubmitRequestEntityType;

		/**An integer value that is added to the normal fraud score. The value can be either positive or negative. */
		fraudOffset?: number;

		/**The merchant account identifier you want to process the transaction request with. */
		merchantAccount: string;

		/**
		 * The shopper's nationality.
		 * A valid value is an ISO 2-character country code (e.g. 'NL').
		 * > This field is required to update the existing nationality that is associated with this recurring contract.
		 */
		nationality?: string;
		recurring: Recurring;

		/**The merchant reference for this payout. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement. */
		reference: string;

		/**
		 * This is the `recurringDetailReference` you want to use for this payout.
		 * You can use the value LATEST to select the most recently used recurring detail.
		 */
		selectedRecurringDetailReference: string;

		/**The shopper's email address. */
		shopperEmail: string;
		shopperName?: Name;

		/**The shopper's reference for the payout transaction. */
		shopperReference: string;

		/**The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method). */
		shopperStatement?: string;

		/**The shopper's social security number. */
		socialSecurityNumber?: string;
	}

	export enum SubmitRequestEntityType { NaturalPerson = 0, Company = 1 }

	export interface SubmitResponse {

		/**This field contains additional data, which may be returned in a particular response. */
		additionalData?: string;

		/**A new reference to uniquely identify this request. */
		pspReference: string;

		/**In case of refusal, an informational message for the reason. */
		refusalReason?: string;

		/**
		 * The response:
		 * * In case of success, it is `payout-submit-received`.
		 * * In case of an error, an informational message is returned.
		 */
		resultCode: string;
	}

	export interface ThreeDSecureData {

		/**The authentication response if the shopper was redirected. */
		authenticationResponse?: ThreeDSecureDataAuthenticationResponse;

		/**The cardholder authentication value (base64 encoded, 20 bytes in a decoded form). */
		cavv?: string;

		/**The CAVV algorithm used. */
		cavvAlgorithm?: string;

		/**The enrollment response from the 3D directory server. */
		directoryResponse?: ThreeDSecureDataDirectoryResponse;

		/**The electronic commerce indicator. */
		eci?: string;

		/**The transaction identifier (base64 encoded, 20 bytes in a decoded form). */
		xid?: string;
	}

	export enum ThreeDSecureDataAuthenticationResponse { Y = 0, N = 1, U = 2, A = 3 }

	export enum ThreeDSecureDataDirectoryResponse { Y = 0, N = 1, U = 2, E = 3 }

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Confirms a payout.
		 * Confirms a previously submitted payout.
		 * To cancel a payout, use the `/declineThirdParty` endpoint.
		 * Post confirmThirdParty
		 * @return {ModifyResponse} OK - the request has succeeded.
		 */
		ConfirmThirdPartyPost(requestBody: ModifyRequest, headersHandler?: () => HttpHeaders): Observable<ModifyResponse> {
			return this.http.post<ModifyResponse>(this.baseUri + 'confirmThirdParty', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Cancels a payout.
		 * Cancels a previously submitted payout.
		 * To confirm and send a payout, use the `/confirmThirdParty` endpoint.
		 * Post declineThirdParty
		 * @return {ModifyResponse} OK - the request has succeeded.
		 */
		DeclineThirdPartyPost(requestBody: ModifyRequest, headersHandler?: () => HttpHeaders): Observable<ModifyResponse> {
			return this.http.post<ModifyResponse>(this.baseUri + 'declineThirdParty', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Pay out directly.
		 * With this call, you can pay out to your customers, and funds will be made available within 30 minutes on the cardholder's bank account (this is dependent on whether the issuer supports this functionality). Instant card payouts are only supported for Visa and Mastercard cards.
		 * Post payout
		 * @return {PayoutResponse} OK - the request has succeeded.
		 */
		PayoutPost(requestBody: PayoutRequest, headersHandler?: () => HttpHeaders): Observable<PayoutResponse> {
			return this.http.post<PayoutResponse>(this.baseUri + 'payout', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Stores payout details.
		 * Stores payment details under the `PAYOUT` recurring contract. These payment details can be used later to submit a payout via the `/submitThirdParty` call.
		 * Post storeDetail
		 * @return {StoreDetailResponse} OK - the request has succeeded.
		 */
		StoreDetailPost(requestBody: StoreDetailRequest, headersHandler?: () => HttpHeaders): Observable<StoreDetailResponse> {
			return this.http.post<StoreDetailResponse>(this.baseUri + 'storeDetail', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Stores details and submits a payout.
		 * Submits a payout and stores its details for subsequent payouts.
		 * The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.
		 * Post storeDetailAndSubmitThirdParty
		 * @return {StoreDetailAndSubmitResponse} OK - the request has succeeded.
		 */
		StoreDetailAndSubmitThirdPartyPost(requestBody: StoreDetailAndSubmitRequest, headersHandler?: () => HttpHeaders): Observable<StoreDetailAndSubmitResponse> {
			return this.http.post<StoreDetailAndSubmitResponse>(this.baseUri + 'storeDetailAndSubmitThirdParty', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Submits a payout.
		 * Submits a payout using the previously stored payment details. To store payment details, use the `/storeDetail` API call.
		 * The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.
		 * Post submitThirdParty
		 * @return {SubmitResponse} OK - the request has succeeded.
		 */
		SubmitThirdPartyPost(requestBody: SubmitRequest, headersHandler?: () => HttpHeaders): Observable<SubmitResponse> {
			return this.http.post<SubmitResponse>(this.baseUri + 'submitThirdParty', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

