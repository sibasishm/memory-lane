import { table, getMinifiedRecord } from '../../utils/airtable';

export default async (req, res) => {
	const { id, fields } = req.body;

	try {
		const [updatedRecord] = await table.update([{ id, fields }]);

		res.statusCode = 200;
		res.json(getMinifiedRecord(updatedRecord));
	} catch (err) {
		console.error(err);
		res.statusCode = 500;
		res.json({ message: 'Something went wrong!' });
	}
};
