import { doFetch } from '$lib/util/fetch.js';
import { SPREADSHEETID } from '$env/static/private';

export function load({ fetch }) {
	return {
		sheet: doFetch(fetch, '/api/spreadsheet/' + SPREADSHEETID),
		lsa: doFetch(fetch, '/api/lsa')
	};
}
