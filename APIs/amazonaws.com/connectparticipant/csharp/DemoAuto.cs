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
	public class CreateParticipantConnectionResponse
	{
		
		/// <summary>
		/// The websocket for the participant's connection.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public Websocket Websocket { get; set; }
		
		/// <summary>
		/// Connection credentials. 
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public ConnectionCredentials ConnectionCredentials { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum ConnectionType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WEBSOCKET = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CONNECTION_CREDENTIALS = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetTranscriptResponse
	{
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string InitialContactId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Item[] Transcript { get; set; }
		
		/// <summary>
		/// Max length: 1000
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(1000, MinimumLength=1)]
		public string NextToken { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class SendEventResponse
	{
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string Id { get; set; }
		
		/// <summary>
		/// Max length: 100
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(100, MinimumLength=1)]
		public string AbsoluteTime { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class SendMessageResponse
	{
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string Id { get; set; }
		
		/// <summary>
		/// Max length: 100
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(100, MinimumLength=1)]
		public string AbsoluteTime { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum ChatItemType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MESSAGE = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EVENT = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CONNECTION_ACK = 2,
	}
	
	/// <summary>
	/// Connection credentials. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ConnectionCredentials
	{
		
		/// <summary>
		/// Max length: 1000
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(1000, MinimumLength=1)]
		public string ConnectionToken { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Expiry { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class CreateParticipantConnectionRequest
	{
		
		/// <summary>
		/// Minimum items: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public ConnectionType[] Type { get; set; }
	}
	
	/// <summary>
	/// The websocket for the participant's connection.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class Websocket
	{
		
		/// <summary>
		/// Max length: 2000
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(2000, MinimumLength=1)]
		public string Url { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string ConnectionExpiry { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class DisconnectParticipantRequest
	{
		
		/// <summary>
		/// Max length: 500
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(500)]
		public string ClientToken { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum ScanDirection
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FORWARD = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BACKWARD = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum SortKey
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DESCENDING = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ASCENDING = 1,
	}
	
	/// <summary>
	/// A filtering option for where to start. For example, if you sent 100 messages, start with message 50. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class StartPosition
	{
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string Id { get; set; }
		
		/// <summary>
		/// Max length: 100
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(100, MinimumLength=1)]
		public string AbsoluteTime { get; set; }
		
		/// <summary>
		/// Minimum: 0
		/// Maximum: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Range(0, 100)]
		public System.Nullable<System.Int32> MostRecent { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetTranscriptRequest
	{
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string ContactId { get; set; }
		
		/// <summary>
		/// Minimum: 0
		/// Maximum: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Range(0, 100)]
		public System.Nullable<System.Int32> MaxResults { get; set; }
		
		/// <summary>
		/// Max length: 1000
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(1000, MinimumLength=1)]
		public string NextToken { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public GetTranscriptRequestScanDirection ScanDirection { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public GetTranscriptRequestSortOrder SortOrder { get; set; }
		
		/// <summary>
		/// A filtering option for where to start. For example, if you sent 100 messages, start with message 50. 
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public StartPosition StartPosition { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum GetTranscriptRequestScanDirection
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FORWARD = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BACKWARD = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum GetTranscriptRequestSortOrder
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DESCENDING = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ASCENDING = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum ParticipantRole
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AGENT = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CUSTOMER = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SYSTEM = 2,
	}
	
	/// <summary>
	/// An item - message or event - that has been sent. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class Item
	{
		
		/// <summary>
		/// Max length: 100
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(100, MinimumLength=1)]
		public string AbsoluteTime { get; set; }
		
		/// <summary>
		/// Max length: 1024
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(1024, MinimumLength=1)]
		public string Content { get; set; }
		
		/// <summary>
		/// Max length: 100
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(100, MinimumLength=1)]
		public string ContentType { get; set; }
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ItemType Type { get; set; }
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string ParticipantId { get; set; }
		
		/// <summary>
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string DisplayName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ItemParticipantRole ParticipantRole { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum ItemType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MESSAGE = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EVENT = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CONNECTION_ACK = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum ItemParticipantRole
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AGENT = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CUSTOMER = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SYSTEM = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class SendEventRequest
	{
		
		/// <summary>
		/// Max length: 100
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(100, MinimumLength=1)]
		public string ContentType { get; set; }
		
		/// <summary>
		/// Max length: 1024
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(1024, MinimumLength=1)]
		public string Content { get; set; }
		
		/// <summary>
		/// Max length: 500
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(500)]
		public string ClientToken { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class SendMessageRequest
	{
		
		/// <summary>
		/// Max length: 100
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(100, MinimumLength=1)]
		public string ContentType { get; set; }
		
		/// <summary>
		/// Max length: 1024
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(1024, MinimumLength=1)]
		public string Content { get; set; }
		
		/// <summary>
		/// Max length: 500
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(500)]
		public string ClientToken { get; set; }
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
		/// <p>Creates the participant's connection. Note that ParticipantToken is used for invoking this API instead of ConnectionToken.</p> <p>The participant token is valid for the lifetime of the participant – until the they are part of a contact.</p> <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic. </p> <p>For chat, you need to publish the following on the established websocket connection:</p> <p> <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code> </p> <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.</p>
		/// CreateParticipantConnection /participant/connection#X-Amz-Bearer
		/// </summary>
		/// <returns>Success</returns>
		public async Task<CreateParticipantConnectionResponse> CreateParticipantConnectionAsync(CreateParticipantConnectionBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/participant/connection#X-Amz-Bearer";
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
				return serializer.Deserialize<CreateParticipantConnectionResponse>(jsonReader);
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
		/// Disconnects a participant. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
		/// DisconnectParticipant /participant/disconnect#X-Amz-Bearer
		/// </summary>
		/// <returns>Success</returns>
		public async Task<DisconnectParticipantResponse> DisconnectParticipantAsync(DisconnectParticipantBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/participant/disconnect#X-Amz-Bearer";
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
				return serializer.Deserialize<DisconnectParticipantResponse>(jsonReader);
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
		/// Retrieves a transcript of the session. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
		/// GetTranscript /participant/transcript#X-Amz-Bearer
		/// </summary>
		/// <param name="MaxResults">Pagination limit</param>
		/// <param name="NextToken">Pagination token</param>
		/// <returns>Success</returns>
		public async Task<GetTranscriptResponse> GetTranscriptAsync(string MaxResults, string NextToken, GetTranscriptBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/participant/transcript#X-Amz-Bearer?MaxResults=" + (MaxResults==null? "" : Uri.EscapeDataString(MaxResults))+"&NextToken=" + (NextToken==null? "" : Uri.EscapeDataString(NextToken));
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
				return serializer.Deserialize<GetTranscriptResponse>(jsonReader);
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
		/// Sends an event. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
		/// SendEvent /participant/event#X-Amz-Bearer
		/// </summary>
		/// <returns>Success</returns>
		public async Task<SendEventResponse> SendEventAsync(SendEventBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/participant/event#X-Amz-Bearer";
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
				return serializer.Deserialize<SendEventResponse>(jsonReader);
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
		/// Sends a message. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
		/// SendMessage /participant/message#X-Amz-Bearer
		/// </summary>
		/// <returns>Success</returns>
		public async Task<SendMessageResponse> SendMessageAsync(SendMessageBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "/participant/message#X-Amz-Bearer";
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
				return serializer.Deserialize<SendMessageResponse>(jsonReader);
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
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class CreateParticipantConnectionBody
	{
		
		/// <summary>
		/// Type of connection information required.
		/// Minimum items: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public ConnectionType[] Type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class DisconnectParticipantBody
	{
		
		/// <summary>
		/// A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		/// Max length: 500
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(500)]
		public string ClientToken { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetTranscriptBody
	{
		
		/// <summary>
		/// The contactId from the current contact chain for which transcript is needed.
		/// Max length: 256
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(256, MinimumLength=1)]
		public string ContactId { get; set; }
		
		/// <summary>
		/// The maximum number of results to return in the page. Default: 10. 
		/// Minimum: 0
		/// Maximum: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Range(0, 100)]
		public System.Nullable<System.Int32> MaxResults { get; set; }
		
		/// <summary>
		/// The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.
		/// Max length: 1000
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(1000, MinimumLength=1)]
		public string NextToken { get; set; }
		
		/// <summary>
		/// The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition. 
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public GetTranscriptBodyScanDirection ScanDirection { get; set; }
		
		/// <summary>
		/// The sort order for the records. Default: DESCENDING.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public GetTranscriptBodySortOrder SortOrder { get; set; }
		
		/// <summary>
		/// A filtering option for where to start. For example, if you sent 100 messages, start with message 50. 
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string StartPosition { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum GetTranscriptBodyScanDirection
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FORWARD = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BACKWARD = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum GetTranscriptBodySortOrder
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DESCENDING = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ASCENDING = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class SendEventBody
	{
		
		/// <summary>
		/// <p>The content type of the request. Supported types are:</p> <ul> <li> <p>application/vnd.amazonaws.connect.event.typing</p> </li> <li> <p>application/vnd.amazonaws.connect.event.connection.acknowledged</p> </li> </ul>
		/// Max length: 100
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(100, MinimumLength=1)]
		public string ContentType { get; set; }
		
		/// <summary>
		/// The content of the event to be sent (for example, message text). This is not yet supported.
		/// Max length: 1024
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(1024, MinimumLength=1)]
		public string Content { get; set; }
		
		/// <summary>
		/// A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		/// Max length: 500
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(500)]
		public string ClientToken { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class SendMessageBody
	{
		
		/// <summary>
		/// The type of the content. Supported types are text/plain.
		/// Max length: 100
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(100, MinimumLength=1)]
		public string ContentType { get; set; }
		
		/// <summary>
		/// The content of the message.
		/// Max length: 1024
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(1024, MinimumLength=1)]
		public string Content { get; set; }
		
		/// <summary>
		/// A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		/// Max length: 500
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.StringLength(500)]
		public string ClientToken { get; set; }
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
