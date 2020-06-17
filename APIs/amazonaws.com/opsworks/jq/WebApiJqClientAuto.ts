///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface AssignInstanceRequest {
		InstanceId: string;
		LayerIds: Array<String>;
	}

	export interface AssignVolumeRequest {
		VolumeId: string;
		InstanceId?: string;
	}

	export interface AssociateElasticIpRequest {
		ElasticIp: string;
		InstanceId?: string;
	}

	export interface AttachElasticLoadBalancerRequest {
		ElasticLoadBalancerName: string;
		LayerId: string;
	}


	/**Contains the response to a <code>CloneStack</code> request. */
	export interface CloneStackResult {
		StackId?: string;
	}

	export interface CloneStackRequest {
		SourceStackId: string;
		Name?: string;
		Region?: string;
		VpcId?: string;
		Attributes?: StackAttributes;
		ServiceRoleArn: string;
		DefaultInstanceProfileArn?: string;
		DefaultOs?: string;
		HostnameTheme?: string;
		DefaultAvailabilityZone?: string;
		DefaultSubnetId?: string;
		CustomJson?: string;

		/**Describes the configuration manager. */
		ConfigurationManager?: StackConfigurationManager;

		/**Describes the Chef configuration. */
		ChefConfiguration?: ChefConfiguration;
		UseCustomCookbooks?: boolean;
		UseOpsworksSecurityGroups?: boolean;

		/**Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>. */
		CustomCookbooksSource?: Source;
		DefaultSshKeyName?: string;
		ClonePermissions?: boolean;
		CloneAppIds?: Array<String>;
		DefaultRootDeviceType?: CloneStackRequestDefaultRootDeviceType;
		AgentVersion?: string;
	}

	export enum CloneStackRequestDefaultRootDeviceType { ebs = 0, instance-store = 1 }


	/**Contains the response to a <code>CreateApp</code> request. */
	export interface CreateAppResult {
		AppId?: string;
	}

	export interface CreateAppRequest {
		StackId: string;
		Shortname?: string;
		Name: string;
		Description?: string;
		DataSources?: Array<DataSource>;
		Type: CreateAppRequestType;

		/**Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>. */
		AppSource?: Source;
		Domains?: Array<String>;
		EnableSsl?: boolean;

		/**Describes an app's SSL configuration. */
		SslConfiguration?: SslConfiguration;
		Attributes?: AppAttributes;
		Environment?: Array<EnvironmentVariable>;
	}

	export enum CreateAppRequestType { aws-flow-ruby = 0, java = 1, rails = 2, php = 3, nodejs = 4, static = 5, other = 6 }


	/**Contains the response to a <code>CreateDeployment</code> request. */
	export interface CreateDeploymentResult {
		DeploymentId?: string;
	}

	export interface CreateDeploymentRequest {
		StackId: string;
		AppId?: string;
		InstanceIds?: Array<String>;
		LayerIds?: Array<String>;

		/**Used to specify a stack or deployment command. */
		Command: DeploymentCommand;
		Comment?: string;
		CustomJson?: string;
	}


	/**Contains the response to a <code>CreateInstance</code> request. */
	export interface CreateInstanceResult {
		InstanceId?: string;
	}

	export interface CreateInstanceRequest {
		StackId: string;
		LayerIds: Array<String>;
		InstanceType: string;
		AutoScalingType?: CreateInstanceRequestAutoScalingType;
		Hostname?: string;
		Os?: string;
		AmiId?: string;
		SshKeyName?: string;
		AvailabilityZone?: string;
		VirtualizationType?: string;
		SubnetId?: string;
		Architecture?: CreateInstanceRequestArchitecture;
		RootDeviceType?: CreateInstanceRequestRootDeviceType;
		BlockDeviceMappings?: Array<BlockDeviceMapping>;
		InstallUpdatesOnBoot?: boolean;
		EbsOptimized?: boolean;
		AgentVersion?: string;
		Tenancy?: string;
	}

	export enum CreateInstanceRequestAutoScalingType { load = 0, timer = 1 }

	export enum CreateInstanceRequestArchitecture { x86_64 = 0, i386 = 1 }

	export enum CreateInstanceRequestRootDeviceType { ebs = 0, instance-store = 1 }


	/**Contains the response to a <code>CreateLayer</code> request. */
	export interface CreateLayerResult {
		LayerId?: string;
	}

	export interface CreateLayerRequest {
		StackId: string;
		Type: CreateLayerRequestType;
		Name: string;
		Shortname: string;
		Attributes?: LayerAttributes;

		/**Describes the Amazon CloudWatch logs configuration for a layer. */
		CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
		CustomInstanceProfileArn?: string;
		CustomJson?: string;
		CustomSecurityGroupIds?: Array<String>;
		Packages?: Array<String>;
		VolumeConfigurations?: Array<VolumeConfiguration>;
		EnableAutoHealing?: boolean;
		AutoAssignElasticIps?: boolean;
		AutoAssignPublicIps?: boolean;

		/**<p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p> */
		CustomRecipes?: Recipes;
		InstallUpdatesOnBoot?: boolean;
		UseEbsOptimizedInstances?: boolean;

		/**Specifies the lifecycle event configuration */
		LifecycleEventConfiguration?: LifecycleEventConfiguration;
	}

	export enum CreateLayerRequestType { aws-flow-ruby = 0, ecs-cluster = 1, java-app = 2, lb = 3, web = 4, php-app = 5, rails-app = 6, nodejs-app = 7, memcached = 8, db-master = 9, monitoring-master = 10, custom = 11 }


	/**Contains the response to a <code>CreateStack</code> request. */
	export interface CreateStackResult {
		StackId?: string;
	}

	export interface CreateStackRequest {
		Name: string;
		Region: string;
		VpcId?: string;
		Attributes?: StackAttributes;
		ServiceRoleArn: string;
		DefaultInstanceProfileArn: string;
		DefaultOs?: string;
		HostnameTheme?: string;
		DefaultAvailabilityZone?: string;
		DefaultSubnetId?: string;
		CustomJson?: string;

		/**Describes the configuration manager. */
		ConfigurationManager?: StackConfigurationManager;

		/**Describes the Chef configuration. */
		ChefConfiguration?: ChefConfiguration;
		UseCustomCookbooks?: boolean;
		UseOpsworksSecurityGroups?: boolean;

		/**Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>. */
		CustomCookbooksSource?: Source;
		DefaultSshKeyName?: string;
		DefaultRootDeviceType?: CreateStackRequestDefaultRootDeviceType;
		AgentVersion?: string;
	}

	export enum CreateStackRequestDefaultRootDeviceType { ebs = 0, instance-store = 1 }


	/**Contains the response to a <code>CreateUserProfile</code> request. */
	export interface CreateUserProfileResult {
		IamUserArn?: string;
	}

	export interface CreateUserProfileRequest {
		IamUserArn: string;
		SshUsername?: string;
		SshPublicKey?: string;
		AllowSelfManagement?: boolean;
	}

	export interface DeleteAppRequest {
		AppId: string;
	}

	export interface DeleteInstanceRequest {
		InstanceId: string;
		DeleteElasticIp?: boolean;
		DeleteVolumes?: boolean;
	}

	export interface DeleteLayerRequest {
		LayerId: string;
	}

	export interface DeleteStackRequest {
		StackId: string;
	}

	export interface DeleteUserProfileRequest {
		IamUserArn: string;
	}

	export interface DeregisterEcsClusterRequest {
		EcsClusterArn: string;
	}

	export interface DeregisterElasticIpRequest {
		ElasticIp: string;
	}

	export interface DeregisterInstanceRequest {
		InstanceId: string;
	}

	export interface DeregisterRdsDbInstanceRequest {
		RdsDbInstanceArn: string;
	}

	export interface DeregisterVolumeRequest {
		VolumeId: string;
	}


	/**Contains the response to a <code>DescribeAgentVersions</code> request. */
	export interface DescribeAgentVersionsResult {
		AgentVersions?: Array<AgentVersion>;
	}

	export interface DescribeAgentVersionsRequest {
		StackId?: string;

		/**Describes the configuration manager. */
		ConfigurationManager?: StackConfigurationManager;
	}


	/**Contains the response to a <code>DescribeApps</code> request. */
	export interface DescribeAppsResult {
		Apps?: Array<App>;
	}

	export interface DescribeAppsRequest {
		StackId?: string;
		AppIds?: Array<String>;
	}


	/**Contains the response to a <code>DescribeCommands</code> request. */
	export interface DescribeCommandsResult {
		Commands?: Array<Command>;
	}

	export interface DescribeCommandsRequest {
		DeploymentId?: string;
		InstanceId?: string;
		CommandIds?: Array<String>;
	}


	/**Contains the response to a <code>DescribeDeployments</code> request. */
	export interface DescribeDeploymentsResult {
		Deployments?: Array<Deployment>;
	}

	export interface DescribeDeploymentsRequest {
		StackId?: string;
		AppId?: string;
		DeploymentIds?: Array<String>;
	}


	/**Contains the response to a <code>DescribeEcsClusters</code> request. */
	export interface DescribeEcsClustersResult {
		EcsClusters?: Array<EcsCluster>;
		NextToken?: string;
	}

	export interface DescribeEcsClustersRequest {
		EcsClusterArns?: Array<String>;
		StackId?: string;
		NextToken?: string;
		MaxResults?: number;
	}


	/**Contains the response to a <code>DescribeElasticIps</code> request. */
	export interface DescribeElasticIpsResult {
		ElasticIps?: Array<ElasticIp>;
	}

	export interface DescribeElasticIpsRequest {
		InstanceId?: string;
		StackId?: string;
		Ips?: Array<String>;
	}


	/**Contains the response to a <code>DescribeElasticLoadBalancers</code> request. */
	export interface DescribeElasticLoadBalancersResult {
		ElasticLoadBalancers?: Array<ElasticLoadBalancer>;
	}

	export interface DescribeElasticLoadBalancersRequest {
		StackId?: string;
		LayerIds?: Array<String>;
	}


	/**Contains the response to a <code>DescribeInstances</code> request. */
	export interface DescribeInstancesResult {
		Instances?: Array<Instance>;
	}

	export interface DescribeInstancesRequest {
		StackId?: string;
		LayerId?: string;
		InstanceIds?: Array<String>;
	}


	/**Contains the response to a <code>DescribeLayers</code> request. */
	export interface DescribeLayersResult {
		Layers?: Array<Layer>;
	}

	export interface DescribeLayersRequest {
		StackId?: string;
		LayerIds?: Array<String>;
	}


	/**Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request. */
	export interface DescribeLoadBasedAutoScalingResult {
		LoadBasedAutoScalingConfigurations?: Array<LoadBasedAutoScalingConfiguration>;
	}

	export interface DescribeLoadBasedAutoScalingRequest {
		LayerIds: Array<String>;
	}


	/**Contains the response to a <code>DescribeMyUserProfile</code> request. */
	export interface DescribeMyUserProfileResult {

		/**Describes a user's SSH information. */
		UserProfile?: SelfUserProfile;
	}


	/**The response to a <code>DescribeOperatingSystems</code> request. */
	export interface DescribeOperatingSystemsResponse {
		OperatingSystems?: Array<OperatingSystem>;
	}


	/**Contains the response to a <code>DescribePermissions</code> request. */
	export interface DescribePermissionsResult {
		Permissions?: Array<Permission>;
	}

	export interface DescribePermissionsRequest {
		IamUserArn?: string;
		StackId?: string;
	}


	/**Contains the response to a <code>DescribeRaidArrays</code> request. */
	export interface DescribeRaidArraysResult {
		RaidArrays?: Array<RaidArray>;
	}

	export interface DescribeRaidArraysRequest {
		InstanceId?: string;
		StackId?: string;
		RaidArrayIds?: Array<String>;
	}


	/**Contains the response to a <code>DescribeRdsDbInstances</code> request. */
	export interface DescribeRdsDbInstancesResult {
		RdsDbInstances?: Array<RdsDbInstance>;
	}

	export interface DescribeRdsDbInstancesRequest {
		StackId: string;
		RdsDbInstanceArns?: Array<String>;
	}


	/**Contains the response to a <code>DescribeServiceErrors</code> request. */
	export interface DescribeServiceErrorsResult {
		ServiceErrors?: Array<ServiceError>;
	}

	export interface DescribeServiceErrorsRequest {
		StackId?: string;
		InstanceId?: string;
		ServiceErrorIds?: Array<String>;
	}


	/**Contains the response to a <code>DescribeStackProvisioningParameters</code> request. */
	export interface DescribeStackProvisioningParametersResult {
		AgentInstallerUrl?: string;
		Parameters?: Parameters;
	}

	export interface DescribeStackProvisioningParametersRequest {
		StackId: string;
	}


	/**Contains the response to a <code>DescribeStackSummary</code> request. */
	export interface DescribeStackSummaryResult {

		/**Summarizes the number of layers, instances, and apps in a stack. */
		StackSummary?: StackSummary;
	}

	export interface DescribeStackSummaryRequest {
		StackId: string;
	}


	/**Contains the response to a <code>DescribeStacks</code> request. */
	export interface DescribeStacksResult {
		Stacks?: Array<Stack>;
	}

	export interface DescribeStacksRequest {
		StackIds?: Array<String>;
	}


	/**Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request. */
	export interface DescribeTimeBasedAutoScalingResult {
		TimeBasedAutoScalingConfigurations?: Array<TimeBasedAutoScalingConfiguration>;
	}

	export interface DescribeTimeBasedAutoScalingRequest {
		InstanceIds: Array<String>;
	}


	/**Contains the response to a <code>DescribeUserProfiles</code> request. */
	export interface DescribeUserProfilesResult {
		UserProfiles?: Array<UserProfile>;
	}

	export interface DescribeUserProfilesRequest {
		IamUserArns?: Array<String>;
	}


	/**Contains the response to a <code>DescribeVolumes</code> request. */
	export interface DescribeVolumesResult {
		Volumes?: Array<Volume>;
	}

	export interface DescribeVolumesRequest {
		InstanceId?: string;
		StackId?: string;
		RaidArrayId?: string;
		VolumeIds?: Array<String>;
	}

	export interface DetachElasticLoadBalancerRequest {
		ElasticLoadBalancerName: string;
		LayerId: string;
	}

	export interface DisassociateElasticIpRequest {
		ElasticIp: string;
	}


	/**Contains the response to a <code>GetHostnameSuggestion</code> request. */
	export interface GetHostnameSuggestionResult {
		LayerId?: string;
		Hostname?: string;
	}

	export interface GetHostnameSuggestionRequest {
		LayerId: string;
	}


	/**Contains the response to a <code>GrantAccess</code> request. */
	export interface GrantAccessResult {

		/**Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance. */
		TemporaryCredential?: TemporaryCredential;
	}

	export interface GrantAccessRequest {
		InstanceId: string;
		ValidForInMinutes?: number;
	}


	/**Contains the response to a <code>ListTags</code> request. */
	export interface ListTagsResult {
		Tags?: Tags;
		NextToken?: string;
	}

	export interface ListTagsRequest {
		ResourceArn: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface RebootInstanceRequest {
		InstanceId: string;
	}


	/**Contains the response to a <code>RegisterEcsCluster</code> request. */
	export interface RegisterEcsClusterResult {
		EcsClusterArn?: string;
	}

	export interface RegisterEcsClusterRequest {
		EcsClusterArn: string;
		StackId: string;
	}


	/**Contains the response to a <code>RegisterElasticIp</code> request. */
	export interface RegisterElasticIpResult {
		ElasticIp?: string;
	}

	export interface RegisterElasticIpRequest {
		ElasticIp: string;
		StackId: string;
	}


	/**Contains the response to a <code>RegisterInstanceResult</code> request. */
	export interface RegisterInstanceResult {
		InstanceId?: string;
	}

	export interface RegisterInstanceRequest {
		StackId: string;
		Hostname?: string;
		PublicIp?: string;
		PrivateIp?: string;
		RsaPublicKey?: string;
		RsaPublicKeyFingerprint?: string;

		/**Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>. */
		InstanceIdentity?: InstanceIdentity;
	}

	export interface RegisterRdsDbInstanceRequest {
		StackId: string;
		RdsDbInstanceArn: string;
		DbUser: string;
		DbPassword: string;
	}


	/**Contains the response to a <code>RegisterVolume</code> request. */
	export interface RegisterVolumeResult {
		VolumeId?: string;
	}

	export interface RegisterVolumeRequest {
		Ec2VolumeId?: string;
		StackId: string;
	}

	export interface SetLoadBasedAutoScalingRequest {
		LayerId: string;
		Enable?: boolean;

		/**Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances. */
		UpScaling?: AutoScalingThresholds;

		/**Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances. */
		DownScaling?: AutoScalingThresholds;
	}

	export interface SetPermissionRequest {
		StackId: string;
		IamUserArn: string;
		AllowSsh?: boolean;
		AllowSudo?: boolean;
		Level?: string;
	}

	export interface SetTimeBasedAutoScalingRequest {
		InstanceId: string;

		/**<p>Describes a time-based instance's auto scaling schedule. The schedule consists of a set of key-value pairs.</p> <ul> <li> <p>The key is the time period (a UTC hour) and must be an integer from 0 - 23.</p> </li> <li> <p>The value indicates whether the instance should be online or offline for the specified period, and must be set to "on" or "off"</p> </li> </ul> <p>The default setting for all time periods is off, so you use the following parameters primarily to specify the online periods. You don't have to explicitly specify offline periods unless you want to change an online period to an offline period.</p> <p>The following example specifies that the instance should be online for four hours, from UTC 1200 - 1600. It will be off for the remainder of the day.</p> <p> <code> { "12":"on", "13":"on", "14":"on", "15":"on" } </code> </p> */
		AutoScalingSchedule?: WeeklyAutoScalingSchedule;
	}

	export interface StartInstanceRequest {
		InstanceId: string;
	}

	export interface StartStackRequest {
		StackId: string;
	}

	export interface StopInstanceRequest {
		InstanceId: string;
		Force?: boolean;
	}

	export interface StopStackRequest {
		StackId: string;
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Tags;
	}

	export interface UnassignInstanceRequest {
		InstanceId: string;
	}

	export interface UnassignVolumeRequest {
		VolumeId: string;
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateAppRequest {
		AppId: string;
		Name?: string;
		Description?: string;
		DataSources?: Array<DataSource>;
		Type?: UpdateAppRequestType;

		/**Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>. */
		AppSource?: Source;
		Domains?: Array<String>;
		EnableSsl?: boolean;

		/**Describes an app's SSL configuration. */
		SslConfiguration?: SslConfiguration;
		Attributes?: AppAttributes;
		Environment?: Array<EnvironmentVariable>;
	}

	export enum UpdateAppRequestType { aws-flow-ruby = 0, java = 1, rails = 2, php = 3, nodejs = 4, static = 5, other = 6 }

	export interface UpdateElasticIpRequest {
		ElasticIp: string;
		Name?: string;
	}

	export interface UpdateInstanceRequest {
		InstanceId: string;
		LayerIds?: Array<String>;
		InstanceType?: string;
		AutoScalingType?: UpdateInstanceRequestAutoScalingType;
		Hostname?: string;
		Os?: string;
		AmiId?: string;
		SshKeyName?: string;
		Architecture?: UpdateInstanceRequestArchitecture;
		InstallUpdatesOnBoot?: boolean;
		EbsOptimized?: boolean;
		AgentVersion?: string;
	}

	export enum UpdateInstanceRequestAutoScalingType { load = 0, timer = 1 }

	export enum UpdateInstanceRequestArchitecture { x86_64 = 0, i386 = 1 }

	export interface UpdateLayerRequest {
		LayerId: string;
		Name?: string;
		Shortname?: string;
		Attributes?: LayerAttributes;

		/**Describes the Amazon CloudWatch logs configuration for a layer. */
		CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
		CustomInstanceProfileArn?: string;
		CustomJson?: string;
		CustomSecurityGroupIds?: Array<String>;
		Packages?: Array<String>;
		VolumeConfigurations?: Array<VolumeConfiguration>;
		EnableAutoHealing?: boolean;
		AutoAssignElasticIps?: boolean;
		AutoAssignPublicIps?: boolean;

		/**<p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p> */
		CustomRecipes?: Recipes;
		InstallUpdatesOnBoot?: boolean;
		UseEbsOptimizedInstances?: boolean;

		/**Specifies the lifecycle event configuration */
		LifecycleEventConfiguration?: LifecycleEventConfiguration;
	}

	export interface UpdateMyUserProfileRequest {
		SshPublicKey?: string;
	}

	export interface UpdateRdsDbInstanceRequest {
		RdsDbInstanceArn: string;
		DbUser?: string;
		DbPassword?: string;
	}

	export interface UpdateStackRequest {
		StackId: string;
		Name?: string;
		Attributes?: StackAttributes;
		ServiceRoleArn?: string;
		DefaultInstanceProfileArn?: string;
		DefaultOs?: string;
		HostnameTheme?: string;
		DefaultAvailabilityZone?: string;
		DefaultSubnetId?: string;
		CustomJson?: string;

		/**Describes the configuration manager. */
		ConfigurationManager?: StackConfigurationManager;

		/**Describes the Chef configuration. */
		ChefConfiguration?: ChefConfiguration;
		UseCustomCookbooks?: boolean;

		/**Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>. */
		CustomCookbooksSource?: Source;
		DefaultSshKeyName?: string;
		DefaultRootDeviceType?: UpdateStackRequestDefaultRootDeviceType;
		UseOpsworksSecurityGroups?: boolean;
		AgentVersion?: string;
	}

	export enum UpdateStackRequestDefaultRootDeviceType { ebs = 0, instance-store = 1 }

	export interface UpdateUserProfileRequest {
		IamUserArn: string;
		SshUsername?: string;
		SshPublicKey?: string;
		AllowSelfManagement?: boolean;
	}

	export interface UpdateVolumeRequest {
		VolumeId: string;
		Name?: string;
		MountPoint?: string;
	}


	/**Describes the configuration manager. */
	export interface StackConfigurationManager {
		Name?: string;
		Version?: string;
	}


	/**Describes an agent version. */
	export interface AgentVersion {
		Version?: string;

		/**Describes the configuration manager. */
		ConfigurationManager?: StackConfigurationManager;
	}

	export enum AppType { aws-flow-ruby = 0, java = 1, rails = 2, php = 3, nodejs = 4, static = 5, other = 6 }


	/**Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>. */
	export interface Source {
		Type?: SourceType;
		Url?: string;
		Username?: string;
		Password?: string;
		SshKey?: string;
		Revision?: string;
	}

	export enum SourceType { git = 0, svn = 1, archive = 2, s3 = 3 }


	/**Describes an app's SSL configuration. */
	export interface SslConfiguration {
		Certificate: string;
		PrivateKey: string;
		Chain?: string;
	}


	/**A description of the app. */
	export interface App {
		AppId?: string;
		StackId?: string;
		Shortname?: string;
		Name?: string;
		Description?: string;
		DataSources?: Array<DataSource>;
		Type?: AppType;

		/**Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>. */
		AppSource?: Source;
		Domains?: Array<String>;
		EnableSsl?: boolean;

		/**Describes an app's SSL configuration. */
		SslConfiguration?: SslConfiguration;
		Attributes?: AppAttributes;
		CreatedAt?: string;
		Environment?: Array<EnvironmentVariable>;
	}

	export enum AppType { aws-flow-ruby = 0, java = 1, rails = 2, php = 3, nodejs = 4, static = 5, other = 6 }

	export enum AppAttributesKeys { DocumentRoot = 0, RailsEnv = 1, AutoBundleOnDeploy = 2, AwsFlowRubySettings = 3 }

	export enum Architecture { x86_64 = 0, i386 = 1 }


	/**Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances. */
	export interface AutoScalingThresholds {
		InstanceCount?: number;
		ThresholdsWaitTime?: number;
		IgnoreMetricsTime?: number;
		CpuThreshold?: number;
		MemoryThreshold?: number;
		LoadThreshold?: number;
		Alarms?: Array<String>;
	}

	export enum AutoScalingType { load = 0, timer = 1 }


	/**Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type. */
	export interface EbsBlockDevice {
		SnapshotId?: string;
		Iops?: number;
		VolumeSize?: number;
		VolumeType?: EbsBlockDeviceVolumeType;
		DeleteOnTermination?: boolean;
	}

	export enum EbsBlockDeviceVolumeType { gp2 = 0, io1 = 1, standard = 2 }


	/**Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a> data type.  */
	export interface BlockDeviceMapping {
		DeviceName?: string;
		NoDevice?: string;
		VirtualName?: string;

		/**Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type. */
		Ebs?: EbsBlockDevice;
	}


	/**Describes the Chef configuration. */
	export interface ChefConfiguration {
		ManageBerkshelf?: boolean;
		BerkshelfVersion?: string;
	}

	export enum RootDeviceType { ebs = 0, instance-store = 1 }


	/**Describes the Amazon CloudWatch logs configuration for a layer. */
	export interface CloudWatchLogsConfiguration {
		Enabled?: boolean;

		/**Describes the Amazon CloudWatch logs configuration for a layer. */
		LogStreams?: Array<CloudWatchLogsLogStream>;
	}


	/**Specifies the encoding of the log file so that the file can be read correctly. The default is <code>utf_8</code>. Encodings supported by Python <code>codecs.decode()</code> can be used here. */
	export enum CloudWatchLogsEncoding { ascii = 0, big5 = 1, big5hkscs = 2, cp037 = 3, cp424 = 4, cp437 = 5, cp500 = 6, cp720 = 7, cp737 = 8, cp775 = 9, cp850 = 10, cp852 = 11, cp855 = 12, cp856 = 13, cp857 = 14, cp858 = 15, cp860 = 16, cp861 = 17, cp862 = 18, cp863 = 19, cp864 = 20, cp865 = 21, cp866 = 22, cp869 = 23, cp874 = 24, cp875 = 25, cp932 = 26, cp949 = 27, cp950 = 28, cp1006 = 29, cp1026 = 30, cp1140 = 31, cp1250 = 32, cp1251 = 33, cp1252 = 34, cp1253 = 35, cp1254 = 36, cp1255 = 37, cp1256 = 38, cp1257 = 39, cp1258 = 40, euc_jp = 41, euc_jis_2004 = 42, euc_jisx0213 = 43, euc_kr = 44, gb2312 = 45, gbk = 46, gb18030 = 47, hz = 48, iso2022_jp = 49, iso2022_jp_1 = 50, iso2022_jp_2 = 51, iso2022_jp_2004 = 52, iso2022_jp_3 = 53, iso2022_jp_ext = 54, iso2022_kr = 55, latin_1 = 56, iso8859_2 = 57, iso8859_3 = 58, iso8859_4 = 59, iso8859_5 = 60, iso8859_6 = 61, iso8859_7 = 62, iso8859_8 = 63, iso8859_9 = 64, iso8859_10 = 65, iso8859_13 = 66, iso8859_14 = 67, iso8859_15 = 68, iso8859_16 = 69, johab = 70, koi8_r = 71, koi8_u = 72, mac_cyrillic = 73, mac_greek = 74, mac_iceland = 75, mac_latin2 = 76, mac_roman = 77, mac_turkish = 78, ptcp154 = 79, shift_jis = 80, shift_jis_2004 = 81, shift_jisx0213 = 82, utf_32 = 83, utf_32_be = 84, utf_32_le = 85, utf_16 = 86, utf_16_be = 87, utf_16_le = 88, utf_7 = 89, utf_8 = 90, utf_8_sig = 91 }


	/**Specifies where to start to read data (start_of_file or end_of_file). The default is start_of_file. It's only used if there is no state persisted for that log stream. */
	export enum CloudWatchLogsInitialPosition { start_of_file = 0, end_of_file = 1 }


	/**The preferred time zone for logs streamed to CloudWatch Logs. Valid values are <code>LOCAL</code> and <code>UTC</code>, for Coordinated Universal Time. */
	export enum CloudWatchLogsTimeZone { LOCAL = 0, UTC = 1 }


	/**Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>. */
	export interface CloudWatchLogsLogStream {
		LogGroupName?: string;
		DatetimeFormat?: string;

		/**The preferred time zone for logs streamed to CloudWatch Logs. Valid values are <code>LOCAL</code> and <code>UTC</code>, for Coordinated Universal Time. */
		TimeZone?: CloudWatchLogsLogStreamTimeZone;
		File?: string;
		FileFingerprintLines?: string;
		MultiLineStartPattern?: string;

		/**Specifies where to start to read data (start_of_file or end_of_file). The default is start_of_file. It's only used if there is no state persisted for that log stream. */
		InitialPosition?: CloudWatchLogsLogStreamInitialPosition;

		/**Specifies the encoding of the log file so that the file can be read correctly. The default is <code>utf_8</code>. Encodings supported by Python <code>codecs.decode()</code> can be used here. */
		Encoding?: CloudWatchLogsLogStreamEncoding;
		BufferDuration?: number;
		BatchCount?: number;
		BatchSize?: number;
	}

	export enum CloudWatchLogsLogStreamTimeZone { LOCAL = 0, UTC = 1 }

	export enum CloudWatchLogsLogStreamInitialPosition { start_of_file = 0, end_of_file = 1 }

	export enum CloudWatchLogsLogStreamEncoding { ascii = 0, big5 = 1, big5hkscs = 2, cp037 = 3, cp424 = 4, cp437 = 5, cp500 = 6, cp720 = 7, cp737 = 8, cp775 = 9, cp850 = 10, cp852 = 11, cp855 = 12, cp856 = 13, cp857 = 14, cp858 = 15, cp860 = 16, cp861 = 17, cp862 = 18, cp863 = 19, cp864 = 20, cp865 = 21, cp866 = 22, cp869 = 23, cp874 = 24, cp875 = 25, cp932 = 26, cp949 = 27, cp950 = 28, cp1006 = 29, cp1026 = 30, cp1140 = 31, cp1250 = 32, cp1251 = 33, cp1252 = 34, cp1253 = 35, cp1254 = 36, cp1255 = 37, cp1256 = 38, cp1257 = 39, cp1258 = 40, euc_jp = 41, euc_jis_2004 = 42, euc_jisx0213 = 43, euc_kr = 44, gb2312 = 45, gbk = 46, gb18030 = 47, hz = 48, iso2022_jp = 49, iso2022_jp_1 = 50, iso2022_jp_2 = 51, iso2022_jp_2004 = 52, iso2022_jp_3 = 53, iso2022_jp_ext = 54, iso2022_kr = 55, latin_1 = 56, iso8859_2 = 57, iso8859_3 = 58, iso8859_4 = 59, iso8859_5 = 60, iso8859_6 = 61, iso8859_7 = 62, iso8859_8 = 63, iso8859_9 = 64, iso8859_10 = 65, iso8859_13 = 66, iso8859_14 = 67, iso8859_15 = 68, iso8859_16 = 69, johab = 70, koi8_r = 71, koi8_u = 72, mac_cyrillic = 73, mac_greek = 74, mac_iceland = 75, mac_latin2 = 76, mac_roman = 77, mac_turkish = 78, ptcp154 = 79, shift_jis = 80, shift_jis_2004 = 81, shift_jisx0213 = 82, utf_32 = 83, utf_32_be = 84, utf_32_le = 85, utf_16 = 86, utf_16_be = 87, utf_16_le = 88, utf_7 = 89, utf_8 = 90, utf_8_sig = 91 }


	/**Describes a command. */
	export interface Command {
		CommandId?: string;
		InstanceId?: string;
		DeploymentId?: string;
		CreatedAt?: string;
		AcknowledgedAt?: string;
		CompletedAt?: string;
		Status?: string;
		ExitCode?: number;
		LogUrl?: string;
		Type?: string;
	}


	/**Used to specify a stack or deployment command. */
	export interface DeploymentCommand {
		Name: DeploymentCommandName;
		Args?: DeploymentCommandArgs;
	}

	export enum DeploymentCommandName { install_dependencies = 0, update_dependencies = 1, update_custom_cookbooks = 2, execute_recipes = 3, configure = 4, setup = 5, deploy = 6, rollback = 7, start = 8, stop = 9, restart = 10, undeploy = 11 }

	export enum LayerType { aws-flow-ruby = 0, ecs-cluster = 1, java-app = 2, lb = 3, web = 4, php-app = 5, rails-app = 6, nodejs-app = 7, memcached = 8, db-master = 9, monitoring-master = 10, custom = 11 }


	/**<p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p> */
	export interface Recipes {
		Setup?: Array<String>;
		Configure?: Array<String>;
		Deploy?: Array<String>;
		Undeploy?: Array<String>;
		Shutdown?: Array<String>;
	}


	/**Specifies the lifecycle event configuration */
	export interface LifecycleEventConfiguration {

		/**The Shutdown event configuration. */
		Shutdown?: ShutdownEventConfiguration;
	}


	/**Describes an app's data source. */
	export interface DataSource {
		Type?: string;
		Arn?: string;
		DatabaseName?: string;
	}


	/**Describes a deployment of a stack or app. */
	export interface Deployment {
		DeploymentId?: string;
		StackId?: string;
		AppId?: string;
		CreatedAt?: string;
		CompletedAt?: string;
		Duration?: number;
		IamUserArn?: string;
		Comment?: string;

		/**Used to specify a stack or deployment command. */
		Command?: DeploymentCommand;
		Status?: string;
		CustomJson?: string;
		InstanceIds?: Array<String>;
	}

	export enum DeploymentCommandName { install_dependencies = 0, update_dependencies = 1, update_custom_cookbooks = 2, execute_recipes = 3, configure = 4, setup = 5, deploy = 6, rollback = 7, start = 8, stop = 9, restart = 10, undeploy = 11 }


	/**Describes a user's SSH information. */
	export interface SelfUserProfile {
		IamUserArn?: string;
		Name?: string;
		SshUsername?: string;
		SshPublicKey?: string;
	}


	/**Summarizes the number of layers, instances, and apps in a stack. */
	export interface StackSummary {
		StackId?: string;
		Name?: string;
		Arn?: string;
		LayersCount?: number;
		AppsCount?: number;

		/**Describes how many instances a stack has for each status. */
		InstancesCount?: InstancesCount;
	}

	export enum VolumeType { gp2 = 0, io1 = 1, standard = 2 }


	/**Describes a registered Amazon ECS cluster. */
	export interface EcsCluster {
		EcsClusterArn?: string;
		EcsClusterName?: string;
		StackId?: string;
		RegisteredAt?: string;
	}


	/**Describes an Elastic IP address. */
	export interface ElasticIp {
		Ip?: string;
		Name?: string;
		Domain?: string;
		Region?: string;
		InstanceId?: string;
	}


	/**Describes an Elastic Load Balancing instance. */
	export interface ElasticLoadBalancer {
		ElasticLoadBalancerName?: string;
		Region?: string;
		DnsName?: string;
		StackId?: string;
		LayerId?: string;
		VpcId?: string;
		AvailabilityZones?: Array<String>;
		SubnetIds?: Array<String>;
		Ec2InstanceIds?: Array<String>;
	}


	/**Represents an app's environment variable. */
	export interface EnvironmentVariable {
		Key: string;
		Value: string;
		Secure?: boolean;
	}


	/**Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance. */
	export interface TemporaryCredential {
		Username?: string;
		Password?: string;
		ValidForInMinutes?: number;
		InstanceId?: string;
	}


	/**A registered instance's reported operating system. */
	export interface ReportedOs {
		Family?: string;
		Name?: string;
		Version?: string;
	}

	export enum VirtualizationType { paravirtual = 0, hvm = 1 }


	/**Describes an instance. */
	export interface Instance {
		AgentVersion?: string;
		AmiId?: string;
		Architecture?: InstanceArchitecture;
		Arn?: string;
		AutoScalingType?: InstanceAutoScalingType;
		AvailabilityZone?: string;
		BlockDeviceMappings?: Array<BlockDeviceMapping>;
		CreatedAt?: string;
		EbsOptimized?: boolean;
		Ec2InstanceId?: string;
		EcsClusterArn?: string;
		EcsContainerInstanceArn?: string;
		ElasticIp?: string;
		Hostname?: string;
		InfrastructureClass?: string;
		InstallUpdatesOnBoot?: boolean;
		InstanceId?: string;
		InstanceProfileArn?: string;
		InstanceType?: string;
		LastServiceErrorId?: string;
		LayerIds?: Array<String>;
		Os?: string;
		Platform?: string;
		PrivateDns?: string;
		PrivateIp?: string;
		PublicDns?: string;
		PublicIp?: string;
		RegisteredBy?: string;
		ReportedAgentVersion?: string;

		/**A registered instance's reported operating system. */
		ReportedOs?: ReportedOs;
		RootDeviceType?: InstanceRootDeviceType;
		RootDeviceVolumeId?: string;
		SecurityGroupIds?: Array<String>;
		SshHostDsaKeyFingerprint?: string;
		SshHostRsaKeyFingerprint?: string;
		SshKeyName?: string;
		StackId?: string;
		Status?: string;
		SubnetId?: string;
		Tenancy?: string;
		VirtualizationType?: InstanceVirtualizationType;
	}

	export enum InstanceArchitecture { x86_64 = 0, i386 = 1 }

	export enum InstanceAutoScalingType { load = 0, timer = 1 }

	export enum InstanceRootDeviceType { ebs = 0, instance-store = 1 }

	export enum InstanceVirtualizationType { paravirtual = 0, hvm = 1 }


	/**Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>. */
	export interface InstanceIdentity {
		Document?: string;
		Signature?: string;
	}


	/**Describes how many instances a stack has for each status. */
	export interface InstancesCount {
		Assigning?: number;
		Booting?: number;
		ConnectionLost?: number;
		Deregistering?: number;
		Online?: number;
		Pending?: number;
		Rebooting?: number;
		Registered?: number;
		Registering?: number;
		Requested?: number;
		RunningSetup?: number;
		SetupFailed?: number;
		ShuttingDown?: number;
		StartFailed?: number;
		StopFailed?: number;
		Stopped?: number;
		Stopping?: number;
		Terminated?: number;
		Terminating?: number;
		Unassigning?: number;
	}


	/**Describes a layer. */
	export interface Layer {
		Arn?: string;
		StackId?: string;
		LayerId?: string;
		Type?: LayerType;
		Name?: string;
		Shortname?: string;
		Attributes?: LayerAttributes;

		/**Describes the Amazon CloudWatch logs configuration for a layer. */
		CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
		CustomInstanceProfileArn?: string;
		CustomJson?: string;
		CustomSecurityGroupIds?: Array<String>;
		DefaultSecurityGroupNames?: Array<String>;
		Packages?: Array<String>;
		VolumeConfigurations?: Array<VolumeConfiguration>;
		EnableAutoHealing?: boolean;
		AutoAssignElasticIps?: boolean;
		AutoAssignPublicIps?: boolean;

		/**<p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p> */
		DefaultRecipes?: Recipes;

		/**<p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p> */
		CustomRecipes?: Recipes;
		CreatedAt?: string;
		InstallUpdatesOnBoot?: boolean;
		UseEbsOptimizedInstances?: boolean;

		/**Specifies the lifecycle event configuration */
		LifecycleEventConfiguration?: LifecycleEventConfiguration;
	}

	export enum LayerType { aws-flow-ruby = 0, ecs-cluster = 1, java-app = 2, lb = 3, web = 4, php-app = 5, rails-app = 6, nodejs-app = 7, memcached = 8, db-master = 9, monitoring-master = 10, custom = 11 }

	export enum LayerAttributesKeys { EcsClusterArn = 0, EnableHaproxyStats = 1, HaproxyStatsUrl = 2, HaproxyStatsUser = 3, HaproxyStatsPassword = 4, HaproxyHealthCheckUrl = 5, HaproxyHealthCheckMethod = 6, MysqlRootPassword = 7, MysqlRootPasswordUbiquitous = 8, GangliaUrl = 9, GangliaUser = 10, GangliaPassword = 11, MemcachedMemory = 12, NodejsVersion = 13, RubyVersion = 14, RubygemsVersion = 15, ManageBundler = 16, BundlerVersion = 17, RailsStack = 18, PassengerVersion = 19, Jvm = 20, JvmVersion = 21, JvmOptions = 22, JavaAppServer = 23, JavaAppServerVersion = 24 }


	/**The Shutdown event configuration. */
	export interface ShutdownEventConfiguration {
		ExecutionTimeout?: number;
		DelayUntilElbConnectionsDrained?: boolean;
	}


	/**Describes a layer's load-based auto scaling configuration. */
	export interface LoadBasedAutoScalingConfiguration {
		LayerId?: string;
		Enable?: boolean;

		/**Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances. */
		UpScaling?: AutoScalingThresholds;

		/**Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances. */
		DownScaling?: AutoScalingThresholds;
	}


	/**Describes supported operating systems in AWS OpsWorks Stacks. */
	export interface OperatingSystem {
		Name?: string;
		Id?: string;
		Type?: string;
		ConfigurationManagers?: Array<OperatingSystemConfigurationManager>;
		ReportedName?: string;
		ReportedVersion?: string;
		Supported?: boolean;
	}


	/**A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system. */
	export interface OperatingSystemConfigurationManager {
		Name?: string;
		Version?: string;
	}


	/**Describes stack or user permissions. */
	export interface Permission {
		StackId?: string;
		IamUserArn?: string;
		AllowSsh?: boolean;
		AllowSudo?: boolean;
		Level?: string;
	}


	/**Describes an instance's RAID array. */
	export interface RaidArray {
		RaidArrayId?: string;
		InstanceId?: string;
		Name?: string;
		RaidLevel?: number;
		NumberOfDisks?: number;
		Size?: number;
		Device?: string;
		MountPoint?: string;
		AvailabilityZone?: string;
		CreatedAt?: string;
		StackId?: string;
		VolumeType?: string;
		Iops?: number;
	}


	/**Describes an Amazon RDS instance. */
	export interface RdsDbInstance {
		RdsDbInstanceArn?: string;
		DbInstanceIdentifier?: string;
		DbUser?: string;
		DbPassword?: string;
		Region?: string;
		Address?: string;
		Engine?: string;
		StackId?: string;
		MissingOnRds?: boolean;
	}


	/**Describes an AWS OpsWorks Stacks service error. */
	export interface ServiceError {
		ServiceErrorId?: string;
		StackId?: string;
		InstanceId?: string;
		Type?: string;
		Message?: string;
		CreatedAt?: string;
	}


	/**<p>Describes a time-based instance's auto scaling schedule. The schedule consists of a set of key-value pairs.</p> <ul> <li> <p>The key is the time period (a UTC hour) and must be an integer from 0 - 23.</p> </li> <li> <p>The value indicates whether the instance should be online or offline for the specified period, and must be set to "on" or "off"</p> </li> </ul> <p>The default setting for all time periods is off, so you use the following parameters primarily to specify the online periods. You don't have to explicitly specify offline periods unless you want to change an online period to an offline period.</p> <p>The following example specifies that the instance should be online for four hours, from UTC 1200 - 1600. It will be off for the remainder of the day.</p> <p> <code> { "12":"on", "13":"on", "14":"on", "15":"on" } </code> </p> */
	export interface WeeklyAutoScalingSchedule {
		Monday?: DailyAutoScalingSchedule;
		Tuesday?: DailyAutoScalingSchedule;
		Wednesday?: DailyAutoScalingSchedule;
		Thursday?: DailyAutoScalingSchedule;
		Friday?: DailyAutoScalingSchedule;
		Saturday?: DailyAutoScalingSchedule;
		Sunday?: DailyAutoScalingSchedule;
	}

	export enum SourceType { git = 0, svn = 1, archive = 2, s3 = 3 }


	/**Describes a stack. */
	export interface Stack {
		StackId?: string;
		Name?: string;
		Arn?: string;
		Region?: string;
		VpcId?: string;
		Attributes?: StackAttributes;
		ServiceRoleArn?: string;
		DefaultInstanceProfileArn?: string;
		DefaultOs?: string;
		HostnameTheme?: string;
		DefaultAvailabilityZone?: string;
		DefaultSubnetId?: string;
		CustomJson?: string;

		/**Describes the configuration manager. */
		ConfigurationManager?: StackConfigurationManager;

		/**Describes the Chef configuration. */
		ChefConfiguration?: ChefConfiguration;
		UseCustomCookbooks?: boolean;
		UseOpsworksSecurityGroups?: boolean;

		/**Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>. */
		CustomCookbooksSource?: Source;
		DefaultSshKeyName?: string;
		CreatedAt?: string;
		DefaultRootDeviceType?: StackDefaultRootDeviceType;
		AgentVersion?: string;
	}

	export enum StackDefaultRootDeviceType { ebs = 0, instance-store = 1 }

	export enum StackAttributesKeys { Color = 0 }


	/**Describes an instance's time-based auto scaling configuration. */
	export interface TimeBasedAutoScalingConfiguration {
		InstanceId?: string;

		/**<p>Describes a time-based instance's auto scaling schedule. The schedule consists of a set of key-value pairs.</p> <ul> <li> <p>The key is the time period (a UTC hour) and must be an integer from 0 - 23.</p> </li> <li> <p>The value indicates whether the instance should be online or offline for the specified period, and must be set to "on" or "off"</p> </li> </ul> <p>The default setting for all time periods is off, so you use the following parameters primarily to specify the online periods. You don't have to explicitly specify offline periods unless you want to change an online period to an offline period.</p> <p>The following example specifies that the instance should be online for four hours, from UTC 1200 - 1600. It will be off for the remainder of the day.</p> <p> <code> { "12":"on", "13":"on", "14":"on", "15":"on" } </code> </p> */
		AutoScalingSchedule?: WeeklyAutoScalingSchedule;
	}


	/**Describes a user's SSH information. */
	export interface UserProfile {
		IamUserArn?: string;
		Name?: string;
		SshUsername?: string;
		SshPublicKey?: string;
		AllowSelfManagement?: boolean;
	}


	/**Describes an instance's Amazon EBS volume. */
	export interface Volume {
		VolumeId?: string;
		Ec2VolumeId?: string;
		Name?: string;
		RaidArrayId?: string;
		InstanceId?: string;
		Status?: string;
		Size?: number;
		Device?: string;
		MountPoint?: string;
		Region?: string;
		AvailabilityZone?: string;
		VolumeType?: string;
		Iops?: number;
		Encrypted?: boolean;
	}


	/**Describes an Amazon EBS volume configuration. */
	export interface VolumeConfiguration {
		MountPoint: string;
		RaidLevel?: number;
		NumberOfDisks: number;
		Size: number;
		VolumeType?: string;
		Iops?: number;
		Encrypted?: boolean;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * <p>Assign a registered instance to a layer.</p> <ul> <li> <p>You can assign registered on-premises instances to any layer type.</p> </li> <li> <p>You can assign registered Amazon EC2 instances only to custom layers.</p> </li> <li> <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> </li> </ul> <p> <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management (IAM) user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.AssignInstance
		 * @return {void} Success
		 */
		AssignInstance(callback: (data : void) => any, requestBody: AssignInstanceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.AssignInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling <a>RegisterVolume</a>. After you register the volume, you must call <a>UpdateVolume</a> to specify a mount point before calling <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.AssignVolume
		 * @return {void} Success
		 */
		AssignVolume(callback: (data : void) => any, requestBody: AssignVolumeRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.AssignVolume', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Associates one of the stack's registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp
		 * @return {void} Success
		 */
		AssociateElasticIp(callback: (data : void) => any, requestBody: AssociateElasticIpRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load Balancing</a>.</p> <note> <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html"> Elastic Load Balancing Developer Guide</a>.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer
		 * @return {void} Success
		 */
		AttachElasticLoadBalancer(callback: (data : void) => any, requestBody: AttachElasticLoadBalancerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a Stack</a>. By default, all parameters are set to the values used by the parent stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.CloneStack
		 * @return {CloneStackResult} Success
		 */
		CloneStack(callback: (data : CloneStackResult) => any, requestBody: CloneStackRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.CloneStack', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.CreateApp
		 * @return {CreateAppResult} Success
		 */
		CreateApp(callback: (data : CreateAppResult) => any, requestBody: CreateAppRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.CreateApp', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.CreateDeployment
		 * @return {CreateDeploymentResult} Success
		 */
		CreateDeployment(callback: (data : CreateDeploymentResult) => any, requestBody: CreateDeploymentRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.CreateDeployment', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an Instance to a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.CreateInstance
		 * @return {CreateInstanceResult} Success
		 */
		CreateInstance(callback: (data : CreateInstanceResult) => any, requestBody: CreateInstanceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.CreateInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to Create a Layer</a>.</p> <note> <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as many times as you like for that layer type.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.CreateLayer
		 * @return {CreateLayerResult} Success
		 */
		CreateLayer(callback: (data : CreateLayerResult) => any, requestBody: CreateLayerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.CreateLayer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.CreateStack
		 * @return {CreateStackResult} Success
		 */
		CreateStack(callback: (data : CreateStackResult) => any, requestBody: CreateStackRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.CreateStack', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a new user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.CreateUserProfile
		 * @return {CreateUserProfileResult} Success
		 */
		CreateUserProfile(callback: (data : CreateUserProfileResult) => any, requestBody: CreateUserProfileRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.CreateUserProfile', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DeleteApp
		 * @return {void} Success
		 */
		DeleteApp(callback: (data : void) => any, requestBody: DeleteAppRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DeleteApp', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-delete.html">Deleting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DeleteInstance
		 * @return {void} Success
		 */
		DeleteInstance(callback: (data : void) => any, requestBody: DeleteInstanceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DeleteInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to Delete a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DeleteLayer
		 * @return {void} Success
		 */
		DeleteLayer(callback: (data : void) => any, requestBody: DeleteLayerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DeleteLayer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html">Shut Down a Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DeleteStack
		 * @return {void} Success
		 */
		DeleteStack(callback: (data : void) => any, requestBody: DeleteStackRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DeleteStack', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes a user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile
		 * @return {void} Success
		 */
		DeleteUserProfile(callback: (data : void) => any, requestBody: DeleteUserProfileRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deregisters a specified Amazon ECS cluster from a stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster
		 * @return {void} Success
		 */
		DeregisterEcsCluster(callback: (data : void) => any, requestBody: DeregisterEcsClusterRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp
		 * @return {void} Success
		 */
		DeregisterElasticIp(callback: (data : void) => any, requestBody: DeregisterElasticIpRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action cannot be used with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DeregisterInstance
		 * @return {void} Success
		 */
		DeregisterInstance(callback: (data : void) => any, requestBody: DeregisterInstanceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DeregisterInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deregisters an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance
		 * @return {void} Success
		 */
		DeregisterRdsDbInstance(callback: (data : void) => any, requestBody: DeregisterRdsDbInstanceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DeregisterVolume
		 * @return {void} Success
		 */
		DeregisterVolume(callback: (data : void) => any, requestBody: DeregisterVolumeRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DeregisterVolume', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. <code>DescribeAgentVersions</code> returns a list of available agent versions for the specified stack or configuration manager.
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions
		 * @return {DescribeAgentVersionsResult} Success
		 */
		DescribeAgentVersions(callback: (data : DescribeAgentVersionsResult) => any, requestBody: DescribeAgentVersionsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Requests a description of a specified set of apps.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeApps
		 * @return {DescribeAppsResult} Success
		 */
		DescribeApps(callback: (data : DescribeAppsResult) => any, requestBody: DescribeAppsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeApps', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describes the results of specified commands.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeCommands
		 * @return {DescribeCommandsResult} Success
		 */
		DescribeCommands(callback: (data : DescribeCommandsResult) => any, requestBody: DescribeCommandsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeCommands', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Requests a description of a specified set of deployments.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeDeployments
		 * @return {DescribeDeploymentsResult} Success
		 */
		DescribeDeployments(callback: (data : DescribeDeploymentsResult) => any, requestBody: DescribeDeploymentsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeDeployments', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeEcsClustersResult} Success
		 */
		DescribeEcsClusters(MaxResults: string, NextToken: string, callback: (data : DescribeEcsClustersResult) => any, requestBody: DescribeEcsClustersRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describes <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP addresses</a>.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps
		 * @return {DescribeElasticIpsResult} Success
		 */
		DescribeElasticIps(callback: (data : DescribeElasticIpsResult) => any, requestBody: DescribeElasticIpsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describes a stack's Elastic Load Balancing instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers
		 * @return {DescribeElasticLoadBalancersResult} Success
		 */
		DescribeElasticLoadBalancers(callback: (data : DescribeElasticLoadBalancersResult) => any, requestBody: DescribeElasticLoadBalancersRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Requests a description of a set of instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeInstances
		 * @return {DescribeInstancesResult} Success
		 */
		DescribeInstances(callback: (data : DescribeInstancesResult) => any, requestBody: DescribeInstancesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeInstances', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Requests a description of one or more layers in a specified stack.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeLayers
		 * @return {DescribeLayersResult} Success
		 */
		DescribeLayers(callback: (data : DescribeLayersResult) => any, requestBody: DescribeLayersRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeLayers', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describes load-based auto scaling configurations for specified layers.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling
		 * @return {DescribeLoadBasedAutoScalingResult} Success
		 */
		DescribeLoadBasedAutoScaling(callback: (data : DescribeLoadBasedAutoScalingResult) => any, requestBody: DescribeLoadBasedAutoScalingRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describes a user's SSH information.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile
		 * @return {DescribeMyUserProfileResult} Success
		 */
		DescribeMyUserProfile(callback: (data : DescribeMyUserProfileResult) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the operating systems that are supported by AWS OpsWorks Stacks.
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems
		 * @return {DescribeOperatingSystemsResponse} Success
		 */
		DescribeOperatingSystems(callback: (data : DescribeOperatingSystemsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describes the permissions for a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribePermissions
		 * @return {DescribePermissionsResult} Success
		 */
		DescribePermissions(callback: (data : DescribePermissionsResult) => any, requestBody: DescribePermissionsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribePermissions', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describe an instance's RAID arrays.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays
		 * @return {DescribeRaidArraysResult} Success
		 */
		DescribeRaidArrays(callback: (data : DescribeRaidArraysResult) => any, requestBody: DescribeRaidArraysRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describes Amazon RDS instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances
		 * @return {DescribeRdsDbInstancesResult} Success
		 */
		DescribeRdsDbInstances(callback: (data : DescribeRdsDbInstancesResult) => any, requestBody: DescribeRdsDbInstancesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describes AWS OpsWorks Stacks service errors.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors
		 * @return {DescribeServiceErrorsResult} Success
		 */
		DescribeServiceErrors(callback: (data : DescribeServiceErrorsResult) => any, requestBody: DescribeServiceErrorsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Requests a description of a stack's provisioning parameters.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters
		 * @return {DescribeStackProvisioningParametersResult} Success
		 */
		DescribeStackProvisioningParameters(callback: (data : DescribeStackProvisioningParametersResult) => any, requestBody: DescribeStackProvisioningParametersRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as <code>running_setup</code> or <code>online</code>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary
		 * @return {DescribeStackSummaryResult} Success
		 */
		DescribeStackSummary(callback: (data : DescribeStackSummaryResult) => any, requestBody: DescribeStackSummaryRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Requests a description of one or more stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeStacks
		 * @return {DescribeStacksResult} Success
		 */
		DescribeStacks(callback: (data : DescribeStacksResult) => any, requestBody: DescribeStacksRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeStacks', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describes time-based auto scaling configurations for specified instances.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling
		 * @return {DescribeTimeBasedAutoScalingResult} Success
		 */
		DescribeTimeBasedAutoScaling(callback: (data : DescribeTimeBasedAutoScalingResult) => any, requestBody: DescribeTimeBasedAutoScalingRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describe specified users.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles
		 * @return {DescribeUserProfilesResult} Success
		 */
		DescribeUserProfiles(callback: (data : DescribeUserProfilesResult) => any, requestBody: DescribeUserProfilesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Describes an instance's Amazon EBS volumes.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DescribeVolumes
		 * @return {DescribeVolumesResult} Success
		 */
		DescribeVolumes(callback: (data : DescribeVolumesResult) => any, requestBody: DescribeVolumesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DescribeVolumes', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Detaches a specified Elastic Load Balancing instance from its layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer
		 * @return {void} Success
		 */
		DetachElasticLoadBalancer(callback: (data : void) => any, requestBody: DetachElasticLoadBalancerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp
		 * @return {void} Success
		 */
		DisassociateElasticIp(callback: (data : void) => any, requestBody: DisassociateElasticIpRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Gets a generated host name for the specified layer, based on the current host name theme.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion
		 * @return {GetHostnameSuggestionResult} Success
		 */
		GetHostnameSuggestion(callback: (data : GetHostnameSuggestionResult) => any, requestBody: GetHostnameSuggestionRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <note> <p>This action can be used only with Windows stacks.</p> </note> <p>Grants RDP access to a Windows instance for a specified time period.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.GrantAccess
		 * @return {GrantAccessResult} Success
		 */
		GrantAccess(callback: (data : GrantAccessResult) => any, requestBody: GrantAccessRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.GrantAccess', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns a list of tags that are applied to the specified stack or layer.
		 * Post /#X-Amz-Target=OpsWorks_20130218.ListTags
		 * @return {ListTagsResult} Success
		 */
		ListTags(callback: (data : ListTagsResult) => any, requestBody: ListTagsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.ListTags', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Reboots a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.RebootInstance
		 * @return {void} Success
		 */
		RebootInstance(callback: (data : void) => any, requestBody: RebootInstanceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.RebootInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html"> Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster
		 * @return {RegisterEcsClusterResult} Success
		 */
		RegisterEcsCluster(callback: (data : RegisterEcsClusterResult) => any, requestBody: RegisterEcsClusterRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp
		 * @return {RegisterElasticIpResult} Success
		 */
		RegisterElasticIp(callback: (data : RegisterElasticIpResult) => any, requestBody: RegisterElasticIpRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p> <note> <p>We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. <code>RegisterInstance</code> handles only the second step. You should instead use the AWS CLI <code>register</code> command, which performs the entire registration operation. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html"> Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p> </note> <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html"> Preparing the Instance</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.RegisterInstance
		 * @return {RegisterInstanceResult} Success
		 */
		RegisterInstance(callback: (data : RegisterInstanceResult) => any, requestBody: RegisterInstanceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.RegisterInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Registers an Amazon RDS instance with a stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance
		 * @return {void} Success
		 */
		RegisterRdsDbInstance(callback: (data : void) => any, requestBody: RegisterRdsDbInstanceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.RegisterVolume
		 * @return {RegisterVolumeResult} Success
		 */
		RegisterVolume(callback: (data : RegisterVolumeResult) => any, requestBody: RegisterVolumeRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.RegisterVolume', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Specify the load-based auto scaling configuration for a specified layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <note> <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling
		 * @return {void} Success
		 */
		SetLoadBasedAutoScaling(callback: (data : void) => any, requestBody: SetLoadBasedAutoScalingRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and Permissions</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.SetPermission
		 * @return {void} Success
		 */
		SetPermission(callback: (data : void) => any, requestBody: SetPermissionRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.SetPermission', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Specify the time-based auto scaling configuration for a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling
		 * @return {void} Success
		 */
		SetTimeBasedAutoScaling(callback: (data : void) => any, requestBody: SetTimeBasedAutoScalingRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.StartInstance
		 * @return {void} Success
		 */
		StartInstance(callback: (data : void) => any, requestBody: StartInstanceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.StartInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Starts a stack's instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.StartStack
		 * @return {void} Success
		 */
		StartStack(callback: (data : void) => any, requestBody: StartStackRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.StartStack', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.StopInstance
		 * @return {void} Success
		 */
		StopInstance(callback: (data : void) => any, requestBody: StopInstanceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.StopInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Stops a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.StopStack
		 * @return {void} Success
		 */
		StopStack(callback: (data : void) => any, requestBody: StopStackRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.StopStack', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/tagging.html">Tags</a> in the AWS OpsWorks User Guide.
		 * Post /#X-Amz-Target=OpsWorks_20130218.TagResource
		 * @return {void} Success
		 */
		TagResource(callback: (data : void) => any, requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.TagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Unassigns a registered instance from all layers that are using the instance. The instance remains in the stack as an unassigned instance, and can be assigned to another layer as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.UnassignInstance
		 * @return {void} Success
		 */
		UnassignInstance(callback: (data : void) => any, requestBody: UnassignInstanceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.UnassignInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.UnassignVolume
		 * @return {void} Success
		 */
		UnassignVolume(callback: (data : void) => any, requestBody: UnassignVolumeRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.UnassignVolume', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes tags from a specified stack or layer.
		 * Post /#X-Amz-Target=OpsWorks_20130218.UntagResource
		 * @return {void} Success
		 */
		UntagResource(callback: (data : void) => any, requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.UntagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.UpdateApp
		 * @return {void} Success
		 */
		UpdateApp(callback: (data : void) => any, requestBody: UpdateAppRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.UpdateApp', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates a registered Elastic IP address's name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp
		 * @return {void} Success
		 */
		UpdateElasticIp(callback: (data : void) => any, requestBody: UpdateElasticIpRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates a specified instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.UpdateInstance
		 * @return {void} Success
		 */
		UpdateInstance(callback: (data : void) => any, requestBody: UpdateInstanceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.UpdateInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates a specified layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.UpdateLayer
		 * @return {void} Success
		 */
		UpdateLayer(callback: (data : void) => any, requestBody: UpdateLayerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.UpdateLayer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates a user's SSH public key.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile
		 * @return {void} Success
		 */
		UpdateMyUserProfile(callback: (data : void) => any, requestBody: UpdateMyUserProfileRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance
		 * @return {void} Success
		 */
		UpdateRdsDbInstance(callback: (data : void) => any, requestBody: UpdateRdsDbInstanceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.UpdateStack
		 * @return {void} Success
		 */
		UpdateStack(callback: (data : void) => any, requestBody: UpdateStackRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.UpdateStack', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates a specified user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile
		 * @return {void} Success
		 */
		UpdateUserProfile(callback: (data : void) => any, requestBody: UpdateUserProfileRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates an Amazon EBS volume's name or mount point. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post /#X-Amz-Target=OpsWorks_20130218.UpdateVolume
		 * @return {void} Success
		 */
		UpdateVolume(callback: (data : void) => any, requestBody: UpdateVolumeRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=OpsWorks_20130218.UpdateVolume', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

