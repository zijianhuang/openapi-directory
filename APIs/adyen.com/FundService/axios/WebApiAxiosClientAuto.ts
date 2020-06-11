import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface AccountDetailBalance {

		/**The code of the account that holds the balance. */
		accountCode?: string;
		detailBalance?: DetailBalance;
	}

	export interface AccountHolderBalanceRequest {

		/**The code of the Account Holder of which to retrieve the balance. */
		accountHolderCode: string;
	}

	export interface AccountHolderBalanceResponse {

		/**A list of each account and their balances. */
		balancePerAccount?: Array<AccountDetailBalance>;

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
		totalBalance?: DetailBalance;
	}

	export interface AccountHolderTransactionListRequest {

		/**The code of the account holder that owns the account(s) of which retrieve the transaction list. */
		accountHolderCode: string;

		/**A list of accounts to include in the transaction list. If left blank, the last fifty (50) transactions for all accounts of the account holder will be included. */
		transactionListsPerAccount?: Array<TransactionListForAccount>;

		/**
		 * A list of statuses to include in the transaction list. If left blank, all transactions will be included.
		 * >Permitted values:
		 * >* `PendingCredit` - a pending balance credit.
		 * >* `CreditFailed` - a pending credit failure; the balance will not be credited.
		 * >* `Credited` - a credited balance.
		 * >* `PendingDebit` - a pending balance debit (e.g., a refund).
		 * >* `DebitFailed` - a pending debit failure; the balance will not be debited.
		 * >* `Debited` - a debited balance (e.g., a refund).
		 * >* `DebitReversedReceived` - a pending refund reversal.
		 * >* `DebitedReversed` - a reversed refund.
		 * >* `ChargebackReceived` - a received chargeback request.
		 * >* `Chargeback` - a processed chargeback.
		 * >* `ChargebackReversedReceived` - a pending chargeback reversal.
		 * >* `ChargebackReversed` - a reversed chargeback.
		 * >* `Converted` - converted.
		 * >* `ManualCorrected` - manual booking/adjustment by Adyen.
		 * >* `Payout` - a payout.
		 * >* `PayoutReversed` - a reversed payout.
		 * >* `PendingFundTransfer` - a pending transfer of funds from one account to another.
		 * >* `FundTransfer` - a transfer of funds from one account to another.
		 */
		transactionStatuses?: Array<string>;
	}

	export interface AccountHolderTransactionListResponse {

		/**A list of the transactions. */
		accountTransactionLists?: Array<AccountTransactionList>;

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
	}

	export interface AccountTransactionList {

		/**The code of the account. */
		accountCode?: string;

		/**Indicates whether there is a next page of transactions available. */
		hasNextPage?: boolean;

		/**The list of transactions. */
		transactions?: Array<Transaction>;
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

	export interface DetailBalance {

		/**The list of balances held by the account. */
		balance?: Array<Amount>;

		/**The list of on hold balances held by the account. */
		onHoldBalance?: Array<Amount>;

		/**The list of pending balances held by the account. */
		pendingBalance?: Array<Amount>;
	}

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

	export interface PayoutAccountHolderRequest {

		/**The code of the account from which the payout is to be made. */
		accountCode: string;

		/**
		 * The code of the Account Holder who owns the account from which the payout is to be made.
		 * The Account Holder is the party to which the payout will be made.
		 */
		accountHolderCode: string;
		amount: Amount;

		/**
		 * The unique ID of the Bank Account held by the Account Holder to which the payout is to be made.
		 * If left blank, a bank account is automatically selected.
		 */
		bankAccountUUID?: string;

		/**A description of the payout. */
		description?: string;

		/**A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another. */
		merchantReference?: string;

		/**
		 * The unique ID of the payout instrument token held by the Account Holder to which the payout is to be made.
		 * If left blank, a payout instrument is automatically selected.
		 */
		payoutInstrumentTokenCode?: string;
	}

	export interface PayoutAccountHolderResponse {

		/**The unique ID of the Bank Account to which the payout was made. */
		bankAccountUUID: string;

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions. */
		merchantReference?: string;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
	}

	export interface RefundNotPaidOutTransfersRequest {

		/**The code of the account from which to perform the refund(s). */
		accountCode: string;

		/**The code of the Account Holder which owns the account from which to perform the refund(s). */
		accountHolderCode: string;
	}

	export interface RefundNotPaidOutTransfersResponse {

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
	}

	export interface SetupBeneficiaryRequest {

		/**The destination account code. */
		destinationAccountCode: string;

		/**A value that can be supplied at the discretion of the executing user. */
		merchantReference: string;

		/**The benefactor account. */
		sourceAccountCode: string;
	}

	export interface SetupBeneficiaryResponse {

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
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

	export interface TransactionListForAccount {

		/**The account for which to retrieve the transactions. */
		accountCode: string;

		/**
		 * The page of transactions to retrieve.
		 * Each page lists fifty (50) transactions.  The most recent transactions are included on page 1.
		 */
		page: number;
	}

	export interface TransferFundsRequest {
		amount: Amount;

		/**
		 * The code of the account to which the funds are to be credited.
		 * >The state of the Account Holder of this account must be Active.
		 */
		destinationAccountCode: string;

		/**A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another. */
		merchantReference?: string;

		/**
		 * The code of the account from which the funds are to be debited.
		 * >The state of the Account Holder of this account must be Active and allow payouts.
		 */
		sourceAccountCode: string;

		/**
		 * The code related to the type of transfer being performed.
		 * >The permitted codes differ for each platform account and are defined in their service level agreement.
		 */
		transferCode: string;
	}

	export interface TransferFundsResponse {

		/**Contains field validation errors that would prevent requests from being processed. */
		invalidFields?: Array<ErrorFieldType>;

		/**The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions. */
		merchantReference?: string;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**The result code. */
		resultCode?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Retrieve the balance(s) of an account holder.
		 * This endpoint is used to retrieve the balance(s) of the accounts of an account holder. An account's balances are on a per-currency basis (i.e., an account may have multiple balances: one per currency).
		 * Post accountHolderBalance
		 * @return {AccountHolderBalanceResponse} OK - the request has succeeded.
		 */
		AccountHolderBalancePost(requestBody: AccountHolderBalanceRequest, headersHandler?: () => {[header: string]: string}): Promise<AccountHolderBalanceResponse> {
			return Axios.post<AccountHolderBalanceResponse>(this.baseUri + 'accountHolderBalance', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Retrieve a list of transactions.
		 * This endpoint is used to retrieve a list of Transactions for an account holder's accounts. The accounts and Transaction Statuses to be included on the list can be specified. Each call will return a maximum of fifty (50) Transactions per account; in order to retrieve the following set of Transactions another call should be made with the 'page' value incremented. Note that Transactions are ordered with most recent first.
		 * Post accountHolderTransactionList
		 * @return {AccountHolderTransactionListResponse} OK - the request has succeeded.
		 */
		AccountHolderTransactionListPost(requestBody: AccountHolderTransactionListRequest, headersHandler?: () => {[header: string]: string}): Promise<AccountHolderTransactionListResponse> {
			return Axios.post<AccountHolderTransactionListResponse>(this.baseUri + 'accountHolderTransactionList', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Disburse a specified amount from an account to the account holder.
		 * This endpoint is used to pay out a specified amount from an account to the bank account of the account's account holder.
		 * Post payoutAccountHolder
		 * @return {PayoutAccountHolderResponse} OK - the request has succeeded.
		 */
		PayoutAccountHolderPost(requestBody: PayoutAccountHolderRequest, headersHandler?: () => {[header: string]: string}): Promise<PayoutAccountHolderResponse> {
			return Axios.post<PayoutAccountHolderResponse>(this.baseUri + 'payoutAccountHolder', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Refund all transactions of an account since the most recent payout.
		 * This endpoint is used to refund all the transactions of an account which have taken place since the most recent payout. This request is on a per-account basis (as opposed to a per-payment basis), so only the portion of the payment which was made to the specified account will be refunded. The commission(s), fee(s), and payment(s) to other account(s), will remain in the accounts to which they were sent as designated by the original payment's split details.
		 * Post refundNotPaidOutTransfers
		 * @return {RefundNotPaidOutTransfersResponse} OK - the request has succeeded.
		 */
		RefundNotPaidOutTransfersPost(requestBody: RefundNotPaidOutTransfersRequest, headersHandler?: () => {[header: string]: string}): Promise<RefundNotPaidOutTransfersResponse> {
			return Axios.post<RefundNotPaidOutTransfersResponse>(this.baseUri + 'refundNotPaidOutTransfers', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Designate an account to be the beneficiary of a separate account and transfer the benefactor's current balance to the beneficiary.
		 * This endpoint is used to define a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. Note that a series of benefactor/beneficiaries may not exceed four (4) beneficiaries and may not have a cycle in it.
		 * Post setupBeneficiary
		 * @return {SetupBeneficiaryResponse} OK - the request has succeeded.
		 */
		SetupBeneficiaryPost(requestBody: SetupBeneficiaryRequest, headersHandler?: () => {[header: string]: string}): Promise<SetupBeneficiaryResponse> {
			return Axios.post<SetupBeneficiaryResponse>(this.baseUri + 'setupBeneficiary', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Transfer funds from one platform account to another.
		 * This endpoint is used to transfer funds from one account to another account. Both accounts must be in the same marketplace, but can have different account holders. The transfer must include a transfer code, which should be determined by the marketplace, in compliance with local regulations.
		 * Post transferFunds
		 * @return {TransferFundsResponse} OK - the request has succeeded.
		 */
		TransferFundsPost(requestBody: TransferFundsRequest, headersHandler?: () => {[header: string]: string}): Promise<TransferFundsResponse> {
			return Axios.post<TransferFundsResponse>(this.baseUri + 'transferFunds', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

}

