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
		/// Lists a collection of backends in the specified service instance.
		/// Backend_ListByService subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/backends
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="serviceName">The name of the API Management service.</param>
		/// <param name="filter">|   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| title | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| url | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br></param>
		/// <param name="top">Number of records to return.</param>
		/// <param name="skip">Number of records to skip.</param>
		/// <param name="api_version">Version of the API to be used with the client request.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Lists a collection of Backend entities.</returns>
		public async Task Backend_ListByServiceAsync(string resourceGroupName, string serviceName, string filter, int top, int skip, string api_version, string subscriptionId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ApiManagement/service/"+ (serviceName==null? "" : Uri.EscapeDataString(serviceName))+"/backends&filter=" + (filter==null? "" : Uri.EscapeDataString(filter))+"&top="+top+"&skip="+skip+"&api_version=" + (api_version==null? "" : Uri.EscapeDataString(api_version));
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
		/// Deletes the specified backend.
		/// Backend_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/backends/{backendId}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="serviceName">The name of the API Management service.</param>
		/// <param name="backendId">Identifier of the Backend entity. Must be unique in the current API Management service instance.</param>
		/// <param name="api_version">Version of the API to be used with the client request.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>The backend was successfully deleted.</returns>
		public async Task Backend_DeleteAsync(string resourceGroupName, string serviceName, string backendId, string api_version, string subscriptionId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ApiManagement/service/"+ (serviceName==null? "" : Uri.EscapeDataString(serviceName))+"/backends/"+ (backendId==null? "" : Uri.EscapeDataString(backendId))+"&api_version=" + (api_version==null? "" : Uri.EscapeDataString(api_version));
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
		/// Gets the details of the backend specified by its identifier.
		/// Backend_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/backends/{backendId}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="serviceName">The name of the API Management service.</param>
		/// <param name="backendId">Identifier of the Backend entity. Must be unique in the current API Management service instance.</param>
		/// <param name="api_version">Version of the API to be used with the client request.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>The response body contains the specified Backend entity.</returns>
		public async Task Backend_GetAsync(string resourceGroupName, string serviceName, string backendId, string api_version, string subscriptionId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ApiManagement/service/"+ (serviceName==null? "" : Uri.EscapeDataString(serviceName))+"/backends/"+ (backendId==null? "" : Uri.EscapeDataString(backendId))+"&api_version=" + (api_version==null? "" : Uri.EscapeDataString(api_version));
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
		/// Creates or Updates a backend.
		/// Backend_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/backends/{backendId}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="serviceName">The name of the API Management service.</param>
		/// <param name="backendId">Identifier of the Backend entity. Must be unique in the current API Management service instance.</param>
		/// <param name="api_version">Version of the API to be used with the client request.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="requestBody">Create parameters.</param>
		/// <returns>The existing backend was successfully updated.</returns>
		public async Task Backend_CreateOrUpdateAsync(string resourceGroupName, string serviceName, string backendId, string api_version, string subscriptionId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ApiManagement/service/"+ (serviceName==null? "" : Uri.EscapeDataString(serviceName))+"/backends/"+ (backendId==null? "" : Uri.EscapeDataString(backendId))+"&api_version=" + (api_version==null? "" : Uri.EscapeDataString(api_version));
			using (var request = new HttpRequestMessage(HttpMethod.Put, requestUri))
			{
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
		/// Notifies the APIM proxy to create a new connection to the backend after the specified timeout. If no timeout was specified, timeout of 2 minutes is used.
		/// Backend_Reconnect subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/backends/{backendId}/reconnect
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="serviceName">The name of the API Management service.</param>
		/// <param name="backendId">Identifier of the Backend entity. Must be unique in the current API Management service instance.</param>
		/// <param name="api_version">Version of the API to be used with the client request.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="requestBody">Reconnect request parameters.</param>
		public async Task Backend_ReconnectAsync(string resourceGroupName, string serviceName, string backendId, string api_version, string subscriptionId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ApiManagement/service/"+ (serviceName==null? "" : Uri.EscapeDataString(serviceName))+"/backends/"+ (backendId==null? "" : Uri.EscapeDataString(backendId))+"/reconnect&api_version=" + (api_version==null? "" : Uri.EscapeDataString(api_version));
			using (var request = new HttpRequestMessage(HttpMethod.Post, requestUri))
			{
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
