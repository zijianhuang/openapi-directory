import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface CreateAppResponse {

		/**Information about the application. */
		appSummary?: AppSummary;
		serverGroups?: Array<ServerGroup>;
		tags?: Array<Tag>;
	}

	export interface CreateAppRequest {
		name?: string;
		description?: string;
		roleName?: string;
		clientToken?: string;
		serverGroups?: Array<ServerGroup>;
		tags?: Array<Tag>;
	}

	export interface CreateReplicationJobResponse {
		replicationJobId?: string;
	}

	export interface CreateReplicationJobRequest {
		serverId: string;
		seedReplicationTime: Date;
		frequency?: number;
		runOnce?: boolean;
		licenseType?: CreateReplicationJobRequestLicenseType;
		roleName?: string;
		description?: string;
		numberOfRecentAmisToKeep?: number;
		encrypted?: boolean;
		kmsKeyId?: string;
	}

	export enum CreateReplicationJobRequestLicenseType { AWS = 0, BYOL = 1 }

	export interface DeleteAppRequest {
		appId?: string;
		forceStopAppReplication?: boolean;
		forceTerminateApp?: boolean;
	}

	export interface DeleteAppLaunchConfigurationRequest {
		appId?: string;
	}

	export interface DeleteAppReplicationConfigurationRequest {
		appId?: string;
	}

	export interface DeleteReplicationJobRequest {
		replicationJobId: string;
	}

	export interface DisassociateConnectorRequest {
		connectorId: string;
	}

	export interface GenerateChangeSetResponse {

		/**Location of the Amazon S3 object in the customer's account. */
		s3Location?: S3Location;
	}

	export interface GenerateChangeSetRequest {
		appId?: string;
		changesetFormat?: GenerateChangeSetRequestChangesetFormat;
	}

	export enum GenerateChangeSetRequestChangesetFormat { JSON = 0, YAML = 1 }

	export interface GenerateTemplateResponse {

		/**Location of the Amazon S3 object in the customer's account. */
		s3Location?: S3Location;
	}

	export interface GenerateTemplateRequest {
		appId?: string;
		templateFormat?: GenerateTemplateRequestTemplateFormat;
	}

	export enum GenerateTemplateRequestTemplateFormat { JSON = 0, YAML = 1 }

	export interface GetAppResponse {

		/**Information about the application. */
		appSummary?: AppSummary;
		serverGroups?: Array<ServerGroup>;
		tags?: Array<Tag>;
	}

	export interface GetAppRequest {
		appId?: string;
	}

	export interface GetAppLaunchConfigurationResponse {
		appId?: string;
		roleName?: string;
		serverGroupLaunchConfigurations?: Array<ServerGroupLaunchConfiguration>;
	}

	export interface GetAppLaunchConfigurationRequest {
		appId?: string;
	}

	export interface GetAppReplicationConfigurationResponse {
		serverGroupReplicationConfigurations?: Array<ServerGroupReplicationConfiguration>;
	}

	export interface GetAppReplicationConfigurationRequest {
		appId?: string;
	}

	export interface GetConnectorsResponse {
		connectorList?: Array<Connector>;
		nextToken?: string;
	}

	export interface GetConnectorsRequest {
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetReplicationJobsResponse {
		replicationJobList?: Array<ReplicationJob>;
		nextToken?: string;
	}

	export interface GetReplicationJobsRequest {
		replicationJobId?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetReplicationRunsResponse {

		/**Represents a replication job. */
		replicationJob?: ReplicationJob;
		replicationRunList?: Array<ReplicationRun>;
		nextToken?: string;
	}

	export interface GetReplicationRunsRequest {
		replicationJobId: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetServersResponse {
		lastModifiedOn?: Date;
		serverCatalogStatus?: GetServersResponseServerCatalogStatus;
		serverList?: Array<Server>;
		nextToken?: string;
	}

	export enum GetServersResponseServerCatalogStatus { NOT_IMPORTED = 0, IMPORTING = 1, AVAILABLE = 2, DELETED = 3, EXPIRED = 4 }

	export interface GetServersRequest {
		nextToken?: string;
		maxResults?: number;
		vmServerAddressList?: Array<VmServerAddress>;
	}

	export interface LaunchAppRequest {
		appId?: string;
	}

	export interface ListAppsResponse {
		apps?: Array<AppSummary>;
		nextToken?: string;
	}

	export interface ListAppsRequest {
		appIds?: Array<AppId>;
		nextToken?: string;
		maxResults?: number;
	}

	export interface PutAppLaunchConfigurationRequest {
		appId?: string;
		roleName?: string;
		serverGroupLaunchConfigurations?: Array<ServerGroupLaunchConfiguration>;
	}

	export interface PutAppReplicationConfigurationRequest {
		appId?: string;
		serverGroupReplicationConfigurations?: Array<ServerGroupReplicationConfiguration>;
	}

	export interface StartAppReplicationRequest {
		appId?: string;
	}

	export interface StartOnDemandReplicationRunResponse {
		replicationRunId?: string;
	}

	export interface StartOnDemandReplicationRunRequest {
		replicationJobId: string;
		description?: string;
	}

	export interface StopAppReplicationRequest {
		appId?: string;
	}

	export interface TerminateAppRequest {
		appId?: string;
	}

	export interface UpdateAppResponse {

		/**Information about the application. */
		appSummary?: AppSummary;
		serverGroups?: Array<ServerGroup>;
		tags?: Array<Tag>;
	}

	export interface UpdateAppRequest {
		appId?: string;
		name?: string;
		description?: string;
		roleName?: string;
		serverGroups?: Array<ServerGroup>;
		tags?: Array<Tag>;
	}

	export interface UpdateReplicationJobRequest {
		replicationJobId: string;
		frequency?: number;
		nextReplicationRunStartTime?: Date;
		licenseType?: UpdateReplicationJobRequestLicenseType;
		roleName?: string;
		description?: string;
		numberOfRecentAmisToKeep?: number;
		encrypted?: boolean;
		kmsKeyId?: string;
	}

	export enum UpdateReplicationJobRequestLicenseType { AWS = 0, BYOL = 1 }

	export enum AppLaunchStatus { READY_FOR_CONFIGURATION = 0, CONFIGURATION_IN_PROGRESS = 1, CONFIGURATION_INVALID = 2, READY_FOR_LAUNCH = 3, VALIDATION_IN_PROGRESS = 4, LAUNCH_PENDING = 5, LAUNCH_IN_PROGRESS = 6, LAUNCHED = 7, DELTA_LAUNCH_IN_PROGRESS = 8, DELTA_LAUNCH_FAILED = 9, LAUNCH_FAILED = 10, TERMINATE_IN_PROGRESS = 11, TERMINATE_FAILED = 12, TERMINATED = 13 }

	export enum AppReplicationStatus { READY_FOR_CONFIGURATION = 0, CONFIGURATION_IN_PROGRESS = 1, CONFIGURATION_INVALID = 2, READY_FOR_REPLICATION = 3, VALIDATION_IN_PROGRESS = 4, REPLICATION_PENDING = 5, REPLICATION_IN_PROGRESS = 6, REPLICATED = 7, DELTA_REPLICATION_IN_PROGRESS = 8, DELTA_REPLICATED = 9, DELTA_REPLICATION_FAILED = 10, REPLICATION_FAILED = 11, REPLICATION_STOPPING = 12, REPLICATION_STOP_FAILED = 13, REPLICATION_STOPPED = 14 }

	export enum AppStatus { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, DELETED = 4, DELETE_FAILED = 5 }


	/**Details about the latest launch of an application. */
	export interface LaunchDetails {
		latestLaunchTime?: Date;
		stackName?: string;
		stackId?: string;
	}


	/**Information about the application. */
	export interface AppSummary {
		appId?: string;
		name?: string;
		description?: string;
		status?: AppSummaryStatus;
		statusMessage?: string;
		replicationStatus?: AppSummaryReplicationStatus;
		replicationStatusMessage?: string;
		latestReplicationTime?: Date;
		launchStatus?: AppSummaryLaunchStatus;
		launchStatusMessage?: string;

		/**Details about the latest launch of an application. */
		launchDetails?: LaunchDetails;
		creationTime?: Date;
		lastModified?: Date;
		roleName?: string;
		totalServerGroups?: number;
		totalServers?: number;
	}

	export enum AppSummaryStatus { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, DELETED = 4, DELETE_FAILED = 5 }

	export enum AppSummaryReplicationStatus { READY_FOR_CONFIGURATION = 0, CONFIGURATION_IN_PROGRESS = 1, CONFIGURATION_INVALID = 2, READY_FOR_REPLICATION = 3, VALIDATION_IN_PROGRESS = 4, REPLICATION_PENDING = 5, REPLICATION_IN_PROGRESS = 6, REPLICATED = 7, DELTA_REPLICATION_IN_PROGRESS = 8, DELTA_REPLICATED = 9, DELTA_REPLICATION_FAILED = 10, REPLICATION_FAILED = 11, REPLICATION_STOPPING = 12, REPLICATION_STOP_FAILED = 13, REPLICATION_STOPPED = 14 }

	export enum AppSummaryLaunchStatus { READY_FOR_CONFIGURATION = 0, CONFIGURATION_IN_PROGRESS = 1, CONFIGURATION_INVALID = 2, READY_FOR_LAUNCH = 3, VALIDATION_IN_PROGRESS = 4, LAUNCH_PENDING = 5, LAUNCH_IN_PROGRESS = 6, LAUNCHED = 7, DELTA_LAUNCH_IN_PROGRESS = 8, DELTA_LAUNCH_FAILED = 9, LAUNCH_FAILED = 10, TERMINATE_IN_PROGRESS = 11, TERMINATE_FAILED = 12, TERMINATED = 13 }

	export enum ConnectorStatus { HEALTHY = 0, UNHEALTHY = 1 }

	export enum VmManagerType { VSPHERE = 0, SCVMM = 1, HYPERV-MANAGER = 2 }


	/**Represents a connector. */
	export interface Connector {
		connectorId?: string;
		version?: string;
		status?: ConnectorStatus;
		capabilityList?: Array<ConnectorCapability>;
		vmManagerName?: string;
		vmManagerType?: ConnectorVmManagerType;
		vmManagerId?: string;
		ipAddress?: string;
		macAddress?: string;
		associatedOn?: Date;
	}

	export enum ConnectorStatus { HEALTHY = 0, UNHEALTHY = 1 }

	export enum ConnectorVmManagerType { VSPHERE = 0, SCVMM = 1, HYPERV-MANAGER = 2 }

	export enum ConnectorCapability { VSPHERE = 0, SCVMM = 1, HYPERV-MANAGER = 2, SNAPSHOT_BATCHING = 3 }

	export enum LicenseType { AWS = 0, BYOL = 1 }

	export enum OutputFormat { JSON = 0, YAML = 1 }


	/**Location of the Amazon S3 object in the customer's account. */
	export interface S3Location {
		bucket?: string;
		key?: string;
	}


	/**Represents a replication job. */
	export interface ReplicationJob {
		replicationJobId?: string;
		serverId?: string;
		serverType?: ReplicationJobServerType;

		/**Represents a VM server. */
		vmServer?: VmServer;
		seedReplicationTime?: Date;
		frequency?: number;
		runOnce?: boolean;
		nextReplicationRunStartTime?: Date;
		licenseType?: ReplicationJobLicenseType;
		roleName?: string;
		latestAmiId?: string;
		state?: ReplicationJobState;
		statusMessage?: string;
		description?: string;
		numberOfRecentAmisToKeep?: number;
		encrypted?: boolean;
		kmsKeyId?: string;
		replicationRunList?: Array<ReplicationRun>;
	}

	export enum ReplicationJobServerType { VIRTUAL_MACHINE = 0 }

	export enum ReplicationJobLicenseType { AWS = 0, BYOL = 1 }

	export enum ReplicationJobState { PENDING = 0, ACTIVE = 1, FAILED = 2, DELETING = 3, DELETED = 4, COMPLETED = 5, PAUSED_ON_FAILURE = 6, FAILING = 7 }

	export enum ServerCatalogStatus { NOT_IMPORTED = 0, IMPORTING = 1, AVAILABLE = 2, DELETED = 3, EXPIRED = 4 }

	export enum ServerType { VIRTUAL_MACHINE = 0 }


	/**Represents a VM server. */
	export interface VmServer {

		/**Represents a VM server location. */
		vmServerAddress?: VmServerAddress;
		vmName?: string;
		vmManagerName?: string;
		vmManagerType?: VmServerVmManagerType;
		vmPath?: string;
	}

	export enum VmServerVmManagerType { VSPHERE = 0, SCVMM = 1, HYPERV-MANAGER = 2 }

	export enum ReplicationJobState { PENDING = 0, ACTIVE = 1, FAILED = 2, DELETING = 3, DELETED = 4, COMPLETED = 5, PAUSED_ON_FAILURE = 6, FAILING = 7 }

	export enum ReplicationRunState { PENDING = 0, MISSED = 1, ACTIVE = 2, FAILED = 3, COMPLETED = 4, DELETING = 5, DELETED = 6 }

	export enum ReplicationRunType { ON_DEMAND = 0, AUTOMATIC = 1 }


	/**Details of the current stage of a replication run. */
	export interface ReplicationRunStageDetails {
		stage?: string;
		stageProgress?: string;
	}


	/**Represents a replication run. */
	export interface ReplicationRun {
		replicationRunId?: string;
		state?: ReplicationRunState;
		type?: ReplicationRunType;

		/**Details of the current stage of a replication run. */
		stageDetails?: ReplicationRunStageDetails;
		statusMessage?: string;
		amiId?: string;
		scheduledStartTime?: Date;
		completedTime?: Date;
		description?: string;
		encrypted?: boolean;
		kmsKeyId?: string;
	}

	export enum ReplicationRunState { PENDING = 0, MISSED = 1, ACTIVE = 2, FAILED = 3, COMPLETED = 4, DELETING = 5, DELETED = 6 }

	export enum ReplicationRunType { ON_DEMAND = 0, AUTOMATIC = 1 }


	/**Represents a server. */
	export interface Server {
		serverId?: string;
		serverType?: ServerServerType;

		/**Represents a VM server. */
		vmServer?: VmServer;
		replicationJobId?: string;
		replicationJobTerminated?: boolean;
	}

	export enum ServerServerType { VIRTUAL_MACHINE = 0 }


	/**A logical grouping of servers. */
	export interface ServerGroup {
		serverGroupId?: string;
		name?: string;
		serverList?: Array<Server>;
	}


	/**Launch configuration for a server group. */
	export interface ServerGroupLaunchConfiguration {
		serverGroupId?: string;
		launchOrder?: number;
		serverLaunchConfigurations?: Array<ServerLaunchConfiguration>;
	}


	/**Replication configuration for a server group. */
	export interface ServerGroupReplicationConfiguration {
		serverGroupId?: string;
		serverReplicationConfigurations?: Array<ServerReplicationConfiguration>;
	}


	/**A script that runs on first launch of an Amazon EC2 instance. Used for configuring the server during launch. */
	export interface UserData {

		/**Location of the Amazon S3 object in the customer's account. */
		s3Location?: S3Location;
	}


	/**Launch configuration for a server. */
	export interface ServerLaunchConfiguration {

		/**Represents a server. */
		server?: Server;
		logicalId?: string;
		vpc?: string;
		subnet?: string;
		securityGroup?: string;
		ec2KeyName?: string;

		/**A script that runs on first launch of an Amazon EC2 instance. Used for configuring the server during launch. */
		userData?: UserData;
		instanceType?: string;
		associatePublicIpAddress?: boolean;
	}


	/**Replication parameters for replicating a server. */
	export interface ServerReplicationParameters {
		seedTime?: Date;
		frequency?: number;
		runOnce?: boolean;
		licenseType?: ServerReplicationParametersLicenseType;
		numberOfRecentAmisToKeep?: number;
		encrypted?: boolean;
		kmsKeyId?: string;
	}

	export enum ServerReplicationParametersLicenseType { AWS = 0, BYOL = 1 }


	/**Replication configuration of a server. */
	export interface ServerReplicationConfiguration {

		/**Represents a server. */
		server?: Server;

		/**Replication parameters for replicating a server. */
		serverReplicationParameters?: ServerReplicationParameters;
	}


	/**A label that can be assigned to an application. */
	export interface Tag {
		key?: string;
		value?: string;
	}


	/**Represents a VM server location. */
	export interface VmServerAddress {
		vmManagerId?: string;
		vmId?: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp
		 * @return {CreateAppResponse} Success
		 */
		CreateApp(requestBody: CreateAppRequest, headersHandler?: () => HttpHeaders): Observable<CreateAppResponse> {
			return this.http.post<CreateAppResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a replication job. The replication job schedules periodic replication runs to replicate your server to AWS. Each replication run creates an Amazon Machine Image (AMI).
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob
		 * @return {CreateReplicationJobResponse} Success
		 */
		CreateReplicationJob(requestBody: CreateReplicationJobRequest, headersHandler?: () => HttpHeaders): Observable<CreateReplicationJobResponse> {
			return this.http.post<CreateReplicationJobResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes an existing application. Optionally deletes the launched stack associated with the application and all AWS SMS replication jobs for servers in the application.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp
		 * @return {DeleteAppResponse} Success
		 */
		DeleteApp(requestBody: DeleteAppRequest, headersHandler?: () => HttpHeaders): Observable<DeleteAppResponse> {
			return this.http.post<DeleteAppResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes existing launch configuration for an application.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration
		 * @return {DeleteAppLaunchConfigurationResponse} Success
		 */
		DeleteAppLaunchConfiguration(requestBody: DeleteAppLaunchConfigurationRequest, headersHandler?: () => HttpHeaders): Observable<DeleteAppLaunchConfigurationResponse> {
			return this.http.post<DeleteAppLaunchConfigurationResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes existing replication configuration for an application.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration
		 * @return {DeleteAppReplicationConfigurationResponse} Success
		 */
		DeleteAppReplicationConfiguration(requestBody: DeleteAppReplicationConfigurationRequest, headersHandler?: () => HttpHeaders): Observable<DeleteAppReplicationConfigurationResponse> {
			return this.http.post<DeleteAppReplicationConfigurationResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. AWS deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created by the replication runs are not deleted.</p>
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob
		 * @return {DeleteReplicationJobResponse} Success
		 */
		DeleteReplicationJob(requestBody: DeleteReplicationJobRequest, headersHandler?: () => HttpHeaders): Observable<DeleteReplicationJobResponse> {
			return this.http.post<DeleteReplicationJobResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes all servers from your server catalog.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog
		 * @return {DeleteServerCatalogResponse} Success
		 */
		DeleteServerCatalog(requestBody: DeleteServerCatalogRequest, headersHandler?: () => HttpHeaders): Observable<DeleteServerCatalogResponse> {
			return this.http.post<DeleteServerCatalogResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Disassociates the specified connector from AWS SMS.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector
		 * @return {DisassociateConnectorResponse} Success
		 */
		DisassociateConnector(requestBody: DisassociateConnectorRequest, headersHandler?: () => HttpHeaders): Observable<DisassociateConnectorResponse> {
			return this.http.post<DisassociateConnectorResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet
		 * @return {GenerateChangeSetResponse} Success
		 */
		GenerateChangeSet(requestBody: GenerateChangeSetRequest, headersHandler?: () => HttpHeaders): Observable<GenerateChangeSetResponse> {
			return this.http.post<GenerateChangeSetResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Generates an Amazon CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate
		 * @return {GenerateTemplateResponse} Success
		 */
		GenerateTemplate(requestBody: GenerateTemplateRequest, headersHandler?: () => HttpHeaders): Observable<GenerateTemplateResponse> {
			return this.http.post<GenerateTemplateResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve information about an application.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp
		 * @return {GetAppResponse} Success
		 */
		GetApp(requestBody: GetAppRequest, headersHandler?: () => HttpHeaders): Observable<GetAppResponse> {
			return this.http.post<GetAppResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the application launch configuration associated with an application.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration
		 * @return {GetAppLaunchConfigurationResponse} Success
		 */
		GetAppLaunchConfiguration(requestBody: GetAppLaunchConfigurationRequest, headersHandler?: () => HttpHeaders): Observable<GetAppLaunchConfigurationResponse> {
			return this.http.post<GetAppLaunchConfigurationResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves an application replication configuration associatd with an application.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration
		 * @return {GetAppReplicationConfigurationResponse} Success
		 */
		GetAppReplicationConfiguration(requestBody: GetAppReplicationConfigurationRequest, headersHandler?: () => HttpHeaders): Observable<GetAppReplicationConfigurationResponse> {
			return this.http.post<GetAppReplicationConfigurationResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Describes the connectors registered with the AWS SMS.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetConnectorsResponse} Success
		 */
		GetConnectors(maxResults: string, nextToken: string, requestBody: GetConnectorsRequest, headersHandler?: () => HttpHeaders): Observable<GetConnectorsResponse> {
			return this.http.post<GetConnectorsResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Describes the specified replication job or all of your replication jobs.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetReplicationJobsResponse} Success
		 */
		GetReplicationJobs(maxResults: string, nextToken: string, requestBody: GetReplicationJobsRequest, headersHandler?: () => HttpHeaders): Observable<GetReplicationJobsResponse> {
			return this.http.post<GetReplicationJobsResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Describes the replication runs for the specified replication job.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetReplicationRunsResponse} Success
		 */
		GetReplicationRuns(maxResults: string, nextToken: string, requestBody: GetReplicationRunsRequest, headersHandler?: () => HttpHeaders): Observable<GetReplicationRunsResponse> {
			return this.http.post<GetReplicationRunsResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetServersResponse} Success
		 */
		GetServers(maxResults: string, nextToken: string, requestBody: GetServersRequest, headersHandler?: () => HttpHeaders): Observable<GetServersResponse> {
			return this.http.post<GetServersResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers that you want to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog
		 * @return {ImportServerCatalogResponse} Success
		 */
		ImportServerCatalog(requestBody: ImportServerCatalogRequest, headersHandler?: () => HttpHeaders): Observable<ImportServerCatalogResponse> {
			return this.http.post<ImportServerCatalogResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Launches an application stack.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp
		 * @return {LaunchAppResponse} Success
		 */
		LaunchApp(requestBody: LaunchAppRequest, headersHandler?: () => HttpHeaders): Observable<LaunchAppResponse> {
			return this.http.post<LaunchAppResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of summaries for all applications.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps
		 * @return {ListAppsResponse} Success
		 */
		ListApps(requestBody: ListAppsRequest, headersHandler?: () => HttpHeaders): Observable<ListAppsResponse> {
			return this.http.post<ListAppsResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a launch configuration for an application.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration
		 * @return {PutAppLaunchConfigurationResponse} Success
		 */
		PutAppLaunchConfiguration(requestBody: PutAppLaunchConfigurationRequest, headersHandler?: () => HttpHeaders): Observable<PutAppLaunchConfigurationResponse> {
			return this.http.post<PutAppLaunchConfigurationResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates or updates a replication configuration for an application.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration
		 * @return {PutAppReplicationConfigurationResponse} Success
		 */
		PutAppReplicationConfiguration(requestBody: PutAppReplicationConfigurationRequest, headersHandler?: () => HttpHeaders): Observable<PutAppReplicationConfigurationResponse> {
			return this.http.post<PutAppReplicationConfigurationResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Starts replicating an application.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication
		 * @return {StartAppReplicationResponse} Success
		 */
		StartAppReplication(requestBody: StartAppReplicationRequest, headersHandler?: () => HttpHeaders): Observable<StartAppReplicationResponse> {
			return this.http.post<StartAppReplicationResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs you can request in a 24-hour period.</p>
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun
		 * @return {StartOnDemandReplicationRunResponse} Success
		 */
		StartOnDemandReplicationRun(requestBody: StartOnDemandReplicationRunRequest, headersHandler?: () => HttpHeaders): Observable<StartOnDemandReplicationRunResponse> {
			return this.http.post<StartOnDemandReplicationRunResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Stops replicating an application.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication
		 * @return {StopAppReplicationResponse} Success
		 */
		StopAppReplication(requestBody: StopAppReplicationRequest, headersHandler?: () => HttpHeaders): Observable<StopAppReplicationResponse> {
			return this.http.post<StopAppReplicationResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Terminates the stack for an application.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp
		 * @return {TerminateAppResponse} Success
		 */
		TerminateApp(requestBody: TerminateAppRequest, headersHandler?: () => HttpHeaders): Observable<TerminateAppResponse> {
			return this.http.post<TerminateAppResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates an application.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp
		 * @return {UpdateAppResponse} Success
		 */
		UpdateApp(requestBody: UpdateAppRequest, headersHandler?: () => HttpHeaders): Observable<UpdateAppResponse> {
			return this.http.post<UpdateAppResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates the specified settings for the specified replication job.
		 * Post /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob
		 * @return {UpdateReplicationJobResponse} Success
		 */
		UpdateReplicationJob(requestBody: UpdateReplicationJobRequest, headersHandler?: () => HttpHeaders): Observable<UpdateReplicationJobResponse> {
			return this.http.post<UpdateReplicationJobResponse>(this.baseUri + '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

