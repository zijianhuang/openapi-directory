import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface SendCommandResult {

		/**Contains the details of the started session. */
		StartSession?: StartSessionResult;

		/**Contains the details of the started transaction. */
		StartTransaction?: StartTransactionResult;

		/**Contains the details of the ended session. */
		EndSession?: EndSessionResult;

		/**Contains the details of the committed transaction. */
		CommitTransaction?: CommitTransactionResult;

		/**Contains the details of the aborted transaction. */
		AbortTransaction?: AbortTransactionResult;

		/**Contains the details of the executed statement. */
		ExecuteStatement?: ExecuteStatementResult;

		/**Contains the page that was fetched. */
		FetchPage?: FetchPageResult;
	}

	export interface SendCommandRequest {
		SessionToken?: string;

		/**Specifies a request to start a new session. */
		StartSession?: StartSessionRequest;

		/**Specifies a request to start a transaction. */
		StartTransaction?: StartTransactionRequest;

		/**Specifies a request to end the session. */
		EndSession?: EndSessionRequest;

		/**Contains the details of the transaction to commit. */
		CommitTransaction?: CommitTransactionRequest;

		/**Contains the details of the transaction to abort. */
		AbortTransaction?: AbortTransactionRequest;

		/**Specifies a request to execute a statement. */
		ExecuteStatement?: ExecuteStatementRequest;

		/**Specifies the details of the page to be fetched. */
		FetchPage?: FetchPageRequest;
	}


	/**Contains the details of the transaction to commit. */
	export interface CommitTransactionRequest {
		TransactionId: string;
		CommitDigest: string;
	}


	/**Contains the details of the committed transaction. */
	export interface CommitTransactionResult {
		TransactionId?: string;
		CommitDigest?: string;
	}


	/**Specifies a request to execute a statement. */
	export interface ExecuteStatementRequest {
		TransactionId: string;
		Statement: string;
		Parameters?: Array<ValueHolder>;
	}


	/**Contains details of the fetched page. */
	export interface Page {
		Values?: Array<ValueHolder>;
		NextPageToken?: string;
	}


	/**Contains the details of the executed statement. */
	export interface ExecuteStatementResult {

		/**Contains details of the fetched page. */
		FirstPage?: Page;
	}


	/**Specifies the details of the page to be fetched. */
	export interface FetchPageRequest {
		TransactionId: string;
		NextPageToken: string;
	}


	/**Contains the page that was fetched. */
	export interface FetchPageResult {

		/**Contains details of the fetched page. */
		Page?: Page;
	}


	/**Specifies a request to start a new session. */
	export interface StartSessionRequest {
		LedgerName: string;
	}


	/**Contains the details of the started session. */
	export interface StartSessionResult {
		SessionToken?: string;
	}


	/**Contains the details of the started transaction. */
	export interface StartTransactionResult {
		TransactionId?: string;
	}


	/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
	export interface ValueHolder {
		IonBinary?: string;
		IonText?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend that you use the Amazon QLDB Driver or the QLDB Shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB Driver. The driver provides a high-level abstraction layer above this <code>qldbsession</code> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB Shell. The shell is a command line interface that uses the QLDB Driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB Shell</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=QLDBSession.SendCommand
		 * @return {SendCommandResult} Success
		 */
		SendCommand(requestBody: SendCommandRequest, headersHandler?: () => {[header: string]: string}): Promise<SendCommandResult> {
			return Axios.post<SendCommandResult>(this.baseUri + '#X-Amz-Target=QLDBSession.SendCommand', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

}

