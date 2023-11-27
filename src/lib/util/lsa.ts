import { LSA_MANAGER_CUSTOMER_ID } from '$lib/config.server';
import { localservices } from '@googleapis/localservices';
import type { JWT } from 'google-auth-library';

export async function lsa(serviceAccount: JWT) {
	const googleLocalservices = localservices({ version: 'v1', auth: serviceAccount });
	const response = await googleLocalservices.detailedLeadReports.search({
		query: `manager_customer_id:${LSA_MANAGER_CUSTOMER_ID};customer_id:${LSA_MANAGER_CUSTOMER_ID}`,
		pageSize: 5,
		'endDate.day': 0,
		'endDate.month': 0,
		'endDate.year': 0,
		'startDate.day': 0,
		'startDate.month': 0,
		'startDate.year': 0
	});

	return response.data;
}
