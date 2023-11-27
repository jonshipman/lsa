import type { JWT } from 'google-auth-library';

declare global {
	namespace App {
		interface Locals {
			serviceAccountAuth: JWT;
		}
	}
}

export {};
