export namespace My_Demo_Client {
	export interface AssociateNodeResponse {
		NodeAssociationStatusToken?: string;
	}

	export interface AssociateNodeRequest {
		ServerName: string;

		/**
		 * The node name that is used by <code>chef-client</code> or <code>puppet-agent</code>for a new node. We recommend to use a unique FQDN as hostname. For more information, see the <a href="https://docs.aws.amazon.com/https:/docs.chef.io/nodes.html#about-node-names">Chef</a> or <a href="https://docs.aws.amazon.com/https:/docs.puppet.com/puppet/4.10/man/agent.html">Puppet</a> documentation.
		 * Max length: 10000
		 * Pattern: ^[\-\p{Alnum}_:.]+$
		 */
		NodeName: string;
		EngineAttributes: Array<EngineAttribute>;
	}

	export interface CreateBackupResponse {

		/**Describes a single backup. */
		Backup?: Backup;
	}

	export interface CreateBackupRequest {
		ServerName: string;
		Description?: string;
		Tags?: Array<Tag>;
	}

	export interface CreateServerResponse {

		/**Describes a configuration management server. */
		Server?: Server;
	}

	export interface CreateServerRequest {
		AssociatePublicIpAddress?: boolean;
		CustomDomain?: string;
		CustomCertificate?: string;
		CustomPrivateKey?: string;
		DisableAutomatedBackup?: boolean;
		Engine?: string;
		EngineModel?: string;
		EngineVersion?: string;
		EngineAttributes?: Array<EngineAttribute>;
		BackupRetentionCount?: number;
		ServerName: string;
		InstanceProfileArn: string;
		InstanceType: string;
		KeyPair?: string;

		/**
		 * <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
		 * Max length: 10000
		 * Pattern: ^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$
		 */
		PreferredMaintenanceWindow?: string;

		/**
		 * <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
		 * Max length: 10000
		 * Pattern: ^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$
		 */
		PreferredBackupWindow?: string;
		SecurityGroupIds?: Array<String>;
		ServiceRoleArn: string;
		SubnetIds?: Array<String>;
		Tags?: Array<Tag>;
		BackupId?: string;
	}

	export interface DeleteBackupRequest {
		BackupId: string;
	}

	export interface DeleteServerRequest {
		ServerName: string;
	}

	export interface DescribeAccountAttributesResponse {

		/**A list of individual account attributes. */
		Attributes?: Array<AccountAttribute>;
	}

	export interface DescribeBackupsResponse {
		Backups?: Array<Backup>;
		NextToken?: string;
	}

	export interface DescribeBackupsRequest {
		BackupId?: string;
		ServerName?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DescribeEventsResponse {
		ServerEvents?: Array<ServerEvent>;
		NextToken?: string;
	}

	export interface DescribeEventsRequest {
		ServerName: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DescribeNodeAssociationStatusResponse {

		/**<p>The status of the association or disassociation request. </p> <p class="title"> <b>Possible values:</b> </p> <ul> <li> <p> <code>SUCCESS</code>: The association or disassociation succeeded. </p> </li> <li> <p> <code>FAILED</code>: The association or disassociation failed. </p> </li> <li> <p> <code>IN_PROGRESS</code>: The association or disassociation is still in progress. </p> </li> </ul> */
		NodeAssociationStatus?: DescribeNodeAssociationStatusResponseNodeAssociationStatus;
		EngineAttributes?: Array<EngineAttribute>;
	}

	export enum DescribeNodeAssociationStatusResponseNodeAssociationStatus { SUCCESS = 0, FAILED = 1, IN_PROGRESS = 2 }

	export interface DescribeNodeAssociationStatusRequest {
		NodeAssociationStatusToken: string;
		ServerName: string;
	}

	export interface DescribeServersResponse {
		Servers?: Array<Server>;
		NextToken?: string;
	}

	export interface DescribeServersRequest {
		ServerName?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DisassociateNodeResponse {
		NodeAssociationStatusToken?: string;
	}

	export interface DisassociateNodeRequest {
		ServerName: string;

		/**
		 * The node name that is used by <code>chef-client</code> or <code>puppet-agent</code>for a new node. We recommend to use a unique FQDN as hostname. For more information, see the <a href="https://docs.aws.amazon.com/https:/docs.chef.io/nodes.html#about-node-names">Chef</a> or <a href="https://docs.aws.amazon.com/https:/docs.puppet.com/puppet/4.10/man/agent.html">Puppet</a> documentation.
		 * Max length: 10000
		 * Pattern: ^[\-\p{Alnum}_:.]+$
		 */
		NodeName: string;
		EngineAttributes?: Array<EngineAttribute>;
	}

	export interface ExportServerEngineAttributeResponse {

		/**A name and value pair that is specific to the engine of the server. */
		EngineAttribute?: EngineAttribute;
		ServerName?: string;
	}

	export interface ExportServerEngineAttributeRequest {
		ExportAttributeName: string;
		ServerName: string;
		InputAttributes?: Array<EngineAttribute>;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface RestoreServerRequest {
		BackupId: string;
		ServerName: string;
		InstanceType?: string;
		KeyPair?: string;
	}

	export interface StartMaintenanceResponse {

		/**Describes a configuration management server. */
		Server?: Server;
	}

	export interface StartMaintenanceRequest {
		ServerName: string;
		EngineAttributes?: Array<EngineAttribute>;
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateServerResponse {

		/**Describes a configuration management server. */
		Server?: Server;
	}

	export interface UpdateServerRequest {
		DisableAutomatedBackup?: boolean;
		BackupRetentionCount?: number;
		ServerName: string;

		/**
		 * <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
		 * Max length: 10000
		 * Pattern: ^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$
		 */
		PreferredMaintenanceWindow?: string;

		/**
		 * <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
		 * Max length: 10000
		 * Pattern: ^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$
		 */
		PreferredBackupWindow?: string;
	}

	export interface UpdateServerEngineAttributesResponse {

		/**Describes a configuration management server. */
		Server?: Server;
	}

	export interface UpdateServerEngineAttributesRequest {
		ServerName: string;
		AttributeName: string;
		AttributeValue?: string;
	}


	/**Stores account attributes.  */
	export interface AccountAttribute {
		Name?: string;
		Maximum?: number;
		Used?: number;
	}

	export enum BackupType { AUTOMATED = 0, MANUAL = 1 }

	export enum BackupStatus { IN_PROGRESS = 0, OK = 1, FAILED = 2, DELETING = 3 }


	/**Describes a single backup.  */
	export interface Backup {
		BackupArn?: string;
		BackupId?: string;
		BackupType?: BackupBackupType;
		CreatedAt?: Date;
		Description?: string;
		Engine?: string;
		EngineModel?: string;
		EngineVersion?: string;
		InstanceProfileArn?: string;
		InstanceType?: string;
		KeyPair?: string;

		/**
		 * <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
		 * Max length: 10000
		 * Pattern: ^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$
		 */
		PreferredBackupWindow?: string;

		/**
		 * <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
		 * Max length: 10000
		 * Pattern: ^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$
		 */
		PreferredMaintenanceWindow?: string;
		S3DataSize?: number;
		S3DataUrl?: string;
		S3LogUrl?: string;
		SecurityGroupIds?: Array<String>;
		ServerName?: string;
		ServiceRoleArn?: string;
		Status?: BackupStatus;
		StatusDescription?: string;
		SubnetIds?: Array<String>;
		ToolsVersion?: string;
		UserArn?: string;
	}

	export enum BackupBackupType { AUTOMATED = 0, MANUAL = 1 }

	export enum BackupStatus { IN_PROGRESS = 0, OK = 1, FAILED = 2, DELETING = 3 }


	/**Describes a configuration management server.  */
	export interface Server {
		AssociatePublicIpAddress?: boolean;
		BackupRetentionCount?: number;
		ServerName?: string;
		CreatedAt?: Date;
		CloudFormationStackArn?: string;
		CustomDomain?: string;
		DisableAutomatedBackup?: boolean;
		Endpoint?: string;
		Engine?: string;
		EngineModel?: string;
		EngineAttributes?: Array<EngineAttribute>;
		EngineVersion?: string;
		InstanceProfileArn?: string;
		InstanceType?: string;
		KeyPair?: string;
		MaintenanceStatus?: ServerMaintenanceStatus;

		/**
		 * <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
		 * Max length: 10000
		 * Pattern: ^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$
		 */
		PreferredMaintenanceWindow?: string;

		/**
		 * <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
		 * Max length: 10000
		 * Pattern: ^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$
		 */
		PreferredBackupWindow?: string;
		SecurityGroupIds?: Array<String>;
		ServiceRoleArn?: string;
		Status?: ServerStatus;
		StatusReason?: string;
		SubnetIds?: Array<String>;
		ServerArn?: string;
	}

	export enum ServerMaintenanceStatus { SUCCESS = 0, FAILED = 1 }

	export enum ServerStatus { BACKING_UP = 0, CONNECTION_LOST = 1, CREATING = 2, DELETING = 3, MODIFYING = 4, FAILED = 5, HEALTHY = 6, RUNNING = 7, RESTORING = 8, SETUP = 9, UNDER_MAINTENANCE = 10, UNHEALTHY = 11, TERMINATED = 12 }


	/**<p>The status of the association or disassociation request. </p> <p class="title"> <b>Possible values:</b> </p> <ul> <li> <p> <code>SUCCESS</code>: The association or disassociation succeeded. </p> </li> <li> <p> <code>FAILED</code>: The association or disassociation failed. </p> </li> <li> <p> <code>IN_PROGRESS</code>: The association or disassociation is still in progress. </p> </li> </ul> */
	export enum NodeAssociationStatus { SUCCESS = 0, FAILED = 1, IN_PROGRESS = 2 }


	/**A name and value pair that is specific to the engine of the server.  */
	export interface EngineAttribute {
		Name?: string;
		Value?: string;
	}

	export enum MaintenanceStatus { SUCCESS = 0, FAILED = 1 }

	export enum ServerStatus { BACKING_UP = 0, CONNECTION_LOST = 1, CREATING = 2, DELETING = 3, MODIFYING = 4, FAILED = 5, HEALTHY = 6, RUNNING = 7, RESTORING = 8, SETUP = 9, UNDER_MAINTENANCE = 10, UNHEALTHY = 11, TERMINATED = 12 }


	/**An event that is related to the server, such as the start of maintenance or backup.  */
	export interface ServerEvent {
		CreatedAt?: Date;
		ServerName?: string;
		Message?: string;
		LogUrl?: string;
	}


	/**A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server. Leading and trailing white spaces are trimmed from both the key and value. A maximum of 50 user-applied tags is allowed for tag-supported AWS OpsWorks-CM resources. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p> Associates a new node with the server. For more information about how to disassociate a node, see <a>DisassociateNode</a>.</p> <p> On a Chef server: This command is an alternative to <code>knife bootstrap</code>.</p> <p> Example (Chef): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>CHEF_ORGANIZATION</i>,Value=default" "Name=<i>CHEF_NODE_PUBLIC_KEY</i>,Value=<i>public-key-pem</i>"</code> </p> <p> On a Puppet server, this command is an alternative to the <code>puppet cert sign</code> command that signs a Puppet node CSR. </p> <p> Example (Chef): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>PUPPET_NODE_CSR</i>,Value=<i>csr-pem</i>"</code> </p> <p> A node can can only be associated with servers that are in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. The AssociateNode API call can be integrated into Auto Scaling configurations, AWS Cloudformation templates, or the user data of a server's instance. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode
		 * @return {AssociateNodeResponse} Success
		 */
		AssociateNode(requestBody: AssociateNodeRequest, headersHandler?: () => {[header: string]: string}): Promise<AssociateNodeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Creates an application-level backup of a server. While the server is in the <code>BACKING_UP</code> state, the server cannot be changed, and no additional backup can be created. </p> <p> Backups can be created for servers in <code>RUNNING</code>, <code>HEALTHY</code>, and <code>UNHEALTHY</code> states. By default, you can create a maximum of 50 manual backups. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when the maximum number of manual backups is reached. An <code>InvalidStateException</code> is thrown when the server is not in any of the following states: RUNNING, HEALTHY, or UNHEALTHY. A <code>ResourceNotFoundException</code> is thrown when the server is not found. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup
		 * @return {CreateBackupResponse} Success
		 */
		CreateBackup(requestBody: CreateBackupRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateBackupResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Creates and immedately starts a new server. The server is ready to use when it is in the <code>HEALTHY</code> state. By default, you can create a maximum of 10 servers. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when you have created the maximum number of servers (10). A <code>ResourceAlreadyExistsException</code> is thrown when a server with the same name already exists in the account. A <code>ResourceNotFoundException</code> is thrown when you specify a backup ID that is not valid or is for a backup that does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p> <p> If you do not specify a security group by adding the <code>SecurityGroupIds</code> parameter, AWS OpsWorks creates a new security group. </p> <p> <i>Chef Automate:</i> The default security group opens the Chef server to the world on TCP port 443. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p> <i>Puppet Enterprise:</i> The default security group opens TCP ports 22, 443, 4433, 8140, 8142, 8143, and 8170. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p>By default, your server is accessible from any IP address. We recommend that you update your security group rules to allow access from known IP addresses and address ranges only. To edit security group rules, open Security Groups in the navigation pane of the EC2 management console. </p> <p>To specify your own domain for a server, and provide your own self-signed or CA-signed certificate and private key, specify values for <code>CustomDomain</code>, <code>CustomCertificate</code>, and <code>CustomPrivateKey</code>.</p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer
		 * @return {CreateServerResponse} Success
		 */
		CreateServer(requestBody: CreateServerRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateServerResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Deletes a backup. You can delete both manual and automated backups. This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a backup deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup
		 * @return {DeleteBackupResponse} Success
		 */
		DeleteBackup(requestBody: DeleteBackupRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteBackupResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Deletes the server and the underlying AWS CloudFormation stacks (including the server's EC2 instance). When you run this command, the server state is updated to <code>DELETING</code>. After the server is deleted, it is no longer returned by <code>DescribeServer</code> requests. If the AWS CloudFormation stack cannot be deleted, the server cannot be deleted. </p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a server deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p> <p> </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer
		 * @return {DeleteServerResponse} Success
		 */
		DeleteServer(requestBody: DeleteServerRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteServerResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Describes your OpsWorks-CM account attributes. </p> <p> This operation is synchronous. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes
		 * @return {DescribeAccountAttributesResponse} Success
		 */
		DescribeAccountAttributes(requestBody: DescribeAccountAttributesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAccountAttributesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Describes backups. The results are ordered by time, with newest backups first. If you do not specify a BackupId or ServerName, the command returns all backups. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeBackupsResponse} Success
		 */
		DescribeBackups(MaxResults: string, NextToken: string, requestBody: DescribeBackupsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeBackupsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Describes events for a specified server. Results are ordered by time, with newest events first. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeEventsResponse} Success
		 */
		DescribeEvents(MaxResults: string, NextToken: string, requestBody: DescribeEventsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeEventsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Returns the current status of an existing association or disassociation request. </p> <p> A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found, or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus
		 * @return {DescribeNodeAssociationStatusResponse} Success
		 */
		DescribeNodeAssociationStatus(requestBody: DescribeNodeAssociationStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeNodeAssociationStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Lists all configuration management servers that are identified with your account. Only the stored results from Amazon DynamoDB are returned. AWS OpsWorks CM does not query other services. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeServersResponse} Success
		 */
		DescribeServers(MaxResults: string, NextToken: string, requestBody: DescribeServersRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeServersResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Disassociates a node from an AWS OpsWorks CM server, and removes the node from the server's managed nodes. After a node is disassociated, the node key pair is no longer valid for accessing the configuration manager's API. For more information about how to associate a node, see <a>AssociateNode</a>. </p> <p>A node can can only be disassociated from a server that is in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode
		 * @return {DisassociateNodeResponse} Success
		 */
		DisassociateNode(requestBody: DisassociateNodeRequest, headersHandler?: () => {[header: string]: string}): Promise<DisassociateNodeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can use in EC2 to associate nodes with a server. </p> <p> This operation is synchronous. </p> <p> A <code>ValidationException</code> is raised when parameters of the request are not valid. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED, FAILED or DELETING. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute
		 * @return {ExportServerEngineAttributeResponse} Success
		 */
		ExportServerEngineAttribute(requestBody: ExportServerEngineAttributeRequest, headersHandler?: () => {[header: string]: string}): Promise<ExportServerEngineAttributeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a list of tags that are applied to the specified AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise servers or backups.
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(MaxResults: string, NextToken: string, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Restores a backup to a server that is in a <code>CONNECTION_LOST</code>, <code>HEALTHY</code>, <code>RUNNING</code>, <code>UNHEALTHY</code>, or <code>TERMINATED</code> state. When you run RestoreServer, the server's EC2 instance is deleted, and a new EC2 instance is configured. RestoreServer maintains the existing server endpoint, so configuration management of the server's client devices (nodes) should continue to work. </p> <p>Restoring from a backup is performed by creating a new EC2 instance. If restoration is successful, and the server is in a <code>HEALTHY</code> state, AWS OpsWorks CM switches traffic over to the new instance. After restoration is finished, the old EC2 instance is maintained in a <code>Running</code> or <code>Stopped</code> state, but is eventually terminated.</p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when the server is not in a valid state. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer
		 * @return {RestoreServerResponse} Success
		 */
		RestoreServer(requestBody: RestoreServerRequest, headersHandler?: () => {[header: string]: string}): Promise<RestoreServerResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Manually starts server maintenance. This command can be useful if an earlier maintenance attempt failed, and the underlying cause of maintenance failure has been resolved. The server is in an <code>UNDER_MAINTENANCE</code> state while maintenance is in progress. </p> <p> Maintenance can only be started on servers in <code>HEALTHY</code> and <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance
		 * @return {StartMaintenanceResponse} Success
		 */
		StartMaintenance(requestBody: StartMaintenanceRequest, headersHandler?: () => {[header: string]: string}): Promise<StartMaintenanceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Applies tags to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server, or to server backups.
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes specified tags from an AWS OpsWorks-CM server or backup.
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Updates settings for a server. </p> <p> This operation is synchronous. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer
		 * @return {UpdateServerResponse} Success
		 */
		UpdateServer(requestBody: UpdateServerRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateServerResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Updates engine-specific attributes on a specified server. The server enters the <code>MODIFYING</code> state when this operation is in progress. Only one update can occur at a time. You can use this command to reset a Chef server's public key (<code>CHEF_PIVOTAL_KEY</code>) or a Puppet server's admin password (<code>PUPPET_ADMIN_PASSWORD</code>). </p> <p> This operation is asynchronous. </p> <p> This operation can only be called for servers in <code>HEALTHY</code> or <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is raised. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post /#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes
		 * @return {UpdateServerEngineAttributesResponse} Success
		 */
		UpdateServerEngineAttributes(requestBody: UpdateServerEngineAttributesRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateServerEngineAttributesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

