import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface CreateMedicalVocabularyResponse {
		VocabularyName?: string;
		LanguageCode?: CreateMedicalVocabularyResponseLanguageCode;
		VocabularyState?: CreateMedicalVocabularyResponseVocabularyState;
		LastModifiedTime?: Date;
		FailureReason?: string;
	}

	export enum CreateMedicalVocabularyResponseLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum CreateMedicalVocabularyResponseVocabularyState { PENDING = 0, READY = 1, FAILED = 2 }

	export interface CreateMedicalVocabularyRequest {
		VocabularyName: string;
		LanguageCode: CreateMedicalVocabularyRequestLanguageCode;
		VocabularyFileUri: string;
	}

	export enum CreateMedicalVocabularyRequestLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export interface CreateVocabularyResponse {
		VocabularyName?: string;
		LanguageCode?: CreateVocabularyResponseLanguageCode;
		VocabularyState?: CreateVocabularyResponseVocabularyState;
		LastModifiedTime?: Date;
		FailureReason?: string;
	}

	export enum CreateVocabularyResponseLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum CreateVocabularyResponseVocabularyState { PENDING = 0, READY = 1, FAILED = 2 }

	export interface CreateVocabularyRequest {
		VocabularyName: string;
		LanguageCode: CreateVocabularyRequestLanguageCode;
		Phrases?: Array<Phrase>;
		VocabularyFileUri?: string;
	}

	export enum CreateVocabularyRequestLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export interface CreateVocabularyFilterResponse {
		VocabularyFilterName?: string;
		LanguageCode?: CreateVocabularyFilterResponseLanguageCode;
		LastModifiedTime?: Date;
	}

	export enum CreateVocabularyFilterResponseLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export interface CreateVocabularyFilterRequest {
		VocabularyFilterName: string;
		LanguageCode: CreateVocabularyFilterRequestLanguageCode;
		Words?: Array<Word>;
		VocabularyFilterFileUri?: string;
	}

	export enum CreateVocabularyFilterRequestLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export interface DeleteMedicalTranscriptionJobRequest {
		MedicalTranscriptionJobName: string;
	}

	export interface DeleteMedicalVocabularyRequest {
		VocabularyName: string;
	}

	export interface DeleteTranscriptionJobRequest {
		TranscriptionJobName: string;
	}

	export interface DeleteVocabularyRequest {
		VocabularyName: string;
	}

	export interface DeleteVocabularyFilterRequest {
		VocabularyFilterName: string;
	}

	export interface GetMedicalTranscriptionJobResponse {

		/**The data structure that containts the information for a medical transcription job. */
		MedicalTranscriptionJob?: MedicalTranscriptionJob;
	}

	export interface GetMedicalTranscriptionJobRequest {
		MedicalTranscriptionJobName: string;
	}

	export interface GetMedicalVocabularyResponse {
		VocabularyName?: string;
		LanguageCode?: GetMedicalVocabularyResponseLanguageCode;
		VocabularyState?: GetMedicalVocabularyResponseVocabularyState;
		LastModifiedTime?: Date;
		FailureReason?: string;
		DownloadUri?: string;
	}

	export enum GetMedicalVocabularyResponseLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum GetMedicalVocabularyResponseVocabularyState { PENDING = 0, READY = 1, FAILED = 2 }

	export interface GetMedicalVocabularyRequest {
		VocabularyName: string;
	}

	export interface GetTranscriptionJobResponse {

		/**Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation. */
		TranscriptionJob?: TranscriptionJob;
	}

	export interface GetTranscriptionJobRequest {
		TranscriptionJobName: string;
	}

	export interface GetVocabularyResponse {
		VocabularyName?: string;
		LanguageCode?: GetVocabularyResponseLanguageCode;
		VocabularyState?: GetVocabularyResponseVocabularyState;
		LastModifiedTime?: Date;
		FailureReason?: string;
		DownloadUri?: string;
	}

	export enum GetVocabularyResponseLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum GetVocabularyResponseVocabularyState { PENDING = 0, READY = 1, FAILED = 2 }

	export interface GetVocabularyRequest {
		VocabularyName: string;
	}

	export interface GetVocabularyFilterResponse {
		VocabularyFilterName?: string;
		LanguageCode?: GetVocabularyFilterResponseLanguageCode;
		LastModifiedTime?: Date;
		DownloadUri?: string;
	}

	export enum GetVocabularyFilterResponseLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export interface GetVocabularyFilterRequest {
		VocabularyFilterName: string;
	}

	export interface ListMedicalTranscriptionJobsResponse {
		Status?: ListMedicalTranscriptionJobsResponseStatus;
		NextToken?: string;
		MedicalTranscriptionJobSummaries?: Array<MedicalTranscriptionJobSummary>;
	}

	export enum ListMedicalTranscriptionJobsResponseStatus { QUEUED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }

	export interface ListMedicalTranscriptionJobsRequest {
		Status?: ListMedicalTranscriptionJobsRequestStatus;
		JobNameContains?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export enum ListMedicalTranscriptionJobsRequestStatus { QUEUED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }

	export interface ListMedicalVocabulariesResponse {
		Status?: ListMedicalVocabulariesResponseStatus;
		NextToken?: string;
		Vocabularies?: Array<VocabularyInfo>;
	}

	export enum ListMedicalVocabulariesResponseStatus { PENDING = 0, READY = 1, FAILED = 2 }

	export interface ListMedicalVocabulariesRequest {
		NextToken?: string;
		MaxResults?: number;
		StateEquals?: ListMedicalVocabulariesRequestStateEquals;
		NameContains?: string;
	}

	export enum ListMedicalVocabulariesRequestStateEquals { PENDING = 0, READY = 1, FAILED = 2 }

	export interface ListTranscriptionJobsResponse {
		Status?: ListTranscriptionJobsResponseStatus;
		NextToken?: string;
		TranscriptionJobSummaries?: Array<TranscriptionJobSummary>;
	}

	export enum ListTranscriptionJobsResponseStatus { QUEUED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }

	export interface ListTranscriptionJobsRequest {
		Status?: ListTranscriptionJobsRequestStatus;
		JobNameContains?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export enum ListTranscriptionJobsRequestStatus { QUEUED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }

	export interface ListVocabulariesResponse {
		Status?: ListVocabulariesResponseStatus;
		NextToken?: string;
		Vocabularies?: Array<VocabularyInfo>;
	}

	export enum ListVocabulariesResponseStatus { PENDING = 0, READY = 1, FAILED = 2 }

	export interface ListVocabulariesRequest {
		NextToken?: string;
		MaxResults?: number;
		StateEquals?: ListVocabulariesRequestStateEquals;
		NameContains?: string;
	}

	export enum ListVocabulariesRequestStateEquals { PENDING = 0, READY = 1, FAILED = 2 }

	export interface ListVocabularyFiltersResponse {
		NextToken?: string;
		VocabularyFilters?: Array<VocabularyFilterInfo>;
	}

	export interface ListVocabularyFiltersRequest {
		NextToken?: string;
		MaxResults?: number;
		NameContains?: string;
	}

	export interface StartMedicalTranscriptionJobResponse {

		/**The data structure that containts the information for a medical transcription job. */
		MedicalTranscriptionJob?: MedicalTranscriptionJob;
	}

	export interface StartMedicalTranscriptionJobRequest {
		MedicalTranscriptionJobName: string;
		LanguageCode: StartMedicalTranscriptionJobRequestLanguageCode;
		MediaSampleRateHertz?: number;
		MediaFormat?: StartMedicalTranscriptionJobRequestMediaFormat;

		/**Describes the input media file in a transcription request. */
		Media: Media;
		OutputBucketName: string;
		OutputEncryptionKMSKeyId?: string;

		/**Optional settings for the <a>StartMedicalTranscriptionJob</a> operation. */
		Settings?: MedicalTranscriptionSetting;
		Specialty: StartMedicalTranscriptionJobRequestSpecialty;
		Type: StartMedicalTranscriptionJobRequestType;
	}

	export enum StartMedicalTranscriptionJobRequestLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum StartMedicalTranscriptionJobRequestMediaFormat { mp3 = 0, mp4 = 1, wav = 2, flac = 3 }

	export enum StartMedicalTranscriptionJobRequestSpecialty { PRIMARYCARE = 0 }

	export enum StartMedicalTranscriptionJobRequestType { CONVERSATION = 0, DICTATION = 1 }

	export interface StartTranscriptionJobResponse {

		/**Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation. */
		TranscriptionJob?: TranscriptionJob;
	}

	export interface StartTranscriptionJobRequest {
		TranscriptionJobName: string;
		LanguageCode: StartTranscriptionJobRequestLanguageCode;
		MediaSampleRateHertz?: number;
		MediaFormat?: StartTranscriptionJobRequestMediaFormat;

		/**Describes the input media file in a transcription request. */
		Media: Media;
		OutputBucketName?: string;
		OutputEncryptionKMSKeyId?: string;

		/**Provides optional settings for the <code>StartTranscriptionJob</code> operation. */
		Settings?: Settings;

		/**Provides information about when a transcription job should be executed. */
		JobExecutionSettings?: JobExecutionSettings;

		/**Settings for content redaction within a transcription job. */
		ContentRedaction?: ContentRedaction;
	}

	export enum StartTranscriptionJobRequestLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum StartTranscriptionJobRequestMediaFormat { mp3 = 0, mp4 = 1, wav = 2, flac = 3 }

	export interface UpdateMedicalVocabularyResponse {
		VocabularyName?: string;
		LanguageCode?: UpdateMedicalVocabularyResponseLanguageCode;
		LastModifiedTime?: Date;
		VocabularyState?: UpdateMedicalVocabularyResponseVocabularyState;
	}

	export enum UpdateMedicalVocabularyResponseLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum UpdateMedicalVocabularyResponseVocabularyState { PENDING = 0, READY = 1, FAILED = 2 }

	export interface UpdateMedicalVocabularyRequest {
		VocabularyName: string;
		LanguageCode: UpdateMedicalVocabularyRequestLanguageCode;
		VocabularyFileUri?: string;
	}

	export enum UpdateMedicalVocabularyRequestLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export interface UpdateVocabularyResponse {
		VocabularyName?: string;
		LanguageCode?: UpdateVocabularyResponseLanguageCode;
		LastModifiedTime?: Date;
		VocabularyState?: UpdateVocabularyResponseVocabularyState;
	}

	export enum UpdateVocabularyResponseLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum UpdateVocabularyResponseVocabularyState { PENDING = 0, READY = 1, FAILED = 2 }

	export interface UpdateVocabularyRequest {
		VocabularyName: string;
		LanguageCode: UpdateVocabularyRequestLanguageCode;
		Phrases?: Array<Phrase>;
		VocabularyFileUri?: string;
	}

	export enum UpdateVocabularyRequestLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export interface UpdateVocabularyFilterResponse {
		VocabularyFilterName?: string;
		LanguageCode?: UpdateVocabularyFilterResponseLanguageCode;
		LastModifiedTime?: Date;
	}

	export enum UpdateVocabularyFilterResponseLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export interface UpdateVocabularyFilterRequest {
		VocabularyFilterName: string;
		Words?: Array<Word>;
		VocabularyFilterFileUri?: string;
	}

	export enum RedactionType { PII = 0 }

	export enum RedactionOutput { redacted = 0, redacted_and_unredacted = 1 }


	/**Settings for content redaction within a transcription job. */
	export interface ContentRedaction {
		RedactionType: ContentRedactionRedactionType;
		RedactionOutput: ContentRedactionRedactionOutput;
	}

	export enum ContentRedactionRedactionType { PII = 0 }

	export enum ContentRedactionRedactionOutput { redacted = 0, redacted_and_unredacted = 1 }

	export enum LanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum VocabularyState { PENDING = 0, READY = 1, FAILED = 2 }


	/**The data structure that containts the information for a medical transcription job. */
	export interface MedicalTranscriptionJob {
		MedicalTranscriptionJobName?: string;
		TranscriptionJobStatus?: MedicalTranscriptionJobTranscriptionJobStatus;
		LanguageCode?: MedicalTranscriptionJobLanguageCode;
		MediaSampleRateHertz?: number;
		MediaFormat?: MedicalTranscriptionJobMediaFormat;

		/**Describes the input media file in a transcription request. */
		Media?: Media;

		/**Identifies the location of a medical transcript. */
		Transcript?: MedicalTranscript;
		StartTime?: Date;
		CreationTime?: Date;
		CompletionTime?: Date;
		FailureReason?: string;

		/**Optional settings for the <a>StartMedicalTranscriptionJob</a> operation. */
		Settings?: MedicalTranscriptionSetting;
		Specialty?: MedicalTranscriptionJobSpecialty;
		Type?: MedicalTranscriptionJobType;
	}

	export enum MedicalTranscriptionJobTranscriptionJobStatus { QUEUED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }

	export enum MedicalTranscriptionJobLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum MedicalTranscriptionJobMediaFormat { mp3 = 0, mp4 = 1, wav = 2, flac = 3 }

	export enum MedicalTranscriptionJobSpecialty { PRIMARYCARE = 0 }

	export enum MedicalTranscriptionJobType { CONVERSATION = 0, DICTATION = 1 }


	/**Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation.  */
	export interface TranscriptionJob {
		TranscriptionJobName?: string;
		TranscriptionJobStatus?: TranscriptionJobTranscriptionJobStatus;
		LanguageCode?: TranscriptionJobLanguageCode;
		MediaSampleRateHertz?: number;
		MediaFormat?: TranscriptionJobMediaFormat;

		/**Describes the input media file in a transcription request. */
		Media?: Media;

		/**Identifies the location of a transcription. */
		Transcript?: Transcript;
		StartTime?: Date;
		CreationTime?: Date;
		CompletionTime?: Date;
		FailureReason?: string;

		/**Provides optional settings for the <code>StartTranscriptionJob</code> operation. */
		Settings?: Settings;

		/**Provides information about when a transcription job should be executed. */
		JobExecutionSettings?: JobExecutionSettings;

		/**Settings for content redaction within a transcription job. */
		ContentRedaction?: ContentRedaction;
	}

	export enum TranscriptionJobTranscriptionJobStatus { QUEUED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }

	export enum TranscriptionJobLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum TranscriptionJobMediaFormat { mp3 = 0, mp4 = 1, wav = 2, flac = 3 }


	/**Provides information about when a transcription job should be executed. */
	export interface JobExecutionSettings {
		AllowDeferredExecution?: boolean;
		DataAccessRoleArn?: string;
	}

	export enum TranscriptionJobStatus { QUEUED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }


	/**Describes the input media file in a transcription request. */
	export interface Media {
		MediaFileUri?: string;
	}

	export enum MediaFormat { mp3 = 0, mp4 = 1, wav = 2, flac = 3 }


	/**Identifies the location of a medical transcript. */
	export interface MedicalTranscript {
		TranscriptFileUri?: string;
	}


	/**Optional settings for the <a>StartMedicalTranscriptionJob</a> operation. */
	export interface MedicalTranscriptionSetting {
		ShowSpeakerLabels?: boolean;
		MaxSpeakerLabels?: number;
		ChannelIdentification?: boolean;
		ShowAlternatives?: boolean;
		MaxAlternatives?: number;
		VocabularyName?: string;
	}

	export enum Specialty { PRIMARYCARE = 0 }

	export enum Type { CONVERSATION = 0, DICTATION = 1 }


	/**Provides summary information about a transcription job. */
	export interface MedicalTranscriptionJobSummary {
		MedicalTranscriptionJobName?: string;
		CreationTime?: Date;
		StartTime?: Date;
		CompletionTime?: Date;
		LanguageCode?: MedicalTranscriptionJobSummaryLanguageCode;
		TranscriptionJobStatus?: MedicalTranscriptionJobSummaryTranscriptionJobStatus;
		FailureReason?: string;
		OutputLocationType?: MedicalTranscriptionJobSummaryOutputLocationType;
		Specialty?: MedicalTranscriptionJobSummarySpecialty;
		Type?: MedicalTranscriptionJobSummaryType;
	}

	export enum MedicalTranscriptionJobSummaryLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum MedicalTranscriptionJobSummaryTranscriptionJobStatus { QUEUED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }

	export enum MedicalTranscriptionJobSummaryOutputLocationType { CUSTOMER_BUCKET = 0, SERVICE_BUCKET = 1 }

	export enum MedicalTranscriptionJobSummarySpecialty { PRIMARYCARE = 0 }

	export enum MedicalTranscriptionJobSummaryType { CONVERSATION = 0, DICTATION = 1 }

	export enum OutputLocationType { CUSTOMER_BUCKET = 0, SERVICE_BUCKET = 1 }

	export enum VocabularyFilterMethod { remove = 0, mask = 1 }


	/**Provides optional settings for the <code>StartTranscriptionJob</code> operation. */
	export interface Settings {
		VocabularyName?: string;
		ShowSpeakerLabels?: boolean;
		MaxSpeakerLabels?: number;
		ChannelIdentification?: boolean;
		ShowAlternatives?: boolean;
		MaxAlternatives?: number;
		VocabularyFilterName?: string;
		VocabularyFilterMethod?: SettingsVocabularyFilterMethod;
	}

	export enum SettingsVocabularyFilterMethod { remove = 0, mask = 1 }


	/**Identifies the location of a transcription. */
	export interface Transcript {
		TranscriptFileUri?: string;
		RedactedTranscriptFileUri?: string;
	}


	/**Provides a summary of information about a transcription job. */
	export interface TranscriptionJobSummary {
		TranscriptionJobName?: string;
		CreationTime?: Date;
		StartTime?: Date;
		CompletionTime?: Date;
		LanguageCode?: TranscriptionJobSummaryLanguageCode;
		TranscriptionJobStatus?: TranscriptionJobSummaryTranscriptionJobStatus;
		FailureReason?: string;
		OutputLocationType?: TranscriptionJobSummaryOutputLocationType;

		/**Settings for content redaction within a transcription job. */
		ContentRedaction?: ContentRedaction;
	}

	export enum TranscriptionJobSummaryLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum TranscriptionJobSummaryTranscriptionJobStatus { QUEUED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }

	export enum TranscriptionJobSummaryOutputLocationType { CUSTOMER_BUCKET = 0, SERVICE_BUCKET = 1 }


	/**Provides information about a custom vocabulary.  */
	export interface VocabularyInfo {
		VocabularyName?: string;
		LanguageCode?: VocabularyInfoLanguageCode;
		LastModifiedTime?: Date;
		VocabularyState?: VocabularyInfoVocabularyState;
	}

	export enum VocabularyInfoLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	export enum VocabularyInfoVocabularyState { PENDING = 0, READY = 1, FAILED = 2 }


	/**Provides information about a vocabulary filter. */
	export interface VocabularyFilterInfo {
		VocabularyFilterName?: string;
		LanguageCode?: VocabularyFilterInfoLanguageCode;
		LastModifiedTime?: Date;
	}

	export enum VocabularyFilterInfoLanguageCode { en-US = 0, es-US = 1, en-AU = 2, fr-CA = 3, en-GB = 4, de-DE = 5, pt-BR = 6, fr-FR = 7, it-IT = 8, ko-KR = 9, es-ES = 10, en-IN = 11, hi-IN = 12, ar-SA = 13, ru-RU = 14, zh-CN = 15, nl-NL = 16, id-ID = 17, ta-IN = 18, fa-IR = 19, en-IE = 20, en-AB = 21, en-WL = 22, pt-PT = 23, te-IN = 24, tr-TR = 25, de-CH = 26, he-IL = 27, ms-MY = 28, ja-JP = 29, ar-AE = 30 }

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new custom vocabulary that you can use to change how Amazon Transcribe Medical transcribes your audio file.
		 * Post /#X-Amz-Target=Transcribe.CreateMedicalVocabulary
		 * @return {CreateMedicalVocabularyResponse} Success
		 */
		CreateMedicalVocabulary(requestBody: CreateMedicalVocabularyRequest, headersHandler?: () => HttpHeaders): Observable<CreateMedicalVocabularyResponse> {
			return this.http.post<CreateMedicalVocabularyResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.CreateMedicalVocabulary', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new custom vocabulary that you can use to change the way Amazon Transcribe handles transcription of an audio file.
		 * Post /#X-Amz-Target=Transcribe.CreateVocabulary
		 * @return {CreateVocabularyResponse} Success
		 */
		CreateVocabulary(requestBody: CreateVocabularyRequest, headersHandler?: () => HttpHeaders): Observable<CreateVocabularyResponse> {
			return this.http.post<CreateVocabularyResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.CreateVocabulary', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new vocabulary filter that you can use to filter words, such as profane words, from the output of a transcription job.
		 * Post /#X-Amz-Target=Transcribe.CreateVocabularyFilter
		 * @return {CreateVocabularyFilterResponse} Success
		 */
		CreateVocabularyFilter(requestBody: CreateVocabularyFilterRequest, headersHandler?: () => HttpHeaders): Observable<CreateVocabularyFilterResponse> {
			return this.http.post<CreateVocabularyFilterResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.CreateVocabularyFilter', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a transcription job generated by Amazon Transcribe Medical and any related information.
		 * Post /#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob
		 * @return {void} Success
		 */
		DeleteMedicalTranscriptionJob(requestBody: DeleteMedicalTranscriptionJobRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a vocabulary from Amazon Transcribe Medical.
		 * Post /#X-Amz-Target=Transcribe.DeleteMedicalVocabulary
		 * @return {void} Success
		 */
		DeleteMedicalVocabulary(requestBody: DeleteMedicalVocabularyRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=Transcribe.DeleteMedicalVocabulary', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a previously submitted transcription job along with any other generated results such as the transcription, models, and so on.
		 * Post /#X-Amz-Target=Transcribe.DeleteTranscriptionJob
		 * @return {void} Success
		 */
		DeleteTranscriptionJob(requestBody: DeleteTranscriptionJobRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=Transcribe.DeleteTranscriptionJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a vocabulary from Amazon Transcribe.
		 * Post /#X-Amz-Target=Transcribe.DeleteVocabulary
		 * @return {void} Success
		 */
		DeleteVocabulary(requestBody: DeleteVocabularyRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=Transcribe.DeleteVocabulary', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a vocabulary filter.
		 * Post /#X-Amz-Target=Transcribe.DeleteVocabularyFilter
		 * @return {void} Success
		 */
		DeleteVocabularyFilter(requestBody: DeleteVocabularyFilterRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=Transcribe.DeleteVocabularyFilter', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a transcription job from Amazon Transcribe Medical. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You find the results of the completed job in the <code>TranscriptFileUri</code> field.
		 * Post /#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob
		 * @return {GetMedicalTranscriptionJobResponse} Success
		 */
		GetMedicalTranscriptionJob(requestBody: GetMedicalTranscriptionJobRequest, headersHandler?: () => HttpHeaders): Observable<GetMedicalTranscriptionJobResponse> {
			return this.http.post<GetMedicalTranscriptionJobResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve information about a medical vocabulary.
		 * Post /#X-Amz-Target=Transcribe.GetMedicalVocabulary
		 * @return {GetMedicalVocabularyResponse} Success
		 */
		GetMedicalVocabulary(requestBody: GetMedicalVocabularyRequest, headersHandler?: () => HttpHeaders): Observable<GetMedicalVocabularyResponse> {
			return this.http.post<GetMedicalVocabularyResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.GetMedicalVocabulary', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns information about a transcription job. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in the <code>TranscriptFileUri</code> field. If you enable content redaction, the redacted transcript appears in <code>RedactedTranscriptFileUri</code>.
		 * Post /#X-Amz-Target=Transcribe.GetTranscriptionJob
		 * @return {GetTranscriptionJobResponse} Success
		 */
		GetTranscriptionJob(requestBody: GetTranscriptionJobRequest, headersHandler?: () => HttpHeaders): Observable<GetTranscriptionJobResponse> {
			return this.http.post<GetTranscriptionJobResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.GetTranscriptionJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about a vocabulary.
		 * Post /#X-Amz-Target=Transcribe.GetVocabulary
		 * @return {GetVocabularyResponse} Success
		 */
		GetVocabulary(requestBody: GetVocabularyRequest, headersHandler?: () => HttpHeaders): Observable<GetVocabularyResponse> {
			return this.http.post<GetVocabularyResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.GetVocabulary', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns information about a vocabulary filter.
		 * Post /#X-Amz-Target=Transcribe.GetVocabularyFilter
		 * @return {GetVocabularyFilterResponse} Success
		 */
		GetVocabularyFilter(requestBody: GetVocabularyFilterRequest, headersHandler?: () => HttpHeaders): Observable<GetVocabularyFilterResponse> {
			return this.http.post<GetVocabularyFilterResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.GetVocabularyFilter', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists medical transcription jobs with a specified status or substring that matches their names.
		 * Post /#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMedicalTranscriptionJobsResponse} Success
		 */
		ListMedicalTranscriptionJobs(MaxResults: string, NextToken: string, requestBody: ListMedicalTranscriptionJobsRequest, headersHandler?: () => HttpHeaders): Observable<ListMedicalTranscriptionJobsResponse> {
			return this.http.post<ListMedicalTranscriptionJobsResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of vocabularies that match the specified criteria. You get the entire list of vocabularies if you don't enter a value in any of the request parameters.
		 * Post /#X-Amz-Target=Transcribe.ListMedicalVocabularies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMedicalVocabulariesResponse} Success
		 */
		ListMedicalVocabularies(MaxResults: string, NextToken: string, requestBody: ListMedicalVocabulariesRequest, headersHandler?: () => HttpHeaders): Observable<ListMedicalVocabulariesResponse> {
			return this.http.post<ListMedicalVocabulariesResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.ListMedicalVocabularies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists transcription jobs with the specified status.
		 * Post /#X-Amz-Target=Transcribe.ListTranscriptionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTranscriptionJobsResponse} Success
		 */
		ListTranscriptionJobs(MaxResults: string, NextToken: string, requestBody: ListTranscriptionJobsRequest, headersHandler?: () => HttpHeaders): Observable<ListTranscriptionJobsResponse> {
			return this.http.post<ListTranscriptionJobsResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.ListTranscriptionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies.
		 * Post /#X-Amz-Target=Transcribe.ListVocabularies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVocabulariesResponse} Success
		 */
		ListVocabularies(MaxResults: string, NextToken: string, requestBody: ListVocabulariesRequest, headersHandler?: () => HttpHeaders): Observable<ListVocabulariesResponse> {
			return this.http.post<ListVocabulariesResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.ListVocabularies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about vocabulary filters.
		 * Post /#X-Amz-Target=Transcribe.ListVocabularyFilters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVocabularyFiltersResponse} Success
		 */
		ListVocabularyFilters(MaxResults: string, NextToken: string, requestBody: ListVocabularyFiltersRequest, headersHandler?: () => HttpHeaders): Observable<ListVocabularyFiltersResponse> {
			return this.http.post<ListVocabularyFiltersResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.ListVocabularyFilters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Start a batch job to transcribe medical speech to text.
		 * Post /#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob
		 * @return {StartMedicalTranscriptionJobResponse} Success
		 */
		StartMedicalTranscriptionJob(requestBody: StartMedicalTranscriptionJobRequest, headersHandler?: () => HttpHeaders): Observable<StartMedicalTranscriptionJobResponse> {
			return this.http.post<StartMedicalTranscriptionJobResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Starts an asynchronous job to transcribe speech to text.
		 * Post /#X-Amz-Target=Transcribe.StartTranscriptionJob
		 * @return {StartTranscriptionJobResponse} Success
		 */
		StartTranscriptionJob(requestBody: StartTranscriptionJobRequest, headersHandler?: () => HttpHeaders): Observable<StartTranscriptionJobResponse> {
			return this.http.post<StartTranscriptionJobResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.StartTranscriptionJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates an existing vocabulary with new values in a different text file. The <code>UpdateMedicalVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request.
		 * Post /#X-Amz-Target=Transcribe.UpdateMedicalVocabulary
		 * @return {UpdateMedicalVocabularyResponse} Success
		 */
		UpdateMedicalVocabulary(requestBody: UpdateMedicalVocabularyRequest, headersHandler?: () => HttpHeaders): Observable<UpdateMedicalVocabularyResponse> {
			return this.http.post<UpdateMedicalVocabularyResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.UpdateMedicalVocabulary', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request.
		 * Post /#X-Amz-Target=Transcribe.UpdateVocabulary
		 * @return {UpdateVocabularyResponse} Success
		 */
		UpdateVocabulary(requestBody: UpdateVocabularyRequest, headersHandler?: () => HttpHeaders): Observable<UpdateVocabularyResponse> {
			return this.http.post<UpdateVocabularyResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.UpdateVocabulary', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a vocabulary filter with a new list of filtered words.
		 * Post /#X-Amz-Target=Transcribe.UpdateVocabularyFilter
		 * @return {UpdateVocabularyFilterResponse} Success
		 */
		UpdateVocabularyFilter(requestBody: UpdateVocabularyFilterRequest, headersHandler?: () => HttpHeaders): Observable<UpdateVocabularyFilterResponse> {
			return this.http.post<UpdateVocabularyFilterResponse>(this.baseUri + '/#X-Amz-Target=Transcribe.UpdateVocabularyFilter', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

