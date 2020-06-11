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
	public class AgeAnswer
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Max { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Min { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Single> Score { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class Person
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string FirstName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string LastName { get; set; }
		
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Username { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Name="http://demo.domain/2020/03")]
	public class Task
	{
		
		/// <summary>
		/// The answer you are looking for.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Single> Answer { get; set; }
		
		/// <summary>
		/// The url of the image that will be processed.
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Image_url { get; set; }
		
		/// <summary>
		/// Use this url to get this task.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string This_url { get; set; }
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
		/// Image contains nudity or sexually explicit content? [ image_url -> id ]
		/// Creates a new adult_content task that tells the if the image has nudity or sexual content.
		/// VisionPost adult_content
		/// </summary>
		/// <param name="requestBody">The image to analyze</param>
		public async Task VisionPostAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "adult_content";
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
		
		/// <summary>
		/// Gets the adult_content task [ id -> adult content task ]
		/// Gets the adult_content task.
		/// VisionGetByTaskId adult_content/{taskId}
		/// </summary>
		/// <param name="taskId">An internal id for the task</param>
		/// <returns>The contents of the adult_content task.</returns>
		public async Task VisionGetByTaskIdAsync(string taskId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "adult_content/"+ (taskId==null? "" : Uri.EscapeDataString(taskId));
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
		/// Create an artistic image [ image_url, style_url -> id ]
		/// Given an image content and a style image create a new stylized image of the content.
		/// CreativePost artistic_image
		/// </summary>
		/// <param name="requestBody">The content image and the style image</param>
		public async Task CreativePostAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "artistic_image";
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
		
		/// <summary>
		/// Gets a artistic image by task id [ id -> artistic image task ]
		/// The artistic_image will have the urls of the stylized images.
		/// CreativeGetByTaskId artistic_image/{taskId}
		/// </summary>
		/// <param name="taskId">An internal id for the task</param>
		/// <returns>The contents of the artistic_image task.</returns>
		public async Task CreativeGetByTaskIdAsync(string taskId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "artistic_image/"+ (taskId==null? "" : Uri.EscapeDataString(taskId));
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
		/// What is that object? [ image_url -> id ]
		/// Creates a new detect object task that recognizes the object in the image.
		/// VisionPost detect_object
		/// </summary>
		/// <param name="requestBody">The image to analyze</param>
		public async Task VisionPostAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "detect_object";
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
		
		/// <summary>
		/// Gets the detect_object task [ id -> detect object task]
		/// Gets the detect_object task.
		/// VisionGetByTaskId detect_object/{taskId}
		/// </summary>
		/// <param name="taskId">An internal id for the task</param>
		/// <returns>The contents of the detect_object task.</returns>
		public async Task VisionGetByTaskIdAsync(string taskId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "detect_object/"+ (taskId==null? "" : Uri.EscapeDataString(taskId));
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
		/// Find all faces in the image [ image_url -> id ]
		/// Get a list of all the locations of the faces in the image.
		/// VisionPost face
		/// </summary>
		/// <param name="requestBody">The image to analyze</param>
		public async Task VisionPostAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "face";
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
		
		/// <summary>
		/// Gets the face task [ id -> face task ]
		/// Gets the face task.
		/// VisionGetByTaskId face/{taskId}
		/// </summary>
		/// <param name="taskId">An internal id for the task</param>
		/// <returns>The contents of the face task.</returns>
		public async Task VisionGetByTaskIdAsync(string taskId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "face/"+ (taskId==null? "" : Uri.EscapeDataString(taskId));
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
		/// How old is the person in the image? [ image_url -> id ]
		/// Creates a new face age task that approximates the age of the person in the image.
		/// VisionPost face_age
		/// </summary>
		/// <param name="requestBody">The image to analyze</param>
		public async Task VisionPostAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "face_age";
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
		
		/// <summary>
		/// Gets the face_age task [ id -> face age task ]
		/// Gets the face_age task.
		/// VisionGetByTaskId face_age/{taskId}
		/// </summary>
		/// <param name="taskId">An internal id for the task</param>
		/// <returns>The contents of the face_age task.</returns>
		public async Task VisionGetByTaskIdAsync(string taskId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "face_age/"+ (taskId==null? "" : Uri.EscapeDataString(taskId));
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
