import { GOOGLE_AUTH, GOOGLE_AUTH_IMPERSONATION } from '$lib/config.server';
import { JWT } from 'google-auth-library';

const allowedHeaders = ['retry-after', 'content-type', 'x-goog-api-client', 'authorization'];

const SERVICE_ACCOUNT_AUTH = new JWT({
	email: GOOGLE_AUTH.client_email,
	key: GOOGLE_AUTH.private_key,
	subject: GOOGLE_AUTH_IMPERSONATION,
	scopes: [
		'https://www.googleapis.com/auth/spreadsheets',
		'https://www.googleapis.com/auth/adwords'
	]
});

export async function handle({ event, resolve }) {
	event.locals.serviceAccountAuth = SERVICE_ACCOUNT_AUTH;

	const response = await resolve(event, {
		filterSerializedResponseHeaders: (name) => allowedHeaders.includes(name)
	});

	return response;
}
