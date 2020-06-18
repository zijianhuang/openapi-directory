///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface A2CDateTime {
		additional_fields?: string;
		custom_fields?: string;
		format?: string;
		value?: string;
	}

	export interface BaseCustomer {
		additional_fields?: string;
		custom_fields?: string;
		email?: string;
		first_name?: string;
		id?: string;
		last_name?: string;
	}

	export interface Basket {
		additional_fields?: string;
		basket_products?: Array<Basket_Item>;
		basket_url?: string;
		created_at?: A2CDateTime;
		currency?: Currency;
		custom_fields?: string;
		customer?: BaseCustomer;
		id?: string;
		modified_at?: A2CDateTime;
	}

	export interface Basket_Item {
		additional_fields?: string;
		custom_fields?: string;
		id?: string;
		name?: string;
		options?: Array<Basket_Item_Option>;
		parent_id?: string;
		price?: number;
		product_id?: string;
		quantity?: number;
		sku?: string;
		tax?: number;
		variant_id?: string;
		weight?: number;
		weight_unit?: string;
	}

	export interface Basket_Item_Option {
		additional_fields?: string;
		custom_fields?: string;
		id?: string;
		name?: string;
		used_in_combination?: boolean;
		value?: string;
		value_id?: string;
	}

	export interface Basket_LiveShippingService {
		additional_fields?: string;
		callback?: string;
		callback_err_cnt?: number;
		custom_fields?: string;
		enabled_on_store?: boolean;
		id?: string;
		name?: string;
	}

	export interface Brand {
		active?: boolean;
		additional_fields?: string;
		created_time?: string;
		custom_fields?: string;
		full_description?: string;
		id?: string;
		meta_description?: string;
		meta_keywords?: string;
		meta_title?: string;
		modified_time?: string;
		name?: string;
		short_description?: string;
		stores_ids?: Array<string>;
		url?: string;
	}

	export interface Carrier {
		active?: boolean;
		additional_fields?: string;
		custom_fields?: string;
		id?: string;
		name?: string;
		shipping_methods?: Array<Order_ShippingMethod>;
	}

	export interface Cart {
		additional_fields?: string;
		custom_fields?: string;
		db_prefix?: string;
		name?: string;
		shipping_zones?: Array<Cart_ShippingZone>;
		stores_info?: Array<Cart_StoreInfo>;
		url?: string;
		version?: string;
		warehouses?: Array<Cart_Warehouse>;
	}

	export interface CartConfigUpdate {

		/**This parameter sets the list of params to the shopping cart. */
		custom_fields?: string;

		/**This parameter is deprecated for this method. Please, use this parameter in method account.config.update */
		db_tables_prefix?: string;

		/**Store Id */
		store_id?: string;
	}

	export interface CartCouponAdd {

		/**Defines the discount amount value. */
		action_amount: number;

		/**Defines where discount should be applied */
		action_apply_to: CartCouponAddAction_apply_to;

		/**Defines entity for action condition. */
		action_condition_entity?: string;

		/**Defines entity attribute code for action condition. */
		action_condition_key?: string;

		/**Defines condition operator. */
		action_condition_operator?: string;

		/**Defines condition attribute value/s. Can be comma separated string. */
		action_condition_value?: string;

		/**Specify how discount should be applied. If scope=matching_items, then discount will be applied to each of the items that match action conditions. Scope order means that discount will be applied once. */
		action_scope: CartCouponAddAction_scope;

		/**Coupon discount type */
		action_type: CartCouponAddAction_type;

		/**Coupon code */
		code: string;

		/**Entity codes */
		codes?: Array<string>;

		/**Defines when discount code will be expired. */
		date_end?: string;

		/**Defines when discount code will be available. */
		date_start?: string;

		/**Coupon name */
		name?: string;

		/**Store Id */
		store_id?: string;

		/**Usage limit for coupon. */
		usage_limit?: number;

		/**Usage limit per customer. */
		usage_limit_per_customer?: number;
	}

	export enum CartCouponAddAction_apply_to { order_total = 0, item_price = 1, shipping = 2 }

	export enum CartCouponAddAction_scope { order = 0, matching_items = 1 }

	export enum CartCouponAddAction_type { percent = 0, fixed = 1 }

	export interface Cart_ShippingZone {
		additional_fields?: string;
		code?: string;
		country?: string;
		country_iso2_codes?: Array<string>;
		custom_fields?: string;
		id?: string;
		name?: string;
	}

	export interface Cart_StoreInfo {
		active?: boolean;
		additional_fields?: string;
		carrier_info?: Array<Carrier>;
		country?: string;
		currency?: Currency;
		custom_fields?: string;
		default_warehouse_id?: string;
		dimension_unit?: string;
		language?: string;
		multi_store_url?: string;
		name?: string;
		prices_include_tax?: boolean;
		root_category_id?: string;
		store_currencies?: Array<Currency>;
		store_id?: string;
		store_languages?: Array<Language>;
		store_owner_info?: Info;
		timezone?: string;
		weight_unit?: string;
	}

	export interface Cart_Warehouse {
		additional_fields?: string;
		address?: Customer_Address;
		avail?: boolean;
		carriers_ids?: Array<string>;
		custom_fields?: string;
		description?: string;
		id?: string;
		name?: string;
		stores_ids?: Array<string>;
	}

	export interface Category {
		additional_fields?: string;
		avail?: boolean;
		created_at?: A2CDateTime;
		custom_fields?: string;
		description?: string;
		id?: string;
		images?: Array<Image>;
		keywords?: string;
		meta_description?: string;
		meta_title?: string;
		modified_at?: A2CDateTime;
		name?: string;
		parent_id?: string;
		path?: string;
		seo_url?: string;
		short_description?: string;
		sort_order?: number;
		stores_ids?: Array<string>;
	}

	export interface Child {
		additional_fields?: string;
		advanced_price?: Array<Product_AdvancedPrice>;
		allow_backorders?: boolean;
		avail_for_sale?: boolean;
		ChildCombination?: Array<ChildCombination>;
		created_time?: string;
		custom_fields?: string;
		default_price?: number;
		default_qty_in_pack?: number;
		dimensions_unit?: string;
		ean?: string;
		full_description?: string;
		gtin?: string;
		height?: number;
		id?: string;
		images?: Array<Image>;
		in_stock?: boolean;
		inventory?: Array<Product_Inventory>;
		inventory_level?: number;
		is_qty_in_pack_fixed?: boolean;
		length?: number;
		list_price?: number;
		manage_stock?: boolean;
		min_quantity?: number;
		modified_time?: string;
		mpn?: string;
		name?: string;
		parent_id?: string;
		short_description?: string;
		sku?: string;
		sort_order?: number;
		tax_class_id?: string;
		upc?: string;
		weight?: number;
		weight_unit?: string;
		wholesale_price?: number;
		width?: number;
	}

	export interface ChildCombination {
		option_id?: string;
		option_value_id?: string;
	}

	export interface Country {
		additional_fields?: string;
		code2?: string;
		code3?: string;
		custom_fields?: string;
		name?: string;
	}

	export interface Coupon {
		actions?: Array<Coupon_Action>;
		additional_fields?: string;
		avail?: boolean;
		code?: string;
		codes?: Array<Coupon_Code>;
		conditions?: Array<Coupon_Condition>;
		custom_fields?: string;
		date_end?: A2CDateTime;
		date_start?: A2CDateTime;
		description?: string;
		id?: string;
		logic_operator?: string;
		name?: string;
		priority?: number;
		usage_history?: Array<Coupon_History>;
		usage_limit?: number;
		usage_limit_per_customer?: number;
		used_times?: number;
	}

	export interface Coupon_Action {
		additional_fields?: string;
		amount?: number;
		apply_to?: string;
		conditions?: Array<Coupon_Condition>;
		currency_code?: string;
		custom_fields?: string;
		discount_quantity_step?: number;
		discounted_quantity?: number;
		include_tax?: boolean;
		logic_operator?: string;
		scope?: string;
		type?: string;
	}

	export interface Coupon_Code {
		additional_fields?: string;
		code?: string;
		custom_fields?: string;
		id?: string;
		used_times?: number;
	}

	export interface Coupon_Condition {
		additional_fields?: string;
		custom_fields?: string;
		entity?: string;
		id?: string;
		key?: string;
		logic_operator?: string;
		match_items?: string;
		operator?: string;
		sub-conditions?: Array<Coupon_Condition>;
		value?: string;
	}

	export interface Coupon_History {
		additional_fields?: string;
		amount?: number;
		custom_fields?: string;
		order_id?: string;
	}

	export interface Currency {
		additional_fields?: string;
		avail?: boolean;
		custom_fields?: string;
		default?: boolean;
		id?: string;
		iso3?: string;
		name?: string;
		rate?: number;
		symbol_left?: string;
		symbol_right?: string;
	}

	export interface Customer {
		additional_fields?: string;
		address_book?: Array<Customer_Address>;
		birth_day?: A2CDateTime;
		company?: string;
		created_time?: A2CDateTime;
		custom_fields?: string;
		email?: string;
		fax?: string;
		first_name?: string;
		gender?: string;
		group?: Array<Customer_Group>;
		id?: string;
		ip_address?: string;
		last_login?: A2CDateTime;
		last_name?: string;
		last_order_id?: string;
		login?: string;
		modified_time?: A2CDateTime;
		news_letter_subscription?: boolean;
		orders_count?: number;
		phone?: string;
		status?: string;
		stores_ids?: Array<string>;
		website?: string;
	}

	export interface CustomerAdd {
		CustomerAddAddress?: Array<CustomerAddAddress>;

		/**Defines customer's birthday */
		birth_day?: string;

		/**Defines customer's company */
		company?: string;

		/**Entity's date creation */
		created_time?: string;

		/**Defines customer's email */
		email: string;

		/**Defines customer's fax */
		fax?: string;

		/**Defines customer's first name */
		first_name: string;

		/**Defines customer's gender */
		gender?: string;

		/**Defines the group where the customer */
		group?: string;

		/**Defines customer's last login time */
		last_login?: string;

		/**Defines customer's last name */
		last_name: string;

		/**Specifies customer's login name */
		login?: string;

		/**Entity's date modification */
		modified_time?: string;

		/**Defines whether the newsletter subscription is available for the user */
		news_letter_subscription?: boolean;

		/**Defines customer's unique password */
		password?: string;

		/**Defines customer's phone number */
		phone?: string;

		/**Defines customer's status */
		status?: string;

		/**Link to customer website */
		website?: string;
	}

	export interface CustomerAddAddress {

		/**Specifies customer's first address in the address book */
		address_book_address1?: string;

		/**Specifies customer's second address in the address book */
		address_book_address2?: string;

		/**Specifies customer's city in the address book */
		address_book_city?: string;

		/**Specifies customer's company name in the address book */
		address_book_company?: string;

		/**ISO code or name of country */
		address_book_country?: string;

		/**Defines whether the address is used by default */
		address_book_default?: boolean;

		/**Specifies customer's fax in the address book */
		address_book_fax?: string;

		/**Specifies customer's first name in the address book */
		address_book_first_name?: string;

		/**Specifies customer's gender */
		address_book_gender?: string;

		/**Specifies customer's last name in the address book */
		address_book_last_name?: string;

		/**Specifies customer's phone number in the address book */
		address_book_phone?: string;

		/**Specifies customer's postcode */
		address_book_postcode?: string;

		/**Specifies customer's region */
		address_book_region?: string;

		/**ISO code or name of state. */
		address_book_state?: string;

		/**Specifies customer's address type */
		address_book_type?: string;

		/**Specifies customer's website in the address book */
		address_book_website?: string;
	}

	export interface Customer_Address {
		additional_fields?: string;
		address1?: string;
		address2?: string;
		city?: string;
		company?: string;
		country?: Country;
		custom_fields?: string;
		default?: boolean;
		fax?: string;
		first_name?: string;
		gender?: string;
		id?: string;
		last_name?: string;
		phone?: string;
		postcode?: string;
		region?: string;
		state?: State;
		type?: string;
		website?: string;
	}

	export interface Customer_Group {
		additional_fields?: string;
		custom_fields?: string;
		id?: string;
		name?: string;
	}

	export interface GiftCard {
		additional_fields?: string;
		amount?: number;
		avail_to?: string;
		code?: string;
		created_at?: string;
		currency_code?: string;
		custom_fields?: string;
		free_product_ids?: string;
		id?: string;
		initial_amount?: number;
		message?: string;
		name?: string;
		owner_email?: string;
		owner_name?: string;
		recipient_email?: string;
		recipient_name?: string;
		status?: string;
		type?: string;
		usage_history?: Array<Coupon_History>;
	}

	export interface Image {
		additional_fields?: string;
		alt?: string;
		avail?: boolean;
		create_at?: A2CDateTime;
		custom_fields?: string;
		file_name?: string;
		http_path?: string;
		id?: string;
		mime-type?: string;
		modified_at?: A2CDateTime;
		size?: number;
		sort_order?: number;
		type?: string;
	}

	export interface Info {
		additional_fields?: string;
		city?: string;
		country?: string;
		custom_fields?: string;
		email?: string;
		owner?: string;
		phone?: string;
		state?: string;
		state_code?: string;
		street_address?: string;
		street_address_line_2?: string;
		zip_code?: string;
	}

	export interface Language {
		additional_fields?: string;
		custom_fields?: string;
		id?: string;
		iso_code?: string;
		name?: string;
	}

	export interface Model_Response_Order_List {
		additional_fields?: string;
		custom_fields?: string;
		pagination?: Pagination;
		result?: Response_Order_List_Result;
		return_code?: number;
		return_message?: string;
	}

	export interface Model_Response_Product_List {
		additional_fields?: string;
		custom_fields?: string;
		pagination?: Pagination;
		result?: Response_Product_List_Result;
		return_code?: number;
		return_message?: string;
	}

	export interface Order {
		additional_fields?: string;
		basket_id?: string;
		billing_address?: Customer_Address;
		bundles?: Array<Order_Item>;
		comment?: string;
		create_at?: A2CDateTime;
		currency?: Currency;
		custom_fields?: string;
		customer?: string;
		discounts?: Array<Order_Totals_NewDiscount>;
		finished_time?: A2CDateTime;
		id?: string;
		modified_at?: A2CDateTime;
		order_id?: string;
		order_products?: Array<Order_Item>;
		payment_method?: Order_PaymentMethod;
		refunds?: Array<Order_Refund>;
		shipping_address?: Customer_Address;
		shipping_method?: Order_ShippingMethod;
		shipping_methods?: Array<Order_ShippingMethod>;
		status?: Order_Status;
		store_id?: string;
		total?: Order_Total;
		totals?: Order_Totals;
		warehouses_ids?: Array<string>;
	}

	export interface OrderAbandoned {
		additional_fields?: string;
		basket_id?: string;
		basket_url?: string;
		created_at?: A2CDateTime;
		currency?: Currency;
		custom_fields?: string;
		customer?: string;
		id?: string;
		modified_at?: A2CDateTime;
		order_products?: Array<Order_Item>;
		totals?: Order_Totals;
	}

	export interface OrderAdd {

		/**Specifies admin's order comment */
		admin_comment?: string;

		/**Specifies first billing address */
		bill_address_1: string;

		/**Specifies second billing address */
		bill_address_2?: string;

		/**Specifies billing city */
		bill_city: string;

		/**Specifies billing company */
		bill_company?: string;

		/**Specifies billing country code */
		bill_country: string;

		/**Specifies billing fax */
		bill_fax?: string;

		/**Specifies billing first name */
		bill_first_name: string;

		/**Specifies billing last name */
		bill_last_name: string;

		/**Specifies billing phone */
		bill_phone?: string;

		/**Specifies billing postcode */
		bill_postcode: string;

		/**Specifies billing state code */
		bill_state: string;

		/**Specifies order comment */
		comment?: string;

		/**Specifies order's coupon discount */
		coupon_discount?: number;

		/**Defines whether the invoice is created automatically along with the order */
		create_invoice?: boolean;

		/**Currency code of order */
		currency?: string;

		/**Specifies customer’s birthday */
		customer_birthday?: string;

		/**Defines the customer specified by email for whom order has to be created */
		customer_email: string;

		/**Specifies customer’s fax */
		customer_fax?: string;

		/**Specifies customer's first name */
		customer_first_name?: string;

		/**Specifies customer’s last name */
		customer_last_name?: string;

		/**Specifies customer’s phone */
		customer_phone?: string;

		/**Specifies an order creation date in format Y-m-d H:i:s */
		date?: string;

		/**Specifies order's  finished date */
		date_finished?: string;

		/**Specifies order's  modification date */
		date_modified?: string;

		/**Specifies order's discount */
		discount?: number;

		/**Identifying the system used to generate the order */
		external_source?: string;

		/**Create order with financial status */
		financial_status?: string;

		/**Create order with fulfillment status */
		fulfillment_status?: string;

		/**Discounts for order with gift certificates */
		gift_certificate_discount?: number;

		/**The behaviour to use when updating inventory.<hr><div style="font-style:normal">Values description:<div style="margin-left: 2%; padding-top: 2%"><div style="font-size:85%"><b>bypass</b> = Do not claim inventory </br></br><b>decrement_ignoring_policy</b> = Ignore the product's </br> inventory policy and claim amounts</br></br><b>decrement_obeying_policy</b> =  Obey the product's </br> inventory policy.</br></br></div></div></div> */
		inventory_behaviour?: string;

		/**Defines the order id if it is supported by the cart */
		order_id?: string;
		OrderAddOrder_item: Array<OrderAddOrder_item>;

		/**Defines order payment method.<br/>Setting order_payment_method on Shopify will also change financial_status field value to 'paid' */
		order_payment_method?: string;

		/**Defines order shipping method */
		order_shipping_method?: string;

		/**Defines order status. */
		order_status: string;

		/**Send notifications to customer after order was created */
		send_notifications?: boolean;

		/**Specifies first shipping address */
		shipp_address_1?: string;

		/**Specifies second address line of a shipping street address */
		shipp_address_2?: string;

		/**Specifies shipping city */
		shipp_city?: string;

		/**Specifies shipping company */
		shipp_company?: string;

		/**Specifies shipping country code */
		shipp_country?: string;

		/**Specifies shipping fax */
		shipp_fax?: string;

		/**Specifies shipping first name */
		shipp_first_name?: string;

		/**Specifies shipping last name */
		shipp_last_name?: string;

		/**Specifies shipping phone */
		shipp_phone?: string;

		/**Specifies shipping postcode */
		shipp_postcode?: string;

		/**Specifies shipping state code */
		shipp_state?: string;

		/**Specifies order's shipping price */
		shipping_price?: number;

		/**Specifies order's shipping price tax */
		shipping_tax?: number;

		/**Defines store id where the order should be assigned */
		store_id?: string;

		/**Total price of all ordered products multiplied by their number, excluding tax, shipping price and discounts */
		subtotal_price?: number;

		/**Order tags */
		tags?: string;

		/**The value of tax cost for order */
		tax_price?: number;

		/**Defines total paid amount for the order */
		total_paid?: number;

		/**Defines order's total price */
		total_price?: number;
	}

	export interface OrderAddOrder_item {

		/**Indicates whether subitems of the grouped/bundle product can be refunded separately */
		order_item_allow_refund_items_separately?: boolean;

		/**Indicates whether subitems of the grouped/bundle product can be shipped separately */
		order_item_allow_ship_items_separately?: boolean;

		/**Defines orders specified by order item id */
		order_item_id: string;

		/**Defines orders specified by order item model */
		order_item_model: string;

		/**Defines orders specified by order item name */
		order_item_name: string;
		OrderAddOrder_itemOrder_item_option?: Array<OrderAddOrder_itemOrder_item_option>;

		/**Index of the parent grouped/bundle product */
		order_item_parent?: number;

		/**Option name of the parent grouped/bundle product */
		order_item_parent_option_name?: string;

		/**Defines orders specified by order item price */
		order_item_price: number;

		/**Defines if item price includes tax */
		order_item_price_includes_tax?: boolean;
		OrderAddOrder_itemOrder_item_property?: Array<OrderAddOrder_itemOrder_item_property>;

		/**Defines orders specified by order item quantity */
		order_item_quantity: number;

		/**Percentage of tax for product order */
		order_item_tax?: number;

		/**Ordered product variant. Where x is order item ID */
		order_item_variant_id?: string;
	}

	export interface OrderAddOrder_itemOrder_item_option {

		/**Ordered Product Option Name. Where x is order item ID, y is order item option ID */
		order_item_option_name?: string;

		/**Ordered product option price Where x is order item ID, y - order item option ID */
		order_item_option_price?: number;

		/**Ordered product option value Where x is order item ID, y - order item option ID */
		order_item_option_value?: string;
	}

	export interface OrderAddOrder_itemOrder_item_property {

		/**Ordered product property name. Where x is order item ID, y is order item property ID */
		order_item_property_name?: string;

		/**Ordered product property value. Where x is order item ID, y - order item property ID */
		order_item_property_value?: string;
	}

	export interface OrderRefundAdd {

		/**Specifies an order creation date in format Y-m-d H:i:s */
		date?: string;

		/**Specifies refund's fee price */
		fee_price?: number;

		/**Indicates whether refund type is online */
		is_online?: boolean;

		/**Boolean, whether or not to add the line items back to the store inventory. */
		item_restock?: boolean;

		/**Defines items in the order that will be refunded */
		OrderRefundAddItems?: Array<OrderRefundAddItems>;

		/**Refund reason, or some else message which assigned to refund. */
		message?: string;

		/**Defines the order for which the refund will be created. */
		order_id: string;

		/**Send notifications to customer after refund was created */
		send_notifications?: boolean;

		/**Defines refund shipping amount. */
		shipping_price?: number;

		/**Defines order refund amount. */
		total_price?: number;
	}

	export interface OrderRefundAddItems {
		order_product_id?: string;
		price?: number;
		quantity?: number;
	}

	export interface OrderShipmentAdd {

		/**This parameter is used for adjust stock. */
		adjust_stock?: boolean;

		/**Defines items in the order that will be shipped */
		OrderShipmentAddItems?: Array<OrderShipmentAddItems>;

		/**Defines the order for which the shipment will be created */
		order_id: string;

		/**Send notifications to customer after shipment was created */
		send_notifications?: boolean;

		/**Defines company name that provide tracking of shipment */
		shipment_provider?: string;

		/**Defines shipment's tracking numbers that have to be added</br> How set tracking numbers to appropriate carrier:<ul><li>tracking_numbers[]=a2c.demo1,a2c.demo2 - set default carrier</li><li>tracking_numbers[<b>carrier_id</b>]=a2c.demo - set appropriate carrier</li></ul>To get the list of carriers IDs that are available in your store, use the <a href = "http://docs.api2cart.com/cart-info">cart.info</a > method */
		OrderShipmentAddTracking_numbers?: Array<OrderShipmentAddTracking_numbers>;

		/**This parameter is used for selecting a warehouse where you need to set/modify a product quantity. */
		warehouse_id?: string;
	}

	export interface OrderShipmentAddItems {
		order_product_id?: string;
		quantity?: number;
	}

	export interface OrderShipmentAddTracking_numbers {
		carrier_id?: string;
		tracking_number?: string;
	}

	export interface OrderShipmentTrackingAdd {

		/**Defines tracking carrier id */
		carrier_id?: string;

		/**Defines the order id */
		order_id: string;

		/**Shipment id indicates the number of delivery */
		shipment_id: string;

		/**Store Id */
		store_id?: string;

		/**Defines custom tracking link */
		tracking_link?: string;

		/**Defines tracking number */
		tracking_number: string;

		/**Defines name of the company which provides shipment tracking */
		tracking_provider?: string;
	}

	export interface OrderShipmentUpdate {

		/**Defines the order that will be updated */
		order_id: string;

		/**Allows rewrite tracking numbers */
		replace?: boolean;

		/**Shipment id indicates the number of delivery */
		shipment_id: string;

		/**Defines shipment's tracking numbers that have to be added</br> How set tracking numbers to appropriate carrier:<ul><li>tracking_numbers[]=a2c.demo1,a2c.demo2 - set default carrier</li><li>tracking_numbers[<b>carrier_id</b>]=a2c.demo - set appropriate carrier</li></ul>To get the list of carriers IDs that are available in your store, use the <a href = "http://docs.api2cart.com/cart-info">cart.info</a > method */
		OrderShipmentUpdateTracking_numbers?: Array<OrderShipmentUpdateTracking_numbers>;
	}

	export interface OrderShipmentUpdateTracking_numbers {
		carrier_id?: string;
		tracking_number?: string;
	}

	export interface Order_Item {
		additional_fields?: string;
		custom_fields?: string;
		discount_amount?: number;
		model?: string;
		name?: string;
		options?: Array<Order_Item_Option>;
		order_product_id?: string;
		parent_order_product_id?: string;
		price?: number;
		price_inc_tax?: number;
		product_id?: string;
		quantity?: number;
		tax_percent?: number;
		tax_value?: number;
		tax_value_after_discount?: number;
		total_price?: number;
		variant_id?: string;
		weight?: number;
		weight_unit?: string;
	}

	export interface Order_Item_Option {
		additional_fields?: string;
		custom_fields?: string;
		name?: string;
		option_id?: string;
		price?: number;
		product_option_value_id?: string;
		type?: string;
		value?: string;
		weight?: number;
	}

	export interface Order_PaymentMethod {
		additional_fields?: string;
		custom_fields?: string;
		name?: string;
	}

	export interface Order_Refund {
		additional_fields?: string;
		comment?: string;
		custom_fields?: string;
		fee?: number;
		id?: string;
		items?: Array<Order_Status_Refund_Item>;
		modified_time?: A2CDateTime;
		shipping?: number;
		tax?: number;
		total?: number;
	}

	export interface Order_ShippingMethod {
		additional_fields?: string;
		custom_fields?: string;
		name?: string;
	}

	export interface Order_Status {
		additional_fields?: string;
		custom_fields?: string;
		history?: Array<Order_Status_HistoryItem>;
		id?: string;
		name?: string;
		refund_info?: Order_Status_Refund;
	}

	export interface Order_Status_HistoryItem {
		additional_fields?: string;
		comment?: string;
		custom_fields?: string;
		id?: string;
		modified_time?: A2CDateTime;
		name?: string;
		notify?: boolean;
	}

	export interface Order_Status_Refund {
		additional_fields?: string;
		comment?: string;
		custom_fields?: string;
		fee?: number;
		refunded_items?: Array<Order_Status_Refund_Item>;
		shipping?: number;
		tax?: number;
		time?: A2CDateTime;
		total_refunded?: number;
	}

	export interface Order_Status_Refund_Item {
		additional_fields?: string;
		custom_fields?: string;
		order_product_id?: string;
		product_id?: string;
		qty?: number;
		refund?: number;
		variant_id?: string;
	}

	export interface Order_Total {
		additional_fields?: string;
		custom_fields?: string;
		shipping_ex_tax?: number;
		subtotal_ex_tax?: number;
		total?: number;
		total_discount?: number;
		total_paid?: number;
		total_tax?: number;
		wrapping_ex_tax?: number;
	}

	export interface Order_Totals {
		additional_fields?: string;
		custom_fields?: string;
		discount?: number;
		shipping?: number;
		subtotal?: number;
		tax?: number;
		total?: number;
	}

	export interface Order_Totals_NewDiscount {
		additional_fields?: string;
		code?: string;
		custom_fields?: string;
		type?: string;
		value?: number;
	}

	export interface Pagination {
		additional_fields?: string;
		custom_fields?: string;
		next?: string;
		previous?: string;
	}

	export interface Plugin {
		active?: boolean;
		additional_fields?: string;
		custom_fields?: string;
		name?: string;
	}

	export interface PluginList {
		additional_fields?: string;
		all_plugins?: number;
		custom_fields?: string;
		plugins?: Array<Plugin>;
	}

	export interface Product {
		additional_fields?: string;
		advanced_price?: Array<Product_AdvancedPrice>;
		avail_sale?: boolean;
		avail_view?: boolean;
		backorders?: string;
		categories_ids?: Array<string>;
		create_at?: A2CDateTime;
		custom_fields?: string;
		description?: string;
		dimensions_unit?: string;
		group_price?: Array<Product_GroupPrice>;
		height?: number;
		id?: string;
		images?: Array<Image>;
		inventory?: Array<Product_Inventory>;
		is_downloadable?: boolean;
		is_virtual?: boolean;
		length?: number;
		manage_stock?: string;
		meta_description?: string;
		meta_keywords?: string;
		meta_title?: string;
		modified_at?: A2CDateTime;
		name?: string;
		price?: number;
		product_options?: Array<Product_Option>;
		quantity?: number;
		related_products_ids?: Array<string>;
		seo_url?: string;
		short_description?: string;
		sort_order?: number;
		special_price?: SpecialPrice;
		stores_ids?: Array<string>;
		tax_class_id?: string;
		tier_price?: Array<Product_TierPrice>;
		type?: string;
		u_brand?: string;
		u_brand_id?: string;
		u_model?: string;
		u_mpn?: string;
		u_sku?: string;
		u_upc?: string;
		url?: string;
		weight?: number;
		weight_unit?: string;
		width?: number;
	}

	export interface ProductAdd {

		/**Defines product’s attribute name separated with a comma in Magento */
		attribute_name?: string;

		/**Defines product’s attribute set name in Magento */
		attribute_set_name?: string;

		/**Allows to schedule a time in the future that the item becomes available. The value should be greater than the current date and time. */
		avail_from?: string;

		/**Specifies the set of visible/invisible products for sale */
		available_for_sale?: boolean;

		/**Specifies the set of visible/invisible products for users */
		available_for_view?: boolean;

		/**The price at which Best Offers are automatically accepted.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">best_offer[<b>minimum_offer_price</b>] = decimal</br>best_offer[<b>auto_accept_price</b>] = decimal</br></code></div></div> */
		best_offer?: Array<string>;

		/**Defines product add that is specified by comma-separated categories id */
		categories_ids?: string;

		/**The human-readable label for the condition (e.g., "New"). */
		condition?: string;

		/**Defines the date of entity creation */
		created_at?: string;

		/**Defines product's description that has to be added */
		description: string;

		/**Defines whether the product is downloadable */
		downloadable?: boolean;

		/**European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products. */
		ean?: string;

		/**Defines product's group prices */
		ProductAddGroup_prices?: Array<ProductAddGroup_prices>;

		/**International Standard Book Number. An ISBN is a unique identifier for books. */
		isbn?: string;

		/**Language id */
		lang_id?: string;

		/**Describes the number of days the seller wants the listing to be active. Look at cart.info method response for allowed values. */
		listing_duration?: string;

		/**Indicates the selling format of the eBay listing. */
		listing_type?: string;

		/**Defines product's manufacturer */
		manufacturer?: string;

		/**Defines unique meta description of a entity */
		meta_description?: string;

		/**Defines unique meta keywords for each entity */
		meta_keywords?: string;

		/**Defines unique meta title for each entity */
		meta_title?: string;

		/**Defines product's model that has to be added */
		model: string;

		/**Defines product's name that has to be added */
		name: string;

		/**Defines how many times the product was ordered */
		ordered_count?: number;

		/**If the seller is subscribed to "Business Policies", use the seller_profiles instead of the shipping_details, payment_methods and return_accepted params.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">package_details[<b>measure_unit</b>] = string</br> Allowed measure_unit values: [English or Metric] </br> Default: Metric</br>package_details[<b>weigh_unit</b>] = string</br> Allowed weigh_unit values: [kg, g, lbs, oz]</br>package_details[<b>package_depth</b>] = decimal</br>package_details[<b>package_length</b>] = decimal</br>package_details[<b>package_width</b>] = decimal</br>package_details[<b>weight_major</b>] = decimal</br>package_details[<b>weight_minor</b>] = decimal</br>package_details[<b>shipping_package</b>] = string</br> See cart.info method, param `eBay_shipping_package_details`</code></div></div> */
		package_details?: Array<string>;

		/**Identifies the payment method (such as PayPal) that the seller will accept when the buyer pays for the item. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">payment_methods[0] = string</br>payment_methods[1] = string</br></code></div></div> */
		payment_methods?: Array<string>;

		/**Valid PayPal email address for the PayPal account that the seller will use if they offer PayPal as a payment method for the listing. */
		paypal_email?: string;

		/**Defines product's price that has to be added */
		price: number;

		/**Defines product's quantity that has to be added */
		quantity?: number;

		/**Indicates whether the seller allows the buyer to return the item. */
		return_accepted?: boolean;

		/**Percent of an item's price to be charged as the sales tax for the order. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">sales_tax[<b>tax_percent</b>] = decimal (##.###)</br>sales_tax[<b>tax_state</b>] = string</br>sales_tax[<b>shipping_inc_in_tax</b>] = bool</br></code></div></div> */
		sales_tax?: Array<string>;

		/**The shipping details, including flat and calculated shipping costs and shipping insurance costs. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">shipping_details[<b>shipping_type</b>] = string </br>shipping_details[0][<b>shipping_service</b>] = string</br>shipping_details[0][<b>shipping_cost</b>] = decimal</br>shipping_details[1][<b>shipping_service</b>] = string</br>shipping_details[1][<b>shipping_cost</b>] = decimal</br></code></div></div> */
		shipping_details?: Array<string>;

		/**The numeric ID of the shipping template associated with the products in Etsy. */
		shipping_template_id?: number;

		/**Defines short description */
		short_description?: string;

		/**Defines product's sku that has to be added */
		sku?: string;

		/**Defines product's model that has to be added */
		special_price?: number;

		/**
		 * An array of Item Specific Name/Value pairs used by the seller to provide descriptive details of an item in a structured manner.
		 * <hr>
		 * <div style="font-style:normal">Param structure:
		 * <div style="margin-left: 2%;">
		 * <code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">
		 * specifics[int][<b>name</b>] = string</br>
		 * specifics[int][<b>value</b>] = string</br>
		 * </code>
		 * </div>
		 * </div>
		 */
		specifics?: Array<string>;

		/**Defines the date of special price creation */
		sprice_create?: string;

		/**Defines the term of special price offer duration */
		sprice_expire?: string;

		/**Defines the date of special price modification */
		sprice_modified?: string;

		/**Assign product to the stores that is specified by comma-separated stores' id */
		stores_ids?: string;

		/**Product tags */
		tags?: string;

		/**Defines tax classes where entity has to be added */
		tax_class_id?: number;

		/**Defines product's tier prices */
		ProductAddTier_prices?: Array<ProductAddTier_prices>;

		/**Defines product's type */
		type?: string;

		/**Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products. */
		upc?: string;

		/**Defines unique product's URL */
		url?: string;

		/**Specifies the number of product's reviews */
		viewed_count?: number;

		/**This parameter is used for selecting a warehouse where you need to set/modify a product quantity. */
		warehouse_id?: string;

		/**Weight */
		weight?: number;

		/**Weight Unit */
		weight_unit?: string;

		/**Defines product's sale price */
		wholesale_price?: number;
	}

	export interface ProductAddGroup_prices {
		group_id?: string;
		price?: number;
	}

	export interface ProductAddTier_prices {
		price?: number;
		quantity?: number;
	}

	export interface ProductPriceAdd {

		/**Defines product's group prices */
		ProductPriceAddGroup_prices?: Array<ProductPriceAddGroup_prices>;

		/**Defines the product to which the price has to be added */
		product_id: string;
	}

	export interface ProductPriceAddGroup_prices {
		group_id?: string;
		price?: number;
	}

	export interface ProductPriceUpdate {

		/**Defines product's group prices */
		ProductPriceUpdateGroup_prices?: Array<ProductPriceUpdateGroup_prices>;

		/**Defines the product where the price has to be updated */
		product_id: string;
	}

	export interface ProductPriceUpdateGroup_prices {
		group_id?: string;
		id?: number;
		price?: number;
	}

	export interface ProductTaxAdd {

		/**Defines tax class name where tax has to be added */
		name: string;

		/**Defines products specified by product id */
		product_id: string;

		/**Defines tax rates of specified tax classes */
		ProductTaxAddTax_rates: Array<ProductTaxAddTax_rates>;
	}

	export interface ProductTaxAddTax_rates {
		name?: string;
		type?: string;
		value?: number;
	}

	export interface ProductVariantAdd {

		/**Defines variant's attributes list */
		attributes?: Array<string>;

		/**Specifies the set of visible/invisible product's variants for sale */
		available_for_sale?: boolean;

		/**Specifies the set of visible/invisible product's variants for users */
		available_for_view?: boolean;

		/**Defines the date of entity creation */
		created_at?: string;

		/**Specifies variant's description */
		description?: string;

		/**Language id */
		lang_id?: string;

		/**Specifies the product variant's manufacturer */
		manufacturer?: string;

		/**Defines unique meta description of a entity */
		meta_description?: string;

		/**Defines unique meta keywords for each entity */
		meta_keywords?: string;

		/**Defines unique meta title for each entity */
		meta_title?: string;

		/**Specifies variant's model that has to be added */
		model: string;

		/**Defines variant's name that has to be added */
		name?: string;

		/**Defines new product's variant price */
		price?: number;

		/**Defines product's id where the variant has to be added */
		product_id: string;

		/**Defines product variant's quantity that has to be added */
		quantity?: number;

		/**Defines short description */
		short_description?: string;

		/**Specifies variant's model that has to be added */
		special_price?: number;

		/**Defines the date of special price creation */
		sprice_create?: string;

		/**Defines the term of special price offer duration */
		sprice_expire?: string;

		/**Defines the date of special price modification */
		sprice_modified?: string;

		/**Add variants specified by store id */
		store_id?: string;

		/**Defines tax classes where entity has to be added */
		tax_class_id?: number;

		/**Defines unique product variant's URL */
		url?: string;

		/**This parameter is used for selecting a warehouse where you need to set/modify a product quantity. */
		warehouse_id?: string;

		/**Weight */
		weight?: number;
	}

	export interface ProductVariantPriceAdd {

		/**Defines variants's group prices */
		ProductVariantPriceAddGroup_prices?: Array<ProductVariantPriceAddGroup_prices>;

		/**Defines the variant to which the price has to be added */
		id: string;
	}

	export interface ProductVariantPriceAddGroup_prices {
		group_id?: string;
		price?: number;
	}

	export interface ProductVariantPriceUpdate {

		/**Defines variants's group prices */
		ProductVariantPriceUpdateGroup_prices?: Array<ProductVariantPriceUpdateGroup_prices>;

		/**Defines the variant where the price has to be updated */
		id: string;
	}

	export interface ProductVariantPriceUpdateGroup_prices {
		group_id?: string;
		id?: number;
		price?: number;
	}

	export interface Product_AdvancedPrice {
		additional_fields?: string;
		avail?: boolean;
		custom_fields?: string;
		expire_time?: A2CDateTime;
		group_id?: string;
		id?: string;
		quantity_from?: number;
		start_time?: A2CDateTime;
		value?: number;
	}

	export interface Product_Attribute {
		additional_fields?: string;
		attribute_group_id?: string;
		attribute_id?: string;
		code?: string;
		custom_fields?: string;
		lang_id?: number;
		name?: string;
		position?: number;
		product_id?: number;
		required?: boolean;
		store_id?: number;
		type?: string;
		value?: string;
		visible?: boolean;
	}

	export interface Product_GroupPrice {
		additional_fields?: string;
		custom_fields?: string;
		expire_time?: string;
		group_id?: string;
		id?: string;
		price?: number;
		quantity?: number;
		start_time?: string;
		store_id?: string;
	}

	export interface Product_Inventory {
		additional_fields?: string;
		custom_fields?: string;
		in_stock?: boolean;
		priority?: number;
		quantity?: number;
		warehouse_id?: string;
	}

	export interface Product_Option {
		additional_fields?: string;
		available?: boolean;
		custom_fields?: string;
		description?: string;
		id?: string;
		name?: string;
		option_items?: Array<Product_Option_Item>;
		product_option_id?: string;
		required?: boolean;
		sort_order?: number;
		type?: string;
		used_in_combination?: boolean;
	}

	export interface Product_Option_Item {
		additional_fields?: string;
		custom_fields?: string;
		id?: string;
		name?: string;
		price?: string;
		product_option_item_id?: string;
		quantity?: number;
		sku?: string;
		sort_order?: number;
		type_price?: string;
		weight?: string;
	}

	export interface Product_Review {
		additional_fields?: string;
		created_time?: A2CDateTime;
		custom_fields?: string;
		customer_id?: string;
		email?: string;
		id?: string;
		message?: string;
		nick_name?: string;
		product_id?: string;
		rating?: number;
		ratings?: Array<Product_Review_Rating>;
		status?: string;
		summary?: string;
	}

	export interface Product_Review_Rating {
		additional_fields?: string;
		custom_fields?: string;
		id?: string;
		name?: string;
		value?: number;
	}

	export interface Product_TierPrice {
		additional_fields?: string;
		custom_fields?: string;
		price?: number;
		qty?: number;
	}

	export interface Response_Order_List_Result {
		additional_fields?: string;
		custom_fields?: string;
		order?: Array<Order>;
		orders_count?: number;
	}

	export interface Response_Product_List_Result {
		additional_fields?: string;
		custom_fields?: string;
		product?: Array<Product>;
		products_count?: number;
	}

	export interface Script {
		additional_fields?: string;
		created_time?: A2CDateTime;
		custom_fields?: string;
		description?: string;
		event?: string;
		html?: string;
		id?: string;
		load_method?: string;
		modified_time?: A2CDateTime;
		name?: string;
		scope?: string;
		src?: string;
	}

	export interface Shipment {
		additional_fields?: string;
		created_at?: A2CDateTime;
		custom_fields?: string;
		id?: string;
		ShipmentItems?: Array<ShipmentItems>;
		order_id?: string;
		shipment_provider?: string;
		tracking_numbers?: Array<Shipment_TrackingNumber>;
		warehouse_id?: string;
	}

	export interface ShipmentItems {
		model?: string;
		name?: string;
		price?: number;
		product_id?: string;
		quantity?: number;
	}

	export interface Shipment_TrackingNumber {
		additional_fields?: string;
		carrier_id?: string;
		custom_fields?: string;
		tracking_number?: string;
	}

	export interface SpecialPrice {
		additional_fields?: string;
		avail?: boolean;
		created_at?: A2CDateTime;
		custom_fields?: string;
		expired_at?: A2CDateTime;
		modified_at?: A2CDateTime;
		value?: number;
	}

	export interface State {
		additional_fields?: string;
		code?: string;
		custom_fields?: string;
		name?: string;
	}

	export interface StoreAttribute {
		additional_fields?: string;
		code?: string;
		custom_fields?: string;
		default_values?: Array<string>;
		id?: string;
		lang_id?: string;
		name?: string;
		position?: number;
		required?: boolean;
		store_id?: string;
		system?: boolean;
		type?: string;
		values?: Array<string>;
		visible?: boolean;
	}

	export interface StoreAttribute_Group {
		additional_fields?: string;
		assigned_attribute_ids?: Array<string>;
		attribute_set_id?: string;
		custom_fields?: string;
		id?: string;
		name?: string;
		position?: number;
	}

	export interface Subscriber {
		additional_fields?: string;
		created_time?: string;
		custom_fields?: string;
		customer_id?: string;
		email?: string;
		first_name?: string;
		id?: string;
		last_name?: string;
		modified_time?: string;
		subscribed?: boolean;
	}

	export interface TaxClass {
		additional_fields?: string;
		avail?: boolean;
		custom_fields?: string;
		id?: string;
		name?: string;
		tax?: number;
		tax_rates?: Array<TaxClass_Rate>;
		tax_type?: number;
	}

	export interface TaxClass_Rate {
		additional_fields?: string;
		address?: Array<string>;
		cities?: Array<string>;
		countries?: Array<string>;
		custom_fields?: string;
		id?: string;
		name?: string;
		tax?: number;
		tax_based_on?: string;
		tax_type?: number;
		zip_codes?: Array<string>;
	}

	export interface Webhook {
		action?: string;
		active?: boolean;
		additional_fields?: string;
		callback?: string;
		created_at?: string;
		custom_fields?: string;
		entity?: string;
		fields?: string;
		id?: number;
		label?: string;
		store_id?: string;
		updated_at?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Add store to the account
		 * Post account.cart.add.json
		 * @param {string} cart_id Store’s identifier which you can get from cart_list method
		 * @param {string} store_url A web address of a store that you would like to connect to API2Cart
		 * @param {string} bridge_url This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)
		 * @param {string} store_root Absolute path to the store root directory (used with "bridge_url" parameter)
		 * @param {string} store_key Set this parameter if bridge is already uploaded to store
		 * @param {boolean} validate_version Specify if api2cart should validate cart version
		 * @param {boolean} verify Enables or disables cart's verification
		 * @param {string} db_tables_prefix This parameter is deprecated for this method. Please, use this parameter in method account.config.update
		 * @param {string} ftp_host FTP connection host
		 * @param {string} ftp_user FTP User
		 * @param {string} ftp_password FTP Password
		 * @param {number} ftp_port FTP Port
		 * @param {string} ftp_store_dir FTP Store dir
		 * @param {string} 3dcartapi_api_key 3DCart API Key
		 * @param {string} amazon_access_token Access token authorizing the app to access resources on behalf of a user
		 * @param {string} amazon_seller_id Seller Id
		 * @param {string} amazon_marketplaces_ids Comma separated marketplaces ids
		 * @param {string} amazon_secret_key Amazon Secret Key
		 * @param {string} amazon_access_key_id Amazon Secret Key Id
		 * @param {string} aspdotnetstorefront_api_user It's a AspDotNetStorefront account for which API is available
		 * @param {string} aspdotnetstorefront_api_pass AspDotNetStorefront API Password
		 * @param {string} bigcommerceapi_admin_account It's a BigCommerce account for which API is enabled
		 * @param {string} bigcommerceapi_api_path BigCommerce API URL
		 * @param {string} bigcommerceapi_api_key Bigcommerce API Key
		 * @param {string} bigcommerceapi_client_id Client ID of the requesting app
		 * @param {string} bigcommerceapi_access_token Access token authorizing the app to access resources on behalf of a user
		 * @param {string} bigcommerceapi_context API Path section unique to the store
		 * @param {string} demandware_client_id Demandware client id
		 * @param {string} demandware_api_password Demandware api password
		 * @param {string} demandware_user_name Demandware user name
		 * @param {string} demandware_user_password Demandware user password
		 * @param {string} demandware_env_type Demandware environment
		 * @param {string} ebay_client_id Application ID (AppID).
		 * @param {string} ebay_client_secret Shared Secret from eBay application
		 * @param {string} ebay_runame The RuName value that eBay assigns to your application.
		 * @param {string} ebay_access_token Used to authenticate API requests.
		 * @param {string} ebay_refresh_token Used to renew the access token.
		 * @param {string} ebay_environment eBay environment
		 * @param {number} ebay_site_id eBay global ID
		 * @param {string} walmart_client_id Walmart client ID
		 * @param {string} walmart_client_secret Walmart client secret
		 * @param {string} ecwid_acess_token Access token authorizing the app to access resources on behalf of a user
		 * @param {string} ecwid_store_id Store Id
		 * @param {string} etsy_keystring Etsy keystring
		 * @param {string} etsy_shared_secret Etsy shared secret
		 * @param {string} etsy_access_token Access token authorizing the app to access resources on behalf of a user
		 * @param {string} etsy_token_secret Secret token authorizing the app to access resources on behalf of a user
		 * @param {string} neto_api_key Neto API Key
		 * @param {string} neto_api_username Neto User Name
		 * @param {string} shopify_api_key Shopify API Key
		 * @param {string} shopify_api_password Shopify API Password
		 * @param {string} shopify_shared_secret Shared secret
		 * @param {string} shopify_access_token Access token authorizing the app to access resources on behalf of a user
		 * @param {string} volusion_login It's a Volusion account for which API is enabled
		 * @param {string} volusion_password Volusion API Password
		 * @param {string} hybris_client_id Omni Commerce Connector Client ID
		 * @param {string} hybris_client_secret Omni Commerce Connector Client Secret
		 * @return {string} successful operation
		 */
		AccountCartAdd(cart_id: string, store_url: string, bridge_url: string, store_root: string, store_key: string, validate_version: boolean, verify: boolean, db_tables_prefix: string, ftp_host: string, ftp_user: string, ftp_password: string, ftp_port: number, ftp_store_dir: string, 3dcartapi_api_key: string, amazon_access_token: string, amazon_seller_id: string, amazon_marketplaces_ids: string, amazon_secret_key: string, amazon_access_key_id: string, aspdotnetstorefront_api_user: string, aspdotnetstorefront_api_pass: string, bigcommerceapi_admin_account: string, bigcommerceapi_api_path: string, bigcommerceapi_api_key: string, bigcommerceapi_client_id: string, bigcommerceapi_access_token: string, bigcommerceapi_context: string, demandware_client_id: string, demandware_api_password: string, demandware_user_name: string, demandware_user_password: string, demandware_env_type: string, ebay_client_id: string, ebay_client_secret: string, ebay_runame: string, ebay_access_token: string, ebay_refresh_token: string, ebay_environment: string, ebay_site_id: number, walmart_client_id: string, walmart_client_secret: string, ecwid_acess_token: string, ecwid_store_id: string, etsy_keystring: string, etsy_shared_secret: string, etsy_access_token: string, etsy_token_secret: string, neto_api_key: string, neto_api_username: string, shopify_api_key: string, shopify_api_password: string, shopify_shared_secret: string, shopify_access_token: string, volusion_login: string, volusion_password: string, hybris_client_id: string, hybris_client_secret: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'account.cart.add.json?cart_id=' + (cart_id == null ? '' : encodeURIComponent(cart_id)) + '&store_url=' + (store_url == null ? '' : encodeURIComponent(store_url)) + '&bridge_url=' + (bridge_url == null ? '' : encodeURIComponent(bridge_url)) + '&store_root=' + (store_root == null ? '' : encodeURIComponent(store_root)) + '&store_key=' + (store_key == null ? '' : encodeURIComponent(store_key)) + '&validate_version=' + validate_version + '&verify=' + verify + '&db_tables_prefix=' + (db_tables_prefix == null ? '' : encodeURIComponent(db_tables_prefix)) + '&ftp_host=' + (ftp_host == null ? '' : encodeURIComponent(ftp_host)) + '&ftp_user=' + (ftp_user == null ? '' : encodeURIComponent(ftp_user)) + '&ftp_password=' + (ftp_password == null ? '' : encodeURIComponent(ftp_password)) + '&ftp_port=' + ftp_port + '&ftp_store_dir=' + (ftp_store_dir == null ? '' : encodeURIComponent(ftp_store_dir)) + '&3dcartapi_api_key=' + (3dcartapi_api_key == null ? '' : encodeURIComponent(3dcartapi_api_key)) + '&amazon_access_token=' + (amazon_access_token == null ? '' : encodeURIComponent(amazon_access_token)) + '&amazon_seller_id=' + (amazon_seller_id == null ? '' : encodeURIComponent(amazon_seller_id)) + '&amazon_marketplaces_ids=' + (amazon_marketplaces_ids == null ? '' : encodeURIComponent(amazon_marketplaces_ids)) + '&amazon_secret_key=' + (amazon_secret_key == null ? '' : encodeURIComponent(amazon_secret_key)) + '&amazon_access_key_id=' + (amazon_access_key_id == null ? '' : encodeURIComponent(amazon_access_key_id)) + '&aspdotnetstorefront_api_user=' + (aspdotnetstorefront_api_user == null ? '' : encodeURIComponent(aspdotnetstorefront_api_user)) + '&aspdotnetstorefront_api_pass=' + (aspdotnetstorefront_api_pass == null ? '' : encodeURIComponent(aspdotnetstorefront_api_pass)) + '&bigcommerceapi_admin_account=' + (bigcommerceapi_admin_account == null ? '' : encodeURIComponent(bigcommerceapi_admin_account)) + '&bigcommerceapi_api_path=' + (bigcommerceapi_api_path == null ? '' : encodeURIComponent(bigcommerceapi_api_path)) + '&bigcommerceapi_api_key=' + (bigcommerceapi_api_key == null ? '' : encodeURIComponent(bigcommerceapi_api_key)) + '&bigcommerceapi_client_id=' + (bigcommerceapi_client_id == null ? '' : encodeURIComponent(bigcommerceapi_client_id)) + '&bigcommerceapi_access_token=' + (bigcommerceapi_access_token == null ? '' : encodeURIComponent(bigcommerceapi_access_token)) + '&bigcommerceapi_context=' + (bigcommerceapi_context == null ? '' : encodeURIComponent(bigcommerceapi_context)) + '&demandware_client_id=' + (demandware_client_id == null ? '' : encodeURIComponent(demandware_client_id)) + '&demandware_api_password=' + (demandware_api_password == null ? '' : encodeURIComponent(demandware_api_password)) + '&demandware_user_name=' + (demandware_user_name == null ? '' : encodeURIComponent(demandware_user_name)) + '&demandware_user_password=' + (demandware_user_password == null ? '' : encodeURIComponent(demandware_user_password)) + '&demandware_env_type=' + (demandware_env_type == null ? '' : encodeURIComponent(demandware_env_type)) + '&ebay_client_id=' + (ebay_client_id == null ? '' : encodeURIComponent(ebay_client_id)) + '&ebay_client_secret=' + (ebay_client_secret == null ? '' : encodeURIComponent(ebay_client_secret)) + '&ebay_runame=' + (ebay_runame == null ? '' : encodeURIComponent(ebay_runame)) + '&ebay_access_token=' + (ebay_access_token == null ? '' : encodeURIComponent(ebay_access_token)) + '&ebay_refresh_token=' + (ebay_refresh_token == null ? '' : encodeURIComponent(ebay_refresh_token)) + '&ebay_environment=' + (ebay_environment == null ? '' : encodeURIComponent(ebay_environment)) + '&ebay_site_id=' + ebay_site_id + '&walmart_client_id=' + (walmart_client_id == null ? '' : encodeURIComponent(walmart_client_id)) + '&walmart_client_secret=' + (walmart_client_secret == null ? '' : encodeURIComponent(walmart_client_secret)) + '&ecwid_acess_token=' + (ecwid_acess_token == null ? '' : encodeURIComponent(ecwid_acess_token)) + '&ecwid_store_id=' + (ecwid_store_id == null ? '' : encodeURIComponent(ecwid_store_id)) + '&etsy_keystring=' + (etsy_keystring == null ? '' : encodeURIComponent(etsy_keystring)) + '&etsy_shared_secret=' + (etsy_shared_secret == null ? '' : encodeURIComponent(etsy_shared_secret)) + '&etsy_access_token=' + (etsy_access_token == null ? '' : encodeURIComponent(etsy_access_token)) + '&etsy_token_secret=' + (etsy_token_secret == null ? '' : encodeURIComponent(etsy_token_secret)) + '&neto_api_key=' + (neto_api_key == null ? '' : encodeURIComponent(neto_api_key)) + '&neto_api_username=' + (neto_api_username == null ? '' : encodeURIComponent(neto_api_username)) + '&shopify_api_key=' + (shopify_api_key == null ? '' : encodeURIComponent(shopify_api_key)) + '&shopify_api_password=' + (shopify_api_password == null ? '' : encodeURIComponent(shopify_api_password)) + '&shopify_shared_secret=' + (shopify_shared_secret == null ? '' : encodeURIComponent(shopify_shared_secret)) + '&shopify_access_token=' + (shopify_access_token == null ? '' : encodeURIComponent(shopify_access_token)) + '&volusion_login=' + (volusion_login == null ? '' : encodeURIComponent(volusion_login)) + '&volusion_password=' + (volusion_password == null ? '' : encodeURIComponent(volusion_password)) + '&hybris_client_id=' + (hybris_client_id == null ? '' : encodeURIComponent(hybris_client_id)) + '&hybris_client_secret=' + (hybris_client_secret == null ? '' : encodeURIComponent(hybris_client_secret)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get list of carts.
		 * Get account.cart.list.json
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} request_from_date Retrieve entities from their creation date
		 * @param {string} request_to_date Retrieve entities to their creation date
		 * @param {string} store_url A web address of a store
		 * @param {string} store_key Find store by store key
		 * @return {string} successful operation
		 */
		AccountCartList(params: string, exclude: string, request_from_date: string, request_to_date: string, store_url: string, store_key: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'account.cart.list.json?params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&request_from_date=' + (request_from_date == null ? '' : encodeURIComponent(request_from_date)) + '&request_to_date=' + (request_to_date == null ? '' : encodeURIComponent(request_to_date)) + '&store_url=' + (store_url == null ? '' : encodeURIComponent(store_url)) + '&store_key=' + (store_key == null ? '' : encodeURIComponent(store_key)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Update configs in the API2Cart database.
		 * Put account.config.update.json
		 * @param {string} new_store_key Update store key
		 * @param {string} bridge_url This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)
		 * @param {string} store_root Absolute path to the store root directory (used with "bridge_url" parameter)
		 * @param {string} db_tables_prefix This parameter is deprecated for this method. Please, use this parameter in method account.config.update
		 * @param {string} 3dcartapi_api_key 3DCart API Key
		 * @param {string} amazon_access_token Access token authorizing the app to access resources on behalf of a user
		 * @param {string} amazon_seller_id Seller Id
		 * @param {string} amazon_marketplaces_ids Comma separated marketplaces ids
		 * @param {string} amazon_secret_key Amazon Secret Key
		 * @param {string} amazon_access_key_id Amazon Secret Key Id
		 * @param {string} aspdotnetstorefront_api_user It's a AspDotNetStorefront account for which API is available
		 * @param {string} aspdotnetstorefront_api_pass AspDotNetStorefront API Password
		 * @param {string} bigcommerceapi_admin_account It's a BigCommerce account for which API is enabled
		 * @param {string} bigcommerceapi_api_path BigCommerce API URL
		 * @param {string} bigcommerceapi_api_key Bigcommerce API Key
		 * @param {string} bigcommerceapi_client_id Client ID of the requesting app
		 * @param {string} bigcommerceapi_access_token Access token authorizing the app to access resources on behalf of a user
		 * @param {string} bigcommerceapi_context API Path section unique to the store
		 * @param {string} demandware_client_id Demandware client id
		 * @param {string} demandware_api_password Demandware api password
		 * @param {string} demandware_user_name Demandware user name
		 * @param {string} demandware_user_password Demandware user password
		 * @param {string} demandware_env_type Demandware environment
		 * @param {string} ebay_client_id Application ID (AppID).
		 * @param {string} ebay_client_secret Shared Secret from eBay application
		 * @param {string} ebay_runame The RuName value that eBay assigns to your application.
		 * @param {string} ebay_access_token Used to authenticate API requests.
		 * @param {string} ebay_refresh_token Used to renew the access token.
		 * @param {string} ebay_environment eBay environment
		 * @param {number} ebay_site_id eBay global ID
		 * @param {string} ecwid_acess_token Access token authorizing the app to access resources on behalf of a user
		 * @param {string} ecwid_store_id Store Id
		 * @param {string} etsy_keystring Etsy keystring
		 * @param {string} etsy_shared_secret Etsy shared secret
		 * @param {string} etsy_access_token Access token authorizing the app to access resources on behalf of a user
		 * @param {string} etsy_token_secret Secret token authorizing the app to access resources on behalf of a user
		 * @param {string} neto_api_key Neto API Key
		 * @param {string} neto_api_username Neto User Name
		 * @param {string} shopify_api_key Shopify API Key
		 * @param {string} shopify_api_password Shopify API Password
		 * @param {string} shopify_shared_secret Shared secret
		 * @param {string} shopify_access_token Access token authorizing the app to access resources on behalf of a user
		 * @param {string} volusion_login It's a Volusion account for which API is enabled
		 * @param {string} volusion_password Volusion API Password
		 * @param {string} walmart_client_id Walmart client ID
		 * @param {string} walmart_client_secret Walmart client secret
		 * @return {string} successful operation
		 */
		AccountConfigUpdate(new_store_key: string, bridge_url: string, store_root: string, db_tables_prefix: string, 3dcartapi_api_key: string, amazon_access_token: string, amazon_seller_id: string, amazon_marketplaces_ids: string, amazon_secret_key: string, amazon_access_key_id: string, aspdotnetstorefront_api_user: string, aspdotnetstorefront_api_pass: string, bigcommerceapi_admin_account: string, bigcommerceapi_api_path: string, bigcommerceapi_api_key: string, bigcommerceapi_client_id: string, bigcommerceapi_access_token: string, bigcommerceapi_context: string, demandware_client_id: string, demandware_api_password: string, demandware_user_name: string, demandware_user_password: string, demandware_env_type: string, ebay_client_id: string, ebay_client_secret: string, ebay_runame: string, ebay_access_token: string, ebay_refresh_token: string, ebay_environment: string, ebay_site_id: number, ecwid_acess_token: string, ecwid_store_id: string, etsy_keystring: string, etsy_shared_secret: string, etsy_access_token: string, etsy_token_secret: string, neto_api_key: string, neto_api_username: string, shopify_api_key: string, shopify_api_password: string, shopify_shared_secret: string, shopify_access_token: string, volusion_login: string, volusion_password: string, walmart_client_id: string, walmart_client_secret: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'account.config.update.json?new_store_key=' + (new_store_key == null ? '' : encodeURIComponent(new_store_key)) + '&bridge_url=' + (bridge_url == null ? '' : encodeURIComponent(bridge_url)) + '&store_root=' + (store_root == null ? '' : encodeURIComponent(store_root)) + '&db_tables_prefix=' + (db_tables_prefix == null ? '' : encodeURIComponent(db_tables_prefix)) + '&3dcartapi_api_key=' + (3dcartapi_api_key == null ? '' : encodeURIComponent(3dcartapi_api_key)) + '&amazon_access_token=' + (amazon_access_token == null ? '' : encodeURIComponent(amazon_access_token)) + '&amazon_seller_id=' + (amazon_seller_id == null ? '' : encodeURIComponent(amazon_seller_id)) + '&amazon_marketplaces_ids=' + (amazon_marketplaces_ids == null ? '' : encodeURIComponent(amazon_marketplaces_ids)) + '&amazon_secret_key=' + (amazon_secret_key == null ? '' : encodeURIComponent(amazon_secret_key)) + '&amazon_access_key_id=' + (amazon_access_key_id == null ? '' : encodeURIComponent(amazon_access_key_id)) + '&aspdotnetstorefront_api_user=' + (aspdotnetstorefront_api_user == null ? '' : encodeURIComponent(aspdotnetstorefront_api_user)) + '&aspdotnetstorefront_api_pass=' + (aspdotnetstorefront_api_pass == null ? '' : encodeURIComponent(aspdotnetstorefront_api_pass)) + '&bigcommerceapi_admin_account=' + (bigcommerceapi_admin_account == null ? '' : encodeURIComponent(bigcommerceapi_admin_account)) + '&bigcommerceapi_api_path=' + (bigcommerceapi_api_path == null ? '' : encodeURIComponent(bigcommerceapi_api_path)) + '&bigcommerceapi_api_key=' + (bigcommerceapi_api_key == null ? '' : encodeURIComponent(bigcommerceapi_api_key)) + '&bigcommerceapi_client_id=' + (bigcommerceapi_client_id == null ? '' : encodeURIComponent(bigcommerceapi_client_id)) + '&bigcommerceapi_access_token=' + (bigcommerceapi_access_token == null ? '' : encodeURIComponent(bigcommerceapi_access_token)) + '&bigcommerceapi_context=' + (bigcommerceapi_context == null ? '' : encodeURIComponent(bigcommerceapi_context)) + '&demandware_client_id=' + (demandware_client_id == null ? '' : encodeURIComponent(demandware_client_id)) + '&demandware_api_password=' + (demandware_api_password == null ? '' : encodeURIComponent(demandware_api_password)) + '&demandware_user_name=' + (demandware_user_name == null ? '' : encodeURIComponent(demandware_user_name)) + '&demandware_user_password=' + (demandware_user_password == null ? '' : encodeURIComponent(demandware_user_password)) + '&demandware_env_type=' + (demandware_env_type == null ? '' : encodeURIComponent(demandware_env_type)) + '&ebay_client_id=' + (ebay_client_id == null ? '' : encodeURIComponent(ebay_client_id)) + '&ebay_client_secret=' + (ebay_client_secret == null ? '' : encodeURIComponent(ebay_client_secret)) + '&ebay_runame=' + (ebay_runame == null ? '' : encodeURIComponent(ebay_runame)) + '&ebay_access_token=' + (ebay_access_token == null ? '' : encodeURIComponent(ebay_access_token)) + '&ebay_refresh_token=' + (ebay_refresh_token == null ? '' : encodeURIComponent(ebay_refresh_token)) + '&ebay_environment=' + (ebay_environment == null ? '' : encodeURIComponent(ebay_environment)) + '&ebay_site_id=' + ebay_site_id + '&ecwid_acess_token=' + (ecwid_acess_token == null ? '' : encodeURIComponent(ecwid_acess_token)) + '&ecwid_store_id=' + (ecwid_store_id == null ? '' : encodeURIComponent(ecwid_store_id)) + '&etsy_keystring=' + (etsy_keystring == null ? '' : encodeURIComponent(etsy_keystring)) + '&etsy_shared_secret=' + (etsy_shared_secret == null ? '' : encodeURIComponent(etsy_shared_secret)) + '&etsy_access_token=' + (etsy_access_token == null ? '' : encodeURIComponent(etsy_access_token)) + '&etsy_token_secret=' + (etsy_token_secret == null ? '' : encodeURIComponent(etsy_token_secret)) + '&neto_api_key=' + (neto_api_key == null ? '' : encodeURIComponent(neto_api_key)) + '&neto_api_username=' + (neto_api_username == null ? '' : encodeURIComponent(neto_api_username)) + '&shopify_api_key=' + (shopify_api_key == null ? '' : encodeURIComponent(shopify_api_key)) + '&shopify_api_password=' + (shopify_api_password == null ? '' : encodeURIComponent(shopify_api_password)) + '&shopify_shared_secret=' + (shopify_shared_secret == null ? '' : encodeURIComponent(shopify_shared_secret)) + '&shopify_access_token=' + (shopify_access_token == null ? '' : encodeURIComponent(shopify_access_token)) + '&volusion_login=' + (volusion_login == null ? '' : encodeURIComponent(volusion_login)) + '&volusion_password=' + (volusion_password == null ? '' : encodeURIComponent(volusion_password)) + '&walmart_client_id=' + (walmart_client_id == null ? '' : encodeURIComponent(walmart_client_id)) + '&walmart_client_secret=' + (walmart_client_secret == null ? '' : encodeURIComponent(walmart_client_secret)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * List webhooks that was not delivered to the callback.
		 * Get account.failed_webhooks.json
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {string} ids List of сomma-separated webhook ids
		 * @return {string} successful operation
		 */
		AccountFailedWebhooks(count: number, start: number, ids: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'account.failed_webhooks.json?count=' + count + '&start=' + start + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get list of supported platforms
		 * Get account.supported_platforms.json
		 * @return {string} successful operation
		 */
		AccountSupportedPlatforms(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'account.supported_platforms.json', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add new attribute
		 * Post attribute.add.json
		 * @param {string} type Defines attribute's type
		 * @param {string} code Entity code
		 * @param {string} name Defines attributes's name
		 * @param {string} store_id Store Id
		 * @param {string} lang_id Language id
		 * @param {boolean} visible Set visibility status
		 * @param {boolean} required Defines if the option is required
		 * @param {number} position Attribute`s position
		 * @param {string} is_global Attribute saving scope
		 * @param {boolean} is_searchable Use attribute in Quick Search
		 * @param {string} is_filterable Use In Layered Navigation
		 * @param {boolean} is_comparable Comparable on Front-end
		 * @param {boolean} is_html_allowed_on_front Allow HTML Tags on Frontend
		 * @param {boolean} is_filterable_in_search Use In Search Results Layered Navigation
		 * @param {boolean} is_configurable Use To Create Configurable Product
		 * @param {boolean} is_visible_in_advanced_search Use in Advanced Search
		 * @param {boolean} is_used_for_promo_rules Use for Promo Rule Conditions
		 * @param {boolean} used_in_product_listing Used in Product Listing
		 * @param {boolean} used_for_sort_by Used for Sorting in Product Listing
		 * @param {string} apply_to Types of products which can have this attribute
		 * @return {string} successful operation
		 */
		AttributeAdd(type: string, code: string, name: string, store_id: string, lang_id: string, visible: boolean, required: boolean, position: number, is_global: string, is_searchable: boolean, is_filterable: string, is_comparable: boolean, is_html_allowed_on_front: boolean, is_filterable_in_search: boolean, is_configurable: boolean, is_visible_in_advanced_search: boolean, is_used_for_promo_rules: boolean, used_in_product_listing: boolean, used_for_sort_by: boolean, apply_to: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'attribute.add.json?type=' + (type == null ? '' : encodeURIComponent(type)) + '&code=' + (code == null ? '' : encodeURIComponent(code)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&visible=' + visible + '&required=' + required + '&position=' + position + '&is_global=' + (is_global == null ? '' : encodeURIComponent(is_global)) + '&is_searchable=' + is_searchable + '&is_filterable=' + (is_filterable == null ? '' : encodeURIComponent(is_filterable)) + '&is_comparable=' + is_comparable + '&is_html_allowed_on_front=' + is_html_allowed_on_front + '&is_filterable_in_search=' + is_filterable_in_search + '&is_configurable=' + is_configurable + '&is_visible_in_advanced_search=' + is_visible_in_advanced_search + '&is_used_for_promo_rules=' + is_used_for_promo_rules + '&used_in_product_listing=' + used_in_product_listing + '&used_for_sort_by=' + used_for_sort_by + '&apply_to=' + (apply_to == null ? '' : encodeURIComponent(apply_to)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Assign attribute to the group
		 * Post attribute.assign.group.json
		 * @param {string} id Entity id
		 * @param {number} group_id Attribute group_id
		 * @param {string} attribute_set_id Attribute set id
		 * @return {string} successful operation
		 */
		AttributeAssignGroup(id: string, group_id: number, attribute_set_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'attribute.assign.group.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&group_id=' + group_id + '&attribute_set_id=' + (attribute_set_id == null ? '' : encodeURIComponent(attribute_set_id)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Assign attribute to the attribute set
		 * Post attribute.assign.set.json
		 * @param {string} id Entity id
		 * @param {number} group_id Attribute group_id
		 * @param {string} attribute_set_id Attribute set id
		 * @return {string} successful operation
		 */
		AttributeAssignSet(id: string, group_id: number, attribute_set_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'attribute.assign.set.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&group_id=' + group_id + '&attribute_set_id=' + (attribute_set_id == null ? '' : encodeURIComponent(attribute_set_id)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get attribute_set list
		 * Get attribute.attributeset.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @return {string} successful operation
		 */
		AttributeAttributesetList(start: number, count: number, params: string, exclude: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'attribute.attributeset.list.json?start=' + start + '&count=' + count + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get attributes count
		 * Get attribute.count.json
		 * @param {string} type Defines attribute's type
		 * @param {string} store_id Store Id
		 * @param {string} lang_id Language id
		 * @param {boolean} visible Filter items by visibility status
		 * @param {boolean} required Defines if the option is required
		 * @param {boolean} system True if attribute is system
		 * @return {string} successful operation
		 */
		AttributeCount(type: string, store_id: string, lang_id: string, visible: boolean, required: boolean, system: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'attribute.count.json?type=' + (type == null ? '' : encodeURIComponent(type)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&visible=' + visible + '&required=' + required + '&system=' + system, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Delete attribute from store
		 * Delete attribute.delete.json
		 * @param {string} store_id Store Id
		 * @param {string} id Entity id
		 * @return {string} successful operation
		 */
		AttributeDelete(store_id: string, id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'attribute.delete.json?store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&id=' + (id == null ? '' : encodeURIComponent(id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get attribute group list
		 * Get attribute.group.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} attribute_set_id Attribute set id
		 * @return {string} successful operation
		 */
		AttributeGroupList(start: number, count: number, params: string, exclude: string, attribute_set_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'attribute.group.list.json?start=' + start + '&count=' + count + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&attribute_set_id=' + (attribute_set_id == null ? '' : encodeURIComponent(attribute_set_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get attribute info
		 * Get attribute.info.json
		 * @param {string} id Entity id
		 * @param {string} store_id Store Id
		 * @param {string} lang_id Language id
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @return {string} successful operation
		 */
		AttributeInfo(id: string, store_id: string, lang_id: string, params: string, exclude: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'attribute.info.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get attributes list
		 * Get attribute.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} type Defines attribute's type
		 * @param {string} attribute_ids Filter attributes by ids
		 * @param {string} store_id Store Id
		 * @param {string} lang_id Retrieves attributes on specified language id
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {boolean} visible Filter items by visibility status
		 * @param {boolean} required Defines if the option is required
		 * @param {boolean} system True if attribute is system
		 * @return {string} successful operation
		 */
		AttributeList(start: number, count: number, type: string, attribute_ids: string, store_id: string, lang_id: string, params: string, exclude: string, visible: boolean, required: boolean, system: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'attribute.list.json?start=' + start + '&count=' + count + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&attribute_ids=' + (attribute_ids == null ? '' : encodeURIComponent(attribute_ids)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&visible=' + visible + '&required=' + required + '&system=' + system, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get list of supported attributes types
		 * Get attribute.type.list.json
		 * @return {string} successful operation
		 */
		AttributeTypeList(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'attribute.type.list.json', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Unassign attribute from group
		 * Post attribute.unassign.group.json
		 * @param {string} id Entity id
		 * @param {number} group_id Customer group_id
		 * @return {string} successful operation
		 */
		AttributeUnassignGroup(id: string, group_id: number, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'attribute.unassign.group.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&group_id=' + group_id, null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Unassign attribute from attribute set
		 * Post attribute.unassign.set.json
		 * @param {string} id Entity id
		 * @param {string} attribute_set_id Attribute set id
		 * @return {string} successful operation
		 */
		AttributeUnassignSet(id: string, attribute_set_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'attribute.unassign.set.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&attribute_set_id=' + (attribute_set_id == null ? '' : encodeURIComponent(attribute_set_id)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieve basket information.
		 * Get basket.info.json
		 * @param {string} id Entity id
		 * @param {string} store_id Store Id
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @return {string} successful operation
		 */
		BasketInfo(id: string, store_id: string, params: string, exclude: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'basket.info.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add item to basket
		 * Post basket.item.add.json
		 * @param {string} customer_id Retrieves orders specified by customer id
		 * @param {string} product_id Defines id of the product which should be added to the basket
		 * @param {string} variant_id Defines product's variants specified by variant id
		 * @param {number} quantity Defines new items quantity
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		BasketItemAdd(customer_id: string, product_id: string, variant_id: string, quantity: number, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'basket.item.add.json?customer_id=' + (customer_id == null ? '' : encodeURIComponent(customer_id)) + '&product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&variant_id=' + (variant_id == null ? '' : encodeURIComponent(variant_id)) + '&quantity=' + quantity + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Create live shipping rate service. (Beta)
		 * Post basket.live_shipping_service.create.json
		 * @param {string} store_id Store Id
		 * @param {string} name Shipping Service Name
		 * @param {string} callback Callback url that returns shipping rates. It should be able to accept POST requests with json data.
		 * @return {string} successful operation
		 */
		BasketLiveShippingServiceCreate(store_id: string, name: string, callback: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'basket.live_shipping_service.create.json?store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Delete live shipping rate service. (Beta)
		 * Delete basket.live_shipping_service.delete.json
		 * @param {number} id Entity id
		 * @return {string} successful operation
		 */
		BasketLiveShippingServiceDelete(id: number, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'basket.live_shipping_service.delete.json?id=' + id, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieve a list of live shipping rate services. (Beta)
		 * Get basket.live_shipping_service.list.json
		 * @param {string} store_id Store Id
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @return {string} successful operation
		 */
		BasketLiveShippingServiceList(store_id: string, start: number, count: number, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'basket.live_shipping_service.list.json?store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&start=' + start + '&count=' + count, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Delete bridge from the store.
		 * Post bridge.delete.json
		 * @return {string} successful operation
		 */
		BridgeDelete(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'bridge.delete.json', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Download bridge for store
		 * Get bridge.download.file
		 * @param {boolean} whitelabel Identifies if there is a necessity to download whitelabel bridge.
		 * @return {void} successful operation
		 */
		BridgeDownload(whitelabel: boolean, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'bridge.download.file?whitelabel=' + whitelabel, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Update bridge in the store.
		 * Post bridge.update.json
		 * @return {string} successful operation
		 */
		BridgeUpdate(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'bridge.update.json', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get bridge key and store key
		 * Get cart.bridge.json
		 * @return {string} successful operation
		 */
		CartBridge(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.bridge.json', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Clear cache on store.
		 * Post cart.clear_cache.json
		 * @param {string} cache_type Defines which cache should be cleared.
		 * @return {string} successful operation
		 */
		CartClearCache(cache_type: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'cart.clear_cache.json?cache_type=' + (cache_type == null ? '' : encodeURIComponent(cache_type)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get list of cart configs
		 * Get cart.config.json
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @return {string} successful operation
		 */
		CartConfig(params: string, exclude: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.config.json?params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Use this API method to update custom data in client database.
		 * Put cart.config.update.json
		 * @return {string} successful operation
		 */
		CartConfigUpdate(callback: (data : string) => any, requestBody: CartConfigUpdate, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'cart.config.update.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Create new coupon
		 * Post cart.coupon.add.json
		 * @return {string} successful operation
		 */
		CartCouponAdd(callback: (data : string) => any, requestBody: CartCouponAdd, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'cart.coupon.add.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Create new coupon condition
		 * Post cart.coupon.condition.add.json
		 * @param {string} store_id Store Id
		 * @param {string} coupon_id Coupon Id
		 * @param {string} target Defines condition operator
		 * @param {string} entity Defines condition entity type
		 * @param {string} key Defines condition entity attribute key
		 * @param {string} operator Defines condition operator
		 * @param {string} value Defines condition value, can be comma separated according to the operator.
		 * @return {string} successful operation
		 */
		CartCouponConditionAdd(store_id: string, coupon_id: string, target: string, entity: string, key: string, operator: string, value: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'cart.coupon.condition.add.json?store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&coupon_id=' + (coupon_id == null ? '' : encodeURIComponent(coupon_id)) + '&target=' + (target == null ? '' : encodeURIComponent(target)) + '&entity=' + (entity == null ? '' : encodeURIComponent(entity)) + '&key=' + (key == null ? '' : encodeURIComponent(key)) + '&operator=' + (operator == null ? '' : encodeURIComponent(operator)) + '&value=' + (value == null ? '' : encodeURIComponent(value)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get cart coupons count.
		 * Get cart.coupon.count.json
		 * @param {string} store_id Store Id
		 * @param {string} date_start_from Filter entity by date_start (greater or equal)
		 * @param {string} date_start_to Filter entity by date_start (less or equal)
		 * @param {string} date_end_from Filter entity by date_end (greater or equal)
		 * @param {string} date_end_to Filter entity by date_end (less or equal)
		 * @param {boolean} avail Defines category's visibility status
		 * @return {string} successful operation
		 */
		CartCouponCount(store_id: string, date_start_from: string, date_start_to: string, date_end_from: string, date_end_to: string, avail: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.coupon.count.json?store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&date_start_from=' + (date_start_from == null ? '' : encodeURIComponent(date_start_from)) + '&date_start_to=' + (date_start_to == null ? '' : encodeURIComponent(date_start_to)) + '&date_end_from=' + (date_end_from == null ? '' : encodeURIComponent(date_end_from)) + '&date_end_to=' + (date_end_to == null ? '' : encodeURIComponent(date_end_to)) + '&avail=' + avail, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Delete coupon
		 * Delete cart.coupon.delete.json
		 * @param {string} id Entity id
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		CartCouponDelete(id: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'cart.coupon.delete.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get cart coupon discounts.
		 * Get cart.coupon.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} coupons_ids Filter coupons by ids
		 * @param {string} store_id Filter coupons by store id
		 * @param {string} date_start_from Filter entity by date_start (greater or equal)
		 * @param {string} date_start_to Filter entity by date_start (less or equal)
		 * @param {string} date_end_from Filter entity by date_end (greater or equal)
		 * @param {string} date_end_to Filter entity by date_end (less or equal)
		 * @param {boolean} avail Filter coupons by avail status
		 * @param {string} lang_id Language id
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @return {string} successful operation
		 */
		CartCouponList(start: number, count: number, coupons_ids: string, store_id: string, date_start_from: string, date_start_to: string, date_end_from: string, date_end_to: string, avail: boolean, lang_id: string, params: string, exclude: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.coupon.list.json?start=' + start + '&count=' + count + '&coupons_ids=' + (coupons_ids == null ? '' : encodeURIComponent(coupons_ids)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&date_start_from=' + (date_start_from == null ? '' : encodeURIComponent(date_start_from)) + '&date_start_to=' + (date_start_to == null ? '' : encodeURIComponent(date_start_to)) + '&date_end_from=' + (date_end_from == null ? '' : encodeURIComponent(date_end_from)) + '&date_end_to=' + (date_end_to == null ? '' : encodeURIComponent(date_end_to)) + '&avail=' + avail + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add store to the account
		 * Post cart.create.json
		 * @param {string} cart_id Store’s identifier which you can get from cart_list method
		 * @param {string} store_url A web address of a store that you would like to connect to API2Cart
		 * @param {string} bridge_url This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)
		 * @param {string} store_root Absolute path to the store root directory (used with "bridge_url" parameter)
		 * @param {string} store_key Set this parameter if bridge is already uploaded to store
		 * @param {string} shared_secret Shared secret
		 * @param {boolean} validate_version Specify if api2cart should validate cart version
		 * @param {boolean} verify Enables or disables cart's verification
		 * @param {string} db_tables_prefix This parameter is deprecated for this method. Please, use this parameter in method account.config.update
		 * @param {string} ftp_host FTP connection host
		 * @param {string} ftp_user FTP User
		 * @param {string} ftp_password FTP Password
		 * @param {number} ftp_port FTP Port
		 * @param {string} ftp_store_dir FTP Store dir
		 * @param {string} apiKey_3dcart 3DCart API Key
		 * @param {string} AdminAccount It's a BigCommerce account for which API is enabled
		 * @param {string} ApiPath BigCommerce API URL
		 * @param {string} ApiKey Bigcommerce API Key
		 * @param {string} client_id Client ID of the requesting app
		 * @param {string} accessToken Access token authorizing the app to access resources on behalf of a user
		 * @param {string} context API Path section unique to the store
		 * @param {string} access_token Access token authorizing the app to access resources on behalf of a user
		 * @param {string} apiKey_shopify Shopify API Key
		 * @param {string} apiPassword Shopify API Password
		 * @param {string} accessToken_shopify Access token authorizing the app to access resources on behalf of a user
		 * @param {string} apiKey Neto API Key
		 * @param {string} apiUsername Neto User Name
		 * @param {string} EncryptedPassword Volusion API Password
		 * @param {string} Login It's a Volusion account for which API is enabled
		 * @param {string} apiUser_adnsf It's a AspDotNetStorefront account for which API is available
		 * @param {string} apiPass AspDotNetStorefront API Password
		 * @param {string} accessKey_scelite Shopping Cart Elite Access Key
		 * @param {string} apiKey_scelite Shopping Cart Elite API Key
		 * @param {string} apiSecretKey_scelite Shopping Cart Elite API Secret Key
		 * @param {string} privateKey 3DCart Application Private Key
		 * @param {string} appToken 3DCart Token from Application
		 * @param {string} etsy_keystring Etsy keystring
		 * @param {string} etsy_shared_secret Etsy shared secret
		 * @param {string} tokenSecret Secret token authorizing the app to access resources on behalf of a user
		 * @param {string} ebay_client_id Application ID (AppID).
		 * @param {string} ebay_client_secret Shared Secret from eBay application
		 * @param {string} ebay_runame The RuName value that eBay assigns to your application.
		 * @param {string} ebay_access_token Used to authenticate API requests.
		 * @param {string} ebay_refresh_token Used to renew the access token.
		 * @param {string} ebay_environment eBay environment
		 * @param {number} ebay_site_id eBay global ID
		 * @param {string} dw_client_id Demandware client id
		 * @param {string} dw_api_pass Demandware api password
		 * @param {string} demandware_user_name Demandware user name
		 * @param {string} demandware_user_password Demandware user password
		 * @param {string} store_id Store Id
		 * @param {string} seller_id Seller Id
		 * @param {string} amazon_secret_key Amazon Secret Key
		 * @param {string} amazon_access_key_id Amazon Secret Key Id
		 * @param {string} marketplaces_ids Comma separated marketplaces ids
		 * @param {string} hybris_client_id Omni Commerce Connector Client ID
		 * @param {string} hybris_client_secret Omni Commerce Connector Client Secret
		 * @param {string} walmart_client_id Walmart client ID
		 * @param {string} walmart_client_secret Walmart client secret
		 * @return {string} successful operation
		 */
		CartCreate(cart_id: string, store_url: string, bridge_url: string, store_root: string, store_key: string, shared_secret: string, validate_version: boolean, verify: boolean, db_tables_prefix: string, ftp_host: string, ftp_user: string, ftp_password: string, ftp_port: number, ftp_store_dir: string, apiKey_3dcart: string, AdminAccount: string, ApiPath: string, ApiKey: string, client_id: string, accessToken: string, context: string, access_token: string, apiKey_shopify: string, apiPassword: string, accessToken_shopify: string, apiKey: string, apiUsername: string, EncryptedPassword: string, Login: string, apiUser_adnsf: string, apiPass: string, accessKey_scelite: string, apiKey_scelite: string, apiSecretKey_scelite: string, privateKey: string, appToken: string, etsy_keystring: string, etsy_shared_secret: string, tokenSecret: string, ebay_client_id: string, ebay_client_secret: string, ebay_runame: string, ebay_access_token: string, ebay_refresh_token: string, ebay_environment: string, ebay_site_id: number, dw_client_id: string, dw_api_pass: string, demandware_user_name: string, demandware_user_password: string, store_id: string, seller_id: string, amazon_secret_key: string, amazon_access_key_id: string, marketplaces_ids: string, environment: string, hybris_client_id: string, hybris_client_secret: string, walmart_client_id: string, walmart_client_secret: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'cart.create.json?cart_id=' + (cart_id == null ? '' : encodeURIComponent(cart_id)) + '&store_url=' + (store_url == null ? '' : encodeURIComponent(store_url)) + '&bridge_url=' + (bridge_url == null ? '' : encodeURIComponent(bridge_url)) + '&store_root=' + (store_root == null ? '' : encodeURIComponent(store_root)) + '&store_key=' + (store_key == null ? '' : encodeURIComponent(store_key)) + '&shared_secret=' + (shared_secret == null ? '' : encodeURIComponent(shared_secret)) + '&validate_version=' + validate_version + '&verify=' + verify + '&db_tables_prefix=' + (db_tables_prefix == null ? '' : encodeURIComponent(db_tables_prefix)) + '&ftp_host=' + (ftp_host == null ? '' : encodeURIComponent(ftp_host)) + '&ftp_user=' + (ftp_user == null ? '' : encodeURIComponent(ftp_user)) + '&ftp_password=' + (ftp_password == null ? '' : encodeURIComponent(ftp_password)) + '&ftp_port=' + ftp_port + '&ftp_store_dir=' + (ftp_store_dir == null ? '' : encodeURIComponent(ftp_store_dir)) + '&apiKey_3dcart=' + (apiKey_3dcart == null ? '' : encodeURIComponent(apiKey_3dcart)) + '&AdminAccount=' + (AdminAccount == null ? '' : encodeURIComponent(AdminAccount)) + '&ApiPath=' + (ApiPath == null ? '' : encodeURIComponent(ApiPath)) + '&ApiKey=' + (ApiKey == null ? '' : encodeURIComponent(ApiKey)) + '&client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&accessToken=' + (accessToken == null ? '' : encodeURIComponent(accessToken)) + '&context=' + (context == null ? '' : encodeURIComponent(context)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)) + '&apiKey_shopify=' + (apiKey_shopify == null ? '' : encodeURIComponent(apiKey_shopify)) + '&apiPassword=' + (apiPassword == null ? '' : encodeURIComponent(apiPassword)) + '&accessToken_shopify=' + (accessToken_shopify == null ? '' : encodeURIComponent(accessToken_shopify)) + '&apiKey=' + (apiKey == null ? '' : encodeURIComponent(apiKey)) + '&apiUsername=' + (apiUsername == null ? '' : encodeURIComponent(apiUsername)) + '&EncryptedPassword=' + (EncryptedPassword == null ? '' : encodeURIComponent(EncryptedPassword)) + '&Login=' + (Login == null ? '' : encodeURIComponent(Login)) + '&apiUser_adnsf=' + (apiUser_adnsf == null ? '' : encodeURIComponent(apiUser_adnsf)) + '&apiPass=' + (apiPass == null ? '' : encodeURIComponent(apiPass)) + '&accessKey_scelite=' + (accessKey_scelite == null ? '' : encodeURIComponent(accessKey_scelite)) + '&apiKey_scelite=' + (apiKey_scelite == null ? '' : encodeURIComponent(apiKey_scelite)) + '&apiSecretKey_scelite=' + (apiSecretKey_scelite == null ? '' : encodeURIComponent(apiSecretKey_scelite)) + '&privateKey=' + (privateKey == null ? '' : encodeURIComponent(privateKey)) + '&appToken=' + (appToken == null ? '' : encodeURIComponent(appToken)) + '&etsy_keystring=' + (etsy_keystring == null ? '' : encodeURIComponent(etsy_keystring)) + '&etsy_shared_secret=' + (etsy_shared_secret == null ? '' : encodeURIComponent(etsy_shared_secret)) + '&tokenSecret=' + (tokenSecret == null ? '' : encodeURIComponent(tokenSecret)) + '&ebay_client_id=' + (ebay_client_id == null ? '' : encodeURIComponent(ebay_client_id)) + '&ebay_client_secret=' + (ebay_client_secret == null ? '' : encodeURIComponent(ebay_client_secret)) + '&ebay_runame=' + (ebay_runame == null ? '' : encodeURIComponent(ebay_runame)) + '&ebay_access_token=' + (ebay_access_token == null ? '' : encodeURIComponent(ebay_access_token)) + '&ebay_refresh_token=' + (ebay_refresh_token == null ? '' : encodeURIComponent(ebay_refresh_token)) + '&ebay_environment=' + (ebay_environment == null ? '' : encodeURIComponent(ebay_environment)) + '&ebay_site_id=' + ebay_site_id + '&dw_client_id=' + (dw_client_id == null ? '' : encodeURIComponent(dw_client_id)) + '&dw_api_pass=' + (dw_api_pass == null ? '' : encodeURIComponent(dw_api_pass)) + '&demandware_user_name=' + (demandware_user_name == null ? '' : encodeURIComponent(demandware_user_name)) + '&demandware_user_password=' + (demandware_user_password == null ? '' : encodeURIComponent(demandware_user_password)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&seller_id=' + (seller_id == null ? '' : encodeURIComponent(seller_id)) + '&amazon_secret_key=' + (amazon_secret_key == null ? '' : encodeURIComponent(amazon_secret_key)) + '&amazon_access_key_id=' + (amazon_access_key_id == null ? '' : encodeURIComponent(amazon_access_key_id)) + '&marketplaces_ids=' + (marketplaces_ids == null ? '' : encodeURIComponent(marketplaces_ids)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)) + '&hybris_client_id=' + (hybris_client_id == null ? '' : encodeURIComponent(hybris_client_id)) + '&hybris_client_secret=' + (hybris_client_secret == null ? '' : encodeURIComponent(hybris_client_secret)) + '&walmart_client_id=' + (walmart_client_id == null ? '' : encodeURIComponent(walmart_client_id)) + '&walmart_client_secret=' + (walmart_client_secret == null ? '' : encodeURIComponent(walmart_client_secret)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Remove store from API2Cart
		 * Delete cart.delete.json
		 * @return {string} successful operation
		 */
		CartDelete(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'cart.delete.json', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Disconnect with the store and clear store session data.
		 * Get cart.disconnect.json
		 * @param {boolean} delete_bridge Identifies if there is a necessity to delete bridge
		 * @return {string} successful operation
		 */
		CartDisconnect(delete_bridge: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.disconnect.json?delete_bridge=' + delete_bridge, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Create new gift card
		 * Post cart.giftcard.add.json
		 * @param {number} amount Defines the gift card amount value.
		 * @param {string} code Gift card code
		 * @param {string} owner_email Gift card owner email
		 * @return {string} successful operation
		 */
		CartGiftcardAdd(amount: number, code: string, owner_email: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'cart.giftcard.add.json?amount=' + amount + '&code=' + (code == null ? '' : encodeURIComponent(code)) + '&owner_email=' + (owner_email == null ? '' : encodeURIComponent(owner_email)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get gift cards count.
		 * Get cart.giftcard.count.json
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		CartGiftcardCount(store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.giftcard.count.json?store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get gift cards list.
		 * Get cart.giftcard.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} store_id Store Id
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @return {string} successful operation
		 */
		CartGiftcardList(start: number, count: number, store_id: string, params: string, exclude: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.giftcard.list.json?start=' + start + '&count=' + count + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get cart information
		 * Get cart.info.json
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		CartInfo(params: string, exclude: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.info.json?params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get list of supported carts
		 * Get cart.list.json
		 * @return {string} successful operation
		 */
		CartList(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.list.json', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get list of cart methods
		 * Get cart.methods.json
		 * @return {string} successful operation
		 */
		CartMethods(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.methods.json', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get list of installed plugins
		 * Get cart.plugin.list.json
		 * @param {string} store_key Set this parameter if bridge is already uploaded to store
		 * @param {string} store_id Store Id
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @return {string} successful operation
		 */
		CartPluginList(store_key: string, store_id: string, start: number, count: number, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.plugin.list.json?store_key=' + (store_key == null ? '' : encodeURIComponent(store_key)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&start=' + start + '&count=' + count, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add new script to the storefront
		 * Post cart.script.add.json
		 * @param {string} name The user-friendly script name
		 * @param {string} description The user-friendly description
		 * @param {string} html An html string containing exactly one `script` tag.
		 * @param {string} src The URL of the remote script
		 * @param {string} load_method The load method to use for the script
		 * @param {string} scope The page or pages on the online store where the script should be included
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		CartScriptAdd(name: string, description: string, html: string, src: string, load_method: string, scope: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'cart.script.add.json?name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&html=' + (html == null ? '' : encodeURIComponent(html)) + '&src=' + (src == null ? '' : encodeURIComponent(src)) + '&load_method=' + (load_method == null ? '' : encodeURIComponent(load_method)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Remove script from the storefront
		 * Delete cart.script.delete.json
		 * @param {string} id Entity id
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		CartScriptDelete(id: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'cart.script.delete.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get scripts installed to the storefront
		 * Get cart.script.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} modified_from Retrieve entities from their modification date
		 * @param {string} modified_to Retrieve entities to their modification date
		 * @param {string} script_ids Retrieves only scripts with specific ids
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		CartScriptList(start: number, count: number, params: string, exclude: string, created_from: string, created_to: string, modified_from: string, modified_to: string, script_ids: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.script.list.json?start=' + start + '&count=' + count + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&modified_from=' + (modified_from == null ? '' : encodeURIComponent(modified_from)) + '&modified_to=' + (modified_to == null ? '' : encodeURIComponent(modified_to)) + '&script_ids=' + (script_ids == null ? '' : encodeURIComponent(script_ids)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get list of shipping zones
		 * Get cart.shipping_zones.list.json
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		CartShippingZonesList(store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.shipping_zones.list.json?store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Check store availability, bridge connection for the downloadable carts, identify DB prefix, validate API accesses for API carts.
		 * Get cart.validate.json
		 * @param {boolean} validate_version Specify if api2cart should validate cart version
		 * @return {string} successful operation
		 */
		CartValidate(validate_version: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'cart.validate.json?validate_version=' + validate_version, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add new category in store
		 * Post category.add.json
		 * @param {string} name Defines category's name that has to be added
		 * @param {string} parent_id Adds categories specified by parent id
		 * @param {string} stores_ids Create category in the stores that is specified by comma-separated stores' id
		 * @param {string} store_id Store Id
		 * @param {boolean} avail Defines category's visibility status
		 * @param {number} sort_order Sort number in the list
		 * @param {string} created_time Entity's date creation
		 * @param {string} modified_time Entity's date modification
		 * @param {string} description Defines category's description
		 * @param {string} meta_title Defines unique meta title for each entity
		 * @param {string} meta_description Defines unique meta description of a entity
		 * @param {string} meta_keywords Defines unique meta keywords for each entity
		 * @param {string} seo_url Defines unique category's URL for SEO
		 * @return {string} successful operation
		 */
		CategoryAdd(name: string, parent_id: string, stores_ids: string, store_id: string, avail: boolean, sort_order: number, created_time: string, modified_time: string, description: string, meta_title: string, meta_description: string, meta_keywords: string, seo_url: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'category.add.json?name=' + (name == null ? '' : encodeURIComponent(name)) + '&parent_id=' + (parent_id == null ? '' : encodeURIComponent(parent_id)) + '&stores_ids=' + (stores_ids == null ? '' : encodeURIComponent(stores_ids)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&avail=' + avail + '&sort_order=' + sort_order + '&created_time=' + (created_time == null ? '' : encodeURIComponent(created_time)) + '&modified_time=' + (modified_time == null ? '' : encodeURIComponent(modified_time)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&meta_title=' + (meta_title == null ? '' : encodeURIComponent(meta_title)) + '&meta_description=' + (meta_description == null ? '' : encodeURIComponent(meta_description)) + '&meta_keywords=' + (meta_keywords == null ? '' : encodeURIComponent(meta_keywords)) + '&seo_url=' + (seo_url == null ? '' : encodeURIComponent(seo_url)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Assign category to product
		 * Post category.assign.json
		 * @param {string} product_id Defines category assign to the product, specified by product id
		 * @param {string} category_id Defines category assign, specified by category id
		 * @return {string} successful operation
		 */
		CategoryAssign(product_id: string, category_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'category.assign.json?product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&category_id=' + (category_id == null ? '' : encodeURIComponent(category_id)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Count categories in store.
		 * Get category.count.json
		 * @param {string} parent_id Counts categories specified by parent id
		 * @param {string} store_id Counts category specified by store id
		 * @param {string} lang_id Counts category specified by language id
		 * @return {string} successful operation
		 */
		CategoryCount(parent_id: string, store_id: string, lang_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'category.count.json?parent_id=' + (parent_id == null ? '' : encodeURIComponent(parent_id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Delete category in store
		 * Delete category.delete.json
		 * @param {string} id Defines category removal, specified by category id
		 * @return {string} successful operation
		 */
		CategoryDelete(id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'category.delete.json?id=' + (id == null ? '' : encodeURIComponent(id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Search category in store. "Laptop" is specified here by default.
		 * Get category.find.json
		 * @param {string} find_value Entity search that is specified by some value
		 * @param {string} find_where Entity search that is specified by the comma-separated unique fields
		 * @param {string} find_params Entity search that is specified by comma-separated parameters
		 * @return {string} successful operation
		 */
		CategoryFind(find_value: string, find_where: string, find_params: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'category.find.json?find_value=' + (find_value == null ? '' : encodeURIComponent(find_value)) + '&find_where=' + (find_where == null ? '' : encodeURIComponent(find_where)) + '&find_params=' + (find_params == null ? '' : encodeURIComponent(find_params)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add image to category
		 * Post category.image.add.json
		 * @param {string} category_id Defines category id where the image should be added
		 * @param {string} image_name Defines image's name
		 * @param {string} url Defines URL of the image that has to be added
		 * @param {string} label Defines alternative text that has to be attached to the picture
		 * @param {string} mime Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.
		 * @param {string} type Defines image's types that are specified by comma-separated list
		 * @param {number} position Defines image’s position in the list
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		CategoryImageAdd(category_id: string, image_name: string, url: string, label: string, mime: string, type: string, position: number, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'category.image.add.json?category_id=' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&image_name=' + (image_name == null ? '' : encodeURIComponent(image_name)) + '&url=' + (url == null ? '' : encodeURIComponent(url)) + '&label=' + (label == null ? '' : encodeURIComponent(label)) + '&mime=' + (mime == null ? '' : encodeURIComponent(mime)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&position=' + position + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Delete image
		 * Delete category.image.delete.json
		 * @param {string} category_id Defines category id where the image should be deleted
		 * @param {string} image_id Define image id
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		CategoryImageDelete(category_id: string, image_id: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'category.image.delete.json?category_id=' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&image_id=' + (image_id == null ? '' : encodeURIComponent(image_id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get category info about category ID*** or specify other category ID.
		 * Get category.info.json
		 * @param {string} id Retrieves category's info specified by category id
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} store_id Retrieves category info  specified by store id
		 * @param {string} lang_id Retrieves category info  specified by language id
		 * @return {string} successful operation
		 */
		CategoryInfo(id: string, params: string, exclude: string, store_id: string, lang_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'category.info.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get list of categories from store. Returns 4 categories by default.
		 * Get category.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} parent_id Retrieves categories specified by parent id
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} store_id Retrieves categories specified by store id
		 * @param {string} lang_id Retrieves categorys specified by language id
		 * @return {string} successful operation
		 */
		CategoryList(start: number, count: number, parent_id: string, params: string, exclude: string, store_id: string, lang_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'category.list.json?start=' + start + '&count=' + count + '&parent_id=' + (parent_id == null ? '' : encodeURIComponent(parent_id)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Unassign category to product
		 * Post category.unassign.json
		 * @param {string} category_id Defines category unassign, specified by category id
		 * @param {string} product_id Defines category unassign to the product, specified by product id
		 * @return {string} successful operation
		 */
		CategoryUnassign(category_id: string, product_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'category.unassign.json?category_id=' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update category in store
		 * Put category.update.json
		 * @param {string} id Defines category update specified by category id
		 * @param {string} name Defines new category’s name
		 * @param {string} parent_id Defines new parent category id
		 * @param {string} stores_ids Update category in the stores that is specified by comma-separated stores' id
		 * @param {boolean} avail Defines category's visibility status
		 * @param {number} sort_order Sort number in the list
		 * @param {string} modified_time Entity's date modification
		 * @param {string} description Defines new category's description
		 * @param {string} meta_title Defines unique meta title for each entity
		 * @param {string} meta_description Defines unique meta description of a entity
		 * @param {string} meta_keywords Defines unique meta keywords for each entity
		 * @param {string} seo_url Defines unique category's URL for SEO
		 * @return {string} successful operation
		 */
		CategoryUpdate(id: string, name: string, parent_id: string, stores_ids: string, avail: boolean, sort_order: number, modified_time: string, description: string, meta_title: string, meta_description: string, meta_keywords: string, seo_url: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'category.update.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&parent_id=' + (parent_id == null ? '' : encodeURIComponent(parent_id)) + '&stores_ids=' + (stores_ids == null ? '' : encodeURIComponent(stores_ids)) + '&avail=' + avail + '&sort_order=' + sort_order + '&modified_time=' + (modified_time == null ? '' : encodeURIComponent(modified_time)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&meta_title=' + (meta_title == null ? '' : encodeURIComponent(meta_title)) + '&meta_description=' + (meta_description == null ? '' : encodeURIComponent(meta_description)) + '&meta_keywords=' + (meta_keywords == null ? '' : encodeURIComponent(meta_keywords)) + '&seo_url=' + (seo_url == null ? '' : encodeURIComponent(seo_url)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Add customer into store.
		 * Post customer.add.json
		 * @return {string} successful operation
		 */
		CustomerAdd(callback: (data : string) => any, requestBody: CustomerAdd, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'customer.add.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get number of customers from store.
		 * Get customer.count.json
		 * @param {number} group_id Customer group_id
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} modified_from Retrieve entities from their modification date
		 * @param {string} modified_to Retrieve entities to their modification date
		 * @param {string} store_id Counts customer specified by store id
		 * @param {string} customer_list_id The numeric ID of the customer list in Demandware.
		 * @return {string} successful operation
		 */
		CustomerCount(group_id: number, created_from: string, created_to: string, modified_from: string, modified_to: string, store_id: string, customer_list_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'customer.count.json?group_id=' + group_id + '&created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&modified_from=' + (modified_from == null ? '' : encodeURIComponent(modified_from)) + '&modified_to=' + (modified_to == null ? '' : encodeURIComponent(modified_to)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&customer_list_id=' + (customer_list_id == null ? '' : encodeURIComponent(customer_list_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Find customers in store.
		 * Get customer.find.json
		 * @param {string} find_value Entity search that is specified by some value
		 * @param {string} find_where Entity search that is specified by the comma-separated unique fields
		 * @param {string} find_params Entity search that is specified by comma-separated parameters
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		CustomerFind(find_value: string, find_where: string, find_params: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'customer.find.json?find_value=' + (find_value == null ? '' : encodeURIComponent(find_value)) + '&find_where=' + (find_where == null ? '' : encodeURIComponent(find_where)) + '&find_params=' + (find_params == null ? '' : encodeURIComponent(find_params)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Create customer group.
		 * Post customer.group.add.json
		 * @param {string} name Customer group name
		 * @param {string} store_id Store Id
		 * @param {string} stores_ids Assign customer group to the stores that is specified by comma-separated stores' id
		 * @return {string} successful operation
		 */
		CustomerGroupAdd(name: string, store_id: string, stores_ids: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'customer.group.add.json?name=' + (name == null ? '' : encodeURIComponent(name)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&stores_ids=' + (stores_ids == null ? '' : encodeURIComponent(stores_ids)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get list of customers groups.
		 * Get customer.group.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} store_id Store Id
		 * @param {string} lang_id Language id
		 * @param {string} group_ids Groups that will be assigned to a customer
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @return {string} successful operation
		 */
		CustomerGroupList(start: number, count: number, store_id: string, lang_id: string, group_ids: string, params: string, exclude: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'customer.group.list.json?start=' + start + '&count=' + count + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get customers' details from store.
		 * Get customer.info.json
		 * @param {string} id Retrieves customer's info specified by customer id
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} store_id Retrieves customer info specified by store id
		 * @return {string} successful operation
		 */
		CustomerInfo(id: string, params: string, exclude: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'customer.info.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get list of customers from store.
		 * Get customer.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} modified_from Retrieve entities from their modification date
		 * @param {string} modified_to Retrieve entities to their modification date
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {number} group_id Customer group_id
		 * @param {string} store_id Retrieves customers specified by store id
		 * @param {string} customer_list_id The numeric ID of the customer list in Demandware.
		 * @return {string} successful operation
		 */
		CustomerList(start: number, count: number, created_from: string, created_to: string, modified_from: string, modified_to: string, params: string, exclude: string, group_id: number, store_id: string, customer_list_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'customer.list.json?start=' + start + '&count=' + count + '&created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&modified_from=' + (modified_from == null ? '' : encodeURIComponent(modified_from)) + '&modified_to=' + (modified_to == null ? '' : encodeURIComponent(modified_to)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&group_id=' + group_id + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&customer_list_id=' + (customer_list_id == null ? '' : encodeURIComponent(customer_list_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get list of orders that were left by customers before completing the order.
		 * Get order.abandoned.list.json
		 * @param {string} store_id Store Id
		 * @param {string} customer_id Retrieves orders specified by customer id
		 * @param {string} customer_email Retrieves orders specified by customer email
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} modified_to Retrieve entities to their modification date
		 * @param {string} modified_from Retrieve entities from their modification date
		 * @param {boolean} skip_empty_email Filter empty emails
		 * @return {string} successful operation
		 */
		OrderAbandonedList(store_id: string, customer_id: string, customer_email: string, start: number, count: number, params: string, exclude: string, created_to: string, created_from: string, modified_to: string, modified_from: string, skip_empty_email: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'order.abandoned.list.json?store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&customer_id=' + (customer_id == null ? '' : encodeURIComponent(customer_id)) + '&customer_email=' + (customer_email == null ? '' : encodeURIComponent(customer_email)) + '&start=' + start + '&count=' + count + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&modified_to=' + (modified_to == null ? '' : encodeURIComponent(modified_to)) + '&modified_from=' + (modified_from == null ? '' : encodeURIComponent(modified_from)) + '&skip_empty_email=' + skip_empty_email, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add a new order to the cart.
		 * Post order.add.json
		 * @return {string} successful operation
		 */
		OrderAdd(callback: (data : string) => any, requestBody: OrderAdd, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'order.add.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Count orders in store
		 * Get order.count.json
		 * @param {string} customer_id Counts orders quantity specified by customer id
		 * @param {string} customer_email Counts orders quantity specified by customer email
		 * @param {string} order_status Counts orders quantity specified by order status
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} modified_to Retrieve entities to their modification date
		 * @param {string} modified_from Retrieve entities from their modification date
		 * @param {string} store_id Counts orders quantity specified by store id
		 * @param {string} ids Counts orders specified by ids
		 * @param {string} order_ids Counts orders specified by order ids
		 * @param {string} ebay_order_status Counts orders quantity specified by order status
		 * @param {string} financial_status Counts orders quantity specified by financial status
		 * @param {string} fulfillment_status Create order with fulfillment status
		 * @param {string} shipping_method Retrieve entities according to shipping method
		 * @return {string} successful operation
		 */
		OrderCount(customer_id: string, customer_email: string, order_status: string, created_to: string, created_from: string, modified_to: string, modified_from: string, store_id: string, ids: string, order_ids: string, ebay_order_status: string, financial_status: string, fulfillment_status: string, shipping_method: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'order.count.json?customer_id=' + (customer_id == null ? '' : encodeURIComponent(customer_id)) + '&customer_email=' + (customer_email == null ? '' : encodeURIComponent(customer_email)) + '&order_status=' + (order_status == null ? '' : encodeURIComponent(order_status)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&modified_to=' + (modified_to == null ? '' : encodeURIComponent(modified_to)) + '&modified_from=' + (modified_from == null ? '' : encodeURIComponent(modified_from)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&order_ids=' + (order_ids == null ? '' : encodeURIComponent(order_ids)) + '&ebay_order_status=' + (ebay_order_status == null ? '' : encodeURIComponent(ebay_order_status)) + '&financial_status=' + (financial_status == null ? '' : encodeURIComponent(financial_status)) + '&fulfillment_status=' + (fulfillment_status == null ? '' : encodeURIComponent(fulfillment_status)) + '&shipping_method=' + (shipping_method == null ? '' : encodeURIComponent(shipping_method)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieve list of financial statuses
		 * Get order.financial_status.list.json
		 * @return {string} successful operation
		 */
		OrderFinancialStatusList(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'order.financial_status.list.json', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Find orders
		 * Get order.find.json
		 * @param {string} customer_id Retrieves orders specified by customer id
		 * @param {string} customer_email Retrieves orders specified by customer email
		 * @param {string} order_status Retrieves orders specified by order status
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} modified_to Retrieve entities to their modification date
		 * @param {string} modified_from Retrieve entities from their modification date
		 * @param {string} financial_status Retrieves orders specified by financial status
		 * @return {string} successful operation
		 */
		OrderFind(customer_id: string, customer_email: string, order_status: string, start: number, count: number, params: string, exclude: string, created_to: string, created_from: string, modified_to: string, modified_from: string, financial_status: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'order.find.json?customer_id=' + (customer_id == null ? '' : encodeURIComponent(customer_id)) + '&customer_email=' + (customer_email == null ? '' : encodeURIComponent(customer_email)) + '&order_status=' + (order_status == null ? '' : encodeURIComponent(order_status)) + '&start=' + start + '&count=' + count + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&modified_to=' + (modified_to == null ? '' : encodeURIComponent(modified_to)) + '&modified_from=' + (modified_from == null ? '' : encodeURIComponent(modified_from)) + '&financial_status=' + (financial_status == null ? '' : encodeURIComponent(financial_status)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Info about a specific order by ID
		 * Get order.info.json
		 * @param {string} order_id Retrieves order’s info specified by order id
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} store_id Defines store id where the order should be found
		 * @return {string} successful operation
		 */
		OrderInfo(order_id: string, params: string, exclude: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'order.info.json?order_id=' + (order_id == null ? '' : encodeURIComponent(order_id)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get list of orders from store. Returns 4 orders by default.
		 * Get order.list.json
		 * @param {string} customer_id Retrieves orders specified by customer id
		 * @param {string} customer_email Retrieves orders specified by customer email
		 * @param {string} order_status Retrieves orders specified by order status
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} page_cursor Used to retrieve orders via cursor-based pagination (it can't be used with any other filtering parameter)
		 * @param {string} sort_by Set field to sort by
		 * @param {string} sort_direction Set sorting direction
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} modified_to Retrieve entities to their modification date
		 * @param {string} modified_from Retrieve entities from their modification date
		 * @param {string} store_id Store Id
		 * @param {string} ids Retrieves orders specified by ids
		 * @param {string} order_ids Retrieves orders specified by order ids
		 * @param {string} ebay_order_status Retrieves orders specified by order status
		 * @param {string} basket_id Retrieves order’s info specified by basket id.
		 * @param {string} financial_status Retrieves orders specified by financial status
		 * @param {string} fulfillment_status Create order with fulfillment status
		 * @param {string} shipping_method Retrieve entities according to shipping method
		 * @param {string} skip_order_ids Skipped orders by ids
		 * @param {number} since_id Retrieve entities starting from the specified id.
		 * @param {boolean} is_deleted Filter deleted orders
		 * @return {string} successful operation
		 */
		OrderList(customer_id: string, customer_email: string, order_status: string, start: number, count: number, page_cursor: string, sort_by: string, sort_direction: string, params: string, exclude: string, created_to: string, created_from: string, modified_to: string, modified_from: string, store_id: string, ids: string, order_ids: string, ebay_order_status: string, basket_id: string, financial_status: string, fulfillment_status: string, shipping_method: string, skip_order_ids: string, since_id: number, is_deleted: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'order.list.json?customer_id=' + (customer_id == null ? '' : encodeURIComponent(customer_id)) + '&customer_email=' + (customer_email == null ? '' : encodeURIComponent(customer_email)) + '&order_status=' + (order_status == null ? '' : encodeURIComponent(order_status)) + '&start=' + start + '&count=' + count + '&page_cursor=' + (page_cursor == null ? '' : encodeURIComponent(page_cursor)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&modified_to=' + (modified_to == null ? '' : encodeURIComponent(modified_to)) + '&modified_from=' + (modified_from == null ? '' : encodeURIComponent(modified_from)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&order_ids=' + (order_ids == null ? '' : encodeURIComponent(order_ids)) + '&ebay_order_status=' + (ebay_order_status == null ? '' : encodeURIComponent(ebay_order_status)) + '&basket_id=' + (basket_id == null ? '' : encodeURIComponent(basket_id)) + '&financial_status=' + (financial_status == null ? '' : encodeURIComponent(financial_status)) + '&fulfillment_status=' + (fulfillment_status == null ? '' : encodeURIComponent(fulfillment_status)) + '&shipping_method=' + (shipping_method == null ? '' : encodeURIComponent(shipping_method)) + '&skip_order_ids=' + (skip_order_ids == null ? '' : encodeURIComponent(skip_order_ids)) + '&since_id=' + since_id + '&is_deleted=' + is_deleted, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add a refund to the order.
		 * Post order.refund.add.json
		 * @return {string} successful operation
		 */
		OrderRefundAdd(callback: (data : string) => any, requestBody: OrderRefundAdd, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'order.refund.add.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Add a shipment to the order.
		 * Post order.shipment.add.json
		 * @return {string} successful operation
		 */
		OrderShipmentAdd(callback: (data : string) => any, requestBody: OrderShipmentAdd, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'order.shipment.add.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get list of shipments by orders.
		 * Get order.shipment.list.json
		 * @param {string} order_id Retrieves shipments specified by order id
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		OrderShipmentList(order_id: string, start: number, count: number, params: string, exclude: string, created_from: string, created_to: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'order.shipment.list.json?order_id=' + (order_id == null ? '' : encodeURIComponent(order_id)) + '&start=' + start + '&count=' + count + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add order shipment's tracking info.
		 * Post order.shipment.tracking.add.json
		 * @return {string} successful operation
		 */
		OrderShipmentTrackingAdd(callback: (data : string) => any, requestBody: OrderShipmentTrackingAdd, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'order.shipment.tracking.add.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update order's shipment information.
		 * Put order.shipment.update.json
		 * @return {string} successful operation
		 */
		OrderShipmentUpdate(callback: (data : string) => any, requestBody: OrderShipmentUpdate, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'order.shipment.update.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieve list of statuses
		 * Get order.status.list.json
		 * @return {string} successful operation
		 */
		OrderStatusList(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'order.status.list.json', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Update existing order.
		 * Put order.update.json
		 * @param {string} order_id Defines the orders specified by order id
		 * @param {string} store_id Defines store id where the order should be found
		 * @param {string} order_status Defines new order's status
		 * @param {string} comment Specifies order comment
		 * @param {string} date_modified Specifies order's  modification date
		 * @param {string} date_finished Specifies order's  finished date
		 * @param {string} financial_status Update order financial status to specified
		 * @param {string} order_payment_method Defines order payment method.<br/>Setting order_payment_method on Shopify will also change financial_status field value to 'paid'
		 * @param {boolean} send_notifications Send notifications to customer after order was created
		 * @return {string} successful operation
		 */
		OrderUpdate(order_id: string, store_id: string, order_status: string, comment: string, date_modified: string, date_finished: string, financial_status: string, order_payment_method: string, send_notifications: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'order.update.json?order_id=' + (order_id == null ? '' : encodeURIComponent(order_id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&order_status=' + (order_status == null ? '' : encodeURIComponent(order_status)) + '&comment=' + (comment == null ? '' : encodeURIComponent(comment)) + '&date_modified=' + (date_modified == null ? '' : encodeURIComponent(date_modified)) + '&date_finished=' + (date_finished == null ? '' : encodeURIComponent(date_finished)) + '&financial_status=' + (financial_status == null ? '' : encodeURIComponent(financial_status)) + '&order_payment_method=' + (order_payment_method == null ? '' : encodeURIComponent(order_payment_method)) + '&send_notifications=' + send_notifications, null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Add new product to store.
		 * Post product.add.json
		 * @return {string} successful operation
		 */
		ProductAdd(callback: (data : string) => any, requestBody: ProductAdd, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.add.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get list of attributes.
		 * Get product.attribute.list.json
		 * @param {string} product_id Retrieves attributes specified by product id
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} sort_by Set field to sort by
		 * @param {string} sort_direction Set sorting direction
		 * @param {string} lang_id Retrieves attributes specified by language id
		 * @param {string} store_id Retrieves attributes specified by store id
		 * @param {string} attribute_id Retrieves info for specified attribute_id
		 * @param {string} attribute_group_id Filter by attribute_group_id
		 * @param {string} set_name Retrieves attributes specified by set_name in Magento
		 * @return {string} successful operation
		 */
		ProductAttributeList(product_id: string, start: number, count: number, params: string, exclude: string, sort_by: string, sort_direction: string, lang_id: string, store_id: string, attribute_id: string, attribute_group_id: string, set_name: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.attribute.list.json?product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&start=' + start + '&count=' + count + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&attribute_id=' + (attribute_id == null ? '' : encodeURIComponent(attribute_id)) + '&attribute_group_id=' + (attribute_group_id == null ? '' : encodeURIComponent(attribute_group_id)) + '&set_name=' + (set_name == null ? '' : encodeURIComponent(set_name)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Set attribute value to product.
		 * Post product.attribute.value.set.json
		 * @param {string} product_id Defines product id where the attribute should be added
		 * @param {string} attribute_id Filter by attribute_id
		 * @param {string} attribute_group_id Filter by attribute_group_id
		 * @param {string} attribute_name Define attribute name
		 * @param {string} value Define attribute value
		 * @param {number} value_id Define attribute value id
		 * @param {string} lang_id Language id
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		ProductAttributeValueSet(product_id: string, attribute_id: string, attribute_group_id: string, attribute_name: string, value: string, value_id: number, lang_id: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.attribute.value.set.json?product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&attribute_id=' + (attribute_id == null ? '' : encodeURIComponent(attribute_id)) + '&attribute_group_id=' + (attribute_group_id == null ? '' : encodeURIComponent(attribute_group_id)) + '&attribute_name=' + (attribute_name == null ? '' : encodeURIComponent(attribute_name)) + '&value=' + (value == null ? '' : encodeURIComponent(value)) + '&value_id=' + value_id + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get list of brands from your store.
		 * Get product.brand.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} brand_ids Retrieves brands specified by brand ids
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} store_id Store Id
		 * @param {string} lang_id Language id
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} modified_from Retrieve entities from their modification date
		 * @param {string} modified_to Retrieve entities to their modification date
		 * @return {string} successful operation
		 */
		ProductBrandList(start: number, count: number, params: string, brand_ids: string, exclude: string, store_id: string, lang_id: string, created_from: string, created_to: string, modified_from: string, modified_to: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.brand.list.json?start=' + start + '&count=' + count + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&brand_ids=' + (brand_ids == null ? '' : encodeURIComponent(brand_ids)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&modified_from=' + (modified_from == null ? '' : encodeURIComponent(modified_from)) + '&modified_to=' + (modified_to == null ? '' : encodeURIComponent(modified_to)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Search product child item (bundled item or configurable product variant) in store catalog.
		 * Get product.child_item.find.json
		 * @param {string} find_value Entity search that is specified by some value
		 * @param {string} find_where Entity search that is specified by the comma-separated unique fields
		 * @param {string} find_params Entity search that is specified by comma-separated parameters
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		ProductChildItemFind(find_value: string, find_where: string, find_params: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.child_item.find.json?find_value=' + (find_value == null ? '' : encodeURIComponent(find_value)) + '&find_where=' + (find_where == null ? '' : encodeURIComponent(find_where)) + '&find_params=' + (find_params == null ? '' : encodeURIComponent(find_params)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get child for specific product.
		 * Get product.child_item.info.json
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} product_id Filter by parent product id
		 * @param {string} id Entity id
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		ProductChildItemInfo(params: string, exclude: string, product_id: string, id: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.child_item.info.json?params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get child items list of specific product(s).
		 * Get product.child_item.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} modified_from Retrieve entities from their modification date
		 * @param {string} modified_to Retrieve entities to their modification date
		 * @param {string} product_id Filter by parent product id
		 * @param {string} product_ids Filter by parent product id
		 * @param {string} store_id Store Id
		 * @param {string} lang_id Language id
		 * @param {string} currency_id Currency Id
		 * @param {boolean} avail_sale Specifies the set of available/not available products for sale
		 * @param {string} report_request_id Report request id
		 * @param {boolean} disable_report_cache Disable report cache for current request
		 * @return {string} successful operation
		 */
		ProductChildItemList(start: number, count: number, params: string, exclude: string, created_from: string, created_to: string, modified_from: string, modified_to: string, product_id: string, product_ids: string, store_id: string, lang_id: string, currency_id: string, avail_sale: boolean, report_request_id: string, disable_report_cache: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.child_item.list.json?start=' + start + '&count=' + count + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&modified_from=' + (modified_from == null ? '' : encodeURIComponent(modified_from)) + '&modified_to=' + (modified_to == null ? '' : encodeURIComponent(modified_to)) + '&product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&product_ids=' + (product_ids == null ? '' : encodeURIComponent(product_ids)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&currency_id=' + (currency_id == null ? '' : encodeURIComponent(currency_id)) + '&avail_sale=' + avail_sale + '&report_request_id=' + (report_request_id == null ? '' : encodeURIComponent(report_request_id)) + '&disable_report_cache=' + disable_report_cache, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Count products in store.
		 * Get product.count.json
		 * @param {string} category_id Counts products specified by category id
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} modified_from Retrieve entities from their modification date
		 * @param {string} modified_to Retrieve entities to their modification date
		 * @param {boolean} avail_view Specifies the set of visible/invisible products
		 * @param {boolean} avail_sale Specifies the set of available/not available products for sale
		 * @param {string} store_id Counts products specified by store id
		 * @param {string} lang_id Counts products specified by language id
		 * @param {string} product_ids Counts products specified by product ids
		 * @param {string} report_request_id Report request id
		 * @param {boolean} disable_report_cache Disable report cache for current request
		 * @return {string} successful operation
		 */
		ProductCount(category_id: string, created_from: string, created_to: string, modified_from: string, modified_to: string, avail_view: boolean, avail_sale: boolean, store_id: string, lang_id: string, product_ids: string, report_request_id: string, disable_report_cache: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.count.json?category_id=' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&modified_from=' + (modified_from == null ? '' : encodeURIComponent(modified_from)) + '&modified_to=' + (modified_to == null ? '' : encodeURIComponent(modified_to)) + '&avail_view=' + avail_view + '&avail_sale=' + avail_sale + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&product_ids=' + (product_ids == null ? '' : encodeURIComponent(product_ids)) + '&report_request_id=' + (report_request_id == null ? '' : encodeURIComponent(report_request_id)) + '&disable_report_cache=' + disable_report_cache, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add currency and/or set default in store
		 * Post product.currency.add.json
		 * @param {string} iso3 Specifies standardized currency code
		 * @param {number} rate Defines the numerical identifier against to the major currency
		 * @param {string} name Defines currency's name
		 * @param {boolean} avail Specifies whether the currency is available
		 * @param {string} symbol_left Defines the symbol that is located before the currency
		 * @param {string} symbol_right Defines the symbol that is located after the currency
		 * @param {boolean} default Specifies currency's default meaning
		 * @return {string} successful operation
		 */
		ProductCurrencyAdd(iso3: string, rate: number, name: string, avail: boolean, symbol_left: string, symbol_right: string, default: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.currency.add.json?iso3=' + (iso3 == null ? '' : encodeURIComponent(iso3)) + '&rate=' + rate + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&avail=' + avail + '&symbol_left=' + (symbol_left == null ? '' : encodeURIComponent(symbol_left)) + '&symbol_right=' + (symbol_right == null ? '' : encodeURIComponent(symbol_right)) + '&default=' + default, null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get list of currencies
		 * Get product.currency.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {boolean} default Specifies the set of default/not default currencies
		 * @param {boolean} avail Specifies the set of available/not available currencies
		 * @return {string} successful operation
		 */
		ProductCurrencyList(start: number, count: number, params: string, exclude: string, default: boolean, avail: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.currency.list.json?start=' + start + '&count=' + count + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&default=' + default + '&avail=' + avail, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Product delete
		 * Delete product.delete.json
		 * @param {string} id Product id that will be removed
		 * @return {string} successful operation
		 */
		ProductDelete(id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'product.delete.json?id=' + (id == null ? '' : encodeURIComponent(id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieve all available fields for product item in store.
		 * Get product.fields.json
		 * @return {string} successful operation
		 */
		ProductFields(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.fields.json', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Search product in store catalog. "Apple" is specified here by default.
		 * Get product.find.json
		 * @param {string} find_value Entity search that is specified by some value
		 * @param {string} find_where Entity search that is specified by the comma-separated unique fields
		 * @param {string} find_params Entity search that is specified by comma-separated parameters
		 * @param {string} find_what Parameter's value specifies the entity that has to be found
		 * @return {string} successful operation
		 */
		ProductFind(find_value: string, find_where: string, find_params: string, find_what: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.find.json?find_value=' + (find_value == null ? '' : encodeURIComponent(find_value)) + '&find_where=' + (find_where == null ? '' : encodeURIComponent(find_where)) + '&find_params=' + (find_params == null ? '' : encodeURIComponent(find_params)) + '&find_what=' + (find_what == null ? '' : encodeURIComponent(find_what)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add image to product
		 * Post product.image.add.json
		 * @param {string} product_id Defines product id where the image should be added
		 * @param {string} image_name Defines image's name
		 * @param {string} type Defines image's types that are specified by comma-separated list
		 * @param {string} url Defines URL of the image that has to be added
		 * @param {string} label Defines alternative text that has to be attached to the picture
		 * @param {string} mime Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.
		 * @param {number} position Defines image’s position in the list
		 * @param {string} content Content(body) encoded in base64 of image file
		 * @param {number} product_variant_id Defines product's variants specified by variant id
		 * @param {string} variant_ids Defines product's variants ids
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		ProductImageAdd(product_id: string, image_name: string, type: string, url: string, label: string, mime: string, position: number, content: string, product_variant_id: number, variant_ids: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.image.add.json?product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&image_name=' + (image_name == null ? '' : encodeURIComponent(image_name)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&url=' + (url == null ? '' : encodeURIComponent(url)) + '&label=' + (label == null ? '' : encodeURIComponent(label)) + '&mime=' + (mime == null ? '' : encodeURIComponent(mime)) + '&position=' + position + '&content=' + (content == null ? '' : encodeURIComponent(content)) + '&product_variant_id=' + product_variant_id + '&variant_ids=' + (variant_ids == null ? '' : encodeURIComponent(variant_ids)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Delete image
		 * Delete product.image.delete.json
		 * @param {string} product_id Defines product id where the image should be deleted
		 * @param {string} id Entity id
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		ProductImageDelete(product_id: string, id: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'product.image.delete.json?product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Update details of image
		 * Put product.image.update.json
		 * @param {string} product_id Defines product id where the image should be updated
		 * @param {string} image_name Defines image's name
		 * @param {string} type Defines image's types that are specified by comma-separated list
		 * @param {string} label Defines alternative text that has to be attached to the picture
		 * @param {number} position Defines image’s position in the list
		 * @param {string} id Defines image update specified by image id
		 * @param {string} store_id Store Id
		 * @param {boolean} hidden Define is hide image
		 * @return {string} successful operation
		 */
		ProductImageUpdate(product_id: string, image_name: string, type: string, label: string, position: number, id: string, store_id: string, hidden: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'product.image.update.json?product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&image_name=' + (image_name == null ? '' : encodeURIComponent(image_name)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&label=' + (label == null ? '' : encodeURIComponent(label)) + '&position=' + position + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&hidden=' + hidden, null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get product info about product ID *** or specify other product ID.
		 * Get product.info.json
		 * @param {string} id Retrieves product's info specified by product id
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} store_id Retrieves product info specified by store id
		 * @param {string} lang_id Retrieves product info specified by language id
		 * @param {string} currency_id Currency Id
		 * @param {string} product_variant_params Set this parameter in order to choose which product variants fields you want to retrieve
		 * @param {string} report_request_id Report request id
		 * @param {boolean} disable_report_cache Disable report cache for current request
		 * @return {string} successful operation
		 */
		ProductInfo(id: string, params: string, exclude: string, store_id: string, lang_id: string, currency_id: string, product_variant_params: string, report_request_id: string, disable_report_cache: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.info.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&currency_id=' + (currency_id == null ? '' : encodeURIComponent(currency_id)) + '&product_variant_params=' + (product_variant_params == null ? '' : encodeURIComponent(product_variant_params)) + '&report_request_id=' + (report_request_id == null ? '' : encodeURIComponent(report_request_id)) + '&disable_report_cache=' + disable_report_cache, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get list of products from your store. Returns 10 products by default.
		 * Get product.list.json
		 * @param {string} page_cursor Used to retrieve products via cursor-based pagination (it can't be used with any other filtering parameter)
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} category_id Retrieves products specified by category id
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} modified_from Retrieve entities from their modification date
		 * @param {string} modified_to Retrieve entities to their modification date
		 * @param {boolean} avail_view Specifies the set of visible/invisible products
		 * @param {boolean} avail_sale Specifies the set of available/not available products for sale
		 * @param {string} store_id Retrieves products specified by store id
		 * @param {string} lang_id Retrieves products specified by language id
		 * @param {string} currency_id Currency Id
		 * @param {string} product_ids Retrieves products specified by product ids
		 * @param {string} product_variant_params Set this parameter in order to choose which product variants fields you want to retrieve
		 * @param {number} since_id Retrieve entities starting from the specified id.
		 * @param {string} report_request_id Report request id
		 * @param {boolean} disable_report_cache Disable report cache for current request
		 * @param {string} sort_by Set field to sort by
		 * @param {string} sort_direction Set sorting direction
		 * @param {string} sku Filter by product's sku
		 * @param {boolean} disable_cache Disable cache for current request
		 * @return {string} successful operation
		 */
		ProductList(page_cursor: string, start: number, count: number, params: string, exclude: string, category_id: string, created_from: string, created_to: string, modified_from: string, modified_to: string, avail_view: boolean, avail_sale: boolean, store_id: string, lang_id: string, currency_id: string, product_ids: string, product_variant_params: string, since_id: number, report_request_id: string, disable_report_cache: boolean, sort_by: string, sort_direction: string, sku: string, disable_cache: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.list.json?page_cursor=' + (page_cursor == null ? '' : encodeURIComponent(page_cursor)) + '&start=' + start + '&count=' + count + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&category_id=' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&modified_from=' + (modified_from == null ? '' : encodeURIComponent(modified_from)) + '&modified_to=' + (modified_to == null ? '' : encodeURIComponent(modified_to)) + '&avail_view=' + avail_view + '&avail_sale=' + avail_sale + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&currency_id=' + (currency_id == null ? '' : encodeURIComponent(currency_id)) + '&product_ids=' + (product_ids == null ? '' : encodeURIComponent(product_ids)) + '&product_variant_params=' + (product_variant_params == null ? '' : encodeURIComponent(product_variant_params)) + '&since_id=' + since_id + '&report_request_id=' + (report_request_id == null ? '' : encodeURIComponent(report_request_id)) + '&disable_report_cache=' + disable_report_cache + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&sku=' + (sku == null ? '' : encodeURIComponent(sku)) + '&disable_cache=' + disable_cache, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add manufacturer to store and assign to product
		 * Post product.manufacturer.add.json
		 * @param {string} product_id Defines products specified by product id
		 * @param {string} manufacturer Defines product’s manufacturer's name
		 * @return {string} successful operation
		 */
		ProductManufacturerAdd(product_id: string, manufacturer: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.manufacturer.add.json?product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&manufacturer=' + (manufacturer == null ? '' : encodeURIComponent(manufacturer)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Add product option from store.
		 * Post product.option.add.json
		 * @param {string} name Defines option's name
		 * @param {string} type Defines option's type that has to be added
		 * @param {string} product_id Defines product id where the option should be added
		 * @param {string} option_values Defines option values that has to be added in Magento
		 * @param {string} description Defines option's description
		 * @param {boolean} avail Defines whether the option is available
		 * @param {number} sort_order Sort number in the list
		 * @param {boolean} required Defines if the option is required
		 * @return {string} successful operation
		 */
		ProductOptionAdd(name: string, type: string, product_id: string, option_values: string, description: string, avail: boolean, sort_order: number, required: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.option.add.json?name=' + (name == null ? '' : encodeURIComponent(name)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&option_values=' + (option_values == null ? '' : encodeURIComponent(option_values)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&avail=' + avail + '&sort_order=' + sort_order + '&required=' + required, null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Assign option from product.
		 * Post product.option.assign.json
		 * @param {string} product_id Defines product id where the option should be assigned
		 * @param {number} option_id Defines option id which has to be assigned
		 * @return {string} successful operation
		 */
		ProductOptionAssign(product_id: string, option_id: number, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.option.assign.json?product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&option_id=' + option_id, null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get list of options.
		 * Get product.option.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} product_id Retrieves products' options specified by product id
		 * @param {string} lang_id Language id
		 * @param {string} store_id Store Id
		 * @return {string} successful operation
		 */
		ProductOptionList(start: number, count: number, params: string, exclude: string, product_id: string, lang_id: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.option.list.json?start=' + start + '&count=' + count + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add product option item from option.
		 * Post product.option.value.add.json
		 * @param {number} option_id Defines option id where the value has to be added
		 * @param {string} option_value Defines option value that has to be added
		 * @param {number} sort_order Sort number in the list
		 * @return {string} successful operation
		 */
		ProductOptionValueAdd(option_id: number, option_value: string, sort_order: number, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.option.value.add.json?option_id=' + option_id + '&option_value=' + (option_value == null ? '' : encodeURIComponent(option_value)) + '&sort_order=' + sort_order, null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Assign product option item from product.
		 * Post product.option.value.assign.json
		 * @param {number} product_option_id Defines product's option id where the value has to be assigned
		 * @param {number} option_value_id Defines value id that has to be assigned
		 * @return {string} successful operation
		 */
		ProductOptionValueAssign(product_option_id: number, option_value_id: number, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.option.value.assign.json?product_option_id=' + product_option_id + '&option_value_id=' + option_value_id, null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update product option item from option.
		 * Put product.option.value.update.json
		 * @param {number} option_value_id Defines value id that has to be assigned
		 * @param {number} price Defines new product option price
		 * @param {number} quantity Defines new products' options quantity
		 * @return {string} successful operation
		 */
		ProductOptionValueUpdate(option_value_id: number, price: number, quantity: number, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'product.option.value.update.json?option_value_id=' + option_value_id + '&price=' + price + '&quantity=' + quantity, null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Add some prices to the product.
		 * Post product.price.add.json
		 * @return {string} successful operation
		 */
		ProductPriceAdd(callback: (data : string) => any, requestBody: ProductPriceAdd, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.price.add.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Delete some prices of the product
		 * Delete product.price.delete.json
		 * @param {string} product_id Defines the product where the price has to be deleted
		 * @param {string} group_prices Defines product's group prices
		 * @return {string} successful operation
		 */
		ProductPriceDelete(product_id: string, group_prices: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'product.price.delete.json?product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&group_prices=' + (group_prices == null ? '' : encodeURIComponent(group_prices)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Update some prices of the product.
		 * Put product.price.update.json
		 * @return {string} successful operation
		 */
		ProductPriceUpdate(callback: (data : string) => any, requestBody: ProductPriceUpdate, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'product.price.update.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get reviews of a specific product.
		 * Get product.review.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} product_id Product id
		 * @param {string} ids Retrieves reviews specified by ids
		 * @param {string} store_id Store Id
		 * @param {string} status Defines status
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @return {string} successful operation
		 */
		ProductReviewList(start: number, count: number, product_id: string, ids: string, store_id: string, status: string, params: string, exclude: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.review.list.json?start=' + start + '&count=' + count + '&product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Assign product to store
		 * Post product.store.assign.json
		 * @param {string} product_id Defines id of the product which should be assigned to a store
		 * @param {string} store_id Defines id of the store product should be assigned to
		 * @return {string} successful operation
		 */
		ProductStoreAssign(product_id: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.store.assign.json?product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Add tax class and tax rate to store and assign to product.
		 * Post product.tax.add.json
		 * @return {string} successful operation
		 */
		ProductTaxAdd(callback: (data : string) => any, requestBody: ProductTaxAdd, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.tax.add.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update price and quantity for a specific product
		 * Put product.update.json
		 * @param {string} id Defines product id that has to be updated
		 * @param {string} model Defines product model that has to be updated
		 * @param {number} price Defines new product's price
		 * @param {number} special_price Defines new product's special price
		 * @param {string} sprice_create Defines the date of special price creation
		 * @param {string} sprice_expire Defines the term of special price offer duration
		 * @param {number} cost_price Defines new product's cost price
		 * @param {number} retail_price Defines new product's retail price
		 * @param {number} quantity Defines new product's quantity
		 * @param {number} weight Weight
		 * @param {number} increase_quantity Defines the incremental changes in product quantity
		 * @param {number} reduce_quantity Defines the decrement changes in product quantity
		 * @param {string} warehouse_id This parameter is used for selecting a warehouse where you need to set/modify a product quantity.
		 * @param {number} reserve_quantity This parameter allows to reserve/unreserve product quantity.
		 * @param {boolean} manage_stock Defines inventory tracking for product
		 * @param {string} name Defines product's name that has to be updated
		 * @param {string} sku Defines new product's sku
		 * @param {string} visible Set visibility status
		 * @param {string} manufacturer Defines product's manufacturer
		 * @param {string} manufacturer_id Defines product's manufacturer by manufacturer_id
		 * @param {string} description Defines new product's description
		 * @param {string} short_description Defines short description
		 * @param {string} meta_title Defines unique meta title for each entity
		 * @param {string} meta_keywords Defines unique meta keywords for each entity
		 * @param {string} meta_description Defines unique meta description of a entity
		 * @param {string} store_id Defines store id where the product should be found
		 * @param {string} lang_id Language id
		 * @param {boolean} in_stock Set stock status
		 * @param {string} status Defines product's status
		 * @param {string} seo_url Defines unique URL for SEO
		 * @param {string} report_request_id Report request id
		 * @param {boolean} disable_report_cache Disable report cache for current request
		 * @param {boolean} reindex Defines if the reindex is required
		 * @param {string} tags Product tags
		 * @return {string} successful operation
		 */
		ProductUpdate(id: string, model: string, price: number, special_price: number, sprice_create: string, sprice_expire: string, cost_price: number, retail_price: number, quantity: number, weight: number, increase_quantity: number, reduce_quantity: number, warehouse_id: string, reserve_quantity: number, manage_stock: boolean, name: string, sku: string, visible: string, manufacturer: string, manufacturer_id: string, description: string, short_description: string, meta_title: string, meta_keywords: string, meta_description: string, store_id: string, lang_id: string, in_stock: boolean, status: string, seo_url: string, report_request_id: string, disable_report_cache: boolean, reindex: boolean, tags: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'product.update.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&model=' + (model == null ? '' : encodeURIComponent(model)) + '&price=' + price + '&special_price=' + special_price + '&sprice_create=' + (sprice_create == null ? '' : encodeURIComponent(sprice_create)) + '&sprice_expire=' + (sprice_expire == null ? '' : encodeURIComponent(sprice_expire)) + '&cost_price=' + cost_price + '&retail_price=' + retail_price + '&quantity=' + quantity + '&weight=' + weight + '&increase_quantity=' + increase_quantity + '&reduce_quantity=' + reduce_quantity + '&warehouse_id=' + (warehouse_id == null ? '' : encodeURIComponent(warehouse_id)) + '&reserve_quantity=' + reserve_quantity + '&manage_stock=' + manage_stock + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&sku=' + (sku == null ? '' : encodeURIComponent(sku)) + '&visible=' + (visible == null ? '' : encodeURIComponent(visible)) + '&manufacturer=' + (manufacturer == null ? '' : encodeURIComponent(manufacturer)) + '&manufacturer_id=' + (manufacturer_id == null ? '' : encodeURIComponent(manufacturer_id)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&short_description=' + (short_description == null ? '' : encodeURIComponent(short_description)) + '&meta_title=' + (meta_title == null ? '' : encodeURIComponent(meta_title)) + '&meta_keywords=' + (meta_keywords == null ? '' : encodeURIComponent(meta_keywords)) + '&meta_description=' + (meta_description == null ? '' : encodeURIComponent(meta_description)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&lang_id=' + (lang_id == null ? '' : encodeURIComponent(lang_id)) + '&in_stock=' + in_stock + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&seo_url=' + (seo_url == null ? '' : encodeURIComponent(seo_url)) + '&report_request_id=' + (report_request_id == null ? '' : encodeURIComponent(report_request_id)) + '&disable_report_cache=' + disable_report_cache + '&reindex=' + reindex + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Add variant to product.
		 * Post product.variant.add.json
		 * @return {string} successful operation
		 */
		ProductVariantAdd(callback: (data : string) => any, requestBody: ProductVariantAdd, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.variant.add.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get count variants.
		 * Get product.variant.count.json
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} modified_from Retrieve entities from their modification date
		 * @param {string} modified_to Retrieve entities to their modification date
		 * @param {string} category_id Counts products’ variants specified by category id
		 * @param {string} product_id Retrieves products' variants specified by product id
		 * @param {string} store_id Retrieves variants specified by store id
		 * @return {string} successful operation
		 */
		ProductVariantCount(created_from: string, created_to: string, modified_from: string, modified_to: string, category_id: string, product_id: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.variant.count.json?created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&modified_from=' + (modified_from == null ? '' : encodeURIComponent(modified_from)) + '&modified_to=' + (modified_to == null ? '' : encodeURIComponent(modified_to)) + '&category_id=' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Delete variant.
		 * Delete product.variant.delete.json
		 * @param {string} id Defines variant removal, specified by variant id
		 * @param {string} product_id Defines product's id where the variant has to be deleted
		 * @return {string} successful operation
		 */
		ProductVariantDelete(id: string, product_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'product.variant.delete.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get variant info.
		 * Get product.variant.info.json
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} id Retrieves variant's info specified by variant id
		 * @param {string} store_id Retrieves variant info specified by store id
		 * @return {string} successful operation
		 */
		ProductVariantInfo(params: string, exclude: string, id: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.variant.info.json?params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get list variants.
		 * Get product.variant.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @param {string} created_from Retrieve entities from their creation date
		 * @param {string} created_to Retrieve entities to their creation date
		 * @param {string} modified_from Retrieve entities from their modification date
		 * @param {string} modified_to Retrieve entities to their modification date
		 * @param {string} category_id Retrieves products’ variants specified by category id
		 * @param {string} product_id Retrieves products' variants specified by product id
		 * @param {string} store_id Retrieves variants specified by store id
		 * @return {string} successful operation
		 */
		ProductVariantList(start: number, count: number, params: string, exclude: string, created_from: string, created_to: string, modified_from: string, modified_to: string, category_id: string, product_id: string, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'product.variant.list.json?start=' + start + '&count=' + count + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&created_from=' + (created_from == null ? '' : encodeURIComponent(created_from)) + '&created_to=' + (created_to == null ? '' : encodeURIComponent(created_to)) + '&modified_from=' + (modified_from == null ? '' : encodeURIComponent(modified_from)) + '&modified_to=' + (modified_to == null ? '' : encodeURIComponent(modified_to)) + '&category_id=' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add some prices to the product variant.
		 * Post product.variant.price.add.json
		 * @return {string} successful operation
		 */
		ProductVariantPriceAdd(callback: (data : string) => any, requestBody: ProductVariantPriceAdd, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'product.variant.price.add.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Delete some prices of the product variant.
		 * Delete product.variant.price.delete.json
		 * @param {string} id Defines the variant where the price has to be deleted
		 * @param {string} group_prices Defines variants's group prices
		 * @return {string} successful operation
		 */
		ProductVariantPriceDelete(id: string, group_prices: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'product.variant.price.delete.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&group_prices=' + (group_prices == null ? '' : encodeURIComponent(group_prices)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Update some prices of the product variant.
		 * Put product.variant.price.update.json
		 * @return {string} successful operation
		 */
		ProductVariantPriceUpdate(callback: (data : string) => any, requestBody: ProductVariantPriceUpdate, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'product.variant.price.update.json', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update variant.
		 * Put product.variant.update.json
		 * @param {string} store_id Defines store id where the variant should be found
		 * @param {string} id Defines variant update specified by variant id
		 * @param {string} product_id Defines product's id where the variant has to be updated
		 * @param {string} warehouse_id This parameter is used for selecting a warehouse where you need to set/modify a product quantity.
		 * @param {number} reserve_quantity This parameter allows to reserve/unreserve product variants quantity.
		 * @param {number} quantity Defines new products' variants quantity
		 * @param {number} increase_quantity Defines the incremental changes in product quantity
		 * @param {number} reduce_quantity Defines the decrement changes in product quantity
		 * @param {number} price Defines new product's variant price
		 * @param {number} special_price Defines new product's variant special price
		 * @param {string} sprice_create Defines the date of special price creation
		 * @param {string} sprice_expire Defines the term of special price offer duration
		 * @param {boolean} manage_stock Defines inventory tracking for product variant
		 * @param {boolean} in_stock Set stock status
		 * @param {string} name Defines variant's name that has to be updated
		 * @param {string} description Specifies variant's description
		 * @param {string} sku Defines new product's variant sku
		 * @param {string} meta_title Defines unique meta title for each entity
		 * @param {string} meta_description Defines unique meta description of a entity
		 * @param {string} meta_keywords Defines unique meta keywords for each entity
		 * @param {string} short_description Defines short description
		 * @param {string} visible Set visibility status
		 * @param {string} status Defines product variant's status
		 * @param {number} weight Weight
		 * @param {boolean} reindex Defines if the reindex is required
		 * @return {string} successful operation
		 */
		ProductVariantUpdate(store_id: string, id: string, product_id: string, warehouse_id: string, reserve_quantity: number, quantity: number, increase_quantity: number, reduce_quantity: number, price: number, special_price: number, sprice_create: string, sprice_expire: string, manage_stock: boolean, in_stock: boolean, name: string, description: string, sku: string, meta_title: string, meta_description: string, meta_keywords: string, short_description: string, visible: string, status: string, weight: number, reindex: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'product.variant.update.json?store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)) + '&warehouse_id=' + (warehouse_id == null ? '' : encodeURIComponent(warehouse_id)) + '&reserve_quantity=' + reserve_quantity + '&quantity=' + quantity + '&increase_quantity=' + increase_quantity + '&reduce_quantity=' + reduce_quantity + '&price=' + price + '&special_price=' + special_price + '&sprice_create=' + (sprice_create == null ? '' : encodeURIComponent(sprice_create)) + '&sprice_expire=' + (sprice_expire == null ? '' : encodeURIComponent(sprice_expire)) + '&manage_stock=' + manage_stock + '&in_stock=' + in_stock + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&sku=' + (sku == null ? '' : encodeURIComponent(sku)) + '&meta_title=' + (meta_title == null ? '' : encodeURIComponent(meta_title)) + '&meta_description=' + (meta_description == null ? '' : encodeURIComponent(meta_description)) + '&meta_keywords=' + (meta_keywords == null ? '' : encodeURIComponent(meta_keywords)) + '&short_description=' + (short_description == null ? '' : encodeURIComponent(short_description)) + '&visible=' + (visible == null ? '' : encodeURIComponent(visible)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&weight=' + weight + '&reindex=' + reindex, null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get subscribers list
		 * Get subscriber.list.json
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {boolean} subscribed Filter by subscription status
		 * @param {string} store_id Store Id
		 * @param {string} email Filter subscribers by email
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @return {string} successful operation
		 */
		SubscriberList(start: number, count: number, subscribed: boolean, store_id: string, email: string, params: string, exclude: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'subscriber.list.json?start=' + start + '&count=' + count + '&subscribed=' + subscribed + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get info about tax
		 * Get tax.class.info.json
		 * @param {string} tax_class_id Retrieves taxes specified by class id
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {string} exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
		 * @return {string} successful operation
		 */
		TaxClassInfo(tax_class_id: string, params: string, exclude: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'tax.class.info.json?tax_class_id=' + (tax_class_id == null ? '' : encodeURIComponent(tax_class_id)) + '&params=' + (params == null ? '' : encodeURIComponent(params)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Count registered webhooks on the store.
		 * Get webhook.count.json
		 * @param {string} entity The entity you want to filter webhooks by (e.g. order or product)
		 * @param {string} action The action you want to filter webhooks by (e.g. order or product)
		 * @param {boolean} active The webhook status you want to filter webhooks by
		 * @return {string} successful operation
		 */
		WebhookCount(entity: string, action: string, active: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'webhook.count.json?entity=' + (entity == null ? '' : encodeURIComponent(entity)) + '&action=' + (action == null ? '' : encodeURIComponent(action)) + '&active=' + active, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Create webhook on the store and subscribe to it.
		 * Post webhook.create.json
		 * @param {string} entity Specify the entity that you want to enable webhooks for (e.g product, order, customer, category)
		 * @param {string} action Specify what action (event) will trigger the webhook (e.g add, delete, or update)
		 * @param {string} callback Callback where the webhook should send the POST request when the event occurs
		 * @param {string} label The name you give to the webhook
		 * @param {string} fields Fields the webhook should send
		 * @param {boolean} active Webhook status
		 * @param {string} store_id Defines store id where the webhook should be assigned
		 * @return {string} successful operation
		 */
		WebhookCreate(entity: string, action: string, callback: string, label: string, fields: string, active: boolean, store_id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'webhook.create.json?entity=' + (entity == null ? '' : encodeURIComponent(entity)) + '&action=' + (action == null ? '' : encodeURIComponent(action)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&label=' + (label == null ? '' : encodeURIComponent(label)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&active=' + active + '&store_id=' + (store_id == null ? '' : encodeURIComponent(store_id)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Delete registered webhook on the store.
		 * Delete webhook.delete.json
		 * @param {string} id Webhook id
		 * @return {string} successful operation
		 */
		WebhookDelete(id: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'webhook.delete.json?id=' + (id == null ? '' : encodeURIComponent(id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * List all Webhooks that are available on this store.
		 * Get webhook.events.json
		 * @return {string} successful operation
		 */
		WebhookEvents(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'webhook.events.json', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * List registered webhook on the store.
		 * Get webhook.list.json
		 * @param {string} params Set this parameter in order to choose which entity fields you want to retrieve
		 * @param {number} start This parameter sets the number from which you want to get entities
		 * @param {number} count This parameter sets the entity amount that has to be retrieved. Max allowed count=250
		 * @param {string} entity The entity you want to filter webhooks by (e.g. order or product)
		 * @param {string} action The action you want to filter webhooks by (e.g. add, update, or delete)
		 * @param {boolean} active The webhook status you want to filter webhooks by
		 * @param {string} ids List of сomma-separated webhook ids
		 * @return {string} successful operation
		 */
		WebhookList(params: string, start: number, count: number, entity: string, action: string, active: boolean, ids: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'webhook.list.json?params=' + (params == null ? '' : encodeURIComponent(params)) + '&start=' + start + '&count=' + count + '&entity=' + (entity == null ? '' : encodeURIComponent(entity)) + '&action=' + (action == null ? '' : encodeURIComponent(action)) + '&active=' + active + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Update Webhooks parameters.
		 * Put webhook.update.json
		 * @param {string} id Webhook id
		 * @param {string} callback Callback where the webhook should send the POST request when the event occurs
		 * @param {string} label The name you give to the webhook
		 * @param {string} fields Fields the webhook should send
		 * @param {boolean} active Webhook status
		 * @return {string} successful operation
		 */
		WebhookUpdate(id: string, callback: string, label: string, fields: string, active: boolean, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'webhook.update.json?id=' + (id == null ? '' : encodeURIComponent(id)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&label=' + (label == null ? '' : encodeURIComponent(label)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&active=' + active, null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

