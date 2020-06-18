import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {

	/**A login credential mapped to a user identity. For password credentials, the username to present for Basic auth is the user's username from the user record */
	export interface AccessCredential {

		/**The timestamp of creation of the credential */
		created_at?: string;

		/**The type of credential */
		type: AccessCredentialType;

		/**The credential value (e.g. the password) */
		value: string;
	}

	export enum AccessCredentialType { password = 0 }


	/**Account information */
	export interface Account {

		/**The timestamp when the account was created */
		created_at?: Date;

		/**Optional email address associated with the account */
		email?: string;

		/**The timestamp of the last update to the account metadata itself (not users or creds) */
		last_updated?: Date;

		/**The account identifier, not updatable after creation */
		name: string;

		/**State of the account. Disabled accounts prevent member users from logging in, deleting accounts are disabled and pending deletion and will be removed once all owned resources are garbage collected by the system */
		state?: AccountState;

		/**The user type (admin vs user). If not specified in a POST request, 'user' is default */
		type?: AccountType;
	}

	export enum AccountState { enabled = 0, disabled = 1, deleting = 2 }

	export enum AccountType { user = 0, admin = 1, service = 2 }


	/**An account to create/add to the system. If already exists will return 400. */
	export interface AccountCreationRequest {

		/**
		 * An optional email to associate with the account for contact purposes
		 * Pattern: [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?
		 */
		email?: string;

		/**
		 * The account name to use. This will identify the account and must be globally unique in the system.
		 * Pattern: ^[a-zA-Z0-9][a-zA-Z0-9@.!#$+-=^_`~;]{1,126}[a-zA-Z0-9]$
		 */
		name: string;
	}


	/**A summary of account status */
	export interface AccountStatus {

		/**The status of the account */
		state?: AccountStatusState;
	}

	export enum AccountStatusState { enabled = 0, disabled = 1 }


	/**The result of adding a single digest to the archive */
	export interface AnalysisArchiveAddResult {

		/**Details on the status, e.g. the error message */
		detail?: string;

		/**The image digest requested to be added */
		digest?: string;

		/**The status of the archive add operation. Typically either 'archived' or 'error' */
		status?: AnalysisArchiveAddResultStatus;
	}

	export enum AnalysisArchiveAddResultStatus { archived = 0, archiving = 1, error = 2 }


	/**Summary of the transition rule set */
	export interface AnalysisArchiveRulesSummary {

		/**The number of rules for this account */
		count?: number;

		/**The newest last_updated timestamp from the set of rules */
		last_updated?: Date;
	}


	/**An image reference in the analysis archive for the purposes of loading analysis from the archive into th working set */
	export interface AnalysisArchiveSource {

		/**
		 * The image digest identify the analysis. Archived analyses are based on digest, tag records are restored as analysis is restored.
		 * Pattern: ^sha256:[a-fA-F0-9]{64}$
		 */
		digest: string;
	}


	/**A summarization of the analysis archive, including size, counts, etc. This archive stores image analysis only, never the actual image content or layers. */
	export interface AnalysisArchiveSummary {

		/**The timestamp of the most recent archived image */
		last_updated?: Date;

		/**The total sum of all the bytes stored to the backing storage. Accounts for anchore-applied compression, but not compression by the underlying storage system. */
		total_data_bytes?: number;

		/**The number of unique images (digests) in the archive */
		total_image_count?: number;

		/**The number of tag records (registry/repo:tag pull strings) in the archive. This may include repeated tags but will always have a unique tag->digest mapping per record. */
		total_tag_count?: number;
	}


	/**A rule for auto-archiving image analysis by time and/or tag-history */
	export interface AnalysisArchiveTransitionHistory {
		created_at?: Date;
		imageDigest?: string;
		last_updated?: Date;
		rule_id?: string;
		transition?: AnalysisArchiveTransitionHistoryTransition;

		/**The task that created & updated this entry */
		transition_task_id?: string;
	}

	export enum AnalysisArchiveTransitionHistoryTransition { archive = 0, delete = 1 }


	/**A rule for auto-archiving image analysis by time and/or tag-history */
	export interface AnalysisArchiveTransitionRule {

		/**Matches if the analysis is strictly older than this number of days */
		analysis_age_days?: number;
		created_at?: Date;
		last_updated?: Date;

		/**A set of selection criteria to match an image by a tagged pullstring based on its components, with regex support in each field */
		selector?: ImageSelector;

		/**True if the rule applies to all accounts in the system. This is only available to admin users to update/modify, but all users with permission to list rules can see them */
		system_global?: boolean;

		/**Number of images mapped to the tag that are newer */
		tag_versions_newer?: number;

		/**The type of transition to make. If "archive", then archive an image from the working set and remove it from the working set. If "delete", then match against archived images and delete from the archive if match. */
		transition: AnalysisArchiveTransitionRuleTransition;
	}

	export enum AnalysisArchiveTransitionRuleTransition { archive = 0, delete = 1 }


	/**A description of an anchore error code (name, description) */
	export interface AnchoreErrorCode {

		/**Description of the error code */
		description?: string;

		/**Error code name */
		name?: string;
	}


	/**A unique image in the engine. May have multiple tags or references. Unique to an image content across registries or repositories. */
	export interface AnchoreImage {

		/**A state value for the current status of the analysis progress of the image */
		analysis_status?: AnchoreImageAnalysis_status;
		annotations?: string;
		created_at?: Date;
		imageDigest?: string;

		/**A metadata content record for a specific image, containing different content type entries */
		image_content?: ImageContent;

		/**Details specific to an image reference and type such as tag and image source */
		image_detail?: Array<ImageDetail>;

		/**State of the image */
		image_status?: AnchoreImageImage_status;
		last_updated?: Date;
		userId?: string;
	}

	export enum AnchoreImageAnalysis_status { not_analyzed = 0, analyzing = 1, analyzed = 2, analysis_failed = 3 }

	export enum AnchoreImageImage_status { active = 0, inactive = 1, disabled = 2 }


	/**A unique image in the engine. */
	export interface AnchoreImageTagSummary {
		analysis_status?: string;
		analyzed_at?: number;
		created_at?: number;
		fulltag?: string;
		imageDigest?: string;
		imageId?: string;
		parentDigest?: string;
		tag_detected_at?: number;
	}


	/**Generic HTTP API error response */
	export interface ApiErrorResponse {
		code?: number;

		/**Details structure for additional information about the error if available. Content and structure will be error specific. */
		detail?: string;
		error_type?: string;
		message?: string;
	}


	/**A summarization of the available archives, a place to for long-term storage of audit, analysis, or other data to remove it from the system's working set but keep it available. */
	export interface ArchiveSummary {

		/**A summarization of the analysis archive, including size, counts, etc. This archive stores image analysis only, never the actual image content or layers. */
		images?: AnalysisArchiveSummary;

		/**Summary of the transition rule set */
		rules?: AnalysisArchiveRulesSummary;
	}

	export interface ArchivedAnalysis {
		analyzed_at?: Date;

		/**User provided annotations as key-value pairs */
		annotations?: string;

		/**The size, in bytes, of the analysis archive file */
		archive_size_bytes?: number;
		created_at?: Date;

		/**The image digest (digest of the manifest describing the image, per docker spec) */
		imageDigest?: string;

		/**List of tags associated with the image digest */
		image_detail?: Array<TagEntry>;
		last_updated?: Date;

		/**The digest of a parent manifest (for manifest-list images) */
		parentDigest?: string;

		/**The archival status */
		status?: ArchivedAnalysisStatus;
	}

	export enum ArchivedAnalysisStatus { archiving = 0, archived = 1, deleting = 2, deleted = 3 }

	export interface CVSSV2Scores {
		base_score?: number;
		exploitability_score?: number;
		impact_score?: number;
	}

	export interface CVSSV3Scores {
		base_score?: number;
		exploitability_score?: number;
		impact_score?: number;
	}


	/**File content listings from images */
	export interface ContentFilesResponse {
		ContentFilesResponseContent?: Array<ContentFilesResponseContent>;
		content_type?: string;
		imageDigest?: string;
	}

	export interface ContentFilesResponseContent {
		filename?: string;
		gid?: number;
		linkdest?: string;
		mode?: string;
		sha256?: string;
		size?: number;
		type?: string;
		uid?: number;
	}


	/**Java package content listings from images */
	export interface ContentJAVAPackageResponse {
		ContentJAVAPackageResponseContent?: Array<ContentJAVAPackageResponseContent>;
		content_type?: string;
		imageDigest?: string;
	}

	export interface ContentJAVAPackageResponseContent {
		implementation-version?: string;
		location?: string;
		maven-version?: string;
		origin?: string;
		package?: string;
		specification-version?: string;
		type?: string;
	}


	/**Package content listings from images */
	export interface ContentPackageResponse {
		ContentPackageResponseContent?: Array<ContentPackageResponseContent>;
		content_type?: string;
		imageDigest?: string;
	}

	export interface ContentPackageResponseContent {
		license?: string;
		location?: string;
		origin?: string;
		package?: string;
		size?: string;
		type?: string;
		version?: string;
	}


	/**Generic wrapper for content listings from images */
	export interface ContentResponse {
		content?: Array<string>;
		content_type?: string;
		imageDigest?: string;
	}


	/**A collection of event subcategories */
	export interface EventCategory {
		category?: string;
		description?: string;
		subcategories?: Array<EventSubcategory>;
	}


	/**A description of an event type */
	export interface EventDescription {

		/**The message associated with the event type */
		message?: string;

		/**The event type. The last component of the fully-qualified event_type (category.subcategory.event) */
		name?: string;

		/**The type of resource this event is generated from */
		resource_type?: string;

		/**The fully qualified event type as would be seen in the event payload */
		type?: string;
	}


	/**A record of occurance of an asynchronous event triggered either by system or by user activity */
	export interface EventResponse {
		created_at?: Date;
		event?: string;
		generated_uuid?: string;
	}


	/**A collection of events related to each other */
	export interface EventSubcategory {
		description?: string;
		events?: Array<EventDescription>;
		name?: string;
	}


	/**Response envelope for paginated listing of events */
	export interface EventsList {

		/**Number of events in this page */
		item_count?: number;

		/**Boolean flag, True indicates there are more events and False otherwise */
		next_page?: boolean;

		/**Page number of this result set */
		page?: number;

		/**List of events */
		results?: Array<EventResponse>;
	}

	export interface FeedGroupMetadata {
		created_at?: Date;
		last_sync?: Date;
		name?: string;
		record_count?: number;
	}


	/**Metadata on a single feed based on what the engine finds from querying the endpoints */
	export interface FeedMetadata {

		/**Date the metadata record was created in engine (first seen on source) */
		created_at?: Date;
		groups?: Array<FeedGroupMetadata>;
		last_full_sync?: Date;

		/**name of the feed */
		name?: string;

		/**Date the metadata was last updated */
		updated_at?: Date;
	}


	/**The result of a sync of a single feed */
	export interface FeedSyncResult {

		/**The name of the feed synced */
		feed?: string;

		/**Array of group sync results */
		groups?: Array<GroupSyncResult>;

		/**The result of the sync operations, either co */
		status?: FeedSyncResultStatus;

		/**The duratin, in seconds, of the sync of the feed, the sum of all the group syncs */
		total_time_seconds?: number;
	}

	export enum FeedSyncResultStatus { success = 0, failure = 1 }


	/**The retrieved file entry including content (b64 encoded) */
	export interface FileContentSearchResult {
		matches?: Array<RegexContentMatch>;
		path?: string;
	}


	/**A description of the set of gates available in this engine and the triggers and parameters supported */
	export interface GateSpec {

		/**Description of the gate */
		description?: string;

		/**Gate name, as it would appear in a policy document */
		name?: string;

		/**State of the gate and transitively all triggers it contains if not 'active' */
		state?: GateSpecState;

		/**The name of another trigger that supercedes this on functionally if this is deprecated */
		superceded_by?: string;

		/**List of the triggers that can fire for this Gate */
		triggers?: Array<TriggerSpec>;
	}

	export enum GateSpecState { active = 0, deprecated = 1, eol = 2 }

	export interface GroupSyncResult {

		/**The name of the group */
		group?: string;
		status?: GroupSyncResultStatus;

		/**The duration of the group sync in seconds */
		total_time_seconds?: number;

		/**The number of images updated by the this group sync, across all accounts. This is typically only non-zero for vulnerability feeds which update images' vulnerability results during the sync. */
		updated_image_count?: number;

		/**The number of feed data records synced down as either updates or new records */
		updated_record_count?: number;
	}

	export enum GroupSyncResultStatus { success = 0, failure = 1 }


	/**A request to add an image to be watched and analyzed by the engine. Optionally include the dockerfile content. Either source, digest or tag must be present. */
	export interface ImageAnalysisRequest {

		/**Annotations to be associated with the added image in key/value form */
		annotations?: string;

		/**Optional override of the image creation time, only honored when both tag and digest are also supplied  e.g. 2018-10-17T18:14:00Z. Deprecated in favor of the 'source' field */
		created_at?: Date;

		/**A digest string for an image, maybe a pull string or just a digest. e.g. nginx@sha256:123 or sha256:abc123. If a pull string, it must have same regisry/repo as the tag field. Deprecated in favor of the 'source' field */
		digest?: string;

		/**
		 * Base64 encoded content of the dockerfile for the image, if available. Deprecated in favor of the 'source' field.
		 * Pattern: ^[a-zA-Z0-9+/=]+$
		 */
		dockerfile?: string;

		/**Optional. The type of image this is adding, defaults to "docker". This can be ommitted until multiple image types are supported. */
		image_type?: string;

		/**A set of analysis source types. Only one may be set in any given request. */
		source?: ImageSource;

		/**Full pullable tag reference for image. e.g. docker.io/nginx:latest. Deprecated in favor of the 'source' field */
		tag?: string;
	}


	/**A metadata detail record for a specific image. Multiple detail records may map a single catalog image. */
	export interface ImageDetail {
		created_at?: Date;
		dockerfile?: string;

		/**Full docker-pullable digest string including the registry url and repository necessary get the image */
		fulldigest?: string;

		/**Full docker-pullable tag string referencing the image */
		fulltag?: string;

		/**The parent Anchore Image record to which this detail maps */
		imageDigest?: string;
		imageId?: string;
		last_updated?: Date;
		registry?: string;
		repo?: string;
		userId?: string;
	}


	/**Filter for an image list by id, tag, or digest, but not both */
	export interface ImageFilter {
		digest?: string;
		tag?: string;
	}


	/**A reference to an image */
	export interface ImageRef {
		type: string;
		value: string;
	}

	export enum ImageRefType { tag = 0, digest = 1, id = 2 }


	/**A summary of an image identity, including digest, id (if available), and any tags known to have ever been mapped to the digest */
	export interface ImageReference {

		/**Timestamp, in rfc3339 format, indicating when the image state became 'analyzed' in Anchore Engine. */
		analyzed_at?: string;

		/**The image digest */
		digest?: string;

		/**The image id if available */
		id?: string;
		tag_history?: Array<TagEntry>;
	}

	export interface ImageSelectionRule {
		id?: string;

		/**A reference to an image */
		image: ImageRef;
		name: string;
		registry: string;
		repository: string;
	}


	/**A set of selection criteria to match an image by a tagged pullstring based on its components, with regex support in each field */
	export interface ImageSelector {

		/**The registry section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "docker.io" */
		registry?: string;

		/**The repository section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "anchore/anchore-engine" */
		repository?: string;

		/**The tag-only section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "latest" */
		tag?: string;
	}


	/**A set of analysis source types. Only one may be set in any given request. */
	export interface ImageSource {

		/**An image reference in the analysis archive for the purposes of loading analysis from the archive into th working set */
		archive?: AnalysisArchiveSource;

		/**An image reference using a digest in a registry, includes some extra tag and timestamp info in addition to the pull string to allow proper tag history reconstruction. */
		digest?: RegistryDigestSource;

		/**An image reference using a tag in a registry, this is the most common source type. */
		tag?: RegistryTagSource;
	}


	/**An image record that contains packages */
	export interface ImageWithPackages {

		/**A summary of an image identity, including digest, id (if available), and any tags known to have ever been mapped to the digest */
		image?: ImageReference;
		packages?: Array<PackageReference>;
	}

	export interface MappingRule {
		id?: string;

		/**A reference to an image */
		image: ImageRef;
		name: string;

		/**Optional single policy to evalute, if set will override any value in policy_ids, for backwards compatibility. Generally, policy_ids should be used even with a array of length 1. */
		policy_id?: string;

		/**List of policyIds to evaluate in order, to completion */
		policy_ids?: Array<string>;
		registry: string;
		repository: string;
		whitelist_ids?: Array<string>;
	}


	/**Generic wrapper for metadata listings from images */
	export interface MetadataResponse {
		imageDigest?: string;
		metadata?: string;
		metadata_type?: string;
	}

	export interface NvdDataObject {
		cvss_v2?: CVSSV2Scores;
		cvss_v3?: CVSSV3Scores;

		/**NVD Vulnerability ID */
		id?: string;
	}


	/**A record of a software item which is vulnerable or carries a fix for a vulnerability */
	export interface PackageReference {

		/**Package name */
		name?: string;

		/**Package type (e.g. package, rpm, deb, apk, jar, npm, gem, ...) */
		type?: string;

		/**A version for the package. If null, then references all versions */
		version?: string;
	}


	/**Pagination wrapped list of images that match some filter */
	export interface PaginatedImageList extends PaginationProperties {
		images?: Array<ImageWithPackages>;
	}


	/**A paginated listing of vulnerability records sorted by ID in descending order */
	export interface PaginatedVulnerabilityList extends PaginationProperties {

		/**The listing of matching vulnerabilities for the query subject to pagination */
		vulnerabilities?: Array<StandaloneVulnerability>;
	}


	/**Pagination wrapped list of images with vulnerabilties that match some filter */
	export interface PaginatedVulnerableImageList extends PaginationProperties {
		images?: Array<VulnerableImage>;
	}


	/**Properties for common pagination handling to be included in any wrapping object that needs pagination elements */
	export interface PaginationProperties {

		/**True if additional pages exist (page + 1) or False if this is the last page */
		next_page?: string;

		/**The page number returned (should match the requested page query string param) */
		page?: string;

		/**The number of items sent in this response */
		returned_count?: number;
	}

	export interface Policy {
		comment?: string;
		id: string;
		name?: string;
		rules?: Array<PolicyRule>;
		version: string;
	}


	/**A bundle containing a set of policies, whitelists, and rules for mapping them to specific images */
	export interface PolicyBundle {

		/**List of mapping rules that define which images should always result in a STOP/FAIL policy result regardless of policy content or presence in whitelisted_images */
		blacklisted_images?: Array<ImageSelectionRule>;

		/**Description of the bundle, human readable */
		comment?: string;

		/**Id of the bundle */
		id: string;

		/**Mapping rules for defining which policy and whitelist(s) to apply to an image based on a match of the image tag or id. Evaluated in order. */
		mappings: Array<MappingRule>;

		/**Human readable name for the bundle */
		name?: string;

		/**Policies which define the go/stop/warn status of an image using rule matches on image properties */
		policies: Array<Policy>;

		/**Version id for this bundle format */
		version: string;

		/**List of mapping rules that define which images should always be passed (unless also on the blacklist), regardless of policy result. */
		whitelisted_images?: Array<ImageSelectionRule>;

		/**Whitelists which define which policy matches to disregard explicitly in the final policy decision */
		whitelists?: Array<Whitelist>;
	}


	/**A policy bundle plus some metadata */
	export interface PolicyBundleRecord {

		/**True if the bundle is currently defined to be used automatically */
		active?: boolean;
		created_at?: Date;
		last_updated?: Date;

		/**The bundle's identifier */
		policyId?: string;

		/**Source location of where the policy bundle originated */
		policy_source?: string;

		/**A bundle containing a set of policies, whitelists, and rules for mapping them to specific images */
		policybundle?: PolicyBundle;

		/**UserId of the user that owns the bundle */
		userId?: string;
	}


	/**A rule that defines and decision value if the match is found true for a given image. */
	export interface PolicyRule {
		action: string;
		gate: string;
		id?: string;
		PolicyRuleParams?: Array<PolicyRuleParams>;
		trigger: string;
	}

	export enum PolicyRuleAction { GO = 0, STOP = 1, WARN = 2 }

	export interface PolicyRuleParams {
		name: string;
		value: string;
	}


	/**Match of a named regex on a file */
	export interface RegexContentMatch {

		/**A list of line numbers in the file that matched the regex */
		lines?: Array<number>;

		/**The name associated with the regular expression */
		name?: string;

		/**The regular expression used for the match */
		regex?: string;
	}


	/**A registry entry describing the endpoint and credentials for a registry to pull images from */
	export interface RegistryConfiguration {
		created_at?: Date;
		last_upated?: Date;

		/**hostname:port string for accessing the registry, as would be used in a docker pull operation */
		registry?: string;

		/**human readable name associated with registry record */
		registry_name?: string;

		/**Type of registry */
		registry_type?: string;

		/**Username portion of credential to use for this registry */
		registry_user?: string;

		/**Use TLS/SSL verification for the registry URL */
		registry_verify?: boolean;

		/**Engine user that owns this registry entry */
		userId?: string;
	}


	/**A registry record describing the endpoint and credentials for a registry */
	export interface RegistryConfigurationRequest {

		/**hostname:port string for accessing the registry, as would be used in a docker pull operation. May include some or all of a repository and wildcards (e.g. docker.io/library/* or gcr.io/myproject/myrepository) */
		registry?: string;

		/**human readable name associated with registry record */
		registry_name?: string;

		/**Password portion of credential to use for this registry */
		registry_pass?: string;

		/**Type of registry */
		registry_type?: string;

		/**Username portion of credential to use for this registry */
		registry_user?: string;

		/**Use TLS/SSL verification for the registry URL */
		registry_verify?: boolean;
	}


	/**An image reference using a digest in a registry, includes some extra tag and timestamp info in addition to the pull string to allow proper tag history reconstruction. */
	export interface RegistryDigestSource {

		/**Optional override of the image creation time to support proper tag history construction in cases of out-of-order analysis compared to registry history for the tag */
		creation_timestamp_override: Date;

		/**
		 * Base64 encoded content of the dockerfile used to build the image, if available.
		 * Pattern: ^[a-zA-Z0-9+/=]+$
		 */
		dockerfile?: string;

		/**A digest-based pullstring (e.g. docker.io/nginx@sha256:123abc) */
		pullstring: string;

		/**A docker pull string (e.g. docker.io/nginx:latest, or docker.io/nginx@sha256:abd) to retrieve the image */
		tag: string;
	}


	/**An image reference using a tag in a registry, this is the most common source type. */
	export interface RegistryTagSource {

		/**
		 * Base64 encoded content of the dockerfile used to build the image, if available.
		 * Pattern: ^[a-zA-Z0-9+/=]+$
		 */
		dockerfile?: string;

		/**A docker pull string (e.g. docker.io/nginx:latest, or docker.io/nginx@sha256:abd) to retrieve the image */
		pullstring: string;
	}


	/**The retrieved file entry including content (b64 encoded) */
	export interface RetrievedFile {
		b64_content?: string;
		path?: string;
	}


	/**The retrieved file entry including content (b64 encoded) */
	export interface SecretSearchResult {
		matches?: Array<RegexContentMatch>;
		path?: string;
	}


	/**A service status record */
	export interface Service {

		/**The url to reach the service, including port as needed */
		base_url?: string;

		/**The unique id of the host on which the service is executing */
		hostid?: string;

		/**System status response */
		service_detail?: StatusResponse;

		/**Registered service name */
		servicename?: string;
		status?: boolean;

		/**A state indicating the condition of the service. Normal operation is 'registered' */
		status_message?: string;

		/**The version of the service as reported by the service implementation on registration */
		version?: string;
	}


	/**Version information for a service */
	export interface ServiceVersion {

		/**Api Version string */
		api?: string;
		db?: string;
		service?: string;
	}


	/**A single vulnerability record in a single namespace, the unique key is the combinatino of the id and namespace */
	export interface StandaloneVulnerability {

		/**The array of packages (typically packages) that are vulnerable-to or provide fixes-for this vulnerability */
		affected_packages?: Array<PackageReference>;

		/**Vulnerability identifier. May be CVE-X, RHSA-X, etc. Not necessarily unique across namespaces */
		id?: string;

		/**URL for the upstream CVE record in the reporting source (e.g. ubuntu security tracker) */
		link?: string;

		/**The namespace for the vulnerability record to avoid conflicts for the same id in different distros or sources (e.g. deb vs ubuntu for same CVE) */
		namespace?: string;

		/**List of Nvd Data objects */
		nvd_data?: Array<NvdDataObject>;

		/**Severity label specific to the namepsace */
		severity?: StandaloneVulnerabilitySeverity;

		/**List of Vendor Data objects */
		vendor_data?: Array<VendorDataObject>;
	}

	export enum StandaloneVulnerabilitySeverity { Unknown = 0, Negligible = 1, Low = 2, Medium = 3, High = 4, Critical = 5 }


	/**System status response */
	export interface StatusResponse {
		available?: boolean;
		busy?: boolean;
		db_version?: string;
		detail?: string;
		message?: string;
		up?: boolean;
		version?: string;
	}


	/**Subscription entry */
	export interface Subscription {

		/**Is the subscription currently active */
		active?: boolean;

		/**the unique id for this subscription record */
		subscription_id?: string;

		/**The key value that the subscription references. E.g. a tag value or a repo name. */
		subscription_key?: string;

		/**The type of the subscription */
		subscription_type?: SubscriptionSubscription_type;

		/**The value of the subscription target */
		subscription_value?: string;

		/**The userId of the subscribed user */
		userId?: string;
	}

	export enum SubscriptionSubscription_type { policy_eval = 0, tag_update = 1, vuln_update = 2, repo_update = 3, analysis_update = 4 }


	/**A subscription entry to add to the system */
	export interface SubscriptionRequest {
		subscription_key?: string;
		subscription_type?: SubscriptionRequestSubscription_type;
		subscription_value?: string;
	}

	export enum SubscriptionRequestSubscription_type { policy_eval = 0, tag_update = 1, vuln_update = 2, repo_update = 3, analysis_update = 4 }


	/**A modification to a subscription entry to change its status or value */
	export interface SubscriptionUpdate {

		/**Toggle the subscription processing on or off */
		active?: boolean;

		/**The new subscription value, e.g. the new tag to be subscribed to */
		subscription_value?: string;
	}


	/**System status response */
	export interface SystemStatusResponse {

		/**A list of service objects */
		service_states?: Array<Service>;
	}


	/**A docker-pullable tag value as well as deconstructed components */
	export interface TagEntry {

		/**The timestamp at which the Anchore Engine detected this tag was mapped to the image digest. Does not necessarily indicate when the tag was actually pushed to the registry. */
		detected_at?: Date;

		/**The pullable string for the tag. E.g. "docker.io/library/node:latest" */
		pullstring?: string;

		/**The registry hostname:port section of the pull string */
		registry?: string;

		/**The repository section of the pull string */
		repository?: string;

		/**The tag-only section of the pull string */
		tag?: string;
	}

	export interface TokenResponse {

		/**The token content */
		token: string;
	}

	export interface TriggerParamSpec {
		description?: string;

		/**An example value for the parameter (encoded as a string if the parameter is an object or list type) */
		example?: string;

		/**Parameter name as it appears in policy document */
		name?: string;

		/**Is this a required parameter or optional */
		required?: boolean;

		/**State of the trigger parameter */
		state?: TriggerParamSpecState;

		/**The name of another trigger that supercedes this on functionally if this is deprecated */
		superceded_by?: string;

		/**If present, a definition for validation of input. Typically a jsonschema object that can be used to validate an input against. */
		validator?: string;
	}

	export enum TriggerParamSpecState { active = 0, deprecated = 1, eol = 2 }


	/**Definition of a trigger and its parameters */
	export interface TriggerSpec {

		/**Trigger description for what it tests and when it will fire during evaluation */
		description?: string;

		/**Name of the trigger as it would appear in a policy document */
		name?: string;

		/**The list of parameters that are valid for this trigger */
		parameters?: Array<TriggerParamSpec>;

		/**State of the trigger */
		state?: TriggerSpecState;

		/**The name of another trigger that supercedes this on functionally if this is deprecated */
		superceded_by?: string;
	}

	export enum TriggerSpecState { active = 0, deprecated = 1, eol = 2 }


	/**A username for authenticating with one or more types of credentials. User type defines the expected credentials allowed for the user. Native users have passwords, External users have no credential internally. Internal users are service/system users for inter-service communication. */
	export interface User {

		/**The timestampt the user record was created */
		created_at?: Date;

		/**The timestamp of the last update to this record */
		last_updated?: Date;

		/**If the user is external, this is the source that the user was initialized from. All other user types have this set to null */
		source?: string;

		/**The user's type */
		type?: UserType;

		/**The username to authenticate with */
		username: string;
	}

	export enum UserType { native = 0, internal = 1, external = 2 }


	/**A payload for creating a new user, includes the username and password in a single request */
	export interface UserCreationRequest {

		/**
		 * The initial password for the user, must be at least 6 characters, up to 128
		 * Pattern: .{6,128}$
		 */
		password: string;

		/**
		 * The username to create
		 * Pattern: ^[a-zA-Z0-9][a-zA-Z0-9@.!#$+-=^_`~;]{1,126}[a-zA-Z0-9]$
		 */
		username: string;
	}

	export interface VendorDataObject {
		cvss_v2?: CVSSV2Scores;
		cvss_v3?: CVSSV3Scores;

		/**Vendor Vulnerability ID */
		id?: string;
	}

	export interface Vulnerability {

		/**The name of the feed where vulnerability match was made */
		feed?: string;

		/**The name of the feed group where vulnerability match was made */
		feed_group?: string;

		/**The package containing a fix, if available */
		fix?: string;

		/**List of Nvd Data objects */
		nvd_data?: Array<NvdDataObject>;

		/**The package name and version that are vulnerable in the image */
		package?: string;

		/**The CPE string (if applicable) describing the package to vulnerability match */
		package_cpe?: string;

		/**The name of the vulnerable package artifact */
		package_name?: string;

		/**The location (if applicable) of the vulnerable package in the container filesystem */
		package_path?: string;

		/**The type of vulnerable package */
		package_type?: string;

		/**The version of the vulnerable package artifact */
		package_version?: string;

		/**The severity of the vulnerability */
		severity?: string;

		/**The url for more information about the vulnerability */
		url?: string;

		/**List of Vendor Data objects */
		vendor_data?: Array<VendorDataObject>;

		/**The vulnerability identifier, such as CVE-2017-100, or RHSA-2017123 */
		vuln?: string;
	}


	/**envelope containing list of vulnerabilities */
	export interface VulnerabilityResponse {
		imageDigest?: string;

		/**List of Vulnerability objects */
		vulnerabilities?: Array<Vulnerability>;
		vulnerability_type?: string;
	}


	/**A record of an image vulnerable to some known vulnerability. Includes vulnerable package information */
	export interface VulnerableImage {
		affected_packages?: Array<VulnerablePackageReference>;

		/**A summary of an image identity, including digest, id (if available), and any tags known to have ever been mapped to the digest */
		image?: ImageReference;
	}


	/**A record of a software item which is vulnerable or carries a fix for a vulnerability */
	export interface VulnerablePackageReference {

		/**Package name */
		name?: string;

		/**Vulnerability namespace of affected package */
		namespace?: string;

		/**Severity of vulnerability affecting package */
		severity?: string;

		/**Package type (e.g. package, rpm, deb, apk, jar, npm, gem, ...) */
		type?: string;

		/**A version for the package. If null, then references all versions */
		version?: string;
	}


	/**A collection of whitelist items to match a policy evaluation against. */
	export interface Whitelist {
		comment?: string;
		id: string;
		items?: Array<WhitelistItem>;
		name?: string;
		version: string;
	}


	/**Identifies a specific gate and trigger match from a policy against an image and indicates it should be ignored in final policy decisions */
	export interface WhitelistItem {
		gate: string;
		id?: string;
		trigger_id: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Simple status check
		 * Get 
		 * @return {string} Version check response, returns the api version prefix (e.g. 'v1')
		 */
		Ping(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + '', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * List the account for the authenticated user
		 * Get account
		 * @return {Account} User details for caller's user
		 */
		Get_users_account(headersHandler?: () => HttpHeaders): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'account', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List user summaries. Only available to the system admin user.
		 * Get accounts
		 * @param {string} state Filter accounts by state
		 * @return {Array<Account>} Accound summary listing
		 */
		List_accounts(state: string, headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'accounts?state=' + (state == null ? '' : encodeURIComponent(state)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new user. Only avaialble to admin user.
		 * Post accounts
		 * @return {Account} Account Record
		 */
		Create_account(requestBody: AccountCreationRequest, headersHandler?: () => HttpHeaders): Observable<Account> {
			return this.http.post<Account>(this.baseUri + 'accounts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete the specified account, only allowed if the account is in the disabled state. All users will be deleted along with the account and all resources will be garbage collected
		 * Delete accounts/{accountname}
		 * @return {void} 
		 */
		Delete_account(accountname: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get info about an user. Only available to admin user. Uses the main user Id, not a username.
		 * Get accounts/{accountname}
		 * @return {Account} Get user information
		 */
		Get_account(accountname: string, headersHandler?: () => HttpHeaders): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update the state of an account to either enabled or disabled. For deletion use the DELETE route
		 * Put accounts/{accountname}/state
		 * @return {AccountStatus} Updated state of the account
		 */
		Update_account_state(accountname: string, requestBody: AccountStatus, headersHandler?: () => HttpHeaders): Observable<AccountStatus> {
			return this.http.put<AccountStatus>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/state', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List accounts for the user
		 * Get accounts/{accountname}/users
		 * @return {Array<User>} User listing
		 */
		List_users(accountname: string, headersHandler?: () => HttpHeaders): Observable<Array<User>> {
			return this.http.get<Array<User>>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new user
		 * Post accounts/{accountname}/users
		 * @return {User} Credential summary
		 */
		Create_user(accountname: string, requestBody: UserCreationRequest, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.post<User>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a specific user credential by username of the credential. Cannot be the credential used to authenticate the request.
		 * Delete accounts/{accountname}/users/{username}
		 * @return {void} 
		 */
		Delete_user(accountname: string, username: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific user in the specified account
		 * Get accounts/{accountname}/users/{username}
		 * @return {User} User record
		 */
		Get_account_user(accountname: string, username: string, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a credential by type
		 * Delete accounts/{accountname}/users/{username}/credentials
		 * @return {void} 
		 */
		Delete_user_credential(accountname: string, username: string, credential_type: AccessCredentialType, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users/' + (username == null ? '' : encodeURIComponent(username)) + '/credentials&credential_type=' + credential_type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get current credential summary
		 * Get accounts/{accountname}/users/{username}/credentials
		 * @return {Array<AccessCredential>} User credential listing
		 */
		List_user_credentials(accountname: string, username: string, headersHandler?: () => HttpHeaders): Observable<Array<AccessCredential>> {
			return this.http.get<Array<AccessCredential>>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users/' + (username == null ? '' : encodeURIComponent(username)) + '/credentials', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * add/replace credential
		 * Post accounts/{accountname}/users/{username}/credentials
		 * @return {User} Add a credential, overwritting if already exists
		 */
		Create_user_credential(accountname: string, username: string, requestBody: AccessCredential, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.post<User>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users/' + (username == null ? '' : encodeURIComponent(username)) + '/credentials', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get archives
		 * @return {ArchiveSummary} Archive summary listing
		 */
		List_archives(headersHandler?: () => HttpHeaders): Observable<ArchiveSummary> {
			return this.http.get<ArchiveSummary>(this.baseUri + 'archives', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get archives/images
		 * @return {Array<ArchivedAnalysis>} Image analysis archive listing for the requesting account (not the whole system)
		 */
		List_analysis_archive(headersHandler?: () => HttpHeaders): Observable<Array<ArchivedAnalysis>> {
			return this.http.get<Array<ArchivedAnalysis>>(this.baseUri + 'archives/images', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post archives/images
		 * @return {Array<AnalysisArchiveAddResult>} Archive statuses
		 */
		Archive_image_analysis(requestBody: ImageAnalysisReferences, headersHandler?: () => HttpHeaders): Observable<Array<AnalysisArchiveAddResult>> {
			return this.http.post<Array<AnalysisArchiveAddResult>>(this.baseUri + 'archives/images', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Performs a synchronous archive deletion
		 * Delete archives/images/{imageDigest}
		 * @return {ArchivedAnalysis} ArchivdImageAnalysis record but with status 'deleted'
		 */
		Delete_archived_analysis(imageDigest: string, force: boolean, headersHandler?: () => HttpHeaders): Observable<ArchivedAnalysis> {
			return this.http.delete<ArchivedAnalysis>(this.baseUri + 'archives/images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '&force=' + force, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the archive metadata record identifying the image and tags for the analysis in the archive.
		 * Get archives/images/{imageDigest}
		 * @param {string} imageDigest The image digest to identify the image analysis
		 * @return {ArchivedAnalysis} Archived Image
		 */
		Get_archived_analysis(imageDigest: string, headersHandler?: () => HttpHeaders): Observable<ArchivedAnalysis> {
			return this.http.get<ArchivedAnalysis>(this.baseUri + 'archives/images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get archives/rules
		 * @param {boolean} system_global If true include system global rules (owned by admin) even for non-admin users. Defaults to true if not set. Can be set to false to exclude globals
		 * @return {Array<AnalysisArchiveTransitionRule>} Archive transition rules
		 */
		List_analysis_archive_rules(system_global: boolean, headersHandler?: () => HttpHeaders): Observable<Array<AnalysisArchiveTransitionRule>> {
			return this.http.get<Array<AnalysisArchiveTransitionRule>>(this.baseUri + 'archives/rules?system_global=' + system_global, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post archives/rules
		 * @return {AnalysisArchiveTransitionRule} Archive transition rule
		 */
		Create_analysis_archive_rule(requestBody: AnalysisArchiveTransitionRule, headersHandler?: () => HttpHeaders): Observable<AnalysisArchiveTransitionRule> {
			return this.http.post<AnalysisArchiveTransitionRule>(this.baseUri + 'archives/rules', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete archives/rules/{ruleId}
		 * @return {AnalysisArchiveTransitionRule} Archive transition rule
		 */
		Delete_analysis_archive_rule(ruleId: string, headersHandler?: () => HttpHeaders): Observable<AnalysisArchiveTransitionRule> {
			return this.http.delete<AnalysisArchiveTransitionRule>(this.baseUri + 'archives/rules/' + (ruleId == null ? '' : encodeURIComponent(ruleId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get archives/rules/{ruleId}
		 * @return {AnalysisArchiveTransitionRule} Archive transition rule
		 */
		Get_analysis_archive_rule(ruleId: string, headersHandler?: () => HttpHeaders): Observable<AnalysisArchiveTransitionRule> {
			return this.http.get<AnalysisArchiveTransitionRule>(this.baseUri + 'archives/rules/' + (ruleId == null ? '' : encodeURIComponent(ruleId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Event Types
		 * Returns list of event types in the category hierarchy
		 * Get event_types
		 * @return {Array<EventCategory>} List of event types
		 */
		List_event_types(headersHandler?: () => HttpHeaders): Observable<Array<EventCategory>> {
			return this.http.get<Array<EventCategory>>(this.baseUri + 'event_types', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Events
		 * Delete all or a subset of events filtered using the optional query parameters
		 * Delete events
		 * @param {string} before Delete events that occurred before the timestamp
		 * @param {string} since Delete events that occurred after the timestamp
		 * @param {string} level Delete events that match the level - INFO or ERROR
		 * @return {Array<string>} List of deleted event IDs
		 */
		Delete_events(before: string, since: string, level: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.delete<Array<string>>(this.baseUri + 'events?before=' + (before == null ? '' : encodeURIComponent(before)) + '&since=' + (since == null ? '' : encodeURIComponent(since)) + '&level=' + (level == null ? '' : encodeURIComponent(level)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Events
		 * Returns a paginated list of events in the descending order of their occurrence. Optional query parameters may be used for filtering results
		 * Get events
		 * @param {string} source_servicename Filter events by the originating service
		 * @param {string} source_hostid Filter events by the originating host ID
		 * @param {string} event_type Filter events by a prefix match on the event type (e.g. "user.image.")
		 * @param {string} resource_type Filter events by the type of resource - tag, imageDigest, repository etc
		 * @param {string} resource_id Filter events by the id of the resource
		 * @param {string} level Filter events by the level - INFO or ERROR
		 * @param {string} since Return events that occurred after the timestamp
		 * @param {string} before Return events that occurred before the timestamp
		 * @param {number} page Pagination controls - return the nth page of results. Defaults to first page if left empty
		 * @param {number} limit Number of events in the result set. Defaults to 100 if left empty
		 * @return {EventsList} Paginated list of event records and the next token
		 */
		List_events(source_servicename: string, source_hostid: string, event_type: string, resource_type: string, resource_id: string, level: string, since: string, before: string, page: number, limit: number, headersHandler?: () => HttpHeaders): Observable<EventsList> {
			return this.http.get<EventsList>(this.baseUri + 'events?source_servicename=' + (source_servicename == null ? '' : encodeURIComponent(source_servicename)) + '&source_hostid=' + (source_hostid == null ? '' : encodeURIComponent(source_hostid)) + '&event_type=' + (event_type == null ? '' : encodeURIComponent(event_type)) + '&resource_type=' + (resource_type == null ? '' : encodeURIComponent(resource_type)) + '&resource_id=' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '&level=' + (level == null ? '' : encodeURIComponent(level)) + '&since=' + (since == null ? '' : encodeURIComponent(since)) + '&before=' + (before == null ? '' : encodeURIComponent(before)) + '&page=' + page + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Event
		 * Delete an event by its event ID
		 * Delete events/{eventId}
		 * @param {string} eventId Event ID of the event to be deleted
		 * @return {void} Delete success
		 */
		Delete_event(eventId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'events/' + (eventId == null ? '' : encodeURIComponent(eventId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Event
		 * Lookup an event by its event ID
		 * Get events/{eventId}
		 * @param {string} eventId Event ID of the event for lookup
		 * @return {EventResponse} Single event record
		 */
		Get_event(eventId: string, headersHandler?: () => HttpHeaders): Observable<EventResponse> {
			return this.http.get<EventResponse>(this.baseUri + 'events/' + (eventId == null ? '' : encodeURIComponent(eventId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Health check, returns 200 and no body if service is running
		 * Get health
		 * @return {void} Empty body on success
		 */
		Health_noop(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all visible images
		 * List all images visible to the user
		 * Get images
		 * @param {boolean} history Include image history in the response
		 * @param {string} fulltag Full docker-pull string to filter results by (e.g. docker.io/library/nginx:latest, or myhost.com:5000/testimages:v1.1.1)
		 * @return {Array<AnchoreImage>} successful operation
		 */
		List_images(history: boolean, fulltag: string, headersHandler?: () => HttpHeaders): Observable<Array<AnchoreImage>> {
			return this.http.get<Array<AnchoreImage>>(this.baseUri + 'images?history=' + history + '&fulltag=' + (fulltag == null ? '' : encodeURIComponent(fulltag)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Submit a new image for analysis by the engine
		 * Creates a new analysis task that is executed asynchronously
		 * Post images
		 * @param {boolean} force Override any existing entry in the system
		 * @param {boolean} autosubscribe Instruct engine to automatically begin watching the added tag for updates from registry
		 * @return {Array<AnchoreImage>} Successfully added image to analysis queue
		 */
		Add_image(force: boolean, autosubscribe: boolean, requestBody: ImageAnalysisRequest, headersHandler?: () => HttpHeaders): Observable<Array<AnchoreImage>> {
			return this.http.post<Array<AnchoreImage>>(this.baseUri + 'images?force=' + force + '&autosubscribe=' + autosubscribe, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete image by docker imageId
		 * Delete images/by_id/{imageId}
		 * @return {void} Image deletion success
		 */
		Delete_image_by_imageId(imageId: string, force: boolean, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '&force=' + force, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lookup image by docker imageId
		 * Get images/by_id/{imageId}
		 * @return {Array<AnchoreImage>} Image lookup success
		 */
		Get_image_by_imageId(imageId: string, headersHandler?: () => HttpHeaders): Observable<Array<AnchoreImage>> {
			return this.http.get<Array<AnchoreImage>>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Check policy evaluation status for image
		 * Get the policy evaluation for the given image
		 * Get images/by_id/{imageId}/check
		 * @return {Array<PolicyEvaluation>} Policy evaluation success
		 */
		Get_image_policy_check_by_imageId(imageId: string, policyId: string, tag: string, detail: boolean, history: boolean, headersHandler?: () => HttpHeaders): Observable<Array<PolicyEvaluation>> {
			return this.http.get<Array<PolicyEvaluation>>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/check&policyId=' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&detail=' + detail + '&history=' + history, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List image content types
		 * Get images/by_id/{imageId}/content
		 * @return {Array<string>} Content of specified type from the image
		 */
		List_image_content_by_imageid(imageId: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/content', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the content of an image by type files
		 * Get images/by_id/{imageId}/content/files
		 * @return {ContentFilesResponse} Content of specified type from the image
		 */
		Get_image_content_by_type_imageId_files(imageId: string, headersHandler?: () => HttpHeaders): Observable<ContentFilesResponse> {
			return this.http.get<ContentFilesResponse>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/content/files', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the content of an image by type java
		 * Get images/by_id/{imageId}/content/java
		 * @return {ContentJAVAPackageResponse} Content of specified type from the image
		 */
		Get_image_content_by_type_imageId_javapackage(imageId: string, headersHandler?: () => HttpHeaders): Observable<ContentJAVAPackageResponse> {
			return this.http.get<ContentJAVAPackageResponse>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/content/java', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the content of an image by type
		 * Get images/by_id/{imageId}/content/{ctype}
		 * @return {ContentPackageResponse} Content of specified type from the image
		 */
		Get_image_content_by_type_imageId(imageId: string, ctype: string, headersHandler?: () => HttpHeaders): Observable<ContentPackageResponse> {
			return this.http.get<ContentPackageResponse>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/content/' + (ctype == null ? '' : encodeURIComponent(ctype)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get vulnerability types
		 * Get images/by_id/{imageId}/vuln
		 * @return {Array<string>} Vulnerability listing for the image
		 */
		Get_image_vulnerability_types_by_imageId(imageId: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/vuln', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get vulnerabilities by type
		 * Get images/by_id/{imageId}/vuln/{vtype}
		 * @return {VulnerabilityResponse} Vulnerability listing for the image
		 */
		Get_image_vulnerabilities_by_type_imageId(imageId: string, vtype: string, headersHandler?: () => HttpHeaders): Observable<VulnerabilityResponse> {
			return this.http.get<VulnerabilityResponse>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/vuln/' + (vtype == null ? '' : encodeURIComponent(vtype)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an image analysis
		 * Delete images/{imageDigest}
		 * @return {void} Image deletion success
		 */
		Delete_image(imageDigest: string, force: boolean, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '&force=' + force, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get image metadata
		 * Get images/{imageDigest}
		 * @return {Array<AnchoreImage>} Image lookup success
		 */
		Get_image(imageDigest: string, headersHandler?: () => HttpHeaders): Observable<Array<AnchoreImage>> {
			return this.http.get<Array<AnchoreImage>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return a list of analyzer artifacts of the specified type
		 * Get images/{imageDigest}/artifacts/file_content_search
		 * @return {Array<FileContentSearchResult>} List of file metadata objects
		 */
		List_file_content_search_results(imageDigest: string, headersHandler?: () => HttpHeaders): Observable<Array<FileContentSearchResult>> {
			return this.http.get<Array<FileContentSearchResult>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/artifacts/file_content_search', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return a list of analyzer artifacts of the specified type
		 * Get images/{imageDigest}/artifacts/retrieved_files
		 * @return {Array<RetrievedFile>} List of file metadata objects
		 */
		List_retrieved_files(imageDigest: string, headersHandler?: () => HttpHeaders): Observable<Array<RetrievedFile>> {
			return this.http.get<Array<RetrievedFile>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/artifacts/retrieved_files', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return a list of analyzer artifacts of the specified type
		 * Get images/{imageDigest}/artifacts/secret_search
		 * @return {Array<SecretSearchResult>} List of file metadata objects
		 */
		List_secret_search_results(imageDigest: string, headersHandler?: () => HttpHeaders): Observable<Array<SecretSearchResult>> {
			return this.http.get<Array<SecretSearchResult>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/artifacts/secret_search', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Check policy evaluation status for image
		 * Get the policy evaluation for the given image
		 * Get images/{imageDigest}/check
		 * @return {Array<PolicyEvaluation>} Policy evaluation success
		 */
		Get_image_policy_check(imageDigest: string, policyId: string, tag: string, detail: boolean, history: boolean, interactive: boolean, headersHandler?: () => HttpHeaders): Observable<Array<PolicyEvaluation>> {
			return this.http.get<Array<PolicyEvaluation>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/check&policyId=' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&detail=' + detail + '&history=' + history + '&interactive=' + interactive, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List image content types
		 * Get images/{imageDigest}/content
		 * @return {Array<string>} Content listing for the image
		 */
		List_image_content(imageDigest: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/content', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the content of an image by type files
		 * Get images/{imageDigest}/content/files
		 * @return {ContentFilesResponse} Content of specified type from the image
		 */
		Get_image_content_by_type_files(imageDigest: string, headersHandler?: () => HttpHeaders): Observable<ContentFilesResponse> {
			return this.http.get<ContentFilesResponse>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/content/files', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the content of an image by type java
		 * Get images/{imageDigest}/content/java
		 * @return {ContentJAVAPackageResponse} Content of specified type from the image
		 */
		Get_image_content_by_type_javapackage(imageDigest: string, headersHandler?: () => HttpHeaders): Observable<ContentJAVAPackageResponse> {
			return this.http.get<ContentJAVAPackageResponse>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/content/java', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the content of an image by type
		 * Get images/{imageDigest}/content/{ctype}
		 * @return {ContentPackageResponse} Content of specified type from the image
		 */
		Get_image_content_by_type(imageDigest: string, ctype: string, headersHandler?: () => HttpHeaders): Observable<ContentPackageResponse> {
			return this.http.get<ContentPackageResponse>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/content/' + (ctype == null ? '' : encodeURIComponent(ctype)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List image metadata types
		 * Get images/{imageDigest}/metadata
		 * @return {Array<string>} Metadata listing for the image
		 */
		List_image_metadata(imageDigest: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/metadata', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the metadata of an image by type
		 * Get images/{imageDigest}/metadata/{mtype}
		 * @return {MetadataResponse} Metadata of specified type from the image
		 */
		Get_image_metadata_by_type(imageDigest: string, mtype: string, headersHandler?: () => HttpHeaders): Observable<MetadataResponse> {
			return this.http.get<MetadataResponse>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/metadata/' + (mtype == null ? '' : encodeURIComponent(mtype)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get vulnerability types
		 * Get images/{imageDigest}/vuln
		 * @return {Array<string>} Vulnerability listing for the image
		 */
		Get_image_vulnerability_types(imageDigest: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/vuln', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get vulnerabilities by type
		 * Get images/{imageDigest}/vuln/{vtype}
		 * @return {VulnerabilityResponse} Vulnerability listing for the image
		 */
		Get_image_vulnerabilities_by_type(imageDigest: string, vtype: string, force_refresh: boolean, vendor_only: boolean, headersHandler?: () => HttpHeaders): Observable<VulnerabilityResponse> {
			return this.http.get<VulnerabilityResponse>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/vuln/' + (vtype == null ? '' : encodeURIComponent(vtype)) + '&force_refresh=' + force_refresh + '&vendor_only=' + vendor_only, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Request a jwt token for subsequent operations, this request is authenticated with normal HTTP auth
		 * Post oauth/token
		 * @return {TokenResponse} Resulting JWT token
		 */
		Get_oauth_token(headersHandler?: () => HttpHeaders): Observable<TokenResponse> {
			return this.http.post<TokenResponse>(this.baseUri + 'oauth/token', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List policies
		 * List all saved policy bundles
		 * Get policies
		 * @param {boolean} detail Include policy bundle detail in the form of the full bundle content for each entry
		 * @return {Array<PolicyBundleRecord>} Policy listing
		 */
		List_policies(detail: boolean, headersHandler?: () => HttpHeaders): Observable<Array<PolicyBundleRecord>> {
			return this.http.get<Array<PolicyBundleRecord>>(this.baseUri + 'policies?detail=' + detail, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a new policy
		 * Adds a new policy bundle to the system
		 * Post policies
		 * @return {PolicyBundleRecord} Saved bundle
		 */
		Add_policy(requestBody: PolicyBundle, headersHandler?: () => HttpHeaders): Observable<PolicyBundleRecord> {
			return this.http.post<PolicyBundleRecord>(this.baseUri + 'policies', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete policy
		 * Delete the specified policy
		 * Delete policies/{policyId}
		 * @return {void} Delete success
		 */
		Delete_policy(policyId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'policies/' + (policyId == null ? '' : encodeURIComponent(policyId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get specific policy
		 * Get the policy bundle content
		 * Get policies/{policyId}
		 * @param {boolean} detail Include policy bundle detail in the form of the full bundle content for each entry
		 * @return {Array<PolicyBundleRecord>} A list with a single fetched policy bundle record
		 */
		Get_policy(policyId: string, detail: boolean, headersHandler?: () => HttpHeaders): Observable<Array<PolicyBundleRecord>> {
			return this.http.get<Array<PolicyBundleRecord>>(this.baseUri + 'policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&detail=' + detail, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update policy
		 * Update/replace and existing policy
		 * Put policies/{policyId}
		 * @param {boolean} active Mark policy as active
		 * @return {Array<PolicyBundleRecord>} A list with a single updated policy bundle record
		 */
		Update_policy(policyId: string, active: boolean, requestBody: PolicyBundleRecord, headersHandler?: () => HttpHeaders): Observable<Array<PolicyBundleRecord>> {
			return this.http.put<Array<PolicyBundleRecord>>(this.baseUri + 'policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&active=' + active, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List of images containing given package
		 * Filterable query interface to search for images containing specified package
		 * Get query/images/by_package
		 * @param {string} name Name of package to search for (e.g. sed)
		 * @param {string} package_type Type of package to filter on (e.g. dpkg)
		 * @param {string} version Version of named package to filter on (e.g. 4.4-1)
		 * @param {string} page The page of results to fetch. Pages start at 1
		 * @param {number} limit Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page
		 * @return {PaginatedImageList} Image listing
		 */
		Query_images_by_package(name: string, package_type: string, version: string, page: string, limit: number, headersHandler?: () => HttpHeaders): Observable<PaginatedImageList> {
			return this.http.get<PaginatedImageList>(this.baseUri + 'query/images/by_package?name=' + (name == null ? '' : encodeURIComponent(name)) + '&package_type=' + (package_type == null ? '' : encodeURIComponent(package_type)) + '&version=' + (version == null ? '' : encodeURIComponent(version)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List images vulnerable to the specific vulnerability ID.
		 * Returns a listing of images and their respective packages vulnerable to the given vulnerability ID
		 * Get query/images/by_vulnerability
		 * @param {string} vulnerability_id The ID of the vulnerability to search for within all images stored in anchore-engine (e.g. CVE-1999-0001)
		 * @param {string} namespace Filter results to images within the given vulnerability namespace (e.g. debian:8, ubuntu:14.04)
		 * @param {string} affected_package Filter results to images with vulnable packages with the given package name (e.g. libssl)
		 * @param {StandaloneVulnerabilitySeverity} severity Filter results to vulnerable package/vulnerability with the given severity
		 * @param {boolean} vendor_only Filter results to include only vulnerabilities that are not marked as invalid by upstream OS vendor data
		 * @param {number} page The page of results to fetch. Pages start at 1
		 * @param {number} limit Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page
		 * @return {PaginatedVulnerableImageList} Image lookup success
		 */
		Query_images_by_vulnerability(vulnerability_id: string, namespace: string, affected_package: string, severity: StandaloneVulnerabilitySeverity, vendor_only: boolean, page: number, limit: number, headersHandler?: () => HttpHeaders): Observable<PaginatedVulnerableImageList> {
			return this.http.get<PaginatedVulnerableImageList>(this.baseUri + 'query/images/by_vulnerability?vulnerability_id=' + (vulnerability_id == null ? '' : encodeURIComponent(vulnerability_id)) + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&affected_package=' + (affected_package == null ? '' : encodeURIComponent(affected_package)) + '&severity=' + severity + '&vendor_only=' + vendor_only + '&page=' + page + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Listing information about given vulnerability
		 * List (w/filters) vulnerability records known by the system, with affected packages information if present
		 * Get query/vulnerabilities
		 * @param {Array<string>} id The ID of the vulnerability (e.g. CVE-1999-0001)
		 * @param {string} affected_package Filter results by specified package name (e.g. sed)
		 * @param {string} affected_package_version Filter results by specified package version (e.g. 4.4-1)
		 * @param {string} page The page of results to fetch. Pages start at 1
		 * @param {number} limit Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page
		 * @param {Array<string>} namespace Namespace(s) to filter vulnerability records by
		 * @return {PaginatedVulnerabilityList} Vulnerability listing paginated
		 */
		Query_vulnerabilities(id: Array<string>, affected_package: string, affected_package_version: string, page: string, limit: number, namespace: Array<string>, headersHandler?: () => HttpHeaders): Observable<PaginatedVulnerabilityList> {
			return this.http.get<PaginatedVulnerabilityList>(this.baseUri + 'query/vulnerabilities?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&affected_package=' + (affected_package == null ? '' : encodeURIComponent(affected_package)) + '&affected_package_version=' + (affected_package_version == null ? '' : encodeURIComponent(affected_package_version)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit + '&' + namespace.map(z => `namespace=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List configured registries
		 * List all configured registries the system can/will watch
		 * Get registries
		 * @return {Array<RegistryConfiguration>} Registry listing
		 */
		List_registries(headersHandler?: () => HttpHeaders): Observable<Array<RegistryConfiguration>> {
			return this.http.get<Array<RegistryConfiguration>>(this.baseUri + 'registries', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a new registry
		 * Adds a new registry to the system
		 * Post registries
		 * @param {boolean} validate flag to determine whether or not to validate registry/credential at registry add time
		 * @return {Array<RegistryConfiguration>} Saved registry configuration
		 */
		Create_registry(validate: boolean, requestBody: RegistryConfigurationRequest, headersHandler?: () => HttpHeaders): Observable<Array<RegistryConfiguration>> {
			return this.http.post<Array<RegistryConfiguration>>(this.baseUri + 'registries?validate=' + validate, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a registry configuration
		 * Delete a registry configuration record from the system. Does not remove any images.
		 * Delete registries/{registry}
		 * @return {void} Delete success
		 */
		Delete_registry(registry: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'registries/' + (registry == null ? '' : encodeURIComponent(registry)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific registry configuration
		 * Get information on a specific registry
		 * Get registries/{registry}
		 * @return {RegistryConfiguration} Registry configuration
		 */
		Get_registry(registry: string, headersHandler?: () => HttpHeaders): Observable<RegistryConfiguration> {
			return this.http.get<RegistryConfiguration>(this.baseUri + 'registries/' + (registry == null ? '' : encodeURIComponent(registry)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update/replace a registry configuration
		 * Replaces an existing registry record with the given record
		 * Put registries/{registry}
		 * @param {boolean} validate flag to determine whether or not to validate registry/credential at registry update time
		 * @return {Array<RegistryConfiguration>} Updated registry configuration
		 */
		Update_registry(registry: string, validate: boolean, requestBody: RegistryConfigurationRequest, headersHandler?: () => HttpHeaders): Observable<Array<RegistryConfiguration>> {
			return this.http.put<Array<RegistryConfiguration>>(this.baseUri + 'registries/' + (registry == null ? '' : encodeURIComponent(registry)) + '&validate=' + validate, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Add repository to watch
		 * Post repositories
		 * @param {string} repository full repository to add e.g. docker.io/library/alpine
		 * @param {boolean} autosubscribe flag to enable/disable auto tag_update activation when new images from a repo are added
		 * @param {string} lookuptag use specified existing tag to perform repo scan (default is 'latest')
		 * @return {Array<Subscription>} Repository and discovered tags added
		 */
		Add_repository(repository: string, autosubscribe: boolean, lookuptag: string, headersHandler?: () => HttpHeaders): Observable<Array<Subscription>> {
			return this.http.post<Array<Subscription>>(this.baseUri + 'repositories?repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&autosubscribe=' + autosubscribe + '&lookuptag=' + (lookuptag == null ? '' : encodeURIComponent(lookuptag)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Service status
		 * Get the API service status
		 * Get status
		 * @return {StatusResponse} Status listing
		 */
		Get_status(headersHandler?: () => HttpHeaders): Observable<StatusResponse> {
			return this.http.get<StatusResponse>(this.baseUri + 'status', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List all subscriptions
		 * Get subscriptions
		 * @param {string} subscription_key filter only subscriptions matching key
		 * @param {string} subscription_type filter only subscriptions matching type
		 * @return {Array<Subscription>} Subscription listing
		 */
		List_subscriptions(subscription_key: string, subscription_type: string, headersHandler?: () => HttpHeaders): Observable<Array<Subscription>> {
			return this.http.get<Array<Subscription>>(this.baseUri + 'subscriptions?subscription_key=' + (subscription_key == null ? '' : encodeURIComponent(subscription_key)) + '&subscription_type=' + (subscription_type == null ? '' : encodeURIComponent(subscription_type)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a subscription of a specific type
		 * Create a new subscription to watch a tag and get notifications of changes
		 * Post subscriptions
		 * @return {Array<Subscription>} Subscription add success
		 */
		Add_subscription(requestBody: SubscriptionRequest, headersHandler?: () => HttpHeaders): Observable<Array<Subscription>> {
			return this.http.post<Array<Subscription>>(this.baseUri + 'subscriptions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete subscriptions of a specific type
		 * Delete subscriptions/{subscriptionId}
		 * @return {void} Delete success
		 */
		Delete_subscription(subscriptionId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific subscription set
		 * Get subscriptions/{subscriptionId}
		 * @return {Array<Subscription>} Filtered subscription list by type
		 */
		Get_subscription(subscriptionId: string, headersHandler?: () => HttpHeaders): Observable<Array<Subscription>> {
			return this.http.get<Array<Subscription>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update an existing and specific subscription
		 * Put subscriptions/{subscriptionId}
		 * @return {Array<Subscription>} Subscription add success
		 */
		Update_subscription(subscriptionId: string, requestBody: SubscriptionUpdate, headersHandler?: () => HttpHeaders): Observable<Array<Subscription>> {
			return this.http.put<Array<Subscription>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List all visible image digests and tags
		 * List all image tags visible to the user
		 * Get summaries/imagetags
		 * @return {Array<AnchoreImageTagSummary>} successful operation
		 */
		List_imagetags(headersHandler?: () => HttpHeaders): Observable<Array<AnchoreImageTagSummary>> {
			return this.http.get<Array<AnchoreImageTagSummary>>(this.baseUri + 'summaries/imagetags', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * System status
		 * Get the system status including queue lengths
		 * Get system
		 * @return {SystemStatusResponse} Status listing
		 */
		Get_service_detail(headersHandler?: () => HttpHeaders): Observable<SystemStatusResponse> {
			return this.http.get<SystemStatusResponse>(this.baseUri + 'system', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describe anchore engine error codes.
		 * Describe anchore engine error codes.
		 * Get system/error_codes
		 * @return {Array<AnchoreErrorCode>} Error Codes Description
		 */
		Describe_error_codes(headersHandler?: () => HttpHeaders): Observable<Array<AnchoreErrorCode>> {
			return this.http.get<Array<AnchoreErrorCode>>(this.baseUri + 'system/error_codes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * list feeds operations and information
		 * Get system/feeds
		 * @return {Array<FeedMetadata>} success
		 */
		Get_system_feeds(headersHandler?: () => HttpHeaders): Observable<Array<FeedMetadata>> {
			return this.http.get<Array<FeedMetadata>>(this.baseUri + 'system/feeds', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * trigger feeds operations
		 * Post system/feeds
		 * @param {boolean} flush instruct system to flush existing data feeds records from anchore-engine
		 * @param {boolean} sync instruct system to re-sync data feeds
		 * @return {Array<FeedSyncResult>} Feeds operation success
		 */
		Post_system_feeds(flush: boolean, sync: boolean, headersHandler?: () => HttpHeaders): Observable<Array<FeedSyncResult>> {
			return this.http.post<Array<FeedSyncResult>>(this.baseUri + 'system/feeds?flush=' + flush + '&sync=' + sync, null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describe the policy language spec implemented by this service.
		 * Get the policy language spec for this service
		 * Get system/policy_spec
		 * @return {Array<GateSpec>} Policy Language Description
		 */
		Describe_policy(headersHandler?: () => HttpHeaders): Observable<Array<GateSpec>> {
			return this.http.get<Array<GateSpec>>(this.baseUri + 'system/policy_spec', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List system services
		 * Get system/services
		 * @return {Array<Service>} Service listing
		 */
		List_services(headersHandler?: () => HttpHeaders): Observable<Array<Service>> {
			return this.http.get<Array<Service>>(this.baseUri + 'system/services', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a service configuration and state
		 * Get system/services/{servicename}
		 * @return {Array<Service>} Service Info
		 */
		Get_services_by_name(servicename: string, headersHandler?: () => HttpHeaders): Observable<Array<Service>> {
			return this.http.get<Array<Service>>(this.baseUri + 'system/services/' + (servicename == null ? '' : encodeURIComponent(servicename)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete the service config
		 * Delete system/services/{servicename}/{hostid}
		 * @return {void} Delete success
		 */
		Delete_service(servicename: string, hostid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'system/services/' + (servicename == null ? '' : encodeURIComponent(servicename)) + '/' + (hostid == null ? '' : encodeURIComponent(hostid)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get service config for a specific host
		 * Get system/services/{servicename}/{hostid}
		 * @return {Array<Service>} Listing of registered services
		 */
		Get_services_by_name_and_host(servicename: string, hostid: string, headersHandler?: () => HttpHeaders): Observable<Array<Service>> {
			return this.http.get<Array<Service>>(this.baseUri + 'system/services/' + (servicename == null ? '' : encodeURIComponent(servicename)) + '/' + (hostid == null ? '' : encodeURIComponent(hostid)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List authenticated user info
		 * Get user
		 * @return {User} User details for caller's user
		 */
		Get_user(headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'user', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get current credential summary
		 * Get user/credentials
		 * @return {Array<AccessCredential>} User credential listing
		 */
		Get_credentials(headersHandler?: () => HttpHeaders): Observable<Array<AccessCredential>> {
			return this.http.get<Array<AccessCredential>>(this.baseUri + 'user/credentials', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * add/replace credential
		 * Post user/credentials
		 * @return {User} Add a credential, overwritting if already exists
		 */
		Add_credential(requestBody: AccessCredential, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.post<User>(this.baseUri + 'user/credentials', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns the version object for the service, including db schema version info
		 * Get version
		 * @return {ServiceVersion} Version object describing version state
		 */
		Version_noop(headersHandler?: () => HttpHeaders): Observable<ServiceVersion> {
			return this.http.get<ServiceVersion>(this.baseUri + 'version', { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

