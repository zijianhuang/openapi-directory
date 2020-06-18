import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface City {

		/**READ-ONLY */
		created?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		id?: string;

		/**READ-ONLY */
		modified?: string;
		name?: string;
		zip_code?: number;
	}

	export interface ClockingRecord {
		checked_in?: string;
		checked_out?: string;
		checkin_latitude?: string;
		checkin_longitude?: string;
		checkout_latitude?: string;
		checkout_longitude?: string;

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		id?: string;

		/**READ-ONLY */
		modified?: string;
		modified_by_id?: string;
		project_id?: string;
		user_id?: string;
	}

	export interface Company {
		city_id?: string;
		contact_person_id?: string;

		/**READ-ONLY */
		created?: string;

		/**Read-only */
		created_by_id?: string;
		cvr?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		expired?: Date;
		file_id?: string;
		id?: string;
		invoice_email?: string;
		language_id?: string;

		/**READ-ONLY */
		modified?: string;
		name?: string;
		next_invoice_number?: number;

		/**
		 * Format like eg. `28680133` or `046158971404`
		 * Max length: 32
		 */
		phone?: string;

		/**
		 * Format like eg. `45` or `49`
		 * Max length: 3
		 */
		phone_countrycode?: string;
		receive_form_mails?: string;
		street_name?: string;
		vat_percent?: number;
		website?: string;
	}

	export interface Contact {

		/**
		 * Street address
		 * Max length: 255
		 */
		address?: string;
		city_id?: string;

		/**Only filled out if this represents another company within Apacta (used for partners) */
		company_id?: string;

		/**READ-ONLY */
		created?: string;

		/**Read-only */
		created_by_id?: string;
		cvr?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		email?: string;

		/**
		 * If company has integration to an ERP system, and the contacts are synchronized, this will be the ERP-systems ID of this contact
		 * Max length: 255
		 */
		erp_id?: string;
		id?: string;

		/**READ-ONLY */
		modified?: string;
		name?: string;

		/**
		 * Format like eg. `28680133` or `046158971404`
		 * Max length: 32
		 */
		phone?: string;
		website?: string;
	}

	export interface ContactType {

		/**READ-ONLY */
		created?: string;

		/**Read-only */
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		id?: string;

		/**One of 3 values */
		identifier?: ContactTypeIdentifier;

		/**READ-ONLY */
		modified?: string;
		name?: string;
	}

	export enum ContactTypeIdentifier { client = 0, partner = 1, supplier = 2 }

	export interface Currency {

		/**READ-ONLY */
		created?: string;
		currency_sign?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		id?: string;
		identifier?: string;

		/**READ-ONLY */
		modified?: string;
		name?: string;
	}

	export interface ErrorNotFound {
		data?: string;
		success?: boolean;
	}

	export interface ErrorValidation {
		data?: string;
		success?: boolean;
	}

	export interface Expense {

		/**Read-only */
		company_id?: string;
		contact_id?: string;

		/**READ-ONLY */
		created?: string;

		/**Read-only */
		created_by_id?: string;
		currency_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		delivery_date?: Date;
		description?: string;

		/**Read-only */
		id?: string;

		/**READ-ONLY */
		modified?: string;
		project_id?: string;
		reference?: string;
		short_text?: string;
		supplier_invoice_number?: string;
	}

	export interface ExpenseFile {

		/**READ-ONLY */
		created?: string;

		/**Read-only */
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		expense_id?: string;

		/**
		 * File's name
		 * Max length: 255
		 */
		file?: string;
		file_extension?: string;
		file_original_name?: string;

		/**
		 * File size in bytes
		 * Max length: 255
		 */
		file_size?: string;

		/**
		 * File's MIME type
		 * Max length: 255
		 */
		file_type?: string;

		/**
		 * Read-only
		 * Max length: 255
		 */
		file_url?: string;

		/**Read-only */
		id?: string;

		/**READ-ONLY */
		modified?: string;
	}

	export interface ExpenseLine {
		buying_price?: number;

		/**READ-ONLY */
		created?: string;

		/**Read-only */
		created_by_id?: string;
		currency_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		expense_id?: string;

		/**Read-only */
		id?: string;

		/**READ-ONLY */
		modified?: string;
		quantity?: number;
		selling_price?: number;
		text?: string;
	}

	export interface Form {
		approved_by_id?: string;
		company_id?: string;

		/**READ-ONLY */
		created?: string;

		/**Read-only */
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		form_date?: Date;
		form_template_id?: string;

		/**Read-only */
		id?: string;
		is_draft?: boolean;
		is_invoiced?: boolean;
		is_shared?: boolean;
		mass_form_id?: string;

		/**READ-ONLY */
		modified?: string;
		project_id?: string;
	}

	export interface FormField {
		comment?: string;
		content_value?: string;

		/**READ-ONLY */
		created?: string;

		/**Read-only */
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		file_id?: string;
		form_field_type_id?: string;
		form_id?: string;
		form_template_field_id?: string;

		/**Read-only */
		id?: string;

		/**READ-ONLY */
		modified?: string;
		placement?: number;
	}

	export interface FormFieldType {

		/**READ-ONLY */
		created?: string;

		/**Read-only */
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;

		/**Read-only */
		id?: string;
		identifier?: string;

		/**READ-ONLY */
		modified?: string;
		name?: string;
	}

	export interface FormTemplate {

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		form_category_id?: string;
		form_overview_category_id?: string;
		id?: string;
		identifier?: string;
		is_active?: boolean;

		/**READ-ONLY */
		modified?: string;
		name?: string;
		pdf_template_identifier?: string;
	}

	export interface IntegrationFeatureSetting {

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;
		default_value?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		id?: string;
		identifier?: string;
		integration_feature_id?: string;
		is_custom_setting?: boolean;

		/**READ-ONLY */
		modified?: string;
		name?: string;
	}

	export interface Invoice {
		company_id?: string;
		contact_id?: string;

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;
		currency_id?: string;
		date_from?: Date;
		date_to?: Date;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		erp_id?: string;
		erp_payment_term_id?: string;
		eu_customer?: boolean;
		gross_payment?: number;
		id?: string;
		integration_id?: string;
		invoice_number?: number;
		is_draft?: boolean;
		is_locked?: boolean;
		is_offer?: boolean;
		issued_date?: Date;
		message?: string;

		/**READ-ONLY */
		modified?: string;
		net_payment?: number;
		offer_number?: number;
		payment_due_date?: Date;
		payment_term_id?: string;
		project_id?: string;
		reference?: string;
		vat_percent?: number;
	}

	export interface InvoiceLine {

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		discount_percent?: number;
		discount_text?: string;
		id?: string;
		invoice_id?: string;

		/**READ-ONLY */
		modified?: string;
		name?: string;
		product_id?: string;
		quantity?: number;
		selling_price?: number;
		user_id?: string;
	}

	export interface MassMessage {
		company_id?: string;
		content?: string;

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		id?: string;

		/**READ-ONLY */
		modified?: string;
	}

	export interface MassMessagesUser {

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		id?: string;
		is_read?: boolean;
		is_sent_email?: boolean;
		mass_message?: MassMessage;
		mass_message_id?: string;

		/**READ-ONLY */
		modified?: string;
		modified_by_id?: string;
		user_id?: string;
	}

	export interface Material {
		barcode?: string;
		billing_cycle?: string;
		company_id?: string;
		cost_price?: number;

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		id?: string;
		is_single_usage?: boolean;

		/**READ-ONLY */
		modified?: string;
		modified_by_id?: string;
		name?: string;
		selling_price?: number;
	}

	export interface MaterialRental {
		amount?: number;

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		from_date?: string;
		id?: string;
		is_invoiced?: string;
		material_id?: string;

		/**READ-ONLY */
		modified?: string;
		modified_by_id?: string;
		project_id?: string;
		quantity?: number;
		to_date?: string;
	}

	export interface PaginationDetails {
		count?: number;
		current_page?: string;
		has_next_page?: boolean;
		has_prev_page?: boolean;
		limit?: number;
		page_count?: string;
	}

	export interface PaymentTerm {

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;
		days_of_credit?: number;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		id?: string;

		/**READ-ONLY */
		modified?: string;
		payment_term_type_id?: string;
	}

	export interface PaymentTermType {

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		id?: string;
		identifier?: string;

		/**READ-ONLY */
		modified?: string;
		name?: string;
	}

	export interface Product {
		barcode?: string;
		buying_price?: number;
		company_id?: string;

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		erp_id?: string;
		id?: string;

		/**READ-ONLY */
		modified?: string;
		name?: string;
		product_number?: string;
		selling_price?: number;
	}

	export interface Project {
		contact_id?: string;

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		erp_project_id?: string;
		erp_task_id?: string;
		id: string;

		/**READ-ONLY */
		modified?: string;
		name: string;
		project_status_id?: string;
		start_time?: string;
		street_name?: string;
	}

	export interface ProjectStatus {

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		id?: string;

		/**
		 * One of 3 values
		 * Max length: 255
		 */
		identifier?: ProjectStatusIdentifier;

		/**READ-ONLY */
		modified?: string;
		name?: string;
	}

	export enum ProjectStatusIdentifier { ready_for_billing = 0, open = 1, closed = 2 }

	export interface StockLocation {
		company_id?: string;

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		id?: string;

		/**READ-ONLY */
		modified?: string;
		name?: string;
	}

	export interface TimeEntry {

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		form_id?: string;
		from_time?: string;
		id?: string;
		is_all_day?: boolean;

		/**READ-ONLY */
		modified?: string;
		modified_by_id?: string;
		project_id?: string;

		/**Amount of seconds */
		sum?: number;
		time_entry_type_id?: string;
		to_time?: string;
		user_id?: string;
	}

	export interface TimeEntryInterval {

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		id?: string;
		identifier?: string;

		/**READ-ONLY */
		modified?: string;
		modified_by_id?: string;
		name?: string;
	}

	export interface TimeEntryType {
		company_id?: string;

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		id?: string;

		/**READ-ONLY */
		modified?: string;
		modified_by_id?: string;
		name?: string;
		time_entry_interval_id?: string;
		time_entry_value_type_id?: string;
	}

	export interface TimeEntryUnitType {
		abbreviation?: string;

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		id?: string;
		identifier?: string;

		/**READ-ONLY */
		modified?: string;
		modified_by_id?: string;
		name?: string;
	}

	export interface TimeEntryValueType {

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		id?: string;
		identifier?: string;

		/**READ-ONLY */
		modified?: string;
		modified_by_id?: string;
		name?: string;
		time_entry_unit_type_id?: string;
	}

	export interface User {
		api_key?: string;
		city_id?: string;
		company_id?: string;

		/**Cost of salaries */
		cost_price?: number;

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		email?: string;

		/**Additional cost on this employee (pension, vacation etc.) */
		extra_price?: number;
		first_name?: string;

		/**READ-ONLY */
		full_name?: string;
		id?: string;
		is_active?: boolean;
		language_id?: string;
		last_name?: string;
		mobile?: string;
		mobile_countrycode?: string;

		/**READ-ONLY */
		modified?: string;
		password?: string;
		phone?: string;
		phone_countrycode?: string;

		/**If `true` the employee will receive an email receipt of every form submitted */
		receive_form_mails?: boolean;

		/**The price this employee costs per hour when working */
		sale_price?: number;
		street_name?: string;
		website?: string;
	}

	export interface VendorProduct {
		barcode?: string;

		/**READ-ONLY */
		created?: string;
		created_by_id?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		description?: string;
		id?: string;

		/**READ-ONLY */
		modified?: string;
		name?: string;
		price?: number;
		product_category_number?: string;
		product_number?: string;
		vendor_id?: string;
	}

	export interface WallComment {

		/**READ-ONLY */
		created?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		id?: string;
		message?: string;

		/**READ-ONLY */
		modified?: string;
		user_id?: string;
		wall_post_id?: string;
	}

	export interface WallPost {

		/**READ-ONLY */
		created?: string;

		/**READ-ONLY - only present if it's an deleted object */
		deleted?: string;
		id?: string;
		message?: string;

		/**READ-ONLY */
		modified?: string;
		project_id?: string;
		user_id?: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get list of cities supported in Apacta
		 * Get cities
		 * @param {string} zip_code Used to search for a city with specific zip code
		 * @return {string} OK
		 */
		CitiesGetByZip_code(zip_code: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'cities?zip_code=' + (zip_code == null ? '' : encodeURIComponent(zip_code)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get details about one city
		 * Get cities/{city_id}
		 * @return {string} OK
		 */
		CitiesGetByCity_id(city_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'cities/' + (city_id == null ? '' : encodeURIComponent(city_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a list of clocking records
		 * Get clocking_records
		 * @param {boolean} active Used to search for active clocking records
		 * @return {string} OK
		 */
		ClockingRecordsGetByActive(active: boolean, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'clocking_records?active=' + active, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Create clocking record for authenticated user
		 * Post clocking_records
		 * @return {void} 
		 */
		ClockingRecordsPost(requestBody: ClockingRecordsPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'clocking_records', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Checkout active clocking record for authenticated user
		 * Post clocking_records/checkout
		 * @return {void} 
		 */
		ClockingRecordsPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'clocking_records/checkout', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a clocking record
		 * Delete clocking_records/{clocking_record_id}
		 * @return {string} OK
		 */
		ClockingRecordsDeleteByClocking_record_id(clocking_record_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'clocking_records/' + (clocking_record_id == null ? '' : encodeURIComponent(clocking_record_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Details of 1 clocking_record
		 * Get clocking_records/{clocking_record_id}
		 * @return {string} OK
		 */
		ClockingRecordsGetByClocking_record_id(clocking_record_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'clocking_records/' + (clocking_record_id == null ? '' : encodeURIComponent(clocking_record_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit a clocking record
		 * Put clocking_records/{clocking_record_id}
		 * @return {string} OK
		 */
		ClockingRecordsPutByClocking_record_id(clocking_record_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'clocking_records/' + (clocking_record_id == null ? '' : encodeURIComponent(clocking_record_id)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a list of companies
		 * Get companies
		 * @return {string} OK
		 */
		CompaniesGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'companies', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Details of 1 company
		 * Get companies/{company_id}
		 * @return {string} Company object
		 */
		CompaniesGetByCompany_id(company_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'companies/' + (company_id == null ? '' : encodeURIComponent(company_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a list of integration feature settings
		 * Get companies/{company_id}/integration_feature_settings
		 * @return {string} OK
		 */
		CompaniesGetByCompany_id(company_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'companies/' + (company_id == null ? '' : encodeURIComponent(company_id)) + '/integration_feature_settings', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show details of 1 integration feature setting
		 * Get companies/{company_id}/integration_feature_settings/{integration_feature_setting_id}
		 * @return {string} OK
		 */
		CompaniesGetByCompany_idAndIntegration_feature_setting_id(company_id: string, integration_feature_setting_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'companies/' + (company_id == null ? '' : encodeURIComponent(company_id)) + '/integration_feature_settings/' + (integration_feature_setting_id == null ? '' : encodeURIComponent(integration_feature_setting_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get list of contact types supported in Apacta
		 * Get contact_types
		 * @param {string} identifier Search for specific identifier value
		 * @return {string} OK
		 */
		ContactTypesGetByIdentifier(identifier: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'contact_types?identifier=' + (identifier == null ? '' : encodeURIComponent(identifier)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get details about one contact type
		 * Get contact_types/{contact_type_id}
		 * @return {string} OK
		 */
		ContactTypesGetByContact_type_id(contact_type_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'contact_types/' + (contact_type_id == null ? '' : encodeURIComponent(contact_type_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a list of contacts
		 * Get contacts
		 * @param {string} name Used to search for a contact with a specific name
		 * @param {string} cvr Search for values in CVR field
		 * @param {string} ean Search for values in EAN field
		 * @param {string} erp_id Search for values in ERP id field
		 * @param {string} contact_type Used to show only contacts with with one specific `ContactType`
		 * @param {string} city Used to show only contacts with with one specific `City`
		 * @return {string} OK
		 */
		ContactsGetByNameAndCvrAndEanAndErp_idAndContact_typeAndCity(name: string, cvr: string, ean: string, erp_id: string, contact_type: string, city: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'contacts?name=' + (name == null ? '' : encodeURIComponent(name)) + '&cvr=' + (cvr == null ? '' : encodeURIComponent(cvr)) + '&ean=' + (ean == null ? '' : encodeURIComponent(ean)) + '&erp_id=' + (erp_id == null ? '' : encodeURIComponent(erp_id)) + '&contact_type=' + (contact_type == null ? '' : encodeURIComponent(contact_type)) + '&city=' + (city == null ? '' : encodeURIComponent(city)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add a new contact
		 * Post contacts
		 * @return {void} 
		 */
		ContactsPost(requestBody: ContactsPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'contacts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a contact
		 * Delete contacts/{contact_id}
		 * @return {string} OK
		 */
		ContactsDeleteByContact_id(contact_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'contacts/' + (contact_id == null ? '' : encodeURIComponent(contact_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Details of 1 contact
		 * Get contacts/{contact_id}
		 * @return {string} OK
		 */
		ContactsGetByContact_id(contact_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'contacts/' + (contact_id == null ? '' : encodeURIComponent(contact_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit a contact
		 * Put contacts/{contact_id}
		 * @return {string} OK
		 */
		ContactsPutByContact_id(contact_id: string, requestBody: ContactsPutByContact_idBody, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'contacts/' + (contact_id == null ? '' : encodeURIComponent(contact_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * Get list of currencies supported in Apacta
		 * Get currencies
		 * @return {string} OK
		 */
		CurrenciesGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'currencies', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get details about one currency
		 * Get currencies/{currency_id}
		 * @return {string} OK
		 */
		CurrenciesGetByCurrency_id(currency_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'currencies/' + (currency_id == null ? '' : encodeURIComponent(currency_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Used to retrieve details about the logged in user's hours
		 * Get employee_hours
		 * @param {string} date_from Date formatted as Y-m-d (2016-06-28)
		 * @param {string} date_to Date formatted as Y-m-d (2016-06-28)
		 * @return {string} OK
		 */
		EmployeeHoursGetByDate_fromAndDate_to(date_from: string, date_to: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'employee_hours?date_from=' + (date_from == null ? '' : encodeURIComponent(date_from)) + '&date_to=' + (date_to == null ? '' : encodeURIComponent(date_to)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show list of expense files
		 * Get expense_files
		 * @return {string} OK
		 */
		ExpenseFilesGetByCreated_by_idAndExpense_id(created_by_id: string, expense_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'expense_files?created_by_id=' + (created_by_id == null ? '' : encodeURIComponent(created_by_id)) + '&expense_id=' + (expense_id == null ? '' : encodeURIComponent(expense_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Delete file
		 * Delete expense_files/{expense_file_id}
		 * @return {string} OK
		 */
		ExpenseFilesDeleteByExpense_file_id(expense_file_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'expense_files/' + (expense_file_id == null ? '' : encodeURIComponent(expense_file_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show file
		 * Get expense_files/{expense_file_id}
		 * @return {string} OK
		 */
		ExpenseFilesGetByExpense_file_id(expense_file_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'expense_files/' + (expense_file_id == null ? '' : encodeURIComponent(expense_file_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit file
		 * Put expense_files/{expense_file_id}
		 * @return {string} OK
		 */
		ExpenseFilesPutByExpense_file_id(expense_file_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'expense_files/' + (expense_file_id == null ? '' : encodeURIComponent(expense_file_id)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show list of expense lines
		 * Get expense_lines
		 * @return {string} OK
		 */
		ExpenseLinesGetByCreated_by_idAndCurrency_idAndExpense_id(created_by_id: string, currency_id: string, expense_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'expense_lines?created_by_id=' + (created_by_id == null ? '' : encodeURIComponent(created_by_id)) + '&currency_id=' + (currency_id == null ? '' : encodeURIComponent(currency_id)) + '&expense_id=' + (expense_id == null ? '' : encodeURIComponent(expense_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add line to expense
		 * Post expense_lines
		 * @return {void} 
		 */
		ExpenseLinesPost(requestBody: ExpenseLinesPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'expense_lines', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete expense line
		 * Delete expense_lines/{expense_line_id}
		 * @return {string} OK
		 */
		ExpenseLinesDeleteByExpense_line_id(expense_line_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'expense_lines/' + (expense_line_id == null ? '' : encodeURIComponent(expense_line_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show expense line
		 * Get expense_lines/{expense_line_id}
		 * @return {string} OK
		 */
		ExpenseLinesGetByExpense_line_id(expense_line_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'expense_lines/' + (expense_line_id == null ? '' : encodeURIComponent(expense_line_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit expense line
		 * Put expense_lines/{expense_line_id}
		 * @return {string} OK
		 */
		ExpenseLinesPutByExpense_line_id(expense_line_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'expense_lines/' + (expense_line_id == null ? '' : encodeURIComponent(expense_line_id)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show list of expenses
		 * Get expenses
		 * @param {Date} gt_created Created after date
		 * @param {Date} lt_created Created before date
		 * @return {string} OK
		 */
		ExpensesGetByCreated_by_idAndCompany_idAndContact_idAndProject_idAndGt_createdAndLt_created(created_by_id: string, company_id: string, contact_id: string, project_id: string, gt_created: Date, lt_created: Date, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'expenses?created_by_id=' + (created_by_id == null ? '' : encodeURIComponent(created_by_id)) + '&company_id=' + (company_id == null ? '' : encodeURIComponent(company_id)) + '&contact_id=' + (contact_id == null ? '' : encodeURIComponent(contact_id)) + '&project_id=' + (project_id == null ? '' : encodeURIComponent(project_id)) + '&gt_created=' + gt_created.toISOString() + '&lt_created=' + lt_created.toISOString(), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add line to expense
		 * Post expenses
		 * @return {void} 
		 */
		ExpensesPost(requestBody: ExpensesPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'expenses', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete expense
		 * Delete expenses/{expense_id}
		 * @return {string} OK
		 */
		ExpensesDeleteByExpense_id(expense_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'expenses/' + (expense_id == null ? '' : encodeURIComponent(expense_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show expense
		 * Get expenses/{expense_id}
		 * @return {string} OK
		 */
		ExpensesGetByExpense_id(expense_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'expenses/' + (expense_id == null ? '' : encodeURIComponent(expense_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit expense
		 * Put expenses/{expense_id}
		 * @return {string} OK
		 */
		ExpensesPutByExpense_id(expense_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'expenses/' + (expense_id == null ? '' : encodeURIComponent(expense_id)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show list of all OIOUBL files for the expense
		 * Get expenses/{expense_id}/original_files
		 * @return {string} OK
		 */
		Expense OIOUBL filesGetByExpense_id(expense_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'expenses/' + (expense_id == null ? '' : encodeURIComponent(expense_id)) + '/original_files', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show OIOUBL file
		 * Get expenses/{expense_id}/original_files/{file_id}
		 * @return {string} OK
		 */
		Expense OIOUBL filesGetByExpense_idAndFile_id(expense_id: string, file_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'expenses/' + (expense_id == null ? '' : encodeURIComponent(expense_id)) + '/original_files/' + (file_id == null ? '' : encodeURIComponent(file_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get list of form field types
		 * Get form_field_types
		 * @param {string} name Used to filter on the `name` of the form_fields
		 * @param {string} identifier Used to filter on the `identifier` of the form_fields
		 * @return {string} OK
		 */
		FormFieldTypesGetByNameAndIdentifier(name: string, identifier: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'form_field_types?name=' + (name == null ? '' : encodeURIComponent(name)) + '&identifier=' + (identifier == null ? '' : encodeURIComponent(identifier)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get details about single `FormField`
		 * Get form_field_types/{form_field_type_id}
		 * @return {string} OK
		 */
		FormFieldTypesGetByForm_field_type_id(form_field_type_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'form_field_types/' + (form_field_type_id == null ? '' : encodeURIComponent(form_field_type_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add a new field to a `Form`
		 * Post form_fields
		 * @return {void} 
		 */
		FormFieldsPost(requestBody: FormFieldsPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'form_fields', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get details about single `FormField`
		 * Get form_fields/{form_field_id}
		 * @return {string} OK
		 */
		FormFieldsGetByForm_field_id(form_field_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'form_fields/' + (form_field_id == null ? '' : encodeURIComponent(form_field_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get array of form_templates for your company
		 * Get form_templates
		 * @param {string} name Used to filter on the `name` of the form_templates
		 * @param {string} identifier Used to filter on the `identifier` of the form_templates
		 * @param {string} pdf_template_identifier Used to filter on the `pdf_template_identifier` of the form_templates
		 * @param {string} description Used to filter on the `description` of the form_templates
		 * @return {string} OK
		 */
		FormTemplatesGetByNameAndIdentifierAndPdf_template_identifierAndDescription(name: string, identifier: string, pdf_template_identifier: string, description: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'form_templates?name=' + (name == null ? '' : encodeURIComponent(name)) + '&identifier=' + (identifier == null ? '' : encodeURIComponent(identifier)) + '&pdf_template_identifier=' + (pdf_template_identifier == null ? '' : encodeURIComponent(pdf_template_identifier)) + '&description=' + (description == null ? '' : encodeURIComponent(description)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View one form template
		 * Get form_templates/{form_template_id}
		 * @return {string} OK
		 */
		FormTemplatesGetByForm_template_id(form_template_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'form_templates/' + (form_template_id == null ? '' : encodeURIComponent(form_template_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve array of forms
		 * Get forms
		 * @param {string} extended Used to have extended details from the forms from the `Form`'s `FormFields`
		 * @param {string} date_from Used in conjunction with `date_to` to only show forms within these dates - format like `2016-28-05`
		 * @param {string} date_to Used in conjunction with `date_from` to only show forms within these dates - format like `2016-28-30`
		 * @param {string} project_id Used to filter on the `project_id` of the forms
		 * @param {string} created_by_id Used to filter on the `created_by_id` of the forms
		 * @param {string} form_template_id Used to filter on the `form_template_id` of the forms
		 * @return {string} OK
		 */
		FormsGetByExtendedAndDate_fromAndDate_toAndProject_idAndCreated_by_idAndForm_template_id(extended: string, date_from: string, date_to: string, project_id: string, created_by_id: string, form_template_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'forms?extended=' + (extended == null ? '' : encodeURIComponent(extended)) + '&date_from=' + (date_from == null ? '' : encodeURIComponent(date_from)) + '&date_to=' + (date_to == null ? '' : encodeURIComponent(date_to)) + '&project_id=' + (project_id == null ? '' : encodeURIComponent(project_id)) + '&created_by_id=' + (created_by_id == null ? '' : encodeURIComponent(created_by_id)) + '&form_template_id=' + (form_template_id == null ? '' : encodeURIComponent(form_template_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add new form
		 * Used to add a form into the system
		 * Post forms
		 * @return {void} 
		 */
		FormsPost(requestBody: FormsPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'forms', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a form
		 * You can only delete the forms that you've submitted yourself
		 * Delete forms/{form_id}
		 * @return {void} OK
		 */
		FormsDeleteByForm_id(form_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'forms/' + (form_id == null ? '' : encodeURIComponent(form_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * View form
		 * Get forms/{form_id}
		 * @return {string} OK
		 */
		FormsGetByForm_id(form_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'forms/' + (form_id == null ? '' : encodeURIComponent(form_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit a form
		 * Put forms/{form_id}
		 * @return {void} OK
		 */
		FormsPutByForm_id(form_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'forms/' + (form_id == null ? '' : encodeURIComponent(form_id)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * View list of invoice lines
		 * Get invoice_lines
		 * @return {string} OK
		 */
		InvoiceLinesGetByInvoice_idAndProduct_idAndUser_idAndNameAndDiscount_text(invoice_id: string, product_id: string, user_id: string, name: string, discount_text: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'invoice_lines?invoice_id=' + (invoice_id == null ? '' : encodeURIComponent(invoice_id)) + '&product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&user_id=' + (user_id == null ? '' : encodeURIComponent(user_id)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&discount_text=' + (discount_text == null ? '' : encodeURIComponent(discount_text)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add invoice
		 * Post invoice_lines
		 * @return {void} 
		 */
		InvoiceLinesPost(requestBody: InvoiceLinesPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'invoice_lines', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete invoice line
		 * Delete invoice_lines/{invoice_line_id}
		 * @return {string} OK
		 */
		InvoiceLinesDeleteByInvoice_line_id(invoice_line_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'invoice_lines/' + (invoice_line_id == null ? '' : encodeURIComponent(invoice_line_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View invoice line
		 * Get invoice_lines/{invoice_line_id}
		 * @return {string} OK
		 */
		InvoiceLinesGetByInvoice_line_id(invoice_line_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'invoice_lines/' + (invoice_line_id == null ? '' : encodeURIComponent(invoice_line_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit invoice line
		 * Put invoice_lines/{invoice_line_id}
		 * @return {string} OK
		 */
		InvoiceLinesPutByInvoice_line_id(invoice_line_id: string, requestBody: InvoiceLinesPutByInvoice_line_idBody, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'invoice_lines/' + (invoice_line_id == null ? '' : encodeURIComponent(invoice_line_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * View list of invoices
		 * Get invoices
		 * @param {string} contact_id Used to filter on the `contact_id` of the invoices
		 * @param {string} project_id Used to filter on the `project_id` of the invoices
		 * @param {string} invoice_number Used to filter on the `invoice_number` of the invoices
		 * @return {string} OK
		 */
		InvoicesGetByContact_idAndProject_idAndInvoice_numberAndOffer_numberAndIs_draftAndIs_offerAndIs_lockedAndDate_fromAndDate_toAndIssued_date(contact_id: string, project_id: string, invoice_number: string, offer_number: string, is_draft: number, is_offer: number, is_locked: number, date_from: Date, date_to: Date, issued_date: Date, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'invoices?contact_id=' + (contact_id == null ? '' : encodeURIComponent(contact_id)) + '&project_id=' + (project_id == null ? '' : encodeURIComponent(project_id)) + '&invoice_number=' + (invoice_number == null ? '' : encodeURIComponent(invoice_number)) + '&offer_number=' + (offer_number == null ? '' : encodeURIComponent(offer_number)) + '&is_draft=' + is_draft + '&is_offer=' + is_offer + '&is_locked=' + is_locked + '&date_from=' + date_from.toISOString() + '&date_to=' + date_to.toISOString() + '&issued_date=' + issued_date.toISOString(), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add invoice
		 * Post invoices
		 * @return {void} 
		 */
		InvoicesPost(requestBody: InvoicesPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'invoices', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete invoice
		 * Delete invoices/{invoice_id}
		 * @return {string} OK
		 */
		InvoicesDeleteByInvoice_id(invoice_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'invoices/' + (invoice_id == null ? '' : encodeURIComponent(invoice_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View invoice
		 * Get invoices/{invoice_id}
		 * @return {string} OK
		 */
		InvoicesGetByInvoice_id(invoice_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'invoices/' + (invoice_id == null ? '' : encodeURIComponent(invoice_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit invoice
		 * Put invoices/{invoice_id}
		 * @return {string} OK
		 */
		InvoicesPutByInvoice_id(invoice_id: string, requestBody: InvoicesPutByInvoice_idBody, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'invoices/' + (invoice_id == null ? '' : encodeURIComponent(invoice_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * View list of mass messages for specific user
		 * Get mass_messages_users
		 * @param {boolean} is_read Used to filter on the `is_read` of the mass messages
		 * @return {string} OK
		 */
		MassMessagesUsersGetByIs_read(is_read: boolean, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'mass_messages_users?is_read=' + is_read, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View mass message
		 * Get mass_messages_users/{mass_messages_user_id}
		 * @return {string} OK
		 */
		MassMessagesUsersGetByMass_messages_user_id(mass_messages_user_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'mass_messages_users/' + (mass_messages_user_id == null ? '' : encodeURIComponent(mass_messages_user_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit mass message
		 * Put mass_messages_users/{mass_messages_user_id}
		 * @return {string} OK
		 */
		MassMessagesUsersPutByMass_messages_user_id(mass_messages_user_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'mass_messages_users/' + (mass_messages_user_id == null ? '' : encodeURIComponent(mass_messages_user_id)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View list of all materials
		 * Get materials
		 * @param {string} barcode Used to filter on the `barcode` of the materials
		 * @param {string} name Used to filter on the `name` of the materials
		 * @param {string} project_id Used to find materials used in specific project by `project_id`
		 * @param {boolean} currently_rented Used to find currently rented materials
		 * @return {string} OK
		 */
		MaterialsGetByBarcodeAndNameAndProject_idAndCurrently_rented(barcode: string, name: string, project_id: string, currently_rented: boolean, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'materials?barcode=' + (barcode == null ? '' : encodeURIComponent(barcode)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&project_id=' + (project_id == null ? '' : encodeURIComponent(project_id)) + '&currently_rented=' + currently_rented, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Delete material
		 * Delete materials/{material_id}
		 * @return {string} OK
		 */
		MaterialsDeleteByMaterial_id(material_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'materials/' + (material_id == null ? '' : encodeURIComponent(material_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View material
		 * Get materials/{material_id}
		 * @return {string} OK
		 */
		MaterialsGetByMaterial_id(material_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'materials/' + (material_id == null ? '' : encodeURIComponent(material_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit material
		 * Put materials/{material_id}
		 * @return {string} OK
		 */
		MaterialsPutByMaterial_id(material_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'materials/' + (material_id == null ? '' : encodeURIComponent(material_id)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show list of rentals for specific material
		 * Get materials/{material_id}/rentals/
		 * @return {string} OK
		 */
		MaterialRentalsGetByMaterial_id(material_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'materials/' + (material_id == null ? '' : encodeURIComponent(material_id)) + '/rentals/', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add material rental
		 * Post materials/{material_id}/rentals/
		 * @return {void} 
		 */
		MaterialRentalsPostByMaterial_id(material_id: string, requestBody: MaterialRentalsPostByMaterial_idBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'materials/' + (material_id == null ? '' : encodeURIComponent(material_id)) + '/rentals/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Checkout material rental
		 * Post materials/{material_id}/rentals/checkout/
		 * @return {void} 
		 */
		MaterialRentalsPostByMaterial_id(material_id: string, requestBody: MaterialRentalsPostByMaterial_idBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'materials/' + (material_id == null ? '' : encodeURIComponent(material_id)) + '/rentals/checkout/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete material rental
		 * Delete rental for material
		 * Delete materials/{material_id}/rentals/{material_rental_id}/
		 * @return {string} OK
		 */
		MaterialRentalsDeleteByMaterial_idAndMaterial_rental_id(material_id: string, material_rental_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'materials/' + (material_id == null ? '' : encodeURIComponent(material_id)) + '/rentals/' + (material_rental_id == null ? '' : encodeURIComponent(material_rental_id)) + '/', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show rental foor materi
		 * Get materials/{material_id}/rentals/{material_rental_id}/
		 * @return {string} OK
		 */
		MaterialRentalsGetByMaterial_idAndMaterial_rental_id(material_id: string, material_rental_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'materials/' + (material_id == null ? '' : encodeURIComponent(material_id)) + '/rentals/' + (material_rental_id == null ? '' : encodeURIComponent(material_rental_id)) + '/', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add material
		 * Post materials/{material_id}/rentals/{material_rental_id}/
		 * @return {void} 
		 */
		MaterialsPostByMaterial_idAndMaterial_rental_id(material_id: string, material_rental_id: string, requestBody: MaterialsPostByMaterial_idAndMaterial_rental_idBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'materials/' + (material_id == null ? '' : encodeURIComponent(material_id)) + '/rentals/' + (material_rental_id == null ? '' : encodeURIComponent(material_rental_id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Edit material rental
		 * Edit material rental
		 * Put materials/{material_id}/rentals/{material_rental_id}/
		 * @return {string} OK
		 */
		MaterialRentalsPutByMaterial_idAndMaterial_rental_id(material_id: string, material_rental_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'materials/' + (material_id == null ? '' : encodeURIComponent(material_id)) + '/rentals/' + (material_rental_id == null ? '' : encodeURIComponent(material_rental_id)) + '/', null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a list of payment term types
		 * Get payment_term_types
		 * @return {string} OK
		 */
		PaymentTermTypesGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'payment_term_types', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Details of 1 payment term type
		 * Get payment_term_types/{payment_term_type_id}
		 * @return {string} OK
		 */
		PaymentTermTypesGetByPayment_term_type_id(payment_term_type_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'payment_term_types/' + (payment_term_type_id == null ? '' : encodeURIComponent(payment_term_type_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a list of payment terms
		 * Get payment_terms
		 * @return {string} OK
		 */
		PaymentTermsGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'payment_terms', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Details of 1 payment term
		 * Get payment_terms/{payment_term_id}
		 * @return {string} OK
		 */
		PaymentTermsGetByPayment_term_id(payment_term_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'payment_terms/' + (payment_term_id == null ? '' : encodeURIComponent(payment_term_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Check if API is up and API key works
		 * Get ping
		 * @return {string} OK
		 */
		PingGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'ping', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * List products
		 * Get products
		 * @param {string} name Used to filter on the `name` of the products
		 * @param {string} product_number Used to filter on the `product_number` of the products
		 * @param {string} barcode Used to filter on the `barcode` of the products
		 * @return {string} OK
		 */
		ProductsGetByNameAndProduct_numberAndBarcode(name: string, product_number: string, barcode: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'products?name=' + (name == null ? '' : encodeURIComponent(name)) + '&product_number=' + (product_number == null ? '' : encodeURIComponent(product_number)) + '&barcode=' + (barcode == null ? '' : encodeURIComponent(barcode)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add new product
		 * Post products
		 * @return {void} 
		 */
		ProductsPost(requestBody: ProductsPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'products', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a product
		 * Delete products/{product_id}
		 * @return {string} OK
		 */
		ProductsDeleteByProduct_id(product_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'products/' + (product_id == null ? '' : encodeURIComponent(product_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View single product
		 * Get products/{product_id}
		 * @return {string} OK
		 */
		ProductsGetByProduct_id(product_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'products/' + (product_id == null ? '' : encodeURIComponent(product_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit a product
		 * Put products/{product_id}
		 * @return {string} OK
		 */
		ProductsPutByProduct_id(product_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'products/' + (product_id == null ? '' : encodeURIComponent(product_id)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get list of project statuses
		 * Get project_statuses
		 * @return {string} OK
		 */
		ProjectStatusesGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'project_statuses', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get details about one contact type
		 * Get project_statuses/{project_status_id}
		 * @return {string} OK
		 */
		ProjectStatusesGetByProject_status_id(project_status_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'project_statuses/' + (project_status_id == null ? '' : encodeURIComponent(project_status_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View list of projects
		 * Get projects
		 * @param {boolean} show_all Unless this is set to `true` only open projects will be shown
		 * @param {string} contact_id Used to filter on the `contact_id` of the projects
		 * @param {string} project_status_id Used to filter on the `project_status_id` of the projects
		 * @param {Array<string>} project_status_ids Used to filter on the `project_status_id` of the projects (match any of the provided values)
		 * @param {string} name Used to search on the `name` of the projects
		 * @param {string} erp_project_id Used to search on the `erp_project_id` of the projects
		 * @param {string} erp_task_id Used to search on the `erp_task_id` of the projects
		 * @param {string} start_time_gte Show projects with start time after than this value
		 * @param {string} start_time_lte Show projects with start time before this value
		 * @param {string} start_time_eq Show only projects with start time on specific date
		 * @return {string} OK
		 */
		ProjectsGetByShow_allAndContact_idAndProject_status_idAndProject_status_idsAndNameAndErp_project_idAndErp_task_idAndStart_time_gteAndStart_time_lteAndStart_time_eq(show_all: boolean, contact_id: string, project_status_id: string, project_status_ids: Array<string>, name: string, erp_project_id: string, erp_task_id: string, start_time_gte: string, start_time_lte: string, start_time_eq: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'projects?show_all=' + show_all + '&contact_id=' + (contact_id == null ? '' : encodeURIComponent(contact_id)) + '&project_status_id=' + (project_status_id == null ? '' : encodeURIComponent(project_status_id)) + '&' + project_status_ids.map(z => `project_status_ids=${encodeURIComponent(z)}`).join('&') + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&erp_project_id=' + (erp_project_id == null ? '' : encodeURIComponent(erp_project_id)) + '&erp_task_id=' + (erp_task_id == null ? '' : encodeURIComponent(erp_task_id)) + '&start_time_gte=' + (start_time_gte == null ? '' : encodeURIComponent(start_time_gte)) + '&start_time_lte=' + (start_time_lte == null ? '' : encodeURIComponent(start_time_lte)) + '&start_time_eq=' + (start_time_eq == null ? '' : encodeURIComponent(start_time_eq)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add a project
		 * Post projects
		 * @return {void} 
		 */
		ProjectsPost(requestBody: ProjectsPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a project
		 * Delete projects/{project_id}
		 * @return {string} OK
		 */
		ProjectsDeleteByProject_id(project_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View specific project
		 * Get projects/{project_id}
		 * @return {string} OK
		 */
		ProjectsGetByProject_id(project_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit a project
		 * Put projects/{project_id}
		 * @return {string} OK
		 */
		ProjectsPutByProject_id(project_id: string, requestBody: ProjectsPutByProject_idBody, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * Show list of files uploaded to project
		 * Used to show files uploaded to a project from wall post or form
		 * Get projects/{project_id}/files
		 * @return {string} OK
		 */
		ProjectsGetByProject_id(project_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/files', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Delete file
		 * Delete file uploaded to a project from wall post or form
		 * Delete projects/{project_id}/files/{file_id}/
		 * @return {string} OK
		 */
		ProjectsDeleteByProject_idAndFile_id(project_id: string, file_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/files/' + (file_id == null ? '' : encodeURIComponent(file_id)) + '/', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show file
		 * Show file uploaded to a project from wall post or form
		 * Get projects/{project_id}/files/{file_id}/
		 * @return {string} OK
		 */
		ProjectsGetByProject_idAndFile_id(project_id: string, file_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/files/' + (file_id == null ? '' : encodeURIComponent(file_id)) + '/', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit file
		 * Edit file uploaded to a project from wall post or form
		 * Put projects/{project_id}/files/{file_id}/
		 * @return {string} OK
		 */
		ProjectsPutByProject_idAndFile_id(project_id: string, file_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/files/' + (file_id == null ? '' : encodeURIComponent(file_id)) + '/', null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show list of project files uploaded to project
		 * Returns files belonging to the project, not uploaded from wall post or form
		 * Get projects/{project_id}/project_files
		 * @return {string} OK
		 */
		ProjectsGetByProject_id(project_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/project_files', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Delete project file
		 * Delete projects/{project_id}/project_files/{project_file_id}/
		 * @return {string} OK
		 */
		ProjectsDeleteByProject_file_idAndProject_id(project_file_id: string, project_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/project_files/' + (project_file_id == null ? '' : encodeURIComponent(project_file_id)) + '/', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show project file
		 * Get projects/{project_id}/project_files/{project_file_id}/
		 * @return {string} OK
		 */
		ProjectsGetByProject_idAndProject_file_id(project_id: string, project_file_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/project_files/' + (project_file_id == null ? '' : encodeURIComponent(project_file_id)) + '/', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit project file
		 * Put projects/{project_id}/project_files/{project_file_id}/
		 * @return {string} OK
		 */
		ProjectsPutByProject_idAndProject_file_id(project_id: string, project_file_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/project_files/' + (project_file_id == null ? '' : encodeURIComponent(project_file_id)) + '/', null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Show list of users added to project
		 * Get projects/{project_id}/users/
		 * @return {string} OK
		 */
		ProjectsGetByProject_id(project_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/users/', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add user to project
		 * Post projects/{project_id}/users/
		 * @return {void} 
		 */
		ProjectsPostByProject_id(project_id: string, requestBody: ProjectsPostByProject_idBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/users/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete user from project
		 * Delete projects/{project_id}/users/{user_id}
		 * @return {string} OK
		 */
		ProjectsDeleteByUser_idAndProject_id(user_id: string, project_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/users/' + (user_id == null ? '' : encodeURIComponent(user_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View specific user assigned to project
		 * Get projects/{project_id}/users/{user_id}
		 * @return {string} OK
		 */
		ProjectsGetByUser_idAndProject_id(user_id: string, project_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/users/' + (user_id == null ? '' : encodeURIComponent(user_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * List stock_locations
		 * Get stock_locations
		 * @param {string} name Used to filter on the `name` of the stock_locations
		 * @return {string} OK
		 */
		StockLocationsGetByName(name: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'stock_locations?name=' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add new stock_locations
		 * Post stock_locations
		 * @return {void} 
		 */
		StockLocationsPost(requestBody: StockLocationsPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'stock_locations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete location
		 * Delete stock_locations/{location_id}
		 * @return {string} OK
		 */
		StockLocationsDeleteByLocation_id(location_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'stock_locations/' + (location_id == null ? '' : encodeURIComponent(location_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View single location
		 * Get stock_locations/{location_id}
		 * @return {string} OK
		 */
		StockLocationsGetByLocation_id(location_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'stock_locations/' + (location_id == null ? '' : encodeURIComponent(location_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit location
		 * Put stock_locations/{location_id}
		 * @return {string} OK
		 */
		StockLocationsPutByLocation_id(location_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'stock_locations/' + (location_id == null ? '' : encodeURIComponent(location_id)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * List time entries
		 * Get time_entries
		 * @return {string} OK
		 */
		TimeEntriesGetByUser_idAndForm_idAndProject_idAndGt_from_timeAndLt_from_timeAndGt_to_timeAndLt_to_timeAndLt_sumAndGt_sum(user_id: string, form_id: string, project_id: string, gt_from_time: string, lt_from_time: string, gt_to_time: string, lt_to_time: string, lt_sum: string, gt_sum: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'time_entries?user_id=' + (user_id == null ? '' : encodeURIComponent(user_id)) + '&form_id=' + (form_id == null ? '' : encodeURIComponent(form_id)) + '&project_id=' + (project_id == null ? '' : encodeURIComponent(project_id)) + '&gt_from_time=' + (gt_from_time == null ? '' : encodeURIComponent(gt_from_time)) + '&lt_from_time=' + (lt_from_time == null ? '' : encodeURIComponent(lt_from_time)) + '&gt_to_time=' + (gt_to_time == null ? '' : encodeURIComponent(gt_to_time)) + '&lt_to_time=' + (lt_to_time == null ? '' : encodeURIComponent(lt_to_time)) + '&lt_sum=' + (lt_sum == null ? '' : encodeURIComponent(lt_sum)) + '&gt_sum=' + (gt_sum == null ? '' : encodeURIComponent(gt_sum)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add new time entry
		 * Post time_entries
		 * @return {void} 
		 */
		TimeEntriesPost(requestBody: TimeEntriesPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'time_entries', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete time entry
		 * Delete time_entries/{time_entry_id}
		 * @return {string} OK
		 */
		TimeEntriesDeleteByTime_entry_id(time_entry_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'time_entries/' + (time_entry_id == null ? '' : encodeURIComponent(time_entry_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View time entry
		 * Get time_entries/{time_entry_id}
		 * @return {string} OK
		 */
		TimeEntriesGetByTime_entry_id(time_entry_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'time_entries/' + (time_entry_id == null ? '' : encodeURIComponent(time_entry_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit time entry
		 * Put time_entries/{time_entry_id}
		 * @return {string} OK
		 */
		TimeEntriesPutByTime_entry_id(time_entry_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'time_entries/' + (time_entry_id == null ? '' : encodeURIComponent(time_entry_id)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * List possible time entry intervals
		 * Get time_entry_intervals
		 * @return {string} OK
		 */
		TimeEntryIntervalsGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'time_entry_intervals', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View time entry interval
		 * Get time_entry_intervals/{time_entry_interval_id}
		 * @return {string} OK
		 */
		TimeEntryIntervalsGetByTime_entry_interval_id(time_entry_interval_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'time_entry_intervals/' + (time_entry_interval_id == null ? '' : encodeURIComponent(time_entry_interval_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * List time entries types
		 * Get time_entry_types
		 * @return {string} OK
		 */
		TimeEntryTypesGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'time_entry_types', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add new time entry type
		 * Post time_entry_types
		 * @return {void} 
		 */
		TimeEntryTypesPost(requestBody: TimeEntryTypesPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'time_entry_types', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete time entry type
		 * Delete time_entry_types/{time_entry_type_id}
		 * @return {string} OK
		 */
		TimeEntryTypesDeleteByTime_entry_type_id(time_entry_type_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'time_entry_types/' + (time_entry_type_id == null ? '' : encodeURIComponent(time_entry_type_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View time entry type
		 * Get time_entry_types/{time_entry_type_id}
		 * @return {string} OK
		 */
		TimeEntryTypesGetByTime_entry_type_id(time_entry_type_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'time_entry_types/' + (time_entry_type_id == null ? '' : encodeURIComponent(time_entry_type_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit time entry type
		 * Put time_entry_types/{time_entry_type_id}
		 * @return {string} OK
		 */
		TimeEntryTypesPutByTime_entry_type_id(time_entry_type_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'time_entry_types/' + (time_entry_type_id == null ? '' : encodeURIComponent(time_entry_type_id)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * List possible time entry unit types
		 * Get time_entry_unit_types
		 * @return {string} OK
		 */
		TimeEntryUnitTypesGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'time_entry_unit_types', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View time entry unit type
		 * Get time_entry_unit_types/{time_entry_unit_type_id}
		 * @return {string} OK
		 */
		TimeEntryUnitTypesGetByTime_entry_unit_type_id(time_entry_unit_type_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'time_entry_unit_types/' + (time_entry_unit_type_id == null ? '' : encodeURIComponent(time_entry_unit_type_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * List possible time entry value types
		 * Get time_entry_value_types
		 * @return {string} OK
		 */
		TimeEntryValueTypesGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'time_entry_value_types', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View time entry value type
		 * Get time_entry_value_types/{time_entry_value_type_id}
		 * @return {string} OK
		 */
		TimeEntryValueTypesGetByTime_entry_value_type_id(time_entry_value_type_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'time_entry_value_types/' + (time_entry_value_type_id == null ? '' : encodeURIComponent(time_entry_value_type_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get list of users in company
		 * Get users
		 * @param {string} first_name Used to filter on the `first_name` of the users
		 * @param {string} last_name Used to filter on the `last_name` of the users
		 * @param {string} email Used to filter on the `email` of the users
		 * @param {string} stock_location_id Used to filter on the `stock_location_id` of the users
		 * @return {string} OK
		 */
		UsersGetByFirst_nameAndLast_nameAndEmailAndStock_location_id(first_name: string, last_name: string, email: string, stock_location_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'users?first_name=' + (first_name == null ? '' : encodeURIComponent(first_name)) + '&last_name=' + (last_name == null ? '' : encodeURIComponent(last_name)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&stock_location_id=' + (stock_location_id == null ? '' : encodeURIComponent(stock_location_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add user to company
		 * Post users
		 * @return {void} 
		 */
		UsersPost(requestBody: UsersPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete user
		 * Delete users/{user_id}
		 * @return {string} OK
		 */
		UsersDeleteByUser_id(user_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View user
		 * Get users/{user_id}
		 * @return {string} OK
		 */
		UsersGetByUser_id(user_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Edit user
		 * Put users/{user_id}
		 * @return {string} OK
		 */
		UsersPutByUser_id(user_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * List vendor products
		 * Get vendor_products
		 * @param {string} name Used to filter on the `name` of the vendor products
		 * @param {string} product_number Used to filter on the `product_number` of the vendor products
		 * @param {string} barcode Used to filter on the `barcode` of the vendor products
		 * @param {string} vendor_id Used to filter on the `vendor_id` of the vendor products
		 * @return {string} OK
		 */
		VendorProductsGetByNameAndProduct_numberAndBarcodeAndVendor_id(name: string, product_number: string, barcode: string, vendor_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'vendor_products?name=' + (name == null ? '' : encodeURIComponent(name)) + '&product_number=' + (product_number == null ? '' : encodeURIComponent(product_number)) + '&barcode=' + (barcode == null ? '' : encodeURIComponent(barcode)) + '&vendor_id=' + (vendor_id == null ? '' : encodeURIComponent(vendor_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View single vendor product
		 * Get vendor_products/{vendor_product_id}
		 * @return {string} OK
		 */
		VendorProductsGetByVendor_product_id(vendor_product_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'vendor_products/' + (vendor_product_id == null ? '' : encodeURIComponent(vendor_product_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add wall comment
		 * Post wall_comments
		 * @return {void} 
		 */
		WallCommentsPost(requestBody: WallCommentsPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'wall_comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * View wall comment
		 * Get wall_comments/{wall_comment_id}
		 * @return {string} OK
		 */
		WallCommentsGetByWall_comment_id(wall_comment_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'wall_comments/' + (wall_comment_id == null ? '' : encodeURIComponent(wall_comment_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View list of wall posts
		 * Get wall_posts
		 * @return {string} OK
		 */
		WallPostsGetByProject_idAndUser_id(project_id: string, user_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'wall_posts?project_id=' + (project_id == null ? '' : encodeURIComponent(project_id)) + '&user_id=' + (user_id == null ? '' : encodeURIComponent(user_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Add a wall post
		 * Post wall_posts
		 * @return {void} 
		 */
		WallPostsPost(requestBody: WallPostsPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'wall_posts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * View wall post
		 * Get wall_posts/{wall_post_id}
		 * @return {string} OK
		 */
		WallPostsGetByWall_post_id(wall_post_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'wall_posts/' + (wall_post_id == null ? '' : encodeURIComponent(wall_post_id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * See wall comments to a wall post
		 * Get wall_posts/{wall_post_id}/wall_comments
		 * @return {string} OK
		 */
		WallPostsGetByWall_post_id(wall_post_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'wall_posts/' + (wall_post_id == null ? '' : encodeURIComponent(wall_post_id)) + '/wall_comments', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}
	}

	export interface ClockingRecordsPostBody {
		checkin_latitude?: string;
		checkin_longitude?: string;
		checkout_latitude?: string;
		checkout_longitude?: string;
		project_id?: string;
	}

	export interface ContactsPostBody {

		/**
		 * Street address
		 * Max length: 255
		 */
		address?: string;
		city_id?: string;
		contact_types?: string;
		cvr?: string;
		description?: string;
		email?: string;

		/**
		 * If company has integration to an ERP system, and the contacts are synchronized, this will be the ERP-systems ID of this contact
		 * Max length: 255
		 */
		erp_id?: string;
		name?: string;

		/**
		 * Format like eg. `28680133` or `046158971404`
		 * Max length: 32
		 */
		phone?: string;
		website?: string;
	}

	export interface ContactsPutByContact_idBody {

		/**
		 * Street address
		 * Max length: 255
		 */
		address?: string;
		city_id?: string;
		contact_types?: string;
		cvr?: string;
		description?: string;
		email?: string;

		/**
		 * If company has integration to an ERP system, and the contacts are synchronized, this will be the ERP-systems ID of this contact
		 * Max length: 255
		 */
		erp_id?: string;
		name?: string;

		/**
		 * Format like eg. `28680133` or `046158971404`
		 * Max length: 32
		 */
		phone?: string;
		website?: string;
	}

	export interface ExpenseLinesPostBody {
		buying_price?: number;
		currency_id?: string;
		expense_id?: string;
		quantity?: number;
		selling_price?: number;
		text?: string;
	}

	export interface ExpensesPostBody {
		contact_id?: string;
		currency_id?: string;
		delivery_date?: Date;
		description?: string;
		project_id?: string;
		reference?: string;
		short_text?: string;
		supplier_invoice_number?: string;
	}

	export interface FormFieldsPostBody {
		comment?: string;
		content_value?: string;
		file_id?: string;
		form_field_type_id?: string;
		form_id?: string;
		form_template_field_id?: string;
		placement?: number;
	}

	export interface FormsPostBody {
		form_template_id: string;
		project_id: string;
	}

	export interface InvoiceLinesPostBody {
		description?: string;
		discount_percent?: number;
		discount_text?: string;
		invoice_id?: string;
		name?: string;
		product_id?: string;
		quantity?: number;
		selling_price?: number;
		user_id?: string;
	}

	export interface InvoiceLinesPutByInvoice_line_idBody {
		description?: string;
		discount_percent?: number;
		discount_text?: string;
		invoice_id?: string;
		name?: string;
		product_id?: string;
		quantity?: number;
		selling_price?: number;
		user_id?: string;
	}

	export interface InvoicesPostBody {
		contact_id?: string;
		created_or_modified_gte?: Date;
		date_from?: Date;
		date_to?: Date;
		erp_id?: string;
		erp_payment_term_id?: string;
		invoice_number?: number;
		is_draft?: boolean;
		is_locked?: boolean;
		is_offer?: boolean;
		issued_date?: Date;
		message?: string;
		offer_number?: number;
		payment_due_date?: Date;
		payment_term_id?: string;
		project_id?: string;
		reference?: string;
		vat_percent?: number;
	}

	export interface InvoicesPutByInvoice_idBody {
		contact_id?: string;
		date_from?: Date;
		date_to?: Date;
		erp_id?: string;
		erp_payment_term_id?: string;
		invoice_number?: number;
		is_draft?: boolean;
		is_locked?: boolean;
		is_offer?: boolean;
		issued_date?: Date;
		message?: string;
		offer_number?: number;
		payment_due_date?: Date;
		payment_term_id?: string;
		project_id?: string;
		reference?: string;
		vat_percent?: number;
	}

	export interface MaterialRentalsPostByMaterial_idBody {
		form_id?: string;
		from_date?: string;
		is_invoiced?: string;
		material_id?: string;
		project_id?: string;
		quantity?: number;
		to_date?: string;
	}

	export interface MaterialsPostByMaterial_idAndMaterial_rental_idBody {
		barcode?: string;
		billing_cysle?: MaterialsPostByMaterial_idAndMaterial_rental_idBodyBilling_cysle;
		cost_price?: number;
		description?: string;
		is_single_usage?: boolean;
		name?: string;
		selling_price?: number;
	}

	export enum MaterialsPostByMaterial_idAndMaterial_rental_idBodyBilling_cysle { hourly = 0, daily = 1, weekly = 2 }

	export interface ProductsPostBody {
		barcode?: string;
		buying_price?: number;
		description?: string;
		erp_id?: string;
		name: string;
		product_number?: string;
		selling_price?: number;
	}

	export interface ProjectsPostBody {
		contact_id?: string;
		description?: string;
		erp_project_id?: string;
		erp_task_id?: string;
		name: string;
		project_status_id?: string;
		start_time?: string;
		street_name?: string;
	}

	export interface ProjectsPutByProject_idBody {
		contact_id?: string;
		description?: string;
		erp_project_id?: string;
		erp_task_id?: string;
		name: string;
		project_status_id?: string;
		start_time?: string;
		street_name?: string;
	}

	export interface ProjectsPostByProject_idBody {
		user_id: string;
	}

	export interface StockLocationsPostBody {
		name: string;
	}

	export interface TimeEntriesPostBody {
		form_id?: string;
		from_time?: string;
		is_all_day?: boolean;
		project_id?: string;

		/**Amount of seconds - should only be included when using is_all_day, otherwise will be calculated from from_time and to_time */
		sum?: number;
		time_entry_type_id: string;
		to_time?: string;
		user_id: string;
	}

	export interface TimeEntryTypesPostBody {
		description?: string;
		name: string;
		time_entry_interval_id: string;
		time_entry_value_type_id: string;
	}

	export interface UsersPostBody {
		city_id?: string;

		/**Cost of salaries */
		cost_price?: number;
		email?: string;

		/**Additional cost on this employee (pension, vacation etc.) */
		extra_price?: number;
		first_name: string;
		is_active?: boolean;
		language_id?: string;
		last_name?: string;
		mobile?: string;
		mobile_countrycode?: string;
		password?: string;
		phone?: string;
		phone_countrycode?: string;

		/**If `true` the employee will receive an email receipt of every form submitted */
		receive_form_mails?: boolean;

		/**The price this employee costs per hour when working */
		sale_price?: number;
		street_name?: string;
	}

	export interface WallCommentsPostBody {
		message: string;
		wall_post_id: string;
	}

	export interface WallPostsPostBody {
		message: string;
		project_id: string;
	}

}

