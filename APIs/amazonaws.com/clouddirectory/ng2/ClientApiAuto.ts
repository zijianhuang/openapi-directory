import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {

	/**The combination of an attribute key and an attribute value. */
	export interface AttributeKeyAndValue {

		/**A unique identifier for an attribute. */
		Key: AttributeKey;

		/**Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		Value: TypedAttributeValue;
	}

	export interface ApplySchemaResponse {
		AppliedSchemaArn?: string;
		DirectoryArn?: string;
	}

	export interface AttachObjectResponse {
		AttachedObjectIdentifier?: string;
	}

	export interface AttachToIndexResponse {
		AttachedObjectIdentifier?: string;
	}

	export interface AttachTypedLinkResponse {

		/**Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier?: TypedLinkSpecifier;
	}


	/**Identifies the attribute name and value for a typed link. */
	export interface AttributeNameAndValue {
		AttributeName: string;

		/**Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		Value: TypedAttributeValue;
	}

	export interface BatchReadResponse {
		Responses?: Array<BatchReadOperationResponse>;
	}


	/**Represents the output of a <code>BatchRead</code> operation. */
	export interface BatchReadOperation {

		/**Represents the output of a <a>ListObjectAttributes</a> operation. */
		ListObjectAttributes?: BatchListObjectAttributes;

		/**Represents the output of a <a>ListObjectChildren</a> operation. */
		ListObjectChildren?: BatchListObjectChildren;

		/**Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>. */
		ListAttachedIndices?: BatchListAttachedIndices;

		/**Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>. */
		ListObjectParentPaths?: BatchListObjectParentPaths;

		/**Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>. */
		GetObjectInformation?: BatchGetObjectInformation;

		/**Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>. */
		GetObjectAttributes?: BatchGetObjectAttributes;
		ListObjectParents?: BatchListObjectParents;

		/**Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>. */
		ListObjectPolicies?: BatchListObjectPolicies;

		/**Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>. */
		ListPolicyAttachments?: BatchListPolicyAttachments;

		/**Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>. */
		LookupPolicy?: BatchLookupPolicy;

		/**Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>. */
		ListIndex?: BatchListIndex;

		/**Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
		ListOutgoingTypedLinks?: BatchListOutgoingTypedLinks;

		/**Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
		ListIncomingTypedLinks?: BatchListIncomingTypedLinks;

		/**Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
		GetLinkAttributes?: BatchGetLinkAttributes;
	}

	export interface BatchWriteResponse {
		Responses?: Array<BatchWriteOperationResponse>;
	}


	/**Represents the output of a <code>BatchWrite</code> operation.  */
	export interface BatchWriteOperation {

		/**Represents the output of a <a>CreateObject</a> operation. */
		CreateObject?: BatchCreateObject;

		/**Represents the output of an <a>AttachObject</a> operation. */
		AttachObject?: BatchAttachObject;

		/**Represents the output of a <a>DetachObject</a> operation. */
		DetachObject?: BatchDetachObject;

		/**Represents the output of a <code>BatchUpdate</code> operation. */
		UpdateObjectAttributes?: BatchUpdateObjectAttributes;

		/**Represents the output of a <a>DeleteObject</a> operation. */
		DeleteObject?: BatchDeleteObject;

		/**Represents the output of a batch add facet to object operation. */
		AddFacetToObject?: BatchAddFacetToObject;

		/**A batch operation to remove a facet from an object. */
		RemoveFacetFromObject?: BatchRemoveFacetFromObject;

		/**Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>. */
		AttachPolicy?: BatchAttachPolicy;

		/**Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>. */
		DetachPolicy?: BatchDetachPolicy;

		/**Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>. */
		CreateIndex?: BatchCreateIndex;

		/**Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>. */
		AttachToIndex?: BatchAttachToIndex;

		/**Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>. */
		DetachFromIndex?: BatchDetachFromIndex;

		/**Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>. */
		AttachTypedLink?: BatchAttachTypedLink;

		/**Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>. */
		DetachTypedLink?: BatchDetachTypedLink;

		/**Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
		UpdateLinkAttributes?: BatchUpdateLinkAttributes;
	}

	export interface CreateDirectoryResponse {
		DirectoryArn: string;
		Name: string;
		ObjectIdentifier: string;
		AppliedSchemaArn: string;
	}


	/**An attribute that is associated with the <a>Facet</a>. */
	export interface FacetAttribute {
		Name: string;

		/**A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information. */
		AttributeDefinition?: FacetAttributeDefinition;

		/**The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name. */
		AttributeReference?: FacetAttributeReference;
		RequiredBehavior?: FacetAttributeRequiredBehavior;
	}

	export enum FacetAttributeRequiredBehavior { REQUIRED_ALWAYS = 0, NOT_REQUIRED = 1 }

	export interface CreateIndexResponse {
		ObjectIdentifier?: string;
	}


	/**A unique identifier for an attribute. */
	export interface AttributeKey {
		SchemaArn: string;
		FacetName: string;
		Name: string;
	}

	export interface CreateObjectResponse {
		ObjectIdentifier?: string;
	}


	/**A facet. */
	export interface SchemaFacet {
		SchemaArn?: string;
		FacetName?: string;
	}

	export interface CreateSchemaResponse {
		SchemaArn?: string;
	}

	export interface DeleteDirectoryResponse {
		DirectoryArn: string;
	}

	export interface DeleteSchemaResponse {
		SchemaArn?: string;
	}

	export interface DetachFromIndexResponse {
		DetachedObjectIdentifier?: string;
	}

	export interface DetachObjectResponse {
		DetachedObjectIdentifier?: string;
	}


	/**Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
	export interface TypedLinkSchemaAndFacetName {
		SchemaArn: string;
		TypedLinkName: string;
	}


	/**The reference that identifies an object. */
	export interface ObjectReference {
		Selector?: string;
	}

	export interface DisableDirectoryResponse {
		DirectoryArn: string;
	}

	export interface EnableDirectoryResponse {
		DirectoryArn: string;
	}

	export interface GetAppliedSchemaVersionResponse {
		AppliedSchemaArn?: string;
	}

	export interface GetDirectoryResponse {

		/**Directory structure that includes the directory name and directory ARN. */
		Directory: Directory;
	}

	export interface GetFacetResponse {

		/**A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information. */
		Facet?: Facet;
	}

	export interface GetLinkAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue>;
	}

	export interface GetObjectAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue>;
	}

	export interface GetObjectInformationResponse {
		SchemaFacets?: Array<SchemaFacet>;
		ObjectIdentifier?: string;
	}

	export interface GetSchemaAsJsonResponse {
		Name?: string;
		Document?: string;
	}

	export interface GetTypedLinkFacetInformationResponse {
		IdentityAttributeOrder?: Array<AttributeName>;
	}

	export interface ListAppliedSchemaArnsResponse {
		SchemaArns?: Array<Arn>;
		NextToken?: string;
	}

	export interface ListAttachedIndicesResponse {
		IndexAttachments?: Array<IndexAttachment>;
		NextToken?: string;
	}

	export interface ListDevelopmentSchemaArnsResponse {
		SchemaArns?: Array<Arn>;
		NextToken?: string;
	}

	export interface ListDirectoriesResponse {
		Directories: Array<Directory>;
		NextToken?: string;
	}

	export interface ListFacetAttributesResponse {
		Attributes?: Array<FacetAttribute>;
		NextToken?: string;
	}

	export interface ListFacetNamesResponse {
		FacetNames?: Array<FacetName>;
		NextToken?: string;
	}

	export interface ListIncomingTypedLinksResponse {
		LinkSpecifiers?: Array<TypedLinkSpecifier>;
		NextToken?: string;
	}


	/**Identifies the range of attributes that are used by a specified filter. */
	export interface TypedLinkAttributeRange {
		AttributeName?: string;

		/**A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>. */
		Range: TypedAttributeValueRange;
	}

	export interface ListIndexResponse {
		IndexAttachments?: Array<IndexAttachment>;
		NextToken?: string;
	}


	/**A range of attributes. */
	export interface ObjectAttributeRange {

		/**A unique identifier for an attribute. */
		AttributeKey?: AttributeKey;

		/**A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>. */
		Range?: TypedAttributeValueRange;
	}

	export interface ListManagedSchemaArnsResponse {
		SchemaArns?: Array<Arn>;
		NextToken?: string;
	}

	export interface ListObjectAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue>;
		NextToken?: string;
	}

	export interface ListObjectChildrenResponse {
		Children?: LinkNameToObjectIdentifierMap;
		NextToken?: string;
	}

	export interface ListObjectParentPathsResponse {
		PathToObjectIdentifiersList?: Array<PathToObjectIdentifiers>;
		NextToken?: string;
	}

	export interface ListObjectParentsResponse {
		Parents?: ObjectIdentifierToLinkNameMap;
		NextToken?: string;
		ParentLinks?: Array<ObjectIdentifierAndLinkNameTuple>;
	}

	export interface ListObjectPoliciesResponse {
		AttachedPolicyIds?: Array<ObjectIdentifier>;
		NextToken?: string;
	}

	export interface ListOutgoingTypedLinksResponse {
		TypedLinkSpecifiers?: Array<TypedLinkSpecifier>;
		NextToken?: string;
	}

	export interface ListPolicyAttachmentsResponse {
		ObjectIdentifiers?: Array<ObjectIdentifier>;
		NextToken?: string;
	}

	export interface ListPublishedSchemaArnsResponse {
		SchemaArns?: Array<Arn>;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	export interface ListTypedLinkFacetAttributesResponse {
		Attributes?: Array<TypedLinkAttributeDefinition>;
		NextToken?: string;
	}

	export interface ListTypedLinkFacetNamesResponse {
		FacetNames?: Array<TypedLinkName>;
		NextToken?: string;
	}

	export interface LookupPolicyResponse {
		PolicyToPathList?: Array<PolicyToPath>;
		NextToken?: string;
	}

	export interface PublishSchemaResponse {
		PublishedSchemaArn?: string;
	}

	export interface PutSchemaFromJsonResponse {
		Arn?: string;
	}


	/**The tag structure that contains a tag key and value. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}


	/**A structure that contains information used to update an attribute. */
	export interface FacetAttributeUpdate {

		/**An attribute that is associated with the <a>Facet</a>. */
		Attribute?: FacetAttribute;
		Action?: FacetAttributeUpdateAction;
	}

	export enum FacetAttributeUpdateAction { CREATE_OR_UPDATE = 0, DELETE = 1 }


	/**Structure that contains attribute update information. */
	export interface LinkAttributeUpdate {

		/**A unique identifier for an attribute. */
		AttributeKey?: AttributeKey;

		/**The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity. */
		AttributeAction?: LinkAttributeAction;
	}

	export interface UpdateObjectAttributesResponse {
		ObjectIdentifier?: string;
	}


	/**Structure that contains attribute update information. */
	export interface ObjectAttributeUpdate {

		/**A unique identifier for an attribute. */
		ObjectAttributeKey?: AttributeKey;

		/**The action to take on the object attribute. */
		ObjectAttributeAction?: ObjectAttributeAction;
	}

	export interface UpdateSchemaResponse {
		SchemaArn?: string;
	}


	/**A typed link facet attribute update. */
	export interface TypedLinkFacetAttributeUpdate {

		/**A typed link attribute definition. */
		Attribute: TypedLinkAttributeDefinition;
		Action: TypedLinkFacetAttributeUpdateAction;
	}

	export enum TypedLinkFacetAttributeUpdateAction { CREATE_OR_UPDATE = 0, DELETE = 1 }

	export interface UpgradeAppliedSchemaResponse {
		UpgradedSchemaArn?: string;
		DirectoryArn?: string;
	}

	export interface UpgradePublishedSchemaResponse {
		UpgradedSchemaArn?: string;
	}

	export interface AddFacetToObjectRequest {

		/**A facet. */
		SchemaFacet: SchemaFacet;
		ObjectAttributeList?: Array<AttributeKeyAndValue>;

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
	}

	export interface ApplySchemaRequest {
		PublishedSchemaArn: string;
	}

	export interface AttachObjectRequest {

		/**The reference that identifies an object. */
		ParentReference: ObjectReference;

		/**The reference that identifies an object. */
		ChildReference: ObjectReference;
		LinkName: string;
	}

	export interface AttachPolicyRequest {

		/**The reference that identifies an object. */
		PolicyReference: ObjectReference;

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
	}

	export interface AttachToIndexRequest {

		/**The reference that identifies an object. */
		IndexReference: ObjectReference;

		/**The reference that identifies an object. */
		TargetReference: ObjectReference;
	}

	export interface AttachTypedLinkRequest {

		/**The reference that identifies an object. */
		SourceObjectReference: ObjectReference;

		/**The reference that identifies an object. */
		TargetObjectReference: ObjectReference;

		/**Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		TypedLinkFacet: TypedLinkSchemaAndFacetName;
		Attributes: Array<AttributeNameAndValue>;
	}


	/**Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
	export interface TypedLinkSpecifier {

		/**Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		TypedLinkFacet: TypedLinkSchemaAndFacetName;

		/**The reference that identifies an object. */
		SourceObjectReference: ObjectReference;

		/**The reference that identifies an object. */
		TargetObjectReference: ObjectReference;
		IdentityAttributeValues: Array<AttributeNameAndValue>;
	}


	/**Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
	export interface TypedAttributeValue {
		StringValue?: string;
		BinaryValue?: string;
		BooleanValue?: boolean;
		NumberValue?: string;
		DatetimeValue?: Date;
	}


	/**Represents the output of a batch add facet to object operation. */
	export interface BatchAddFacetToObject {

		/**A facet. */
		SchemaFacet: SchemaFacet;
		ObjectAttributeList: Array<AttributeKeyAndValue>;

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
	}


	/**Represents the output of an <a>AttachObject</a> operation. */
	export interface BatchAttachObject {

		/**The reference that identifies an object. */
		ParentReference: ObjectReference;

		/**The reference that identifies an object. */
		ChildReference: ObjectReference;
		LinkName: string;
	}


	/**Represents the output batch <a>AttachObject</a> response operation. */
	export interface BatchAttachObjectResponse {
		attachedObjectIdentifier?: string;
	}


	/**Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchAttachPolicy {

		/**The reference that identifies an object. */
		PolicyReference: ObjectReference;

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
	}


	/**Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchAttachToIndex {

		/**The reference that identifies an object. */
		IndexReference: ObjectReference;

		/**The reference that identifies an object. */
		TargetReference: ObjectReference;
	}


	/**Represents the output of a <a>AttachToIndex</a> response operation. */
	export interface BatchAttachToIndexResponse {
		AttachedObjectIdentifier?: string;
	}


	/**Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchAttachTypedLink {

		/**The reference that identifies an object. */
		SourceObjectReference: ObjectReference;

		/**The reference that identifies an object. */
		TargetObjectReference: ObjectReference;

		/**Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		TypedLinkFacet: TypedLinkSchemaAndFacetName;
		Attributes: Array<AttributeNameAndValue>;
	}


	/**Represents the output of a <a>AttachTypedLink</a> response operation. */
	export interface BatchAttachTypedLinkResponse {

		/**Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier?: TypedLinkSpecifier;
	}


	/**Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchCreateIndex {
		OrderedIndexedAttributeList: Array<AttributeKey>;
		IsUnique: boolean;

		/**The reference that identifies an object. */
		ParentReference?: ObjectReference;
		LinkName?: string;
		BatchReferenceName?: string;
	}


	/**Represents the output of a <a>CreateIndex</a> response operation. */
	export interface BatchCreateIndexResponse {
		ObjectIdentifier?: string;
	}


	/**Represents the output of a <a>CreateObject</a> operation. */
	export interface BatchCreateObject {
		SchemaFacet: Array<SchemaFacet>;
		ObjectAttributeList: Array<AttributeKeyAndValue>;

		/**The reference that identifies an object. */
		ParentReference?: ObjectReference;
		LinkName?: string;
		BatchReferenceName?: string;
	}


	/**Represents the output of a <a>CreateObject</a> response operation. */
	export interface BatchCreateObjectResponse {
		ObjectIdentifier?: string;
	}


	/**Represents the output of a <a>DeleteObject</a> operation. */
	export interface BatchDeleteObject {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
	}


	/**Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchDetachFromIndex {

		/**The reference that identifies an object. */
		IndexReference: ObjectReference;

		/**The reference that identifies an object. */
		TargetReference: ObjectReference;
	}


	/**Represents the output of a <a>DetachFromIndex</a> response operation. */
	export interface BatchDetachFromIndexResponse {
		DetachedObjectIdentifier?: string;
	}


	/**Represents the output of a <a>DetachObject</a> operation. */
	export interface BatchDetachObject {

		/**The reference that identifies an object. */
		ParentReference: ObjectReference;
		LinkName: string;
		BatchReferenceName?: string;
	}


	/**Represents the output of a <a>DetachObject</a> response operation. */
	export interface BatchDetachObjectResponse {
		detachedObjectIdentifier?: string;
	}


	/**Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>. */
	export interface BatchDetachPolicy {

		/**The reference that identifies an object. */
		PolicyReference: ObjectReference;

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
	}


	/**Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchDetachTypedLink {

		/**Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier: TypedLinkSpecifier;
	}


	/**Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchGetLinkAttributes {

		/**Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier: TypedLinkSpecifier;
		AttributeNames: Array<AttributeName>;
	}


	/**Represents the output of a <a>GetLinkAttributes</a> response operation. */
	export interface BatchGetLinkAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue>;
	}


	/**Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchGetObjectAttributes {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;

		/**A facet. */
		SchemaFacet: SchemaFacet;
		AttributeNames: Array<AttributeName>;
	}


	/**Represents the output of a <a>GetObjectAttributes</a> response operation. */
	export interface BatchGetObjectAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue>;
	}


	/**Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchGetObjectInformation {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
	}


	/**Represents the output of a <a>GetObjectInformation</a> response operation. */
	export interface BatchGetObjectInformationResponse {
		SchemaFacets?: Array<SchemaFacet>;
		ObjectIdentifier?: string;
	}


	/**Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListAttachedIndices {

		/**The reference that identifies an object. */
		TargetReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
	}


	/**Represents the output of a <a>ListAttachedIndices</a> response operation. */
	export interface BatchListAttachedIndicesResponse {
		IndexAttachments?: Array<IndexAttachment>;
		NextToken?: string;
	}


	/**Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListIncomingTypedLinks {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

		/**Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: TypedLinkSchemaAndFacetName;
		NextToken?: string;
		MaxResults?: number;
	}


	/**Represents the output of a <a>ListIncomingTypedLinks</a> response operation. */
	export interface BatchListIncomingTypedLinksResponse {
		LinkSpecifiers?: Array<TypedLinkSpecifier>;
		NextToken?: string;
	}


	/**Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListIndex {
		RangesOnIndexedValues?: Array<ObjectAttributeRange>;

		/**The reference that identifies an object. */
		IndexReference: ObjectReference;
		MaxResults?: number;
		NextToken?: string;
	}


	/**Represents the output of a <a>ListIndex</a> response operation. */
	export interface BatchListIndexResponse {
		IndexAttachments?: Array<IndexAttachment>;
		NextToken?: string;
	}


	/**Represents the output of a <a>ListObjectAttributes</a> operation. */
	export interface BatchListObjectAttributes {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;

		/**A facet. */
		FacetFilter?: SchemaFacet;
	}


	/**Represents the output of a <a>ListObjectAttributes</a> response operation. */
	export interface BatchListObjectAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue>;
		NextToken?: string;
	}


	/**Represents the output of a <a>ListObjectChildren</a> operation. */
	export interface BatchListObjectChildren {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
	}


	/**Represents the output of a <a>ListObjectChildren</a> response operation. */
	export interface BatchListObjectChildrenResponse {
		Children?: LinkNameToObjectIdentifierMap;
		NextToken?: string;
	}


	/**Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListObjectParentPaths {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
	}


	/**Represents the output of a <a>ListObjectParentPaths</a> response operation. */
	export interface BatchListObjectParentPathsResponse {
		PathToObjectIdentifiersList?: Array<PathToObjectIdentifiers>;
		NextToken?: string;
	}

	export interface BatchListObjectParents {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface BatchListObjectParentsResponse {
		ParentLinks?: Array<ObjectIdentifierAndLinkNameTuple>;
		NextToken?: string;
	}


	/**Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListObjectPolicies {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
	}


	/**Represents the output of a <a>ListObjectPolicies</a> response operation. */
	export interface BatchListObjectPoliciesResponse {
		AttachedPolicyIds?: Array<ObjectIdentifier>;
		NextToken?: string;
	}


	/**Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListOutgoingTypedLinks {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

		/**Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: TypedLinkSchemaAndFacetName;
		NextToken?: string;
		MaxResults?: number;
	}


	/**Represents the output of a <a>ListOutgoingTypedLinks</a> response operation. */
	export interface BatchListOutgoingTypedLinksResponse {
		TypedLinkSpecifiers?: Array<TypedLinkSpecifier>;
		NextToken?: string;
	}


	/**Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListPolicyAttachments {

		/**The reference that identifies an object. */
		PolicyReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
	}


	/**Represents the output of a <a>ListPolicyAttachments</a> response operation. */
	export interface BatchListPolicyAttachmentsResponse {
		ObjectIdentifiers?: Array<ObjectIdentifier>;
		NextToken?: string;
	}


	/**Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchLookupPolicy {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
	}


	/**Represents the output of a <a>LookupPolicy</a> response operation. */
	export interface BatchLookupPolicyResponse {
		PolicyToPathList?: Array<PolicyToPath>;
		NextToken?: string;
	}

	export enum BatchReadExceptionType { ValidationException = 0, InvalidArnException = 1, ResourceNotFoundException = 2, InvalidNextTokenException = 3, AccessDeniedException = 4, NotNodeException = 5, FacetValidationException = 6, CannotListParentOfRootException = 7, NotIndexException = 8, NotPolicyException = 9, DirectoryNotEnabledException = 10, LimitExceededException = 11, InternalServiceException = 12 }


	/**The batch read exception structure, which contains the exception type and message. */
	export interface BatchReadException {
		Type?: BatchReadExceptionType;
		Message?: string;
	}

	export enum BatchReadExceptionType { ValidationException = 0, InvalidArnException = 1, ResourceNotFoundException = 2, InvalidNextTokenException = 3, AccessDeniedException = 4, NotNodeException = 5, FacetValidationException = 6, CannotListParentOfRootException = 7, NotIndexException = 8, NotPolicyException = 9, DirectoryNotEnabledException = 10, LimitExceededException = 11, InternalServiceException = 12 }


	/**Represents the output of a <code>BatchRead</code> success response operation. */
	export interface BatchReadSuccessfulResponse {

		/**Represents the output of a <a>ListObjectAttributes</a> response operation. */
		ListObjectAttributes?: BatchListObjectAttributesResponse;

		/**Represents the output of a <a>ListObjectChildren</a> response operation. */
		ListObjectChildren?: BatchListObjectChildrenResponse;

		/**Represents the output of a <a>GetObjectInformation</a> response operation. */
		GetObjectInformation?: BatchGetObjectInformationResponse;

		/**Represents the output of a <a>GetObjectAttributes</a> response operation. */
		GetObjectAttributes?: BatchGetObjectAttributesResponse;

		/**Represents the output of a <a>ListAttachedIndices</a> response operation. */
		ListAttachedIndices?: BatchListAttachedIndicesResponse;

		/**Represents the output of a <a>ListObjectParentPaths</a> response operation. */
		ListObjectParentPaths?: BatchListObjectParentPathsResponse;

		/**Represents the output of a <a>ListObjectPolicies</a> response operation. */
		ListObjectPolicies?: BatchListObjectPoliciesResponse;

		/**Represents the output of a <a>ListPolicyAttachments</a> response operation. */
		ListPolicyAttachments?: BatchListPolicyAttachmentsResponse;

		/**Represents the output of a <a>LookupPolicy</a> response operation. */
		LookupPolicy?: BatchLookupPolicyResponse;

		/**Represents the output of a <a>ListIndex</a> response operation. */
		ListIndex?: BatchListIndexResponse;

		/**Represents the output of a <a>ListOutgoingTypedLinks</a> response operation. */
		ListOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse;

		/**Represents the output of a <a>ListIncomingTypedLinks</a> response operation. */
		ListIncomingTypedLinks?: BatchListIncomingTypedLinksResponse;

		/**Represents the output of a <a>GetLinkAttributes</a> response operation. */
		GetLinkAttributes?: BatchGetLinkAttributesResponse;
		ListObjectParents?: BatchListObjectParentsResponse;
	}


	/**Represents the output of a <code>BatchRead</code> response operation. */
	export interface BatchReadOperationResponse {

		/**Represents the output of a <code>BatchRead</code> success response operation. */
		SuccessfulResponse?: BatchReadSuccessfulResponse;

		/**The batch read exception structure, which contains the exception type and message. */
		ExceptionResponse?: BatchReadException;
	}

	export enum ConsistencyLevel { SERIALIZABLE = 0, EVENTUAL = 1 }

	export interface BatchReadRequest {
		Operations: Array<BatchReadOperation>;
	}


	/**A batch operation to remove a facet from an object. */
	export interface BatchRemoveFacetFromObject {

		/**A facet. */
		SchemaFacet: SchemaFacet;

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
	}


	/**Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchUpdateLinkAttributes {

		/**Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier: TypedLinkSpecifier;
		AttributeUpdates: Array<LinkAttributeUpdate>;
	}


	/**Represents the output of a <code>BatchUpdate</code> operation.  */
	export interface BatchUpdateObjectAttributes {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		AttributeUpdates: Array<ObjectAttributeUpdate>;
	}


	/**Represents the output of a <code>BatchUpdate</code> response operation. */
	export interface BatchUpdateObjectAttributesResponse {
		ObjectIdentifier?: string;
	}


	/**Represents the output of a <code>BatchWrite</code> response operation. */
	export interface BatchWriteOperationResponse {

		/**Represents the output of a <a>CreateObject</a> response operation. */
		CreateObject?: BatchCreateObjectResponse;

		/**Represents the output batch <a>AttachObject</a> response operation. */
		AttachObject?: BatchAttachObjectResponse;

		/**Represents the output of a <a>DetachObject</a> response operation. */
		DetachObject?: BatchDetachObjectResponse;

		/**Represents the output of a <code>BatchUpdate</code> response operation. */
		UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse;

		/**Represents the output of a <a>DeleteObject</a> response operation. */
		DeleteObject?: BatchDeleteObjectResponse;

		/**The result of a batch add facet to object operation. */
		AddFacetToObject?: BatchAddFacetToObjectResponse;

		/**An empty result that represents success. */
		RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse;

		/**Represents the output of an <a>AttachPolicy</a> response operation. */
		AttachPolicy?: BatchAttachPolicyResponse;

		/**Represents the output of a <a>DetachPolicy</a> response operation. */
		DetachPolicy?: BatchDetachPolicyResponse;

		/**Represents the output of a <a>CreateIndex</a> response operation. */
		CreateIndex?: BatchCreateIndexResponse;

		/**Represents the output of a <a>AttachToIndex</a> response operation. */
		AttachToIndex?: BatchAttachToIndexResponse;

		/**Represents the output of a <a>DetachFromIndex</a> response operation. */
		DetachFromIndex?: BatchDetachFromIndexResponse;

		/**Represents the output of a <a>AttachTypedLink</a> response operation. */
		AttachTypedLink?: BatchAttachTypedLinkResponse;

		/**Represents the output of a <a>DetachTypedLink</a> response operation. */
		DetachTypedLink?: BatchDetachTypedLinkResponse;

		/**Represents the output of a <a>UpdateLinkAttributes</a> response operation. */
		UpdateLinkAttributes?: BatchUpdateLinkAttributesResponse;
	}

	export interface BatchWriteRequest {
		Operations: Array<BatchWriteOperation>;
	}

	export interface CreateDirectoryRequest {
		Name: string;
	}

	export enum ObjectType { NODE = 0, LEAF_NODE = 1, POLICY = 2, INDEX = 3 }

	export enum FacetStyle { STATIC = 0, DYNAMIC = 1 }

	export interface CreateFacetRequest {
		Name: string;
		Attributes?: Array<FacetAttribute>;
		ObjectType?: CreateFacetRequestObjectType;
		FacetStyle?: CreateFacetRequestFacetStyle;
	}

	export enum CreateFacetRequestObjectType { NODE = 0, LEAF_NODE = 1, POLICY = 2, INDEX = 3 }

	export enum CreateFacetRequestFacetStyle { STATIC = 0, DYNAMIC = 1 }

	export interface CreateIndexRequest {
		OrderedIndexedAttributeList: Array<AttributeKey>;
		IsUnique: boolean;

		/**The reference that identifies an object. */
		ParentReference?: ObjectReference;
		LinkName?: string;
	}

	export interface CreateObjectRequest {
		SchemaFacets: Array<SchemaFacet>;
		ObjectAttributeList?: Array<AttributeKeyAndValue>;

		/**The reference that identifies an object. */
		ParentReference?: ObjectReference;
		LinkName?: string;
	}

	export interface CreateSchemaRequest {
		Name: string;
	}


	/**Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API. */
	export interface TypedLinkFacet {
		Name: string;
		Attributes: Array<TypedLinkAttributeDefinition>;
		IdentityAttributeOrder: Array<AttributeName>;
	}

	export interface CreateTypedLinkFacetRequest {

		/**Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API. */
		Facet: TypedLinkFacet;
	}

	export interface DeleteFacetRequest {
		Name: string;
	}

	export interface DeleteObjectRequest {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
	}

	export interface DeleteTypedLinkFacetRequest {
		Name: string;
	}

	export interface DetachFromIndexRequest {

		/**The reference that identifies an object. */
		IndexReference: ObjectReference;

		/**The reference that identifies an object. */
		TargetReference: ObjectReference;
	}

	export interface DetachObjectRequest {

		/**The reference that identifies an object. */
		ParentReference: ObjectReference;
		LinkName: string;
	}

	export interface DetachPolicyRequest {

		/**The reference that identifies an object. */
		PolicyReference: ObjectReference;

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
	}

	export interface DetachTypedLinkRequest {

		/**Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier: TypedLinkSpecifier;
	}

	export enum DirectoryState { ENABLED = 0, DISABLED = 1, DELETED = 2 }


	/**Directory structure that includes the directory name and directory ARN. */
	export interface Directory {
		Name?: string;
		DirectoryArn?: string;
		State?: DirectoryState;
		CreationDateTime?: Date;
	}

	export enum DirectoryState { ENABLED = 0, DISABLED = 1, DELETED = 2 }


	/**A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information. */
	export interface Facet {
		Name?: string;
		ObjectType?: FacetObjectType;
		FacetStyle?: FacetFacetStyle;
	}

	export enum FacetObjectType { NODE = 0, LEAF_NODE = 1, POLICY = 2, INDEX = 3 }

	export enum FacetFacetStyle { STATIC = 0, DYNAMIC = 1 }


	/**A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information. */
	export interface FacetAttributeDefinition {
		Type: FacetAttributeDefinitionType;

		/**Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		DefaultValue?: TypedAttributeValue;
		IsImmutable?: boolean;
		Rules?: RuleMap;
	}

	export enum FacetAttributeDefinitionType { STRING = 0, BINARY = 1, BOOLEAN = 2, NUMBER = 3, DATETIME = 4, VARIANT = 5 }


	/**The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name. */
	export interface FacetAttributeReference {
		TargetFacetName: string;
		TargetAttributeName: string;
	}

	export enum RequiredAttributeBehavior { REQUIRED_ALWAYS = 0, NOT_REQUIRED = 1 }

	export enum FacetAttributeType { STRING = 0, BINARY = 1, BOOLEAN = 2, NUMBER = 3, DATETIME = 4, VARIANT = 5 }

	export enum UpdateActionType { CREATE_OR_UPDATE = 0, DELETE = 1 }

	export interface GetAppliedSchemaVersionRequest {
		SchemaArn: string;
	}

	export interface GetFacetRequest {
		Name: string;
	}

	export interface GetLinkAttributesRequest {

		/**Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier: TypedLinkSpecifier;
		AttributeNames: Array<AttributeName>;
		ConsistencyLevel?: GetLinkAttributesRequestConsistencyLevel;
	}

	export enum GetLinkAttributesRequestConsistencyLevel { SERIALIZABLE = 0, EVENTUAL = 1 }

	export interface GetObjectAttributesRequest {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;

		/**A facet. */
		SchemaFacet: SchemaFacet;
		AttributeNames: Array<AttributeName>;
	}

	export interface GetObjectInformationRequest {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
	}

	export interface GetTypedLinkFacetInformationRequest {
		Name: string;
	}


	/**Represents an index and an attached object. */
	export interface IndexAttachment {
		IndexedAttributes?: Array<AttributeKeyAndValue>;
		ObjectIdentifier?: string;
	}


	/**The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity. */
	export interface LinkAttributeAction {
		AttributeActionType?: LinkAttributeActionAttributeActionType;

		/**Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		AttributeUpdateValue?: TypedAttributeValue;
	}

	export enum LinkAttributeActionAttributeActionType { CREATE_OR_UPDATE = 0, DELETE = 1 }

	export interface ListAppliedSchemaArnsRequest {
		DirectoryArn: string;
		SchemaArn?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListAttachedIndicesRequest {

		/**The reference that identifies an object. */
		TargetReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListDevelopmentSchemaArnsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListDirectoriesRequest {
		NextToken?: string;
		MaxResults?: number;
		state?: ListDirectoriesRequestState;
	}

	export enum ListDirectoriesRequestState { ENABLED = 0, DISABLED = 1, DELETED = 2 }

	export interface ListFacetAttributesRequest {
		Name: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListFacetNamesRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListIncomingTypedLinksRequest {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

		/**Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: TypedLinkSchemaAndFacetName;
		NextToken?: string;
		MaxResults?: number;
		ConsistencyLevel?: ListIncomingTypedLinksRequestConsistencyLevel;
	}

	export enum ListIncomingTypedLinksRequestConsistencyLevel { SERIALIZABLE = 0, EVENTUAL = 1 }

	export interface ListIndexRequest {
		RangesOnIndexedValues?: Array<ObjectAttributeRange>;

		/**The reference that identifies an object. */
		IndexReference: ObjectReference;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListManagedSchemaArnsRequest {
		SchemaArn?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListObjectAttributesRequest {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;

		/**A facet. */
		FacetFilter?: SchemaFacet;
	}

	export interface ListObjectChildrenRequest {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListObjectParentPathsRequest {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListObjectParentsRequest {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
		IncludeAllLinksToEachParent?: boolean;
	}

	export interface ListObjectPoliciesRequest {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListOutgoingTypedLinksRequest {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

		/**Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: TypedLinkSchemaAndFacetName;
		NextToken?: string;
		MaxResults?: number;
		ConsistencyLevel?: ListOutgoingTypedLinksRequestConsistencyLevel;
	}

	export enum ListOutgoingTypedLinksRequestConsistencyLevel { SERIALIZABLE = 0, EVENTUAL = 1 }

	export interface ListPolicyAttachmentsRequest {

		/**The reference that identifies an object. */
		PolicyReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListPublishedSchemaArnsRequest {
		SchemaArn?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListTypedLinkFacetAttributesRequest {
		Name: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListTypedLinkFacetNamesRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface LookupPolicyRequest {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		NextToken?: string;
		MaxResults?: number;
	}


	/**The action to take on the object attribute. */
	export interface ObjectAttributeAction {
		ObjectAttributeActionType?: ObjectAttributeActionObjectAttributeActionType;

		/**Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		ObjectAttributeUpdateValue?: TypedAttributeValue;
	}

	export enum ObjectAttributeActionObjectAttributeActionType { CREATE_OR_UPDATE = 0, DELETE = 1 }


	/**A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>. */
	export interface TypedAttributeValueRange {
		StartMode: TypedAttributeValueRangeStartMode;

		/**Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		StartValue?: TypedAttributeValue;
		EndMode: TypedAttributeValueRangeEndMode;

		/**Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		EndValue?: TypedAttributeValue;
	}

	export enum TypedAttributeValueRangeStartMode { FIRST = 0, LAST = 1, LAST_BEFORE_MISSING_VALUES = 2, INCLUSIVE = 3, EXCLUSIVE = 4 }

	export enum TypedAttributeValueRangeEndMode { FIRST = 0, LAST = 1, LAST_BEFORE_MISSING_VALUES = 2, INCLUSIVE = 3, EXCLUSIVE = 4 }


	/**A pair of ObjectIdentifier and LinkName. */
	export interface ObjectIdentifierAndLinkNameTuple {
		ObjectIdentifier?: string;
		LinkName?: string;
	}


	/**Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory. */
	export interface PathToObjectIdentifiers {
		Path?: string;
		ObjectIdentifiers?: Array<ObjectIdentifier>;
	}


	/**Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>. */
	export interface PolicyAttachment {
		PolicyId?: string;
		ObjectIdentifier?: string;
		PolicyType?: string;
	}


	/**Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object. */
	export interface PolicyToPath {
		Path?: string;
		Policies?: Array<PolicyAttachment>;
	}

	export interface PublishSchemaRequest {
		Version: string;
		MinorVersion?: string;
		Name?: string;
	}

	export interface PutSchemaFromJsonRequest {
		Document: string;
	}

	export enum RangeMode { FIRST = 0, LAST = 1, LAST_BEFORE_MISSING_VALUES = 2, INCLUSIVE = 3, EXCLUSIVE = 4 }

	export interface RemoveFacetFromObjectRequest {

		/**A facet. */
		SchemaFacet: SchemaFacet;

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
	}

	export enum RuleType { BINARY_LENGTH = 0, NUMBER_COMPARISON = 1, STRING_FROM_SET = 2, STRING_LENGTH = 3 }


	/**Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule. */
	export interface Rule {
		Type?: RuleType;
		Parameters?: RuleParameterMap;
	}

	export enum RuleType { BINARY_LENGTH = 0, NUMBER_COMPARISON = 1, STRING_FROM_SET = 2, STRING_LENGTH = 3 }

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}


	/**A typed link attribute definition. */
	export interface TypedLinkAttributeDefinition {
		Name: string;
		Type: TypedLinkAttributeDefinitionType;

		/**Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		DefaultValue?: TypedAttributeValue;
		IsImmutable?: boolean;
		Rules?: RuleMap;
		RequiredBehavior: TypedLinkAttributeDefinitionRequiredBehavior;
	}

	export enum TypedLinkAttributeDefinitionType { STRING = 0, BINARY = 1, BOOLEAN = 2, NUMBER = 3, DATETIME = 4, VARIANT = 5 }

	export enum TypedLinkAttributeDefinitionRequiredBehavior { REQUIRED_ALWAYS = 0, NOT_REQUIRED = 1 }

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateFacetRequest {
		Name: string;
		AttributeUpdates?: Array<FacetAttributeUpdate>;
		ObjectType?: UpdateFacetRequestObjectType;
	}

	export enum UpdateFacetRequestObjectType { NODE = 0, LEAF_NODE = 1, POLICY = 2, INDEX = 3 }

	export interface UpdateLinkAttributesRequest {

		/**Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier: TypedLinkSpecifier;
		AttributeUpdates: Array<LinkAttributeUpdate>;
	}

	export interface UpdateObjectAttributesRequest {

		/**The reference that identifies an object. */
		ObjectReference: ObjectReference;
		AttributeUpdates: Array<ObjectAttributeUpdate>;
	}

	export interface UpdateSchemaRequest {
		Name: string;
	}

	export interface UpdateTypedLinkFacetRequest {
		Name: string;
		AttributeUpdates: Array<TypedLinkFacetAttributeUpdate>;
		IdentityAttributeOrder: Array<AttributeName>;
	}

	export interface UpgradeAppliedSchemaRequest {
		PublishedSchemaArn: string;
		DirectoryArn: string;
		DryRun?: boolean;
	}

	export interface UpgradePublishedSchemaRequest {
		DevelopmentSchemaArn: string;
		PublishedSchemaArn: string;
		MinorVersion: string;
		DryRun?: boolean;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.
		 * Put /amazonclouddirectory/2017-01-11/object/facets#x-amz-data-partition
		 * @return {AddFacetToObjectResponse} Success
		 */
		AddFacetToObject(requestBody: AddFacetToObjectBody, headersHandler?: () => HttpHeaders): Observable<AddFacetToObjectResponse> {
			return this.http.put<AddFacetToObjectResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/facets#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.
		 * Put /amazonclouddirectory/2017-01-11/schema/apply#x-amz-data-partition
		 * @return {ApplySchemaResponse} Success
		 */
		ApplySchema(requestBody: ApplySchemaBody, headersHandler?: () => HttpHeaders): Observable<ApplySchemaResponse> {
			return this.http.put<ApplySchemaResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema/apply#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
		 * Put /amazonclouddirectory/2017-01-11/object/attach#x-amz-data-partition
		 * @return {AttachObjectResponse} Success
		 */
		AttachObject(requestBody: AttachObjectBody, headersHandler?: () => HttpHeaders): Observable<AttachObjectResponse> {
			return this.http.put<AttachObjectResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/attach#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Attaches a policy object to a regular object. An object can have a limited number of attached policies.
		 * Put /amazonclouddirectory/2017-01-11/policy/attach#x-amz-data-partition
		 * @return {AttachPolicyResponse} Success
		 */
		AttachPolicy(requestBody: AttachPolicyBody, headersHandler?: () => HttpHeaders): Observable<AttachPolicyResponse> {
			return this.http.put<AttachPolicyResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/policy/attach#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Attaches the specified object to the specified index.
		 * Put /amazonclouddirectory/2017-01-11/index/attach#x-amz-data-partition
		 * @return {AttachToIndexResponse} Success
		 */
		AttachToIndex(requestBody: AttachToIndexBody, headersHandler?: () => HttpHeaders): Observable<AttachToIndexResponse> {
			return this.http.put<AttachToIndexResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/index/attach#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Put /amazonclouddirectory/2017-01-11/typedlink/attach#x-amz-data-partition
		 * @return {AttachTypedLinkResponse} Success
		 */
		AttachTypedLink(requestBody: AttachTypedLinkBody, headersHandler?: () => HttpHeaders): Observable<AttachTypedLinkResponse> {
			return this.http.put<AttachTypedLinkResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/typedlink/attach#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Performs all the read operations in a batch.
		 * Post /amazonclouddirectory/2017-01-11/batchread#x-amz-data-partition
		 * @return {BatchReadResponse} Success
		 */
		BatchRead(requestBody: BatchReadBody, headersHandler?: () => HttpHeaders): Observable<BatchReadResponse> {
			return this.http.post<BatchReadResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/batchread#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Performs all the write operations in a batch. Either all the operations succeed or none.
		 * Put /amazonclouddirectory/2017-01-11/batchwrite#x-amz-data-partition
		 * @return {BatchWriteResponse} Success
		 */
		BatchWrite(requestBody: BatchWriteBody, headersHandler?: () => HttpHeaders): Observable<BatchWriteResponse> {
			return this.http.put<BatchWriteResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/batchwrite#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.</p> <p>You can also quickly create a directory using a managed schema, called the <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>
		 * Put /amazonclouddirectory/2017-01-11/directory/create#x-amz-data-partition
		 * @return {CreateDirectoryResponse} Success
		 */
		CreateDirectory(requestBody: CreateDirectoryBody, headersHandler?: () => HttpHeaders): Observable<CreateDirectoryResponse> {
			return this.http.put<CreateDirectoryResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/directory/create#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.
		 * Put /amazonclouddirectory/2017-01-11/facet/create#x-amz-data-partition
		 * @return {CreateFacetResponse} Success
		 */
		CreateFacet(requestBody: CreateFacetBody, headersHandler?: () => HttpHeaders): Observable<CreateFacetResponse> {
			return this.http.put<CreateFacetResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/facet/create#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.
		 * Put /amazonclouddirectory/2017-01-11/index#x-amz-data-partition
		 * @return {CreateIndexResponse} Success
		 */
		CreateIndex(requestBody: CreateIndexBody, headersHandler?: () => HttpHeaders): Observable<CreateIndexResponse> {
			return this.http.put<CreateIndexResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/index#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet.
		 * Put /amazonclouddirectory/2017-01-11/object#x-amz-data-partition
		 * @return {CreateObjectResponse} Success
		 */
		CreateObject(requestBody: CreateObjectBody, headersHandler?: () => HttpHeaders): Observable<CreateObjectResponse> {
			return this.http.put<CreateObjectResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
		 * Put /amazonclouddirectory/2017-01-11/schema/create
		 * @return {CreateSchemaResponse} Success
		 */
		CreateSchema(requestBody: CreateSchemaBody, headersHandler?: () => HttpHeaders): Observable<CreateSchemaResponse> {
			return this.http.put<CreateSchemaResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema/create', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Put /amazonclouddirectory/2017-01-11/typedlink/facet/create#x-amz-data-partition
		 * @return {CreateTypedLinkFacetResponse} Success
		 */
		CreateTypedLinkFacet(requestBody: CreateTypedLinkFacetBody, headersHandler?: () => HttpHeaders): Observable<CreateTypedLinkFacetResponse> {
			return this.http.put<CreateTypedLinkFacetResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/typedlink/facet/create#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
		 * Put /amazonclouddirectory/2017-01-11/directory#x-amz-data-partition
		 * @return {DeleteDirectoryResponse} Success
		 */
		DeleteDirectory(headersHandler?: () => HttpHeaders): Observable<DeleteDirectoryResponse> {
			return this.http.put<DeleteDirectoryResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/directory#x-amz-data-partition', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
		 * Put /amazonclouddirectory/2017-01-11/facet/delete#x-amz-data-partition
		 * @return {DeleteFacetResponse} Success
		 */
		DeleteFacet(requestBody: DeleteFacetBody, headersHandler?: () => HttpHeaders): Observable<DeleteFacetResponse> {
			return this.http.put<DeleteFacetResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/facet/delete#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.
		 * Put /amazonclouddirectory/2017-01-11/object/delete#x-amz-data-partition
		 * @return {DeleteObjectResponse} Success
		 */
		DeleteObject(requestBody: DeleteObjectBody, headersHandler?: () => HttpHeaders): Observable<DeleteObjectResponse> {
			return this.http.put<DeleteObjectResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/delete#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a given schema. Schemas in a development and published state can only be deleted.
		 * Put /amazonclouddirectory/2017-01-11/schema#x-amz-data-partition
		 * @return {DeleteSchemaResponse} Success
		 */
		DeleteSchema(headersHandler?: () => HttpHeaders): Observable<DeleteSchemaResponse> {
			return this.http.put<DeleteSchemaResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema#x-amz-data-partition', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Put /amazonclouddirectory/2017-01-11/typedlink/facet/delete#x-amz-data-partition
		 * @return {DeleteTypedLinkFacetResponse} Success
		 */
		DeleteTypedLinkFacet(requestBody: DeleteTypedLinkFacetBody, headersHandler?: () => HttpHeaders): Observable<DeleteTypedLinkFacetResponse> {
			return this.http.put<DeleteTypedLinkFacetResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/typedlink/facet/delete#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Detaches the specified object from the specified index.
		 * Put /amazonclouddirectory/2017-01-11/index/detach#x-amz-data-partition
		 * @return {DetachFromIndexResponse} Success
		 */
		DetachFromIndex(requestBody: DetachFromIndexBody, headersHandler?: () => HttpHeaders): Observable<DetachFromIndexResponse> {
			return this.http.put<DetachFromIndexResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/index/detach#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
		 * Put /amazonclouddirectory/2017-01-11/object/detach#x-amz-data-partition
		 * @return {DetachObjectResponse} Success
		 */
		DetachObject(requestBody: DetachObjectBody, headersHandler?: () => HttpHeaders): Observable<DetachObjectResponse> {
			return this.http.put<DetachObjectResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/detach#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Detaches a policy from an object.
		 * Put /amazonclouddirectory/2017-01-11/policy/detach#x-amz-data-partition
		 * @return {DetachPolicyResponse} Success
		 */
		DetachPolicy(requestBody: DetachPolicyBody, headersHandler?: () => HttpHeaders): Observable<DetachPolicyResponse> {
			return this.http.put<DetachPolicyResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/policy/detach#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Put /amazonclouddirectory/2017-01-11/typedlink/detach#x-amz-data-partition
		 * @return {void} Success
		 */
		DetachTypedLink(requestBody: DetachTypedLinkBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '/amazonclouddirectory/2017-01-11/typedlink/detach#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
		 * Put /amazonclouddirectory/2017-01-11/directory/disable#x-amz-data-partition
		 * @return {DisableDirectoryResponse} Success
		 */
		DisableDirectory(headersHandler?: () => HttpHeaders): Observable<DisableDirectoryResponse> {
			return this.http.put<DisableDirectoryResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/directory/disable#x-amz-data-partition', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
		 * Put /amazonclouddirectory/2017-01-11/directory/enable#x-amz-data-partition
		 * @return {EnableDirectoryResponse} Success
		 */
		EnableDirectory(headersHandler?: () => HttpHeaders): Observable<EnableDirectoryResponse> {
			return this.http.put<EnableDirectoryResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/directory/enable#x-amz-data-partition', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns current applied schema version ARN, including the minor version in use.
		 * Post /amazonclouddirectory/2017-01-11/schema/getappliedschema
		 * @return {GetAppliedSchemaVersionResponse} Success
		 */
		GetAppliedSchemaVersion(requestBody: GetAppliedSchemaVersionBody, headersHandler?: () => HttpHeaders): Observable<GetAppliedSchemaVersionResponse> {
			return this.http.post<GetAppliedSchemaVersionResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema/getappliedschema', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves metadata about a directory.
		 * Post /amazonclouddirectory/2017-01-11/directory/get#x-amz-data-partition
		 * @return {GetDirectoryResponse} Success
		 */
		GetDirectory(headersHandler?: () => HttpHeaders): Observable<GetDirectoryResponse> {
			return this.http.post<GetDirectoryResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/directory/get#x-amz-data-partition', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.
		 * Post /amazonclouddirectory/2017-01-11/facet#x-amz-data-partition
		 * @return {GetFacetResponse} Success
		 */
		GetFacet(requestBody: GetFacetBody, headersHandler?: () => HttpHeaders): Observable<GetFacetResponse> {
			return this.http.post<GetFacetResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/facet#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
		 * Put /amazonclouddirectory/2017-01-11/facet#x-amz-data-partition
		 * @return {UpdateFacetResponse} Success
		 */
		UpdateFacet(requestBody: UpdateFacetBody, headersHandler?: () => HttpHeaders): Observable<UpdateFacetResponse> {
			return this.http.put<UpdateFacetResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/facet#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves attributes that are associated with a typed link.
		 * Post /amazonclouddirectory/2017-01-11/typedlink/attributes/get#x-amz-data-partition
		 * @return {GetLinkAttributesResponse} Success
		 */
		GetLinkAttributes(requestBody: GetLinkAttributesBody, headersHandler?: () => HttpHeaders): Observable<GetLinkAttributesResponse> {
			return this.http.post<GetLinkAttributesResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/typedlink/attributes/get#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves attributes within a facet that are associated with an object.
		 * Post /amazonclouddirectory/2017-01-11/object/attributes/get#x-amz-data-partition
		 * @return {GetObjectAttributesResponse} Success
		 */
		GetObjectAttributes(requestBody: GetObjectAttributesBody, headersHandler?: () => HttpHeaders): Observable<GetObjectAttributesResponse> {
			return this.http.post<GetObjectAttributesResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/attributes/get#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves metadata about an object.
		 * Post /amazonclouddirectory/2017-01-11/object/information#x-amz-data-partition
		 * @return {GetObjectInformationResponse} Success
		 */
		GetObjectInformation(requestBody: GetObjectInformationBody, headersHandler?: () => HttpHeaders): Observable<GetObjectInformationResponse> {
			return this.http.post<GetObjectInformationResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/information#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
		 * Post /amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition
		 * @return {GetSchemaAsJsonResponse} Success
		 */
		GetSchemaAsJson(headersHandler?: () => HttpHeaders): Observable<GetSchemaAsJsonResponse> {
			return this.http.post<GetSchemaAsJsonResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
		 * Put /amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition
		 * @return {PutSchemaFromJsonResponse} Success
		 */
		PutSchemaFromJson(requestBody: PutSchemaFromJsonBody, headersHandler?: () => HttpHeaders): Observable<PutSchemaFromJsonResponse> {
			return this.http.put<PutSchemaFromJsonResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Post /amazonclouddirectory/2017-01-11/typedlink/facet/get#x-amz-data-partition
		 * @return {GetTypedLinkFacetInformationResponse} Success
		 */
		GetTypedLinkFacetInformation(requestBody: GetTypedLinkFacetInformationBody, headersHandler?: () => HttpHeaders): Observable<GetTypedLinkFacetInformationResponse> {
			return this.http.post<GetTypedLinkFacetInformationResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/typedlink/facet/get#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.
		 * Post /amazonclouddirectory/2017-01-11/schema/applied
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppliedSchemaArnsResponse} Success
		 */
		ListAppliedSchemaArns(MaxResults: string, NextToken: string, requestBody: ListAppliedSchemaArnsBody, headersHandler?: () => HttpHeaders): Observable<ListAppliedSchemaArnsResponse> {
			return this.http.post<ListAppliedSchemaArnsResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema/applied?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists indices attached to the specified object.
		 * Post /amazonclouddirectory/2017-01-11/object/indices#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAttachedIndicesResponse} Success
		 */
		ListAttachedIndices(MaxResults: string, NextToken: string, requestBody: ListAttachedIndicesBody, headersHandler?: () => HttpHeaders): Observable<ListAttachedIndicesResponse> {
			return this.http.post<ListAttachedIndicesResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/indices#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
		 * Post /amazonclouddirectory/2017-01-11/schema/development
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDevelopmentSchemaArnsResponse} Success
		 */
		ListDevelopmentSchemaArns(MaxResults: string, NextToken: string, requestBody: ListDevelopmentSchemaArnsBody, headersHandler?: () => HttpHeaders): Observable<ListDevelopmentSchemaArnsResponse> {
			return this.http.post<ListDevelopmentSchemaArnsResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema/development?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists directories created within an account.
		 * Post /amazonclouddirectory/2017-01-11/directory/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDirectoriesResponse} Success
		 */
		ListDirectories(MaxResults: string, NextToken: string, requestBody: ListDirectoriesBody, headersHandler?: () => HttpHeaders): Observable<ListDirectoriesResponse> {
			return this.http.post<ListDirectoriesResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/directory/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves attributes attached to the facet.
		 * Post /amazonclouddirectory/2017-01-11/facet/attributes#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFacetAttributesResponse} Success
		 */
		ListFacetAttributes(MaxResults: string, NextToken: string, requestBody: ListFacetAttributesBody, headersHandler?: () => HttpHeaders): Observable<ListFacetAttributesResponse> {
			return this.http.post<ListFacetAttributesResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/facet/attributes#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the names of facets that exist in a schema.
		 * Post /amazonclouddirectory/2017-01-11/facet/list#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFacetNamesResponse} Success
		 */
		ListFacetNames(MaxResults: string, NextToken: string, requestBody: ListFacetNamesBody, headersHandler?: () => HttpHeaders): Observable<ListFacetNamesResponse> {
			return this.http.post<ListFacetNamesResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/facet/list#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Post /amazonclouddirectory/2017-01-11/typedlink/incoming#x-amz-data-partition
		 * @return {ListIncomingTypedLinksResponse} Success
		 */
		ListIncomingTypedLinks(requestBody: ListIncomingTypedLinksBody, headersHandler?: () => HttpHeaders): Observable<ListIncomingTypedLinksResponse> {
			return this.http.post<ListIncomingTypedLinksResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/typedlink/incoming#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists objects attached to the specified index.
		 * Post /amazonclouddirectory/2017-01-11/index/targets#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIndexResponse} Success
		 */
		ListIndex(MaxResults: string, NextToken: string, requestBody: ListIndexBody, headersHandler?: () => HttpHeaders): Observable<ListIndexResponse> {
			return this.http.post<ListIndexResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/index/targets#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.
		 * Post /amazonclouddirectory/2017-01-11/schema/managed
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListManagedSchemaArnsResponse} Success
		 */
		ListManagedSchemaArns(MaxResults: string, NextToken: string, requestBody: ListManagedSchemaArnsBody, headersHandler?: () => HttpHeaders): Observable<ListManagedSchemaArnsResponse> {
			return this.http.post<ListManagedSchemaArnsResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema/managed?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all attributes that are associated with an object.
		 * Post /amazonclouddirectory/2017-01-11/object/attributes#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListObjectAttributesResponse} Success
		 */
		ListObjectAttributes(MaxResults: string, NextToken: string, requestBody: ListObjectAttributesBody, headersHandler?: () => HttpHeaders): Observable<ListObjectAttributesResponse> {
			return this.http.post<ListObjectAttributesResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/attributes#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a paginated list of child objects that are associated with a given object.
		 * Post /amazonclouddirectory/2017-01-11/object/children#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListObjectChildrenResponse} Success
		 */
		ListObjectChildren(MaxResults: string, NextToken: string, requestBody: ListObjectChildrenBody, headersHandler?: () => HttpHeaders): Observable<ListObjectChildrenResponse> {
			return this.http.post<ListObjectChildrenResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/children#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
		 * Post /amazonclouddirectory/2017-01-11/object/parentpaths#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListObjectParentPathsResponse} Success
		 */
		ListObjectParentPaths(MaxResults: string, NextToken: string, requestBody: ListObjectParentPathsBody, headersHandler?: () => HttpHeaders): Observable<ListObjectParentPathsResponse> {
			return this.http.post<ListObjectParentPathsResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/parentpaths#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists parent objects that are associated with a given object in pagination fashion.
		 * Post /amazonclouddirectory/2017-01-11/object/parent#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListObjectParentsResponse} Success
		 */
		ListObjectParents(MaxResults: string, NextToken: string, requestBody: ListObjectParentsBody, headersHandler?: () => HttpHeaders): Observable<ListObjectParentsResponse> {
			return this.http.post<ListObjectParentsResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/parent#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns policies attached to an object in pagination fashion.
		 * Post /amazonclouddirectory/2017-01-11/object/policy#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListObjectPoliciesResponse} Success
		 */
		ListObjectPolicies(MaxResults: string, NextToken: string, requestBody: ListObjectPoliciesBody, headersHandler?: () => HttpHeaders): Observable<ListObjectPoliciesResponse> {
			return this.http.post<ListObjectPoliciesResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/policy#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Post /amazonclouddirectory/2017-01-11/typedlink/outgoing#x-amz-data-partition
		 * @return {ListOutgoingTypedLinksResponse} Success
		 */
		ListOutgoingTypedLinks(requestBody: ListOutgoingTypedLinksBody, headersHandler?: () => HttpHeaders): Observable<ListOutgoingTypedLinksResponse> {
			return this.http.post<ListOutgoingTypedLinksResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/typedlink/outgoing#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.
		 * Post /amazonclouddirectory/2017-01-11/policy/attachment#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPolicyAttachmentsResponse} Success
		 */
		ListPolicyAttachments(MaxResults: string, NextToken: string, requestBody: ListPolicyAttachmentsBody, headersHandler?: () => HttpHeaders): Observable<ListPolicyAttachmentsResponse> {
			return this.http.post<ListPolicyAttachmentsResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/policy/attachment#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.
		 * Post /amazonclouddirectory/2017-01-11/schema/published
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPublishedSchemaArnsResponse} Success
		 */
		ListPublishedSchemaArns(MaxResults: string, NextToken: string, requestBody: ListPublishedSchemaArnsBody, headersHandler?: () => HttpHeaders): Observable<ListPublishedSchemaArnsResponse> {
			return this.http.post<ListPublishedSchemaArnsResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema/published?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
		 * Post /amazonclouddirectory/2017-01-11/tags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(MaxResults: string, NextToken: string, requestBody: ListTagsForResourceBody, headersHandler?: () => HttpHeaders): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/tags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Post /amazonclouddirectory/2017-01-11/typedlink/facet/attributes#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTypedLinkFacetAttributesResponse} Success
		 */
		ListTypedLinkFacetAttributes(MaxResults: string, NextToken: string, requestBody: ListTypedLinkFacetAttributesBody, headersHandler?: () => HttpHeaders): Observable<ListTypedLinkFacetAttributesResponse> {
			return this.http.post<ListTypedLinkFacetAttributesResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/typedlink/facet/attributes#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Post /amazonclouddirectory/2017-01-11/typedlink/facet/list#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTypedLinkFacetNamesResponse} Success
		 */
		ListTypedLinkFacetNames(MaxResults: string, NextToken: string, requestBody: ListTypedLinkFacetNamesBody, headersHandler?: () => HttpHeaders): Observable<ListTypedLinkFacetNamesResponse> {
			return this.http.post<ListTypedLinkFacetNamesResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/typedlink/facet/list#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.
		 * Post /amazonclouddirectory/2017-01-11/policy/lookup#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {LookupPolicyResponse} Success
		 */
		LookupPolicy(MaxResults: string, NextToken: string, requestBody: LookupPolicyBody, headersHandler?: () => HttpHeaders): Observable<LookupPolicyResponse> {
			return this.http.post<LookupPolicyResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/policy/lookup#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Publishes a development schema with a major version and a recommended minor version.
		 * Put /amazonclouddirectory/2017-01-11/schema/publish#x-amz-data-partition
		 * @return {PublishSchemaResponse} Success
		 */
		PublishSchema(requestBody: PublishSchemaBody, headersHandler?: () => HttpHeaders): Observable<PublishSchemaResponse> {
			return this.http.put<PublishSchemaResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema/publish#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes the specified facet from the specified object.
		 * Put /amazonclouddirectory/2017-01-11/object/facets/delete#x-amz-data-partition
		 * @return {RemoveFacetFromObjectResponse} Success
		 */
		RemoveFacetFromObject(requestBody: RemoveFacetFromObjectBody, headersHandler?: () => HttpHeaders): Observable<RemoveFacetFromObjectResponse> {
			return this.http.put<RemoveFacetFromObjectResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/facets/delete#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * An API operation for adding tags to a resource.
		 * Put /amazonclouddirectory/2017-01-11/tags/add
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceBody, headersHandler?: () => HttpHeaders): Observable<TagResourceResponse> {
			return this.http.put<TagResourceResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/tags/add', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * An API operation for removing tags from a resource.
		 * Put /amazonclouddirectory/2017-01-11/tags/remove
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceBody, headersHandler?: () => HttpHeaders): Observable<UntagResourceResponse> {
			return this.http.put<UntagResourceResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/tags/remove', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.
		 * Post /amazonclouddirectory/2017-01-11/typedlink/attributes/update#x-amz-data-partition
		 * @return {UpdateLinkAttributesResponse} Success
		 */
		UpdateLinkAttributes(requestBody: UpdateLinkAttributesBody, headersHandler?: () => HttpHeaders): Observable<UpdateLinkAttributesResponse> {
			return this.http.post<UpdateLinkAttributesResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/typedlink/attributes/update#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a given object's attributes.
		 * Put /amazonclouddirectory/2017-01-11/object/update#x-amz-data-partition
		 * @return {UpdateObjectAttributesResponse} Success
		 */
		UpdateObjectAttributes(requestBody: UpdateObjectAttributesBody, headersHandler?: () => HttpHeaders): Observable<UpdateObjectAttributesResponse> {
			return this.http.put<UpdateObjectAttributesResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/object/update#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates the schema name with a new name. Only development schema names can be updated.
		 * Put /amazonclouddirectory/2017-01-11/schema/update#x-amz-data-partition
		 * @return {UpdateSchemaResponse} Success
		 */
		UpdateSchema(requestBody: UpdateSchemaBody, headersHandler?: () => HttpHeaders): Observable<UpdateSchemaResponse> {
			return this.http.put<UpdateSchemaResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema/update#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Put /amazonclouddirectory/2017-01-11/typedlink/facet#x-amz-data-partition
		 * @return {UpdateTypedLinkFacetResponse} Success
		 */
		UpdateTypedLinkFacet(requestBody: UpdateTypedLinkFacetBody, headersHandler?: () => HttpHeaders): Observable<UpdateTypedLinkFacetResponse> {
			return this.http.put<UpdateTypedLinkFacetResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/typedlink/facet#x-amz-data-partition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.
		 * Put /amazonclouddirectory/2017-01-11/schema/upgradeapplied
		 * @return {UpgradeAppliedSchemaResponse} Success
		 */
		UpgradeAppliedSchema(requestBody: UpgradeAppliedSchemaBody, headersHandler?: () => HttpHeaders): Observable<UpgradeAppliedSchemaResponse> {
			return this.http.put<UpgradeAppliedSchemaResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema/upgradeapplied', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.
		 * Put /amazonclouddirectory/2017-01-11/schema/upgradepublished
		 * @return {UpgradePublishedSchemaResponse} Success
		 */
		UpgradePublishedSchema(requestBody: UpgradePublishedSchemaBody, headersHandler?: () => HttpHeaders): Observable<UpgradePublishedSchemaResponse> {
			return this.http.put<UpgradePublishedSchemaResponse>(this.baseUri + '/amazonclouddirectory/2017-01-11/schema/upgradepublished', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

	export interface AddFacetToObjectBody {

		/**A facet. */
		SchemaFacet: string;

		/**Attributes on the facet that you are adding to the object. */
		ObjectAttributeList?: Array<AttributeKeyAndValue>;

		/**The reference that identifies an object. */
		ObjectReference: string;
	}

	export interface ApplySchemaBody {

		/**Published schema Amazon Resource Name (ARN) that needs to be copied. For more information, see <a>arns</a>. */
		PublishedSchemaArn: string;
	}

	export interface AttachObjectBody {

		/**The reference that identifies an object. */
		ParentReference: string;

		/**The reference that identifies an object. */
		ChildReference: string;

		/**
		 * The link name with which the child object is attached to the parent.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [^\/\[\]\(\):\{\}#@!?\s\\;]+
		 */
		LinkName: string;
	}

	export interface AttachPolicyBody {

		/**The reference that identifies an object. */
		PolicyReference: string;

		/**The reference that identifies an object. */
		ObjectReference: string;
	}

	export interface AttachToIndexBody {

		/**The reference that identifies an object. */
		IndexReference: string;

		/**The reference that identifies an object. */
		TargetReference: string;
	}

	export interface AttachTypedLinkBody {

		/**The reference that identifies an object. */
		SourceObjectReference: string;

		/**The reference that identifies an object. */
		TargetObjectReference: string;

		/**Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		TypedLinkFacet: string;

		/**A set of attributes that are associated with the typed link. */
		Attributes: Array<AttributeNameAndValue>;
	}

	export interface BatchReadBody {

		/**A list of operations that are part of the batch. */
		Operations: Array<BatchReadOperation>;
	}

	export interface BatchWriteBody {

		/**A list of operations that are part of the batch. */
		Operations: Array<BatchWriteOperation>;
	}

	export interface CreateDirectoryBody {

		/**
		 * The name of the <a>Directory</a>. Should be unique per account, per region.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
	}

	export interface CreateFacetBody {

		/**
		 * The name of the <a>Facet</a>, which is unique for a given schema.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;

		/**The attributes that are associated with the <a>Facet</a>. */
		Attributes?: Array<FacetAttribute>;

		/**<p>Specifies whether a given object created from this facet is of type node, leaf node, policy or index.</p> <ul> <li> <p>Node: Can have multiple children but one parent.</p> </li> </ul> <ul> <li> <p>Leaf node: Cannot have children but can have multiple parents.</p> </li> </ul> <ul> <li> <p>Policy: Allows you to store a policy document and policy type. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p> </li> </ul> <ul> <li> <p>Index: Can be created with the Index API.</p> </li> </ul> */
		ObjectType?: CreateFacetBodyObjectType;

		/**There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations. */
		FacetStyle?: CreateFacetBodyFacetStyle;
	}

	export enum CreateFacetBodyObjectType { NODE = 0, LEAF_NODE = 1, POLICY = 2, INDEX = 3 }

	export enum CreateFacetBodyFacetStyle { STATIC = 0, DYNAMIC = 1 }

	export interface CreateIndexBody {

		/**Specifies the attributes that should be indexed on. Currently only a single attribute is supported. */
		OrderedIndexedAttributeList: Array<AttributeKey>;

		/**Indicates whether the attribute that is being indexed has unique values or not. */
		IsUnique: boolean;

		/**The reference that identifies an object. */
		ParentReference?: string;

		/**
		 * The name of the link between the parent object and the index object.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [^\/\[\]\(\):\{\}#@!?\s\\;]+
		 */
		LinkName?: string;
	}

	export interface CreateObjectBody {

		/**A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details. */
		SchemaFacets: Array<SchemaFacet>;

		/**The attribute map whose attribute ARN contains the key and attribute value as the map value. */
		ObjectAttributeList?: Array<AttributeKeyAndValue>;

		/**The reference that identifies an object. */
		ParentReference?: string;

		/**
		 * The name of link that is used to attach this object to a parent.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [^\/\[\]\(\):\{\}#@!?\s\\;]+
		 */
		LinkName?: string;
	}

	export interface CreateSchemaBody {

		/**
		 * The name that is associated with the schema. This is unique to each account and in each region.
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
	}

	export interface CreateTypedLinkFacetBody {

		/**Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API. */
		Facet: string;
	}

	export interface DeleteFacetBody {

		/**
		 * The name of the facet to delete.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
	}

	export interface DeleteObjectBody {

		/**The reference that identifies an object. */
		ObjectReference: string;
	}

	export interface DeleteTypedLinkFacetBody {

		/**
		 * The unique name of the typed link facet.
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
	}

	export interface DetachFromIndexBody {

		/**The reference that identifies an object. */
		IndexReference: string;

		/**The reference that identifies an object. */
		TargetReference: string;
	}

	export interface DetachObjectBody {

		/**The reference that identifies an object. */
		ParentReference: string;

		/**
		 * The link name associated with the object that needs to be detached.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [^\/\[\]\(\):\{\}#@!?\s\\;]+
		 */
		LinkName: string;
	}

	export interface DetachPolicyBody {

		/**The reference that identifies an object. */
		PolicyReference: string;

		/**The reference that identifies an object. */
		ObjectReference: string;
	}

	export interface DetachTypedLinkBody {

		/**Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier: string;
	}

	export interface GetAppliedSchemaVersionBody {

		/**The ARN of the applied schema. */
		SchemaArn: string;
	}

	export interface GetFacetBody {

		/**
		 * The name of the facet to retrieve.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
	}

	export interface UpdateFacetBody {

		/**
		 * The name of the facet.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;

		/**List of attributes that need to be updated in a given schema <a>Facet</a>. Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update operation to perform. */
		AttributeUpdates?: Array<FacetAttributeUpdate>;

		/**The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details. */
		ObjectType?: UpdateFacetBodyObjectType;
	}

	export enum UpdateFacetBodyObjectType { NODE = 0, LEAF_NODE = 1, POLICY = 2, INDEX = 3 }

	export interface GetLinkAttributesBody {

		/**Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier: string;

		/**A list of attribute names whose values will be retrieved. */
		AttributeNames: Array<AttributeName>;

		/**The consistency level at which to retrieve the attributes on a typed link. */
		ConsistencyLevel?: GetLinkAttributesBodyConsistencyLevel;
	}

	export enum GetLinkAttributesBodyConsistencyLevel { SERIALIZABLE = 0, EVENTUAL = 1 }

	export interface GetObjectAttributesBody {

		/**The reference that identifies an object. */
		ObjectReference: string;

		/**A facet. */
		SchemaFacet: string;

		/**List of attribute names whose values will be retrieved. */
		AttributeNames: Array<AttributeName>;
	}

	export interface GetObjectInformationBody {

		/**The reference that identifies an object. */
		ObjectReference: string;
	}

	export interface PutSchemaFromJsonBody {

		/**The replacement JSON schema. */
		Document: string;
	}

	export interface GetTypedLinkFacetInformationBody {

		/**
		 * The unique name of the typed link facet.
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
	}

	export interface ListAppliedSchemaArnsBody {

		/**The ARN of the directory you are listing. */
		DirectoryArn: string;

		/**The response for <code>ListAppliedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version. */
		SchemaArn?: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListAttachedIndicesBody {

		/**The reference that identifies an object. */
		TargetReference: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListDevelopmentSchemaArnsBody {

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListDirectoriesBody {

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number;

		/**The state of the directories in the list. Can be either Enabled, Disabled, or Deleted. */
		state?: ListDirectoriesBodyState;
	}

	export enum ListDirectoriesBodyState { ENABLED = 0, DISABLED = 1, DELETED = 2 }

	export interface ListFacetAttributesBody {

		/**
		 * The name of the facet whose attributes will be retrieved.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListFacetNamesBody {

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListIncomingTypedLinksBody {

		/**The reference that identifies an object. */
		ObjectReference: string;

		/**Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. */
		FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

		/**Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number;

		/**The consistency level to execute the request at. */
		ConsistencyLevel?: ListIncomingTypedLinksBodyConsistencyLevel;
	}

	export enum ListIncomingTypedLinksBodyConsistencyLevel { SERIALIZABLE = 0, EVENTUAL = 1 }

	export interface ListIndexBody {

		/**Specifies the ranges of indexed values that you want to query. */
		RangesOnIndexedValues?: Array<ObjectAttributeRange>;

		/**The reference that identifies an object. */
		IndexReference: string;

		/**
		 * The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.
		 * Minimum: 1
		 */
		MaxResults?: number;

		/**The pagination token. */
		NextToken?: string;
	}

	export interface ListManagedSchemaArnsBody {

		/**The response for ListManagedSchemaArns. When this parameter is used, all minor version ARNs for a major version are listed. */
		SchemaArn?: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListObjectAttributesBody {

		/**The reference that identifies an object. */
		ObjectReference: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number;

		/**A facet. */
		FacetFilter?: string;
	}

	export interface ListObjectChildrenBody {

		/**The reference that identifies an object. */
		ObjectReference: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListObjectParentPathsBody {

		/**The reference that identifies an object. */
		ObjectReference: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListObjectParentsBody {

		/**The reference that identifies an object. */
		ObjectReference: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number;

		/**When set to True, returns all <a>ListObjectParentsResponse$ParentLinks</a>. There could be multiple links between a parent-child pair. */
		IncludeAllLinksToEachParent?: boolean;
	}

	export interface ListObjectPoliciesBody {

		/**The reference that identifies an object. */
		ObjectReference: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListOutgoingTypedLinksBody {

		/**The reference that identifies an object. */
		ObjectReference: string;

		/**Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. */
		FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

		/**Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number;

		/**The consistency level to execute the request at. */
		ConsistencyLevel?: ListOutgoingTypedLinksBodyConsistencyLevel;
	}

	export enum ListOutgoingTypedLinksBodyConsistencyLevel { SERIALIZABLE = 0, EVENTUAL = 1 }

	export interface ListPolicyAttachmentsBody {

		/**The reference that identifies an object. */
		PolicyReference: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListPublishedSchemaArnsBody {

		/**The response for <code>ListPublishedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version. */
		SchemaArn?: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListTagsForResourceBody {

		/**The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories. */
		ResourceArn: string;

		/**The pagination token. This is for future use. Currently pagination is not supported for tagging. */
		NextToken?: string;

		/**
		 * The <code>MaxResults</code> parameter sets the maximum number of results returned in a single page. This is for future use and is not supported currently.
		 * Minimum: 50
		 */
		MaxResults?: number;
	}

	export interface ListTypedLinkFacetAttributesBody {

		/**
		 * The unique name of the typed link facet.
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListTypedLinkFacetNamesBody {

		/**The pagination token. */
		NextToken?: string;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface LookupPolicyBody {

		/**The reference that identifies an object. */
		ObjectReference: string;

		/**The token to request the next page of results. */
		NextToken?: string;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface PublishSchemaBody {

		/**
		 * The major version under which the schema will be published. Schemas have both a major and minor version associated with them.
		 * Max length: 10
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Version: string;

		/**
		 * The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.
		 * Max length: 10
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		MinorVersion?: string;

		/**
		 * The new name under which the schema will be published. If this is not provided, the development schema is considered.
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name?: string;
	}

	export interface RemoveFacetFromObjectBody {

		/**A facet. */
		SchemaFacet: string;

		/**The reference that identifies an object. */
		ObjectReference: string;
	}

	export interface TagResourceBody {

		/**The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories. */
		ResourceArn: string;

		/**A list of tag key-value pairs. */
		Tags: Array<Tag>;
	}

	export interface UntagResourceBody {

		/**The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories. */
		ResourceArn: string;

		/**Keys of the tag that need to be removed from the resource. */
		TagKeys: Array<TagKey>;
	}

	export interface UpdateLinkAttributesBody {

		/**Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier: string;

		/**The attributes update structure. */
		AttributeUpdates: Array<LinkAttributeUpdate>;
	}

	export interface UpdateObjectAttributesBody {

		/**The reference that identifies an object. */
		ObjectReference: string;

		/**The attributes update structure. */
		AttributeUpdates: Array<ObjectAttributeUpdate>;
	}

	export interface UpdateSchemaBody {

		/**
		 * The name of the schema.
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
	}

	export interface UpdateTypedLinkFacetBody {

		/**
		 * The unique name of the typed link facet.
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;

		/**Attributes update structure. */
		AttributeUpdates: Array<TypedLinkFacetAttributeUpdate>;

		/**The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed links considers the order that the attributes are defined on the typed link facet. When providing ranges to a typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>. */
		IdentityAttributeOrder: Array<AttributeName>;
	}

	export interface UpgradeAppliedSchemaBody {

		/**The revision of the published schema to upgrade the directory to. */
		PublishedSchemaArn: string;

		/**The ARN for the directory to which the upgraded schema will be applied. */
		DirectoryArn: string;

		/**Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional. */
		DryRun?: boolean;
	}

	export interface UpgradePublishedSchemaBody {

		/**The ARN of the development schema with the changes used for the upgrade. */
		DevelopmentSchemaArn: string;

		/**The ARN of the published schema to be upgraded. */
		PublishedSchemaArn: string;

		/**
		 * Identifies the minor version of the published schema that will be created. This parameter is NOT optional.
		 * Max length: 10
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		MinorVersion: string;

		/**Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false. */
		DryRun?: boolean;
	}

}

