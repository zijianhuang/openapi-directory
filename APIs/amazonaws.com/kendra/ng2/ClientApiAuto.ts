import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface BatchDeleteDocumentResponse {
		FailedDocuments?: Array<BatchDeleteDocumentResponseFailedDocument>;
	}

	export interface BatchDeleteDocumentRequest {
		IndexId: string;
		DocumentIdList: Array<DocumentId>;

		/**Maps a particular data source sync job to a particular data source. */
		DataSourceSyncJobMetricTarget?: DataSourceSyncJobMetricTarget;
	}

	export interface BatchPutDocumentResponse {
		FailedDocuments?: Array<BatchPutDocumentResponseFailedDocument>;
	}

	export interface BatchPutDocumentRequest {
		IndexId: string;
		RoleArn?: string;
		Documents: Array<Document>;
	}

	export interface CreateDataSourceResponse {
		Id: string;
	}

	export interface CreateDataSourceRequest {
		Name: string;
		IndexId: string;
		Type: CreateDataSourceRequestType;

		/**Configuration information for a Amazon Kendra data source. */
		Configuration: DataSourceConfiguration;
		Description?: string;
		Schedule?: string;
		RoleArn: string;
		Tags?: Array<Tag>;
	}

	export enum CreateDataSourceRequestType { S3 = 0, SHAREPOINT = 1, DATABASE = 2, SALESFORCE = 3, ONEDRIVE = 4, SERVICENOW = 5 }

	export interface CreateFaqResponse {
		Id?: string;
	}

	export interface CreateFaqRequest {
		IndexId: string;
		Name: string;
		Description?: string;

		/**Information required to find a specific file in an Amazon S3 bucket. */
		S3Path: S3Path;
		RoleArn: string;
		Tags?: Array<Tag>;
	}

	export interface CreateIndexResponse {
		Id?: string;
	}

	export interface CreateIndexRequest {
		Name: string;
		Edition?: CreateIndexRequestEdition;
		RoleArn: string;

		/**Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs. */
		ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
		Description?: string;
		ClientToken?: string;
		Tags?: Array<Tag>;
	}

	export enum CreateIndexRequestEdition { DEVELOPER_EDITION = 0, ENTERPRISE_EDITION = 1 }

	export interface DeleteDataSourceRequest {
		Id: string;
		IndexId: string;
	}

	export interface DeleteFaqRequest {
		Id: string;
		IndexId: string;
	}

	export interface DeleteIndexRequest {
		Id: string;
	}

	export interface DescribeDataSourceResponse {
		Id?: string;
		IndexId?: string;
		Name?: string;
		Type?: DescribeDataSourceResponseType;

		/**Configuration information for a Amazon Kendra data source. */
		Configuration?: DataSourceConfiguration;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		Description?: string;
		Status?: DescribeDataSourceResponseStatus;
		Schedule?: string;
		RoleArn?: string;
		ErrorMessage?: string;
	}

	export enum DescribeDataSourceResponseType { S3 = 0, SHAREPOINT = 1, DATABASE = 2, SALESFORCE = 3, ONEDRIVE = 4, SERVICENOW = 5 }

	export enum DescribeDataSourceResponseStatus { CREATING = 0, DELETING = 1, FAILED = 2, UPDATING = 3, ACTIVE = 4 }

	export interface DescribeDataSourceRequest {
		Id: string;
		IndexId: string;
	}

	export interface DescribeFaqResponse {
		Id?: string;
		IndexId?: string;
		Name?: string;
		Description?: string;
		CreatedAt?: Date;
		UpdatedAt?: Date;

		/**Information required to find a specific file in an Amazon S3 bucket. */
		S3Path?: S3Path;
		Status?: DescribeFaqResponseStatus;
		RoleArn?: string;
		ErrorMessage?: string;
	}

	export enum DescribeFaqResponseStatus { CREATING = 0, UPDATING = 1, ACTIVE = 2, DELETING = 3, FAILED = 4 }

	export interface DescribeFaqRequest {
		Id: string;
		IndexId: string;
	}

	export interface DescribeIndexResponse {
		Name?: string;
		Id?: string;
		Edition?: DescribeIndexResponseEdition;
		RoleArn?: string;

		/**Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs. */
		ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
		Status?: DescribeIndexResponseStatus;
		Description?: string;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		DocumentMetadataConfigurations?: Array<DocumentMetadataConfiguration>;

		/**Provides information about the number of documents and the number of questions and answers in an index. */
		IndexStatistics?: IndexStatistics;
		ErrorMessage?: string;

		/**Specifies capacity units configured for your index. You can add and remove capacity units to tune an index to your requirements. */
		CapacityUnits?: CapacityUnitsConfiguration;
	}

	export enum DescribeIndexResponseEdition { DEVELOPER_EDITION = 0, ENTERPRISE_EDITION = 1 }

	export enum DescribeIndexResponseStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, UPDATING = 4, SYSTEM_UPDATING = 5 }

	export interface DescribeIndexRequest {
		Id: string;
	}

	export interface ListDataSourceSyncJobsResponse {
		History?: Array<DataSourceSyncJob>;
		NextToken?: string;
	}

	export interface ListDataSourceSyncJobsRequest {
		Id: string;
		IndexId: string;
		NextToken?: string;
		MaxResults?: number;

		/**Provides a range of time. */
		StartTimeFilter?: TimeRange;
		StatusFilter?: ListDataSourceSyncJobsRequestStatusFilter;
	}

	export enum ListDataSourceSyncJobsRequestStatusFilter { FAILED = 0, SUCCEEDED = 1, SYNCING = 2, INCOMPLETE = 3, STOPPING = 4, ABORTED = 5, SYNCING_INDEXING = 6 }

	export interface ListDataSourcesResponse {
		SummaryItems?: Array<DataSourceSummary>;
		NextToken?: string;
	}

	export interface ListDataSourcesRequest {
		IndexId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListFaqsResponse {
		NextToken?: string;
		FaqSummaryItems?: Array<FaqSummary>;
	}

	export interface ListFaqsRequest {
		IndexId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListIndicesResponse {
		IndexConfigurationSummaryItems?: Array<IndexConfigurationSummary>;
		NextToken?: string;
	}

	export interface ListIndicesRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}

	export interface QueryResult {
		QueryId?: string;
		ResultItems?: Array<QueryResultItem>;
		FacetResults?: Array<FacetResult>;
		TotalNumberOfResults?: number;
	}

	export interface QueryRequest {
		IndexId: string;
		QueryText: string;

		/**<p>Provides filtering the query results based on document attributes.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p> */
		AttributeFilter?: AttributeFilter;
		Facets?: Array<Facet>;
		RequestedDocumentAttributes?: Array<DocumentAttributeKey>;
		QueryResultTypeFilter?: QueryRequestQueryResultTypeFilter;
		PageNumber?: number;
		PageSize?: number;
	}

	export enum QueryRequestQueryResultTypeFilter { DOCUMENT = 0, QUESTION_ANSWER = 1, ANSWER = 2 }

	export interface StartDataSourceSyncJobResponse {
		ExecutionId?: string;
	}

	export interface StartDataSourceSyncJobRequest {
		Id: string;
		IndexId: string;
	}

	export interface StopDataSourceSyncJobRequest {
		Id: string;
		IndexId: string;
	}

	export interface SubmitFeedbackRequest {
		IndexId: string;
		QueryId: string;
		ClickFeedbackItems?: Array<ClickFeedback>;
		RelevanceFeedbackItems?: Array<RelevanceFeedback>;
	}

	export interface TagResourceRequest {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		ResourceARN: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateDataSourceRequest {
		Id: string;
		Name?: string;
		IndexId: string;

		/**Configuration information for a Amazon Kendra data source. */
		Configuration?: DataSourceConfiguration;
		Description?: string;
		Schedule?: string;
		RoleArn?: string;
	}

	export interface UpdateIndexRequest {
		Id: string;
		Name?: string;
		RoleArn?: string;
		Description?: string;
		DocumentMetadataConfigurationUpdates?: Array<DocumentMetadataConfiguration>;

		/**Specifies capacity units configured for your index. You can add and remove capacity units to tune an index to your requirements. */
		CapacityUnits?: CapacityUnitsConfiguration;
	}


	/**Access Control List files for the documents in a data source. */
	export interface AccessControlListConfiguration {
		KeyPath?: string;
	}


	/**Provides information about the column that should be used for filtering the query response by groups. */
	export interface AclConfiguration {
		AllowedGroupsColumnName: string;
	}

	export enum AdditionalResultAttributeValueType { TEXT_WITH_HIGHLIGHTS_VALUE = 0 }


	/**An attribute returned with a document from a search. */
	export interface AdditionalResultAttributeValue {

		/**Provides text and information about where to highlight the text. */
		TextWithHighlightsValue?: TextWithHighlights;
	}


	/**An attribute returned from an index query. */
	export interface AdditionalResultAttribute {
		Key: string;
		ValueType: AdditionalResultAttributeValueType;

		/**An attribute returned with a document from a search. */
		Value: AdditionalResultAttributeValue;
	}

	export enum AdditionalResultAttributeValueType { TEXT_WITH_HIGHLIGHTS_VALUE = 0 }


	/**Provides text and information about where to highlight the text. */
	export interface TextWithHighlights {
		Text?: string;
		Highlights?: Array<Highlight>;
	}


	/**<p>Provides filtering the query results based on document attributes.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p> */
	export interface AttributeFilter {
		AndAllFilters?: Array<AttributeFilter>;
		OrAllFilters?: Array<AttributeFilter>;

		/**<p>Provides filtering the query results based on document attributes.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p> */
		NotFilter?: AttributeFilter;

		/**A custom attribute value assigned to a document. */
		EqualsTo?: DocumentAttribute;

		/**A custom attribute value assigned to a document. */
		ContainsAll?: DocumentAttribute;

		/**A custom attribute value assigned to a document. */
		ContainsAny?: DocumentAttribute;

		/**A custom attribute value assigned to a document. */
		GreaterThan?: DocumentAttribute;

		/**A custom attribute value assigned to a document. */
		GreaterThanOrEquals?: DocumentAttribute;

		/**A custom attribute value assigned to a document. */
		LessThan?: DocumentAttribute;

		/**A custom attribute value assigned to a document. */
		LessThanOrEquals?: DocumentAttribute;
	}


	/**A custom attribute value assigned to a document.  */
	export interface DocumentAttribute {
		Key: string;

		/**The value of a custom document attribute. You can only provide one value for a custom attribute. */
		Value: DocumentAttributeValue;
	}


	/**Maps a particular data source sync job to a particular data source. */
	export interface DataSourceSyncJobMetricTarget {
		DataSourceId: string;
		DataSourceSyncJobId: string;
	}

	export enum ErrorCode { InternalError = 0, InvalidRequest = 1 }


	/**Provides information about documents that could not be removed from an index by the <a>BatchDeleteDocument</a> operation. */
	export interface BatchDeleteDocumentResponseFailedDocument {
		Id?: string;
		ErrorCode?: BatchDeleteDocumentResponseFailedDocumentErrorCode;
		ErrorMessage?: string;
	}

	export enum BatchDeleteDocumentResponseFailedDocumentErrorCode { InternalError = 0, InvalidRequest = 1 }


	/**Provides information about a document that could not be indexed. */
	export interface BatchPutDocumentResponseFailedDocument {
		Id?: string;
		ErrorCode?: BatchPutDocumentResponseFailedDocumentErrorCode;
		ErrorMessage?: string;
	}

	export enum BatchPutDocumentResponseFailedDocumentErrorCode { InternalError = 0, InvalidRequest = 1 }


	/**Specifies capacity units configured for your index. You can add and remove capacity units to tune an index to your requirements. */
	export interface CapacityUnitsConfiguration {
		StorageCapacityUnits: number;
		QueryCapacityUnits: number;
	}


	/**Gathers information about when a particular result was clicked by a user. Your application uses the <a>SubmitFeedback</a> operation to provide click information. */
	export interface ClickFeedback {
		ResultId: string;
		ClickTime: Date;
	}


	/**Provides information about how Amazon Kendra should use the columns of a database in an index. */
	export interface ColumnConfiguration {
		DocumentIdColumnName: string;
		DocumentDataColumnName: string;
		DocumentTitleColumnName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
		ChangeDetectingColumns: Array<ColumnName>;
	}


	/**Provides the information necessary to connect to a database. */
	export interface ConnectionConfiguration {
		DatabaseHost: string;
		DatabasePort: number;
		DatabaseName: string;
		TableName: string;
		SecretArn: string;
	}

	export enum ContentType { PDF = 0, HTML = 1, MS_WORD = 2, PLAIN_TEXT = 3, PPT = 4 }

	export enum DataSourceType { S3 = 0, SHAREPOINT = 1, DATABASE = 2, SALESFORCE = 3, ONEDRIVE = 4, SERVICENOW = 5 }


	/**Configuration information for a Amazon Kendra data source. */
	export interface DataSourceConfiguration {

		/**Provides configuration information for a data source to index documents in an Amazon S3 bucket. */
		S3Configuration?: S3DataSourceConfiguration;

		/**Provides configuration information for connecting to a Microsoft SharePoint data source. */
		SharePointConfiguration?: SharePointConfiguration;

		/**Provides the information necessary to connect a database to an index. */
		DatabaseConfiguration?: DatabaseConfiguration;

		/**Provides configuration information for connecting to a Salesforce data source. */
		SalesforceConfiguration?: SalesforceConfiguration;

		/**Provides configuration information for data sources that connect to OneDrive. */
		OneDriveConfiguration?: OneDriveConfiguration;

		/**Provides configuration information required to connect to a ServiceNow data source. */
		ServiceNowConfiguration?: ServiceNowConfiguration;
	}


	/**Information required to find a specific file in an Amazon S3 bucket. */
	export interface S3Path {
		Bucket: string;
		Key: string;
	}

	export enum IndexEdition { DEVELOPER_EDITION = 0, ENTERPRISE_EDITION = 1 }


	/**Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs. */
	export interface ServerSideEncryptionConfiguration {
		KmsKeyId?: string;
	}


	/**Provides configuration information for a data source to index documents in an Amazon S3 bucket. */
	export interface S3DataSourceConfiguration {
		BucketName: string;
		InclusionPrefixes?: Array<DataSourceInclusionsExclusionsStringsMember>;
		ExclusionPatterns?: Array<DataSourceInclusionsExclusionsStringsMember>;

		/**Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document. */
		DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration;

		/**Access Control List files for the documents in a data source. */
		AccessControlListConfiguration?: AccessControlListConfiguration;
	}


	/**Provides configuration information for connecting to a Microsoft SharePoint data source. */
	export interface SharePointConfiguration {
		SharePointVersion: SharePointConfigurationSharePointVersion;
		Urls: Array<Url>;
		SecretArn: string;
		CrawlAttachments?: boolean;
		UseChangeLog?: boolean;
		InclusionPatterns?: Array<DataSourceInclusionsExclusionsStringsMember>;
		ExclusionPatterns?: Array<DataSourceInclusionsExclusionsStringsMember>;

		/**Provides information for connecting to an Amazon VPC. */
		VpcConfiguration?: DataSourceVpcConfiguration;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
		DocumentTitleFieldName?: string;
	}

	export enum SharePointConfigurationSharePointVersion { SHAREPOINT_ONLINE = 0 }


	/**Provides the information necessary to connect a database to an index.  */
	export interface DatabaseConfiguration {
		DatabaseEngineType: DatabaseConfigurationDatabaseEngineType;

		/**Provides the information necessary to connect to a database. */
		ConnectionConfiguration: ConnectionConfiguration;

		/**Provides information for connecting to an Amazon VPC. */
		VpcConfiguration?: DataSourceVpcConfiguration;

		/**Provides information about how Amazon Kendra should use the columns of a database in an index. */
		ColumnConfiguration: ColumnConfiguration;

		/**Provides information about the column that should be used for filtering the query response by groups. */
		AclConfiguration?: AclConfiguration;
	}

	export enum DatabaseConfigurationDatabaseEngineType { RDS_AURORA_MYSQL = 0, RDS_AURORA_POSTGRESQL = 1, RDS_MYSQL = 2, RDS_POSTGRESQL = 3 }


	/**Provides configuration information for connecting to a Salesforce data source. */
	export interface SalesforceConfiguration {
		ServerUrl: string;
		SecretArn: string;
		StandardObjectConfigurations?: Array<SalesforceStandardObjectConfiguration>;

		/**Specifies configuration information for the knowlege article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both */
		KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;

		/**Defines configuration for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table. */
		ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration;
		CrawlAttachments?: boolean;

		/**Provides configuration information for processing attachments to Salesforce standard objects. */
		StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;
		IncludeAttachmentFilePatterns?: Array<DataSourceInclusionsExclusionsStringsMember>;
		ExcludeAttachmentFilePatterns?: Array<DataSourceInclusionsExclusionsStringsMember>;
	}


	/**Provides configuration information for data sources that connect to OneDrive. */
	export interface OneDriveConfiguration {
		TenantDomain: string;
		SecretArn: string;

		/**User accounts whose documents should be indexed. */
		OneDriveUsers: OneDriveUsers;
		InclusionPatterns?: Array<DataSourceInclusionsExclusionsStringsMember>;
		ExclusionPatterns?: Array<DataSourceInclusionsExclusionsStringsMember>;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}


	/**Provides configuration information required to connect to a ServiceNow data source. */
	export interface ServiceNowConfiguration {
		HostUrl: string;
		SecretArn: string;
		ServiceNowBuildVersion: ServiceNowConfigurationServiceNowBuildVersion;

		/**Provides configuration information for crawling knowledge articles in the ServiceNow site. */
		KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;

		/**Provides configuration information for crawling service catalog items in the ServiceNow site */
		ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;
	}

	export enum ServiceNowConfigurationServiceNowBuildVersion { LONDON = 0, OTHERS = 1 }

	export enum DataSourceStatus { CREATING = 0, DELETING = 1, FAILED = 2, UPDATING = 3, ACTIVE = 4 }


	/**Summary information for a Amazon Kendra data source. Returned in a call to . */
	export interface DataSourceSummary {
		Name?: string;
		Id?: string;
		Type?: DataSourceSummaryType;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		Status?: DataSourceSummaryStatus;
	}

	export enum DataSourceSummaryType { S3 = 0, SHAREPOINT = 1, DATABASE = 2, SALESFORCE = 3, ONEDRIVE = 4, SERVICENOW = 5 }

	export enum DataSourceSummaryStatus { CREATING = 0, DELETING = 1, FAILED = 2, UPDATING = 3, ACTIVE = 4 }

	export enum DataSourceSyncJobStatus { FAILED = 0, SUCCEEDED = 1, SYNCING = 2, INCOMPLETE = 3, STOPPING = 4, ABORTED = 5, SYNCING_INDEXING = 6 }


	/**Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a connector. */
	export interface DataSourceSyncJobMetrics {
		DocumentsAdded?: string;
		DocumentsModified?: string;
		DocumentsDeleted?: string;
		DocumentsFailed?: string;
		DocumentsScanned?: string;
	}


	/**Provides information about a synchronization job. */
	export interface DataSourceSyncJob {
		ExecutionId?: string;
		StartTime?: Date;
		EndTime?: Date;
		Status?: DataSourceSyncJobStatus;
		ErrorMessage?: string;
		ErrorCode?: DataSourceSyncJobErrorCode;
		DataSourceErrorCode?: string;

		/**Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a connector. */
		Metrics?: DataSourceSyncJobMetrics;
	}

	export enum DataSourceSyncJobStatus { FAILED = 0, SUCCEEDED = 1, SYNCING = 2, INCOMPLETE = 3, STOPPING = 4, ABORTED = 5, SYNCING_INDEXING = 6 }

	export enum DataSourceSyncJobErrorCode { InternalError = 0, InvalidRequest = 1 }


	/**Maps a column or attribute in the data source to an index field. You must first create the fields in the index using the <a>UpdateIndex</a> operation. */
	export interface DataSourceToIndexFieldMapping {
		DataSourceFieldName: string;
		DateFieldFormat?: string;
		IndexFieldName: string;
	}


	/**Provides information for connecting to an Amazon VPC. */
	export interface DataSourceVpcConfiguration {
		SubnetIds: Array<SubnetId>;
		SecurityGroupIds: Array<VpcSecurityGroupId>;
	}

	export enum DatabaseEngineType { RDS_AURORA_MYSQL = 0, RDS_AURORA_POSTGRESQL = 1, RDS_MYSQL = 2, RDS_POSTGRESQL = 3 }

	export enum FaqStatus { CREATING = 0, UPDATING = 1, ACTIVE = 2, DELETING = 3, FAILED = 4 }

	export enum IndexStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, UPDATING = 4, SYSTEM_UPDATING = 5 }


	/**Provides information about the number of documents and the number of questions and answers in an index. */
	export interface IndexStatistics {

		/**Provides statistical information about the FAQ questions and answers contained in an index. */
		FaqStatistics: FaqStatistics;

		/**Provides information about text documents indexed in an index. */
		TextDocumentStatistics: TextDocumentStatistics;
	}


	/**A document in an index. */
	export interface Document {
		Id: string;
		Title?: string;
		Blob?: string;

		/**Information required to find a specific file in an Amazon S3 bucket. */
		S3Path?: S3Path;
		Attributes?: Array<DocumentAttribute>;
		AccessControlList?: Array<Principal>;
		ContentType?: DocumentContentType;
	}

	export enum DocumentContentType { PDF = 0, HTML = 1, MS_WORD = 2, PLAIN_TEXT = 3, PPT = 4 }


	/**The value of a custom document attribute. You can only provide one value for a custom attribute. */
	export interface DocumentAttributeValue {
		StringValue?: string;
		StringListValue?: Array<String>;
		LongValue?: number;
		DateValue?: Date;
	}


	/**Provides the count of documents that match a particular attribute when doing a faceted search. */
	export interface DocumentAttributeValueCountPair {

		/**The value of a custom document attribute. You can only provide one value for a custom attribute. */
		DocumentAttributeValue?: DocumentAttributeValue;
		Count?: number;
	}

	export enum DocumentAttributeValueType { STRING_VALUE = 0, STRING_LIST_VALUE = 1, LONG_VALUE = 2, DATE_VALUE = 3 }


	/**Provides information for manually tuning the relevance of a field in a search. When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters. */
	export interface Relevance {
		Freshness?: boolean;
		Importance?: number;
		Duration?: string;
		RankOrder?: RelevanceRankOrder;
		ValueImportanceMap?: ValueImportanceMap;
	}

	export enum RelevanceRankOrder { ASCENDING = 0, DESCENDING = 1 }


	/**Provides information about how a custom index field is used during a search. */
	export interface Search {
		Facetable?: boolean;
		Searchable?: boolean;
		Displayable?: boolean;
	}


	/**Specifies the properties of a custom index field. */
	export interface DocumentMetadataConfiguration {
		Name: string;
		Type: DocumentMetadataConfigurationType;

		/**Provides information for manually tuning the relevance of a field in a search. When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters. */
		Relevance?: Relevance;

		/**Provides information about how a custom index field is used during a search. */
		Search?: Search;
	}

	export enum DocumentMetadataConfigurationType { STRING_VALUE = 0, STRING_LIST_VALUE = 1, LONG_VALUE = 2, DATE_VALUE = 3 }


	/**Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document. */
	export interface DocumentsMetadataConfiguration {
		S3Prefix?: string;
	}


	/**Information about a document attribute */
	export interface Facet {
		DocumentAttributeKey?: string;
	}


	/**The facet values for the documents in the response. */
	export interface FacetResult {
		DocumentAttributeKey?: string;
		DocumentAttributeValueCountPairs?: Array<DocumentAttributeValueCountPair>;
	}


	/**Provides statistical information about the FAQ questions and answers contained in an index. */
	export interface FaqStatistics {
		IndexedQuestionAnswersCount: number;
	}


	/**Provides information about a frequently asked questions and answer contained in an index. */
	export interface FaqSummary {
		Id?: string;
		Name?: string;
		Status?: FaqSummaryStatus;
		CreatedAt?: Date;
		UpdatedAt?: Date;
	}

	export enum FaqSummaryStatus { CREATING = 0, UPDATING = 1, ACTIVE = 2, DELETING = 3, FAILED = 4 }


	/**Provides information that you can use to highlight a search result so that your users can quickly identify terms in the response. */
	export interface Highlight {
		BeginOffset: number;
		EndOffset: number;
		TopAnswer?: boolean;
	}


	/**A summary of information about an index. */
	export interface IndexConfigurationSummary {
		Name?: string;
		Id?: string;
		Edition?: IndexConfigurationSummaryEdition;
		CreatedAt: Date;
		UpdatedAt: Date;
		Status: IndexConfigurationSummaryStatus;
	}

	export enum IndexConfigurationSummaryEdition { DEVELOPER_EDITION = 0, ENTERPRISE_EDITION = 1 }

	export enum IndexConfigurationSummaryStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, UPDATING = 4, SYSTEM_UPDATING = 5 }


	/**Provides information about text documents indexed in an index. */
	export interface TextDocumentStatistics {
		IndexedTextDocumentsCount: number;
		IndexedTextBytes: number;
	}


	/**Provides a range of time. */
	export interface TimeRange {
		StartTime?: Date;
		EndTime?: Date;
	}


	/**User accounts whose documents should be indexed. */
	export interface OneDriveUsers {
		OneDriveUserList?: Array<OneDriveUser>;

		/**Information required to find a specific file in an Amazon S3 bucket. */
		OneDriveUserS3Path?: S3Path;
	}

	export enum Order { ASCENDING = 0, DESCENDING = 1 }

	export enum PrincipalType { USER = 0, GROUP = 1 }

	export enum ReadAccessType { ALLOW = 0, DENY = 1 }


	/**Provides user and group information for document access filtering. */
	export interface Principal {
		Name: string;
		Type: PrincipalType;
		Access: PrincipalAccess;
	}

	export enum PrincipalType { USER = 0, GROUP = 1 }

	export enum PrincipalAccess { ALLOW = 0, DENY = 1 }

	export enum QueryResultType { DOCUMENT = 0, QUESTION_ANSWER = 1, ANSWER = 2 }


	/**<p>A single query result.</p> <p>A query result contains information about a document returned by the query. This includes the original location of the document, a list of attributes assigned to the document, and relevant text from the document that satisfies the query.</p> */
	export interface QueryResultItem {
		Id?: string;
		Type?: QueryResultItemType;
		AdditionalAttributes?: Array<AdditionalResultAttribute>;
		DocumentId?: string;

		/**Provides text and information about where to highlight the text. */
		DocumentTitle?: TextWithHighlights;

		/**Provides text and information about where to highlight the text. */
		DocumentExcerpt?: TextWithHighlights;
		DocumentURI?: string;
		DocumentAttributes?: Array<DocumentAttribute>;
	}

	export enum QueryResultItemType { DOCUMENT = 0, QUESTION_ANSWER = 1, ANSWER = 2 }

	export enum RelevanceType { RELEVANT = 0, NOT_RELEVANT = 1 }


	/**Provides feedback on how relevant a document is to a search. Your application uses the <a>SubmitFeedback</a> operation to provide relevance information. */
	export interface RelevanceFeedback {
		ResultId: string;
		RelevanceValue: RelevanceFeedbackRelevanceValue;
	}

	export enum RelevanceFeedbackRelevanceValue { RELEVANT = 0, NOT_RELEVANT = 1 }


	/**Defines configuration for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table. */
	export interface SalesforceChatterFeedConfiguration {
		DocumentDataFieldName: string;
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
		IncludeFilterTypes?: Array<SalesforceChatterFeedIncludeFilterType>;
	}

	export enum SalesforceChatterFeedIncludeFilterType { ACTIVE_USER = 0, STANDARD_USER = 1 }


	/**Specifies configuration information for the knowlege article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both  */
	export interface SalesforceKnowledgeArticleConfiguration {
		IncludedStates: Array<SalesforceKnowledgeArticleState>;

		/**Provides configuration information for standard Salesforce knowledge articles. */
		StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;
		CustomKnowledgeArticleTypeConfigurations?: Array<SalesforceCustomKnowledgeArticleTypeConfiguration>;
	}


	/**Provides configuration information for processing attachments to Salesforce standard objects.  */
	export interface SalesforceStandardObjectAttachmentConfiguration {
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}


	/**Provides configuration information for indexing Salesforce custom articles. */
	export interface SalesforceCustomKnowledgeArticleTypeConfiguration {
		Name: string;
		DocumentDataFieldName: string;
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}


	/**Provides configuration information for standard Salesforce knowledge articles. */
	export interface SalesforceStandardKnowledgeArticleTypeConfiguration {
		DocumentDataFieldName: string;
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	export enum SalesforceKnowledgeArticleState { DRAFT = 0, PUBLISHED = 1, ARCHIVED = 2 }

	export enum SalesforceStandardObjectName { ACCOUNT = 0, CAMPAIGN = 1, CASE = 2, CONTACT = 3, CONTRACT = 4, DOCUMENT = 5, GROUP = 6, IDEA = 7, LEAD = 8, OPPORTUNITY = 9, PARTNER = 10, PRICEBOOK = 11, PRODUCT = 12, PROFILE = 13, SOLUTION = 14, TASK = 15, USER = 16 }


	/**Specifies confguration information for indexing a single standard object. */
	export interface SalesforceStandardObjectConfiguration {
		Name: SalesforceStandardObjectConfigurationName;
		DocumentDataFieldName: string;
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	export enum SalesforceStandardObjectConfigurationName { ACCOUNT = 0, CAMPAIGN = 1, CASE = 2, CONTACT = 3, CONTRACT = 4, DOCUMENT = 5, GROUP = 6, IDEA = 7, LEAD = 8, OPPORTUNITY = 9, PARTNER = 10, PRICEBOOK = 11, PRODUCT = 12, PROFILE = 13, SOLUTION = 14, TASK = 15, USER = 16 }

	export enum ServiceNowBuildVersionType { LONDON = 0, OTHERS = 1 }


	/**Provides configuration information for crawling knowledge articles in the ServiceNow site. */
	export interface ServiceNowKnowledgeArticleConfiguration {
		CrawlAttachments?: boolean;
		IncludeAttachmentFilePatterns?: Array<DataSourceInclusionsExclusionsStringsMember>;
		ExcludeAttachmentFilePatterns?: Array<DataSourceInclusionsExclusionsStringsMember>;
		DocumentDataFieldName: string;
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}


	/**Provides configuration information for crawling service catalog items in the ServiceNow site */
	export interface ServiceNowServiceCatalogConfiguration {
		CrawlAttachments?: boolean;
		IncludeAttachmentFilePatterns?: Array<DataSourceInclusionsExclusionsStringsMember>;
		ExcludeAttachmentFilePatterns?: Array<DataSourceInclusionsExclusionsStringsMember>;
		DocumentDataFieldName: string;
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	export enum SharePointVersion { SHAREPOINT_ONLINE = 0 }


	/**A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Removes one or more documents from an index. The documents must have been added with the <a>BatchPutDocument</a> operation.</p> <p>The documents are deleted asynchronously. You can see the progress of the deletion by using AWS CloudWatch. Any error messages releated to the processing of the batch are sent to you CloudWatch log.</p>
		 * Post /#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument
		 * @return {BatchDeleteDocumentResponse} Success
		 */
		BatchDeleteDocument(requestBody: BatchDeleteDocumentRequest, headersHandler?: () => HttpHeaders): Observable<BatchDeleteDocumentResponse> {
			return this.http.post<BatchDeleteDocumentResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Adds one or more documents to an index.</p> <p>The <code>BatchPutDocument</code> operation enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this operation to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index.</p> <p>The documents are indexed asynchronously. You can see the progress of the batch using AWS CloudWatch. Any error messages related to processing the batch are sent to your AWS CloudWatch log.</p>
		 * Post /#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument
		 * @return {BatchPutDocumentResponse} Success
		 */
		BatchPutDocument(requestBody: BatchPutDocumentRequest, headersHandler?: () => HttpHeaders): Observable<BatchPutDocumentResponse> {
			return this.http.post<BatchPutDocumentResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Creates a data source that you use to with an Amazon Kendra index. </p> <p>You specify a name, connector type and description for your data source. You can choose between an S3 connector, a SharePoint Online connector, and a database connector.</p> <p>You also specify configuration information such as document metadata (author, source URI, and so on) and user context information.</p> <p> <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.</p>
		 * Post /#X-Amz-Target=AWSKendraFrontendService.CreateDataSource
		 * @return {CreateDataSourceResponse} Success
		 */
		CreateDataSource(requestBody: CreateDataSourceRequest, headersHandler?: () => HttpHeaders): Observable<CreateDataSourceResponse> {
			return this.http.post<CreateDataSourceResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.CreateDataSource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates an new set of frequently asked question (FAQ) questions and answers.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.CreateFaq
		 * @return {CreateFaqResponse} Success
		 */
		CreateFaq(requestBody: CreateFaqRequest, headersHandler?: () => HttpHeaders): Observable<CreateFaqResponse> {
			return this.http.post<CreateFaqResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.CreateFaq', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Creates a new Amazon Kendra index. Index creation is an asynchronous operation. To determine if index creation has completed, check the <code>Status</code> field returned from a call to . The <code>Status</code> field is set to <code>ACTIVE</code> when the index is ready to use.</p> <p>Once the index is active you can index your documents using the operation or using one of the supported data sources. </p>
		 * Post /#X-Amz-Target=AWSKendraFrontendService.CreateIndex
		 * @return {CreateIndexResponse} Success
		 */
		CreateIndex(requestBody: CreateIndexRequest, headersHandler?: () => HttpHeaders): Observable<CreateIndexResponse> {
			return this.http.post<CreateIndexResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.CreateIndex', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes an Amazon Kendra data source. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the <code>Status</code> field returned by a call to the operation is set to <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource
		 * @return {void} Success
		 */
		DeleteDataSource(requestBody: DeleteDataSourceRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes an FAQ from an index.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.DeleteFaq
		 * @return {void} Success
		 */
		DeleteFaq(requestBody: DeleteFaqRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.DeleteFaq', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the <code>Status</code> field returned by a call to the <a>DescribeIndex</a> operation is set to <code>DELETING</code>.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.DeleteIndex
		 * @return {void} Success
		 */
		DeleteIndex(requestBody: DeleteIndexRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.DeleteIndex', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a Amazon Kendra data source.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource
		 * @return {DescribeDataSourceResponse} Success
		 */
		DescribeDataSource(requestBody: DescribeDataSourceRequest, headersHandler?: () => HttpHeaders): Observable<DescribeDataSourceResponse> {
			return this.http.post<DescribeDataSourceResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about an FAQ list.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.DescribeFaq
		 * @return {DescribeFaqResponse} Success
		 */
		DescribeFaq(requestBody: DescribeFaqRequest, headersHandler?: () => HttpHeaders): Observable<DescribeFaqResponse> {
			return this.http.post<DescribeFaqResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.DescribeFaq', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Describes an existing Amazon Kendra index
		 * Post /#X-Amz-Target=AWSKendraFrontendService.DescribeIndex
		 * @return {DescribeIndexResponse} Success
		 */
		DescribeIndex(requestBody: DescribeIndexRequest, headersHandler?: () => HttpHeaders): Observable<DescribeIndexResponse> {
			return this.http.post<DescribeIndexResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.DescribeIndex', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets statistics about synchronizing Amazon Kendra with a data source.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataSourceSyncJobsResponse} Success
		 */
		ListDataSourceSyncJobs(MaxResults: string, NextToken: string, requestBody: ListDataSourceSyncJobsRequest, headersHandler?: () => HttpHeaders): Observable<ListDataSourceSyncJobsResponse> {
			return this.http.post<ListDataSourceSyncJobsResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the data sources that you have created.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.ListDataSources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataSourcesResponse} Success
		 */
		ListDataSources(MaxResults: string, NextToken: string, requestBody: ListDataSourcesRequest, headersHandler?: () => HttpHeaders): Observable<ListDataSourcesResponse> {
			return this.http.post<ListDataSourcesResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.ListDataSources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets a list of FAQ lists associated with an index.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.ListFaqs
		 * @return {ListFaqsResponse} Success
		 */
		ListFaqs(requestBody: ListFaqsRequest, headersHandler?: () => HttpHeaders): Observable<ListFaqsResponse> {
			return this.http.post<ListFaqsResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.ListFaqs', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the Amazon Kendra indexes that you have created.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.ListIndices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIndicesResponse} Success
		 */
		ListIndices(MaxResults: string, NextToken: string, requestBody: ListIndicesRequest, headersHandler?: () => HttpHeaders): Observable<ListIndicesResponse> {
			return this.http.post<ListIndicesResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.ListIndices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest, headersHandler?: () => HttpHeaders): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Searches an active index. Use this API to search your documents using query. The <code>Query</code> operation enables to do faceted search and to filter results based on document attributes.</p> <p>It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results. </p> <p>Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.</p> <ul> <li> <p>Relevant passages</p> </li> <li> <p>Matching FAQs</p> </li> <li> <p>Relevant documents</p> </li> </ul> <p>You can specify that the query return only one type of result using the <code>QueryResultTypeConfig</code> parameter.</p>
		 * Post /#X-Amz-Target=AWSKendraFrontendService.Query
		 * @return {QueryResult} Success
		 */
		Query(requestBody: QueryRequest, headersHandler?: () => HttpHeaders): Observable<QueryResult> {
			return this.http.post<QueryResult>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.Query', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Starts a synchronization job for a data source. If a synchronization job is already in progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob
		 * @return {StartDataSourceSyncJobResponse} Success
		 */
		StartDataSourceSyncJob(requestBody: StartDataSourceSyncJobRequest, headersHandler?: () => HttpHeaders): Observable<StartDataSourceSyncJobResponse> {
			return this.http.post<StartDataSourceSyncJobResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Stops a running synchronization job. You can't stop a scheduled synchronization job.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob
		 * @return {void} Success
		 */
		StopDataSourceSyncJob(requestBody: StopDataSourceSyncJobRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables you to provide feedback to Amazon Kendra to improve the performance of the service.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback
		 * @return {void} Success
		 */
		SubmitFeedback(requestBody: SubmitFeedbackRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => HttpHeaders): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.TagResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes a tag from an index, FAQ, or a data source.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => HttpHeaders): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.UntagResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates an existing Amazon Kendra data source.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource
		 * @return {void} Success
		 */
		UpdateDataSource(requestBody: UpdateDataSourceRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing Amazon Kendra index.
		 * Post /#X-Amz-Target=AWSKendraFrontendService.UpdateIndex
		 * @return {void} Success
		 */
		UpdateIndex(requestBody: UpdateIndexRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=AWSKendraFrontendService.UpdateIndex', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

}

