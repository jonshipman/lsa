import { doFetch } from '$lib/util/fetch.js';

export function load({ fetch }) {
	return {
		sheet: doFetch(fetch, '/api/spreadsheet/1KGWHdNAw4F4hI2E0MwzpUYKpkeD9UeIzKGb6MarfNH4'),
		lsa: doFetch(fetch, '/api/lsa')
	};
}
