import { loadSpreadsheet } from '$lib/util';
import { json } from '@sveltejs/kit';

export async function GET({ locals, params }) {
	const sheet = await loadSpreadsheet(locals.serviceAccountAuth, params.id);
	return json(sheet);
}
