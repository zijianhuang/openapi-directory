import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {

	/**Request parameters to accept transfer. */
	export interface AcceptTransferProperties {

		/**Request parameters to accept transfer. */
		productDetails?: Array<ProductDetails>;
	}


	/**Request parameters to accept transfer. */
	export interface AcceptTransferRequest {

		/**Request parameters to accept transfer. */
		properties?: AcceptTransferProperties;
	}


	/**Address details. */
	export interface AddressDetails {

		/**Address Line1. */
		addressLine1?: string;

		/**Address Line2. */
		addressLine2?: string;

		/**Address Line3. */
		addressLine3?: string;

		/**Address City. */
		city?: string;

		/**Company Name. */
		companyName?: string;

		/**Country code uses ISO2, 2-digit format. */
		country?: string;

		/**First Name. */
		firstName?: string;

		/**Last Name. */
		lastName?: string;

		/**Address Postal Code. */
		postalCode?: string;

		/**Address Region. */
		region?: string;
	}


	/**Status of the address validation response. */
	export enum AddressValidationStatus { Valid = 0, Invalid = 1 }


	/**Result of listing agreements. */
	export interface AgreementListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of agreements. */
		value?: Array<Agreement>;
	}


	/**The properties of the agreement. */
	export interface AgreementProperties {

		/**The link to the agreement. */
		agreementLink?: string;

		/**Effective date. */
		effectiveDate?: Date;

		/**Expiration date. */
		expirationDate?: Date;

		/**Participants or signer of the agreement. */
		participants?: Array<Participants>;

		/**The agreement status */
		status?: string;
	}


	/**The Amount. */
	export interface Amount {

		/**The currency for the amount value. */
		currency?: string;

		/**Amount value. */
		value?: number;
	}


	/**The properties of available balance. */
	export interface AvailableBalanceProperties {

		/**The Amount. */
		amount?: Amount;
	}


	/**Details about the azure plan. */
	export interface AzurePlan {

		/**The sku description. */
		skuDescription?: string;

		/**The sku id. */
		skuId?: string;
	}


	/**Result of listing billing accounts. */
	export interface BillingAccountListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of billing accounts. */
		value?: Array<BillingAccount>;
	}


	/**The properties of the billing account. */
	export interface BillingAccountProperties {

		/**Address details. */
		address?: AddressDetails;

		/**The type of agreement. */
		agreementType?: BillingAccountPropertiesAgreementType;

		/**The billing profiles associated to the billing account. By default this is not populated, unless it's specified in $expand. */
		billingProfiles?: Array<BillingProfile>;

		/**The type of customer. */
		customerType?: BillingAccountPropertiesCustomerType;

		/**The departments associated to the enrollment. */
		departments?: Array<Department>;

		/**The billing account name. */
		displayName?: string;

		/**The accounts associated to the enrollment. */
		enrollmentAccounts?: Array<EnrollmentAccount>;

		/**Current entity level details */
		enrollmentDetails?: Enrollment;

		/**Organization id. */
		organizationId?: string;
	}

	export enum BillingAccountPropertiesAgreementType { MicrosoftCustomerAgreement = 0, EnterpriseAgreement = 1, MicrosoftOnlineServicesProgram = 2, MicrosoftPartnerAgreement = 3 }

	export enum BillingAccountPropertiesCustomerType { Enterprise = 0, Individual = 1, Partner = 2 }


	/**The request properties of the billing account that can be updated. */
	export interface BillingAccountUpdateRequest {

		/**The properties of the billing account. */
		properties?: BillingAccountProperties;
	}


	/**Result of list billingPermissions a caller has on a billing account. */
	export interface BillingPermissionsListResult {

		/**The list of billingPermissions a caller has on a billing account. */
		value?: Array<BillingPermissionsProperties>;
	}


	/**The set of allowed action and not allowed actions a caller has on a billing account */
	export interface BillingPermissionsProperties {

		/**The set of actions that the caller is allowed to do */
		actions?: Array<Action>;

		/**The set of actions the caller is not allowed to do */
		notActions?: Array<NotAction>;
	}


	/**The request parameters for creating a new billing profile. */
	export interface BillingProfileCreationRequest {

		/**Address details. */
		address?: AddressDetails;

		/**The billing profile name. */
		displayName?: string;

		/**Enabled azure plans for this billing profile. */
		enabledAzurePlans?: Array<AzurePlan>;

		/**If the billing profile is opted in to receive invoices via email. */
		invoiceEmailOptIn?: boolean;

		/**Purchase order number. */
		poNumber?: string;
	}


	/**Result of listing billing profiles. */
	export interface BillingProfileListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of billing profiles. */
		value?: Array<BillingProfile>;
	}


	/**The properties of the billing profile. */
	export interface BillingProfileProperties {

		/**Address details. */
		address?: AddressDetails;

		/**The currency associated with the billing profile. */
		currency?: string;

		/**The billing profile name. */
		displayName?: string;

		/**Information about the enabled azure plans. */
		enabledAzurePlans?: Array<AzurePlan>;

		/**Invoice day. */
		invoiceDay?: number;

		/**If the billing profile is opted in to receive invoices via email. */
		invoiceEmailOptIn?: boolean;

		/**The invoice sections associated to the billing profile. */
		invoiceSections?: Array<InvoiceSection>;

		/**Purchase order number. */
		poNumber?: string;
	}


	/**The billing property. */
	export interface BillingPropertyProperties {

		/**Billing account display name. */
		billingAccountDisplayName?: string;

		/**Billing account Id. */
		billingAccountId?: string;

		/**Billing profile display name. */
		billingProfileDisplayName?: string;

		/**Billing profile Id. */
		billingProfileId?: string;

		/**Billing tenant Id. */
		billingTenantId?: string;

		/**Cost center name. */
		costCenter?: string;

		/**Invoice Section display name. */
		invoiceSectionDisplayName?: string;

		/**Invoice Section Id. */
		invoiceSectionId?: string;

		/**Product Id. */
		productId?: string;

		/**Product name. */
		productName?: string;

		/**SKU description. */
		skuDescription?: string;

		/**SKU Id. */
		skuId?: string;
	}


	/**Result of get list of role assignments */
	export interface BillingRoleAssignmentListResult {

		/**The list role assignments */
		value?: Array<BillingRoleAssignment>;
	}


	/**The payload use to update role assignment on a scope */
	export interface BillingRoleAssignmentPayload {

		/**The role definition id */
		billingRoleDefinitionId?: string;

		/**The user's principal id that the role gets assigned to */
		principalId?: string;
	}


	/**The properties of the a role assignment. */
	export interface BillingRoleAssignmentProperties {

		/**the creator's principal Id */
		createdByPrincipalId?: string;

		/**the creator's tenant Id */
		createdByPrincipalTenantId?: string;

		/**the date the role assignment is created */
		createdOn?: string;

		/**the name of the role assignment */
		name?: string;

		/**The user's principal id that the role gets assigned to */
		principalId?: string;

		/**The role definition id */
		roleDefinitionName?: string;

		/**The scope the role get assigned to */
		scope?: string;
	}


	/**list the role definitions. */
	export interface BillingRoleDefinitionListResult {

		/**The list of role definitions. */
		value?: Array<BillingRoleDefinition>;
	}


	/**The properties of the a role definition. */
	export interface BillingRoleDefinitionProperties {

		/**The role description */
		description?: string;

		/**The billingPermissions the role has */
		permissions?: Array<BillingPermissionsProperties>;

		/**The name of the role */
		roleName?: string;
	}


	/**The usage context properties. */
	export interface BillingSubscriptionProperties {

		/**Billing Profile display name to which this product belongs. */
		billingProfileDisplayName?: string;

		/**Billing Profile id to which this product belongs. */
		billingProfileId?: string;

		/**Display name of customer to which this product belongs. */
		customerDisplayName?: string;

		/**Customer id to which this product belongs. */
		customerId?: string;

		/**display name. */
		displayName?: string;

		/**Invoice section display name to which this product belongs. */
		invoiceSectionDisplayName?: string;

		/**Invoice section id to which this product belongs. */
		invoiceSectionId?: string;

		/**The Amount. */
		lastMonthCharges?: Amount;

		/**The Amount. */
		monthToDateCharges?: Amount;

		/**Details about a reseller. */
		reseller?: Reseller;

		/**The sku description. */
		skuDescription?: string;

		/**The sku id. */
		skuId?: string;

		/**Subscription billing status. */
		subscriptionBillingStatus?: BillingSubscriptionPropertiesSubscriptionBillingStatus;

		/**Subscription Id. */
		subscriptionId?: string;
	}

	export enum BillingSubscriptionPropertiesSubscriptionBillingStatus { Active = 0, Inactive = 1, Abandoned = 2, Deleted = 3, Warning = 4 }


	/**Result of listing billing subscriptions. */
	export interface BillingSubscriptionsListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of billing subscriptions. */
		value?: Array<BillingSubscription>;
	}


	/**Result of listing customers. */
	export interface CustomerListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of customers. */
		value?: Array<Customer>;
	}


	/**The properties of a Customer's policy. */
	export interface CustomerPolicyProperties {

		/**Customer can view retail prices. */
		viewCharges?: CustomerPolicyPropertiesViewCharges;
	}

	export enum CustomerPolicyPropertiesViewCharges { Allowed = 0, NotAllowed = 1 }


	/**The properties of a customer. */
	export interface CustomerProperties {

		/**The name of the customer. */
		displayName?: string;

		/**Information about the product. */
		enabledAzurePlans?: Array<AzurePlan>;

		/**The resellers which are allowed to provide service to this customer. */
		resellers?: Array<Reseller>;
	}


	/**Result of listing departments. */
	export interface DepartmentListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of departments. */
		value?: Array<Department>;
	}


	/**The properties of the department. */
	export interface DepartmentProperties {

		/**The cost center name. */
		costCenter?: string;

		/**The name for department. */
		departmentName?: string;

		/**Associated enrollment accounts. By default this is not populated, unless it's specified in $expand. */
		enrollmentAccounts?: Array<EnrollmentAccount>;

		/**The status for department. */
		status?: string;
	}


	/**Detailed transfer status. */
	export interface DetailedTransferStatus {

		/**Error details for transfer execution. */
		errorDetails?: Error;

		/**Id of product being transferred. */
		productId?: string;

		/**Type of the product to be transferred. */
		productType?: DetailedTransferStatusProductType;

		/**Possible transfer status. */
		transferStatus?: DetailedTransferStatusTransferStatus;
	}

	export enum DetailedTransferStatusProductType { AzureSubscription = 0, AzureReservation = 1 }

	export enum DetailedTransferStatusTransferStatus { NotStarted = 0, InProgress = 1, Completed = 2, Failed = 3 }


	/**The properties of the invoice download. */
	export interface Document {

		/**Document type. */
		kind?: DocumentKind;

		/**Document URL. */
		url?: string;
	}

	export enum DocumentKind { Invoice = 0, VoidNote = 1, Receipt = 2, CreditNote = 3 }


	/**A secure URL that can be used to download a an entity until the URL expires. */
	export interface DownloadUrl {

		/**The time in UTC at which this download URL will expire. */
		expiryTime?: Date;

		/**The URL to the PDF file. */
		url?: string;
	}


	/**Type of the products that can be transferred. */
	export enum EligibleProductType { DevTestAzureSubscription = 0, StandardAzureSubscription = 1, AzureReservation = 2 }


	/**Current entity level details */
	export interface Enrollment {

		/**Enrollment billing cycle */
		billingCycle?: string;

		/**The channel for Enrollment */
		channel?: string;

		/**The countryCode for Enrollment */
		countryCode?: string;

		/**The currency associated with enrollment */
		currency?: string;

		/**Enrollment End Date */
		endDate?: Date;

		/**The language for Enrollment */
		language?: string;

		/**The attributes associated with legacy enrollment */
		policies?: EnrollmentPolicies;

		/**Enrollment Start Date */
		startDate?: Date;

		/**Enrollment status */
		status?: string;
	}


	/**The rating context. */
	export interface EnrollmentAccountContext {

		/**The cost center name. */
		costCenter?: string;

		/**Account End Date */
		endDate?: Date;

		/**The enrollment account id. */
		enrollmentAccountName?: string;

		/**Account Start Date */
		startDate?: Date;
	}


	/**Result of listing enrollment accounts. */
	export interface EnrollmentAccountListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of enrollment accounts. */
		value?: Array<EnrollmentAccount>;
	}


	/**The properties of the account. */
	export interface EnrollmentAccountProperties {

		/**The account name. */
		accountName?: string;

		/**The account owner */
		accountOwner?: string;

		/**The cost center name. */
		costCenter?: string;

		/**A department resource. */
		department?: Department;

		/**Account End Date */
		endDate?: Date;

		/**Account Start Date */
		startDate?: Date;

		/**The status for account. */
		status?: string;
	}


	/**The attributes associated with legacy enrollment */
	export interface EnrollmentPolicies {

		/**The accountOwnerViewCharges flag for Enrollment */
		accountOwnerViewCharges?: boolean;

		/**The departmentAdminViewCharges flag for Enrollment */
		departmentAdminViewCharges?: boolean;

		/**The marketplaces flag for Enrollment */
		marketplacesEnabled?: boolean;

		/**The reserved instances flag for Enrollment */
		reservedInstancesEnabled?: boolean;
	}


	/**Error details for transfer execution. */
	export interface Error {

		/**Error code. */
		errorCode?: string;

		/**Error message. */
		errorMessage?: string;
	}


	/**The details of the error. */
	export interface ErrorDetails {

		/**Error code. */
		code?: string;

		/**Error message indicating why the operation failed. */
		message?: string;

		/**The target of the particular error. */
		target?: string;
	}


	/**Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponse {

		/**The details of the error. */
		error?: ErrorDetails;
	}


	/**Request parameters to initiate transfer. */
	export interface InitiateTransferProperties {

		/**Email Id of recipient for transfer. */
		recipientEmailId?: string;

		/**Optional reseller Id for transfer. */
		resellerId?: string;
	}


	/**Request parameters to initiate transfer. */
	export interface InitiateTransferRequest {

		/**Request parameters to initiate transfer. */
		properties?: InitiateTransferProperties;
	}


	/**Result of listing instructions. */
	export interface InstructionListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of instructions. */
		value?: Array<Instruction>;
	}


	/**A billing instruction used during invoice generation. */
	export interface InstructionProperties {

		/**The amount budgeted for this billing instruction. */
		amount: number;

		/**The date this billing instruction is no longer in effect. */
		endDate: Date;

		/**The date this billing instruction goes into effect. */
		startDate: Date;
	}


	/**Result of listing invoices. */
	export interface InvoiceListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of invoices. */
		value?: Array<Invoice>;
	}


	/**The properties of the invoice. */
	export interface InvoiceProperties {

		/**The Amount. */
		amountDue?: Amount;

		/**The Amount. */
		billedAmount?: Amount;

		/**The billing profile display name this invoice belongs to. */
		billingProfileDisplayName?: string;

		/**The billing profile id this invoice belongs to. */
		billingProfileId?: string;

		/**List of documents available to download including invoice and tax documents. */
		documents?: Array<Document>;

		/**The due date for invoice. */
		dueDate?: Date;

		/**The date when invoice was created. */
		invoiceDate?: Date;

		/**The end date of the billing period. */
		invoicePeriodEndDate?: Date;

		/**The start date of the billing period. */
		invoicePeriodStartDate?: Date;

		/**Invoice type. */
		invoiceType?: InvoicePropertiesInvoiceType;

		/**List of payments. */
		payments?: Array<PaymentProperties>;

		/**The purchase identifier for the invoice. */
		purchaseOrderNumber?: string;

		/**Invoice status. */
		status?: InvoicePropertiesStatus;
	}

	export enum InvoicePropertiesInvoiceType { AzureService = 0, AzureMarketplace = 1, AzureSupport = 2 }

	export enum InvoicePropertiesStatus { PastDue = 0, Due = 1, Paid = 2, Void = 3 }


	/**The properties of an InvoiceSection. */
	export interface InvoiceSectionCreationRequest {

		/**The name of the InvoiceSection. */
		displayName?: string;
	}


	/**Result of listing invoice sections. */
	export interface InvoiceSectionListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of invoice sections. */
		value?: Array<InvoiceSection>;
	}


	/**Result of listing invoice section properties with create subscription permission. */
	export interface InvoiceSectionListWithCreateSubPermissionResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of invoice section properties with create subscription permission. */
		value?: Array<InvoiceSectionWithCreateSubPermission>;
	}


	/**The properties of an InvoiceSection. */
	export interface InvoiceSectionProperties {

		/**The name of the InvoiceSection. */
		displayName?: string;
	}


	/**Invoice section properties with create subscription permission. */
	export interface InvoiceSectionWithCreateSubPermission {

		/**Billing profile display name. */
		billingProfileDisplayName?: string;

		/**Billing profile Id. */
		billingProfileId?: string;

		/**Enabled azure plans for the associated billing profile. */
		enabledAzurePlans?: Array<AzurePlan>;

		/**Invoice Section display name. */
		invoiceSectionDisplayName?: string;

		/**Invoice Section Id. */
		invoiceSectionId?: string;
	}


	/**The properties of the line of credit. */
	export interface LineOfCreditProperties {

		/**The Amount. */
		creditLimit?: Amount;

		/**The reason for the line of credit status when not approved. */
		reason?: string;

		/**The Amount. */
		remainingBalance?: Amount;

		/**The line of credit status. */
		status?: LineOfCreditPropertiesStatus;
	}

	export enum LineOfCreditPropertiesStatus { Approved = 0, Rejected = 1 }


	/**A Billing REST API operation. */
	export interface Operation {

		/**The object that represents the operation. */
		display?: string;

		/**Operation name: {provider}/{resource}/{operation}. */
		name?: string;
	}


	/**Result listing billing operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/**URL to get the next set of operation list results if there are any. */
		nextLink?: string;

		/**List of billing operations supported by the Microsoft.Billing resource provider. */
		value?: Array<Operation>;
	}


	/**Details about the participant or signer. */
	export interface Participants {

		/**The email address of the participant or signer. */
		email?: string;

		/**The signing status */
		status?: string;

		/**The date when status got changed. */
		statusDate?: Date;
	}


	/**The properties of the payment method. */
	export interface PaymentMethodProperties {

		/**The currency associated with the payment method. */
		currency?: string;

		/**Details about the payment method. */
		details?: string;

		/**Expiration month and year. */
		expiration?: string;

		/**Payment method type. */
		paymentMethodType?: PaymentMethodPropertiesPaymentMethodType;
	}

	export enum PaymentMethodPropertiesPaymentMethodType { Credits = 0, ChequeWire = 1 }


	/**Result of listing payment methods. */
	export interface PaymentMethodsListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of payment methods. */
		value?: Array<PaymentMethod>;
	}


	/**The properties of the payment. */
	export interface PaymentProperties {

		/**The Amount. */
		amount?: Amount;

		/**The date of the payment. */
		date?: Date;

		/**The payment method family. */
		paymentMethodFamily?: PaymentPropertiesPaymentMethodFamily;

		/**The type of payment method. */
		paymentMethodType?: string;

		/**The type of payment. */
		paymentType?: string;
	}

	export enum PaymentPropertiesPaymentMethodFamily { Credits = 0, CheckWire = 1, CreditCard = 2, None = 3 }


	/**The properties of policy. */
	export interface PolicyProperties {

		/**The marketplace purchases are free, allowed or not allowed. */
		marketplacePurchases?: PolicyPropertiesMarketplacePurchases;

		/**The reservation purchases allowed or not. */
		reservationPurchases?: PolicyPropertiesReservationPurchases;

		/**Who can view charges. */
		viewCharges?: PolicyPropertiesViewCharges;
	}

	export enum PolicyPropertiesMarketplacePurchases { AllAllowed = 0, OnlyFreeAllowed = 1, NotAllowed = 2 }

	export enum PolicyPropertiesReservationPurchases { Allowed = 0, NotAllowed = 1 }

	export enum PolicyPropertiesViewCharges { Allowed = 0, NotAllowed = 1 }


	/**Details of the product to be transferred. */
	export interface ProductDetails {

		/**Id of product to be transferred. */
		productId?: string;

		/**Type of the product to be transferred. */
		productType?: ProductDetailsProductType;
	}

	export enum ProductDetailsProductType { AzureSubscription = 0, AzureReservation = 1 }


	/**The properties of the product. */
	export interface ProductProperties {

		/**Availability Id. */
		availabilityId?: string;

		/**Billing frequency. */
		billingFrequency?: ProductPropertiesBillingFrequency;

		/**Billing Profile display name to which this product belongs. */
		billingProfileDisplayName?: string;

		/**Billing Profile id to which this product belongs. */
		billingProfileId?: string;

		/**Display name of customer to which this product belongs. */
		customerDisplayName?: string;

		/**Customer id to which this product belongs. */
		customerId?: string;

		/**The display name of the product. */
		displayName?: string;

		/**end date. */
		endDate?: Date;

		/**Invoice section display name to which this product belongs. */
		invoiceSectionDisplayName?: string;

		/**Invoice section id to which this product belongs. */
		invoiceSectionId?: string;

		/**The Amount. */
		lastCharge?: Amount;

		/**The date of the last charge. */
		lastChargeDate?: Date;

		/**Parent Product Id. */
		parentProductId?: string;

		/**The type of product. */
		productType?: string;

		/**The product type id. */
		productTypeId?: string;

		/**The date of purchase. */
		purchaseDate?: Date;

		/**The purchased product quantity. */
		quantity?: number;

		/**Details about a reseller. */
		reseller?: Reseller;

		/**Sku description. */
		skuDescription?: string;

		/**Sku Id. */
		skuId?: string;

		/**Product status. */
		status?: ProductPropertiesStatus;
	}

	export enum ProductPropertiesBillingFrequency { OneTime = 0, Monthly = 1, UsageBased = 2 }

	export enum ProductPropertiesStatus { Active = 0, Inactive = 1, PastDue = 2, Expiring = 3, Expired = 4, Disabled = 5, Cancelled = 6, AutoRenew = 7 }


	/**Possible transfer status. */
	export enum ProductTransferStatus { NotStarted = 0, InProgress = 1, Completed = 2, Failed = 3 }


	/**Error code of the transfer validation response. */
	export enum ProductTransferValidationErrorCode { InvalidSource = 0, ProductNotActive = 1, InsufficientPermissionOnSource = 2, InsufficientPermissionOnDestination = 3, DestinationBillingProfilePastDue = 4, ProductTypeNotSupported = 5, CrossBillingAccountNotAllowed = 6, NotAvailableForDestinationMarket = 7, OneTimePurchaseProductTransferNotAllowed = 8 }


	/**Type of the product to be transferred. */
	export enum ProductType { AzureSubscription = 0, AzureReservation = 1 }


	/**Result of listing products. It contains a list of available products summaries in reverse chronological order by purchase date. */
	export interface ProductsListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of products. */
		value?: Array<Product>;
	}


	/**Details of the transfer. */
	export interface RecipientTransferDetails {

		/**Transfer Details. */
		properties?: RecipientTransferProperties;
	}


	/**Result of listing details of the transfer received by caller. */
	export interface RecipientTransferDetailsListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of transfers received by caller. */
		value?: Array<RecipientTransferDetails>;
	}


	/**Transfer Details. */
	export interface RecipientTransferProperties {

		/**Type of subscriptions that can be transferred. */
		allowedProductType?: Array<EligibleProductType>;

		/**Email Id who user canceled the transfer. */
		canceledBy?: string;

		/**Transfer creation time. */
		creationTime?: Date;

		/**Detailed transfer status. */
		detailedTransferStatus?: Array<DetailedTransferStatus>;

		/**Transfer expiration time. */
		expirationTime?: Date;

		/**Customer type of the initiator. */
		initiatorCustomerType?: string;

		/**Email Id of initiator of transfer. */
		initiatorEmailId?: string;

		/**Transfer last modification time. */
		lastModifiedTime?: Date;

		/**Email Id of recipient of transfer. */
		recipientEmailId?: string;

		/**Reseller Id for transfer. */
		resellerId?: string;

		/**Reseller name for transfer. */
		resellerName?: string;

		/**Possible transfer status. */
		transferStatus?: RecipientTransferPropertiesTransferStatus;
	}

	export enum RecipientTransferPropertiesTransferStatus { Pending = 0, InProgress = 1, Completed = 2, CompletedWithErrors = 3, Failed = 4, Canceled = 5, Declined = 6 }


	/**Details about a reseller. */
	export interface Reseller {

		/**A description of the reseller. */
		description?: string;

		/**The reseller id. */
		resellerId?: string;
	}


	/**The Resource model definition. */
	export interface Resource {

		/**Resource Id. */
		id?: string;

		/**Resource name. */
		name?: string;

		/**Resource type. */
		type?: string;
	}


	/**Error code of the transfer validation response. */
	export enum SubscriptionTransferValidationErrorCode { InvalidSource = 0, SubscriptionNotActive = 1, InsufficientPermissionOnSource = 2, InsufficientPermissionOnDestination = 3, DestinationBillingProfilePastDue = 4, SubscriptionTypeNotSupported = 5, CrossBillingAccountNotAllowed = 6, NotAvailableForDestinationMarket = 7 }


	/**Result of listing reservation transactions. */
	export interface TransactionListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of reservation transactions. */
		value?: Array<Transaction>;
	}


	/**The properties of the reservation transaction. */
	export interface TransactionProperties {

		/**Billing Profile display name to which this product belongs. */
		billingProfileDisplayName?: string;

		/**Billing Profile id to which this product belongs. */
		billingProfileId?: string;

		/**Display name of customer to which this product belongs. */
		customerDisplayName?: string;

		/**Customer id to which this product belongs. */
		customerId?: string;

		/**The date of reservation transaction. */
		date?: Date;

		/**Invoice number or 'pending' if not invoiced. */
		invoice?: string;

		/**Invoice section display name to which this product belongs. */
		invoiceSectionDisplayName?: string;

		/**Invoice section id to which this product belongs. */
		invoiceSectionId?: string;

		/**The kind of transaction. Choices are all and reservation. */
		kind?: TransactionPropertiesKind;

		/**The reservation order id. */
		orderId?: string;

		/**The reservation order name. */
		orderName?: string;

		/**Product description. */
		productDescription?: string;

		/**The product family. */
		productFamily?: string;

		/**The type of product. */
		productType?: string;

		/**The product type id. */
		productTypeId?: string;

		/**Purchase quantity. */
		quantity?: number;

		/**The subscription id. */
		subscriptionId?: string;

		/**The subscription name. */
		subscriptionName?: string;

		/**The Amount. */
		transactionAmount?: Amount;

		/**Transaction types. */
		transactionType?: TransactionPropertiesTransactionType;
	}

	export enum TransactionPropertiesKind { all = 0, reservation = 1 }

	export enum TransactionPropertiesTransactionType { Purchase = 0, Usage Charge = 1 }


	/**Request parameters to transfer billing subscription. */
	export interface TransferBillingSubscriptionRequest {

		/**Request parameters to transfer billing subscription. */
		properties?: TransferBillingSubscriptionRequestProperties;
	}


	/**Request parameters to transfer billing subscription. */
	export interface TransferBillingSubscriptionRequestProperties {

		/**The destination billing profile id. */
		destinationBillingProfileId?: string;

		/**The destination invoice section id. */
		destinationInvoiceSectionId?: string;
	}


	/**Request parameters to transfer billing subscription. */
	export interface TransferBillingSubscriptionResult {

		/**Transfer billing subscription result properties. */
		properties?: TransferBillingSubscriptionResultProperties;
	}


	/**Transfer billing subscription result properties. */
	export interface TransferBillingSubscriptionResultProperties {

		/**The destination billing subscription id. */
		billingSubscriptionName?: string;
	}


	/**Details of the transfer. */
	export interface TransferDetails {

		/**Transfer details */
		properties?: TransferProperties;
	}


	/**Result of listing details of the transfer initiated by caller. */
	export interface TransferDetailsListResult {

		/**The link (url) to the next page of results. */
		nextLink?: string;

		/**The list of transfers initiated by caller. */
		value?: Array<TransferDetails>;
	}


	/**The properties of the product to initiate a transfer. */
	export interface TransferProductRequestProperties {

		/**The destination billing profile id. */
		destinationBillingProfileId?: string;

		/**The destination invoice section id. */
		destinationInvoiceSectionId?: string;
	}


	/**Transfer details */
	export interface TransferProperties {

		/**Target billing account Id. */
		billingAccountId?: string;

		/**Target billing profile Id. */
		billingProfileId?: string;

		/**Email Id who user canceled the transfer. */
		canceledBy?: string;

		/**Transfer creation time. */
		creationTime?: Date;

		/**Detailed transfer status. */
		detailedTransferStatus?: Array<DetailedTransferStatus>;

		/**Transfer expiration time. */
		expirationTime?: Date;

		/**Customer type of the initiator. */
		initiatorCustomerType?: string;

		/**Email Id of initiator of transfer. */
		initiatorEmailId?: string;

		/**Target invoice section Id. */
		invoiceSectionId?: string;

		/**Transfer last modification time. */
		lastModifiedTime?: Date;

		/**Email Id of recipient of transfer. */
		recipientEmailId?: string;

		/**Reseller Id for transfer. */
		resellerId?: string;

		/**Reseller name for transfer. */
		resellerName?: string;

		/**Possible transfer status. */
		transferStatus?: TransferPropertiesTransferStatus;
	}

	export enum TransferPropertiesTransferStatus { Pending = 0, InProgress = 1, Completed = 2, CompletedWithErrors = 3, Failed = 4, Canceled = 5, Declined = 6 }


	/**Possible transfer status. */
	export enum TransferStatus { Pending = 0, InProgress = 1, Completed = 2, CompletedWithErrors = 3, Failed = 4, Canceled = 5, Declined = 6 }


	/**Summary of cancel product operation */
	export interface UpdateAutoRenewOperation {

		/**update auto renew operation properties */
		properties?: UpdateAutoRenewOperationProperties;
	}


	/**update auto renew operation properties */
	export interface UpdateAutoRenewOperationProperties {

		/**The end date of this asset */
		endDate?: Date;
	}


	/**Request parameters to update auto renew for support product. */
	export interface UpdateAutoRenewRequest {

		/**Request parameters to update auto renew policy a product. */
		autoRenew?: UpdateAutoRenewRequestAutoRenew;
	}

	export enum UpdateAutoRenewRequestAutoRenew { true = 0, false = 1 }


	/**Result of the address validation */
	export interface ValidateAddressResponse {

		/**Status of the address validation response. */
		status?: ValidateAddressResponseStatus;

		/**list of suggested addresses. */
		suggestedAddresses?: Array<AddressDetails>;

		/**Validation error message. */
		validationMessage?: string;
	}

	export enum ValidateAddressResponseStatus { Valid = 0, Invalid = 1 }


	/**Error details of the product transfer eligibility validation. */
	export interface ValidateProductTransferEligibilityError {

		/**Error code of the transfer validation response. */
		code?: ValidateProductTransferEligibilityErrorCode;

		/**Detailed error message explaining the error. */
		details?: string;

		/**The error message. */
		message?: string;
	}

	export enum ValidateProductTransferEligibilityErrorCode { InvalidSource = 0, ProductNotActive = 1, InsufficientPermissionOnSource = 2, InsufficientPermissionOnDestination = 3, DestinationBillingProfilePastDue = 4, ProductTypeNotSupported = 5, CrossBillingAccountNotAllowed = 6, NotAvailableForDestinationMarket = 7, OneTimePurchaseProductTransferNotAllowed = 8 }


	/**Result of the product transfer eligibility validation. */
	export interface ValidateProductTransferEligibilityResult {

		/**Error details of the product transfer eligibility validation. */
		errorDetails?: ValidateProductTransferEligibilityError;

		/**Specifies whether the transfer is eligible or not. */
		isTransferEligible?: boolean;
	}


	/**Error details of the transfer eligibility validation */
	export interface ValidateSubscriptionTransferEligibilityError {

		/**Error code of the transfer validation response. */
		code?: ValidateSubscriptionTransferEligibilityErrorCode;

		/**Detailed error message explaining the error. */
		details?: string;

		/**The error message. */
		message?: string;
	}

	export enum ValidateSubscriptionTransferEligibilityErrorCode { InvalidSource = 0, SubscriptionNotActive = 1, InsufficientPermissionOnSource = 2, InsufficientPermissionOnDestination = 3, DestinationBillingProfilePastDue = 4, SubscriptionTypeNotSupported = 5, CrossBillingAccountNotAllowed = 6, NotAvailableForDestinationMarket = 7 }


	/**Result of the transfer eligibility validation. */
	export interface ValidateSubscriptionTransferEligibilityResult {

		/**Error details of the transfer eligibility validation */
		errorDetails?: ValidateSubscriptionTransferEligibilityError;

		/**Specifies whether the transfer is eligible or not. */
		isTransferEligible?: boolean;
	}


	/**Result of transfer validation. */
	export interface ValidateTransferListResponse {

		/**The list of transfer validation results. */
		value?: Array<ValidateTransferResponse>;
	}


	/**Transfer validation response. */
	export interface ValidateTransferResponse {

		/**Properties of transfer validation response. */
		properties?: ValidateTransferResponseProperties;
	}


	/**Properties of transfer validation response. */
	export interface ValidateTransferResponseProperties {

		/**The product id for which this result applies. */
		productId?: string;

		/**Array of validation results. */
		results?: Array<ValidationResultProperties>;

		/**The status of validation */
		status?: string;
	}


	/**The properties of the validation result. */
	export interface ValidationResultProperties {

		/**Result Code. */
		code?: string;

		/**Result Level. */
		level?: string;

		/**The validation message. */
		message?: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all billing accounts for a user which he has access to.
		 * Get providers/Microsoft.Billing/billingAccounts
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} expand May be used to expand the address, invoiceSections and billingProfiles.
		 * @return {BillingAccountListResult} OK. The request has succeeded.
		 */
		BillingAccounts_List(api_version: string, expand: string, headersHandler?: () => HttpHeaders): Observable<BillingAccountListResult> {
			return this.http.get<BillingAccountListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the billing account by id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} expand May be used to expand the address, invoiceSections and billingProfiles.
		 * @return {BillingAccount} OK. The request has succeeded.
		 */
		BillingAccounts_Get(api_version: string, billingAccountName: string, expand: string, headersHandler?: () => HttpHeaders): Observable<BillingAccount> {
			return this.http.get<BillingAccount>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all agreements for a billing account.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/agreements
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} expand May be used to expand the participants.
		 * @return {AgreementListResult} OK. The request has succeeded.
		 */
		Agreements_ListByBillingAccount(api_version: string, billingAccountName: string, expand: string, headersHandler?: () => HttpHeaders): Observable<AgreementListResult> {
			return this.http.get<AgreementListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/agreements?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the agreement by name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/agreements/{agreementName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} agreementName Agreement Id.
		 * @param {string} expand May be used to expand the participants.
		 * @return {Agreement} OK. The request has succeeded.
		 */
		Agreements_Get(api_version: string, billingAccountName: string, agreementName: string, expand: string, headersHandler?: () => HttpHeaders): Observable<Agreement> {
			return this.http.get<Agreement>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/agreements/' + (agreementName == null ? '' : encodeURIComponent(agreementName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all billing permissions for the caller under a billing account.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingPermissions
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @return {BillingPermissionsListResult} OK. The request has succeeded.
		 */
		BillingPermissions_ListByBillingAccount(api_version: string, billingAccountName: string, headersHandler?: () => HttpHeaders): Observable<BillingPermissionsListResult> {
			return this.http.get<BillingPermissionsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingPermissions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all billing profiles for a user which that user has access to.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} expand May be used to expand the invoiceSections.
		 * @return {BillingProfileListResult} OK. The request has succeeded.
		 */
		BillingProfiles_ListByBillingAccount(api_version: string, billingAccountName: string, expand: string, headersHandler?: () => HttpHeaders): Observable<BillingProfileListResult> {
			return this.http.get<BillingProfileListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the billing profile by id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} expand May be used to expand the invoiceSections.
		 * @return {BillingProfile} OK. The request has succeeded.
		 */
		BillingProfiles_Get(api_version: string, billingAccountName: string, billingProfileName: string, expand: string, headersHandler?: () => HttpHeaders): Observable<BillingProfile> {
			return this.http.get<BillingProfile>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The operation to create a BillingProfile.
		 * Put providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {BillingProfileCreationRequest} requestBody Request parameters supplied to the Create BillingProfile operation.
		 * @return {BillingProfile} OK. The request has succeeded.
		 */
		BillingProfiles_Create(api_version: string, billingAccountName: string, billingProfileName: string, requestBody: BillingProfileCreationRequest, headersHandler?: () => HttpHeaders): Observable<BillingProfile> {
			return this.http.put<BillingProfile>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * The latest available credit balance for a given billingAccountName and billingProfileName.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/availableBalance/default
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {AvailableBalance} OK. The request has succeeded.
		 */
		AvailableBalances_GetByBillingProfile(billingAccountName: string, billingProfileName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<AvailableBalance> {
			return this.http.get<AvailableBalance>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/availableBalance/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all billing permissions the caller has for a billing account.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingPermissions
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @return {BillingPermissionsListResult} OK. The request has succeeded.
		 */
		BillingPermissions_ListByBillingProfile(api_version: string, billingAccountName: string, billingProfileName: string, headersHandler?: () => HttpHeaders): Observable<BillingPermissionsListResult> {
			return this.http.get<BillingPermissionsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/billingPermissions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the role assignments on the Billing Profile
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleAssignments
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @return {BillingRoleAssignmentListResult} OK. The request has succeeded.
		 */
		BillingRoleAssignments_ListByBillingProfile(api_version: string, billingAccountName: string, billingProfileName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleAssignmentListResult> {
			return this.http.get<BillingRoleAssignmentListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/billingRoleAssignments?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the role assignment for the caller on the Billing Profile
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleAssignments/{billingRoleAssignmentName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} billingRoleAssignmentName role assignment id.
		 * @return {BillingRoleAssignment} OK. The request has succeeded.
		 */
		BillingRoleAssignments_GetByBillingProfile(api_version: string, billingAccountName: string, billingProfileName: string, billingRoleAssignmentName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleAssignment> {
			return this.http.get<BillingRoleAssignment>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/billingRoleAssignments/' + (billingRoleAssignmentName == null ? '' : encodeURIComponent(billingRoleAssignmentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete the role assignment on this Billing Profile
		 * Delete providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleAssignments/{billingRoleAssignmentName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} billingRoleAssignmentName role assignment id.
		 * @return {BillingRoleAssignment} OK. The request has succeeded.
		 */
		BillingRoleAssignments_DeleteByBillingProfile(api_version: string, billingAccountName: string, billingProfileName: string, billingRoleAssignmentName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleAssignment> {
			return this.http.delete<BillingRoleAssignment>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/billingRoleAssignments/' + (billingRoleAssignmentName == null ? '' : encodeURIComponent(billingRoleAssignmentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the role definition for a Billing Profile
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleDefinitions
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @return {BillingRoleDefinitionListResult} OK. The request has succeeded.
		 */
		BillingRoleDefinitions_ListByBillingProfile(api_version: string, billingAccountName: string, billingProfileName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleDefinitionListResult> {
			return this.http.get<BillingRoleDefinitionListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/billingRoleDefinitions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the role definition for a role
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleDefinitions/{billingRoleDefinitionName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} billingRoleDefinitionName role definition id.
		 * @return {BillingRoleDefinition} OK. The request has succeeded.
		 */
		BillingRoleDefinitions_GetByBillingProfile(api_version: string, billingAccountName: string, billingProfileName: string, billingRoleDefinitionName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleDefinition> {
			return this.http.get<BillingRoleDefinition>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/billingRoleDefinitions/' + (billingRoleDefinitionName == null ? '' : encodeURIComponent(billingRoleDefinitionName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists billing subscriptions by billing profile name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingSubscriptions
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {BillingSubscriptionsListResult} OK. The request has succeeded.
		 */
		BillingSubscriptions_ListByBillingProfile(billingAccountName: string, billingProfileName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<BillingSubscriptionsListResult> {
			return this.http.get<BillingSubscriptionsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/billingSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The operation to add a role assignment to a billing profile.
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/createBillingRoleAssignment
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {BillingRoleAssignmentPayload} requestBody Parameters supplied to add a role assignment.
		 * @return {void} 
		 */
		BillingRoleAssignments_AddByBillingProfile(api_version: string, billingAccountName: string, billingProfileName: string, requestBody: BillingRoleAssignmentPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/createBillingRoleAssignment?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists customers by billing profile which the current user can work with on-behalf of a partner.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} filter May be used to filter the list of customers.
		 * @param {string} skiptoken Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
		 * @return {CustomerListResult} OK. The request has succeeded.
		 */
		Customers_ListByBillingProfile(api_version: string, billingAccountName: string, billingProfileName: string, filter: string, skiptoken: string, headersHandler?: () => HttpHeaders): Observable<CustomerListResult> {
			return this.http.get<CustomerListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/customers?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Initiates the request to transfer the legacy subscriptions or RIs.
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/initiateTransfer
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} customerName Customer name.
		 * @param {InitiateTransferRequest} requestBody Parameters supplied to initiate the transfer.
		 * @return {TransferDetails} Initiated transfer details.
		 */
		PartnerTransfers_Initiate(billingAccountName: string, billingProfileName: string, customerName: string, requestBody: InitiateTransferRequest, headersHandler?: () => HttpHeaders): Observable<TransferDetails> {
			return this.http.post<TransferDetails>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/customers/' + (customerName == null ? '' : encodeURIComponent(customerName)) + '/initiateTransfer', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all transfer's details initiated from given invoice section.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/transfers
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} customerName Customer name.
		 * @return {TransferDetailsListResult} List of transfers initiated from this invoice section.
		 */
		PartnerTransfers_List(billingAccountName: string, billingProfileName: string, customerName: string, headersHandler?: () => HttpHeaders): Observable<TransferDetailsListResult> {
			return this.http.get<TransferDetailsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/customers/' + (customerName == null ? '' : encodeURIComponent(customerName)) + '/transfers', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the transfer details for given transfer Id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/transfers/{transferName}
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} customerName Customer name.
		 * @param {string} transferName Transfer Name.
		 * @return {TransferDetails} Details of transfer.
		 */
		PartnerTransfers_Get(billingAccountName: string, billingProfileName: string, customerName: string, transferName: string, headersHandler?: () => HttpHeaders): Observable<TransferDetails> {
			return this.http.get<TransferDetails>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/customers/' + (customerName == null ? '' : encodeURIComponent(customerName)) + '/transfers/' + (transferName == null ? '' : encodeURIComponent(transferName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Cancels the transfer for given transfer Id.
		 * Delete providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/transfers/{transferName}
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} customerName Customer name.
		 * @param {string} transferName Transfer Name.
		 * @return {TransferDetails} Details of canceled transfer.
		 */
		PartnerTransfers_Cancel(billingAccountName: string, billingProfileName: string, customerName: string, transferName: string, headersHandler?: () => HttpHeaders): Observable<TransferDetails> {
			return this.http.delete<TransferDetails>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/customers/' + (customerName == null ? '' : encodeURIComponent(customerName)) + '/transfers/' + (transferName == null ? '' : encodeURIComponent(transferName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the instructions by billing profile id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/instructions
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {InstructionListResult} OK. The request has succeeded.
		 */
		Instructions_ListByBillingProfile(billingAccountName: string, billingProfileName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<InstructionListResult> {
			return this.http.get<InstructionListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/instructions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the instruction by name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/instructions/{instructionName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} instructionName Instruction Name.
		 * @return {Instruction} OK. The request has succeeded.
		 */
		Instructions_Get(api_version: string, billingAccountName: string, billingProfileName: string, instructionName: string, headersHandler?: () => HttpHeaders): Observable<Instruction> {
			return this.http.get<Instruction>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/instructions/' + (instructionName == null ? '' : encodeURIComponent(instructionName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The operation to create or update a instruction.
		 * Put providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/instructions/{instructionName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} instructionName Instruction Name.
		 * @param {Instruction} requestBody The new instruction.
		 * @return {Instruction} OK. The request has succeeded.
		 */
		Instructions_Put(api_version: string, billingAccountName: string, billingProfileName: string, instructionName: string, requestBody: Instruction, headersHandler?: () => HttpHeaders): Observable<Instruction> {
			return this.http.put<Instruction>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/instructions/' + (instructionName == null ? '' : encodeURIComponent(instructionName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all invoice sections for a user which he has access to.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @return {InvoiceSectionListResult} OK. The request has succeeded.
		 */
		InvoiceSections_ListByBillingProfile(api_version: string, billingAccountName: string, billingProfileName: string, headersHandler?: () => HttpHeaders): Observable<InvoiceSectionListResult> {
			return this.http.get<InvoiceSectionListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the InvoiceSection by id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @return {InvoiceSection} OK. The request has succeeded.
		 */
		InvoiceSections_Get(api_version: string, billingAccountName: string, billingProfileName: string, invoiceSectionName: string, headersHandler?: () => HttpHeaders): Observable<InvoiceSection> {
			return this.http.get<InvoiceSection>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The operation to create an invoice section.
		 * Put providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {InvoiceSectionCreationRequest} requestBody Request parameters supplied to the Create InvoiceSection operation.
		 * @return {InvoiceSection} OK. The request has succeeded.
		 */
		InvoiceSections_Create(api_version: string, billingAccountName: string, billingProfileName: string, invoiceSectionName: string, requestBody: InvoiceSectionCreationRequest, headersHandler?: () => HttpHeaders): Observable<InvoiceSection> {
			return this.http.put<InvoiceSection>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all billing permissions for the caller under invoice section.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingPermissions
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @return {BillingPermissionsListResult} OK. The request has succeeded.
		 */
		BillingPermissions_ListByInvoiceSections(api_version: string, billingAccountName: string, billingProfileName: string, invoiceSectionName: string, headersHandler?: () => HttpHeaders): Observable<BillingPermissionsListResult> {
			return this.http.get<BillingPermissionsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/billingPermissions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the role assignments on the invoice Section
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleAssignments
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @return {BillingRoleAssignmentListResult} OK. The request has succeeded.
		 */
		BillingRoleAssignments_ListByInvoiceSection(api_version: string, billingAccountName: string, billingProfileName: string, invoiceSectionName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleAssignmentListResult> {
			return this.http.get<BillingRoleAssignmentListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/billingRoleAssignments?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the role assignment for the caller on the invoice Section
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleAssignments/{billingRoleAssignmentName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} billingRoleAssignmentName role assignment id.
		 * @return {BillingRoleAssignment} OK. The request has succeeded.
		 */
		BillingRoleAssignments_GetByInvoiceSection(api_version: string, billingAccountName: string, billingProfileName: string, invoiceSectionName: string, billingRoleAssignmentName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleAssignment> {
			return this.http.get<BillingRoleAssignment>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/billingRoleAssignments/' + (billingRoleAssignmentName == null ? '' : encodeURIComponent(billingRoleAssignmentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete the role assignment on the invoice Section
		 * Delete providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleAssignments/{billingRoleAssignmentName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} billingRoleAssignmentName role assignment id.
		 * @return {BillingRoleAssignment} OK. The request has succeeded.
		 */
		BillingRoleAssignments_DeleteByInvoiceSection(api_version: string, billingAccountName: string, billingProfileName: string, invoiceSectionName: string, billingRoleAssignmentName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleAssignment> {
			return this.http.delete<BillingRoleAssignment>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/billingRoleAssignments/' + (billingRoleAssignmentName == null ? '' : encodeURIComponent(billingRoleAssignmentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the role definition for an invoice Section
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleDefinitions
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @return {BillingRoleDefinitionListResult} OK. The request has succeeded.
		 */
		BillingRoleDefinitions_ListByInvoiceSection(api_version: string, billingAccountName: string, billingProfileName: string, invoiceSectionName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleDefinitionListResult> {
			return this.http.get<BillingRoleDefinitionListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/billingRoleDefinitions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the role definition for a role
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleDefinitions/{billingRoleDefinitionName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} billingRoleDefinitionName role definition id.
		 * @return {BillingRoleDefinition} OK. The request has succeeded.
		 */
		BillingRoleDefinitions_GetByInvoiceSection(api_version: string, billingAccountName: string, billingProfileName: string, invoiceSectionName: string, billingRoleDefinitionName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleDefinition> {
			return this.http.get<BillingRoleDefinition>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/billingRoleDefinitions/' + (billingRoleDefinitionName == null ? '' : encodeURIComponent(billingRoleDefinitionName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists billing subscription by invoice section name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingSubscriptions
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {BillingSubscriptionsListResult} OK. The request has succeeded.
		 */
		BillingSubscriptions_ListByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<BillingSubscriptionsListResult> {
			return this.http.get<BillingSubscriptionsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/billingSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a single billing subscription by name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingSubscriptions/{billingSubscriptionName}
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} billingSubscriptionName Billing Subscription Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {BillingSubscription} OK. The request has succeeded.
		 */
		BillingSubscriptions_Get(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, billingSubscriptionName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<BillingSubscription> {
			return this.http.get<BillingSubscription>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/billingSubscriptions/' + (billingSubscriptionName == null ? '' : encodeURIComponent(billingSubscriptionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Transfers the subscription from one invoice section to another within a billing account.
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingSubscriptions/{billingSubscriptionName}/transfer
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} billingSubscriptionName Billing Subscription Id.
		 * @param {TransferBillingSubscriptionRequestProperties} requestBody Request parameters supplied to the Transfer Billing Subscription operation.
		 * @return {TransferBillingSubscriptionResult} OK. The request has succeeded.
		 */
		BillingSubscriptions_Transfer(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, billingSubscriptionName: string, requestBody: TransferBillingSubscriptionRequestProperties, headersHandler?: () => HttpHeaders): Observable<TransferBillingSubscriptionResult> {
			return this.http.post<TransferBillingSubscriptionResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/billingSubscriptions/' + (billingSubscriptionName == null ? '' : encodeURIComponent(billingSubscriptionName)) + '/transfer', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Validates the transfer of billing subscriptions across invoice sections.
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingSubscriptions/{billingSubscriptionName}/validateTransferEligibility
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} billingSubscriptionName Billing Subscription Id.
		 * @param {TransferBillingSubscriptionRequestProperties} requestBody Parameters supplied to the Transfer Billing Subscription operation.
		 * @return {ValidateSubscriptionTransferEligibilityResult} OK. The request has succeeded.
		 */
		BillingSubscriptions_ValidateTransfer(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, billingSubscriptionName: string, requestBody: TransferBillingSubscriptionRequestProperties, headersHandler?: () => HttpHeaders): Observable<ValidateSubscriptionTransferEligibilityResult> {
			return this.http.post<ValidateSubscriptionTransferEligibilityResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/billingSubscriptions/' + (billingSubscriptionName == null ? '' : encodeURIComponent(billingSubscriptionName)) + '/validateTransferEligibility', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * The operation to add a role assignment to a invoice Section.
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/createBillingRoleAssignment
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {BillingRoleAssignmentPayload} requestBody Parameters supplied to add a role assignment.
		 * @return {void} 
		 */
		BillingRoleAssignments_AddByInvoiceSection(api_version: string, billingAccountName: string, billingProfileName: string, invoiceSectionName: string, requestBody: BillingRoleAssignmentPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/createBillingRoleAssignment?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Elevates the caller's access to match their billing profile access.
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/elevate
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @return {void} 
		 */
		InvoiceSections_ElevateToBillingProfile(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/elevate', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Initiates the request to transfer the legacy subscriptions or RIs.
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/initiateTransfer
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {InitiateTransferRequest} requestBody Parameters supplied to initiate the transfer.
		 * @return {TransferDetails} Initiated transfer details.
		 */
		Transfers_Initiate(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, requestBody: InitiateTransferRequest, headersHandler?: () => HttpHeaders): Observable<TransferDetails> {
			return this.http.post<TransferDetails>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/initiateTransfer', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists products by invoice section name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/products
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} filter May be used to filter by product type. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
		 * @return {ProductsListResult} OK. The request has succeeded.
		 */
		Products_ListByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, api_version: string, filter: string, headersHandler?: () => HttpHeaders): Observable<ProductsListResult> {
			return this.http.get<ProductsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/products&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a single product by name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/products/{productName}
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} productName Invoice Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {Product} OK. The request has succeeded.
		 */
		Products_Get(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Product> {
			return this.http.get<Product>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/products/' + (productName == null ? '' : encodeURIComponent(productName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The operation to transfer a Product to another invoice section.
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/products/{productName}/transfer
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} productName Invoice Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {TransferProductRequestProperties} requestBody Parameters supplied to the Transfer Product operation.
		 * @return {Product} OK. The request has succeeded.
		 */
		Products_Transfer(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, api_version: string, requestBody: TransferProductRequestProperties, headersHandler?: () => HttpHeaders): Observable<Product> {
			return this.http.post<Product>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/products/' + (productName == null ? '' : encodeURIComponent(productName)) + '/transfer&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Cancel auto renew for product by product id and invoice section name
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/products/{productName}/updateAutoRenew
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} productName Invoice Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {UpdateAutoRenewRequest} requestBody Update auto renew request parameters.
		 * @return {UpdateAutoRenewOperation} OK. The request has succeeded.
		 */
		Products_UpdateAutoRenewByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, api_version: string, requestBody: UpdateAutoRenewRequest, headersHandler?: () => HttpHeaders): Observable<UpdateAutoRenewOperation> {
			return this.http.post<UpdateAutoRenewOperation>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/products/' + (productName == null ? '' : encodeURIComponent(productName)) + '/updateAutoRenew&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Validates the transfer of products across invoice sections.
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/products/{productName}/validateTransferEligibility
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} productName Invoice Id.
		 * @param {TransferProductRequestProperties} requestBody Parameters supplied to the Transfer Products operation.
		 * @return {ValidateProductTransferEligibilityResult} OK. The request has succeeded.
		 */
		Products_ValidateTransfer(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, requestBody: TransferProductRequestProperties, headersHandler?: () => HttpHeaders): Observable<ValidateProductTransferEligibilityResult> {
			return this.http.post<ValidateProductTransferEligibilityResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/products/' + (productName == null ? '' : encodeURIComponent(productName)) + '/validateTransferEligibility', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the transactions by invoice section name for given start date and end date.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transactions
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} periodStartDate Start date
		 * @param {string} periodEndDate End date
		 * @param {string} filter May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
		 * @return {TransactionListResult} OK. The request has succeeded.
		 */
		Transactions_ListByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, api_version: string, periodStartDate: string, periodEndDate: string, filter: string, headersHandler?: () => HttpHeaders): Observable<TransactionListResult> {
			return this.http.get<TransactionListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/transactions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&periodStartDate=' + (periodStartDate == null ? '' : encodeURIComponent(periodStartDate)) + '&periodEndDate=' + (periodEndDate == null ? '' : encodeURIComponent(periodEndDate)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all transfer's details initiated from given invoice section.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transfers
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @return {TransferDetailsListResult} List of transfers initiated from this invoice section.
		 */
		Transfers_List(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, headersHandler?: () => HttpHeaders): Observable<TransferDetailsListResult> {
			return this.http.get<TransferDetailsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/transfers', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the transfer details for given transfer Id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transfers/{transferName}
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} transferName Transfer Name.
		 * @return {TransferDetails} Details of transfer.
		 */
		Transfers_Get(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, transferName: string, headersHandler?: () => HttpHeaders): Observable<TransferDetails> {
			return this.http.get<TransferDetails>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/transfers/' + (transferName == null ? '' : encodeURIComponent(transferName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Cancels the transfer for given transfer Id.
		 * Delete providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transfers/{transferName}
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceSectionName InvoiceSection Id.
		 * @param {string} transferName Transfer Name.
		 * @return {TransferDetails} Details of canceled transfer.
		 */
		Transfers_Cancel(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, transferName: string, headersHandler?: () => HttpHeaders): Observable<TransferDetails> {
			return this.http.delete<TransferDetails>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoiceSections/' + (invoiceSectionName == null ? '' : encodeURIComponent(invoiceSectionName)) + '/transfers/' + (transferName == null ? '' : encodeURIComponent(transferName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List of invoices for a billing profile.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoices
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} periodStartDate Invoice period start date.
		 * @param {string} periodEndDate Invoice period end date.
		 * @return {InvoiceListResult} OK. The request has succeeded.
		 */
		Invoices_ListByBillingProfile(api_version: string, billingAccountName: string, billingProfileName: string, periodStartDate: string, periodEndDate: string, headersHandler?: () => HttpHeaders): Observable<InvoiceListResult> {
			return this.http.get<InvoiceListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoices?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&periodStartDate=' + (periodStartDate == null ? '' : encodeURIComponent(periodStartDate)) + '&periodEndDate=' + (periodEndDate == null ? '' : encodeURIComponent(periodEndDate)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the invoice by name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoices/{invoiceName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceName Invoice Id.
		 * @return {Invoice} OK. The request has succeeded.
		 */
		Invoices_Get(api_version: string, billingAccountName: string, billingProfileName: string, invoiceName: string, headersHandler?: () => HttpHeaders): Observable<Invoice> {
			return this.http.get<Invoice>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoices/' + (invoiceName == null ? '' : encodeURIComponent(invoiceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download price sheet for an invoice.
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoices/{invoiceName}/pricesheet/default/download
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} invoiceName Invoice Id.
		 * @return {DownloadUrl} OK. The request has succeeded.
		 */
		PriceSheet_Download(api_version: string, billingAccountName: string, billingProfileName: string, invoiceName: string, headersHandler?: () => HttpHeaders): Observable<DownloadUrl> {
			return this.http.post<DownloadUrl>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/invoices/' + (invoiceName == null ? '' : encodeURIComponent(invoiceName)) + '/pricesheet/default/download?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the Payment Methods by billing profile Id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/paymentMethods
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {PaymentMethodsListResult} OK. The request has succeeded.
		 */
		PaymentMethods_ListByBillingProfile(billingAccountName: string, billingProfileName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<PaymentMethodsListResult> {
			return this.http.get<PaymentMethodsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/paymentMethods&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The policy for a given billing account name and billing profile name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/policies/default
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {Policy} OK. The request has succeeded.
		 */
		Policies_GetByBillingProfile(billingAccountName: string, billingProfileName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/policies/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The operation to update a policy.
		 * Put providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/policies/default
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {Policy} requestBody Parameters supplied to the update policy operation.
		 * @return {Policy} OK. The request has succeeded.
		 */
		Policies_Update(api_version: string, billingAccountName: string, billingProfileName: string, requestBody: Policy, headersHandler?: () => HttpHeaders): Observable<Policy> {
			return this.http.put<Policy>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/policies/default?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Download price sheet for a billing profile.
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/pricesheet/default/download
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @return {DownloadUrl} OK. The request has succeeded.
		 */
		PriceSheet_DownloadByBillingProfile(api_version: string, billingAccountName: string, billingProfileName: string, headersHandler?: () => HttpHeaders): Observable<DownloadUrl> {
			return this.http.post<DownloadUrl>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/pricesheet/default/download?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the transactions by billing profile name for given start date and end date.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/transactions
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} periodStartDate Start date
		 * @param {string} periodEndDate End date
		 * @param {string} filter May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
		 * @return {TransactionListResult} OK. The request has succeeded.
		 */
		Transactions_ListByBillingProfile(billingAccountName: string, billingProfileName: string, api_version: string, periodStartDate: string, periodEndDate: string, filter: string, headersHandler?: () => HttpHeaders): Observable<TransactionListResult> {
			return this.http.get<TransactionListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/transactions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&periodStartDate=' + (periodStartDate == null ? '' : encodeURIComponent(periodStartDate)) + '&periodEndDate=' + (periodEndDate == null ? '' : encodeURIComponent(periodEndDate)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the transaction.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/transactions/{transactionName}
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingProfileName Billing Profile Id.
		 * @param {string} transactionName Transaction name.
		 * @param {string} periodStartDate Start date
		 * @param {string} periodEndDate End date
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {Transaction} OK. The request has succeeded.
		 */
		Transactions_Get(billingAccountName: string, billingProfileName: string, transactionName: string, periodStartDate: string, periodEndDate: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Transaction> {
			return this.http.get<Transaction>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingProfiles/' + (billingProfileName == null ? '' : encodeURIComponent(billingProfileName)) + '/transactions/' + (transactionName == null ? '' : encodeURIComponent(transactionName)) + '&periodStartDate=' + (periodStartDate == null ? '' : encodeURIComponent(periodStartDate)) + '&periodEndDate=' + (periodEndDate == null ? '' : encodeURIComponent(periodEndDate)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the role assignments on the Billing Account
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleAssignments
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @return {BillingRoleAssignmentListResult} OK. The request has succeeded.
		 */
		BillingRoleAssignments_ListByBillingAccount(api_version: string, billingAccountName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleAssignmentListResult> {
			return this.http.get<BillingRoleAssignmentListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingRoleAssignments?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the role assignment for the caller
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleAssignments/{billingRoleAssignmentName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingRoleAssignmentName role assignment id.
		 * @return {BillingRoleAssignment} OK. The request has succeeded.
		 */
		BillingRoleAssignments_GetByBillingAccount(api_version: string, billingAccountName: string, billingRoleAssignmentName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleAssignment> {
			return this.http.get<BillingRoleAssignment>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingRoleAssignments/' + (billingRoleAssignmentName == null ? '' : encodeURIComponent(billingRoleAssignmentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete the role assignment on this billing account
		 * Delete providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleAssignments/{billingRoleAssignmentName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingRoleAssignmentName role assignment id.
		 * @return {BillingRoleAssignment} OK. The request has succeeded.
		 */
		BillingRoleAssignments_DeleteByBillingAccount(api_version: string, billingAccountName: string, billingRoleAssignmentName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleAssignment> {
			return this.http.delete<BillingRoleAssignment>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingRoleAssignments/' + (billingRoleAssignmentName == null ? '' : encodeURIComponent(billingRoleAssignmentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the role definition for a billing account
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleDefinitions
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @return {BillingRoleDefinitionListResult} OK. The request has succeeded.
		 */
		BillingRoleDefinitions_ListByBillingAccount(api_version: string, billingAccountName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleDefinitionListResult> {
			return this.http.get<BillingRoleDefinitionListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingRoleDefinitions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the role definition for a role
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleDefinitions/{billingRoleDefinitionName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingRoleDefinitionName role definition id.
		 * @return {BillingRoleDefinition} OK. The request has succeeded.
		 */
		BillingRoleDefinitions_GetByBillingAccount(api_version: string, billingAccountName: string, billingRoleDefinitionName: string, headersHandler?: () => HttpHeaders): Observable<BillingRoleDefinition> {
			return this.http.get<BillingRoleDefinition>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingRoleDefinitions/' + (billingRoleDefinitionName == null ? '' : encodeURIComponent(billingRoleDefinitionName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists billing subscriptions by billing account name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {BillingSubscriptionsListResult} OK. The request has succeeded.
		 */
		BillingSubscriptions_ListByBillingAccount(billingAccountName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<BillingSubscriptionsListResult> {
			return this.http.get<BillingSubscriptionsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists invoices by billing subscriptions name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}/invoices
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingSubscriptionName Billing Subscription Id.
		 * @param {string} periodStartDate Invoice period start date.
		 * @param {string} periodEndDate Invoice period end date.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {InvoiceListResult} OK. The request has succeeded.
		 */
		Invoices_ListByBillingSubscription(billingAccountName: string, billingSubscriptionName: string, periodStartDate: string, periodEndDate: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<InvoiceListResult> {
			return this.http.get<InvoiceListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingSubscriptions/' + (billingSubscriptionName == null ? '' : encodeURIComponent(billingSubscriptionName)) + '/invoices&periodStartDate=' + (periodStartDate == null ? '' : encodeURIComponent(periodStartDate)) + '&periodEndDate=' + (periodEndDate == null ? '' : encodeURIComponent(periodEndDate)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the invoice by name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}/invoices/{invoiceName}
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} billingSubscriptionName Billing Subscription Id.
		 * @param {string} invoiceName Invoice Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {Invoice} OK. The request has succeeded.
		 */
		Invoices_GetById(billingAccountName: string, billingSubscriptionName: string, invoiceName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Invoice> {
			return this.http.get<Invoice>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/billingSubscriptions/' + (billingSubscriptionName == null ? '' : encodeURIComponent(billingSubscriptionName)) + '/invoices/' + (invoiceName == null ? '' : encodeURIComponent(invoiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The operation to add a role assignment to a billing account.
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/createBillingRoleAssignment
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {BillingRoleAssignmentPayload} requestBody Parameters supplied to add a role assignment.
		 * @return {void} 
		 */
		BillingRoleAssignments_AddByBillingAccount(api_version: string, billingAccountName: string, requestBody: BillingRoleAssignmentPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/createBillingRoleAssignment?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists customers which the current user can work with on-behalf of a partner.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} filter May be used to filter the list of customers.
		 * @param {string} skiptoken Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
		 * @return {CustomerListResult} OK. The request has succeeded.
		 */
		Customers_ListByBillingAccount(api_version: string, billingAccountName: string, filter: string, skiptoken: string, headersHandler?: () => HttpHeaders): Observable<CustomerListResult> {
			return this.http.get<CustomerListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/customers?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a customer by its id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} customerName Customer name.
		 * @param {string} expand May be used to expand enabledAzurePlans, resellers.
		 * @return {Customer} OK. The request has succeeded.
		 */
		Customers_Get(api_version: string, billingAccountName: string, customerName: string, expand: string, headersHandler?: () => HttpHeaders): Observable<Customer> {
			return this.http.get<Customer>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/customers/' + (customerName == null ? '' : encodeURIComponent(customerName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all billing permissions the caller has for a customer.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/billingPermissions
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} customerName Customer name.
		 * @return {BillingPermissionsListResult} OK. The request has succeeded.
		 */
		BillingPermissions_ListByCustomer(api_version: string, billingAccountName: string, customerName: string, headersHandler?: () => HttpHeaders): Observable<BillingPermissionsListResult> {
			return this.http.get<BillingPermissionsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/customers/' + (customerName == null ? '' : encodeURIComponent(customerName)) + '/billingPermissions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists billing subscription by customer id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/billingSubscriptions
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} customerName Customer name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {BillingSubscriptionsListResult} OK. The request has succeeded.
		 */
		BillingSubscriptions_ListByCustomer(billingAccountName: string, customerName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<BillingSubscriptionsListResult> {
			return this.http.get<BillingSubscriptionsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/customers/' + (customerName == null ? '' : encodeURIComponent(customerName)) + '/billingSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a single billing subscription by id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/billingSubscriptions/{billingSubscriptionName}
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} customerName Customer name.
		 * @param {string} billingSubscriptionName Billing Subscription Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {BillingSubscription} OK. The request has succeeded.
		 */
		BillingSubscriptions_GetByCustomer(billingAccountName: string, customerName: string, billingSubscriptionName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<BillingSubscription> {
			return this.http.get<BillingSubscription>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/customers/' + (customerName == null ? '' : encodeURIComponent(customerName)) + '/billingSubscriptions/' + (billingSubscriptionName == null ? '' : encodeURIComponent(billingSubscriptionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The policy for a given billing account name and customer name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/policies/default
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} customerName Customer name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {CustomerPolicy} OK. The request has succeeded.
		 */
		Policies_GetByCustomer(billingAccountName: string, customerName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<CustomerPolicy> {
			return this.http.get<CustomerPolicy>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/customers/' + (customerName == null ? '' : encodeURIComponent(customerName)) + '/policies/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The operation to update a Customer policy.
		 * Put providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/policies/default
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} customerName Customer name.
		 * @param {CustomerPolicy} requestBody Parameters supplied to the update customer policy operation.
		 * @return {CustomerPolicy} OK. The request has succeeded.
		 */
		Policies_UpdateCustomer(api_version: string, billingAccountName: string, customerName: string, requestBody: CustomerPolicy, headersHandler?: () => HttpHeaders): Observable<CustomerPolicy> {
			return this.http.put<CustomerPolicy>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/customers/' + (customerName == null ? '' : encodeURIComponent(customerName)) + '/policies/default?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists products by customer id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/products
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} customerName Customer name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} filter May be used to filter by product type. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
		 * @return {ProductsListResult} OK. The request has succeeded.
		 */
		Products_ListByCustomer(billingAccountName: string, customerName: string, api_version: string, filter: string, headersHandler?: () => HttpHeaders): Observable<ProductsListResult> {
			return this.http.get<ProductsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/customers/' + (customerName == null ? '' : encodeURIComponent(customerName)) + '/products&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a customer's product by name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/products/{productName}
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} customerName Customer name.
		 * @param {string} productName Invoice Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {Product} OK. The request has succeeded.
		 */
		Products_GetByCustomer(billingAccountName: string, customerName: string, productName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Product> {
			return this.http.get<Product>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/customers/' + (customerName == null ? '' : encodeURIComponent(customerName)) + '/products/' + (productName == null ? '' : encodeURIComponent(productName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the transactions by customer id for given start date and end date.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/transactions
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} customerName Customer name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} periodStartDate Start date
		 * @param {string} periodEndDate End date
		 * @param {string} filter May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
		 * @return {TransactionListResult} OK. The request has succeeded.
		 */
		Transactions_ListByCustomer(billingAccountName: string, customerName: string, api_version: string, periodStartDate: string, periodEndDate: string, filter: string, headersHandler?: () => HttpHeaders): Observable<TransactionListResult> {
			return this.http.get<TransactionListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/customers/' + (customerName == null ? '' : encodeURIComponent(customerName)) + '/transactions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&periodStartDate=' + (periodStartDate == null ? '' : encodeURIComponent(periodStartDate)) + '&periodEndDate=' + (periodEndDate == null ? '' : encodeURIComponent(periodEndDate)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all departments for a user which he has access to.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} expand May be used to expand the enrollmentAccounts.
		 * @param {string} filter The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
		 * @return {DepartmentListResult} OK. The request has succeeded.
		 */
		Departments_ListByBillingAccountName(api_version: string, billingAccountName: string, expand: string, filter: string, headersHandler?: () => HttpHeaders): Observable<DepartmentListResult> {
			return this.http.get<DepartmentListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/departments?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the department by id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} departmentName Department Id.
		 * @param {string} expand May be used to expand the enrollmentAccounts.
		 * @param {string} filter The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
		 * @return {Department} OK. The request has succeeded.
		 */
		Departments_Get(api_version: string, billingAccountName: string, departmentName: string, expand: string, filter: string, headersHandler?: () => HttpHeaders): Observable<Department> {
			return this.http.get<Department>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/departments/' + (departmentName == null ? '' : encodeURIComponent(departmentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all Enrollment Accounts for a user which he has access to.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} expand May be used to expand the department.
		 * @param {string} filter The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
		 * @return {EnrollmentAccountListResult} OK. The request has succeeded.
		 */
		EnrollmentAccounts_ListByBillingAccountName(api_version: string, billingAccountName: string, expand: string, filter: string, headersHandler?: () => HttpHeaders): Observable<EnrollmentAccountListResult> {
			return this.http.get<EnrollmentAccountListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/enrollmentAccounts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the enrollment account by id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} enrollmentAccountName Enrollment Account Id.
		 * @param {string} expand May be used to expand the Department.
		 * @param {string} filter The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
		 * @return {EnrollmentAccount} OK. The request has succeeded.
		 */
		EnrollmentAccounts_GetByEnrollmentAccountId(api_version: string, billingAccountName: string, enrollmentAccountName: string, expand: string, filter: string, headersHandler?: () => HttpHeaders): Observable<EnrollmentAccount> {
			return this.http.get<EnrollmentAccount>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/enrollmentAccounts/' + (enrollmentAccountName == null ? '' : encodeURIComponent(enrollmentAccountName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List of invoices for a billing account.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} periodStartDate Invoice period start date.
		 * @param {string} periodEndDate Invoice period end date.
		 * @return {InvoiceListResult} OK. The request has succeeded.
		 */
		Invoices_ListByBillingAccount(api_version: string, billingAccountName: string, periodStartDate: string, periodEndDate: string, headersHandler?: () => HttpHeaders): Observable<InvoiceListResult> {
			return this.http.get<InvoiceListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/invoices?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&periodStartDate=' + (periodStartDate == null ? '' : encodeURIComponent(periodStartDate)) + '&periodEndDate=' + (periodEndDate == null ? '' : encodeURIComponent(periodEndDate)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all invoice sections with create subscription permission for a user.
		 * Post providers/Microsoft.Billing/billingAccounts/{billingAccountName}/listInvoiceSectionsWithCreateSubscriptionPermission
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} billingAccountName billing Account Id.
		 * @return {InvoiceSectionListWithCreateSubPermissionResult} OK. The request has succeeded.
		 */
		BillingAccounts_ListInvoiceSectionsByCreateSubscriptionPermission(api_version: string, billingAccountName: string, headersHandler?: () => HttpHeaders): Observable<InvoiceSectionListWithCreateSubPermissionResult> {
			return this.http.post<InvoiceSectionListWithCreateSubPermissionResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/listInvoiceSectionsWithCreateSubscriptionPermission?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the Payment Methods by billing account Id.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/paymentMethods
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {PaymentMethodsListResult} OK. The request has succeeded.
		 */
		PaymentMethods_ListByBillingAccount(billingAccountName: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<PaymentMethodsListResult> {
			return this.http.get<PaymentMethodsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/paymentMethods&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists products by billing account name.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} filter May be used to filter by product type. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
		 * @return {ProductsListResult} OK. The request has succeeded.
		 */
		Products_ListByBillingAccount(billingAccountName: string, api_version: string, filter: string, headersHandler?: () => HttpHeaders): Observable<ProductsListResult> {
			return this.http.get<ProductsListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/products&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the transactions by billing account name for given start and end date.
		 * Get providers/Microsoft.Billing/billingAccounts/{billingAccountName}/transactions
		 * @param {string} billingAccountName billing Account Id.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} periodStartDate Start date
		 * @param {string} periodEndDate End date
		 * @param {string} filter May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
		 * @return {TransactionListResult} OK. The request has succeeded.
		 */
		Transactions_ListByBillingAccount(billingAccountName: string, api_version: string, periodStartDate: string, periodEndDate: string, filter: string, headersHandler?: () => HttpHeaders): Observable<TransactionListResult> {
			return this.http.get<TransactionListResult>(this.baseUri + 'providers/Microsoft.Billing/billingAccounts/' + (billingAccountName == null ? '' : encodeURIComponent(billingAccountName)) + '/transactions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&periodStartDate=' + (periodStartDate == null ? '' : encodeURIComponent(periodStartDate)) + '&periodEndDate=' + (periodEndDate == null ? '' : encodeURIComponent(periodEndDate)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all of the available billing REST API operations.
		 * Get providers/Microsoft.Billing/operations
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string, headersHandler?: () => HttpHeaders): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Billing/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the transfers received by caller.
		 * Get providers/Microsoft.Billing/transfers
		 * @return {RecipientTransferDetailsListResult} List of transfers received by caller.
		 */
		RecipientTransfers_List(headersHandler?: () => HttpHeaders): Observable<RecipientTransferDetailsListResult> {
			return this.http.get<RecipientTransferDetailsListResult>(this.baseUri + 'providers/Microsoft.Billing/transfers', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the transfer with given transfer Id.
		 * Get providers/Microsoft.Billing/transfers/{transferName}
		 * @param {string} transferName Transfer Name.
		 * @return {RecipientTransferDetails} Details of the transfers with given Id.
		 */
		RecipientTransfers_Get(transferName: string, headersHandler?: () => HttpHeaders): Observable<RecipientTransferDetails> {
			return this.http.get<RecipientTransferDetails>(this.baseUri + 'providers/Microsoft.Billing/transfers/' + (transferName == null ? '' : encodeURIComponent(transferName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Accepts the transfer with given transfer Id.
		 * Post providers/Microsoft.Billing/transfers/{transferName}/acceptTransfer
		 * @param {string} transferName Transfer Name.
		 * @param {AcceptTransferRequest} requestBody Parameters supplied to accept the transfer.
		 * @return {RecipientTransferDetails} Details of the accepted transfer.
		 */
		RecipientTransfers_Accept(transferName: string, requestBody: AcceptTransferRequest, headersHandler?: () => HttpHeaders): Observable<RecipientTransferDetails> {
			return this.http.post<RecipientTransferDetails>(this.baseUri + 'providers/Microsoft.Billing/transfers/' + (transferName == null ? '' : encodeURIComponent(transferName)) + '/acceptTransfer', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Declines the transfer with given transfer Id.
		 * Post providers/Microsoft.Billing/transfers/{transferName}/declineTransfer
		 * @param {string} transferName Transfer Name.
		 * @return {RecipientTransferDetails} Details of the declined transfer.
		 */
		RecipientTransfers_Decline(transferName: string, headersHandler?: () => HttpHeaders): Observable<RecipientTransferDetails> {
			return this.http.post<RecipientTransferDetails>(this.baseUri + 'providers/Microsoft.Billing/transfers/' + (transferName == null ? '' : encodeURIComponent(transferName)) + '/declineTransfer', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Validates if the products can be transferred in the context of the given transfer name.
		 * Post providers/Microsoft.Billing/transfers/{transferName}/validateTransfer
		 * @param {string} transferName Transfer Name.
		 * @param {AcceptTransferRequest} requestBody Parameters supplied to validate the transfer.
		 * @return {ValidateTransferListResponse} Results of the transfer validation.
		 */
		RecipientTransfers_Validate(transferName: string, requestBody: AcceptTransferRequest, headersHandler?: () => HttpHeaders): Observable<ValidateTransferListResponse> {
			return this.http.post<ValidateTransferListResponse>(this.baseUri + 'providers/Microsoft.Billing/transfers/' + (transferName == null ? '' : encodeURIComponent(transferName)) + '/validateTransfer', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Validates the address.
		 * Post providers/Microsoft.Billing/validateAddress
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {ValidateAddressResponse} OK. The request has succeeded.
		 */
		Address_Validate(api_version: string, requestBody: AddressDetails, headersHandler?: () => HttpHeaders): Observable<ValidateAddressResponse> {
			return this.http.post<ValidateAddressResponse>(this.baseUri + 'providers/Microsoft.Billing/validateAddress?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get the current line of credit.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingAccounts/default/lineOfCredit/default
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {LineOfCredit} OK. The request has succeeded.
		 */
		LineOfCredits_Get(api_version: string, subscriptionId: string, headersHandler?: () => HttpHeaders): Observable<LineOfCredit> {
			return this.http.get<LineOfCredit>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Billing/billingAccounts/default/lineOfCredit/default?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Increase the current line of credit.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingAccounts/default/lineOfCredit/default
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {LineOfCredit} requestBody Parameters supplied to the increase line of credit operation.
		 * @return {LineOfCredit} OK. The request has succeeded.
		 */
		LineOfCredits_Update(api_version: string, subscriptionId: string, requestBody: LineOfCredit, headersHandler?: () => HttpHeaders): Observable<LineOfCredit> {
			return this.http.put<LineOfCredit>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Billing/billingAccounts/default/lineOfCredit/default?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get billing property by subscription Id.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingProperty/default
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-10-01-preview.
		 * @return {BillingProperty} OK. The request has succeeded.
		 */
		BillingProperty_Get(subscriptionId: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<BillingProperty> {
			return this.http.get<BillingProperty>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Billing/billingProperty/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

