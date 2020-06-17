import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface Asset {

		/**Codes of the asset categories in which the asset is classified */
		categories?: Array<string>;

		/**Asset code */
		code: string;

		/**Description of the asset */
		description?: string;

		/**Date on which the asset expire */
		end_of_use?: string;

		/**Whether the asset is localized or not, meaning if you want to have different reference files for each of your locale */
		localizable?: boolean;

		/**Reference files of the asset */
		AssetReference_files?: Array<AssetReference_files>;

		/**Tags of the asset */
		tags?: Array<string>;

		/**Variations of the asset */
		AssetVariation_files?: Array<AssetVariation_files>;
	}

	export interface AssetReference_files {

		/**Links to get and download the reference file */
		_link?: string;

		/**Code of the reference file */
		code?: string;

		/**Locale code of the reference file */
		locale?: string;
	}

	export interface AssetVariation_files {

		/**Links to get and download the variation file */
		_link?: string;

		/**Code of the variation */
		code?: string;

		/**Locale code of the variation */
		locale?: string;

		/**Channel code of the variation */
		scope?: string;
	}

	export interface AssetCategory {

		/**Asset category code */
		code: string;

		/**Asset category labels for each locale */
		labels?: string;

		/**Asset category code of the parent's asset category */
		parent?: string;
	}

	export interface AssetCategoryList {
	}

	export interface AssetList {
	}

	export interface AssetReferenceFile {

		/**Links to get and download the reference file */
		_link?: string;

		/**Code of the asset reference file */
		code?: string;

		/**Locale of the asset reference file, equal to `null` if the asset is not localizable */
		locale?: string;
	}

	export interface AssetReferenceFileUploadWarning {
		AssetReferenceFileUploadWarningErrors?: Array<AssetReferenceFileUploadWarningErrors>;

		/**Message explaining the warning */
		message?: string;
	}

	export interface AssetReferenceFileUploadWarningErrors {

		/**Channel for which the variation file generation failed */
		channel?: string;

		/**Locale for which the variation file generation failed */
		locale?: string;

		/**Message explaining why the variation file generation failed */
		message?: string;
	}

	export interface AssetTag {

		/**Asset tag code */
		code: string;
	}

	export interface AssetTagList {
	}

	export interface AssetVariationFile {

		/**Links to get and download the reference file */
		_link?: string;

		/**Code of the asset variation file */
		code?: string;

		/**Locale of the asset variation file, equal to `null` if the asset is not localizable */
		locale?: string;

		/**Channel of the asset variation file */
		scope?: string;
	}

	export interface AssociationType {

		/**Association type code */
		code: string;

		/**Association type labels for each locale */
		labels?: string;
	}

	export interface AssociationTypeList {
	}

	export interface Attribute {

		/**Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image` */
		allowed_extensions?: Array<string>;

		/**To make the attribute locale specfic, specify here for which locales it is specific */
		available_locales?: Array<string>;

		/**Attribute code */
		code: string;

		/**Maximum date allowed when the attribute type is `pim_catalog_date` */
		date_max?: Date;

		/**Minimum date allowed when the attribute type is `pim_catalog_date` */
		date_min?: Date;

		/**Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number` */
		decimals_allowed?: boolean;

		/**Default metric unit when the attribute type is `pim_catalog_metric` */
		default_metric_unit?: string;

		/**Attribute group */
		group: string;

		/**Attribute labels for each locale */
		labels?: string;

		/**Whether the attribute is localizable, i.e. can have one value by locale */
		localizable?: boolean;

		/**Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier` */
		max_characters?: number;

		/**Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image` */
		max_file_size?: string;

		/**Metric family when the attribute type is `pim_catalog_metric` */
		metric_family?: string;

		/**Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number` */
		negative_allowed?: boolean;

		/**Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number` */
		number_max?: string;

		/**Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number` */
		number_min?: string;

		/**Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` */
		reference_data_name?: string;

		/**Whether the attribute is scopable, i.e. can have one value by channel */
		scopable?: boolean;

		/**Order of the attribute in its group */
		sort_order?: number;

		/**Attribute type */
		type: AttributeType;

		/**Whether two values for the attribute cannot be the same */
		unique?: boolean;

		/**Whether the attribute can be used as a filter for the product grid in the PIM user interface */
		useable_as_grid_filter?: boolean;

		/**Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier` */
		validation_regexp?: string;

		/**Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier` */
		validation_rule?: string;

		/**Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea` */
		wysiwyg_enabled?: boolean;
	}

	export enum AttributeType { pim_catalog_identifier = 0, pim_catalog_metric = 1, pim_catalog_number = 2, pim_catalog_reference_data_multi_select = 3, pim_catalog_reference_data_simple_select = 4, pim_catalog_simpleselect = 5, pim_catalog_multiselect = 6, pim_catalog_date = 7, pim_catalog_textarea = 8, pim_catalog_text = 9, pim_catalog_file = 10, pim_catalog_image = 11, pim_catalog_price_collection = 12, pim_catalog_boolean = 13, akeneo_reference_entity = 14, akeneo_reference_entity_collection = 15 }

	export interface AttributeGroup {

		/**Attribute codes that compose the attribute group */
		attributes?: Array<string>;

		/**Attribute group code */
		code: string;

		/**Attribute group labels for each locale */
		labels?: string;

		/**Attribute group order among other attribute groups */
		sort_order?: number;
	}

	export interface AttributeGroupList {
	}

	export interface AttributeList {
	}

	export interface AttributeOption {

		/**Code of attribute related to the attribute option */
		attribute?: string;

		/**Code of option */
		code: string;

		/**Attribute option labels for each locale */
		labels?: string;

		/**Order of attribute option */
		sort_order?: number;
	}

	export interface AttributeOptionList {
	}

	export interface Category {

		/**Category code */
		code: string;

		/**Category labels for each locale */
		labels?: string;

		/**Category code of the parent's category */
		parent?: string;
	}

	export interface CategoryList {
	}

	export interface Channel {

		/**Code of the category tree linked to the channel */
		category_tree: string;

		/**Channel code */
		code: string;

		/**Units to which the given metric attributes should be converted when exporting products */
		conversion_units?: string;

		/**Codes of activated currencies for the channel */
		currencies: Array<string>;

		/**Channel labels for each locale */
		labels?: string;

		/**Codes of activated locales for the channel */
		locales: Array<string>;
	}

	export interface ChannelList {
	}

	export interface Currency {

		/**Currency code */
		code: string;

		/**Whether the currency is enabled */
		enabled?: boolean;
	}

	export interface CurrencyList {
	}

	export interface Error {

		/**HTTP status code */
		code?: number;

		/**Message explaining the error */
		message?: string;
	}

	export interface ErrorByLine {

		/**Resource code, only filled when the resource is not a product */
		code?: string;

		/**Resource identifier, only filled when the resource is a product */
		identifier?: string;

		/**Line number */
		line?: number;

		/**Message explaining the error */
		message?: string;

		/**HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code */
		status_code?: number;
	}

	export interface Family {

		/**Attribute code used as the main picture in the user interface (only since v2.0) */
		attribute_as_image?: string;

		/**Attribute code used as label */
		attribute_as_label: string;

		/**Attributes codes of the family that are required for the completeness calculation for each channel */
		attribute_requirements?: string;

		/**Attributes codes that compose the family */
		attributes?: Array<string>;

		/**Family code */
		code: string;

		/**Family labels for each locale */
		labels?: string;
	}

	export interface FamilyList {
	}

	export interface FamilyVariant {

		/**Family variant code */
		code: string;

		/**Family variant labels for each locale */
		labels?: string;

		/**Attributes distribution according to the enrichment level */
		FamilyVariantVariant_attribute_sets: Array<FamilyVariantVariant_attribute_sets>;
	}

	export interface FamilyVariantVariant_attribute_sets {

		/**Codes of attributes bind to this enrichment level */
		attributes?: Array<string>;

		/**Codes of attributes used as variant axes */
		axes: Array<string>;

		/**Enrichment level */
		level: number;
	}

	export interface FamilyVariantList {
	}

	export interface ItemList {
		_links?: string;
	}

	export interface Locale {

		/**Locale code */
		code: string;

		/**Whether the locale is enabled */
		enabled?: boolean;
	}

	export interface LocaleList {
	}

	export interface MeasureFamily {

		/**Measure family code */
		code: string;

		/**Measure family standard */
		standard?: string;

		/**Family units */
		MeasureFamilyUnits?: Array<MeasureFamilyUnits>;
	}

	export interface MeasureFamilyUnits {

		/**Measure code */
		code?: string;

		/**Mathematic operation to convert the unit into the standard unit */
		convert?: string;

		/**Measure symbol */
		symbol?: string;
	}

	export interface MeasureFamilyList {
	}

	export interface MediaFile {
	}

	export interface MediaFileItemList {
		_links?: string;
	}

	export interface MediaFileList {
	}

	export interface Pagination {
		_links?: string;

		/**Current page number */
		current_page?: number;
	}

	export interface Product {

		/**Several associations related to groups and/or other products, grouped by association types */
		associations?: string;

		/**Codes of the categories in which the product is classified */
		categories?: Array<string>;

		/**Date of creation */
		created?: string;

		/**Whether the product is enable */
		enabled?: boolean;

		/**Family code from which the product inherits its attributes and attributes requirements */
		family?: string;

		/**Codes of the groups to which the product belong */
		groups?: Array<string>;

		/**Product identifier, i.e. the value of the only `pim_catalog_identifier` attribute */
		identifier: string;

		/**More information around the product (only available since the v2.0 in the Enterprise Edition) */
		metadata?: string;

		/**Code of the parent product model when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3. */
		parent?: string;

		/**Date of the last update */
		updated?: string;

		/**Product attributes values, see <a href='/documentation/resources.html#product-values'>Product values</a> section for more details */
		values?: string;
	}

	export interface ProductList {
	}

	export interface ProductModel {

		/**Codes of the categories in which the product model is categorized */
		categories?: Array<string>;

		/**Product model code */
		code: string;

		/**Date of creation */
		created?: string;

		/**Family code  from which the product inherits its attributes and attributes requirements (since the 3.2) */
		family?: string;

		/**Family variant code from which the product model inherits its attributes and variant attributes */
		family_variant: string;

		/**More information around the product model (only available since the v2.3 in the Enterprise Edition) */
		metadata?: string;

		/**Code of the parent product model. This parent can be modified since the 2.3. */
		parent?: string;

		/**Date of the last update */
		updated?: string;

		/**Product model attributes values, see <a href='/documentation/resources.html#product-values'>Product values</a> section for more details */
		values?: string;
	}

	export interface ProductModelList {
	}

	export interface PublishedProduct {

		/**Several associations related to groups and/or other published products, grouped by association types */
		associations?: string;

		/**Codes of the categories in which the published product is classified */
		categories?: Array<string>;

		/**Date of creation */
		created?: string;

		/**Whether the published product is enable */
		enabled?: boolean;

		/**Family code from which the published product inherits its attributes and attributes requirements */
		family?: string;

		/**Codes of the groups to which the published product belong */
		groups?: Array<string>;

		/**Published product identifier, i.e. the value of the only `pim_catalog_identifier` attribute */
		identifier: string;

		/**Date of the last update */
		updated?: string;

		/**Published product attributes values, see <a href='/documentation/resources.html#product-values'>Product values</a> section for more details */
		values?: string;
	}

	export interface PublishedProductList {
	}

	export interface ReferenceEntity {
	}

	export interface ReferenceEntityAttribute {

		/**Extensions allowed when the attribute type is `image` */
		allowed_extensions?: Array<string>;

		/**Attribute code */
		code: string;

		/**Whether decimals are allowed when the attribute type is `number` */
		decimals_allowed?: boolean;

		/**Whether the attribute should be part of the record's completeness calculation */
		is_required_for_completeness?: boolean;

		/**Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text` */
		is_rich_text_editor?: boolean;

		/**Whether the UI should display a text area instead of a simple field when the attribute type is `text` */
		is_textarea?: boolean;

		/**Attribute labels for each locale */
		labels?: string;

		/**Maximum number of characters allowed for the value of the attribute when the attribute type is `text` */
		max_characters?: number;

		/**Max file size in MB when the attribute type is `image` */
		max_file_size?: string;

		/**Maximum value allowed when the attribute type is `number` */
		max_value?: string;

		/**Minimum value allowed when the attribute type is `number` */
		min_value?: string;

		/**Code of the linked reference entity when the attribute type is `reference_entity_single_link` or `reference_entity_multiple_links` */
		reference_entity_code?: string;

		/**Attribute type */
		type: ReferenceEntityAttributeType;

		/**Regexp expression used to validate the attribute value when the attribute type is `text` */
		validation_regexp?: string;

		/**Validation rule type used to validate the attribute value when the attribute type is `text` */
		validation_rule?: ReferenceEntityAttributeValidation_rule;

		/**Whether the attribute is scopable, i.e. can have one value by channel */
		value_per_channel?: boolean;

		/**Whether the attribute is localizable, i.e. can have one value by locale */
		value_per_locale?: boolean;
	}

	export enum ReferenceEntityAttributeType { text = 0, image = 1, number = 2, single_option = 3, multiple_options = 4, reference_entity_single_link = 5, reference_entity_multiple_links = 6 }

	export enum ReferenceEntityAttributeValidation_rule { email = 0, url = 1, regexp = 2, none = 3 }

	export interface ReferenceEntityAttributeOption {

		/**Attribute's option code */
		code: string;

		/**Attribute labels for each locale */
		labels?: string;
	}

	export interface ReferenceEntityItemList {
		_links?: string;
	}

	export interface ReferenceEntityList {
	}

	export interface ReferenceEntityRecord {

		/**Code of the record */
		code: string;

		/**Record attributes values, see <a href='/documentation/resources.html#reference-entity-record-values'>Reference entity record values</a> section for more details */
		values?: string;
	}

	export interface ReferenceEntityRecordItemList {
		_links?: string;
	}

	export interface ReferenceEntityRecordList {
	}

	export interface SearchAfterPagination {
		_links?: string;
	}

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Get authentication token
		 * This endpoint allows you to get an authentication token. No need to be authenticated to use this endpoint.
		 * Post api/oauth/v1/token
		 * @return {string} Return an authentication token
		 */
		Post_token(requestBody: Post_tokenBody, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.post('api/oauth/v1/token', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.text());
		}

		/**
		 * Get list of all endpoints
		 * This endpoint allows you to get the list of all the available endpoints. No need to be authenticated to use this endpoint.
		 * Get api/rest/v1
		 * @return {string} Return the list of all available endpoints
		 */
		Get_endpoints(headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get list of asset categories
		 * This endpoint allows you to get a list of asset categories. Asset categories are paginated and sorted by `root/left`.
		 * Get api/rest/v1/asset-categories
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Returns asset categories paginated
		 */
		Get_asset_categories(page: number, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/asset-categories?page=' + page + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new asset category
		 * This endpoint allows you to create a new asset category.
		 * Post api/rest/v1/asset-categories
		 * @return {void} 
		 */
		Post_asset_categories(requestBody: Post_asset_categoriesBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/asset-categories', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get an asset category
		 * This endpoint allows you to get the information about a given asset category.
		 * Get api/rest/v1/asset-categories/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_asset_categories__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/asset-categories/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get list of asset tags
		 * This endpoint allows you to get a list of asset tags. Asset tags are paginated.
		 * Get api/rest/v1/asset-tags
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Returns asset tags paginated
		 */
		Get_asset_tags(page: number, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/asset-tags?page=' + page + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get an asset tag
		 * This endpoint allows you to get the information about a given asset tag.
		 * Get api/rest/v1/asset-tags/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_asset_tags__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/asset-tags/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get list of assets
		 * This endpoint allows you to get a list of assets. Assets are paginated.
		 * Get api/rest/v1/assets
		 * @param {string} pagination_type Pagination method type, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {string} search_after Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Returns assets paginated
		 */
		Get_assets(pagination_type: string, page: number, search_after: string, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/assets?pagination_type=' + (pagination_type == null ? '' : encodeURIComponent(pagination_type)) + '&page=' + page + '&search_after=' + (search_after == null ? '' : encodeURIComponent(search_after)) + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new asset
		 * This endpoint allows you to create a new asset.
		 * Post api/rest/v1/assets
		 * @return {void} 
		 */
		Post_assets(requestBody: Post_assetsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/assets', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a reference file
		 * This endpoint allows you to get the information about a reference file of a given asset.
		 * Get api/rest/v1/assets/{asset_code}/reference-files/{locale_code}
		 * @param {string} asset_code Code of the asset
		 * @param {string} locale_code Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable
		 * @return {string} OK
		 */
		Get_reference_files__locale_code_(asset_code: string, locale_code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/assets/' + (asset_code == null ? '' : encodeURIComponent(asset_code)) + '/reference-files/' + (locale_code == null ? '' : encodeURIComponent(locale_code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Upload a new reference file
		 * This endpoint allows you to upload a new reference file for a given asset and locale. It will also automatically generate all the variation files corresponding to this reference file.
		 * Post api/rest/v1/assets/{asset_code}/reference-files/{locale_code}
		 * @param {string} asset_code Code of the asset
		 * @param {string} locale_code Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable
		 * @return {void} 
		 */
		Post_reference_files__locale_code_(asset_code: string, locale_code: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/assets/' + (asset_code == null ? '' : encodeURIComponent(asset_code)) + '/reference-files/' + (locale_code == null ? '' : encodeURIComponent(locale_code)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download a reference file
		 * This endpoint allows you to download a given reference file.
		 * Get api/rest/v1/assets/{asset_code}/reference-files/{locale_code}/download
		 * @param {string} asset_code Code of the asset
		 * @param {string} locale_code Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable
		 * @return {void} OK
		 */
		Get_reference_files__channel_code__locale_code__download(asset_code: string, locale_code: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('api/rest/v1/assets/' + (asset_code == null ? '' : encodeURIComponent(asset_code)) + '/reference-files/' + (locale_code == null ? '' : encodeURIComponent(locale_code)) + '/download', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a variation file
		 * This endpoint allows you to get the information about a variation file of a given asset.
		 * Get api/rest/v1/assets/{asset_code}/variation-files/{channel_code}/{locale_code}
		 * @param {string} asset_code Code of the asset
		 * @param {string} channel_code Code of the channel
		 * @param {string} locale_code Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable
		 * @return {string} OK
		 */
		Get_variation_files__channel_code__locale_code(asset_code: string, channel_code: string, locale_code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/assets/' + (asset_code == null ? '' : encodeURIComponent(asset_code)) + '/variation-files/' + (channel_code == null ? '' : encodeURIComponent(channel_code)) + '/' + (locale_code == null ? '' : encodeURIComponent(locale_code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Upload a new variation file
		 * This endpoint allows you to upload a new variation file for a given asset, channel and locale.
		 * Post api/rest/v1/assets/{asset_code}/variation-files/{channel_code}/{locale_code}
		 * @param {string} asset_code Code of the asset
		 * @param {string} channel_code Code of the channel
		 * @param {string} locale_code Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable
		 * @return {void} 
		 */
		Post_variation_files__channel_code__locale_code_(asset_code: string, channel_code: string, locale_code: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/assets/' + (asset_code == null ? '' : encodeURIComponent(asset_code)) + '/variation-files/' + (channel_code == null ? '' : encodeURIComponent(channel_code)) + '/' + (locale_code == null ? '' : encodeURIComponent(locale_code)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download a variation file
		 * This endpoint allows you to download a given variation file.
		 * Get api/rest/v1/assets/{asset_code}/variation-files/{channel_code}/{locale_code}/download
		 * @param {string} asset_code Code of the asset
		 * @param {string} channel_code Code of the channel
		 * @param {string} locale_code Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable
		 * @return {void} OK
		 */
		Get_variation_files__channel_code__locale_code__download(asset_code: string, channel_code: string, locale_code: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('api/rest/v1/assets/' + (asset_code == null ? '' : encodeURIComponent(asset_code)) + '/variation-files/' + (channel_code == null ? '' : encodeURIComponent(channel_code)) + '/' + (locale_code == null ? '' : encodeURIComponent(locale_code)) + '/download', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get an asset
		 * This endpoint allows you to get the information about a given asset.
		 * Get api/rest/v1/assets/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_assets__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/assets/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get a list of association types
		 * This endpoint allows you to get a list of association types. Association types are paginated and sorted by code.
		 * Get api/rest/v1/association-types
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return association types paginated
		 */
		Association_types_get_list(page: number, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/association-types?page=' + page + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new association type
		 * This endpoint allows you to create a new association type.
		 * Post api/rest/v1/association-types
		 * @return {void} 
		 */
		Association_types_post(requestBody: Association_types_postBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/association-types', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get an association type
		 * This endpoint allows you to get the information about a given association type.
		 * Get api/rest/v1/association-types/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Association_types_get(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/association-types/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get list of attribute groups
		 * This endpoint allows you to get a list of attribute groups. Attribute groups are paginated and sorted by code.
		 * Get api/rest/v1/attribute-groups
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return attribute groups paginated
		 */
		Attribute_groups_get_list(page: number, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/attribute-groups?page=' + page + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new attribute group
		 * This endpoint allows you to create a new attribute group.
		 * Post api/rest/v1/attribute-groups
		 * @return {void} 
		 */
		Attribute_groups_post(requestBody: Attribute_groups_postBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/attribute-groups', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get an attribute group
		 * This endpoint allows you to get the information about a given attribute group.
		 * Get api/rest/v1/attribute-groups/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Attribute_groups_get(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/attribute-groups/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get list of attributes
		 * This endpoint allows you to get a list of attributes. Attributes are paginated and sorted by code.
		 * Get api/rest/v1/attributes
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return attributes paginated
		 */
		Get_attributes(page: number, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/attributes?page=' + page + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new attribute
		 * This endpoint allows you to create a new attribute.
		 * Post api/rest/v1/attributes
		 * @return {void} 
		 */
		Post_attributes(requestBody: Post_attributesBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/attributes', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get list of attribute options
		 * This endpoint allows you to get a list of attribute options. Attribute options are paginated and sorted by code.
		 * Get api/rest/v1/attributes/{attribute_code}/options
		 * @param {string} attribute_code Code of the attribute
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return attribute options paginated
		 */
		Get_attributes__attribute_code__options(attribute_code: string, page: number, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/attributes/' + (attribute_code == null ? '' : encodeURIComponent(attribute_code)) + '/options&page=' + page + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new attribute option
		 * This endpoint allows you to create a new attribute option.
		 * Post api/rest/v1/attributes/{attribute_code}/options
		 * @param {string} attribute_code Code of the attribute
		 * @return {void} 
		 */
		Post_attributes__attribute_code__options(attribute_code: string, requestBody: Post_attributes__attribute_code__optionsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/attributes/' + (attribute_code == null ? '' : encodeURIComponent(attribute_code)) + '/options', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get an attribute option
		 * This endpoint allows you to get the information about a given attribute option.
		 * Get api/rest/v1/attributes/{attribute_code}/options/{code}
		 * @param {string} attribute_code Code of the attribute
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_attributes__attribute_code__options__code_(attribute_code: string, code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/attributes/' + (attribute_code == null ? '' : encodeURIComponent(attribute_code)) + '/options/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get an attribute
		 * This endpoint allows you to get the information about a given attribute.
		 * Get api/rest/v1/attributes/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_attributes__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/attributes/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get list of categories
		 * This endpoint allows you to get a list of categories. Categories are paginated and sorted by `root/left`.
		 * Get api/rest/v1/categories
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return categories paginated
		 */
		Get_categories(page: number, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/categories?page=' + page + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new category
		 * This endpoint allows you to create a new category.
		 * Post api/rest/v1/categories
		 * @return {void} 
		 */
		Post_categories(requestBody: Post_categoriesBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/categories', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a category
		 * This endpoint allows you to get the information about a given category.
		 * Get api/rest/v1/categories/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_categories__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/categories/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get a list of channels
		 * This endpoint allows you to get a list of channels. Channels are paginated and sorted by code.
		 * Get api/rest/v1/channels
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return channels paginated
		 */
		Get_channels(page: number, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/channels?page=' + page + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new channel
		 * This endpoint allows you to create a new channel.
		 * Post api/rest/v1/channels
		 * @return {void} 
		 */
		Channels_post(requestBody: Channels_postBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/channels', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a channel
		 * This endpoint allows you to get the information about a given channel.
		 * Get api/rest/v1/channels/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_channels__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/channels/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get a list of currencies
		 * This endpoint allows you to get a list of currencies. Currencies are paginated and sorted by code.
		 * Get api/rest/v1/currencies
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return currencies paginated
		 */
		Currencies_get_list(page: number, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/currencies?page=' + page + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get a currency
		 * This endpoint allows you to get the information about a given currency.
		 * Get api/rest/v1/currencies/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Currencies_get(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/currencies/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get list of families
		 * This endpoint allows you to get a list of families. Families are paginated and sorted by code.
		 * Get api/rest/v1/families
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return families paginated
		 */
		Get_families(page: number, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/families?page=' + page + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new family
		 * This endpoint allows you to create a new family.
		 * Post api/rest/v1/families
		 * @return {void} 
		 */
		Post_families(requestBody: Post_familiesBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/families', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a family
		 * This endpoint allows you to get the information about a given family.
		 * Get api/rest/v1/families/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_families__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/families/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get list of family variants
		 * This endpoint allows you to get a list of family variants. Family variants are paginated and sorted by code.
		 * Get api/rest/v1/families/{family_code}/variants
		 * @param {string} family_code Code of the family
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return family variants paginated
		 */
		Get_families__family_code__variants(family_code: string, page: number, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/families/' + (family_code == null ? '' : encodeURIComponent(family_code)) + '/variants&page=' + page + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new family variant
		 * This endpoint allows you to create a family variant.
		 * Post api/rest/v1/families/{family_code}/variants
		 * @param {string} family_code Code of the family
		 * @return {void} 
		 */
		Post_families__family_code__variants(family_code: string, requestBody: Post_families__family_code__variantsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/families/' + (family_code == null ? '' : encodeURIComponent(family_code)) + '/variants', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a family variant
		 * This endpoint allows you to get the information about a given family variant.
		 * Get api/rest/v1/families/{family_code}/variants/{code}
		 * @param {string} family_code Code of the family
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_families__family_code__variants__code__(family_code: string, code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/families/' + (family_code == null ? '' : encodeURIComponent(family_code)) + '/variants/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get a list of locales
		 * This endpoint allows you to get a list of locales. Locales are paginated and sorted by code.
		 * Get api/rest/v1/locales
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return locales paginated
		 */
		Get_locales(page: number, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/locales?page=' + page + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get a locale
		 * This endpoint allows you to get the information about a given locale.
		 * Get api/rest/v1/locales/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_locales__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/locales/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get list of measure familiy
		 * This endpoint allows you to get a list of measure families. Measure families are paginated and sorted by code.
		 * Get api/rest/v1/measure-families
		 * @return {string} Return measure families paginated
		 */
		Measure_families_get_list(headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/measure-families', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get a measure family
		 * This endpoint allows you to get the information about a given measure family.
		 * Get api/rest/v1/measure-families/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Measure_families_get(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/measure-families/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get a list of product media files
		 * This endpoint allows you to get a list of media files that are used as attribute values in products or product models.
		 * Get api/rest/v1/media-files
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return media files paginated
		 */
		Get_media_files(page: number, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/media-files?page=' + page + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new product media file
		 * This endpoint allows you to create a new media file and associate it to an attribute value of a given product or product model.
		 * Post api/rest/v1/media-files
		 * @return {void} 
		 */
		Post_media_files(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/media-files', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a product media file
		 * This endpoint allows you to get the information about a given media file that is used as an attribute value of a product or a product model.
		 * Get api/rest/v1/media-files/{code}
		 * @param {string} code Code of the resource
		 * @return {void} OK
		 */
		Get_media_files__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('api/rest/v1/media-files/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download a product media file
		 * This endpoint allows you to download a given media file that is used as an attribute value of a product or a product model.
		 * Get api/rest/v1/media-files/{code}/download
		 * @param {string} code Code of the resource
		 * @return {void} OK
		 */
		Get_media_files__code__download(code: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('api/rest/v1/media-files/' + (code == null ? '' : encodeURIComponent(code)) + '/download', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of product models
		 * This endpoint allows you to get a list of product models. Product models are paginated. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the set of products you request.
		 * Get api/rest/v1/product-models
		 * @param {string} search Filter product models, for more details see the <a href="/documentation/filter.html">Filters</a> section
		 * @param {string} scope Filter product values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
		 * @param {string} locales Filter product values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
		 * @param {string} attributes Filter product values to only return those concerning the given attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
		 * @param {string} pagination_type Pagination method type, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {string} search_after Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return product models paginated
		 */
		Get_product_models(search: string, scope: string, locales: string, attributes: string, pagination_type: string, page: number, search_after: string, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/product-models?search=' + (search == null ? '' : encodeURIComponent(search)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&locales=' + (locales == null ? '' : encodeURIComponent(locales)) + '&attributes=' + (attributes == null ? '' : encodeURIComponent(attributes)) + '&pagination_type=' + (pagination_type == null ? '' : encodeURIComponent(pagination_type)) + '&page=' + page + '&search_after=' + (search_after == null ? '' : encodeURIComponent(search_after)) + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new product model
		 * This endpoint allows you to create a new product model. In the Enterprise Edition, since the v2.3, permissions based on your user groups are applied to the product model you try to create.
		 * Post api/rest/v1/product-models
		 * @return {void} 
		 */
		Post_product_models(requestBody: Post_product_modelsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/product-models', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a product model
		 * This endpoint allows you to get the information about a given product model. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product model you request.
		 * Get api/rest/v1/product-models/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_product_models__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/product-models/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get a draft
		 * This endpoint allows you to get the information about a given product model draft.
		 * Get api/rest/v1/product-models/{code}/draft
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_product_model_draft__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/product-models/' + (code == null ? '' : encodeURIComponent(code)) + '/draft', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Submit a draft for approval
		 * This endpoint allows you to submit a product model draft for approval.
		 * Post api/rest/v1/product-models/{code}/proposal
		 * @param {string} code Code of the resource
		 * @return {void} 
		 */
		Post_product_model_proposal(code: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/product-models/' + (code == null ? '' : encodeURIComponent(code)) + '/proposal', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of products
		 * This endpoint allows you to get a list of products. Products are paginated and they can be filtered. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the set of products you request.
		 * Get api/rest/v1/products
		 * @param {string} search Filter products, for more details see the <a href="/documentation/filter.html">Filters</a> section
		 * @param {string} scope Filter product values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
		 * @param {string} locales Filter product values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
		 * @param {string} attributes Filter product values to only return those concerning the given attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
		 * @param {string} pagination_type Pagination method type, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {string} search_after Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return products paginated
		 */
		Get_products(search: string, scope: string, locales: string, attributes: string, pagination_type: string, page: number, search_after: string, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/products?search=' + (search == null ? '' : encodeURIComponent(search)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&locales=' + (locales == null ? '' : encodeURIComponent(locales)) + '&attributes=' + (attributes == null ? '' : encodeURIComponent(attributes)) + '&pagination_type=' + (pagination_type == null ? '' : encodeURIComponent(pagination_type)) + '&page=' + page + '&search_after=' + (search_after == null ? '' : encodeURIComponent(search_after)) + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new product
		 * This endpoint allows you to create a new product. In the Enterprise Edition, since the v2.0, permissions based on your user groups are applied to the product you try to create.
		 * Post api/rest/v1/products
		 * @return {void} 
		 */
		Post_products(requestBody: Post_productsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/products', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a product
		 * This endpoint allows you to delete a given product. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the product you try to delete.
		 * Delete api/rest/v1/products/{code}
		 * @param {string} code Code of the resource
		 * @return {void} 
		 */
		Delete_products__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('api/rest/v1/products/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a product
		 * This endpoint allows you to get the information about a given product. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product you request.
		 * Get api/rest/v1/products/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_products__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/products/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get a draft
		 * This endpoint allows you to get the information about a given draft.
		 * Get api/rest/v1/products/{code}/draft
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_draft__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/products/' + (code == null ? '' : encodeURIComponent(code)) + '/draft', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Submit a draft for approval
		 * This endpoint allows you to submit a draft for approval.
		 * Post api/rest/v1/products/{code}/proposal
		 * @param {string} code Code of the resource
		 * @return {void} 
		 */
		Post_proposal(code: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/products/' + (code == null ? '' : encodeURIComponent(code)) + '/proposal', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of published products
		 * This endpoint allows you to get a list of published products. Published products are paginated and they can be filtered.
		 * Get api/rest/v1/published-products
		 * @param {string} search Filter published products, for more details see the <a href="/documentation/filter.html">Filters</a> section
		 * @param {string} scope Filter published product values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on published product values</a> section
		 * @param {string} locales Filter published product values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on published product values</a> section
		 * @param {string} attributes Filter published product values to only return those concerning the given attributes, for more details see the <a href="/documentation/filter.html#filter-product-values">Filter on product values</a> section
		 * @param {string} pagination_type Pagination method type, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {number} page Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html#pagination">Pagination</a> section
		 * @param {string} search_after Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {number} limit Number of results by page, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @param {boolean} with_count Return the count of products in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way
		 * @return {string} Return published products paginated
		 */
		Get_published_products(search: string, scope: string, locales: string, attributes: string, pagination_type: string, page: number, search_after: string, limit: number, with_count: boolean, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/published-products?search=' + (search == null ? '' : encodeURIComponent(search)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&locales=' + (locales == null ? '' : encodeURIComponent(locales)) + '&attributes=' + (attributes == null ? '' : encodeURIComponent(attributes)) + '&pagination_type=' + (pagination_type == null ? '' : encodeURIComponent(pagination_type)) + '&page=' + page + '&search_after=' + (search_after == null ? '' : encodeURIComponent(search_after)) + '&limit=' + limit + '&with_count=' + with_count, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get a published product
		 * This endpoint allows you to get the information about a given published product.
		 * Get api/rest/v1/published-products/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_published_products__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/published-products/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get list of reference entities
		 * This endpoint allows you to get a list of reference entities. Reference entities are paginated.
		 * Get api/rest/v1/reference-entities
		 * @param {string} search_after Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @return {string} Return reference entities paginated
		 */
		Get_reference_entities(search_after: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/reference-entities?search_after=' + (search_after == null ? '' : encodeURIComponent(search_after)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Create a new media file for a reference entity or a record
		 * This endpoint allows you to create a new media file and associate it to the image of a reference entity, or to the main image or to an attribute value of a record.
		 * Post api/rest/v1/reference-entities-media-files
		 * @return {void} 
		 */
		Post_reference_entity_media_files(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('api/rest/v1/reference-entities-media-files', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download the media file associated to a reference entity or a record
		 * This endpoint allows you to download a given media file that is associated with a reference entity or a record.
		 * Get api/rest/v1/reference-entities-media-files/{code}
		 * @param {string} code Code of the resource
		 * @return {void} OK
		 */
		Get_reference_entity_media_files__code(code: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('api/rest/v1/reference-entities-media-files/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a reference entity
		 * This endpoint allows you to get the information about a given reference entity.
		 * Get api/rest/v1/reference-entities/{code}
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_reference_entities__code_(code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/reference-entities/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get the list of attributes of a given reference entity
		 * This endpoint allows you to get the list of attributes of a given reference entity.
		 * Get api/rest/v1/reference-entities/{reference_entity_code}/attributes
		 * @param {string} reference_entity_code Code of the reference entity
		 * @return {Array<string>} Return the attributes of the given reference entity
		 */
		Get_reference_entities__code__attributes(reference_entity_code: string, headersHandler?: () => {[header: string]: string}): Promise<Array<string>> {
			return this.http.get('api/rest/v1/reference-entities/' + (reference_entity_code == null ? '' : encodeURIComponent(reference_entity_code)) + '/attributes', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Get a list of attribute options of a given attribute for a given reference entity
		 * This endpoint allows you to get a list of attribute options for a given reference entity.
		 * Get api/rest/v1/reference-entities/{reference_entity_code}/attributes/{attribute_code}/options
		 * @param {string} reference_entity_code Code of the reference entity
		 * @param {string} attribute_code Code of the attribute
		 * @return {Array<string>} Return the options of the given attributes of the given reference entity
		 */
		Get_reference_entity_attributes__attribute_code__options(reference_entity_code: string, attribute_code: string, headersHandler?: () => {[header: string]: string}): Promise<Array<string>> {
			return this.http.get('api/rest/v1/reference-entities/' + (reference_entity_code == null ? '' : encodeURIComponent(reference_entity_code)) + '/attributes/' + (attribute_code == null ? '' : encodeURIComponent(attribute_code)) + '/options', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Get an attribute option for a given attribute of a given reference entity
		 * This endpoint allows you to get the information about a given attribute option.
		 * Get api/rest/v1/reference-entities/{reference_entity_code}/attributes/{attribute_code}/options/{code}
		 * @param {string} reference_entity_code Code of the reference entity
		 * @param {string} attribute_code Code of the attribute
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_reference_entity_attributes__attribute_code__options__code_(reference_entity_code: string, attribute_code: string, code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/reference-entities/' + (reference_entity_code == null ? '' : encodeURIComponent(reference_entity_code)) + '/attributes/' + (attribute_code == null ? '' : encodeURIComponent(attribute_code)) + '/options/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get an attribute of a given reference entity
		 * This endpoint allows you to get the information about a given attribute for a given reference entity.
		 * Get api/rest/v1/reference-entities/{reference_entity_code}/attributes/{code}
		 * @param {string} reference_entity_code Code of the reference entity
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_reference_entity_attributes__code_(reference_entity_code: string, code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/reference-entities/' + (reference_entity_code == null ? '' : encodeURIComponent(reference_entity_code)) + '/attributes/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get the list of the records of a reference entity
		 * This endpoint allows you to get a list of records of a given reference entity. Records are paginated and can be filtered.
		 * Get api/rest/v1/reference-entities/{reference_entity_code}/records
		 * @param {string} search Filter records of the reference entity, for more details see the <a href="/documentation/filter.html#filter-reference-entity-records">Filters</a> section
		 * @param {string} channel Filter attribute values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the <a href="/documentation/filter.html#filter-attribute-values-by-channel">Filter attribute values by channel</a> section
		 * @param {string} locales Filter attribute values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the <a href=/documentation/filter.html#filter-attribute-values-by-locale">Filter attribute values by locale</a> section
		 * @param {string} reference_entity_code Code of the reference entity
		 * @param {string} search_after Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href="/documentation/pagination.html">Pagination</a> section
		 * @return {string} Return the records of the given reference entity paginated
		 */
		Get_reference_entity_records(search: string, channel: string, locales: string, reference_entity_code: string, search_after: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/reference-entities/' + (reference_entity_code == null ? '' : encodeURIComponent(reference_entity_code)) + '/records?search=' + (search == null ? '' : encodeURIComponent(search)) + '&channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&locales=' + (locales == null ? '' : encodeURIComponent(locales)) + '&search_after=' + (search_after == null ? '' : encodeURIComponent(search_after)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get a record of a given reference entity
		 * This endpoint allows you to get the information about a given record for a given reference entity.
		 * Get api/rest/v1/reference-entities/{reference_entity_code}/records/{code}
		 * @param {string} reference_entity_code Code of the reference entity
		 * @param {string} code Code of the resource
		 * @return {string} OK
		 */
		Get_reference_entity_records__code_(reference_entity_code: string, code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return this.http.get('api/rest/v1/reference-entities/' + (reference_entity_code == null ? '' : encodeURIComponent(reference_entity_code)) + '/records/' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}
	}

	export interface Post_tokenBody {

		/**Always equal to "password" */
		grant_type: string;

		/**Your PIM password */
		password: string;

		/**Your PIM username */
		username: string;
	}

	export interface Post_asset_categoriesBody {

		/**Asset category code */
		code: string;

		/**Asset category labels for each locale */
		labels?: string;

		/**Asset category code of the parent's asset category */
		parent?: string;
	}

	export interface Post_assetsBody {

		/**Codes of the asset categories in which the asset is classified */
		categories?: Array<string>;

		/**Asset code */
		code: string;

		/**Description of the asset */
		description?: string;

		/**Date on which the asset expire */
		end_of_use?: string;

		/**Whether the asset is localized or not, meaning if you want to have different reference files for each of your locale */
		localizable?: boolean;

		/**Reference files of the asset */
		Post_assetsBodyReference_files?: Array<Post_assetsBodyReference_files>;

		/**Tags of the asset */
		tags?: Array<string>;

		/**Variations of the asset */
		Post_assetsBodyVariation_files?: Array<Post_assetsBodyVariation_files>;
	}

	export interface Post_assetsBodyReference_files {

		/**Links to get and download the reference file */
		_link?: string;

		/**Code of the reference file */
		code?: string;

		/**Locale code of the reference file */
		locale?: string;
	}

	export interface Post_assetsBodyVariation_files {

		/**Links to get and download the variation file */
		_link?: string;

		/**Code of the variation */
		code?: string;

		/**Locale code of the variation */
		locale?: string;

		/**Channel code of the variation */
		scope?: string;
	}

	export interface Association_types_postBody {

		/**Association type code */
		code: string;

		/**Association type labels for each locale */
		labels?: string;
	}

	export interface Attribute_groups_postBody {

		/**Attribute codes that compose the attribute group */
		attributes?: Array<string>;

		/**Attribute group code */
		code: string;

		/**Attribute group labels for each locale */
		labels?: string;

		/**Attribute group order among other attribute groups */
		sort_order?: number;
	}

	export interface Post_attributesBody {

		/**Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image` */
		allowed_extensions?: Array<string>;

		/**To make the attribute locale specfic, specify here for which locales it is specific */
		available_locales?: Array<string>;

		/**Attribute code */
		code: string;

		/**Maximum date allowed when the attribute type is `pim_catalog_date` */
		date_max?: Date;

		/**Minimum date allowed when the attribute type is `pim_catalog_date` */
		date_min?: Date;

		/**Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number` */
		decimals_allowed?: boolean;

		/**Default metric unit when the attribute type is `pim_catalog_metric` */
		default_metric_unit?: string;

		/**Attribute group */
		group: string;

		/**Attribute labels for each locale */
		labels?: string;

		/**Whether the attribute is localizable, i.e. can have one value by locale */
		localizable?: boolean;

		/**Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier` */
		max_characters?: number;

		/**Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image` */
		max_file_size?: string;

		/**Metric family when the attribute type is `pim_catalog_metric` */
		metric_family?: string;

		/**Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number` */
		negative_allowed?: boolean;

		/**Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number` */
		number_max?: string;

		/**Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number` */
		number_min?: string;

		/**Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` */
		reference_data_name?: string;

		/**Whether the attribute is scopable, i.e. can have one value by channel */
		scopable?: boolean;

		/**Order of the attribute in its group */
		sort_order?: number;

		/**Attribute type */
		type: Post_attributesBodyType;

		/**Whether two values for the attribute cannot be the same */
		unique?: boolean;

		/**Whether the attribute can be used as a filter for the product grid in the PIM user interface */
		useable_as_grid_filter?: boolean;

		/**Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier` */
		validation_regexp?: string;

		/**Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier` */
		validation_rule?: string;

		/**Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea` */
		wysiwyg_enabled?: boolean;
	}

	export enum Post_attributesBodyType { pim_catalog_identifier = 0, pim_catalog_metric = 1, pim_catalog_number = 2, pim_catalog_reference_data_multi_select = 3, pim_catalog_reference_data_simple_select = 4, pim_catalog_simpleselect = 5, pim_catalog_multiselect = 6, pim_catalog_date = 7, pim_catalog_textarea = 8, pim_catalog_text = 9, pim_catalog_file = 10, pim_catalog_image = 11, pim_catalog_price_collection = 12, pim_catalog_boolean = 13, akeneo_reference_entity = 14, akeneo_reference_entity_collection = 15 }

	export interface Post_attributes__attribute_code__optionsBody {

		/**Code of attribute related to the attribute option */
		attribute?: string;

		/**Code of option */
		code: string;

		/**Attribute option labels for each locale */
		labels?: string;

		/**Order of attribute option */
		sort_order?: number;
	}

	export interface Post_categoriesBody {

		/**Category code */
		code: string;

		/**Category labels for each locale */
		labels?: string;

		/**Category code of the parent's category */
		parent?: string;
	}

	export interface Channels_postBody {

		/**Code of the category tree linked to the channel */
		category_tree: string;

		/**Channel code */
		code: string;

		/**Units to which the given metric attributes should be converted when exporting products */
		conversion_units?: string;

		/**Codes of activated currencies for the channel */
		currencies: Array<string>;

		/**Channel labels for each locale */
		labels?: string;

		/**Codes of activated locales for the channel */
		locales: Array<string>;
	}

	export interface Post_familiesBody {

		/**Attribute code used as the main picture in the user interface (only since v2.0) */
		attribute_as_image?: string;

		/**Attribute code used as label */
		attribute_as_label: string;

		/**Attributes codes of the family that are required for the completeness calculation for each channel */
		attribute_requirements?: string;

		/**Attributes codes that compose the family */
		attributes?: Array<string>;

		/**Family code */
		code: string;

		/**Family labels for each locale */
		labels?: string;
	}

	export interface Post_families__family_code__variantsBody {

		/**Family variant code */
		code: string;

		/**Family variant labels for each locale */
		labels?: string;

		/**Attributes distribution according to the enrichment level */
		Post_families__family_code__variantsBodyVariant_attribute_sets: Array<Post_families__family_code__variantsBodyVariant_attribute_sets>;
	}

	export interface Post_families__family_code__variantsBodyVariant_attribute_sets {

		/**Codes of attributes bind to this enrichment level */
		attributes?: Array<string>;

		/**Codes of attributes used as variant axes */
		axes: Array<string>;

		/**Enrichment level */
		level: number;
	}

	export interface Post_product_modelsBody {

		/**Codes of the categories in which the product model is categorized */
		categories?: Array<string>;

		/**Product model code */
		code: string;

		/**Date of creation */
		created?: string;

		/**Family code  from which the product inherits its attributes and attributes requirements (since the 3.2) */
		family?: string;

		/**Family variant code from which the product model inherits its attributes and variant attributes */
		family_variant: string;

		/**More information around the product model (only available since the v2.3 in the Enterprise Edition) */
		metadata?: string;

		/**Code of the parent product model. This parent can be modified since the 2.3. */
		parent?: string;

		/**Date of the last update */
		updated?: string;

		/**Product model attributes values, see <a href='/documentation/resources.html#product-values'>Product values</a> section for more details */
		values?: string;
	}

	export interface Post_productsBody {

		/**Several associations related to groups and/or other products, grouped by association types */
		associations?: string;

		/**Codes of the categories in which the product is classified */
		categories?: Array<string>;

		/**Date of creation */
		created?: string;

		/**Whether the product is enable */
		enabled?: boolean;

		/**Family code from which the product inherits its attributes and attributes requirements */
		family?: string;

		/**Codes of the groups to which the product belong */
		groups?: Array<string>;

		/**Product identifier, i.e. the value of the only `pim_catalog_identifier` attribute */
		identifier: string;

		/**More information around the product (only available since the v2.0 in the Enterprise Edition) */
		metadata?: string;

		/**Code of the parent product model when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3. */
		parent?: string;

		/**Date of the last update */
		updated?: string;

		/**Product attributes values, see <a href='/documentation/resources.html#product-values'>Product values</a> section for more details */
		values?: string;
	}

}

