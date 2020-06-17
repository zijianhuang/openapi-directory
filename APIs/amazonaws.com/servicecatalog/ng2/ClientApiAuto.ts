import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface AcceptPortfolioShareInput {
		AcceptLanguage?: string;
		PortfolioId: string;
		PortfolioShareType?: AcceptPortfolioShareInputPortfolioShareType;
	}

	export enum AcceptPortfolioShareInputPortfolioShareType { IMPORTED = 0, AWS_SERVICECATALOG = 1, AWS_ORGANIZATIONS = 2 }

	export interface AssociateBudgetWithResourceInput {
		BudgetName: string;
		ResourceId: string;
	}

	export interface AssociatePrincipalWithPortfolioInput {
		AcceptLanguage?: string;
		PortfolioId: string;
		PrincipalARN: string;
		PrincipalType: AssociatePrincipalWithPortfolioInputPrincipalType;
	}

	export enum AssociatePrincipalWithPortfolioInputPrincipalType { IAM = 0 }

	export interface AssociateProductWithPortfolioInput {
		AcceptLanguage?: string;
		ProductId: string;
		PortfolioId: string;
		SourcePortfolioId?: string;
	}

	export interface AssociateServiceActionWithProvisioningArtifactInput {
		ProductId: string;
		ProvisioningArtifactId: string;
		ServiceActionId: string;
		AcceptLanguage?: string;
	}

	export interface AssociateTagOptionWithResourceInput {
		ResourceId: string;
		TagOptionId: string;
	}

	export interface BatchAssociateServiceActionWithProvisioningArtifactOutput {
		FailedServiceActionAssociations?: Array<FailedServiceActionAssociation>;
	}

	export interface BatchAssociateServiceActionWithProvisioningArtifactInput {
		ServiceActionAssociations: Array<ServiceActionAssociation>;
		AcceptLanguage?: string;
	}

	export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput {
		FailedServiceActionAssociations?: Array<FailedServiceActionAssociation>;
	}

	export interface BatchDisassociateServiceActionFromProvisioningArtifactInput {
		ServiceActionAssociations: Array<ServiceActionAssociation>;
		AcceptLanguage?: string;
	}

	export interface CopyProductOutput {
		CopyProductToken?: string;
	}

	export interface CopyProductInput {
		AcceptLanguage?: string;
		SourceProductArn: string;
		TargetProductId?: string;
		TargetProductName?: string;
		SourceProvisioningArtifactIdentifiers?: Array<SourceProvisioningArtifactPropertiesMap>;
		CopyOptions?: Array<CopyOption>;
		IdempotencyToken: string;
	}

	export interface CreateConstraintOutput {

		/**Information about a constraint. */
		ConstraintDetail?: ConstraintDetail;
		ConstraintParameters?: string;
		Status?: CreateConstraintOutputStatus;
	}

	export enum CreateConstraintOutputStatus { AVAILABLE = 0, CREATING = 1, FAILED = 2 }

	export interface CreateConstraintInput {
		AcceptLanguage?: string;
		PortfolioId: string;
		ProductId: string;
		Parameters: string;
		Type: string;
		Description?: string;
		IdempotencyToken: string;
	}

	export interface CreatePortfolioOutput {

		/**Information about a portfolio. */
		PortfolioDetail?: PortfolioDetail;
		Tags?: Array<Tag>;
	}

	export interface CreatePortfolioInput {
		AcceptLanguage?: string;
		DisplayName: string;
		Description?: string;
		ProviderName: string;
		Tags?: Array<Tag>;
		IdempotencyToken: string;
	}

	export interface CreatePortfolioShareOutput {
		PortfolioShareToken?: string;
	}

	export interface CreatePortfolioShareInput {
		AcceptLanguage?: string;
		PortfolioId: string;
		AccountId?: string;

		/**Information about the organization node. */
		OrganizationNode?: OrganizationNode;
	}

	export interface CreateProductOutput {

		/**Information about a product view. */
		ProductViewDetail?: ProductViewDetail;

		/**Information about a provisioning artifact (also known as a version) for a product. */
		ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
		Tags?: Array<Tag>;
	}

	export interface CreateProductInput {
		AcceptLanguage?: string;
		Name: string;
		Owner: string;
		Description?: string;
		Distributor?: string;
		SupportDescription?: string;
		SupportEmail?: string;
		SupportUrl?: string;
		ProductType: CreateProductInputProductType;
		Tags?: Array<Tag>;

		/**Information about a provisioning artifact (also known as a version) for a product. */
		ProvisioningArtifactParameters: ProvisioningArtifactProperties;
		IdempotencyToken: string;
	}

	export enum CreateProductInputProductType { CLOUD_FORMATION_TEMPLATE = 0, MARKETPLACE = 1 }

	export interface CreateProvisionedProductPlanOutput {
		PlanName?: string;
		PlanId?: string;
		ProvisionProductId?: string;
		ProvisionedProductName?: string;
		ProvisioningArtifactId?: string;
	}

	export interface CreateProvisionedProductPlanInput {
		AcceptLanguage?: string;
		PlanName: string;
		PlanType: CreateProvisionedProductPlanInputPlanType;
		NotificationArns?: Array<NotificationArn>;
		PathId?: string;
		ProductId: string;
		ProvisionedProductName: string;
		ProvisioningArtifactId: string;
		ProvisioningParameters?: Array<UpdateProvisioningParameter>;
		IdempotencyToken: string;
		Tags?: Array<Tag>;
	}

	export enum CreateProvisionedProductPlanInputPlanType { CLOUDFORMATION = 0 }

	export interface CreateProvisioningArtifactOutput {

		/**Information about a provisioning artifact (also known as a version) for a product. */
		ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
		Info?: ProvisioningArtifactInfo;
		Status?: CreateProvisioningArtifactOutputStatus;
	}

	export enum CreateProvisioningArtifactOutputStatus { AVAILABLE = 0, CREATING = 1, FAILED = 2 }

	export interface CreateProvisioningArtifactInput {
		AcceptLanguage?: string;
		ProductId: string;

		/**Information about a provisioning artifact (also known as a version) for a product. */
		Parameters: ProvisioningArtifactProperties;
		IdempotencyToken: string;
	}

	export interface CreateServiceActionOutput {

		/**An object containing detailed information about the self-service action. */
		ServiceActionDetail?: ServiceActionDetail;
	}

	export interface CreateServiceActionInput {
		Name: string;
		DefinitionType: CreateServiceActionInputDefinitionType;
		Definition: ServiceActionDefinitionMap;
		Description?: string;
		AcceptLanguage?: string;
		IdempotencyToken: string;
	}

	export enum CreateServiceActionInputDefinitionType { SSM_AUTOMATION = 0 }

	export interface CreateTagOptionOutput {

		/**Information about a TagOption. */
		TagOptionDetail?: TagOptionDetail;
	}

	export interface CreateTagOptionInput {
		Key: string;
		Value: string;
	}

	export interface DeleteConstraintInput {
		AcceptLanguage?: string;
		Id: string;
	}

	export interface DeletePortfolioInput {
		AcceptLanguage?: string;
		Id: string;
	}

	export interface DeletePortfolioShareOutput {
		PortfolioShareToken?: string;
	}

	export interface DeletePortfolioShareInput {
		AcceptLanguage?: string;
		PortfolioId: string;
		AccountId?: string;

		/**Information about the organization node. */
		OrganizationNode?: OrganizationNode;
	}

	export interface DeleteProductInput {
		AcceptLanguage?: string;
		Id: string;
	}

	export interface DeleteProvisionedProductPlanInput {
		AcceptLanguage?: string;
		PlanId: string;
		IgnoreErrors?: boolean;
	}

	export interface DeleteProvisioningArtifactInput {
		AcceptLanguage?: string;
		ProductId: string;
		ProvisioningArtifactId: string;
	}

	export interface DeleteServiceActionInput {
		Id: string;
		AcceptLanguage?: string;
	}

	export interface DeleteTagOptionInput {
		Id: string;
	}

	export interface DescribeConstraintOutput {

		/**Information about a constraint. */
		ConstraintDetail?: ConstraintDetail;
		ConstraintParameters?: string;
		Status?: DescribeConstraintOutputStatus;
	}

	export enum DescribeConstraintOutputStatus { AVAILABLE = 0, CREATING = 1, FAILED = 2 }

	export interface DescribeConstraintInput {
		AcceptLanguage?: string;
		Id: string;
	}

	export interface DescribeCopyProductStatusOutput {
		CopyProductStatus?: DescribeCopyProductStatusOutputCopyProductStatus;
		TargetProductId?: string;
		StatusDetail?: string;
	}

	export enum DescribeCopyProductStatusOutputCopyProductStatus { SUCCEEDED = 0, IN_PROGRESS = 1, FAILED = 2 }

	export interface DescribeCopyProductStatusInput {
		AcceptLanguage?: string;
		CopyProductToken: string;
	}

	export interface DescribePortfolioOutput {

		/**Information about a portfolio. */
		PortfolioDetail?: PortfolioDetail;
		Tags?: Array<Tag>;
		TagOptions?: Array<TagOptionDetail>;
		Budgets?: Array<BudgetDetail>;
	}

	export interface DescribePortfolioInput {
		AcceptLanguage?: string;
		Id: string;
	}

	export interface DescribePortfolioShareStatusOutput {
		PortfolioShareToken?: string;
		PortfolioId?: string;
		OrganizationNodeValue?: string;
		Status?: DescribePortfolioShareStatusOutputStatus;

		/**Information about the portfolio share operation. */
		ShareDetails?: ShareDetails;
	}

	export enum DescribePortfolioShareStatusOutputStatus { NOT_STARTED = 0, IN_PROGRESS = 1, COMPLETED = 2, COMPLETED_WITH_ERRORS = 3, ERROR = 4 }

	export interface DescribePortfolioShareStatusInput {
		PortfolioShareToken: string;
	}

	export interface DescribeProductOutput {

		/**Summary information about a product view. */
		ProductViewSummary?: ProductViewSummary;
		ProvisioningArtifacts?: Array<ProvisioningArtifact>;
		Budgets?: Array<BudgetDetail>;
		LaunchPaths?: Array<LaunchPath>;
	}

	export interface DescribeProductInput {
		AcceptLanguage?: string;
		Id?: string;
		Name?: string;
	}

	export interface DescribeProductAsAdminOutput {

		/**Information about a product view. */
		ProductViewDetail?: ProductViewDetail;
		ProvisioningArtifactSummaries?: Array<ProvisioningArtifactSummary>;
		Tags?: Array<Tag>;
		TagOptions?: Array<TagOptionDetail>;
		Budgets?: Array<BudgetDetail>;
	}

	export interface DescribeProductAsAdminInput {
		AcceptLanguage?: string;
		Id?: string;
		Name?: string;
	}

	export interface DescribeProductViewOutput {

		/**Summary information about a product view. */
		ProductViewSummary?: ProductViewSummary;
		ProvisioningArtifacts?: Array<ProvisioningArtifact>;
	}

	export interface DescribeProductViewInput {
		AcceptLanguage?: string;
		Id: string;
	}

	export interface DescribeProvisionedProductOutput {

		/**Information about a provisioned product. */
		ProvisionedProductDetail?: ProvisionedProductDetail;
		CloudWatchDashboards?: Array<CloudWatchDashboard>;
	}

	export interface DescribeProvisionedProductInput {
		AcceptLanguage?: string;
		Id: string;
	}

	export interface DescribeProvisionedProductPlanOutput {

		/**Information about a plan. */
		ProvisionedProductPlanDetails?: ProvisionedProductPlanDetails;
		ResourceChanges?: Array<ResourceChange>;
		NextPageToken?: string;
	}

	export interface DescribeProvisionedProductPlanInput {
		AcceptLanguage?: string;
		PlanId: string;
		PageSize?: number;
		PageToken?: string;
	}

	export interface DescribeProvisioningArtifactOutput {

		/**Information about a provisioning artifact (also known as a version) for a product. */
		ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
		Info?: ProvisioningArtifactInfo;
		Status?: DescribeProvisioningArtifactOutputStatus;
	}

	export enum DescribeProvisioningArtifactOutputStatus { AVAILABLE = 0, CREATING = 1, FAILED = 2 }

	export interface DescribeProvisioningArtifactInput {
		AcceptLanguage?: string;
		ProvisioningArtifactId?: string;
		ProductId?: string;
		ProvisioningArtifactName?: string;
		ProductName?: string;
		Verbose?: boolean;
	}

	export interface DescribeProvisioningParametersOutput {
		ProvisioningArtifactParameters?: Array<ProvisioningArtifactParameter>;
		ConstraintSummaries?: Array<ConstraintSummary>;
		UsageInstructions?: Array<UsageInstruction>;
		TagOptions?: Array<TagOptionSummary>;

		/**<p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
		ProvisioningArtifactPreferences?: ProvisioningArtifactPreferences;
	}

	export interface DescribeProvisioningParametersInput {
		AcceptLanguage?: string;
		ProductId: string;
		ProvisioningArtifactId: string;
		PathId?: string;
	}

	export interface DescribeRecordOutput {

		/**Information about a request operation. */
		RecordDetail?: RecordDetail;
		RecordOutputs?: Array<RecordOutput>;
		NextPageToken?: string;
	}

	export interface DescribeRecordInput {
		AcceptLanguage?: string;
		Id: string;
		PageToken?: string;
		PageSize?: number;
	}

	export interface DescribeServiceActionOutput {

		/**An object containing detailed information about the self-service action. */
		ServiceActionDetail?: ServiceActionDetail;
	}

	export interface DescribeServiceActionInput {
		Id: string;
		AcceptLanguage?: string;
	}

	export interface DescribeServiceActionExecutionParametersOutput {
		ServiceActionParameters?: Array<ExecutionParameter>;
	}

	export interface DescribeServiceActionExecutionParametersInput {
		ProvisionedProductId: string;
		ServiceActionId: string;
		AcceptLanguage?: string;
	}

	export interface DescribeTagOptionOutput {

		/**Information about a TagOption. */
		TagOptionDetail?: TagOptionDetail;
	}

	export interface DescribeTagOptionInput {
		Id: string;
	}

	export interface DisassociateBudgetFromResourceInput {
		BudgetName: string;
		ResourceId: string;
	}

	export interface DisassociatePrincipalFromPortfolioInput {
		AcceptLanguage?: string;
		PortfolioId: string;
		PrincipalARN: string;
	}

	export interface DisassociateProductFromPortfolioInput {
		AcceptLanguage?: string;
		ProductId: string;
		PortfolioId: string;
	}

	export interface DisassociateServiceActionFromProvisioningArtifactInput {
		ProductId: string;
		ProvisioningArtifactId: string;
		ServiceActionId: string;
		AcceptLanguage?: string;
	}

	export interface DisassociateTagOptionFromResourceInput {
		ResourceId: string;
		TagOptionId: string;
	}

	export interface ExecuteProvisionedProductPlanOutput {

		/**Information about a request operation. */
		RecordDetail?: RecordDetail;
	}

	export interface ExecuteProvisionedProductPlanInput {
		AcceptLanguage?: string;
		PlanId: string;
		IdempotencyToken: string;
	}

	export interface ExecuteProvisionedProductServiceActionOutput {

		/**Information about a request operation. */
		RecordDetail?: RecordDetail;
	}

	export interface ExecuteProvisionedProductServiceActionInput {
		ProvisionedProductId: string;
		ServiceActionId: string;
		ExecuteToken: string;
		AcceptLanguage?: string;
		Parameters?: ExecutionParameterMap;
	}

	export interface GetAWSOrganizationsAccessStatusOutput {
		AccessStatus?: GetAWSOrganizationsAccessStatusOutputAccessStatus;
	}

	export enum GetAWSOrganizationsAccessStatusOutputAccessStatus { ENABLED = 0, UNDER_CHANGE = 1, DISABLED = 2 }

	export interface ListAcceptedPortfolioSharesOutput {
		PortfolioDetails?: Array<PortfolioDetail>;
		NextPageToken?: string;
	}

	export interface ListAcceptedPortfolioSharesInput {
		AcceptLanguage?: string;
		PageToken?: string;
		PageSize?: number;
		PortfolioShareType?: ListAcceptedPortfolioSharesInputPortfolioShareType;
	}

	export enum ListAcceptedPortfolioSharesInputPortfolioShareType { IMPORTED = 0, AWS_SERVICECATALOG = 1, AWS_ORGANIZATIONS = 2 }

	export interface ListBudgetsForResourceOutput {
		Budgets?: Array<BudgetDetail>;
		NextPageToken?: string;
	}

	export interface ListBudgetsForResourceInput {
		AcceptLanguage?: string;
		ResourceId: string;
		PageSize?: number;
		PageToken?: string;
	}

	export interface ListConstraintsForPortfolioOutput {
		ConstraintDetails?: Array<ConstraintDetail>;
		NextPageToken?: string;
	}

	export interface ListConstraintsForPortfolioInput {
		AcceptLanguage?: string;
		PortfolioId: string;
		ProductId?: string;
		PageSize?: number;
		PageToken?: string;
	}

	export interface ListLaunchPathsOutput {
		LaunchPathSummaries?: Array<LaunchPathSummary>;
		NextPageToken?: string;
	}

	export interface ListLaunchPathsInput {
		AcceptLanguage?: string;
		ProductId: string;
		PageSize?: number;
		PageToken?: string;
	}

	export interface ListOrganizationPortfolioAccessOutput {
		OrganizationNodes?: Array<OrganizationNode>;
		NextPageToken?: string;
	}

	export interface ListOrganizationPortfolioAccessInput {
		AcceptLanguage?: string;
		PortfolioId: string;
		OrganizationNodeType: ListOrganizationPortfolioAccessInputOrganizationNodeType;
		PageToken?: string;
		PageSize?: number;
	}

	export enum ListOrganizationPortfolioAccessInputOrganizationNodeType { ORGANIZATION = 0, ORGANIZATIONAL_UNIT = 1, ACCOUNT = 2 }

	export interface ListPortfolioAccessOutput {
		AccountIds?: Array<AccountId>;
		NextPageToken?: string;
	}

	export interface ListPortfolioAccessInput {
		AcceptLanguage?: string;
		PortfolioId: string;
		OrganizationParentId?: string;
		PageToken?: string;
		PageSize?: number;
	}

	export interface ListPortfoliosOutput {
		PortfolioDetails?: Array<PortfolioDetail>;
		NextPageToken?: string;
	}

	export interface ListPortfoliosInput {
		AcceptLanguage?: string;
		PageToken?: string;
		PageSize?: number;
	}

	export interface ListPortfoliosForProductOutput {
		PortfolioDetails?: Array<PortfolioDetail>;
		NextPageToken?: string;
	}

	export interface ListPortfoliosForProductInput {
		AcceptLanguage?: string;
		ProductId: string;
		PageToken?: string;
		PageSize?: number;
	}

	export interface ListPrincipalsForPortfolioOutput {
		Principals?: Array<Principal>;
		NextPageToken?: string;
	}

	export interface ListPrincipalsForPortfolioInput {
		AcceptLanguage?: string;
		PortfolioId: string;
		PageSize?: number;
		PageToken?: string;
	}

	export interface ListProvisionedProductPlansOutput {
		ProvisionedProductPlans?: Array<ProvisionedProductPlanSummary>;
		NextPageToken?: string;
	}

	export interface ListProvisionedProductPlansInput {
		AcceptLanguage?: string;
		ProvisionProductId?: string;
		PageSize?: number;
		PageToken?: string;

		/**The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter;
	}

	export interface ListProvisioningArtifactsOutput {
		ProvisioningArtifactDetails?: Array<ProvisioningArtifactDetail>;
		NextPageToken?: string;
	}

	export interface ListProvisioningArtifactsInput {
		AcceptLanguage?: string;
		ProductId: string;
	}

	export interface ListProvisioningArtifactsForServiceActionOutput {
		ProvisioningArtifactViews?: Array<ProvisioningArtifactView>;
		NextPageToken?: string;
	}

	export interface ListProvisioningArtifactsForServiceActionInput {
		ServiceActionId: string;
		PageSize?: number;
		PageToken?: string;
		AcceptLanguage?: string;
	}

	export interface ListRecordHistoryOutput {
		RecordDetails?: Array<RecordDetail>;
		NextPageToken?: string;
	}

	export interface ListRecordHistoryInput {
		AcceptLanguage?: string;

		/**The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter;

		/**The search filter to use when listing history records. */
		SearchFilter?: ListRecordHistorySearchFilter;
		PageSize?: number;
		PageToken?: string;
	}

	export interface ListResourcesForTagOptionOutput {
		ResourceDetails?: Array<ResourceDetail>;
		PageToken?: string;
	}

	export interface ListResourcesForTagOptionInput {
		TagOptionId: string;
		ResourceType?: string;
		PageSize?: number;
		PageToken?: string;
	}

	export interface ListServiceActionsOutput {
		ServiceActionSummaries?: Array<ServiceActionSummary>;
		NextPageToken?: string;
	}

	export interface ListServiceActionsInput {
		AcceptLanguage?: string;
		PageSize?: number;
		PageToken?: string;
	}

	export interface ListServiceActionsForProvisioningArtifactOutput {
		ServiceActionSummaries?: Array<ServiceActionSummary>;
		NextPageToken?: string;
	}

	export interface ListServiceActionsForProvisioningArtifactInput {
		ProductId: string;
		ProvisioningArtifactId: string;
		PageSize?: number;
		PageToken?: string;
		AcceptLanguage?: string;
	}

	export interface ListStackInstancesForProvisionedProductOutput {
		StackInstances?: Array<StackInstance>;
		NextPageToken?: string;
	}

	export interface ListStackInstancesForProvisionedProductInput {
		AcceptLanguage?: string;
		ProvisionedProductId: string;
		PageToken?: string;
		PageSize?: number;
	}

	export interface ListTagOptionsOutput {
		TagOptionDetails?: Array<TagOptionDetail>;
		PageToken?: string;
	}

	export interface ListTagOptionsInput {

		/**Filters to use when listing TagOptions. */
		Filters?: ListTagOptionsFilters;
		PageSize?: number;
		PageToken?: string;
	}

	export interface ProvisionProductOutput {

		/**Information about a request operation. */
		RecordDetail?: RecordDetail;
	}

	export interface ProvisionProductInput {
		AcceptLanguage?: string;
		ProductId: string;
		ProvisioningArtifactId: string;
		PathId?: string;
		ProvisionedProductName: string;
		ProvisioningParameters?: Array<ProvisioningParameter>;

		/**The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
		ProvisioningPreferences?: ProvisioningPreferences;
		Tags?: Array<Tag>;
		NotificationArns?: Array<NotificationArn>;
		ProvisionToken: string;
	}

	export interface RejectPortfolioShareInput {
		AcceptLanguage?: string;
		PortfolioId: string;
		PortfolioShareType?: RejectPortfolioShareInputPortfolioShareType;
	}

	export enum RejectPortfolioShareInputPortfolioShareType { IMPORTED = 0, AWS_SERVICECATALOG = 1, AWS_ORGANIZATIONS = 2 }

	export interface ScanProvisionedProductsOutput {
		ProvisionedProducts?: Array<ProvisionedProductDetail>;
		NextPageToken?: string;
	}

	export interface ScanProvisionedProductsInput {
		AcceptLanguage?: string;

		/**The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter;
		PageSize?: number;
		PageToken?: string;
	}

	export interface SearchProductsOutput {
		ProductViewSummaries?: Array<ProductViewSummary>;
		ProductViewAggregations?: ProductViewAggregations;
		NextPageToken?: string;
	}

	export interface SearchProductsInput {
		AcceptLanguage?: string;
		Filters?: ProductViewFilters;
		PageSize?: number;
		SortBy?: SearchProductsInputSortBy;
		SortOrder?: SearchProductsInputSortOrder;
		PageToken?: string;
	}

	export enum SearchProductsInputSortBy { Title = 0, VersionCount = 1, CreationDate = 2 }

	export enum SearchProductsInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface SearchProductsAsAdminOutput {
		ProductViewDetails?: Array<ProductViewDetail>;
		NextPageToken?: string;
	}

	export interface SearchProductsAsAdminInput {
		AcceptLanguage?: string;
		PortfolioId?: string;
		Filters?: ProductViewFilters;
		SortBy?: SearchProductsAsAdminInputSortBy;
		SortOrder?: SearchProductsAsAdminInputSortOrder;
		PageToken?: string;
		PageSize?: number;
		ProductSource?: SearchProductsAsAdminInputProductSource;
	}

	export enum SearchProductsAsAdminInputSortBy { Title = 0, VersionCount = 1, CreationDate = 2 }

	export enum SearchProductsAsAdminInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export enum SearchProductsAsAdminInputProductSource { ACCOUNT = 0 }

	export interface SearchProvisionedProductsOutput {
		ProvisionedProducts?: Array<ProvisionedProductAttribute>;
		TotalResultsCount?: number;
		NextPageToken?: string;
	}

	export interface SearchProvisionedProductsInput {
		AcceptLanguage?: string;

		/**The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter;
		Filters?: ProvisionedProductFilters;
		SortBy?: string;
		SortOrder?: SearchProvisionedProductsInputSortOrder;
		PageSize?: number;
		PageToken?: string;
	}

	export enum SearchProvisionedProductsInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface TerminateProvisionedProductOutput {

		/**Information about a request operation. */
		RecordDetail?: RecordDetail;
	}

	export interface TerminateProvisionedProductInput {
		ProvisionedProductName?: string;
		ProvisionedProductId?: string;
		TerminateToken: string;
		IgnoreErrors?: boolean;
		AcceptLanguage?: string;
	}

	export interface UpdateConstraintOutput {

		/**Information about a constraint. */
		ConstraintDetail?: ConstraintDetail;
		ConstraintParameters?: string;
		Status?: UpdateConstraintOutputStatus;
	}

	export enum UpdateConstraintOutputStatus { AVAILABLE = 0, CREATING = 1, FAILED = 2 }

	export interface UpdateConstraintInput {
		AcceptLanguage?: string;
		Id: string;
		Description?: string;
		Parameters?: string;
	}

	export interface UpdatePortfolioOutput {

		/**Information about a portfolio. */
		PortfolioDetail?: PortfolioDetail;
		Tags?: Array<Tag>;
	}

	export interface UpdatePortfolioInput {
		AcceptLanguage?: string;
		Id: string;
		DisplayName?: string;
		Description?: string;
		ProviderName?: string;
		AddTags?: Array<Tag>;
		RemoveTags?: Array<TagKey>;
	}

	export interface UpdateProductOutput {

		/**Information about a product view. */
		ProductViewDetail?: ProductViewDetail;
		Tags?: Array<Tag>;
	}

	export interface UpdateProductInput {
		AcceptLanguage?: string;
		Id: string;
		Name?: string;
		Owner?: string;
		Description?: string;
		Distributor?: string;
		SupportDescription?: string;
		SupportEmail?: string;
		SupportUrl?: string;
		AddTags?: Array<Tag>;
		RemoveTags?: Array<TagKey>;
	}

	export interface UpdateProvisionedProductOutput {

		/**Information about a request operation. */
		RecordDetail?: RecordDetail;
	}

	export interface UpdateProvisionedProductInput {
		AcceptLanguage?: string;
		ProvisionedProductName?: string;
		ProvisionedProductId?: string;
		ProductId?: string;
		ProvisioningArtifactId?: string;
		PathId?: string;
		ProvisioningParameters?: Array<UpdateProvisioningParameter>;

		/**The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
		ProvisioningPreferences?: UpdateProvisioningPreferences;
		Tags?: Array<Tag>;
		UpdateToken: string;
	}

	export interface UpdateProvisionedProductPropertiesOutput {
		ProvisionedProductId?: string;
		ProvisionedProductProperties?: ProvisionedProductProperties;
		RecordId?: string;
		Status?: UpdateProvisionedProductPropertiesOutputStatus;
	}

	export enum UpdateProvisionedProductPropertiesOutputStatus { CREATED = 0, IN_PROGRESS = 1, IN_PROGRESS_IN_ERROR = 2, SUCCEEDED = 3, FAILED = 4 }

	export interface UpdateProvisionedProductPropertiesInput {
		AcceptLanguage?: string;
		ProvisionedProductId: string;
		ProvisionedProductProperties: ProvisionedProductProperties;
		IdempotencyToken: string;
	}

	export interface UpdateProvisioningArtifactOutput {

		/**Information about a provisioning artifact (also known as a version) for a product. */
		ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
		Info?: ProvisioningArtifactInfo;
		Status?: UpdateProvisioningArtifactOutputStatus;
	}

	export enum UpdateProvisioningArtifactOutputStatus { AVAILABLE = 0, CREATING = 1, FAILED = 2 }

	export interface UpdateProvisioningArtifactInput {
		AcceptLanguage?: string;
		ProductId: string;
		ProvisioningArtifactId: string;
		Name?: string;
		Description?: string;
		Active?: boolean;
		Guidance?: UpdateProvisioningArtifactInputGuidance;
	}

	export enum UpdateProvisioningArtifactInputGuidance { DEFAULT = 0, DEPRECATED = 1 }

	export interface UpdateServiceActionOutput {

		/**An object containing detailed information about the self-service action. */
		ServiceActionDetail?: ServiceActionDetail;
	}

	export interface UpdateServiceActionInput {
		Id: string;
		Name?: string;
		Definition?: ServiceActionDefinitionMap;
		Description?: string;
		AcceptLanguage?: string;
	}

	export interface UpdateTagOptionOutput {

		/**Information about a TagOption. */
		TagOptionDetail?: TagOptionDetail;
	}

	export interface UpdateTagOptionInput {
		Id: string;
		Value?: string;
		Active?: boolean;
	}

	export enum PortfolioShareType { IMPORTED = 0, AWS_SERVICECATALOG = 1, AWS_ORGANIZATIONS = 2 }

	export enum AccessLevelFilterKey { Account = 0, Role = 1, User = 2 }


	/**The access level to use to filter results. */
	export interface AccessLevelFilter {
		Key?: AccessLevelFilterKey;
		Value?: string;
	}

	export enum AccessLevelFilterKey { Account = 0, Role = 1, User = 2 }

	export enum AccessStatus { ENABLED = 0, UNDER_CHANGE = 1, DISABLED = 2 }


	/**Information about a tag. A tag is a key-value pair. Tags are propagated to the resources created when provisioning a product. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export enum PrincipalType { IAM = 0 }


	/**Information about a budget. */
	export interface BudgetDetail {
		BudgetName?: string;
	}

	export enum ChangeAction { ADD = 0, MODIFY = 1, REMOVE = 2 }


	/**Information about a CloudWatch dashboard. */
	export interface CloudWatchDashboard {
		Name?: string;
	}


	/**Information about a constraint. */
	export interface ConstraintDetail {
		ConstraintId?: string;
		Type?: string;
		Description?: string;
		Owner?: string;
		ProductId?: string;
		PortfolioId?: string;
	}


	/**Summary information about a constraint. */
	export interface ConstraintSummary {
		Type?: string;
		Description?: string;
	}

	export enum CopyOption { CopyTags = 0 }

	export enum CopyProductStatus { SUCCEEDED = 0, IN_PROGRESS = 1, FAILED = 2 }

	export enum Status { AVAILABLE = 0, CREATING = 1, FAILED = 2 }


	/**Information about a portfolio. */
	export interface PortfolioDetail {
		Id?: string;
		ARN?: string;
		DisplayName?: string;
		Description?: string;
		CreatedTime?: Date;
		ProviderName?: string;
	}


	/**Information about the organization node. */
	export interface OrganizationNode {
		Type?: OrganizationNodeType;
		Value?: string;
	}

	export enum OrganizationNodeType { ORGANIZATION = 0, ORGANIZATIONAL_UNIT = 1, ACCOUNT = 2 }

	export enum ProductType { CLOUD_FORMATION_TEMPLATE = 0, MARKETPLACE = 1 }


	/**Information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactProperties {
		Name?: string;
		Description?: string;
		Info: ProvisioningArtifactInfo;
		Type?: ProvisioningArtifactPropertiesType;
		DisableTemplateValidation?: boolean;
	}

	export enum ProvisioningArtifactPropertiesType { CLOUD_FORMATION_TEMPLATE = 0, MARKETPLACE_AMI = 1, MARKETPLACE_CAR = 2 }


	/**Information about a product view. */
	export interface ProductViewDetail {

		/**Summary information about a product view. */
		ProductViewSummary?: ProductViewSummary;
		Status?: ProductViewDetailStatus;
		ProductARN?: string;
		CreatedTime?: Date;
	}

	export enum ProductViewDetailStatus { AVAILABLE = 0, CREATING = 1, FAILED = 2 }


	/**Information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactDetail {
		Id?: string;
		Name?: string;
		Description?: string;
		Type?: ProvisioningArtifactDetailType;
		CreatedTime?: Date;
		Active?: boolean;
		Guidance?: ProvisioningArtifactDetailGuidance;
	}

	export enum ProvisioningArtifactDetailType { CLOUD_FORMATION_TEMPLATE = 0, MARKETPLACE_AMI = 1, MARKETPLACE_CAR = 2 }

	export enum ProvisioningArtifactDetailGuidance { DEFAULT = 0, DEPRECATED = 1 }

	export enum ProvisionedProductPlanType { CLOUDFORMATION = 0 }

	export enum ServiceActionDefinitionType { SSM_AUTOMATION = 0 }


	/**An object containing detailed information about the self-service action. */
	export interface ServiceActionDetail {

		/**Detailed information about the self-service action. */
		ServiceActionSummary?: ServiceActionSummary;
		Definition?: ServiceActionDefinitionMap;
	}


	/**Information about a TagOption. */
	export interface TagOptionDetail {
		Key?: string;
		Value?: string;
		Active?: boolean;
		Id?: string;
	}

	export enum ShareStatus { NOT_STARTED = 0, IN_PROGRESS = 1, COMPLETED = 2, COMPLETED_WITH_ERRORS = 3, ERROR = 4 }


	/**Information about the portfolio share operation. */
	export interface ShareDetails {
		SuccessfulShares?: Array<AccountId>;
		ShareErrors?: Array<ShareError>;
	}


	/**Summary information about a product view. */
	export interface ProductViewSummary {
		Id?: string;
		ProductId?: string;
		Name?: string;
		Owner?: string;
		ShortDescription?: string;
		Type?: ProductViewSummaryType;
		Distributor?: string;
		HasDefaultPath?: boolean;
		SupportEmail?: string;
		SupportDescription?: string;
		SupportUrl?: string;
	}

	export enum ProductViewSummaryType { CLOUD_FORMATION_TEMPLATE = 0, MARKETPLACE = 1 }


	/**Information about a provisioned product. */
	export interface ProvisionedProductDetail {
		Name?: string;
		Arn?: string;
		Type?: string;
		Id?: string;
		Status?: ProvisionedProductDetailStatus;
		StatusMessage?: string;
		CreatedTime?: Date;
		IdempotencyToken?: string;
		LastRecordId?: string;
		ProductId?: string;
		ProvisioningArtifactId?: string;
	}

	export enum ProvisionedProductDetailStatus { AVAILABLE = 0, UNDER_CHANGE = 1, TAINTED = 2, ERROR = 3, PLAN_IN_PROGRESS = 4 }


	/**Information about a plan. */
	export interface ProvisionedProductPlanDetails {
		CreatedTime?: Date;
		PathId?: string;
		ProductId?: string;
		PlanName?: string;
		PlanId?: string;
		ProvisionProductId?: string;
		ProvisionProductName?: string;
		PlanType?: ProvisionedProductPlanDetailsPlanType;
		ProvisioningArtifactId?: string;
		Status?: ProvisionedProductPlanDetailsStatus;
		UpdatedTime?: Date;
		NotificationArns?: Array<NotificationArn>;
		ProvisioningParameters?: Array<UpdateProvisioningParameter>;
		Tags?: Array<Tag>;
		StatusMessage?: string;
	}

	export enum ProvisionedProductPlanDetailsPlanType { CLOUDFORMATION = 0 }

	export enum ProvisionedProductPlanDetailsStatus { CREATE_IN_PROGRESS = 0, CREATE_SUCCESS = 1, CREATE_FAILED = 2, EXECUTE_IN_PROGRESS = 3, EXECUTE_SUCCESS = 4, EXECUTE_FAILED = 5 }


	/**<p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
	export interface ProvisioningArtifactPreferences {
		StackSetAccounts?: Array<AccountId>;
		StackSetRegions?: Array<Region>;
	}


	/**Information about a request operation. */
	export interface RecordDetail {
		RecordId?: string;
		ProvisionedProductName?: string;
		Status?: RecordDetailStatus;
		CreatedTime?: Date;
		UpdatedTime?: Date;
		ProvisionedProductType?: string;
		RecordType?: string;
		ProvisionedProductId?: string;
		ProductId?: string;
		ProvisioningArtifactId?: string;
		PathId?: string;
		RecordErrors?: Array<RecordError>;
		RecordTags?: Array<RecordTag>;
	}

	export enum RecordDetailStatus { CREATED = 0, IN_PROGRESS = 1, IN_PROGRESS_IN_ERROR = 2, SUCCEEDED = 3, FAILED = 4 }

	export enum EvaluationType { STATIC = 0, DYNAMIC = 1 }


	/**Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product. */
	export interface ExecutionParameter {
		Name?: string;
		Type?: string;
		DefaultValues?: Array<ExecutionParameterValue>;
	}

	export enum ServiceActionAssociationErrorCode { DUPLICATE_RESOURCE = 0, INTERNAL_FAILURE = 1, LIMIT_EXCEEDED = 2, RESOURCE_NOT_FOUND = 3, THROTTLING = 4 }


	/**An object containing information about the error, along with identifying information about the self-service action and its associations. */
	export interface FailedServiceActionAssociation {
		ServiceActionId?: string;
		ProductId?: string;
		ProvisioningArtifactId?: string;
		ErrorCode?: FailedServiceActionAssociationErrorCode;
		ErrorMessage?: string;
	}

	export enum FailedServiceActionAssociationErrorCode { DUPLICATE_RESOURCE = 0, INTERNAL_FAILURE = 1, LIMIT_EXCEEDED = 2, RESOURCE_NOT_FOUND = 3, THROTTLING = 4 }


	/**A launch path object. */
	export interface LaunchPath {
		Id?: string;
		Name?: string;
	}


	/**Summary information about a product path for a user. */
	export interface LaunchPathSummary {
		Id?: string;
		ConstraintSummaries?: Array<ConstraintSummary>;
		Tags?: Array<Tag>;
		Name?: string;
	}

	export enum OrganizationNodeType { ORGANIZATION = 0, ORGANIZATIONAL_UNIT = 1, ACCOUNT = 2 }


	/**The search filter to use when listing history records. */
	export interface ListRecordHistorySearchFilter {
		Key?: string;
		Value?: string;
	}


	/**Filters to use when listing TagOptions. */
	export interface ListTagOptionsFilters {
		Key?: string;
		Value?: string;
		Active?: boolean;
	}


	/**The constraints that the administrator has put on the parameter. */
	export interface ParameterConstraints {
		AllowedValues?: Array<AllowedValue>;
	}


	/**Information about a principal. */
	export interface Principal {
		PrincipalARN?: string;
		PrincipalType?: PrincipalPrincipalType;
	}

	export enum PrincipalPrincipalType { IAM = 0 }

	export enum ProductSource { ACCOUNT = 0 }


	/**A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access. */
	export interface ProductViewAggregationValue {
		Value?: string;
		ApproximateCount?: number;
	}

	export enum ProductViewFilterBy { FullTextSearch = 0, Owner = 1, ProductType = 2, SourceProductId = 3 }

	export enum ProductViewSortBy { Title = 0, VersionCount = 1, CreationDate = 2 }

	export enum PropertyKey { OWNER = 0 }


	/**The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
	export interface ProvisioningPreferences {
		StackSetAccounts?: Array<AccountId>;
		StackSetRegions?: Array<Region>;
		StackSetFailureToleranceCount?: number;
		StackSetFailureTolerancePercentage?: number;
		StackSetMaxConcurrencyCount?: number;
		StackSetMaxConcurrencyPercentage?: number;
	}

	export enum ProvisionedProductStatus { AVAILABLE = 0, UNDER_CHANGE = 1, TAINTED = 2, ERROR = 3, PLAN_IN_PROGRESS = 4 }


	/**Information about a provisioned product. */
	export interface ProvisionedProductAttribute {
		Name?: string;
		Arn?: string;
		Type?: string;
		Id?: string;
		Status?: ProvisionedProductAttributeStatus;
		StatusMessage?: string;
		CreatedTime?: Date;
		IdempotencyToken?: string;
		LastRecordId?: string;
		Tags?: Array<Tag>;
		PhysicalId?: string;
		ProductId?: string;
		ProvisioningArtifactId?: string;
		UserArn?: string;
		UserArnSession?: string;
	}

	export enum ProvisionedProductAttributeStatus { AVAILABLE = 0, UNDER_CHANGE = 1, TAINTED = 2, ERROR = 3, PLAN_IN_PROGRESS = 4 }

	export enum ProvisionedProductPlanStatus { CREATE_IN_PROGRESS = 0, CREATE_SUCCESS = 1, CREATE_FAILED = 2, EXECUTE_IN_PROGRESS = 3, EXECUTE_SUCCESS = 4, EXECUTE_FAILED = 5 }


	/**Summary information about a plan. */
	export interface ProvisionedProductPlanSummary {
		PlanName?: string;
		PlanId?: string;
		ProvisionProductId?: string;
		ProvisionProductName?: string;
		PlanType?: ProvisionedProductPlanSummaryPlanType;
		ProvisioningArtifactId?: string;
	}

	export enum ProvisionedProductPlanSummaryPlanType { CLOUDFORMATION = 0 }

	export enum ProvisionedProductViewFilterBy { SearchQuery = 0 }

	export enum ProvisioningArtifactGuidance { DEFAULT = 0, DEPRECATED = 1 }


	/**Information about a provisioning artifact. A provisioning artifact is also known as a product version. */
	export interface ProvisioningArtifact {
		Id?: string;
		Name?: string;
		Description?: string;
		CreatedTime?: Date;
		Guidance?: ProvisioningArtifactGuidance;
	}

	export enum ProvisioningArtifactGuidance { DEFAULT = 0, DEPRECATED = 1 }

	export enum ProvisioningArtifactType { CLOUD_FORMATION_TEMPLATE = 0, MARKETPLACE_AMI = 1, MARKETPLACE_CAR = 2 }


	/**Information about a parameter used to provision a product. */
	export interface ProvisioningArtifactParameter {
		ParameterKey?: string;
		DefaultValue?: string;
		ParameterType?: string;
		IsNoEcho?: boolean;
		Description?: string;

		/**The constraints that the administrator has put on the parameter. */
		ParameterConstraints?: ParameterConstraints;
	}

	export enum ProvisioningArtifactPropertyName { Id = 0 }


	/**Summary information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactSummary {
		Id?: string;
		Name?: string;
		Description?: string;
		CreatedTime?: Date;
		ProvisioningArtifactMetadata?: ProvisioningArtifactInfo;
	}


	/**An object that contains summary information about a product view and a provisioning artifact. */
	export interface ProvisioningArtifactView {

		/**Summary information about a product view. */
		ProductViewSummary?: ProductViewSummary;

		/**Information about a provisioning artifact. A provisioning artifact is also known as a product version. */
		ProvisioningArtifact?: ProvisioningArtifact;
	}


	/**Information about a parameter used to provision a product. */
	export interface ProvisioningParameter {
		Key?: string;
		Value?: string;
	}

	export enum RecordStatus { CREATED = 0, IN_PROGRESS = 1, IN_PROGRESS_IN_ERROR = 2, SUCCEEDED = 3, FAILED = 4 }


	/**The error code and description resulting from an operation. */
	export interface RecordError {
		Code?: string;
		Description?: string;
	}


	/**The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL. */
	export interface RecordOutput {
		OutputKey?: string;
		OutputValue?: string;
		Description?: string;
	}


	/**Information about a tag, which is a key-value pair. */
	export interface RecordTag {
		Key?: string;
		Value?: string;
	}

	export enum Replacement { TRUE = 0, FALSE = 1, CONDITIONAL = 2 }

	export enum RequiresRecreation { NEVER = 0, CONDITIONALLY = 1, ALWAYS = 2 }

	export enum ResourceAttribute { PROPERTIES = 0, METADATA = 1, CREATIONPOLICY = 2, UPDATEPOLICY = 3, DELETIONPOLICY = 4, TAGS = 5 }


	/**Information about a resource change that will occur when a plan is executed. */
	export interface ResourceChange {
		Action?: ResourceChangeAction;
		LogicalResourceId?: string;
		PhysicalResourceId?: string;
		ResourceType?: string;
		Replacement?: ResourceChangeReplacement;
		Scope?: Array<ResourceAttribute>;
		Details?: Array<ResourceChangeDetail>;
	}

	export enum ResourceChangeAction { ADD = 0, MODIFY = 1, REMOVE = 2 }

	export enum ResourceChangeReplacement { TRUE = 0, FALSE = 1, CONDITIONAL = 2 }


	/**Information about a change to a resource attribute. */
	export interface ResourceTargetDefinition {
		Attribute?: ResourceTargetDefinitionAttribute;
		Name?: string;
		RequiresRecreation?: ResourceTargetDefinitionRequiresRecreation;
	}

	export enum ResourceTargetDefinitionAttribute { PROPERTIES = 0, METADATA = 1, CREATIONPOLICY = 2, UPDATEPOLICY = 3, DELETIONPOLICY = 4, TAGS = 5 }

	export enum ResourceTargetDefinitionRequiresRecreation { NEVER = 0, CONDITIONALLY = 1, ALWAYS = 2 }


	/**Information about a change to a resource attribute. */
	export interface ResourceChangeDetail {

		/**Information about a change to a resource attribute. */
		Target?: ResourceTargetDefinition;
		Evaluation?: ResourceChangeDetailEvaluation;
		CausingEntity?: string;
	}

	export enum ResourceChangeDetailEvaluation { STATIC = 0, DYNAMIC = 1 }


	/**Information about a resource. */
	export interface ResourceDetail {
		Id?: string;
		ARN?: string;
		Name?: string;
		Description?: string;
		CreatedTime?: Date;
	}

	export enum SortOrder { ASCENDING = 0, DESCENDING = 1 }


	/**A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID. */
	export interface ServiceActionAssociation {
		ServiceActionId: string;
		ProductId: string;
		ProvisioningArtifactId: string;
	}

	export enum ServiceActionDefinitionKey { Name = 0, Version = 1, AssumeRole = 2, Parameters = 3 }


	/**Detailed information about the self-service action. */
	export interface ServiceActionSummary {
		Id?: string;
		Name?: string;
		Description?: string;
		DefinitionType?: ServiceActionSummaryDefinitionType;
	}

	export enum ServiceActionSummaryDefinitionType { SSM_AUTOMATION = 0 }


	/**Errors that occurred during the portfolio share operation. */
	export interface ShareError {
		Accounts?: Array<AccountId>;
		Message?: string;
		Error?: string;
	}

	export enum StackInstanceStatus { CURRENT = 0, OUTDATED = 1, INOPERABLE = 2 }


	/**An AWS CloudFormation stack, in a specific account and region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status.  */
	export interface StackInstance {
		Account?: string;
		Region?: string;
		StackInstanceStatus?: StackInstanceStackInstanceStatus;
	}

	export enum StackInstanceStackInstanceStatus { CURRENT = 0, OUTDATED = 1, INOPERABLE = 2 }

	export enum StackSetOperationType { CREATE = 0, UPDATE = 1, DELETE = 2 }


	/**Summary information about a TagOption. */
	export interface TagOptionSummary {
		Key?: string;
		Values?: Array<TagOptionValue>;
	}


	/**The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
	export interface UpdateProvisioningPreferences {
		StackSetAccounts?: Array<AccountId>;
		StackSetRegions?: Array<Region>;
		StackSetFailureToleranceCount?: number;
		StackSetFailureTolerancePercentage?: number;
		StackSetMaxConcurrencyCount?: number;
		StackSetMaxConcurrencyPercentage?: number;
		StackSetOperationType?: UpdateProvisioningPreferencesStackSetOperationType;
	}

	export enum UpdateProvisioningPreferencesStackSetOperationType { CREATE = 0, UPDATE = 1, DELETE = 2 }


	/**The parameter key-value pair used to update a provisioned product. */
	export interface UpdateProvisioningParameter {
		Key?: string;
		Value?: string;
		UsePreviousValue?: boolean;
	}


	/**Additional information provided by the administrator. */
	export interface UsageInstruction {
		Type?: string;
		Value?: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Accepts an offer to share the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare
		 * @return {AcceptPortfolioShareOutput} Success
		 */
		AcceptPortfolioShare(requestBody: AcceptPortfolioShareInput, headersHandler?: () => HttpHeaders): Observable<AcceptPortfolioShareOutput> {
			return this.http.post<AcceptPortfolioShareOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Associates the specified budget with the specified resource.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource
		 * @return {AssociateBudgetWithResourceOutput} Success
		 */
		AssociateBudgetWithResource(requestBody: AssociateBudgetWithResourceInput, headersHandler?: () => HttpHeaders): Observable<AssociateBudgetWithResourceOutput> {
			return this.http.post<AssociateBudgetWithResourceOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Associates the specified principal ARN with the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio
		 * @return {AssociatePrincipalWithPortfolioOutput} Success
		 */
		AssociatePrincipalWithPortfolio(requestBody: AssociatePrincipalWithPortfolioInput, headersHandler?: () => HttpHeaders): Observable<AssociatePrincipalWithPortfolioOutput> {
			return this.http.post<AssociatePrincipalWithPortfolioOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Associates the specified product with the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio
		 * @return {AssociateProductWithPortfolioOutput} Success
		 */
		AssociateProductWithPortfolio(requestBody: AssociateProductWithPortfolioInput, headersHandler?: () => HttpHeaders): Observable<AssociateProductWithPortfolioOutput> {
			return this.http.post<AssociateProductWithPortfolioOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Associates a self-service action with a provisioning artifact.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact
		 * @return {AssociateServiceActionWithProvisioningArtifactOutput} Success
		 */
		AssociateServiceActionWithProvisioningArtifact(requestBody: AssociateServiceActionWithProvisioningArtifactInput, headersHandler?: () => HttpHeaders): Observable<AssociateServiceActionWithProvisioningArtifactOutput> {
			return this.http.post<AssociateServiceActionWithProvisioningArtifactOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Associate the specified TagOption with the specified portfolio or product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource
		 * @return {AssociateTagOptionWithResourceOutput} Success
		 */
		AssociateTagOptionWithResource(requestBody: AssociateTagOptionWithResourceInput, headersHandler?: () => HttpHeaders): Observable<AssociateTagOptionWithResourceOutput> {
			return this.http.post<AssociateTagOptionWithResourceOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Associates multiple self-service actions with provisioning artifacts.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact
		 * @return {BatchAssociateServiceActionWithProvisioningArtifactOutput} Success
		 */
		BatchAssociateServiceActionWithProvisioningArtifact(requestBody: BatchAssociateServiceActionWithProvisioningArtifactInput, headersHandler?: () => HttpHeaders): Observable<BatchAssociateServiceActionWithProvisioningArtifactOutput> {
			return this.http.post<BatchAssociateServiceActionWithProvisioningArtifactOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Disassociates a batch of self-service actions from the specified provisioning artifact.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact
		 * @return {BatchDisassociateServiceActionFromProvisioningArtifactOutput} Success
		 */
		BatchDisassociateServiceActionFromProvisioningArtifact(requestBody: BatchDisassociateServiceActionFromProvisioningArtifactInput, headersHandler?: () => HttpHeaders): Observable<BatchDisassociateServiceActionFromProvisioningArtifactOutput> {
			return this.http.post<BatchDisassociateServiceActionFromProvisioningArtifactOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same region or another region.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct
		 * @return {CopyProductOutput} Success
		 */
		CopyProduct(requestBody: CopyProductInput, headersHandler?: () => HttpHeaders): Observable<CopyProductOutput> {
			return this.http.post<CopyProductOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a constraint.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint
		 * @return {CreateConstraintOutput} Success
		 */
		CreateConstraint(requestBody: CreateConstraintInput, headersHandler?: () => HttpHeaders): Observable<CreateConstraintOutput> {
			return this.http.post<CreateConstraintOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio
		 * @return {CreatePortfolioOutput} Success
		 */
		CreatePortfolio(requestBody: CreatePortfolioInput, headersHandler?: () => HttpHeaders): Observable<CreatePortfolioOutput> {
			return this.http.post<CreatePortfolioOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the master account of an Organization. AWSOrganizationsAccess must be enabled in order to create a portfolio share to an organization node.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare
		 * @return {CreatePortfolioShareOutput} Success
		 */
		CreatePortfolioShare(requestBody: CreatePortfolioShareInput, headersHandler?: () => HttpHeaders): Observable<CreatePortfolioShareOutput> {
			return this.http.post<CreatePortfolioShareOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct
		 * @return {CreateProductOutput} Success
		 */
		CreateProduct(requestBody: CreateProductInput, headersHandler?: () => HttpHeaders): Observable<CreateProductOutput> {
			return this.http.post<CreateProductOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Creates a plan. A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan per provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILBLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan
		 * @return {CreateProvisionedProductPlanOutput} Success
		 */
		CreateProvisionedProductPlan(requestBody: CreateProvisionedProductPlanInput, headersHandler?: () => HttpHeaders): Observable<CreateProvisionedProductPlanOutput> {
			return this.http.post<CreateProvisionedProductPlanOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact
		 * @return {CreateProvisioningArtifactOutput} Success
		 */
		CreateProvisioningArtifact(requestBody: CreateProvisioningArtifactInput, headersHandler?: () => HttpHeaders): Observable<CreateProvisioningArtifactOutput> {
			return this.http.post<CreateProvisioningArtifactOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a self-service action.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction
		 * @return {CreateServiceActionOutput} Success
		 */
		CreateServiceAction(requestBody: CreateServiceActionInput, headersHandler?: () => HttpHeaders): Observable<CreateServiceActionOutput> {
			return this.http.post<CreateServiceActionOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a TagOption.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption
		 * @return {CreateTagOptionOutput} Success
		 */
		CreateTagOption(requestBody: CreateTagOptionInput, headersHandler?: () => HttpHeaders): Observable<CreateTagOptionOutput> {
			return this.http.post<CreateTagOptionOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes the specified constraint.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint
		 * @return {DeleteConstraintOutput} Success
		 */
		DeleteConstraint(requestBody: DeleteConstraintInput, headersHandler?: () => HttpHeaders): Observable<DeleteConstraintOutput> {
			return this.http.post<DeleteConstraintOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio
		 * @return {DeletePortfolioOutput} Success
		 */
		DeletePortfolio(requestBody: DeletePortfolioInput, headersHandler?: () => HttpHeaders): Observable<DeletePortfolioOutput> {
			return this.http.post<DeletePortfolioOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the master account of an Organization.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare
		 * @return {DeletePortfolioShareOutput} Success
		 */
		DeletePortfolioShare(requestBody: DeletePortfolioShareInput, headersHandler?: () => HttpHeaders): Observable<DeletePortfolioShareOutput> {
			return this.http.post<DeletePortfolioShareOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct
		 * @return {DeleteProductOutput} Success
		 */
		DeleteProduct(requestBody: DeleteProductInput, headersHandler?: () => HttpHeaders): Observable<DeleteProductOutput> {
			return this.http.post<DeleteProductOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes the specified plan.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan
		 * @return {DeleteProvisionedProductPlanOutput} Success
		 */
		DeleteProvisionedProductPlan(requestBody: DeleteProvisionedProductPlanInput, headersHandler?: () => HttpHeaders): Observable<DeleteProvisionedProductPlanOutput> {
			return this.http.post<DeleteProvisionedProductPlanOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact
		 * @return {DeleteProvisioningArtifactOutput} Success
		 */
		DeleteProvisioningArtifact(requestBody: DeleteProvisioningArtifactInput, headersHandler?: () => HttpHeaders): Observable<DeleteProvisioningArtifactOutput> {
			return this.http.post<DeleteProvisioningArtifactOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a self-service action.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction
		 * @return {DeleteServiceActionOutput} Success
		 */
		DeleteServiceAction(requestBody: DeleteServiceActionInput, headersHandler?: () => HttpHeaders): Observable<DeleteServiceActionOutput> {
			return this.http.post<DeleteServiceActionOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption
		 * @return {DeleteTagOptionOutput} Success
		 */
		DeleteTagOption(requestBody: DeleteTagOptionInput, headersHandler?: () => HttpHeaders): Observable<DeleteTagOptionOutput> {
			return this.http.post<DeleteTagOptionOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about the specified constraint.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint
		 * @return {DescribeConstraintOutput} Success
		 */
		DescribeConstraint(requestBody: DescribeConstraintInput, headersHandler?: () => HttpHeaders): Observable<DescribeConstraintOutput> {
			return this.http.post<DescribeConstraintOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets the status of the specified copy product operation.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus
		 * @return {DescribeCopyProductStatusOutput} Success
		 */
		DescribeCopyProductStatus(requestBody: DescribeCopyProductStatusInput, headersHandler?: () => HttpHeaders): Observable<DescribeCopyProductStatusOutput> {
			return this.http.post<DescribeCopyProductStatusOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio
		 * @return {DescribePortfolioOutput} Success
		 */
		DescribePortfolio(requestBody: DescribePortfolioInput, headersHandler?: () => HttpHeaders): Observable<DescribePortfolioOutput> {
			return this.http.post<DescribePortfolioOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets the status of the specified portfolio share operation. This API can only be called by the master account in the organization.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus
		 * @return {DescribePortfolioShareStatusOutput} Success
		 */
		DescribePortfolioShareStatus(requestBody: DescribePortfolioShareStatusInput, headersHandler?: () => HttpHeaders): Observable<DescribePortfolioShareStatusOutput> {
			return this.http.post<DescribePortfolioShareStatusOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about the specified product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct
		 * @return {DescribeProductOutput} Success
		 */
		DescribeProduct(requestBody: DescribeProductInput, headersHandler?: () => HttpHeaders): Observable<DescribeProductOutput> {
			return this.http.post<DescribeProductOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about the specified product. This operation is run with administrator access.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin
		 * @return {DescribeProductAsAdminOutput} Success
		 */
		DescribeProductAsAdmin(requestBody: DescribeProductAsAdminInput, headersHandler?: () => HttpHeaders): Observable<DescribeProductAsAdminOutput> {
			return this.http.post<DescribeProductAsAdminOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about the specified product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView
		 * @return {DescribeProductViewOutput} Success
		 */
		DescribeProductView(requestBody: DescribeProductViewInput, headersHandler?: () => HttpHeaders): Observable<DescribeProductViewOutput> {
			return this.http.post<DescribeProductViewOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about the specified provisioned product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct
		 * @return {DescribeProvisionedProductOutput} Success
		 */
		DescribeProvisionedProduct(requestBody: DescribeProvisionedProductInput, headersHandler?: () => HttpHeaders): Observable<DescribeProvisionedProductOutput> {
			return this.http.post<DescribeProvisionedProductOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about the resource changes for the specified plan.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan
		 * @return {DescribeProvisionedProductPlanOutput} Success
		 */
		DescribeProvisionedProductPlan(requestBody: DescribeProvisionedProductPlanInput, headersHandler?: () => HttpHeaders): Observable<DescribeProvisionedProductPlanOutput> {
			return this.http.post<DescribeProvisionedProductPlanOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about the specified provisioning artifact (also known as a version) for the specified product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact
		 * @return {DescribeProvisioningArtifactOutput} Success
		 */
		DescribeProvisioningArtifact(requestBody: DescribeProvisioningArtifactInput, headersHandler?: () => HttpHeaders): Observable<DescribeProvisioningArtifactOutput> {
			return this.http.post<DescribeProvisioningArtifactOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters
		 * @return {DescribeProvisioningParametersOutput} Success
		 */
		DescribeProvisioningParameters(requestBody: DescribeProvisioningParametersInput, headersHandler?: () => HttpHeaders): Observable<DescribeProvisioningParametersOutput> {
			return this.http.post<DescribeProvisioningParametersOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord
		 * @return {DescribeRecordOutput} Success
		 */
		DescribeRecord(requestBody: DescribeRecordInput, headersHandler?: () => HttpHeaders): Observable<DescribeRecordOutput> {
			return this.http.post<DescribeRecordOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Describes a self-service action.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction
		 * @return {DescribeServiceActionOutput} Success
		 */
		DescribeServiceAction(requestBody: DescribeServiceActionInput, headersHandler?: () => HttpHeaders): Observable<DescribeServiceActionOutput> {
			return this.http.post<DescribeServiceActionOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters
		 * @return {DescribeServiceActionExecutionParametersOutput} Success
		 */
		DescribeServiceActionExecutionParameters(requestBody: DescribeServiceActionExecutionParametersInput, headersHandler?: () => HttpHeaders): Observable<DescribeServiceActionExecutionParametersOutput> {
			return this.http.post<DescribeServiceActionExecutionParametersOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about the specified TagOption.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption
		 * @return {DescribeTagOptionOutput} Success
		 */
		DescribeTagOption(requestBody: DescribeTagOptionInput, headersHandler?: () => HttpHeaders): Observable<DescribeTagOptionOutput> {
			return this.http.post<DescribeTagOptionOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Disable portfolio sharing through AWS Organizations feature. This feature will not delete your current shares but it will prevent you from creating new shares throughout your organization. Current shares will not be in sync with your organization structure if it changes after calling this API. This API can only be called by the master account in the organization.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess
		 * @return {DisableAWSOrganizationsAccessOutput} Success
		 */
		DisableAWSOrganizationsAccess(requestBody: DisableAWSOrganizationsAccessInput, headersHandler?: () => HttpHeaders): Observable<DisableAWSOrganizationsAccessOutput> {
			return this.http.post<DisableAWSOrganizationsAccessOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Disassociates the specified budget from the specified resource.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource
		 * @return {DisassociateBudgetFromResourceOutput} Success
		 */
		DisassociateBudgetFromResource(requestBody: DisassociateBudgetFromResourceInput, headersHandler?: () => HttpHeaders): Observable<DisassociateBudgetFromResourceOutput> {
			return this.http.post<DisassociateBudgetFromResourceOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Disassociates a previously associated principal ARN from a specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio
		 * @return {DisassociatePrincipalFromPortfolioOutput} Success
		 */
		DisassociatePrincipalFromPortfolio(requestBody: DisassociatePrincipalFromPortfolioInput, headersHandler?: () => HttpHeaders): Observable<DisassociatePrincipalFromPortfolioOutput> {
			return this.http.post<DisassociatePrincipalFromPortfolioOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Disassociates the specified product from the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio
		 * @return {DisassociateProductFromPortfolioOutput} Success
		 */
		DisassociateProductFromPortfolio(requestBody: DisassociateProductFromPortfolioInput, headersHandler?: () => HttpHeaders): Observable<DisassociateProductFromPortfolioOutput> {
			return this.http.post<DisassociateProductFromPortfolioOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Disassociates the specified self-service action association from the specified provisioning artifact.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact
		 * @return {DisassociateServiceActionFromProvisioningArtifactOutput} Success
		 */
		DisassociateServiceActionFromProvisioningArtifact(requestBody: DisassociateServiceActionFromProvisioningArtifactInput, headersHandler?: () => HttpHeaders): Observable<DisassociateServiceActionFromProvisioningArtifactOutput> {
			return this.http.post<DisassociateServiceActionFromProvisioningArtifactOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Disassociates the specified TagOption from the specified resource.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource
		 * @return {DisassociateTagOptionFromResourceOutput} Success
		 */
		DisassociateTagOptionFromResource(requestBody: DisassociateTagOptionFromResourceInput, headersHandler?: () => HttpHeaders): Observable<DisassociateTagOptionFromResourceOutput> {
			return this.http.post<DisassociateTagOptionFromResourceOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Enable portfolio sharing feature through AWS Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the master account in the organization.</p> <p>By calling this API Service Catalog will make a call to organizations:EnableAWSServiceAccess on your behalf so that your shares can be in sync with any changes in your AWS Organizations structure.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess
		 * @return {EnableAWSOrganizationsAccessOutput} Success
		 */
		EnableAWSOrganizationsAccess(requestBody: EnableAWSOrganizationsAccessInput, headersHandler?: () => HttpHeaders): Observable<EnableAWSOrganizationsAccessOutput> {
			return this.http.post<EnableAWSOrganizationsAccessOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Provisions or modifies a product based on the resource changes for the specified plan.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan
		 * @return {ExecuteProvisionedProductPlanOutput} Success
		 */
		ExecuteProvisionedProductPlan(requestBody: ExecuteProvisionedProductPlanInput, headersHandler?: () => HttpHeaders): Observable<ExecuteProvisionedProductPlanOutput> {
			return this.http.post<ExecuteProvisionedProductPlanOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Executes a self-service action against a provisioned product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction
		 * @return {ExecuteProvisionedProductServiceActionOutput} Success
		 */
		ExecuteProvisionedProductServiceAction(requestBody: ExecuteProvisionedProductServiceActionInput, headersHandler?: () => HttpHeaders): Observable<ExecuteProvisionedProductServiceActionOutput> {
			return this.http.post<ExecuteProvisionedProductServiceActionOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get the Access Status for AWS Organization portfolio share feature. This API can only be called by the master account in the organization.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus
		 * @return {GetAWSOrganizationsAccessStatusOutput} Success
		 */
		GetAWSOrganizationsAccessStatus(requestBody: GetAWSOrganizationsAccessStatusInput, headersHandler?: () => HttpHeaders): Observable<GetAWSOrganizationsAccessStatusOutput> {
			return this.http.post<GetAWSOrganizationsAccessStatusOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all portfolios for which sharing was accepted by this account.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListAcceptedPortfolioSharesOutput} Success
		 */
		ListAcceptedPortfolioShares(PageSize: string, PageToken: string, requestBody: ListAcceptedPortfolioSharesInput, headersHandler?: () => HttpHeaders): Observable<ListAcceptedPortfolioSharesOutput> {
			return this.http.post<ListAcceptedPortfolioSharesOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all the budgets associated to the specified resource.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListBudgetsForResourceOutput} Success
		 */
		ListBudgetsForResource(PageSize: string, PageToken: string, requestBody: ListBudgetsForResourceInput, headersHandler?: () => HttpHeaders): Observable<ListBudgetsForResourceOutput> {
			return this.http.post<ListBudgetsForResourceOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the constraints for the specified portfolio and product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListConstraintsForPortfolioOutput} Success
		 */
		ListConstraintsForPortfolio(PageSize: string, PageToken: string, requestBody: ListConstraintsForPortfolioInput, headersHandler?: () => HttpHeaders): Observable<ListConstraintsForPortfolioOutput> {
			return this.http.post<ListConstraintsForPortfolioOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the paths to the specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListLaunchPathsOutput} Success
		 */
		ListLaunchPaths(PageSize: string, PageToken: string, requestBody: ListLaunchPathsInput, headersHandler?: () => HttpHeaders): Observable<ListLaunchPathsOutput> {
			return this.http.post<ListLaunchPathsOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the organization nodes that have access to the specified portfolio. This API can only be called by the master account in the organization.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListOrganizationPortfolioAccessOutput} Success
		 */
		ListOrganizationPortfolioAccess(PageSize: string, PageToken: string, requestBody: ListOrganizationPortfolioAccessInput, headersHandler?: () => HttpHeaders): Observable<ListOrganizationPortfolioAccessOutput> {
			return this.http.post<ListOrganizationPortfolioAccessOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the account IDs that have access to the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListPortfolioAccessOutput} Success
		 */
		ListPortfolioAccess(PageSize: string, PageToken: string, requestBody: ListPortfolioAccessInput, headersHandler?: () => HttpHeaders): Observable<ListPortfolioAccessOutput> {
			return this.http.post<ListPortfolioAccessOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all portfolios in the catalog.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListPortfoliosOutput} Success
		 */
		ListPortfolios(PageSize: string, PageToken: string, requestBody: ListPortfoliosInput, headersHandler?: () => HttpHeaders): Observable<ListPortfoliosOutput> {
			return this.http.post<ListPortfoliosOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all portfolios that the specified product is associated with.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListPortfoliosForProductOutput} Success
		 */
		ListPortfoliosForProduct(PageSize: string, PageToken: string, requestBody: ListPortfoliosForProductInput, headersHandler?: () => HttpHeaders): Observable<ListPortfoliosForProductOutput> {
			return this.http.post<ListPortfoliosForProductOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all principal ARNs associated with the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListPrincipalsForPortfolioOutput} Success
		 */
		ListPrincipalsForPortfolio(PageSize: string, PageToken: string, requestBody: ListPrincipalsForPortfolioInput, headersHandler?: () => HttpHeaders): Observable<ListPrincipalsForPortfolioOutput> {
			return this.http.post<ListPrincipalsForPortfolioOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the plans for the specified provisioned product or all plans to which the user has access.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans
		 * @return {ListProvisionedProductPlansOutput} Success
		 */
		ListProvisionedProductPlans(requestBody: ListProvisionedProductPlansInput, headersHandler?: () => HttpHeaders): Observable<ListProvisionedProductPlansOutput> {
			return this.http.post<ListProvisionedProductPlansOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all provisioning artifacts (also known as versions) for the specified product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts
		 * @return {ListProvisioningArtifactsOutput} Success
		 */
		ListProvisioningArtifacts(requestBody: ListProvisioningArtifactsInput, headersHandler?: () => HttpHeaders): Observable<ListProvisioningArtifactsOutput> {
			return this.http.post<ListProvisioningArtifactsOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all provisioning artifacts (also known as versions) for the specified self-service action.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListProvisioningArtifactsForServiceActionOutput} Success
		 */
		ListProvisioningArtifactsForServiceAction(PageSize: string, PageToken: string, requestBody: ListProvisioningArtifactsForServiceActionInput, headersHandler?: () => HttpHeaders): Observable<ListProvisioningArtifactsForServiceActionOutput> {
			return this.http.post<ListProvisioningArtifactsForServiceActionOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the specified requests or all performed requests.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory
		 * @return {ListRecordHistoryOutput} Success
		 */
		ListRecordHistory(requestBody: ListRecordHistoryInput, headersHandler?: () => HttpHeaders): Observable<ListRecordHistoryOutput> {
			return this.http.post<ListRecordHistoryOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the resources associated with the specified TagOption.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListResourcesForTagOptionOutput} Success
		 */
		ListResourcesForTagOption(PageSize: string, PageToken: string, requestBody: ListResourcesForTagOptionInput, headersHandler?: () => HttpHeaders): Observable<ListResourcesForTagOptionOutput> {
			return this.http.post<ListResourcesForTagOptionOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all self-service actions.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListServiceActionsOutput} Success
		 */
		ListServiceActions(PageSize: string, PageToken: string, requestBody: ListServiceActionsInput, headersHandler?: () => HttpHeaders): Observable<ListServiceActionsOutput> {
			return this.http.post<ListServiceActionsOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListServiceActionsForProvisioningArtifactOutput} Success
		 */
		ListServiceActionsForProvisioningArtifact(PageSize: string, PageToken: string, requestBody: ListServiceActionsForProvisioningArtifactInput, headersHandler?: () => HttpHeaders): Observable<ListServiceActionsForProvisioningArtifactOutput> {
			return this.http.post<ListServiceActionsForProvisioningArtifactOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific AWS account name or region.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct
		 * @return {ListStackInstancesForProvisionedProductOutput} Success
		 */
		ListStackInstancesForProvisionedProduct(requestBody: ListStackInstancesForProvisionedProductInput, headersHandler?: () => HttpHeaders): Observable<ListStackInstancesForProvisionedProductOutput> {
			return this.http.post<ListStackInstancesForProvisionedProductOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the specified TagOptions or all TagOptions.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListTagOptionsOutput} Success
		 */
		ListTagOptions(PageSize: string, PageToken: string, requestBody: ListTagOptionsInput, headersHandler?: () => HttpHeaders): Observable<ListTagOptionsOutput> {
			return this.http.post<ListTagOptionsOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Provisions the specified product.</p> <p>A provisioned product is a resourced instance of a product. For example, provisioning a product based on a CloudFormation template launches a CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>.</p> <p>If the request contains a tag key with an empty list of values, there is a tag conflict for that key. Do not include conflicted keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>".</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct
		 * @return {ProvisionProductOutput} Success
		 */
		ProvisionProduct(requestBody: ProvisionProductInput, headersHandler?: () => HttpHeaders): Observable<ProvisionProductOutput> {
			return this.http.post<ProvisionProductOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Rejects an offer to share the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare
		 * @return {RejectPortfolioShareOutput} Success
		 */
		RejectPortfolioShare(requestBody: RejectPortfolioShareInput, headersHandler?: () => HttpHeaders): Observable<RejectPortfolioShareOutput> {
			return this.http.post<RejectPortfolioShareOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts
		 * @return {ScanProvisionedProductsOutput} Success
		 */
		ScanProvisionedProducts(requestBody: ScanProvisionedProductsInput, headersHandler?: () => HttpHeaders): Observable<ScanProvisionedProductsOutput> {
			return this.http.post<ScanProvisionedProductsOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about the products to which the caller has access.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {SearchProductsOutput} Success
		 */
		SearchProducts(PageSize: string, PageToken: string, requestBody: SearchProductsInput, headersHandler?: () => HttpHeaders): Observable<SearchProductsOutput> {
			return this.http.post<SearchProductsOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about the products for the specified portfolio or all products.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {SearchProductsAsAdminOutput} Success
		 */
		SearchProductsAsAdmin(PageSize: string, PageToken: string, requestBody: SearchProductsAsAdminInput, headersHandler?: () => HttpHeaders): Observable<SearchProductsAsAdminOutput> {
			return this.http.post<SearchProductsAsAdminOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets information about the provisioned products that meet the specified criteria.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {SearchProvisionedProductsOutput} Success
		 */
		SearchProvisionedProducts(PageSize: string, PageToken: string, requestBody: SearchProvisionedProductsInput, headersHandler?: () => HttpHeaders): Observable<SearchProvisionedProductsOutput> {
			return this.http.post<SearchProvisionedProductsOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct
		 * @return {TerminateProvisionedProductOutput} Success
		 */
		TerminateProvisionedProduct(requestBody: TerminateProvisionedProductInput, headersHandler?: () => HttpHeaders): Observable<TerminateProvisionedProductOutput> {
			return this.http.post<TerminateProvisionedProductOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates the specified constraint.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint
		 * @return {UpdateConstraintOutput} Success
		 */
		UpdateConstraint(requestBody: UpdateConstraintInput, headersHandler?: () => HttpHeaders): Observable<UpdateConstraintOutput> {
			return this.http.post<UpdateConstraintOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio
		 * @return {UpdatePortfolioOutput} Success
		 */
		UpdatePortfolio(requestBody: UpdatePortfolioInput, headersHandler?: () => HttpHeaders): Observable<UpdatePortfolioOutput> {
			return this.http.post<UpdatePortfolioOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates the specified product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct
		 * @return {UpdateProductOutput} Success
		 */
		UpdateProduct(requestBody: UpdateProductInput, headersHandler?: () => HttpHeaders): Observable<UpdateProductOutput> {
			return this.http.post<UpdateProductOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct
		 * @return {UpdateProvisionedProductOutput} Success
		 */
		UpdateProvisionedProduct(requestBody: UpdateProvisionedProductInput, headersHandler?: () => HttpHeaders): Observable<UpdateProvisionedProductOutput> {
			return this.http.post<UpdateProvisionedProductOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Requests updates to the properties of the specified provisioned product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties
		 * @return {UpdateProvisionedProductPropertiesOutput} Success
		 */
		UpdateProvisionedProductProperties(requestBody: UpdateProvisionedProductPropertiesInput, headersHandler?: () => HttpHeaders): Observable<UpdateProvisionedProductPropertiesOutput> {
			return this.http.post<UpdateProvisionedProductPropertiesOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact
		 * @return {UpdateProvisioningArtifactOutput} Success
		 */
		UpdateProvisioningArtifact(requestBody: UpdateProvisioningArtifactInput, headersHandler?: () => HttpHeaders): Observable<UpdateProvisioningArtifactOutput> {
			return this.http.post<UpdateProvisioningArtifactOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a self-service action.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction
		 * @return {UpdateServiceActionOutput} Success
		 */
		UpdateServiceAction(requestBody: UpdateServiceActionInput, headersHandler?: () => HttpHeaders): Observable<UpdateServiceActionOutput> {
			return this.http.post<UpdateServiceActionOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates the specified TagOption.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption
		 * @return {UpdateTagOptionOutput} Success
		 */
		UpdateTagOption(requestBody: UpdateTagOptionInput, headersHandler?: () => HttpHeaders): Observable<UpdateTagOptionOutput> {
			return this.http.post<UpdateTagOptionOutput>(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

