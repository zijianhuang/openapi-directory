import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface AccountInfo {

		/**
		 * Indicator for the length of time since this shopper account was created in the merchant's environment.
		 * Allowed values:
		 * * notApplicable
		 * * thisTransaction
		 * * lessThan30Days
		 * * from30To60Days
		 * * moreThan60Days
		 */
		accountAgeIndicator?: AccountInfoAccountAgeIndicator;

		/**Date when the shopper's account was last changed. */
		accountChangeDate?: Date;

		/**
		 * Indicator for the length of time since the shopper's account was last updated.
		 * Allowed values:
		 * * thisTransaction
		 * * lessThan30Days
		 * * from30To60Days
		 * * moreThan60Days
		 */
		accountChangeIndicator?: AccountInfoAccountChangeIndicator;

		/**Date when the shopper's account was created. */
		accountCreationDate?: Date;

		/**Number of attempts the shopper tried to add a card to their account in the last day. */
		addCardAttemptsDay?: number;

		/**Date the selected delivery address was last used. */
		deliveryAddressUsageDate?: Date;

		/**
		 * Indicator for the length of time since this delivery address was last used.
		 * Allowed values:
		 * * thisTransaction
		 * * lessThan30Days
		 * * from30To60Days
		 * * moreThan60Days
		 */
		deliveryAddressUsageIndicator?: AccountInfoDeliveryAddressUsageIndicator;

		/**Shopper's home phone number (including the country code). */
		homePhone?: string;

		/**Shopper's mobile phone number (including the country code). */
		mobilePhone?: string;

		/**Date when the shopper last changed their password. */
		passwordChangeDate?: Date;

		/**
		 * Indicator when the shopper has changed their password.
		 * Allowed values:
		 * * notApplicable
		 * * thisTransaction
		 * * lessThan30Days
		 * * from30To60Days
		 * * moreThan60Days
		 */
		passwordChangeIndicator?: AccountInfoPasswordChangeIndicator;

		/**Number of all transactions (successful and abandoned) from this shopper in the past 24 hours. */
		pastTransactionsDay?: number;

		/**Number of all transactions (successful and abandoned) from this shopper in the past year. */
		pastTransactionsYear?: number;

		/**Date this payment method was added to the shopper's account. */
		paymentAccountAge?: Date;

		/**
		 * Indicator for the length of time since this payment method was added to this shopper's account.
		 * Allowed values:
		 * * notApplicable
		 * * thisTransaction
		 * * lessThan30Days
		 * * from30To60Days
		 * * moreThan60Days
		 */
		paymentAccountIndicator?: AccountInfoPaymentAccountIndicator;

		/**Number of successful purchases in the last six months. */
		purchasesLast6Months?: number;

		/**Whether suspicious activity was recorded on this account. */
		suspiciousActivity?: boolean;

		/**Shopper's work phone number (including the country code). */
		workPhone?: string;
	}

	export enum AccountInfoAccountAgeIndicator { notApplicable = 0, thisTransaction = 1, lessThan30Days = 2, from30To60Days = 3, moreThan60Days = 4 }

	export enum AccountInfoAccountChangeIndicator { thisTransaction = 0, lessThan30Days = 1, from30To60Days = 2, moreThan60Days = 3 }

	export enum AccountInfoDeliveryAddressUsageIndicator { thisTransaction = 0, lessThan30Days = 1, from30To60Days = 2, moreThan60Days = 3 }

	export enum AccountInfoPasswordChangeIndicator { notApplicable = 0, thisTransaction = 1, lessThan30Days = 2, from30To60Days = 3, moreThan60Days = 4 }

	export enum AccountInfoPaymentAccountIndicator { notApplicable = 0, thisTransaction = 1, lessThan30Days = 2, from30To60Days = 3, moreThan60Days = 4 }

	export interface Address {

		/**
		 * The name of the city.
		 * >Required if either houseNumberOrName, street, postalCode, or stateOrProvince are provided.
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

		/**The color depth of the shopper's browser in bits per pixel. This should be obtained by using the browser's `screen.colorDepth` property. Accepted values: 1, 4, 8, 15, 16, 24, 32 or 48 bit color depth. */
		colorDepth: number;

		/**Boolean value indicating if the shopper's browser is able to execute Java. */
		javaEnabled: boolean;

		/**Boolean value indicating if the shopper's browser is able to execute JavaScript. A default 'true' value is assumed if the field is not present. */
		javaScriptEnabled?: boolean;

		/**The `navigator.language` value of the shopper's browser (as defined in IETF BCP 47). */
		language: string;

		/**The total height of the shopper's device screen in pixels. */
		screenHeight: number;

		/**The total width of the shopper's device screen in pixels. */
		screenWidth: number;

		/**Time difference between UTC time and the shopper's browser local time, in minutes. */
		timeZoneOffset: number;

		/**
		 * The user agent value of the shopper's browser.
		 * Max length: 50
		 * Min length: 10
		 */
		userAgent: string;
	}

	export interface Card {

		/**
		 * The [card verification code](https://docs.adyen.com/payments-essentials/payment-glossary#card_security_code_cvc_cvv_cid_) (1-20 characters). Depending on the card brand, it is known also as:
		 * * CVV2/CVC2 – length: 3 digits
		 * * CID – length: 4 digits
		 * > If you are using [Client-Side Encryption](https://docs.adyen.com/classic-integration/cse-integration-ecommerce), the CVC code is present in the encrypted data. You must never post the card details to the server.
		 * > This field must be always present in a [one-click payment request](https://docs.adyen.com/classic-integration/recurring-payments).
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
		 * Format: 4 digits. For example: 2020
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

	export interface DeviceRenderOptions {

		/**
		 * Supported SDK interface types.
		 * Allowed values:
		 * * Native
		 * * Html
		 * * both
		 */
		sdkInterface?: DeviceRenderOptionsSdkInterface;

		/**
		 * UI types supported for displaying specific challenges.
		 * Allowed values:
		 * * text
		 * * singleSelect
		 * * outOfBand
		 * * otherHtml
		 * * multiSelect
		 */
		sdkUiType?: Array<string>;
	}

	export enum DeviceRenderOptionsSdkInterface { Html = 0, Native = 1, both = 2 }

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

	export interface Installments {

		/**
		 * Defines the number of installments. Its value needs to be greater than zero.
		 * Usually, the maximum allowed number of installments is capped. For example, it may not be possible to split a payment in more than 24 installments. The acquirer sets this upper limit, so its value may vary.
		 */
		value: number;
	}

	export interface MerchantRiskIndicator {

		/**Whether the chosen delivery address is identical to the billing address. */
		addressMatch?: boolean;

		/**
		 * Indicator regarding the delivery address.
		 * Allowed values:
		 * * `shipToBillingAddress`
		 * * `shipToVerifiedAddress`
		 * * `shipToNewAddress`
		 * * `shipToStore`
		 * * `digitalGoods`
		 * * `goodsNotShipped`
		 * * `other`
		 */
		deliveryAddressIndicator?: MerchantRiskIndicatorDeliveryAddressIndicator;

		/**The delivery email address (for digital goods). */
		deliveryEmail?: string;

		/**
		 * The estimated delivery time for the shopper to receive the goods.
		 * Allowed values:
		 * * `electronicDelivery`
		 * * `sameDayShipping`
		 * * `overnightShipping`
		 * * `twoOrMoreDaysShipping`
		 */
		deliveryTimeframe?: MerchantRiskIndicatorDeliveryTimeframe;
		giftCardAmount?: Amount;

		/**Number of individual prepaid or gift cards used for this purchase. */
		giftCardCount?: number;

		/**For pre-order purchases, the expected date this product will be available to the shopper. */
		preOrderDate?: Date;

		/**Indicator for whether this transaction is for pre-ordering a product. */
		preOrderPurchase?: boolean;

		/**Indicator for whether the shopper has already purchased the same items in the past. */
		reorderItems?: boolean;
	}

	export enum MerchantRiskIndicatorDeliveryAddressIndicator { shipToBillingAddress = 0, shipToVerifiedAddress = 1, shipToNewAddress = 2, shipToStore = 3, digitalGoods = 4, goodsNotShipped = 5, other = 6 }

	export enum MerchantRiskIndicatorDeliveryTimeframe { electronicDelivery = 0, sameDayShipping = 1, overnightShipping = 2, twoOrMoreDaysShipping = 3 }

	export interface ModificationRequest {

		/**
		 * This field contains additional data, which may be required for a particular modification request.
		 * The additionalData object consists of entries, each of which includes the key and value. For more information on possible key-value pairs, refer to the [ModificationRequest.additionalData](https://docs.adyen.com/api-reference/payments-api/modificationrequest/modificationrequest-additionaldata) section.
		 */
		additionalData?: string;

		/**The merchant account that is used to process the payment. */
		merchantAccount: string;
		modificationAmount?: Amount;
		mpiData?: ThreeDSecureData;

		/**The original merchant reference to cancel. */
		originalMerchantReference?: string;

		/**
		 * The original pspReference of the payment to modify.
		 * This reference is returned in:
		 * * authorisation response
		 * * authorisation notification
		 */
		originalReference: string;

		/**
		 * Optionally, you can specify your reference for the payment modification. This reference is visible in Customer Area and in reports.
		 * Maximum length: 80 characters.
		 */
		reference?: string;

		/**The details of how the payment should be split when distributing a payment to a Marketpay Marketplace and its Accounts. */
		splits?: Array<Split>;

		/**The transaction reference provided by the PED. For point-of-sale integrations only. */
		tenderReference?: string;

		/**Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only. */
		uniqueTerminalId?: string;
	}

	export interface ModificationResult {

		/**This field contains additional data, which may be returned in a particular modification response. */
		additionalData?: string;

		/**Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. */
		pspReference?: string;

		/**Indicates if the modification request has been received for processing. */
		response?: ModificationResultResponse;
	}

	export enum ModificationResultResponse { [capture-received] = 0, [cancel-received] = 1, [refund-received] = 2, [cancelOrRefund-received] = 3 }

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

	export interface PaymentRequest {
		accountInfo?: AccountInfo;
		additionalAmount?: Amount;

		/**This field contains additional data, which may be required for a particular payment request. */
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

		/**A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting). */
		deviceFingerprint?: string;

		/**The type of the entity the payment is processed for. */
		entityType?: PaymentRequestEntityType;

		/**An integer value that is added to the normal fraud score. The value can be either positive or negative. */
		fraudOffset?: number;
		installments?: Installments;

		/**The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant. */
		mcc?: string;

		/**The merchant account identifier, with which you want to process the transaction. */
		merchantAccount: string;

		/**
		 * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.
		 * The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.
		 * > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
		 */
		merchantOrderReference?: string;
		merchantRiskIndicator?: MerchantRiskIndicator;

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

		/**When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead. */
		orderReference?: string;
		recurring?: Recurring;

		/**
		 * Defines a recurring payment type.
		 * Allowed values:
		 * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.
		 * * `CardOnFile` – Card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
		 * * `UnscheduledCardOnFile` – A transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
		 */
		recurringProcessingModel?: PaymentRequestRecurringProcessingModel;

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

		/**
		 * The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.
		 * > For 3D Secure 2 transactions, schemes require the `shopperEmail` for both `deviceChannel` **browser** and **app**.
		 */
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
		shopperInteraction?: PaymentRequestShopperInteraction;

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

		/**The details of how the payment should be split when distributing a payment to a MarketPay Marketplace and its Accounts. */
		splits?: Array<Split>;

		/**
		 * The physical store, for which this payment is processed.
		 * Max length: 16
		 * Min length: 1
		 */
		store?: string;

		/**The shopper's telephone number. */
		telephoneNumber?: string;
		threeDS2RequestData?: ThreeDS2RequestData;

		/**
		 * The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).
		 * Max length: 16
		 * Min length: 1
		 */
		totalsGroup?: string;

		/**Set to true if the payment should be routed to a trusted MID. */
		trustedShopper?: boolean;
	}

	export enum PaymentRequestEntityType { NaturalPerson = 0, CompanyName = 1 }

	export enum PaymentRequestRecurringProcessingModel { CardOnFile = 0, Subscription = 1, UnscheduledCardOnFile = 2 }

	export enum PaymentRequestShopperInteraction { Ecommerce = 0, ContAuth = 1, Moto = 2, POS = 3 }

	export interface PaymentRequest3d {
		accountInfo?: AccountInfo;
		additionalAmount?: Amount;

		/**
		 * This field contains additional data, which may be required for a particular payment request.
		 * The `additionalData` object consists of entries, each of which includes the key and value. For more information on possible key-value pairs, refer to the [additionalData section](https://docs.adyen.com/api-reference/payments-api#paymentrequestadditionaldata).
		 */
		additionalData?: string;
		amount?: Amount;
		billingAddress?: Address;
		browserInfo?: BrowserInfo;

		/**The delay between the authorisation and scheduled auto-capture, specified in hours. */
		captureDelayHours?: number;

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

		/**A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting). */
		deviceFingerprint?: string;

		/**An integer value that is added to the normal fraud score. The value can be either positive or negative. */
		fraudOffset?: number;
		installments?: Installments;

		/**The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant. */
		mcc?: string;

		/**The payment session identifier returned by the card issuer. */
		md: string;

		/**The merchant account identifier, with which you want to process the transaction. */
		merchantAccount: string;

		/**
		 * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.
		 * The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.
		 * > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
		 */
		merchantOrderReference?: string;
		merchantRiskIndicator?: MerchantRiskIndicator;

		/**
		 * Metadata consists of entries, each of which includes a key and a value.
		 * Limitations: Error "177", "Metadata size exceeds limit"
		 */
		metadata?: string;

		/**When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead. */
		orderReference?: string;

		/**Payment authorisation response returned by the card issuer. The `paResponse` field holds the PaRes value received from the card issuer. */
		paResponse: string;
		recurring?: Recurring;

		/**
		 * Defines a recurring payment type.
		 * Allowed values:
		 * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.
		 * * `CardOnFile` – Card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
		 * * `UnscheduledCardOnFile` – A transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
		 */
		recurringProcessingModel?: PaymentRequest3dRecurringProcessingModel;

		/**
		 * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
		 * If you need to provide multiple references for a transaction, separate them with hyphens ("-").
		 * Maximum length: 80 characters.
		 */
		reference?: string;

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

		/**
		 * The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.
		 * > For 3D Secure 2 transactions, schemes require the `shopperEmail` for both `deviceChannel` **browser** and **app**.
		 */
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
		shopperInteraction?: PaymentRequest3dShopperInteraction;

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

		/**The details of how the payment should be split when distributing a payment to a MarketPay Marketplace and its Accounts. */
		splits?: Array<Split>;

		/**
		 * The physical store, for which this payment is processed.
		 * Max length: 16
		 * Min length: 1
		 */
		store?: string;

		/**The shopper's telephone number. */
		telephoneNumber?: string;
		threeDS2RequestData?: ThreeDS2RequestData;

		/**
		 * The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).
		 * Max length: 16
		 * Min length: 1
		 */
		totalsGroup?: string;

		/**Set to true if the payment should be routed to a trusted MID. */
		trustedShopper?: boolean;
	}

	export enum PaymentRequest3dRecurringProcessingModel { CardOnFile = 0, Subscription = 1, UnscheduledCardOnFile = 2 }

	export enum PaymentRequest3dShopperInteraction { Ecommerce = 0, ContAuth = 1, Moto = 2, POS = 3 }

	export interface PaymentRequest3ds2 {
		accountInfo?: AccountInfo;
		additionalAmount?: Amount;

		/**
		 * This field contains additional data, which may be required for a particular payment request.
		 * The `additionalData` object consists of entries, each of which includes the key and value. For more information on possible key-value pairs, refer to the [additionalData section](https://docs.adyen.com/api-reference/payments-api#paymentrequestadditionaldata).
		 */
		additionalData?: string;
		amount: Amount;
		billingAddress?: Address;
		browserInfo?: BrowserInfo;

		/**The delay between the authorisation and scheduled auto-capture, specified in hours. */
		captureDelayHours?: number;

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

		/**A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting). */
		deviceFingerprint?: string;

		/**An integer value that is added to the normal fraud score. The value can be either positive or negative. */
		fraudOffset?: number;
		installments?: Installments;

		/**The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant. */
		mcc?: string;

		/**The merchant account identifier, with which you want to process the transaction. */
		merchantAccount: string;

		/**
		 * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.
		 * The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.
		 * > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
		 */
		merchantOrderReference?: string;
		merchantRiskIndicator?: MerchantRiskIndicator;

		/**
		 * Metadata consists of entries, each of which includes a key and a value.
		 * Limitations: Error "177", "Metadata size exceeds limit"
		 */
		metadata?: string;

		/**When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead. */
		orderReference?: string;
		recurring?: Recurring;

		/**
		 * Defines a recurring payment type.
		 * Allowed values:
		 * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.
		 * * `CardOnFile` – Card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
		 * * `UnscheduledCardOnFile` – A transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
		 */
		recurringProcessingModel?: PaymentRequest3ds2RecurringProcessingModel;

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

		/**
		 * The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.
		 * > For 3D Secure 2 transactions, schemes require the `shopperEmail` for both `deviceChannel` **browser** and **app**.
		 */
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
		shopperInteraction?: PaymentRequest3ds2ShopperInteraction;

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

		/**The details of how the payment should be split when distributing a payment to a MarketPay Marketplace and its Accounts. */
		splits?: Array<Split>;

		/**
		 * The physical store, for which this payment is processed.
		 * Max length: 16
		 * Min length: 1
		 */
		store?: string;

		/**The shopper's telephone number. */
		telephoneNumber?: string;
		threeDS2RequestData?: ThreeDS2RequestData;
		threeDS2Result?: ThreeDS2Result;

		/**The ThreeDS2Token that was returned in the /authorise call. */
		threeDS2Token?: string;

		/**
		 * The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).
		 * Max length: 16
		 * Min length: 1
		 */
		totalsGroup?: string;

		/**Set to true if the payment should be routed to a trusted MID. */
		trustedShopper?: boolean;
	}

	export enum PaymentRequest3ds2RecurringProcessingModel { CardOnFile = 0, Subscription = 1, UnscheduledCardOnFile = 2 }

	export enum PaymentRequest3ds2ShopperInteraction { Ecommerce = 0, ContAuth = 1, Moto = 2, POS = 3 }

	export interface PaymentResult {

		/**This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Account** > **API URLs**. */
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
		 * If the value is **CUPSecurePlus-CollectSMSVerificationCode**, collect an SMS code from the shopper and pass it in the `/authorise3D` request. For more information, see [3D Secure](https://docs.adyen.com/classic-integration/3d-secure).
		 */
		paRequest?: string;

		/**
		 * Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
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
		 * * **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions.
		 * * **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.
		 * * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.
		 * * **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.
		 * * **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state.
		 * * **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.
		 * * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.
		 * * **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment. For more information on handling a pending payment, refer to [Payments with pending status](https://docs.adyen.com/development-resources/payments-with-pending-status).
		 * * **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.
		 * * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation.
		 */
		resultCode?: PaymentResultResultCode;
	}

	export enum PaymentResultResultCode { AuthenticationFinished = 0, Authorised = 1, Cancelled = 2, ChallengeShopper = 3, Error = 4, IdentifyShopper = 5, Pending = 6, Received = 7, RedirectShopper = 8, Refused = 9 }

	export interface Recurring {

		/**
		 * The type of recurring contract to be used.
		 * Possible values:
		 * * `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/payments-essentials/payment-glossary#card_security_code_cvc_cvv_cid_).
		 * * `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/payment-glossary#cardnotpresentcnp).
		 * * `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not.
		 * * `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/features/third-party-payouts).
		 */
		contract?: RecurringContract;

		/**A descriptive name for this detail. */
		recurringDetailName?: string;

		/**Date after which no further authorisations shall be performed. Only for 3D Secure 2. */
		recurringExpiry?: Date;

		/**Minimum number of days between authorisations. Only for 3D Secure 2. */
		recurringFrequency?: string;

		/**The name of the token service. */
		tokenService?: RecurringTokenService;
	}

	export enum RecurringContract { ONECLICK = 0, RECURRING = 1, PAYOUT = 2 }

	export enum RecurringTokenService { VISATOKENSERVICE = 0, MCTOKENSERVICE = 1 }

	export interface SDKEphemPubKey {

		/**The `crv` value as received from the 3D Secure 2 SDK. */
		crv?: string;

		/**The `kty` value as received from the 3D Secure 2 SDK. */
		kty?: string;

		/**The `x` value as received from the 3D Secure 2 SDK. */
		x?: string;

		/**The `y` value as received from the 3D Secure 2 SDK. */
		y?: string;
	}

	export interface Split {

		/**
		 * The account to which this split applies.
		 * >Required if the type is `MarketPlace`.
		 */
		account?: string;
		amount: SplitAmount;

		/**A description of this split. */
		description?: string;

		/**
		 * The reference of this split. Used to link other operations (e.g. captures and refunds) to this split.
		 * >Required if the type is `MarketPlace`.
		 */
		reference?: string;

		/**
		 * The type of this split.
		 * >Permitted values: `Default`, `PaymentFee`, `VAT`, `Commission`, `MarketPlace`, `Verification`.
		 */
		type: SplitType;
	}

	export enum SplitType { Commission = 0, Default = 1, MarketPlace = 2, PaymentFee = 3, VAT = 4, Verification = 5 }

	export interface SplitAmount {

		/**
		 * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
		 * If this value is not provided, the currency in which the payment is made will be used.
		 * Max length: 3
		 * Min length: 3
		 */
		currency?: string;

		/**
		 * The payable amount that can be charged for the transaction.
		 * The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
		 */
		value: number;
	}

	export interface ThreeDS2RequestData {

		/**If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/checkout/3d-secure-2/3ds2-checkout-authentication-only-integration), and not the payment authorisation. */
		authenticationOnly?: boolean;

		/**
		 * Possibility to specify a preference for receiving a challenge from the issuer.
		 * Allowed values:
		 * * `noPreference`
		 * * `requestNoChallenge`
		 * * `requestChallenge`
		 */
		challengeIndicator?: ThreeDS2RequestDataChallengeIndicator;

		/**
		 * The environment of the shopper.
		 * Allowed values:
		 * * `app`
		 * * `browser`
		 */
		deviceChannel: string;
		deviceRenderOptions?: DeviceRenderOptions;

		/**The `messageVersion` value indicating the 3D Secure 2 protocol version. */
		messageVersion?: string;

		/**URL to where the issuer should send the `CRes`. Required if you are not using components for `channel` **Web** or if you are using classic integration `deviceChannel` **browser**. */
		notificationURL?: string;

		/**
		 * The `sdkAppID` value as received from the 3D Secure 2 SDK.
		 * Required for `deviceChannel` set to **app**.
		 */
		sdkAppID?: string;

		/**
		 * The `sdkEncData` value as received from the 3D Secure 2 SDK.
		 * Required for `deviceChannel` set to **app**.
		 */
		sdkEncData?: string;
		sdkEphemPubKey?: SDKEphemPubKey;

		/**
		 * The maximum amount of time in minutes for the 3D Secure 2 authentication process.
		 * Only for `deviceChannel` set to **app**.
		 */
		sdkMaxTimeout?: number;

		/**
		 * The `sdkReferenceNumber` value as received from the 3D Secure 2 SDK.
		 * Only for `deviceChannel` set to **app**.
		 */
		sdkReferenceNumber?: string;

		/**
		 * The `sdkTransID` value as received from the 3D Secure 2 SDK.
		 * Only for `deviceChannel` set to **app**.
		 */
		sdkTransID?: string;

		/**Completion indicator for the device fingerprinting. */
		threeDSCompInd?: string;

		/**Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure-2/3ds2-checkout-authentication-only-integration) for Visa. Unique 3D Secure requestor identifier assigned by the Directory Server when you enrol for 3D Secure 2. */
		threeDSRequestorID?: string;

		/**Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure-2/3ds2-checkout-authentication-only-integration) for Visa. Unique 3D Secure requestor name assigned by the Directory Server when you enrol for 3D Secure 2. */
		threeDSRequestorName?: string;

		/**URL of the (customer service) website that will be shown to the shopper in case of technical errors during the 3D Secure 2 process. */
		threeDSRequestorURL?: string;
	}

	export enum ThreeDS2RequestDataChallengeIndicator { noPreference = 0, requestNoChallenge = 1, requestChallenge = 2 }

	export interface ThreeDS2Result {

		/**The `authenticationValue` value as defined in the 3D Secure 2 specification. */
		authenticationValue?: string;

		/**The `dsTransID` value as defined in the 3D Secure 2 specification. */
		dsTransID?: string;

		/**The `eci` value as defined in the 3D Secure 2 specification. */
		eci?: string;

		/**The `threeDSServerTransID` value as defined in the 3D Secure 2 specification. */
		threeDSServerTransID?: string;

		/**The `timestamp` value of the 3D Secure 2 authentication. */
		timestamp?: string;

		/**The `transStatus` value as defined in the 3D Secure 2 specification. */
		transStatus?: string;

		/**The `transStatusReason` value as defined in the 3D Secure 2 specification. */
		transStatusReason?: string;
	}

	export interface ThreeDS2ResultRequest {

		/**The merchant account identifier, with which you want to process the transaction. */
		merchantAccount: string;

		/**The pspReference returned in the /authorise call. */
		pspReference: string;
	}

	export interface ThreeDS2ResultResponse {
		threeDS2Result?: ThreeDS2Result;
	}

	export interface ThreeDSecureData {

		/**
		 * In 3D Secure 1, the authentication response if the shopper was redirected.
		 * In 3D Secure 2, this is the `transStatus` from challenge flow. If the transaction was frictionless, set this value to **Y**.
		 */
		authenticationResponse?: ThreeDSecureDataAuthenticationResponse;

		/**The cardholder authentication value (base64 encoded, 20 bytes in a decoded form). */
		cavv?: string;

		/**The CAVV algorithm used. Include this only for 3D Secure 1. */
		cavvAlgorithm?: string;

		/**
		 * In 3D Secure 1, this is the enrollment response from the 3D directory server.
		 * In 3D Secure 2, this is the `transStatus` from 3D Secure device fingerprinting result.
		 */
		directoryResponse?: ThreeDSecureDataDirectoryResponse;

		/**Supported for 3D Secure 2. The unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction. */
		dsTransID?: string;

		/**The electronic commerce indicator. */
		eci?: string;

		/**The version of the 3D Secure protocol. */
		threeDSVersion?: string;

		/**Supported for 3D Secure 1. The transaction identifier (Base64-encoded, 20 bytes in a decoded form). */
		xid?: string;
	}

	export enum ThreeDSecureDataAuthenticationResponse { Y = 0, N = 1, U = 2, A = 3 }

	export enum ThreeDSecureDataDirectoryResponse { Y = 0, N = 1, U = 2, E = 3, C = 4 }

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Increases or decreases the authorised amount.
		 * Allows you to increase or decrease the authorised amount after the initial authorisation has taken place. This functionality enables tipping, improving the chances your authorisation will be valid, charging the shopper when they have already left the merchant premises, etc.
		 * For more information, refer to [Adjust Authorisation](https://docs.adyen.com/development-resources/payment-modifications/adjust-authorisation).
		 * Post adjustAuthorisation
		 * @return {ModificationResult} OK - the request has succeeded.
		 */
		AdjustAuthorisationPost(requestBody: ModificationRequest, headersHandler?: () => {[header: string]: string}): Promise<ModificationResult> {
			return Axios.post<ModificationResult>(this.baseUri + 'adjustAuthorisation', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Creates a payment authorisation.
		 * Creates a payment with a unique reference (`pspReference`) and attempts to obtain an authorisation hold. For cards, this amount can be captured or cancelled later. Non-card payment methods typically don't support this and will automatically capture as part of the authorisation.
		 * For more information, refer to [Classic integration](https://docs.adyen.com/classic-integration).
		 * Post authorise
		 * @return {PaymentResult} OK - the request has succeeded.
		 */
		AuthorisePost(requestBody: PaymentRequest, headersHandler?: () => {[header: string]: string}): Promise<PaymentResult> {
			return Axios.post<PaymentResult>(this.baseUri + 'authorise', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Completes a 3D Secure payment authorisation.
		 * For an authenticated 3D Secure session, completes the payment authorisation. This endpoint must receive the `md` and `paResponse` parameters that you get from the card issuer after a shopper pays via 3D Secure.
		 * For more information, refer to [3D Secure](https://docs.adyen.com/classic-integration/3d-secure).
		 * Post authorise3d
		 * @return {PaymentResult} OK - the request has succeeded.
		 */
		Authorise3dPost(requestBody: PaymentRequest3d, headersHandler?: () => {[header: string]: string}): Promise<PaymentResult> {
			return Axios.post<PaymentResult>(this.baseUri + 'authorise3d', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Completes a 3D Secure 2 payment authorisation.
		 * For an authenticated 3D Secure 2 session, completes the payment authorisation. This endpoint must receive the `threeDS2Token` and `threeDS2Result` parameters.
		 * For more information, refer to [3D Secure 2](https://docs.adyen.com/checkout/3d-secure-2).
		 * Post authorise3ds2
		 * @return {PaymentResult} OK - the request has succeeded.
		 */
		Authorise3ds2Post(requestBody: PaymentRequest3ds2, headersHandler?: () => {[header: string]: string}): Promise<PaymentResult> {
			return Axios.post<PaymentResult>(this.baseUri + 'authorise3ds2', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Cancels an authorised payment.
		 * Cancels the authorisation hold on a payment, returning a unique reference for this request. You can cancel payments after authorisation only for payment methods that support distinct authorisations and captures.
		 * For more information, refer to [Cancel](https://docs.adyen.com/development-resources/payment-modifications/cancel).
		 * Post cancel
		 * @return {ModificationResult} OK - the request has succeeded.
		 */
		CancelPost(requestBody: ModificationRequest, headersHandler?: () => {[header: string]: string}): Promise<ModificationResult> {
			return Axios.post<ModificationResult>(this.baseUri + 'cancel', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Cancels or refunds a payment.
		 * Cancels a payment if it has not been captured yet, or refunds it if it has already been captured. This is useful when it is not certain if the payment has been captured or not (for example, when using auto-capture).
		 * > Do not use this request for payments that involve (multiple) partial captures.
		 * For more information, refer to [Cancel or refund](https://docs.adyen.com/development-resources/payment-modifications/cancel-or-refund).
		 * Post cancelOrRefund
		 * @return {ModificationResult} OK - the request has succeeded.
		 */
		CancelOrRefundPost(requestBody: ModificationRequest, headersHandler?: () => {[header: string]: string}): Promise<ModificationResult> {
			return Axios.post<ModificationResult>(this.baseUri + 'cancelOrRefund', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Captures an authorised payment.
		 * Captures the authorisation hold on a payment, returning a unique reference for this request. Usually the full authorisation amount is captured, however it's also possible to capture a smaller amount, which results in cancelling the remaining authorisation balance.
		 * Payment methods, which automatically capture as part of authorisation, don't need to be captured, but submitting a capture request on these transactions will not result in double charges. If immediate or delayed auto-capture is enabled, calling the capture method is not neccessary.
		 * For more information, refer to [Capture](https://docs.adyen.com/development-resources/payment-modifications/capture).
		 * Post capture
		 * @return {ModificationResult} OK - the request has succeeded.
		 */
		CapturePost(requestBody: ModificationRequest, headersHandler?: () => {[header: string]: string}): Promise<ModificationResult> {
			return Axios.post<ModificationResult>(this.baseUri + 'capture', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Refunds a captured payment.
		 * Refunds a payment that has previously been captured, returning a unique reference for this request. Refunding can be done on the full captured amount or a partial amount. Multiple (partial) refunds will be accepted as long as their sum doesn't exceed the captured amount. Payments which have been authorised, but not captured, cannot be refunded, use the /cancel method instead.
		 * > Some payment methods/gateways do not support partial/multiple refunds.
		 * > A margin above the captured limit can be configured to cover shipping/handling costs.
		 * For more information, refer to [Refund](https://docs.adyen.com/development-resources/payment-modifications/refund).
		 * Post refund
		 * @return {ModificationResult} OK - the request has succeeded.
		 */
		RefundPost(requestBody: ModificationRequest, headersHandler?: () => {[header: string]: string}): Promise<ModificationResult> {
			return Axios.post<ModificationResult>(this.baseUri + 'refund', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Retrieves the `threeDS2Result` after doing a 3D Secure 2 authentication only.
		 * Retrieves the `threeDS2Result` after doing a 3D Secure 2 authentication only.
		 * Post retrieve3ds2Result
		 * @return {ThreeDS2ResultResponse} OK - the request has succeeded.
		 */
		Retrieve3ds2ResultPost(requestBody: ThreeDS2ResultRequest, headersHandler?: () => {[header: string]: string}): Promise<ThreeDS2ResultResponse> {
			return Axios.post<ThreeDS2ResultResponse>(this.baseUri + 'retrieve3ds2Result', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Cancels a payment using your custom reference.
		 * This endpoint allows you to cancel a payment if you do not have the PSP reference of the original payment request available.
		 * In your call, refer to the original payment by using the `reference` that you specified in your payment request.
		 * For more information, see [Technical cancel](https://docs.adyen.com/development-resources/payment-modifications/cancel#technical-cancel).
		 * Post technicalCancel
		 * @return {ModificationResult} OK - the request has succeeded.
		 */
		TechnicalCancelPost(requestBody: ModificationRequest, headersHandler?: () => {[header: string]: string}): Promise<ModificationResult> {
			return Axios.post<ModificationResult>(this.baseUri + 'technicalCancel', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Cancels a POS refund request before it has been completed.
		 * This endpoint allows you to cancel the refund request before it has been completed.
		 * In your call, you can refer to the original refund request either by using the `tenderReference`, or the `pspReference`. We recommend implementing based on the `tenderReference`, as this is generated for both offline and online transactions.
		 * For more information, refer to [Cancel a refund](https://docs.adyen.com/point-of-sale/build-your-integration/cancel-a-pos-refund-request).
		 * Post voidPendingRefund
		 * @return {ModificationResult} OK - the request has succeeded.
		 */
		VoidPendingRefundPost(requestBody: ModificationRequest, headersHandler?: () => {[header: string]: string}): Promise<ModificationResult> {
			return Axios.post<ModificationResult>(this.baseUri + 'voidPendingRefund', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

}

