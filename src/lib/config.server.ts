import { env } from '$env/dynamic/private';
import { GOOGLE_AUTH as googleAuth } from '$env/static/private';

export const GOOGLE_AUTH = JSON.parse(googleAuth);
export const LSA_MANAGER_CUSTOMER_ID = env.LSA_MANAGER_CUSTOMER_ID;
export const LSA_CUSTOMER_ID = env.LSA_CUSTOMER_ID;
export const GOOGLE_AUTH_IMPERSONATION = env.GOOGLE_AUTH_IMPERSONATION;
