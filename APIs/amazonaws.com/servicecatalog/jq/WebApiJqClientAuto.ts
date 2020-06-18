///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
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

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Accepts an offer to share the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare
		 * @return {AcceptPortfolioShareOutput} Success
		 */
		AcceptPortfolioShare(callback: (data : AcceptPortfolioShareOutput) => any, requestBody: AcceptPortfolioShareInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Associates the specified budget with the specified resource.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource
		 * @return {AssociateBudgetWithResourceOutput} Success
		 */
		AssociateBudgetWithResource(callback: (data : AssociateBudgetWithResourceOutput) => any, requestBody: AssociateBudgetWithResourceInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Associates the specified principal ARN with the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio
		 * @return {AssociatePrincipalWithPortfolioOutput} Success
		 */
		AssociatePrincipalWithPortfolio(callback: (data : AssociatePrincipalWithPortfolioOutput) => any, requestBody: AssociatePrincipalWithPortfolioInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Associates the specified product with the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio
		 * @return {AssociateProductWithPortfolioOutput} Success
		 */
		AssociateProductWithPortfolio(callback: (data : AssociateProductWithPortfolioOutput) => any, requestBody: AssociateProductWithPortfolioInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Associates a self-service action with a provisioning artifact.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact
		 * @return {AssociateServiceActionWithProvisioningArtifactOutput} Success
		 */
		AssociateServiceActionWithProvisioningArtifact(callback: (data : AssociateServiceActionWithProvisioningArtifactOutput) => any, requestBody: AssociateServiceActionWithProvisioningArtifactInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Associate the specified TagOption with the specified portfolio or product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource
		 * @return {AssociateTagOptionWithResourceOutput} Success
		 */
		AssociateTagOptionWithResource(callback: (data : AssociateTagOptionWithResourceOutput) => any, requestBody: AssociateTagOptionWithResourceInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Associates multiple self-service actions with provisioning artifacts.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact
		 * @return {BatchAssociateServiceActionWithProvisioningArtifactOutput} Success
		 */
		BatchAssociateServiceActionWithProvisioningArtifact(callback: (data : BatchAssociateServiceActionWithProvisioningArtifactOutput) => any, requestBody: BatchAssociateServiceActionWithProvisioningArtifactInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Disassociates a batch of self-service actions from the specified provisioning artifact.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact
		 * @return {BatchDisassociateServiceActionFromProvisioningArtifactOutput} Success
		 */
		BatchDisassociateServiceActionFromProvisioningArtifact(callback: (data : BatchDisassociateServiceActionFromProvisioningArtifactOutput) => any, requestBody: BatchDisassociateServiceActionFromProvisioningArtifactInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same region or another region.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct
		 * @return {CopyProductOutput} Success
		 */
		CopyProduct(callback: (data : CopyProductOutput) => any, requestBody: CopyProductInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a constraint.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint
		 * @return {CreateConstraintOutput} Success
		 */
		CreateConstraint(callback: (data : CreateConstraintOutput) => any, requestBody: CreateConstraintInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio
		 * @return {CreatePortfolioOutput} Success
		 */
		CreatePortfolio(callback: (data : CreatePortfolioOutput) => any, requestBody: CreatePortfolioInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the master account of an Organization. AWSOrganizationsAccess must be enabled in order to create a portfolio share to an organization node.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare
		 * @return {CreatePortfolioShareOutput} Success
		 */
		CreatePortfolioShare(callback: (data : CreatePortfolioShareOutput) => any, requestBody: CreatePortfolioShareInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct
		 * @return {CreateProductOutput} Success
		 */
		CreateProduct(callback: (data : CreateProductOutput) => any, requestBody: CreateProductInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a plan. A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan per provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILBLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan
		 * @return {CreateProvisionedProductPlanOutput} Success
		 */
		CreateProvisionedProductPlan(callback: (data : CreateProvisionedProductPlanOutput) => any, requestBody: CreateProvisionedProductPlanInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact
		 * @return {CreateProvisioningArtifactOutput} Success
		 */
		CreateProvisioningArtifact(callback: (data : CreateProvisioningArtifactOutput) => any, requestBody: CreateProvisioningArtifactInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a self-service action.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction
		 * @return {CreateServiceActionOutput} Success
		 */
		CreateServiceAction(callback: (data : CreateServiceActionOutput) => any, requestBody: CreateServiceActionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a TagOption.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption
		 * @return {CreateTagOptionOutput} Success
		 */
		CreateTagOption(callback: (data : CreateTagOptionOutput) => any, requestBody: CreateTagOptionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the specified constraint.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint
		 * @return {DeleteConstraintOutput} Success
		 */
		DeleteConstraint(callback: (data : DeleteConstraintOutput) => any, requestBody: DeleteConstraintInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio
		 * @return {DeletePortfolioOutput} Success
		 */
		DeletePortfolio(callback: (data : DeletePortfolioOutput) => any, requestBody: DeletePortfolioInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the master account of an Organization.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare
		 * @return {DeletePortfolioShareOutput} Success
		 */
		DeletePortfolioShare(callback: (data : DeletePortfolioShareOutput) => any, requestBody: DeletePortfolioShareInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct
		 * @return {DeleteProductOutput} Success
		 */
		DeleteProduct(callback: (data : DeleteProductOutput) => any, requestBody: DeleteProductInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the specified plan.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan
		 * @return {DeleteProvisionedProductPlanOutput} Success
		 */
		DeleteProvisionedProductPlan(callback: (data : DeleteProvisionedProductPlanOutput) => any, requestBody: DeleteProvisionedProductPlanInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact
		 * @return {DeleteProvisioningArtifactOutput} Success
		 */
		DeleteProvisioningArtifact(callback: (data : DeleteProvisioningArtifactOutput) => any, requestBody: DeleteProvisioningArtifactInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes a self-service action.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction
		 * @return {DeleteServiceActionOutput} Success
		 */
		DeleteServiceAction(callback: (data : DeleteServiceActionOutput) => any, requestBody: DeleteServiceActionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption
		 * @return {DeleteTagOptionOutput} Success
		 */
		DeleteTagOption(callback: (data : DeleteTagOptionOutput) => any, requestBody: DeleteTagOptionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets information about the specified constraint.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint
		 * @return {DescribeConstraintOutput} Success
		 */
		DescribeConstraint(callback: (data : DescribeConstraintOutput) => any, requestBody: DescribeConstraintInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the status of the specified copy product operation.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus
		 * @return {DescribeCopyProductStatusOutput} Success
		 */
		DescribeCopyProductStatus(callback: (data : DescribeCopyProductStatusOutput) => any, requestBody: DescribeCopyProductStatusInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets information about the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio
		 * @return {DescribePortfolioOutput} Success
		 */
		DescribePortfolio(callback: (data : DescribePortfolioOutput) => any, requestBody: DescribePortfolioInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the status of the specified portfolio share operation. This API can only be called by the master account in the organization.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus
		 * @return {DescribePortfolioShareStatusOutput} Success
		 */
		DescribePortfolioShareStatus(callback: (data : DescribePortfolioShareStatusOutput) => any, requestBody: DescribePortfolioShareStatusInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets information about the specified product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct
		 * @return {DescribeProductOutput} Success
		 */
		DescribeProduct(callback: (data : DescribeProductOutput) => any, requestBody: DescribeProductInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets information about the specified product. This operation is run with administrator access.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin
		 * @return {DescribeProductAsAdminOutput} Success
		 */
		DescribeProductAsAdmin(callback: (data : DescribeProductAsAdminOutput) => any, requestBody: DescribeProductAsAdminInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets information about the specified product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView
		 * @return {DescribeProductViewOutput} Success
		 */
		DescribeProductView(callback: (data : DescribeProductViewOutput) => any, requestBody: DescribeProductViewInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets information about the specified provisioned product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct
		 * @return {DescribeProvisionedProductOutput} Success
		 */
		DescribeProvisionedProduct(callback: (data : DescribeProvisionedProductOutput) => any, requestBody: DescribeProvisionedProductInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets information about the resource changes for the specified plan.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan
		 * @return {DescribeProvisionedProductPlanOutput} Success
		 */
		DescribeProvisionedProductPlan(callback: (data : DescribeProvisionedProductPlanOutput) => any, requestBody: DescribeProvisionedProductPlanInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets information about the specified provisioning artifact (also known as a version) for the specified product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact
		 * @return {DescribeProvisioningArtifactOutput} Success
		 */
		DescribeProvisioningArtifact(callback: (data : DescribeProvisioningArtifactOutput) => any, requestBody: DescribeProvisioningArtifactInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters
		 * @return {DescribeProvisioningParametersOutput} Success
		 */
		DescribeProvisioningParameters(callback: (data : DescribeProvisioningParametersOutput) => any, requestBody: DescribeProvisioningParametersInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord
		 * @return {DescribeRecordOutput} Success
		 */
		DescribeRecord(callback: (data : DescribeRecordOutput) => any, requestBody: DescribeRecordInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes a self-service action.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction
		 * @return {DescribeServiceActionOutput} Success
		 */
		DescribeServiceAction(callback: (data : DescribeServiceActionOutput) => any, requestBody: DescribeServiceActionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters
		 * @return {DescribeServiceActionExecutionParametersOutput} Success
		 */
		DescribeServiceActionExecutionParameters(callback: (data : DescribeServiceActionExecutionParametersOutput) => any, requestBody: DescribeServiceActionExecutionParametersInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets information about the specified TagOption.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption
		 * @return {DescribeTagOptionOutput} Success
		 */
		DescribeTagOption(callback: (data : DescribeTagOptionOutput) => any, requestBody: DescribeTagOptionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Disable portfolio sharing through AWS Organizations feature. This feature will not delete your current shares but it will prevent you from creating new shares throughout your organization. Current shares will not be in sync with your organization structure if it changes after calling this API. This API can only be called by the master account in the organization.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess
		 * @return {DisableAWSOrganizationsAccessOutput} Success
		 */
		DisableAWSOrganizationsAccess(callback: (data : DisableAWSOrganizationsAccessOutput) => any, requestBody: DisableAWSOrganizationsAccessInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Disassociates the specified budget from the specified resource.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource
		 * @return {DisassociateBudgetFromResourceOutput} Success
		 */
		DisassociateBudgetFromResource(callback: (data : DisassociateBudgetFromResourceOutput) => any, requestBody: DisassociateBudgetFromResourceInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Disassociates a previously associated principal ARN from a specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio
		 * @return {DisassociatePrincipalFromPortfolioOutput} Success
		 */
		DisassociatePrincipalFromPortfolio(callback: (data : DisassociatePrincipalFromPortfolioOutput) => any, requestBody: DisassociatePrincipalFromPortfolioInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Disassociates the specified product from the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio
		 * @return {DisassociateProductFromPortfolioOutput} Success
		 */
		DisassociateProductFromPortfolio(callback: (data : DisassociateProductFromPortfolioOutput) => any, requestBody: DisassociateProductFromPortfolioInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Disassociates the specified self-service action association from the specified provisioning artifact.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact
		 * @return {DisassociateServiceActionFromProvisioningArtifactOutput} Success
		 */
		DisassociateServiceActionFromProvisioningArtifact(callback: (data : DisassociateServiceActionFromProvisioningArtifactOutput) => any, requestBody: DisassociateServiceActionFromProvisioningArtifactInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Disassociates the specified TagOption from the specified resource.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource
		 * @return {DisassociateTagOptionFromResourceOutput} Success
		 */
		DisassociateTagOptionFromResource(callback: (data : DisassociateTagOptionFromResourceOutput) => any, requestBody: DisassociateTagOptionFromResourceInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Enable portfolio sharing feature through AWS Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the master account in the organization.</p> <p>By calling this API Service Catalog will make a call to organizations:EnableAWSServiceAccess on your behalf so that your shares can be in sync with any changes in your AWS Organizations structure.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess
		 * @return {EnableAWSOrganizationsAccessOutput} Success
		 */
		EnableAWSOrganizationsAccess(callback: (data : EnableAWSOrganizationsAccessOutput) => any, requestBody: EnableAWSOrganizationsAccessInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Provisions or modifies a product based on the resource changes for the specified plan.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan
		 * @return {ExecuteProvisionedProductPlanOutput} Success
		 */
		ExecuteProvisionedProductPlan(callback: (data : ExecuteProvisionedProductPlanOutput) => any, requestBody: ExecuteProvisionedProductPlanInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Executes a self-service action against a provisioned product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction
		 * @return {ExecuteProvisionedProductServiceActionOutput} Success
		 */
		ExecuteProvisionedProductServiceAction(callback: (data : ExecuteProvisionedProductServiceActionOutput) => any, requestBody: ExecuteProvisionedProductServiceActionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get the Access Status for AWS Organization portfolio share feature. This API can only be called by the master account in the organization.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus
		 * @return {GetAWSOrganizationsAccessStatusOutput} Success
		 */
		GetAWSOrganizationsAccessStatus(callback: (data : GetAWSOrganizationsAccessStatusOutput) => any, requestBody: GetAWSOrganizationsAccessStatusInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all portfolios for which sharing was accepted by this account.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListAcceptedPortfolioSharesOutput} Success
		 */
		ListAcceptedPortfolioShares(PageSize: string, PageToken: string, callback: (data : ListAcceptedPortfolioSharesOutput) => any, requestBody: ListAcceptedPortfolioSharesInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all the budgets associated to the specified resource.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListBudgetsForResourceOutput} Success
		 */
		ListBudgetsForResource(PageSize: string, PageToken: string, callback: (data : ListBudgetsForResourceOutput) => any, requestBody: ListBudgetsForResourceInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the constraints for the specified portfolio and product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListConstraintsForPortfolioOutput} Success
		 */
		ListConstraintsForPortfolio(PageSize: string, PageToken: string, callback: (data : ListConstraintsForPortfolioOutput) => any, requestBody: ListConstraintsForPortfolioInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the paths to the specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListLaunchPathsOutput} Success
		 */
		ListLaunchPaths(PageSize: string, PageToken: string, callback: (data : ListLaunchPathsOutput) => any, requestBody: ListLaunchPathsInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the organization nodes that have access to the specified portfolio. This API can only be called by the master account in the organization.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListOrganizationPortfolioAccessOutput} Success
		 */
		ListOrganizationPortfolioAccess(PageSize: string, PageToken: string, callback: (data : ListOrganizationPortfolioAccessOutput) => any, requestBody: ListOrganizationPortfolioAccessInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the account IDs that have access to the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListPortfolioAccessOutput} Success
		 */
		ListPortfolioAccess(PageSize: string, PageToken: string, callback: (data : ListPortfolioAccessOutput) => any, requestBody: ListPortfolioAccessInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all portfolios in the catalog.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListPortfoliosOutput} Success
		 */
		ListPortfolios(PageSize: string, PageToken: string, callback: (data : ListPortfoliosOutput) => any, requestBody: ListPortfoliosInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all portfolios that the specified product is associated with.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListPortfoliosForProductOutput} Success
		 */
		ListPortfoliosForProduct(PageSize: string, PageToken: string, callback: (data : ListPortfoliosForProductOutput) => any, requestBody: ListPortfoliosForProductInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all principal ARNs associated with the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListPrincipalsForPortfolioOutput} Success
		 */
		ListPrincipalsForPortfolio(PageSize: string, PageToken: string, callback: (data : ListPrincipalsForPortfolioOutput) => any, requestBody: ListPrincipalsForPortfolioInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the plans for the specified provisioned product or all plans to which the user has access.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans
		 * @return {ListProvisionedProductPlansOutput} Success
		 */
		ListProvisionedProductPlans(callback: (data : ListProvisionedProductPlansOutput) => any, requestBody: ListProvisionedProductPlansInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all provisioning artifacts (also known as versions) for the specified product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts
		 * @return {ListProvisioningArtifactsOutput} Success
		 */
		ListProvisioningArtifacts(callback: (data : ListProvisioningArtifactsOutput) => any, requestBody: ListProvisioningArtifactsInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all provisioning artifacts (also known as versions) for the specified self-service action.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListProvisioningArtifactsForServiceActionOutput} Success
		 */
		ListProvisioningArtifactsForServiceAction(PageSize: string, PageToken: string, callback: (data : ListProvisioningArtifactsForServiceActionOutput) => any, requestBody: ListProvisioningArtifactsForServiceActionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the specified requests or all performed requests.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory
		 * @return {ListRecordHistoryOutput} Success
		 */
		ListRecordHistory(callback: (data : ListRecordHistoryOutput) => any, requestBody: ListRecordHistoryInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the resources associated with the specified TagOption.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListResourcesForTagOptionOutput} Success
		 */
		ListResourcesForTagOption(PageSize: string, PageToken: string, callback: (data : ListResourcesForTagOptionOutput) => any, requestBody: ListResourcesForTagOptionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all self-service actions.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListServiceActionsOutput} Success
		 */
		ListServiceActions(PageSize: string, PageToken: string, callback: (data : ListServiceActionsOutput) => any, requestBody: ListServiceActionsInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListServiceActionsForProvisioningArtifactOutput} Success
		 */
		ListServiceActionsForProvisioningArtifact(PageSize: string, PageToken: string, callback: (data : ListServiceActionsForProvisioningArtifactOutput) => any, requestBody: ListServiceActionsForProvisioningArtifactInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific AWS account name or region.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct
		 * @return {ListStackInstancesForProvisionedProductOutput} Success
		 */
		ListStackInstancesForProvisionedProduct(callback: (data : ListStackInstancesForProvisionedProductOutput) => any, requestBody: ListStackInstancesForProvisionedProductInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the specified TagOptions or all TagOptions.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListTagOptionsOutput} Success
		 */
		ListTagOptions(PageSize: string, PageToken: string, callback: (data : ListTagOptionsOutput) => any, requestBody: ListTagOptionsInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Provisions the specified product.</p> <p>A provisioned product is a resourced instance of a product. For example, provisioning a product based on a CloudFormation template launches a CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>.</p> <p>If the request contains a tag key with an empty list of values, there is a tag conflict for that key. Do not include conflicted keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>".</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct
		 * @return {ProvisionProductOutput} Success
		 */
		ProvisionProduct(callback: (data : ProvisionProductOutput) => any, requestBody: ProvisionProductInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Rejects an offer to share the specified portfolio.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare
		 * @return {RejectPortfolioShareOutput} Success
		 */
		RejectPortfolioShare(callback: (data : RejectPortfolioShareOutput) => any, requestBody: RejectPortfolioShareInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts
		 * @return {ScanProvisionedProductsOutput} Success
		 */
		ScanProvisionedProducts(callback: (data : ScanProvisionedProductsOutput) => any, requestBody: ScanProvisionedProductsInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets information about the products to which the caller has access.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {SearchProductsOutput} Success
		 */
		SearchProducts(PageSize: string, PageToken: string, callback: (data : SearchProductsOutput) => any, requestBody: SearchProductsInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets information about the products for the specified portfolio or all products.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {SearchProductsAsAdminOutput} Success
		 */
		SearchProductsAsAdmin(PageSize: string, PageToken: string, callback: (data : SearchProductsAsAdminOutput) => any, requestBody: SearchProductsAsAdminInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets information about the provisioned products that meet the specified criteria.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {SearchProvisionedProductsOutput} Success
		 */
		SearchProvisionedProducts(PageSize: string, PageToken: string, callback: (data : SearchProvisionedProductsOutput) => any, requestBody: SearchProvisionedProductsInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct
		 * @return {TerminateProvisionedProductOutput} Success
		 */
		TerminateProvisionedProduct(callback: (data : TerminateProvisionedProductOutput) => any, requestBody: TerminateProvisionedProductInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates the specified constraint.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint
		 * @return {UpdateConstraintOutput} Success
		 */
		UpdateConstraint(callback: (data : UpdateConstraintOutput) => any, requestBody: UpdateConstraintInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio
		 * @return {UpdatePortfolioOutput} Success
		 */
		UpdatePortfolio(callback: (data : UpdatePortfolioOutput) => any, requestBody: UpdatePortfolioInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates the specified product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct
		 * @return {UpdateProductOutput} Success
		 */
		UpdateProduct(callback: (data : UpdateProductOutput) => any, requestBody: UpdateProductInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct
		 * @return {UpdateProvisionedProductOutput} Success
		 */
		UpdateProvisionedProduct(callback: (data : UpdateProvisionedProductOutput) => any, requestBody: UpdateProvisionedProductInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Requests updates to the properties of the specified provisioned product.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties
		 * @return {UpdateProvisionedProductPropertiesOutput} Success
		 */
		UpdateProvisionedProductProperties(callback: (data : UpdateProvisionedProductPropertiesOutput) => any, requestBody: UpdateProvisionedProductPropertiesInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact
		 * @return {UpdateProvisioningArtifactOutput} Success
		 */
		UpdateProvisioningArtifact(callback: (data : UpdateProvisioningArtifactOutput) => any, requestBody: UpdateProvisioningArtifactInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates a self-service action.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction
		 * @return {UpdateServiceActionOutput} Success
		 */
		UpdateServiceAction(callback: (data : UpdateServiceActionOutput) => any, requestBody: UpdateServiceActionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates the specified TagOption.
		 * Post /#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption
		 * @return {UpdateTagOptionOutput} Success
		 */
		UpdateTagOption(callback: (data : UpdateTagOptionOutput) => any, requestBody: UpdateTagOptionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}
