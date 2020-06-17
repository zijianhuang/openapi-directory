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
	/// The GetEntitlementsRequest contains results from the GetEntitlements operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetEntitlementsResult
	{
		
		/// <summary>
		/// Minimum items: 0
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		public Entitlement[] Entitlements { get; set; }
		
		/// <summary>
		/// Pattern: \S+
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
	}
	
	/// <summary>
	/// The GetEntitlementsRequest contains parameters for the GetEntitlements operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetEntitlementsRequest
	{
		
		/// <summary>
		/// Max length: 255
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(255, MinimumLength=1)]
		public string ProductCode { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public GetEntitlementFilters Filter { get; set; }
		
		/// <summary>
		/// Pattern: \S+
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> MaxResults { get; set; }
	}
	
	/// <summary>
	/// One or more parameters in your request was invalid.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class InvalidParameterException
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// The calls to the GetEntitlements API are throttled.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ThrottlingException
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class InternalServiceErrorException
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class EntitlementValue
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> IntegerValue { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> DoubleValue { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> BooleanValue { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string StringValue { get; set; }
	}
	
	/// <summary>
	/// An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class Entitlement
	{
		
		/// <summary>
		/// Max length: 255
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(255, MinimumLength=1)]
		public string ProductCode { get; set; }
		
		/// <summary>
		/// Pattern: \S+
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Dimension { get; set; }
		
		/// <summary>
		/// Pattern: \S+
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string CustomerIdentifier { get; set; }
		
		/// <summary>
		/// The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public EntitlementValue Value { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.DateTimeOffset> ExpirationDate { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum GetEntitlementFilterName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CUSTOMER_IDENTIFIER = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DIMENSION = 1,
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
		/// GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
		/// GetEntitlements /#X-Amz-Target=AWSMPEntitlementService.GetEntitlements
		/// </summary>
		/// <returns>Success</returns>
		public async Task<GetEntitlementsResult> GetEntitlementsAsync(GetEntitlementsRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/#X-Amz-Target=AWSMPEntitlementService.GetEntitlements";
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
				return serializer.Deserialize<GetEntitlementsResult>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
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
