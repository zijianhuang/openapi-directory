import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface AncestorSummary {
		ancestor_type: string;
		id: string;
		images: Array<Image>;
		titles: AncestorTitles;
		type: string;
	}

	export interface AncestorTitles {
		title: string;
		type: string;
	}

	export interface AvailableVersions {
		available: string;
		available_from_date: string;
		available_to_date: string;
		duration: string;
		has_guidance: boolean;
		media_set: string;
		type: string;
		version_pid: string;
		version_type: string;
	}

	export interface Body {
		category_id: string;
		platform: BodyPlatform;
	}

	export enum BodyPlatform { responsiveweb = 0, app = 1 }

	export interface Body_1 {
		category_id: string;
		platform: Body_1Platform;
	}

	export enum Body_1Platform { responsiveweb = 0, app = 1 }

	export interface Body_2 {
		platform: Body_2Platform;
		service_id: string;
	}

	export enum Body_2Platform { responsiveweb = 0, app = 1 }

	export interface Body_3 {
		platform: Body_3Platform;
		service_id: string;
	}

	export enum Body_3Platform { responsiveweb = 0, app = 1 }

	export interface Body_4 {
		action: Body_4Action;
		elapsed_time: number;
		pid: string;
		resource_type: Body_4Resource_type;
		version_pid: string;
	}

	export enum Body_4Action { started = 0, ended = 1, paused = 2, heartbeat = 3 }

	export enum Body_4Resource_type { episode = 0, clip = 1 }

	export interface BrandSummary {
		available_versions?: Array<AvailableVersions>;
		images: Array<Image>;
		latest_available_episodes: Array<EpisodeSummary>;
		network_summary: NetworkSummary;
		pid: string;
		short_synopsis: string;
		titles: ProgrammeTitles;
		total_available_episodes: number;
		type: BrandSummaryType;
	}

	export enum BrandSummaryType { brand_summary = 0 }

	export interface Broadcast {
		duration: number;
		end: string;
		is_audio_described: boolean;
		is_blanked: boolean;
		is_critical: boolean;
		is_live: boolean;
		is_repeat: boolean;
		is_webcast: boolean;
		pid: string;
		programme?: ProgrammeSummary;
		service_id: string;
		start: string;
		type: string;
		version_pid: string;
	}

	export interface BroadcastsResponse {
		$schema: string;
		limit: number;
		offset: number;
		results: Array<Broadcast>;
		total: number;
	}

	export interface CategoriesResponse {
		$schema: string;
		limit: number;
		offset: number;
		results: Array<Category>;
		total: number;
	}

	export interface Category {
		category_type: string;
		child_categories: Array<ChildCategory>;
		depth: number;
		id: string;
		pip_id: string;
		title: string;
		type: string;
		url_key: string;
	}

	export interface CategoryError {
		href: string;
		id: string;
		message: string;
		replied_at: string;
		status: number;
	}

	export interface CategoryErrorResponse {
		$schema: string;
		errors: Array<CategoryError>;
	}

	export interface CategorySummary {
		category_type: string;
		id: string;
		key: string;
		title: string;
		type: string;
	}

	export interface ChildCategory {
		category_type: string;
		child_categories: Array<ChildCategory>;
		depth: number;
		id: string;
		pip_id: string;
		title: string;
		type: string;
		url_key: string;
	}

	export interface ClipSummary {
		ancestors: Array<AncestorSummary>;
		available_versions: Array<AvailableVersions>;
		images: Array<Image>;
		media_type: string;
		network_summary: NetworkSummary;
		pid: string;
		release_date: string;
		short_synopsis: string;
		titles: ProgrammeTitles;
		type: ClipSummaryType;
	}

	export enum ClipSummaryType { clip_summary = 0 }

	export interface Contact {
		handle: string;
		name: string;
		service: string;
		url: string;
	}

	export interface DateRange {
		end: string;
		start: string;
	}

	export interface DisplayModule {
		description?: string;
		title?: string;
		type?: string;
		uri?: string;
	}

	export interface EpisodeSummary {
		ancestors: Array<AncestorSummary>;
		available_versions: Array<AvailableVersions>;
		images: Array<Image>;
		media_type: string;
		network_summary: NetworkSummary;
		pid: string;
		release_date: string;
		short_synopsis: string;
		titles: ProgrammeTitles;
		type: EpisodeSummaryType;
	}

	export enum EpisodeSummaryType { episode_summary = 0 }

	export interface Error {
		href: string;
		id: string;
		message: string;
		replied_at: string;
	}

	export interface ErrorResponse {
		$schema: string;
		errors: Array<Error>;
	}

	export interface ExperienceResponse {
		$schema: string;
		data: Array<DisplayModule>;
	}

	export interface ExternalPartner {
		type: string;
		value: string;
	}

	export interface Image {
		id: string;
		image_type: string;
		template_url: string;
		type: string;
	}

	export interface MetaData {
		miscellaneous: Miscellaneous;
		origin: Origin;
		programme_type: string;
		type: string;
	}

	export interface Miscellaneous {
		title: string;
	}

	export interface MusicExportError {
		message: string;
		replied_at: number;
		status: number;
	}

	export interface MusicExportErrorResponse {
		errors: Array<MusicExportError>;
		schema: string;
	}

	export interface MusicExportJob {
		created_at: string;
		id: string;
		job_id: string;
		status: string;
		vendor: string;
	}

	export interface MusicExportPreferences {
		access_expires_at: string;
		access_token: string;
		add_plus_export: boolean;
		authorization_code: string;
		last_export: string;
		legacy_state: string;
		partner_id: string;
		refresh_token: string;
		terms: boolean;
		vendor: string;
	}

	export interface MusicExportPreferencesResponse {
		method: string;
		replied_at: string;
		results: Array<MusicExportPreferences>;
		schema: string;
		total: number;
	}

	export interface MusicExportSuccess {
		method: string;
		replied_at: string;
		schema: string;
	}

	export interface MusicPopularityArtist {
		gid: string;
		id: string;
		imagePid: string;
		name: string;
		score: number;
		sortName: string;
	}

	export interface MusicPopularityArtists {
		limit?: number;
		method: string;
		offset?: number;
		repliedAt: string;
		results: Array<MusicPopularityArtist>;
		schema: string;
		total: number;
	}

	export interface MusicPopularityError {
		errors?: Array<string>;
		schema?: string;
	}

	export interface MusicPopularityPlaylist {
		categories: Array<string>;
		commentsEnabled: boolean;
		description: string;
		externalPartners: Array<ExternalPartner>;
		genre: string;
		id: string;
		imagePid: string;
		imageUrl: string;
		kind: string;
		mood: string;
		oneOff: boolean;
		playlistPlaybackType: string;
		score: number;
		serviceId: string;
		title: string;
		updatedAt: string;
		visibility: string;
		wideImagePid: string;
		wideImageUrl: string;
	}

	export interface MusicPopularityPlaylists {
		limit?: number;
		method: string;
		offset?: number;
		repliedAt: string;
		results: Array<MusicPopularityPlaylist>;
		schema: string;
		total: number;
	}

	export interface MusicPopularityTrack {
		album?: string;
		artistGid?: string;
		artistName?: string;
		artists?: Array<MusicTrackArtist>;
		baseTitle?: string;
		classical?: boolean;
		id: string;
		mergedIds?: Array<string>;
		preferredMultiplayRecordAudio?: MusicRecordAudio;
		preferredRecordAudio?: MusicRecordAudio;
		radioEdit?: boolean;
		recordAudio?: Array<MusicRecordAudio>;
		recordImageHref?: string;
		recordImagePid?: string;
		score: number;
		title?: string;
		type?: string;
	}

	export interface MusicPopularityTracks {
		limit?: number;
		method: string;
		offset?: number;
		repliedAt: string;
		results: Array<MusicPopularityTrack>;
		schema: string;
		total: number;
	}

	export interface MusicRecordAudio {
		audioType: string;
		duration: number;
		identifier: string;
		resourceType: string;
	}

	export interface MusicTrackArtist {
		gid: string;
		imagePid: string;
		name: string;
		role: string;
		sortName: string;
	}

	export interface Network {
		active: boolean;
		contacts: Array<Contact>;
		date_ranges: Array<DateRange>;
		group: string;
		id: string;
		international: boolean;
		key: string;
		preset: boolean;
		promoted_category_summaries?: Array<CategorySummary>;
		services: Array<Service>;
		short_title: string;
		sort: number;
		title: string;
		type: string;
	}

	export interface NetworkSummary {
		active: boolean;
		group: string;
		id: string;
		key: string;
		titles: NetworkTitles;
		type: string;
	}

	export interface NetworkTitles {
		long_title: string;
		short_title: string;
		type: string;
	}

	export interface NetworksResponse {
		$schema: string;
		limit: number;
		offset: number;
		results: Array<Network>;
		total: number;
	}

	export interface Origin {
		type: string;
	}

	export interface PersonalisedCategories {
		created: string;
		type: string;
	}

	export interface PersonalisedCategoriesResponse {
		$schema: string;
		limit: number;
		offset: number;
		total: number;
	}

	export interface PersonalisedMusicActivity {
		action: string;
		activity: string;
		added_at: string;
		data: Array<PersonalisedMusicData>;
		domain: string;
		id: string;
		meta_data: PersonalisedMusicMetaData;
		type: string;
		urn: string;
	}

	export interface PersonalisedMusicArtist {
		id?: string;
		images?: Array<PersonalisedMusicImage>;
		name?: string;
		role?: string;
	}

	export interface PersonalisedMusicBatchRequest {
		action: string;
		added_at?: string;
		context?: string;
		domain: string;
		id: string;
		meta_data?: PersonalisedMusicMetaData;
		type: string;
	}

	export interface PersonalisedMusicClip {
		contributors?: Array<string>;
		endDate?: string;
		entityType?: string;
		imageUrl?: string;
		masterbrandMid?: string;
		mediaType?: string;
		parentProgramme?: PersonalisedMusicClipParentProgramme;
		pid?: string;
		startDate?: string;
		synopsis?: string;
		title?: string;
		version?: PersonalisedMusicVersion;
	}

	export interface PersonalisedMusicClipParentProgramme {
		entityType?: string;
		pid?: string;
		title?: string;
	}

	export interface PersonalisedMusicData {
		artist?: PersonalisedMusicArtist;
		clip?: PersonalisedMusicClip;
		genre?: PersonalisedMusicGenre;
		playlist?: PersonalisedMusicPlaylist;
		service?: PersonalisedMusicService;
		track?: PersonalisedMusicTrack;
	}

	export interface PersonalisedMusicError {
		message: string;
		replied_at: number;
		status: number;
	}

	export interface PersonalisedMusicErrorResponse {
		errors: Array<PersonalisedMusicError>;
		schema: string;
	}

	export interface PersonalisedMusicGenre {
		id?: string;
		key?: string;
		title?: string;
		type?: string;
	}

	export interface PersonalisedMusicImage {
		format?: string;
		id?: string;
		type?: string;
	}

	export interface PersonalisedMusicMetaData {
		key: string;
	}

	export interface PersonalisedMusicPlaylist {
		description?: string;
		images?: Array<PersonalisedMusicImage>;
		playback_type?: string;
		service_id?: string;
		title?: string;
		tracks?: PersonalisedMusicTrack;
		type?: string;
		updated_at?: string;
		version?: PersonalisedMusicPlaylistVersion;
	}

	export interface PersonalisedMusicPlaylistVersion {
		duration?: string;
		expires_at?: string;
		id?: string;
		starts_at?: string;
		warnings: Array<string>;
	}

	export interface PersonalisedMusicRequest {
		action: string;
		added_at?: string;
		context?: string;
		meta_data?: PersonalisedMusicMetaData;
	}

	export interface PersonalisedMusicResponse {
		limit: number;
		method: string;
		offset: number;
		replied_at: string;
		results: Array<PersonalisedMusicActivity>;
		schema: string;
		total: number;
	}

	export interface PersonalisedMusicService {
		id?: string;
		key?: string;
		title?: string;
		type?: string;
	}

	export interface PersonalisedMusicSuccess {
		method: string;
		replied_at: string;
		schema: string;
	}

	export interface PersonalisedMusicTrack {
		contributions: Array<PersonalisedMusicTrackContribution>;
		id: string;
		images: Array<PersonalisedMusicTrackImage>;
		media: Array<PersonalisedMusicTrackMedia>;
		title: string;
		type: string;
		version: PersonalisedMusicVersion;
	}

	export interface PersonalisedMusicTrackContribution {
		id: string;
		images: Array<PersonalisedMusicTrackImage>;
		name: string;
		role: string;
	}

	export interface PersonalisedMusicTrackImage {
		format: string;
		id: string;
		type: string;
	}

	export interface PersonalisedMusicTrackMedia {
		duration: number;
		format: string;
		id: string;
		scope: string;
		source: string;
		type: string;
	}

	export interface PersonalisedMusicVersion {
		classical?: boolean;
		duration?: string;
		radio?: boolean;
		vpid?: string;
	}

	export interface PersonalisedNetworks {
		created: string;
		type: string;
	}

	export interface PersonalisedNetworksResponse {
		$schema: string;
		limit: number;
		offset: number;
		results: Array<PersonalisedNetworks>;
		total: number;
	}

	export interface PersonalisedRadioActivity {
		action: string;
		activity: string;
		added_at: string;
		data: ProgrammeSummary;
		domain: string;
		id: string;
		metadata: MetaData;
		type: string;
		uas_type: string;
		urn: string;
	}

	export interface PersonalisedRadioBatchRequest {
		action: string;
		added_at?: string;
		context?: string;
		id?: string;
		metadata?: PersonalisedRadioMetaData;
		type?: string;
	}

	export interface PersonalisedRadioErrorResponse {
		$schema: string;
		errors: Array<PersonalisedRadioErrorResponse_errors>;
	}

	export interface PersonalisedRadioErrorResponse_errors {
		code: string;
		detail: string;
		href: string;
		id: string;
		status: number;
		timestamp: number;
		title: string;
	}

	export interface PersonalisedRadioMetaData {
		key: string;
	}

	export interface PersonalisedRadioRequest {
		action: string;
		added_at?: string;
		context?: string;
		metadata?: PersonalisedRadioMetaData;
	}

	export interface PersonalisedRadioResponse {
		$schema: string;
		limit: number;
		method: string;
		offset: number;
		replied_at: string;
		results: Array<PersonalisedRadioActivity>;
		total: number;
	}

	export interface PersonalisedRadioSuccessResponse {
		$schema: string;
		method: string;
		replied_at: string;
	}

	export interface PlayableItem {
		description?: string;
		image_url?: string;
		pid?: string;
		title?: string;
		type?: string;
		version_pid?: string;
	}

	export interface PlayspaceContainer {
		id?: string;
		members?: Array<PlayableItem>;
		title?: string;
		type?: string;
	}

	export interface Podcast {
		category_summaries: Array<CategorySummary>;
		days_available: number;
		entity_type: string;
		first_published_date: string;
		frequency: string;
		images: Array<Image>;
		latest_available_episodes: Array<PodcastEpisodeSummary>;
		network_summary: NetworkSummary;
		pid: string;
		rss_url: string;
		synopses: PodcastSynopses;
		territory: string;
		titles: ProgrammeTitles;
		total_available_episodes: number;
		type: string;
		updated_at: string;
	}

	export interface PodcastEpisodeSummary {
		asset_url: string;
		available_versions: Array<AvailableVersions>;
		images: Array<Image>;
		media_type: string;
		network_summary: NetworkSummary;
		pid: string;
		release_date: string;
		short_synopsis: string;
		titles: ProgrammeTitles;
		type: string;
	}

	export interface PodcastEpisodesResponse {
		$schema: string;
		limit: number;
		offset: number;
		results: Array<PodcastEpisodeSummary>;
		total: number;
	}

	export interface PodcastError {
		href?: string;
		id?: string;
		message?: string;
		replied_at?: string;
		status?: number;
	}

	export interface PodcastErrorResponse {
		$schema?: string;
		errors?: Array<PodcastError>;
	}

	export interface PodcastSynopses {
		long: string;
		medium: string;
		short: string;
		type: string;
	}

	export interface PodcastsFeatured {
		featured_podcasts?: Array<Podcast>;
		title?: string;
		type?: string;
	}

	export interface PodcastsFeaturedResponse {
		$schema: string;
		limit: number;
		offset: number;
		results: Array<PodcastsFeatured>;
		total: number;
	}

	export interface PodcastsResponse {
		$schema: string;
		limit: number;
		offset: number;
		results: Array<Podcast>;
		total: number;
	}

	export interface PopularError {
		href: string;
		id: string;
		message: string;
		replied_at: string;
		status: number;
	}

	export interface PopularErrorResponse {
		$schema: string;
		errors: Array<PopularError>;
	}

	export interface PopularItemSummary {
		data: ProgrammeSummary;
		id: string;
		score: number;
		type: string;
	}

	export interface PopularResponse {
		$schema: string;
		limit: number;
		offset: number;
		results: Array<PopularItemSummary>;
		total: number;
	}

	export interface Programme {
		images: Array<Image>;
		latest_available_episodes?: Array<EpisodeSummary>;
		network_summary: NetworkSummary;
		pid: string;
		short_synopsis: string;
		titles: ProgrammeTitles;
		total_available_episodes?: number;
		type: ProgrammeType;
	}

	export enum ProgrammeType { brand_summary = 0, series_summary = 1, episode_summary = 2, clip_summary = 3 }

	export interface ProgrammeSummary {
		pid: string;
		type: ProgrammeSummaryType;
	}

	export enum ProgrammeSummaryType { brand_summary = 0, series_summary = 1, episode_summary = 2, clip_summary = 3 }

	export interface ProgrammeTitles {
		display_title?: string;
		entity_title?: string;
		primary_title?: string;
		secondary_title?: string;
		type: string;
	}

	export interface ProgrammesResponse {
		$schema: string;
		limit: number;
		offset: number;
		results: Array<ProgrammeSummary>;
		total: number;
	}

	export interface RadioError {
		code: string;
		detail: string;
		href: string;
		id: string;
		status: number;
		timestamp: number;
		title: string;
	}

	export interface RadioErrorResponse {
		$schema: string;
		errors: Array<RadioError>;
	}

	export interface SeriesSummary {
		ancestors: Array<AncestorSummary>;
		images: Array<Image>;
		latest_available_episodes: Array<EpisodeSummary>;
		network_summary: NetworkSummary;
		pid: string;
		short_synopsis: string;
		titles: ProgrammeTitles;
		total_available_episodes: number;
		type: SeriesSummaryType;
	}

	export enum SeriesSummaryType { series_summary = 0 }

	export interface Service {
		active: boolean;
		coverage: string;
		date_ranges: Array<DateRange>;
		default: boolean;
		default_language: string;
		id: string;
		region: string;
		short_title: string;
		title: string;
		type: string;
	}

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Broadcasts
		 * All broadcasts
		 * Get broadcasts
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {string} service_id Filter by Service ID. E.g. bbc_radio_fourfm
		 * @param {string} date Filter by date. E.g. 2016-06-17
		 * @param {string} sort Sort by provided query. E.g. 'start_at' sorts in ascending order, and '-start_at' sorts in descending order
		 * @return {BroadcastsResponse} OK
		 */
		BroadcastsGetByOffsetAndLimitAndService_idAndDateAndSort(offset: number, limit: number, service_id: string, date: string, sort: string, headersHandler?: () => {[header: string]: string}): Promise<BroadcastsResponse> {
			return this.http.get('broadcasts?offset=' + offset + '&limit=' + limit + '&service_id=' + (service_id == null ? '' : encodeURIComponent(service_id)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Latest Broadcasts
		 * Broadcasts for the current day
		 * Get broadcasts/latest
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {string} service_id Filter by Service ID. E.g. bbc_radio_fourfm
		 * @param {string} on_air Filter what is on air. E.g. 'now' returns current programme being broadcasted.
		 * @param {string} next Filter what will be on air next in minutes. E.g. '240' returns programmes broadcasted in the next four hurs
		 * @param {string} previous Filter what was on air previously in minutes. E.g. '240' returns programmes broadcasted in the previous four hurs
		 * @param {string} sort Sort by provided query. E.g. 'start_at' sorts in ascending order, and '-start_at' sorts in descending order
		 * @return {BroadcastsResponse} OK
		 */
		BroadcastsGetByOffsetAndLimitAndService_idAndOn_airAndNextAndPreviousAndSort(offset: number, limit: number, service_id: string, on_air: string, next: string, previous: string, sort: string, headersHandler?: () => {[header: string]: string}): Promise<BroadcastsResponse> {
			return this.http.get('broadcasts/latest?offset=' + offset + '&limit=' + limit + '&service_id=' + (service_id == null ? '' : encodeURIComponent(service_id)) + '&on_air=' + (on_air == null ? '' : encodeURIComponent(on_air)) + '&next=' + (next == null ? '' : encodeURIComponent(next)) + '&previous=' + (previous == null ? '' : encodeURIComponent(previous)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Broadcasts by PID
		 * Find broadcast by PID
		 * Get broadcasts/{pid}
		 * @param {string} pid pid
		 * @return {BroadcastsResponse} OK
		 */
		GetBroadcastByPid(pid: string, headersHandler?: () => {[header: string]: string}): Promise<BroadcastsResponse> {
			return this.http.get('broadcasts/' + (pid == null ? '' : encodeURIComponent(pid)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * List of categories
		 * Retrieve Categories
		 * Get categories
		 * @param {string} kind Filter by provided query. E.g. 'promoted' returns promoted categories
		 * @return {CategoriesResponse} OK
		 */
		CategoriesGetByKind(kind: string, headersHandler?: () => {[header: string]: string}): Promise<CategoriesResponse> {
			return this.http.get('categories?kind=' + (kind == null ? '' : encodeURIComponent(kind)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Category by ID
		 * Retrieve Categories by ID
		 * Get categories/{id}
		 * @param {string} id Retrieve information about the category. E.g. 'sport-football-europeanchampionship'
		 * @return {CategoriesResponse} OK
		 */
		CategoriesGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<CategoriesResponse> {
			return this.http.get('categories/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Collection Members
		 * Episodes and Clips from Collection
		 * Get collections/{pid}/members
		 * @param {string} pid pid
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {ProgrammesResponse} OK
		 */
		GetCollectionMembers(pid: string, offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<ProgrammesResponse> {
			return this.http.get('collections/' + (pid == null ? '' : encodeURIComponent(pid)) + '/members&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Homepage Experience
		 * Homepage Experience
		 * Get experience/homepage
		 * @return {ExperienceResponse} OK
		 */
		GetExperienceHomepage(headersHandler?: () => {[header: string]: string}): Promise<ExperienceResponse> {
			return this.http.get('experience/homepage', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Popular Artists
		 * List of Most Popular artists from BBC Music.
		 * Get music/popular/artists
		 * @param {string} since ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
		 * @param {string} until ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
		 * @param {boolean} decomposed In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {MusicPopularityArtists} OK
		 */
		GetMusicPopularArtists(since: string, until: string, decomposed: boolean, offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<MusicPopularityArtists> {
			return this.http.get('music/popular/artists?since=' + (since == null ? '' : encodeURIComponent(since)) + '&until=' + (until == null ? '' : encodeURIComponent(until)) + '&decomposed=' + decomposed + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Single Artist Popularity
		 * Popularity Artist By Id
		 * Get music/popular/artists/{id}
		 * @param {string} since ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
		 * @param {string} until ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
		 * @param {boolean} decomposed In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
		 * @param {string} id MusicBrainz Id - Used to get single resource score
		 * @return {MusicPopularityArtists} OK
		 */
		GetMusicPopularArtistById(since: string, until: string, decomposed: boolean, id: string, headersHandler?: () => {[header: string]: string}): Promise<MusicPopularityArtists> {
			return this.http.get('music/popular/artists/' + (id == null ? '' : encodeURIComponent(id)) + '?since=' + (since == null ? '' : encodeURIComponent(since)) + '&until=' + (until == null ? '' : encodeURIComponent(until)) + '&decomposed=' + decomposed, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Popular Playlists
		 * List of Most Popular playlists from BBC Music.
		 * Get music/popular/playlists
		 * @param {string} since ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
		 * @param {string} until ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
		 * @param {boolean} decomposed In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {MusicPopularityPlaylists} OK
		 */
		GetMusicPopularPlaylists(since: string, until: string, decomposed: boolean, offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<MusicPopularityPlaylists> {
			return this.http.get('music/popular/playlists?since=' + (since == null ? '' : encodeURIComponent(since)) + '&until=' + (until == null ? '' : encodeURIComponent(until)) + '&decomposed=' + decomposed + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Single Playlist Popularity
		 * Popular playlist by Id
		 * Get music/popular/playlists/{id}
		 * @param {string} since ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
		 * @param {string} until ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
		 * @param {boolean} decomposed In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
		 * @param {string} id BBC Music Playlist Id - Used to get single resource score
		 * @return {MusicPopularityPlaylists} OK
		 */
		GetMusicPopularPlaylistById(since: string, until: string, decomposed: boolean, id: string, headersHandler?: () => {[header: string]: string}): Promise<MusicPopularityPlaylists> {
			return this.http.get('music/popular/playlists/' + (id == null ? '' : encodeURIComponent(id)) + '?since=' + (since == null ? '' : encodeURIComponent(since)) + '&until=' + (until == null ? '' : encodeURIComponent(until)) + '&decomposed=' + decomposed, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Popular Tracks
		 * List of popular tracks for BBC Music. Filter by time, network, artist, playlist or programme.
		 * Get music/popular/tracks
		 * @param {string} since ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
		 * @param {string} until ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
		 * @param {string} network Return items with given Network ID
		 * @param {string} programme Items with given Programme Pid
		 * @param {string} artist MusicBrainz artist ID
		 * @param {boolean} decomposed In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {MusicPopularityTracks} OK
		 */
		GetMusicPopularTracks(since: string, until: string, network: string, programme: string, artist: string, decomposed: boolean, offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<MusicPopularityTracks> {
			return this.http.get('music/popular/tracks?since=' + (since == null ? '' : encodeURIComponent(since)) + '&until=' + (until == null ? '' : encodeURIComponent(until)) + '&network=' + (network == null ? '' : encodeURIComponent(network)) + '&programme=' + (programme == null ? '' : encodeURIComponent(programme)) + '&artist=' + (artist == null ? '' : encodeURIComponent(artist)) + '&decomposed=' + decomposed + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Single Track Popularity
		 * Popular Track for BBC Music
		 * Get music/popular/tracks/{id}
		 * @param {string} since ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
		 * @param {string} until ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
		 * @param {string} network Return items with given Network ID
		 * @param {string} programme Items with given Programme Pid
		 * @param {string} artist MusicBrainz artist ID
		 * @param {boolean} decomposed In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
		 * @param {string} id BBC Music Track Id - Used to get single resource score
		 * @return {MusicPopularityTracks} OK
		 */
		GetMusicPopularTrackById(since: string, until: string, network: string, programme: string, artist: string, decomposed: boolean, id: string, headersHandler?: () => {[header: string]: string}): Promise<MusicPopularityTracks> {
			return this.http.get('music/popular/tracks/' + (id == null ? '' : encodeURIComponent(id)) + '?since=' + (since == null ? '' : encodeURIComponent(since)) + '&until=' + (until == null ? '' : encodeURIComponent(until)) + '&network=' + (network == null ? '' : encodeURIComponent(network)) + '&programme=' + (programme == null ? '' : encodeURIComponent(programme)) + '&artist=' + (artist == null ? '' : encodeURIComponent(artist)) + '&decomposed=' + decomposed, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Unfollow category
		 * Delete my/categories/follows
		 * @return {void} 
		 */
		Personalised_CategoriesDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('my/categories/follows', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List of followed categories
		 * List of followed categories for a given user.
		 * Get my/categories/follows
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PersonalisedCategoriesResponse} OK
		 */
		Personalised_CategoriesGetByOffsetAndLimit(offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedCategoriesResponse> {
			return this.http.get('my/categories/follows?offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Follow category
		 * Post my/categories/follows
		 * @return {void} 
		 */
		Personalised_CategoriesPost(requestBody: Body, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('my/categories/follows', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Music Exports
		 * Returns status of all previous third party export actions for a given BBC Music user.
		 * Get my/music/export
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {MusicExportJob} OK
		 */
		GetMusicExport(offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<MusicExportJob> {
			return this.http.get('my/music/export?offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Music Export Jobs
		 * All items associated to a users export request
		 * Get my/music/exports/jobs
		 * @param {boolean} over16 Boolean age check
		 * @param {string} vendor Specify Vendor Jobs
		 * @return {MusicExportJob} OK
		 */
		GetMusicExportJobs(over16: boolean, vendor: string, headersHandler?: () => {[header: string]: string}): Promise<MusicExportJob> {
			return this.http.get('my/music/exports/jobs?over16=' + over16 + '&vendor=' + (vendor == null ? '' : encodeURIComponent(vendor)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Music Export Jobs
		 * Create Export Job for a user
		 * Post my/music/exports/jobs
		 * @param {boolean} over16 Boolean age check
		 * @param {string} vendor Specify Vendor Jobs
		 * @return {MusicExportSuccess} OK
		 */
		PostMusicExportJob(over16: boolean, vendor: string, requestBody: Array<MusicExportJob>, headersHandler?: () => {[header: string]: string}): Promise<MusicExportSuccess> {
			return this.http.post('my/music/exports/jobs?over16=' + over16 + '&vendor=' + (vendor == null ? '' : encodeURIComponent(vendor)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Music Export Tracks
		 * Retrieves vendor and status specific tracks
		 * Get my/music/exports/tracks
		 * @param {boolean} over16 Boolean age check
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {string} vendor Specify Vendor Tracks
		 * @param {string} status Specify Track status
		 * @return {MusicExportJob} OK
		 */
		GetMusicExportTracks(over16: boolean, offset: number, limit: number, vendor: string, status: string, headersHandler?: () => {[header: string]: string}): Promise<MusicExportJob> {
			return this.http.get('my/music/exports/tracks?over16=' + over16 + '&offset=' + offset + '&limit=' + limit + '&vendor=' + (vendor == null ? '' : encodeURIComponent(vendor)) + '&status=' + (status == null ? '' : encodeURIComponent(status)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Favourite Tracks or Clips
		 * List of favourited tracks and clips for a given user for BBC Music.
		 * Get my/music/favourites
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {string} action Filters activities based on the type of action
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @return {PersonalisedMusicResponse} OK
		 */
		GetPersonalisedMusicFavourites(offset: number, limit: number, action: string, music_data: boolean, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicResponse> {
			return this.http.get('my/music/favourites?offset=' + offset + '&limit=' + limit + '&action=' + (action == null ? '' : encodeURIComponent(action)) + '&music_data=' + music_data, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Favourite Tracks or Clips
		 * Add multiple tracks and/or clips to a BBC Music user's favourites.
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/music/favourites
		 * @param {Array<PersonalisedMusicBatchRequest>} requestBody Action favourited or unfavourited
		 * @return {PersonalisedMusicResponse} OK
		 */
		PostPersonalisedMusicFavouritesBatch(requestBody: Array<PersonalisedMusicBatchRequest>, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicResponse> {
			return this.http.post('my/music/favourites', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Favourite Tracks or Clips
		 * Update tracks or clips from a BBC Music user favourites.
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/music/favourites
		 * @param {Array<PersonalisedMusicBatchRequest>} requestBody Action favourited or unfavourited
		 * @return {PersonalisedMusicSuccess} OK
		 */
		PutPersonalisedMusicFavouritesBatch(requestBody: Array<PersonalisedMusicBatchRequest>, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicSuccess> {
			return this.http.put('my/music/favourites', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Favourite Tracks or Clips by Type
		 * List of favourited tracks or clips for a given user for BBC Music.
		 * Get my/music/favourites/{type}
		 * @param {string} type Supported Music favourite types: Clips or Tracks
		 * @param {string} action Filters activities based on the type of action
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PersonalisedMusicResponse} OK
		 */
		GetPersonalisedMusicFavouritesByType(type: string, action: string, offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicResponse> {
			return this.http.get('my/music/favourites/' + (type == null ? '' : encodeURIComponent(type)) + '&action=' + (action == null ? '' : encodeURIComponent(action)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Favourite Track or Clip
		 * Delete track or clip from a BBC Music user favourites.
		 * Delete my/music/favourites/{type}/{id}
		 * @param {string} type Supported Music favourite types: Clips or Tracks
		 * @param {string} id Clip PID or Track ID
		 * @return {PersonalisedMusicSuccess} OK
		 */
		DeletePersonalisedMusicFavouritesByTypeById(type: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicSuccess> {
			return this.http.delete('my/music/favourites/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Favourite Track or Clip
		 * Check to see if a single track or clip entity is in a users favourites - determines UX of add button.
		 * Get my/music/favourites/{type}/{id}
		 * @param {string} type Supported Music favourite types: Clips or Tracks
		 * @param {string} id Clip PID or Track ID
		 * @return {PersonalisedMusicResponse} OK
		 */
		GetPersonalisedMusicFavouritesByTypeById(type: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicResponse> {
			return this.http.get('my/music/favourites/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Favourite Track or Clip
		 * Add track or clip to a BBC Music user favourites.
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/music/favourites/{type}/{id}
		 * @param {string} type Supported Music favourite types: Clips or Tracks
		 * @param {string} id Clip PID or Track ID
		 * @param {PersonalisedMusicRequest} requestBody Action favourited or unfavourited
		 * @return {PersonalisedMusicResponse} OK
		 */
		PostPersonalisedMusicFavouritesByTypeById(type: string, id: string, requestBody: PersonalisedMusicRequest, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicResponse> {
			return this.http.post('my/music/favourites/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Favourite Track or Clip
		 * Update tracks or clips from a BBC Music user favourites.
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/music/favourites/{type}/{id}
		 * @param {string} type Supported Music favourite types: Clips or Tracks
		 * @param {string} id Clip PID or Track ID
		 * @param {PersonalisedMusicRequest} requestBody Action favourited or unfavourited
		 * @return {PersonalisedMusicSuccess} OK
		 */
		PutPersonalisedMusicFavouritesByTypeById(type: string, id: string, requestBody: PersonalisedMusicRequest, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicSuccess> {
			return this.http.put('my/music/favourites/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Followed Networks, Categories, Artists, Playlists and Genres
		 * List of followed networks, categories, artists, playlists and genres for a given user for BBC Music.
		 * Get my/music/follows
		 * @param {string} action Filters activities based on the type of action
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {string} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PersonalisedMusicResponse} OK
		 */
		GetPersonalisedMusicFollows(action: string, music_data: boolean, music_context: string, music_within_uk: boolean, offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicResponse> {
			return this.http.get('my/music/follows?action=' + (action == null ? '' : encodeURIComponent(action)) + '&music_data=' + music_data + '&music_context=' + (music_context == null ? '' : encodeURIComponent(music_context)) + '&music_within_uk=' + music_within_uk + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Followed Networks, Categories, Artists, Playlists and Genres
		 * Add networks, categories, artists, playlists, networks, genres or services in a users follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/music/follows
		 * @param {string} action Filters activities based on the type of action
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {string} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @param {Array<PersonalisedMusicBatchRequest>} requestBody Action followed or unfollowed
		 * @return {PersonalisedMusicSuccess} OK
		 */
		PostPersonalisedMusicFollowsBatch(action: string, music_data: boolean, music_context: string, music_within_uk: boolean, requestBody: Array<PersonalisedMusicBatchRequest>, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicSuccess> {
			return this.http.post('my/music/follows?action=' + (action == null ? '' : encodeURIComponent(action)) + '&music_data=' + music_data + '&music_context=' + (music_context == null ? '' : encodeURIComponent(music_context)) + '&music_within_uk=' + music_within_uk, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Followed Networks, Categories, Artists, Playlists and Genres
		 * Update networks, categories, artists, playlists, networks, genres or services in a users follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/music/follows
		 * @param {string} action Filters activities based on the type of action
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {string} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @param {Array<PersonalisedMusicBatchRequest>} requestBody Action followed or unfollowed
		 * @return {PersonalisedMusicSuccess} OK
		 */
		PutPersonalisedMusicFollowsBatch(action: string, music_data: boolean, music_context: string, music_within_uk: boolean, requestBody: Array<PersonalisedMusicBatchRequest>, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicSuccess> {
			return this.http.put('my/music/follows?action=' + (action == null ? '' : encodeURIComponent(action)) + '&music_data=' + music_data + '&music_context=' + (music_context == null ? '' : encodeURIComponent(music_context)) + '&music_within_uk=' + music_within_uk, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Followed Networks, Categories, Artists, Playlists and Genres by Type
		 * List of followed networks, categories, artists, playlists, networks, genres, categories or services for a given BBC Music user.
		 * Get my/music/follows/{type}
		 * @param {string} type Supported Music follows types: Playlists, Services, Genres & Artists
		 * @param {string} action Filters activities based on the type of action
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {string} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PersonalisedMusicResponse} OK
		 */
		GetPersonalisedMusicFollowsByType(type: string, action: string, music_data: boolean, music_context: string, music_within_uk: boolean, offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicResponse> {
			return this.http.get('my/music/follows/' + (type == null ? '' : encodeURIComponent(type)) + '&action=' + (action == null ? '' : encodeURIComponent(action)) + '&music_data=' + music_data + '&music_context=' + (music_context == null ? '' : encodeURIComponent(music_context)) + '&music_within_uk=' + music_within_uk + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Followed Network, Category, Artist, Playlist and Genre
		 * Remove a single network, category, artist, playlist, network, genre or service entity is in a users follows
		 * Delete my/music/follows/{type}/{id}
		 * @param {string} type Supported Music follows types: Playlists, Services, Genres & Artists
		 * @param {string} id Playlists, Services, Networks, Genres, Categories or Artists ID
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {string} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @return {PersonalisedMusicSuccess} OK
		 */
		DeletePersonalisedMusicFollowsByTypeById(type: string, id: string, music_data: boolean, music_context: string, music_within_uk: boolean, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicSuccess> {
			return this.http.delete('my/music/follows/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (id == null ? '' : encodeURIComponent(id)) + '&music_data=' + music_data + '&music_context=' + (music_context == null ? '' : encodeURIComponent(music_context)) + '&music_within_uk=' + music_within_uk, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Followed Network, Category, Artist, Playlist and Genre
		 * Check to see if a single network, category, artist, playlist, network, genre or service entity is in a users follows - determines UX of add button.
		 * Get my/music/follows/{type}/{id}
		 * @param {string} type Supported Music follows types: Playlists, Services, Genres & Artists
		 * @param {string} id Playlists, Services, Networks, Genres, Categories or Artists ID
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {string} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @return {PersonalisedMusicResponse} OK
		 */
		GetPersonalisedMusicFollowsByTypeById(type: string, id: string, music_data: boolean, music_context: string, music_within_uk: boolean, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicResponse> {
			return this.http.get('my/music/follows/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (id == null ? '' : encodeURIComponent(id)) + '&music_data=' + music_data + '&music_context=' + (music_context == null ? '' : encodeURIComponent(music_context)) + '&music_within_uk=' + music_within_uk, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Followed Network, Category, Artist, Playlist and Genre
		 * Add a single network, category, artist, playlist, network, genre or service entity is in a users follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/music/follows/{type}/{id}
		 * @param {string} type Supported Music follows types: Playlists, Services, Genres & Artists
		 * @param {string} id Playlists, Services, Networks, Genres, Categories or Artists ID
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {string} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @param {PersonalisedMusicRequest} requestBody Action followed or unfollowed
		 * @return {PersonalisedMusicSuccess} OK
		 */
		PostPersonalisedMusicFollowsByTypeById(type: string, id: string, music_data: boolean, music_context: string, music_within_uk: boolean, requestBody: PersonalisedMusicRequest, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicSuccess> {
			return this.http.post('my/music/follows/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (id == null ? '' : encodeURIComponent(id)) + '&music_data=' + music_data + '&music_context=' + (music_context == null ? '' : encodeURIComponent(music_context)) + '&music_within_uk=' + music_within_uk, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Followed Network, Category, Artist, Playlist and Genre
		 * Update a single network, category, artist, playlist, network, genre or service entity is in a users follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/music/follows/{type}/{id}
		 * @param {string} type Supported Music follows types: Playlists, Services, Genres & Artists
		 * @param {string} id Playlists, Services, Networks, Genres, Categories or Artists ID
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {string} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @param {PersonalisedMusicRequest} requestBody Action followed or unfollowed
		 * @return {PersonalisedMusicSuccess} OK
		 */
		PutPersonalisedMusicFollowsByTypeById(type: string, id: string, music_data: boolean, music_context: string, music_within_uk: boolean, requestBody: PersonalisedMusicRequest, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedMusicSuccess> {
			return this.http.put('my/music/follows/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (id == null ? '' : encodeURIComponent(id)) + '&music_data=' + music_data + '&music_context=' + (music_context == null ? '' : encodeURIComponent(music_context)) + '&music_within_uk=' + music_within_uk, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Music Export Preferences
		 * Remove export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
		 * Delete my/music/preferences/export
		 * @return {MusicExportSuccess} OK
		 */
		DeleteMusicPreferencesExport(headersHandler?: () => {[header: string]: string}): Promise<MusicExportSuccess> {
			return this.http.delete('my/music/preferences/export', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Music Export Preferences
		 * Returns export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
		 * Get my/music/preferences/export
		 * @return {MusicExportPreferencesResponse} OK
		 */
		GetMusicPreferencesExport(headersHandler?: () => {[header: string]: string}): Promise<MusicExportPreferencesResponse> {
			return this.http.get('my/music/preferences/export', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Music Export Preferences
		 * Create export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
		 * Post my/music/preferences/export
		 * @return {MusicExportSuccess} OK
		 */
		PostMusicPreferencesExport(requestBody: MusicExportPreferences, headersHandler?: () => {[header: string]: string}): Promise<MusicExportSuccess> {
			return this.http.post('my/music/preferences/export', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Music Export Vendor Preferences
		 * Remove Vendor specific export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
		 * Delete my/music/preferences/export/{vendor}
		 * @param {string} vendor Supported 3rd Party Vendor
		 * @return {void} OK
		 */
		DeleteMusicPreferencesExportVendor(vendor: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('my/music/preferences/export/' + (vendor == null ? '' : encodeURIComponent(vendor)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Music Export Vendor Preferences
		 * Returns vendor specific export preferences for a given BBC Music user.
		 * Get my/music/preferences/export/{vendor}
		 * @param {string} vendor Supported 3rd Party Vendor
		 * @return {MusicExportPreferencesResponse} OK
		 */
		GetMusicPreferencesExportVendor(vendor: string, headersHandler?: () => {[header: string]: string}): Promise<MusicExportPreferencesResponse> {
			return this.http.get('my/music/preferences/export/' + (vendor == null ? '' : encodeURIComponent(vendor)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Music Export Vendor Preferences
		 * Create Vendor specific export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
		 * Post my/music/preferences/export/{vendor}
		 * @param {string} vendor Supported 3rd Party Vendor
		 * @return {void} OK
		 */
		PostMusicPreferencesExportVendor(vendor: string, requestBody: MusicExportPreferences, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('my/music/preferences/export/' + (vendor == null ? '' : encodeURIComponent(vendor)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Music Export Vendor Preferences
		 * Update vendor specific export preferences for a given BBC Music user.
		 * Put my/music/preferences/export/{vendor}
		 * @param {string} vendor Supported 3rd Party Vendor
		 * @return {void} OK
		 */
		PutMusicPreferencesExportVendor(vendor: string, requestBody: MusicExportPreferences, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.put('my/music/preferences/export/' + (vendor == null ? '' : encodeURIComponent(vendor)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unfollow network
		 * Delete my/networks/follows
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {void} 
		 */
		Personalised_NetworksDeleteByOffsetAndLimit(offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('my/networks/follows?offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List of followed networks
		 * List of followed networks for a given user.
		 * Get my/networks/follows
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PersonalisedNetworksResponse} OK
		 */
		Personalised_NetworksGetByOffsetAndLimit(offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedNetworksResponse> {
			return this.http.get('my/networks/follows?offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Follow network
		 * Post my/networks/follows
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {void} 
		 */
		Personalised_NetworksPostByOffsetAndLimit(offset: number, limit: number, requestBody: Body_2, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('my/networks/follows?offset=' + offset + '&limit=' + limit, JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Write Play Event
		 * Post my/plays
		 * @return {void} 
		 */
		Personalised_PlaysPost(requestBody: Body_4, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('my/plays', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Suggested Playspace Container
		 * Suggested Playspace Container
		 * Get my/playspace/containers/suggested
		 * @param {string} previous_pid Clip or Episode PID of the previous or first content item in the Playspace stream.
		 * @param {string} previous_container Container ID of the previous container in the Playspace stream.
		 * @return {PlayspaceContainer} OK
		 */
		SuggestContainer(previous_pid: string, previous_container: string, headersHandler?: () => {[header: string]: string}): Promise<PlayspaceContainer> {
			return this.http.get('my/playspace/containers/suggested?previous_pid=' + (previous_pid == null ? '' : encodeURIComponent(previous_pid)) + '&previous_container=' + (previous_container == null ? '' : encodeURIComponent(previous_container)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Playspace Container by ID
		 * Playspace Container by ID
		 * Get my/playspace/containers/{id}
		 * @param {string} id Playspace Container ID
		 * @return {PlayspaceContainer} OK
		 */
		GetContainer(id: string, headersHandler?: () => {[header: string]: string}): Promise<PlayspaceContainer> {
			return this.http.get('my/playspace/containers/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Recommended Programmes
		 * Recommended Programmes from the Audience Platforms' Recomendations Service
		 * Get my/programmes/recommendations
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {string} rights Only return available results for the web/mobile.
		 * @return {ProgrammesResponse} OK
		 */
		GetRecommendations(offset: number, limit: number, rights: string, headersHandler?: () => {[header: string]: string}): Promise<ProgrammesResponse> {
			return this.http.get('my/programmes/recommendations?offset=' + offset + '&limit=' + limit + '&rights=' + (rights == null ? '' : encodeURIComponent(rights)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Favourite Episodes and Clips
		 * List of favourited episodes and clips for a given user for iPlayer Radio.
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get my/radio/favourites
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {string} sort Sort order for Personalised Radio results
		 * @param {boolean} show_all_activity Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioFavourites(offset: number, limit: number, sort: string, show_all_activity: boolean, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioResponse> {
			return this.http.get('my/radio/favourites?offset=' + offset + '&limit=' + limit + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&show_all_activity=' + show_all_activity, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Favourite Episodes and Clips
		 * Add User favourites
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/radio/favourites
		 * @param {Array<PersonalisedRadioBatchRequest>} requestBody Action favourited or unfavourited
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PostPersonalisedRadioBatch(requestBody: Array<PersonalisedRadioBatchRequest>, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioSuccessResponse> {
			return this.http.post('my/radio/favourites', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Favourite Episodes and Clips
		 * Update user favourites
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/radio/favourites
		 * @param {Array<PersonalisedRadioBatchRequest>} requestBody Action favourited or unfavourited
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PutPersonalisedRadioBatch(requestBody: Array<PersonalisedRadioBatchRequest>, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioSuccessResponse> {
			return this.http.put('my/radio/favourites', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Favourite Episodes and Clips by Type
		 * List of followed 'clips' or 'episode' items for a given iPlayer Radio user
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get my/radio/favourites/{type}
		 * @param {string} type Supported Radio favourite types: Clips or Episodes
		 * @param {string} sort Sort order for Personalised Radio results
		 * @param {boolean} show_all_activity Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioFavouritesByType(type: string, sort: string, show_all_activity: boolean, offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioResponse> {
			return this.http.get('my/radio/favourites/' + (type == null ? '' : encodeURIComponent(type)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&show_all_activity=' + show_all_activity + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Favourite Episode or Clip
		 * Remove User favourite
		 * Delete my/radio/favourites/{type}/{pid}
		 * @param {string} type Supported Radio favourite types: Clips or Episodes
		 * @param {string} pid pid
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		DeletePersonalisedRadioByActivityTypeById(type: string, pid: string, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioSuccessResponse> {
			return this.http.delete('my/radio/favourites/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (pid == null ? '' : encodeURIComponent(pid)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Favourite Episode or Clip
		 * Check to see if a single clip or episode entity is in a users favourites - determines UX of add button.
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get my/radio/favourites/{type}/{pid}
		 * @param {string} type Supported Radio favourite types: Clips or Episodes
		 * @param {string} pid pid
		 * @param {boolean} show_all_activity Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioByActivityTypeById(type: string, pid: string, show_all_activity: boolean, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioResponse> {
			return this.http.get('my/radio/favourites/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (pid == null ? '' : encodeURIComponent(pid)) + '&show_all_activity=' + show_all_activity, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Favourite Episode or Clip
		 * Add User favourite
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/radio/favourites/{type}/{pid}
		 * @param {string} type Supported Radio favourite types: Clips or Episodes
		 * @param {string} pid pid
		 * @param {PersonalisedRadioRequest} requestBody Action favourited or unfavourited
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PostPersonalisedRadioByActivityTypeById(type: string, pid: string, requestBody: PersonalisedRadioRequest, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioSuccessResponse> {
			return this.http.post('my/radio/favourites/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (pid == null ? '' : encodeURIComponent(pid)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Favourite Episode or Clip
		 * Update user favourite
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/radio/favourites/{type}/{pid}
		 * @param {string} type Supported Radio favourite types: Clips or Episodes
		 * @param {string} pid pid
		 * @param {PersonalisedRadioRequest} requestBody Action favourited or unfavourited
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PutPersonalisedRadioByActivityTypeById(type: string, pid: string, requestBody: PersonalisedRadioRequest, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioSuccessResponse> {
			return this.http.put('my/radio/favourites/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (pid == null ? '' : encodeURIComponent(pid)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Followed Brands and Series
		 * List of favourited brands and series for a given user for iPlayer Radio.
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get my/radio/follows
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {string} sort Sort order for Personalised Radio results
		 * @param {boolean} show_all_activity Include items which have been 'soft' unfollowed in response. I.e items with UAS type of 'unfollowed'
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioFollows(offset: number, limit: number, sort: string, show_all_activity: boolean, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioResponse> {
			return this.http.get('my/radio/follows?offset=' + offset + '&limit=' + limit + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&show_all_activity=' + show_all_activity, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Followed Brands and Series
		 * Add 'brand' or 'series' items to a users iPlayer Radio follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/radio/follows
		 * @param {Array<PersonalisedRadioBatchRequest>} requestBody Action followed or unfollowed
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PostPersonalisedRadioFollowsBatch(requestBody: Array<PersonalisedRadioBatchRequest>, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioSuccessResponse> {
			return this.http.post('my/radio/follows', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Followed Brands and Series
		 * Update 'brands' or 'series' items from a users iPlayer Radio follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/radio/follows
		 * @param {Array<PersonalisedRadioBatchRequest>} requestBody Action followed or unfollowed
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PutPersonalisedRadioFollowsBatch(requestBody: Array<PersonalisedRadioBatchRequest>, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioSuccessResponse> {
			return this.http.put('my/radio/follows', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Followed Brands or Series by Type
		 * List of followed 'brand' or 'series' items for a given iPlayer Radio user
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get my/radio/follows/{type}
		 * @param {string} type Supported Radio follows types: Brands or Series
		 * @param {string} sort Sort order for Personalised Radio results
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {boolean} show_all_activity Include items which have been 'soft' unfollowed in response. I.e items with UAS type of 'unfollowed'
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioFollowsByType(type: string, sort: string, offset: number, limit: number, show_all_activity: boolean, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioResponse> {
			return this.http.get('my/radio/follows/' + (type == null ? '' : encodeURIComponent(type)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit + '&show_all_activity=' + show_all_activity, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Followed Brand or Series
		 * Remove 'brand' or 'series' items from a users iPlayer Radio follows
		 * Delete my/radio/follows/{type}/{pid}
		 * @param {string} type Supported Radio follows types: Brands or Series
		 * @param {string} pid pid
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		DeletePersonalisedRadioFollowsByTypeById(type: string, pid: string, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioSuccessResponse> {
			return this.http.delete('my/radio/follows/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (pid == null ? '' : encodeURIComponent(pid)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Followed Brand or Series
		 * Check to see if a single brand or series entity is in a users follows - determines UX of add button.
		 * Get my/radio/follows/{type}/{pid}
		 * @param {string} type Supported Radio follows types: Brands or Series
		 * @param {string} pid pid
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioFollowsByTypeById(type: string, pid: string, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioResponse> {
			return this.http.get('my/radio/follows/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (pid == null ? '' : encodeURIComponent(pid)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Followed Brand or Series
		 * Add 'brand' or 'series' items from a users iPlayer Radio follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/radio/follows/{type}/{pid}
		 * @param {string} type Supported Radio follows types: Brands or Series
		 * @param {string} pid pid
		 * @param {PersonalisedRadioRequest} requestBody Action followed or unfollowed
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PostPersonalisedRadioFollowsByTypeById(type: string, pid: string, requestBody: PersonalisedRadioRequest, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioSuccessResponse> {
			return this.http.post('my/radio/follows/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (pid == null ? '' : encodeURIComponent(pid)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Followed Brand or Series
		 * Update 'brand' or 'series' items from a users iPlayer Radio follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/radio/follows/{type}/{pid}
		 * @param {string} type Supported Radio follows types: Brands or Series
		 * @param {string} pid pid
		 * @param {PersonalisedRadioRequest} requestBody Action followed or unfollowed
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PutPersonalisedRadioFollowsByTypeById(type: string, pid: string, requestBody: PersonalisedRadioRequest, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioSuccessResponse> {
			return this.http.put('my/radio/follows/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (pid == null ? '' : encodeURIComponent(pid)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Played Episode or Clip
		 * Returns mixed episode and clip plays for a given BBC iPlayer radio user.
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get my/radio/plays
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {string} sort Sort order for Personalised Radio results
		 * @param {boolean} show_all_activity Include expired/unavailable items
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioPlays(offset: number, limit: number, sort: string, show_all_activity: boolean, headersHandler?: () => {[header: string]: string}): Promise<PersonalisedRadioResponse> {
			return this.http.get('my/radio/plays?offset=' + offset + '&limit=' + limit + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&show_all_activity=' + show_all_activity, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * All Podcasts
		 * Retrieve all Podcasts
		 * Get podcasts
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {string} sort Sort order for Podcasts results
		 * @param {string} network Network Master Brand ID (mid)
		 * @param {string} network_url_key Network URL key
		 * @param {string} category Category ID
		 * @param {string} q Search query String
		 * @param {string} coverage Local, National or Regional Coverage
		 * @return {PodcastsResponse} OK
		 */
		GetPodcasts(offset: number, limit: number, sort: string, network: string, network_url_key: string, category: string, q: string, coverage: string, headersHandler?: () => {[header: string]: string}): Promise<PodcastsResponse> {
			return this.http.get('podcasts?offset=' + offset + '&limit=' + limit + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&network=' + (network == null ? '' : encodeURIComponent(network)) + '&network_url_key=' + (network_url_key == null ? '' : encodeURIComponent(network_url_key)) + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&coverage=' + (coverage == null ? '' : encodeURIComponent(coverage)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Featured Podcasts
		 * Retrieve featured podcasts
		 * Get podcasts/featured
		 * @return {PodcastsFeaturedResponse} OK
		 */
		GetPodcastsFeatured(headersHandler?: () => {[header: string]: string}): Promise<PodcastsFeaturedResponse> {
			return this.http.get('podcasts/featured', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Podcast
		 * Retrieve data about the podcast with the supplied PID
		 * Get podcasts/{pid}
		 * @param {string} pid pid
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PodcastsResponse} OK
		 */
		GetPodcastByPid(pid: string, offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<PodcastsResponse> {
			return this.http.get('podcasts/' + (pid == null ? '' : encodeURIComponent(pid)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Podcast Episodes
		 * Retrieve all episodes for a specific podcast
		 * Get podcasts/{pid}/episodes
		 * @param {string} pid pid
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PodcastEpisodesResponse} OK
		 */
		GetPodcastEpisodes(pid: string, offset: number, limit: number, headersHandler?: () => {[header: string]: string}): Promise<PodcastEpisodesResponse> {
			return this.http.get('podcasts/' + (pid == null ? '' : encodeURIComponent(pid)) + '/episodes&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Networks
		 * All iPlayer Radio networks - contains business logic for masterbrand and service relationships
		 * Get radio/networks.json
		 * @param {boolean} preset Returns all networks needed for iPlayer Radio responsive web navigation
		 * @param {boolean} international Returns all networks available internationally
		 * @return {NetworksResponse} OK
		 */
		GetRadioNetworks(preset: boolean, international: boolean, headersHandler?: () => {[header: string]: string}): Promise<NetworksResponse> {
			return this.http.get('radio/networks.json?preset=' + preset + '&international=' + international, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Popular Episodes & Clips
		 * Retrieve Popular Episodes & Clips
		 * Get radio/popular
		 * @param {string} type Programme type required. Accepts comma separated values
		 * @param {string} distinct Filter by deduplication rule. E.g. 'tleo' returns programmes with distinct top level episode objects
		 * @param {string} network Filter by network master brand ID (mid). Accepts comma separated values
		 * @param {string} network_url_key Filter by network URL key. Accepts comma separated values
		 * @param {string} category Filter by category. Accepts comma separated values
		 * @param {string} format Filter by format. Accepts comma separated values
		 * @param {string} group Filter by group. Accepts comma separated values
		 * @param {string} media_type Filter by programme media type. Accepts comma separated values
		 * @param {string} container Filter by container. Accepts any pid e.g. brand,series,episode
		 * @param {Array<string>} media_set Filter by media set name. Accepts comma separated combinations of the following: pc,mobile-download,android-download-high,apple-ios-download-high,mobile-cellular-main,mobile-phone-main,iptv-all
		 * @param {string} q Search query String
		 * @return {PopularResponse} OK
		 */
		GetPopularEpisodesClips(type: string, distinct: string, network: string, network_url_key: string, category: string, format: string, group: string, media_type: string, container: string, media_set: Array<string>, q: string, headersHandler?: () => {[header: string]: string}): Promise<PopularResponse> {
			return this.http.get('radio/popular?type=' + (type == null ? '' : encodeURIComponent(type)) + '&distinct=' + (distinct == null ? '' : encodeURIComponent(distinct)) + '&network=' + (network == null ? '' : encodeURIComponent(network)) + '&network_url_key=' + (network_url_key == null ? '' : encodeURIComponent(network_url_key)) + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&media_type=' + (media_type == null ? '' : encodeURIComponent(media_type)) + '&container=' + (container == null ? '' : encodeURIComponent(container)) + '&' + media_set.map(z => `media_set=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Radio programmes
		 * Provides a paginated list of programmes by PID (brand, series, episode and clip). Accepts various filters and sorting methods.
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining results as an array of Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get radio/programmes
		 * @param {string} kind Filter by provided query. E.g. 'tleo' returns top level objects, ie. brands, orphaned series, and orphaned episodes
		 * @param {string} network Filter by network master brand ID (mid). Accepts comma separated values
		 * @param {string} network_url_key Filter by network URL key. Accepts comma separated values
		 * @param {string} category Filter by category id. Accepts comma separated values. See /category endpoint below for the type of response provided
		 * @param {string} sort Sort by provided query. E.g. 'title' sorts in ascending order, and -title sorts in descending order
		 * @param {string} container Filter by container. Accepts any brand or series pid
		 * @param {string} type Filter by programme type. Accepts comma separated values
		 * @return {ProgrammesResponse} OK
		 */
		GetRadioProgrammes(kind: string, network: string, network_url_key: string, category: string, sort: string, container: string, type: string, headersHandler?: () => {[header: string]: string}): Promise<ProgrammesResponse> {
			return this.http.get('radio/programmes?kind=' + (kind == null ? '' : encodeURIComponent(kind)) + '&network=' + (network == null ? '' : encodeURIComponent(network)) + '&network_url_key=' + (network_url_key == null ? '' : encodeURIComponent(network_url_key)) + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&container=' + (container == null ? '' : encodeURIComponent(container)) + '&type=' + (type == null ? '' : encodeURIComponent(type)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Available radio programme by Pid
		 * Find programmes by PID (brand, series, episode and clip)
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining results as an array of Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get radio/programmes/{pid}
		 * @param {string} pid pid
		 * @return {ProgrammesResponse} OK
		 */
		GetRadioProgrammesByPid(pid: string, headersHandler?: () => {[header: string]: string}): Promise<ProgrammesResponse> {
			return this.http.get('radio/programmes/' + (pid == null ? '' : encodeURIComponent(pid)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}
	}

}

