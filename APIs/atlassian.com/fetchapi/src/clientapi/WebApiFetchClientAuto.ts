export namespace My_Demo_Client {
	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Returns all application properties or a single application property.
		 * Get application-properties
		 * @param {string} key The key of the application property.
		 * @param {string} keyFilter When a key isn't provided, this filters the list of results by the application property key using a regular expression. For example, using jira.lf.* will return all application properties with keys that start with jira.lf..
		 * @param {string} permissionLevel The permission level of all items being returned in the list.
		 * @return {void} Returned if the request is successful.
		 */
		Application_propertiesGetByKeyAndKeyFilterAndPermissionLevel(key: string, keyFilter: string, permissionLevel: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'application-properties?key=' + (key == null ? '' : encodeURIComponent(key)) + '&keyFilter=' + (keyFilter == null ? '' : encodeURIComponent(keyFilter)) + '&permissionLevel=' + (permissionLevel == null ? '' : encodeURIComponent(permissionLevel)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the application properties that are accessible on the Advanced Settings page. To navigate to the Advanced Settings page in Jira, choose the Jira icon > Jira settings > System, General Configuration and then click Advanced Settings (in the upper right).
		 * Get application-properties/advanced-settings
		 * @return {void} Returned if the request is successful.
		 */
		Application_propertiesAdvanced_settingsGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'application-properties/advanced-settings', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Changes the value of an application property. For example, you can change the value of the jira.clone.prefix from its default value of CLONE - to Clone - if you prefer sentence case capitalization. Editable properties are described below along with their default values.
		 * Put application-properties/{id}
		 * @param {string} id The key of the application property to update.
		 * @return {void} Returned if the request is successful.
		 */
		Application_propertiesPutById(id: string, requestBody: Application_propertiesPutByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'application-properties/' + (id == null ? '' : encodeURIComponent(id)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns all application roles. In Jira, application roles are managed using the Application access configuration page.
		 * Get applicationrole
		 * @return {void} Returned if the request is successful.
		 */
		ApplicationroleGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'applicationrole', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an application role.
		 * Get applicationrole/{key}
		 * @param {string} key The key of the application role. Use the Get all application roles method to get the key for each application role.
		 * @return {void} Returns the ApplicationRole if it exists.
		 */
		ApplicationroleGetByKey(key: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'applicationrole/' + (key == null ? '' : encodeURIComponent(key)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the global attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed.
		 * Get attachment/meta
		 * @return {void} Returned if the request is successful.
		 */
		AttachmentMetaGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'attachment/meta', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes an attachment from an issue.
		 * Delete attachment/{id}
		 * @param {string} id The ID of the attachment.
		 * @return {void} 
		 */
		AttachmentDeleteById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'attachment/' + (id == null ? '' : encodeURIComponent(id)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the metadata for an attachment. Note that the attachment itself is not returned.
		 * Get attachment/{id}
		 * @param {string} id The ID of the attachment.
		 * @return {void} Returned if the request is successful.
		 */
		AttachmentGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'attachment/' + (id == null ? '' : encodeURIComponent(id)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported.
		 * Get attachment/{id}/expand/human
		 * @param {string} id The ID of the attachment.
		 * @return {void} Returned if the request is successful. If an empty list is returned in the response, the attachment is empty, corrupt, or not an archive.
		 */
		AttachmentExpandHumanGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'attachment/' + (id == null ? '' : encodeURIComponent(id)) + '/expand/human', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is supported.
		 * Get attachment/{id}/expand/raw
		 * @param {string} id The ID of the attachment.
		 * @return {void} Returned if the request is successful. If an empty list is returned in the response, the attachment is empty, corrupt, or not an archive.
		 */
		AttachmentExpandRawGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'attachment/' + (id == null ? '' : encodeURIComponent(id)) + '/expand/raw', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of audit records. The list can be filtered to include items:
		 * Get auditing/record
		 * @param {string} filter The query string.
		 * @param {string} from The date and time on or after which returned audit records must have been created. If to is provided from must be before to or the result set will be empty.
		 * @param {number} limit The maximum number of results to return. The maximum is 1000.
		 * @param {number} offset The number of records to skip before returning the first result.
		 * @param {string} to The date and time on or before which returned audit results must have been created. If from is provided to must be after from or the result set will be empty.
		 * @return {void} Returned if the request is successful.
		 */
		AuditingRecordGetByFilterAndFromAndLimitAndOffsetAndTo(filter: string, from: string, limit: number, offset: number, to: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'auditing/record?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&limit=' + limit + '&offset=' + offset + '&to=' + (to == null ? '' : encodeURIComponent(to)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user.
		 * Get avatar/{type}/system
		 * @param {string} type The avatar type.
		 * @return {void} Returned if the request is successful.
		 */
		AvatarSystemGetByType(type: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'avatar/' + (type == null ? '' : encodeURIComponent(type)) + '/system', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the comments for a list of comment IDs.
		 * Post comment/list
		 * @param {string} expand Use expand to include additional information about comments in the response. This parameter accepts multiple values separated by a comma:
		 * @return {void} Returned if the request is successful.
		 */
		CommentListPostByExpand(expand: string, requestBody: CommentListPostByExpandBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'comment/list?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns the keys of all the properties of a comment.
		 * Get comment/{commentId}/properties
		 * @param {string} commentId The ID of the comment.
		 * @return {void} Returned if the request is successful.
		 */
		CommentPropertiesGetByCommentId(commentId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'comment/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/properties', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a comment property.
		 * Delete comment/{commentId}/properties/{propertyKey}
		 * @param {string} commentId The ID of the comment.
		 * @param {string} propertyKey The key of the property.
		 * @return {void} 
		 */
		CommentPropertiesDeleteByCommentIdAndPropertyKey(commentId: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'comment/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the value of a comment property.
		 * Get comment/{commentId}/properties/{propertyKey}
		 * @param {string} commentId The ID of the comment.
		 * @param {string} propertyKey The key of the property.
		 * @return {void} Returned if the request is successful.
		 */
		CommentPropertiesGetByCommentIdAndPropertyKey(commentId: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'comment/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment.
		 * Put comment/{commentId}/properties/{propertyKey}
		 * @param {string} commentId The ID of the comment.
		 * @param {string} propertyKey The key of the property. The maximum length is 255 characters.
		 * @return {void} Returned if the comment property is updated.
		 */
		CommentPropertiesPutByCommentIdAndPropertyKey(commentId: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'comment/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a component. Use components to provide containers for issues within a project. Permissions required: Any of the following:
		 * Post component
		 * @return {void} 
		 */
		ComponentPost(requestBody: ComponentPostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'component', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a component. Permissions required: Any of the following:
		 * Delete component/{id}
		 * @param {string} id The ID of the component.
		 * @param {string} moveIssuesTo The ID of the component to replace the deleted component. If this value is null no replacement is made.
		 * @return {void} 
		 */
		ComponentDeleteByIdAndMoveIssuesTo(id: string, moveIssuesTo: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'component/' + (id == null ? '' : encodeURIComponent(id)) + '&moveIssuesTo=' + (moveIssuesTo == null ? '' : encodeURIComponent(moveIssuesTo)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a component. Permissions required: Browse projects project permission.
		 * Get component/{id}
		 * @param {string} id The ID of the component.
		 * @return {void} Returned if the request is successful.
		 */
		ComponentGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'component/' + (id == null ? '' : encodeURIComponent(id)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a component. Any fields included in the request are overwritten. If leadUserName is an empty string ("") the component lead is removed. Permissions required: Any of the following:
		 * Put component/{id}
		 * @return {void} Returned if the request is successful.
		 */
		ComponentPutById(id: string, requestBody: ComponentPutByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'component/' + (id == null ? '' : encodeURIComponent(id)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns the counts of issues assigned to the component. Permissions required: Permission to access Jira.
		 * Get component/{id}/relatedIssueCounts
		 * @param {string} id The ID of the component.
		 * @return {void} Returned if the request is successful.
		 */
		ComponentRelatedIssueCountsGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'component/' + (id == null ? '' : encodeURIComponent(id)) + '/relatedIssueCounts', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the global settings in Jira. These settings determine whether optional features (for example, sub-tasks, time tracking, and others) are enabled. If time tracking is enabled, this method also returns the time tracking configuration.
		 * Get configuration
		 * @return {void} Returned if the request is successful.
		 */
		ConfigurationGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'configuration', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Disables time tracking.
		 * Delete configuration/timetracking
		 * @return {void} 
		 */
		ConfigurationTimetrackingDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'configuration/timetracking', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.
		 * Get configuration/timetracking
		 * @return {void} Returned if the request is successful and time tracking is enabled.
		 */
		ConfigurationTimetrackingGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'configuration/timetracking', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Selects a time tracking provider.
		 * Put configuration/timetracking
		 * @return {void} 
		 */
		ConfigurationTimetrackingPut(requestBody: ConfigurationTimetrackingPutBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'configuration/timetracking', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns all time tracking providers. By default, Jira only has one time tracking provider: JIRA provided time tracking. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the Time Tracking Provider module.
		 * Get configuration/timetracking/list
		 * @return {void} Returned if the request is successful.
		 */
		ConfigurationTimetrackingListGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'configuration/timetracking/list', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see Configuring time tracking.
		 * Get configuration/timetracking/options
		 * @return {void} Returned if the request is successful.
		 */
		ConfigurationTimetrackingOptionsGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'configuration/timetracking/options', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the time tracking settings.
		 * Put configuration/timetracking/options
		 * @return {void} Returned if the request is successful.
		 */
		ConfigurationTimetrackingOptionsPut(requestBody: ConfigurationTimetrackingOptionsPutBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'configuration/timetracking/options', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns a custom field option. For example, an option in a cascading select list.
		 * Get customFieldOption/{id}
		 * @param {string} id The ID of the custom field option. To find this ID, configure the custom field and edit its options in Jira. Click the option and its ID will show in the URL as the selectedParentOptionId parameter.
		 * @return {void} Returned if the request is successful.
		 */
		CustomFieldOptionGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'customFieldOption/' + (id == null ? '' : encodeURIComponent(id)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of dashboards owned by or shared with the user. The list may be filtered to include only favorite or owned dashboards.
		 * Get dashboard
		 * @param {string} filter The filter applied to the list of dashboards. Valid values are:
		 * @param {number} maxResults The maximum number of items to return per page. Maximum is 1000.
		 * @param {number} startAt The index of the first item to return in a page of results (page offset).
		 * @return {void} Returned if the request is successful.
		 */
		DashboardGetByFilterAndMaxResultsAndStartAt(filter: string, maxResults: number, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'dashboard?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the keys of all properties for a dashboard item.
		 * Get dashboard/{dashboardId}/items/{itemId}/properties
		 * @param {string} dashboardId The ID of the dashboard.
		 * @param {string} itemId The ID of the dashboard item.
		 * @return {void} Returned if the request is successful.
		 */
		DashboardItemsPropertiesGetByDashboardIdAndItemId(dashboardId: string, itemId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'dashboard/' + (dashboardId == null ? '' : encodeURIComponent(dashboardId)) + '/items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/properties', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a dashboard item property.
		 * Delete dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}
		 * @param {string} dashboardId The ID of the dashboard.
		 * @param {string} itemId The ID of the dashboard item.
		 * @param {string} propertyKey The key of the dashboard item property.
		 * @return {void} 
		 */
		DashboardItemsPropertiesDeleteByDashboardIdAndItemIdAndPropertyKey(dashboardId: string, itemId: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'dashboard/' + (dashboardId == null ? '' : encodeURIComponent(dashboardId)) + '/items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the key and value of a dashboard item property.
		 * Get dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}
		 * @param {string} dashboardId The ID of the dashboard.
		 * @param {string} itemId The ID of the dashboard item.
		 * @param {string} propertyKey The key of the dashboard item property.
		 * @return {void} Returned if the request is successful.
		 */
		DashboardItemsPropertiesGetByDashboardIdAndItemIdAndPropertyKey(dashboardId: string, itemId: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'dashboard/' + (dashboardId == null ? '' : encodeURIComponent(dashboardId)) + '/items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the value of a dashboard item property. Use this resource in apps to store custom data against a dashboard item.
		 * Put dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}
		 * @param {string} dashboardId The ID of the dashboard.
		 * @param {string} itemId The ID of the dashboard item.
		 * @param {string} propertyKey The key of the dashboard item property. The maximum length of the key is 255 bytes.
		 * @return {void} Returned if the dashboard item property is updated.
		 */
		DashboardItemsPropertiesPutByDashboardIdAndItemIdAndPropertyKey(dashboardId: string, itemId: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'dashboard/' + (dashboardId == null ? '' : encodeURIComponent(dashboardId)) + '/items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a dashboard.
		 * Get dashboard/{id}
		 * @param {string} id The ID of the dashboard.
		 * @return {void} Returned if the request is successful.
		 */
		DashboardGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'dashboard/' + (id == null ? '' : encodeURIComponent(id)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Evaluates a Jira expression and returns its value.
		 * Post expression/eval
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
		 * @return {void} Returned if the expression evaluated successfully. The result can be any JSON, not only a primitive value but also a list or object.
		 */
		ExpressionEvalPostByExpand(expand: string, requestBody: ExpressionEvalPostByExpandBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'expression/eval?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns all issue fields in Jira, both system and custom fields.
		 * Get field
		 * @return {void} Returned if the requested fields are returned.
		 */
		FieldGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'field', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a custom field.
		 * Post field
		 * @return {void} 
		 */
		FieldPost(requestBody: FieldPostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'field', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns all options defined for a select list issue field. A select list issue field is a type of issue field that allows a user to select an value from a list of options.
		 * Get field/{fieldKey}/option
		 * @param {string} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
		 * @param {number} maxResults The maximum number of items to return per page. For example, 20.
		 * @param {number} startAt The starting index of the returned objects. For example, 1.
		 * @return {void} Returned if the requested options are returned.
		 */
		FieldOptionGetByFieldKeyAndMaxResultsAndStartAt(fieldKey: string, maxResults: number, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'field/' + (fieldKey == null ? '' : encodeURIComponent(fieldKey)) + '/option&maxResults=' + maxResults + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates an option for a select list issue field.
		 * Post field/{fieldKey}/option
		 * @return {void} Returned if the option has been created.
		 */
		FieldOptionPostByFieldKey(fieldKey: string, requestBody: FieldOptionPostByFieldKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'field/' + (fieldKey == null ? '' : encodeURIComponent(fieldKey)) + '/option', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns options defined for a select list issue field that can be viewed and selected by the currently logged in user.
		 * Get field/{fieldKey}/option/suggestions/edit
		 * @param {string} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
		 * @param {number} maxResults The maximum number of items to return per page. For example, 20.
		 * @param {number} projectId Filters the results to options that are only available in the specified project. For example, 10000.
		 * @param {number} startAt The starting index of the returned objects. For example, 1.
		 * @return {void} Returned if the requested options are returned.
		 */
		FieldOptionSuggestionsEditGetByFieldKeyAndMaxResultsAndProjectIdAndStartAt(fieldKey: string, maxResults: number, projectId: number, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'field/' + (fieldKey == null ? '' : encodeURIComponent(fieldKey)) + '/option/suggestions/edit&maxResults=' + maxResults + '&projectId=' + projectId + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns options defined for a select list issue field that can be viewed by the currently logged in user.
		 * Get field/{fieldKey}/option/suggestions/search
		 * @param {string} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
		 * @param {number} maxResults The maximum number of items to return per page. For example, 20.
		 * @param {number} projectId Filters the results to options that are only available in the specified project. For example, 10000.
		 * @param {number} startAt The starting index of the returned objects. For example, 1.
		 * @return {void} Returned if the requested options are returned.
		 */
		FieldOptionSuggestionsSearchGetByFieldKeyAndMaxResultsAndProjectIdAndStartAt(fieldKey: string, maxResults: number, projectId: number, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'field/' + (fieldKey == null ? '' : encodeURIComponent(fieldKey)) + '/option/suggestions/search&maxResults=' + maxResults + '&projectId=' + projectId + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes an option from a select list issue field.
		 * Delete field/{fieldKey}/option/{optionId}
		 * @param {string} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
		 * @param {number} optionId The ID of the option to be deleted. For example, 3.
		 * @return {void} 
		 */
		FieldOptionDeleteByFieldKeyAndOptionId(fieldKey: string, optionId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'field/' + (fieldKey == null ? '' : encodeURIComponent(fieldKey)) + '/option/' + optionId, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an option from a select list issue field.
		 * Get field/{fieldKey}/option/{optionId}
		 * @param {string} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
		 * @param {number} optionId The ID of the option to be returned. For example, 3.
		 * @return {void} Returned if the requested option is returned.
		 */
		FieldOptionGetByFieldKeyAndOptionId(fieldKey: string, optionId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'field/' + (fieldKey == null ? '' : encodeURIComponent(fieldKey)) + '/option/' + optionId, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates an option for a select list issue field. If the option does not exist, a new option is created.
		 * Put field/{fieldKey}/option/{optionId}
		 * @param {string} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
		 * @param {number} optionId The ID of the option to be updated. For example, 3.
		 * @return {void} Returned if the option has been updated or created.
		 */
		FieldOptionPutByFieldKeyAndOptionId(fieldKey: string, optionId: number, requestBody: FieldOptionPutByFieldKeyAndOptionIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'field/' + (fieldKey == null ? '' : encodeURIComponent(fieldKey)) + '/option/' + optionId, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deselects a select list issue field option in all issues that it has been selected in. A different option can be selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query.
		 * Delete field/{fieldKey}/option/{optionId}/issue
		 * @param {string} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
		 * @param {string} jql A JQL query that specifies the issues to be updated. For example, project=10000.
		 * @param {number} optionId The ID of the option to be deselected. For example, 3.
		 * @param {number} replaceWith The ID of the option that will replace the currently selected option. For example, 2.
		 * @return {void} 
		 */
		FieldOptionIssueDeleteByFieldKeyAndJqlAndOptionIdAndReplaceWith(fieldKey: string, jql: string, optionId: number, replaceWith: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'field/' + (fieldKey == null ? '' : encodeURIComponent(fieldKey)) + '/option/' + optionId + '/issue&jql=' + (jql == null ? '' : encodeURIComponent(jql)) + '&replaceWith=' + replaceWith, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all filters. Deprecated, use Search for filters that supports search and pagination. Permissions required: None, however only the following filters are returned:
		 * Get filter
		 * @param {string} expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
		 * @return {void} Returned if the request is successful.
		 */
		FilterGetByExpand(expand: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new filter. The new filter is not shared and not selected as a favorite. Permissions required: Permission to log in to Jira.
		 * Post filter
		 * @param {string} expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
		 * @return {void} Returned if the request is successful.
		 */
		FilterPostByExpand(expand: string, requestBody: FilterPostByExpandBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns the default sharing settings for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).
		 * Get filter/defaultShareScope
		 * @return {void} Returned if the request is successful.
		 */
		FilterDefaultShareScopeGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/defaultShareScope', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the default sharing for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).
		 * Put filter/defaultShareScope
		 * @return {void} Returned if the request is successful.
		 */
		FilterDefaultShareScopePut(requestBody: FilterDefaultShareScopePutBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/defaultShareScope', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns the favorite filters of the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group).
		 * Get filter/favourite
		 * @param {string} expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
		 * @return {void} Returned if the request is successful.
		 */
		FilterFavouriteGetByExpand(expand: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/favourite?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the filters owned by the calling user. If includeFavourites is true, the user's favorite filters are also returned. Permissions required: Permission to log in to Jira (i.e., member of the users group).
		 * Get filter/my
		 * @param {string} expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
		 * @param {boolean} includeFavourites Include the user's favorite filters in the response.
		 * @return {void} Returned if the request is successful.
		 */
		FilterMyGetByExpandAndIncludeFavourites(expand: string, includeFavourites: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/my?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&includeFavourites=' + includeFavourites, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for filters. This method is similar to Get filters except that you can refine the results to include filters that have specific attributes. For example, filters with a particular name. Permissions required: None, however only the following filters are returned (if no search parameters are set):
		 * Get filter/search
		 * @param {string} accountId Returns filters with an owner that exactly matches accountId of the owner. This parameter cannot be used with the owner parameter.
		 * @param {string} expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
		 * @param {string} filterName Returns filters with a name that partially matches filterName.
		 * @param {string} groupname Returns filters that are shared with a group that has a name that exactly matches groupname.
		 * @param {number} maxResults The maximum number of items to return per page. Max is 50.
		 * @param {string} orderBy Orders the results by a property of the filter. For example, name.
		 * @param {string} owner Returns filters with an owner that exactly matches owner. This parameter cannot be used with the accountId parameter.
		 * @param {number} projectId Returns filters that are shared with a project that has an ID that exactly matches projectId.
		 * @param {number} startAt The index of the first item to return in a page of results (page offset). The base index is 0.
		 * @return {void} Returned if the request is successful.
		 */
		FilterSearchGetByAccountIdAndExpandAndFilterNameAndGroupnameAndMaxResultsAndOrderByAndOwnerAndProjectIdAndStartAt(accountId: string, expand: string, filterName: string, groupname: string, maxResults: number, orderBy: string, owner: string, projectId: number, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/search?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&filterName=' + (filterName == null ? '' : encodeURIComponent(filterName)) + '&groupname=' + (groupname == null ? '' : encodeURIComponent(groupname)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&owner=' + (owner == null ? '' : encodeURIComponent(owner)) + '&projectId=' + projectId + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a filter. Permissions required: Permission to log in to Jira, however the following rules govern what a user can delete:
		 * Delete filter/{id}
		 * @param {number} id The ID of the filter to delete.
		 * @return {void} 
		 */
		FilterDeleteById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/' + id, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a filter. Permissions required: None, however the calling user must have permission view the filter.
		 * Get filter/{id}
		 * @param {string} expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
		 * @param {number} id The ID of the filter to return.
		 * @return {void} Returned if the request is successful.
		 */
		FilterGetByExpandAndId(expand: string, id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/' + id + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates an existing filter. Use this method to update a filter's name, description, JQL, or sharing. Permissions required: Permission to log in to Jira, however the following rules govern what a user can update:
		 * Put filter/{id}
		 * @param {string} expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
		 * @param {number} id The ID of the filter to update.
		 * @return {void} Returned if the request is successful.
		 */
		FilterPutByExpandAndId(expand: string, id: number, requestBody: FilterPutByExpandAndIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/' + id + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Reset the user's column configuration for the filter to the default. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.
		 * Delete filter/{id}/columns
		 * @param {number} id The ID of the filter.
		 * @return {void} 
		 */
		FilterColumnsDeleteById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/' + id + '/columns', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the columns configured for a filter. The column configuration is used when the filter's results are viewed in List View with the Columns set to Filter. Permissions required: None, however the calling user must have permission to view the filter.
		 * Get filter/{id}/columns
		 * @param {number} id The ID of the filter.
		 * @return {void} Returned if the request is successful.
		 */
		FilterColumnsGetById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/' + id + '/columns', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the columns for a filter. Only navigable fields can be set as columns. Use Get fields to get the list fields in Jira. A navigable field has navigable set to true. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.
		 * Put filter/{id}/columns
		 * @param {number} id The ID of the filter.
		 * @return {void} Returned if the request is successful.
		 */
		FilterColumnsPutById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/' + id + '/columns', { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Removes a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.
		 * Delete filter/{id}/favourite
		 * @param {string} expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
		 * @param {number} id The ID of the filter.
		 * @return {void} Returned if the request is successful.
		 */
		FilterFavouriteDeleteByExpandAndId(expand: string, id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/' + id + '/favourite?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.
		 * Put filter/{id}/favourite
		 * @param {string} expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
		 * @param {number} id The ID of the filter.
		 * @return {void} Returned if the request is successful.
		 */
		FilterFavouritePutByExpandAndId(expand: string, id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/' + id + '/favourite?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.
		 * Get filter/{id}/permission
		 * @param {number} id The ID of the filter.
		 * @return {void} Returned if the request is successful.
		 */
		FilterPermissionGetById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/' + id + '/permission', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a share permissions to a filter. If you add a global share permission (i.e., all logged-in users or the public) it will overwrite all share permissions for the filter.Be aware that this method uses different objects for updating share permissions compared to Update filter. Permissions required: Share dashboards and filters global permission and the calling user must own the filter.
		 * Post filter/{id}/permission
		 * @param {number} id The ID of the filter.
		 * @return {void} 
		 */
		FilterPermissionPostById(id: number, requestBody: FilterPermissionPostByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/' + id + '/permission', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a share permission from a filter. Permissions required: Permission to log in to Jira (i.e., member of the users group) and the calling user must own the filter.
		 * Delete filter/{id}/permission/{permissionId}
		 * @param {number} id The ID of the filter.
		 * @param {number} permissionId The ID of the share permission.
		 * @return {void} 
		 */
		FilterPermissionDeleteByIdAndPermissionId(id: number, permissionId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/' + id + '/permission/' + permissionId, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.
		 * Get filter/{id}/permission/{permissionId}
		 * @param {number} id The ID of the filter.
		 * @param {number} permissionId The ID of the share permission.
		 * @return {void} Returned if the request is successful.
		 */
		FilterPermissionGetByIdAndPermissionId(id: number, permissionId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'filter/' + id + '/permission/' + permissionId, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a group.
		 * Delete group
		 * @param {string} groupname The name of the group.
		 * @param {string} swapGroup The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs will be inaccessible after the deletion.
		 * @return {void} Returned if the group was deleted.
		 */
		GroupDeleteByGroupnameAndSwapGroup(groupname: string, swapGroup: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'group?groupname=' + (groupname == null ? '' : encodeURIComponent(groupname)) + '&swapGroup=' + (swapGroup == null ? '' : encodeURIComponent(swapGroup)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * This resource is deprecated, use group/member.
		 * Get group
		 * @param {string} expand List of fields to expand.
		 * @param {string} groupname The name of the group.
		 * @return {void} Returned if the requested group is returned.
		 */
		GroupGetByExpandAndGroupname(expand: string, groupname: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'group?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&groupname=' + (groupname == null ? '' : encodeURIComponent(groupname)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a group.
		 * Post group
		 * @return {void} 
		 */
		GroupPost(requestBody: GroupPostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'group', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns all users in a group. Users are ordered by username.
		 * Get group/member
		 * @param {string} groupname The name of the group.
		 * @param {boolean} includeInactiveUsers Include inactive users.
		 * @param {number} maxResults The maximum number of users to return per page.
		 * @param {number} startAt The index of the first user to return.
		 * @return {void} Returned if the requested group is returned.
		 */
		GroupMemberGetByGroupnameAndIncludeInactiveUsersAndMaxResultsAndStartAt(groupname: string, includeInactiveUsers: boolean, maxResults: number, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'group/member?groupname=' + (groupname == null ? '' : encodeURIComponent(groupname)) + '&includeInactiveUsers=' + includeInactiveUsers + '&maxResults=' + maxResults + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Removes a user from a group. Permissions required: Administer Jira global permission.
		 * Delete group/user
		 * @param {string} accountid The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
		 * @param {string} groupname The name of the group.
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
		 * @return {void} Returned if the user is removed from the group.
		 */
		GroupUserDeleteByAccountidAndGroupnameAndUsername(accountid: string, groupname: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'group/user?accountid=' + (accountid == null ? '' : encodeURIComponent(accountid)) + '&groupname=' + (groupname == null ? '' : encodeURIComponent(groupname)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds a user to a group.
		 * Post group/user
		 * @param {string} groupname The name of the group.
		 * @return {void} 
		 */
		GroupUserPostByGroupname(groupname: string, requestBody: GroupUserPostByGroupnameBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'group/user?groupname=' + (groupname == null ? '' : encodeURIComponent(groupname)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude groups from the results.
		 * Get groups/picker
		 * @param {string} accountId Parameter not in use.
		 * @param {Array<string>} exclude A list of groups to exclude from the result.
		 * @param {number} maxResults The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property jira.ajax.autocomplete.limit.
		 * @param {string} query The string to find in group names.
		 * @param {string} userName Parameter not in use.
		 * @return {void} Returned if the request is successful.
		 */
		GroupsPickerGetByAccountIdAndExcludeAndMaxResultsAndQueryAndUserName(accountId: string, exclude: Array<string>, maxResults: number, query: string, userName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'groups/picker?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&' + exclude.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&userName=' + (userName == null ? '' : encodeURIComponent(userName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of users and groups matching a string. The string is used:
		 * Get groupuserpicker
		 * @param {string} avatarSize The size of the avatar to return. If an invalid value is provided, the default value is used.
		 * @param {boolean} caseInsensitive Indicates whether the search for groups should be case insensitive.
		 * @param {boolean} excludeConnectAddons Indicates whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used.
		 * @param {string} fieldId The custom field ID of the field this request is for.
		 * @param {Array<string>} issueTypeId The ID of an issue type that returned users and groups must have permission to view. To include multiple issue type IDs repeat this parameter, use of a comma separated list is not supported. Special values, such as -1 (all standard issue types) and -2 (all subtask issue types), are supported. This parameter is only used when fieldId is present.
		 * @param {number} maxResults The maximum number of items to return in each list. The maximum is 1000.
		 * @param {Array<string>} projectId The ID of a project that returned users and groups must have permission to view. To include multiple projects repeat this parameter, use of a comma separated list is not supported. This parameter is only used when fieldId is present.
		 * @param {string} query The search string.
		 * @param {boolean} showAvatar Indicates whether the user avatar should be returned. If an invalid value is provided, the default value is used.
		 * @return {void} Returned if the request is successful.
		 */
		GroupuserpickerGetByAvatarSizeAndCaseInsensitiveAndExcludeConnectAddonsAndFieldIdAndIssueTypeIdAndMaxResultsAndProjectIdAndQueryAndShowAvatar(avatarSize: string, caseInsensitive: boolean, excludeConnectAddons: boolean, fieldId: string, issueTypeId: Array<string>, maxResults: number, projectId: Array<string>, query: string, showAvatar: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'groupuserpicker?avatarSize=' + (avatarSize == null ? '' : encodeURIComponent(avatarSize)) + '&caseInsensitive=' + caseInsensitive + '&excludeConnectAddons=' + excludeConnectAddons + '&fieldId=' + (fieldId == null ? '' : encodeURIComponent(fieldId)) + '&' + issueTypeId.map(z => `issueTypeId=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&' + projectId.map(z => `projectId=${encodeURIComponent(z)}`).join('&') + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&showAvatar=' + showAvatar, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates an issue or, where the option to create sub-tasks is enabled in Jira, a sub-task. A transition may be applied, to move the issue or sub-task to a workflow step other than the default start step, and issue properties set.
		 * Post issue
		 * @param {boolean} updateHistory Indicates whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira.
		 * @return {void} 
		 */
		IssuePostByUpdateHistory(updateHistory: boolean, requestBody: IssuePostByUpdateHistoryBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue?updateHistory=' + updateHistory, { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Creates issues and, where the option to create sub-tasks is enabled in Jira, sub-tasks. Transitions may be applied, to move the issues or sub-tasks to a workflow step other than the default start step, and issue properties set.
		 * Post issue/bulk
		 * @return {void} 
		 */
		IssueBulkPost(requestBody: IssueBulkPostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/bulk', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in Create issue and Create issues.
		 * Get issue/createmeta
		 * @param {string} expand Use expand to include additional information about in the response. This parameter accepts multiple values separated by a comma:
		 * @param {Array<string>} issuetypeIds Comma-separated list of issue type IDs. May be specified multiple times and with issuetypeNames.
		 * @param {Array<string>} issuetypeNames Comma-separated list of issue type names. May be specified multiple times and with issuetypeIds.
		 * @param {Array<string>} projectIds Comma-separated list of project IDs. May be specified multiple times and with projectKeys.
		 * @param {Array<string>} projectKeys Comma-separated list of project keys. May be specified multiple times and with projectIds.
		 * @return {void} Returned if the request is successful.
		 */
		IssueCreatemetaGetByExpandAndIssuetypeIdsAndIssuetypeNamesAndProjectIdsAndProjectKeys(expand: string, issuetypeIds: Array<string>, issuetypeNames: Array<string>, projectIds: Array<string>, projectKeys: Array<string>, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/createmeta?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&' + issuetypeIds.map(z => `issuetypeIds=${encodeURIComponent(z)}`).join('&') + '&' + issuetypeNames.map(z => `issuetypeNames=${encodeURIComponent(z)}`).join('&') + '&' + projectIds.map(z => `projectIds=${encodeURIComponent(z)}`).join('&') + '&' + projectKeys.map(z => `projectKeys=${encodeURIComponent(z)}`).join('&'), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of suggested issues matching the auto-completion query for the user executing this request. This operation checks the user's history and browsing context to return issue suggestions.
		 * Get issue/picker
		 * @param {string} currentIssueKey Key of the issue defining search context. The issue defining a context is excluded from the search results.
		 * @param {string} currentJQL JQL that defines the search context. Only issues matching this JQL query are included in the results. Note that username and userkey have been deprecated as search terms for this parameter. See the migration guide for details. Use accountId instead.
		 * @param {string} currentProjectId ID of a project defining search context. Only issues belonging to a given project are suggested.
		 * @param {string} query Query used to filter issue search results.
		 * @param {boolean} showSubTaskParent Set to false to exclude parent issue from the suggestions list if search is performed in the context of a sub-task.
		 * @param {boolean} showSubTasks Set to false to exclude subtasks from the suggestions list.
		 * @return {void} Returns a list of issues matching the issue picker parameters.
		 */
		IssuePickerGetByCurrentIssueKeyAndCurrentJQLAndCurrentProjectIdAndQueryAndShowSubTaskParentAndShowSubTasks(currentIssueKey: string, currentJQL: string, currentProjectId: string, query: string, showSubTaskParent: boolean, showSubTasks: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/picker?currentIssueKey=' + (currentIssueKey == null ? '' : encodeURIComponent(currentIssueKey)) + '&currentJQL=' + (currentJQL == null ? '' : encodeURIComponent(currentJQL)) + '&currentProjectId=' + (currentProjectId == null ? '' : encodeURIComponent(currentProjectId)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&showSubTaskParent=' + showSubTaskParent + '&showSubTasks=' + showSubTasks, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria.
		 * Delete issue/properties/{propertyKey}
		 * @param {string} propertyKey The key of the property.
		 * @return {void} 
		 */
		IssuePropertiesDeleteByPropertyKey(propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets a property value on multiple issues. The issues to be updated can be specified by a filter.
		 * Put issue/properties/{propertyKey}
		 * @param {string} propertyKey The key of the property. The maximum length is 255 characters.
		 * @return {void} 
		 */
		IssuePropertiesPutByPropertyKey(propertyKey: string, requestBody: IssuePropertiesPutByPropertyKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes an issue.
		 * Delete issue/{issueIdOrKey}
		 * @param {string} deleteSubtasks Indicates whether the issue's sub-tasks are deleted when the issue is deleted.
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @return {void} 
		 */
		IssueDeleteByDeleteSubtasksAndIssueIdOrKey(deleteSubtasks: string, issueIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '?deleteSubtasks=' + (deleteSubtasks == null ? '' : encodeURIComponent(deleteSubtasks)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the details for an issue.
		 * Get issue/{issueIdOrKey}
		 * @param {string} expand Use expand to include additional information about the issues in the response. This parameter accepts multiple values separated by a comma:
		 * @param {Array<string>} fields A comma-separated list of fields to return for the issue. Use it to retrieve a subset of fields. Allowed values:
		 * @param {boolean} fieldsByKeys Indicates whether fields in fields are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.
		 * @param {string} issueIdOrKey The ID or key of the issue. For example, JRACLOUD-1549.
		 * @param {Array<string>} properties A comma-separated list of issue properties to return for the issue. Allowed values:
		 * @param {boolean} updateHistory Indicates whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira. This also populates the JQL issues search lastViewed field.
		 * @return {void} Returned if the request is successful.
		 */
		IssueGetByExpandAndFieldsAndFieldsByKeysAndIssueIdOrKeyAndPropertiesAndUpdateHistory(expand: string, fields: Array<string>, fieldsByKeys: boolean, issueIdOrKey: string, properties: Array<string>, updateHistory: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&' + fields.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&fieldsByKeys=' + fieldsByKeys + '&' + properties.map(z => `properties=${encodeURIComponent(z)}`).join('&') + '&updateHistory=' + updateHistory, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Edits an issue. A transition may be applied and issue properties updated as part of the edit.
		 * Put issue/{issueIdOrKey}
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {boolean} notifyUsers Indicates whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored.
		 * @param {boolean} overrideEditableFlag Indicates whether screen security should be overridden to enable uneditable fields to be edited. Available to Connect app users with admin permissions.
		 * @param {boolean} overrideScreenSecurity Indicates whether screen security should be overridden to enable hidden fields to be edited. Available to Connect app users with admin permissions.
		 * @return {void} 
		 */
		IssuePutByIssueIdOrKeyAndNotifyUsersAndOverrideEditableFlagAndOverrideScreenSecurity(issueIdOrKey: string, notifyUsers: boolean, overrideEditableFlag: boolean, overrideScreenSecurity: boolean, requestBody: IssuePutByIssueIdOrKeyAndNotifyUsersAndOverrideEditableFlagAndOverrideScreenSecurityBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '&notifyUsers=' + notifyUsers + '&overrideEditableFlag=' + overrideEditableFlag + '&overrideScreenSecurity=' + overrideScreenSecurity, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Assigns an issue to a user. Use this operation when the calling user does not have the Edit Issues permission but has the Assign issue permission for the project that the issue is in.
		 * Put issue/{issueIdOrKey}/assignee
		 * @param {string} issueIdOrKey The ID or key of the issue to be assigned.
		 * @return {void} 
		 */
		IssueAssigneePutByIssueIdOrKey(issueIdOrKey: string, requestBody: IssueAssigneePutByIssueIdOrKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/assignee', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Adds one or more attachments to an issue. Attachments are posted as multipart/form-data (RFC 1867).
		 * Post issue/{issueIdOrKey}/attachments
		 * @param {string} issueIdOrKey The ID or key of the issue that attachments are added to.
		 * @return {void} Returned if the request is successful.
		 */
		IssueAttachmentsPostByIssueIdOrKey(issueIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/attachments', { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a paginated list of all updates of an issue, sorted by date, starting from the oldest.
		 * Get issue/{issueIdOrKey}/changelog
		 * @param {string} issueIdOrKey ID or key of the issue.
		 * @param {number} maxResults Maximum number of items to return per page. See Pagination section for more details.
		 * @param {number} startAt Page offset, ie. index of the first item returned in the page of results. Base index: 0.
		 * @return {void} returns a collection of changelogs associated with the issue, with count and pagination information.
		 */
		IssueChangelogGetByIssueIdOrKeyAndMaxResultsAndStartAt(issueIdOrKey: string, maxResults: number, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/changelog&maxResults=' + maxResults + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * to get comments for
		 * Get issue/{issueIdOrKey}/comment
		 * @param {string} expand optional flags: renderedBody (provides body rendered in HTML)
		 * @param {string} issueIdOrKey to get comments for
		 * @param {number} maxResults how many results on the page should be included. Defaults to 50.
		 * @param {string} orderBy ordering of the results.
		 * @param {number} startAt the page offset, if not specified then defaults to 0
		 * @return {void} returns a collection of comments associated with the issue, with count and pagination information.
		 */
		IssueCommentGetByExpandAndIssueIdOrKeyAndMaxResultsAndOrderByAndStartAt(expand: string, issueIdOrKey: string, maxResults: number, orderBy: string, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/comment?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * a string containing the issue id or key the comment will be added to
		 * Post issue/{issueIdOrKey}/comment
		 * @param {string} expand optional flags: renderedBody (provides body rendered in HTML)
		 * @param {string} issueIdOrKey a string containing the issue id or key the comment will be added to
		 * @return {void} 
		 */
		IssueCommentPostByExpandAndIssueIdOrKey(expand: string, issueIdOrKey: string, requestBody: IssueCommentPostByExpandAndIssueIdOrKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/comment?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * a string containing the issue id or key the comment belongs to
		 * Delete issue/{issueIdOrKey}/comment/{id}
		 * @param {string} id id of the comment to be deleted
		 * @param {string} issueIdOrKey a string containing the issue id or key the comment belongs to
		 * @return {void} 
		 */
		IssueCommentDeleteByIdAndIssueIdOrKey(id: string, issueIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/comment/' + (id == null ? '' : encodeURIComponent(id)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * of the issue the comment belongs to
		 * Get issue/{issueIdOrKey}/comment/{id}
		 * @param {string} expand optional flags: renderedBody (provides body rendered in HTML)
		 * @param {string} id the ID of the comment to request
		 * @param {string} issueIdOrKey of the issue the comment belongs to
		 * @return {void} Returns a full representation of a Jira comment in JSON format.
		 */
		IssueCommentGetByExpandAndIdAndIssueIdOrKey(expand: string, id: string, issueIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/comment/' + (id == null ? '' : encodeURIComponent(id)) + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * a string containing the issue id or key the comment belongs to
		 * Put issue/{issueIdOrKey}/comment/{id}
		 * @param {string} expand optional flags: renderedBody (provides body rendered in HTML)
		 * @param {string} id id of the comment to be updated
		 * @param {string} issueIdOrKey a string containing the issue id or key the comment belongs to
		 * @return {void} Returned if update was successful
		 */
		IssueCommentPutByExpandAndIdAndIssueIdOrKey(expand: string, id: string, issueIdOrKey: string, requestBody: IssueCommentPutByExpandAndIdAndIssueIdOrKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/comment/' + (id == null ? '' : encodeURIComponent(id)) + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in Edit issue.
		 * Get issue/{issueIdOrKey}/editmeta
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {boolean} overrideEditableFlag Indicates whether non-editable fields should be returned. Available to connect app users with admin permissions.
		 * @param {boolean} overrideScreenSecurity Indicates whether hidden fields should be returned. Available to connect app users with admin permissions.
		 * @return {void} Returned if the request is successful.
		 */
		IssueEditmetaGetByIssueIdOrKeyAndOverrideEditableFlagAndOverrideScreenSecurity(issueIdOrKey: string, overrideEditableFlag: boolean, overrideScreenSecurity: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/editmeta&overrideEditableFlag=' + overrideEditableFlag + '&overrideScreenSecurity=' + overrideScreenSecurity, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates an email notification for an issue and adds it to the mail queue.
		 * Post issue/{issueIdOrKey}/notify
		 * @param {string} issueIdOrKey ID or key of the issue that the notification is sent for.
		 * @return {void} 
		 */
		IssueNotifyPostByIssueIdOrKey(issueIdOrKey: string, requestBody: IssueNotifyPostByIssueIdOrKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/notify', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns the URIs and keys of an issue's properties.
		 * Get issue/{issueIdOrKey}/properties
		 * @param {string} issueIdOrKey The key or ID of the issue.
		 * @return {void} Returned if the request is successful.
		 */
		IssuePropertiesGetByIssueIdOrKey(issueIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/properties', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes an issue's property.
		 * Delete issue/{issueIdOrKey}/properties/{propertyKey}
		 * @param {string} issueIdOrKey The key or ID of the issue.
		 * @param {string} propertyKey The key of the property.
		 * @return {void} 
		 */
		IssuePropertiesDeleteByIssueIdOrKeyAndPropertyKey(issueIdOrKey: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the key and value of an issue's property.
		 * Get issue/{issueIdOrKey}/properties/{propertyKey}
		 * @param {string} issueIdOrKey The key or ID of the issue.
		 * @param {string} propertyKey The key of the property.
		 * @return {void} Returned if the request is successful.
		 */
		IssuePropertiesGetByIssueIdOrKeyAndPropertyKey(issueIdOrKey: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the value of an issue's property. Use this resource to store custom data against an issue.
		 * Put issue/{issueIdOrKey}/properties/{propertyKey}
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {string} propertyKey The key of the issue property. The maximum length is 255 characters.
		 * @return {void} Returned if the issue property is updated.
		 */
		IssuePropertiesPutByIssueIdOrKeyAndPropertyKey(issueIdOrKey: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the remote issue link from the issue using the link's global ID.
		 * Delete issue/{issueIdOrKey}/remotelink
		 * @param {string} globalId The global ID of a remote issue link.
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @return {void} 
		 */
		IssueRemotelinkDeleteByGlobalIdAndIssueIdOrKey(globalId: string, issueIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/remotelink?globalId=' + (globalId == null ? '' : encodeURIComponent(globalId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned.
		 * Get issue/{issueIdOrKey}/remotelink
		 * @param {string} globalId The global ID of the remote issue link.
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @return {void} Returned if the request is successful.
		 */
		IssueRemotelinkGetByGlobalIdAndIssueIdOrKey(globalId: string, issueIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/remotelink?globalId=' + (globalId == null ? '' : encodeURIComponent(globalId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates or updates a remote issue link for an issue.
		 * Post issue/{issueIdOrKey}/remotelink
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @return {void} Returned if the remote issue link is updated.
		 */
		IssueRemotelinkPostByIssueIdOrKey(issueIdOrKey: string, requestBody: IssueRemotelinkPostByIssueIdOrKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/remotelink', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a remote issue link from an issue.
		 * Delete issue/{issueIdOrKey}/remotelink/{linkId}
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {string} linkId The ID of a remote issue link.
		 * @return {void} 
		 */
		IssueRemotelinkDeleteByIssueIdOrKeyAndLinkId(issueIdOrKey: string, linkId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/remotelink/' + (linkId == null ? '' : encodeURIComponent(linkId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a remote issue link for an issue.
		 * Get issue/{issueIdOrKey}/remotelink/{linkId}
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {string} linkId The ID of the remote issue link.
		 * @return {void} Returned if the request is successful.
		 */
		IssueRemotelinkGetByIssueIdOrKeyAndLinkId(issueIdOrKey: string, linkId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/remotelink/' + (linkId == null ? '' : encodeURIComponent(linkId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a remote issue link for an issue.
		 * Put issue/{issueIdOrKey}/remotelink/{linkId}
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {string} linkId The ID of the remote issue link.
		 * @return {void} 
		 */
		IssueRemotelinkPutByIssueIdOrKeyAndLinkId(issueIdOrKey: string, linkId: string, requestBody: IssueRemotelinkPutByIssueIdOrKeyAndLinkIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/remotelink/' + (linkId == null ? '' : encodeURIComponent(linkId)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue's status.
		 * Get issue/{issueIdOrKey}/transitions
		 * @param {string} expand Use expand to include additional information about in the response. This parameter accepts multiple values separated by a comma:
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {boolean} skipRemoteOnlyCondition Indicates whether transitions with the condition Hide From User Condition are included in the response.
		 * @param {string} transitionId The ID of the transition.
		 * @return {void} Returned if the request is successful.
		 */
		IssueTransitionsGetByExpandAndIssueIdOrKeyAndSkipRemoteOnlyConditionAndTransitionId(expand: string, issueIdOrKey: string, skipRemoteOnlyCondition: boolean, transitionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/transitions?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&skipRemoteOnlyCondition=' + skipRemoteOnlyCondition + '&transitionId=' + (transitionId == null ? '' : encodeURIComponent(transitionId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen. Optionally, issue properties can be set.
		 * Post issue/{issueIdOrKey}/transitions
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @return {void} 
		 */
		IssueTransitionsPostByIssueIdOrKey(issueIdOrKey: string, requestBody: IssueTransitionsPostByIssueIdOrKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/transitions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a user's vote from an issue. This is the equivalent of the user clicking Unvote on an issue in Jira.
		 * Delete issue/{issueIdOrKey}/votes
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @return {void} 
		 */
		IssueVotesDeleteByIssueIdOrKey(issueIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/votes', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns details about the votes on an issue.
		 * Get issue/{issueIdOrKey}/votes
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @return {void} Returned if the request is successful.
		 */
		IssueVotesGetByIssueIdOrKey(issueIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/votes', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds the user's vote to an issue. This is the equivalent of the user clicking Vote on an issue in Jira.
		 * Post issue/{issueIdOrKey}/votes
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @return {void} 
		 */
		IssueVotesPostByIssueIdOrKey(issueIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/votes', { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a user as a watcher of an issue.
		 * Delete issue/{issueIdOrKey}/watchers
		 * @param {string} accountId The account ID of the user. Required if username is omitted, otherwise must be omitted.
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {string} username The name of the user. Required if accountId is omitted, otherwise must be omitted.
		 * @return {void} 
		 */
		IssueWatchersDeleteByAccountIdAndIssueIdOrKeyAndUsername(accountId: string, issueIdOrKey: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/watchers?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the watchers for an issue.
		 * Get issue/{issueIdOrKey}/watchers
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @return {void} Returned if the request is successful
		 */
		IssueWatchersGetByIssueIdOrKey(issueIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/watchers', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds a user as a watcher of an issue. If no user is specified the calling user is added.
		 * Post issue/{issueIdOrKey}/watchers
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @return {void} 
		 */
		IssueWatchersPostByIssueIdOrKey(issueIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/watchers', { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all worklogs for an issue.
		 * Get issue/{issueIdOrKey}/worklog
		 * @param {string} expand Use expand to include additional information about worklogs in the response. This parameter accepts multiple values separated by a comma:
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {number} maxResults The maximum number of items to return per page. Maximum is 1048576.
		 * @param {number} startAt The index of the first item to return in a page of results (page offset).
		 * @return {void} Returned if the request is successful
		 */
		IssueWorklogGetByExpandAndIssueIdOrKeyAndMaxResultsAndStartAt(expand: string, issueIdOrKey: string, maxResults: number, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/worklog?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxResults=' + maxResults + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds a worklog to an issue.
		 * Post issue/{issueIdOrKey}/worklog
		 * @param {string} adjustEstimate Defines how to update the issue's time estimate, the options are:
		 * @param {string} expand Use expand to include additional information about work logs in the response. This parameter accepts multiple values separated by a comma:
		 * @param {string} issueIdOrKey The ID or key the issue.
		 * @param {string} newEstimate The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
		 * @param {boolean} notifyUsers Indicates whether users watching the issue are notified by email.
		 * @param {boolean} overrideEditableFlag Indicates whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin scope permission can use this flag.
		 * @param {string} reduceBy The amount to reduce the issue's remaining estimate by, as days (#d), hours (#h), or minutes (#m). For example, 2d. Required when adjustEstimate is manual.
		 * @return {void} 
		 */
		IssueWorklogPostByAdjustEstimateAndExpandAndIssueIdOrKeyAndNewEstimateAndNotifyUsersAndOverrideEditableFlagAndReduceBy(adjustEstimate: string, expand: string, issueIdOrKey: string, newEstimate: string, notifyUsers: boolean, overrideEditableFlag: boolean, reduceBy: string, requestBody: IssueWorklogPostByAdjustEstimateAndExpandAndIssueIdOrKeyAndNewEstimateAndNotifyUsersAndOverrideEditableFlagAndReduceByBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/worklog?adjustEstimate=' + (adjustEstimate == null ? '' : encodeURIComponent(adjustEstimate)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&newEstimate=' + (newEstimate == null ? '' : encodeURIComponent(newEstimate)) + '&notifyUsers=' + notifyUsers + '&overrideEditableFlag=' + overrideEditableFlag + '&reduceBy=' + (reduceBy == null ? '' : encodeURIComponent(reduceBy)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a worklog from an issue.
		 * Delete issue/{issueIdOrKey}/worklog/{id}
		 * @param {string} adjustEstimate Defines how to update the issue's time estimate, the options are:
		 * @param {string} id The ID of the worklog.
		 * @param {string} increaseBy The amount to increase the issue's remaining estimate by, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is manual.
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {string} newEstimate The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
		 * @param {boolean} notifyUsers Indicates whether users watching the issue are notified by email.
		 * @param {boolean} overrideEditableFlag Indicates whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin permissions can use this flag.
		 * @return {void} 
		 */
		IssueWorklogDeleteByAdjustEstimateAndIdAndIncreaseByAndIssueIdOrKeyAndNewEstimateAndNotifyUsersAndOverrideEditableFlag(adjustEstimate: string, id: string, increaseBy: string, issueIdOrKey: string, newEstimate: string, notifyUsers: boolean, overrideEditableFlag: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/worklog/' + (id == null ? '' : encodeURIComponent(id)) + '?adjustEstimate=' + (adjustEstimate == null ? '' : encodeURIComponent(adjustEstimate)) + '&increaseBy=' + (increaseBy == null ? '' : encodeURIComponent(increaseBy)) + '&newEstimate=' + (newEstimate == null ? '' : encodeURIComponent(newEstimate)) + '&notifyUsers=' + notifyUsers + '&overrideEditableFlag=' + overrideEditableFlag, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a worklog.
		 * Get issue/{issueIdOrKey}/worklog/{id}
		 * @param {string} expand Use expand to include additional information about work logs in the response. This parameter accepts multiple values separated by a comma:
		 * @param {string} id The ID of the worklog.
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @return {void} Returned if the request is successful.
		 */
		IssueWorklogGetByExpandAndIdAndIssueIdOrKey(expand: string, id: string, issueIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/worklog/' + (id == null ? '' : encodeURIComponent(id)) + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a worklog.
		 * Put issue/{issueIdOrKey}/worklog/{id}
		 * @param {string} adjustEstimate Defines how to update the issue's time estimate, the options are:
		 * @param {string} expand Use expand to include additional information about worklogs in the response. This parameter accepts multiple values separated by a comma:
		 * @param {string} id The ID of the worklog.
		 * @param {string} issueIdOrKey The ID or key the issue.
		 * @param {string} newEstimate The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
		 * @param {boolean} notifyUsers Indicates whether users watching the issue are notified by email.
		 * @param {boolean} overrideEditableFlag Indicates whether the worklog should be added to the issue even if the issue is not editable, for example, because the issue is closed. Only connect app users with admin permissions can use this flag.
		 * @return {void} Returned if the request is successful
		 */
		IssueWorklogPutByAdjustEstimateAndExpandAndIdAndIssueIdOrKeyAndNewEstimateAndNotifyUsersAndOverrideEditableFlag(adjustEstimate: string, expand: string, id: string, issueIdOrKey: string, newEstimate: string, notifyUsers: boolean, overrideEditableFlag: boolean, requestBody: IssueWorklogPutByAdjustEstimateAndExpandAndIdAndIssueIdOrKeyAndNewEstimateAndNotifyUsersAndOverrideEditableFlagBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/worklog/' + (id == null ? '' : encodeURIComponent(id)) + '?adjustEstimate=' + (adjustEstimate == null ? '' : encodeURIComponent(adjustEstimate)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&newEstimate=' + (newEstimate == null ? '' : encodeURIComponent(newEstimate)) + '&notifyUsers=' + notifyUsers + '&overrideEditableFlag=' + overrideEditableFlag, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns the keys of all properties for a worklog.
		 * Get issue/{issueIdOrKey}/worklog/{worklogId}/properties
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {string} worklogId The ID of the worklog.
		 * @return {void} Returned if the request is successful.
		 */
		IssueWorklogPropertiesGetByIssueIdOrKeyAndWorklogId(issueIdOrKey: string, worklogId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/worklog/' + (worklogId == null ? '' : encodeURIComponent(worklogId)) + '/properties', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a worklog property.
		 * Delete issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {string} propertyKey The key of the property.
		 * @param {string} worklogId The ID of the worklog.
		 * @return {void} 
		 */
		IssueWorklogPropertiesDeleteByIssueIdOrKeyAndPropertyKeyAndWorklogId(issueIdOrKey: string, propertyKey: string, worklogId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/worklog/' + (worklogId == null ? '' : encodeURIComponent(worklogId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the value of a worklog property.
		 * Get issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {string} propertyKey The key of the property.
		 * @param {string} worklogId The ID of the worklog.
		 * @return {void} Returned if the request is successful.
		 */
		IssueWorklogPropertiesGetByIssueIdOrKeyAndPropertyKeyAndWorklogId(issueIdOrKey: string, propertyKey: string, worklogId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/worklog/' + (worklogId == null ? '' : encodeURIComponent(worklogId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the value of a worklog property. Use this operation to store custom data against the worklog.
		 * Put issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}
		 * @param {string} issueIdOrKey The ID or key of the issue.
		 * @param {string} propertyKey The key of the issue property. The maximum length is 255 characters.
		 * @param {string} worklogId The ID of the worklog.
		 * @return {void} Returned if the worklog property is updated.
		 */
		IssueWorklogPropertiesPutByIssueIdOrKeyAndPropertyKeyAndWorklogId(issueIdOrKey: string, propertyKey: string, worklogId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issue/' + (issueIdOrKey == null ? '' : encodeURIComponent(issueIdOrKey)) + '/worklog/' + (worklogId == null ? '' : encodeURIComponent(worklogId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a link between two issues. Use this operation to indicate a relationship between two issues and optionally add a comment to the from (outward) issue. To use this resource the site must have Issue Linking enabled.
		 * Post issueLink
		 * @return {void} 
		 */
		IssueLinkPost(requestBody: IssueLinkPostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issueLink', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes an issue link.
		 * Delete issueLink/{linkId}
		 * @param {string} linkId The ID of the issue link.
		 * @return {void} 200 response
		 */
		IssueLinkDeleteByLinkId(linkId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issueLink/' + (linkId == null ? '' : encodeURIComponent(linkId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an issue link.
		 * Get issueLink/{linkId}
		 * @param {string} linkId The ID of the issue link.
		 * @return {void} Returned if the request is successful.
		 */
		IssueLinkGetByLinkId(linkId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issueLink/' + (linkId == null ? '' : encodeURIComponent(linkId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of all issue link types.
		 * Get issueLinkType
		 * @return {void} Returned if the request is successful.
		 */
		IssueLinkTypeGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issueLinkType', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link's inward and outward relationships.
		 * Post issueLinkType
		 * @return {void} 
		 */
		IssueLinkTypePost(requestBody: IssueLinkTypePostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issueLinkType', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes an issue link type.
		 * Delete issueLinkType/{issueLinkTypeId}
		 * @param {string} issueLinkTypeId The ID of the issue link type.
		 * @return {void} 
		 */
		IssueLinkTypeDeleteByIssueLinkTypeId(issueLinkTypeId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issueLinkType/' + (issueLinkTypeId == null ? '' : encodeURIComponent(issueLinkTypeId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an issue link type.
		 * Get issueLinkType/{issueLinkTypeId}
		 * @param {string} issueLinkTypeId The ID of the issue link type.
		 * @return {void} Returned if the request is successful.
		 */
		IssueLinkTypeGetByIssueLinkTypeId(issueLinkTypeId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issueLinkType/' + (issueLinkTypeId == null ? '' : encodeURIComponent(issueLinkTypeId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates an issue link type.
		 * Put issueLinkType/{issueLinkTypeId}
		 * @param {string} issueLinkTypeId The ID of the issue link type.
		 * @return {void} Returned if the request is successful.
		 */
		IssueLinkTypePutByIssueLinkTypeId(issueLinkTypeId: string, requestBody: IssueLinkTypePutByIssueLinkTypeIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issueLinkType/' + (issueLinkTypeId == null ? '' : encodeURIComponent(issueLinkTypeId)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns all issue security schemes.
		 * Get issuesecurityschemes
		 * @return {void} Returned if the request is successful.
		 */
		IssuesecurityschemesGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issuesecurityschemes', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an issue security scheme along with its security levels.
		 * Get issuesecurityschemes/{id}
		 * @param {number} id The ID of the issue security scheme. Use the Get issue security schemes operation to get a list of issue security scheme IDs.
		 * @return {void} Returned if the request is successful.
		 */
		IssuesecurityschemesGetById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issuesecurityschemes/' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all issue types. Permissions required: Permission to access Jira, however, only issue types that are visible to the user are returned.
		 * Get issuetype
		 * @return {void} Returned if the request is successful.
		 */
		IssuetypeGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issuetype', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates an issue type and adds it to the default issue type scheme. Permissions required: Administer Jira global permission.
		 * Post issuetype
		 * @return {void} 
		 */
		IssuetypePost(requestBody: IssuetypePostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issuetype', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type (alternativeIssueTypeId). A list of alternative issue types can be obtained from the Get alternative issue types resource. Permissions required: Administer Jira global permission.
		 * Delete issuetype/{id}
		 * @param {string} alternativeIssueTypeId The ID of the replacement issue type.
		 * @param {string} id The ID of the issue type.
		 * @return {void} 
		 */
		IssuetypeDeleteByAlternativeIssueTypeIdAndId(alternativeIssueTypeId: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issuetype/' + (id == null ? '' : encodeURIComponent(id)) + '?alternativeIssueTypeId=' + (alternativeIssueTypeId == null ? '' : encodeURIComponent(alternativeIssueTypeId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an issue type. Permissions required:
		 * Get issuetype/{id}
		 * @param {string} id The ID of the issue type.
		 * @return {void} Returned if the request is successful.
		 */
		IssuetypeGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issuetype/' + (id == null ? '' : encodeURIComponent(id)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates the issue type. Permissions required: Administer Jira global permission.
		 * Put issuetype/{id}
		 * @param {string} id The ID of the issue type.
		 * @return {void} Returned if the request is successful.
		 */
		IssuetypePutById(id: string, requestBody: IssuetypePutByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issuetype/' + (id == null ? '' : encodeURIComponent(id)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those assigned to the same workflow scheme, field configuration scheme, and screen scheme. Permissions required: Permission to access Jira.
		 * Get issuetype/{id}/alternatives
		 * @param {string} id The ID of the issue type.
		 * @return {void} Returned if the request is successful.
		 */
		IssuetypeAlternativesGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issuetype/' + (id == null ? '' : encodeURIComponent(id)) + '/alternatives', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Loads an avatar for the issue type.
		 * Post issuetype/{id}/avatar2
		 * @param {string} id The ID of the issue type.
		 * @param {number} size The length of each side of the crop region.
		 * @param {number} x The X coordinate of the top-left corner of the crop region.
		 * @param {number} y The Y coordinate of the top-left corner of the crop region.
		 * @return {void} 
		 */
		IssuetypeAvatar2PostByIdAndSizeAndXAndY(id: string, size: number, x: number, y: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issuetype/' + (id == null ? '' : encodeURIComponent(id)) + '/avatar2&size=' + size + '&x=' + x + '&y=' + y, { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all the issue type property keys of the issue type. Permissions required:
		 * Get issuetype/{issueTypeId}/properties
		 * @param {string} issueTypeId The ID of the issue type.
		 * @return {void} Returned if the request is successful.
		 */
		IssuetypePropertiesGetByIssueTypeId(issueTypeId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issuetype/' + (issueTypeId == null ? '' : encodeURIComponent(issueTypeId)) + '/properties', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the issue type property. Permissions required: Administer Jira global permission.
		 * Delete issuetype/{issueTypeId}/properties/{propertyKey}
		 * @param {string} issueTypeId The ID of the issue type.
		 * @param {string} propertyKey The key of the property. Use Get issue type property keys to get a list of all issue type property keys.
		 * @return {void} 
		 */
		IssuetypePropertiesDeleteByIssueTypeIdAndPropertyKey(issueTypeId: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issuetype/' + (issueTypeId == null ? '' : encodeURIComponent(issueTypeId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the key and value of the issue type property. Permissions required:
		 * Get issuetype/{issueTypeId}/properties/{propertyKey}
		 * @param {string} issueTypeId The ID of the issue type.
		 * @param {string} propertyKey The key of the property. Use Get issue type property keys to get a list of all issue type property keys.
		 * @return {void} Returned if the request is successful.
		 */
		IssuetypePropertiesGetByIssueTypeIdAndPropertyKey(issueTypeId: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issuetype/' + (issueTypeId == null ? '' : encodeURIComponent(issueTypeId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates or updates the value of the issue type property. Use this resource to store and update data against an issue type. The value of the request body must be a valid, non-empty JSON blob. The maximum length of the property value is 32768 bytes. Permissions required: Administer Jira global permission.
		 * Put issuetype/{issueTypeId}/properties/{propertyKey}
		 * @param {string} issueTypeId The ID of the issue type.
		 * @param {string} propertyKey The key of the issue type property. The maximum length of the key is 255 bytes.
		 * @return {void} Returned if the issue type property is updated.
		 */
		IssuetypePropertiesPutByIssueTypeIdAndPropertyKey(issueTypeId: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'issuetype/' + (issueTypeId == null ? '' : encodeURIComponent(issueTypeId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns reference data for JQL searches. This is a downloadable version of the documentation provided in Advanced searching - fields reference and Advanced searching - functions reference, along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder.
		 * Get jql/autocompletedata
		 * @return {void} Returned if the request is successful.
		 */
		JqlAutocompletedataGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'jql/autocompletedata', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the JQL search auto complete suggestions for a field.
		 * Get jql/autocompletedata/suggestions
		 * @param {string} fieldName The name of the field.
		 * @param {string} fieldValue The partial field item name entered by the user.
		 * @param {string} predicateName The name of the CHANGED operator predicate for which the suggestions are generated. The valid predicate operators are by, from, and to.
		 * @param {string} predicateValue The partial predicate item name entered by the user.
		 * @return {void} Returned if the request is successful.
		 */
		JqlAutocompletedataSuggestionsGetByFieldNameAndFieldValueAndPredicateNameAndPredicateValue(fieldName: string, fieldValue: string, predicateName: string, predicateValue: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'jql/autocompletedata/suggestions?fieldName=' + (fieldName == null ? '' : encodeURIComponent(fieldName)) + '&fieldValue=' + (fieldValue == null ? '' : encodeURIComponent(fieldValue)) + '&predicateName=' + (predicateName == null ? '' : encodeURIComponent(predicateName)) + '&predicateValue=' + (predicateValue == null ? '' : encodeURIComponent(predicateValue)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The query strings having personal data that need to be migrated. There should be at most 100 queries.
		 * Post jql/pdcleaner
		 * @return {void} Returned if the request is successful.
		 */
		JqlPdcleanerPost(requestBody: JqlPdcleanerPostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'jql/pdcleaner', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns a list of permissions indicating which permissions the user has. Details of the user's permissions can be obtained in a global, project, or issue context.
		 * Get mypermissions
		 * @param {string} issueId The ID of the issue.
		 * @param {string} issueKey The key of the issue. Ignored if issueId is provided.
		 * @param {string} permissions A comma separated list of permission keys. Omitting this parameter is deprecated. To get the list of available permissions, use Get all permissions. Note that deprecated keys cannot be used. Deprecated keys are not returned by Get all permissions but are returned by this operation if permissions is omitted.
		 * @param {string} projectId The ID of project.
		 * @param {string} projectKey The key of project. Ignored if projectId is provided.
		 * @return {void} Returned if the request is successful.
		 */
		MypermissionsGetByIssueIdAndIssueKeyAndPermissionsAndProjectIdAndProjectKey(issueId: string, issueKey: string, permissions: string, projectId: string, projectKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'mypermissions?issueId=' + (issueId == null ? '' : encodeURIComponent(issueId)) + '&issueKey=' + (issueKey == null ? '' : encodeURIComponent(issueKey)) + '&permissions=' + (permissions == null ? '' : encodeURIComponent(permissions)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&projectKey=' + (projectKey == null ? '' : encodeURIComponent(projectKey)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a preference of the user, which restores the default value of system defined settings.
		 * Delete mypreferences
		 * @param {string} key The key of the preference.
		 * @return {void} 
		 */
		MypreferencesDeleteByKey(key: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'mypreferences?key=' + (key == null ? '' : encodeURIComponent(key)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the value of a preference of the user.
		 * Get mypreferences
		 * @param {string} key The key of the preference.
		 * @return {void} Returned if the request is successful.
		 */
		MypreferencesGetByKey(key: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'mypreferences?key=' + (key == null ? '' : encodeURIComponent(key)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a preference for the user or updates its value. An arbitrary preference can be created with the value containing up to 255 characters. In addition, the following keys define system preferences that can be set or created:
		 * Put mypreferences
		 * @param {string} key The key of the preference. Maximum length is 255 characters.
		 * @return {void} 
		 */
		MypreferencesPutByKey(key: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'mypreferences?key=' + (key == null ? '' : encodeURIComponent(key)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the locale of the current user, which restores the default setting.
		 * Delete mypreferences/locale
		 * @return {void} 
		 */
		MypreferencesLocaleDelete(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'mypreferences/locale', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the locale for the current user.
		 * Get mypreferences/locale
		 * @return {void} Returned if the request is successful.
		 */
		MypreferencesLocaleGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'mypreferences/locale', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the locale of the current user. The requested locale must be one supported by the instance of Jira.
		 * Put mypreferences/locale
		 * @return {void} 
		 */
		MypreferencesLocalePut(requestBody: MypreferencesLocalePutBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'mypreferences/locale', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns details for the authenticated user.
		 * Get myself
		 * @param {string} expand Use expand to include additional information about user in the response. This parameter accepts multiple values separated by a comma:
		 * @return {void} Returned if the request is successful.
		 */
		MyselfGetByExpand(expand: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'myself?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a paginated list of notification schemes in order by display name.
		 * Get notificationscheme
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
		 * @param {number} maxResults The maximum number of items to return per page. Max is 50.
		 * @param {number} startAt The index of the first item to return in a page of results (page offset). The base index is 0.
		 * @return {void} Returned if the request is successful. Only returns notification schemes that the user has permission to access. An empty list is returned if the requesting user lacks permission to access all notification schemes.
		 */
		NotificationschemeGetByExpandAndMaxResultsAndStartAt(expand: string, maxResults: number, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'notificationscheme?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxResults=' + maxResults + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a notification scheme, including the list of events and the recipients who will receive notifications for those events.
		 * Get notificationscheme/{id}
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
		 * @param {number} id The ID of the notification scheme. Use Get notification schemes paginated to get a list of notification scheme IDs.
		 * @return {void} Returned if the request is successful.
		 */
		NotificationschemeGetByExpandAndId(expand: string, id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'notificationscheme/' + id + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all permissions, including:
		 * Get permissions
		 * @return {void} Returned if the request is successful.
		 */
		PermissionsGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'permissions', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all the projects where the user is granted a list of project permissions.
		 * Post permissions/project
		 * @return {void} Returned if the request is successful.
		 */
		PermissionsProjectPost(requestBody: PermissionsProjectPostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'permissions/project', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns all permission schemes.
		 * Get permissionscheme
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
		 * @return {void} Returned if the request is successful.
		 */
		PermissionschemeGetByExpand(expand: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'permissionscheme?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new permission scheme. You can create a permission scheme with or without defining a set of permission grants. Permissions required: Administer Jira global permission.
		 * Post permissionscheme
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
		 * @return {void} 
		 */
		PermissionschemePostByExpand(expand: string, requestBody: PermissionschemePostByExpandBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'permissionscheme?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a permission scheme. Permissions required: Administer Jira global permission.
		 * Delete permissionscheme/{schemeId}
		 * @param {number} schemeId The ID of the permission scheme being deleted (e.g., 10000).
		 * @return {void} 
		 */
		PermissionschemeDeleteBySchemeId(schemeId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'permissionscheme/' + schemeId, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a permission scheme. Permissions required: Permission to log in to Jira.
		 * Get permissionscheme/{schemeId}
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
		 * @param {number} schemeId The ID of the permission scheme to return (e.g., 10000).
		 * @return {void} Returned if the request is successful.
		 */
		PermissionschemeGetByExpandAndSchemeId(expand: string, schemeId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'permissionscheme/' + schemeId + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a permission scheme. Below are some important things to note when using this resource:
		 * Put permissionscheme/{schemeId}
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
		 * @param {number} schemeId The ID of the permission scheme to update (e.g., 10000).
		 * @return {void} Returned if the scheme is updated successfully.
		 */
		PermissionschemePutByExpandAndSchemeId(expand: string, schemeId: number, requestBody: PermissionschemePutByExpandAndSchemeIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'permissionscheme/' + schemeId + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns all permission grants for a permission scheme. Permissions required: Permission to log in to Jira.
		 * Get permissionscheme/{schemeId}/permission
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
		 * @param {number} schemeId The ID of the permission scheme (e.g., 10010).
		 * @return {void} Returned if the request is successful.
		 */
		PermissionschemePermissionGetByExpandAndSchemeId(expand: string, schemeId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'permissionscheme/' + schemeId + '/permission?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new permission grant in the given permission scheme. Permissions required: Administer Jira global permission.
		 * Post permissionscheme/{schemeId}/permission
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
		 * @param {number} schemeId The ID of the permission scheme in which to create a new permission grant.
		 * @return {void} 
		 */
		PermissionschemePermissionPostByExpandAndSchemeId(expand: string, schemeId: number, requestBody: PermissionschemePermissionPostByExpandAndSchemeIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'permissionscheme/' + schemeId + '/permission?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a permission grant from a permission scheme. See About permission schemes and grants for more details. Permissions required: Administer Jira global permission.
		 * Delete permissionscheme/{schemeId}/permission/{permissionId}
		 * @param {number} permissionId The ID of the permission grant to delete (e.g., 10847).
		 * @param {number} schemeId The ID of the permission scheme to delete the permission grant from (e.g., 10000).
		 * @return {void} 
		 */
		PermissionschemePermissionDeleteByPermissionIdAndSchemeId(permissionId: number, schemeId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'permissionscheme/' + schemeId + '/permission/' + permissionId, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a permission grant. Permissions required: Permission to log in to Jira.
		 * Get permissionscheme/{schemeId}/permission/{permissionId}
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
		 * @param {number} permissionId The ID of the permission grant (e.g., 10000).
		 * @param {number} schemeId The ID of the permission scheme (e.g., 10010).
		 * @return {void} Returned if the request is successful.
		 */
		PermissionschemePermissionGetByExpandAndPermissionIdAndSchemeId(expand: string, permissionId: number, schemeId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'permissionscheme/' + schemeId + '/permission/' + permissionId + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the list of all issue priorities.
		 * Get priority
		 * @return {void} Returned if the request is successful.
		 */
		PriorityGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'priority', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an issue priority.
		 * Get priority/{id}
		 * @param {string} id The ID of the issue priority.
		 * @return {void} Returned if the request is successful.
		 */
		PriorityGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'priority/' + (id == null ? '' : encodeURIComponent(id)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all projects visible to the currently logged in user. Deprecated, use Get projects paginated that supports search and pagination. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, it returns all projects that are visible for anonymous users.
		 * Get project
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
		 * @param {number} recent Returns the most recently accessed projects for the current user. You may specify the number of results to return up to a maximum of 20. If no user is logged in, then the recently accessed projects will be returned based on the current HTTP session.
		 * @return {void} Returns a list of projects visible to the current user or visible with anonymous access if no user is logged in.
		 */
		ProjectGetByExpandAndRecent(expand: string, recent: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&recent=' + recent, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new project.
		 * Post project
		 * @return {void} 
		 */
		ProjectPost(requestBody: ProjectPostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns projects visible to the currently logged in user. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, then all projects visible to anonymous users are returned.
		 * Get project/search
		 * @param {string} action Filter results by projects for which the calling user has permission to perform the given action. The view action corresponds with the Browse projects project permission, and the edit action corresponds with Administer project permissions.
		 * @param {number} categoryId The ID of the project's category. A complete list of category IDs can be found using the Get all project categories resource.
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
		 * @param {number} maxResults The maximum number of items to return per page. Max 50.
		 * @param {string} orderBy Order the results by a particular field. If the orderBy field is not set, then projects are listed in ascending order by project key:
		 * @param {string} query Filter the results using a literal string. Projects with a matching key or name are returned (case insensitive).
		 * @param {number} startAt The starting index of the first item returned in the page of results (page offset). The base index is 0.
		 * @param {string} typeKey Orders results by the project type. This parameter accepts multiple values separated by a comma. Valid values are business, service_desk, and software.
		 * @return {void} Returned if the request is successful. Returns a single page of projects.
		 */
		ProjectSearchGetByActionAndCategoryIdAndExpandAndMaxResultsAndOrderByAndQueryAndStartAtAndTypeKey(action: string, categoryId: number, expand: string, maxResults: number, orderBy: string, query: string, startAt: number, typeKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/search?action=' + (action == null ? '' : encodeURIComponent(action)) + '&categoryId=' + categoryId + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&startAt=' + startAt + '&typeKey=' + (typeKey == null ? '' : encodeURIComponent(typeKey)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all project types, whether or not the instance has a valid license for each type.
		 * Get project/type
		 * @return {void} Returned if the request is successful.
		 */
		ProjectTypeGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/type', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a project type.
		 * Get project/type/{projectTypeKey}
		 * @param {string} projectTypeKey The key of the project type.
		 * @return {void} Returned if the request is successful.
		 */
		ProjectTypeGetByProjectTypeKey(projectTypeKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/type/' + (projectTypeKey == null ? '' : encodeURIComponent(projectTypeKey)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a project type if it is accessible to the logged in user.
		 * Get project/type/{projectTypeKey}/accessible
		 * @param {string} projectTypeKey The key of the project type.
		 * @return {void} Returned if the request is successful.
		 */
		ProjectTypeAccessibleGetByProjectTypeKey(projectTypeKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/type/' + (projectTypeKey == null ? '' : encodeURIComponent(projectTypeKey)) + '/accessible', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes an existing project.
		 * Delete project/{projectIdOrKey}
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @return {void} 
		 */
		ProjectDeleteByProjectIdOrKey(projectIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the project details for the specified project.
		 * Get project/{projectIdOrKey}
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that the project description, issue types, and project lead are included in all responses by default:
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @return {void} Returned if successful.
		 */
		ProjectGetByExpandAndProjectIdOrKey(expand: string, projectIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates the project details of an existing project.
		 * Put project/{projectIdOrKey}
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that the project description, issue types, and project lead are included in all responses by default:
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @return {void} Returned if the project was updated successfully.
		 */
		ProjectPutByExpandAndProjectIdOrKey(expand: string, projectIdOrKey: string, requestBody: ProjectPutByExpandAndProjectIdOrKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Sets the avatar displayed for a project.
		 * Put project/{projectIdOrKey}/avatar
		 * @param {string} projectIdOrKey The ID or (case-sensitive) key of the project.
		 * @return {void} 
		 */
		ProjectAvatarPutByProjectIdOrKey(projectIdOrKey: string, requestBody: ProjectAvatarPutByProjectIdOrKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/avatar', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a custom avatar from a project. Note that system avatars cannot be deleted.
		 * Delete project/{projectIdOrKey}/avatar/{id}
		 * @param {number} id The ID of the avatar.
		 * @param {string} projectIdOrKey The project ID or (case-sensitive) key.
		 * @return {void} 
		 */
		ProjectAvatarDeleteByIdAndProjectIdOrKey(id: number, projectIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/avatar/' + id, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Loads an avatar for a project.
		 * Post project/{projectIdOrKey}/avatar2
		 * @param {string} projectIdOrKey The ID or (case-sensitive) key of the project.
		 * @param {number} size The length of each side of the crop region.
		 * @param {number} x The X coordinate of the top-left corner of the crop region.
		 * @param {number} y The Y coordinate of the top-left corner of the crop region.
		 * @return {void} 
		 */
		ProjectAvatar2PostByProjectIdOrKeyAndSizeAndXAndY(projectIdOrKey: string, size: number, x: number, y: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/avatar2&size=' + size + '&x=' + x + '&y=' + y, { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all project avatars, grouped by system and custom avatars.
		 * Get project/{projectIdOrKey}/avatars
		 * @param {string} projectIdOrKey The ID or (case-sensitive) key of the project.
		 * @return {void} Returned if request is successful.
		 */
		ProjectAvatarsGetByProjectIdOrKey(projectIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/avatars', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a paginated representation of all components existing in a single project. See the Get project components resource if you want to get a full list of versions without pagination.
		 * Get project/{projectIdOrKey}/component
		 * @param {number} maxResults The maximum number of components to return per page. Max 50.
		 * @param {string} orderBy Order the results by a particular field:
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @param {string} query Filter the results using a literal string. Components with a matching name or description are returned (case insensitive).
		 * @param {number} startAt The starting index of the returned list of components. The base index is 0.
		 * @return {void} Returns a single page of components.
		 */
		ProjectComponentGetByMaxResultsAndOrderByAndProjectIdOrKeyAndQueryAndStartAt(maxResults: number, orderBy: string, projectIdOrKey: string, query: string, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/component?maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all components existing in a single project. See the Get project components paginated resource if you want to get a full list of components with pagination.
		 * Get project/{projectIdOrKey}/components
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @return {void} Returned if the project exists and the user has permission to view its components.
		 */
		ProjectComponentsGetByProjectIdOrKey(projectIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/components', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all project property keys for the project.
		 * Get project/{projectIdOrKey}/properties
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @return {void} Returned if the request was successful.
		 */
		ProjectPropertiesGetByProjectIdOrKey(projectIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/properties', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Removes the property from the project.
		 * Delete project/{projectIdOrKey}/properties/{propertyKey}
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @param {string} propertyKey The project property key. Use Get project property keys to get a list of all project property keys.
		 * @return {void} 
		 */
		ProjectPropertiesDeleteByProjectIdOrKeyAndPropertyKey(projectIdOrKey: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the value of the project property.
		 * Get project/{projectIdOrKey}/properties/{propertyKey}
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @param {string} propertyKey The project property key. Use Get project property keys to get a list of all project property keys.
		 * @return {void} Returned if the request was successful.
		 */
		ProjectPropertiesGetByProjectIdOrKeyAndPropertyKey(projectIdOrKey: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the value of the project property. You can use project properties to store custom data against the project.
		 * Put project/{projectIdOrKey}/properties/{propertyKey}
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @param {string} propertyKey The key of the project property. The maximum length is 255 bytes.
		 * @return {void} Returned if the project property is successfully updated.
		 */
		ProjectPropertiesPutByProjectIdOrKeyAndPropertyKey(projectIdOrKey: string, propertyKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of project roles for the project.
		 * Get project/{projectIdOrKey}/role
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @return {void} Returned if the request is successful.
		 */
		ProjectRoleGetByProjectIdOrKey(projectIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/role', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes actors from a project role for the project.
		 * Delete project/{projectIdOrKey}/role/{id}
		 * @param {string} group The name of the group to remove from the project role.
		 * @param {number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @param {string} user The user account ID of the user to remove from the project role.
		 * @return {void} 
		 */
		ProjectRoleDeleteByGroupAndIdAndProjectIdOrKeyAndUser(group: string, id: number, projectIdOrKey: string, user: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/role/' + id + '?group=' + (group == null ? '' : encodeURIComponent(group)) + '&user=' + (user == null ? '' : encodeURIComponent(user)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the project role's details and actors associated with the project. The list of actors is sorted by display name.
		 * Get project/{projectIdOrKey}/role/{id}
		 * @param {number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @return {void} Returned if the request is successful.
		 */
		ProjectRoleGetByIdAndProjectIdOrKey(id: number, projectIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/role/' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds additional actors to a project role for the project.
		 * Post project/{projectIdOrKey}/role/{id}
		 * @param {number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @return {void} Example response (application/json)
		 */
		ProjectRolePostByIdAndProjectIdOrKey(id: number, projectIdOrKey: string, requestBody: ProjectRolePostByIdAndProjectIdOrKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/role/' + id, { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Associates actors with the project role for the project, replacing all existing actors.
		 * Put project/{projectIdOrKey}/role/{id}
		 * @param {number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @return {void} Returned if the request is successful. The complete list of actors for the project is returned.
		 */
		ProjectRolePutByIdAndProjectIdOrKey(id: number, projectIdOrKey: string, requestBody: ProjectRolePutByIdAndProjectIdOrKeyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/role/' + id, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns all project roles and the details for each role. Note that the list of project roles is common to all projects.
		 * Get project/{projectIdOrKey}/roledetails
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @return {void} Returned if the request is successful.
		 */
		ProjectRoledetailsGetByProjectIdOrKey(projectIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/roledetails', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the valid statuses for a project. The statuses are grouped by issue type, as each project has a set of valid issue types and each issue type has a set of valid statuses.
		 * Get project/{projectIdOrKey}/statuses
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @return {void} Returns a list of issue types and valid statuses for each type.
		 */
		ProjectStatusesGetByProjectIdOrKey(projectIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/statuses', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates the project type.
		 * Put project/{projectIdOrKey}/type/{newProjectTypeKey}
		 * @param {string} newProjectTypeKey The key of the new project type.
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @return {void} Returned if the project type was updated successfully.
		 */
		ProjectTypePutByNewProjectTypeKeyAndProjectIdOrKey(newProjectTypeKey: string, projectIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/type/' + (newProjectTypeKey == null ? '' : encodeURIComponent(newProjectTypeKey)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a paginated representation of all versions existing in a single project. See the Get project versions resource if you want to get a full list of versions without pagination.
		 * Get project/{projectIdOrKey}/version
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
		 * @param {number} maxResults The maximum number of versions to return per page. Max 50.
		 * @param {string} orderBy Order the results by a particular field:
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @param {string} query Filter the results using a literal string. Versions with matching name or description are returned (case insensitive).
		 * @param {number} startAt The starting index of the returned list of versions (page offset). The base index is 0.
		 * @param {string} status A comma separated string used to filter the results by version status.
		 * @return {void} Returns a single page of versions.
		 */
		ProjectVersionGetByExpandAndMaxResultsAndOrderByAndProjectIdOrKeyAndQueryAndStartAtAndStatus(expand: string, maxResults: number, orderBy: string, projectIdOrKey: string, query: string, startAt: number, status: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/version?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&startAt=' + startAt + '&status=' + (status == null ? '' : encodeURIComponent(status)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all versions existing in a single project. The response is not paginated. Use Get project versions paginated if you want to get the versions in a project with pagination.
		 * Get project/{projectIdOrKey}/versions
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
		 * @param {string} projectIdOrKey The project ID or project key (case sensitive).
		 * @return {void} Returned if successful.
		 */
		ProjectVersionsGetByExpandAndProjectIdOrKey(expand: string, projectIdOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectIdOrKey == null ? '' : encodeURIComponent(projectIdOrKey)) + '/versions?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the issue security scheme associated with the project.
		 * Get project/{projectKeyOrId}/issuesecuritylevelscheme
		 * @param {string} projectKeyOrId The project ID or project key (case sensitive).
		 * @return {void} Returned if the request is successful.
		 */
		ProjectIssuesecuritylevelschemeGetByProjectKeyOrId(projectKeyOrId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectKeyOrId == null ? '' : encodeURIComponent(projectKeyOrId)) + '/issuesecuritylevelscheme', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a notification scheme associated with the project. See the Get notification scheme resource for more information about notification schemes.
		 * Get project/{projectKeyOrId}/notificationscheme
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
		 * @param {string} projectKeyOrId The project ID or project key (case sensitive).
		 * @return {void} Returned if the request is successful.
		 */
		ProjectNotificationschemeGetByExpandAndProjectKeyOrId(expand: string, projectKeyOrId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectKeyOrId == null ? '' : encodeURIComponent(projectKeyOrId)) + '/notificationscheme?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the permission scheme associated with the project.
		 * Get project/{projectKeyOrId}/permissionscheme
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
		 * @param {string} projectKeyOrId The project ID or project key (case sensitive).
		 * @return {void} Returned if the request is successful.
		 */
		ProjectPermissionschemeGetByExpandAndProjectKeyOrId(expand: string, projectKeyOrId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectKeyOrId == null ? '' : encodeURIComponent(projectKeyOrId)) + '/permissionscheme?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Associates a permission scheme with a particular project. See Managing project permissions for more information about permission schemes.
		 * Put project/{projectKeyOrId}/permissionscheme
		 * @param {string} expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
		 * @param {string} projectKeyOrId The project ID or project key (case sensitive).
		 * @return {void} Returned if the request is successful.
		 */
		ProjectPermissionschemePutByExpandAndProjectKeyOrId(expand: string, projectKeyOrId: string, requestBody: ProjectPermissionschemePutByExpandAndProjectKeyOrIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectKeyOrId == null ? '' : encodeURIComponent(projectKeyOrId)) + '/permissionscheme?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns all issue security levels for the project that the currently authenticated user has access to. If the user does not have permission to see an issue security level, then that level is not returned. If the user lacks the Set Issue Security permission, then an empty list is returned.
		 * Get project/{projectKeyOrId}/securitylevel
		 * @param {string} projectKeyOrId The project ID or project key (case sensitive).
		 * @return {void} Returned if the request is successful.
		 */
		ProjectSecuritylevelGetByProjectKeyOrId(projectKeyOrId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'project/' + (projectKeyOrId == null ? '' : encodeURIComponent(projectKeyOrId)) + '/securitylevel', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all project categories.
		 * Get projectCategory
		 * @return {void} Returned if the request is successful.
		 */
		ProjectCategoryGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'projectCategory', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a project category.
		 * Post projectCategory
		 * @return {void} 
		 */
		ProjectCategoryPost(requestBody: ProjectCategoryPostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'projectCategory', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a project category.
		 * Delete projectCategory/{id}
		 * @param {number} id ID of the project category to delete.
		 * @return {void} 
		 */
		ProjectCategoryDeleteById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'projectCategory/' + id, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a project category.
		 * Get projectCategory/{id}
		 * @param {number} id The ID of the project category.
		 * @return {void} Returned if the request is successful.
		 */
		ProjectCategoryGetById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'projectCategory/' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a project category.
		 * Put projectCategory/{id}
		 * @return {void} Returned if the request is successful.
		 */
		ProjectCategoryPutById(id: number, requestBody: ProjectCategoryPutByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'projectCategory/' + id, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Validates a project key by confirming the key is a valid string and not in use.
		 * Get projectvalidate/key
		 * @param {string} key The project key.
		 * @return {void} Returned if the request is successful.
		 */
		ProjectvalidateKeyGetByKey(key: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'projectvalidate/key?key=' + (key == null ? '' : encodeURIComponent(key)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.
		 * Get projectvalidate/validProjectKey
		 * @param {string} key The project key.
		 * @return {void} Returned if the request is successful.
		 */
		ProjectvalidateValidProjectKeyGetByKey(key: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'projectvalidate/validProjectKey?key=' + (key == null ? '' : encodeURIComponent(key)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Checks that a project name isn't in use. If the name isn't in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned.
		 * Get projectvalidate/validProjectName
		 * @param {string} name The project name.
		 * @return {void} Returned if the request is successful.
		 */
		ProjectvalidateValidProjectNameGetByName(name: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'projectvalidate/validProjectName?name=' + (name == null ? '' : encodeURIComponent(name)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of all issue resolution values.
		 * Get resolution
		 * @return {void} Returned if the request is successful.
		 */
		ResolutionGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'resolution', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an issue resolution value.
		 * Get resolution/{id}
		 * @param {string} id The ID of the issue resolution value.
		 * @return {void} Returned if the request is successful.
		 */
		ResolutionGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'resolution/' + (id == null ? '' : encodeURIComponent(id)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of all project roles, complete with project role details and default actors.
		 * Get role
		 * @return {void} Returned if the request is successful.
		 */
		RoleGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'role', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new project role with no default actors. You can use the Add default actors to project role the project method to add default actors to the project role after creating it.
		 * Post role
		 * @return {void} Returned if the request is successful.
		 */
		RolePost(requestBody: RolePostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'role', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.
		 * Delete role/{id}
		 * @param {number} id The ID of the project role to delete. Use Get all project roles to get a list of project role IDs.
		 * @param {number} swap The ID of the project role that will replace the one being deleted.
		 * @return {void} 
		 */
		RoleDeleteByIdAndSwap(id: number, swap: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'role/' + id + '?swap=' + swap, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.
		 * Get role/{id}
		 * @param {number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
		 * @return {void} Returned if the request is successful.
		 */
		RoleGetById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'role/' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update either the project role's name or its description.
		 * Post role/{id}
		 * @param {number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
		 * @return {void} Returned if the request is successful.
		 */
		RolePostById(id: number, requestBody: RolePostByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'role/' + id, { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Update the project role's name and description. You must include both a name and a description in the request.
		 * Put role/{id}
		 * @param {number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
		 * @return {void} Returned if the request is successful.
		 */
		RolePutById(id: number, requestBody: RolePutByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'role/' + id, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Removes default actors from the project role. You may remove either a group or user, but you cannot remove a group and a user in the same request.
		 * Delete role/{id}/actors
		 * @param {string} group The group name of the group to be removed as a default actor.
		 * @param {number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
		 * @param {string} user The user account ID of the user to remove as a default actor.
		 * @return {void} Returned if the request was successful.
		 */
		RoleActorsDeleteByGroupAndIdAndUser(group: string, id: number, user: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'role/' + id + '/actors?group=' + (group == null ? '' : encodeURIComponent(group)) + '&user=' + (user == null ? '' : encodeURIComponent(user)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the default actors for the project role.
		 * Get role/{id}/actors
		 * @param {number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
		 * @return {void} Returned if the request is successful.
		 */
		RoleActorsGetById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'role/' + id + '/actors', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds default actors to the given role. You may add either groups or users, but you cannot add groups and users in the same request.
		 * Post role/{id}/actors
		 * @param {number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
		 * @return {void} Returned if the request was successful.
		 */
		RoleActorsPostById(id: number, requestBody: RoleActorsPostByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'role/' + id + '/actors', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns all screens.
		 * Get screens
		 * @param {number} maxResults The maximum number of items to return per page. Maximum is 100.
		 * @param {number} startAt The index of the first item to return in a page of results (page offset).
		 * @return {void} Returned if the request is successful.
		 */
		ScreensGetByMaxResultsAndStartAt(maxResults: number, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'screens?maxResults=' + maxResults + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds a field to the default tab of the default screen.
		 * Post screens/addToDefault/{fieldId}
		 * @param {string} fieldId The ID of the field.
		 * @return {void} Returned if the request is successful.
		 */
		ScreensAddToDefaultPostByFieldId(fieldId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'screens/addToDefault/' + (fieldId == null ? '' : encodeURIComponent(fieldId)), { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the fields that can be added to a tab on a screen.
		 * Get screens/{screenId}/availableFields
		 * @param {number} screenId The ID of the screen.
		 * @return {void} Returned if the request is successful.
		 */
		ScreensAvailableFieldsGetByScreenId(screenId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'screens/' + screenId + '/availableFields', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the list of tabs for a screen.
		 * Get screens/{screenId}/tabs
		 * @param {string} projectKey The key of the project.
		 * @param {number} screenId The ID of the screen.
		 * @return {void} Returned if the request is successful.
		 */
		ScreensTabsGetByProjectKeyAndScreenId(projectKey: string, screenId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'screens/' + screenId + '/tabs?projectKey=' + (projectKey == null ? '' : encodeURIComponent(projectKey)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a tab for a screen.
		 * Post screens/{screenId}/tabs
		 * @param {number} screenId The ID of the screen.
		 * @return {void} Returned if the request is successful.
		 */
		ScreensTabsPostByScreenId(screenId: number, requestBody: ScreensTabsPostByScreenIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'screens/' + screenId + '/tabs', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a screen tab.
		 * Delete screens/{screenId}/tabs/{tabId}
		 * @param {number} screenId The ID of the screen.
		 * @param {number} tabId The ID of the screen tab.
		 * @return {void} 
		 */
		ScreensTabsDeleteByScreenIdAndTabId(screenId: number, tabId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'screens/' + screenId + '/tabs/' + tabId, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates the name of a screen tab.
		 * Put screens/{screenId}/tabs/{tabId}
		 * @param {number} screenId The ID of the screen.
		 * @param {number} tabId The ID of the screen tab.
		 * @return {void} Returned if the request is successful.
		 */
		ScreensTabsPutByScreenIdAndTabId(screenId: number, tabId: number, requestBody: ScreensTabsPutByScreenIdAndTabIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'screens/' + screenId + '/tabs/' + tabId, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns all fields for a screen tab.
		 * Get screens/{screenId}/tabs/{tabId}/fields
		 * @param {string} projectKey The key of the project.
		 * @param {number} screenId The ID of the screen.
		 * @param {number} tabId The ID of the screen tab.
		 * @return {void} Returned if the request is successful.
		 */
		ScreensTabsFieldsGetByProjectKeyAndScreenIdAndTabId(projectKey: string, screenId: number, tabId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'screens/' + screenId + '/tabs/' + tabId + '/fields?projectKey=' + (projectKey == null ? '' : encodeURIComponent(projectKey)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds a field to a screen tab.
		 * Post screens/{screenId}/tabs/{tabId}/fields
		 * @param {number} screenId The ID of the screen.
		 * @param {number} tabId The ID of the screen tab.
		 * @return {void} Returned if the request is successful.
		 */
		ScreensTabsFieldsPostByScreenIdAndTabId(screenId: number, tabId: number, requestBody: ScreensTabsFieldsPostByScreenIdAndTabIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'screens/' + screenId + '/tabs/' + tabId + '/fields', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Removes a field from a screen tab.
		 * Delete screens/{screenId}/tabs/{tabId}/fields/{id}
		 * @param {string} id The ID of the field.
		 * @param {number} screenId The ID of the screen.
		 * @param {number} tabId The ID of the screen tab.
		 * @return {void} 
		 */
		ScreensTabsFieldsDeleteByIdAndScreenIdAndTabId(id: string, screenId: number, tabId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'screens/' + screenId + '/tabs/' + tabId + '/fields/' + (id == null ? '' : encodeURIComponent(id)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Moves a screen tab field.
		 * Post screens/{screenId}/tabs/{tabId}/fields/{id}/move
		 * @param {string} id The ID of the field.
		 * @param {number} screenId The ID of the screen.
		 * @param {number} tabId The ID of the screen tab.
		 * @return {void} 
		 */
		ScreensTabsFieldsMovePostByIdAndScreenIdAndTabId(id: string, screenId: number, tabId: number, requestBody: ScreensTabsFieldsMovePostByIdAndScreenIdAndTabIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'screens/' + screenId + '/tabs/' + tabId + '/fields/' + (id == null ? '' : encodeURIComponent(id)) + '/move', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Moves a screen tab.
		 * Post screens/{screenId}/tabs/{tabId}/move/{pos}
		 * @param {number} pos The position of tab. The base index is 0.
		 * @param {number} screenId The ID of the screen.
		 * @param {number} tabId The ID of the screen tab.
		 * @return {void} 
		 */
		ScreensTabsMovePostByPosAndScreenIdAndTabId(pos: number, screenId: number, tabId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'screens/' + screenId + '/tabs/' + tabId + '/move/' + pos, { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Searches for issues using JQL. Permissions required: Permission to access Jira.
		 * Get search
		 * @param {string} expand Use expand to include additional information about issues in the response. This parameter accepts multiple values separated by a comma:
		 * @param {Array<string>} fields A comma-separated list of fields to return for each issue, use it to retrieve a subset of fields. Allowed values:
		 * @param {boolean} fieldsByKeys Reference fields by their key (rather than ID).
		 * @param {string} jql The JQL that defines the search. If no JQL expression is provided, all issues are returned. Note that username and userkey have been deprecated as search terms for this parameter. See the migration guide for details. Use accountId instead.
		 * @param {number} maxResults The maximum number of items to return per page. Maximum is 100.
		 * @param {Array<string>} properties A comma-separated list of up to 5 issue properties to include in the results.
		 * @param {number} startAt The index of the first item to return in the page of results (page offset).
		 * @param {string} validateQuery Determines how to validate the JQL query and treat the validation results. Supported values are:
		 * @return {void} Returned if the request is successful.
		 */
		SearchGetByExpandAndFieldsAndFieldsByKeysAndJqlAndMaxResultsAndPropertiesAndStartAtAndValidateQuery(expand: string, fields: Array<string>, fieldsByKeys: boolean, jql: string, maxResults: number, properties: Array<string>, startAt: number, validateQuery: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'search?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&' + fields.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&fieldsByKeys=' + fieldsByKeys + '&jql=' + (jql == null ? '' : encodeURIComponent(jql)) + '&maxResults=' + maxResults + '&' + properties.map(z => `properties=${encodeURIComponent(z)}`).join('&') + '&startAt=' + startAt + '&validateQuery=' + (validateQuery == null ? '' : encodeURIComponent(validateQuery)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Searches for issues using JQL. Permissions required: Permission to access Jira.
		 * Post search
		 * @return {void} Returned if the request is successful.
		 */
		SearchPost(requestBody: SearchPostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'search', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns details of an issue security level.
		 * Get securitylevel/{id}
		 * @param {string} id The ID of the issue security level.
		 * @return {void} Returned if the request is successful.
		 */
		SecuritylevelGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'securitylevel/' + (id == null ? '' : encodeURIComponent(id)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns information about the Jira instance.
		 * Get serverInfo
		 * @return {void} Returns if the request is successful.
		 */
		ServerInfoGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'serverInfo', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the default issue navigator columns.
		 * Get settings/columns
		 * @return {void} Returned if the request is successful.
		 */
		SettingsColumnsGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'settings/columns', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the default issue navigator columns.
		 * Put settings/columns
		 * @return {void} Returned if the request is successful.
		 */
		SettingsColumnsPut(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'settings/columns', { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of all statuses associated with workflows.
		 * Get status
		 * @return {void} Returned if the request is successful.
		 */
		StatusGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'status', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a status. The status must be associated with a workflow to be returned.
		 * Get status/{idOrName}
		 * @param {string} idOrName The ID or name of the status.
		 * @return {void} Returned if the request is successful.
		 */
		StatusGetByIdOrName(idOrName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'status/' + (idOrName == null ? '' : encodeURIComponent(idOrName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of all status categories.
		 * Get statuscategory
		 * @return {void} Returned if the request is successful.
		 */
		StatuscategoryGet(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'statuscategory', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a status category. Status categories provided a mechanism for categorizing statuses.
		 * Get statuscategory/{idOrKey}
		 * @param {string} idOrKey The ID or key of the status category.
		 * @return {void} Returned if the request is successful.
		 */
		StatuscategoryGetByIdOrKey(idOrKey: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'statuscategory/' + (idOrKey == null ? '' : encodeURIComponent(idOrKey)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the status of a long-running asynchronous task.
		 * Get task/{taskId}
		 * @param {string} taskId The ID of the task.
		 * @return {void} Returned if the request is successful.
		 */
		TaskGetByTaskId(taskId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'task/' + (taskId == null ? '' : encodeURIComponent(taskId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Cancels a task.
		 * Post task/{taskId}/cancel
		 * @param {string} taskId The ID of the task.
		 * @return {void} 
		 */
		TaskCancelPostByTaskId(taskId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'task/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the system and custom avatars for a project or issue type.
		 * Get universal_avatar/type/{type}/owner/{entityId}
		 * @param {string} entityId The ID of the entity item.
		 * @param {string} type The type of the entity. Valid values are project and issuetype.
		 * @return {void} Returned if the request is successful.
		 */
		Universal_avatarTypeOwnerGetByEntityIdAndType(entityId: string, type: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'universal_avatar/type/' + (type == null ? '' : encodeURIComponent(type)) + '/owner/' + (entityId == null ? '' : encodeURIComponent(entityId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Loads a custom avatar for a project or issue type.
		 * Post universal_avatar/type/{type}/owner/{entityId}
		 * @param {string} entityId The ID of the entity item.
		 * @param {number} size The length of each side of the crop region.
		 * @param {string} type The type of the entity. Valid values are project and issuetype.
		 * @param {number} x The X coordinate of the top-left corner of the crop region.
		 * @param {number} y The Y coordinate of the top-left corner of the crop region.
		 * @return {void} 
		 */
		Universal_avatarTypeOwnerPostByEntityIdAndSizeAndTypeAndXAndY(entityId: string, size: number, type: string, x: number, y: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'universal_avatar/type/' + (type == null ? '' : encodeURIComponent(type)) + '/owner/' + (entityId == null ? '' : encodeURIComponent(entityId)) + '&size=' + size + '&x=' + x + '&y=' + y, { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes an avatar from a project or issue type.
		 * Delete universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id}
		 * @param {number} id The ID of the avatar.
		 * @param {string} owningObjectId The ID of the entity item.
		 * @param {string} type The type of the entity. Valid values are project and issuetype.
		 * @return {void} 
		 */
		Universal_avatarTypeOwnerAvatarDeleteByIdAndOwningObjectIdAndType(id: number, owningObjectId: string, type: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'universal_avatar/type/' + (type == null ? '' : encodeURIComponent(type)) + '/owner/' + (owningObjectId == null ? '' : encodeURIComponent(owningObjectId)) + '/avatar/' + id, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a user. Permissions required: Site administration (i.e., member of the site-admin group).
		 * Delete user
		 * @param {string} accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
		 * @param {string} key This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
		 * @return {void} 
		 */
		UserDeleteByAccountIdAndKeyAndUsername(accountId: string, key: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&key=' + (key == null ? '' : encodeURIComponent(key)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a user. Permissions required: None.
		 * Get user
		 * @param {string} accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
		 * @param {string} expand Use expand to include additional information about users in the response. This parameter accepts multiple values separated by a comma:
		 * @param {string} key This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
		 * @return {void} Returned if the request is successful.
		 */
		UserGetByAccountIdAndExpandAndKeyAndUsername(accountId: string, expand: string, key: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&key=' + (key == null ? '' : encodeURIComponent(key)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated. The option is provided to set or generate a password for the user. When using the option to generate a password, by omitting password from the request, include "notification": "true" to ensure the user is sent an email advising them that their account has been created. This email includes a link for the user to set their password. If the notification isn't sent for a generated password, the user will need to be sent a reset password request from Jira. Permissions required: Administer Jira global permission
		 * Post user
		 * @return {void} 
		 */
		UserPost(requestBody: UserPostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns a list of users who fulfill both of these criteria:
		 * Get user/assignable/multiProjectSearch
		 * @param {number} maxResults The maximum number of items to return per page. Maximum is 1000.
		 * @param {string} projectKeys A comma-separated list of project keys (case sensitive).
		 * @param {string} query A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com.
		 * @param {number} startAt The index of the first item to return in a page of results (page offset).
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark.
		 * @return {void} Returned if the request is successful.
		 */
		UserAssignableMultiProjectSearchGetByMaxResultsAndProjectKeysAndQueryAndStartAtAndUsername(maxResults: number, projectKeys: string, query: string, startAt: number, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/assignable/multiProjectSearch?maxResults=' + maxResults + '&projectKeys=' + (projectKeys == null ? '' : encodeURIComponent(projectKeys)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&startAt=' + startAt + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of users that can be assigned to an issue. Use this method to find the list of users who can be assigned to:
		 * Get user/assignable/search
		 * @param {number} actionDescriptorId The ID of the transition.
		 * @param {string} issueKey The key of the issue. Required, unless project is specified.
		 * @param {number} maxResults The maximum number of items to return per page. Maximum is 1000.
		 * @param {string} project The project ID or project key (case sensitive). Required, unless issueKey is specified.
		 * @param {string} query A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
		 * @param {number} startAt The index of the first item to return in a page of results (page offset).
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
		 * @return {void} Returned if the request is successful.
		 */
		UserAssignableSearchGetByActionDescriptorIdAndIssueKeyAndMaxResultsAndProjectAndQueryAndStartAtAndUsername(actionDescriptorId: number, issueKey: string, maxResults: number, project: string, query: string, startAt: number, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/assignable/search?actionDescriptorId=' + actionDescriptorId + '&issueKey=' + (issueKey == null ? '' : encodeURIComponent(issueKey)) + '&maxResults=' + maxResults + '&project=' + (project == null ? '' : encodeURIComponent(project)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&startAt=' + startAt + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns details of users specified in a list of usernames or keys. Permissions required: Administer Jira global permission. Users with permission to access Jira can call this method, but empty search results are returned.
		 * Get user/bulk
		 * @param {Array<string>} key Comma-separated list of user keys. Required if username isn't provided.
		 * @param {number} maxResults The maximum number of items to return per page. Maximum is 200.
		 * @param {number} startAt The index of the first item to return in a page of results (page offset).
		 * @param {Array<string>} username Comma-separated list of usernames. Required if key isn't provided.
		 * @return {void} Returned if the request is successful.
		 */
		UserBulkGetByKeyAndMaxResultsAndStartAtAndUsername(key: Array<string>, maxResults: number, startAt: number, username: Array<string>, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/bulk?' + key.map(z => `key=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&startAt=' + startAt + '&' + username.map(z => `username=${encodeURIComponent(z)}`).join('&'), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Resets the default issue table columns for the user to the system default. If a username is not passed, the calling user's default columns are reset. Permissions required:
		 * Delete user/columns
		 * @param {string} accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
		 * @return {void} 
		 */
		UserColumnsDeleteByAccountIdAndUsername(accountId: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/columns?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the default issue table columns for the user. If a username is not passed in the request, the calling user's details are returned. Permissions required:
		 * Get user/columns
		 * @param {string} accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
		 * @return {void} Returned if the request is successful.
		 */
		UserColumnsGetByAccountIdAndUsername(accountId: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/columns?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the default issue table columns for the user. If a username is not passed, the calling user's default columns are set. If no column details are sent, then all default columns are removed. The parameters for this resource are expressed as HTML form data. For example, in curl: curl -X PUT -d username=<username> -d columns=summary -d columns=description <url> Permissions required:
		 * Put user/columns
		 * @param {string} accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
		 * @return {void} Returned if the request is successful.
		 */
		UserColumnsPutByAccountId(accountId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/columns?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the groups to which a user belongs. Permissions required: Browse users and groups global permission.
		 * Get user/groups
		 * @param {string} accountId The account ID of the user.
		 * @param {string} key The key of the user.
		 * @param {string} username The username of the user. Deprecated in favour of accountId.
		 * @return {void} Returned if the request is successful.
		 */
		UserGroupsGetByAccountIdAndKeyAndUsername(accountId: string, key: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/groups?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&key=' + (key == null ? '' : encodeURIComponent(key)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of users who fulfill both of these criteria:
		 * Get user/permission/search
		 * @param {string} issueKey The issue key for the issue.
		 * @param {number} maxResults The maximum number of items to return per page. Maximum is 1000.
		 * @param {string} permissions A comma-separated list of permissions. The valid permissions are:
		 * @param {string} projectKey The project key for the project (case sensitive).
		 * @param {string} query A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com.
		 * @param {number} startAt The index of the first item to return in a page of results (page offset).
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark.
		 * @return {void} Returned if the request is successful.
		 */
		UserPermissionSearchGetByIssueKeyAndMaxResultsAndPermissionsAndProjectKeyAndQueryAndStartAtAndUsername(issueKey: string, maxResults: number, permissions: string, projectKey: string, query: string, startAt: number, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/permission/search?issueKey=' + (issueKey == null ? '' : encodeURIComponent(issueKey)) + '&maxResults=' + maxResults + '&permissions=' + (permissions == null ? '' : encodeURIComponent(permissions)) + '&projectKey=' + (projectKey == null ? '' : encodeURIComponent(projectKey)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&startAt=' + startAt + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of users whose attributes match the query term. The returned object includes the html field where the matched query term is highlighted with the HTML strong tag. A list of account IDs can be provided to exclude users from the results. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but will only get search results for an exact name match.
		 * Get user/picker
		 * @param {Array<string>} exclude This parameter has been deprecated due to privacy changes. Use excludeAccountIds instead. See the migration guide for details. A comma-separated list of usernames to exclude from the search results.
		 * @param {Array<string>} excludeAccountIds A comma-separated list of account IDs to exclude from the search results.
		 * @param {number} maxResults The maximum number of items to return. Maximum is 1000. The total number of matched users is returned in total.
		 * @param {string} query A search input that is matched against appropriate user attributes to find relevant users.
		 * @param {boolean} showAvatar Include the URI to the user's avatar.
		 * @return {void} Returned if the request is successful.
		 */
		UserPickerGetByExcludeAndExcludeAccountIdsAndMaxResultsAndQueryAndShowAvatar(exclude: Array<string>, excludeAccountIds: Array<string>, maxResults: number, query: string, showAvatar: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/picker?' + exclude.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&' + excludeAccountIds.map(z => `excludeAccountIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&showAvatar=' + showAvatar, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the keys of all properties for a user. Permissions required:
		 * Get user/properties
		 * @param {string} accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
		 * @param {string} userKey This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
		 * @return {void} Returned if the request is successful.
		 */
		UserPropertiesGetByAccountIdAndUserKeyAndUsername(accountId: string, userKey: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/properties?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&userKey=' + (userKey == null ? '' : encodeURIComponent(userKey)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a property from a user. Permissions required:
		 * Delete user/properties/{propertyKey}
		 * @param {string} accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
		 * @param {string} propertyKey The key of the user's property.
		 * @param {string} userKey This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin.
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
		 * @return {void} 
		 */
		UserPropertiesDeleteByAccountIdAndPropertyKeyAndUserKeyAndUsername(accountId: string, propertyKey: string, userKey: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)) + '?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&userKey=' + (userKey == null ? '' : encodeURIComponent(userKey)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the value of a user's property. If no property key is provided Get user property keys is called. Permissions required:
		 * Get user/properties/{propertyKey}
		 * @param {string} accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
		 * @param {string} propertyKey The key of the user's property.
		 * @param {string} userKey This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin.
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
		 * @return {void} Returned if the request is successful.
		 */
		UserPropertiesGetByAccountIdAndPropertyKeyAndUserKeyAndUsername(accountId: string, propertyKey: string, userKey: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)) + '?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&userKey=' + (userKey == null ? '' : encodeURIComponent(userKey)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the value of a user's property. Use this resource to store custom data against a user. Permissions required:
		 * Put user/properties/{propertyKey}
		 * @param {string} accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
		 * @param {string} propertyKey The key of the user's property. The maximum length of the key is 255 bytes.
		 * @param {string} userKey This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
		 * @return {void} Returned if the user property is updated.
		 */
		UserPropertiesPutByAccountIdAndPropertyKeyAndUserKeyAndUsername(accountId: string, propertyKey: string, userKey: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)) + '?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&userKey=' + (userKey == null ? '' : encodeURIComponent(userKey)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of users that match the search string and property. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but empty search results are returned.
		 * Get user/search
		 * @param {boolean} includeActive Include active users.
		 * @param {boolean} includeInactive Include inactive users.
		 * @param {number} maxResults The maximum number of items to return per page. Maximum is 1000.
		 * @param {string} property A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of nested from {"something":{"nested":1,"other":2}} use thepropertykey.something.nested=1.
		 * @param {string} query A query string that is matched against user attributes (key, name, displayName, and emailAddress) to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
		 * @param {number} startAt The index of the first item to return in a page of results (page offset).
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
		 * @return {void} Returned if the request is successful.
		 */
		UserSearchGetByIncludeActiveAndIncludeInactiveAndMaxResultsAndPropertyAndQueryAndStartAtAndUsername(includeActive: boolean, includeInactive: boolean, maxResults: number, property: string, query: string, startAt: number, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/search?includeActive=' + includeActive + '&includeInactive=' + includeInactive + '&maxResults=' + maxResults + '&property=' + (property == null ? '' : encodeURIComponent(property)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&startAt=' + startAt + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Finds users using a structured query and returns user details. Permissions required: Browse users and groups global permission. The available queries statements are:
		 * Get user/search/query
		 * @param {boolean} includeInactive Include inactive users in the results.
		 * @param {number} maxResults The maximum number of items to return per page. Maximum is 1000.
		 * @param {string} query The search query.
		 * @param {number} startAt The index of the first item to return in a page of results (page offset).
		 * @return {void} Returned if the request is successful.
		 */
		UserSearchQueryGetByIncludeInactiveAndMaxResultsAndQueryAndStartAt(includeInactive: boolean, maxResults: number, query: string, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/search/query?includeInactive=' + includeInactive + '&maxResults=' + maxResults + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Finds users using a structured query and returns a list of user keys. Permissions required: Browse users and groups global permission. The available query statements are:
		 * Get user/search/query/key
		 * @param {boolean} includeInactive Include inactive users in the results.
		 * @param {number} maxResults The maximum number of items to return per page. Maximum is 1000.
		 * @param {string} query The search query.
		 * @param {number} startAt The index of the first item to return in a page of results (page offset).
		 * @return {void} Returned if the request is successful.
		 */
		UserSearchQueryKeyGetByIncludeInactiveAndMaxResultsAndQueryAndStartAt(includeInactive: boolean, maxResults: number, query: string, startAt: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/search/query/key?includeInactive=' + includeInactive + '&maxResults=' + maxResults + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&startAt=' + startAt, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of users who fulfill both of these criteria:
		 * Get user/viewissue/search
		 * @param {string} issueKey The issue key for the issue. Required, unless projectKey is specified.
		 * @param {number} maxResults The maximum number of items to return per page. Maximum is 1000.
		 * @param {string} projectKey The project key for the project (case sensitive). Required, unless issueKey is specified.
		 * @param {string} query A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
		 * @param {number} startAt The index of the first item to return in a page of results (page offset).
		 * @param {string} username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
		 * @return {void} Returned if the request is successful.
		 */
		UserViewissueSearchGetByIssueKeyAndMaxResultsAndProjectKeyAndQueryAndStartAtAndUsername(issueKey: string, maxResults: number, projectKey: string, query: string, startAt: number, username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/viewissue/search?issueKey=' + (issueKey == null ? '' : encodeURIComponent(issueKey)) + '&maxResults=' + maxResults + '&projectKey=' + (projectKey == null ? '' : encodeURIComponent(projectKey)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&startAt=' + startAt + '&username=' + (username == null ? '' : encodeURIComponent(username)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.
		 * Post version
		 * @return {void} 
		 */
		VersionPost(requestBody: VersionPostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * the global ID of the remote resource that is linked to the versions
		 * Get version/remotelink
		 * @param {string} globalId the global ID of the remote resource that is linked to the versions
		 * @return {void} Contains a list of remote version links. Any existing links that the user does not have permission to see will be filtered out. The user must have BROWSE permission for the project to see links to its versions.
		 */
		VersionRemotelinkGetByGlobalId(globalId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/remotelink?globalId=' + (globalId == null ? '' : encodeURIComponent(globalId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a project version. Deprecated, use Delete and replace version that supports swapping version values in custom fields, in addition to the swapping for fixVersion and affectedVersion provided in this resource. Alternative versions can be provided to update issues that use the deleted version in fixVersion or affectedVersion. If alternatives are not provided, occurrences of fixVersion and affectedVersion that contain the deleted version are cleared. Permissions required: Administer Jira global permission or Administer Projects project permission.
		 * Delete version/{id}
		 * @param {string} id The ID of the version.
		 * @param {string} moveAffectedIssuesTo The ID of the version to update affectedVersion to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
		 * @param {string} moveFixIssuesTo The ID of the version to update fixVersion to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
		 * @return {void} 
		 */
		VersionDeleteByIdAndMoveAffectedIssuesToAndMoveFixIssuesTo(id: string, moveAffectedIssuesTo: string, moveFixIssuesTo: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (id == null ? '' : encodeURIComponent(id)) + '&moveAffectedIssuesTo=' + (moveAffectedIssuesTo == null ? '' : encodeURIComponent(moveAffectedIssuesTo)) + '&moveFixIssuesTo=' + (moveFixIssuesTo == null ? '' : encodeURIComponent(moveFixIssuesTo)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a project version. Permissions required: Browse projects project permission
		 * Get version/{id}
		 * @param {string} expand Use expand to include additional information about version in the response. This parameter accepts multiple values separated by a comma:
		 * @param {string} id The ID of the version.
		 * @return {void} Returned if the request is successful.
		 */
		VersionGetByExpandAndId(expand: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (id == null ? '' : encodeURIComponent(id)) + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.
		 * Put version/{id}
		 * @param {string} id The ID of the version.
		 * @return {void} Returned if the request is successful.
		 */
		VersionPutById(id: string, requestBody: VersionPutByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (id == null ? '' : encodeURIComponent(id)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Merges two project versions. The merge is completed by deleting the version specified in id and replacing any occurrences of its ID in fixVersion with the version ID specified in moveIssuesTo. Consider using Delete and replace version instead. This resource supports swapping version values in fixVersion, affectedVersion, and custom fields. Permissions required: Administer Jira global permission or Administer Projects project permission.
		 * Put version/{id}/mergeto/{moveIssuesTo}
		 * @param {string} id The ID of the version to delete.
		 * @param {string} moveIssuesTo The ID of the version to merge into.
		 * @return {void} 
		 */
		VersionMergetoPutByIdAndMoveIssuesTo(id: string, moveIssuesTo: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (id == null ? '' : encodeURIComponent(id)) + '/mergeto/' + (moveIssuesTo == null ? '' : encodeURIComponent(moveIssuesTo)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies the version's sequence within the project, which affects the display order of the versions in Jira. Permissions required: Administer Jira global permission or Administer Projects project permission.
		 * Post version/{id}/move
		 * @param {string} id The ID of the version to be moved.
		 * @return {void} Returned if the request is successful.
		 */
		VersionMovePostById(id: string, requestBody: VersionMovePostByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (id == null ? '' : encodeURIComponent(id)) + '/move', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns the following counts for a version:
		 * Get version/{id}/relatedIssueCounts
		 * @param {string} id The ID of the version.
		 * @return {void} Returned if the request is successful.
		 */
		VersionRelatedIssueCountsGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (id == null ? '' : encodeURIComponent(id)) + '/relatedIssueCounts', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a project version. Permissions required: Administer Jira global permission or Administer Projects project permission. Alternative versions can be provided to update issues that use the deleted version in fixVersion, affectedVersion, or any version picker custom fields. If alternatives are not provided, occurrences of fixVersion, affectedVersion, and any version picker custom field, that contain the deleted version, are cleared. Any replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
		 * Post version/{id}/removeAndSwap
		 * @param {string} id The ID of the version.
		 * @return {void} 
		 */
		VersionRemoveAndSwapPostById(id: string, requestBody: VersionRemoveAndSwapPostByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (id == null ? '' : encodeURIComponent(id)) + '/removeAndSwap', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns counts of the issues and unresolved issues for the project version. Permissions required: Browse projects project permission
		 * Get version/{id}/unresolvedIssueCount
		 * @param {string} id The ID of the version.
		 * @return {void} Returned if the request is successful.
		 */
		VersionUnresolvedIssueCountGetById(id: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (id == null ? '' : encodeURIComponent(id)) + '/unresolvedIssueCount', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The version for which to delete ALL existing remote version links
		 * Delete version/{versionId}/remotelink
		 * @param {string} versionId The version for which to delete ALL existing remote version links
		 * @return {void} 
		 */
		VersionRemotelinkDeleteByVersionId(versionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '/remotelink', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * a String containing the version ID
		 * Get version/{versionId}/remotelink
		 * @param {string} versionId a String containing the version ID
		 * @return {void} Returned if the version exists and the currently authenticated user has permission to view it, which is restricted to those users with BROWSE permission for the project. Contains a full representation of the remote version links.
		 */
		VersionRemotelinkGetByVersionId(versionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '/remotelink', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a remote version link via POST. The link's global ID will be taken from the JSON payload if provided; otherwise, it will be generated.
		 * Post version/{versionId}/remotelink
		 * @return {void} 
		 */
		VersionRemotelinkPostByVersionId(versionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '/remotelink', { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The version ID of the remote link
		 * Delete version/{versionId}/remotelink/{globalId}
		 * @param {string} globalId The global ID of the remote link
		 * @param {string} versionId The version ID of the remote link
		 * @return {void} 
		 */
		VersionRemotelinkDeleteByGlobalIdAndVersionId(globalId: string, versionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '/remotelink/' + (globalId == null ? '' : encodeURIComponent(globalId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * A REST sub-resource representing a remote version link
		 * Get version/{versionId}/remotelink/{globalId}
		 * @param {string} globalId The id of the remote issue link to be returned. If {@code null} (not provided) all remote links for the issue are returned.
		 * @param {string} versionId a String containing the version id
		 * @return {void} Example response (application/json)
		 */
		VersionRemotelinkGetByGlobalIdAndVersionId(globalId: string, versionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '/remotelink/' + (globalId == null ? '' : encodeURIComponent(globalId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post version/{versionId}/remotelink/{globalId}
		 * @return {void} 
		 */
		VersionRemotelinkPostByGlobalIdAndVersionId(globalId: string, versionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'version/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '/remotelink/' + (globalId == null ? '' : encodeURIComponent(globalId)), { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all workflows in Jira or a single workflow.
		 * Get workflow
		 * @param {string} workflowName The name of the workflow to be returned. Only one workflow can be specified.
		 * @return {void} Returned if the requested workflows are returned.
		 */
		WorkflowGetByWorkflowName(workflowName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflow?workflowName=' + (workflowName == null ? '' : encodeURIComponent(workflowName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.
		 * Delete workflow/transitions/{transitionId}/properties
		 * @param {string} key The name of the transition property to delete, also known as the name of the property.
		 * @param {number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
		 * @param {string} workflowMode The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
		 * @param {string} workflowName The name of the workflow that the transition belongs to.
		 * @return {void} 200 response
		 */
		WorkflowTransitionsPropertiesDeleteByKeyAndTransitionIdAndWorkflowModeAndWorkflowName(key: string, transitionId: number, workflowMode: string, workflowName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflow/transitions/' + transitionId + '/properties?key=' + (key == null ? '' : encodeURIComponent(key)) + '&workflowMode=' + (workflowMode == null ? '' : encodeURIComponent(workflowMode)) + '&workflowName=' + (workflowName == null ? '' : encodeURIComponent(workflowName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.
		 * Get workflow/transitions/{transitionId}/properties
		 * @param {boolean} includeReservedKeys Some properties with keys that have the jira. prefix are reserved, i.e., not editable. To include these properties in the results, set this parameter to true.
		 * @param {string} key The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned.
		 * @param {number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition.
		 * @param {string} workflowMode The workflow status. Set to live for active and inactive workflows, or draft for draft workflows.
		 * @param {string} workflowName The name of the workflow that the transition belongs to.
		 * @return {void} 200 response
		 */
		WorkflowTransitionsPropertiesGetByIncludeReservedKeysAndKeyAndTransitionIdAndWorkflowModeAndWorkflowName(includeReservedKeys: boolean, key: string, transitionId: number, workflowMode: string, workflowName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflow/transitions/' + transitionId + '/properties?includeReservedKeys=' + includeReservedKeys + '&key=' + (key == null ? '' : encodeURIComponent(key)) + '&workflowMode=' + (workflowMode == null ? '' : encodeURIComponent(workflowMode)) + '&workflowName=' + (workflowName == null ? '' : encodeURIComponent(workflowName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.
		 * Post workflow/transitions/{transitionId}/properties
		 * @param {string} key The key of the property being added, also known as the name of the property. Set this to the same value as the key defined in the request body.
		 * @param {number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
		 * @param {string} workflowMode The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
		 * @param {string} workflowName The name of the workflow that the transition belongs to.
		 * @return {void} 200 response
		 */
		WorkflowTransitionsPropertiesPostByKeyAndTransitionIdAndWorkflowModeAndWorkflowName(key: string, transitionId: number, workflowMode: string, workflowName: string, requestBody: WorkflowTransitionsPropertiesPostByKeyAndTransitionIdAndWorkflowModeAndWorkflowNameBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflow/transitions/' + transitionId + '/properties?key=' + (key == null ? '' : encodeURIComponent(key)) + '&workflowMode=' + (workflowMode == null ? '' : encodeURIComponent(workflowMode)) + '&workflowName=' + (workflowName == null ? '' : encodeURIComponent(workflowName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.
		 * Put workflow/transitions/{transitionId}/properties
		 * @param {string} key The key of the property being updated, also known as the name of the property. Set this to the same value as the key defined in the request body.
		 * @param {number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
		 * @param {string} workflowMode The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
		 * @param {string} workflowName The name of the workflow that the transition belongs to.
		 * @return {void} 200 response
		 */
		WorkflowTransitionsPropertiesPutByKeyAndTransitionIdAndWorkflowModeAndWorkflowName(key: string, transitionId: number, workflowMode: string, workflowName: string, requestBody: WorkflowTransitionsPropertiesPutByKeyAndTransitionIdAndWorkflowModeAndWorkflowNameBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflow/transitions/' + transitionId + '/properties?key=' + (key == null ? '' : encodeURIComponent(key)) + '&workflowMode=' + (workflowMode == null ? '' : encodeURIComponent(workflowMode)) + '&workflowName=' + (workflowName == null ? '' : encodeURIComponent(workflowName)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Creates a workflow scheme.
		 * Post workflowscheme
		 * @return {void} 
		 */
		WorkflowschemePost(requestBody: WorkflowschemePostBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at least one project).
		 * Delete workflowscheme/{id}
		 * @param {number} id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
		 * @return {void} 
		 */
		WorkflowschemeDeleteById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a workflow scheme.
		 * Get workflowscheme/{id}
		 * @param {number} id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
		 * @param {boolean} returnDraftIfExists Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeGetByIdAndReturnDraftIfExists(id: number, returnDraftIfExists: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '?returnDraftIfExists=' + returnDraftIfExists, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or updated instead, provided that updateDraftIfNeeded is set to true.
		 * Put workflowscheme/{id}
		 * @param {number} id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemePutById(id: number, requestBody: WorkflowschemePutByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an active workflow scheme can only have one draft workflow scheme at any given time.
		 * Post workflowscheme/{id}/createdraft
		 * @param {number} id The ID of the active workflow scheme that the draft is created from.
		 * @return {void} 
		 */
		WorkflowschemeCreatedraftPostById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/createdraft', { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira's system workflow (the jira workflow).
		 * Delete workflowscheme/{id}/default
		 * @param {number} id The ID of the workflow scheme.
		 * @param {boolean} updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to false.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDefaultDeleteByIdAndUpdateDraftIfNeeded(id: number, updateDraftIfNeeded: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/default?updateDraftIfNeeded=' + updateDraftIfNeeded, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.
		 * Get workflowscheme/{id}/default
		 * @param {number} id The ID of the workflow scheme.
		 * @param {boolean} returnDraftIfExists Set to true to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDefaultGetByIdAndReturnDraftIfExists(id: number, returnDraftIfExists: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/default?returnDraftIfExists=' + returnDraftIfExists, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the default workflow for a workflow scheme.
		 * Put workflowscheme/{id}/default
		 * @param {number} id The ID of the workflow scheme.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDefaultPutById(id: number, requestBody: WorkflowschemeDefaultPutByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/default', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a draft workflow scheme.
		 * Delete workflowscheme/{id}/draft
		 * @param {number} id The ID of the active workflow scheme that the draft was originally created from.
		 * @return {void} 
		 */
		WorkflowschemeDraftDeleteById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/draft', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is modified, then the changes in the draft are copied back to the active workflow scheme. See Configuring workflow schemes for more information.Note that:
		 * Get workflowscheme/{id}/draft
		 * @param {number} id The ID of the active workflow scheme that the draft was originally created from.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDraftGetById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/draft', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a draft is created. Note that an active workflow scheme can only have one draft workflow scheme at any given time.
		 * Put workflowscheme/{id}/draft
		 * @param {number} id The ID of the active workflow scheme that the draft was originally created from.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDraftPutById(id: number, requestBody: WorkflowschemeDraftPutByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/draft', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Resets the default workflow for a workflow scheme's draft. That is, the default workflow is set to Jira's system workflow (the jira workflow).
		 * Delete workflowscheme/{id}/draft/default
		 * @param {number} id The ID of the workflow scheme that the draft belongs to.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDraftDefaultDeleteById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/draft/default', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the default workflow for a workflow scheme's draft. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.
		 * Get workflowscheme/{id}/draft/default
		 * @param {number} id The ID of the workflow scheme that the draft belongs to.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDraftDefaultGetById(id: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/draft/default', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the default workflow for a workflow scheme's draft.
		 * Put workflowscheme/{id}/draft/default
		 * @param {number} id The ID of the workflow scheme that the draft belongs to.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDraftDefaultPutById(id: number, requestBody: WorkflowschemeDraftDefaultPutByIdBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/draft/default', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes the issue type-workflow mapping for an issue type in a workflow scheme's draft.
		 * Delete workflowscheme/{id}/draft/issuetype/{issueType}
		 * @param {number} id The ID of the workflow scheme that the draft belongs to.
		 * @param {string} issueType The ID of the issue type.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDraftIssuetypeDeleteByIdAndIssueType(id: number, issueType: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/draft/issuetype/' + (issueType == null ? '' : encodeURIComponent(issueType)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the issue type-workflow mapping for an issue type in a workflow scheme's draft.
		 * Get workflowscheme/{id}/draft/issuetype/{issueType}
		 * @param {number} id The ID of the workflow scheme that the draft belongs to.
		 * @param {string} issueType The ID of the issue type.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDraftIssuetypeGetByIdAndIssueType(id: number, issueType: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/draft/issuetype/' + (issueType == null ? '' : encodeURIComponent(issueType)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the workflow for an issue type in a workflow scheme's draft.
		 * Put workflowscheme/{id}/draft/issuetype/{issueType}
		 * @param {number} id The ID of the workflow scheme that the draft belongs to.
		 * @param {string} issueType The ID of the issue type.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDraftIssuetypePutByIdAndIssueType(id: number, issueType: string, requestBody: WorkflowschemeDraftIssuetypePutByIdAndIssueTypeBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/draft/issuetype/' + (issueType == null ? '' : encodeURIComponent(issueType)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes the workflow-issue type mapping for a workflow in a workflow scheme's draft.
		 * Delete workflowscheme/{id}/draft/workflow
		 * @param {number} id The ID of the workflow scheme that the draft belongs to.
		 * @param {string} workflowName The name of the workflow.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDraftWorkflowDeleteByIdAndWorkflowName(id: number, workflowName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/draft/workflow?workflowName=' + (workflowName == null ? '' : encodeURIComponent(workflowName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the workflow-issue type mappings for a workflow scheme's draft.
		 * Get workflowscheme/{id}/draft/workflow
		 * @param {number} id The ID of the workflow scheme that the draft belongs to.
		 * @param {string} workflowName The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDraftWorkflowGetByIdAndWorkflowName(id: number, workflowName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/draft/workflow?workflowName=' + (workflowName == null ? '' : encodeURIComponent(workflowName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the issue types for a workflow in a workflow scheme's draft. The workflow can also be set as the default workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.
		 * Put workflowscheme/{id}/draft/workflow
		 * @param {number} id The ID of the workflow scheme that the draft belongs to.
		 * @param {string} workflowName The name of the workflow.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeDraftWorkflowPutByIdAndWorkflowName(id: number, workflowName: string, requestBody: WorkflowschemeDraftWorkflowPutByIdAndWorkflowNameBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/draft/workflow?workflowName=' + (workflowName == null ? '' : encodeURIComponent(workflowName)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes the issue type-workflow mapping for an issue type in a workflow scheme.
		 * Delete workflowscheme/{id}/issuetype/{issueType}
		 * @param {number} id The ID of the workflow scheme.
		 * @param {string} issueType The ID of the issue type.
		 * @param {boolean} updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to false.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeIssuetypeDeleteByIdAndIssueTypeAndUpdateDraftIfNeeded(id: number, issueType: string, updateDraftIfNeeded: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/issuetype/' + (issueType == null ? '' : encodeURIComponent(issueType)) + '&updateDraftIfNeeded=' + updateDraftIfNeeded, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the issue type-workflow mapping for an issue type in a workflow scheme.
		 * Get workflowscheme/{id}/issuetype/{issueType}
		 * @param {number} id The ID of the workflow scheme.
		 * @param {string} issueType The ID of the issue type.
		 * @param {boolean} returnDraftIfExists Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeIssuetypeGetByIdAndIssueTypeAndReturnDraftIfExists(id: number, issueType: string, returnDraftIfExists: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/issuetype/' + (issueType == null ? '' : encodeURIComponent(issueType)) + '&returnDraftIfExists=' + returnDraftIfExists, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the workflow for an issue type in a workflow scheme.
		 * Put workflowscheme/{id}/issuetype/{issueType}
		 * @param {number} id The ID of the workflow scheme.
		 * @param {string} issueType The ID of the issue type.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeIssuetypePutByIdAndIssueType(id: number, issueType: string, requestBody: WorkflowschemeIssuetypePutByIdAndIssueTypeBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/issuetype/' + (issueType == null ? '' : encodeURIComponent(issueType)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes the workflow-issue type mapping for a workflow in a workflow scheme.
		 * Delete workflowscheme/{id}/workflow
		 * @param {number} id The ID of the workflow scheme.
		 * @param {boolean} updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to false.
		 * @param {string} workflowName The name of the workflow.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeWorkflowDeleteByIdAndUpdateDraftIfNeededAndWorkflowName(id: number, updateDraftIfNeeded: boolean, workflowName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/workflow?updateDraftIfNeeded=' + updateDraftIfNeeded + '&workflowName=' + (workflowName == null ? '' : encodeURIComponent(workflowName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the workflow-issue type mappings for a workflow scheme.
		 * Get workflowscheme/{id}/workflow
		 * @param {number} id The ID of the workflow scheme.
		 * @param {boolean} returnDraftIfExists Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
		 * @param {string} workflowName The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeWorkflowGetByIdAndReturnDraftIfExistsAndWorkflowName(id: number, returnDraftIfExists: boolean, workflowName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/workflow?returnDraftIfExists=' + returnDraftIfExists + '&workflowName=' + (workflowName == null ? '' : encodeURIComponent(workflowName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for the workflow scheme. Unmapped issues types are mapped to the default workflow.
		 * Put workflowscheme/{id}/workflow
		 * @param {number} id The ID of the workflow scheme.
		 * @param {string} workflowName The name of the workflow.
		 * @return {void} Returned if the request is successful.
		 */
		WorkflowschemeWorkflowPutByIdAndWorkflowName(id: number, workflowName: string, requestBody: WorkflowschemeWorkflowPutByIdAndWorkflowNameBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'workflowscheme/' + id + '/workflow?workflowName=' + (workflowName == null ? '' : encodeURIComponent(workflowName)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.
		 * Get worklog/deleted
		 * @param {number} since The date and time, in UNIX timestamp format, after which deleted worklogs are returned.
		 * @return {void} Returned if the request is successful.
		 */
		WorklogDeletedGetBySince(since: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'worklog/deleted?since=' + since, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns worklog details for a list of worklog IDs.
		 * Post worklog/list
		 * @param {string} expand Use expand to include additional information about worklogs in the response. This parameter accepts properties that returns the properties of each worklog.
		 * @return {void} Returned if the request is successful.
		 */
		WorklogListPostByExpand(expand: string, requestBody: WorklogListPostByExpandBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'worklog/list?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Returns a list of IDs and update timestamps for worklogs updated after a date and time.
		 * Get worklog/updated
		 * @param {string} expand Use expand to include additional information about worklogs in the response. This parameter accepts properties that returns the properties of each worklog.
		 * @param {number} since The date and time, in UNIX timestamp format, after which updated worklogs are returned.
		 * @return {void} Returned if the request is successful.
		 */
		WorklogUpdatedGetByExpandAndSince(expand: string, since: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'worklog/updated?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&since=' + since, { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface Application_propertiesPutByIdBody {

		/**The ID of the application property, for example jira.newsletter.tip.delay.days. */
		id?: string;

		/**The new value, for example -1. */
		value?: string;
	}

	export interface CommentListPostByExpandBody {

		/**The list of comment IDs. Maximum of 1000 IDs can be specified. Required */
		ids?: Array<number>;
	}

	export interface ComponentPostBody {

		/**A user. */
		assignee?: string;

		/**The nominal user type used to determine the assignee for issues created with this component. See realAssigneeType for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values: */
		assigneeType?: ComponentPostBodyAssigneeType;

		/**The description for the component. Optional when creating or updating a component. */
		description?: string;

		/**A user. */
		lead?: string;

		/**The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192.Optional when creating or updating a component. */
		leadAccountId?: string;

		/**This property has been deprecated in favour of leadAccountId due to privacy changes. See the migration guide for details.The username of the component's lead user. Optional when creating or updating a component. */
		leadUserName?: string;

		/**The unique name for the component in the project. Required when creating a component. Optional when updating a component. Maximum length 255 chars. */
		name?: string;

		/**The key of the project to which the component is assigned. Required when creating a component. Can't be updated. */
		project?: string;

		/**Not used. */
		projectId?: number;

		/**A user. */
		realAssignee?: string;
	}

	export enum ComponentPostBodyAssigneeType { PROJECT_DEFAULT = 0, COMPONENT_LEAD = 1, PROJECT_LEAD = 2, UNASSIGNED = 3 }

	export interface ComponentPutByIdBody {

		/**A user. */
		assignee?: string;

		/**The nominal user type used to determine the assignee for issues created with this component. See realAssigneeType for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values: */
		assigneeType?: ComponentPutByIdBodyAssigneeType;

		/**The description for the component. Optional when creating or updating a component. */
		description?: string;

		/**A user. */
		lead?: string;

		/**The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192.Optional when creating or updating a component. */
		leadAccountId?: string;

		/**This property has been deprecated in favour of leadAccountId due to privacy changes. See the migration guide for details.The username of the component's lead user. Optional when creating or updating a component. */
		leadUserName?: string;

		/**The unique name for the component in the project. Required when creating a component. Optional when updating a component. Maximum length 255 chars. */
		name?: string;

		/**The key of the project to which the component is assigned. Required when creating a component. Can't be updated. */
		project?: string;

		/**Not used. */
		projectId?: number;

		/**A user. */
		realAssignee?: string;
	}

	export enum ComponentPutByIdBodyAssigneeType { PROJECT_DEFAULT = 0, COMPONENT_LEAD = 1, PROJECT_LEAD = 2, UNASSIGNED = 3 }

	export interface ConfigurationTimetrackingPutBody {

		/**The key for the time tracking provider (for example, JIRA). */
		key?: string;

		/**The name of the time tracking provider (for example, JIRA provided time tracking). */
		name?: string;
	}

	export interface ConfigurationTimetrackingOptionsPutBody {

		/**The unit of time that will be applied to logged time by default. */
		defaultUnit?: ConfigurationTimetrackingOptionsPutBodyDefaultUnit;

		/**The format that will appear on an issue's Time Spent field. */
		timeFormat?: ConfigurationTimetrackingOptionsPutBodyTimeFormat;

		/**The number of days in a working week (for example, 5.5). This value is specified in days. */
		workingDaysPerWeek?: number;

		/**The number of hours in a working day (for example, 7.6). This value is specified in hours. */
		workingHoursPerDay?: number;
	}

	export enum ConfigurationTimetrackingOptionsPutBodyDefaultUnit { minute = 0, hour = 1, day = 2, week = 3 }

	export enum ConfigurationTimetrackingOptionsPutBodyTimeFormat { pretty = 0, days = 1, hours = 2 }

	export interface ExpressionEvalPostByExpandBody {
		context?: string;

		/**The Jira expression to evaluate. */
		expression?: string;
	}

	export interface FieldPostBody {

		/**The description of the custom field, which is displayed in the UI. */
		description?: string;

		/**The name of the custom field, which is displayed in the UI. This is not the unique identifier. */
		name?: string;

		/**The searcher defines the way the field is searched in Jira. For example, com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher.The search UI (basic search and JQL search) will display different operations and values for the field, based on the field searcher. You must specify a searcher that is valid for the field type, as listed below (abbreviated values shown): */
		searcherKey?: FieldPostBodySearcherKey;

		/**The type of the custom field. For example, com.atlassian.jira.plugin.system.customfieldtypes:grouppicker. */
		type?: FieldPostBodyType;
	}

	export enum FieldPostBodySearcherKey { com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher = 0, com.atlassian.jira.plugin.system.customfieldtypes:daterange = 1, com.atlassian.jira.plugin.system.customfieldtypes:datetimerange = 2, com.atlassian.jira.plugin.system.customfieldtypes:exactnumber = 3, com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher = 4, com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher = 5, com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher = 6, com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher = 7, com.atlassian.jira.plugin.system.customfieldtypes:numberrange = 8, com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher = 9 }

	export enum FieldPostBodyType { com.atlassian.jira.plugin.system.customfieldtypes:cascadingselect = 0, com.atlassian.jira.plugin.system.customfieldtypes:datepicker = 1, com.atlassian.jira.plugin.system.customfieldtypes:datetime = 2, com.atlassian.jira.plugin.system.customfieldtypes:float = 3, com.atlassian.jira.plugin.system.customfieldtypes:grouppicker = 4, com.atlassian.jira.plugin.system.customfieldtypes:importid = 5, com.atlassian.jira.plugin.system.customfieldtypes:labels = 6, com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes = 7, com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker = 8, com.atlassian.jira.plugin.system.customfieldtypes:multiselect = 9 }

	export interface FieldOptionPostByFieldKeyBody {
		config?: string;

		/**The properties can be any arbitrary key value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module. */
		properties?: string;

		/**The option's name, which is displayed in the UI. */
		value?: string;
	}

	export interface FieldOptionPutByFieldKeyAndOptionIdBody {
		config?: string;

		/**The properties can be any arbitrary key value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module. */
		properties?: string;

		/**The option's name, which is displayed in the UI. */
		value?: string;
	}

	export interface FilterPostByExpandBody {

		/**A description of the filter (e.g., This filter returns open bugs for the Example project). */
		description?: string;

		/**The name of the filter (e.g., Open bugs for Example project). Must be unique. */
		name?: string;

		/**A user. */
		owner?: string;

		/**The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter. */
		sharePermissions?: Array<string>;
		sharedUsers?: string;
		subscriptions?: string;
	}

	export interface FilterDefaultShareScopePutBody {

		/**The scope of the default sharing for new filters and dashboards: */
		scope?: FilterDefaultShareScopePutBodyScope;
	}

	export enum FilterDefaultShareScopePutBodyScope { GLOBAL = 0, AUTHENTICATED = 1, PRIVATE = 2 }

	export interface FilterPutByExpandAndIdBody {

		/**A description of the filter (e.g., This filter returns open bugs for the Example project). */
		description?: string;

		/**The name of the filter (e.g., Open bugs for Example project). Must be unique. */
		name?: string;

		/**A user. */
		owner?: string;

		/**The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter. */
		sharePermissions?: Array<string>;
		sharedUsers?: string;
		subscriptions?: string;
	}

	export interface FilterPermissionPostByIdBody {

		/**The name of the group to share the filter with. Set type to group. */
		groupname?: string;

		/**The ID of the project to share the filter with. Set type to project. */
		projectId?: string;

		/**The ID of the project role to share the filter with. Set type to projectRole and the projectId for the project that the role is in. */
		projectRoleId?: string;

		/**The type of the share permission.Specify the type as follows: */
		type?: FilterPermissionPostByIdBodyType;
	}

	export enum FilterPermissionPostByIdBodyType { project = 0, group = 1, projectRole = 2, global = 3, authenticated = 4 }

	export interface GroupPostBody {

		/**The name of the group. */
		name?: string;
	}

	export interface GroupUserPostByGroupnameBody {

		/**The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. */
		accountId?: string;

		/**This property has been deprecated in favour of accountId due to privacy changes. See the migration guide for details.The username of the user. For example, admin. */
		name?: string;
	}

	export interface IssuePostByUpdateHistoryBody {

		/**List of issue screen field to update, specifying the sub-field to update and its value. This field provides a straightforward option when setting a single sub-field. When multiple sub-fields or other operations are required, use update. Fields included in here cannot be included in update. */
		fields?: string;

		/**Details of issue history metadata. Deprecated. */
		historyMetadata?: string;

		/**Details of issue properties to be add or update. */
		properties?: Array<string>;

		/**Details of an issue transition. */
		transition?: string;

		/**List of operations to perform on issue screen fields. Note that fields included in here cannot be included in fields. */
		update?: string;
	}

	export interface IssueBulkPostBody {
		issueUpdates?: Array<string>;
	}

	export interface IssuePropertiesPutByPropertyKeyBody {

		/**Bulk operation filter details. */
		filter?: string;

		/**The value of the property. The value must be a valid, non-empty JSON blob. The maximum length is 32768 characters. */
		value?: string;
	}

	export interface IssuePutByIssueIdOrKeyAndNotifyUsersAndOverrideEditableFlagAndOverrideScreenSecurityBody {

		/**List of issue screen field to update, specifying the sub-field to update and its value. This field provides a straightforward option when setting a single sub-field. When multiple sub-fields or other operations are required, use update. Fields included in here cannot be included in update. */
		fields?: string;

		/**Details of issue history metadata. Deprecated. */
		historyMetadata?: string;

		/**Details of issue properties to be add or update. */
		properties?: Array<string>;

		/**Details of an issue transition. */
		transition?: string;

		/**List of operations to perform on issue screen fields. Note that fields included in here cannot be included in fields. */
		update?: string;
	}

	export interface IssueAssigneePutByIssueIdOrKeyBody {

		/**The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. */
		accountId?: string;

		/**Indicates whether the user is active. */
		active?: boolean;

		/**The application roles the user is assigned to. */
		applicationRoles?: string;

		/**The avatars of the user. */
		avatarUrls?: string;

		/**The display name of the user. Depending on the user’s privacy setting, this may return an alternative value. */
		displayName?: string;

		/**The email address of the user. Depending on the user’s privacy setting, this may be returned as null. */
		emailAddress?: string;

		/**The groups that the user belongs to. */
		groups?: string;

		/**This property has been deprecated in favour of accountId due to privacy changes. See the migration guide for details.The key of the user. For example, admin. */
		key?: string;

		/**The locale of the user. Depending on the user’s privacy setting, this may be returned as null. */
		locale?: string;

		/**This property has been deprecated in favour of accountId due to privacy changes. See the migration guide for details.The username of the user. For example, admin. */
		name?: string;

		/**The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null. */
		timeZone?: string;
	}

	export interface IssueCommentPostByExpandAndIssueIdOrKeyBody {

		/**The comment. */
		body?: string;

		/**Indicates whether the comment is visible in Jira Service Desk. Optional on create and update. Defaults to true. If the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk projectthis parameter defaults to true. */
		jsdPublic?: boolean;

		/**A list of comment properties. Optional on create and update. */
		properties?: Array<string>;

		/**The group or role to which this comment is visible. Optional on create and update. */
		visibility?: string;
	}

	export interface IssueCommentPutByExpandAndIdAndIssueIdOrKeyBody {

		/**The comment. */
		body?: string;

		/**Indicates whether the comment is visible in Jira Service Desk. Optional on create and update. Defaults to true. If the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk projectthis parameter defaults to true. */
		jsdPublic?: boolean;

		/**A list of comment properties. Optional on create and update. */
		properties?: Array<string>;

		/**The group or role to which this comment is visible. Optional on create and update. */
		visibility?: string;
	}

	export interface IssueNotifyPostByIssueIdOrKeyBody {

		/**The HTML body of the email notification for the issue. */
		htmlBody?: string;
		restrict?: string;

		/**The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary. */
		subject?: string;

		/**The plain text body of the email notification for the issue. */
		textBody?: string;
		to?: string;
	}

	export interface IssueRemotelinkPostByIssueIdOrKeyBody {

		/**The application the linked item is in. */
		application?: string;

		/**The global ID of the link, such as the ID of the item on the remote system. The maximum length is 255 characters. */
		globalId?: string;

		/**The linked item. */
		object?: string;

		/**Description of the relationship between the issue and the linked item. */
		relationship?: string;
	}

	export interface IssueRemotelinkPutByIssueIdOrKeyAndLinkIdBody {

		/**The application the linked item is in. */
		application?: string;

		/**The global ID of the link, such as the ID of the item on the remote system. The maximum length is 255 characters. */
		globalId?: string;

		/**The linked item. */
		object?: string;

		/**Description of the relationship between the issue and the linked item. */
		relationship?: string;
	}

	export interface IssueTransitionsPostByIssueIdOrKeyBody {

		/**List of issue screen field to update, specifying the sub-field to update and its value. This field provides a straightforward option when setting a single sub-field. When multiple sub-fields or other operations are required, use update. Fields included in here cannot be included in update. */
		fields?: string;

		/**Details of issue history metadata. Deprecated. */
		historyMetadata?: string;

		/**Details of issue properties to be add or update. */
		properties?: Array<string>;

		/**Details of an issue transition. */
		transition?: string;

		/**List of operations to perform on issue screen fields. Note that fields included in here cannot be included in fields. */
		update?: string;
	}

	export interface IssueWorklogPostByAdjustEstimateAndExpandAndIssueIdOrKeyAndNewEstimateAndNotifyUsersAndOverrideEditableFlagAndReduceByBody {

		/**User details. Read only. */
		author?: string;

		/**A comment about the worklog. Optional when creating or updating a worklog. */
		comment?: string;

		/**Details of properties for the worklog. Optional when creating or updating a worklog. */
		properties?: Array<string>;

		/**The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog. */
		started?: string;

		/**The time spent working on the issue as days (#d), hours (#h), or minutes (#m or #). Required when creating a worklog if timeSpentSeconds isn't provided. Optional when updating a worklog. Cannot be provided if timeSpentSecond is provided. */
		timeSpent?: string;

		/**The time in seconds spent working on the issue. Required when creating a worklog if timeSpent isn't provided. Optional when updating a worklog. Cannot be provided if timeSpent is provided. */
		timeSpentSeconds?: number;

		/**User details. Read only. */
		updateAuthor?: string;

		/**The group or role to which this item is visible. */
		visibility?: string;
	}

	export interface IssueWorklogPutByAdjustEstimateAndExpandAndIdAndIssueIdOrKeyAndNewEstimateAndNotifyUsersAndOverrideEditableFlagBody {

		/**User details. Read only. */
		author?: string;

		/**A comment about the worklog. Optional when creating or updating a worklog. */
		comment?: string;

		/**Details of properties for the worklog. Optional when creating or updating a worklog. */
		properties?: Array<string>;

		/**The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog. */
		started?: string;

		/**The time spent working on the issue as days (#d), hours (#h), or minutes (#m or #). Required when creating a worklog if timeSpentSeconds isn't provided. Optional when updating a worklog. Cannot be provided if timeSpentSecond is provided. */
		timeSpent?: string;

		/**The time in seconds spent working on the issue. Required when creating a worklog if timeSpent isn't provided. Optional when updating a worklog. Cannot be provided if timeSpent is provided. */
		timeSpentSeconds?: number;

		/**User details. Read only. */
		updateAuthor?: string;

		/**The group or role to which this item is visible. */
		visibility?: string;
	}

	export interface IssueLinkPostBody {

		/**A comment. */
		comment?: string;

		/**The ID or key of a linked issue. */
		inwardIssue?: string;

		/**The ID or key of a linked issue. */
		outwardIssue?: string;

		/**This bean is used as follows: */
		type?: string;
	}

	export interface IssueLinkTypePostBody {

		/**The ID of the issue link type and is used as follows: */
		id?: string;

		/**The description of the issue link type inward link and is used as follows: */
		inward?: string;

		/**The name of the issue link type and is used as follows: */
		name?: string;

		/**The description of the issue link type outward link and is used as follows: */
		outward?: string;
	}

	export interface IssueLinkTypePutByIssueLinkTypeIdBody {

		/**The ID of the issue link type and is used as follows: */
		id?: string;

		/**The description of the issue link type inward link and is used as follows: */
		inward?: string;

		/**The name of the issue link type and is used as follows: */
		name?: string;

		/**The description of the issue link type outward link and is used as follows: */
		outward?: string;
	}

	export interface IssuetypePostBody {

		/**The description of the issue type. */
		description?: string;

		/**The unique name for the issue type. Maximum length 60 characters. Required. */
		name?: string;

		/**Whether the issue type is subtype or standard. Defaults to standard. */
		type?: IssuetypePostBodyType;
	}

	export enum IssuetypePostBodyType { subtask = 0, standard = 1 }

	export interface IssuetypePutByIdBody {

		/**The ID of an issue type avatar. */
		avatarId?: number;

		/**The description of the issue type. */
		description?: string;

		/**The unique name for the issue type. Maximum length 60 characters. */
		name?: string;
	}

	export interface JqlPdcleanerPostBody {

		/**The query strings having personal data that need to be migrated. There should be at most 100 queries. */
		queryStrings?: Array<string>;
	}

	export interface MypreferencesLocalePutBody {

		/**The locale code. The Java the locale format is used: a two character language code (ISO 639), an underscore, and two letter country code (ISO 3166). For example, en_US represents a locale of English (United States). Required on create. */
		locale?: string;
	}

	export interface PermissionsProjectPostBody {

		/**A list of permission keys. */
		permissions?: Array<string>;
	}

	export interface PermissionschemePostByExpandBody {

		/**A description for the permission scheme. */
		description?: string;

		/**The name of the permission scheme. Must be unique. Required when creating or updating a permission scheme. */
		name?: string;

		/**The permission scheme to create or update. See About permission schemes and grants for more information. */
		permissions?: Array<string>;

		/**The scope of the permission scheme */
		scope?: string;
	}

	export interface PermissionschemePutByExpandAndSchemeIdBody {

		/**A description for the permission scheme. */
		description?: string;

		/**The name of the permission scheme. Must be unique. Required when creating or updating a permission scheme. */
		name?: string;

		/**The permission scheme to create or update. See About permission schemes and grants for more information. */
		permissions?: Array<string>;

		/**The scope of the permission scheme */
		scope?: string;
	}

	export interface PermissionschemePermissionPostByExpandAndSchemeIdBody {

		/**The user or group being granted the permission. It consists of a type and a type-dependent parameter. See holderfor more information. */
		holder?: string;

		/**The permission to grant. Choose from the list of built-in permissions or from any custom permissions that have been added by apps. For more information about custom permissions, see the project permission and global permission module documentation. */
		permission?: string;
	}

	export interface ProjectPostBody {

		/**The default assignee when creating issues for this project. */
		assigneeType?: ProjectPostBodyAssigneeType;

		/**An integer value for the project's avatar. */
		avatarId?: number;

		/**The ID of the project's category. A complete list of category IDs can be found using the Get all project categories resource. */
		categoryId?: number;

		/**A brief description of the project. */
		description?: string;

		/**The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the Get issue security schemes resource to get all issue security scheme IDs. */
		issueSecurityScheme?: number;

		/**Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. Max length is 10 characters. Required when creating a project. Optional when updating a project. */
		key?: string;

		/**Sets the username of the project lead. Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project. */
		lead?: string;

		/**Sets the project lead account id.Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project. */
		leadAccountId?: string;

		/**The name of the project. Required when creating a project. Optional when updating a project. */
		name?: string;

		/**The ID of the notification scheme for the project. Use the Get notification schemes resource to get a list of notification scheme IDs. */
		notificationScheme?: number;

		/**The ID of the permission scheme for the project. Use the Get all permission schemes resource to see a list of all permission scheme IDs. */
		permissionScheme?: number;

		/**A prebuilt configuration for a project. The type of the projectTemplateKey must match with the type of the projectTypeKey. Required when creating a project. Not applicable for the Update project resource. */
		projectTemplateKey?: ProjectPostBodyProjectTemplateKey;

		/**The project type, which dictates the application-specific feature set. Required when creating a project. Not applicable for the Update project resource. See the Update project type resource instead. */
		projectTypeKey?: ProjectPostBodyProjectTypeKey;

		/**A link to information about this project, such as project documentation */
		url?: string;
	}

	export enum ProjectPostBodyAssigneeType { PROJECT_LEAD = 0, UNASSIGNED = 1 }

	export enum ProjectPostBodyProjectTemplateKey { com.pyxis.greenhopper.jira:gh-simplified-agility = 0, com.pyxis.greenhopper.jira:gh-simplified-basic = 1, com.pyxis.greenhopper.jira:gh-simplified-kanban = 2, com.pyxis.greenhopper.jira:gh-simplified-scrum = 3, com.atlassian.servicedesk:simplified-it-service-desk = 4, com.atlassian.servicedesk:simplified-internal-service-desk = 5, com.atlassian.servicedesk:simplified-external-service-desk = 6, com.atlassian.jira-core-project-templates:jira-core-simplified-content-management = 7, com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval = 8, com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking = 9 }

	export enum ProjectPostBodyProjectTypeKey { software = 0, service_desk = 1, business = 2 }

	export interface ProjectPutByExpandAndProjectIdOrKeyBody {

		/**The default assignee when creating issues for this project. */
		assigneeType?: ProjectPutByExpandAndProjectIdOrKeyBodyAssigneeType;

		/**An integer value for the project's avatar. */
		avatarId?: number;

		/**The ID of the project's category. A complete list of category IDs can be found using the Get all project categories resource. */
		categoryId?: number;

		/**A brief description of the project. */
		description?: string;

		/**The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the Get issue security schemes resource to get all issue security scheme IDs. */
		issueSecurityScheme?: number;

		/**Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. Max length is 10 characters. Required when creating a project. Optional when updating a project. */
		key?: string;

		/**Sets the username of the project lead. Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project. */
		lead?: string;

		/**Sets the project lead account id.Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project. */
		leadAccountId?: string;

		/**The name of the project. Required when creating a project. Optional when updating a project. */
		name?: string;

		/**The ID of the notification scheme for the project. Use the Get notification schemes resource to get a list of notification scheme IDs. */
		notificationScheme?: number;

		/**The ID of the permission scheme for the project. Use the Get all permission schemes resource to see a list of all permission scheme IDs. */
		permissionScheme?: number;

		/**A prebuilt configuration for a project. The type of the projectTemplateKey must match with the type of the projectTypeKey. Required when creating a project. Not applicable for the Update project resource. */
		projectTemplateKey?: ProjectPutByExpandAndProjectIdOrKeyBodyProjectTemplateKey;

		/**The project type, which dictates the application-specific feature set. Required when creating a project. Not applicable for the Update project resource. See the Update project type resource instead. */
		projectTypeKey?: ProjectPutByExpandAndProjectIdOrKeyBodyProjectTypeKey;

		/**A link to information about this project, such as project documentation */
		url?: string;
	}

	export enum ProjectPutByExpandAndProjectIdOrKeyBodyAssigneeType { PROJECT_LEAD = 0, UNASSIGNED = 1 }

	export enum ProjectPutByExpandAndProjectIdOrKeyBodyProjectTemplateKey { com.pyxis.greenhopper.jira:gh-simplified-agility = 0, com.pyxis.greenhopper.jira:gh-simplified-basic = 1, com.pyxis.greenhopper.jira:gh-simplified-kanban = 2, com.pyxis.greenhopper.jira:gh-simplified-scrum = 3, com.atlassian.servicedesk:simplified-it-service-desk = 4, com.atlassian.servicedesk:simplified-internal-service-desk = 5, com.atlassian.servicedesk:simplified-external-service-desk = 6, com.atlassian.jira-core-project-templates:jira-core-simplified-content-management = 7, com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval = 8, com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking = 9 }

	export enum ProjectPutByExpandAndProjectIdOrKeyBodyProjectTypeKey { software = 0, service_desk = 1, business = 2 }

	export interface ProjectAvatarPutByProjectIdOrKeyBody {

		/**The ID of the avatar. Required when setting the project avatar, otherwise read only. */
		id?: string;
	}

	export interface ProjectRolePostByIdAndProjectIdOrKeyBody {

		/**The name of the group to add. */
		group?: Array<string>;

		/**The user account ID of the user to add. */
		user?: Array<string>;
	}

	export interface ProjectRolePutByIdAndProjectIdOrKeyBody {

		/**The actors to add to the project role for the project. Provide the group name or account ID. User key may be provided instead of account ID when not in GDPR-strict mode, however this is deprecated behavior. Add groups using atlassian-group-role-actor. Add users using atlassian-user-role-actor. */
		categorisedActors?: string;

		/**The ID of the project role. Use Get all project roles to get a list of project role IDs. */
		id?: number;
	}

	export interface ProjectPermissionschemePutByExpandAndProjectKeyOrIdBody {

		/**The ID of the permission scheme to associate with the project. Use the Get all permission schemes resource to get a list of permission scheme IDs. */
		id?: number;
	}

	export interface ProjectCategoryPostBody {

		/**The description of the project category. Required on create, optional on update. */
		description?: string;

		/**The name of the project category. Required on create, optional on update. */
		name?: string;
	}

	export interface ProjectCategoryPutByIdBody {

		/**The description of the project category. Required on create, optional on update. */
		description?: string;

		/**The name of the project category. Required on create, optional on update. */
		name?: string;
	}

	export interface RolePostBody {

		/**A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role. */
		description?: string;

		/**The name of the project role. Must be unique. Cannot begin or end with whitespace. Max length is 255 characters. Required when creating a project role. Optional when partially updating a project role. */
		name?: string;
	}

	export interface RolePostByIdBody {

		/**A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role. */
		description?: string;

		/**The name of the project role. Must be unique. Cannot begin or end with whitespace. Max length is 255 characters. Required when creating a project role. Optional when partially updating a project role. */
		name?: string;
	}

	export interface RolePutByIdBody {

		/**A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role. */
		description?: string;

		/**The name of the project role. Must be unique. Cannot begin or end with whitespace. Max length is 255 characters. Required when creating a project role. Optional when partially updating a project role. */
		name?: string;
	}

	export interface RoleActorsPostByIdBody {
		group?: Array<string>;

		/**The user account ID of the user to add as a default actor. When not in GDPR-strict-mode this may be user key instead, however this behaviour is deprecated. You can add multiple users separated by a comma (for example, "user":["12345678-9abc-def1-2345-6789abcdef12", "abcdef12-3456-789a-bcde-f123456789ab"]). */
		user?: Array<string>;
	}

	export interface ScreensTabsPostByScreenIdBody {

		/**The name of the screen tab. Required on create and update. Maximum length is 255 characters. */
		name?: string;
	}

	export interface ScreensTabsPutByScreenIdAndTabIdBody {

		/**The name of the screen tab. Required on create and update. Maximum length is 255 characters. */
		name?: string;
	}

	export interface ScreensTabsFieldsPostByScreenIdAndTabIdBody {

		/**The ID of the field to add. */
		fieldId?: string;
	}

	export interface ScreensTabsFieldsMovePostByIdAndScreenIdAndTabIdBody {

		/**The ID of the screen tab field after which to place the moved screen tab field. Required if position isn't provided. */
		after?: string;

		/**The named position to which the screen tab field should be moved. Required if after isn't provided. */
		position?: ScreensTabsFieldsMovePostByIdAndScreenIdAndTabIdBodyPosition;
	}

	export enum ScreensTabsFieldsMovePostByIdAndScreenIdAndTabIdBodyPosition { Earlier = 0, Later = 1, First = 2, Last = 3 }

	export interface SearchPostBody {

		/**Use expand to include additional information about issues in the response. This parameter accepts multiple values separated by a comma: */
		expand?: Array<string>;

		/**A comma-separated list of fields to return for each issue, use it to retrieve a subset of fields. Allowed values */
		fields?: Array<string>;

		/**Reference fields by their key (rather than ID). The default is false. */
		fieldsByKeys?: boolean;

		/**A JQL expression. */
		jql?: string;

		/**The maximum number of items to return per page. The default is 50 and maximum is 100. */
		maxResults?: number;

		/**A comma-separated list of up to 5 issue properties to include in the results. */
		properties?: Array<string>;

		/**The index of the first item to return in the page of results (page offset). The base index is 0. */
		startAt?: number;

		/**Determines how to validate the JQL query and treat the validation results. Supported values: */
		validateQuery?: SearchPostBodyValidateQuery;
	}

	export enum SearchPostBodyValidateQuery { strict = 0, warn = 1, none = 2, true = 3, false = 4 }

	export interface UserPostBody {

		/**Deprecated, do not use. */
		applicationKeys?: Array<string>;

		/**The display name for the user. Required. */
		displayName?: string;

		/**The email address for the user. Required. */
		emailAddress?: string;

		/**The key for the user. Read-only. This property has been deprecated due to privacy changes.See the migration guide for details. */
		key?: string;

		/**The username for the user. This property has been deprecated due to privacy changes. See the migration guide for details. */
		name?: string;

		/**Sends the user an email confirmation that they have been added to Jira. Default is false. */
		notification?: string;

		/**A password for the user. If a password is not set, a random password is generated. */
		password?: string;
	}

	export interface VersionPostBody {

		/**Indicates that the version is archived. Optional when creating or updating a version. */
		archived?: boolean;

		/**The description of the version. Optional when creating or updating a version. */
		description?: string;
		issuesStatusForFixVersion?: string;

		/**The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version. */
		moveUnfixedIssuesTo?: string;

		/**The unique name of the version. Required when creating a version. Optional when updating a version. Maximum length 255 chars. */
		name?: string;

		/**If the expand option operations is used, returns the list of operations available for this version. Read only. */
		operations?: Array<string>;

		/**Deprecated. Use projectId. */
		project?: string;

		/**The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version. */
		projectId?: number;

		/**The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version. */
		releaseDate?: string;

		/**Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version. */
		released?: boolean;

		/**If the expand option remotelinks is used, returns the list of remote links stored against this version. Read only. */
		remotelinks?: Array<string>;

		/**The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version. */
		startDate?: string;
	}

	export interface VersionPutByIdBody {

		/**Indicates that the version is archived. Optional when creating or updating a version. */
		archived?: boolean;

		/**The description of the version. Optional when creating or updating a version. */
		description?: string;
		issuesStatusForFixVersion?: string;

		/**The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version. */
		moveUnfixedIssuesTo?: string;

		/**The unique name of the version. Required when creating a version. Optional when updating a version. Maximum length 255 chars. */
		name?: string;

		/**If the expand option operations is used, returns the list of operations available for this version. Read only. */
		operations?: Array<string>;

		/**Deprecated. Use projectId. */
		project?: string;

		/**The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version. */
		projectId?: number;

		/**The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version. */
		releaseDate?: string;

		/**Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version. */
		released?: boolean;

		/**If the expand option remotelinks is used, returns the list of remote links stored against this version. Read only. */
		remotelinks?: Array<string>;

		/**The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version. */
		startDate?: string;
	}

	export interface VersionMovePostByIdBody {

		/**The URI (self link) of the version after which to place the moved version. Cannot be used with position. */
		after?: string;

		/**An absolute position in which to place the moved version. Cannot be used with after. */
		position?: VersionMovePostByIdBodyPosition;
	}

	export enum VersionMovePostByIdBodyPosition { Earlier = 0, Later = 1, First = 2, Last = 3 }

	export interface VersionRemoveAndSwapPostByIdBody {

		/**A JSON array of custom field IDs (customFieldId) and version IDs (moveTo) to update when the fields contain the deleted version. */
		customFieldReplacementList?: Array<string>;

		/**The ID of the version to update affectedVersion to when the field contains the deleted version. */
		moveAffectedIssuesTo?: number;

		/**The ID of the version to update fixVersion to when the field contains the deleted version. */
		moveFixIssuesTo?: number;
	}

	export interface WorkflowTransitionsPropertiesPostByKeyAndTransitionIdAndWorkflowModeAndWorkflowNameBody {

		/**The key of the transition property. Also known as the name of the transition property. */
		key?: string;

		/**The value of the transition property. */
		value?: string;
	}

	export interface WorkflowTransitionsPropertiesPutByKeyAndTransitionIdAndWorkflowModeAndWorkflowNameBody {

		/**The key of the transition property. Also known as the name of the transition property. */
		key?: string;

		/**The value of the transition property. */
		value?: string;
	}

	export interface WorkflowschemePostBody {

		/**The name of the default workflow for the workflow scheme. The default workflow has All Unassigned Issue Types assigned to it in Jira. If defaultWorkflow is not specified when creating a workflow scheme, it is set to Jira Workflow (jira). */
		defaultWorkflow?: string;

		/**The description of the workflow scheme. */
		description?: string;

		/**The issue type-project mappings, where each mapping is an issue type ID and project name pair. Note that an issue type can only be mapped to one project in a workflow scheme. */
		issueTypeMappings?: string;

		/**The name of the workflow scheme. The name must be unique. Maximum length 255 characters. */
		name?: string;

		/**Indicates whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works: */
		updateDraftIfNeeded?: boolean;
	}

	export interface WorkflowschemePutByIdBody {

		/**The name of the default workflow for the workflow scheme. The default workflow has All Unassigned Issue Types assigned to it in Jira. If defaultWorkflow is not specified when creating a workflow scheme, it is set to Jira Workflow (jira). */
		defaultWorkflow?: string;

		/**The description of the workflow scheme. */
		description?: string;

		/**The issue type-project mappings, where each mapping is an issue type ID and project name pair. Note that an issue type can only be mapped to one project in a workflow scheme. */
		issueTypeMappings?: string;

		/**The name of the workflow scheme. The name must be unique. Maximum length 255 characters. */
		name?: string;

		/**Indicates whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works: */
		updateDraftIfNeeded?: boolean;
	}

	export interface WorkflowschemeDefaultPutByIdBody {

		/**Indicates whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to false. */
		updateDraftIfNeeded?: boolean;

		/**The name of the workflow to set as the default workflow. For example, jira. */
		workflow?: string;
	}

	export interface WorkflowschemeDraftPutByIdBody {

		/**The name of the default workflow for the workflow scheme. The default workflow has All Unassigned Issue Types assigned to it in Jira. If defaultWorkflow is not specified when creating a workflow scheme, it is set to Jira Workflow (jira). */
		defaultWorkflow?: string;

		/**The description of the workflow scheme. */
		description?: string;

		/**The issue type-project mappings, where each mapping is an issue type ID and project name pair. Note that an issue type can only be mapped to one project in a workflow scheme. */
		issueTypeMappings?: string;

		/**The name of the workflow scheme. The name must be unique. Maximum length 255 characters. */
		name?: string;

		/**Indicates whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works: */
		updateDraftIfNeeded?: boolean;
	}

	export interface WorkflowschemeDraftDefaultPutByIdBody {

		/**Indicates whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to false. */
		updateDraftIfNeeded?: boolean;

		/**The name of the workflow to set as the default workflow. For example, jira. */
		workflow?: string;
	}

	export interface WorkflowschemeDraftIssuetypePutByIdAndIssueTypeBody {

		/**The ID of the issue type. Not required if updating the issue type-workflow mapping. */
		issueType?: string;

		/**Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to false. Only applicable when updating the workflow-issue types mapping. */
		updateDraftIfNeeded?: boolean;

		/**The name of the workflow. For example, jira. */
		workflow?: string;
	}

	export interface WorkflowschemeDraftWorkflowPutByIdAndWorkflowNameBody {

		/**Indicates whether the workflow is the default workflow for the workflow scheme. */
		defaultMapping?: boolean;

		/**The list of issue type IDs. */
		issueTypes?: Array<string>;

		/**Indicates whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to false. */
		updateDraftIfNeeded?: boolean;

		/**The name of the workflow. For example, jira. Optional if updating the workflow-issue types mapping. */
		workflow?: string;
	}

	export interface WorkflowschemeIssuetypePutByIdAndIssueTypeBody {

		/**The ID of the issue type. Not required if updating the issue type-workflow mapping. */
		issueType?: string;

		/**Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to false. Only applicable when updating the workflow-issue types mapping. */
		updateDraftIfNeeded?: boolean;

		/**The name of the workflow. For example, jira. */
		workflow?: string;
	}

	export interface WorkflowschemeWorkflowPutByIdAndWorkflowNameBody {

		/**Indicates whether the workflow is the default workflow for the workflow scheme. */
		defaultMapping?: boolean;

		/**The list of issue type IDs. */
		issueTypes?: Array<string>;

		/**Indicates whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to false. */
		updateDraftIfNeeded?: boolean;

		/**The name of the workflow. For example, jira. Optional if updating the workflow-issue types mapping. */
		workflow?: string;
	}

	export interface WorklogListPostByExpandBody {

		/**A list of worklog IDs. */
		ids?: Array<number>;
	}

}

