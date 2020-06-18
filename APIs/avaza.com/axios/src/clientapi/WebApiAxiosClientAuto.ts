import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface AccountDetails {
		AccountID?: number;
		AllowHidingCompletedTasksOnTimesheet?: boolean;
		CompanyName?: string;

		/**Format: ISO "YYYY-MM-DD HH:mm:ss.SSS" */
		CurrentServerTimeISO?: string;
		LockApprovedTimesheets?: boolean;
		Subdomain?: string;
		TimesheetDayOfWeek?: number;
		TimesheetDisplayFormatCode?: string;
		WeeklyTimesheetReminder?: boolean;
		has24HourTimesheetFormat?: boolean;
		hasStartEndTimesheets?: boolean;
	}

	export interface AccountTaskTypeDetails {
		AccountTaskTypeID?: number;
		Icon?: string;
		IconType?: string;
		Name?: string;
		isDefault?: boolean;
	}

	export interface Company {
		BillingAddress?: string;
		BillingAddressCity?: string;
		BillingAddressLine?: string;
		BillingAddressPostCode?: string;
		BillingAddressState?: string;
		BillingCountryCode?: string;
		Comments?: string;
		CompanyID?: number;
		CompanyName?: string;
		Contacts?: Array<CompanyContact>;
		CurrencyCode?: string;
		DateCreated?: Date;
		DateUpdated?: Date;
		DefaultTradingTermIDFK?: number;
		Fax?: string;
		Phone?: string;
		TaxNumber?: string;
		website?: string;
	}

	export interface CompanyContact {
		CompanyIDFK?: number;
		CompanyName?: string;
		ContactID?: number;
		DateCreated?: Date;
		DateUpdated?: Date;
		Email?: string;
		Firstname?: string;
		Lastname?: string;
		Mobile?: string;
		Phone?: string;
		PositionTitle?: string;
		TimeZone?: string;
	}

	export interface CompanyList {
		Companies?: Array<Company>;
		PageNumber?: number;
		PageSize?: number;
		TotalCount?: number;
	}

	export interface ContactList {
		Contacts?: Array<CompanyContact>;
		PageNumber?: number;
		PageSize?: number;
		TotalCount?: number;
	}


	/**New Subscription to be Created */
	export interface CreateSubscription {

		/**The event code to be notified about. Possible values: company_created, contact_created, invoice_created, invoice_sent, project_created, task_created */
		event: string;

		/**Optional Secret string (255 char max). If provided, the secret will be BASE 64 encoded and used as a basic authentication http header with webhook notifications. i.e. Authorization Basic [BASE64 of Secret]" */
		secret?: string;

		/**The URL that should be notified of the event. */
		target_url: string;
	}

	export interface CreditNote {
		Balance?: number;
		CreditNoteAllocations?: Array<CreditNoteAllocation>;
		CreditNoteLineItems?: Array<CreditNoteLineItem>;
		CreditNoteNumber?: string;
		CurrencyCode?: string;
		CustomerIDFK?: number;
		DateCreated?: Date;
		DateIssued?: Date;
		DateUpdated?: Date;
		Notes?: string;
		TotalAmount?: number;
		TransactionID?: number;
		TransactionPrefix?: string;
		TransactionStatusCode?: string;
	}

	export interface CreditNoteAllocation {
		AllocationAmount?: number;
		AllocationDate?: Date;
		CreditNoteTransactionIDFK?: number;
		InvoiceTransactionIDFK?: number;
		TransactionAllocationID?: number;
	}

	export interface CreditNoteLineItem {
		Amount?: number;
		Description?: string;
		Discount?: number;
		Quantity?: number;
		TaxAmount?: number;
		TaxIDFK?: number;
		TransactionLineItemID?: number;
		UnitPrice?: number;
	}

	export interface CreditNoteList {
		CreditNotes?: Array<CreditNote>;
		PageNumber?: number;
		PageSize?: number;
		TotalCount?: number;
	}

	export interface Currency {
		CurrencyCode?: string;
		DecimalPlaces?: number;
	}

	export interface CurrencyList {
		Currencies?: Array<Currency>;
	}

	export interface EstimateDetails {
		AccountIDFK?: number;
		Balance?: number;
		CompanyIDFK?: number;
		CompanyName?: string;
		CurrencyCode?: string;
		DateCreated?: Date;
		DateIssued?: Date;
		DateSent?: Date;
		DateUpdated?: Date;
		DueDate?: Date;
		EstimateID?: number;
		EstimateItemNumber?: string;
		EstimatePrefix?: string;
		EstimateStatusCode?: string;
		EstimateTaxConfigCode?: string;
		ExchangeRate?: number;
		Issuer?: IssuerDetails;
		LineItems?: Array<EstimateLineItemDetails>;
		Links?: EstimateLinks;
		Notes?: string;
		Recipient?: RecipientDetails;
		Subject?: string;
		TaxAmount?: number;
		TotalAmount?: number;
	}

	export interface EstimateLineItemDetails {
		Amount?: number;
		Description?: string;
		Discount?: number;
		EstimateLineItemID?: number;
		InventoryItemIDFK?: number;
		InventoryItemName?: string;
		InventoryItemSKU?: string;
		Quantity?: number;
		TaxAmount?: number;
		TaxCode?: string;
		TaxIDFK?: number;
		TaxName?: string;
		UnitPrice?: number;
	}

	export interface EstimateLinks {
		ClientView?: string;
		Edit?: string;
		View?: string;
	}

	export interface EstimateList {
		Estimates?: Array<EstimateDetails>;
		PageNumber?: number;
		PageSize?: number;
		TotalCount?: number;
	}

	export interface ExpenseDetails {
		Amount?: number;
		AttachmentURL?: string;
		ChargeableStatusCode?: string;
		CurrencyCode?: string;
		CustomerIDFK?: number;
		CustomerName?: string;
		DateCreated?: Date;
		DateUpdated?: Date;
		Email?: string;
		ExchangeRate?: number;
		ExpenseApprovalStatusCode?: string;
		ExpenseCategoryHasUnitPrice?: boolean;
		ExpenseCategoryIDFK?: number;
		ExpenseCategoryName?: string;
		ExpenseCategoryUnitName?: string;
		ExpenseCategoryUnitPrice?: number;
		ExpenseDate?: Date;
		ExpenseID?: number;
		ExpenseReimbursementIDFK?: number;
		ExpenseReimbursementStatusCode?: string;
		ExpenseReportIDFK?: number;
		ExpenseReportName?: string;
		Firstname?: string;
		Lastname?: string;
		Merchant?: string;
		MerchantTaxNumber?: string;
		Notes?: string;
		ProjectIDFK?: number;
		ProjectTitle?: string;
		Quantity?: number;
		TaxAmount?: number;
		TaxIDFK?: number;
		TransactionTaxConfigCode?: string;
		UserIDFK?: number;
		isChargeable?: boolean;
		isReimbursable?: boolean;
	}

	export interface ExpenseList {
		Expenses?: Array<ExpenseDetails>;
		PageNumber?: number;
		PageSize?: number;
		TotalCount?: number;
	}

	export interface FixedAmountDetails {
		Amount?: number;
		DateCreated?: Date;
		DateUpdated?: Date;
		FixedAmountID?: number;
		InventoryItemIDFK?: number;
		InventoryItemName?: string;
		Notes?: string;
		ProjectIDFK?: number;
		ProjectTitle?: string;
		TaskIDFK?: number;
		TaskTitle?: string;
		UpdatedByUserIDFK?: number;
		isInvoiced?: boolean;
	}

	export interface FixedAmountList {
		FixedAmounts?: Array<FixedAmountDetails>;
		PageNumber?: number;
		PageSize?: number;
		TotalCount?: number;
	}

	export interface InventoryItem {
		CostPrice?: number;
		DateCreated?: Date;
		DateUpdated?: Date;
		Description?: string;
		InventoryItemID?: number;
		Name?: string;
		SKU?: string;
		SalePrice?: number;
		SaleTaxIDFK?: number;
		isHidden?: boolean;
	}

	export interface InventoryList {
		Inventory?: Array<InventoryItem>;
		PageNumber?: number;
		PageSize?: number;
		TotalCount?: number;
	}

	export interface Invoice {
		AccountIDFK?: number;
		Balance?: number;
		CompanyIDFK?: number;
		CompanyName?: string;
		CurrencyCode?: string;
		CustomerPONumber?: string;
		DateCreated?: Date;
		DateIssued?: Date;
		DateSent?: Date;
		DateUpdated?: Date;
		DueDate?: Date;
		ExchangeRate?: number;
		InvoiceNumber?: string;
		Issuer?: IssuerDetails;
		LineItems?: Array<InvoiceLineItem>;
		Links?: InvoiceLinks;
		Notes?: string;
		Recipient?: RecipientDetails;
		Subject?: string;
		TaxAmount?: number;
		TotalAmount?: number;
		TransactionID?: number;
		TransactionPrefix?: string;
		TransactionStatusCode?: string;
		TransactionTaxConfigCode?: string;
	}

	export interface InvoiceLineItem {
		Amount?: number;
		Description?: string;
		Discount?: number;
		InventoryItemIDFK?: number;
		InventoryItemName?: string;
		InventoryItemSKU?: string;
		ProjectIDFK?: number;
		ProjectTitle?: string;
		Quantity?: number;
		TaxAmount?: number;
		TaxCode?: string;
		TaxIDFK?: number;
		TaxName?: string;
		TransactionLineItemID?: number;
		UnitPrice?: number;
	}

	export interface InvoiceLinks {
		ClientView?: string;
		Edit?: string;
		View?: string;
	}

	export interface InvoiceList {
		Invoices?: Array<Invoice>;
		PageNumber?: number;
		PageSize?: number;
		TotalCount?: number;
	}

	export interface IssuerDetails {
		BillingAddress?: string;
		BillingAddressCity?: string;
		BillingAddressLine?: string;
		BillingAddressPostCode?: string;
		BillingAddressState?: string;
		BillingCountryCode?: string;
		TaxNumber?: string;
	}

	export interface NewCompany {
		BillingAddress?: string;
		BillingAddressCity?: string;
		BillingAddressLine?: string;
		BillingAddressPostCode?: string;
		BillingAddressState?: string;
		BillingCountryCode?: string;
		Comments?: string;
		CompanyName: string;
		CurrencyCode?: string;
		Fax?: string;
		Phone?: string;
		TaxNumber?: string;
		website?: string;
	}

	export interface NewCompanyContact {
		CompanyBillingAddress?: string;
		CompanyBillingAddressCity?: string;
		CompanyBillingAddressCountryCode?: string;
		CompanyBillingAddressLine?: string;
		CompanyBillingAddressPostCode?: string;
		CompanyBillingAddressState?: string;
		CompanyIDFK?: number;
		CompanyName?: string;
		ContactEmail: string;
		CurrencyCode?: string;
		Firstname: string;
		Lastname: string;
		Mobile?: string;
		Phone?: string;
		PositionTitle?: string;
		UpdateExisting?: boolean;
	}


	/**New Estimate to be created */
	export interface NewEstimate {

		/**If left blank then you must specify Company Name. */
		CompanyIDFK?: number;

		/**If left blank then you must specify Company ID. Specified Name will be used to match existing customer record. If not matched then it will be used to create a new customer. First Name, Last Name and Email will only be used if it is a new company. If the Company name appears multiple times we will check the email address to find a matching company. If email address doesn't identify a matching company then the Estimate creation will be rejected. */
		CompanyName?: string;

		/**Expects ISO Standard 3 character currency code. If left blank the currency will default to account's currency in general setting. For existing companies this field will be ignored and the Estimate will use the currency of the customer. For new customers if the currency is not specified then account currency will be used otherwise the specified currency will be used. */
		CurrencyCode?: string;

		/**Plain UTF8 text. 100 characters max */
		CustomerPONumber?: string;

		/**If not specified it will use today's date. The date should be specified as local date. */
		DateIssued?: Date;

		/**It will be auto calculated based on the payment term and issue date. Due Date must be greater than or equal to Issue Date. If the Due Date is specified then Payment Terms will be set to -1 (Custom) */
		DueDate?: Date;

		/**Specified value will be used to create a new customer contact only if a new customer is being created. */
		Email?: string;

		/**Pass any string. If left blank it will use the next number in the auto incrementing sequence. If an integer is passed then the largest integer will be use as the seed to auto generate the next Estimate number in the sequence. */
		EstimateNumber?: string;

		/**A prefix for the Estimate number. e.g. 'INV'. If left blank it will be set to the account default. Max length 20 characters. */
		EstimatePrefix?: string;

		/**Possible values are (EX --- Tax Exclusive, INC --- Tax Inclusive). If left empty it will use the account default. */
		EstimateTaxConfigCode?: string;

		/**Exchange rate is only valid for Estimates in currency other than default account currency. If not specified it will get the market rate based on the Date Issued. */
		ExchangeRate?: number;

		/**Specified value will be used to create a new customer contact only if a new customer is being created. */
		Firstname?: string;

		/**If left blank the account default Estimate template will be used. */
		InvoiceTemplateIDFK?: number;

		/**Specified value will be used to create a new customer contact only if a new customer is being created. */
		Lastname?: string;
		LineItems?: Array<NewEstimateLineItem>;

		/**Plain UTF8 text. (no HTML). Max 2000 characters */
		Notes?: string;

		/**Plain UTF8 text. (no HTML). 255 characters max */
		Subject?: string;
	}


	/**Line item to be added to new Estimate */
	export interface NewEstimateLineItem {

		/**Plain UTF8 text. (no HTML) */
		Description?: string;

		/**Enter 10.5 to give a 10.5% discount */
		Discount?: number;

		/**If not specified then Inventory Item Name must be specified. */
		InventoryItemIDFK?: number;

		/**If not specified then Inventory item ID must be specified. If specified and not matched to any existing inventory items then a new inventory item will be created. Max 200 characters. */
		InventoryItemName?: string;

		/**The quantity for the line item */
		Quantity: number;

		/**If specified then it must match an existing Tax ID. If not specified then Tax Name and Tax Percent must be specified. */
		TaxIDFK?: number;

		/**Must be specified if the Tax ID is blank. If the Tax Name is specified it will be matched to an existing Tax Name or else a new Tax will be created. */
		TaxName?: string;

		/**The Tax Percent will only be used if a new tax is being created. */
		TaxPercent?: number;

		/**The unit price for the lineitem. */
		UnitPrice: number;
	}

	export interface NewExpense {

		/**Expense Amount (Required). Must be &gt;= 0 */
		Amount?: number;

		/**A 3-letter ISO CurrencyCode for the expense currency. (e.g. USD). If not provided, defaults to the Account base currency. */
		CurrencyCode?: string;

		/**The Avaza Customer ID to associate the Expense with. Either this field or CustomerName can be provided. */
		CustomerIDFK?: number;

		/**The name of an existing customer in Avaza. Must be an exact (case insensitive) match. */
		CustomerName?: string;

		/**Optional (Only relevant if the expense currency is different to your account currency. If not provided we will look up the market exchange rate for you based on the expense date.) Exchange Rate = Expense Currency Amount / Base Currency Amount (e.g. if Expense currency is in AUD, and Base Currency is in USD, Exchange Rate = AUD $140 / USD $100 = 1.4) */
		ExchangeRate?: number;

		/**The expense category to link the Expense to. If not provided, ExpenseCategoryName must be provided */
		ExpenseCategoryIDFK?: number;

		/**Must match an existing expense category name otherwise a new category will be created. If left blank Expense Category ID must be provided. */
		ExpenseCategoryName?: string;

		/**The date of the expense entry (Required) */
		ExpenseDate?: Date;

		/**Links the expense to a Grouping/Trip report. If no matching name found, creates a new Group/Trip Report name. */
		GroupTripName?: string;

		/**The name of the merchant. */
		Merchant?: string;

		/**A Tax number identifier for the merchant. */
		MerchantTaxNumer?: string;

		/**Expense Notes */
		Notes?: string;

		/**The Avaza project ID to associate the Expense with. */
		ProjectIDFK?: number;

		/**Can work for matching an expense to a project, but only if it's an exact match for a single project under the customer. */
		ProjectName?: string;

		/**Avaza Tax ID the expense belongs to. If left blank then Tax Name must be provided. */
		TaxIDFK?: number;

		/**Must exactly match an existing Tax Name that you have configured in Avaza Tax settings. If left blank then Tax ID must be provided. */
		TaxName?: string;

		/**Optional - Enter "INC" if the tax amount is included in the expense amount otherwise enter "EX" when the amount exlcudes the tax. Defaults to "Ex". The tax amount on the expense will be autocalculated. */
		TransactionTaxConfigCode?: string;

		/**The email address of a Timesheet/Expense user in Avaza. If not provided, UserIDFK field must be provided. */
		UserEmail?: string;

		/**UserID for a Timesheet/Expense user in Avaza. If not provided, UserEmail field must be provided */
		UserIDFK?: number;

		/**aka Billable. Defaults to false if not provided. If set to true, a CustomerIDFK or CustomerName must be provided. */
		isChargeable?: boolean;

		/**Defaults to false if not provided. */
		isReimbursable?: boolean;
	}


	/**New invoice to be created */
	export interface NewInvoice {

		/**If left blank then you must specify Company Name. */
		CompanyIDFK?: number;

		/**If left blank then you must specify Company ID. Specified Name will be used to match existing customer record. If not matched then it will be used to create a new customer. First Name, Last Name and Email will only be used if it is a new company. If the Company name appears multiple times we will check the email address to find a matching company. If email address doesn't identify a matching company then the invoice creation will be rejected. */
		CompanyName?: string;

		/**Expects ISO Standard 3 character currency code. If left blank the currency will default to account's currency in general setting. For existing companies this field will be ignored and the invoice will use the currency of the customer. For new customers if the currency is not specified then account currency will be used otherwise the specified currency will be used. */
		CurrencyCode?: string;

		/**Plain UTF8 text. 100 characters max */
		CustomerPONumber?: string;

		/**If not specified it will use today's date. The date should be specified as local date. */
		DateIssued?: Date;

		/**It will be auto calculated based on the payment term and issue date. Due Date must be greater than or equal to Issue Date. If the Due Date is specified then Payment Terms will be set to -1 (Custom) */
		DueDate?: Date;

		/**Specified value will be used to create a new customer contact only if a new customer is being created. */
		Email?: string;

		/**Exchange rate is only valid for invoices in currency other than default account currency. If not specified it will get the market rate based on the Date Issued. */
		ExchangeRate?: number;

		/**Specified value will be used to create a new customer contact only if a new customer is being created. */
		Firstname?: string;

		/**Pass any string. If left blank it will use the next number in the auto incrementing sequence. If an integer is passed then the largest integer will be use as the seed to auto generate the next invoice number in the sequence. */
		InvoiceNumber?: string;

		/**If left blank the account default invoice template will be used. */
		InvoiceTemplateIDFK?: number;

		/**Specified value will be used to create a new customer contact only if a new customer is being created. */
		Lastname?: string;
		LineItems?: Array<NewInvoiceLineItem>;

		/**Plain UTF8 text. (no HTML). Max 2000 characters */
		Notes?: string;

		/**
		 * "If left blank we will set it to customer default. If specified then it must match one of your existing pre configured payment term periods. Your account starts with:
		 * (-1 --- Custom, 0 --- Upon Receipt, 7 --- 7 Days, 15 --- 15 Days, 30 --- 30 Days, 45 --- 45 Days, 60 --- 60 Days)
		 */
		PaymentTerms?: number;

		/**Plain UTF8 text. (no HTML). 255 characters max */
		Subject?: string;

		/**A prefix for the Invoice number. e.g. 'INV'. If left blank it will be set to the account default. Max length 20 characters. */
		TransactionPrefix?: string;

		/**Possible values are (EX --- Tax Exclusive, INC --- Tax Inclusive). If left empty it will use the account default. */
		TransactionTaxConfigCode?: string;
	}


	/**Line item to be added to new invoice */
	export interface NewInvoiceLineItem {

		/**Plain UTF8 text. (no HTML) */
		Description?: string;

		/**Enter 10.5 to give a 10.5% discount */
		Discount?: number;

		/**If not specified then Inventory Item Name must be specified. */
		InventoryItemIDFK?: number;

		/**If not specified then Inventory item ID must be specified. If specified and not matched to any existing inventory items then a new inventory item will be created. Max 200 characters. */
		InventoryItemName?: string;

		/**Optional. Project ID of an Avaza Project that belongs to this customer, so line item is attributed to that Project for reporting. */
		ProjectIDFK?: number;

		/**The quantity for the line item */
		Quantity: number;

		/**If specified then it must match an existing Tax ID. If not specified then Tax Name and Tax Percent must be specified. */
		TaxIDFK?: number;

		/**Must be specified if the Tax ID is blank. If the Tax Name is specified it will be matched to an existing Tax Name or else a new Tax will be created. */
		TaxName?: string;

		/**The Tax Percent will only be used if a new tax is being created. */
		TaxPercent?: number;

		/**The unit price for the lineitem. */
		UnitPrice: number;
	}

	export interface NewPayment {
		Amount?: number;

		/**Only required if no invoice allocations specified. */
		CustomerIDFK?: number;

		/**Date of Payment. If not specified, assumes today. */
		DateIssued?: Date;

		/**Optional. Only used when the Customer's currecy is different from the Avaza account's base currency. Specifies the exchange rate that should apply between the customer currency and base currency. If not provided we will obtain an up to date exchange rate for the Payment Issue Date. */
		ExchangeRate?: number;
		Notes?: string;

		/**List of amounts within this payment that are allocated to invoices. The sum of these be less than or equal to the payment amount. */
		PaymentAllocations?: Array<NewPaymentAllocation>;

		/**Optional. If not specified will be automatically generated */
		PaymentNumber?: string;

		/**Optional for storing the payment provider who was the source of funds. */
		PaymentProviderCode?: string;

		/**Optional to override the default prefix added to Payment Numbers */
		TransactionPrefix?: string;

		/**Optional for storing the reference # of the payment method. */
		TransactionReference?: string;
	}

	export interface NewPaymentAllocation {

		/**The Amount being allocated to the invoice. Expects same currency as invoice currency */
		AllocationAmount?: number;

		/**Optional. Defaults to the current time in the Avaza account's timezone. The date the allocation is applied to the invoice. Can be difference from the Payment Date when doing prepayments etc. */
		AllocationDate?: Date;

		/**The Avaza Invoice TransactionID that is having a payment amount allocated to it. */
		InvoiceTransactionIDFK?: number;
	}

	export interface NewProjectMember {

		/**Optional */
		BudgetAmount?: number;

		/**Optional. If not provided, defaults to the User's default Cost Amount. */
		CostAmount?: number;

		/**Required. The ProjectID */
		ProjectIDFK?: number;

		/**Optional. If not provided, defaults to the User's default Rate Amount. */
		RateAmount?: number;

		/**Required. The UserID to assign */
		UserIDFK?: number;
		canCommentOnTasks?: boolean;
		canCreateTasks?: boolean;
		canDeleteTasks?: boolean;
		canUpdateTasks?: boolean;
		isProjectManager?: boolean;
		isTimesheetAllowed?: boolean;
		isTimesheetApprovalRequired?: boolean;
		isTimesheetApprover?: boolean;
	}

	export interface NewProjectModel {
		BudgetAmount?: number;
		BudgetHours?: number;

		/**An ID of a company in Avaza to create the Project under. You must provide either a CompanyID, or a CompanyName */
		CompanyIDFK?: number;

		/**The name for a Company to create the project under. Will create company unless it matches an existing company name */
		CompanyName?: string;

		/**The ISO 3 letter currency code to use when creating a new Company. If not provided, the account's default currency will be used. */
		CurrencyCode?: string;
		EndDate?: Date;
		PopulateDefaultProjectMembers?: boolean;
		ProjectCategoryIDFK?: number;

		/**Any descriptive notes about the project. (2000 characters max) */
		ProjectNotes?: string;
		ProjectStatusCode?: string;

		/**The title of the new project. (255 characters max) */
		ProjectTitle: string;
		StartDate?: Date;
		TimesheetApprovalRequiredbyDefault?: boolean;
		isTaskRequiredOnTimesheet?: boolean;
	}

	export interface NewSection {
		EndDateUTC?: Date;
		ProjectIDFK?: number;
		StartDateUTC?: Date;
		Title?: string;
	}

	export interface NewTag {

		/**Hex color code in format #000000 */
		Color?: string;
		Name?: string;
	}

	export interface NewTask {
		AccountTaskTypeIDFK?: number;
		AssignedToUserIDFK?: number;
		DateDue?: Date;
		DateDueUTC?: Date;
		DateStart?: Date;
		DateStartUTC?: Date;
		Description?: string;

		/**Decimal hours */
		EstimatedEffort?: number;
		ProjectIDFK: number;
		SectionIDFK: number;

		/**Collection of tags specifying Name and Color (Hex) */
		Tags?: Array<NewTag>;
		TaskPriorityCode?: string;
		Title: string;
	}

	export interface NewTimesheet {

		/**The duration of the timesheet, in decimal hours. If null or 0, a timer will be started. */
		Duration?: number;

		/**The date of the timesheet entry, with an optional start time component. */
		EntryDate?: Date;

		/**Timesheet Notes */
		Notes?: string;

		/**The project to associate the timesheet with. */
		ProjectIDFK?: number;

		/**Optional. Link the timesheet to a specific task */
		TaskIDFK?: number;

		/**The Project timesheet category to link the timesheet to */
		TimesheetCategoryIDFK?: number;

		/**UserID for a Timesheet user in Avaza */
		UserIDFK?: number;

		/**If true, the start time will be take from the time component of the Entry Date field, and the end time will be calculated by adding the Duration to the StartDate */
		hasStartEndTime?: boolean;

		/**Optional. False by default. Allows you to mark the timesheet as invoiced in an external system. */
		isInvoiced?: boolean;
	}

	export interface Payment {
		AccountIDFK?: number;
		Balance?: number;
		CurrencyCode?: string;
		CustomerIDFK?: number;
		DateCreated?: Date;
		DateIssued?: Date;
		DateUpdated?: Date;
		ExchangeRate?: number;
		Notes?: string;
		PaymentAllocations?: Array<PaymentAllocation>;
		PaymentNumber?: string;
		PaymentProviderCode?: string;
		TotalAmount?: number;
		TransactionID?: number;
		TransactionPrefix?: string;
		TransactionReference?: string;
		TransactionStatusCode?: string;
	}

	export interface PaymentAllocation {
		AllocationAmount?: number;
		AllocationDate?: Date;
		InvoiceTransactionIDFK?: number;
		PaymentTransactionIDFK?: number;
		TransactionAllocationID?: number;
	}

	export interface PaymentList {
		PageNumber?: number;
		PageSize?: number;
		Payments?: Array<Payment>;
		TotalCount?: number;
	}

	export interface ProjectCompanyGroup {
		CompanyName?: string;
		projects?: Array<ProjectDropdownSelection>;
	}

	export interface ProjectDetails {
		BudgetAmount?: number;
		BudgetHours?: number;
		CompanyIDFK?: number;
		CompanyName?: string;
		DateCreated?: Date;
		DateUpdated?: Date;
		DefaultAccountTaskTypeIDFK?: number;
		DefaultAccountTaskTypeName?: string;
		EndDate?: Date;
		Members?: Array<ProjectMemberDetails>;
		Notes?: string;

		/**Possible values: CategoryHourly, NoRate, NotBillable, PersonHourly, ProjectHourly */
		ProjectBillableTypeCode?: string;

		/**Possible Values: CategoryHours, NoBudget, PersonHours, ProjectFees, ProjectHours */
		ProjectBudgetTypeCode?: string;

		/**Html Hex Color Code starting with # */
		ProjectCategoryColor?: string;
		ProjectCategoryIDFK?: number;
		ProjectCategoryName?: string;
		ProjectHourlyRate?: number;
		ProjectID?: number;

		/**Possible values: NotStarted, InProgress, Complete */
		ProjectStatusCode?: string;
		ProjectTags?: Array<ProjectTagItem>;
		Sections?: Array<ProjectSectionDetails>;
		StartDate?: Date;
		Title?: string;
		isArchived?: boolean;
		isTaskRequiredOnTimesheet?: boolean;
	}

	export interface ProjectDropdownList {

		/**Current page size */
		PageSize?: number;

		/**List of Projects grouped by Customer Name */
		companies?: Array<ProjectCompanyGroup>;

		/**More records probably exist */
		hasMore?: boolean;

		/**Current page number (1 based) */
		pageNumber?: number;
	}

	export interface ProjectDropdownSelection {
		ProjectID?: string;
		Title?: string;
	}

	export interface ProjectList {
		PageNumber?: number;
		PageSize?: number;
		Projects?: Array<ProjectListDetails>;
		TotalCount?: number;
	}

	export interface ProjectListDetails {
		CompanyIDFK?: number;
		CompanyName?: string;
		DateCreated?: Date;
		DateUpdated?: Date;
		DefaultAccountTaskTypeIDFK?: number;
		DefaultAccountTaskTypeName?: string;
		Notes?: string;
		ProjectID?: number;
		Title?: string;
		isArchived?: boolean;
		isTaskRequiredOnTimesheet?: boolean;
	}

	export interface ProjectMemberDetails {
		BudgetAmount?: number;
		CostAmount?: number;
		Email?: string;
		Firstname?: string;
		Fullname?: string;
		Lastname?: string;
		RateAmount?: number;
		UserIDFK?: number;
		canCommentOnTasks?: boolean;
		canCreateTasks?: boolean;
		canDeleteTasks?: boolean;
		canUpdateTasks?: boolean;
		isMemberDisabled?: boolean;
		isProjectManager?: boolean;
		isTimesheetAllowed?: boolean;
		isTimesheetApprovalRequired?: boolean;
		isTimesheetApprover?: boolean;
	}

	export interface ProjectSectionDetails {
		DisplayOrder?: number;
		EndDate?: Date;
		SectionID?: number;
		StartDate?: Date;
		Title?: string;
	}

	export interface ProjectTagItem {
		Name?: string;
		ProjectTagID?: number;
	}

	export interface ProjectTimesheetCategoryDetails {
		AccountIDFK?: number;
		BudgetHours?: number;
		CostAmount?: number;
		Name?: string;
		ProjectIDFK?: number;
		RateAmount?: number;
		TimeSheetCategoryIDFK?: number;
		isBillable?: boolean;
	}

	export interface ProjectTimesheetCategoryList {
		Categories?: Array<ProjectTimesheetCategoryDetails>;
	}

	export interface RecipientDetails {
		CompanyIDFK?: number;
		CompanyName?: string;
		RecipientBillingAddressCity?: string;
		RecipientBillingAddressCountryCode?: string;
		RecipientBillingAddressLine?: string;
		RecipientBillingAddressPostCode?: string;
		RecipientBillingAddressState?: string;
		RecipientFormattedBillingAddress?: string;
	}

	export interface RoleDetails {
		RoleCode?: string;
		RoleName?: string;
	}

	export interface ScheduleAssignmentDetails {
		AccountIDFK?: number;
		DateCreated?: Date;
		DateUpdated?: Date;
		Duration?: number;
		ScheduleAssignmentID?: number;
		ScheduleDate?: Date;
		ScheduleSeriesIDFK?: number;
		UserIDFK?: number;
	}

	export interface ScheduleAssignmentList {
		PageNumber?: number;
		PageSize?: number;
		ScheduleAssignments?: Array<ScheduleAssignmentDetails>;
		TotalCount?: number;
	}

	export interface ScheduleSeriesDetails {
		AccountIDFK?: number;
		CompanyIDFK?: number;
		CompanyName?: string;
		DateCreated?: Date;
		DateUpdated?: Date;
		EndDate?: Date;
		Firstname?: string;
		HoursPerDay?: number;
		Lastname?: string;
		LeaveTypeIDFK?: number;
		LeaveTypeName?: string;
		Notes?: string;
		ProjectIDFK?: number;
		ProjectTitle?: string;
		ScheduleOnDaysOff?: boolean;
		ScheduleSeriesID?: number;
		StartDate?: Date;
		TaskIDFK?: number;
		TaskTitle?: string;
		TimeSheetCategoryIDFK?: number;
		TimeSheetCategoryName?: string;
		TotalDuration?: number;
		UpdatedByUserIDFK?: number;
		UserIDFK?: number;
	}

	export interface ScheduleSeriesList {
		PageNumber?: number;
		PageSize?: number;
		ScheduleSeries?: Array<ScheduleSeriesDetails>;
		TotalCount?: number;
	}

	export interface SectionDetails {
		DisplayOrder?: number;
		EndDate?: Date;
		EndDateUTC?: Date;
		ProjectIDFK?: number;
		SectionID?: number;
		StartDate?: Date;
		StartDateUTC?: Date;
		Title?: string;
	}

	export interface SectionList {
		Sections?: Array<SectionDetails>;
		TotalCount?: number;
	}

	export interface SubscribeResult {
		ID?: number;
	}

	export interface TagItem {
		Color?: string;
		Name?: string;
		TagID?: number;
	}

	export interface TaskDetails {
		AccountTaskTypeIDFK?: number;
		ActualTime?: number;
		AssignedToEmail?: string;
		AssignedToFirstname?: string;
		AssignedToLastname?: string;
		AssignedToUserIDFK?: string;
		DateCreated?: Date;
		DateDue?: Date;
		DateDueUTC?: Date;
		DateStart?: Date;
		DateStartUTC?: Date;
		DateUpdated?: Date;
		Description?: string;
		DescriptionNoHTML?: string;
		EstimatedEffort?: number;
		PercentComplete?: number;
		ProjectIDFK?: number;
		ProjectTitle?: string;
		SectionIDFK?: number;
		SectionTitle?: string;
		Tags?: Array<TagItem>;
		TaskID?: number;
		TaskPriorityCode?: string;
		TaskPriorityName?: string;
		TaskStatusCode?: string;
		TaskStatusName?: string;
		Title?: string;
		isCompleteStatus?: boolean;
	}

	export interface TaskDropdownList {

		/**Current page size */
		PageSize?: number;

		/**More records probably exist */
		hasMore?: boolean;

		/**Current page number (1 based) */
		pageNumber?: number;

		/**List of Task grouped by Section */
		sections?: Array<TaskSectionGroup>;
	}

	export interface TaskDropdownSelection {
		TaskID?: string;
		Title?: string;
	}

	export interface TaskList {
		PageNumber?: number;
		PageSize?: number;
		Tasks?: Array<TaskDetails>;
		TotalCount?: number;
	}

	export interface TaskSectionGroup {
		SectionTitle?: string;
		tasks?: Array<TaskDropdownSelection>;
	}

	export interface TaskStatusDetails {
		AccountTaskTypeIDFK?: number;
		Color?: string;
		DisplayOrder?: number;
		Name?: string;
		TaskStatusCode?: string;
		TaskTypeName?: string;
		isComplete?: boolean;
	}

	export interface TaskStatusList {
		statuses?: Array<TaskStatusDetails>;
	}

	export interface TaskTypeList {
		tasktypes?: Array<AccountTaskTypeDetails>;
	}

	export interface TaxComponent {
		ComponentTaxCode?: string;
		Name?: string;
		Percentage?: number;
		TaxComponentID?: number;
		TaxIDFK?: number;
		isCompound?: boolean;
	}

	export interface TaxItem {
		CalculatedPercent?: number;
		Name?: string;
		TaxCode?: string;
		TaxComponents?: Array<TaxComponent>;
		TaxID?: number;
	}

	export interface TaxList {
		Taxes?: Array<TaxItem>;
	}

	export interface TimesheetDetails {
		ApprovedBy?: string;
		CategoryName?: string;
		CustomerIDFK?: number;
		CustomerName?: string;
		DateApproved?: Date;
		DateCreated?: Date;
		DateUpdated?: Date;
		Duration?: number;
		Email?: string;
		EndTimeLocal?: Date;
		EndTimeUTC?: Date;
		EntryDate?: Date;
		Firstname?: string;
		HasTimer?: boolean;
		InvoiceIDFK?: number;
		InvoiceLineItemIDFK?: number;
		Lastname?: string;
		Notes?: string;
		ProjectIDFK?: number;
		ProjectTitle?: string;
		StartTimeLocal?: Date;
		StartTimeUTC?: Date;
		TaskIDFK?: number;
		TaskTitle?: string;
		TimerStartedAtUTC?: Date;
		TimesheetCategoryIDFK?: number;
		TimesheetEntryApprovalStatusCode?: string;
		TimesheetEntryID?: number;
		TimesheetUserTimeZone?: string;
		UserIDFK?: number;
		isBillable?: boolean;
		isInvoiced?: boolean;
	}

	export interface TimesheetList {
		PageNumber?: number;
		PageSize?: number;
		Timesheets?: Array<TimesheetDetails>;
		TotalCount?: number;
	}

	export interface TimesheetSummaryGroup {
		BillableHours?: number;
		GroupData?: Array<TimesheetSummaryGroup>;
		GroupID?: string;
		GroupName?: string;
		TotalHours?: number;
	}

	export interface TimesheetSummaryRequest {

		/**(Required) Filter for timesheets greater or equal to the specified date. e.g. 2019-01-25. You can optionally include a time component, otherwise it assumes 00:00 */
		EntryDateFrom?: Date;

		/**(Required) Filter for timesheets with an entry date smaller or equal to the specified  date. e.g. 2019-01-25. You can optionally include a time component, otherwise it assumes 00:00 */
		EntryDateTo?: Date;

		/**(Optional) Combine one, two or three levels of Grouping. Combine these possible grouping values: "Customer", "Project", "Category", "User", "Task", "Year", "Month", "Day", "Week". */
		GroupBy?: Array<string>;

		/**(Optional) Filter by Project */
		ProjectID?: number;

		/**(Optional) Defaults to the current user. Provide one or more UserIDs of Users whose timesheets should be retrieved. If the current user doesn't have impersonation rights, then they will only see their own data. */
		UserID?: Array<number>;

		/**(Optional) Filter by the billable status of Timesheets. */
		isBillable?: boolean;

		/**(Optional) Filter for timesheets by whether they have been Invoiced or not. */
		isInvoiced?: boolean;
	}

	export interface TimesheetSummaryResult {
		BillableHours?: number;
		EntryDateFrom?: Date;
		EntryDateTo?: Date;
		GroupData?: Array<TimesheetSummaryGroup>;
		GroupingLevels?: Array<string>;
		TotalHours?: number;
		UserID?: Array<number>;
	}

	export interface UpdateCompany {
		BillingAddress?: string;
		BillingAddressCity?: string;
		BillingAddressLine?: string;
		BillingAddressPostCode?: string;
		BillingAddressState?: string;
		BillingCountryCode?: string;
		Comments?: string;
		CompanyID?: number;
		CompanyName?: string;
		Fax?: string;
		FieldsToUpdate?: Array<string>;
		Phone?: string;
		TaxNumber?: string;
		website?: string;
	}

	export interface UpdateTask {
		AssignedToUserIDFK?: number;
		DateDue?: Date;
		DateDueUTC?: Date;
		DateStart?: Date;
		DateStartUTC?: Date;
		Description?: string;

		/**Decimal hours */
		EstimatedEffort?: number;
		FieldsToUpdate: Array<string>;
		PercentComplete?: number;
		SectionIDFK?: number;
		Tags?: Array<NewTag>;
		TaskID: number;
		TaskPriorityCode?: string;
		TaskStatusCode?: string;
		Title?: string;
	}

	export interface UpdateTimesheetModel {
		Duration?: number;
		EntryDate?: Date;
		FieldsToUpdate: Array<string>;
		Notes?: string;
		ProjectIDFK: number;
		TaskIDFK?: number;
		TimeSheetEntryID: number;
		TimesheetCategoryIDFK?: number;
		hasStartEndTime?: boolean;
	}

	export interface UserDetails {
		AccountIDFK?: number;
		CompanyIDFK?: number;
		CompanyName?: string;
		DefaultBillableRate?: number;
		DefaultCostRate?: number;
		Email?: string;
		Firstname?: string;
		FridayAvailableHours?: number;

		/**IANA tz database timezone name */
		IANATimezone?: string;
		Lastname?: string;
		Mobile?: string;
		MondayAvailableHours?: number;
		Phone?: string;
		PositionTitle?: string;
		Roles?: Array<RoleDetails>;
		SaturdayAvailableHours?: number;
		SundayAvailableHours?: number;
		Tags?: Array<UserTagDetails>;
		ThursdayAvailableHours?: number;

		/**Windows Timezone ID */
		TimeZone?: string;
		TuesdayAvailableHours?: number;
		UserID?: number;
		WednesdayAvailableHours?: number;
		isTeamMember?: boolean;
	}

	export interface UserList {
		Users?: Array<UserDetails>;
	}

	export interface UserTagDetails {
		UserTagID?: number;
		UserTagName?: string;
	}

	export interface WebhookDetails {
		EventCode?: string;
		NotificationURL?: string;
		SubscriptionID?: number;
		UserIDFK?: number;
	}

	export interface WebhookList {
		Webhooks?: Array<WebhookDetails>;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Account Details
		 * Get api/Account
		 * @return {AccountDetails} Success
		 */
		Account_Get(headersHandler?: () => {[header: string]: string}): Promise<AccountDetails> {
			return Axios.get<AccountDetails>(this.baseUri + 'api/Account', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of Companies
		 * Get api/Company
		 * @param {number} pageSize Number of results per page
		 * @param {number} pageNumber 1 based page number to retrieve
		 * @return {CompanyList} Success
		 */
		Company_Get(UpdatedAfter: Date, pageSize: number, pageNumber: number, Sort: string, headersHandler?: () => {[header: string]: string}): Promise<CompanyList> {
			return Axios.get<CompanyList>(this.baseUri + 'api/Company?UpdatedAfter=' + UpdatedAfter.toISOString() + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a Company
		 * Post api/Company
		 * @return {Company} Success
		 */
		Company_Post(requestBody: NewCompany, headersHandler?: () => {[header: string]: string}): Promise<Company> {
			return Axios.post<Company>(this.baseUri + 'api/Company', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Update a Company record.
		 * Requires CompanyID and a list of field names to update. The FieldsToUpdate field accepts a string array containing field names that should be updated.
		 * Put api/Company
		 * @return {Company} OK
		 */
		Company_Put(requestBody: UpdateCompany, headersHandler?: () => {[header: string]: string}): Promise<Company> {
			return Axios.put<Company>(this.baseUri + 'api/Company', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets Company by Company ID
		 * Get api/Company/{id}
		 * @param {number} id Company ID Number
		 * @return {Company} Success
		 */
		Company_GetByID(id: number, headersHandler?: () => {[header: string]: string}): Promise<Company> {
			return Axios.get<Company>(this.baseUri + 'api/Company/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of Contacts
		 * Get api/Contact
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @return {ContactList} Success
		 */
		Contact_Get(UpdatedAfter: Date, pageSize: number, pageNumber: number, Sort: string, CompanyIDFK: number, headersHandler?: () => {[header: string]: string}): Promise<ContactList> {
			return Axios.get<ContactList>(this.baseUri + 'api/Contact?UpdatedAfter=' + UpdatedAfter.toISOString() + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&CompanyIDFK=' + CompanyIDFK, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a Contact
		 * Post api/Contact
		 * @return {CompanyContact} Success
		 */
		Contact_Post(requestBody: NewCompanyContact, headersHandler?: () => {[header: string]: string}): Promise<CompanyContact> {
			return Axios.post<CompanyContact>(this.baseUri + 'api/Contact', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets Contact by Contact ID
		 * Get api/Contact/{id}
		 * @param {number} id Contact ID number
		 * @return {CompanyContact} Success
		 */
		Contact_GetByID(id: number, headersHandler?: () => {[header: string]: string}): Promise<CompanyContact> {
			return Axios.get<CompanyContact>(this.baseUri + 'api/Contact/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of CreditNotes
		 * Get api/CreditNote
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @return {CreditNoteList} Success
		 */
		CreditNote_Get(UpdatedAfter: Date, pageSize: number, pageNumber: number, headersHandler?: () => {[header: string]: string}): Promise<CreditNoteList> {
			return Axios.get<CreditNoteList>(this.baseUri + 'api/CreditNote?UpdatedAfter=' + UpdatedAfter.toISOString() + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets Credit Note by CreditNoteID
		 * Get api/CreditNote/{id}
		 * @param {number} id Credit Note ID Number
		 * @return {CreditNote} Success
		 */
		CreditNote_GetByID(id: number, headersHandler?: () => {[header: string]: string}): Promise<CreditNote> {
			return Axios.get<CreditNote>(this.baseUri + 'api/CreditNote/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of Currencies
		 * Get api/Currency
		 * @return {CurrencyList} Success
		 */
		Currency_Get(headersHandler?: () => {[header: string]: string}): Promise<CurrencyList> {
			return Axios.get<CurrencyList>(this.baseUri + 'api/Currency', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of Estimates
		 * EstimateStatusCode values are: "Draft", "Sent", "Accepted", "Converted", "Expired", "Rejected"
		 * Get api/Estimate
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @return {EstimateList} Success
		 */
		Estimate_Get(UpdatedAfter: Date, pageSize: number, pageNumber: number, Sort: string, CompanyIDFK: number, headersHandler?: () => {[header: string]: string}): Promise<EstimateList> {
			return Axios.get<EstimateList>(this.baseUri + 'api/Estimate?UpdatedAfter=' + UpdatedAfter.toISOString() + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&CompanyIDFK=' + CompanyIDFK, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new draft Estimate
		 * Post api/Estimate
		 * @return {EstimateDetails} OK
		 */
		Estimate_Post(requestBody: NewEstimate, headersHandler?: () => {[header: string]: string}): Promise<EstimateDetails> {
			return Axios.post<EstimateDetails>(this.baseUri + 'api/Estimate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets Estimate by Estimate ID
		 * Get api/Estimate/{id}
		 * @param {number} id Estimate Estimate ID number
		 * @return {void} 
		 */
		Estimate_GetByID(id: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + 'api/Estimate/' + id, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Gets list of Expenses
		 * Get api/Expense
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @return {ExpenseList} Success
		 */
		Expense_Get(UpdatedAfter: Date, ExpenseDateFrom: Date, ExpenseDateTo: Date, UserEmail: string, CategoryName: string, CustomerID: number, ProjectID: number, isChargeable: boolean, isInvoiced: boolean, ExpenseReimbursementIDFK: number, pageSize: number, pageNumber: number, Sort: string, headersHandler?: () => {[header: string]: string}): Promise<ExpenseList> {
			return Axios.get<ExpenseList>(this.baseUri + 'api/Expense?UpdatedAfter=' + UpdatedAfter.toISOString() + '&ExpenseDateFrom=' + ExpenseDateFrom.toISOString() + '&ExpenseDateTo=' + ExpenseDateTo.toISOString() + '&UserEmail=' + (UserEmail == null ? '' : encodeURIComponent(UserEmail)) + '&CategoryName=' + (CategoryName == null ? '' : encodeURIComponent(CategoryName)) + '&CustomerID=' + CustomerID + '&ProjectID=' + ProjectID + '&isChargeable=' + isChargeable + '&isInvoiced=' + isInvoiced + '&ExpenseReimbursementIDFK=' + ExpenseReimbursementIDFK + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create an Expense
		 * Create an Expense
		 * Post api/Expense
		 * @return {ExpenseDetails} OK
		 */
		Expense_Post(requestBody: NewExpense, headersHandler?: () => {[header: string]: string}): Promise<ExpenseDetails> {
			return Axios.post<ExpenseDetails>(this.baseUri + 'api/Expense', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets an Expense Entry by Expense ID
		 * Get api/Expense/{id}
		 * @param {number} id Expense ID number
		 * @return {ExpenseDetails} Success
		 */
		Expense_GetByID(id: number, headersHandler?: () => {[header: string]: string}): Promise<ExpenseDetails> {
			return Axios.get<ExpenseDetails>(this.baseUri + 'api/Expense/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of Fixed Amounts
		 * Get api/FixedAmount
		 * @param {number} ProjectID (Optional) The ProjectID of a Project to filter Fixed Amounts for
		 * @param {number} TaskID (Optional) The TaskID of a Task to filter Fixed Amounts for
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @param {string} Sort Optional sorting instruction. Currently possible values: "DateUpdated", "DateCreated", "DateUpdated desc", "DateCreated desc","EntryDate", "EntryDate desc", "StartTimeLocal","StartTimeLocal desc", "TimeSheetEntryID", "TimeSheetEntryID desc"
		 * @return {FixedAmountList} Success
		 */
		FixedAmount_Get(UpdatedAfter: Date, EntryDateFrom: Date, EntryDateTo: Date, ProjectID: number, TaskID: number, isInvoiced: boolean, pageSize: number, pageNumber: number, Sort: string, headersHandler?: () => {[header: string]: string}): Promise<FixedAmountList> {
			return Axios.get<FixedAmountList>(this.baseUri + 'api/FixedAmount?UpdatedAfter=' + UpdatedAfter.toISOString() + '&EntryDateFrom=' + EntryDateFrom.toISOString() + '&EntryDateTo=' + EntryDateTo.toISOString() + '&ProjectID=' + ProjectID + '&TaskID=' + TaskID + '&isInvoiced=' + isInvoiced + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of Inventory
		 * Get api/Inventory
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @return {InventoryList} Success
		 */
		Inventory_Get(UpdatedAfter: Date, pageSize: number, pageNumber: number, headersHandler?: () => {[header: string]: string}): Promise<InventoryList> {
			return Axios.get<InventoryList>(this.baseUri + 'api/Inventory?UpdatedAfter=' + UpdatedAfter.toISOString() + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets InventoryItem by InventoryItem ID
		 * Get api/Inventory/{id}
		 * @param {number} id InventoryItem ID number
		 * @return {void} 
		 */
		Inventory_GetByID(id: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + 'api/Inventory/' + id, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Gets list of Invoices
		 * TransactionStatusCode values are: "Draft", "Sent", "Late", "Paid", "Partial", "Void"
		 * Get api/Invoice
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @return {InvoiceList} Success
		 */
		Invoice_Get(UpdatedAfter: Date, pageSize: number, pageNumber: number, Sort: string, CompanyIDFK: number, headersHandler?: () => {[header: string]: string}): Promise<InvoiceList> {
			return Axios.get<InvoiceList>(this.baseUri + 'api/Invoice?UpdatedAfter=' + UpdatedAfter.toISOString() + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&CompanyIDFK=' + CompanyIDFK, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new draft invoice
		 * Post api/Invoice
		 * @return {Invoice} OK
		 */
		Invoice_Post(requestBody: NewInvoice, headersHandler?: () => {[header: string]: string}): Promise<Invoice> {
			return Axios.post<Invoice>(this.baseUri + 'api/Invoice', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets Invoice by Invoice ID
		 * Get api/Invoice/{id}
		 * @param {number} id Invoice Transaction ID number
		 * @return {void} 
		 */
		Invoice_GetByID(id: number, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + 'api/Invoice/' + id, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Gets list of Payments
		 * Get api/Payment
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @return {PaymentList} Success
		 */
		Payment_Get(UpdatedAfter: Date, pageSize: number, pageNumber: number, headersHandler?: () => {[header: string]: string}): Promise<PaymentList> {
			return Axios.get<PaymentList>(this.baseUri + 'api/Payment?UpdatedAfter=' + UpdatedAfter.toISOString() + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create new Payment and optionally assign payment allocations to Invoices
		 * Post api/Payment
		 * @return {Payment} OK
		 */
		Payment_Post(requestBody: NewPayment, headersHandler?: () => {[header: string]: string}): Promise<Payment> {
			return Axios.post<Payment>(this.baseUri + 'api/Payment', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets Payment by Payment Transaction ID
		 * Get api/Payment/{id}
		 * @param {number} id Invoice Transaction ID Number
		 * @return {Payment} Success
		 */
		Payment_GetByID(id: number, headersHandler?: () => {[header: string]: string}): Promise<Payment> {
			return Axios.get<Payment>(this.baseUri + 'api/Payment/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of Projects
		 * Get api/Project
		 * @param {Date} UpdatedAfter Only show project records updated after a certain date (UTC)
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @param {string} Sort A column to sort on. Current possible values: "DateUpdated", "DateCreated", "DateUpdated desc", "DateCreated desc"
		 * @param {number} TimesheetUserID Filter to the projects that the supplied UserID can add timesheets to
		 * @param {boolean} includeArchived Include Archived Projects in the results
		 * @return {ProjectList} OK
		 */
		Project_Get(UpdatedAfter: Date, pageSize: number, pageNumber: number, Sort: string, TimesheetUserID: number, includeArchived: boolean, headersHandler?: () => {[header: string]: string}): Promise<ProjectList> {
			return Axios.get<ProjectList>(this.baseUri + 'api/Project?UpdatedAfter=' + UpdatedAfter.toISOString() + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&TimesheetUserID=' + TimesheetUserID + '&includeArchived=' + includeArchived, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a Project
		 * Post api/Project
		 * @return {ProjectDetails} Success
		 */
		Project_Post(requestBody: NewProjectModel, headersHandler?: () => {[header: string]: string}): Promise<ProjectDetails> {
			return Axios.post<ProjectDetails>(this.baseUri + 'api/Project', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets minimal list of active Projects for the current user
		 * Get api/Project/Lookup
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @param {number} TimesheetUserID Filter to the projects that the supplied UserID can add timesheets to
		 * @param {string} search Search string to match against Project title and Customer name
		 * @return {ProjectDropdownList} OK
		 */
		ProjectLookup(pageSize: number, pageNumber: number, TimesheetUserID: number, search: string, headersHandler?: () => {[header: string]: string}): Promise<ProjectDropdownList> {
			return Axios.get<ProjectDropdownList>(this.baseUri + 'api/Project/Lookup?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&TimesheetUserID=' + TimesheetUserID + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets Project by Project ID
		 * Get api/Project/{id}
		 * @param {number} id Project ID number
		 * @return {ProjectDetails} Success
		 */
		Project_GetByID(id: number, headersHandler?: () => {[header: string]: string}): Promise<ProjectDetails> {
			return Axios.get<ProjectDetails>(this.baseUri + 'api/Project/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Assign a user as a Member of a Project
		 * the Amount columns for Cost, Budget, Rates should be specified as a decimal. Financial amounts assume the currency of the Customer company. Budget units depend on the Budget method set on the Project.
		 * Post api/ProjectMember
		 * @return {ProjectMemberDetails} OK
		 */
		ProjectMember_Post(requestBody: NewProjectMember, headersHandler?: () => {[header: string]: string}): Promise<ProjectMemberDetails> {
			return Axios.post<ProjectMemberDetails>(this.baseUri + 'api/ProjectMember', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets list of Project Timesheet Categories
		 * The default sort order is by isBillable desc, Name asc
		 * Get api/ProjectTimesheetCategory
		 * @param {number} ProjectID Get categories filtered by ProjectID
		 * @return {ProjectTimesheetCategoryList} Success
		 */
		ProjectTimesheetCategory_Get(ProjectID: number, headersHandler?: () => {[header: string]: string}): Promise<ProjectTimesheetCategoryList> {
			return Axios.get<ProjectTimesheetCategoryList>(this.baseUri + 'api/ProjectTimesheetCategory?ProjectID=' + ProjectID, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of Schedule Assignments.
		 * Schedule assignments are per-day, and link to a parent Schedule Series.
		 * Get api/ScheduleAssignment
		 * @param {Date} UpdatedAfter Limit results to records updated after the specified date
		 * @param {Date} ScheduleDateFrom Filter for schedule assignement  that are  on or after a specific date
		 * @param {Date} ScheduleDateTo Filter for schedules that are on or before a specific date
		 * @param {number} ScheduleSeriesID Filter to records for a particular Schedule Series
		 * @param {number} UserID The UserID of a schedule user to filter assignments for. Only api users with Admin role can see all schedules across all users. Users with ScheduleUser role can access their own ScheduleSeries.
		 * @param {string} UserEmail The email of the user who has been scheduled
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @param {string} Sort Optional sorting instruction. Currently possible values: "DateUpdated", "DateCreated", "DateUpdated desc", "DateCreated desc"
		 * @return {ScheduleAssignmentList} Success
		 */
		ScheduleAssignment_Get(UpdatedAfter: Date, ScheduleDateFrom: Date, ScheduleDateTo: Date, ScheduleSeriesID: number, UserID: number, UserEmail: string, pageSize: number, pageNumber: number, Sort: string, headersHandler?: () => {[header: string]: string}): Promise<ScheduleAssignmentList> {
			return Axios.get<ScheduleAssignmentList>(this.baseUri + 'api/ScheduleAssignment?UpdatedAfter=' + UpdatedAfter.toISOString() + '&ScheduleDateFrom=' + ScheduleDateFrom.toISOString() + '&ScheduleDateTo=' + ScheduleDateTo.toISOString() + '&ScheduleSeriesID=' + ScheduleSeriesID + '&UserID=' + UserID + '&UserEmail=' + (UserEmail == null ? '' : encodeURIComponent(UserEmail)) + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of Schedule Series
		 * Schedule Series represents a strip of time assigned to a user over a date range, for a certain number of hours per day. They can be for Leave or for project work Bookings.
		 * Get api/ScheduleSeries
		 * @param {Date} UpdatedAfter Limit results to records updated after the specified date
		 * @param {Date} ScheduleStartDateFrom Filter for schedules that start on or after a specific date
		 * @param {Date} ScheduleStartDateTo Filter for schedules that start on or before a specific date
		 * @param {Date} ScheduleEndDateFrom Filter for schedules that end on or after a specific date
		 * @param {Date} ScheduleEndDateTo Filter for schedules that end on or before a specific date
		 * @param {number} UserID The UserID of a schedule user to filter assignments for. Only api users with Admin role can see all schedules across all users. Users with ScheduleUser role can access their own ScheduleSeries.
		 * @param {string} UserEmail The email of the user who has been scheduled
		 * @param {number} TimeSheetCategoryID Filter for schedule records linked to a specific timesheeet category
		 * @param {string} TimeSheetCategoryName Filter for schedule records with a specific timesheeet category name (exact string match)
		 * @param {number} LeaveTypeID Filter to records of a particular leave type
		 * @param {number} ProjectID Filter to only include books linked to a specific project
		 * @param {number} CompanyID Filter to only include records linked to projects, where that project belongs to a specific customer company
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @param {string} Sort Optional sorting instruction. Currently possible values: "DateUpdated", "DateCreated", "DateUpdated desc", "DateCreated desc"
		 * @return {ScheduleSeriesList} Success
		 */
		ScheduleSeries_Get(UpdatedAfter: Date, ScheduleStartDateFrom: Date, ScheduleStartDateTo: Date, ScheduleEndDateFrom: Date, ScheduleEndDateTo: Date, UserID: number, UserEmail: string, TimeSheetCategoryID: number, TimeSheetCategoryName: string, LeaveTypeID: number, ProjectID: number, CompanyID: number, pageSize: number, pageNumber: number, Sort: string, headersHandler?: () => {[header: string]: string}): Promise<ScheduleSeriesList> {
			return Axios.get<ScheduleSeriesList>(this.baseUri + 'api/ScheduleSeries?UpdatedAfter=' + UpdatedAfter.toISOString() + '&ScheduleStartDateFrom=' + ScheduleStartDateFrom.toISOString() + '&ScheduleStartDateTo=' + ScheduleStartDateTo.toISOString() + '&ScheduleEndDateFrom=' + ScheduleEndDateFrom.toISOString() + '&ScheduleEndDateTo=' + ScheduleEndDateTo.toISOString() + '&UserID=' + UserID + '&UserEmail=' + (UserEmail == null ? '' : encodeURIComponent(UserEmail)) + '&TimeSheetCategoryID=' + TimeSheetCategoryID + '&TimeSheetCategoryName=' + (TimeSheetCategoryName == null ? '' : encodeURIComponent(TimeSheetCategoryName)) + '&LeaveTypeID=' + LeaveTypeID + '&ProjectID=' + ProjectID + '&CompanyID=' + CompanyID + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of Sections
		 * Get api/Section
		 * @param {number} ProjectID Get sections for Project with ProjectID
		 * @return {SectionList} Success
		 */
		Section_Get(ProjectID: number, headersHandler?: () => {[header: string]: string}): Promise<SectionList> {
			return Axios.get<SectionList>(this.baseUri + 'api/Section?ProjectID=' + ProjectID, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a Section
		 * Post api/Section
		 * @return {SectionDetails} OK
		 */
		Section_Post(requestBody: NewSection, headersHandler?: () => {[header: string]: string}): Promise<SectionDetails> {
			return Axios.post<SectionDetails>(this.baseUri + 'api/Section', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete a Task
		 * Delete api/Task
		 * @return {string} OK
		 */
		Task_Delete(TaskID: number, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.delete(this.baseUri + 'api/Task?TaskID=' + TaskID, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Gets list of Tasks
		 * Get api/Task
		 * @param {Date} UpdatedAfter Optional filter to records updated after a specific date.
		 * @param {number} pageSize Number of items per page. Defaults to 20.
		 * @param {number} pageNumber Page to display. Starts from 1. Defaults to 1
		 * @param {string} Sort Optional sorting instruction. Currently possible values: "DateUpdated", "DateCreated", "DateUpdated desc", "DateCreated desc", "SectionTitle", "Title"
		 * @param {boolean} isComplete Optional filter to only display tasks linked to a Task Status where isComplete=false, or where isComplete=true
		 * @param {number} ProjectID Optional filter to only display tasks belonging to a specific ProjectID
		 * @return {TaskList} Success
		 */
		Task_Get(UpdatedAfter: Date, pageSize: number, pageNumber: number, Sort: string, isComplete: boolean, ProjectID: number, headersHandler?: () => {[header: string]: string}): Promise<TaskList> {
			return Axios.get<TaskList>(this.baseUri + 'api/Task?UpdatedAfter=' + UpdatedAfter.toISOString() + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)) + '&isComplete=' + isComplete + '&ProjectID=' + ProjectID, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a Task
		 * Post api/Task
		 * @return {TaskDetails} OK
		 */
		Task_Post(requestBody: NewTask, headersHandler?: () => {[header: string]: string}): Promise<TaskDetails> {
			return Axios.post<TaskDetails>(this.baseUri + 'api/Task', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Update a Task.
		 * Requires TaskID and a list of field names to update. The FieldsToUpdate field accepts a string array containing field names that should be updated.
		 * Put api/Task
		 * @return {TaskDetails} OK
		 */
		Task_Put(requestBody: UpdateTask, headersHandler?: () => {[header: string]: string}): Promise<TaskDetails> {
			return Axios.put<TaskDetails>(this.baseUri + 'api/Task', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets minimal list of Tasks for the current user
		 * Groups Tasks by Section. Default sort is by Section Title followed by Task Title
		 * Get api/Task/Lookup
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @param {number} projectID (optional) The ProjectID to use when filtering Tasks
		 * @param {boolean} hideCompleted (optional) true/false to hide completed tasks. Defaults false
		 * @param {string} search (optional) Search string to match against Task title. Performs begins-with match
		 * @return {TaskDropdownList} OK
		 */
		TaskLookup(pageSize: number, pageNumber: number, projectID: number, hideCompleted: boolean, search: string, headersHandler?: () => {[header: string]: string}): Promise<TaskDropdownList> {
			return Axios.get<TaskDropdownList>(this.baseUri + 'api/Task/Lookup?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&projectID=' + projectID + '&hideCompleted=' + hideCompleted + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets Task by Task ID
		 * Get api/Task/{id}
		 * @param {number} id Task ID number
		 * @return {TaskDetails} Success
		 */
		Task_GetByID(id: number, headersHandler?: () => {[header: string]: string}): Promise<TaskDetails> {
			return Axios.get<TaskDetails>(this.baseUri + 'api/Task/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of Task Statuses
		 * Get api/TaskStatus
		 * @return {TaskStatusList} Success
		 */
		TaskStatus_Get(headersHandler?: () => {[header: string]: string}): Promise<TaskStatusList> {
			return Axios.get<TaskStatusList>(this.baseUri + 'api/TaskStatus', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of Task Types
		 * Get api/TaskType
		 * @return {TaskTypeList} Success
		 */
		TaskType_Get(headersHandler?: () => {[header: string]: string}): Promise<TaskTypeList> {
			return Axios.get<TaskTypeList>(this.baseUri + 'api/TaskType', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get List of Taxes configured in the Avaza account.
		 * Get api/Tax
		 * @return {TaxList} OK
		 */
		Tax_Get(headersHandler?: () => {[header: string]: string}): Promise<TaxList> {
			return Axios.get<TaxList>(this.baseUri + 'api/Tax', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets list of Timsheets
		 * Get api/Timesheet
		 * @param {number} UserID The UserID of a timesheet user to filter timesheets for. Only api users with certain higher roles can see timesheets across multiple users.
		 * @param {number} pageSize Number of items per page (max 1000)
		 * @param {number} pageNumber Page to display. Starts from 1.
		 * @param {string} Sort Optional sorting instruction. Currently possible values: "DateUpdated", "DateCreated", "DateUpdated desc", "DateCreated desc","EntryDate", "EntryDate desc", "StartTimeLocal","StartTimeLocal desc", "TimeSheetEntryID", "TimeSheetEntryID desc"
		 * @return {TimesheetList} Success
		 */
		Timesheet_Get(UpdatedAfter: Date, EntryDateFrom: Date, EntryDateTo: Date, UserID: number, UserEmail: string, CategoryName: string, ProjectID: number, isBillable: boolean, isInvoiced: boolean, isTimerRunning: boolean, pageSize: number, pageNumber: number, Sort: string, headersHandler?: () => {[header: string]: string}): Promise<TimesheetList> {
			return Axios.get<TimesheetList>(this.baseUri + 'api/Timesheet?UpdatedAfter=' + UpdatedAfter.toISOString() + '&EntryDateFrom=' + EntryDateFrom.toISOString() + '&EntryDateTo=' + EntryDateTo.toISOString() + '&UserID=' + UserID + '&UserEmail=' + (UserEmail == null ? '' : encodeURIComponent(UserEmail)) + '&CategoryName=' + (CategoryName == null ? '' : encodeURIComponent(CategoryName)) + '&ProjectID=' + ProjectID + '&isBillable=' + isBillable + '&isInvoiced=' + isInvoiced + '&isTimerRunning=' + isTimerRunning + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&Sort=' + (Sort == null ? '' : encodeURIComponent(Sort)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new Timesheet Entry
		 * Post api/Timesheet
		 * @return {TimesheetDetails} OK
		 */
		Timesheet_Post(requestBody: NewTimesheet, headersHandler?: () => {[header: string]: string}): Promise<TimesheetDetails> {
			return Axios.post<TimesheetDetails>(this.baseUri + 'api/Timesheet', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Update a Timesheet
		 * The FieldsToUpdate field expects a string array collection of the field names you would like updated. Valid fields to update inlcude "ProjectIDFK", "TimeSheetCategoryIDFK", "TaskIDFK", "Duration", "EntryDate", "Notes", "hasStartEndTime". If you intend to provide start/end times on timesheets, this is achieved by including the start time in the EntryDate field (Iso date format), along with a Duration (decimal format).
		 * Put api/Timesheet
		 * @return {TimesheetDetails} OK
		 */
		Timesheet_Put(requestBody: UpdateTimesheetModel, headersHandler?: () => {[header: string]: string}): Promise<TimesheetDetails> {
			return Axios.put<TimesheetDetails>(this.baseUri + 'api/Timesheet', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete a Timesheet Entry
		 * Delete api/Timesheet/{id}
		 * @param {number} id The TimesheetEntryID of the Timesheet Entry
		 * @return {string} OK
		 */
		Timesheet_Delete(id: number, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.delete(this.baseUri + 'api/Timesheet/' + id, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Gets a Timesheet Entry by Timesheet ID
		 * Get api/Timesheet/{id}
		 * @param {number} id Timesheet ID number
		 * @return {TimesheetDetails} Success
		 */
		Timesheet_GetByID(id: number, headersHandler?: () => {[header: string]: string}): Promise<TimesheetDetails> {
			return Axios.get<TimesheetDetails>(this.baseUri + 'api/Timesheet/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Submit Timesheets for Approval.
		 * Either provide a a specific Day (WholeDayOf) or any day in a Week (WholeWeekOf) to submit all draft timesheets in that day or week
		 * Post api/TimesheetSubmission
		 * @param {boolean} SendNotifications Send email alerts to timesheet approvers. Defaults to true
		 * @param {Date} WholeWeekOf A date (yyyy-MM-dd) that falls within  a Week to have all timesheets in that week submitted. Respects the First Day of Week setting in your account Timesheet Settings to determine the week range.
		 * @param {Date} WholeDayOf A date (yyyy-MM-dd) to submit all timesheets on this day
		 * @param {number} UserID The user to submit timesheets for. Defaults to current user. Only allowed to be different from the current user when the current user has rights to Impersonate other users.
		 * @return {string} OK
		 */
		TimesheetSubmission_Post(SendNotifications: boolean, WholeWeekOf: Date, WholeDayOf: Date, UserID: number, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.post(this.baseUri + 'api/TimesheetSubmission?SendNotifications=' + SendNotifications + '&WholeWeekOf=' + WholeWeekOf.toISOString() + '&WholeDayOf=' + WholeDayOf.toISOString() + '&UserID=' + UserID, null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Gets Basic Summary of Timesheet Statistics
		 * Get api/TimesheetSummary
		 * @param {Array<string>} model.groupBy (Optional) Combine one, two or three levels of Grouping. Combine these possible grouping values: "Customer", "Project", "Category", "User", "Task", "Year", "Month", "Day", "Week".
		 * @param {Date} model.entryDateFrom (Required) Filter for timesheets greater or equal to the specified date. e.g. 2019-01-25. You can optionally include a time component, otherwise it assumes 00:00
		 * @param {Date} model.entryDateTo (Required) Filter for timesheets with an entry date smaller or equal to the specified  date. e.g. 2019-01-25. You can optionally include a time component, otherwise it assumes 00:00
		 * @param {Array<number>} model.userID (Optional) Defaults to the current user. Provide one or more UserIDs of Users whose timesheets should be retrieved. If the current user doesn't have impersonation rights, then they will only see their own data.
		 * @param {number} model.projectID (Optional) Filter by Project
		 * @param {boolean} model.isBillable (Optional) Filter by the billable status of Timesheets.
		 * @param {boolean} model.isInvoiced (Optional) Filter for timesheets by whether they have been Invoiced or not.
		 * @return {TimesheetSummaryResult} OK
		 */
		TimesheetSummary_Get(model.groupBy: Array<string>, model.entryDateFrom: Date, model.entryDateTo: Date, model.userID: Array<number>, model.projectID: number, model.isBillable: boolean, model.isInvoiced: boolean, headersHandler?: () => {[header: string]: string}): Promise<TimesheetSummaryResult> {
			return Axios.get<TimesheetSummaryResult>(this.baseUri + 'api/TimesheetSummary?' + model.groupBy.map(z => `model.groupBy=${encodeURIComponent(z)}`).join('&') + '&model.entryDateFrom=' + model.entryDateFrom.toISOString() + '&model.entryDateTo=' + model.entryDateTo.toISOString() + '&' + model.userID.map(z => `model.userID=${z}`).join('&') + '&model.projectID=' + model.projectID + '&model.isBillable=' + model.isBillable + '&model.isInvoiced=' + model.isInvoiced, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets the  Running Timer if there is one for a user.
		 * Get api/TimesheetTimer
		 * @param {number} UserID Optional - User ID number if impersonating a different user. Otherwise assumes the current user. Only users with certain security roles have permission to impersonate other users
		 * @return {string} Success
		 */
		TimesheetTimer_GetRunningTimer(UserID: number, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.get(this.baseUri + 'api/TimesheetTimer?UserID=' + UserID, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Stop the timer running on an existing Timesheet Entry
		 * Delete api/TimesheetTimer/{id}
		 * @param {number} id The ID of the existing timesheet entry that needs its timer stopped
		 * @param {number} UserID Optional - User ID number if impersonating a different user. Otherwise assumes the current user. Only users with certain security roles have permission to impersonate other users
		 * @return {string} Success
		 */
		TimesheetTimer_StopTimer(id: number, UserID: number, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.delete(this.baseUri + 'api/TimesheetTimer/' + id + '?UserID=' + UserID, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Starts a Timer running on an existing Timesheet Entry
		 * Post api/TimesheetTimer/{id}
		 * @param {number} id The ID of the existing timesheet entry on which to start a timer
		 * @param {number} UserID Optional - User ID number if impersonating a different user. Otherwise assumes the current user. Only users with certain security roles have permission to impersonate other users
		 * @return {string} Success
		 */
		TimesheetTimer_StartTimer(id: number, UserID: number, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.post(this.baseUri + 'api/TimesheetTimer/' + id + '?UserID=' + UserID, null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Get Collection of Users who have roles in the current Avaza account.
		 * Admin and Invoice Managers can see all. Other users are limited to seeing their own profile.
		 * Get api/UserProfile
		 * @param {string} Roles Optional list of comma separated role codes to filter users by (e.g. "TimesheetUser,Admin")
		 * @param {boolean} CurrentUserOnly Optional boolean (true/false) to filter to only show current authenticated user (always true for non Admin/InvoiceManager users)
		 * @param {number} CompanyIDFK Optionally filter by Company ID
		 * @return {UserList} OK
		 */
		UserProfile_Get(Roles: string, Tags: string, CurrentUserOnly: boolean, CompanyIDFK: number, headersHandler?: () => {[header: string]: string}): Promise<UserList> {
			return Axios.get<UserList>(this.baseUri + 'api/UserProfile?Roles=' + (Roles == null ? '' : encodeURIComponent(Roles)) + '&Tags=' + (Tags == null ? '' : encodeURIComponent(Tags)) + '&CurrentUserOnly=' + CurrentUserOnly + '&CompanyIDFK=' + CompanyIDFK, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Delete webhook subscription by URL
		 * Delete api/Webhook
		 * @param {string} target_url Target URL that should be used to delete subscriptions
		 * @return {string} Subscription Deleted OK
		 */
		Webhook_DeleteByUrl(target_url: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.delete(this.baseUri + 'api/Webhook?target_url=' + (target_url == null ? '' : encodeURIComponent(target_url)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Get list of Webhook Subscriptions
		 * Get api/Webhook
		 * @return {WebhookList} OK
		 */
		Webhook_Get(headersHandler?: () => {[header: string]: string}): Promise<WebhookList> {
			return Axios.get<WebhookList>(this.baseUri + 'api/Webhook', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Subscribe to Webhook. On success, returns ID of webhook subscription.
		 * When you receive a webhook, you should respond with Http 200 OK Status Code, otherwise we will retry. To create a webhook, you need both the webhook_notifications scope, as well as the scope for the required entity being monitored.  Event values are: "company_created", "company_deleted", "company_updated", "contact_created", "contact_deleted", "contact_updated", "invoice_created", "invoice_sent","invoice_updated","invoice_deleted", "project_created", "project_deleted", "project_updated", "task_created", "task_updated","task_deleted", "timesheet_created", "timesheet_deleted", "timesheet_updated".  You can subscribe to any webhook, but you will only receive notifications for data appropriate to the roles of your user account. There is an optional  Secret parameter (string 255 char max). This allows for webhook authentication. If provided, the Secret will be BASE 64 encoded and passed with notications as a basic authentication http header. i.e. Authorization Basic [BASE64 of Secret]"
		 * Post api/Webhook
		 * @return {void} 
		 */
		Webhook_Post(requestBody: CreateSubscription, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + 'api/Webhook', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Delete Webhook Subscription by ID
		 * Delete api/Webhook/{id}
		 * @param {number} id Subscription id to be deleted
		 * @return {string} Subscription deleted ok
		 */
		Webhook_Delete(id: number, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.delete(this.baseUri + 'api/Webhook/' + id, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}
	}

}

