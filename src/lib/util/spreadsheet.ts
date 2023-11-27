import type { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function loadSpreadsheet(serviceAccount: JWT, sheetId: string) {
	const doc = new GoogleSpreadsheet(sheetId, serviceAccount);
	await doc.loadInfo();
	const sheet = doc.sheetsByIndex[0];
	const rows = await sheet.getRows();

	return rows.map((row) => row.toObject());
}
