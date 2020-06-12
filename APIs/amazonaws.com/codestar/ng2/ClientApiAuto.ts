import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface AssociateTeamMemberResult {
		clientRequestToken?: string;
	}

	export interface AssociateTeamMemberRequest {
		projectId: string;
		clientRequestToken?: string;
		userArn: string;
		projectRole: string;
		remoteAccessAllowed?: boolean;
	}

	export interface CreateProjectResult {
		id: string;
		arn: string;
		clientRequestToken?: string;
		projectTemplateId?: string;
	}

	export interface CreateProjectRequest {
		name: string;
		id: string;
		description?: string;
		clientRequestToken?: string;
		sourceCode?: Array<Code>;

		/**The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation. */
		toolchain?: Toolchain;
		tags?: Tags;
	}

	export interface CreateUserProfileResult {
		userArn: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
		createdTimestamp?: Date;
		lastModifiedTimestamp?: Date;
	}

	export interface CreateUserProfileRequest {
		userArn: string;
		displayName: string;
		emailAddress: string;
		sshPublicKey?: string;
	}

	export interface DeleteProjectResult {
		stackId?: string;
		projectArn?: string;
	}

	export interface DeleteProjectRequest {
		id: string;
		clientRequestToken?: string;
		deleteStack?: boolean;
	}

	export interface DeleteUserProfileResult {
		userArn: string;
	}

	export interface DeleteUserProfileRequest {
		userArn: string;
	}

	export interface DescribeProjectResult {
		name?: string;
		id?: string;
		arn?: string;
		description?: string;
		clientRequestToken?: string;
		createdTimeStamp?: Date;
		stackId?: string;
		projectTemplateId?: string;

		/**An indication of whether a project creation or deletion is failed or successful. */
		status?: ProjectStatus;
	}

	export interface DescribeProjectRequest {
		id: string;
	}

	export interface DescribeUserProfileResult {
		userArn: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
		createdTimestamp: Date;
		lastModifiedTimestamp: Date;
	}

	export interface DescribeUserProfileRequest {
		userArn: string;
	}

	export interface DisassociateTeamMemberRequest {
		projectId: string;
		userArn: string;
	}

	export interface ListProjectsResult {
		projects: Array<ProjectSummary>;
		nextToken?: string;
	}

	export interface ListProjectsRequest {
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListResourcesResult {
		resources?: Array<Resource>;
		nextToken?: string;
	}

	export interface ListResourcesRequest {
		projectId: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListTagsForProjectResult {
		tags?: Tags;
		nextToken?: string;
	}

	export interface ListTagsForProjectRequest {
		id: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListTeamMembersResult {
		teamMembers: Array<TeamMember>;
		nextToken?: string;
	}

	export interface ListTeamMembersRequest {
		projectId: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListUserProfilesResult {
		userProfiles: Array<UserProfileSummary>;
		nextToken?: string;
	}

	export interface ListUserProfilesRequest {
		nextToken?: string;
		maxResults?: number;
	}

	export interface TagProjectResult {
		tags?: Tags;
	}

	export interface TagProjectRequest {
		id: string;
		tags: Tags;
	}

	export interface UntagProjectRequest {
		id: string;
		tags: Array<TagKey>;
	}

	export interface UpdateProjectRequest {
		id: string;
		name?: string;
		description?: string;
	}

	export interface UpdateTeamMemberResult {
		userArn?: string;
		projectRole?: string;
		remoteAccessAllowed?: boolean;
	}

	export interface UpdateTeamMemberRequest {
		projectId: string;
		userArn: string;
		projectRole?: string;
		remoteAccessAllowed?: boolean;
	}

	export interface UpdateUserProfileResult {
		userArn: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
		createdTimestamp?: Date;
		lastModifiedTimestamp?: Date;
	}

	export interface UpdateUserProfileRequest {
		userArn: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
	}


	/**The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation. */
	export interface CodeSource {

		/**The Amazon S3 location where the source code files provided with the project request are stored. */
		s3: S3Location;
	}


	/**The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository. */
	export interface CodeDestination {

		/**Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
		codeCommit?: CodeCommitCodeDestination;

		/**Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
		gitHub?: GitHubCodeDestination;
	}


	/**Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation. */
	export interface Code {

		/**The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation. */
		source: CodeSource;

		/**The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository. */
		destination: CodeDestination;
	}


	/**Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
	export interface CodeCommitCodeDestination {
		name: string;
	}


	/**Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
	export interface GitHubCodeDestination {
		name: string;
		description?: string;
		type: string;
		owner: string;
		privateRepository: boolean;
		issuesEnabled: boolean;
		token: string;
	}


	/**The Amazon S3 location where the source code files provided with the project request are stored. */
	export interface S3Location {
		bucketName?: string;
		bucketKey?: string;
	}


	/**The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation. */
	export interface Toolchain {

		/**The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation. */
		source: ToolchainSource;
		roleArn?: string;
		stackParameters?: TemplateParameterMap;
	}


	/**An indication of whether a project creation or deletion is failed or successful. */
	export interface ProjectStatus {
		state: string;
		reason?: string;
	}


	/**Information about the metadata for a project. */
	export interface ProjectSummary {
		projectId?: string;
		projectArn?: string;
	}


	/**Information about a resource for a project. */
	export interface Resource {
		id: string;
	}


	/**Information about a team member in a project. */
	export interface TeamMember {
		userArn: string;
		projectRole: string;
		remoteAccessAllowed?: boolean;
	}


	/**The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation. */
	export interface ToolchainSource {

		/**The Amazon S3 location where the source code files provided with the project request are stored. */
		s3: S3Location;
	}


	/**Information about a user's profile in AWS CodeStar. */
	export interface UserProfileSummary {
		userArn?: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds an IAM user to the team for an AWS CodeStar project.
		 * Post /#X-Amz-Target=CodeStar_20170419.AssociateTeamMember
		 * @return {AssociateTeamMemberResult} Success
		 */
		AssociateTeamMember(requestBody: AssociateTeamMemberRequest, headersHandler?: () => HttpHeaders): Observable<AssociateTeamMemberResult> {
			return this.http.post<AssociateTeamMemberResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.AssociateTeamMember', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.
		 * Post /#X-Amz-Target=CodeStar_20170419.CreateProject
		 * @return {CreateProjectResult} Success
		 */
		CreateProject(requestBody: CreateProjectRequest, headersHandler?: () => HttpHeaders): Observable<CreateProjectResult> {
			return this.http.post<CreateProjectResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.CreateProject', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
		 * Post /#X-Amz-Target=CodeStar_20170419.CreateUserProfile
		 * @return {CreateUserProfileResult} Success
		 */
		CreateUserProfile(requestBody: CreateUserProfileRequest, headersHandler?: () => HttpHeaders): Observable<CreateUserProfileResult> {
			return this.http.post<CreateUserProfileResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.CreateUserProfile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
		 * Post /#X-Amz-Target=CodeStar_20170419.DeleteProject
		 * @return {DeleteProjectResult} Success
		 */
		DeleteProject(requestBody: DeleteProjectRequest, headersHandler?: () => HttpHeaders): Observable<DeleteProjectResult> {
			return this.http.post<DeleteProjectResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.DeleteProject', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
		 * Post /#X-Amz-Target=CodeStar_20170419.DeleteUserProfile
		 * @return {DeleteUserProfileResult} Success
		 */
		DeleteUserProfile(requestBody: DeleteUserProfileRequest, headersHandler?: () => HttpHeaders): Observable<DeleteUserProfileResult> {
			return this.http.post<DeleteUserProfileResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.DeleteUserProfile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Describes a project and its resources.
		 * Post /#X-Amz-Target=CodeStar_20170419.DescribeProject
		 * @return {DescribeProjectResult} Success
		 */
		DescribeProject(requestBody: DescribeProjectRequest, headersHandler?: () => HttpHeaders): Observable<DescribeProjectResult> {
			return this.http.post<DescribeProjectResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.DescribeProject', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Describes a user in AWS CodeStar and the user attributes across all projects.
		 * Post /#X-Amz-Target=CodeStar_20170419.DescribeUserProfile
		 * @return {DescribeUserProfileResult} Success
		 */
		DescribeUserProfile(requestBody: DescribeUserProfileRequest, headersHandler?: () => HttpHeaders): Observable<DescribeUserProfileResult> {
			return this.http.post<DescribeUserProfileResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.DescribeUserProfile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.
		 * Post /#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember
		 * @return {DisassociateTeamMemberResult} Success
		 */
		DisassociateTeamMember(requestBody: DisassociateTeamMemberRequest, headersHandler?: () => HttpHeaders): Observable<DisassociateTeamMemberResult> {
			return this.http.post<DisassociateTeamMemberResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all projects in AWS CodeStar associated with your AWS account.
		 * Post /#X-Amz-Target=CodeStar_20170419.ListProjects
		 * @return {ListProjectsResult} Success
		 */
		ListProjects(requestBody: ListProjectsRequest, headersHandler?: () => HttpHeaders): Observable<ListProjectsResult> {
			return this.http.post<ListProjectsResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.ListProjects', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists resources associated with a project in AWS CodeStar.
		 * Post /#X-Amz-Target=CodeStar_20170419.ListResources
		 * @return {ListResourcesResult} Success
		 */
		ListResources(requestBody: ListResourcesRequest, headersHandler?: () => HttpHeaders): Observable<ListResourcesResult> {
			return this.http.post<ListResourcesResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.ListResources', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets the tags for a project.
		 * Post /#X-Amz-Target=CodeStar_20170419.ListTagsForProject
		 * @return {ListTagsForProjectResult} Success
		 */
		ListTagsForProject(requestBody: ListTagsForProjectRequest, headersHandler?: () => HttpHeaders): Observable<ListTagsForProjectResult> {
			return this.http.post<ListTagsForProjectResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.ListTagsForProject', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all team members associated with a project.
		 * Post /#X-Amz-Target=CodeStar_20170419.ListTeamMembers
		 * @return {ListTeamMembersResult} Success
		 */
		ListTeamMembers(requestBody: ListTeamMembersRequest, headersHandler?: () => HttpHeaders): Observable<ListTeamMembersResult> {
			return this.http.post<ListTeamMembersResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.ListTeamMembers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all the user profiles configured for your AWS account in AWS CodeStar.
		 * Post /#X-Amz-Target=CodeStar_20170419.ListUserProfiles
		 * @return {ListUserProfilesResult} Success
		 */
		ListUserProfiles(requestBody: ListUserProfilesRequest, headersHandler?: () => HttpHeaders): Observable<ListUserProfilesResult> {
			return this.http.post<ListUserProfilesResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.ListUserProfiles', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Adds tags to a project.
		 * Post /#X-Amz-Target=CodeStar_20170419.TagProject
		 * @return {TagProjectResult} Success
		 */
		TagProject(requestBody: TagProjectRequest, headersHandler?: () => HttpHeaders): Observable<TagProjectResult> {
			return this.http.post<TagProjectResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.TagProject', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes tags from a project.
		 * Post /#X-Amz-Target=CodeStar_20170419.UntagProject
		 * @return {UntagProjectResult} Success
		 */
		UntagProject(requestBody: UntagProjectRequest, headersHandler?: () => HttpHeaders): Observable<UntagProjectResult> {
			return this.http.post<UntagProjectResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.UntagProject', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a project in AWS CodeStar.
		 * Post /#X-Amz-Target=CodeStar_20170419.UpdateProject
		 * @return {UpdateProjectResult} Success
		 */
		UpdateProject(requestBody: UpdateProjectRequest, headersHandler?: () => HttpHeaders): Observable<UpdateProjectResult> {
			return this.http.post<UpdateProjectResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.UpdateProject', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.
		 * Post /#X-Amz-Target=CodeStar_20170419.UpdateTeamMember
		 * @return {UpdateTeamMemberResult} Success
		 */
		UpdateTeamMember(requestBody: UpdateTeamMemberRequest, headersHandler?: () => HttpHeaders): Observable<UpdateTeamMemberResult> {
			return this.http.post<UpdateTeamMemberResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.UpdateTeamMember', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
		 * Post /#X-Amz-Target=CodeStar_20170419.UpdateUserProfile
		 * @return {UpdateUserProfileResult} Success
		 */
		UpdateUserProfile(requestBody: UpdateUserProfileRequest, headersHandler?: () => HttpHeaders): Observable<UpdateUserProfileResult> {
			return this.http.post<UpdateUserProfileResult>(this.baseUri + '/#X-Amz-Target=CodeStar_20170419.UpdateUserProfile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

