import { table, minifyRecords } from '../../utils/airtable';

export default async (req, res) => {
	try {
		const records = await table.select({}).firstPage();

		res.statusCode = 200;
		res.json(minifyRecords(records));
	} catch (err) {
		console.error(err);
		res.statusCode = 500;
		res.json({ message: 'Something went wrong!' });
	}
};
