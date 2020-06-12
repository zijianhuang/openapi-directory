import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface AssociateApprovalRuleTemplateWithRepositoryInput {
		approvalRuleTemplateName: string;
		repositoryName: string;
	}

	export interface BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
		associatedRepositoryNames: Array<RepositoryName>;
		errors: Array<BatchAssociateApprovalRuleTemplateWithRepositoriesError>;
	}

	export interface BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
		approvalRuleTemplateName: string;
		repositoryNames: Array<RepositoryName>;
	}

	export interface BatchDescribeMergeConflictsOutput {
		conflicts: Array<Conflict>;
		nextToken?: string;
		errors?: Array<BatchDescribeMergeConflictsError>;
		destinationCommitId: string;
		sourceCommitId: string;
		baseCommitId?: string;
	}

	export interface BatchDescribeMergeConflictsInput {
		repositoryName: string;
		destinationCommitSpecifier: string;
		sourceCommitSpecifier: string;
		mergeOption: BatchDescribeMergeConflictsInputMergeOption;
		maxMergeHunks?: number;
		maxConflictFiles?: number;
		filePaths?: Array<Path>;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy;
		nextToken?: string;
	}

	export enum BatchDescribeMergeConflictsInputMergeOption { FAST_FORWARD_MERGE = 0, SQUASH_MERGE = 1, THREE_WAY_MERGE = 2 }

	export enum BatchDescribeMergeConflictsInputConflictDetailLevel { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum BatchDescribeMergeConflictsInputConflictResolutionStrategy { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }

	export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
		disassociatedRepositoryNames: Array<RepositoryName>;
		errors: Array<BatchDisassociateApprovalRuleTemplateFromRepositoriesError>;
	}

	export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
		approvalRuleTemplateName: string;
		repositoryNames: Array<RepositoryName>;
	}

	export interface BatchGetCommitsOutput {
		commits?: Array<Commit>;
		errors?: Array<BatchGetCommitsError>;
	}

	export interface BatchGetCommitsInput {
		commitIds: Array<ObjectId>;
		repositoryName: string;
	}


	/**Represents the output of a batch get repositories operation. */
	export interface BatchGetRepositoriesOutput {
		repositories?: Array<RepositoryMetadata>;
		repositoriesNotFound?: Array<RepositoryName>;
	}


	/**Represents the input of a batch get repositories operation. */
	export interface BatchGetRepositoriesInput {
		repositoryNames: Array<RepositoryName>;
	}

	export interface CreateApprovalRuleTemplateOutput {

		/**Returns information about an approval rule template. */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}

	export interface CreateApprovalRuleTemplateInput {
		approvalRuleTemplateName: string;
		approvalRuleTemplateContent: string;
		approvalRuleTemplateDescription?: string;
	}


	/**Represents the input of a create branch operation. */
	export interface CreateBranchInput {
		repositoryName: string;
		branchName: string;
		commitId: string;
	}

	export interface CreateCommitOutput {
		commitId?: string;
		treeId?: string;
		filesAdded?: Array<FileMetadata>;
		filesUpdated?: Array<FileMetadata>;
		filesDeleted?: Array<FileMetadata>;
	}

	export interface CreateCommitInput {
		repositoryName: string;
		branchName: string;
		parentCommitId?: string;
		authorName?: string;
		email?: string;
		commitMessage?: string;
		keepEmptyFolders?: boolean;
		putFiles?: Array<PutFileEntry>;
		deleteFiles?: Array<DeleteFileEntry>;
		setFileModes?: Array<SetFileModeEntry>;
	}

	export interface CreatePullRequestOutput {

		/**Returns information about a pull request. */
		pullRequest: PullRequest;
	}

	export interface CreatePullRequestInput {
		title: string;
		description?: string;
		targets: Array<Target>;
		clientRequestToken?: string;
	}

	export interface CreatePullRequestApprovalRuleOutput {

		/**Returns information about an approval rule. */
		approvalRule: ApprovalRule;
	}

	export interface CreatePullRequestApprovalRuleInput {
		pullRequestId: string;
		approvalRuleName: string;
		approvalRuleContent: string;
	}


	/**Represents the output of a create repository operation. */
	export interface CreateRepositoryOutput {

		/**Information about a repository. */
		repositoryMetadata?: RepositoryMetadata;
	}


	/**Represents the input of a create repository operation. */
	export interface CreateRepositoryInput {
		repositoryName: string;
		repositoryDescription?: string;
		tags?: TagsMap;
	}

	export interface CreateUnreferencedMergeCommitOutput {
		commitId?: string;
		treeId?: string;
	}

	export interface CreateUnreferencedMergeCommitInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		mergeOption: CreateUnreferencedMergeCommitInputMergeOption;
		conflictDetailLevel?: CreateUnreferencedMergeCommitInputConflictDetailLevel;
		conflictResolutionStrategy?: CreateUnreferencedMergeCommitInputConflictResolutionStrategy;
		authorName?: string;
		email?: string;
		commitMessage?: string;
		keepEmptyFolders?: boolean;

		/**If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
		conflictResolution?: ConflictResolution;
	}

	export enum CreateUnreferencedMergeCommitInputMergeOption { FAST_FORWARD_MERGE = 0, SQUASH_MERGE = 1, THREE_WAY_MERGE = 2 }

	export enum CreateUnreferencedMergeCommitInputConflictDetailLevel { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum CreateUnreferencedMergeCommitInputConflictResolutionStrategy { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }

	export interface DeleteApprovalRuleTemplateOutput {
		approvalRuleTemplateId: string;
	}

	export interface DeleteApprovalRuleTemplateInput {
		approvalRuleTemplateName: string;
	}


	/**Represents the output of a delete branch operation. */
	export interface DeleteBranchOutput {

		/**Returns information about a branch. */
		deletedBranch?: BranchInfo;
	}


	/**Represents the input of a delete branch operation. */
	export interface DeleteBranchInput {
		repositoryName: string;
		branchName: string;
	}

	export interface DeleteCommentContentOutput {

		/**Returns information about a specific comment. */
		comment?: Comment;
	}

	export interface DeleteCommentContentInput {
		commentId: string;
	}

	export interface DeleteFileOutput {
		commitId: string;
		blobId: string;
		treeId: string;
		filePath: string;
	}

	export interface DeleteFileInput {
		repositoryName: string;
		branchName: string;
		filePath: string;
		parentCommitId: string;
		keepEmptyFolders?: boolean;
		commitMessage?: string;
		name?: string;
		email?: string;
	}

	export interface DeletePullRequestApprovalRuleOutput {
		approvalRuleId: string;
	}

	export interface DeletePullRequestApprovalRuleInput {
		pullRequestId: string;
		approvalRuleName: string;
	}


	/**Represents the output of a delete repository operation. */
	export interface DeleteRepositoryOutput {
		repositoryId?: string;
	}


	/**Represents the input of a delete repository operation. */
	export interface DeleteRepositoryInput {
		repositoryName: string;
	}

	export interface DescribeMergeConflictsOutput {

		/**Information about the metadata for a conflict in a merge operation. */
		conflictMetadata: ConflictMetadata;
		mergeHunks: Array<MergeHunk>;
		nextToken?: string;
		destinationCommitId: string;
		sourceCommitId: string;
		baseCommitId?: string;
	}

	export interface DescribeMergeConflictsInput {
		repositoryName: string;
		destinationCommitSpecifier: string;
		sourceCommitSpecifier: string;
		mergeOption: DescribeMergeConflictsInputMergeOption;
		maxMergeHunks?: number;
		filePath: string;
		conflictDetailLevel?: DescribeMergeConflictsInputConflictDetailLevel;
		conflictResolutionStrategy?: DescribeMergeConflictsInputConflictResolutionStrategy;
		nextToken?: string;
	}

	export enum DescribeMergeConflictsInputMergeOption { FAST_FORWARD_MERGE = 0, SQUASH_MERGE = 1, THREE_WAY_MERGE = 2 }

	export enum DescribeMergeConflictsInputConflictDetailLevel { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum DescribeMergeConflictsInputConflictResolutionStrategy { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }

	export interface DescribePullRequestEventsOutput {
		pullRequestEvents: Array<PullRequestEvent>;
		nextToken?: string;
	}

	export interface DescribePullRequestEventsInput {
		pullRequestId: string;
		pullRequestEventType?: DescribePullRequestEventsInputPullRequestEventType;
		actorArn?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export enum DescribePullRequestEventsInputPullRequestEventType { PULL_REQUEST_CREATED = 0, PULL_REQUEST_STATUS_CHANGED = 1, PULL_REQUEST_SOURCE_REFERENCE_UPDATED = 2, PULL_REQUEST_MERGE_STATE_CHANGED = 3, PULL_REQUEST_APPROVAL_RULE_CREATED = 4, PULL_REQUEST_APPROVAL_RULE_UPDATED = 5, PULL_REQUEST_APPROVAL_RULE_DELETED = 6, PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN = 7, PULL_REQUEST_APPROVAL_STATE_CHANGED = 8 }

	export interface DisassociateApprovalRuleTemplateFromRepositoryInput {
		approvalRuleTemplateName: string;
		repositoryName: string;
	}

	export interface EvaluatePullRequestApprovalRulesOutput {

		/**Returns information about the approval rules applied to a pull request and whether conditions have been met. */
		evaluation: Evaluation;
	}

	export interface EvaluatePullRequestApprovalRulesInput {
		pullRequestId: string;
		revisionId: string;
	}

	export interface GetApprovalRuleTemplateOutput {

		/**Returns information about an approval rule template. */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}

	export interface GetApprovalRuleTemplateInput {
		approvalRuleTemplateName: string;
	}


	/**Represents the output of a get blob operation. */
	export interface GetBlobOutput {
		content: string;
	}


	/**Represents the input of a get blob operation. */
	export interface GetBlobInput {
		repositoryName: string;
		blobId: string;
	}


	/**Represents the output of a get branch operation. */
	export interface GetBranchOutput {

		/**Returns information about a branch. */
		branch?: BranchInfo;
	}


	/**Represents the input of a get branch operation. */
	export interface GetBranchInput {
		repositoryName?: string;
		branchName?: string;
	}

	export interface GetCommentOutput {

		/**Returns information about a specific comment. */
		comment?: Comment;
	}

	export interface GetCommentInput {
		commentId: string;
	}

	export interface GetCommentsForComparedCommitOutput {
		commentsForComparedCommitData?: Array<CommentsForComparedCommit>;
		nextToken?: string;
	}

	export interface GetCommentsForComparedCommitInput {
		repositoryName: string;
		beforeCommitId?: string;
		afterCommitId: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetCommentsForPullRequestOutput {
		commentsForPullRequestData?: Array<CommentsForPullRequest>;
		nextToken?: string;
	}

	export interface GetCommentsForPullRequestInput {
		pullRequestId: string;
		repositoryName?: string;
		beforeCommitId?: string;
		afterCommitId?: string;
		nextToken?: string;
		maxResults?: number;
	}


	/**Represents the output of a get commit operation. */
	export interface GetCommitOutput {

		/**Returns information about a specific commit. */
		commit: Commit;
	}


	/**Represents the input of a get commit operation. */
	export interface GetCommitInput {
		repositoryName: string;
		commitId: string;
	}

	export interface GetDifferencesOutput {
		differences?: Array<Difference>;
		NextToken?: string;
	}

	export interface GetDifferencesInput {
		repositoryName: string;
		beforeCommitSpecifier?: string;
		afterCommitSpecifier: string;
		beforePath?: string;
		afterPath?: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface GetFileOutput {
		commitId: string;
		blobId: string;
		filePath: string;
		fileMode: GetFileOutputFileMode;
		fileSize: number;
		fileContent: string;
	}

	export enum GetFileOutputFileMode { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }

	export interface GetFileInput {
		repositoryName: string;
		commitSpecifier?: string;
		filePath: string;
	}

	export interface GetFolderOutput {
		commitId: string;
		folderPath: string;
		treeId?: string;
		subFolders?: Array<Folder>;
		files?: Array<File>;
		symbolicLinks?: Array<SymbolicLink>;
		subModules?: Array<SubModule>;
	}

	export interface GetFolderInput {
		repositoryName: string;
		commitSpecifier?: string;
		folderPath: string;
	}

	export interface GetMergeCommitOutput {
		sourceCommitId?: string;
		destinationCommitId?: string;
		baseCommitId?: string;
		mergedCommitId?: string;
	}

	export interface GetMergeCommitInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		conflictDetailLevel?: GetMergeCommitInputConflictDetailLevel;
		conflictResolutionStrategy?: GetMergeCommitInputConflictResolutionStrategy;
	}

	export enum GetMergeCommitInputConflictDetailLevel { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum GetMergeCommitInputConflictResolutionStrategy { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }

	export interface GetMergeConflictsOutput {
		mergeable: boolean;
		destinationCommitId: string;
		sourceCommitId: string;
		baseCommitId?: string;
		conflictMetadataList: Array<ConflictMetadata>;
		nextToken?: string;
	}

	export interface GetMergeConflictsInput {
		repositoryName: string;
		destinationCommitSpecifier: string;
		sourceCommitSpecifier: string;
		mergeOption: GetMergeConflictsInputMergeOption;
		conflictDetailLevel?: GetMergeConflictsInputConflictDetailLevel;
		maxConflictFiles?: number;
		conflictResolutionStrategy?: GetMergeConflictsInputConflictResolutionStrategy;
		nextToken?: string;
	}

	export enum GetMergeConflictsInputMergeOption { FAST_FORWARD_MERGE = 0, SQUASH_MERGE = 1, THREE_WAY_MERGE = 2 }

	export enum GetMergeConflictsInputConflictDetailLevel { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum GetMergeConflictsInputConflictResolutionStrategy { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }

	export interface GetMergeOptionsOutput {
		mergeOptions: Array<MergeOptionTypeEnum>;
		sourceCommitId: string;
		destinationCommitId: string;
		baseCommitId: string;
	}

	export interface GetMergeOptionsInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		conflictDetailLevel?: GetMergeOptionsInputConflictDetailLevel;
		conflictResolutionStrategy?: GetMergeOptionsInputConflictResolutionStrategy;
	}

	export enum GetMergeOptionsInputConflictDetailLevel { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum GetMergeOptionsInputConflictResolutionStrategy { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }

	export interface GetPullRequestOutput {

		/**Returns information about a pull request. */
		pullRequest: PullRequest;
	}

	export interface GetPullRequestInput {
		pullRequestId: string;
	}

	export interface GetPullRequestApprovalStatesOutput {
		approvals?: Array<Approval>;
	}

	export interface GetPullRequestApprovalStatesInput {
		pullRequestId: string;
		revisionId: string;
	}

	export interface GetPullRequestOverrideStateOutput {
		overridden?: boolean;
		overrider?: string;
	}

	export interface GetPullRequestOverrideStateInput {
		pullRequestId: string;
		revisionId: string;
	}


	/**Represents the output of a get repository operation. */
	export interface GetRepositoryOutput {

		/**Information about a repository. */
		repositoryMetadata?: RepositoryMetadata;
	}


	/**Represents the input of a get repository operation. */
	export interface GetRepositoryInput {
		repositoryName: string;
	}


	/**Represents the output of a get repository triggers operation. */
	export interface GetRepositoryTriggersOutput {
		configurationId?: string;
		triggers?: Array<RepositoryTrigger>;
	}


	/**Represents the input of a get repository triggers operation. */
	export interface GetRepositoryTriggersInput {
		repositoryName: string;
	}

	export interface ListApprovalRuleTemplatesOutput {
		approvalRuleTemplateNames?: Array<ApprovalRuleTemplateName>;
		nextToken?: string;
	}

	export interface ListApprovalRuleTemplatesInput {
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
		approvalRuleTemplateNames?: Array<ApprovalRuleTemplateName>;
		nextToken?: string;
	}

	export interface ListAssociatedApprovalRuleTemplatesForRepositoryInput {
		repositoryName: string;
		nextToken?: string;
		maxResults?: number;
	}


	/**Represents the output of a list branches operation. */
	export interface ListBranchesOutput {
		branches?: Array<BranchName>;
		nextToken?: string;
	}


	/**Represents the input of a list branches operation. */
	export interface ListBranchesInput {
		repositoryName: string;
		nextToken?: string;
	}

	export interface ListPullRequestsOutput {
		pullRequestIds: Array<PullRequestId>;
		nextToken?: string;
	}

	export interface ListPullRequestsInput {
		repositoryName: string;
		authorArn?: string;
		pullRequestStatus?: ListPullRequestsInputPullRequestStatus;
		nextToken?: string;
		maxResults?: number;
	}

	export enum ListPullRequestsInputPullRequestStatus { OPEN = 0, CLOSED = 1 }


	/**Represents the output of a list repositories operation. */
	export interface ListRepositoriesOutput {
		repositories?: Array<RepositoryNameIdPair>;
		nextToken?: string;
	}


	/**Represents the input of a list repositories operation. */
	export interface ListRepositoriesInput {
		nextToken?: string;
		sortBy?: ListRepositoriesInputSortBy;
		order?: ListRepositoriesInputOrder;
	}

	export enum ListRepositoriesInputSortBy { repositoryName = 0, lastModifiedDate = 1 }

	export enum ListRepositoriesInputOrder { ascending = 0, descending = 1 }

	export interface ListRepositoriesForApprovalRuleTemplateOutput {
		repositoryNames?: Array<RepositoryName>;
		nextToken?: string;
	}

	export interface ListRepositoriesForApprovalRuleTemplateInput {
		approvalRuleTemplateName: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListTagsForResourceOutput {
		tags?: TagsMap;
		nextToken?: string;
	}

	export interface ListTagsForResourceInput {
		resourceArn: string;
		nextToken?: string;
	}

	export interface MergeBranchesByFastForwardOutput {
		commitId?: string;
		treeId?: string;
	}

	export interface MergeBranchesByFastForwardInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		targetBranch?: string;
	}

	export interface MergeBranchesBySquashOutput {
		commitId?: string;
		treeId?: string;
	}

	export interface MergeBranchesBySquashInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		targetBranch?: string;
		conflictDetailLevel?: MergeBranchesBySquashInputConflictDetailLevel;
		conflictResolutionStrategy?: MergeBranchesBySquashInputConflictResolutionStrategy;
		authorName?: string;
		email?: string;
		commitMessage?: string;
		keepEmptyFolders?: boolean;

		/**If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
		conflictResolution?: ConflictResolution;
	}

	export enum MergeBranchesBySquashInputConflictDetailLevel { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum MergeBranchesBySquashInputConflictResolutionStrategy { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }

	export interface MergeBranchesByThreeWayOutput {
		commitId?: string;
		treeId?: string;
	}

	export interface MergeBranchesByThreeWayInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		targetBranch?: string;
		conflictDetailLevel?: MergeBranchesByThreeWayInputConflictDetailLevel;
		conflictResolutionStrategy?: MergeBranchesByThreeWayInputConflictResolutionStrategy;
		authorName?: string;
		email?: string;
		commitMessage?: string;
		keepEmptyFolders?: boolean;

		/**If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
		conflictResolution?: ConflictResolution;
	}

	export enum MergeBranchesByThreeWayInputConflictDetailLevel { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum MergeBranchesByThreeWayInputConflictResolutionStrategy { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }

	export interface MergePullRequestByFastForwardOutput {

		/**Returns information about a pull request. */
		pullRequest?: PullRequest;
	}

	export interface MergePullRequestByFastForwardInput {
		pullRequestId: string;
		repositoryName: string;
		sourceCommitId?: string;
	}

	export interface MergePullRequestBySquashOutput {

		/**Returns information about a pull request. */
		pullRequest?: PullRequest;
	}

	export interface MergePullRequestBySquashInput {
		pullRequestId: string;
		repositoryName: string;
		sourceCommitId?: string;
		conflictDetailLevel?: MergePullRequestBySquashInputConflictDetailLevel;
		conflictResolutionStrategy?: MergePullRequestBySquashInputConflictResolutionStrategy;
		commitMessage?: string;
		authorName?: string;
		email?: string;
		keepEmptyFolders?: boolean;

		/**If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
		conflictResolution?: ConflictResolution;
	}

	export enum MergePullRequestBySquashInputConflictDetailLevel { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum MergePullRequestBySquashInputConflictResolutionStrategy { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }

	export interface MergePullRequestByThreeWayOutput {

		/**Returns information about a pull request. */
		pullRequest?: PullRequest;
	}

	export interface MergePullRequestByThreeWayInput {
		pullRequestId: string;
		repositoryName: string;
		sourceCommitId?: string;
		conflictDetailLevel?: MergePullRequestByThreeWayInputConflictDetailLevel;
		conflictResolutionStrategy?: MergePullRequestByThreeWayInputConflictResolutionStrategy;
		commitMessage?: string;
		authorName?: string;
		email?: string;
		keepEmptyFolders?: boolean;

		/**If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
		conflictResolution?: ConflictResolution;
	}

	export enum MergePullRequestByThreeWayInputConflictDetailLevel { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum MergePullRequestByThreeWayInputConflictResolutionStrategy { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }

	export interface OverridePullRequestApprovalRulesInput {
		pullRequestId: string;
		revisionId: string;
		overrideStatus: OverridePullRequestApprovalRulesInputOverrideStatus;
	}

	export enum OverridePullRequestApprovalRulesInputOverrideStatus { OVERRIDE = 0, REVOKE = 1 }

	export interface PostCommentForComparedCommitOutput {
		repositoryName?: string;
		beforeCommitId?: string;
		afterCommitId?: string;
		beforeBlobId?: string;
		afterBlobId?: string;

		/**Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location;

		/**Returns information about a specific comment. */
		comment?: Comment;
	}

	export interface PostCommentForComparedCommitInput {
		repositoryName: string;
		beforeCommitId?: string;
		afterCommitId: string;

		/**Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location;
		content: string;
		clientRequestToken?: string;
	}

	export interface PostCommentForPullRequestOutput {
		repositoryName?: string;
		pullRequestId?: string;
		beforeCommitId?: string;
		afterCommitId?: string;
		beforeBlobId?: string;
		afterBlobId?: string;

		/**Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location;

		/**Returns information about a specific comment. */
		comment?: Comment;
	}

	export interface PostCommentForPullRequestInput {
		pullRequestId: string;
		repositoryName: string;
		beforeCommitId: string;
		afterCommitId: string;

		/**Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location;
		content: string;
		clientRequestToken?: string;
	}

	export interface PostCommentReplyOutput {

		/**Returns information about a specific comment. */
		comment?: Comment;
	}

	export interface PostCommentReplyInput {
		inReplyTo: string;
		clientRequestToken?: string;
		content: string;
	}

	export interface PutFileOutput {
		commitId: string;
		blobId: string;
		treeId: string;
	}

	export interface PutFileInput {
		repositoryName: string;
		branchName: string;
		fileContent: string;
		filePath: string;
		fileMode?: PutFileInputFileMode;
		parentCommitId?: string;
		commitMessage?: string;
		name?: string;
		email?: string;
	}

	export enum PutFileInputFileMode { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }


	/**Represents the output of a put repository triggers operation. */
	export interface PutRepositoryTriggersOutput {
		configurationId?: string;
	}


	/**Represents the input of a put repository triggers operation. */
	export interface PutRepositoryTriggersInput {
		repositoryName: string;
		triggers: Array<RepositoryTrigger>;
	}

	export interface TagResourceInput {
		resourceArn: string;
		tags: TagsMap;
	}


	/**Represents the output of a test repository triggers operation. */
	export interface TestRepositoryTriggersOutput {
		successfulExecutions?: Array<RepositoryTriggerName>;
		failedExecutions?: Array<RepositoryTriggerExecutionFailure>;
	}


	/**Represents the input of a test repository triggers operation. */
	export interface TestRepositoryTriggersInput {
		repositoryName: string;
		triggers: Array<RepositoryTrigger>;
	}

	export interface UntagResourceInput {
		resourceArn: string;
		tagKeys: Array<TagKey>;
	}

	export interface UpdateApprovalRuleTemplateContentOutput {

		/**Returns information about an approval rule template. */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}

	export interface UpdateApprovalRuleTemplateContentInput {
		approvalRuleTemplateName: string;
		newRuleContent: string;
		existingRuleContentSha256?: string;
	}

	export interface UpdateApprovalRuleTemplateDescriptionOutput {

		/**Returns information about an approval rule template. */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}

	export interface UpdateApprovalRuleTemplateDescriptionInput {
		approvalRuleTemplateName: string;
		approvalRuleTemplateDescription: string;
	}

	export interface UpdateApprovalRuleTemplateNameOutput {

		/**Returns information about an approval rule template. */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}

	export interface UpdateApprovalRuleTemplateNameInput {
		oldApprovalRuleTemplateName: string;
		newApprovalRuleTemplateName: string;
	}

	export interface UpdateCommentOutput {

		/**Returns information about a specific comment. */
		comment?: Comment;
	}

	export interface UpdateCommentInput {
		commentId: string;
		content: string;
	}


	/**Represents the input of an update default branch operation. */
	export interface UpdateDefaultBranchInput {
		repositoryName: string;
		defaultBranchName: string;
	}

	export interface UpdatePullRequestApprovalRuleContentOutput {

		/**Returns information about an approval rule. */
		approvalRule: ApprovalRule;
	}

	export interface UpdatePullRequestApprovalRuleContentInput {
		pullRequestId: string;
		approvalRuleName: string;
		existingRuleContentSha256?: string;
		newRuleContent: string;
	}

	export interface UpdatePullRequestApprovalStateInput {
		pullRequestId: string;
		revisionId: string;
		approvalState: UpdatePullRequestApprovalStateInputApprovalState;
	}

	export enum UpdatePullRequestApprovalStateInputApprovalState { APPROVE = 0, REVOKE = 1 }

	export interface UpdatePullRequestDescriptionOutput {

		/**Returns information about a pull request. */
		pullRequest: PullRequest;
	}

	export interface UpdatePullRequestDescriptionInput {
		pullRequestId: string;
		description: string;
	}

	export interface UpdatePullRequestStatusOutput {

		/**Returns information about a pull request. */
		pullRequest: PullRequest;
	}

	export interface UpdatePullRequestStatusInput {
		pullRequestId: string;
		pullRequestStatus: UpdatePullRequestStatusInputPullRequestStatus;
	}

	export enum UpdatePullRequestStatusInputPullRequestStatus { OPEN = 0, CLOSED = 1 }

	export interface UpdatePullRequestTitleOutput {

		/**Returns information about a pull request. */
		pullRequest: PullRequest;
	}

	export interface UpdatePullRequestTitleInput {
		pullRequestId: string;
		title: string;
	}


	/**Represents the input of an update repository description operation. */
	export interface UpdateRepositoryDescriptionInput {
		repositoryName: string;
		repositoryDescription?: string;
	}


	/**Represents the input of an update repository description operation. */
	export interface UpdateRepositoryNameInput {
		oldName: string;
		newName: string;
	}

	export enum ApprovalState { APPROVE = 0, REVOKE = 1 }


	/**Returns information about a specific approval on a pull request. */
	export interface Approval {
		userArn?: string;
		approvalState?: ApprovalApprovalState;
	}

	export enum ApprovalApprovalState { APPROVE = 0, REVOKE = 1 }


	/**Returns information about the template that created the approval rule for a pull request. */
	export interface OriginApprovalRuleTemplate {
		approvalRuleTemplateId?: string;
		approvalRuleTemplateName?: string;
	}


	/**Returns information about an approval rule. */
	export interface ApprovalRule {
		approvalRuleId?: string;
		approvalRuleName?: string;
		approvalRuleContent?: string;
		ruleContentSha256?: string;
		lastModifiedDate?: Date;
		creationDate?: Date;
		lastModifiedUser?: string;

		/**Returns information about the template that created the approval rule for a pull request. */
		originApprovalRuleTemplate?: OriginApprovalRuleTemplate;
	}


	/**Returns information about an event for an approval rule. */
	export interface ApprovalRuleEventMetadata {
		approvalRuleName?: string;
		approvalRuleId?: string;
		approvalRuleContent?: string;
	}

	export enum OverrideStatus { OVERRIDE = 0, REVOKE = 1 }


	/**Returns information about an override event for approval rules for a pull request. */
	export interface ApprovalRuleOverriddenEventMetadata {
		revisionId?: string;
		overrideStatus?: ApprovalRuleOverriddenEventMetadataOverrideStatus;
	}

	export enum ApprovalRuleOverriddenEventMetadataOverrideStatus { OVERRIDE = 0, REVOKE = 1 }


	/**Returns information about an approval rule template. */
	export interface ApprovalRuleTemplate {
		approvalRuleTemplateId?: string;
		approvalRuleTemplateName?: string;
		approvalRuleTemplateDescription?: string;
		approvalRuleTemplateContent?: string;
		ruleContentSha256?: string;
		lastModifiedDate?: Date;
		creationDate?: Date;
		lastModifiedUser?: string;
	}


	/**Returns information about a change in the approval state for a pull request. */
	export interface ApprovalStateChangedEventMetadata {
		revisionId?: string;
		approvalStatus?: ApprovalStateChangedEventMetadataApprovalStatus;
	}

	export enum ApprovalStateChangedEventMetadataApprovalStatus { APPROVE = 0, REVOKE = 1 }


	/**Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation. */
	export interface BatchAssociateApprovalRuleTemplateWithRepositoriesError {
		repositoryName?: string;
		errorCode?: string;
		errorMessage?: string;
	}


	/**Returns information about errors in a BatchDescribeMergeConflicts operation. */
	export interface BatchDescribeMergeConflictsError {
		filePath: string;
		exceptionName: string;
		message: string;
	}

	export enum MergeOptionTypeEnum { FAST_FORWARD_MERGE = 0, SQUASH_MERGE = 1, THREE_WAY_MERGE = 2 }

	export enum ConflictDetailLevelTypeEnum { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum ConflictResolutionStrategyTypeEnum { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }


	/**Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation. */
	export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
		repositoryName?: string;
		errorCode?: string;
		errorMessage?: string;
	}


	/**Returns information about errors in a BatchGetCommits operation. */
	export interface BatchGetCommitsError {
		commitId?: string;
		errorCode?: string;
		errorMessage?: string;
	}


	/**Returns information about a specific Git blob object. */
	export interface BlobMetadata {
		blobId?: string;
		path?: string;
		mode?: string;
	}


	/**Returns information about a branch. */
	export interface BranchInfo {
		branchName?: string;
		commitId?: string;
	}

	export enum ChangeTypeEnum { A = 0, M = 1, D = 2 }


	/**Returns information about a specific comment. */
	export interface Comment {
		commentId?: string;
		content?: string;
		inReplyTo?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		authorArn?: string;
		deleted?: boolean;
		clientRequestToken?: string;
	}


	/**Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
	export interface Location {
		filePath?: string;
		filePosition?: number;
		relativeFileVersion?: LocationRelativeFileVersion;
	}

	export enum LocationRelativeFileVersion { BEFORE = 0, AFTER = 1 }


	/**Returns information about comments on the comparison between two commits. */
	export interface CommentsForComparedCommit {
		repositoryName?: string;
		beforeCommitId?: string;
		afterCommitId?: string;
		beforeBlobId?: string;
		afterBlobId?: string;

		/**Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location;
		comments?: Array<Comment>;
	}


	/**Returns information about comments on a pull request. */
	export interface CommentsForPullRequest {
		pullRequestId?: string;
		repositoryName?: string;
		beforeCommitId?: string;
		afterCommitId?: string;
		beforeBlobId?: string;
		afterBlobId?: string;

		/**Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location;
		comments?: Array<Comment>;
	}


	/**Information about the user who made a specified commit. */
	export interface UserInfo {
		name?: string;
		email?: string;
		date?: string;
	}


	/**Returns information about a specific commit. */
	export interface Commit {
		commitId?: string;
		treeId?: string;
		parents?: Array<ObjectId>;
		message?: string;

		/**Information about the user who made a specified commit. */
		author?: UserInfo;

		/**Information about the user who made a specified commit. */
		committer?: UserInfo;
		additionalData?: string;
	}


	/**Information about the metadata for a conflict in a merge operation. */
	export interface ConflictMetadata {
		filePath?: string;

		/**Information about the size of files in a merge or pull request. */
		fileSizes?: FileSizes;

		/**Information about file modes in a merge or pull request. */
		fileModes?: FileModes;

		/**Information about the type of an object in a merge operation. */
		objectTypes?: ObjectTypes;
		numberOfConflicts?: number;

		/**Information about whether a file is binary or textual in a merge or pull request operation. */
		isBinaryFile?: IsBinaryFile;
		contentConflict?: boolean;
		fileModeConflict?: boolean;
		objectTypeConflict?: boolean;

		/**Information about the file operation conflicts in a merge operation. */
		mergeOperations?: MergeOperations;
	}


	/**Information about conflicts in a merge operation. */
	export interface Conflict {

		/**Information about the metadata for a conflict in a merge operation. */
		conflictMetadata?: ConflictMetadata;
		mergeHunks?: Array<MergeHunk>;
	}


	/**Information about the size of files in a merge or pull request. */
	export interface FileSizes {
		source?: number;
		destination?: number;
		base?: number;
	}


	/**Information about file modes in a merge or pull request. */
	export interface FileModes {
		source?: FileModesSource;
		destination?: FileModesDestination;
		base?: FileModesBase;
	}

	export enum FileModesSource { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }

	export enum FileModesDestination { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }

	export enum FileModesBase { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }


	/**Information about the type of an object in a merge operation. */
	export interface ObjectTypes {
		source?: ObjectTypesSource;
		destination?: ObjectTypesDestination;
		base?: ObjectTypesBase;
	}

	export enum ObjectTypesSource { FILE = 0, DIRECTORY = 1, GIT_LINK = 2, SYMBOLIC_LINK = 3 }

	export enum ObjectTypesDestination { FILE = 0, DIRECTORY = 1, GIT_LINK = 2, SYMBOLIC_LINK = 3 }

	export enum ObjectTypesBase { FILE = 0, DIRECTORY = 1, GIT_LINK = 2, SYMBOLIC_LINK = 3 }


	/**Information about whether a file is binary or textual in a merge or pull request operation. */
	export interface IsBinaryFile {
		source?: boolean;
		destination?: boolean;
		base?: boolean;
	}


	/**Information about the file operation conflicts in a merge operation. */
	export interface MergeOperations {
		source?: MergeOperationsSource;
		destination?: MergeOperationsDestination;
	}

	export enum MergeOperationsSource { A = 0, M = 1, D = 2 }

	export enum MergeOperationsDestination { A = 0, M = 1, D = 2 }


	/**If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
	export interface ConflictResolution {
		replaceContents?: Array<ReplaceContentEntry>;
		deleteFiles?: Array<DeleteFileEntry>;
		setFileModes?: Array<SetFileModeEntry>;
	}


	/**Returns information about a pull request. */
	export interface PullRequest {
		pullRequestId?: string;
		title?: string;
		description?: string;
		lastActivityDate?: Date;
		creationDate?: Date;
		pullRequestStatus?: PullRequestPullRequestStatus;
		authorArn?: string;
		pullRequestTargets?: Array<PullRequestTarget>;
		clientRequestToken?: string;
		revisionId?: string;
		approvalRules?: Array<ApprovalRule>;
	}

	export enum PullRequestPullRequestStatus { OPEN = 0, CLOSED = 1 }


	/**Information about a repository. */
	export interface RepositoryMetadata {
		accountId?: string;
		repositoryId?: string;
		repositoryName?: string;
		repositoryDescription?: string;
		defaultBranch?: string;
		lastModifiedDate?: Date;
		creationDate?: Date;
		cloneUrlHttp?: string;
		cloneUrlSsh?: string;
		Arn?: string;
	}


	/**A file that is deleted as part of a commit. */
	export interface DeleteFileEntry {
		filePath: string;
	}

	export enum PullRequestEventType { PULL_REQUEST_CREATED = 0, PULL_REQUEST_STATUS_CHANGED = 1, PULL_REQUEST_SOURCE_REFERENCE_UPDATED = 2, PULL_REQUEST_MERGE_STATE_CHANGED = 3, PULL_REQUEST_APPROVAL_RULE_CREATED = 4, PULL_REQUEST_APPROVAL_RULE_UPDATED = 5, PULL_REQUEST_APPROVAL_RULE_DELETED = 6, PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN = 7, PULL_REQUEST_APPROVAL_STATE_CHANGED = 8 }


	/**Returns information about a set of differences for a commit specifier. */
	export interface Difference {

		/**Returns information about a specific Git blob object. */
		beforeBlob?: BlobMetadata;

		/**Returns information about a specific Git blob object. */
		afterBlob?: BlobMetadata;
		changeType?: DifferenceChangeType;
	}

	export enum DifferenceChangeType { A = 0, M = 1, D = 2 }


	/**Returns information about the approval rules applied to a pull request and whether conditions have been met. */
	export interface Evaluation {
		approved?: boolean;
		overridden?: boolean;
		approvalRulesSatisfied?: Array<ApprovalRuleName>;
		approvalRulesNotSatisfied?: Array<ApprovalRuleName>;
	}

	export enum FileModeTypeEnum { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }


	/**Returns information about a file in a repository. */
	export interface File {
		blobId?: string;
		absolutePath?: string;
		relativePath?: string;
		fileMode?: FileFileMode;
	}

	export enum FileFileMode { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }


	/**A file to be added, updated, or deleted as part of a commit. */
	export interface FileMetadata {
		absolutePath?: string;
		blobId?: string;
		fileMode?: FileMetadataFileMode;
	}

	export enum FileMetadataFileMode { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }


	/**Returns information about a folder in a repository. */
	export interface Folder {
		treeId?: string;
		absolutePath?: string;
		relativePath?: string;
	}

	export enum PullRequestStatusEnum { OPEN = 0, CLOSED = 1 }

	export enum SortByEnum { repositoryName = 0, lastModifiedDate = 1 }

	export enum OrderEnum { ascending = 0, descending = 1 }

	export enum RelativeFileVersionEnum { BEFORE = 0, AFTER = 1 }


	/**Information about the details of a merge hunk that contains a conflict in a merge or pull request operation. */
	export interface MergeHunkDetail {
		startLine?: number;
		endLine?: number;
		hunkContent?: string;
	}


	/**Information about merge hunks in a merge or pull request operation. */
	export interface MergeHunk {
		isConflict?: boolean;

		/**Information about the details of a merge hunk that contains a conflict in a merge or pull request operation. */
		source?: MergeHunkDetail;

		/**Information about the details of a merge hunk that contains a conflict in a merge or pull request operation. */
		destination?: MergeHunkDetail;

		/**Information about the details of a merge hunk that contains a conflict in a merge or pull request operation. */
		base?: MergeHunkDetail;
	}


	/**Returns information about a merge or potential merge between a source reference and a destination reference in a pull request. */
	export interface MergeMetadata {
		isMerged?: boolean;
		mergedBy?: string;
		mergeCommitId?: string;
		mergeOption?: MergeMetadataMergeOption;
	}

	export enum MergeMetadataMergeOption { FAST_FORWARD_MERGE = 0, SQUASH_MERGE = 1, THREE_WAY_MERGE = 2 }

	export enum ObjectTypeEnum { FILE = 0, DIRECTORY = 1, GIT_LINK = 2, SYMBOLIC_LINK = 3 }


	/**Metadata about the pull request that is used when comparing the pull request source with its destination. */
	export interface PullRequestCreatedEventMetadata {
		repositoryName?: string;
		sourceCommitId?: string;
		destinationCommitId?: string;
		mergeBase?: string;
	}


	/**Information about a change to the status of a pull request. */
	export interface PullRequestStatusChangedEventMetadata {
		pullRequestStatus?: PullRequestStatusChangedEventMetadataPullRequestStatus;
	}

	export enum PullRequestStatusChangedEventMetadataPullRequestStatus { OPEN = 0, CLOSED = 1 }


	/**Information about an update to the source branch of a pull request. */
	export interface PullRequestSourceReferenceUpdatedEventMetadata {
		repositoryName?: string;
		beforeCommitId?: string;
		afterCommitId?: string;
		mergeBase?: string;
	}


	/**Returns information about the change in the merge state for a pull request event.  */
	export interface PullRequestMergedStateChangedEventMetadata {
		repositoryName?: string;
		destinationReference?: string;

		/**Returns information about a merge or potential merge between a source reference and a destination reference in a pull request. */
		mergeMetadata?: MergeMetadata;
	}


	/**Returns information about a pull request event. */
	export interface PullRequestEvent {
		pullRequestId?: string;
		eventDate?: Date;
		pullRequestEventType?: PullRequestEventPullRequestEventType;
		actorArn?: string;

		/**Metadata about the pull request that is used when comparing the pull request source with its destination. */
		pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata;

		/**Information about a change to the status of a pull request. */
		pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata;

		/**Information about an update to the source branch of a pull request. */
		pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata;

		/**Returns information about the change in the merge state for a pull request event. */
		pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata;

		/**Returns information about an event for an approval rule. */
		approvalRuleEventMetadata?: ApprovalRuleEventMetadata;

		/**Returns information about a change in the approval state for a pull request. */
		approvalStateChangedEventMetadata?: ApprovalStateChangedEventMetadata;

		/**Returns information about an override event for approval rules for a pull request. */
		approvalRuleOverriddenEventMetadata?: ApprovalRuleOverriddenEventMetadata;
	}

	export enum PullRequestEventPullRequestEventType { PULL_REQUEST_CREATED = 0, PULL_REQUEST_STATUS_CHANGED = 1, PULL_REQUEST_SOURCE_REFERENCE_UPDATED = 2, PULL_REQUEST_MERGE_STATE_CHANGED = 3, PULL_REQUEST_APPROVAL_RULE_CREATED = 4, PULL_REQUEST_APPROVAL_RULE_UPDATED = 5, PULL_REQUEST_APPROVAL_RULE_DELETED = 6, PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN = 7, PULL_REQUEST_APPROVAL_STATE_CHANGED = 8 }


	/**Returns information about a pull request target. */
	export interface PullRequestTarget {
		repositoryName?: string;
		sourceReference?: string;
		destinationReference?: string;
		destinationCommit?: string;
		sourceCommit?: string;
		mergeBase?: string;

		/**Returns information about a merge or potential merge between a source reference and a destination reference in a pull request. */
		mergeMetadata?: MergeMetadata;
	}


	/**Information about a file added or updated as part of a commit. */
	export interface PutFileEntry {
		filePath: string;
		fileMode?: PutFileEntryFileMode;
		fileContent?: string;

		/**Information about a source file that is part of changes made in a commit. */
		sourceFile?: SourceFileSpecifier;
	}

	export enum PutFileEntryFileMode { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }


	/**Information about a source file that is part of changes made in a commit. */
	export interface SourceFileSpecifier {
		filePath: string;
		isMove?: boolean;
	}


	/**Information about a replacement content entry in the conflict of a merge or pull request operation. */
	export interface ReplaceContentEntry {
		filePath: string;
		replacementType: ReplaceContentEntryReplacementType;
		content?: string;
		fileMode?: ReplaceContentEntryFileMode;
	}

	export enum ReplaceContentEntryReplacementType { KEEP_BASE = 0, KEEP_SOURCE = 1, KEEP_DESTINATION = 2, USE_NEW_CONTENT = 3 }

	export enum ReplaceContentEntryFileMode { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }

	export enum ReplacementTypeEnum { KEEP_BASE = 0, KEEP_SOURCE = 1, KEEP_DESTINATION = 2, USE_NEW_CONTENT = 3 }


	/**Information about a repository name and ID. */
	export interface RepositoryNameIdPair {
		repositoryName?: string;
		repositoryId?: string;
	}


	/**Information about a trigger for a repository. */
	export interface RepositoryTrigger {
		name: string;
		destinationArn: string;
		customData?: string;
		branches?: Array<BranchName>;
		events: Array<RepositoryTriggerEventEnum>;
	}

	export enum RepositoryTriggerEventEnum { all = 0, updateReference = 1, createReference = 2, deleteReference = 3 }


	/**A trigger failed to run. */
	export interface RepositoryTriggerExecutionFailure {
		trigger?: string;
		failureMessage?: string;
	}


	/**Information about the file mode changes. */
	export interface SetFileModeEntry {
		filePath: string;
		fileMode: SetFileModeEntryFileMode;
	}

	export enum SetFileModeEntryFileMode { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }


	/**Returns information about a submodule reference in a repository folder. */
	export interface SubModule {
		commitId?: string;
		absolutePath?: string;
		relativePath?: string;
	}


	/**Returns information about a symbolic link in a repository folder. */
	export interface SymbolicLink {
		blobId?: string;
		absolutePath?: string;
		relativePath?: string;
		fileMode?: SymbolicLinkFileMode;
	}

	export enum SymbolicLinkFileMode { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }


	/**Returns information about a target for a pull request. */
	export interface Target {
		repositoryName: string;
		sourceReference: string;
		destinationReference?: string;
	}

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository
		 * @return {void} Success
		 */
		AssociateApprovalRuleTemplateWithRepository(requestBody: AssociateApprovalRuleTemplateWithRepositoryInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an association between an approval rule template and one or more specified repositories.
		 * Post /#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories
		 * @return {BatchAssociateApprovalRuleTemplateWithRepositoriesOutput} Success
		 */
		BatchAssociateApprovalRuleTemplateWithRepositories(requestBody: BatchAssociateApprovalRuleTemplateWithRepositoriesInput, headersHandler?: () => {[header: string]: string}): Promise<BatchAssociateApprovalRuleTemplateWithRepositoriesOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.
		 * Post /#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts
		 * @return {BatchDescribeMergeConflictsOutput} Success
		 */
		BatchDescribeMergeConflicts(requestBody: BatchDescribeMergeConflictsInput, headersHandler?: () => {[header: string]: string}): Promise<BatchDescribeMergeConflictsOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Removes the association between an approval rule template and one or more specified repositories.
		 * Post /#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories
		 * @return {BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput} Success
		 */
		BatchDisassociateApprovalRuleTemplateFromRepositories(requestBody: BatchDisassociateApprovalRuleTemplateFromRepositoriesInput, headersHandler?: () => {[header: string]: string}): Promise<BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about the contents of one or more commits in a repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.BatchGetCommits
		 * @return {BatchGetCommitsOutput} Success
		 */
		BatchGetCommits(requestBody: BatchGetCommitsInput, headersHandler?: () => {[header: string]: string}): Promise<BatchGetCommitsOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.BatchGetCommits', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
		 * Post /#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories
		 * @return {BatchGetRepositoriesOutput} Success
		 */
		BatchGetRepositories(requestBody: BatchGetRepositoriesInput, headersHandler?: () => {[header: string]: string}): Promise<BatchGetRepositoriesOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.
		 * Post /#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate
		 * @return {CreateApprovalRuleTemplateOutput} Success
		 */
		CreateApprovalRuleTemplate(requestBody: CreateApprovalRuleTemplateInput, headersHandler?: () => {[header: string]: string}): Promise<CreateApprovalRuleTemplateOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>
		 * Post /#X-Amz-Target=CodeCommit_20150413.CreateBranch
		 * @return {void} Success
		 */
		CreateBranch(requestBody: CreateBranchInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.CreateBranch', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a commit for a repository on the tip of a specified branch.
		 * Post /#X-Amz-Target=CodeCommit_20150413.CreateCommit
		 * @return {CreateCommitOutput} Success
		 */
		CreateCommit(requestBody: CreateCommitInput, headersHandler?: () => {[header: string]: string}): Promise<CreateCommitOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.CreateCommit', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a pull request in the specified repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.CreatePullRequest
		 * @return {CreatePullRequestOutput} Success
		 */
		CreatePullRequest(requestBody: CreatePullRequestInput, headersHandler?: () => {[header: string]: string}): Promise<CreatePullRequestOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.CreatePullRequest', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates an approval rule for a pull request.
		 * Post /#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule
		 * @return {CreatePullRequestApprovalRuleOutput} Success
		 */
		CreatePullRequestApprovalRule(requestBody: CreatePullRequestApprovalRuleInput, headersHandler?: () => {[header: string]: string}): Promise<CreatePullRequestApprovalRuleOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a new, empty repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.CreateRepository
		 * @return {CreateRepositoryOutput} Success
		 */
		CreateRepository(requestBody: CreateRepositoryInput, headersHandler?: () => {[header: string]: string}): Promise<CreateRepositoryOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.CreateRepository', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>
		 * Post /#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit
		 * @return {CreateUnreferencedMergeCommitOutput} Success
		 */
		CreateUnreferencedMergeCommit(requestBody: CreateUnreferencedMergeCommitInput, headersHandler?: () => {[header: string]: string}): Promise<CreateUnreferencedMergeCommitOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.
		 * Post /#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate
		 * @return {DeleteApprovalRuleTemplateOutput} Success
		 */
		DeleteApprovalRuleTemplate(requestBody: DeleteApprovalRuleTemplateInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteApprovalRuleTemplateOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a branch from a repository, unless that branch is the default branch for the repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.DeleteBranch
		 * @return {DeleteBranchOutput} Success
		 */
		DeleteBranch(requestBody: DeleteBranchInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteBranchOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.DeleteBranch', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes the content of a comment made on a change, file, or commit in a repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent
		 * @return {DeleteCommentContentOutput} Success
		 */
		DeleteCommentContent(requestBody: DeleteCommentContentInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteCommentContentOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.
		 * Post /#X-Amz-Target=CodeCommit_20150413.DeleteFile
		 * @return {DeleteFileOutput} Success
		 */
		DeleteFile(requestBody: DeleteFileInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteFileOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.DeleteFile', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.
		 * Post /#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule
		 * @return {DeletePullRequestApprovalRuleOutput} Success
		 */
		DeletePullRequestApprovalRule(requestBody: DeletePullRequestApprovalRuleInput, headersHandler?: () => {[header: string]: string}): Promise<DeletePullRequestApprovalRuleOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>
		 * Post /#X-Amz-Target=CodeCommit_20150413.DeleteRepository
		 * @return {DeleteRepositoryOutput} Success
		 */
		DeleteRepository(requestBody: DeleteRepositoryInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteRepositoryOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.DeleteRepository', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.
		 * Post /#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts
		 * @param {string} maxMergeHunks Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeMergeConflictsOutput} Success
		 */
		DescribeMergeConflicts(maxMergeHunks: string, nextToken: string, requestBody: DescribeMergeConflictsInput, headersHandler?: () => {[header: string]: string}): Promise<DescribeMergeConflictsOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts?maxMergeHunks=' + (maxMergeHunks == null ? '' : encodeURIComponent(maxMergeHunks)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about one or more pull request events.
		 * Post /#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribePullRequestEventsOutput} Success
		 */
		DescribePullRequestEvents(maxResults: string, nextToken: string, requestBody: DescribePullRequestEventsInput, headersHandler?: () => {[header: string]: string}): Promise<DescribePullRequestEventsOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.
		 * Post /#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository
		 * @return {void} Success
		 */
		DisassociateApprovalRuleTemplateFromRepository(requestBody: DisassociateApprovalRuleTemplateFromRepositoryInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Evaluates whether a pull request has met all the conditions specified in its associated approval rules.
		 * Post /#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules
		 * @return {EvaluatePullRequestApprovalRulesOutput} Success
		 */
		EvaluatePullRequestApprovalRules(requestBody: EvaluatePullRequestApprovalRulesInput, headersHandler?: () => {[header: string]: string}): Promise<EvaluatePullRequestApprovalRulesOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about a specified approval rule template.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate
		 * @return {GetApprovalRuleTemplateOutput} Success
		 */
		GetApprovalRuleTemplate(requestBody: GetApprovalRuleTemplateInput, headersHandler?: () => {[header: string]: string}): Promise<GetApprovalRuleTemplateOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns the base-64 encoded content of an individual blob in a repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetBlob
		 * @return {GetBlobOutput} Success
		 */
		GetBlob(requestBody: GetBlobInput, headersHandler?: () => {[header: string]: string}): Promise<GetBlobOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetBlob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about a repository branch, including its name and the last commit ID.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetBranch
		 * @return {GetBranchOutput} Success
		 */
		GetBranch(requestBody: GetBranchInput, headersHandler?: () => {[header: string]: string}): Promise<GetBranchOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetBranch', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns the content of a comment made on a change, file, or commit in a repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetComment
		 * @return {GetCommentOutput} Success
		 */
		GetComment(requestBody: GetCommentInput, headersHandler?: () => {[header: string]: string}): Promise<GetCommentOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetComment', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about comments made on the comparison between two commits.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetCommentsForComparedCommitOutput} Success
		 */
		GetCommentsForComparedCommit(maxResults: string, nextToken: string, requestBody: GetCommentsForComparedCommitInput, headersHandler?: () => {[header: string]: string}): Promise<GetCommentsForComparedCommitOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns comments made on a pull request.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetCommentsForPullRequestOutput} Success
		 */
		GetCommentsForPullRequest(maxResults: string, nextToken: string, requestBody: GetCommentsForPullRequestInput, headersHandler?: () => {[header: string]: string}): Promise<GetCommentsForPullRequestOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about a commit, including commit message and committer information.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetCommit
		 * @return {GetCommitOutput} Success
		 */
		GetCommit(requestBody: GetCommitInput, headersHandler?: () => {[header: string]: string}): Promise<GetCommitOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetCommit', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetDifferences
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetDifferencesOutput} Success
		 */
		GetDifferences(MaxResults: string, NextToken: string, requestBody: GetDifferencesInput, headersHandler?: () => {[header: string]: string}): Promise<GetDifferencesOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetDifferences?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns the base-64 encoded contents of a specified file and its metadata.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetFile
		 * @return {GetFileOutput} Success
		 */
		GetFile(requestBody: GetFileInput, headersHandler?: () => {[header: string]: string}): Promise<GetFileOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetFile', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns the contents of a specified folder in a repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetFolder
		 * @return {GetFolderOutput} Success
		 */
		GetFolder(requestBody: GetFolderInput, headersHandler?: () => {[header: string]: string}): Promise<GetFolderOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetFolder', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about a specified merge commit.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetMergeCommit
		 * @return {GetMergeCommitOutput} Success
		 */
		GetMergeCommit(requestBody: GetMergeCommitInput, headersHandler?: () => {[header: string]: string}): Promise<GetMergeCommitOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetMergeCommit', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts
		 * @param {string} maxConflictFiles Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetMergeConflictsOutput} Success
		 */
		GetMergeConflicts(maxConflictFiles: string, nextToken: string, requestBody: GetMergeConflictsInput, headersHandler?: () => {[header: string]: string}): Promise<GetMergeConflictsOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts?maxConflictFiles=' + (maxConflictFiles == null ? '' : encodeURIComponent(maxConflictFiles)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetMergeOptions
		 * @return {GetMergeOptionsOutput} Success
		 */
		GetMergeOptions(requestBody: GetMergeOptionsInput, headersHandler?: () => {[header: string]: string}): Promise<GetMergeOptionsOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetMergeOptions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets information about a pull request in a specified repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetPullRequest
		 * @return {GetPullRequestOutput} Success
		 */
		GetPullRequest(requestBody: GetPullRequestInput, headersHandler?: () => {[header: string]: string}): Promise<GetPullRequestOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetPullRequest', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates
		 * @return {GetPullRequestApprovalStatesOutput} Success
		 */
		GetPullRequestApprovalStates(requestBody: GetPullRequestApprovalStatesInput, headersHandler?: () => {[header: string]: string}): Promise<GetPullRequestApprovalStatesOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState
		 * @return {GetPullRequestOverrideStateOutput} Success
		 */
		GetPullRequestOverrideState(requestBody: GetPullRequestOverrideStateInput, headersHandler?: () => {[header: string]: string}): Promise<GetPullRequestOverrideStateOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetRepository
		 * @return {GetRepositoryOutput} Success
		 */
		GetRepository(requestBody: GetRepositoryInput, headersHandler?: () => {[header: string]: string}): Promise<GetRepositoryOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetRepository', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets information about triggers configured for a repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers
		 * @return {GetRepositoryTriggersOutput} Success
		 */
		GetRepositoryTriggers(requestBody: GetRepositoryTriggersInput, headersHandler?: () => {[header: string]: string}): Promise<GetRepositoryTriggersOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.
		 * Post /#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListApprovalRuleTemplatesOutput} Success
		 */
		ListApprovalRuleTemplates(maxResults: string, nextToken: string, requestBody: ListApprovalRuleTemplatesInput, headersHandler?: () => {[header: string]: string}): Promise<ListApprovalRuleTemplatesOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Lists all approval rule templates that are associated with a specified repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssociatedApprovalRuleTemplatesForRepositoryOutput} Success
		 */
		ListAssociatedApprovalRuleTemplatesForRepository(maxResults: string, nextToken: string, requestBody: ListAssociatedApprovalRuleTemplatesForRepositoryInput, headersHandler?: () => {[header: string]: string}): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets information about one or more branches in a repository.
		 * Post /#X-Amz-Target=CodeCommit_20150413.ListBranches
		 * @param {string} nextToken Pagination token
		 * @return {ListBranchesOutput} Success
		 */
		ListBranches(nextToken: string, requestBody: ListBranchesInput, headersHandler?: () => {[header: string]: string}): Promise<ListBranchesOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.ListBranches?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.
		 * Post /#X-Amz-Target=CodeCommit_20150413.ListPullRequests
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPullRequestsOutput} Success
		 */
		ListPullRequests(maxResults: string, nextToken: string, requestBody: ListPullRequestsInput, headersHandler?: () => {[header: string]: string}): Promise<ListPullRequestsOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.ListPullRequests?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets information about one or more repositories.
		 * Post /#X-Amz-Target=CodeCommit_20150413.ListRepositories
		 * @param {string} nextToken Pagination token
		 * @return {ListRepositoriesOutput} Success
		 */
		ListRepositories(nextToken: string, requestBody: ListRepositoriesInput, headersHandler?: () => {[header: string]: string}): Promise<ListRepositoriesOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.ListRepositories?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Lists all repositories associated with the specified approval rule template.
		 * Post /#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRepositoriesForApprovalRuleTemplateOutput} Success
		 */
		ListRepositoriesForApprovalRuleTemplate(maxResults: string, nextToken: string, requestBody: ListRepositoriesForApprovalRuleTemplateInput, headersHandler?: () => {[header: string]: string}): Promise<ListRepositoriesForApprovalRuleTemplateOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.
		 * Post /#X-Amz-Target=CodeCommit_20150413.ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceInput, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.ListTagsForResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Merges two branches using the fast-forward merge strategy.
		 * Post /#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward
		 * @return {MergeBranchesByFastForwardOutput} Success
		 */
		MergeBranchesByFastForward(requestBody: MergeBranchesByFastForwardInput, headersHandler?: () => {[header: string]: string}): Promise<MergeBranchesByFastForwardOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Merges two branches using the squash merge strategy.
		 * Post /#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash
		 * @return {MergeBranchesBySquashOutput} Success
		 */
		MergeBranchesBySquash(requestBody: MergeBranchesBySquashInput, headersHandler?: () => {[header: string]: string}): Promise<MergeBranchesBySquashOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Merges two specified branches using the three-way merge strategy.
		 * Post /#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay
		 * @return {MergeBranchesByThreeWayOutput} Success
		 */
		MergeBranchesByThreeWay(requestBody: MergeBranchesByThreeWayInput, headersHandler?: () => {[header: string]: string}): Promise<MergeBranchesByThreeWayOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.
		 * Post /#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward
		 * @return {MergePullRequestByFastForwardOutput} Success
		 */
		MergePullRequestByFastForward(requestBody: MergePullRequestByFastForwardInput, headersHandler?: () => {[header: string]: string}): Promise<MergePullRequestByFastForwardOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.
		 * Post /#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash
		 * @return {MergePullRequestBySquashOutput} Success
		 */
		MergePullRequestBySquash(requestBody: MergePullRequestBySquashInput, headersHandler?: () => {[header: string]: string}): Promise<MergePullRequestBySquashOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.
		 * Post /#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay
		 * @return {MergePullRequestByThreeWayOutput} Success
		 */
		MergePullRequestByThreeWay(requestBody: MergePullRequestByThreeWayInput, headersHandler?: () => {[header: string]: string}): Promise<MergePullRequestByThreeWayOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Sets aside (overrides) all approval rule requirements for a specified pull request.
		 * Post /#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules
		 * @return {void} Success
		 */
		OverridePullRequestApprovalRules(requestBody: OverridePullRequestApprovalRulesInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Posts a comment on the comparison between two commits.
		 * Post /#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit
		 * @return {PostCommentForComparedCommitOutput} Success
		 */
		PostCommentForComparedCommit(requestBody: PostCommentForComparedCommitInput, headersHandler?: () => {[header: string]: string}): Promise<PostCommentForComparedCommitOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Posts a comment on a pull request.
		 * Post /#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest
		 * @return {PostCommentForPullRequestOutput} Success
		 */
		PostCommentForPullRequest(requestBody: PostCommentForPullRequestInput, headersHandler?: () => {[header: string]: string}): Promise<PostCommentForPullRequestOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Posts a comment in reply to an existing comment on a comparison between commits or a pull request.
		 * Post /#X-Amz-Target=CodeCommit_20150413.PostCommentReply
		 * @return {PostCommentReplyOutput} Success
		 */
		PostCommentReply(requestBody: PostCommentReplyInput, headersHandler?: () => {[header: string]: string}): Promise<PostCommentReplyOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.PostCommentReply', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.
		 * Post /#X-Amz-Target=CodeCommit_20150413.PutFile
		 * @return {PutFileOutput} Success
		 */
		PutFile(requestBody: PutFileInput, headersHandler?: () => {[header: string]: string}): Promise<PutFileOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.PutFile', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Replaces all triggers for a repository. Used to create or delete triggers.
		 * Post /#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers
		 * @return {PutRepositoryTriggersOutput} Success
		 */
		PutRepositoryTriggers(requestBody: PutRepositoryTriggersInput, headersHandler?: () => {[header: string]: string}): Promise<PutRepositoryTriggersOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
		 * Post /#X-Amz-Target=CodeCommit_20150413.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.TagResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.
		 * Post /#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers
		 * @return {TestRepositoryTriggersOutput} Success
		 */
		TestRepositoryTriggers(requestBody: TestRepositoryTriggersInput, headersHandler?: () => {[header: string]: string}): Promise<TestRepositoryTriggersOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
		 * Post /#X-Amz-Target=CodeCommit_20150413.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.UntagResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.
		 * Post /#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent
		 * @return {UpdateApprovalRuleTemplateContentOutput} Success
		 */
		UpdateApprovalRuleTemplateContent(requestBody: UpdateApprovalRuleTemplateContentInput, headersHandler?: () => {[header: string]: string}): Promise<UpdateApprovalRuleTemplateContentOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates the description for a specified approval rule template.
		 * Post /#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription
		 * @return {UpdateApprovalRuleTemplateDescriptionOutput} Success
		 */
		UpdateApprovalRuleTemplateDescription(requestBody: UpdateApprovalRuleTemplateDescriptionInput, headersHandler?: () => {[header: string]: string}): Promise<UpdateApprovalRuleTemplateDescriptionOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates the name of a specified approval rule template.
		 * Post /#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName
		 * @return {UpdateApprovalRuleTemplateNameOutput} Success
		 */
		UpdateApprovalRuleTemplateName(requestBody: UpdateApprovalRuleTemplateNameInput, headersHandler?: () => {[header: string]: string}): Promise<UpdateApprovalRuleTemplateNameOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Replaces the contents of a comment.
		 * Post /#X-Amz-Target=CodeCommit_20150413.UpdateComment
		 * @return {UpdateCommentOutput} Success
		 */
		UpdateComment(requestBody: UpdateCommentInput, headersHandler?: () => {[header: string]: string}): Promise<UpdateCommentOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.UpdateComment', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>
		 * Post /#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch
		 * @return {void} Success
		 */
		UpdateDefaultBranch(requestBody: UpdateDefaultBranchInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers.
		 * Post /#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent
		 * @return {UpdatePullRequestApprovalRuleContentOutput} Success
		 */
		UpdatePullRequestApprovalRuleContent(requestBody: UpdatePullRequestApprovalRuleContentInput, headersHandler?: () => {[header: string]: string}): Promise<UpdatePullRequestApprovalRuleContentOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.
		 * Post /#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState
		 * @return {void} Success
		 */
		UpdatePullRequestApprovalState(requestBody: UpdatePullRequestApprovalStateInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces the contents of the description of a pull request.
		 * Post /#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription
		 * @return {UpdatePullRequestDescriptionOutput} Success
		 */
		UpdatePullRequestDescription(requestBody: UpdatePullRequestDescriptionInput, headersHandler?: () => {[header: string]: string}): Promise<UpdatePullRequestDescriptionOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates the status of a pull request.
		 * Post /#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus
		 * @return {UpdatePullRequestStatusOutput} Success
		 */
		UpdatePullRequestStatus(requestBody: UpdatePullRequestStatusInput, headersHandler?: () => {[header: string]: string}): Promise<UpdatePullRequestStatusOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Replaces the title of a pull request.
		 * Post /#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle
		 * @return {UpdatePullRequestTitleOutput} Success
		 */
		UpdatePullRequestTitle(requestBody: UpdatePullRequestTitleInput, headersHandler?: () => {[header: string]: string}): Promise<UpdatePullRequestTitleOutput> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
		 * Post /#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription
		 * @return {void} Success
		 */
		UpdateRepositoryDescription(requestBody: UpdateRepositoryDescriptionInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.
		 * Post /#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName
		 * @return {void} Success
		 */
		UpdateRepositoryName(requestBody: UpdateRepositoryNameInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

