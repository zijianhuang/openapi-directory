///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface AgeAnswer {
		max?: number;
		min?: number;
		score?: number;
	}

	export interface Person {
		firstName?: string;
		lastName?: string;
		username: string;
	}

	export interface Task {

		/**The answer you are looking for. */
		answer?: number;

		/**The url of the image that will be processed. */
		image_url: string;

		/**Use this url to get this task. */
		this_url?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Image contains nudity or sexually explicit content? [ image_url -> id ]
		 * Creates a new adult_content task that tells the if the image has nudity or sexual content.
		 * Post adult_content
		 * @param {} requestBody The image to analyze
		 * @return {void} 
		 */
		VisionPost(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'adult_content', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the adult_content task [ id -> adult content task ]
		 * Gets the adult_content task.
		 * Get adult_content/{taskId}
		 * @param {string} taskId An internal id for the task
		 * @return {void} The contents of the adult_content task.
		 */
		VisionGetByTaskId(taskId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'adult_content/' + (taskId == null ? '' : encodeURIComponent(taskId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Create an artistic image [ image_url, style_url -> id ]
		 * Given an image content and a style image create a new stylized image of the content.
		 * Post artistic_image
		 * @param {} requestBody The content image and the style image
		 * @return {void} 
		 */
		CreativePost(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'artistic_image', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets a artistic image by task id [ id -> artistic image task ]
		 * The artistic_image will have the urls of the stylized images.
		 * Get artistic_image/{taskId}
		 * @param {string} taskId An internal id for the task
		 * @return {void} The contents of the artistic_image task.
		 */
		CreativeGetByTaskId(taskId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'artistic_image/' + (taskId == null ? '' : encodeURIComponent(taskId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * What is that object? [ image_url -> id ]
		 * Creates a new detect object task that recognizes the object in the image.
		 * Post detect_object
		 * @param {} requestBody The image to analyze
		 * @return {void} 
		 */
		VisionPost(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'detect_object', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the detect_object task [ id -> detect object task]
		 * Gets the detect_object task.
		 * Get detect_object/{taskId}
		 * @param {string} taskId An internal id for the task
		 * @return {void} The contents of the detect_object task.
		 */
		VisionGetByTaskId(taskId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'detect_object/' + (taskId == null ? '' : encodeURIComponent(taskId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Find all faces in the image [ image_url -> id ]
		 * Get a list of all the locations of the faces in the image.
		 * Post face
		 * @param {} requestBody The image to analyze
		 * @return {void} 
		 */
		VisionPost(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'face', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the face task [ id -> face task ]
		 * Gets the face task.
		 * Get face/{taskId}
		 * @param {string} taskId An internal id for the task
		 * @return {void} The contents of the face task.
		 */
		VisionGetByTaskId(taskId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'face/' + (taskId == null ? '' : encodeURIComponent(taskId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * How old is the person in the image? [ image_url -> id ]
		 * Creates a new face age task that approximates the age of the person in the image.
		 * Post face_age
		 * @param {} requestBody The image to analyze
		 * @return {void} 
		 */
		VisionPost(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'face_age', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the face_age task [ id -> face age task ]
		 * Gets the face_age task.
		 * Get face_age/{taskId}
		 * @param {string} taskId An internal id for the task
		 * @return {void} The contents of the face_age task.
		 */
		VisionGetByTaskId(taskId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'face_age/' + (taskId == null ? '' : encodeURIComponent(taskId)), callback, this.error, this.statusCode, headersHandler);
		}
	}

}

