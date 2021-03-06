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
	/// The structure representing the configureAgentResponse.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ConfigureAgentResponse
	{
		
		/// <summary>
		/// <p/>
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public AgentConfiguration Configuration { get; set; }
	}
	
	/// <summary>
	/// The structure representing the createProfilingGroupResponse.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class CreateProfilingGroupResponse
	{
		
		/// <summary>
		/// The description of a profiling group.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ProfilingGroupDescription ProfilingGroup { get; set; }
	}
	
	/// <summary>
	/// The structure representing the describeProfilingGroupResponse.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class DescribeProfilingGroupResponse
	{
		
		/// <summary>
		/// The description of a profiling group.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ProfilingGroupDescription ProfilingGroup { get; set; }
	}
	
	/// <summary>
	/// The structure representing the getPolicyResponse.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetPolicyResponse
	{
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Policy { get; set; }
		
		/// <summary>
		/// Pattern: [a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string RevisionId { get; set; }
	}
	
	/// <summary>
	/// The structure representing the getProfileResponse.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetProfileResponse
	{
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Profile { get; set; }
	}
	
	/// <summary>
	/// The structure representing the listProfileTimesResponse.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ListProfileTimesResponse
	{
		
		/// <summary>
		/// Max length: 64
		/// Min length: 1
		/// Pattern: ^[\w-]+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(64, MinimumLength=1)]
		public string NextToken { get; set; }
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ProfileTime[] ProfileTimes { get; set; }
	}
	
	/// <summary>
	/// The structure representing the listProfilingGroupsResponse.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ListProfilingGroupsResponse
	{
		
		/// <summary>
		/// Max length: 64
		/// Min length: 1
		/// Pattern: ^[\w-]+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(64, MinimumLength=1)]
		public string NextToken { get; set; }
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ProfilingGroupName[] ProfilingGroupNames { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ProfilingGroupDescription[] ProfilingGroups { get; set; }
	}
	
	/// <summary>
	/// The structure representing the putPermissionResponse.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class PutPermissionResponse
	{
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Policy { get; set; }
		
		/// <summary>
		/// Pattern: [a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string RevisionId { get; set; }
	}
	
	/// <summary>
	/// The structure representing the removePermissionResponse.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class RemovePermissionResponse
	{
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Policy { get; set; }
		
		/// <summary>
		/// Pattern: [a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string RevisionId { get; set; }
	}
	
	/// <summary>
	/// The structure representing the updateProfilingGroupResponse.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class UpdateProfilingGroupResponse
	{
		
		/// <summary>
		/// The description of a profiling group.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ProfilingGroupDescription ProfilingGroup { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum ActionGroup
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		agentPermissions = 0,
	}
	
	/// <summary>
	/// <p/>
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class AgentConfiguration
	{
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public int PeriodInSeconds { get; set; }
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public bool ShouldProfile { get; set; }
	}
	
	/// <summary>
	/// <p/>
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class AgentOrchestrationConfig
	{
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public bool ProfilingEnabled { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum AggregationPeriod
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P1D = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PT1H = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PT5M = 2,
	}
	
	/// <summary>
	/// Information about the time range of the latest available aggregated profile.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class AggregatedProfileTime
	{
		
		[System.Runtime.Serialization.DataMember()]
		public AggregatedProfileTimePeriod Period { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.DateTimeOffset> Start { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum AggregatedProfileTimePeriod
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P1D = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PT1H = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PT5M = 2,
	}
	
	/// <summary>
	/// The structure representing the configureAgentRequest.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ConfigureAgentRequest
	{
		
		/// <summary>
		/// Max length: 255
		/// Min length: 1
		/// Pattern: ^[\w-.:/]+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(255, MinimumLength=1)]
		public string FleetInstanceId { get; set; }
	}
	
	/// <summary>
	/// The structure representing the createProfiliingGroupRequest.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class CreateProfilingGroupRequest
	{
		
		/// <summary>
		/// <p/>
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public AgentOrchestrationConfig AgentOrchestrationConfig { get; set; }
		
		/// <summary>
		/// Max length: 255
		/// Min length: 1
		/// Pattern: ^[\w-]+$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(255, MinimumLength=1)]
		public string ProfilingGroupName { get; set; }
	}
	
	/// <summary>
	/// The description of a profiling group.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ProfilingGroupDescription
	{
		
		/// <summary>
		/// <p/>
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public AgentOrchestrationConfig AgentOrchestrationConfig { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Arn { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.DateTimeOffset> CreatedAt { get; set; }
		
		/// <summary>
		/// Max length: 255
		/// Min length: 1
		/// Pattern: ^[\w-]+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(255, MinimumLength=1)]
		public string Name { get; set; }
		
		/// <summary>
		/// Information about the profiling status.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public ProfilingStatus ProfilingStatus { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.DateTimeOffset> UpdatedAt { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum OrderBy
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TimestampAscending = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TimestampDescending = 1,
	}
	
	/// <summary>
	/// The structure representing the postAgentProfileRequest.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class PostAgentProfileRequest
	{
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string AgentProfile { get; set; }
	}
	
	/// <summary>
	/// Information about the profile time.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ProfileTime
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.DateTimeOffset> Start { get; set; }
	}
	
	/// <summary>
	/// Information about the profiling status.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ProfilingStatus
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.DateTimeOffset> LatestAgentOrchestratedAt { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.DateTimeOffset> LatestAgentProfileReportedAt { get; set; }
		
		/// <summary>
		/// Information about the time range of the latest available aggregated profile.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public AggregatedProfileTime LatestAggregatedProfile { get; set; }
	}
	
	/// <summary>
	/// The structure representing the putPermissionRequest.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class PutPermissionRequest
	{
		
		/// <summary>
		/// Minimum items: 1
		/// Maximum items: 50
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		[System.ComponentModel.DataAnnotations.MaxLength(50)]
		public Principal[] Principals { get; set; }
		
		/// <summary>
		/// Pattern: [a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string RevisionId { get; set; }
	}
	
	/// <summary>
	/// The structure representing the updateProfilingGroupRequest.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class UpdateProfilingGroupRequest
	{
		
		/// <summary>
		/// <p/>
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public AgentOrchestrationConfig AgentOrchestrationConfig { get; set; }
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
		/// <p/>
		/// ConfigureAgent /profilingGroups/{profilingGroupName}/configureAgent
		/// </summary>
		/// <param name="profilingGroupName"><p/></param>
		/// <returns>Success</returns>
		public async Task<ConfigureAgentResponse> ConfigureAgentAsync(string profilingGroupName, ConfigureAgentBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/profilingGroups/"+ (profilingGroupName==null? "" : Uri.EscapeDataString(profilingGroupName))+"/configureAgent";
			using (var request = new HttpRequestMessage(HttpMethod.Post, requestUri))
			{
			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			request.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(request.Headers);
			}

			var responseMessage = await client.SendAsync(request);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = new JsonSerializer();
				return serializer.Deserialize<ConfigureAgentResponse>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
			}
		}
		
		/// <summary>
		/// Creates a profiling group.
		/// CreateProfilingGroup /profilingGroups#clientToken
		/// </summary>
		/// <param name="clientToken"><p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p> <p>This parameter specifies a unique identifier for the new profiling group that helps ensure idempotency.</p></param>
		public async Task CreateProfilingGroupAsync(string clientToken, CreateProfilingGroupBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/profilingGroups#clientToken?clientToken=" + (clientToken==null? "" : Uri.EscapeDataString(clientToken));
			using (var request = new HttpRequestMessage(HttpMethod.Post, requestUri))
			{
			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			request.Content = content;
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
		
		/// <summary>
		/// Deletes a profiling group.
		/// DeleteProfilingGroup /profilingGroups/{profilingGroupName}
		/// </summary>
		/// <param name="profilingGroupName">The profiling group name to delete.</param>
		public async Task DeleteProfilingGroupAsync(string profilingGroupName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/profilingGroups/"+ (profilingGroupName==null? "" : Uri.EscapeDataString(profilingGroupName));
			using (var request = new HttpRequestMessage(HttpMethod.Delete, requestUri))
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
		/// Describes a profiling group.
		/// DescribeProfilingGroup /profilingGroups/{profilingGroupName}
		/// </summary>
		/// <param name="profilingGroupName">The profiling group name.</param>
		/// <returns>Success</returns>
		public async Task<DescribeProfilingGroupResponse> DescribeProfilingGroupAsync(string profilingGroupName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/profilingGroups/"+ (profilingGroupName==null? "" : Uri.EscapeDataString(profilingGroupName));
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
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = new JsonSerializer();
				return serializer.Deserialize<DescribeProfilingGroupResponse>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Updates a profiling group.
		/// UpdateProfilingGroup /profilingGroups/{profilingGroupName}
		/// </summary>
		/// <param name="profilingGroupName">The name of the profiling group to update.</param>
		/// <returns>Success</returns>
		public async Task<UpdateProfilingGroupResponse> UpdateProfilingGroupAsync(string profilingGroupName, UpdateProfilingGroupBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/profilingGroups/"+ (profilingGroupName==null? "" : Uri.EscapeDataString(profilingGroupName));
			using (var request = new HttpRequestMessage(HttpMethod.Put, requestUri))
			{
			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			request.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(request.Headers);
			}

			var responseMessage = await client.SendAsync(request);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = new JsonSerializer();
				return serializer.Deserialize<UpdateProfilingGroupResponse>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
			}
		}
		
		/// <summary>
		/// Gets the profiling group policy.
		/// GetPolicy /profilingGroups/{profilingGroupName}/policy
		/// </summary>
		/// <param name="profilingGroupName">The name of the profiling group.</param>
		/// <returns>Success</returns>
		public async Task<GetPolicyResponse> GetPolicyAsync(string profilingGroupName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/profilingGroups/"+ (profilingGroupName==null? "" : Uri.EscapeDataString(profilingGroupName))+"/policy";
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
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = new JsonSerializer();
				return serializer.Deserialize<GetPolicyResponse>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// <p>Gets the aggregated profile of a profiling group for the specified time range. If the requested time range does not align with the available aggregated profiles, it is expanded to attain alignment. If aggregated profiles are available only for part of the period requested, the profile is returned from the earliest available to the latest within the requested time range. </p> <p>For example, if the requested time range is from 00:00 to 00:20 and the available profiles are from 00:15 to 00:25, the returned profile will be from 00:15 to 00:20. </p> <p>You must specify exactly two of the following parameters: <code>startTime</code>, <code>period</code>, and <code>endTime</code>. </p>
		/// GetProfile /profilingGroups/{profilingGroupName}/profile
		/// </summary>
		/// <param name="endTime"><p/> <p>You must specify exactly two of the following parameters: <code>startTime</code>, <code>period</code>, and <code>endTime</code>. </p></param>
		/// <param name="maxDepth">The maximum depth of the graph.</param>
		/// <param name="period"><p>The period of the profile to get. The time range must be in the past and not longer than one week. </p> <p>You must specify exactly two of the following parameters: <code>startTime</code>, <code>period</code>, and <code>endTime</code>. </p></param>
		/// <param name="profilingGroupName">The name of the profiling group to get.</param>
		/// <param name="startTime"><p>The start time of the profile to get.</p> <p>You must specify exactly two of the following parameters: <code>startTime</code>, <code>period</code>, and <code>endTime</code>. </p></param>
		/// <returns>Success</returns>
		public async Task<GetProfileResponse> GetProfileAsync(System.DateTimeOffset endTime, int maxDepth, string period, string profilingGroupName, System.DateTimeOffset startTime, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/profilingGroups/"+ (profilingGroupName==null? "" : Uri.EscapeDataString(profilingGroupName))+"/profile?endTime=" + endTime.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&maxDepth="+maxDepth+"&period=" + (period==null? "" : Uri.EscapeDataString(period))+"&startTime=" + startTime.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ");
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
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = new JsonSerializer();
				return serializer.Deserialize<GetProfileResponse>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// List the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
		/// ListProfileTimes /profilingGroups/{profilingGroupName}/profileTimes#endTime&period&startTime
		/// </summary>
		/// <param name="endTime">The end time of the time range from which to list the profiles.</param>
		/// <param name="maxResults">The maximum number of profile time results returned by <code>ListProfileTimes</code> in paginated output. When this parameter is used, <code>ListProfileTimes</code> only returns <code>maxResults</code> results in a single page with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListProfileTimes</code> request with the returned <code>nextToken</code> value. </param>
		/// <param name="nextToken"><p>The <code>nextToken</code> value returned from a previous paginated <code>ListProfileTimes</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note></param>
		/// <param name="orderBy">The order (ascending or descending by start time of the profile) to use when listing profiles. Defaults to <code>TIMESTAMP_DESCENDING</code>. </param>
		/// <param name="period">The aggregation period.</param>
		/// <param name="profilingGroupName">The name of the profiling group.</param>
		/// <param name="startTime">The start time of the time range from which to list the profiles.</param>
		/// <returns>Success</returns>
		public async Task<ListProfileTimesResponse> ListProfileTimesAsync(System.DateTimeOffset endTime, int maxResults, string nextToken, OrderBy orderBy, AggregationPeriod period, string profilingGroupName, System.DateTimeOffset startTime, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/profilingGroups/"+ (profilingGroupName==null? "" : Uri.EscapeDataString(profilingGroupName))+"/profileTimes#endTime&period&startTime?endTime=" + endTime.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&maxResults="+maxResults+"&nextToken=" + (nextToken==null? "" : Uri.EscapeDataString(nextToken))+"&orderBy=" + orderBy+"&period=" + period+"&startTime=" + startTime.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ");
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
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = new JsonSerializer();
				return serializer.Deserialize<ListProfileTimesResponse>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Lists profiling groups.
		/// ListProfilingGroups /profilingGroups
		/// </summary>
		/// <param name="includeDescription">A Boolean value indicating whether to include a description.</param>
		/// <param name="maxResults">The maximum number of profiling groups results returned by <code>ListProfilingGroups</code> in paginated output. When this parameter is used, <code>ListProfilingGroups</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListProfilingGroups</code> request with the returned <code>nextToken</code> value. </param>
		/// <param name="nextToken"><p>The <code>nextToken</code> value returned from a previous paginated <code>ListProfilingGroups</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note></param>
		/// <returns>Success</returns>
		public async Task<ListProfilingGroupsResponse> ListProfilingGroupsAsync(bool includeDescription, int maxResults, string nextToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/profilingGroups?includeDescription="+includeDescription+"&maxResults="+maxResults+"&nextToken=" + (nextToken==null? "" : Uri.EscapeDataString(nextToken));
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
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = new JsonSerializer();
				return serializer.Deserialize<ListProfilingGroupsResponse>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// <p/>
		/// PostAgentProfile /profilingGroups/{profilingGroupName}/agentProfile#Content-Type
		/// </summary>
		/// <param name="profileToken"><p/></param>
		/// <param name="profilingGroupName"><p/></param>
		public async Task PostAgentProfileAsync(string profileToken, string profilingGroupName, PostAgentProfileBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/profilingGroups/"+ (profilingGroupName==null? "" : Uri.EscapeDataString(profilingGroupName))+"/agentProfile#Content-Type?profileToken=" + (profileToken==null? "" : Uri.EscapeDataString(profileToken));
			using (var request = new HttpRequestMessage(HttpMethod.Post, requestUri))
			{
			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			request.Content = content;
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
		
		/// <summary>
		/// Provides permission to the principals. This overwrites the existing permissions, and is not additive.
		/// PutPermission /profilingGroups/{profilingGroupName}/policy/{actionGroup}
		/// </summary>
		/// <param name="actionGroup">The list of actions that the users and roles can perform on the profiling group.</param>
		/// <param name="profilingGroupName">The name of the profiling group.</param>
		/// <returns>Success</returns>
		public async Task<PutPermissionResponse> PutPermissionAsync(string actionGroup, string profilingGroupName, PutPermissionBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/profilingGroups/"+ (profilingGroupName==null? "" : Uri.EscapeDataString(profilingGroupName))+"/policy/"+actionGroup;
			using (var request = new HttpRequestMessage(HttpMethod.Put, requestUri))
			{
			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			request.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(request.Headers);
			}

			var responseMessage = await client.SendAsync(request);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = new JsonSerializer();
				return serializer.Deserialize<PutPermissionResponse>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
			}
		}
		
		/// <summary>
		/// Removes statement for the provided action group from the policy.
		/// RemovePermission /profilingGroups/{profilingGroupName}/policy/{actionGroup}#revisionId
		/// </summary>
		/// <param name="actionGroup">The list of actions that the users and roles can perform on the profiling group.</param>
		/// <param name="profilingGroupName">The name of the profiling group.</param>
		/// <param name="revisionId">A unique identifier for the current revision of the policy.</param>
		/// <returns>Success</returns>
		public async Task<RemovePermissionResponse> RemovePermissionAsync(ActionGroup actionGroup, string profilingGroupName, string revisionId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/profilingGroups/"+ (profilingGroupName==null? "" : Uri.EscapeDataString(profilingGroupName))+"/policy/"+actionGroup+"#revisionId&revisionId=" + (revisionId==null? "" : Uri.EscapeDataString(revisionId));
			using (var request = new HttpRequestMessage(HttpMethod.Delete, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(request.Headers);
			}

			var responseMessage = await client.SendAsync(request);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = new JsonSerializer();
				return serializer.Deserialize<RemovePermissionResponse>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ConfigureAgentBody
	{
		
		/// <summary>
		/// <p/>
		/// Max length: 255
		/// Min length: 1
		/// Pattern: ^[\w-.:/]+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(255, MinimumLength=1)]
		public string FleetInstanceId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class CreateProfilingGroupBody
	{
		
		/// <summary>
		/// <p/>
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string AgentOrchestrationConfig { get; set; }
		
		/// <summary>
		/// The name of the profiling group.
		/// Max length: 255
		/// Min length: 1
		/// Pattern: ^[\w-]+$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(255, MinimumLength=1)]
		public string ProfilingGroupName { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class UpdateProfilingGroupBody
	{
		
		/// <summary>
		/// <p/>
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string AgentOrchestrationConfig { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class PostAgentProfileBody
	{
		
		/// <summary>
		/// <p/>
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string AgentProfile { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class PutPermissionBody
	{
		
		/// <summary>
		/// The list of role and user ARNs or the accountId that needs access (wildcards are not allowed).
		/// Minimum items: 1
		/// Maximum items: 50
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		[System.ComponentModel.DataAnnotations.MaxLength(50)]
		public Principal[] Principals { get; set; }
		
		/// <summary>
		/// A unique identifier for the current revision of the policy. This is required, if a policy exists for the profiling group. This is not required when creating the policy for the first time.
		/// Pattern: [a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string RevisionId { get; set; }
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
