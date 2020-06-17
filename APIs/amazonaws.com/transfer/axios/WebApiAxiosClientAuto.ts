import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface CreateServerResponse {
		ServerId: string;
	}

	export interface CreateServerRequest {
		Certificate?: string;

		/**The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP to your server's endpoint. */
		EndpointDetails?: EndpointDetails;
		EndpointType?: CreateServerRequestEndpointType;
		HostKey?: string;

		/**Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication. */
		IdentityProviderDetails?: IdentityProviderDetails;

		/**Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication. */
		IdentityProviderType?: CreateServerRequestIdentityProviderType;
		LoggingRole?: string;
		Protocols?: Array<Protocol>;
		Tags?: Array<Tag>;
	}

	export enum CreateServerRequestEndpointType { PUBLIC = 0, VPC = 1, VPC_ENDPOINT = 2 }

	export enum CreateServerRequestIdentityProviderType { SERVICE_MANAGED = 0, API_GATEWAY = 1 }

	export interface CreateUserResponse {
		ServerId: string;
		UserName: string;
	}

	export interface CreateUserRequest {
		HomeDirectory?: string;
		HomeDirectoryType?: CreateUserRequestHomeDirectoryType;
		HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
		Policy?: string;
		Role: string;
		ServerId: string;
		SshPublicKeyBody?: string;
		Tags?: Array<Tag>;
		UserName: string;
	}

	export enum CreateUserRequestHomeDirectoryType { PATH = 0, LOGICAL = 1 }

	export interface DeleteServerRequest {
		ServerId: string;
	}

	export interface DeleteSshPublicKeyRequest {
		ServerId: string;
		SshPublicKeyId: string;
		UserName: string;
	}

	export interface DeleteUserRequest {
		ServerId: string;
		UserName: string;
	}

	export interface DescribeServerResponse {

		/**Describes the properties of a file transfer protocol-enabled server that was specified. Information returned includes the following: the server Amazon Resource Name (ARN), the certificate ARN (if the FTPS protocol was selected), the endpoint type and details, the authentication configuration and type, the logging role, the file transfer protocol or protocols, the server ID and state, and assigned tags or metadata. */
		Server: DescribedServer;
	}

	export interface DescribeServerRequest {
		ServerId: string;
	}

	export interface DescribeUserResponse {
		ServerId: string;

		/**Returns properties of the user that you want to describe. */
		User: DescribedUser;
	}

	export interface DescribeUserRequest {
		ServerId: string;
		UserName: string;
	}


	/**Identifies the user, the file transfer protocol-enabled server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associated with. */
	export interface ImportSshPublicKeyResponse {
		ServerId: string;
		SshPublicKeyId: string;
		UserName: string;
	}

	export interface ImportSshPublicKeyRequest {
		ServerId: string;
		SshPublicKeyBody: string;
		UserName: string;
	}

	export interface ListServersResponse {
		NextToken?: string;
		Servers: Array<ListedServer>;
	}

	export interface ListServersRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Arn?: string;
		NextToken?: string;
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		Arn: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListUsersResponse {
		NextToken?: string;
		ServerId: string;
		Users: Array<ListedUser>;
	}

	export interface ListUsersRequest {
		MaxResults?: number;
		NextToken?: string;
		ServerId: string;
	}

	export interface StartServerRequest {
		ServerId: string;
	}

	export interface StopServerRequest {
		ServerId: string;
	}

	export interface TagResourceRequest {
		Arn: string;
		Tags: Array<Tag>;
	}

	export interface TestIdentityProviderResponse {
		Response?: string;
		StatusCode: number;
		Message?: string;
		Url: string;
	}

	export interface TestIdentityProviderRequest {
		ServerId: string;
		ServerProtocol?: TestIdentityProviderRequestServerProtocol;
		SourceIp?: string;
		UserName: string;
		UserPassword?: string;
	}

	export enum TestIdentityProviderRequestServerProtocol { SFTP = 0, FTP = 1, FTPS = 2 }

	export interface UntagResourceRequest {
		Arn: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateServerResponse {
		ServerId: string;
	}

	export interface UpdateServerRequest {
		Certificate?: string;

		/**The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP to your server's endpoint. */
		EndpointDetails?: EndpointDetails;
		EndpointType?: UpdateServerRequestEndpointType;
		HostKey?: string;

		/**Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication. */
		IdentityProviderDetails?: IdentityProviderDetails;
		LoggingRole?: string;
		Protocols?: Array<Protocol>;
		ServerId: string;
	}

	export enum UpdateServerRequestEndpointType { PUBLIC = 0, VPC = 1, VPC_ENDPOINT = 2 }


	/** <code>UpdateUserResponse</code> returns the user name and file transfer protocol-enabled server identifier for the request to update a user's properties. */
	export interface UpdateUserResponse {
		ServerId: string;
		UserName: string;
	}

	export interface UpdateUserRequest {
		HomeDirectory?: string;
		HomeDirectoryType?: UpdateUserRequestHomeDirectoryType;
		HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
		Policy?: string;
		Role?: string;
		ServerId: string;
		UserName: string;
	}

	export enum UpdateUserRequestHomeDirectoryType { PATH = 0, LOGICAL = 1 }


	/**The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP to your server's endpoint. */
	export interface EndpointDetails {
		AddressAllocationIds?: Array<AddressAllocationId>;
		SubnetIds?: Array<SubnetId>;
		VpcEndpointId?: string;
		VpcId?: string;
	}

	export enum EndpointType { PUBLIC = 0, VPC = 1, VPC_ENDPOINT = 2 }


	/**Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication. */
	export interface IdentityProviderDetails {
		Url?: string;
		InvocationRole?: string;
	}


	/**Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication. */
	export enum IdentityProviderType { SERVICE_MANAGED = 0, API_GATEWAY = 1 }

	export enum HomeDirectoryType { PATH = 0, LOGICAL = 1 }


	/**Describes the properties of a file transfer protocol-enabled server that was specified. Information returned includes the following: the server Amazon Resource Name (ARN), the certificate ARN (if the FTPS protocol was selected), the endpoint type and details, the authentication configuration and type, the logging role, the file transfer protocol or protocols, the server ID and state, and assigned tags or metadata. */
	export interface DescribedServer {
		Arn: string;
		Certificate?: string;

		/**The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP to your server's endpoint. */
		EndpointDetails?: EndpointDetails;
		EndpointType?: DescribedServerEndpointType;
		HostKeyFingerprint?: string;

		/**Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication. */
		IdentityProviderDetails?: IdentityProviderDetails;

		/**Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication. */
		IdentityProviderType?: DescribedServerIdentityProviderType;
		LoggingRole?: string;
		Protocols?: Array<Protocol>;
		ServerId?: string;

		/**<p>Describes the condition of a file transfer protocol-enabled server with respect to its ability to perform file operations. There are six possible states: <code>OFFLINE</code>, <code>ONLINE</code>, <code>STARTING</code>, <code>STOPPING</code>, <code>START_FAILED</code>, and <code>STOP_FAILED</code>.</p> <p> <code>OFFLINE</code> indicates that the server exists, but that it is not available for file operations. <code>ONLINE</code> indicates that the server is available to perform file operations. <code>STARTING</code> indicates that the server's was instantiated, but the server is not yet available to perform file operations. Under normal conditions, it can take a couple of minutes for the server to be completely operational. Both <code>START_FAILED</code> and <code>STOP_FAILED</code> are error conditions.</p> */
		State?: DescribedServerState;
		Tags?: Array<Tag>;
		UserCount?: number;
	}

	export enum DescribedServerEndpointType { PUBLIC = 0, VPC = 1, VPC_ENDPOINT = 2 }

	export enum DescribedServerIdentityProviderType { SERVICE_MANAGED = 0, API_GATEWAY = 1 }

	export enum DescribedServerState { OFFLINE = 0, ONLINE = 1, STARTING = 2, STOPPING = 3, START_FAILED = 4, STOP_FAILED = 5 }


	/**Returns properties of the user that you want to describe. */
	export interface DescribedUser {
		Arn: string;
		HomeDirectory?: string;
		HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
		HomeDirectoryType?: DescribedUserHomeDirectoryType;
		Policy?: string;
		Role?: string;
		SshPublicKeys?: Array<SshPublicKey>;
		Tags?: Array<Tag>;
		UserName?: string;
	}

	export enum DescribedUserHomeDirectoryType { PATH = 0, LOGICAL = 1 }


	/**<p>Describes the condition of a file transfer protocol-enabled server with respect to its ability to perform file operations. There are six possible states: <code>OFFLINE</code>, <code>ONLINE</code>, <code>STARTING</code>, <code>STOPPING</code>, <code>START_FAILED</code>, and <code>STOP_FAILED</code>.</p> <p> <code>OFFLINE</code> indicates that the server exists, but that it is not available for file operations. <code>ONLINE</code> indicates that the server is available to perform file operations. <code>STARTING</code> indicates that the server's was instantiated, but the server is not yet available to perform file operations. Under normal conditions, it can take a couple of minutes for the server to be completely operational. Both <code>START_FAILED</code> and <code>STOP_FAILED</code> are error conditions.</p> */
	export enum State { OFFLINE = 0, ONLINE = 1, STARTING = 2, STOPPING = 3, START_FAILED = 4, STOP_FAILED = 5 }


	/**Represents an object that contains entries and a targets for <code>HomeDirectoryMappings</code>. */
	export interface HomeDirectoryMapEntry {
		Entry: string;
		Target: string;
	}


	/**Returns properties of a file transfer protocol-enabled server that was specified. */
	export interface ListedServer {
		Arn: string;

		/**Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication. */
		IdentityProviderType?: ListedServerIdentityProviderType;
		EndpointType?: ListedServerEndpointType;
		LoggingRole?: string;
		ServerId?: string;

		/**<p>Describes the condition of a file transfer protocol-enabled server with respect to its ability to perform file operations. There are six possible states: <code>OFFLINE</code>, <code>ONLINE</code>, <code>STARTING</code>, <code>STOPPING</code>, <code>START_FAILED</code>, and <code>STOP_FAILED</code>.</p> <p> <code>OFFLINE</code> indicates that the server exists, but that it is not available for file operations. <code>ONLINE</code> indicates that the server is available to perform file operations. <code>STARTING</code> indicates that the server's was instantiated, but the server is not yet available to perform file operations. Under normal conditions, it can take a couple of minutes for the server to be completely operational. Both <code>START_FAILED</code> and <code>STOP_FAILED</code> are error conditions.</p> */
		State?: ListedServerState;
		UserCount?: number;
	}

	export enum ListedServerIdentityProviderType { SERVICE_MANAGED = 0, API_GATEWAY = 1 }

	export enum ListedServerEndpointType { PUBLIC = 0, VPC = 1, VPC_ENDPOINT = 2 }

	export enum ListedServerState { OFFLINE = 0, ONLINE = 1, STARTING = 2, STOPPING = 3, START_FAILED = 4, STOP_FAILED = 5 }


	/**Returns properties of the user that you specify. */
	export interface ListedUser {
		Arn: string;
		HomeDirectory?: string;
		HomeDirectoryType?: ListedUserHomeDirectoryType;
		Role?: string;
		SshPublicKeyCount?: number;
		UserName?: string;
	}

	export enum ListedUserHomeDirectoryType { PATH = 0, LOGICAL = 1 }

	export enum Protocol { SFTP = 0, FTP = 1, FTPS = 2 }


	/**Provides information about the public Secure Shell (SSH) key that is associated with a user account for the specific file transfer protocol-enabled server (as identified by <code>ServerId</code>). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server. */
	export interface SshPublicKey {
		DateImported: Date;
		SshPublicKeyBody: string;
		SshPublicKeyId: string;
	}


	/**Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called <code>Group</code> and assign the values <code>Research</code> and <code>Accounting</code> to that group. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Instantiates an autoscaling virtual server based on the selected file transfer protocol in AWS. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.
		 * Post /#X-Amz-Target=TransferService.CreateServer
		 * @return {CreateServerResponse} Success
		 */
		CreateServer(requestBody: CreateServerRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateServerResponse> {
			return Axios.post<CreateServerResponse>(this.baseUri + '/#X-Amz-Target=TransferService.CreateServer', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's AWS Identity and Access Management (IAM) role. You can also optionally add a scope-down policy, and assign metadata with tags that can be used to group and search for users.
		 * Post /#X-Amz-Target=TransferService.CreateUser
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(requestBody: CreateUserRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateUserResponse> {
			return Axios.post<CreateUserResponse>(this.baseUri + '/#X-Amz-Target=TransferService.CreateUser', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>
		 * Post /#X-Amz-Target=TransferService.DeleteServer
		 * @return {void} Success
		 */
		DeleteServer(requestBody: DeleteServerRequest, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/#X-Amz-Target=TransferService.DeleteServer', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * <p>Deletes a user's Secure Shell (SSH) public key.</p> <p>No response is returned from this operation.</p>
		 * Post /#X-Amz-Target=TransferService.DeleteSshPublicKey
		 * @return {void} Success
		 */
		DeleteSshPublicKey(requestBody: DeleteSshPublicKeyRequest, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/#X-Amz-Target=TransferService.DeleteSshPublicKey', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>
		 * Post /#X-Amz-Target=TransferService.DeleteUser
		 * @return {void} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/#X-Amz-Target=TransferService.DeleteUser', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * <p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>
		 * Post /#X-Amz-Target=TransferService.DescribeServer
		 * @return {DescribeServerResponse} Success
		 */
		DescribeServer(requestBody: DescribeServerRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeServerResponse> {
			return Axios.post<DescribeServerResponse>(this.baseUri + '/#X-Amz-Target=TransferService.DescribeServer', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>
		 * Post /#X-Amz-Target=TransferService.DescribeUser
		 * @return {DescribeUserResponse} Success
		 */
		DescribeUser(requestBody: DescribeUserRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeUserResponse> {
			return Axios.post<DescribeUserResponse>(this.baseUri + '/#X-Amz-Target=TransferService.DescribeUser', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>
		 * Post /#X-Amz-Target=TransferService.ImportSshPublicKey
		 * @return {ImportSshPublicKeyResponse} Success
		 */
		ImportSshPublicKey(requestBody: ImportSshPublicKeyRequest, headersHandler?: () => {[header: string]: string}): Promise<ImportSshPublicKeyResponse> {
			return Axios.post<ImportSshPublicKeyResponse>(this.baseUri + '/#X-Amz-Target=TransferService.ImportSshPublicKey', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists the file transfer protocol-enabled servers that are associated with your AWS account.
		 * Post /#X-Amz-Target=TransferService.ListServers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServersResponse} Success
		 */
		ListServers(MaxResults: string, NextToken: string, requestBody: ListServersRequest, headersHandler?: () => {[header: string]: string}): Promise<ListServersResponse> {
			return Axios.post<ListServersResponse>(this.baseUri + '/#X-Amz-Target=TransferService.ListServers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists all of the tags associated with the Amazon Resource Number (ARN) you specify. The resource can be a user, server, or role.
		 * Post /#X-Amz-Target=TransferService.ListTagsForResource
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(MaxResults: string, NextToken: string, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return Axios.post<ListTagsForResourceResponse>(this.baseUri + '/#X-Amz-Target=TransferService.ListTagsForResource?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.
		 * Post /#X-Amz-Target=TransferService.ListUsers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(MaxResults: string, NextToken: string, requestBody: ListUsersRequest, headersHandler?: () => {[header: string]: string}): Promise<ListUsersResponse> {
			return Axios.post<ListUsersResponse>(this.baseUri + '/#X-Amz-Target=TransferService.ListUsers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
		 * Post /#X-Amz-Target=TransferService.StartServer
		 * @return {void} Success
		 */
		StartServer(requestBody: StartServerRequest, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/#X-Amz-Target=TransferService.StartServer', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server. Stopping the server will not reduce or impact your file transfer protocol endpoint billing.</p> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
		 * Post /#X-Amz-Target=TransferService.StopServer
		 * @return {void} Success
		 */
		StopServer(requestBody: StopServerRequest, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/#X-Amz-Target=TransferService.StopServer', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>
		 * Post /#X-Amz-Target=TransferService.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/#X-Amz-Target=TransferService.TagResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>API_Gateway</code>, tests whether your API Gateway is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the API Gateway integration to ensure that your users can successfully use the service.
		 * Post /#X-Amz-Target=TransferService.TestIdentityProvider
		 * @return {TestIdentityProviderResponse} Success
		 */
		TestIdentityProvider(requestBody: TestIdentityProviderRequest, headersHandler?: () => {[header: string]: string}): Promise<TestIdentityProviderResponse> {
			return Axios.post<TestIdentityProviderResponse>(this.baseUri + '/#X-Amz-Target=TransferService.TestIdentityProvider', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>
		 * Post /#X-Amz-Target=TransferService.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/#X-Amz-Target=TransferService.UntagResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * <p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>
		 * Post /#X-Amz-Target=TransferService.UpdateServer
		 * @return {UpdateServerResponse} Success
		 */
		UpdateServer(requestBody: UpdateServerRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateServerResponse> {
			return Axios.post<UpdateServerResponse>(this.baseUri + '/#X-Amz-Target=TransferService.UpdateServer', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>
		 * Post /#X-Amz-Target=TransferService.UpdateUser
		 * @return {UpdateUserResponse} Success
		 */
		UpdateUser(requestBody: UpdateUserRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateUserResponse> {
			return Axios.post<UpdateUserResponse>(this.baseUri + '/#X-Amz-Target=TransferService.UpdateUser', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

}

