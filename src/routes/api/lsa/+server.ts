import { lsa } from '$lib/util';
import { json } from '@sveltejs/kit';

export async function GET({ locals }) {
	const test = await lsa(locals.serviceAccountAuth);
	return json(test);
}
