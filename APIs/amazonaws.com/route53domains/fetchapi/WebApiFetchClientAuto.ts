export namespace My_Demo_Client {

	/**The AcceptDomainTransferFromAnotherAwsAccount response includes the following element. */
	export interface AcceptDomainTransferFromAnotherAwsAccountResponse {
		OperationId?: string;
	}


	/**The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements. */
	export interface AcceptDomainTransferFromAnotherAwsAccountRequest {
		DomainName: string;
		Password: string;
	}


	/**The <code>CancelDomainTransferToAnotherAwsAccount</code> response includes the following element. */
	export interface CancelDomainTransferToAnotherAwsAccountResponse {
		OperationId?: string;
	}


	/**The CancelDomainTransferToAnotherAwsAccount request includes the following element. */
	export interface CancelDomainTransferToAnotherAwsAccountRequest {
		DomainName: string;
	}


	/**The CheckDomainAvailability response includes the following elements. */
	export interface CheckDomainAvailabilityResponse {
		Availability: CheckDomainAvailabilityResponseAvailability;
	}

	export enum CheckDomainAvailabilityResponseAvailability { AVAILABLE = 0, AVAILABLE_RESERVED = 1, AVAILABLE_PREORDER = 2, UNAVAILABLE = 3, UNAVAILABLE_PREMIUM = 4, UNAVAILABLE_RESTRICTED = 5, RESERVED = 6, DONT_KNOW = 7 }


	/**The CheckDomainAvailability request contains the following elements. */
	export interface CheckDomainAvailabilityRequest {
		DomainName: string;
		IdnLangCode?: string;
	}


	/**The CheckDomainTransferability response includes the following elements. */
	export interface CheckDomainTransferabilityResponse {

		/**A complex type that contains information about whether the specified domain can be transferred to Route 53. */
		Transferability: DomainTransferability;
	}


	/**The CheckDomainTransferability request contains the following elements. */
	export interface CheckDomainTransferabilityRequest {
		DomainName: string;
		AuthCode?: string;
	}


	/**The DeleteTagsForDomainRequest includes the following elements. */
	export interface DeleteTagsForDomainRequest {
		DomainName: string;
		TagsToDelete: Array<TagKey>;
	}

	export interface DisableDomainAutoRenewRequest {
		DomainName: string;
	}


	/**The DisableDomainTransferLock response includes the following element. */
	export interface DisableDomainTransferLockResponse {
		OperationId: string;
	}


	/**The DisableDomainTransferLock request includes the following element. */
	export interface DisableDomainTransferLockRequest {
		DomainName: string;
	}

	export interface EnableDomainAutoRenewRequest {
		DomainName: string;
	}


	/**The EnableDomainTransferLock response includes the following elements. */
	export interface EnableDomainTransferLockResponse {
		OperationId: string;
	}


	/**A request to set the transfer lock for the specified domain. */
	export interface EnableDomainTransferLockRequest {
		DomainName: string;
	}

	export interface GetContactReachabilityStatusResponse {
		domainName?: string;
		status?: GetContactReachabilityStatusResponseStatus;
	}

	export enum GetContactReachabilityStatusResponseStatus { PENDING = 0, DONE = 1, EXPIRED = 2 }

	export interface GetContactReachabilityStatusRequest {
		domainName?: string;
	}


	/**The GetDomainDetail response includes the following elements. */
	export interface GetDomainDetailResponse {
		DomainName: string;
		Nameservers: Array<Nameserver>;
		AutoRenew?: boolean;

		/**ContactDetail includes the following elements. */
		AdminContact: ContactDetail;

		/**ContactDetail includes the following elements. */
		RegistrantContact: ContactDetail;

		/**ContactDetail includes the following elements. */
		TechContact: ContactDetail;
		AdminPrivacy?: boolean;
		RegistrantPrivacy?: boolean;
		TechPrivacy?: boolean;
		RegistrarName?: string;
		WhoIsServer?: string;
		RegistrarUrl?: string;
		AbuseContactEmail?: string;
		AbuseContactPhone?: string;
		RegistryDomainId?: string;
		CreationDate?: Date;
		UpdatedDate?: Date;
		ExpirationDate?: Date;
		Reseller?: string;
		DnsSec?: string;
		StatusList?: Array<DomainStatus>;
	}


	/**The GetDomainDetail request includes the following element. */
	export interface GetDomainDetailRequest {
		DomainName: string;
	}

	export interface GetDomainSuggestionsResponse {
		SuggestionsList?: Array<DomainSuggestion>;
	}

	export interface GetDomainSuggestionsRequest {
		DomainName: string;
		SuggestionCount: number;
		OnlyAvailable: boolean;
	}


	/**The GetOperationDetail response includes the following elements. */
	export interface GetOperationDetailResponse {
		OperationId?: string;
		Status?: GetOperationDetailResponseStatus;
		Message?: string;
		DomainName?: string;
		Type?: GetOperationDetailResponseType;
		SubmittedDate?: Date;
	}

	export enum GetOperationDetailResponseStatus { SUBMITTED = 0, IN_PROGRESS = 1, ERROR = 2, SUCCESSFUL = 3, FAILED = 4 }

	export enum GetOperationDetailResponseType { REGISTER_DOMAIN = 0, DELETE_DOMAIN = 1, TRANSFER_IN_DOMAIN = 2, UPDATE_DOMAIN_CONTACT = 3, UPDATE_NAMESERVER = 4, CHANGE_PRIVACY_PROTECTION = 5, DOMAIN_LOCK = 6, ENABLE_AUTORENEW = 7, DISABLE_AUTORENEW = 8, ADD_DNSSEC = 9, REMOVE_DNSSEC = 10, EXPIRE_DOMAIN = 11, TRANSFER_OUT_DOMAIN = 12, CHANGE_DOMAIN_OWNER = 13, RENEW_DOMAIN = 14, PUSH_DOMAIN = 15, INTERNAL_TRANSFER_OUT_DOMAIN = 16, INTERNAL_TRANSFER_IN_DOMAIN = 17 }


	/**The <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> request includes the following element. */
	export interface GetOperationDetailRequest {
		OperationId: string;
	}


	/**The ListDomains response includes the following elements. */
	export interface ListDomainsResponse {
		Domains: Array<DomainSummary>;
		NextPageMarker?: string;
	}


	/**The ListDomains request includes the following elements. */
	export interface ListDomainsRequest {
		Marker?: string;
		MaxItems?: number;
	}


	/**The ListOperations response includes the following elements. */
	export interface ListOperationsResponse {
		Operations: Array<OperationSummary>;
		NextPageMarker?: string;
	}


	/**The ListOperations request includes the following elements. */
	export interface ListOperationsRequest {
		SubmittedSince?: Date;
		Marker?: string;
		MaxItems?: number;
	}


	/**The ListTagsForDomain response includes the following elements. */
	export interface ListTagsForDomainResponse {
		TagList: Array<Tag>;
	}


	/**The ListTagsForDomainRequest includes the following elements. */
	export interface ListTagsForDomainRequest {
		DomainName: string;
	}


	/**The RegisterDomain response includes the following element. */
	export interface RegisterDomainResponse {
		OperationId: string;
	}


	/**The RegisterDomain request includes the following elements. */
	export interface RegisterDomainRequest {
		DomainName: string;
		IdnLangCode?: string;
		DurationInYears: number;
		AutoRenew?: boolean;

		/**ContactDetail includes the following elements. */
		AdminContact: ContactDetail;

		/**ContactDetail includes the following elements. */
		RegistrantContact: ContactDetail;

		/**ContactDetail includes the following elements. */
		TechContact: ContactDetail;
		PrivacyProtectAdminContact?: boolean;
		PrivacyProtectRegistrantContact?: boolean;
		PrivacyProtectTechContact?: boolean;
	}


	/**The RejectDomainTransferFromAnotherAwsAccount response includes the following element. */
	export interface RejectDomainTransferFromAnotherAwsAccountResponse {
		OperationId?: string;
	}


	/**The RejectDomainTransferFromAnotherAwsAccount request includes the following element. */
	export interface RejectDomainTransferFromAnotherAwsAccountRequest {
		DomainName: string;
	}

	export interface RenewDomainResponse {
		OperationId: string;
	}


	/**A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year. */
	export interface RenewDomainRequest {
		DomainName: string;
		DurationInYears?: number;
		CurrentExpiryYear: number;
	}

	export interface ResendContactReachabilityEmailResponse {
		domainName?: string;
		emailAddress?: string;
		isAlreadyVerified?: boolean;
	}

	export interface ResendContactReachabilityEmailRequest {
		domainName?: string;
	}


	/**The RetrieveDomainAuthCode response includes the following element. */
	export interface RetrieveDomainAuthCodeResponse {
		AuthCode: string;
	}


	/**A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar. */
	export interface RetrieveDomainAuthCodeRequest {
		DomainName: string;
	}


	/**The TransferDomain response includes the following element. */
	export interface TransferDomainResponse {
		OperationId: string;
	}


	/**The TransferDomain request includes the following elements. */
	export interface TransferDomainRequest {
		DomainName: string;
		IdnLangCode?: string;
		DurationInYears: number;
		Nameservers?: Array<Nameserver>;
		AuthCode?: string;
		AutoRenew?: boolean;

		/**ContactDetail includes the following elements. */
		AdminContact: ContactDetail;

		/**ContactDetail includes the following elements. */
		RegistrantContact: ContactDetail;

		/**ContactDetail includes the following elements. */
		TechContact: ContactDetail;
		PrivacyProtectAdminContact?: boolean;
		PrivacyProtectRegistrantContact?: boolean;
		PrivacyProtectTechContact?: boolean;
	}


	/**The <code>TransferDomainToAnotherAwsAccount</code> response includes the following elements. */
	export interface TransferDomainToAnotherAwsAccountResponse {
		OperationId?: string;
		Password?: string;
	}


	/**The TransferDomainToAnotherAwsAccount request includes the following elements. */
	export interface TransferDomainToAnotherAwsAccountRequest {
		DomainName: string;
		AccountId: string;
	}


	/**The UpdateDomainContact response includes the following element. */
	export interface UpdateDomainContactResponse {
		OperationId: string;
	}


	/**The UpdateDomainContact request includes the following elements. */
	export interface UpdateDomainContactRequest {
		DomainName: string;

		/**ContactDetail includes the following elements. */
		AdminContact?: ContactDetail;

		/**ContactDetail includes the following elements. */
		RegistrantContact?: ContactDetail;

		/**ContactDetail includes the following elements. */
		TechContact?: ContactDetail;
	}


	/**The UpdateDomainContactPrivacy response includes the following element. */
	export interface UpdateDomainContactPrivacyResponse {
		OperationId: string;
	}


	/**The UpdateDomainContactPrivacy request includes the following elements. */
	export interface UpdateDomainContactPrivacyRequest {
		DomainName: string;
		AdminPrivacy?: boolean;
		RegistrantPrivacy?: boolean;
		TechPrivacy?: boolean;
	}


	/**The UpdateDomainNameservers response includes the following element. */
	export interface UpdateDomainNameserversResponse {
		OperationId: string;
	}


	/**<p>Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p> */
	export interface UpdateDomainNameserversRequest {
		DomainName: string;
		FIAuthKey?: string;
		Nameservers: Array<Nameserver>;
	}


	/**The UpdateTagsForDomainRequest includes the following elements. */
	export interface UpdateTagsForDomainRequest {
		DomainName: string;
		TagsToUpdate?: Array<Tag>;
	}


	/**The ViewBilling response includes the following elements. */
	export interface ViewBillingResponse {
		NextPageMarker?: string;
		BillingRecords?: Array<BillingRecord>;
	}


	/**The ViewBilling request includes the following elements. */
	export interface ViewBillingRequest {
		Start?: Date;
		End?: Date;
		Marker?: string;
		MaxItems?: number;
	}

	export enum OperationType { REGISTER_DOMAIN = 0, DELETE_DOMAIN = 1, TRANSFER_IN_DOMAIN = 2, UPDATE_DOMAIN_CONTACT = 3, UPDATE_NAMESERVER = 4, CHANGE_PRIVACY_PROTECTION = 5, DOMAIN_LOCK = 6, ENABLE_AUTORENEW = 7, DISABLE_AUTORENEW = 8, ADD_DNSSEC = 9, REMOVE_DNSSEC = 10, EXPIRE_DOMAIN = 11, TRANSFER_OUT_DOMAIN = 12, CHANGE_DOMAIN_OWNER = 13, RENEW_DOMAIN = 14, PUSH_DOMAIN = 15, INTERNAL_TRANSFER_OUT_DOMAIN = 16, INTERNAL_TRANSFER_IN_DOMAIN = 17 }


	/**Information for one billing record. */
	export interface BillingRecord {
		DomainName?: string;
		Operation?: BillingRecordOperation;
		InvoiceId?: string;
		BillDate?: Date;
		Price?: number;
	}

	export enum BillingRecordOperation { REGISTER_DOMAIN = 0, DELETE_DOMAIN = 1, TRANSFER_IN_DOMAIN = 2, UPDATE_DOMAIN_CONTACT = 3, UPDATE_NAMESERVER = 4, CHANGE_PRIVACY_PROTECTION = 5, DOMAIN_LOCK = 6, ENABLE_AUTORENEW = 7, DISABLE_AUTORENEW = 8, ADD_DNSSEC = 9, REMOVE_DNSSEC = 10, EXPIRE_DOMAIN = 11, TRANSFER_OUT_DOMAIN = 12, CHANGE_DOMAIN_OWNER = 13, RENEW_DOMAIN = 14, PUSH_DOMAIN = 15, INTERNAL_TRANSFER_OUT_DOMAIN = 16, INTERNAL_TRANSFER_IN_DOMAIN = 17 }

	export enum DomainAvailability { AVAILABLE = 0, AVAILABLE_RESERVED = 1, AVAILABLE_PREORDER = 2, UNAVAILABLE = 3, UNAVAILABLE_PREMIUM = 4, UNAVAILABLE_RESTRICTED = 5, RESERVED = 6, DONT_KNOW = 7 }


	/**A complex type that contains information about whether the specified domain can be transferred to Route 53. */
	export interface DomainTransferability {

		/**<p>Whether the domain name can be transferred to Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> for <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> </dl> */
		Transferable?: DomainTransferabilityTransferable;
	}

	export enum DomainTransferabilityTransferable { TRANSFERABLE = 0, UNTRANSFERABLE = 1, DONT_KNOW = 2 }

	export enum ContactType { PERSON = 0, COMPANY = 1, ASSOCIATION = 2, PUBLIC_BODY = 3, RESELLER = 4 }

	export enum CountryCode { AD = 0, AE = 1, AF = 2, AG = 3, AI = 4, AL = 5, AM = 6, AN = 7, AO = 8, AQ = 9, AR = 10, AS = 11, AT = 12, AU = 13, AW = 14, AZ = 15, BA = 16, BB = 17, BD = 18, BE = 19, BF = 20, BG = 21, BH = 22, BI = 23, BJ = 24, BL = 25, BM = 26, BN = 27, BO = 28, BR = 29, BS = 30, BT = 31, BW = 32, BY = 33, BZ = 34, CA = 35, CC = 36, CD = 37, CF = 38, CG = 39, CH = 40, CI = 41, CK = 42, CL = 43, CM = 44, CN = 45, CO = 46, CR = 47, CU = 48, CV = 49, CX = 50, CY = 51, CZ = 52, DE = 53, DJ = 54, DK = 55, DM = 56, DO = 57, DZ = 58, EC = 59, EE = 60, EG = 61, ER = 62, ES = 63, ET = 64, FI = 65, FJ = 66, FK = 67, FM = 68, FO = 69, FR = 70, GA = 71, GB = 72, GD = 73, GE = 74, GH = 75, GI = 76, GL = 77, GM = 78, GN = 79, GQ = 80, GR = 81, GT = 82, GU = 83, GW = 84, GY = 85, HK = 86, HN = 87, HR = 88, HT = 89, HU = 90, ID = 91, IE = 92, IL = 93, IM = 94, IN = 95, IQ = 96, IR = 97, IS = 98, IT = 99, JM = 100, JO = 101, JP = 102, KE = 103, KG = 104, KH = 105, KI = 106, KM = 107, KN = 108, KP = 109, KR = 110, KW = 111, KY = 112, KZ = 113, LA = 114, LB = 115, LC = 116, LI = 117, LK = 118, LR = 119, LS = 120, LT = 121, LU = 122, LV = 123, LY = 124, MA = 125, MC = 126, MD = 127, ME = 128, MF = 129, MG = 130, MH = 131, MK = 132, ML = 133, MM = 134, MN = 135, MO = 136, MP = 137, MR = 138, MS = 139, MT = 140, MU = 141, MV = 142, MW = 143, MX = 144, MY = 145, MZ = 146, NA = 147, NC = 148, NE = 149, NG = 150, NI = 151, NL = 152, NO = 153, NP = 154, NR = 155, NU = 156, NZ = 157, OM = 158, PA = 159, PE = 160, PF = 161, PG = 162, PH = 163, PK = 164, PL = 165, PM = 166, PN = 167, PR = 168, PT = 169, PW = 170, PY = 171, QA = 172, RO = 173, RS = 174, RU = 175, RW = 176, SA = 177, SB = 178, SC = 179, SD = 180, SE = 181, SG = 182, SH = 183, SI = 184, SK = 185, SL = 186, SM = 187, SN = 188, SO = 189, SR = 190, ST = 191, SV = 192, SY = 193, SZ = 194, TC = 195, TD = 196, TG = 197, TH = 198, TJ = 199, TK = 200, TL = 201, TM = 202, TN = 203, TO = 204, TR = 205, TT = 206, TV = 207, TW = 208, TZ = 209, UA = 210, UG = 211, US = 212, UY = 213, UZ = 214, VA = 215, VC = 216, VE = 217, VG = 218, VI = 219, VN = 220, VU = 221, WF = 222, WS = 223, YE = 224, YT = 225, ZA = 226, ZM = 227, ZW = 228 }


	/**ContactDetail includes the following elements. */
	export interface ContactDetail {
		FirstName?: string;
		LastName?: string;
		ContactType?: ContactDetailContactType;
		OrganizationName?: string;
		AddressLine1?: string;
		AddressLine2?: string;
		City?: string;
		State?: string;
		CountryCode?: ContactDetailCountryCode;
		ZipCode?: string;
		PhoneNumber?: string;
		Email?: string;
		Fax?: string;
		ExtraParams?: Array<ExtraParam>;
	}

	export enum ContactDetailContactType { PERSON = 0, COMPANY = 1, ASSOCIATION = 2, PUBLIC_BODY = 3, RESELLER = 4 }

	export enum ContactDetailCountryCode { AD = 0, AE = 1, AF = 2, AG = 3, AI = 4, AL = 5, AM = 6, AN = 7, AO = 8, AQ = 9, AR = 10, AS = 11, AT = 12, AU = 13, AW = 14, AZ = 15, BA = 16, BB = 17, BD = 18, BE = 19, BF = 20, BG = 21, BH = 22, BI = 23, BJ = 24, BL = 25, BM = 26, BN = 27, BO = 28, BR = 29, BS = 30, BT = 31, BW = 32, BY = 33, BZ = 34, CA = 35, CC = 36, CD = 37, CF = 38, CG = 39, CH = 40, CI = 41, CK = 42, CL = 43, CM = 44, CN = 45, CO = 46, CR = 47, CU = 48, CV = 49, CX = 50, CY = 51, CZ = 52, DE = 53, DJ = 54, DK = 55, DM = 56, DO = 57, DZ = 58, EC = 59, EE = 60, EG = 61, ER = 62, ES = 63, ET = 64, FI = 65, FJ = 66, FK = 67, FM = 68, FO = 69, FR = 70, GA = 71, GB = 72, GD = 73, GE = 74, GH = 75, GI = 76, GL = 77, GM = 78, GN = 79, GQ = 80, GR = 81, GT = 82, GU = 83, GW = 84, GY = 85, HK = 86, HN = 87, HR = 88, HT = 89, HU = 90, ID = 91, IE = 92, IL = 93, IM = 94, IN = 95, IQ = 96, IR = 97, IS = 98, IT = 99, JM = 100, JO = 101, JP = 102, KE = 103, KG = 104, KH = 105, KI = 106, KM = 107, KN = 108, KP = 109, KR = 110, KW = 111, KY = 112, KZ = 113, LA = 114, LB = 115, LC = 116, LI = 117, LK = 118, LR = 119, LS = 120, LT = 121, LU = 122, LV = 123, LY = 124, MA = 125, MC = 126, MD = 127, ME = 128, MF = 129, MG = 130, MH = 131, MK = 132, ML = 133, MM = 134, MN = 135, MO = 136, MP = 137, MR = 138, MS = 139, MT = 140, MU = 141, MV = 142, MW = 143, MX = 144, MY = 145, MZ = 146, NA = 147, NC = 148, NE = 149, NG = 150, NI = 151, NL = 152, NO = 153, NP = 154, NR = 155, NU = 156, NZ = 157, OM = 158, PA = 159, PE = 160, PF = 161, PG = 162, PH = 163, PK = 164, PL = 165, PM = 166, PN = 167, PR = 168, PT = 169, PW = 170, PY = 171, QA = 172, RO = 173, RS = 174, RU = 175, RW = 176, SA = 177, SB = 178, SC = 179, SD = 180, SE = 181, SG = 182, SH = 183, SI = 184, SK = 185, SL = 186, SM = 187, SN = 188, SO = 189, SR = 190, ST = 191, SV = 192, SY = 193, SZ = 194, TC = 195, TD = 196, TG = 197, TH = 198, TJ = 199, TK = 200, TL = 201, TM = 202, TN = 203, TO = 204, TR = 205, TT = 206, TV = 207, TW = 208, TZ = 209, UA = 210, UG = 211, US = 212, UY = 213, UZ = 214, VA = 215, VC = 216, VE = 217, VG = 218, VI = 219, VN = 220, VU = 221, WF = 222, WS = 223, YE = 224, YT = 225, ZA = 226, ZM = 227, ZW = 228 }


	/**Information about one suggested domain name. */
	export interface DomainSuggestion {
		DomainName?: string;
		Availability?: string;
	}


	/**Summary information about one domain. */
	export interface DomainSummary {
		DomainName: string;
		AutoRenew?: boolean;
		TransferLock?: boolean;
		Expiry?: Date;
	}


	/**<p>Whether the domain name can be transferred to Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> for <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> </dl> */
	export enum Transferable { TRANSFERABLE = 0, UNTRANSFERABLE = 1, DONT_KNOW = 2 }

	export enum ExtraParamName { DUNS_NUMBER = 0, BRAND_NUMBER = 1, BIRTH_DEPARTMENT = 2, BIRTH_DATE_IN_YYYY_MM_DD = 3, BIRTH_COUNTRY = 4, BIRTH_CITY = 5, DOCUMENT_NUMBER = 6, AU_ID_NUMBER = 7, AU_ID_TYPE = 8, CA_LEGAL_TYPE = 9, CA_BUSINESS_ENTITY_TYPE = 10, CA_LEGAL_REPRESENTATIVE = 11, CA_LEGAL_REPRESENTATIVE_CAPACITY = 12, ES_IDENTIFICATION = 13, ES_IDENTIFICATION_TYPE = 14, ES_LEGAL_FORM = 15, FI_BUSINESS_NUMBER = 16, FI_ID_NUMBER = 17, FI_NATIONALITY = 18, FI_ORGANIZATION_TYPE = 19, IT_NATIONALITY = 20, IT_PIN = 21, IT_REGISTRANT_ENTITY_TYPE = 22, RU_PASSPORT_DATA = 23, SE_ID_NUMBER = 24, SG_ID_NUMBER = 25, VAT_NUMBER = 26, UK_CONTACT_TYPE = 27, UK_COMPANY_NUMBER = 28 }


	/**ExtraParam includes the following elements. */
	export interface ExtraParam {
		Name: ExtraParamName;
		Value: string;
	}

	export enum ExtraParamName { DUNS_NUMBER = 0, BRAND_NUMBER = 1, BIRTH_DEPARTMENT = 2, BIRTH_DATE_IN_YYYY_MM_DD = 3, BIRTH_COUNTRY = 4, BIRTH_CITY = 5, DOCUMENT_NUMBER = 6, AU_ID_NUMBER = 7, AU_ID_TYPE = 8, CA_LEGAL_TYPE = 9, CA_BUSINESS_ENTITY_TYPE = 10, CA_LEGAL_REPRESENTATIVE = 11, CA_LEGAL_REPRESENTATIVE_CAPACITY = 12, ES_IDENTIFICATION = 13, ES_IDENTIFICATION_TYPE = 14, ES_LEGAL_FORM = 15, FI_BUSINESS_NUMBER = 16, FI_ID_NUMBER = 17, FI_NATIONALITY = 18, FI_ORGANIZATION_TYPE = 19, IT_NATIONALITY = 20, IT_PIN = 21, IT_REGISTRANT_ENTITY_TYPE = 22, RU_PASSPORT_DATA = 23, SE_ID_NUMBER = 24, SG_ID_NUMBER = 25, VAT_NUMBER = 26, UK_CONTACT_TYPE = 27, UK_COMPANY_NUMBER = 28 }

	export enum ReachabilityStatus { PENDING = 0, DONE = 1, EXPIRED = 2 }

	export enum OperationStatus { SUBMITTED = 0, IN_PROGRESS = 1, ERROR = 2, SUCCESSFUL = 3, FAILED = 4 }


	/**Nameserver includes the following elements. */
	export interface Nameserver {
		Name: string;
		GlueIps?: Array<GlueIp>;
	}


	/**OperationSummary includes the following elements. */
	export interface OperationSummary {
		OperationId: string;
		Status: OperationSummaryStatus;
		Type: OperationSummaryType;
		SubmittedDate: Date;
	}

	export enum OperationSummaryStatus { SUBMITTED = 0, IN_PROGRESS = 1, ERROR = 2, SUCCESSFUL = 3, FAILED = 4 }

	export enum OperationSummaryType { REGISTER_DOMAIN = 0, DELETE_DOMAIN = 1, TRANSFER_IN_DOMAIN = 2, UPDATE_DOMAIN_CONTACT = 3, UPDATE_NAMESERVER = 4, CHANGE_PRIVACY_PROTECTION = 5, DOMAIN_LOCK = 6, ENABLE_AUTORENEW = 7, DISABLE_AUTORENEW = 8, ADD_DNSSEC = 9, REMOVE_DNSSEC = 10, EXPIRE_DOMAIN = 11, TRANSFER_OUT_DOMAIN = 12, CHANGE_DOMAIN_OWNER = 13, RENEW_DOMAIN = 14, PUSH_DOMAIN = 15, INTERNAL_TRANSFER_OUT_DOMAIN = 16, INTERNAL_TRANSFER_IN_DOMAIN = 17 }


	/**Each tag includes the following elements. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Accepts the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount
		 * @return {AcceptDomainTransferFromAnotherAwsAccountResponse} Success
		 */
		AcceptDomainTransferFromAnotherAwsAccount(requestBody: AcceptDomainTransferFromAnotherAwsAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<AcceptDomainTransferFromAnotherAwsAccountResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Cancels the transfer of a domain from the current AWS account to another AWS account. You initiate a transfer between AWS accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <important> <p>You must cancel the transfer before the other AWS account accepts the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount
		 * @return {CancelDomainTransferToAnotherAwsAccountResponse} Success
		 */
		CancelDomainTransferToAnotherAwsAccount(requestBody: CancelDomainTransferToAnotherAwsAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<CancelDomainTransferToAnotherAwsAccountResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.
		 * Post /#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability
		 * @return {CheckDomainAvailabilityResponse} Success
		 */
		CheckDomainAvailability(requestBody: CheckDomainAvailabilityRequest, headersHandler?: () => {[header: string]: string}): Promise<CheckDomainAvailabilityResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Checks whether a domain name can be transferred to Amazon Route 53.
		 * Post /#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability
		 * @return {CheckDomainTransferabilityResponse} Success
		 */
		CheckDomainTransferability(requestBody: CheckDomainTransferabilityRequest, headersHandler?: () => {[header: string]: string}): Promise<CheckDomainTransferabilityResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This operation deletes the specified tags for a domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain
		 * @return {DeleteTagsForDomainResponse} Success
		 */
		DeleteTagsForDomain(requestBody: DeleteTagsForDomainRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteTagsForDomainResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * This operation disables automatic renewal of domain registration for the specified domain.
		 * Post /#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew
		 * @return {DisableDomainAutoRenewResponse} Success
		 */
		DisableDomainAutoRenew(requestBody: DisableDomainAutoRenewRequest, headersHandler?: () => {[header: string]: string}): Promise<DisableDomainAutoRenewResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * This operation removes the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
		 * Post /#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock
		 * @return {DisableDomainTransferLockResponse} Success
		 */
		DisableDomainTransferLock(requestBody: DisableDomainTransferLockRequest, headersHandler?: () => {[header: string]: string}): Promise<DisableDomainTransferLockResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your AWS account.</p> <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.</p>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew
		 * @return {EnableDomainAutoRenewResponse} Success
		 */
		EnableDomainAutoRenew(requestBody: EnableDomainAutoRenewRequest, headersHandler?: () => {[header: string]: string}): Promise<EnableDomainAutoRenewResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
		 * Post /#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock
		 * @return {EnableDomainTransferLockResponse} Success
		 */
		EnableDomainTransferLock(requestBody: EnableDomainTransferLockRequest, headersHandler?: () => {[header: string]: string}): Promise<EnableDomainTransferLockResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p> <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus
		 * @return {GetContactReachabilityStatusResponse} Success
		 */
		GetContactReachabilityStatus(requestBody: GetContactReachabilityStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<GetContactReachabilityStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * This operation returns detailed information about a specified domain that is associated with the current AWS account. Contact information for the domain is also returned as part of the output.
		 * Post /#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail
		 * @return {GetDomainDetailResponse} Success
		 */
		GetDomainDetail(requestBody: GetDomainDetailRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDomainDetailResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * The GetDomainSuggestions operation returns a list of suggested domain names.
		 * Post /#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions
		 * @return {GetDomainSuggestionsResponse} Success
		 */
		GetDomainSuggestions(requestBody: GetDomainSuggestionsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDomainSuggestionsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * This operation returns the current status of an operation that is not completed.
		 * Post /#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail
		 * @return {GetOperationDetailResponse} Success
		 */
		GetOperationDetail(requestBody: GetOperationDetailRequest, headersHandler?: () => {[header: string]: string}): Promise<GetOperationDetailResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * This operation returns all the domain names registered with Amazon Route 53 for the current AWS account.
		 * Post /#X-Amz-Target=Route53Domains_v20140515.ListDomains
		 * @param {string} MaxItems Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListDomainsResponse} Success
		 */
		ListDomains(MaxItems: string, Marker: string, requestBody: ListDomainsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListDomainsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.ListDomains?MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account.
		 * Post /#X-Amz-Target=Route53Domains_v20140515.ListOperations
		 * @param {string} MaxItems Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListOperationsResponse} Success
		 */
		ListOperations(MaxItems: string, Marker: string, requestBody: ListOperationsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListOperationsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.ListOperations?MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This operation returns all of the tags that are associated with the specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain
		 * @return {ListTagsForDomainResponse} Success
		 */
		ListTagsForDomain(requestBody: ListTagsForDomainRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForDomainResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p> <p>When you register a domain, Amazon Route 53 does the following:</p> <ul> <li> <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.</p> </li> <li> <p>Enables autorenew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.</p> </li> <li> <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy protection, WHOIS queries return the information that you entered for the registrant, admin, and tech contacts.</p> </li> <li> <p>If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p> </li> <li> <p>Charges your AWS account an amount based on the top-level domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </li> </ul>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.RegisterDomain
		 * @return {RegisterDomainResponse} Success
		 */
		RegisterDomain(requestBody: RegisterDomainRequest, headersHandler?: () => {[header: string]: string}): Promise<RegisterDomainResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.RegisterDomain', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Rejects the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount
		 * @return {RejectDomainTransferFromAnotherAwsAccountResponse} Success
		 */
		RejectDomainTransferFromAnotherAwsAccount(requestBody: RejectDomainTransferFromAnotherAwsAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<RejectDomainTransferFromAnotherAwsAccountResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your AWS account.</p> <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.RenewDomain
		 * @return {RenewDomainResponse} Success
		 */
		RenewDomain(requestBody: RenewDomainRequest, headersHandler?: () => {[header: string]: string}): Promise<RenewDomainResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.RenewDomain', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.
		 * Post /#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail
		 * @return {ResendContactReachabilityEmailResponse} Success
		 */
		ResendContactReachabilityEmail(requestBody: ResendContactReachabilityEmailRequest, headersHandler?: () => {[header: string]: string}): Promise<ResendContactReachabilityEmailResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * This operation returns the AuthCode for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.
		 * Post /#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode
		 * @return {RetrieveDomainAuthCodeResponse} Success
		 */
		RetrieveDomainAuthCode(requestBody: RetrieveDomainAuthCodeRequest, headersHandler?: () => {[header: string]: string}): Promise<RetrieveDomainAuthCodeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p> <p>For more information about transferring domains, see the following topics:</p> <ul> <li> <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> <li> <p>For information about how to transfer a domain from one AWS account to another, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> </li> <li> <p>For information about how to transfer a domain to another domain registrar, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul> <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p> <important> <p>If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.</p> </important> <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.TransferDomain
		 * @return {TransferDomainResponse} Success
		 */
		TransferDomain(requestBody: TransferDomainRequest, headersHandler?: () => {[header: string]: string}): Promise<TransferDomainResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.TransferDomain', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Transfers a domain from the current AWS account to another AWS account. Note the following:</p> <ul> <li> <p>The AWS account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p> </li> <li> <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p> </li> <li> <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p> </li> </ul> <important> <p>When you transfer a domain from one AWS account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another AWS account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a Different AWS Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount
		 * @return {TransferDomainToAnotherAwsAccountResponse} Success
		 */
		TransferDomainToAnotherAwsAccount(requestBody: TransferDomainToAnotherAwsAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<TransferDomainToAnotherAwsAccountResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical.</p> <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact
		 * @return {UpdateDomainContactResponse} Success
		 */
		UpdateDomainContact(requestBody: UpdateDomainContactRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateDomainContactResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi.</p> <p>This operation affects only the contact information for the specified contact type (registrant, administrator, or tech). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p> <important> <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p> </important>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy
		 * @return {UpdateDomainContactPrivacyResponse} Success
		 */
		UpdateDomainContactPrivacy(requestBody: UpdateDomainContactPrivacyRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateDomainContactPrivacyResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers
		 * @return {UpdateDomainNameserversResponse} Success
		 */
		UpdateDomainNameservers(requestBody: UpdateDomainNameserversRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateDomainNameserversResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This operation adds or updates tags for a specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
		 * Post /#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain
		 * @return {UpdateTagsForDomainResponse} Success
		 */
		UpdateTagsForDomain(requestBody: UpdateTagsForDomainRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateTagsForDomainResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns all the domain-related billing records for the current AWS account for a specified period
		 * Post /#X-Amz-Target=Route53Domains_v20140515.ViewBilling
		 * @return {ViewBillingResponse} Success
		 */
		ViewBilling(requestBody: ViewBillingRequest, headersHandler?: () => {[header: string]: string}): Promise<ViewBillingResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=Route53Domains_v20140515.ViewBilling', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

