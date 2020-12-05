import { table } from '../../utils/airtable';

export default async (req, res) => {
	const { title, description } = req.body;

	try {
		const [{ id, fields }] = await table.create([{ fields: { title, description } }]);

		res.statusCode = 201;
		res.json({
			id,
			fields,
		});
	} catch (err) {
		console.error(err);
		res.statusCode = 500;
		res.json({ message: 'Something went wrong!' });
	}
};
