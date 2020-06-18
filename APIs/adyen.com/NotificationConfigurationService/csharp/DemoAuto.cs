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
	public class CreateNotificationConfigurationRequest
	{
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public NotificationConfigurationDetails ConfigurationDetails { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class DeleteNotificationConfigurationRequest
	{
		
		/// <summary>
		/// A list of IDs of the notification subscription configurations to be deleted.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public int[] NotificationIds { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class ExchangeMessage
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string MessageCode { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string MessageDescription { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GenericResponse
	{
		
		/// <summary>
		/// The reference of a request.  Can be used to uniquely identify the request.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string PspReference { get; set; }
		
		/// <summary>
		/// Indicates whether the request is processed synchronously or asynchronously.  Depending on the request's marketplace settings, the following scenarios may be applied:
		///* **sync:** The processing of the request is immediately attempted; it may result in an error if the providing service is unavailable.
		///* **async:** The request is queued and will be executed when the providing service is available in the order in which the requests are received.
		///* **asyncOnError:** The processing of the request is immediately attempted, but if the providing service is unavailable, the request is scheduled in a queue.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public bool SubmittedAsync { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetNotificationConfigurationListResponse
	{
		
		/// <summary>
		/// Details of the notification subscription configurations.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public NotificationConfigurationDetails[] Configurations { get; set; }
		
		/// <summary>
		/// The reference of a request.  Can be used to uniquely identify the request.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string PspReference { get; set; }
		
		/// <summary>
		/// Indicates whether the request is processed synchronously or asynchronously.  Depending on the request's marketplace settings, the following scenarios may be applied:
		///* **sync:** The processing of the request is immediately attempted; it may result in an error if the providing service is unavailable.
		///* **async:** The request is queued and will be executed when the providing service is available in the order in which the requests are received.
		///* **asyncOnError:** The processing of the request is immediately attempted, but if the providing service is unavailable, the request is scheduled in a queue.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public bool SubmittedAsync { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetNotificationConfigurationRequest
	{
		
		/// <summary>
		/// The ID of the notification subscription configuration whose details are to be retrieved.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public long NotificationId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class GetNotificationConfigurationResponse
	{
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public NotificationConfigurationDetails ConfigurationDetails { get; set; }
		
		/// <summary>
		/// The reference of a request.  Can be used to uniquely identify the request.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string PspReference { get; set; }
		
		/// <summary>
		/// Indicates whether the request is processed synchronously or asynchronously.  Depending on the request's marketplace settings, the following scenarios may be applied:
		///* **sync:** The processing of the request is immediately attempted; it may result in an error if the providing service is unavailable.
		///* **async:** The request is queued and will be executed when the providing service is available in the order in which the requests are received.
		///* **asyncOnError:** The processing of the request is immediately attempted, but if the providing service is unavailable, the request is scheduled in a queue.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public bool SubmittedAsync { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class NotificationConfigurationDetails
	{
		
		/// <summary>
		/// Indicates whether the notification subscription is active.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Active { get; set; }
		
		/// <summary>
		/// The API version of the notification to send.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ApiVersion { get; set; }
		
		/// <summary>
		/// A description of the notification subscription configuration.
		///>Required when creating a configuration, forbidden when updating a configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		/// <summary>
		/// The types of events whose notifications apply to this configuration.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public NotificationEventConfiguration[] EventConfigs { get; set; }
		
		/// <summary>
		/// The ID of the configuration.
		///>Required if updating an existing configuration, ignored during the creation of a configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int64> NotificationId { get; set; }
		
		/// <summary>
		/// The password to use when accessing the notifyURL with the specified username.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string NotifyPassword { get; set; }
		
		/// <summary>
		/// The URL to which the notifications are to be sent.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string NotifyURL { get; set; }
		
		/// <summary>
		/// The username to use when accessing the notifyURL.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string NotifyUsername { get; set; }
		
		/// <summary>
		/// The SSL protocol employed by the endpoint.
		///>Permitted values: `SSL`, `SSLv3`, `SSLInsecureCiphers`, `TLS`, `TLSv10`, `TLSv10InsecureCiphers`, `TLSv11`, `TLSv12`.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public NotificationConfigurationDetailsSslProtocol SslProtocol { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum NotificationConfigurationDetailsSslProtocol
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SSL = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SSLInsecureCiphers = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SSLv3 = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TLS = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TLSv10 = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TLSv10InsecureCiphers = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TLSv11 = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TLSv12 = 7,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class NotificationEventConfiguration
	{
		
		/// <summary>
		/// The type of event triggering the notification.
		///>Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public NotificationEventConfigurationEventType EventType { get; set; }
		
		/// <summary>
		/// Indicates whether the specified eventType is to be sent to the endpoint or all events other than the specified eventType (and other specified eventTypes) are to be sent.
		///>Permitted values: `INCLUDE`, `EXCLUDE`.
		///>- `INCLUDE`: send the specified eventType.
		///>- `EXCLUDE`: send all eventTypes other than the specified eventType (and other eventTypes marked with `EXCLUDE`).
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public NotificationEventConfigurationIncludeMode IncludeMode { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum NotificationEventConfigurationEventType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ACCOUNT_CREATED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ACCOUNT_HOLDER_CREATED = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ACCOUNT_HOLDER_LIMIT_REACHED = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ACCOUNT_HOLDER_PAYOUT = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ACCOUNT_HOLDER_STATUS_CHANGE = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ACCOUNT_HOLDER_UPDATED = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ACCOUNT_HOLDER_VERIFICATION = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ACCOUNT_UPDATED = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BENEFICIARY_SETUP = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		COMPENSATE_NEGATIVE_BALANCE = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PAYMENT_FAILURE = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		REPORT_AVAILABLE = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SCHEDULED_REFUNDS = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TRANSFER_FUNDS = 13,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public enum NotificationEventConfigurationIncludeMode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EXCLUDE = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		INCLUDE = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class TestNotificationConfigurationRequest
	{
		
		/// <summary>
		/// The event types to test.  If left blank, then all of the configured event types will be tested.
		///>Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string[] EventTypes { get; set; }
		
		/// <summary>
		/// The ID of the notification subscription configuration to be tested.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public long NotificationId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class TestNotificationConfigurationResponse
	{
		
		/// <summary>
		/// Any error messages encountered.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string[] ErrorMessages { get; set; }
		
		/// <summary>
		/// The event types that were tested.
		///>Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string[] EventTypes { get; set; }
		
		/// <summary>
		/// The notification message and related response messages.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ExchangeMessage[] ExchangeMessages { get; set; }
		
		/// <summary>
		/// The ID of the notification subscription configuration.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public long NotificationId { get; set; }
		
		/// <summary>
		/// A list of messages describing the testing steps.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string[] OkMessages { get; set; }
		
		/// <summary>
		/// The reference of a request.  Can be used to uniquely identify the request.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string PspReference { get; set; }
		
		/// <summary>
		/// Indicates whether the request is processed synchronously or asynchronously.  Depending on the request's marketplace settings, the following scenarios may be applied:
		///* **sync:** The processing of the request is immediately attempted; it may result in an error if the providing service is unavailable.
		///* **async:** The request is queued and will be executed when the providing service is available in the order in which the requests are received.
		///* **asyncOnError:** The processing of the request is immediately attempted, but if the providing service is unavailable, the request is scheduled in a queue.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public bool SubmittedAsync { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class UpdateNotificationConfigurationRequest
	{
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public NotificationConfigurationDetails ConfigurationDetails { get; set; }
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
		/// Configure a new subscription to notifications.
		/// This endpoint is used to create a subscription to MarketPay event notifications. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.
		/// CreateNotificationConfigurationPost createNotificationConfiguration
		/// </summary>
		/// <returns>OK - the request has succeeded.</returns>
		public async Task<GetNotificationConfigurationResponse> CreateNotificationConfigurationPostAsync(CreateNotificationConfigurationRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "createNotificationConfiguration";
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
				return serializer.Deserialize<GetNotificationConfigurationResponse>(jsonReader);
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
		/// Delete an existing notification subscription configuration.
		/// This endpoint is used to delete an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL that was in the subscription.
		/// DeleteNotificationConfigurationsPost deleteNotificationConfigurations
		/// </summary>
		/// <returns>OK - the request has succeeded.</returns>
		public async Task<GenericResponse> DeleteNotificationConfigurationsPostAsync(DeleteNotificationConfigurationRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "deleteNotificationConfigurations";
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
				return serializer.Deserialize<GenericResponse>(jsonReader);
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
		/// Retrieve an existing notification subscription configuration.
		/// This endpoint is used to retrieve the details of the configuration of a notification subscription.
		/// GetNotificationConfigurationPost getNotificationConfiguration
		/// </summary>
		/// <returns>OK - the request has succeeded.</returns>
		public async Task<GetNotificationConfigurationResponse> GetNotificationConfigurationPostAsync(GetNotificationConfigurationRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "getNotificationConfiguration";
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
				return serializer.Deserialize<GetNotificationConfigurationResponse>(jsonReader);
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
		/// Retrive a list of existing notification subscription configurations.
		/// This endpoint is used to retrieve the details of the configurations of all of the notification subscriptions in the marketplace of the executing user.
		/// GetNotificationConfigurationListPost getNotificationConfigurationList
		/// </summary>
		/// <returns>OK - the request has succeeded.</returns>
		public async Task<GetNotificationConfigurationListResponse> GetNotificationConfigurationListPostAsync(EmptyRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "getNotificationConfigurationList";
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
				return serializer.Deserialize<GetNotificationConfigurationListResponse>(jsonReader);
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
		/// Test an existing notification configuration.
		/// This endpoint is used to test an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.
		/// TestNotificationConfigurationPost testNotificationConfiguration
		/// </summary>
		/// <returns>OK - the request has succeeded.</returns>
		public async Task<TestNotificationConfigurationResponse> TestNotificationConfigurationPostAsync(TestNotificationConfigurationRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "testNotificationConfiguration";
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
				return serializer.Deserialize<TestNotificationConfigurationResponse>(jsonReader);
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
		/// Update an existing notification subscription configuration.
		/// This endpoint is used to update an existing notification subscription configuration. If updating the event types, all event types desired must be provided, otherwise the previous event type configuration will be overwritten.
		/// UpdateNotificationConfigurationPost updateNotificationConfiguration
		/// </summary>
		/// <returns>OK - the request has succeeded.</returns>
		public async Task<GetNotificationConfigurationResponse> UpdateNotificationConfigurationPostAsync(UpdateNotificationConfigurationRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "updateNotificationConfiguration";
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
				return serializer.Deserialize<GetNotificationConfigurationResponse>(jsonReader);
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