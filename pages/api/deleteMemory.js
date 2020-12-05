import { table } from '../../utils/airtable';

export default async (req, res) => {
	const { id } = req.body;

	try {
		const [updatedRecord] = await table.destroy([{ id }]);

		res.statusCode = 204;
		res.json({ message: 'Successfully deleted one record.' });
	} catch (err) {
		console.error(err);
		res.statusCode = 500;
		res.json({ message: 'Something went wrong!' });
	}
};
