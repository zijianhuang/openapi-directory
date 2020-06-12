export namespace My_Demo_Client {
	export interface BatchGetAggregateResourceConfigResponse {
		BaseConfigurationItems?: Array<BaseConfigurationItem>;
		UnprocessedResourceIdentifiers?: Array<AggregateResourceIdentifier>;
	}

	export interface BatchGetAggregateResourceConfigRequest {
		ConfigurationAggregatorName: string;
		ResourceIdentifiers: Array<AggregateResourceIdentifier>;
	}

	export interface BatchGetResourceConfigResponse {
		baseConfigurationItems?: Array<BaseConfigurationItem>;
		unprocessedResourceKeys?: Array<ResourceKey>;
	}

	export interface BatchGetResourceConfigRequest {
		resourceKeys: Array<ResourceKey>;
	}

	export interface DeleteAggregationAuthorizationRequest {
		AuthorizedAccountId: string;
		AuthorizedAwsRegion: string;
	}


	/**<p/> */
	export interface DeleteConfigRuleRequest {
		ConfigRuleName: string;
	}

	export interface DeleteConfigurationAggregatorRequest {
		ConfigurationAggregatorName: string;
	}


	/**The request object for the <code>DeleteConfigurationRecorder</code> action. */
	export interface DeleteConfigurationRecorderRequest {
		ConfigurationRecorderName: string;
	}

	export interface DeleteConformancePackRequest {
		ConformancePackName: string;
	}


	/**The input for the <a>DeleteDeliveryChannel</a> action. The action accepts the following data, in JSON format.  */
	export interface DeleteDeliveryChannelRequest {
		DeliveryChannelName: string;
	}


	/**<p/> */
	export interface DeleteEvaluationResultsRequest {
		ConfigRuleName: string;
	}

	export interface DeleteOrganizationConfigRuleRequest {
		OrganizationConfigRuleName: string;
	}

	export interface DeleteOrganizationConformancePackRequest {
		OrganizationConformancePackName: string;
	}

	export interface DeletePendingAggregationRequestRequest {
		RequesterAccountId: string;
		RequesterAwsRegion: string;
	}

	export interface DeleteRemediationConfigurationRequest {
		ConfigRuleName: string;
		ResourceType?: string;
	}

	export interface DeleteRemediationExceptionsResponse {
		FailedBatches?: Array<FailedDeleteRemediationExceptionsBatch>;
	}

	export interface DeleteRemediationExceptionsRequest {
		ConfigRuleName: string;
		ResourceKeys: Array<RemediationExceptionResourceKey>;
	}

	export interface DeleteResourceConfigRequest {
		ResourceType: string;
		ResourceId: string;
	}

	export interface DeleteRetentionConfigurationRequest {
		RetentionConfigurationName: string;
	}


	/**The output for the <a>DeliverConfigSnapshot</a> action, in JSON format. */
	export interface DeliverConfigSnapshotResponse {
		configSnapshotId?: string;
	}


	/**The input for the <a>DeliverConfigSnapshot</a> action. */
	export interface DeliverConfigSnapshotRequest {
		deliveryChannelName: string;
	}

	export interface DescribeAggregateComplianceByConfigRulesResponse {
		AggregateComplianceByConfigRules?: Array<AggregateComplianceByConfigRule>;
		NextToken?: string;
	}

	export interface DescribeAggregateComplianceByConfigRulesRequest {
		ConfigurationAggregatorName: string;

		/**Filters the compliance results based on account ID, region, compliance type, and rule name. */
		Filters?: ConfigRuleComplianceFilters;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeAggregationAuthorizationsResponse {
		AggregationAuthorizations?: Array<AggregationAuthorization>;
		NextToken?: string;
	}

	export interface DescribeAggregationAuthorizationsRequest {
		Limit?: number;
		NextToken?: string;
	}


	/**<p/> */
	export interface DescribeComplianceByConfigRuleResponse {
		ComplianceByConfigRules?: Array<ComplianceByConfigRule>;
		NextToken?: string;
	}


	/**<p/> */
	export interface DescribeComplianceByConfigRuleRequest {
		ConfigRuleNames?: Array<ConfigRuleName>;
		ComplianceTypes?: Array<ComplianceType>;
		NextToken?: string;
	}


	/**<p/> */
	export interface DescribeComplianceByResourceResponse {
		ComplianceByResources?: Array<ComplianceByResource>;
		NextToken?: string;
	}


	/**<p/> */
	export interface DescribeComplianceByResourceRequest {
		ResourceType?: string;
		ResourceId?: string;
		ComplianceTypes?: Array<ComplianceType>;
		Limit?: number;
		NextToken?: string;
	}


	/**<p/> */
	export interface DescribeConfigRuleEvaluationStatusResponse {
		ConfigRulesEvaluationStatus?: Array<ConfigRuleEvaluationStatus>;
		NextToken?: string;
	}


	/**<p/> */
	export interface DescribeConfigRuleEvaluationStatusRequest {
		ConfigRuleNames?: Array<ConfigRuleName>;
		NextToken?: string;
		Limit?: number;
	}


	/**<p/> */
	export interface DescribeConfigRulesResponse {
		ConfigRules?: Array<ConfigRule>;
		NextToken?: string;
	}


	/**<p/> */
	export interface DescribeConfigRulesRequest {
		ConfigRuleNames?: Array<ConfigRuleName>;
		NextToken?: string;
	}

	export interface DescribeConfigurationAggregatorSourcesStatusResponse {
		AggregatedSourceStatusList?: Array<AggregatedSourceStatus>;
		NextToken?: string;
	}

	export interface DescribeConfigurationAggregatorSourcesStatusRequest {
		ConfigurationAggregatorName: string;
		UpdateStatus?: Array<AggregatedSourceStatusType>;
		NextToken?: string;
		Limit?: number;
	}

	export interface DescribeConfigurationAggregatorsResponse {
		ConfigurationAggregators?: Array<ConfigurationAggregator>;
		NextToken?: string;
	}

	export interface DescribeConfigurationAggregatorsRequest {
		ConfigurationAggregatorNames?: Array<ConfigurationAggregatorName>;
		NextToken?: string;
		Limit?: number;
	}


	/**The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format. */
	export interface DescribeConfigurationRecorderStatusResponse {
		ConfigurationRecordersStatus?: Array<ConfigurationRecorderStatus>;
	}


	/**The input for the <a>DescribeConfigurationRecorderStatus</a> action. */
	export interface DescribeConfigurationRecorderStatusRequest {
		ConfigurationRecorderNames?: Array<RecorderName>;
	}


	/**The output for the <a>DescribeConfigurationRecorders</a> action. */
	export interface DescribeConfigurationRecordersResponse {
		ConfigurationRecorders?: Array<ConfigurationRecorder>;
	}


	/**The input for the <a>DescribeConfigurationRecorders</a> action. */
	export interface DescribeConfigurationRecordersRequest {
		ConfigurationRecorderNames?: Array<RecorderName>;
	}

	export interface DescribeConformancePackComplianceResponse {
		ConformancePackName: string;
		ConformancePackRuleComplianceList: Array<ConformancePackRuleCompliance>;
		NextToken?: string;
	}

	export interface DescribeConformancePackComplianceRequest {
		ConformancePackName: string;

		/**Filters the conformance pack by compliance types and AWS Config rule names. */
		Filters?: ConformancePackComplianceFilters;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeConformancePackStatusResponse {
		ConformancePackStatusDetails?: Array<ConformancePackStatusDetail>;
		NextToken?: string;
	}

	export interface DescribeConformancePackStatusRequest {
		ConformancePackNames?: Array<ConformancePackName>;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeConformancePacksResponse {
		ConformancePackDetails?: Array<ConformancePackDetail>;
		NextToken?: string;
	}

	export interface DescribeConformancePacksRequest {
		ConformancePackNames?: Array<ConformancePackName>;
		Limit?: number;
		NextToken?: string;
	}


	/**The output for the <a>DescribeDeliveryChannelStatus</a> action. */
	export interface DescribeDeliveryChannelStatusResponse {
		DeliveryChannelsStatus?: Array<DeliveryChannelStatus>;
	}


	/**The input for the <a>DeliveryChannelStatus</a> action. */
	export interface DescribeDeliveryChannelStatusRequest {
		DeliveryChannelNames?: Array<ChannelName>;
	}


	/**The output for the <a>DescribeDeliveryChannels</a> action. */
	export interface DescribeDeliveryChannelsResponse {
		DeliveryChannels?: Array<DeliveryChannel>;
	}


	/**The input for the <a>DescribeDeliveryChannels</a> action. */
	export interface DescribeDeliveryChannelsRequest {
		DeliveryChannelNames?: Array<ChannelName>;
	}

	export interface DescribeOrganizationConfigRuleStatusesResponse {
		OrganizationConfigRuleStatuses?: Array<OrganizationConfigRuleStatus>;
		NextToken?: string;
	}

	export interface DescribeOrganizationConfigRuleStatusesRequest {
		OrganizationConfigRuleNames?: Array<StringWithCharLimit64>;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeOrganizationConfigRulesResponse {
		OrganizationConfigRules?: Array<OrganizationConfigRule>;
		NextToken?: string;
	}

	export interface DescribeOrganizationConfigRulesRequest {
		OrganizationConfigRuleNames?: Array<StringWithCharLimit64>;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeOrganizationConformancePackStatusesResponse {
		OrganizationConformancePackStatuses?: Array<OrganizationConformancePackStatus>;
		NextToken?: string;
	}

	export interface DescribeOrganizationConformancePackStatusesRequest {
		OrganizationConformancePackNames?: Array<OrganizationConformancePackName>;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeOrganizationConformancePacksResponse {
		OrganizationConformancePacks?: Array<OrganizationConformancePack>;
		NextToken?: string;
	}

	export interface DescribeOrganizationConformancePacksRequest {
		OrganizationConformancePackNames?: Array<OrganizationConformancePackName>;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribePendingAggregationRequestsResponse {
		PendingAggregationRequests?: Array<PendingAggregationRequest>;
		NextToken?: string;
	}

	export interface DescribePendingAggregationRequestsRequest {
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeRemediationConfigurationsResponse {
		RemediationConfigurations?: Array<RemediationConfiguration>;
	}

	export interface DescribeRemediationConfigurationsRequest {
		ConfigRuleNames: Array<ConfigRuleName>;
	}

	export interface DescribeRemediationExceptionsResponse {
		RemediationExceptions?: Array<RemediationException>;
		NextToken?: string;
	}

	export interface DescribeRemediationExceptionsRequest {
		ConfigRuleName: string;
		ResourceKeys?: Array<RemediationExceptionResourceKey>;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeRemediationExecutionStatusResponse {
		RemediationExecutionStatuses?: Array<RemediationExecutionStatus>;
		NextToken?: string;
	}

	export interface DescribeRemediationExecutionStatusRequest {
		ConfigRuleName: string;
		ResourceKeys?: Array<ResourceKey>;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeRetentionConfigurationsResponse {
		RetentionConfigurations?: Array<RetentionConfiguration>;
		NextToken?: string;
	}

	export interface DescribeRetentionConfigurationsRequest {
		RetentionConfigurationNames?: Array<RetentionConfigurationName>;
		NextToken?: string;
	}

	export interface GetAggregateComplianceDetailsByConfigRuleResponse {
		AggregateEvaluationResults?: Array<AggregateEvaluationResult>;
		NextToken?: string;
	}

	export interface GetAggregateComplianceDetailsByConfigRuleRequest {
		ConfigurationAggregatorName: string;
		ConfigRuleName: string;
		AccountId: string;
		AwsRegion: string;
		ComplianceType?: GetAggregateComplianceDetailsByConfigRuleRequestComplianceType;
		Limit?: number;
		NextToken?: string;
	}

	export enum GetAggregateComplianceDetailsByConfigRuleRequestComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1, NOT_APPLICABLE = 2, INSUFFICIENT_DATA = 3 }

	export interface GetAggregateConfigRuleComplianceSummaryResponse {
		GroupByKey?: string;
		AggregateComplianceCounts?: Array<AggregateComplianceCount>;
		NextToken?: string;
	}

	export interface GetAggregateConfigRuleComplianceSummaryRequest {
		ConfigurationAggregatorName: string;

		/**Filters the results based on the account IDs and regions. */
		Filters?: ConfigRuleComplianceSummaryFilters;
		GroupByKey?: GetAggregateConfigRuleComplianceSummaryRequestGroupByKey;
		Limit?: number;
		NextToken?: string;
	}

	export enum GetAggregateConfigRuleComplianceSummaryRequestGroupByKey { ACCOUNT_ID = 0, AWS_REGION = 1 }

	export interface GetAggregateDiscoveredResourceCountsResponse {
		TotalDiscoveredResources: number;
		GroupByKey?: string;
		GroupedResourceCounts?: Array<GroupedResourceCount>;
		NextToken?: string;
	}

	export interface GetAggregateDiscoveredResourceCountsRequest {
		ConfigurationAggregatorName: string;

		/**Filters the resource count based on account ID, region, and resource type. */
		Filters?: ResourceCountFilters;
		GroupByKey?: GetAggregateDiscoveredResourceCountsRequestGroupByKey;
		Limit?: number;
		NextToken?: string;
	}

	export enum GetAggregateDiscoveredResourceCountsRequestGroupByKey { RESOURCE_TYPE = 0, ACCOUNT_ID = 1, AWS_REGION = 2 }

	export interface GetAggregateResourceConfigResponse {

		/**A list that contains detailed configurations of a specified resource. */
		ConfigurationItem?: ConfigurationItem;
	}

	export interface GetAggregateResourceConfigRequest {
		ConfigurationAggregatorName: string;

		/**The details that identify a resource that is collected by AWS Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region. */
		ResourceIdentifier: AggregateResourceIdentifier;
	}


	/**<p/> */
	export interface GetComplianceDetailsByConfigRuleResponse {
		EvaluationResults?: Array<EvaluationResult>;
		NextToken?: string;
	}


	/**<p/> */
	export interface GetComplianceDetailsByConfigRuleRequest {
		ConfigRuleName: string;
		ComplianceTypes?: Array<ComplianceType>;
		Limit?: number;
		NextToken?: string;
	}


	/**<p/> */
	export interface GetComplianceDetailsByResourceResponse {
		EvaluationResults?: Array<EvaluationResult>;
		NextToken?: string;
	}


	/**<p/> */
	export interface GetComplianceDetailsByResourceRequest {
		ResourceType: string;
		ResourceId: string;
		ComplianceTypes?: Array<ComplianceType>;
		NextToken?: string;
	}


	/**<p/> */
	export interface GetComplianceSummaryByConfigRuleResponse {

		/**The number of AWS Config rules or AWS resources that are compliant and noncompliant. */
		ComplianceSummary?: ComplianceSummary;
	}


	/**<p/> */
	export interface GetComplianceSummaryByResourceTypeResponse {
		ComplianceSummariesByResourceType?: Array<ComplianceSummaryByResourceType>;
	}


	/**<p/> */
	export interface GetComplianceSummaryByResourceTypeRequest {
		ResourceTypes?: Array<StringWithCharLimit256>;
	}

	export interface GetConformancePackComplianceDetailsResponse {
		ConformancePackName: string;
		ConformancePackRuleEvaluationResults?: Array<ConformancePackEvaluationResult>;
		NextToken?: string;
	}

	export interface GetConformancePackComplianceDetailsRequest {
		ConformancePackName: string;

		/**Filters a conformance pack by AWS Config rule names, compliance types, AWS resource types, and resource IDs. */
		Filters?: ConformancePackEvaluationFilters;
		Limit?: number;
		NextToken?: string;
	}

	export interface GetConformancePackComplianceSummaryResponse {
		ConformancePackComplianceSummaryList?: Array<ConformancePackComplianceSummary>;
		NextToken?: string;
	}

	export interface GetConformancePackComplianceSummaryRequest {
		ConformancePackNames: Array<ConformancePackName>;
		Limit?: number;
		NextToken?: string;
	}

	export interface GetDiscoveredResourceCountsResponse {
		totalDiscoveredResources?: number;
		resourceCounts?: Array<ResourceCount>;
		nextToken?: string;
	}

	export interface GetDiscoveredResourceCountsRequest {
		resourceTypes?: Array<StringWithCharLimit256>;
		limit?: number;
		nextToken?: string;
	}

	export interface GetOrganizationConfigRuleDetailedStatusResponse {
		OrganizationConfigRuleDetailedStatus?: Array<MemberAccountStatus>;
		NextToken?: string;
	}

	export interface GetOrganizationConfigRuleDetailedStatusRequest {
		OrganizationConfigRuleName: string;

		/**Status filter object to filter results based on specific member account ID or status type for an organization config rule. */
		Filters?: StatusDetailFilters;
		Limit?: number;
		NextToken?: string;
	}

	export interface GetOrganizationConformancePackDetailedStatusResponse {
		OrganizationConformancePackDetailedStatuses?: Array<OrganizationConformancePackDetailedStatus>;
		NextToken?: string;
	}

	export interface GetOrganizationConformancePackDetailedStatusRequest {
		OrganizationConformancePackName: string;

		/**Status filter object to filter results based on specific member account ID or status type for an organization conformance pack. */
		Filters?: OrganizationResourceDetailedStatusFilters;
		Limit?: number;
		NextToken?: string;
	}


	/**The output for the <a>GetResourceConfigHistory</a> action. */
	export interface GetResourceConfigHistoryResponse {
		configurationItems?: Array<ConfigurationItem>;
		nextToken?: string;
	}


	/**The input for the <a>GetResourceConfigHistory</a> action. */
	export interface GetResourceConfigHistoryRequest {
		resourceType: GetResourceConfigHistoryRequestResourceType;
		resourceId: string;
		laterTime?: Date;
		earlierTime?: Date;
		chronologicalOrder?: GetResourceConfigHistoryRequestChronologicalOrder;
		limit?: number;
		nextToken?: string;
	}

	export enum GetResourceConfigHistoryRequestResourceType { AWS::EC2::CustomerGateway = 0, AWS::EC2::EIP = 1, AWS::EC2::Host = 2, AWS::EC2::Instance = 3, AWS::EC2::InternetGateway = 4, AWS::EC2::NetworkAcl = 5, AWS::EC2::NetworkInterface = 6, AWS::EC2::RouteTable = 7, AWS::EC2::SecurityGroup = 8, AWS::EC2::Subnet = 9, AWS::CloudTrail::Trail = 10, AWS::EC2::Volume = 11, AWS::EC2::VPC = 12, AWS::EC2::VPNConnection = 13, AWS::EC2::VPNGateway = 14, AWS::EC2::RegisteredHAInstance = 15, AWS::EC2::NatGateway = 16, AWS::EC2::EgressOnlyInternetGateway = 17, AWS::EC2::VPCEndpoint = 18, AWS::EC2::VPCEndpointService = 19, AWS::EC2::FlowLog = 20, AWS::EC2::VPCPeeringConnection = 21, AWS::Elasticsearch::Domain = 22, AWS::IAM::Group = 23, AWS::IAM::Policy = 24, AWS::IAM::Role = 25, AWS::IAM::User = 26, AWS::ElasticLoadBalancingV2::LoadBalancer = 27, AWS::ACM::Certificate = 28, AWS::RDS::DBInstance = 29, AWS::RDS::DBSubnetGroup = 30, AWS::RDS::DBSecurityGroup = 31, AWS::RDS::DBSnapshot = 32, AWS::RDS::DBCluster = 33, AWS::RDS::DBClusterSnapshot = 34, AWS::RDS::EventSubscription = 35, AWS::S3::Bucket = 36, AWS::S3::AccountPublicAccessBlock = 37, AWS::Redshift::Cluster = 38, AWS::Redshift::ClusterSnapshot = 39, AWS::Redshift::ClusterParameterGroup = 40, AWS::Redshift::ClusterSecurityGroup = 41, AWS::Redshift::ClusterSubnetGroup = 42, AWS::Redshift::EventSubscription = 43, AWS::SSM::ManagedInstanceInventory = 44, AWS::CloudWatch::Alarm = 45, AWS::CloudFormation::Stack = 46, AWS::ElasticLoadBalancing::LoadBalancer = 47, AWS::AutoScaling::AutoScalingGroup = 48, AWS::AutoScaling::LaunchConfiguration = 49, AWS::AutoScaling::ScalingPolicy = 50, AWS::AutoScaling::ScheduledAction = 51, AWS::DynamoDB::Table = 52, AWS::CodeBuild::Project = 53, AWS::WAF::RateBasedRule = 54, AWS::WAF::Rule = 55, AWS::WAF::RuleGroup = 56, AWS::WAF::WebACL = 57, AWS::WAFRegional::RateBasedRule = 58, AWS::WAFRegional::Rule = 59, AWS::WAFRegional::RuleGroup = 60, AWS::WAFRegional::WebACL = 61, AWS::CloudFront::Distribution = 62, AWS::CloudFront::StreamingDistribution = 63, AWS::Lambda::Function = 64, AWS::ElasticBeanstalk::Application = 65, AWS::ElasticBeanstalk::ApplicationVersion = 66, AWS::ElasticBeanstalk::Environment = 67, AWS::WAFv2::WebACL = 68, AWS::WAFv2::RuleGroup = 69, AWS::WAFv2::IPSet = 70, AWS::WAFv2::RegexPatternSet = 71, AWS::WAFv2::ManagedRuleSet = 72, AWS::XRay::EncryptionConfig = 73, AWS::SSM::AssociationCompliance = 74, AWS::SSM::PatchCompliance = 75, AWS::Shield::Protection = 76, AWS::ShieldRegional::Protection = 77, AWS::Config::ResourceCompliance = 78, AWS::ApiGateway::Stage = 79, AWS::ApiGateway::RestApi = 80, AWS::ApiGatewayV2::Stage = 81, AWS::ApiGatewayV2::Api = 82, AWS::CodePipeline::Pipeline = 83, AWS::ServiceCatalog::CloudFormationProvisionedProduct = 84, AWS::ServiceCatalog::CloudFormationProduct = 85, AWS::ServiceCatalog::Portfolio = 86, AWS::SQS::Queue = 87, AWS::KMS::Key = 88, AWS::QLDB::Ledger = 89 }

	export enum GetResourceConfigHistoryRequestChronologicalOrder { Reverse = 0, Forward = 1 }

	export interface ListAggregateDiscoveredResourcesResponse {
		ResourceIdentifiers?: Array<AggregateResourceIdentifier>;
		NextToken?: string;
	}

	export interface ListAggregateDiscoveredResourcesRequest {
		ConfigurationAggregatorName: string;
		ResourceType: ListAggregateDiscoveredResourcesRequestResourceType;

		/**Filters the results by resource account ID, region, resource ID, and resource name. */
		Filters?: ResourceFilters;
		Limit?: number;
		NextToken?: string;
	}

	export enum ListAggregateDiscoveredResourcesRequestResourceType { AWS::EC2::CustomerGateway = 0, AWS::EC2::EIP = 1, AWS::EC2::Host = 2, AWS::EC2::Instance = 3, AWS::EC2::InternetGateway = 4, AWS::EC2::NetworkAcl = 5, AWS::EC2::NetworkInterface = 6, AWS::EC2::RouteTable = 7, AWS::EC2::SecurityGroup = 8, AWS::EC2::Subnet = 9, AWS::CloudTrail::Trail = 10, AWS::EC2::Volume = 11, AWS::EC2::VPC = 12, AWS::EC2::VPNConnection = 13, AWS::EC2::VPNGateway = 14, AWS::EC2::RegisteredHAInstance = 15, AWS::EC2::NatGateway = 16, AWS::EC2::EgressOnlyInternetGateway = 17, AWS::EC2::VPCEndpoint = 18, AWS::EC2::VPCEndpointService = 19, AWS::EC2::FlowLog = 20, AWS::EC2::VPCPeeringConnection = 21, AWS::Elasticsearch::Domain = 22, AWS::IAM::Group = 23, AWS::IAM::Policy = 24, AWS::IAM::Role = 25, AWS::IAM::User = 26, AWS::ElasticLoadBalancingV2::LoadBalancer = 27, AWS::ACM::Certificate = 28, AWS::RDS::DBInstance = 29, AWS::RDS::DBSubnetGroup = 30, AWS::RDS::DBSecurityGroup = 31, AWS::RDS::DBSnapshot = 32, AWS::RDS::DBCluster = 33, AWS::RDS::DBClusterSnapshot = 34, AWS::RDS::EventSubscription = 35, AWS::S3::Bucket = 36, AWS::S3::AccountPublicAccessBlock = 37, AWS::Redshift::Cluster = 38, AWS::Redshift::ClusterSnapshot = 39, AWS::Redshift::ClusterParameterGroup = 40, AWS::Redshift::ClusterSecurityGroup = 41, AWS::Redshift::ClusterSubnetGroup = 42, AWS::Redshift::EventSubscription = 43, AWS::SSM::ManagedInstanceInventory = 44, AWS::CloudWatch::Alarm = 45, AWS::CloudFormation::Stack = 46, AWS::ElasticLoadBalancing::LoadBalancer = 47, AWS::AutoScaling::AutoScalingGroup = 48, AWS::AutoScaling::LaunchConfiguration = 49, AWS::AutoScaling::ScalingPolicy = 50, AWS::AutoScaling::ScheduledAction = 51, AWS::DynamoDB::Table = 52, AWS::CodeBuild::Project = 53, AWS::WAF::RateBasedRule = 54, AWS::WAF::Rule = 55, AWS::WAF::RuleGroup = 56, AWS::WAF::WebACL = 57, AWS::WAFRegional::RateBasedRule = 58, AWS::WAFRegional::Rule = 59, AWS::WAFRegional::RuleGroup = 60, AWS::WAFRegional::WebACL = 61, AWS::CloudFront::Distribution = 62, AWS::CloudFront::StreamingDistribution = 63, AWS::Lambda::Function = 64, AWS::ElasticBeanstalk::Application = 65, AWS::ElasticBeanstalk::ApplicationVersion = 66, AWS::ElasticBeanstalk::Environment = 67, AWS::WAFv2::WebACL = 68, AWS::WAFv2::RuleGroup = 69, AWS::WAFv2::IPSet = 70, AWS::WAFv2::RegexPatternSet = 71, AWS::WAFv2::ManagedRuleSet = 72, AWS::XRay::EncryptionConfig = 73, AWS::SSM::AssociationCompliance = 74, AWS::SSM::PatchCompliance = 75, AWS::Shield::Protection = 76, AWS::ShieldRegional::Protection = 77, AWS::Config::ResourceCompliance = 78, AWS::ApiGateway::Stage = 79, AWS::ApiGateway::RestApi = 80, AWS::ApiGatewayV2::Stage = 81, AWS::ApiGatewayV2::Api = 82, AWS::CodePipeline::Pipeline = 83, AWS::ServiceCatalog::CloudFormationProvisionedProduct = 84, AWS::ServiceCatalog::CloudFormationProduct = 85, AWS::ServiceCatalog::Portfolio = 86, AWS::SQS::Queue = 87, AWS::KMS::Key = 88, AWS::QLDB::Ledger = 89 }


	/**<p/> */
	export interface ListDiscoveredResourcesResponse {
		resourceIdentifiers?: Array<ResourceIdentifier>;
		nextToken?: string;
	}


	/**<p/> */
	export interface ListDiscoveredResourcesRequest {
		resourceType: ListDiscoveredResourcesRequestResourceType;
		resourceIds?: Array<ResourceId>;
		resourceName?: string;
		limit?: number;
		includeDeletedResources?: boolean;
		nextToken?: string;
	}

	export enum ListDiscoveredResourcesRequestResourceType { AWS::EC2::CustomerGateway = 0, AWS::EC2::EIP = 1, AWS::EC2::Host = 2, AWS::EC2::Instance = 3, AWS::EC2::InternetGateway = 4, AWS::EC2::NetworkAcl = 5, AWS::EC2::NetworkInterface = 6, AWS::EC2::RouteTable = 7, AWS::EC2::SecurityGroup = 8, AWS::EC2::Subnet = 9, AWS::CloudTrail::Trail = 10, AWS::EC2::Volume = 11, AWS::EC2::VPC = 12, AWS::EC2::VPNConnection = 13, AWS::EC2::VPNGateway = 14, AWS::EC2::RegisteredHAInstance = 15, AWS::EC2::NatGateway = 16, AWS::EC2::EgressOnlyInternetGateway = 17, AWS::EC2::VPCEndpoint = 18, AWS::EC2::VPCEndpointService = 19, AWS::EC2::FlowLog = 20, AWS::EC2::VPCPeeringConnection = 21, AWS::Elasticsearch::Domain = 22, AWS::IAM::Group = 23, AWS::IAM::Policy = 24, AWS::IAM::Role = 25, AWS::IAM::User = 26, AWS::ElasticLoadBalancingV2::LoadBalancer = 27, AWS::ACM::Certificate = 28, AWS::RDS::DBInstance = 29, AWS::RDS::DBSubnetGroup = 30, AWS::RDS::DBSecurityGroup = 31, AWS::RDS::DBSnapshot = 32, AWS::RDS::DBCluster = 33, AWS::RDS::DBClusterSnapshot = 34, AWS::RDS::EventSubscription = 35, AWS::S3::Bucket = 36, AWS::S3::AccountPublicAccessBlock = 37, AWS::Redshift::Cluster = 38, AWS::Redshift::ClusterSnapshot = 39, AWS::Redshift::ClusterParameterGroup = 40, AWS::Redshift::ClusterSecurityGroup = 41, AWS::Redshift::ClusterSubnetGroup = 42, AWS::Redshift::EventSubscription = 43, AWS::SSM::ManagedInstanceInventory = 44, AWS::CloudWatch::Alarm = 45, AWS::CloudFormation::Stack = 46, AWS::ElasticLoadBalancing::LoadBalancer = 47, AWS::AutoScaling::AutoScalingGroup = 48, AWS::AutoScaling::LaunchConfiguration = 49, AWS::AutoScaling::ScalingPolicy = 50, AWS::AutoScaling::ScheduledAction = 51, AWS::DynamoDB::Table = 52, AWS::CodeBuild::Project = 53, AWS::WAF::RateBasedRule = 54, AWS::WAF::Rule = 55, AWS::WAF::RuleGroup = 56, AWS::WAF::WebACL = 57, AWS::WAFRegional::RateBasedRule = 58, AWS::WAFRegional::Rule = 59, AWS::WAFRegional::RuleGroup = 60, AWS::WAFRegional::WebACL = 61, AWS::CloudFront::Distribution = 62, AWS::CloudFront::StreamingDistribution = 63, AWS::Lambda::Function = 64, AWS::ElasticBeanstalk::Application = 65, AWS::ElasticBeanstalk::ApplicationVersion = 66, AWS::ElasticBeanstalk::Environment = 67, AWS::WAFv2::WebACL = 68, AWS::WAFv2::RuleGroup = 69, AWS::WAFv2::IPSet = 70, AWS::WAFv2::RegexPatternSet = 71, AWS::WAFv2::ManagedRuleSet = 72, AWS::XRay::EncryptionConfig = 73, AWS::SSM::AssociationCompliance = 74, AWS::SSM::PatchCompliance = 75, AWS::Shield::Protection = 76, AWS::ShieldRegional::Protection = 77, AWS::Config::ResourceCompliance = 78, AWS::ApiGateway::Stage = 79, AWS::ApiGateway::RestApi = 80, AWS::ApiGatewayV2::Stage = 81, AWS::ApiGatewayV2::Api = 82, AWS::CodePipeline::Pipeline = 83, AWS::ServiceCatalog::CloudFormationProvisionedProduct = 84, AWS::ServiceCatalog::CloudFormationProduct = 85, AWS::ServiceCatalog::Portfolio = 86, AWS::SQS::Queue = 87, AWS::KMS::Key = 88, AWS::QLDB::Ledger = 89 }

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
		Limit?: number;
		NextToken?: string;
	}

	export interface PutAggregationAuthorizationResponse {

		/**An object that represents the authorizations granted to aggregator accounts and regions. */
		AggregationAuthorization?: AggregationAuthorization;
	}

	export interface PutAggregationAuthorizationRequest {
		AuthorizedAccountId: string;
		AuthorizedAwsRegion: string;
		Tags?: Array<Tag>;
	}

	export interface PutConfigRuleRequest {

		/**<p>An AWS Config rule represents an AWS Lambda function that you create for a custom rule or a predefined function for an AWS managed rule. The function evaluates configuration items to assess whether your AWS resources comply with your desired configurations. This function can run when AWS Config detects a configuration change to an AWS resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the AWS CLI and AWS SDKs if you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using AWS Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p> */
		ConfigRule: ConfigRule;
		Tags?: Array<Tag>;
	}

	export interface PutConfigurationAggregatorResponse {

		/**The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator. */
		ConfigurationAggregator?: ConfigurationAggregator;
	}

	export interface PutConfigurationAggregatorRequest {
		ConfigurationAggregatorName: string;
		AccountAggregationSources?: Array<AccountAggregationSource>;

		/**This object contains regions to set up the aggregator and an IAM role to retrieve organization details. */
		OrganizationAggregationSource?: OrganizationAggregationSource;
		Tags?: Array<Tag>;
	}


	/**The input for the <a>PutConfigurationRecorder</a> action. */
	export interface PutConfigurationRecorderRequest {

		/**An object that represents the recording of configuration changes of an AWS resource. */
		ConfigurationRecorder: ConfigurationRecorder;
	}

	export interface PutConformancePackResponse {
		ConformancePackArn?: string;
	}

	export interface PutConformancePackRequest {
		ConformancePackName: string;
		TemplateS3Uri?: string;
		TemplateBody?: string;
		DeliveryS3Bucket: string;
		DeliveryS3KeyPrefix?: string;
		ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
	}


	/**The input for the <a>PutDeliveryChannel</a> action. */
	export interface PutDeliveryChannelRequest {

		/**The channel through which AWS Config delivers notifications and updated configuration states. */
		DeliveryChannel: DeliveryChannel;
	}


	/**<p/> */
	export interface PutEvaluationsResponse {
		FailedEvaluations?: Array<Evaluation>;
	}


	/**<p/> */
	export interface PutEvaluationsRequest {
		Evaluations?: Array<Evaluation>;
		ResultToken: string;
		TestMode?: boolean;
	}

	export interface PutOrganizationConfigRuleResponse {
		OrganizationConfigRuleArn?: string;
	}

	export interface PutOrganizationConfigRuleRequest {
		OrganizationConfigRuleName: string;

		/**An object that specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
		OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;

		/**An object that specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lamdba function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
		OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
		ExcludedAccounts?: Array<AccountId>;
	}

	export interface PutOrganizationConformancePackResponse {
		OrganizationConformancePackArn?: string;
	}

	export interface PutOrganizationConformancePackRequest {
		OrganizationConformancePackName: string;
		TemplateS3Uri?: string;
		TemplateBody?: string;
		DeliveryS3Bucket: string;
		DeliveryS3KeyPrefix?: string;
		ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
		ExcludedAccounts?: Array<AccountId>;
	}

	export interface PutRemediationConfigurationsResponse {
		FailedBatches?: Array<FailedRemediationBatch>;
	}

	export interface PutRemediationConfigurationsRequest {
		RemediationConfigurations: Array<RemediationConfiguration>;
	}

	export interface PutRemediationExceptionsResponse {
		FailedBatches?: Array<FailedRemediationExceptionBatch>;
	}

	export interface PutRemediationExceptionsRequest {
		ConfigRuleName: string;
		ResourceKeys: Array<RemediationExceptionResourceKey>;
		Message?: string;
		ExpirationTime?: Date;
	}

	export interface PutResourceConfigRequest {
		ResourceType: string;
		SchemaVersionId: string;
		ResourceId: string;
		ResourceName?: string;
		Configuration: string;
		Tags?: Tags;
	}

	export interface PutRetentionConfigurationResponse {

		/**An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in AWS Config. */
		RetentionConfiguration?: RetentionConfiguration;
	}

	export interface PutRetentionConfigurationRequest {
		RetentionPeriodInDays: number;
	}

	export interface SelectAggregateResourceConfigResponse {
		Results?: Array<String>;

		/**Details about the query. */
		QueryInfo?: QueryInfo;
		NextToken?: string;
	}

	export interface SelectAggregateResourceConfigRequest {
		Expression: string;
		ConfigurationAggregatorName: string;
		Limit?: number;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface SelectResourceConfigResponse {
		Results?: Array<String>;

		/**Details about the query. */
		QueryInfo?: QueryInfo;
		NextToken?: string;
	}

	export interface SelectResourceConfigRequest {
		Expression: string;
		Limit?: number;
		NextToken?: string;
	}


	/**<p/> */
	export interface StartConfigRulesEvaluationRequest {
		ConfigRuleNames?: Array<ConfigRuleName>;
	}


	/**The input for the <a>StartConfigurationRecorder</a> action. */
	export interface StartConfigurationRecorderRequest {
		ConfigurationRecorderName: string;
	}

	export interface StartRemediationExecutionResponse {
		FailureMessage?: string;
		FailedItems?: Array<ResourceKey>;
	}

	export interface StartRemediationExecutionRequest {
		ConfigRuleName: string;
		ResourceKeys: Array<ResourceKey>;
	}


	/**The input for the <a>StopConfigurationRecorder</a> action. */
	export interface StopConfigurationRecorderRequest {
		ConfigurationRecorderName: string;
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<TagKey>;
	}


	/**A collection of accounts and regions. */
	export interface AccountAggregationSource {
		AccountIds: Array<AccountId>;
		AllAwsRegions?: boolean;
		AwsRegions?: Array<String>;
	}


	/**Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance. */
	export interface Compliance {
		ComplianceType?: ComplianceComplianceType;

		/**The number of AWS resources or AWS Config rules responsible for the current compliance of the item, up to a maximum number. */
		ComplianceContributorCount?: ComplianceContributorCount;
	}

	export enum ComplianceComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1, NOT_APPLICABLE = 2, INSUFFICIENT_DATA = 3 }


	/**<p>Indicates whether an AWS Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p> */
	export interface AggregateComplianceByConfigRule {
		ConfigRuleName?: string;

		/**Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance. */
		Compliance?: Compliance;
		AccountId?: string;
		AwsRegion?: string;
	}


	/**The number of AWS Config rules or AWS resources that are compliant and noncompliant. */
	export interface ComplianceSummary {

		/**The number of AWS resources or AWS Config rules responsible for the current compliance of the item, up to a maximum number. */
		CompliantResourceCount?: ComplianceContributorCount;

		/**The number of AWS resources or AWS Config rules responsible for the current compliance of the item, up to a maximum number. */
		NonCompliantResourceCount?: ComplianceContributorCount;
		ComplianceSummaryTimestamp?: Date;
	}


	/**Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator. */
	export interface AggregateComplianceCount {
		GroupName?: string;

		/**The number of AWS Config rules or AWS resources that are compliant and noncompliant. */
		ComplianceSummary?: ComplianceSummary;
	}


	/**Uniquely identifies an evaluation result. */
	export interface EvaluationResultIdentifier {

		/**Identifies an AWS Config rule that evaluated an AWS resource, and provides the type and ID of the resource that the rule evaluated. */
		EvaluationResultQualifier?: EvaluationResultQualifier;
		OrderingTimestamp?: Date;
	}

	export enum ComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1, NOT_APPLICABLE = 2, INSUFFICIENT_DATA = 3 }


	/**The details of an AWS Config evaluation for an account ID and region in an aggregator. Provides the AWS resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.  */
	export interface AggregateEvaluationResult {

		/**Uniquely identifies an evaluation result. */
		EvaluationResultIdentifier?: EvaluationResultIdentifier;
		ComplianceType?: AggregateEvaluationResultComplianceType;
		ResultRecordedTime?: Date;
		ConfigRuleInvokedTime?: Date;
		Annotation?: string;
		AccountId?: string;
		AwsRegion?: string;
	}

	export enum AggregateEvaluationResultComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1, NOT_APPLICABLE = 2, INSUFFICIENT_DATA = 3 }

	export enum ResourceType { AWS::EC2::CustomerGateway = 0, AWS::EC2::EIP = 1, AWS::EC2::Host = 2, AWS::EC2::Instance = 3, AWS::EC2::InternetGateway = 4, AWS::EC2::NetworkAcl = 5, AWS::EC2::NetworkInterface = 6, AWS::EC2::RouteTable = 7, AWS::EC2::SecurityGroup = 8, AWS::EC2::Subnet = 9, AWS::CloudTrail::Trail = 10, AWS::EC2::Volume = 11, AWS::EC2::VPC = 12, AWS::EC2::VPNConnection = 13, AWS::EC2::VPNGateway = 14, AWS::EC2::RegisteredHAInstance = 15, AWS::EC2::NatGateway = 16, AWS::EC2::EgressOnlyInternetGateway = 17, AWS::EC2::VPCEndpoint = 18, AWS::EC2::VPCEndpointService = 19, AWS::EC2::FlowLog = 20, AWS::EC2::VPCPeeringConnection = 21, AWS::Elasticsearch::Domain = 22, AWS::IAM::Group = 23, AWS::IAM::Policy = 24, AWS::IAM::Role = 25, AWS::IAM::User = 26, AWS::ElasticLoadBalancingV2::LoadBalancer = 27, AWS::ACM::Certificate = 28, AWS::RDS::DBInstance = 29, AWS::RDS::DBSubnetGroup = 30, AWS::RDS::DBSecurityGroup = 31, AWS::RDS::DBSnapshot = 32, AWS::RDS::DBCluster = 33, AWS::RDS::DBClusterSnapshot = 34, AWS::RDS::EventSubscription = 35, AWS::S3::Bucket = 36, AWS::S3::AccountPublicAccessBlock = 37, AWS::Redshift::Cluster = 38, AWS::Redshift::ClusterSnapshot = 39, AWS::Redshift::ClusterParameterGroup = 40, AWS::Redshift::ClusterSecurityGroup = 41, AWS::Redshift::ClusterSubnetGroup = 42, AWS::Redshift::EventSubscription = 43, AWS::SSM::ManagedInstanceInventory = 44, AWS::CloudWatch::Alarm = 45, AWS::CloudFormation::Stack = 46, AWS::ElasticLoadBalancing::LoadBalancer = 47, AWS::AutoScaling::AutoScalingGroup = 48, AWS::AutoScaling::LaunchConfiguration = 49, AWS::AutoScaling::ScalingPolicy = 50, AWS::AutoScaling::ScheduledAction = 51, AWS::DynamoDB::Table = 52, AWS::CodeBuild::Project = 53, AWS::WAF::RateBasedRule = 54, AWS::WAF::Rule = 55, AWS::WAF::RuleGroup = 56, AWS::WAF::WebACL = 57, AWS::WAFRegional::RateBasedRule = 58, AWS::WAFRegional::Rule = 59, AWS::WAFRegional::RuleGroup = 60, AWS::WAFRegional::WebACL = 61, AWS::CloudFront::Distribution = 62, AWS::CloudFront::StreamingDistribution = 63, AWS::Lambda::Function = 64, AWS::ElasticBeanstalk::Application = 65, AWS::ElasticBeanstalk::ApplicationVersion = 66, AWS::ElasticBeanstalk::Environment = 67, AWS::WAFv2::WebACL = 68, AWS::WAFv2::RuleGroup = 69, AWS::WAFv2::IPSet = 70, AWS::WAFv2::RegexPatternSet = 71, AWS::WAFv2::ManagedRuleSet = 72, AWS::XRay::EncryptionConfig = 73, AWS::SSM::AssociationCompliance = 74, AWS::SSM::PatchCompliance = 75, AWS::Shield::Protection = 76, AWS::ShieldRegional::Protection = 77, AWS::Config::ResourceCompliance = 78, AWS::ApiGateway::Stage = 79, AWS::ApiGateway::RestApi = 80, AWS::ApiGatewayV2::Stage = 81, AWS::ApiGatewayV2::Api = 82, AWS::CodePipeline::Pipeline = 83, AWS::ServiceCatalog::CloudFormationProvisionedProduct = 84, AWS::ServiceCatalog::CloudFormationProduct = 85, AWS::ServiceCatalog::Portfolio = 86, AWS::SQS::Queue = 87, AWS::KMS::Key = 88, AWS::QLDB::Ledger = 89 }


	/**The details that identify a resource that is collected by AWS Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region. */
	export interface AggregateResourceIdentifier {
		SourceAccountId: string;
		SourceRegion: string;
		ResourceId: string;
		ResourceType: AggregateResourceIdentifierResourceType;
		ResourceName?: string;
	}

	export enum AggregateResourceIdentifierResourceType { AWS::EC2::CustomerGateway = 0, AWS::EC2::EIP = 1, AWS::EC2::Host = 2, AWS::EC2::Instance = 3, AWS::EC2::InternetGateway = 4, AWS::EC2::NetworkAcl = 5, AWS::EC2::NetworkInterface = 6, AWS::EC2::RouteTable = 7, AWS::EC2::SecurityGroup = 8, AWS::EC2::Subnet = 9, AWS::CloudTrail::Trail = 10, AWS::EC2::Volume = 11, AWS::EC2::VPC = 12, AWS::EC2::VPNConnection = 13, AWS::EC2::VPNGateway = 14, AWS::EC2::RegisteredHAInstance = 15, AWS::EC2::NatGateway = 16, AWS::EC2::EgressOnlyInternetGateway = 17, AWS::EC2::VPCEndpoint = 18, AWS::EC2::VPCEndpointService = 19, AWS::EC2::FlowLog = 20, AWS::EC2::VPCPeeringConnection = 21, AWS::Elasticsearch::Domain = 22, AWS::IAM::Group = 23, AWS::IAM::Policy = 24, AWS::IAM::Role = 25, AWS::IAM::User = 26, AWS::ElasticLoadBalancingV2::LoadBalancer = 27, AWS::ACM::Certificate = 28, AWS::RDS::DBInstance = 29, AWS::RDS::DBSubnetGroup = 30, AWS::RDS::DBSecurityGroup = 31, AWS::RDS::DBSnapshot = 32, AWS::RDS::DBCluster = 33, AWS::RDS::DBClusterSnapshot = 34, AWS::RDS::EventSubscription = 35, AWS::S3::Bucket = 36, AWS::S3::AccountPublicAccessBlock = 37, AWS::Redshift::Cluster = 38, AWS::Redshift::ClusterSnapshot = 39, AWS::Redshift::ClusterParameterGroup = 40, AWS::Redshift::ClusterSecurityGroup = 41, AWS::Redshift::ClusterSubnetGroup = 42, AWS::Redshift::EventSubscription = 43, AWS::SSM::ManagedInstanceInventory = 44, AWS::CloudWatch::Alarm = 45, AWS::CloudFormation::Stack = 46, AWS::ElasticLoadBalancing::LoadBalancer = 47, AWS::AutoScaling::AutoScalingGroup = 48, AWS::AutoScaling::LaunchConfiguration = 49, AWS::AutoScaling::ScalingPolicy = 50, AWS::AutoScaling::ScheduledAction = 51, AWS::DynamoDB::Table = 52, AWS::CodeBuild::Project = 53, AWS::WAF::RateBasedRule = 54, AWS::WAF::Rule = 55, AWS::WAF::RuleGroup = 56, AWS::WAF::WebACL = 57, AWS::WAFRegional::RateBasedRule = 58, AWS::WAFRegional::Rule = 59, AWS::WAFRegional::RuleGroup = 60, AWS::WAFRegional::WebACL = 61, AWS::CloudFront::Distribution = 62, AWS::CloudFront::StreamingDistribution = 63, AWS::Lambda::Function = 64, AWS::ElasticBeanstalk::Application = 65, AWS::ElasticBeanstalk::ApplicationVersion = 66, AWS::ElasticBeanstalk::Environment = 67, AWS::WAFv2::WebACL = 68, AWS::WAFv2::RuleGroup = 69, AWS::WAFv2::IPSet = 70, AWS::WAFv2::RegexPatternSet = 71, AWS::WAFv2::ManagedRuleSet = 72, AWS::XRay::EncryptionConfig = 73, AWS::SSM::AssociationCompliance = 74, AWS::SSM::PatchCompliance = 75, AWS::Shield::Protection = 76, AWS::ShieldRegional::Protection = 77, AWS::Config::ResourceCompliance = 78, AWS::ApiGateway::Stage = 79, AWS::ApiGateway::RestApi = 80, AWS::ApiGatewayV2::Stage = 81, AWS::ApiGatewayV2::Api = 82, AWS::CodePipeline::Pipeline = 83, AWS::ServiceCatalog::CloudFormationProvisionedProduct = 84, AWS::ServiceCatalog::CloudFormationProduct = 85, AWS::ServiceCatalog::Portfolio = 86, AWS::SQS::Queue = 87, AWS::KMS::Key = 88, AWS::QLDB::Ledger = 89 }

	export enum AggregatedSourceType { ACCOUNT = 0, ORGANIZATION = 1 }

	export enum AggregatedSourceStatusType { FAILED = 0, SUCCEEDED = 1, OUTDATED = 2 }


	/**The current sync status between the source and the aggregator account. */
	export interface AggregatedSourceStatus {
		SourceId?: string;
		SourceType?: AggregatedSourceStatusSourceType;
		AwsRegion?: string;
		LastUpdateStatus?: AggregatedSourceStatusLastUpdateStatus;
		LastUpdateTime?: Date;
		LastErrorCode?: string;
		LastErrorMessage?: string;
	}

	export enum AggregatedSourceStatusSourceType { ACCOUNT = 0, ORGANIZATION = 1 }

	export enum AggregatedSourceStatusLastUpdateStatus { FAILED = 0, SUCCEEDED = 1, OUTDATED = 2 }


	/**An object that represents the authorizations granted to aggregator accounts and regions. */
	export interface AggregationAuthorization {
		AggregationAuthorizationArn?: string;
		AuthorizedAccountId?: string;
		AuthorizedAwsRegion?: string;
		CreationTime?: Date;
	}

	export enum ConfigurationItemStatus { OK = 0, ResourceDiscovered = 1, ResourceNotRecorded = 2, ResourceDeleted = 3, ResourceDeletedNotRecorded = 4 }


	/**The detailed configuration of a specified resource. */
	export interface BaseConfigurationItem {
		version?: string;
		accountId?: string;
		configurationItemCaptureTime?: Date;
		configurationItemStatus?: BaseConfigurationItemConfigurationItemStatus;
		configurationStateId?: string;
		arn?: string;
		resourceType?: BaseConfigurationItemResourceType;
		resourceId?: string;
		resourceName?: string;
		awsRegion?: string;
		availabilityZone?: string;
		resourceCreationTime?: Date;
		configuration?: string;
		supplementaryConfiguration?: SupplementaryConfiguration;
	}

	export enum BaseConfigurationItemConfigurationItemStatus { OK = 0, ResourceDiscovered = 1, ResourceNotRecorded = 2, ResourceDeleted = 3, ResourceDeletedNotRecorded = 4 }

	export enum BaseConfigurationItemResourceType { AWS::EC2::CustomerGateway = 0, AWS::EC2::EIP = 1, AWS::EC2::Host = 2, AWS::EC2::Instance = 3, AWS::EC2::InternetGateway = 4, AWS::EC2::NetworkAcl = 5, AWS::EC2::NetworkInterface = 6, AWS::EC2::RouteTable = 7, AWS::EC2::SecurityGroup = 8, AWS::EC2::Subnet = 9, AWS::CloudTrail::Trail = 10, AWS::EC2::Volume = 11, AWS::EC2::VPC = 12, AWS::EC2::VPNConnection = 13, AWS::EC2::VPNGateway = 14, AWS::EC2::RegisteredHAInstance = 15, AWS::EC2::NatGateway = 16, AWS::EC2::EgressOnlyInternetGateway = 17, AWS::EC2::VPCEndpoint = 18, AWS::EC2::VPCEndpointService = 19, AWS::EC2::FlowLog = 20, AWS::EC2::VPCPeeringConnection = 21, AWS::Elasticsearch::Domain = 22, AWS::IAM::Group = 23, AWS::IAM::Policy = 24, AWS::IAM::Role = 25, AWS::IAM::User = 26, AWS::ElasticLoadBalancingV2::LoadBalancer = 27, AWS::ACM::Certificate = 28, AWS::RDS::DBInstance = 29, AWS::RDS::DBSubnetGroup = 30, AWS::RDS::DBSecurityGroup = 31, AWS::RDS::DBSnapshot = 32, AWS::RDS::DBCluster = 33, AWS::RDS::DBClusterSnapshot = 34, AWS::RDS::EventSubscription = 35, AWS::S3::Bucket = 36, AWS::S3::AccountPublicAccessBlock = 37, AWS::Redshift::Cluster = 38, AWS::Redshift::ClusterSnapshot = 39, AWS::Redshift::ClusterParameterGroup = 40, AWS::Redshift::ClusterSecurityGroup = 41, AWS::Redshift::ClusterSubnetGroup = 42, AWS::Redshift::EventSubscription = 43, AWS::SSM::ManagedInstanceInventory = 44, AWS::CloudWatch::Alarm = 45, AWS::CloudFormation::Stack = 46, AWS::ElasticLoadBalancing::LoadBalancer = 47, AWS::AutoScaling::AutoScalingGroup = 48, AWS::AutoScaling::LaunchConfiguration = 49, AWS::AutoScaling::ScalingPolicy = 50, AWS::AutoScaling::ScheduledAction = 51, AWS::DynamoDB::Table = 52, AWS::CodeBuild::Project = 53, AWS::WAF::RateBasedRule = 54, AWS::WAF::Rule = 55, AWS::WAF::RuleGroup = 56, AWS::WAF::WebACL = 57, AWS::WAFRegional::RateBasedRule = 58, AWS::WAFRegional::Rule = 59, AWS::WAFRegional::RuleGroup = 60, AWS::WAFRegional::WebACL = 61, AWS::CloudFront::Distribution = 62, AWS::CloudFront::StreamingDistribution = 63, AWS::Lambda::Function = 64, AWS::ElasticBeanstalk::Application = 65, AWS::ElasticBeanstalk::ApplicationVersion = 66, AWS::ElasticBeanstalk::Environment = 67, AWS::WAFv2::WebACL = 68, AWS::WAFv2::RuleGroup = 69, AWS::WAFv2::IPSet = 70, AWS::WAFv2::RegexPatternSet = 71, AWS::WAFv2::ManagedRuleSet = 72, AWS::XRay::EncryptionConfig = 73, AWS::SSM::AssociationCompliance = 74, AWS::SSM::PatchCompliance = 75, AWS::Shield::Protection = 76, AWS::ShieldRegional::Protection = 77, AWS::Config::ResourceCompliance = 78, AWS::ApiGateway::Stage = 79, AWS::ApiGateway::RestApi = 80, AWS::ApiGatewayV2::Stage = 81, AWS::ApiGatewayV2::Api = 82, AWS::CodePipeline::Pipeline = 83, AWS::ServiceCatalog::CloudFormationProvisionedProduct = 84, AWS::ServiceCatalog::CloudFormationProduct = 85, AWS::ServiceCatalog::Portfolio = 86, AWS::SQS::Queue = 87, AWS::KMS::Key = 88, AWS::QLDB::Ledger = 89 }

	export enum ChronologicalOrder { Reverse = 0, Forward = 1 }


	/**The number of AWS resources or AWS Config rules responsible for the current compliance of the item, up to a maximum number. */
	export interface ComplianceContributorCount {
		CappedCount?: number;
		CapExceeded?: boolean;
	}


	/**Indicates whether an AWS Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply. */
	export interface ComplianceByConfigRule {
		ConfigRuleName?: string;

		/**Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance. */
		Compliance?: Compliance;
	}


	/**Indicates whether an AWS resource that is evaluated according to one or more AWS Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules. */
	export interface ComplianceByResource {
		ResourceType?: string;
		ResourceId?: string;

		/**Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance. */
		Compliance?: Compliance;
	}


	/**The number of AWS resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each. */
	export interface ComplianceSummaryByResourceType {
		ResourceType?: string;

		/**The number of AWS Config rules or AWS resources that are compliant and noncompliant. */
		ComplianceSummary?: ComplianceSummary;
	}

	export enum DeliveryStatus { Success = 0, Failure = 1, Not_Applicable = 2 }


	/**Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic. */
	export interface ConfigExportDeliveryInfo {
		lastStatus?: ConfigExportDeliveryInfoLastStatus;
		lastErrorCode?: string;
		lastErrorMessage?: string;
		lastAttemptTime?: Date;
		lastSuccessfulTime?: Date;
		nextDeliveryTime?: Date;
	}

	export enum ConfigExportDeliveryInfoLastStatus { Success = 0, Failure = 1, Not_Applicable = 2 }


	/**Defines which resources trigger an evaluation for an AWS Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration. */
	export interface Scope {
		ComplianceResourceTypes?: Array<StringWithCharLimit256>;
		TagKey?: string;
		TagValue?: string;
		ComplianceResourceId?: string;
	}


	/**Provides the AWS Config rule owner (AWS or customer), the rule identifier, and the events that trigger the evaluation of your AWS resources. */
	export interface Source {
		Owner: SourceOwner;
		SourceIdentifier: string;
		SourceDetails?: Array<SourceDetail>;
	}

	export enum SourceOwner { CUSTOM_LAMBDA = 0, AWS = 1 }

	export enum MaximumExecutionFrequency { One_Hour = 0, Three_Hours = 1, Six_Hours = 2, Twelve_Hours = 3, TwentyFour_Hours = 4 }

	export enum ConfigRuleState { ACTIVE = 0, DELETING = 1, DELETING_RESULTS = 2, EVALUATING = 3 }


	/**<p>An AWS Config rule represents an AWS Lambda function that you create for a custom rule or a predefined function for an AWS managed rule. The function evaluates configuration items to assess whether your AWS resources comply with your desired configurations. This function can run when AWS Config detects a configuration change to an AWS resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the AWS CLI and AWS SDKs if you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using AWS Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p> */
	export interface ConfigRule {
		ConfigRuleName?: string;
		ConfigRuleArn?: string;
		ConfigRuleId?: string;
		Description?: string;

		/**Defines which resources trigger an evaluation for an AWS Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration. */
		Scope?: Scope;

		/**Provides the AWS Config rule owner (AWS or customer), the rule identifier, and the events that trigger the evaluation of your AWS resources. */
		Source: Source;
		InputParameters?: string;
		MaximumExecutionFrequency?: ConfigRuleMaximumExecutionFrequency;
		ConfigRuleState?: ConfigRuleConfigRuleState;
		CreatedBy?: string;
	}

	export enum ConfigRuleMaximumExecutionFrequency { One_Hour = 0, Three_Hours = 1, Six_Hours = 2, Twelve_Hours = 3, TwentyFour_Hours = 4 }

	export enum ConfigRuleConfigRuleState { ACTIVE = 0, DELETING = 1, DELETING_RESULTS = 2, EVALUATING = 3 }


	/**Filters the compliance results based on account ID, region, compliance type, and rule name. */
	export interface ConfigRuleComplianceFilters {
		ConfigRuleName?: string;
		ComplianceType?: ConfigRuleComplianceFiltersComplianceType;
		AccountId?: string;
		AwsRegion?: string;
	}

	export enum ConfigRuleComplianceFiltersComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1, NOT_APPLICABLE = 2, INSUFFICIENT_DATA = 3 }


	/**Filters the results based on the account IDs and regions. */
	export interface ConfigRuleComplianceSummaryFilters {
		AccountId?: string;
		AwsRegion?: string;
	}

	export enum ConfigRuleComplianceSummaryGroupKey { ACCOUNT_ID = 0, AWS_REGION = 1 }


	/**<p>Status information for your AWS managed Config rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about custom AWS Config rules.</p> */
	export interface ConfigRuleEvaluationStatus {
		ConfigRuleName?: string;
		ConfigRuleArn?: string;
		ConfigRuleId?: string;
		LastSuccessfulInvocationTime?: Date;
		LastFailedInvocationTime?: Date;
		LastSuccessfulEvaluationTime?: Date;
		LastFailedEvaluationTime?: Date;
		FirstActivatedTime?: Date;
		LastDeactivatedTime?: Date;
		LastErrorCode?: string;
		LastErrorMessage?: string;
		FirstEvaluationStarted?: boolean;
	}


	/**<p>Provides options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.</p> <p>The frequency for a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:</p> <ul> <li> <p>The value for the <code>deliveryFrequency</code> parameter within the delivery channel configuration, which sets how often AWS Config delivers configuration snapshots. This value also sets how often AWS Config invokes evaluations for AWS Config rules.</p> </li> <li> <p>The value for the <code>MaximumExecutionFrequency</code> parameter, which sets the maximum frequency with which AWS Config invokes evaluations for the rule. For more information, see <a>ConfigRule</a>.</p> </li> </ul> <p>If the <code>deliveryFrequency</code> value is less frequent than the <code>MaximumExecutionFrequency</code> value for a rule, AWS Config invokes the rule only as often as the <code>deliveryFrequency</code> value.</p> <ol> <li> <p>For example, you want your rule to run evaluations when AWS Config delivers the configuration snapshot.</p> </li> <li> <p>You specify the <code>MaximumExecutionFrequency</code> value for <code>Six_Hours</code>. </p> </li> <li> <p>You then specify the delivery channel <code>deliveryFrequency</code> value for <code>TwentyFour_Hours</code>.</p> </li> <li> <p>Because the value for <code>deliveryFrequency</code> is less frequent than <code>MaximumExecutionFrequency</code>, AWS Config invokes evaluations for the rule every 24 hours. </p> </li> </ol> <p>You should set the <code>MaximumExecutionFrequency</code> value to be at least as frequent as the <code>deliveryFrequency</code> value. You can view the <code>deliveryFrequency</code> value by using the <code>DescribeDeliveryChannnels</code> action.</p> <p>To update the <code>deliveryFrequency</code> with which AWS Config delivers your configuration snapshots, use the <code>PutDeliveryChannel</code> action.</p> */
	export interface ConfigSnapshotDeliveryProperties {
		deliveryFrequency?: ConfigSnapshotDeliveryPropertiesDeliveryFrequency;
	}

	export enum ConfigSnapshotDeliveryPropertiesDeliveryFrequency { One_Hour = 0, Three_Hours = 1, Six_Hours = 2, Twelve_Hours = 3, TwentyFour_Hours = 4 }


	/**A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic. */
	export interface ConfigStreamDeliveryInfo {
		lastStatus?: ConfigStreamDeliveryInfoLastStatus;
		lastErrorCode?: string;
		lastErrorMessage?: string;
		lastStatusChangeTime?: Date;
	}

	export enum ConfigStreamDeliveryInfoLastStatus { Success = 0, Failure = 1, Not_Applicable = 2 }


	/**This object contains regions to set up the aggregator and an IAM role to retrieve organization details. */
	export interface OrganizationAggregationSource {
		RoleArn: string;
		AwsRegions?: Array<String>;
		AllAwsRegions?: boolean;
	}


	/**The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator.  */
	export interface ConfigurationAggregator {
		ConfigurationAggregatorName?: string;
		ConfigurationAggregatorArn?: string;
		AccountAggregationSources?: Array<AccountAggregationSource>;

		/**This object contains regions to set up the aggregator and an IAM role to retrieve organization details. */
		OrganizationAggregationSource?: OrganizationAggregationSource;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
	}


	/**A list that contains detailed configurations of a specified resource. */
	export interface ConfigurationItem {
		version?: string;
		accountId?: string;
		configurationItemCaptureTime?: Date;
		configurationItemStatus?: ConfigurationItemConfigurationItemStatus;
		configurationStateId?: string;
		configurationItemMD5Hash?: string;
		arn?: string;
		resourceType?: ConfigurationItemResourceType;
		resourceId?: string;
		resourceName?: string;
		awsRegion?: string;
		availabilityZone?: string;
		resourceCreationTime?: Date;
		tags?: Tags;
		relatedEvents?: Array<RelatedEvent>;
		relationships?: Array<Relationship>;
		configuration?: string;
		supplementaryConfiguration?: SupplementaryConfiguration;
	}

	export enum ConfigurationItemConfigurationItemStatus { OK = 0, ResourceDiscovered = 1, ResourceNotRecorded = 2, ResourceDeleted = 3, ResourceDeletedNotRecorded = 4 }

	export enum ConfigurationItemResourceType { AWS::EC2::CustomerGateway = 0, AWS::EC2::EIP = 1, AWS::EC2::Host = 2, AWS::EC2::Instance = 3, AWS::EC2::InternetGateway = 4, AWS::EC2::NetworkAcl = 5, AWS::EC2::NetworkInterface = 6, AWS::EC2::RouteTable = 7, AWS::EC2::SecurityGroup = 8, AWS::EC2::Subnet = 9, AWS::CloudTrail::Trail = 10, AWS::EC2::Volume = 11, AWS::EC2::VPC = 12, AWS::EC2::VPNConnection = 13, AWS::EC2::VPNGateway = 14, AWS::EC2::RegisteredHAInstance = 15, AWS::EC2::NatGateway = 16, AWS::EC2::EgressOnlyInternetGateway = 17, AWS::EC2::VPCEndpoint = 18, AWS::EC2::VPCEndpointService = 19, AWS::EC2::FlowLog = 20, AWS::EC2::VPCPeeringConnection = 21, AWS::Elasticsearch::Domain = 22, AWS::IAM::Group = 23, AWS::IAM::Policy = 24, AWS::IAM::Role = 25, AWS::IAM::User = 26, AWS::ElasticLoadBalancingV2::LoadBalancer = 27, AWS::ACM::Certificate = 28, AWS::RDS::DBInstance = 29, AWS::RDS::DBSubnetGroup = 30, AWS::RDS::DBSecurityGroup = 31, AWS::RDS::DBSnapshot = 32, AWS::RDS::DBCluster = 33, AWS::RDS::DBClusterSnapshot = 34, AWS::RDS::EventSubscription = 35, AWS::S3::Bucket = 36, AWS::S3::AccountPublicAccessBlock = 37, AWS::Redshift::Cluster = 38, AWS::Redshift::ClusterSnapshot = 39, AWS::Redshift::ClusterParameterGroup = 40, AWS::Redshift::ClusterSecurityGroup = 41, AWS::Redshift::ClusterSubnetGroup = 42, AWS::Redshift::EventSubscription = 43, AWS::SSM::ManagedInstanceInventory = 44, AWS::CloudWatch::Alarm = 45, AWS::CloudFormation::Stack = 46, AWS::ElasticLoadBalancing::LoadBalancer = 47, AWS::AutoScaling::AutoScalingGroup = 48, AWS::AutoScaling::LaunchConfiguration = 49, AWS::AutoScaling::ScalingPolicy = 50, AWS::AutoScaling::ScheduledAction = 51, AWS::DynamoDB::Table = 52, AWS::CodeBuild::Project = 53, AWS::WAF::RateBasedRule = 54, AWS::WAF::Rule = 55, AWS::WAF::RuleGroup = 56, AWS::WAF::WebACL = 57, AWS::WAFRegional::RateBasedRule = 58, AWS::WAFRegional::Rule = 59, AWS::WAFRegional::RuleGroup = 60, AWS::WAFRegional::WebACL = 61, AWS::CloudFront::Distribution = 62, AWS::CloudFront::StreamingDistribution = 63, AWS::Lambda::Function = 64, AWS::ElasticBeanstalk::Application = 65, AWS::ElasticBeanstalk::ApplicationVersion = 66, AWS::ElasticBeanstalk::Environment = 67, AWS::WAFv2::WebACL = 68, AWS::WAFv2::RuleGroup = 69, AWS::WAFv2::IPSet = 70, AWS::WAFv2::RegexPatternSet = 71, AWS::WAFv2::ManagedRuleSet = 72, AWS::XRay::EncryptionConfig = 73, AWS::SSM::AssociationCompliance = 74, AWS::SSM::PatchCompliance = 75, AWS::Shield::Protection = 76, AWS::ShieldRegional::Protection = 77, AWS::Config::ResourceCompliance = 78, AWS::ApiGateway::Stage = 79, AWS::ApiGateway::RestApi = 80, AWS::ApiGatewayV2::Stage = 81, AWS::ApiGatewayV2::Api = 82, AWS::CodePipeline::Pipeline = 83, AWS::ServiceCatalog::CloudFormationProvisionedProduct = 84, AWS::ServiceCatalog::CloudFormationProduct = 85, AWS::ServiceCatalog::Portfolio = 86, AWS::SQS::Queue = 87, AWS::KMS::Key = 88, AWS::QLDB::Ledger = 89 }


	/**<p>Specifies the types of AWS resource for which AWS Config records configuration changes.</p> <p>In the recording group, you specify whether all supported types or specific types of resources are recorded.</p> <p>By default, AWS Config records configuration changes for all supported types of regional resources that AWS Config discovers in the region in which it is running. Regional resources are tied to a region and can be used only in that region. Examples of regional resources are EC2 instances and EBS volumes.</p> <p>You can also have AWS Config record configuration changes for supported types of global resources (for example, IAM resources). Global resources are not tied to an individual region and can be used in all regions.</p> <important> <p>The configuration details for any global resource are the same in all regions. If you customize AWS Config in multiple regions to record global resources, it will create multiple configuration items each time a global resource changes: one configuration item for each region. These configuration items will contain identical data. To prevent duplicate configuration items, you should consider customizing AWS Config in only one region to record global resources, unless you want the configuration items to be available in multiple regions.</p> </important> <p>If you don't want AWS Config to record all resources, you can specify which types of resources it will record with the <code>resourceTypes</code> parameter.</p> <p>For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources AWS Config Records</a>.</p> */
	export interface RecordingGroup {
		allSupported?: boolean;
		includeGlobalResourceTypes?: boolean;
		resourceTypes?: Array<ResourceType>;
	}


	/**An object that represents the recording of configuration changes of an AWS resource. */
	export interface ConfigurationRecorder {
		name?: string;
		roleARN?: string;

		/**<p>Specifies the types of AWS resource for which AWS Config records configuration changes.</p> <p>In the recording group, you specify whether all supported types or specific types of resources are recorded.</p> <p>By default, AWS Config records configuration changes for all supported types of regional resources that AWS Config discovers in the region in which it is running. Regional resources are tied to a region and can be used only in that region. Examples of regional resources are EC2 instances and EBS volumes.</p> <p>You can also have AWS Config record configuration changes for supported types of global resources (for example, IAM resources). Global resources are not tied to an individual region and can be used in all regions.</p> <important> <p>The configuration details for any global resource are the same in all regions. If you customize AWS Config in multiple regions to record global resources, it will create multiple configuration items each time a global resource changes: one configuration item for each region. These configuration items will contain identical data. To prevent duplicate configuration items, you should consider customizing AWS Config in only one region to record global resources, unless you want the configuration items to be available in multiple regions.</p> </important> <p>If you don't want AWS Config to record all resources, you can specify which types of resources it will record with the <code>resourceTypes</code> parameter.</p> <p>For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources AWS Config Records</a>.</p> */
		recordingGroup?: RecordingGroup;
	}

	export enum RecorderStatus { Pending = 0, Success = 1, Failure = 2 }


	/**The current status of the configuration recorder. */
	export interface ConfigurationRecorderStatus {
		name?: string;
		lastStartTime?: Date;
		lastStopTime?: Date;
		recording?: boolean;
		lastStatus?: ConfigurationRecorderStatusLastStatus;
		lastErrorCode?: string;
		lastErrorMessage?: string;
		lastStatusChangeTime?: Date;
	}

	export enum ConfigurationRecorderStatusLastStatus { Pending = 0, Success = 1, Failure = 2 }

	export enum ConformancePackComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1 }


	/**Filters the conformance pack by compliance types and AWS Config rule names. */
	export interface ConformancePackComplianceFilters {
		ConfigRuleNames?: Array<StringWithCharLimit64>;
		ComplianceType?: ConformancePackComplianceFiltersComplianceType;
	}

	export enum ConformancePackComplianceFiltersComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1 }


	/**Summary includes the name and status of the conformance pack. */
	export interface ConformancePackComplianceSummary {
		ConformancePackName: string;
		ConformancePackComplianceStatus: ConformancePackComplianceSummaryConformancePackComplianceStatus;
	}

	export enum ConformancePackComplianceSummaryConformancePackComplianceStatus { COMPLIANT = 0, NON_COMPLIANT = 1 }


	/**Returns details of a conformance pack. A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed in an account and a region. */
	export interface ConformancePackDetail {
		ConformancePackName: string;
		ConformancePackArn: string;
		ConformancePackId: string;
		DeliveryS3Bucket: string;
		DeliveryS3KeyPrefix?: string;
		ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
		LastUpdateRequestedTime?: Date;
		CreatedBy?: string;
	}


	/**Filters a conformance pack by AWS Config rule names, compliance types, AWS resource types, and resource IDs. */
	export interface ConformancePackEvaluationFilters {
		ConfigRuleNames?: Array<StringWithCharLimit64>;
		ComplianceType?: ConformancePackEvaluationFiltersComplianceType;
		ResourceType?: string;
		ResourceIds?: Array<StringWithCharLimit256>;
	}

	export enum ConformancePackEvaluationFiltersComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1 }


	/**The details of a conformance pack evaluation. Provides AWS Config rule and AWS resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information.  */
	export interface ConformancePackEvaluationResult {
		ComplianceType: ConformancePackEvaluationResultComplianceType;

		/**Uniquely identifies an evaluation result. */
		EvaluationResultIdentifier: EvaluationResultIdentifier;
		ConfigRuleInvokedTime: Date;
		ResultRecordedTime: Date;
		Annotation?: string;
	}

	export enum ConformancePackEvaluationResultComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1 }


	/**Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 128 characters, and values can have a maximum length of 256 characters. */
	export interface ConformancePackInputParameter {
		ParameterName: string;
		ParameterValue: string;
	}


	/**Compliance information of one or more AWS Config rules within a conformance pack. You can filter using AWS Config rule names and compliance types. */
	export interface ConformancePackRuleCompliance {
		ConfigRuleName?: string;
		ComplianceType?: ConformancePackRuleComplianceComplianceType;
	}

	export enum ConformancePackRuleComplianceComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1 }

	export enum ConformancePackState { CREATE_IN_PROGRESS = 0, CREATE_COMPLETE = 1, CREATE_FAILED = 2, DELETE_IN_PROGRESS = 3, DELETE_FAILED = 4 }


	/**Status details of a conformance pack. */
	export interface ConformancePackStatusDetail {
		ConformancePackName: string;
		ConformancePackId: string;
		ConformancePackArn: string;
		ConformancePackState: ConformancePackStatusDetailConformancePackState;
		StackArn: string;
		ConformancePackStatusReason?: string;
		LastUpdateRequestedTime: Date;
		LastUpdateCompletedTime?: Date;
	}

	export enum ConformancePackStatusDetailConformancePackState { CREATE_IN_PROGRESS = 0, CREATE_COMPLETE = 1, CREATE_FAILED = 2, DELETE_IN_PROGRESS = 3, DELETE_FAILED = 4 }


	/**The channel through which AWS Config delivers notifications and updated configuration states. */
	export interface DeliveryChannel {
		name?: string;
		s3BucketName?: string;
		s3KeyPrefix?: string;
		snsTopicARN?: string;

		/**<p>Provides options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.</p> <p>The frequency for a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:</p> <ul> <li> <p>The value for the <code>deliveryFrequency</code> parameter within the delivery channel configuration, which sets how often AWS Config delivers configuration snapshots. This value also sets how often AWS Config invokes evaluations for AWS Config rules.</p> </li> <li> <p>The value for the <code>MaximumExecutionFrequency</code> parameter, which sets the maximum frequency with which AWS Config invokes evaluations for the rule. For more information, see <a>ConfigRule</a>.</p> </li> </ul> <p>If the <code>deliveryFrequency</code> value is less frequent than the <code>MaximumExecutionFrequency</code> value for a rule, AWS Config invokes the rule only as often as the <code>deliveryFrequency</code> value.</p> <ol> <li> <p>For example, you want your rule to run evaluations when AWS Config delivers the configuration snapshot.</p> </li> <li> <p>You specify the <code>MaximumExecutionFrequency</code> value for <code>Six_Hours</code>. </p> </li> <li> <p>You then specify the delivery channel <code>deliveryFrequency</code> value for <code>TwentyFour_Hours</code>.</p> </li> <li> <p>Because the value for <code>deliveryFrequency</code> is less frequent than <code>MaximumExecutionFrequency</code>, AWS Config invokes evaluations for the rule every 24 hours. </p> </li> </ol> <p>You should set the <code>MaximumExecutionFrequency</code> value to be at least as frequent as the <code>deliveryFrequency</code> value. You can view the <code>deliveryFrequency</code> value by using the <code>DescribeDeliveryChannnels</code> action.</p> <p>To update the <code>deliveryFrequency</code> with which AWS Config delivers your configuration snapshots, use the <code>PutDeliveryChannel</code> action.</p> */
		configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;
	}


	/**<p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p> */
	export interface DeliveryChannelStatus {
		name?: string;

		/**Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic. */
		configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo;

		/**Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic. */
		configHistoryDeliveryInfo?: ConfigExportDeliveryInfo;

		/**A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic. */
		configStreamDeliveryInfo?: ConfigStreamDeliveryInfo;
	}


	/**Identifies an AWS resource and indicates whether it complies with the AWS Config rule that it was evaluated against. */
	export interface Evaluation {
		ComplianceResourceType: string;
		ComplianceResourceId: string;
		ComplianceType: EvaluationComplianceType;
		Annotation?: string;
		OrderingTimestamp: Date;
	}

	export enum EvaluationComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1, NOT_APPLICABLE = 2, INSUFFICIENT_DATA = 3 }


	/**The details of an AWS Config evaluation. Provides the AWS resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information. */
	export interface EvaluationResult {

		/**Uniquely identifies an evaluation result. */
		EvaluationResultIdentifier?: EvaluationResultIdentifier;
		ComplianceType?: EvaluationResultComplianceType;
		ResultRecordedTime?: Date;
		ConfigRuleInvokedTime?: Date;
		Annotation?: string;
		ResultToken?: string;
	}

	export enum EvaluationResultComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1, NOT_APPLICABLE = 2, INSUFFICIENT_DATA = 3 }


	/**Identifies an AWS Config rule that evaluated an AWS resource, and provides the type and ID of the resource that the rule evaluated. */
	export interface EvaluationResultQualifier {
		ConfigRuleName?: string;
		ResourceType?: string;
		ResourceId?: string;
	}

	export enum EventSource { aws.config = 0 }


	/**AWS Systems Manager (SSM) specific remediation controls. */
	export interface SsmControls {
		ConcurrentExecutionRatePercentage?: number;
		ErrorPercentage?: number;
	}


	/**The controls that AWS Config uses for executing remediations. */
	export interface ExecutionControls {

		/**AWS Systems Manager (SSM) specific remediation controls. */
		SsmControls?: SsmControls;
	}


	/**List of each of the failed delete remediation exceptions with specific reasons. */
	export interface FailedDeleteRemediationExceptionsBatch {
		FailureMessage?: string;
		FailedItems?: Array<RemediationExceptionResourceKey>;
	}


	/**List of each of the failed remediations with specific reasons. */
	export interface FailedRemediationBatch {
		FailureMessage?: string;
		FailedItems?: Array<RemediationConfiguration>;
	}


	/**List of each of the failed remediation exceptions with specific reasons. */
	export interface FailedRemediationExceptionBatch {
		FailureMessage?: string;
		FailedItems?: Array<RemediationException>;
	}


	/**Details about the fields such as name of the field. */
	export interface FieldInfo {
		Name?: string;
	}


	/**Filters the resource count based on account ID, region, and resource type. */
	export interface ResourceCountFilters {
		ResourceType?: ResourceCountFiltersResourceType;
		AccountId?: string;
		Region?: string;
	}

	export enum ResourceCountFiltersResourceType { AWS::EC2::CustomerGateway = 0, AWS::EC2::EIP = 1, AWS::EC2::Host = 2, AWS::EC2::Instance = 3, AWS::EC2::InternetGateway = 4, AWS::EC2::NetworkAcl = 5, AWS::EC2::NetworkInterface = 6, AWS::EC2::RouteTable = 7, AWS::EC2::SecurityGroup = 8, AWS::EC2::Subnet = 9, AWS::CloudTrail::Trail = 10, AWS::EC2::Volume = 11, AWS::EC2::VPC = 12, AWS::EC2::VPNConnection = 13, AWS::EC2::VPNGateway = 14, AWS::EC2::RegisteredHAInstance = 15, AWS::EC2::NatGateway = 16, AWS::EC2::EgressOnlyInternetGateway = 17, AWS::EC2::VPCEndpoint = 18, AWS::EC2::VPCEndpointService = 19, AWS::EC2::FlowLog = 20, AWS::EC2::VPCPeeringConnection = 21, AWS::Elasticsearch::Domain = 22, AWS::IAM::Group = 23, AWS::IAM::Policy = 24, AWS::IAM::Role = 25, AWS::IAM::User = 26, AWS::ElasticLoadBalancingV2::LoadBalancer = 27, AWS::ACM::Certificate = 28, AWS::RDS::DBInstance = 29, AWS::RDS::DBSubnetGroup = 30, AWS::RDS::DBSecurityGroup = 31, AWS::RDS::DBSnapshot = 32, AWS::RDS::DBCluster = 33, AWS::RDS::DBClusterSnapshot = 34, AWS::RDS::EventSubscription = 35, AWS::S3::Bucket = 36, AWS::S3::AccountPublicAccessBlock = 37, AWS::Redshift::Cluster = 38, AWS::Redshift::ClusterSnapshot = 39, AWS::Redshift::ClusterParameterGroup = 40, AWS::Redshift::ClusterSecurityGroup = 41, AWS::Redshift::ClusterSubnetGroup = 42, AWS::Redshift::EventSubscription = 43, AWS::SSM::ManagedInstanceInventory = 44, AWS::CloudWatch::Alarm = 45, AWS::CloudFormation::Stack = 46, AWS::ElasticLoadBalancing::LoadBalancer = 47, AWS::AutoScaling::AutoScalingGroup = 48, AWS::AutoScaling::LaunchConfiguration = 49, AWS::AutoScaling::ScalingPolicy = 50, AWS::AutoScaling::ScheduledAction = 51, AWS::DynamoDB::Table = 52, AWS::CodeBuild::Project = 53, AWS::WAF::RateBasedRule = 54, AWS::WAF::Rule = 55, AWS::WAF::RuleGroup = 56, AWS::WAF::WebACL = 57, AWS::WAFRegional::RateBasedRule = 58, AWS::WAFRegional::Rule = 59, AWS::WAFRegional::RuleGroup = 60, AWS::WAFRegional::WebACL = 61, AWS::CloudFront::Distribution = 62, AWS::CloudFront::StreamingDistribution = 63, AWS::Lambda::Function = 64, AWS::ElasticBeanstalk::Application = 65, AWS::ElasticBeanstalk::ApplicationVersion = 66, AWS::ElasticBeanstalk::Environment = 67, AWS::WAFv2::WebACL = 68, AWS::WAFv2::RuleGroup = 69, AWS::WAFv2::IPSet = 70, AWS::WAFv2::RegexPatternSet = 71, AWS::WAFv2::ManagedRuleSet = 72, AWS::XRay::EncryptionConfig = 73, AWS::SSM::AssociationCompliance = 74, AWS::SSM::PatchCompliance = 75, AWS::Shield::Protection = 76, AWS::ShieldRegional::Protection = 77, AWS::Config::ResourceCompliance = 78, AWS::ApiGateway::Stage = 79, AWS::ApiGateway::RestApi = 80, AWS::ApiGatewayV2::Stage = 81, AWS::ApiGatewayV2::Api = 82, AWS::CodePipeline::Pipeline = 83, AWS::ServiceCatalog::CloudFormationProvisionedProduct = 84, AWS::ServiceCatalog::CloudFormationProduct = 85, AWS::ServiceCatalog::Portfolio = 86, AWS::SQS::Queue = 87, AWS::KMS::Key = 88, AWS::QLDB::Ledger = 89 }

	export enum ResourceCountGroupKey { RESOURCE_TYPE = 0, ACCOUNT_ID = 1, AWS_REGION = 2 }


	/**Status filter object to filter results based on specific member account ID or status type for an organization config rule.  */
	export interface StatusDetailFilters {
		AccountId?: string;
		MemberAccountRuleStatus?: StatusDetailFiltersMemberAccountRuleStatus;
	}

	export enum StatusDetailFiltersMemberAccountRuleStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }


	/**Status filter object to filter results based on specific member account ID or status type for an organization conformance pack. */
	export interface OrganizationResourceDetailedStatusFilters {
		AccountId?: string;
		Status?: OrganizationResourceDetailedStatusFiltersStatus;
	}

	export enum OrganizationResourceDetailedStatusFiltersStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }


	/**The count of resources that are grouped by the group name. */
	export interface GroupedResourceCount {
		GroupName: string;
		ResourceCount: number;
	}


	/**Filters the results by resource account ID, region, resource ID, and resource name. */
	export interface ResourceFilters {
		AccountId?: string;
		ResourceId?: string;
		ResourceName?: string;
		Region?: string;
	}

	export enum MemberAccountRuleStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }


	/**Organization config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed. */
	export interface MemberAccountStatus {
		AccountId: string;
		ConfigRuleName: string;
		MemberAccountRuleStatus: MemberAccountStatusMemberAccountRuleStatus;
		ErrorCode?: string;
		ErrorMessage?: string;
		LastUpdateTime?: Date;
	}

	export enum MemberAccountStatusMemberAccountRuleStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }

	export enum MessageType { ConfigurationItemChangeNotification = 0, ConfigurationSnapshotDeliveryCompleted = 1, ScheduledNotification = 2, OversizedConfigurationItemChangeNotification = 3 }


	/**An object that specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
	export interface OrganizationManagedRuleMetadata {
		Description?: string;
		RuleIdentifier: string;
		InputParameters?: string;
		MaximumExecutionFrequency?: OrganizationManagedRuleMetadataMaximumExecutionFrequency;
		ResourceTypesScope?: Array<StringWithCharLimit256>;
		ResourceIdScope?: string;
		TagKeyScope?: string;
		TagValueScope?: string;
	}

	export enum OrganizationManagedRuleMetadataMaximumExecutionFrequency { One_Hour = 0, Three_Hours = 1, Six_Hours = 2, Twelve_Hours = 3, TwentyFour_Hours = 4 }


	/**An object that specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lamdba function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
	export interface OrganizationCustomRuleMetadata {
		Description?: string;
		LambdaFunctionArn: string;
		OrganizationConfigRuleTriggerTypes: Array<OrganizationConfigRuleTriggerType>;
		InputParameters?: string;
		MaximumExecutionFrequency?: OrganizationCustomRuleMetadataMaximumExecutionFrequency;
		ResourceTypesScope?: Array<StringWithCharLimit256>;
		ResourceIdScope?: string;
		TagKeyScope?: string;
		TagValueScope?: string;
	}

	export enum OrganizationCustomRuleMetadataMaximumExecutionFrequency { One_Hour = 0, Three_Hours = 1, Six_Hours = 2, Twelve_Hours = 3, TwentyFour_Hours = 4 }


	/**An organization config rule that has information about config rules that AWS Config creates in member accounts. */
	export interface OrganizationConfigRule {
		OrganizationConfigRuleName: string;
		OrganizationConfigRuleArn: string;

		/**An object that specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
		OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;

		/**An object that specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lamdba function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
		OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
		ExcludedAccounts?: Array<AccountId>;
		LastUpdateTime?: Date;
	}

	export enum OrganizationRuleStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }


	/**Returns the status for an organization config rule in an organization. */
	export interface OrganizationConfigRuleStatus {
		OrganizationConfigRuleName: string;
		OrganizationRuleStatus: OrganizationConfigRuleStatusOrganizationRuleStatus;
		ErrorCode?: string;
		ErrorMessage?: string;
		LastUpdateTime?: Date;
	}

	export enum OrganizationConfigRuleStatusOrganizationRuleStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }

	export enum OrganizationConfigRuleTriggerType { ConfigurationItemChangeNotification = 0, OversizedConfigurationItemChangeNotification = 1, ScheduledNotification = 2 }


	/**An organization conformance pack that has information about conformance packs that AWS Config creates in member accounts.  */
	export interface OrganizationConformancePack {
		OrganizationConformancePackName: string;
		OrganizationConformancePackArn: string;
		DeliveryS3Bucket: string;
		DeliveryS3KeyPrefix?: string;
		ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
		ExcludedAccounts?: Array<AccountId>;
		LastUpdateTime: Date;
	}

	export enum OrganizationResourceDetailedStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }


	/**Organization conformance pack creation or deletion status in each member account. This includes the name of the conformance pack, the status, error code and error message when the conformance pack creation or deletion failed.  */
	export interface OrganizationConformancePackDetailedStatus {
		AccountId: string;
		ConformancePackName: string;
		Status: OrganizationConformancePackDetailedStatusStatus;
		ErrorCode?: string;
		ErrorMessage?: string;
		LastUpdateTime?: Date;
	}

	export enum OrganizationConformancePackDetailedStatusStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }

	export enum OrganizationResourceStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }


	/**Returns the status for an organization conformance pack in an organization. */
	export interface OrganizationConformancePackStatus {
		OrganizationConformancePackName: string;
		Status: OrganizationConformancePackStatusStatus;
		ErrorCode?: string;
		ErrorMessage?: string;
		LastUpdateTime?: Date;
	}

	export enum OrganizationConformancePackStatusStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }

	export enum Owner { CUSTOM_LAMBDA = 0, AWS = 1 }


	/**An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized. */
	export interface PendingAggregationRequest {
		RequesterAccountId?: string;
		RequesterAwsRegion?: string;
	}


	/**An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in AWS Config. */
	export interface RetentionConfiguration {
		Name: string;
		RetentionPeriodInDays: number;
	}


	/**Details about the query. */
	export interface QueryInfo {
		SelectFields?: Array<FieldInfo>;
	}


	/**The relationship of the related resource to the main resource. */
	export interface Relationship {
		resourceType?: RelationshipResourceType;
		resourceId?: string;
		resourceName?: string;
		relationshipName?: string;
	}

	export enum RelationshipResourceType { AWS::EC2::CustomerGateway = 0, AWS::EC2::EIP = 1, AWS::EC2::Host = 2, AWS::EC2::Instance = 3, AWS::EC2::InternetGateway = 4, AWS::EC2::NetworkAcl = 5, AWS::EC2::NetworkInterface = 6, AWS::EC2::RouteTable = 7, AWS::EC2::SecurityGroup = 8, AWS::EC2::Subnet = 9, AWS::CloudTrail::Trail = 10, AWS::EC2::Volume = 11, AWS::EC2::VPC = 12, AWS::EC2::VPNConnection = 13, AWS::EC2::VPNGateway = 14, AWS::EC2::RegisteredHAInstance = 15, AWS::EC2::NatGateway = 16, AWS::EC2::EgressOnlyInternetGateway = 17, AWS::EC2::VPCEndpoint = 18, AWS::EC2::VPCEndpointService = 19, AWS::EC2::FlowLog = 20, AWS::EC2::VPCPeeringConnection = 21, AWS::Elasticsearch::Domain = 22, AWS::IAM::Group = 23, AWS::IAM::Policy = 24, AWS::IAM::Role = 25, AWS::IAM::User = 26, AWS::ElasticLoadBalancingV2::LoadBalancer = 27, AWS::ACM::Certificate = 28, AWS::RDS::DBInstance = 29, AWS::RDS::DBSubnetGroup = 30, AWS::RDS::DBSecurityGroup = 31, AWS::RDS::DBSnapshot = 32, AWS::RDS::DBCluster = 33, AWS::RDS::DBClusterSnapshot = 34, AWS::RDS::EventSubscription = 35, AWS::S3::Bucket = 36, AWS::S3::AccountPublicAccessBlock = 37, AWS::Redshift::Cluster = 38, AWS::Redshift::ClusterSnapshot = 39, AWS::Redshift::ClusterParameterGroup = 40, AWS::Redshift::ClusterSecurityGroup = 41, AWS::Redshift::ClusterSubnetGroup = 42, AWS::Redshift::EventSubscription = 43, AWS::SSM::ManagedInstanceInventory = 44, AWS::CloudWatch::Alarm = 45, AWS::CloudFormation::Stack = 46, AWS::ElasticLoadBalancing::LoadBalancer = 47, AWS::AutoScaling::AutoScalingGroup = 48, AWS::AutoScaling::LaunchConfiguration = 49, AWS::AutoScaling::ScalingPolicy = 50, AWS::AutoScaling::ScheduledAction = 51, AWS::DynamoDB::Table = 52, AWS::CodeBuild::Project = 53, AWS::WAF::RateBasedRule = 54, AWS::WAF::Rule = 55, AWS::WAF::RuleGroup = 56, AWS::WAF::WebACL = 57, AWS::WAFRegional::RateBasedRule = 58, AWS::WAFRegional::Rule = 59, AWS::WAFRegional::RuleGroup = 60, AWS::WAFRegional::WebACL = 61, AWS::CloudFront::Distribution = 62, AWS::CloudFront::StreamingDistribution = 63, AWS::Lambda::Function = 64, AWS::ElasticBeanstalk::Application = 65, AWS::ElasticBeanstalk::ApplicationVersion = 66, AWS::ElasticBeanstalk::Environment = 67, AWS::WAFv2::WebACL = 68, AWS::WAFv2::RuleGroup = 69, AWS::WAFv2::IPSet = 70, AWS::WAFv2::RegexPatternSet = 71, AWS::WAFv2::ManagedRuleSet = 72, AWS::XRay::EncryptionConfig = 73, AWS::SSM::AssociationCompliance = 74, AWS::SSM::PatchCompliance = 75, AWS::Shield::Protection = 76, AWS::ShieldRegional::Protection = 77, AWS::Config::ResourceCompliance = 78, AWS::ApiGateway::Stage = 79, AWS::ApiGateway::RestApi = 80, AWS::ApiGatewayV2::Stage = 81, AWS::ApiGatewayV2::Api = 82, AWS::CodePipeline::Pipeline = 83, AWS::ServiceCatalog::CloudFormationProvisionedProduct = 84, AWS::ServiceCatalog::CloudFormationProduct = 85, AWS::ServiceCatalog::Portfolio = 86, AWS::SQS::Queue = 87, AWS::KMS::Key = 88, AWS::QLDB::Ledger = 89 }

	export enum RemediationTargetType { SSM_DOCUMENT = 0 }


	/**An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action. */
	export interface RemediationConfiguration {
		ConfigRuleName: string;
		TargetType: RemediationConfigurationTargetType;
		TargetId: string;
		TargetVersion?: string;
		Parameters?: RemediationParameters;
		ResourceType?: string;
		Automatic?: boolean;

		/**The controls that AWS Config uses for executing remediations. */
		ExecutionControls?: ExecutionControls;
		MaximumAutomaticAttempts?: number;
		RetryAttemptSeconds?: number;
		Arn?: string;
		CreatedByService?: string;
	}

	export enum RemediationConfigurationTargetType { SSM_DOCUMENT = 0 }


	/**An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type.  */
	export interface RemediationException {
		ConfigRuleName: string;
		ResourceType: string;
		ResourceId: string;
		Message?: string;
		ExpirationTime?: Date;
	}


	/**The details that identify a resource within AWS Config, including the resource type and resource ID.  */
	export interface RemediationExceptionResourceKey {
		ResourceType?: string;
		ResourceId?: string;
	}

	export enum RemediationExecutionState { QUEUED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3 }


	/**The details that identify a resource within AWS Config, including the resource type and resource ID. */
	export interface ResourceKey {
		resourceType: ResourceKeyResourceType;
		resourceId: string;
	}

	export enum ResourceKeyResourceType { AWS::EC2::CustomerGateway = 0, AWS::EC2::EIP = 1, AWS::EC2::Host = 2, AWS::EC2::Instance = 3, AWS::EC2::InternetGateway = 4, AWS::EC2::NetworkAcl = 5, AWS::EC2::NetworkInterface = 6, AWS::EC2::RouteTable = 7, AWS::EC2::SecurityGroup = 8, AWS::EC2::Subnet = 9, AWS::CloudTrail::Trail = 10, AWS::EC2::Volume = 11, AWS::EC2::VPC = 12, AWS::EC2::VPNConnection = 13, AWS::EC2::VPNGateway = 14, AWS::EC2::RegisteredHAInstance = 15, AWS::EC2::NatGateway = 16, AWS::EC2::EgressOnlyInternetGateway = 17, AWS::EC2::VPCEndpoint = 18, AWS::EC2::VPCEndpointService = 19, AWS::EC2::FlowLog = 20, AWS::EC2::VPCPeeringConnection = 21, AWS::Elasticsearch::Domain = 22, AWS::IAM::Group = 23, AWS::IAM::Policy = 24, AWS::IAM::Role = 25, AWS::IAM::User = 26, AWS::ElasticLoadBalancingV2::LoadBalancer = 27, AWS::ACM::Certificate = 28, AWS::RDS::DBInstance = 29, AWS::RDS::DBSubnetGroup = 30, AWS::RDS::DBSecurityGroup = 31, AWS::RDS::DBSnapshot = 32, AWS::RDS::DBCluster = 33, AWS::RDS::DBClusterSnapshot = 34, AWS::RDS::EventSubscription = 35, AWS::S3::Bucket = 36, AWS::S3::AccountPublicAccessBlock = 37, AWS::Redshift::Cluster = 38, AWS::Redshift::ClusterSnapshot = 39, AWS::Redshift::ClusterParameterGroup = 40, AWS::Redshift::ClusterSecurityGroup = 41, AWS::Redshift::ClusterSubnetGroup = 42, AWS::Redshift::EventSubscription = 43, AWS::SSM::ManagedInstanceInventory = 44, AWS::CloudWatch::Alarm = 45, AWS::CloudFormation::Stack = 46, AWS::ElasticLoadBalancing::LoadBalancer = 47, AWS::AutoScaling::AutoScalingGroup = 48, AWS::AutoScaling::LaunchConfiguration = 49, AWS::AutoScaling::ScalingPolicy = 50, AWS::AutoScaling::ScheduledAction = 51, AWS::DynamoDB::Table = 52, AWS::CodeBuild::Project = 53, AWS::WAF::RateBasedRule = 54, AWS::WAF::Rule = 55, AWS::WAF::RuleGroup = 56, AWS::WAF::WebACL = 57, AWS::WAFRegional::RateBasedRule = 58, AWS::WAFRegional::Rule = 59, AWS::WAFRegional::RuleGroup = 60, AWS::WAFRegional::WebACL = 61, AWS::CloudFront::Distribution = 62, AWS::CloudFront::StreamingDistribution = 63, AWS::Lambda::Function = 64, AWS::ElasticBeanstalk::Application = 65, AWS::ElasticBeanstalk::ApplicationVersion = 66, AWS::ElasticBeanstalk::Environment = 67, AWS::WAFv2::WebACL = 68, AWS::WAFv2::RuleGroup = 69, AWS::WAFv2::IPSet = 70, AWS::WAFv2::RegexPatternSet = 71, AWS::WAFv2::ManagedRuleSet = 72, AWS::XRay::EncryptionConfig = 73, AWS::SSM::AssociationCompliance = 74, AWS::SSM::PatchCompliance = 75, AWS::Shield::Protection = 76, AWS::ShieldRegional::Protection = 77, AWS::Config::ResourceCompliance = 78, AWS::ApiGateway::Stage = 79, AWS::ApiGateway::RestApi = 80, AWS::ApiGatewayV2::Stage = 81, AWS::ApiGatewayV2::Api = 82, AWS::CodePipeline::Pipeline = 83, AWS::ServiceCatalog::CloudFormationProvisionedProduct = 84, AWS::ServiceCatalog::CloudFormationProduct = 85, AWS::ServiceCatalog::Portfolio = 86, AWS::SQS::Queue = 87, AWS::KMS::Key = 88, AWS::QLDB::Ledger = 89 }


	/**Provides details of the current status of the invoked remediation action for that resource. */
	export interface RemediationExecutionStatus {

		/**The details that identify a resource within AWS Config, including the resource type and resource ID. */
		ResourceKey?: ResourceKey;
		State?: RemediationExecutionStatusState;
		StepDetails?: Array<RemediationExecutionStep>;
		InvocationTime?: Date;
		LastUpdatedTime?: Date;
	}

	export enum RemediationExecutionStatusState { QUEUED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3 }

	export enum RemediationExecutionStepState { SUCCEEDED = 0, PENDING = 1, FAILED = 2 }


	/**Name of the step from the SSM document. */
	export interface RemediationExecutionStep {
		Name?: string;
		State?: RemediationExecutionStepState;
		ErrorMessage?: string;
		StartTime?: Date;
		StopTime?: Date;
	}

	export enum RemediationExecutionStepState { SUCCEEDED = 0, PENDING = 1, FAILED = 2 }


	/**The dynamic value of the resource. */
	export interface ResourceValue {
		Value: ResourceValueValue;
	}

	export enum ResourceValueValue { RESOURCE_ID = 0 }


	/**The static value of the resource. */
	export interface StaticValue {
		Values: Array<StringWithCharLimit256>;
	}


	/**The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value. */
	export interface RemediationParameterValue {

		/**The dynamic value of the resource. */
		ResourceValue?: ResourceValue;

		/**The static value of the resource. */
		StaticValue?: StaticValue;
	}


	/**An object that contains the resource type and the number of resources. */
	export interface ResourceCount {
		resourceType?: ResourceCountResourceType;
		count?: number;
	}

	export enum ResourceCountResourceType { AWS::EC2::CustomerGateway = 0, AWS::EC2::EIP = 1, AWS::EC2::Host = 2, AWS::EC2::Instance = 3, AWS::EC2::InternetGateway = 4, AWS::EC2::NetworkAcl = 5, AWS::EC2::NetworkInterface = 6, AWS::EC2::RouteTable = 7, AWS::EC2::SecurityGroup = 8, AWS::EC2::Subnet = 9, AWS::CloudTrail::Trail = 10, AWS::EC2::Volume = 11, AWS::EC2::VPC = 12, AWS::EC2::VPNConnection = 13, AWS::EC2::VPNGateway = 14, AWS::EC2::RegisteredHAInstance = 15, AWS::EC2::NatGateway = 16, AWS::EC2::EgressOnlyInternetGateway = 17, AWS::EC2::VPCEndpoint = 18, AWS::EC2::VPCEndpointService = 19, AWS::EC2::FlowLog = 20, AWS::EC2::VPCPeeringConnection = 21, AWS::Elasticsearch::Domain = 22, AWS::IAM::Group = 23, AWS::IAM::Policy = 24, AWS::IAM::Role = 25, AWS::IAM::User = 26, AWS::ElasticLoadBalancingV2::LoadBalancer = 27, AWS::ACM::Certificate = 28, AWS::RDS::DBInstance = 29, AWS::RDS::DBSubnetGroup = 30, AWS::RDS::DBSecurityGroup = 31, AWS::RDS::DBSnapshot = 32, AWS::RDS::DBCluster = 33, AWS::RDS::DBClusterSnapshot = 34, AWS::RDS::EventSubscription = 35, AWS::S3::Bucket = 36, AWS::S3::AccountPublicAccessBlock = 37, AWS::Redshift::Cluster = 38, AWS::Redshift::ClusterSnapshot = 39, AWS::Redshift::ClusterParameterGroup = 40, AWS::Redshift::ClusterSecurityGroup = 41, AWS::Redshift::ClusterSubnetGroup = 42, AWS::Redshift::EventSubscription = 43, AWS::SSM::ManagedInstanceInventory = 44, AWS::CloudWatch::Alarm = 45, AWS::CloudFormation::Stack = 46, AWS::ElasticLoadBalancing::LoadBalancer = 47, AWS::AutoScaling::AutoScalingGroup = 48, AWS::AutoScaling::LaunchConfiguration = 49, AWS::AutoScaling::ScalingPolicy = 50, AWS::AutoScaling::ScheduledAction = 51, AWS::DynamoDB::Table = 52, AWS::CodeBuild::Project = 53, AWS::WAF::RateBasedRule = 54, AWS::WAF::Rule = 55, AWS::WAF::RuleGroup = 56, AWS::WAF::WebACL = 57, AWS::WAFRegional::RateBasedRule = 58, AWS::WAFRegional::Rule = 59, AWS::WAFRegional::RuleGroup = 60, AWS::WAFRegional::WebACL = 61, AWS::CloudFront::Distribution = 62, AWS::CloudFront::StreamingDistribution = 63, AWS::Lambda::Function = 64, AWS::ElasticBeanstalk::Application = 65, AWS::ElasticBeanstalk::ApplicationVersion = 66, AWS::ElasticBeanstalk::Environment = 67, AWS::WAFv2::WebACL = 68, AWS::WAFv2::RuleGroup = 69, AWS::WAFv2::IPSet = 70, AWS::WAFv2::RegexPatternSet = 71, AWS::WAFv2::ManagedRuleSet = 72, AWS::XRay::EncryptionConfig = 73, AWS::SSM::AssociationCompliance = 74, AWS::SSM::PatchCompliance = 75, AWS::Shield::Protection = 76, AWS::ShieldRegional::Protection = 77, AWS::Config::ResourceCompliance = 78, AWS::ApiGateway::Stage = 79, AWS::ApiGateway::RestApi = 80, AWS::ApiGatewayV2::Stage = 81, AWS::ApiGatewayV2::Api = 82, AWS::CodePipeline::Pipeline = 83, AWS::ServiceCatalog::CloudFormationProvisionedProduct = 84, AWS::ServiceCatalog::CloudFormationProduct = 85, AWS::ServiceCatalog::Portfolio = 86, AWS::SQS::Queue = 87, AWS::KMS::Key = 88, AWS::QLDB::Ledger = 89 }


	/**The details that identify a resource that is discovered by AWS Config, including the resource type, ID, and (if available) the custom resource name. */
	export interface ResourceIdentifier {
		resourceType?: ResourceIdentifierResourceType;
		resourceId?: string;
		resourceName?: string;
		resourceDeletionTime?: Date;
	}

	export enum ResourceIdentifierResourceType { AWS::EC2::CustomerGateway = 0, AWS::EC2::EIP = 1, AWS::EC2::Host = 2, AWS::EC2::Instance = 3, AWS::EC2::InternetGateway = 4, AWS::EC2::NetworkAcl = 5, AWS::EC2::NetworkInterface = 6, AWS::EC2::RouteTable = 7, AWS::EC2::SecurityGroup = 8, AWS::EC2::Subnet = 9, AWS::CloudTrail::Trail = 10, AWS::EC2::Volume = 11, AWS::EC2::VPC = 12, AWS::EC2::VPNConnection = 13, AWS::EC2::VPNGateway = 14, AWS::EC2::RegisteredHAInstance = 15, AWS::EC2::NatGateway = 16, AWS::EC2::EgressOnlyInternetGateway = 17, AWS::EC2::VPCEndpoint = 18, AWS::EC2::VPCEndpointService = 19, AWS::EC2::FlowLog = 20, AWS::EC2::VPCPeeringConnection = 21, AWS::Elasticsearch::Domain = 22, AWS::IAM::Group = 23, AWS::IAM::Policy = 24, AWS::IAM::Role = 25, AWS::IAM::User = 26, AWS::ElasticLoadBalancingV2::LoadBalancer = 27, AWS::ACM::Certificate = 28, AWS::RDS::DBInstance = 29, AWS::RDS::DBSubnetGroup = 30, AWS::RDS::DBSecurityGroup = 31, AWS::RDS::DBSnapshot = 32, AWS::RDS::DBCluster = 33, AWS::RDS::DBClusterSnapshot = 34, AWS::RDS::EventSubscription = 35, AWS::S3::Bucket = 36, AWS::S3::AccountPublicAccessBlock = 37, AWS::Redshift::Cluster = 38, AWS::Redshift::ClusterSnapshot = 39, AWS::Redshift::ClusterParameterGroup = 40, AWS::Redshift::ClusterSecurityGroup = 41, AWS::Redshift::ClusterSubnetGroup = 42, AWS::Redshift::EventSubscription = 43, AWS::SSM::ManagedInstanceInventory = 44, AWS::CloudWatch::Alarm = 45, AWS::CloudFormation::Stack = 46, AWS::ElasticLoadBalancing::LoadBalancer = 47, AWS::AutoScaling::AutoScalingGroup = 48, AWS::AutoScaling::LaunchConfiguration = 49, AWS::AutoScaling::ScalingPolicy = 50, AWS::AutoScaling::ScheduledAction = 51, AWS::DynamoDB::Table = 52, AWS::CodeBuild::Project = 53, AWS::WAF::RateBasedRule = 54, AWS::WAF::Rule = 55, AWS::WAF::RuleGroup = 56, AWS::WAF::WebACL = 57, AWS::WAFRegional::RateBasedRule = 58, AWS::WAFRegional::Rule = 59, AWS::WAFRegional::RuleGroup = 60, AWS::WAFRegional::WebACL = 61, AWS::CloudFront::Distribution = 62, AWS::CloudFront::StreamingDistribution = 63, AWS::Lambda::Function = 64, AWS::ElasticBeanstalk::Application = 65, AWS::ElasticBeanstalk::ApplicationVersion = 66, AWS::ElasticBeanstalk::Environment = 67, AWS::WAFv2::WebACL = 68, AWS::WAFv2::RuleGroup = 69, AWS::WAFv2::IPSet = 70, AWS::WAFv2::RegexPatternSet = 71, AWS::WAFv2::ManagedRuleSet = 72, AWS::XRay::EncryptionConfig = 73, AWS::SSM::AssociationCompliance = 74, AWS::SSM::PatchCompliance = 75, AWS::Shield::Protection = 76, AWS::ShieldRegional::Protection = 77, AWS::Config::ResourceCompliance = 78, AWS::ApiGateway::Stage = 79, AWS::ApiGateway::RestApi = 80, AWS::ApiGatewayV2::Stage = 81, AWS::ApiGatewayV2::Api = 82, AWS::CodePipeline::Pipeline = 83, AWS::ServiceCatalog::CloudFormationProvisionedProduct = 84, AWS::ServiceCatalog::CloudFormationProduct = 85, AWS::ServiceCatalog::Portfolio = 86, AWS::SQS::Queue = 87, AWS::KMS::Key = 88, AWS::QLDB::Ledger = 89 }

	export enum ResourceValueType { RESOURCE_ID = 0 }


	/**Provides the source and the message types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules.  */
	export interface SourceDetail {
		EventSource?: SourceDetailEventSource;
		MessageType?: SourceDetailMessageType;
		MaximumExecutionFrequency?: SourceDetailMaximumExecutionFrequency;
	}

	export enum SourceDetailEventSource { aws.config = 0 }

	export enum SourceDetailMessageType { ConfigurationItemChangeNotification = 0, ConfigurationSnapshotDeliveryCompleted = 1, ScheduledNotification = 2, OversizedConfigurationItemChangeNotification = 3 }

	export enum SourceDetailMaximumExecutionFrequency { One_Hour = 0, Three_Hours = 1, Six_Hours = 2, Twelve_Hours = 3, TwentyFour_Hours = 4 }


	/**The tags for the resource. The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Returns the current configuration items for resources that are present in your AWS Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return tags and relationships.</p> </li> </ul> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig
		 * @return {BatchGetAggregateResourceConfigResponse} Success
		 */
		BatchGetAggregateResourceConfig(requestBody: BatchGetAggregateResourceConfigRequest, headersHandler?: () => {[header: string]: string}): Promise<BatchGetAggregateResourceConfigResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the current configuration for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</p> </li> </ul> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig
		 * @return {BatchGetResourceConfigResponse} Success
		 */
		BatchGetResourceConfig(requestBody: BatchGetResourceConfigRequest, headersHandler?: () => {[header: string]: string}): Promise<BatchGetResourceConfigResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the authorization granted to the specified configuration aggregator account in a specified region.
		 * Post /#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization
		 * @return {void} Success
		 */
		DeleteAggregationAuthorization(requestBody: DeleteAggregationAuthorizationRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Deletes the specified AWS Config rule and all of its evaluation results.</p> <p>AWS Config sets the state of a rule to <code>DELETING</code> until the deletion is complete. You cannot update a rule while it is in this state. If you make a <code>PutConfigRule</code> or <code>DeleteConfigRule</code> request for the rule, you will receive a <code>ResourceInUseException</code>.</p> <p>You can check the state of a rule by using the <code>DescribeConfigRules</code> request.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.DeleteConfigRule
		 * @return {void} Success
		 */
		DeleteConfigRule(requestBody: DeleteConfigRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeleteConfigRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.
		 * Post /#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator
		 * @return {void} Success
		 */
		DeleteConfigurationAggregator(requestBody: DeleteConfigurationAggregatorRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Deletes the configuration recorder.</p> <p>After the configuration recorder is deleted, AWS Config will not record resource configuration changes until you create a new configuration recorder.</p> <p>This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the <code>GetResourceConfigHistory</code> action, but you will not be able to access this information in the AWS Config console until you create a new configuration recorder.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder
		 * @return {void} Success
		 */
		DeleteConfigurationRecorder(requestBody: DeleteConfigurationRecorderRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Deletes the specified conformance pack and all the AWS Config rules, remediation actions, and all evaluation results within that conformance pack.</p> <p>AWS Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete. You cannot update a conformance pack while it is in this state.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.DeleteConformancePack
		 * @return {void} Success
		 */
		DeleteConformancePack(requestBody: DeleteConformancePackRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeleteConformancePack', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Deletes the delivery channel.</p> <p>Before you can delete the delivery channel, you must stop the configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel
		 * @return {void} Success
		 */
		DeleteDeliveryChannel(requestBody: DeleteDeliveryChannelRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes the evaluation results for the specified AWS Config rule. You can specify one AWS Config rule per request. After you delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating your AWS resources against the rule.
		 * Post /#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults
		 * @return {DeleteEvaluationResultsResponse} Success
		 */
		DeleteEvaluationResults(requestBody: DeleteEvaluationResultsRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteEvaluationResultsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes the specified organization config rule and all of its evaluation results from all member accounts in that organization. Only a master account can delete an organization config rule.</p> <p>AWS Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule
		 * @return {void} Success
		 */
		DeleteOrganizationConfigRule(requestBody: DeleteOrganizationConfigRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Deletes the specified organization conformance pack and all of the config rules and remediation actions from all member accounts in that organization. Only a master account can delete an organization conformance pack.</p> <p>AWS Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. </p>
		 * Post /#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack
		 * @return {void} Success
		 */
		DeleteOrganizationConformancePack(requestBody: DeleteOrganizationConformancePackRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes pending authorization requests for a specified aggregator account in a specified region.
		 * Post /#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest
		 * @return {void} Success
		 */
		DeletePendingAggregationRequest(requestBody: DeletePendingAggregationRequestRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes the remediation configuration.
		 * Post /#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration
		 * @return {DeleteRemediationConfigurationResponse} Success
		 */
		DeleteRemediationConfiguration(requestBody: DeleteRemediationConfigurationRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteRemediationConfigurationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes one or more remediation exceptions mentioned in the resource keys.
		 * Post /#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions
		 * @return {DeleteRemediationExceptionsResponse} Success
		 */
		DeleteRemediationExceptions(requestBody: DeleteRemediationExceptionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteRemediationExceptionsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your AWS Config History.
		 * Post /#X-Amz-Target=StarlingDoveService.DeleteResourceConfig
		 * @return {void} Success
		 */
		DeleteResourceConfig(requestBody: DeleteResourceConfigRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeleteResourceConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes the retention configuration.
		 * Post /#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration
		 * @return {void} Success
		 */
		DeleteRetentionConfiguration(requestBody: DeleteRetentionConfigurationRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, AWS Config sends the following notifications using an Amazon SNS topic that you have specified.</p> <ul> <li> <p>Notification of the start of the delivery.</p> </li> <li> <p>Notification of the completion of the delivery, if the delivery was successfully completed.</p> </li> <li> <p>Notification of delivery failure, if the delivery failed.</p> </li> </ul>
		 * Post /#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot
		 * @return {DeliverConfigSnapshotResponse} Success
		 */
		DeliverConfigSnapshot(requestBody: DeliverConfigSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<DeliverConfigSnapshotResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. </p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules
		 * @return {DescribeAggregateComplianceByConfigRulesResponse} Success
		 */
		DescribeAggregateComplianceByConfigRules(requestBody: DescribeAggregateComplianceByConfigRulesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAggregateComplianceByConfigRulesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a list of authorizations granted to various aggregator accounts and regions.
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations
		 * @return {DescribeAggregationAuthorizationsResponse} Success
		 */
		DescribeAggregationAuthorizations(requestBody: DescribeAggregationAuthorizationsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAggregationAuthorizationsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Indicates whether the specified AWS Config rules are compliant. If a rule is noncompliant, this action returns the number of AWS resources that do not comply with the rule.</p> <p>A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.</p> <p>If AWS Config has no current evaluation results for the rule, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions:</p> <ul> <li> <p>AWS Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's AWS Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule
		 * @return {DescribeComplianceByConfigRuleResponse} Success
		 */
		DescribeComplianceByConfigRule(requestBody: DescribeComplianceByConfigRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeComplianceByConfigRuleResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Indicates whether the specified AWS resources are compliant. If a resource is noncompliant, this action returns the number of AWS Config rules that the resource does not comply with.</p> <p>A resource is compliant if it complies with all the AWS Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules.</p> <p>If AWS Config has no current evaluation results for the resource, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions about the rules that evaluate the resource:</p> <ul> <li> <p>AWS Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role that you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's AWS Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource
		 * @return {DescribeComplianceByResourceResponse} Success
		 */
		DescribeComplianceByResource(requestBody: DescribeComplianceByResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeComplianceByResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns status information for each of your AWS managed Config rules. The status includes information such as the last time AWS Config invoked the rule, the last time AWS Config failed to invoke the rule, and the related error for the last failure.
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus
		 * @return {DescribeConfigRuleEvaluationStatusResponse} Success
		 */
		DescribeConfigRuleEvaluationStatus(requestBody: DescribeConfigRuleEvaluationStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeConfigRuleEvaluationStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns details about your AWS Config rules.
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeConfigRules
		 * @return {DescribeConfigRulesResponse} Success
		 */
		DescribeConfigRules(requestBody: DescribeConfigRulesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeConfigRulesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeConfigRules', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns status information for sources within an aggregator. The status includes information about the last time AWS Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message.
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus
		 * @return {DescribeConfigurationAggregatorSourcesStatusResponse} Success
		 */
		DescribeConfigurationAggregatorSourcesStatus(requestBody: DescribeConfigurationAggregatorSourcesStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeConfigurationAggregatorSourcesStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account.
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators
		 * @return {DescribeConfigurationAggregatorsResponse} Success
		 */
		DescribeConfigurationAggregators(requestBody: DescribeConfigurationAggregatorsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeConfigurationAggregatorsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the current status of the specified configuration recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus
		 * @return {DescribeConfigurationRecorderStatusResponse} Success
		 */
		DescribeConfigurationRecorderStatus(requestBody: DescribeConfigurationRecorderStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeConfigurationRecorderStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders
		 * @return {DescribeConfigurationRecordersResponse} Success
		 */
		DescribeConfigurationRecorders(requestBody: DescribeConfigurationRecordersRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeConfigurationRecordersResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns compliance details for each rule in that conformance pack.</p> <note> <p>You must provide exact rule names.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance
		 * @return {DescribeConformancePackComplianceResponse} Success
		 */
		DescribeConformancePackCompliance(requestBody: DescribeConformancePackComplianceRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeConformancePackComplianceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Provides one or more conformance packs deployment status.</p> <note> <p>If there are no conformance packs then you will see an empty result.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus
		 * @return {DescribeConformancePackStatusResponse} Success
		 */
		DescribeConformancePackStatus(requestBody: DescribeConformancePackStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeConformancePackStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a list of one or more conformance packs.
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeConformancePacks
		 * @return {DescribeConformancePacksResponse} Success
		 */
		DescribeConformancePacks(requestBody: DescribeConformancePacksRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeConformancePacksResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeConformancePacks', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus
		 * @return {DescribeDeliveryChannelStatusResponse} Success
		 */
		DescribeDeliveryChannelStatus(requestBody: DescribeDeliveryChannelStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeDeliveryChannelStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels
		 * @return {DescribeDeliveryChannelsResponse} Success
		 */
		DescribeDeliveryChannels(requestBody: DescribeDeliveryChannelsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeDeliveryChannelsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Provides organization config rule deployment status for an organization.</p> <note> <p>The status is not considered successful until organization config rule is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization config rule names. It is only applicable, when you request all the organization config rules.</p> <p>Only a master account can call this API.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses
		 * @return {DescribeOrganizationConfigRuleStatusesResponse} Success
		 */
		DescribeOrganizationConfigRuleStatuses(requestBody: DescribeOrganizationConfigRuleStatusesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeOrganizationConfigRuleStatusesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns a list of organization config rules.</p> <note> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization config rule names. It is only applicable, when you request all the organization config rules.</p> <p>Only a master account can call this API.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules
		 * @return {DescribeOrganizationConfigRulesResponse} Success
		 */
		DescribeOrganizationConfigRules(requestBody: DescribeOrganizationConfigRulesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeOrganizationConfigRulesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Provides organization conformance pack deployment status for an organization.</p> <note> <p>The status is not considered successful until organization conformance pack is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance pack names. They are only applicable, when you request all the organization conformance packs.</p> <p>Only a master account can call this API.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses
		 * @return {DescribeOrganizationConformancePackStatusesResponse} Success
		 */
		DescribeOrganizationConformancePackStatuses(requestBody: DescribeOrganizationConformancePackStatusesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeOrganizationConformancePackStatusesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns a list of organization conformance packs.</p> <note> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs. </p> <p>Only a master account can call this API.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks
		 * @return {DescribeOrganizationConformancePacksResponse} Success
		 */
		DescribeOrganizationConformancePacks(requestBody: DescribeOrganizationConformancePacksRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeOrganizationConformancePacksResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a list of all pending aggregation requests.
		 * Post /#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests
		 * @return {DescribePendingAggregationRequestsResponse} Success
		 */
		DescribePendingAggregationRequests(requestBody: DescribePendingAggregationRequestsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribePendingAggregationRequestsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the details of one or more remediation configurations.
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations
		 * @return {DescribeRemediationConfigurationsResponse} Success
		 */
		DescribeRemediationConfigurations(requestBody: DescribeRemediationConfigurationsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeRemediationConfigurationsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeRemediationExceptionsResponse} Success
		 */
		DescribeRemediationExceptions(Limit: string, NextToken: string, requestBody: DescribeRemediationExceptionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeRemediationExceptionsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeRemediationExecutionStatusResponse} Success
		 */
		DescribeRemediationExecutionStatus(Limit: string, NextToken: string, requestBody: DescribeRemediationExecutionStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeRemediationExecutionStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.</p> <note> <p>Currently, AWS Config supports only one retention configuration per region in your account.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations
		 * @return {DescribeRetentionConfigurationsResponse} Success
		 */
		DescribeRetentionConfigurations(requestBody: DescribeRetentionConfigurationsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeRetentionConfigurationsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the evaluation results for the specified AWS Config rule for a specific resource in a rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. </p> <note> <p>The results can return an empty result page. But if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule
		 * @return {GetAggregateComplianceDetailsByConfigRuleResponse} Success
		 */
		GetAggregateComplianceDetailsByConfigRule(requestBody: GetAggregateComplianceDetailsByConfigRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<GetAggregateComplianceDetailsByConfigRuleResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary
		 * @return {GetAggregateConfigRuleComplianceSummaryResponse} Success
		 */
		GetAggregateConfigRuleComplianceSummary(requestBody: GetAggregateConfigRuleComplianceSummaryRequest, headersHandler?: () => {[header: string]: string}): Promise<GetAggregateConfigRuleComplianceSummaryResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the resource counts across accounts and regions that are present in your AWS Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p> <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts
		 * @return {GetAggregateDiscoveredResourceCountsResponse} Success
		 */
		GetAggregateDiscoveredResourceCounts(requestBody: GetAggregateDiscoveredResourceCountsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetAggregateDiscoveredResourceCountsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns configuration item that is aggregated for your specific resource in a specific source account and region.
		 * Post /#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig
		 * @return {GetAggregateResourceConfigResponse} Success
		 */
		GetAggregateResourceConfig(requestBody: GetAggregateResourceConfigRequest, headersHandler?: () => {[header: string]: string}): Promise<GetAggregateResourceConfigResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the evaluation results for the specified AWS Config rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.
		 * Post /#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule
		 * @return {GetComplianceDetailsByConfigRuleResponse} Success
		 */
		GetComplianceDetailsByConfigRule(requestBody: GetComplianceDetailsByConfigRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<GetComplianceDetailsByConfigRuleResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the evaluation results for the specified AWS resource. The results indicate which AWS Config rules were used to evaluate the resource, when each rule was last used, and whether the resource complies with each rule.
		 * Post /#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource
		 * @return {GetComplianceDetailsByResourceResponse} Success
		 */
		GetComplianceDetailsByResource(requestBody: GetComplianceDetailsByResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<GetComplianceDetailsByResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the number of AWS Config rules that are compliant and noncompliant, up to a maximum of 25 for each.
		 * Post /#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule
		 * @return {GetComplianceSummaryByConfigRuleResponse} Success
		 */
		GetComplianceSummaryByConfigRule(headersHandler?: () => {[header: string]: string}): Promise<GetComplianceSummaryByConfigRuleResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule', { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.
		 * Post /#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType
		 * @return {GetComplianceSummaryByResourceTypeResponse} Success
		 */
		GetComplianceSummaryByResourceType(requestBody: GetComplianceSummaryByResourceTypeRequest, headersHandler?: () => {[header: string]: string}): Promise<GetComplianceSummaryByResourceTypeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns compliance details of a conformance pack for all AWS resources that are monitered by conformance pack.
		 * Post /#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails
		 * @return {GetConformancePackComplianceDetailsResponse} Success
		 */
		GetConformancePackComplianceDetails(requestBody: GetConformancePackComplianceDetailsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetConformancePackComplianceDetailsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.
		 * Post /#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary
		 * @return {GetConformancePackComplianceSummaryResponse} Success
		 */
		GetConformancePackComplianceSummary(requestBody: GetConformancePackComplianceSummaryRequest, headersHandler?: () => {[header: string]: string}): Promise<GetConformancePackComplianceSummaryResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in this region for your AWS account. </p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>AWS Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify that you want all resource types. </p> </li> <li> <p>AWS Config returns the following:</p> <ul> <li> <p>The resource types (EC2 instances, IAM users, and S3 buckets).</p> </li> <li> <p>The number of each resource type (25, 20, and 15).</p> </li> <li> <p>The total number of all resources (60).</p> </li> </ul> </li> </ol> <p>The response is paginated. By default, AWS Config lists 100 <a>ResourceCount</a> objects on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might not immediately receive resource counts in the following situations:</p> <ul> <li> <p>You are a new AWS Config customer.</p> </li> <li> <p>You just enabled resource recording.</p> </li> </ul> <p>It might take a few minutes for AWS Config to record and count your resources. Wait a few minutes and then retry the <a>GetDiscoveredResourceCounts</a> action. </p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts
		 * @return {GetDiscoveredResourceCountsResponse} Success
		 */
		GetDiscoveredResourceCounts(requestBody: GetDiscoveredResourceCountsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDiscoveredResourceCountsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns detailed status for each member account within an organization for a given organization config rule.</p> <note> <p>Only a master account can call this API.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus
		 * @return {GetOrganizationConfigRuleDetailedStatusResponse} Success
		 */
		GetOrganizationConfigRuleDetailedStatus(requestBody: GetOrganizationConfigRuleDetailedStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<GetOrganizationConfigRuleDetailedStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns detailed status for each member account within an organization for a given organization conformance pack.</p> <p>Only a master account can call this API.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus
		 * @return {GetOrganizationConformancePackDetailedStatusResponse} Success
		 */
		GetOrganizationConformancePackDetailedStatus(requestBody: GetOrganizationConformancePackDetailedStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<GetOrganizationConformancePackDetailedStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns a list of configuration items for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your <code>ConfigurationItems</code> between a minimum of 30 days and a maximum of 7 years (2557 days), AWS Config returns the <code>ConfigurationItems</code> for the specified retention period. </p> <p>The response is paginated. By default, AWS Config returns a limit of 10 configuration items per page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified <code>limit</code>. In such cases, you can make another call, using the <code>nextToken</code>.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourceConfigHistoryResponse} Success
		 */
		GetResourceConfigHistory(limit: string, nextToken: string, requestBody: GetResourceConfigHistoryRequest, headersHandler?: () => {[header: string]: string}): Promise<GetResourceConfigHistoryResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p> <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources
		 * @return {ListAggregateDiscoveredResourcesResponse} Success
		 */
		ListAggregateDiscoveredResources(requestBody: ListAggregateDiscoveredResourcesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListAggregateDiscoveredResourcesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that AWS Config has discovered, including those that AWS Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.</p> <note> <p>You can specify either resource IDs or a resource name, but not both, in the same request.</p> </note> <p>The response is paginated. By default, AWS Config lists 100 resource identifiers on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.ListDiscoveredResources
		 * @return {ListDiscoveredResourcesResponse} Success
		 */
		ListDiscoveredResources(requestBody: ListDiscoveredResourcesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListDiscoveredResourcesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.ListDiscoveredResources', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * List the tags for AWS Config resource.
		 * Post /#X-Amz-Target=StarlingDoveService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.ListTagsForResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Authorizes the aggregator account and region to collect data from the source account and region.
		 * Post /#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization
		 * @return {PutAggregationAuthorizationResponse} Success
		 */
		PutAggregationAuthorization(requestBody: PutAggregationAuthorizationRequest, headersHandler?: () => {[header: string]: string}): Promise<PutAggregationAuthorizationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Adds or updates an AWS Config rule for evaluating whether your AWS resources comply with your desired configurations.</p> <p>You can use this action for custom AWS Config rules and AWS managed Config rules. A custom AWS Config rule is a rule that you develop and maintain. An AWS managed Config rule is a customizable, predefined rule that AWS Config provides.</p> <p>If you are adding a new custom AWS Config rule, you must first create the AWS Lambda function that the rule invokes to evaluate your resources. When you use the <code>PutConfigRule</code> action to add the rule to AWS Config, you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function. Specify the ARN for the <code>SourceIdentifier</code> key. This key is part of the <code>Source</code> object, which is part of the <code>ConfigRule</code> object. </p> <p>If you are adding an AWS managed Config rule, specify the rule's identifier for the <code>SourceIdentifier</code> key. To reference AWS managed Config rule identifiers, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">About AWS Managed Config Rules</a>.</p> <p>For any new rule that you add, specify the <code>ConfigRuleName</code> in the <code>ConfigRule</code> object. Do not specify the <code>ConfigRuleArn</code> or the <code>ConfigRuleId</code>. These values are generated by AWS Config for new rules.</p> <p>If you are updating a rule that you added previously, you can specify the rule by <code>ConfigRuleName</code>, <code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the <code>ConfigRule</code> data type that you use in this request.</p> <p>The maximum number of rules that AWS Config supports is 150.</p> <p>For information about requesting a rule limit increase, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config">AWS Config Limits</a> in the <i>AWS General Reference Guide</i>.</p> <p>For more information about developing and using AWS Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.PutConfigRule
		 * @return {void} Success
		 */
		PutConfigRule(requestBody: PutConfigRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.PutConfigRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.</p> <note> <p>AWS Config should be enabled in source accounts and regions you want to aggregate.</p> <p>If your source type is an organization, you must be signed in to the master account and all features must be enabled in your organization. AWS Config calls <code>EnableAwsServiceAccess</code> API to enable integration between AWS Config and AWS Organizations. </p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator
		 * @return {PutConfigurationAggregatorResponse} Success
		 */
		PutConfigurationAggregator(requestBody: PutConfigurationAggregatorRequest, headersHandler?: () => {[header: string]: string}): Promise<PutConfigurationAggregatorResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a new configuration recorder to record the selected resource configurations.</p> <p>You can use this action to change the role <code>roleARN</code> or the <code>recordingGroup</code> of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> <p>If <code>ConfigurationRecorder</code> does not have the <b>recordingGroup</b> parameter specified, the default is to record all supported resource types.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder
		 * @return {void} Success
		 */
		PutConfigurationRecorder(requestBody: PutConfigurationRecorderRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Creates or updates a conformance pack. A conformance pack is a collection of AWS Config rules that can be easily deployed in an account and a region and across AWS Organization.</p> <p>This API creates a service linked role <code>AWSServiceRoleForConfigConforms</code> in your account. The service linked role is created only when the role does not exist in your account. AWS Config verifies the existence of role with <code>GetRole</code> action.</p> <note> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both AWS Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.PutConformancePack
		 * @return {PutConformancePackResponse} Success
		 */
		PutConformancePack(requestBody: PutConformancePackRequest, headersHandler?: () => {[header: string]: string}): Promise<PutConformancePackResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.PutConformancePack', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.</p> <p>Before you can create a delivery channel, you must create a configuration recorder.</p> <p>You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.</p> <note> <p>You can have only one delivery channel per region in your account.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.PutDeliveryChannel
		 * @return {void} Success
		 */
		PutDeliveryChannel(requestBody: PutDeliveryChannelRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.PutDeliveryChannel', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Used by an AWS Lambda function to deliver evaluation results to AWS Config. This action is required in every AWS Lambda function that is invoked by an AWS Config rule.
		 * Post /#X-Amz-Target=StarlingDoveService.PutEvaluations
		 * @return {PutEvaluationsResponse} Success
		 */
		PutEvaluations(requestBody: PutEvaluationsRequest, headersHandler?: () => {[header: string]: string}): Promise<PutEvaluationsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.PutEvaluations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Adds or updates organization config rule for your entire organization evaluating whether your AWS resources comply with your desired configurations. Only a master account can create or update an organization config rule.</p> <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the master account of your organization. The service linked role is created only when the role does not exist in the master account. AWS Config verifies the existence of role with <code>GetRole</code> action.</p> <p>You can use this action to create both custom AWS Config rules and AWS managed Config rules. If you are adding a new custom AWS Config rule, you must first create AWS Lambda function in the master account that the rule invokes to evaluate your resources. When you use the <code>PutOrganizationConfigRule</code> action to add the rule to AWS Config, you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function. If you are adding an AWS managed Config rule, specify the rule's identifier for the <code>RuleIdentifier</code> key.</p> <p>The maximum number of organization config rules that AWS Config supports is 150.</p> <note> <p>Specify either <code>OrganizationCustomRuleMetadata</code> or <code>OrganizationManagedRuleMetadata</code>.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule
		 * @return {PutOrganizationConfigRuleResponse} Success
		 */
		PutOrganizationConfigRule(requestBody: PutOrganizationConfigRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<PutOrganizationConfigRuleResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deploys conformance packs across member accounts in an AWS Organization.</p> <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code> through the <code>EnableAWSServiceAccess</code> action and creates a service linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the master account of your organization. The service linked role is created only when the role does not exist in the master account. AWS Config verifies the existence of role with GetRole action.</p> <note> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both AWS Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> <p>AWS Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the confomance pack is created or updated. You cannot update a conformance pack while it is in this state.</p> <p>You can create 6 conformance packs with 25 AWS Config rules in each pack.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack
		 * @return {PutOrganizationConformancePackResponse} Success
		 */
		PutOrganizationConformancePack(requestBody: PutOrganizationConformancePackRequest, headersHandler?: () => {[header: string]: string}): Promise<PutOrganizationConformancePackResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Adds or updates the remediation configuration with a specific AWS Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the AWS Config rule. The AWS Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target.
		 * Post /#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations
		 * @return {PutRemediationConfigurationsResponse} Success
		 */
		PutRemediationConfigurations(requestBody: PutRemediationConfigurationsRequest, headersHandler?: () => {[header: string]: string}): Promise<PutRemediationConfigurationsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * A remediation exception is when a specific resource is no longer considered for auto-remediation. This API adds a new exception or updates an exisiting exception for a specific resource with a specific AWS Config rule.
		 * Post /#X-Amz-Target=StarlingDoveService.PutRemediationExceptions
		 * @return {PutRemediationExceptionsResponse} Success
		 */
		PutRemediationExceptions(requestBody: PutRemediationExceptionsRequest, headersHandler?: () => {[header: string]: string}): Promise<PutRemediationExceptionsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.PutRemediationExceptions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in AWS Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing AWS Config APIs. </p> <note> <p>The custom resource type must be registered with AWS CloudFormation. This API accepts the configuration item registered with AWS CloudFormation.</p> <p>When you call this API, AWS Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource. </p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.PutResourceConfig
		 * @return {void} Success
		 */
		PutResourceConfig(requestBody: PutResourceConfigRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.PutResourceConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Creates and updates the retention configuration with details about retention period (number of days) that AWS Config stores your historical information. The API creates the <code>RetentionConfiguration</code> object and names the object as <b>default</b>. When you have a <code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the default object. </p> <note> <p>Currently, AWS Config supports only one retention configuration per region in your account.</p> </note>
		 * Post /#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration
		 * @return {PutRetentionConfigurationResponse} Success
		 */
		PutRetentionConfiguration(requestBody: PutRetentionConfigurationRequest, headersHandler?: () => {[header: string]: string}): Promise<PutRetentionConfigurationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of AWS resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the AWS Config Developer Guide.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SelectAggregateResourceConfigResponse} Success
		 */
		SelectAggregateResourceConfig(MaxResults: string, NextToken: string, requestBody: SelectAggregateResourceConfigRequest, headersHandler?: () => {[header: string]: string}): Promise<SelectAggregateResourceConfigResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the AWS Config Developer Guide.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.SelectResourceConfig
		 * @return {SelectResourceConfigResponse} Success
		 */
		SelectResourceConfig(requestBody: SelectResourceConfigRequest, headersHandler?: () => {[header: string]: string}): Promise<SelectResourceConfigResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.SelectResourceConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Runs an on-demand evaluation for the specified AWS Config rules against the last known configuration state of the resources. Use <code>StartConfigRulesEvaluation</code> when you want to test that a rule you updated is working as expected. <code>StartConfigRulesEvaluation</code> does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. </p> <p>You can specify up to 25 AWS Config rules per request. </p> <p>An existing <code>StartConfigRulesEvaluation</code> call for the specified rules must complete before you can call the API again. If you chose to have AWS Config stream to an Amazon SNS topic, you will receive a <code>ConfigRuleEvaluationStarted</code> notification when the evaluation starts.</p> <note> <p>You don't need to call the <code>StartConfigRulesEvaluation</code> API to run an evaluation for a new rule. When you create a rule, AWS Config evaluates your resources against the rule automatically. </p> </note> <p>The <code>StartConfigRulesEvaluation</code> API is useful if you want to run on-demand evaluations, such as the following example:</p> <ol> <li> <p>You have a custom rule that evaluates your IAM resources every 24 hours.</p> </li> <li> <p>You update your Lambda function to add additional conditions to your rule.</p> </li> <li> <p>Instead of waiting for the next periodic evaluation, you call the <code>StartConfigRulesEvaluation</code> API.</p> </li> <li> <p>AWS Config invokes your Lambda function and evaluates your IAM resources.</p> </li> <li> <p>Your custom rule will still run periodic evaluations every 24 hours.</p> </li> </ol>
		 * Post /#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation
		 * @return {StartConfigRulesEvaluationResponse} Success
		 */
		StartConfigRulesEvaluation(requestBody: StartConfigRulesEvaluationRequest, headersHandler?: () => {[header: string]: string}): Promise<StartConfigRulesEvaluationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Starts recording configurations of the AWS resources you have selected to record in your AWS account.</p> <p>You must have created at least one delivery channel to successfully start the configuration recorder.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder
		 * @return {void} Success
		 */
		StartConfigurationRecorder(requestBody: StartConfigurationRecorderRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Runs an on-demand remediation for the specified AWS Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p> <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>
		 * Post /#X-Amz-Target=StarlingDoveService.StartRemediationExecution
		 * @return {StartRemediationExecutionResponse} Success
		 */
		StartRemediationExecution(requestBody: StartRemediationExecutionRequest, headersHandler?: () => {[header: string]: string}): Promise<StartRemediationExecutionResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.StartRemediationExecution', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Stops recording configurations of the AWS resources you have selected to record in your AWS account.
		 * Post /#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder
		 * @return {void} Success
		 */
		StopConfigurationRecorder(requestBody: StopConfigurationRecorderRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
		 * Post /#X-Amz-Target=StarlingDoveService.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.TagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes specified tags from a resource.
		 * Post /#X-Amz-Target=StarlingDoveService.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=StarlingDoveService.UntagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}
	}

}

