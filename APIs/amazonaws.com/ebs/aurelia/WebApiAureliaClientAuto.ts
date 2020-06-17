import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface GetSnapshotBlockResponse {
		BlockData?: string;
	}

	export interface ListChangedBlocksResponse {
		ChangedBlocks?: Array<ChangedBlock>;
		ExpiryTime?: Date;
		VolumeSize?: number;
		BlockSize?: number;
		NextToken?: string;
	}

	export interface ListSnapshotBlocksResponse {
		Blocks?: Array<Block>;
		ExpiryTime?: Date;
		VolumeSize?: number;
		BlockSize?: number;
		NextToken?: string;
	}


	/**A block of data in an Amazon Elastic Block Store snapshot. */
	export interface Block {
		BlockIndex?: number;
		BlockToken?: string;
	}


	/**A block of data in an Amazon Elastic Block Store snapshot that is different from another snapshot of the same volume/snapshot lineage. */
	export interface ChangedBlock {
		BlockIndex?: number;
		FirstBlockToken?: string;
		SecondBlockToken?: string;
	}

	export enum ChecksumAlgorithm { SHA256 = 0 }

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Returns the data in a block in an Amazon Elastic Block Store snapshot.
		 * Get /snapshots/{snapshotId}/blocks/{blockIndex}#blockToken
		 * @param {string} snapshotId The ID of the snapshot containing the block from which to get data.
		 * @param {number} blockIndex <p>The block index of the block from which to get data.</p> <p>Obtain the <code>BlockIndex</code> by running the <code>ListChangedBlocks</code> or <code>ListSnapshotBlocks</code> operations.</p>
		 * @param {string} blockToken <p>The block token of the block from which to get data.</p> <p>Obtain the <code>BlockToken</code> by running the <code>ListChangedBlocks</code> or <code>ListSnapshotBlocks</code> operations.</p>
		 * @return {GetSnapshotBlockResponse} Success
		 */
		GetSnapshotBlock(snapshotId: string, blockIndex: number, blockToken: string, headersHandler?: () => {[header: string]: string}): Promise<GetSnapshotBlockResponse> {
			return this.http.get('/snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '/blocks/' + blockIndex + '#blockToken&blockToken=' + (blockToken == null ? '' : encodeURIComponent(blockToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Returns the block indexes and block tokens for blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.
		 * Get /snapshots/{secondSnapshotId}/changedblocks
		 * @param {string} firstSnapshotId <p>The ID of the first snapshot to use for the comparison.</p> <important> <p>The <code>FirstSnapshotID</code> parameter must be specified with a <code>SecondSnapshotId</code> parameter; otherwise, an error occurs.</p> </important>
		 * @param {string} secondSnapshotId <p>The ID of the second snapshot to use for the comparison.</p> <important> <p>The <code>SecondSnapshotId</code> parameter must be specified with a <code>FirstSnapshotID</code> parameter; otherwise, an error occurs.</p> </important>
		 * @param {string} pageToken The token to request the next page of results.
		 * @param {number} maxResults The number of results to return.
		 * @param {number} startingBlockIndex <p>The block index from which the comparison should start.</p> <p>The list in the response will start from this block index or the next valid block index in the snapshots.</p>
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChangedBlocksResponse} Success
		 */
		ListChangedBlocks(firstSnapshotId: string, secondSnapshotId: string, pageToken: string, maxResults: number, startingBlockIndex: number, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListChangedBlocksResponse> {
			return this.http.get('/snapshots/' + (secondSnapshotId == null ? '' : encodeURIComponent(secondSnapshotId)) + '/changedblocks?firstSnapshotId=' + (firstSnapshotId == null ? '' : encodeURIComponent(firstSnapshotId)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&maxResults=' + maxResults + '&startingBlockIndex=' + startingBlockIndex + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Returns the block indexes and block tokens for blocks in an Amazon Elastic Block Store snapshot.
		 * Get /snapshots/{snapshotId}/blocks
		 * @param {string} snapshotId The ID of the snapshot from which to get block indexes and block tokens.
		 * @param {string} pageToken The token to request the next page of results.
		 * @param {number} maxResults The number of results to return.
		 * @param {number} startingBlockIndex The block index from which the list should start. The list in the response will start from this block index or the next valid block index in the snapshot.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSnapshotBlocksResponse} Success
		 */
		ListSnapshotBlocks(snapshotId: string, pageToken: string, maxResults: number, startingBlockIndex: number, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListSnapshotBlocksResponse> {
			return this.http.get('/snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '/blocks&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&maxResults=' + maxResults + '&startingBlockIndex=' + startingBlockIndex + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}
	}

}

