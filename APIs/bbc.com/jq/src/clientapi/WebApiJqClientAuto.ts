///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface ErrorModel {
		fault?: string;
	}

	export interface Accurate_programme_time {
		end?: Date;
		start?: Date;
	}

	export interface Accurate_time extends dateRange {
		duration?: string;
	}

	export interface Affected_by {
		Affected_byFilter?: Array<Affected_byFilter>;
	}

	export interface Affected_byFilter {
		description: string;
		Affected_byFilterFilter?: Array<Affected_byFilterFilter>;
		name: string;
	}

	export interface Affected_byFilterFilter {
		description: string;
		name: string;
	}

	export interface Alternate_images_mixin {
		alternate_images: string;
	}

	export interface Ancestor_titles {
		brand?: string;
		episode?: string;
		Ancestor_titlesSeries?: Array<Ancestor_titlesSeries>;
	}

	export interface Ancestor_titlesSeries {
		pid: string;
		title?: string;
	}

	export interface Ancestors extends referenceAttributes {
		href_deprecated?: boolean;
		result_type_deprecated?: boolean;
	}

	export interface Ancestors_titles {
		brand?: string;
		episode?: string;
		Ancestors_titlesSeries?: Array<Ancestors_titlesSeries>;
	}

	export interface Ancestors_titlesSeries {
		pid: string;
		title?: string;
	}

	export interface Availability {
		accurate_programme_time?: dateRange;
		actual_start?: Date;
		availability-debug?: availability-debug;
		availability_of?: Array<availability_of>;
		availability_type: availability_type;
		media_availability_time?: dateRange;
		media_set?: Array<media_set>;
		revocation_status?: string;
		scheduled_time?: scheduled_time;
		status: string;
	}

	export interface Availability-debug {
		availability_of: pidReference;
		media_profile_groups?: media_profile_groups;
		service?: serviceReference;
		territory?: string;
	}

	export interface Availability_mixin {
		Availability_mixinAvailability?: Array<Availability_mixinAvailability>;
	}

	export interface Availability_mixinAvailability {
		status: string;
		version_types: string;
	}

	export interface Availability_of {
		href: string;
		pid: string;
		result_type: string;
		type?: string;
	}

	export enum Availability_type { ondemand = 0, simulcast = 1, webcast = 2 }

	export interface Available_media_sets {
		media_sets?: string;
	}

	export interface Available_mixins {
		availabilities: string;
	}

	export interface Available_simulcasts {
		available: number;
		available_versions_element: available_versions_element;
	}

	export interface Available_versions {
		available: number;
		available_versions_element: available_versions_element;
	}

	export interface Available_versions_element {
		Available_versions_elementVersion?: Array<Available_versions_elementVersion>;
	}

	export interface Available_versions_elementVersion {
		available_mixins?: available_mixins;
		competition_warning?: boolean;
		duration?: string;
		guidance_warnings?: guidance_warnings;
		pid?: string;
		Available_versions_elementVersionTypes: Array<Available_versions_elementVersionTypes>;
		Available_versions_elementVersionVersion?: Array<Available_versions_elementVersionVersion>;
	}

	export interface Available_versions_elementVersionTypes {
		type?: Array<string>;
	}

	export interface Available_versions_elementVersionVersion {
		available_mixins?: available_mixins;
		competition_warning?: boolean;
		duration?: string;
		guidance_warnings?: guidance_warnings;
		pid?: string;
		Available_versions_elementVersionVersionTypes: Array<Available_versions_elementVersionVersionTypes>;
	}

	export interface Available_versions_elementVersionVersionTypes {
		type?: Array<string>;
	}

	export interface Available_versions_media_sets {
		media_sets?: string;
	}

	export interface Available_webcasts {
		available: number;
		available_versions_element: available_versions_element;
	}

	export interface Brand {
		alternate_images_mixin?: alternate_images_mixin;
		availability_mixin?: availability_mixin;
		contributions_mixin?: contributions_mixin;
		embargoed: embargoed;
		expected_child_count?: number;
		franchises?: reference;
		genre_groupings?: genreGroupingsType;
		identifiers?: identifiers;
		image_link?: image_link;
		images_mixin?: images_mixin;
		is_embeddable?: boolean;
		items_for?: reference;
		master_brand_link?: master_brand_link;
		partner: string;
		pid: string;
		previous_next_mixin?: previous_next_mixin;
		programme_formats?: programme_formats;
		programme_type?: programme_type;
		related_links?: related_links;
		release_date_group?: release_date_group;
		synopses?: synopses;
		title?: string;
		updated_time: Date;
		uri?: string;
	}

	export interface Broadcast {
		ancestor_titles?: ancestor_titles;
		ancestors_titles?: ancestors_titles;
		broadcast_of?: Array<pidReference>;
		identifiers?: identifiers;
		ids?: ids;
		image_link?: image_link;
		images_mixin?: images_mixin;
		is_audio_described?: boolean;
		is_blanked?: boolean;
		is_critical?: boolean;
		is_repeat?: boolean;
		is_simulcast?: boolean;
		partner: string;
		pid: string;
		published_time?: broadcastTime;
		service?: serviceReference;
		tx_time?: tx_time;
		updated_time?: Date;
	}

	export interface BroadcastTime extends dateRange {
		duration?: string;
	}

	export interface Broadcast_of {
		href?: string;
		pid: string;
		position?: number;
		result_type: string;
	}

	export interface Broadcaster {
		href: string;
		result_type: string;
		sid: string;
	}

	export interface Chapter {
		catalogue_number?: string;
		contributions_mixin?: contributions_mixin;
		duration?: number;
		identifiers?: identifiers;
		ids?: ids;
		images_mixin?: images_mixin;
		item_of?: reference;
		music_code?: string;
		offsets?: offsets;
		partner: string;
		pid: string;
		play_events?: play_events;
		publisher?: string;
		record_label?: string;
		recording_date?: string;
		release_title?: string;
		snippet_url?: string;
		source_media?: string;
		synopses?: synopses;
		title?: string;
		track_number?: string;
		track_side?: string;
		type?: string;
		updated_time?: Date;
	}

	export interface Clip {
		advertising_allowed: string;
		alternate_images_mixin?: alternate_images_mixin;
		ancestor_titles?: ancestor_titles;
		ancestors?: reference;
		ancestors_titles?: ancestors_titles;
		availability_mixin?: availability_mixin;
		caption?: string;
		clip_of?: pidReference;
		contributions_mixin?: contributions_mixin;
		embargoed: embargoed;
		genre_groupings?: genreGroupingsType;
		genre_groups?: genreGroupsType;
		identifiers?: identifiers;
		image_link?: image_link;
		images_mixin?: images_mixin;
		is_embeddable?: boolean;
		items_for?: reference;
		master_brand_link?: master_brand_link;
		media_type?: media_type;
		original_version_duration?: original_version_duration;
		partner: string;
		pid: string;
		previous_next_mixin?: previous_next_mixin;
		programme_formats?: programme_formats;
		related_links?: related_links;
		release_date_group?: release_date_group;
		synopses?: synopses;
		title?: string;
		updated_time: Date;
		uri?: string;
		versions_mixin?: versions_mixin;
	}

	export interface Clip_of {
		href?: string;
		pid: string;
		position?: number;
		result_type: string;
	}

	export interface Collection {
		alternate_images_mixin?: alternate_images_mixin;
		embargoed: embargoed;
		for_programmes?: for_programmes;
		identifiers?: identifiers;
		ids?: ids;
		images_mixin?: images_mixin;
		master_brand_link?: master_brand_link;
		partner: string;
		pid: string;
		related_links?: related_links;
		scheduled?: scheduled;
		synopses?: synopses;
		title?: string;
		updated_time: Date;
		url_key?: string;
	}

	export interface Context {
		cascades_to_descendants?: boolean;
		href?: string;
		pid: string;
		result_type: string;
	}

	export interface Contributions_mixin {
		contributions: string;
	}

	export interface Contributions_mixin_contribution {
		contribution: string;
	}

	export interface Contributions_mixin_contributor {
		contributor: string;
	}

	export interface Contributions_mixin_contributor_name {
		name: string;
	}

	export interface Contributor {
		contributor_name?: contributor_name;
		contributor_to?: Array<contributor_to>;
		disambiguation?: string;
		href?: string;
		identifiers?: identifiers;
		ids?: ids;
		partner: string;
		pid: string;
		type?: string;
	}

	export interface Contributor_name {
		name: string;
	}

	export interface Contributor_to {
		href: string;
		result_type: string;
	}

	export interface Credits_time {
		squeeze_end?: Date;
		squeeze_start?: Date;
	}

	export interface Data {
		datum?: string;
	}

	export interface DateRange {
		end?: Date;
		start?: Date;
	}

	export interface Date_range {
		end?: Date;
		start?: Date;
	}

	export interface Dependency_on {
		filter?: string;
		value?: string;
	}

	export interface Deprecated {
		deprecated_since: string;
		name: string;
		replaced_by?: string;
		replacement_type?: string;
		type: string;
	}

	export interface DeprecatedReferenceElement extends referenceAttributes {
		deprecated: boolean;
		deprecated_since: string;
		replaced_by: string;
	}

	export interface DeprecationAttributes {
		deprecated: boolean;
		deprecated_since: string;
		replaced_by: string;
	}

	export interface Deprecations {
		deprecated?: Array<deprecated>;
	}

	export interface Dimensions {
		height?: number;
		width?: number;
	}

	export enum Embargoed { true = 0, false = 1 }

	export interface Episode {
		advertising_allowed: string;
		alternate_images_mixin?: alternate_images_mixin;
		ancestor_titles?: ancestor_titles;
		ancestors?: reference;
		ancestors_titles?: ancestors_titles;
		availability_mixin?: availability_mixin;
		contributions_mixin?: contributions_mixin;
		embargoed: embargoed;
		episode_of?: pidReference;
		genre_groupings?: genreGroupingsType;
		genre_groups?: genreGroupsType;
		has_guidance?: boolean;
		identifiers?: identifiers;
		image_link?: image_link;
		images_mixin?: images_mixin;
		is_embeddable?: boolean;
		is_stacked?: boolean;
		items_for?: reference;
		master_brand_link?: master_brand_link;
		media_type?: media_type;
		original_version_duration?: original_version_duration;
		partner: string;
		pid: string;
		presentation_title?: string;
		previous_next_mixin?: previous_next_mixin;
		programme_formats?: programme_formats;
		programme_type?: programme_type;
		related_links?: related_links;
		release_date_group?: release_date_group;
		synopses?: synopses;
		title?: string;
		updated_time: Date;
		uri?: string;
		versions_mixin?: versions_mixin;
	}

	export interface Episode_of {
		href?: string;
		pid: string;
		position?: number;
		result_type: string;
	}

	export interface Error {
		code: string;
		data: data;
		error-name: string;
		expr: string;
		format-string: string;
		message: string;
		retryable: boolean;

		/**The XQuery language version. */
		xquery-version: xquery-version;
	}

	export interface Errors {
		error?: error;
	}

	export interface Feed {
		deprecations?: deprecations;
		filters?: filters;
		href: string;
		mixins?: mixins;
		name: string;
		rel: string;
		release_status?: release_status_type;
		sorts?: sorts;
		title: string;
	}

	export interface Feeds {
		deployment_root?: string;
		deprecations?: deprecations;
		feed?: Array<feed>;
	}

	export interface Filter {
		default?: string;
		depends_on?: string;
		deprecated?: boolean;
		deprecated_since?: string;
		guaranteed_until?: string;
		max_value?: number;
		min_value?: number;
		multiple_values?: boolean;
		name: string;
		option?: Array<option>;
		prefer?: string;
		prohibits?: Array<prohibits>;
		release_status?: release_status_type;
		replaced_by?: string;
		required?: boolean;
		title: string;
		type: string;
	}

	export interface Filters {
		filter?: Array<filter>;
		unstable_filters?: unstable_filters;
	}

	export interface Focus_point {
		x?: number;
		y?: number;
	}

	export interface For_programme {
		href?: string;
	}

	export interface For_programmes {
		for_programme?: Array<for_programme>;
	}

	export interface Format {
		#text?: string;
		format_id?: string;
	}

	export interface Franchise {
		alternate_images_mixin?: alternate_images_mixin;
		embargoed: embargoed;
		for_programmes?: for_programmes;
		identifiers?: identifiers;
		ids?: ids;
		images_mixin?: images_mixin;
		master_brand_link?: master_brand_link;
		partner: string;
		pid: string;
		related_links?: related_links;
		scheduled?: scheduled;
		synopses?: synopses;
		title?: string;
		updated_time: Date;
		url_key?: string;
	}

	export interface Franchises extends referenceAttributes {
		href_deprecated?: boolean;
		result_type_deprecated?: boolean;
	}

	export interface Gallery {
		alternate_images_mixin?: alternate_images_mixin;
		embargoed: embargoed;
		for_programmes?: for_programmes;
		identifiers?: identifiers;
		ids?: ids;
		images_mixin?: images_mixin;
		master_brand_link?: master_brand_link;
		partner: string;
		pid: string;
		related_links?: related_links;
		scheduled?: scheduled;
		synopses?: synopses;
		title?: string;
		updated_time: Date;
		url_key?: string;
	}

	export interface Genre {
		#text?: string;
		id?: string;
		type?: string;
	}

	export interface GenreGroupingsType {
		genre_group?: Array<genre_group>;
	}

	export interface GenreGroupsType extends deprecatedReferenceElement {
		genre_group?: Array<genre_group>;
	}

	export interface Genre_group {
		genres: string;
		id?: string;
		type?: string;
	}

	export interface Genre_groupings {
		genre_group?: Array<genre_group>;
	}

	export interface Genre_groups extends deprecatedReferenceElement {
		genre_group?: Array<genre_group>;
	}

	export interface Group-body {
		alternate_images_mixin?: alternate_images_mixin;
		embargoed: embargoed;
		for_programmes?: for_programmes;
		identifiers?: identifiers;
		ids?: ids;
		images_mixin?: images_mixin;
		master_brand_link?: master_brand_link;
		partner: string;
		pid: string;
		related_links?: related_links;
		scheduled?: scheduled;
		synopses?: synopses;
		title?: string;
		updated_time: Date;
		url_key?: string;
	}

	export interface Guidance_warnings {
		warnings?: string;
	}

	export interface Highlight {
		catalogue_number?: string;
		contributions_mixin?: contributions_mixin;
		duration?: number;
		identifiers?: identifiers;
		ids?: ids;
		images_mixin?: images_mixin;
		item_of?: reference;
		music_code?: string;
		offsets?: offsets;
		partner: string;
		pid: string;
		play_events?: play_events;
		publisher?: string;
		record_label?: string;
		recording_date?: string;
		release_title?: string;
		snippet_url?: string;
		source_media?: string;
		synopses?: synopses;
		title?: string;
		track_number?: string;
		track_side?: string;
		type?: string;
		updated_time?: Date;
	}

	export interface Id {
		#text?: string;
		authority?: string;
		type?: string;
	}

	export interface Identifier {
		#text?: string;
		authority?: string;
		type?: string;
	}

	export interface Identifiers {
		identifier: Array<identifier>;
	}

	export interface Ids {
		id: Array<id>;
	}

	export interface Image {
		author?: string;
		embargoed: embargoed;
		identifiers?: identifiers;
		partner: string;
		pid: string;
		shoot_date?: Date;
		source_asset?: source_asset;
		synopses?: synopses;
		template_url?: string;
		title?: string;
		type?: string;
	}

	export interface Image_link {
		image: string;
	}

	export interface Images_mixin {
		images: string;
	}

	export interface Item {
		catalogue_number?: string;
		contributions_mixin?: contributions_mixin;
		duration?: number;
		identifiers?: identifiers;
		ids?: ids;
		images_mixin?: images_mixin;
		item_of?: reference;
		music_code?: string;
		offsets?: offsets;
		partner: string;
		pid: string;
		play_events?: play_events;
		publisher?: string;
		record_label?: string;
		recording_date?: string;
		release_title?: string;
		snippet_url?: string;
		source_media?: string;
		synopses?: synopses;
		title?: string;
		track_number?: string;
		track_side?: string;
		type?: string;
		updated_time?: Date;
	}

	export interface Item_of extends referenceAttributes {
		href_deprecated?: boolean;
		result_type_deprecated?: boolean;
	}

	export interface Items_for extends referenceAttributes {
		href_deprecated?: boolean;
		result_type_deprecated?: boolean;
	}

	export interface Master_brand {
		colour?: string;
		competition_warning?: string;
		ident?: string;
		identifiers?: identifiers;
		image_link?: image_link;
		images_mixin?: images_mixin;
		master_brand_date_range?: string;
		mid: string;
		name?: string;
		partner: string;
		position?: number;
		synopses?: string;
		title?: string;
		url_key?: string;
	}

	export interface Master_brand_link {
		master_brand: string;
	}

	export interface Media_availability_time {
		end?: Date;
		start?: Date;
	}

	export interface Media_profile_group {
		#text?: string;
		context?: string;
		pid?: string;
		platform?: string;
		territory?: string;
		transport?: string;
	}

	export interface Media_profile_groups {
		media_profile_group?: Array<media_profile_group>;
	}

	export enum Media_type { Video = 0, Audio = 1 }

	export interface Mixin {
		affected_by?: Array<affected_by>;
		dependency_on?: Array<dependency_on>;
		depends_on?: string;
		deprecated?: boolean;
		deprecated_since?: string;
		guaranteed_until?: string;
		href?: string;
		name: string;
		prohibits?: Array<prohibits>;
		release_status?: release_status_type;
		replaced_by?: string;
		title: string;
	}

	export interface Mixins {
		mixin?: Array<mixin>;
		unstable_mixins?: unstable_mixins;
	}

	export interface Music {
		catalogue_number?: string;
		contributions_mixin?: contributions_mixin;
		duration?: number;
		identifiers?: identifiers;
		ids?: ids;
		images_mixin?: images_mixin;
		item_of?: reference;
		music_code?: string;
		offsets?: offsets;
		partner: string;
		pid: string;
		play_events?: play_events;
		publisher?: string;
		record_label?: string;
		recording_date?: string;
		release_title?: string;
		snippet_url?: string;
		source_media?: string;
		synopses?: synopses;
		title?: string;
		track_number?: string;
		track_side?: string;
		type?: string;
		updated_time?: Date;
	}

	export interface Next {
		href: string;
	}

	export interface Nitro {
		deprecations?: deprecations;
		filters?: filters;
		mixins?: mixins;
		pagination?: pagination;
		results?: results;
		sorts?: sorts;
	}

	export interface Offset_in {
		href: string;
		offset?: number;
		position?: number;
		programme: string;
		version: string;
	}

	export interface Offsets {
		offset_in?: Array<offset_in>;
	}

	export interface Option {
		href?: string;
		release_status?: release_status_type;
		title: string;
		value: string;
	}

	export interface Original_version_duration {
		version?: string;
	}

	export interface Other {
		catalogue_number?: string;
		contributions_mixin?: contributions_mixin;
		duration?: number;
		identifiers?: identifiers;
		ids?: ids;
		images_mixin?: images_mixin;
		item_of?: reference;
		music_code?: string;
		offsets?: offsets;
		partner: string;
		pid: string;
		play_events?: play_events;
		publisher?: string;
		record_label?: string;
		recording_date?: string;
		release_title?: string;
		snippet_url?: string;
		source_media?: string;
		synopses?: synopses;
		title?: string;
		track_number?: string;
		track_side?: string;
		type?: string;
		updated_time?: Date;
	}

	export interface Pagination {
		next?: next;
		previous?: previous;
	}

	export interface PidReference {
		href?: string;
		pid: string;
		position?: number;
		result_type: string;
	}

	export interface Play_event {
		offset?: number;
		pid: string;
		played_in_links?: Array<played_in_links>;
		position?: number;
		synopses?: synopses;
		title?: string;
	}

	export interface Play_events {
		play_event?: Array<play_event>;
	}

	export interface Played_in_links {
		played_in?: string;
	}

	export interface Previous {
		href: string;
	}

	export interface Previous_next_mixin {
		previous_next: string;
	}

	export interface Programme_formats {
		format: Array<format>;
	}

	export interface Programme_type {
		value: string;
	}

	export interface Prohibits {
		ProhibitsFilter?: Array<ProhibitsFilter>;
		ProhibitsMixin?: Array<ProhibitsMixin>;
	}

	export interface ProhibitsFilter {
		name: string;
	}

	export interface ProhibitsMixin {
		ProhibitsMixinFilter?: Array<ProhibitsMixinFilter>;
		ProhibitsMixinMixin?: Array<ProhibitsMixinMixin>;
		name: string;
	}

	export interface ProhibitsMixinFilter {
		name: string;
	}

	export interface ProhibitsMixinMixin {
		name: string;
	}

	export interface Promotion {
		context?: context;
		end_time?: Date;
		identifiers?: identifiers;
		partner: string;
		pid: string;
		priority?: number;
		promoted_by?: string;
		promoted_for?: string;
		promotion_of?: pidReference;
		related_links?: related_links;
		start_time?: Date;
		status?: string;
		synopses?: synopses;
		title?: string;
		updated_time: Date;
		uri?: string;
		url?: string;
	}

	export interface Promotion_of {
		href?: string;
		pid: string;
		position?: number;
		result_type: string;
	}

	export interface Publication_rights {
		#text?: string;
		context?: string;
		platform?: string;
		territory?: string;
		transport?: string;
	}

	export interface Published_time extends dateRange {
		duration?: string;
	}

	export interface Reference extends referenceAttributes {
		href_deprecated?: boolean;
		result_type_deprecated?: boolean;
	}

	export interface ReferenceAttributes {
		href: string;
		result_type: string;
	}

	export interface Related_link {
		availability?: string;
		is_external?: boolean;
		pid: string;
		position?: number;
		synopses?: synopses;
		title?: string;
		type?: string;
		uri?: string;
	}

	export interface Related_links {
		related_link?: Array<related_link>;
	}

	export interface Release_date_group {
		release_date?: string;
		release_year?: string;
		release_year_month?: string;
	}

	export enum Release_status_type { alpha = 0, beta = 1, supported = 2, deprecated = 3 }

	export interface Results {
		availability?: availability;
		brand?: brand;
		broadcast?: broadcast;
		chapter?: item;
		clip?: clip;
		collection?: group-body;
		contributor?: contributor;
		episode?: episode;
		franchise?: group-body;
		gallery?: group-body;
		highlight?: item;
		image?: image;
		master_brand?: master_brand;
		more_than?: number;
		music?: item;
		other?: item;
		page: number;
		page_size: number;
		promotion?: promotion;
		season?: group-body;
		series?: series;
		service?: service;
		speech?: item;
		total?: number;
		version_group?: version_group;
		window?: window;
	}

	export interface Scheduled {
		end?: Date;
		start?: Date;
	}

	export interface Scheduled_publication_rights {
		publication_rights?: Array<publication_rights>;
	}

	export interface Scheduled_time {
		end?: Date;
		start?: Date;
	}

	export interface Season {
		alternate_images_mixin?: alternate_images_mixin;
		embargoed: embargoed;
		for_programmes?: for_programmes;
		identifiers?: identifiers;
		ids?: ids;
		images_mixin?: images_mixin;
		master_brand_link?: master_brand_link;
		partner: string;
		pid: string;
		related_links?: related_links;
		scheduled?: scheduled;
		synopses?: synopses;
		title?: string;
		updated_time: Date;
		url_key?: string;
	}

	export interface Series {
		alternate_images_mixin?: alternate_images_mixin;
		ancestor_titles?: ancestor_titles;
		ancestors?: reference;
		ancestors_titles?: ancestors_titles;
		availability_mixin?: availability_mixin;
		contributions_mixin?: contributions_mixin;
		embargoed: embargoed;
		expected_child_count?: number;
		genre_groupings?: genreGroupingsType;
		identifiers?: identifiers;
		image_link?: image_link;
		images_mixin?: images_mixin;
		is_embeddable?: boolean;
		items_for?: reference;
		master_brand_link?: master_brand_link;
		partner: string;
		pid: string;
		previous_next_mixin?: previous_next_mixin;
		programme_formats?: programme_formats;
		programme_type?: programme_type;
		related_links?: related_links;
		release_date_group?: release_date_group;
		series_of?: pidReference;
		synopses?: synopses;
		title?: string;
		updated_time: Date;
		uri?: string;
	}

	export interface Series_of {
		href?: string;
		pid: string;
		position?: number;
		result_type: string;
	}

	export interface Service {
		date_range?: dateRange;
		description?: string;
		identifiers?: identifiers;
		ids?: ids;
		is_concrete?: boolean;
		is_downloadable?: boolean;
		is_streamable?: boolean;
		master_brand_link?: master_brand_link;
		media_type?: media_type;
		name?: string;
		partner: string;
		region?: string;
		sid: string;
		type?: string;
		updated_time?: Date;
	}

	export interface ServiceReference {
		href: string;
		result_type: string;
		sid: string;
	}

	export interface Size {
		units?: string;
	}

	export interface Sort {
		deprecated?: boolean;
		deprecated_since?: string;
		guaranteed_until?: string;
		is_default?: string;
		name: string;
		release_status?: release_status_type;
		replaced_by?: string;
		sort_direction?: Array<sort_direction>;
		title: string;
	}

	export interface Sort_direction {
		href: string;
		is_default: string;
		name: string;
		value: string;
	}

	export interface Sorts {
		sort?: Array<sort>;
		unstable_sorts?: unstable_sorts;
	}

	export interface Source_asset {
		dimensions?: dimensions;
		focus_point?: focus_point;
		mime_type?: string;
		size?: size;
		uri?: string;
	}

	export interface Speech {
		catalogue_number?: string;
		contributions_mixin?: contributions_mixin;
		duration?: number;
		identifiers?: identifiers;
		ids?: ids;
		images_mixin?: images_mixin;
		item_of?: reference;
		music_code?: string;
		offsets?: offsets;
		partner: string;
		pid: string;
		play_events?: play_events;
		publisher?: string;
		record_label?: string;
		recording_date?: string;
		release_title?: string;
		snippet_url?: string;
		source_media?: string;
		synopses?: synopses;
		title?: string;
		track_number?: string;
		track_side?: string;
		type?: string;
		updated_time?: Date;
	}

	export interface Synopses {
		long?: string;
		medium?: string;
		short?: string;
	}

	export interface Tx_time {
		credits_showing?: Date;
		end?: Date;
		start?: Date;
	}

	export interface Types_with_id {
		types: string;
	}

	export interface Unstable_filters {
		filter?: Array<filter>;
	}

	export interface Unstable_mixins {
		mixin?: Array<mixin>;
	}

	export interface Unstable_sorts {
		sort?: Array<sort>;
	}

	export interface Version_availability {
		availability: string;
	}

	export interface Version_availability_mixin {
		Version_availability_mixinVersion?: Array<Version_availability_mixinVersion>;
	}

	export interface Version_availability_mixinVersion {
		Version_availability_mixinVersionAvailabilities?: Array<Version_availability_mixinVersionAvailabilities>;
		competition_warning?: string;
		duration?: string;
		guidance_warnings?: guidance_warnings;
		pid?: string;
		Version_availability_mixinVersionTypes: Array<Version_availability_mixinVersionTypes>;
		Version_availability_mixinVersionVersion?: Array<Version_availability_mixinVersionVersion>;
	}

	export interface Version_availability_mixinVersionAvailabilities {
		version_availability: Array<version_availability>;
	}

	export interface Version_availability_mixinVersionTypes {
		type?: Array<string>;
	}

	export interface Version_availability_mixinVersionVersion {
		Version_availability_mixinVersionVersionAvailabilities?: Array<Version_availability_mixinVersionVersionAvailabilities>;
		competition_warning?: string;
		duration?: string;
		guidance_warnings?: guidance_warnings;
		pid?: string;
		Version_availability_mixinVersionVersionTypes: Array<Version_availability_mixinVersionVersionTypes>;
	}

	export interface Version_availability_mixinVersionVersionAvailabilities {
		version_availability: Array<version_availability>;
	}

	export interface Version_availability_mixinVersionVersionTypes {
		type?: Array<string>;
	}

	export interface Version_group {
		version: string;
	}

	export interface Version_of {
		href?: string;
		pid: string;
		position?: number;
		result_type: string;
	}

	export interface Version_types_with_id {
		version_types: string;
	}

	export interface Versions {
		available: number;
		version_availability_mixin: version_availability_mixin;
	}

	export interface Versions_mixin {
		available_simulcasts?: available_simulcasts;
		available_versions?: available_versions;
		available_webcasts?: available_webcasts;
		versions?: Array<versions>;
	}

	export interface Warning {
		#text?: string;
		short_description?: string;
		warning_code?: string;
	}

	export interface Warning_items {
		Warning_itemsWarning?: Array<Warning_itemsWarning>;
	}

	export interface Warning_itemsWarning {
		#text?: string;
		short_description?: string;
		Warning_itemsWarningWarning?: Array<Warning_itemsWarningWarning>;
		warning_code?: string;
	}

	export interface Warning_itemsWarningWarning {
		#text?: string;
		short_description?: string;
		warning_code?: string;
	}

	export interface Warning_text {
		#text?: string;
		length?: string;
	}

	export interface Warning_texts {
		Warning_textsWarning_text?: Array<Warning_textsWarning_text>;
	}

	export interface Warning_textsWarning_text {
		#text?: string;
		length?: string;
		Warning_textsWarning_textWarning_text?: Array<Warning_textsWarning_textWarning_text>;
	}

	export interface Warning_textsWarning_textWarning_text {
		#text?: string;
		length?: string;
	}

	export interface Warnings {
		warning?: Array<warning>;
		warning_text?: Array<warning_text>;
	}

	export interface Window {
		accurate_programme_time?: dateRange;
		ancestor_titles?: ancestor_titles;
		ancestors_titles?: ancestors_titles;
		identifiers?: identifiers;
		ids?: ids;
		image_link?: image_link;
		images_mixin?: images_mixin;
		media_availability_time?: dateRange;
		partner: string;
		pid: string;
		scheduled_publication_rights?: scheduled_publication_rights;
		scheduled_time?: scheduled_time;
		service?: serviceReference;
		updated_time?: Date;
		window_of?: Array<pidReference>;
	}

	export interface Window_of {
		href?: string;
		pid: string;
		position?: number;
		result_type: string;
	}


	/**The XQuery language version. */
	export enum Xquery-version { 1.0-ml = 0, 0.9-ml = 1, 1.0 = 2, XSLT = 3 }

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Get API definition
		 * Get API definition
		 * Get 
		 * @return {void} Metadata response
		 */
		GetAPI(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Discover details of on-demand availability for programmes and their versions
		 * Discover details of on-demand availability for programmes and their versions
		 * Get availabilities
		 * @param {string} sort Sorts:
		 * * scheduled_start: sort chronologically by scheduled start time/date, ascending
		 * @param {string} sort_direction Sort direction
		 * @param {Array<string>} availability filter for subset of availabilities
		 * @param {Array<string>} descendants_of filter for subset of availabilities that have PID as ancestor
		 * @param {Array<string>} media_set filter for subset of availabilities with media set
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {Array<string>} territory filter for availabilities in given territory
		 * @param {boolean} debug Turn on debug information (undocumented)
		 * @return {Nitro} Nitro response
		 */
		ListAvailability(sort: string, sort_direction: string, availability: Array<string>, descendants_of: Array<string>, media_set: Array<string>, page: number, page_size: number, territory: Array<string>, debug: boolean, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'availabilities?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&' + availability.map(z => `availability=${encodeURIComponent(z)}`).join('&') + '&' + descendants_of.map(z => `descendants_of=${encodeURIComponent(z)}`).join('&') + '&' + media_set.map(z => `media_set=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + territory.map(z => `territory=${encodeURIComponent(z)}`).join('&') + '&debug=' + debug, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Build schedules and find metadata for TV and radio broadcasts
		 * Fetch metadata about linear Broadcasts and Services, allowing the generation of Television and Radio schedules and other datasets for broadcast items. Use /schedules instead of this feed as it is more efficient. Broadcasts will be deprecated in the future.
		 * Get broadcasts
		 * @param {string} sort Sorts:
		 * * start_date: sort chronologically by scheduled start time/date, ascending
		 * @param {string} sort_direction Sort direction
		 * @param {Array<string>} mixin Mixins:
		 * * titles: return ancestor programme titles
		 * @param {Array<string>} authority filter for subset of broadcasts that have given authority
		 * @param {Array<string>} descendants_of filter for subset of broadcasts that are descendants of the given programme PID
		 * @param {Date} end_from filter for subset of broadcasts that end on or later than the specified datetime
		 * @param {Date} end_to filter for subset of broadcasts that end on or earlier than the specified datetime
		 * @param {Array<string>} format filter for subset of broadcasts that are classified in the given format ID
		 * @param {Array<string>} genre filter for subset of broadcasts that are classified in the given genre ID
		 * @param {Array<string>} id filter for subset of broadcasts that have given identifier
		 * @param {Array<string>} item filter for subset of broadcasts with the given item performed on it
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {string} people filter for subset of broadcasts that have given contributor
		 * @param {Array<string>} pid filter for subset of broadcasts having given PID
		 * @param {string} q filter for subset of broadcasts matching supplied keyword/phrase (boolean operators permitted)
		 * @param {Date} schedule_day filter for subset of broadcasts that start on the specified day (BBC time)
		 * @param {Date} schedule_day_from filter for subset of broadcasts that start on or after the specified day (BBC time)
		 * @param {Date} schedule_day_to filter for subset of broadcasts that start on or before the specified day (BBC time)
		 * @param {Array<string>} service_master_brand filter for subset of broadcasts with given service master brand
		 * @param {Array<string>} sid filter for subset of broadcasts that are on the specified linear service
		 * @param {Date} start_from filter for subset of broadcasts that start on or later than the specified datetime
		 * @param {Date} start_to filter for subset of broadcasts that start on or earlier than the specified datetime
		 * @param {Array<string>} version filter for subset of broadcasts with given PID as their parent version
		 * @return {Nitro} Nitro response
		 */
		ListBroadcasts(sort: string, sort_direction: string, mixin: Array<string>, authority: Array<string>, descendants_of: Array<string>, end_from: Date, end_to: Date, format: Array<string>, genre: Array<string>, id: Array<string>, item: Array<string>, page: number, page_size: number, people: string, pid: Array<string>, q: string, schedule_day: Date, schedule_day_from: Date, schedule_day_to: Date, service_master_brand: Array<string>, sid: Array<string>, start_from: Date, start_to: Date, version: Array<string>, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'broadcasts?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&' + mixin.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&' + authority.map(z => `authority=${encodeURIComponent(z)}`).join('&') + '&' + descendants_of.map(z => `descendants_of=${encodeURIComponent(z)}`).join('&') + '&end_from=' + end_from.toISOString() + '&end_to=' + end_to.toISOString() + '&' + format.map(z => `format=${encodeURIComponent(z)}`).join('&') + '&' + genre.map(z => `genre=${encodeURIComponent(z)}`).join('&') + '&' + id.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&' + item.map(z => `item=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&people=' + (people == null ? '' : encodeURIComponent(people)) + '&' + pid.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&schedule_day=' + schedule_day.toISOString() + '&schedule_day_from=' + schedule_day_from.toISOString() + '&schedule_day_to=' + schedule_day_to.toISOString() + '&' + service_master_brand.map(z => `service_master_brand=${encodeURIComponent(z)}`).join('&') + '&' + sid.map(z => `sid=${encodeURIComponent(z)}`).join('&') + '&start_from=' + start_from.toISOString() + '&start_to=' + start_to.toISOString() + '&' + version.map(z => `version=${encodeURIComponent(z)}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Find metadata for curated groups: seasons, collections, galleries or franchises
		 * Long-lived curated collections of programmes and more, including Collections, Seasons, Franchises and Galleries
		 * Get groups
		 * @param {string} sort Sorts:
		 * * pid: sort alphabetically by PID
		 * @param {string} sort_direction Sort direction
		 * @param {Array<string>} mixin Mixins:
		 * * alternate_images: mixin to return the alternate images for a group
		 * * group_for: mixin to return links to programme entities that group belongs to
		 * * images: mixin to add image information for a group
		 * * related_links: mixin to return related links for the group
		 * @param {string} for_descendants_of filter for groups related to given programme or its descendants
		 * @param {string} for_programme filter for subset of groups directly related to a given programme
		 * @param {string} group filter for subset of groups which belong to the given group pid
		 * @param {Array<string>} group_type filter for subset of groups that have the given group type
		 * @param {string} member filter for subset of groups which contain an entity with the given pid as a member
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {Array<string>} partner_id filter for groups by partner ID
		 * @param {Array<string>} partner_pid filter for groups by partner PID
		 * @param {Array<string>} pid filter for subset of seasons, collections, galleries or franchises having given PID
		 * @param {string} q filter for subset of groups matching supplied keyword/phrase (boolean operators permitted)
		 * @param {string} embargoed Control return of embargoed items (undocumented)
		 * @return {Nitro} Nitro response
		 */
		ListGroups(sort: string, sort_direction: string, mixin: Array<string>, for_descendants_of: string, for_programme: string, group: string, group_type: Array<string>, member: string, page: number, page_size: number, partner_id: Array<string>, partner_pid: Array<string>, pid: Array<string>, q: string, embargoed: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'groups?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&' + mixin.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&for_descendants_of=' + (for_descendants_of == null ? '' : encodeURIComponent(for_descendants_of)) + '&for_programme=' + (for_programme == null ? '' : encodeURIComponent(for_programme)) + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&' + group_type.map(z => `group_type=${encodeURIComponent(z)}`).join('&') + '&member=' + (member == null ? '' : encodeURIComponent(member)) + '&page=' + page + '&page_size=' + page_size + '&' + partner_id.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&' + pid.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&embargoed=' + (embargoed == null ? '' : encodeURIComponent(embargoed)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Find metadata for images
		 * Find metadata for images, particularly those in galleries
		 * Get images
		 * @param {string} sort Sorts:
		 * * group_position: sort numerically by position, ascending only
		 * * pid: sort alphabetically by PID
		 * @param {string} sort_direction Sort direction
		 * @param {string} group filter for images belonging to the given group (i.e. Gallery)
		 * @param {Array<string>} image_type filter for images by type
		 * @param {string} is_alternate_image_for filter for alternate images by entity PID
		 * @param {string} is_image_for filter for images by entity PID
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {Array<string>} partner_id filter for images by partner ID
		 * @param {Array<string>} partner_pid filter for images by partner PID
		 * @param {Array<string>} pid filter for subset of images having given PID
		 * @param {string} q filter for subset of images matching supplied keyword/phrase (boolean operators permitted)
		 * @param {string} embargoed Control return of embargoed items (undocumented)
		 * @return {Nitro} Nitro response
		 */
		ListImages(sort: string, sort_direction: string, group: string, image_type: Array<string>, is_alternate_image_for: string, is_image_for: string, page: number, page_size: number, partner_id: Array<string>, partner_pid: Array<string>, pid: Array<string>, q: string, embargoed: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'images?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&' + image_type.map(z => `image_type=${encodeURIComponent(z)}`).join('&') + '&is_alternate_image_for=' + (is_alternate_image_for == null ? '' : encodeURIComponent(is_alternate_image_for)) + '&is_image_for=' + (is_image_for == null ? '' : encodeURIComponent(is_image_for)) + '&page=' + page + '&page_size=' + page_size + '&' + partner_id.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&' + pid.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&embargoed=' + (embargoed == null ? '' : encodeURIComponent(embargoed)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Look inside programmes to find segments: chapters, tracks and more
		 * Look inside programmes to find segments: chapters, tracks and more
		 * Get items
		 * @param {string} sort Sorts:
		 * * pid: sort by pid, descending
		 * @param {string} sort_direction Sort direction
		 * @param {Array<string>} mixin Mixins:
		 * * contributions: mixin to return information about contributors to items
		 * * images: mixin to add image information for an item
		 * * offset: mixin to return programme segment offsets, works in conjunction with programme filter
		 * * play_event: mixin to return programme segment events, works in conjunction with programme or segment_event filters
		 * @param {string} authority filter for subset of items that have an ID issued by the given authority
		 * @param {Array<string>} id filter for subset of items having given ID
		 * @param {string} id_type filter for subset of items that have given an ID of the given type
		 * @param {Array<string>} item_type filter for specific type(s) of items
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {Array<string>} partner_id filter for items by partner ID
		 * @param {Array<string>} partner_pid filter for items by partner PID
		 * @param {string} people filter for subset of items that have specified person involved
		 * @param {Array<string>} pid filter for subset of items matching one of the given PIDs
		 * @param {string} programme filter for subset of items that are part of the given programme
		 * @param {string} q filter for subset of items matching supplied keyword/phrase (boolean operators permitted)
		 * @param {string} segment_event filter for item with the given segment_event
		 * @return {Nitro} Nitro response
		 */
		ListItems(sort: string, sort_direction: string, mixin: Array<string>, authority: string, id: Array<string>, id_type: string, item_type: Array<string>, page: number, page_size: number, partner_id: Array<string>, partner_pid: Array<string>, people: string, pid: Array<string>, programme: string, q: string, segment_event: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'items?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&' + mixin.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&authority=' + (authority == null ? '' : encodeURIComponent(authority)) + '&' + id.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&id_type=' + (id_type == null ? '' : encodeURIComponent(id_type)) + '&' + item_type.map(z => `item_type=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + partner_id.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&people=' + (people == null ? '' : encodeURIComponent(people)) + '&' + pid.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&programme=' + (programme == null ? '' : encodeURIComponent(programme)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&segment_event=' + (segment_event == null ? '' : encodeURIComponent(segment_event)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * List all Master Brands
		 * List all Master Brands
		 * Get master_brands
		 * @param {string} sort Sorts:
		 * * mid: sort by mid, ascending
		 * @param {string} sort_direction Sort direction
		 * @param {Array<string>} mixin Mixins:
		 * * images: mixin to add image information for a masterbrand
		 * @param {Array<string>} mid filter for subset of masterbrands that have given identifier
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {Array<string>} partner_id filter for masterbrands by partner ID
		 * @param {Array<string>} partner_pid filter for masterbrands by partner PID
		 * @param {string} q filter for subset of masterbrands matching supplied keyword/phrase (boolean operators permitted)
		 * @return {Nitro} Nitro response
		 */
		ListMasterbrands(sort: string, sort_direction: string, mixin: Array<string>, mid: Array<string>, page: number, page_size: number, partner_id: Array<string>, partner_pid: Array<string>, q: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'master_brands?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&' + mixin.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&' + mid.map(z => `mid=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + partner_id.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Find the people behind and in programmes: cast, crew, guests and more
		 * The People feed allows you to search for the people and groups that contribute to programmes. This is the starting point for cast and crew credits, as well as finding contributors using external IDs (such as Wikipedia URLs)
		 * Get people
		 * @param {string} authority filter for subset of people that have an ID issued by the given authority
		 * @param {Array<Embargoed>} has_external_id filter for people who have an external identifier
		 * @param {Array<string>} id filter for subset of people having given ID
		 * @param {string} id_type filter for subset of people that have given an ID of the given type
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {Array<string>} partner_id filter for people by partner ID
		 * @param {Array<string>} partner_pid filter for people by partner PID
		 * @param {Array<string>} pid filter for subset of people having given PID
		 * @param {string} programme filter for subset of people that have contributed to the given programme pid
		 * @param {string} q filter for subset of people matching supplied keyword/phrase (boolean operators permitted)
		 * @return {Nitro} Nitro response
		 */
		ListPeople(authority: string, has_external_id: Array<Embargoed>, id: Array<string>, id_type: string, page: number, page_size: number, partner_id: Array<string>, partner_pid: Array<string>, pid: Array<string>, programme: string, q: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'people?authority=' + (authority == null ? '' : encodeURIComponent(authority)) + '&' + has_external_id.map(z => `has_external_id=${z}`).join('&') + '&' + id.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&id_type=' + (id_type == null ? '' : encodeURIComponent(id_type)) + '&page=' + page + '&page_size=' + page_size + '&' + partner_id.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&' + pid.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&programme=' + (programme == null ? '' : encodeURIComponent(programme)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Look inside pips entities
		 * Look inside pips entities
		 * Get pips
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {string} q filter for subset of programmes matching supplied keyword/phrase (boolean operators permitted)
		 * @return {Nitro} Nitro response
		 */
		ListPips(page: number, page_size: number, q: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'pips?page=' + page + '&page_size=' + page_size + '&q=' + (q == null ? '' : encodeURIComponent(q)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Exposes programme information for a single pid
		 * Exposes programme information for a single pid
		 * Get programme_details
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {string} partner_pid Filter for programme information by partner PID
		 * @param {string} pid Filter for programme information for the provided PID
		 * @return {Nitro} Nitro response
		 */
		ListProgrammeDetails(page: number, page_size: number, partner_pid: string, pid: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'programme_details?page=' + page + '&page_size=' + page_size + '&partner_pid=' + (partner_pid == null ? '' : encodeURIComponent(partner_pid)) + '&pid=' + (pid == null ? '' : encodeURIComponent(pid)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Start here for programmes metadata: Brands, Series, Episodes and Clips
		 * Fetch metadata about Programmes (brands, series, episodes, clips). By applying different filter restrictions this feed can be used in many ways, for example to retrieve all series belonging to a brand, all the episodes and/or clips for a specific series, or any TLEO objects for a masterbrand. Other filters permit restricting to specific formats and/or genres, and you can request specific versions (for example Signed or Audio-Described). Parameters may be combined in any way suitable for your application.
		 * Get programmes
		 * @param {string} sort Sorts:
		 * * group_position: sort numerically by position in group, ascending
		 * * pid: sort alphabetically by PID, descending
		 * * position: sort numerically by position, ascending
		 * * promotion: sort by promotion rank, ascending
		 * * release_date: sort chronologically by release date, descending
		 * * relevance: sort by weighting of search term (use with q parameter)
		 * * scheduled_start: sort chronologically by scheduled start time/date, ascending
		 * * strict_title: sort alphabetically by title, ascending
		 * * title: sort by title librarian style (ignoring leading 'The', 'A', etc), ascending
		 * * tree: sort by root pid and then preorder tree sort. Requires entities to have release date.
		 * @param {string} sort_direction Sort direction
		 * @param {Array<string>} mixin Mixins:
		 * * alternate_images: mixin to return the alternate images for a programme
		 * * ancestor_titles: mixin to return ancestor programme titles
		 * * availability: mixin to return programme availability information
		 * * available_simulcasts: mixin to return information about programmes that are currently available as simulcasts
		 * * available_versions: mixin to return information about programmes that are currently available on demand
		 * * available_webcasts: mixin to return information about programmes that are currently available as webcasts
		 * * contributions: mixin to return information about contributors to a programme
		 * * duration: mixin to return original version duration in programme concept entities
		 * * genre_groupings: mixin to return list of genre groupings
		 * * genre_groups: mixin to return list of genre groups
		 * * images: mixin to add image information for a programme
		 * * is_embeddable: mixin to add embeddable information for a programme
		 * * previous_next: mixin to return the programmes which appear before and after a programme (as determined by the sort applied in the request)
		 * * programme_type: mixin to return the programme type
		 * * related_links: mixin to return information about related links to a programme
		 * * titles: mixin to return ancestor programme titles
		 * * versions_availability: mixin to return information about programmes that are currently available
		 * @param {Array<Embargoed>} audio_described filter for subset of programmes that are audio-described
		 * @param {Array<string>} availability filter for subset of programmes that have availability
		 * @param {Array<string>} availability_entity_type additional filter when availability=available
		 * @param {Date} availability_from filter for subset of programmes that are available after or at the specified datetime
		 * @param {Array<string>} availability_type filter for a subset of programmes that are available for a given type
		 * @param {Array<string>} children_of filter for subset of programmes that have PID as immediate parent
		 * @param {Array<string>} descendants_of filter for subset of programmes that have PID as ancestor
		 * @param {Array<string>} duration filter for subset of programmes that have given duration
		 * @param {Array<string>} entity_type filter for subset of programmes that have given entity type
		 * @param {Array<string>} format filter for subset of programmes with format
		 * @param {Array<string>} genre filter for subset of programmes with genre
		 * @param {string} group filter for subset of programmes which belong to the given group pid
		 * @param {string} initial_letter filter for subset of programmes with title beginning with initial letter librarian style (ignoring leading 'The', 'An' (Welsh), etc) 0-9 a-z
		 * @param {string} initial_letter_end Programmes with (librarian) titles whose initial letter is equal/before given letter. Use with initial_letter_start for a range
		 * @param {string} initial_letter_start Programmes with (librarian) titles whose initial letter is equal/after given letter. Use with initial_letter_end for range.
		 * @param {Array<string>} initial_letter_strict filter for subset of programmes with title beginning with initial letter
		 * @param {Array<string>} item filter for subset of programmes with linked to versions which have the given item pids
		 * @param {Array<string>} master_brand filter for subset of programmes with master_brand
		 * @param {string} media_set filter for subset of programmes with media set
		 * @param {Array<string>} media_type filter for subset of programmes with media type
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {Array<string>} partner_id filter for programmes by partner ID
		 * @param {Array<string>} partner_pid filter for programmes by partner PID
		 * @param {Array<string>} payment_type filter for a subset of programmes that are of the given payment_type
		 * @param {string} people filter for subset of programmes with contributions by given people PID
		 * @param {Array<string>} pid filter for subset of programmes having given PID
		 * @param {string} promoted_for filter for subset of programmes which are promoted for given service
		 * @param {string} q filter for subset of programmes matching supplied keyword/phrase (boolean operators permitted)
		 * @param {Array<string>} signed filter for subset of programmes that are signed
		 * @param {string} tag_name filter for subset of programmes with tag
		 * @param {string} tag_scheme filter for subset of programmes with a tag
		 * @param {Array<Embargoed>} tleo filter for subset of programmes that are TLEOs
		 * @param {Array<string>} version filter for subset of programmes with given PID as one of their versions
		 * @param {string} embargoed Control return of embargoed items (undocumented)
		 * @return {Nitro} Nitro response
		 */
		ListProgrammes(sort: string, sort_direction: string, mixin: Array<string>, audio_described: Array<Embargoed>, availability: Array<string>, availability_entity_type: Array<string>, availability_from: Date, availability_type: Array<string>, children_of: Array<string>, descendants_of: Array<string>, duration: Array<string>, entity_type: Array<string>, format: Array<string>, genre: Array<string>, group: string, initial_letter: string, initial_letter_end: string, initial_letter_start: string, initial_letter_strict: Array<string>, item: Array<string>, master_brand: Array<string>, media_set: string, media_type: Array<string>, page: number, page_size: number, partner_id: Array<string>, partner_pid: Array<string>, payment_type: Array<string>, people: string, pid: Array<string>, promoted_for: string, q: string, signed: Array<string>, tag_name: string, tag_scheme: string, tleo: Array<Embargoed>, version: Array<string>, embargoed: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'programmes?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&' + mixin.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&' + audio_described.map(z => `audio_described=${z}`).join('&') + '&' + availability.map(z => `availability=${encodeURIComponent(z)}`).join('&') + '&' + availability_entity_type.map(z => `availability_entity_type=${encodeURIComponent(z)}`).join('&') + '&availability_from=' + availability_from.toISOString() + '&' + availability_type.map(z => `availability_type=${encodeURIComponent(z)}`).join('&') + '&' + children_of.map(z => `children_of=${encodeURIComponent(z)}`).join('&') + '&' + descendants_of.map(z => `descendants_of=${encodeURIComponent(z)}`).join('&') + '&' + duration.map(z => `duration=${encodeURIComponent(z)}`).join('&') + '&' + entity_type.map(z => `entity_type=${encodeURIComponent(z)}`).join('&') + '&' + format.map(z => `format=${encodeURIComponent(z)}`).join('&') + '&' + genre.map(z => `genre=${encodeURIComponent(z)}`).join('&') + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&initial_letter=' + (initial_letter == null ? '' : encodeURIComponent(initial_letter)) + '&initial_letter_end=' + (initial_letter_end == null ? '' : encodeURIComponent(initial_letter_end)) + '&initial_letter_start=' + (initial_letter_start == null ? '' : encodeURIComponent(initial_letter_start)) + '&' + initial_letter_strict.map(z => `initial_letter_strict=${encodeURIComponent(z)}`).join('&') + '&' + item.map(z => `item=${encodeURIComponent(z)}`).join('&') + '&' + master_brand.map(z => `master_brand=${encodeURIComponent(z)}`).join('&') + '&media_set=' + (media_set == null ? '' : encodeURIComponent(media_set)) + '&' + media_type.map(z => `media_type=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + partner_id.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&' + payment_type.map(z => `payment_type=${encodeURIComponent(z)}`).join('&') + '&people=' + (people == null ? '' : encodeURIComponent(people)) + '&' + pid.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&promoted_for=' + (promoted_for == null ? '' : encodeURIComponent(promoted_for)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + signed.map(z => `signed=${encodeURIComponent(z)}`).join('&') + '&tag_name=' + (tag_name == null ? '' : encodeURIComponent(tag_name)) + '&tag_scheme=' + (tag_scheme == null ? '' : encodeURIComponent(tag_scheme)) + '&' + tleo.map(z => `tleo=${z}`).join('&') + '&' + version.map(z => `version=${encodeURIComponent(z)}`).join('&') + '&embargoed=' + (embargoed == null ? '' : encodeURIComponent(embargoed)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Discover metadata for content promotions
		 * Details of short-term editorially curated "promotions", for instance those programmes featured on iPlayer today
		 * Get promotions
		 * @param {Array<string>} mixin Mixins:
		 * * related_links: mixin to return information about related links to a promotion
		 * @param {string} context filter for subset of promotions belonging to a given context
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {Array<string>} partner_id filter for promotions by partner ID
		 * @param {Array<string>} partner_pid filter for promotions by partner PID
		 * @param {Array<string>} pid filter for subset of promotions having given PID
		 * @param {Array<string>} promoted_by filter for subset of promotions having given promoted by
		 * @param {Array<string>} promoted_for filter for subset of promotions having given promoted for
		 * @param {string} q filter for subset of promotions matching supplied keyword/phrase (boolean operators permitted)
		 * @param {Array<string>} status filter for subset of promotions with status
		 * @return {Nitro} Nitro response
		 */
		ListPromotions(mixin: Array<string>, context: string, page: number, page_size: number, partner_id: Array<string>, partner_pid: Array<string>, pid: Array<string>, promoted_by: Array<string>, promoted_for: Array<string>, q: string, status: Array<string>, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'promotions?' + mixin.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&context=' + (context == null ? '' : encodeURIComponent(context)) + '&page=' + page + '&page_size=' + page_size + '&' + partner_id.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&' + pid.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&' + promoted_by.map(z => `promoted_by=${encodeURIComponent(z)}`).join('&') + '&' + promoted_for.map(z => `promoted_for=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + status.map(z => `status=${encodeURIComponent(z)}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Build schedules and find metadata for TV and radio broadcasts and webcasts
		 * Dates, Times, Schedules: when and where are programmes being shown?
		 * Get schedules
		 * @param {string} sort Sorts:
		 * * start_date: sort chronologically by scheduled start time/date, ascending
		 * @param {string} sort_direction Sort direction
		 * @param {Array<string>} mixin Mixins:
		 * * ancestor_titles: return ancestor programme titles
		 * * images: mixin to add image information for broadcasts and webcasts
		 * * titles: return ancestor programme titles
		 * @param {Array<string>} authority filter for subset of broadcasts and webcasts that have given authority
		 * @param {Array<string>} descendants_of filter for subset of broadcasts and webcasts that are descendants of the given programme PID
		 * @param {Date} end_from filter for subset of broadcasts and webcasts that end on or later than the specified datetime
		 * @param {Date} end_to filter for subset of broadcasts and webcasts that end on or earlier than the specified datetime
		 * @param {Array<string>} format filter for subset of broadcasts and webcasts that are classified in the given format ID
		 * @param {Array<string>} genre filter for subset of broadcasts and webcasts that are classified in the given genre ID
		 * @param {string} group filter for subset of broadcasts and webcasts that have programmes in the given group
		 * @param {Array<string>} id filter for subset of broadcasts and webcasts that have given identifier
		 * @param {Array<string>} id_type filter for subset of broadcasts and webcasts that have given id type
		 * @param {Array<string>} item filter for subset of broadcasts and webcasts with the given item performed on it
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {Array<string>} partner_id filter for broadcasts and webcasts by partner ID
		 * @param {Array<string>} partner_pid filter for broadcasts and webcasts by partner PID
		 * @param {string} people filter for subset of broadcasts and webcasts that have given contributor
		 * @param {Array<string>} pid filter for subset of broadcasts and webcasts having given PID
		 * @param {string} q filter for subset of broadcasts and webcasts matching supplied keyword/phrase (boolean operators permitted)
		 * @param {boolean} repeat filter to show either only repeats or non-repeats
		 * @param {Date} schedule_day filter for subset of broadcasts and webcasts that start on the specified day (BBC time)
		 * @param {Date} schedule_day_from filter for subset of broadcasts and webcasts that start on or after the specified day (BBC time)
		 * @param {Date} schedule_day_to filter for subset of broadcasts and webcasts that start on or before the specified day (BBC time)
		 * @param {Array<string>} service_master_brand filter for subset of broadcasts and webcasts with given service master brand
		 * @param {Array<string>} sid filter for subset of broadcasts and webcasts that are on the specified linear service
		 * @param {Date} start_from filter for subset of broadcasts and webcasts that start on or later than the specified datetime
		 * @param {Date} start_to filter for subset of broadcasts and webcasts that start on or earlier than the specified datetime
		 * @param {Array<string>} version filter for subset of broadcasts and webcasts with given PID as their parent version
		 * @return {Nitro} Nitro response
		 */
		ListSchedules(sort: string, sort_direction: string, mixin: Array<string>, authority: Array<string>, descendants_of: Array<string>, end_from: Date, end_to: Date, format: Array<string>, genre: Array<string>, group: string, id: Array<string>, id_type: Array<string>, item: Array<string>, page: number, page_size: number, partner_id: Array<string>, partner_pid: Array<string>, people: string, pid: Array<string>, q: string, repeat: boolean, schedule_day: Date, schedule_day_from: Date, schedule_day_to: Date, service_master_brand: Array<string>, sid: Array<string>, start_from: Date, start_to: Date, version: Array<string>, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'schedules?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&' + mixin.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&' + authority.map(z => `authority=${encodeURIComponent(z)}`).join('&') + '&' + descendants_of.map(z => `descendants_of=${encodeURIComponent(z)}`).join('&') + '&end_from=' + end_from.toISOString() + '&end_to=' + end_to.toISOString() + '&' + format.map(z => `format=${encodeURIComponent(z)}`).join('&') + '&' + genre.map(z => `genre=${encodeURIComponent(z)}`).join('&') + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&' + id.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&' + id_type.map(z => `id_type=${encodeURIComponent(z)}`).join('&') + '&' + item.map(z => `item=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + partner_id.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&people=' + (people == null ? '' : encodeURIComponent(people)) + '&' + pid.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&repeat=' + repeat + '&schedule_day=' + schedule_day.toISOString() + '&schedule_day_from=' + schedule_day_from.toISOString() + '&schedule_day_to=' + schedule_day_to.toISOString() + '&' + service_master_brand.map(z => `service_master_brand=${encodeURIComponent(z)}`).join('&') + '&' + sid.map(z => `sid=${encodeURIComponent(z)}`).join('&') + '&start_from=' + start_from.toISOString() + '&start_to=' + start_to.toISOString() + '&' + version.map(z => `version=${encodeURIComponent(z)}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get Schema definition
		 * Get Schema definition
		 * Get schema
		 * @return {void} Metadata response
		 */
		GetXSD(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'schema', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Information about the linear services used for broadcast transmissions
		 * The services feed exposes the linear broadcast "services" from PIPs. These are the actual services which broadcast programmes (eg bbc_one_oxford is the service for BBC One in Oxford).
		 * Get services
		 * @param {Date} end_from Return services that end on or later than the specified datetime
		 * @param {Date} end_to filter for subset of broadcasts that end on or earlier than the specified datetime
		 * @param {Array<string>} mid filter for services by masterbrand MID
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {Array<string>} partner_id filter for services by partner ID
		 * @param {Array<string>} partner_pid filter for services by partner PID
		 * @param {string} q filter for subset of services matching supplied keyword/phrase (boolean operators permitted)
		 * @param {Array<string>} service_type filter for specified type of linear services
		 * @param {Array<string>} sid filter for specified linear service
		 * @param {Date} start_from Return services that start on or later than the specified datetime
		 * @param {Date} start_to Return services that start earlier than the specified datetime
		 * @return {Nitro} Nitro response
		 */
		ListServices(end_from: Date, end_to: Date, mid: Array<string>, page: number, page_size: number, partner_id: Array<string>, partner_pid: Array<string>, q: string, service_type: Array<string>, sid: Array<string>, start_from: Date, start_to: Date, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'services?end_from=' + end_from.toISOString() + '&end_to=' + end_to.toISOString() + '&' + mid.map(z => `mid=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + partner_id.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + service_type.map(z => `service_type=${encodeURIComponent(z)}`).join('&') + '&' + sid.map(z => `sid=${encodeURIComponent(z)}`).join('&') + '&start_from=' + start_from.toISOString() + '&start_to=' + start_to.toISOString(), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get raw brand
		 * Get raw brand
		 * Get v1/brands/{pid}
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_brand(pid: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'v1/brands/' + (pid == null ? '' : encodeURIComponent(pid)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get raw brand franchise
		 * Get raw brand franchises
		 * Get v1/brands/{pid}/franchises/
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_brand_franchises(pid: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'v1/brands/' + (pid == null ? '' : encodeURIComponent(pid)) + '/franchises/', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get raw episode
		 * Get raw episode
		 * Get v1/episodes/{pid}
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_episode(pid: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'v1/episodes/' + (pid == null ? '' : encodeURIComponent(pid)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get raw ancestors
		 * Get raw ancestors
		 * Get v1/episodes/{pid}/ancestors/
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_ancestors(pid: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'v1/episodes/' + (pid == null ? '' : encodeURIComponent(pid)) + '/ancestors/', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get raw formats
		 * Get raw formats
		 * Get v1/episodes/{pid}/formats/
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_formats(pid: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'v1/episodes/' + (pid == null ? '' : encodeURIComponent(pid)) + '/formats/', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get raw genre groups
		 * Get raw genre groups
		 * Get v1/episodes/{pid}/genre_groups/
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_genre_groups(pid: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'v1/episodes/' + (pid == null ? '' : encodeURIComponent(pid)) + '/genre_groups/', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get raw image
		 * Get raw image
		 * Get v1/images/{pid}
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_image(pid: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'v1/images/' + (pid == null ? '' : encodeURIComponent(pid)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get raw masterbrand
		 * Get raw masterbrand
		 * Get v1/master_brands/{mbid}
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_masterbrand(mbid: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'v1/master_brands/' + (mbid == null ? '' : encodeURIComponent(mbid)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get raw promotion
		 * Get raw promotion
		 * Get v1/promotions/{pid}
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_promotion(pid: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'v1/promotions/' + (pid == null ? '' : encodeURIComponent(pid)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Metadata on editorial programme versions: original, signed, audio-described, etc
		 * The versions feed exposes editorial "Versions" of programmes. These are concepts used to capture different presentations of an overall programme: for example, versions of a programme may include one with sign language, one with audio description, one edited for content and more. Versions are also important to understand for broadcasts: a linear broadcast or an ondemand is always of a specific version, not merely of a programme.
		 * Get versions
		 * @param {Array<string>} availability filter for subset of versions that have availability
		 * @param {Array<string>} descendants_of filter for subset of versions having given programme PID
		 * @param {Array<string>} media_set filter for subset of versions with availability in the given media set
		 * @param {number} page which page of results to return
		 * @param {number} page_size number of results in each page
		 * @param {Array<string>} partner_id filter for versions by partner ID
		 * @param {Array<string>} partner_pid filter for versions by partner PID
		 * @param {Array<string>} payment_type filter for a subset of versions that are of the given payment_type
		 * @param {Array<string>} pid filter for subset of versions having given PID
		 * @param {string} embargoed Control return of embargoed items (undocumented)
		 * @return {Nitro} Nitro response
		 */
		ListVersions(availability: Array<string>, descendants_of: Array<string>, media_set: Array<string>, page: number, page_size: number, partner_id: Array<string>, partner_pid: Array<string>, payment_type: Array<string>, pid: Array<string>, embargoed: string, callback: (data : Nitro) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'versions?' + availability.map(z => `availability=${encodeURIComponent(z)}`).join('&') + '&' + descendants_of.map(z => `descendants_of=${encodeURIComponent(z)}`).join('&') + '&' + media_set.map(z => `media_set=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + partner_id.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&' + payment_type.map(z => `payment_type=${encodeURIComponent(z)}`).join('&') + '&' + pid.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&embargoed=' + (embargoed == null ? '' : encodeURIComponent(embargoed)), callback, this.error, this.statusCode, headersHandler);
		}
	}

}

