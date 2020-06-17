export namespace My_Demo_Client {
	export interface QueryForecastResponse {

		/**Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response. */
		Forecast?: Forecast;
	}

	export interface QueryForecastRequest {
		ForecastArn: string;
		StartDate?: string;
		EndDate?: string;
		Filters: Filters;
		NextToken?: string;
	}


	/**The forecast value for a specific date. Part of the <a>Forecast</a> object. */
	export interface DataPoint {
		Timestamp?: string;
		Value?: number;
	}


	/**Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response. */
	export interface Forecast {
		Predictions?: Predictions;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Retrieves a forecast for a single item, filtered by the supplied criteria.</p> <p>The criteria is a key-value pair. The key is either <code>item_id</code> (or the equivalent non-timestamp, non-target field) from the <code>TARGET_TIME_SERIES</code> dataset, or one of the forecast dimensions specified as part of the <code>FeaturizationConfig</code> object.</p> <p>By default, <code>QueryForecast</code> returns the complete date range for the filtered forecast. You can request a specific date range.</p> <p>To get the full forecast, use the <a href="https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateForecastExportJob.html">CreateForecastExportJob</a> operation.</p> <note> <p>The forecasts generated by Amazon Forecast are in the same timezone as the dataset that was used to create the predictor.</p> </note>
		 * Post /#X-Amz-Target=AmazonForecastRuntime.QueryForecast
		 * @return {QueryForecastResponse} Success
		 */
		QueryForecast(requestBody: QueryForecastRequest, headersHandler?: () => {[header: string]: string}): Promise<QueryForecastResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonForecastRuntime.QueryForecast', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

