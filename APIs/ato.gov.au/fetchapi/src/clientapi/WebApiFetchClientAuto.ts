export namespace My_Demo_Client {

	/**The Address resource. */
	export interface Address {

		/**The city. */
		city?: string;

		/**The country. */
		country?: string;

		/**The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		fromDate?: Date;

		/**The resource's unique identifier. */
		id?: string;

		/**The address line 1. */
		line1?: string;

		/**The address line 2. */
		line2?: string;

		/**The address line 3. */
		line3?: string;

		/**The address name. */
		name?: string;

		/**The postal code. */
		postalCode?: string;

		/**The suburb. */
		suburb?: string;

		/**The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		toDate?: Date;
	}

	export interface Address-type extends type {
	}

	export interface AddressId extends resourceId {
	}


	/**The Business Name resource. */
	export interface Business-name {

		/**The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		fromDate?: Date;

		/**The resource's unique identifier. */
		id?: string;

		/**The business name's lifecycle state. */
		lifecycleState?: Business-nameLifecycleState;

		/**The business name. */
		name?: string;

		/**The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		toDate?: Date;
	}

	export enum Business-nameLifecycleState { Approved = 0, Expired = 1, Issued = 2, Pending Approval = 3, Suspended = 4 }

	export interface Business-name-lifecycle-state extends type {
	}


	/**The Electronic Address resource. */
	export interface Electronic-address {

		/**The area code, for example, "02". */
		areaCode?: string;

		/**The country prefix, for example, "61". */
		countryPrefix?: string;

		/**The electronic address type. */
		electronicAddressType?: Electronic-addressElectronicAddressType;

		/**The email address, for example, "robert.ferguson@ato.gov.au". */
		email?: string;

		/**The extension number, for example, "4453". */
		extension?: string;

		/**The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		fromDate?: Date;

		/**The resource's unique identifier. */
		id?: string;

		/**The number, for example, "62164453". */
		number?: string;

		/**The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		toDate?: Date;

		/**The website address, for example, "https://ato.gov.au". */
		url?: string;
	}

	export enum Electronic-addressElectronicAddressType { Email = 0, Fax = 1, Landline = 2, Mobile = 3, Website = 4 }

	export interface Electronic-address-type extends type {
	}

	export interface Error-details {

		/**The error code. */
		code?: string;

		/**The error message. */
		message?: string;

		/**The error target. */
		target?: string;
	}

	export interface Failed-precondition {

		/**The error code. */
		code?: string;
		details?: Array<error-details>;

		/**The error message. */
		message?: string;

		/**The error status. */
		status?: string;
	}


	/**The Gender resource. */
	export interface Gender {

		/**The gender. */
		gender?: string;

		/**The resource's unique identifier. */
		id?: string;
	}


	/**The Individual resource. */
	export interface Individual {
		addresses?: Array<individual-address>;

		/**The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format). */
		dateOfBirth: Date;
		electronicAddresses?: Array<electronic-address>;

		/**The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		fromDate?: Date;

		/**The individual's gender. */
		gender?: IndividualGender;

		/**The party's unique identifier. */
		id?: string;
		names?: Array<individual-name>;

		/**The individual's place of birth, for example, `Tamworth`. */
		placeOfBirth: string;

		/**The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		toDate?: Date;
	}

	export enum IndividualGender { Female = 0, Male = 1, Not Applicable = 2, Not Known = 3 }

	export interface Individual-address extends address {

		/**The address type. */
		addressType?: Individual-addressAddressType;

		/**The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		fromDate?: Date;

		/**The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		toDate?: Date;
	}

	export enum Individual-addressAddressType { Mailing = 0, Principal Place of Business = 1, Principal Place of Residence = 2 }


	/**The Individual Name resource. */
	export interface Individual-name {

		/**The direction used to render the individual's name. */
		direction?: Individual-nameDirection;

		/**The individual's family name. */
		familyName?: string;

		/**The individual's formal salutation, for example, "Mr William Smith". */
		formalSalutation?: string;

		/**The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		fromDate?: Date;

		/**The individual's given name. */
		givenName?: string;

		/**The resource's unique identifier. */
		id?: string;

		/**The individual's informal salutation, for example, "Bill". */
		informalSalutation?: string;

		/**The individual's middle name. */
		middleName?: string;

		/**The individual's name prefix. */
		namePrefix?: Individual-nameNamePrefix;

		/**The individual's name suffix, for example, "Jr" or "Sr". */
		nameSuffix?: string;

		/**The name type. */
		nameType?: Individual-nameNameType;

		/**The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		toDate?: Date;
	}

	export enum Individual-nameDirection { left-to-right = 0, right-to-left = 1 }

	export enum Individual-nameNamePrefix { Mr = 0, Ms = 1 }

	export enum Individual-nameNameType { Alias = 0, Principal Name = 1 }

	export interface Invalid-argument {

		/**The error code. */
		code?: string;
		details?: Array<error-details>;

		/**The error message. */
		message?: string;

		/**The error status. */
		status?: string;
	}

	export interface Legal-entity-type extends type {
	}


	/**The License resource. */
	export interface License {

		/**The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		fromDate?: Date;

		/**The resource's unique identifier. */
		id?: string;

		/**The license type. */
		licenseType?: LicenseLicenseType;

		/**The business name's lifecycle state. */
		lifecycleState?: LicenseLifecycleState;

		/**The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		toDate?: Date;
	}

	export enum LicenseLicenseType { Australian Financial Services License = 0, License 2B = 1 }

	export enum LicenseLifecycleState { Approved = 0, Expired = 1, Issued = 2, Pending Approval = 3, Suspended = 4 }

	export interface License-lifecycle-state extends type {
	}

	export interface License-type extends type {
	}

	export interface Name-direction extends type {
	}

	export interface Name-prefix extends type {
	}

	export interface Name-type extends type {
	}

	export interface Not-found {

		/**The error code. */
		code?: string;
		details?: Array<error-details>;

		/**The error message. */
		message?: string;

		/**The error status. */
		status?: string;
	}


	/**The Organisation resource. */
	export interface Organisation {
		addresses?: Array<organisation-address>;
		electronicAddresses?: Array<electronic-address>;

		/**The organisation's establishment date, for example, `1928-03-03` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format). */
		establishmentDate: Date;

		/**The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		fromDate?: Date;

		/**The party's unique identifier. */
		id?: string;

		/**The organisation's legal entity type. */
		legalEntityType: OrganisationLegalEntityType;
		names?: Array<organisation-name>;
		registeredIdentifiers?: Array<registered-identifier>;

		/**The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		toDate?: Date;
	}

	export enum OrganisationLegalEntityType { Company = 0, Partnership = 1, Trust = 2, Joint Venture = 3 }

	export interface Organisation-address extends address {

		/**The address type. */
		addressType?: Organisation-addressAddressType;

		/**The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		fromDate?: Date;

		/**The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		toDate?: Date;
	}

	export enum Organisation-addressAddressType { Mailing = 0, Principal Place of Business = 1 }


	/**The Organisation Name resource. */
	export interface Organisation-name {

		/**The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		fromDate?: Date;

		/**The resource's unique identifier. */
		id?: string;

		/**The organisation's name. */
		name?: string;

		/**The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		toDate?: Date;
	}


	/**The Party Role resource. */
	export interface Party-role {

		/**The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		fromDate?: Date;

		/**The resource's unique identifier. */
		id?: string;

		/**The party's role type. */
		partyRoleType?: Party-rolePartyRoleType;

		/**The related party's unique identifier. */
		relatedPartyId: string;

		/**The related party's role type. */
		relatedPartyRoleType?: Party-roleRelatedPartyRoleType;

		/**The relationship type. */
		relationshipType: Party-roleRelationshipType;

		/**The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		toDate?: Date;
	}

	export enum Party-rolePartyRoleType { Director = 0, Employee = 1, Member = 2, Partner = 3, Trustee = 4 }

	export enum Party-roleRelatedPartyRoleType { Association = 0, Company = 1, Employer = 2, Organisation = 3, Partnership = 4, Trust = 5 }

	export enum Party-roleRelationshipType { Directorship = 0, Employment = 1, Membership = 2, Partnership = 3, Trusteeship = 4 }

	export interface PartyId extends resourceId {
	}

	export interface Permission-denied {

		/**The error code. */
		code?: string;
		details?: Array<error-details>;

		/**The error message. */
		message?: string;

		/**The error status. */
		status?: string;
	}


	/**The Registered Identifier resource. */
	export interface Registered-identifier {

		/**The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		fromDate?: Date;

		/**The resource's unique identifier. */
		id?: string;

		/**The registered identifier. */
		identifier?: string;

		/**The registered identifier type. */
		identifierType?: Registered-identifierIdentifierType;

		/**The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). */
		toDate?: Date;
	}

	export enum Registered-identifierIdentifierType { ACN = 0, ABN = 1 }

	export interface Registered-identifier-type extends type {
	}


	/**The Role Type resource. */
	export interface Role {

		/**The resource's unique identifier. */
		id?: string;

		/**The reciprocal role name. */
		reciprocalRole?: string;

		/**The reciprocal role description. */
		reciprocalRoleDescription?: string;

		/**The relationship name. */
		relationship?: string;

		/**The role name. */
		role?: string;

		/**The role description. */
		roleDescription?: string;
	}

	export interface RoleId extends resourceId {
	}


	/**The Type resource. */
	export interface Type {

		/**The scheme value description. */
		description?: string;

		/**The resource's unique identifier. */
		id?: string;

		/**The scheme value. */
		name?: string;
	}

	export interface Unauthenticated {

		/**The error code. */
		code?: string;
		details?: error-details;

		/**The error message. */
		message?: string;

		/**The error status. */
		status?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Retrieve a list of business names
		 * Retrieve a list of business names
		 * Get business-names
		 * @return {Array<business-name>} A list of business names was retrieved successfully
		 */
		Business NamesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<business-name>> {
			return fetch(this.baseUri + 'business-names', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of address types
		 * Get classifications/address-types
		 * @return {Array<address-type>} Address types were retrieved successfully
		 */
		Address TypesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<address-type>> {
			return fetch(this.baseUri + 'classifications/address-types', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of business name lifecycle states
		 * Get classifications/business-name-lifecycle-states
		 * @return {Array<business-name-lifecycle-state>} Business name lifecycle states were retrieved successfully
		 */
		Business Name Lifecycle StatesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<business-name-lifecycle-state>> {
			return fetch(this.baseUri + 'classifications/business-name-lifecycle-states', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of electronic address types
		 * Get classifications/electronic-address-types
		 * @return {Array<electronic-address-type>} Electronic address types were retrieved successfully
		 */
		Electronic Address TypesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<electronic-address-type>> {
			return fetch(this.baseUri + 'classifications/electronic-address-types', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of genders
		 * Get classifications/genders
		 * @return {Array<gender>} Genders were retrieved successfully
		 */
		GendersGet(headersHandler?: () => {[header: string]: string}): Promise<Array<gender>> {
			return fetch(this.baseUri + 'classifications/genders', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of legal entity types
		 * Get classifications/legal-entity-types
		 * @return {Array<legal-entity-type>} Legal entity types were retrieved successfully
		 */
		Legal Entity TypesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<legal-entity-type>> {
			return fetch(this.baseUri + 'classifications/legal-entity-types', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of license lifecycle states
		 * Get classifications/license-lifecycle-states
		 * @return {Array<license-lifecycle-state>} License lifecycle states were retrieved successfully
		 */
		License Lifecycle StatesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<license-lifecycle-state>> {
			return fetch(this.baseUri + 'classifications/license-lifecycle-states', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of license types
		 * Get classifications/license-types
		 * @return {Array<license-type>} License types were retrieved successfully
		 */
		License TypesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<license-type>> {
			return fetch(this.baseUri + 'classifications/license-types', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of name directions
		 * Get classifications/name-directions
		 * @return {Array<name-direction>} Name directions were retrieved successfully
		 */
		Name DirectionsGet(headersHandler?: () => {[header: string]: string}): Promise<Array<name-direction>> {
			return fetch(this.baseUri + 'classifications/name-directions', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of name prefixes
		 * Get classifications/name-prefixes
		 * @return {Array<name-prefix>} Name prefixes were retrieved successfully
		 */
		Name PrefixesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<name-prefix>> {
			return fetch(this.baseUri + 'classifications/name-prefixes', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of name types
		 * Get classifications/name-types
		 * @return {Array<name-type>} Name types were retrieved successfully
		 */
		Name TypesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<name-type>> {
			return fetch(this.baseUri + 'classifications/name-types', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of registered identifier types
		 * Get classifications/registered-identifier-types
		 * @return {Array<registered-identifier-type>} Registered identifier types were retrieved successfully
		 */
		Registered Identifier TypesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<registered-identifier-type>> {
			return fetch(this.baseUri + 'classifications/registered-identifier-types', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of roles
		 * Get classifications/roles
		 * @return {Array<role>} Roles were retrieved successfully
		 */
		RolesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<role>> {
			return fetch(this.baseUri + 'classifications/roles', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of individuals
		 * Retrieve a list of individuals
		 * Get individuals
		 * @param {string} dateOfBirth The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).
		 * @param {string} placeOfBirth The individual's place of birth, for example, `Tamworth`.
		 * @return {Array<individual>} A list of individuals was retrieved successfully
		 */
		IndividualsGetByDateOfBirthAndPlaceOfBirth(dateOfBirth: string, placeOfBirth: string, headersHandler?: () => {[header: string]: string}): Promise<Array<individual>> {
			return fetch(this.baseUri + 'individuals?dateOfBirth=' + (dateOfBirth == null ? '' : encodeURIComponent(dateOfBirth)) + '&placeOfBirth=' + (placeOfBirth == null ? '' : encodeURIComponent(placeOfBirth)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create an individual
		 * Create an individual
		 * Post individuals
		 * @param {individual} requestBody Individual resource
		 * @return {void} 
		 */
		IndividualsPost(requestBody: individual, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'individuals', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Delete an individual
		 * Delete an individual with the specified identifier
		 * Delete individuals/{partyId}
		 * @return {void} 
		 */
		IndividualsDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'individuals/{partyId}', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an individual
		 * Retrieve an individual with the specified identifier
		 * Get individuals/{partyId}
		 * @return {Individual} Individual was retrieved successfully
		 */
		IndividualsGet(headersHandler?: () => {[header: string]: string}): Promise<Individual> {
			return fetch(this.baseUri + 'individuals/{partyId}', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Update an individual
		 * Update an individual
		 * Put individuals/{partyId}
		 * @param {individual} requestBody Individual resource
		 * @return {Individual} Individual was updated
		 */
		IndividualsPut(requestBody: individual, headersHandler?: () => {[header: string]: string}): Promise<Individual> {
			return fetch(this.baseUri + 'individuals/{partyId}', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve a list of addresses
		 * Get individuals/{partyId}/addresses
		 * @return {Array<address>} Addresses were retrieved successfully
		 */
		Individuals AddressesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<address>> {
			return fetch(this.baseUri + 'individuals/{partyId}/addresses', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create an address
		 * Create an address
		 * Post individuals/{partyId}/addresses
		 * @param {address} requestBody Address resource
		 * @return {void} 
		 */
		Individuals AddressesPost(requestBody: address, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'individuals/{partyId}/addresses', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Delete an address
		 * Delete an address
		 * Delete individuals/{partyId}/addresses/{addressId}
		 * @return {void} 
		 */
		Individuals AddressesDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'individuals/{partyId}/addresses/{addressId}', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an address
		 * Retrieve an address
		 * Get individuals/{partyId}/addresses/{addressId}
		 * @return {Address} Address was retrieved successfully
		 */
		Individuals AddressesGet(headersHandler?: () => {[header: string]: string}): Promise<Address> {
			return fetch(this.baseUri + 'individuals/{partyId}/addresses/{addressId}', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Update an address
		 * Update an address
		 * Put individuals/{partyId}/addresses/{addressId}
		 * @param {address} requestBody Address resource
		 * @return {Address} Address was updated
		 */
		Individuals AddressesPut(requestBody: address, headersHandler?: () => {[header: string]: string}): Promise<Address> {
			return fetch(this.baseUri + 'individuals/{partyId}/addresses/{addressId}', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve a list of business names
		 * Get individuals/{partyId}/business-names
		 * @return {Array<business-name>} Business Names were retrieved successfully
		 */
		Individuals Business NamesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<business-name>> {
			return fetch(this.baseUri + 'individuals/{partyId}/business-names', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create a business name
		 * Create a business name
		 * Post individuals/{partyId}/business-names
		 * @param {business-name} requestBody Business Name resource
		 * @return {void} 
		 */
		Individuals Business NamesPost(requestBody: business-name, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'individuals/{partyId}/business-names', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Delete a business name
		 * Delete a business name
		 * Delete individuals/{partyId}/business-names/{productId}
		 * @return {void} 
		 */
		Individuals Business NamesDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'individuals/{partyId}/business-names/{productId}', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a business name
		 * Retrieve a business name
		 * Get individuals/{partyId}/business-names/{productId}
		 * @return {Business-name} Business Name was retrieved successfully
		 */
		Individuals Business NamesGet(headersHandler?: () => {[header: string]: string}): Promise<Business-name> {
			return fetch(this.baseUri + 'individuals/{partyId}/business-names/{productId}', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Update a business name
		 * Update a business name
		 * Put individuals/{partyId}/business-names/{productId}
		 * @param {business-name} requestBody Business Name resource
		 * @return {Business-name} Address was updated
		 */
		Individuals Business NamesPut(requestBody: business-name, headersHandler?: () => {[header: string]: string}): Promise<Business-name> {
			return fetch(this.baseUri + 'individuals/{partyId}/business-names/{productId}', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve a list of electronic addresses
		 * Get individuals/{partyId}/electronic-addresses
		 * @return {Array<electronic-address>} Electronic addresses were retrieved successfully
		 */
		Individuals Electronic AddressesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<electronic-address>> {
			return fetch(this.baseUri + 'individuals/{partyId}/electronic-addresses', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create an electronic address
		 * Create an electronic address
		 * Post individuals/{partyId}/electronic-addresses
		 * @param {electronic-address} requestBody Electronic Address resource
		 * @return {void} 
		 */
		Individuals Electronic AddressesPost(requestBody: electronic-address, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'individuals/{partyId}/electronic-addresses', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Delete an electronic address
		 * Delete an electronic address
		 * Delete individuals/{partyId}/electronic-addresses/{addressId}
		 * @return {void} 
		 */
		Individuals Electronic AddressesDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'individuals/{partyId}/electronic-addresses/{addressId}', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an electronic address
		 * Retrieve an electronic address
		 * Get individuals/{partyId}/electronic-addresses/{addressId}
		 * @return {Electronic-address} Electronic Address was retrieved successfully
		 */
		Individuals Electronic AddressesGet(headersHandler?: () => {[header: string]: string}): Promise<Electronic-address> {
			return fetch(this.baseUri + 'individuals/{partyId}/electronic-addresses/{addressId}', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Update an electronic address
		 * Update an electronic address
		 * Put individuals/{partyId}/electronic-addresses/{addressId}
		 * @param {electronic-address} requestBody Electronic Address resource
		 * @return {Electronic-address} Electronic Address was updated
		 */
		Individuals Electronic AddressesPut(requestBody: electronic-address, headersHandler?: () => {[header: string]: string}): Promise<Electronic-address> {
			return fetch(this.baseUri + 'individuals/{partyId}/electronic-addresses/{addressId}', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve a list of licenses
		 * Get individuals/{partyId}/licenses
		 * @return {Array<license>} Licenses were retrieved successfully
		 */
		Individuals LicensesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<license>> {
			return fetch(this.baseUri + 'individuals/{partyId}/licenses', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create a license
		 * Create a license
		 * Post individuals/{partyId}/licenses
		 * @param {license} requestBody License resource
		 * @return {void} 
		 */
		Individuals LicensesPost(requestBody: license, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'individuals/{partyId}/licenses', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Delete a license
		 * Delete a license
		 * Delete individuals/{partyId}/licenses/{productId}
		 * @return {void} 
		 */
		Individuals LicensesDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'individuals/{partyId}/licenses/{productId}', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a license
		 * Retrieve a license
		 * Get individuals/{partyId}/licenses/{productId}
		 * @return {License} License was retrieved successfully
		 */
		Individuals LicensesGet(headersHandler?: () => {[header: string]: string}): Promise<License> {
			return fetch(this.baseUri + 'individuals/{partyId}/licenses/{productId}', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Update a license
		 * Update a license
		 * Put individuals/{partyId}/licenses/{productId}
		 * @param {license} requestBody License resource
		 * @return {License} License was updated
		 */
		Individuals LicensesPut(requestBody: license, headersHandler?: () => {[header: string]: string}): Promise<License> {
			return fetch(this.baseUri + 'individuals/{partyId}/licenses/{productId}', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve a list of roles
		 * Get individuals/{partyId}/roles
		 * @return {Array<party-role>} Roles were retrieved successfully
		 */
		Individuals RolesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<party-role>> {
			return fetch(this.baseUri + 'individuals/{partyId}/roles', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create a role
		 * Create a role
		 * Post individuals/{partyId}/roles
		 * @param {party-role} requestBody Role resource
		 * @return {void} 
		 */
		Individuals RolesPost(requestBody: party-role, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'individuals/{partyId}/roles', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Delete a role
		 * Delete a role
		 * Delete individuals/{partyId}/roles/{roleId}
		 * @return {void} 
		 */
		Individuals RolesDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'individuals/{partyId}/roles/{roleId}', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a role
		 * Retrieve a role
		 * Get individuals/{partyId}/roles/{roleId}
		 * @return {Party-role} Role was retrieved successfully
		 */
		Individuals RolesGet(headersHandler?: () => {[header: string]: string}): Promise<Party-role> {
			return fetch(this.baseUri + 'individuals/{partyId}/roles/{roleId}', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Update a role
		 * Update a role
		 * Put individuals/{partyId}/roles/{roleId}
		 * @param {party-role} requestBody Role resource
		 * @return {Party-role} Role was updated
		 */
		Individuals RolesPut(requestBody: party-role, headersHandler?: () => {[header: string]: string}): Promise<Party-role> {
			return fetch(this.baseUri + 'individuals/{partyId}/roles/{roleId}', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve a list of licenses
		 * Retrieve a list of licenses
		 * Get licenses
		 * @return {Array<license>} A list of licenses was retrieved successfully
		 */
		LicensesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<license>> {
			return fetch(this.baseUri + 'licenses', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of organisations
		 * Retrieve a list of organisations
		 * Get organisations
		 * @param {string} registeredIdentifier The registered identifier, for example, `ACN` or `ABN`.
		 * @param {string} identifier The identifier, for example, `123456789`.
		 * @return {Array<organisation>} A list of organisations was retrieved successfully
		 */
		OrganisationsGetByRegisteredIdentifierAndIdentifier(registeredIdentifier: string, identifier: string, headersHandler?: () => {[header: string]: string}): Promise<Array<organisation>> {
			return fetch(this.baseUri + 'organisations?registeredIdentifier=' + (registeredIdentifier == null ? '' : encodeURIComponent(registeredIdentifier)) + '&identifier=' + (identifier == null ? '' : encodeURIComponent(identifier)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create an organisation
		 * Create an organisation
		 * Post organisations
		 * @param {organisation} requestBody Organisation resource
		 * @return {void} 
		 */
		OrganisationsPost(requestBody: organisation, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'organisations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Delete an organisation
		 * Delete an organisation with the specified identifier
		 * Delete organisations/{partyId}
		 * @return {void} 
		 */
		OrganisationsDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'organisations/{partyId}', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an organisation
		 * Retrieve an organisation with the specified identifier
		 * Get organisations/{partyId}
		 * @return {Organisation} Individual was retrieved successfully
		 */
		OrganisationsGet(headersHandler?: () => {[header: string]: string}): Promise<Organisation> {
			return fetch(this.baseUri + 'organisations/{partyId}', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Update an organisation
		 * Update an organisation
		 * Put organisations/{partyId}
		 * @param {organisation} requestBody Organisation resource
		 * @return {Organisation} Organisation was updated
		 */
		OrganisationsPut(requestBody: organisation, headersHandler?: () => {[header: string]: string}): Promise<Organisation> {
			return fetch(this.baseUri + 'organisations/{partyId}', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve a list of addresses
		 * Get organisations/{partyId}/addresses
		 * @return {Array<address>} Addresses were retrieved successfully
		 */
		Organisations AddressesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<address>> {
			return fetch(this.baseUri + 'organisations/{partyId}/addresses', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create an address
		 * Create an address
		 * Post organisations/{partyId}/addresses
		 * @param {address} requestBody Address resource
		 * @return {void} 
		 */
		Organisations AddressesPost(requestBody: address, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'organisations/{partyId}/addresses', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Delete an address
		 * Delete an address
		 * Delete organisations/{partyId}/addresses/{addressId}
		 * @return {void} 
		 */
		Organisations AddressesDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'organisations/{partyId}/addresses/{addressId}', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an address
		 * Retrieve an address
		 * Get organisations/{partyId}/addresses/{addressId}
		 * @return {Address} Address was retrieved successfully
		 */
		Organisations AddressesGet(headersHandler?: () => {[header: string]: string}): Promise<Address> {
			return fetch(this.baseUri + 'organisations/{partyId}/addresses/{addressId}', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Update an address
		 * Update an address
		 * Put organisations/{partyId}/addresses/{addressId}
		 * @param {address} requestBody Address resource
		 * @return {Address} Address was updated
		 */
		Organisations AddressesPut(requestBody: address, headersHandler?: () => {[header: string]: string}): Promise<Address> {
			return fetch(this.baseUri + 'organisations/{partyId}/addresses/{addressId}', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve a list of business names
		 * Get organisations/{partyId}/business-names
		 * @return {Array<business-name>} Business Names were retrieved successfully
		 */
		Organisations Business NamesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<business-name>> {
			return fetch(this.baseUri + 'organisations/{partyId}/business-names', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create a business name
		 * Create a business name
		 * Post organisations/{partyId}/business-names
		 * @param {business-name} requestBody Business Name resource
		 * @return {void} 
		 */
		Organisations Business NamesPost(requestBody: business-name, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'organisations/{partyId}/business-names', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Delete a business name
		 * Delete a business name
		 * Delete organisations/{partyId}/business-names/{productId}
		 * @return {void} 
		 */
		Organisations Business NamesDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'organisations/{partyId}/business-names/{productId}', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a business name
		 * Retrieve a business name
		 * Get organisations/{partyId}/business-names/{productId}
		 * @return {Business-name} Business Name was retrieved successfully
		 */
		Organisations Business NamesGet(headersHandler?: () => {[header: string]: string}): Promise<Business-name> {
			return fetch(this.baseUri + 'organisations/{partyId}/business-names/{productId}', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Update a business name
		 * Update a business name
		 * Put organisations/{partyId}/business-names/{productId}
		 * @param {business-name} requestBody Business Name resource
		 * @return {Business-name} Address was updated
		 */
		Organisations Business NamesPut(requestBody: business-name, headersHandler?: () => {[header: string]: string}): Promise<Business-name> {
			return fetch(this.baseUri + 'organisations/{partyId}/business-names/{productId}', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve a list of electronic addresses
		 * Get organisations/{partyId}/electronic-addresses
		 * @return {Array<electronic-address>} Electronic addresses were retrieved successfully
		 */
		Organisations Electronic AddressesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<electronic-address>> {
			return fetch(this.baseUri + 'organisations/{partyId}/electronic-addresses', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create an electronic address
		 * Create an electronic address
		 * Post organisations/{partyId}/electronic-addresses
		 * @param {electronic-address} requestBody Electronic Address resource
		 * @return {void} 
		 */
		Organisations Electronic AddressesPost(requestBody: electronic-address, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'organisations/{partyId}/electronic-addresses', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Delete an electronic address
		 * Delete an electronic address
		 * Delete organisations/{partyId}/electronic-addresses/{addressId}
		 * @return {void} 
		 */
		Organisations Electronic AddressesDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'organisations/{partyId}/electronic-addresses/{addressId}', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve an electronic address
		 * Retrieve an electronic address
		 * Get organisations/{partyId}/electronic-addresses/{addressId}
		 * @return {Electronic-address} Electronic address was retrieved successfully
		 */
		Organisations Electronic AddressesGet(headersHandler?: () => {[header: string]: string}): Promise<Electronic-address> {
			return fetch(this.baseUri + 'organisations/{partyId}/electronic-addresses/{addressId}', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Update an electronic address
		 * Update an electronic address
		 * Put organisations/{partyId}/electronic-addresses/{addressId}
		 * @param {electronic-address} requestBody Electronic Address resource
		 * @return {Electronic-address} Electronic Address was updated
		 */
		Organisations Electronic AddressesPut(requestBody: electronic-address, headersHandler?: () => {[header: string]: string}): Promise<Electronic-address> {
			return fetch(this.baseUri + 'organisations/{partyId}/electronic-addresses/{addressId}', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve a list of licenses
		 * Get organisations/{partyId}/licenses
		 * @return {Array<license>} Licenses were retrieved successfully
		 */
		Organisations LicensesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<license>> {
			return fetch(this.baseUri + 'organisations/{partyId}/licenses', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create a license
		 * Create a license
		 * Post organisations/{partyId}/licenses
		 * @param {license} requestBody License resource
		 * @return {void} 
		 */
		Organisations LicensesPost(requestBody: license, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'organisations/{partyId}/licenses', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Delete a license
		 * Delete a license
		 * Delete organisations/{partyId}/licenses/{productId}
		 * @return {void} 
		 */
		Organisations LicensesDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'organisations/{partyId}/licenses/{productId}', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a license
		 * Retrieve a license
		 * Get organisations/{partyId}/licenses/{productId}
		 * @return {License} License was retrieved successfully
		 */
		Organisations LicensesGet(headersHandler?: () => {[header: string]: string}): Promise<License> {
			return fetch(this.baseUri + 'organisations/{partyId}/licenses/{productId}', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Update a license
		 * Update a license
		 * Put organisations/{partyId}/licenses/{productId}
		 * @param {license} requestBody License resource
		 * @return {License} License was updated
		 */
		Organisations LicensesPut(requestBody: license, headersHandler?: () => {[header: string]: string}): Promise<License> {
			return fetch(this.baseUri + 'organisations/{partyId}/licenses/{productId}', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve a list of roles
		 * Get organisations/{partyId}/roles
		 * @return {Array<party-role>} Roles were retrieved successfully
		 */
		Organisations RolesGet(headersHandler?: () => {[header: string]: string}): Promise<Array<party-role>> {
			return fetch(this.baseUri + 'organisations/{partyId}/roles', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create a role
		 * Create a role
		 * Post organisations/{partyId}/roles
		 * @param {party-role} requestBody Role resource
		 * @return {void} 
		 */
		Organisations RolesPost(requestBody: party-role, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'organisations/{partyId}/roles', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Delete a role
		 * Delete a role
		 * Delete organisations/{partyId}/roles/{roleId}
		 * @return {void} 
		 */
		Organisations RolesDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'organisations/{partyId}/roles/{roleId}', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a role
		 * Retrieve a role
		 * Get organisations/{partyId}/roles/{roleId}
		 * @return {Party-role} Role was retrieved successfully
		 */
		Organisations RolesGet(headersHandler?: () => {[header: string]: string}): Promise<Party-role> {
			return fetch(this.baseUri + 'organisations/{partyId}/roles/{roleId}', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Update a role
		 * Update a role
		 * Put organisations/{partyId}/roles/{roleId}
		 * @param {party-role} requestBody Role resource
		 * @return {Party-role} Role was updated
		 */
		Organisations RolesPut(requestBody: party-role, headersHandler?: () => {[header: string]: string}): Promise<Party-role> {
			return fetch(this.baseUri + 'organisations/{partyId}/roles/{roleId}', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

