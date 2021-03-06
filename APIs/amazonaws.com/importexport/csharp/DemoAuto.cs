//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace My.Demo.Client
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using System.Net.Http;
	using Newtonsoft.Json;
	using Fonlow.Net.Http;
	
	
	/// <summary>
	/// Output structure for the CancelJob operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class CancelJobOutput
	{
		
		/// <summary>
		/// Specifies whether (true) or not (false) AWS Import/Export updated your job.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Success { get; set; }
	}
	
	/// <summary>
	/// The JOBID was missing, not found, or not associated with the AWS account.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class InvalidJobIdException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// Indicates that the specified job has expired out of the system.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ExpiredJobIdException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// The specified job ID has been canceled and is no longer valid.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class CanceledJobIdException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// AWS Import/Export cannot cancel the job
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class UnableToCancelJobIdException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// The AWS Access Key ID specified in the request did not match the manifest's accessKeyId value. The manifest and the request authentication must use the same AWS Access Key ID.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class InvalidAccessKeyIdException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// The client tool version is invalid.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class InvalidVersionException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// Output structure for the CreateJob operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class CreateJobOutput
	{
		
		/// <summary>
		/// A unique identifier which refers to a particular job.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string JobId { get; set; }
		
		/// <summary>
		/// Specifies whether the job to initiate is an import or export job.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public CreateJobOutputJobType JobType { get; set; }
		
		/// <summary>
		/// An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Signature { get; set; }
		
		/// <summary>
		/// The actual text of the SIGNATURE file to be written to disk.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string SignatureFileContents { get; set; }
		
		/// <summary>
		/// An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string WarningMessage { get; set; }
		
		/// <summary>
		/// A collection of artifacts.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public Artifact[] ArtifactList { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum CreateJobOutputJobType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Import = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Export = 1,
	}
	
	/// <summary>
	/// One or more required parameters was missing from the request.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class MissingParameterException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// One or more parameters had an invalid value.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class InvalidParameterException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// The address specified in the manifest is invalid.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class InvalidAddressException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// One or more manifest fields was invalid. Please correct and resubmit.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class InvalidManifestFieldException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// One or more required fields were missing from the manifest file. Please correct and resubmit.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class MissingManifestFieldException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// The specified bucket does not exist. Create the specified bucket or change the manifest's bucket, exportBucket, or logBucket field to a bucket that the account, as specified by the manifest's Access Key ID, has write permissions to.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class NoSuchBucketException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// One or more required customs parameters was missing from the manifest.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class MissingCustomsException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// One or more customs parameters was invalid. Please correct and resubmit.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class InvalidCustomsException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// File system specified in export manifest is invalid.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class InvalidFileSystemException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// Your manifest file contained buckets from multiple regions. A job is restricted to buckets from one region. Please correct and resubmit.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class MultipleRegionsException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// The account specified does not have the appropriate bucket permissions.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class BucketPermissionException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// Your manifest is not well-formed.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class MalformedManifestException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// Each account can create only a certain number of jobs per day. If you need to create more than this, please contact awsimportexport@amazon.com to explain your particular use case.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class CreateJobQuotaExceededException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetShippingLabelOutput
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string ShippingLabelURL { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Warning { get; set; }
	}
	
	/// <summary>
	/// Output structure for the GetStatus operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetStatusOutput
	{
		
		/// <summary>
		/// A unique identifier which refers to a particular job.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string JobId { get; set; }
		
		/// <summary>
		/// Specifies whether the job to initiate is an import or export job.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public GetStatusOutputJobType JobType { get; set; }
		
		/// <summary>
		/// A token representing the location of the storage device, such as "AtAWS".
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string LocationCode { get; set; }
		
		/// <summary>
		/// A more human readable form of the physical location of the storage device.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string LocationMessage { get; set; }
		
		/// <summary>
		/// A token representing the state of the job, such as "Started".
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string ProgressCode { get; set; }
		
		/// <summary>
		/// A more human readable form of the job status.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string ProgressMessage { get; set; }
		
		/// <summary>
		/// Name of the shipping company. This value is included when the LocationCode is "Returned".
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Carrier { get; set; }
		
		/// <summary>
		/// The shipping tracking number assigned by AWS Import/Export to the storage device when it's returned to you. We return this value when the LocationCode is "Returned".
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string TrackingNumber { get; set; }
		
		/// <summary>
		/// Amazon S3 bucket for user logs.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string LogBucket { get; set; }
		
		/// <summary>
		/// The key where the user logs were stored.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string LogKey { get; set; }
		
		/// <summary>
		/// Number of errors. We return this value when the ProgressCode is Success or SuccessWithErrors.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ErrorCount { get; set; }
		
		/// <summary>
		/// An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Signature { get; set; }
		
		/// <summary>
		/// An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string SignatureFileContents { get; set; }
		
		/// <summary>
		/// The last manifest submitted, which will be used to process the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string CurrentManifest { get; set; }
		
		/// <summary>
		/// Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z".
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.DateTimeOffset> CreationDate { get; set; }
		
		/// <summary>
		/// A collection of artifacts.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public Artifact[] ArtifactList { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum GetStatusOutputJobType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Import = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Export = 1,
	}
	
	/// <summary>
	/// Output structure for the ListJobs operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ListJobsOutput
	{
		
		/// <summary>
		/// A list container for Jobs returned by the ListJobs operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public Job[] Jobs { get; set; }
		
		/// <summary>
		/// Indicates whether the list of jobs was truncated. If true, then call ListJobs again using the last JobId element as the marker.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsTruncated { get; set; }
	}
	
	/// <summary>
	/// Output structure for the UpateJob operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class UpdateJobOutput
	{
		
		/// <summary>
		/// Specifies whether (true) or not (false) AWS Import/Export updated your job.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Success { get; set; }
		
		/// <summary>
		/// An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string WarningMessage { get; set; }
		
		/// <summary>
		/// A collection of artifacts.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public Artifact[] ArtifactList { get; set; }
	}
	
	/// <summary>
	/// AWS Import/Export cannot update the job
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class UnableToUpdateJobIdException
	{
		
		/// <summary>
		/// The human-readable description of a particular error.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// A discrete item that contains the description and URL of an artifact (such as a PDF).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class Artifact
	{
		
		/// <summary>
		/// The associated description for this object.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		/// <summary>
		/// The URL for a given Artifact.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string URL { get; set; }
	}
	
	/// <summary>
	/// Input structure for the CancelJob operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class CancelJobInput
	{
		
		/// <summary>
		/// A unique identifier which refers to a particular job.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string JobId { get; set; }
		
		/// <summary>
		/// Specifies the version of the client tool.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string APIVersion { get; set; }
	}
	
	/// <summary>
	/// Specifies whether the job to initiate is an import or export job.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum JobType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Import = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Export = 1,
	}
	
	/// <summary>
	/// Input structure for the CreateJob operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class CreateJobInput
	{
		
		/// <summary>
		/// Specifies whether the job to initiate is an import or export job.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public CreateJobInputJobType JobType { get; set; }
		
		/// <summary>
		/// The UTF-8 encoded text of the manifest file.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Manifest { get; set; }
		
		/// <summary>
		/// For internal use only.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string ManifestAddendum { get; set; }
		
		/// <summary>
		/// Validate the manifest and parameter values in the request but do not actually create a job.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public bool ValidateOnly { get; set; }
		
		/// <summary>
		/// Specifies the version of the client tool.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string APIVersion { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum CreateJobInputJobType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Import = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Export = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetShippingLabelInput
	{
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public GenericString[] JobIds { get; set; }
		
		/// <summary>
		/// Specifies the name of the person responsible for shipping this package.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Name { get; set; }
		
		/// <summary>
		/// Specifies the name of the company that will ship this package.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Company { get; set; }
		
		/// <summary>
		/// Specifies the phone number of the person responsible for shipping this package.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string PhoneNumber { get; set; }
		
		/// <summary>
		/// Specifies the name of your country for the return address.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Country { get; set; }
		
		/// <summary>
		/// Specifies the name of your state or your province for the return address.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string StateOrProvince { get; set; }
		
		/// <summary>
		/// Specifies the name of your city for the return address.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string City { get; set; }
		
		/// <summary>
		/// Specifies the postal code for the return address.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string PostalCode { get; set; }
		
		/// <summary>
		/// Specifies the first part of the street address for the return address, for example 1234 Main Street.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Street1 { get; set; }
		
		/// <summary>
		/// Specifies the optional second part of the street address for the return address, for example Suite 100.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Street2 { get; set; }
		
		/// <summary>
		/// Specifies the optional third part of the street address for the return address, for example c/o Jane Doe.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Street3 { get; set; }
		
		/// <summary>
		/// Specifies the version of the client tool.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string APIVersion { get; set; }
	}
	
	/// <summary>
	/// Input structure for the GetStatus operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetStatusInput
	{
		
		/// <summary>
		/// A unique identifier which refers to a particular job.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string JobId { get; set; }
		
		/// <summary>
		/// Specifies the version of the client tool.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string APIVersion { get; set; }
	}
	
	/// <summary>
	/// Representation of a job returned by the ListJobs operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class Job
	{
		
		/// <summary>
		/// A unique identifier which refers to a particular job.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string JobId { get; set; }
		
		/// <summary>
		/// Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z".
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.DateTimeOffset> CreationDate { get; set; }
		
		/// <summary>
		/// Indicates whether the job was canceled.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsCanceled { get; set; }
		
		/// <summary>
		/// Specifies whether the job to initiate is an import or export job.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public JobJobType JobType { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum JobJobType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Import = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Export = 1,
	}
	
	/// <summary>
	/// Input structure for the ListJobs operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ListJobsInput
	{
		
		/// <summary>
		/// Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains &lt;IsTruncated&gt;true&lt;/IsTruncated&gt;. To return the additional jobs, see Marker.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> MaxJobs { get; set; }
		
		/// <summary>
		/// Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Marker { get; set; }
		
		/// <summary>
		/// Specifies the version of the client tool.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string APIVersion { get; set; }
	}
	
	/// <summary>
	/// Input structure for the UpateJob operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class UpdateJobInput
	{
		
		/// <summary>
		/// A unique identifier which refers to a particular job.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string JobId { get; set; }
		
		/// <summary>
		/// The UTF-8 encoded text of the manifest file.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Manifest { get; set; }
		
		/// <summary>
		/// Specifies whether the job to initiate is an import or export job.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public UpdateJobInputJobType JobType { get; set; }
		
		/// <summary>
		/// Validate the manifest and parameter values in the request but do not actually create a job.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public bool ValidateOnly { get; set; }
		
		/// <summary>
		/// Specifies the version of the client tool.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string APIVersion { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum UpdateJobInputJobType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Import = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Export = 1,
	}
	
	public partial class DemoClient
	{
		
		private System.Net.Http.HttpClient client;
		
		private JsonSerializerSettings jsonSerializerSettings;
		
		public DemoClient(System.Net.Http.HttpClient client, JsonSerializerSettings jsonSerializerSettings=null)
		{
			if (client == null)
				throw new ArgumentNullException("Null HttpClient.", "client");

			if (client.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "client");

			this.client = client;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
		/// GET_CancelJob /#Operation=CancelJob&Action=CancelJob
		/// </summary>
		/// <returns>Success</returns>
		public async Task GET_CancelJobAsync(string JobId, string APIVersion, string Operation, string Action, string Version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/#Operation=CancelJob&Action=CancelJob?JobId=" + (JobId==null? "" : Uri.EscapeDataString(JobId))+"&APIVersion=" + (APIVersion==null? "" : Uri.EscapeDataString(APIVersion))+"&Operation=" + (Operation==null? "" : Uri.EscapeDataString(Operation))+"&Action=" + (Action==null? "" : Uri.EscapeDataString(Action))+"&Version=" + (Version==null? "" : Uri.EscapeDataString(Version));
			using (var request = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(request.Headers);
			}

			var responseMessage = await client.SendAsync(request);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
		/// GET_CreateJob /#Operation=CreateJob&Action=CreateJob
		/// </summary>
		/// <returns>Success</returns>
		public async Task GET_CreateJobAsync(CreateJobOutputJobType JobType, string Manifest, string ManifestAddendum, bool ValidateOnly, string APIVersion, string Operation, string Action, string Version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/#Operation=CreateJob&Action=CreateJob?JobType=" + JobType+"&Manifest=" + (Manifest==null? "" : Uri.EscapeDataString(Manifest))+"&ManifestAddendum=" + (ManifestAddendum==null? "" : Uri.EscapeDataString(ManifestAddendum))+"&ValidateOnly="+ValidateOnly+"&APIVersion=" + (APIVersion==null? "" : Uri.EscapeDataString(APIVersion))+"&Operation=" + (Operation==null? "" : Uri.EscapeDataString(Operation))+"&Action=" + (Action==null? "" : Uri.EscapeDataString(Action))+"&Version=" + (Version==null? "" : Uri.EscapeDataString(Version));
			using (var request = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(request.Headers);
			}

			var responseMessage = await client.SendAsync(request);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
		/// GET_GetShippingLabel /#Operation=GetShippingLabel&Action=GetShippingLabel
		/// </summary>
		/// <returns>Success</returns>
		public async Task GET_GetShippingLabelAsync(
					GenericString[] jobIds, 
					string name, 
					string company, 
					string phoneNumber, 
					string country, 
					string stateOrProvince, 
					string city, 
					string postalCode, 
					string street1, 
					string street2, 
					string street3, 
					string APIVersion, 
					string Operation, 
					string Action, 
					string Version, 
					Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/#Operation=GetShippingLabel&Action=GetShippingLabel?"+String.Join("&", jobIds.Select(z => $"jobIds={z}"))+"&name=" + (name==null? "" : Uri.EscapeDataString(name))+"&company=" + (company==null? "" : Uri.EscapeDataString(company))+"&phoneNumber=" + (phoneNumber==null? "" : Uri.EscapeDataString(phoneNumber))+"&country=" + (country==null? "" : Uri.EscapeDataString(country))+"&stateOrProvince=" + (stateOrProvince==null? "" : Uri.EscapeDataString(stateOrProvince))+"&city=" + (city==null? "" : Uri.EscapeDataString(city))+"&postalCode=" + (postalCode==null? "" : Uri.EscapeDataString(postalCode))+"&street1=" + (street1==null? "" : Uri.EscapeDataString(street1))+"&street2=" + (street2==null? "" : Uri.EscapeDataString(street2))+"&street3=" + (street3==null? "" : Uri.EscapeDataString(street3))+"&APIVersion=" + (APIVersion==null? "" : Uri.EscapeDataString(APIVersion))+"&Operation=" + (Operation==null? "" : Uri.EscapeDataString(Operation))+"&Action=" + (Action==null? "" : Uri.EscapeDataString(Action))+"&Version=" + (Version==null? "" : Uri.EscapeDataString(Version));
			using (var request = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(request.Headers);
			}

			var responseMessage = await client.SendAsync(request);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
		/// GET_GetStatus /#Operation=GetStatus&Action=GetStatus
		/// </summary>
		/// <returns>Success</returns>
		public async Task GET_GetStatusAsync(string JobId, string APIVersion, string Operation, string Action, string Version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/#Operation=GetStatus&Action=GetStatus?JobId=" + (JobId==null? "" : Uri.EscapeDataString(JobId))+"&APIVersion=" + (APIVersion==null? "" : Uri.EscapeDataString(APIVersion))+"&Operation=" + (Operation==null? "" : Uri.EscapeDataString(Operation))+"&Action=" + (Action==null? "" : Uri.EscapeDataString(Action))+"&Version=" + (Version==null? "" : Uri.EscapeDataString(Version));
			using (var request = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(request.Headers);
			}

			var responseMessage = await client.SendAsync(request);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
		/// GET_ListJobs /#Operation=ListJobs&Action=ListJobs
		/// </summary>
		/// <returns>Success</returns>
		public async Task GET_ListJobsAsync(int MaxJobs, string Marker, string APIVersion, string Operation, string Action, string Version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/#Operation=ListJobs&Action=ListJobs?MaxJobs="+MaxJobs+"&Marker=" + (Marker==null? "" : Uri.EscapeDataString(Marker))+"&APIVersion=" + (APIVersion==null? "" : Uri.EscapeDataString(APIVersion))+"&Operation=" + (Operation==null? "" : Uri.EscapeDataString(Operation))+"&Action=" + (Action==null? "" : Uri.EscapeDataString(Action))+"&Version=" + (Version==null? "" : Uri.EscapeDataString(Version));
			using (var request = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(request.Headers);
			}

			var responseMessage = await client.SendAsync(request);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
		/// GET_UpdateJob /#Operation=UpdateJob&Action=UpdateJob
		/// </summary>
		/// <returns>Success</returns>
		public async Task GET_UpdateJobAsync(string JobId, string Manifest, CreateJobOutputJobType JobType, bool ValidateOnly, string APIVersion, string Operation, string Action, string Version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/#Operation=UpdateJob&Action=UpdateJob?JobId=" + (JobId==null? "" : Uri.EscapeDataString(JobId))+"&Manifest=" + (Manifest==null? "" : Uri.EscapeDataString(Manifest))+"&JobType=" + JobType+"&ValidateOnly="+ValidateOnly+"&APIVersion=" + (APIVersion==null? "" : Uri.EscapeDataString(APIVersion))+"&Operation=" + (Operation==null? "" : Uri.EscapeDataString(Operation))+"&Action=" + (Action==null? "" : Uri.EscapeDataString(Action))+"&Version=" + (Version==null? "" : Uri.EscapeDataString(Version));
			using (var request = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(request.Headers);
			}

			var responseMessage = await client.SendAsync(request);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
	}
}

namespace Fonlow.Net.Http
{
	using System.Net.Http;

	public class WebApiRequestException : HttpRequestException
	{
		public System.Net.HttpStatusCode StatusCode { get; private set; }

		public string Response { get; private set; }

		public System.Net.Http.Headers.HttpResponseHeaders Headers { get; private set; }

		public System.Net.Http.Headers.MediaTypeHeaderValue ContentType { get; private set; }

		public WebApiRequestException(string message, System.Net.HttpStatusCode statusCode, string response, System.Net.Http.Headers.HttpResponseHeaders headers, System.Net.Http.Headers.MediaTypeHeaderValue contentType) : base(message)
		{
			StatusCode = statusCode;
			Response = response;
			Headers = headers;
			ContentType = contentType;
		}
	}

	public static class ResponseMessageExtensions
	{
		public static void EnsureSuccessStatusCodeEx(this HttpResponseMessage responseMessage)
		{
			if (!responseMessage.IsSuccessStatusCode)
			{
				var responseText = responseMessage.Content.ReadAsStringAsync().Result;
				var contentType = responseMessage.Content.Headers.ContentType;
				throw new WebApiRequestException(responseMessage.ReasonPhrase, responseMessage.StatusCode, responseText, responseMessage.Headers, contentType);
			}
		}
	}
}
