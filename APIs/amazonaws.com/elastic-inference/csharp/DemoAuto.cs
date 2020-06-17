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
	
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class DescribeAcceleratorOfferingsResponse
	{
		
		/// <summary>
		/// Minimum items: 0
		/// Maximum items: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(100)]
		public AcceleratorTypeOffering[] AcceleratorTypeOfferings { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class DescribeAcceleratorTypesResponse
	{
		
		/// <summary>
		/// Minimum items: 0
		/// Maximum items: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(100)]
		public AcceleratorType[] AcceleratorTypes { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class DescribeAcceleratorsResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public ElasticInferenceAccelerator[] AcceleratorSet { get; set; }
		
		/// <summary>
		/// Max length: 2048
		/// Min length: 1
		/// Pattern: ^[A-Za-z0-9+/]+={0,2}$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(2048, MinimumLength=1)]
		public string NextToken { get; set; }
	}
	
	/// <summary>
	///  A filter expression for the Elastic Inference Accelerator list. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class Filter
	{
		
		/// <summary>
		/// Max length: 128
		/// Min length: 1
		/// Pattern: ^\S+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(128, MinimumLength=1)]
		public string Name { get; set; }
		
		/// <summary>
		/// Minimum items: 0
		/// Maximum items: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(100)]
		public String[] Values { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ListTagsForResourceResult
	{
		
		[System.Runtime.Serialization.DataMember()]
		public TagMap Tags { get; set; }
	}
	
	/// <summary>
	///  The memory information of an Elastic Inference Accelerator type. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class MemoryInfo
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SizeInMiB { get; set; }
	}
	
	/// <summary>
	///  The details of an Elastic Inference Accelerator type. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class AcceleratorType
	{
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// Pattern: ^\S+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string AcceleratorTypeName { get; set; }
		
		/// <summary>
		///  The memory information of an Elastic Inference Accelerator type. 
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public MemoryInfo MemoryInfo { get; set; }
		
		/// <summary>
		/// Minimum items: 0
		/// Maximum items: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(100)]
		public KeyValuePair[] ThroughputInfo { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum LocationType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		region = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		availability-zone = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		availability-zone-id = 2,
	}
	
	/// <summary>
	///  The offering for an Elastic Inference Accelerator type. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class AcceleratorTypeOffering
	{
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// Pattern: ^\S+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string AcceleratorType { get; set; }
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public AcceleratorTypeOfferingLocationType LocationType { get; set; }
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string Location { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum AcceleratorTypeOfferingLocationType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		region = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		availability-zone = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		availability-zone-id = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class DescribeAcceleratorOfferingsRequest
	{
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public DescribeAcceleratorOfferingsRequestLocationType LocationType { get; set; }
		
		/// <summary>
		/// Minimum items: 0
		/// Maximum items: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(100)]
		public AcceleratorTypeName[] AcceleratorTypes { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum DescribeAcceleratorOfferingsRequestLocationType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		region = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		availability-zone = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		availability-zone-id = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class DescribeAcceleratorsRequest
	{
		
		/// <summary>
		/// Minimum items: 0
		/// Maximum items: 1000
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(1000)]
		public AcceleratorId[] AcceleratorIds { get; set; }
		
		/// <summary>
		/// Minimum items: 0
		/// Maximum items: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(100)]
		public Filter[] Filters { get; set; }
		
		/// <summary>
		/// Minimum: 0
		/// Maximum: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Range(0, 100)]
		public System.Nullable<System.Int32> MaxResults { get; set; }
		
		/// <summary>
		/// Max length: 2048
		/// Min length: 1
		/// Pattern: ^[A-Za-z0-9+/]+={0,2}$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(2048, MinimumLength=1)]
		public string NextToken { get; set; }
	}
	
	/// <summary>
	///  The health details of an Elastic Inference Accelerator. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ElasticInferenceAcceleratorHealth
	{
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string Status { get; set; }
	}
	
	/// <summary>
	///  The details of an Elastic Inference Accelerator. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ElasticInferenceAccelerator
	{
		
		/// <summary>
		///  The health details of an Elastic Inference Accelerator. 
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public ElasticInferenceAcceleratorHealth AcceleratorHealth { get; set; }
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// Pattern: ^\S+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string AcceleratorType { get; set; }
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// Pattern: ^eia-[0-9a-f]+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string AcceleratorId { get; set; }
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string AvailabilityZone { get; set; }
		
		/// <summary>
		/// Max length: 1283
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(1283, MinimumLength=1)]
		public string AttachedResource { get; set; }
	}
	
	/// <summary>
	///  A throughput entry for an Elastic Inference Accelerator type. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class KeyValuePair
	{
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// Pattern: ^\S+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string Key { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class TagResourceRequest
	{
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public TagMap Tags { get; set; }
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
		/// Describes the locations in which a given accelerator type or set of types is present in a given region.
		/// DescribeAcceleratorOfferings /describe-accelerator-offerings
		/// </summary>
		/// <returns>Success</returns>
		public async Task<DescribeAcceleratorOfferingsResponse> DescribeAcceleratorOfferingsAsync(DescribeAcceleratorOfferingsBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/describe-accelerator-offerings";
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
				return serializer.Deserialize<DescribeAcceleratorOfferingsResponse>(jsonReader);
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
		/// Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput.
		/// DescribeAcceleratorTypes /describe-accelerator-types
		/// </summary>
		/// <returns>Success</returns>
		public async Task<DescribeAcceleratorTypesResponse> DescribeAcceleratorTypesAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/describe-accelerator-types";
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
				return serializer.Deserialize<DescribeAcceleratorTypesResponse>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Describes information over a provided set of accelerators belonging to an account.
		/// DescribeAccelerators /describe-accelerators
		/// </summary>
		/// <param name="maxResults">Pagination limit</param>
		/// <param name="nextToken">Pagination token</param>
		/// <returns>Success</returns>
		public async Task<DescribeAcceleratorsResponse> DescribeAcceleratorsAsync(string maxResults, string nextToken, DescribeAcceleratorsBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/describe-accelerators?maxResults=" + (maxResults==null? "" : Uri.EscapeDataString(maxResults))+"&nextToken=" + (nextToken==null? "" : Uri.EscapeDataString(nextToken));
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
				return serializer.Deserialize<DescribeAcceleratorsResponse>(jsonReader);
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
		/// Returns all tags of an Elastic Inference Accelerator.
		/// ListTagsForResource /tags/{resourceArn}
		/// </summary>
		/// <param name="resourceArn"> The ARN of the Elastic Inference Accelerator to list the tags for. </param>
		/// <returns>Success</returns>
		public async Task<ListTagsForResourceResult> ListTagsForResourceAsync(string resourceArn, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/tags/"+ (resourceArn==null? "" : Uri.EscapeDataString(resourceArn));
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
				return serializer.Deserialize<ListTagsForResourceResult>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Adds the specified tags to an Elastic Inference Accelerator.
		/// TagResource /tags/{resourceArn}
		/// </summary>
		/// <param name="resourceArn"> The ARN of the Elastic Inference Accelerator to tag. </param>
		/// <returns>Success</returns>
		public async Task<TagResourceResult> TagResourceAsync(string resourceArn, TagResourceBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/tags/"+ (resourceArn==null? "" : Uri.EscapeDataString(resourceArn));
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
				return serializer.Deserialize<TagResourceResult>(jsonReader);
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
		/// Removes the specified tags from an Elastic Inference Accelerator.
		/// UntagResource /tags/{resourceArn}#tagKeys
		/// </summary>
		/// <param name="resourceArn"> The ARN of the Elastic Inference Accelerator to untag. </param>
		/// <param name="tagKeys"> The list of tags to remove from the Elastic Inference Accelerator. </param>
		/// <returns>Success</returns>
		public async Task<UntagResourceResult> UntagResourceAsync(string resourceArn, TagKey[] tagKeys, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/tags/"+ (resourceArn==null? "" : Uri.EscapeDataString(resourceArn))+"#tagKeys&"+String.Join("&", tagKeys.Select(z => $"tagKeys={z}"));
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
				return serializer.Deserialize<UntagResourceResult>(jsonReader);
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
	public class DescribeAcceleratorOfferingsBody
	{
		
		/// <summary>
		///  The location type that you want to describe accelerator type offerings for. It can assume the following values: region: will return the accelerator type offering at the regional level. availability-zone: will return the accelerator type offering at the availability zone level. availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id. 
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public DescribeAcceleratorOfferingsBodyLocationType LocationType { get; set; }
		
		/// <summary>
		///  The list of accelerator types to describe. 
		/// Minimum items: 0
		/// Maximum items: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(100)]
		public AcceleratorTypeName[] AcceleratorTypes { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum DescribeAcceleratorOfferingsBodyLocationType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		region = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		availability-zone = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		availability-zone-id = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class DescribeAcceleratorsBody
	{
		
		/// <summary>
		///  The IDs of the accelerators to describe. 
		/// Minimum items: 0
		/// Maximum items: 1000
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(1000)]
		public AcceleratorId[] AcceleratorIds { get; set; }
		
		/// <summary>
		///  One or more filters. Filter names and values are case-sensitive. Valid filter names are: accelerator-types: can provide a list of accelerator type names to filter for. instance-id: can provide a list of EC2 instance ids to filter for. 
		/// Minimum items: 0
		/// Maximum items: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(100)]
		public Filter[] Filters { get; set; }
		
		/// <summary>
		///  The total number of items to return in the command's output. If the total number of items available is more than the value specified, a NextToken is provided in the command's output. To resume pagination, provide the NextToken value in the starting-token argument of a subsequent command. Do not use the NextToken response element directly outside of the AWS CLI. 
		/// Minimum: 0
		/// Maximum: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Range(0, 100)]
		public System.Nullable<System.Int32> MaxResults { get; set; }
		
		/// <summary>
		///  A token to specify where to start paginating. This is the NextToken from a previously truncated response. 
		/// Max length: 2048
		/// Min length: 1
		/// Pattern: ^[A-Za-z0-9+/]+={0,2}$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(2048, MinimumLength=1)]
		public string NextToken { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class TagResourceBody
	{
		
		/// <summary>
		///  The tags to add to the Elastic Inference Accelerator. 
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Tags { get; set; }
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
