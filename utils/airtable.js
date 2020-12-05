const Airtable = require('airtable');

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE_ID
);

const table = base(process.env.AIRTABLE_TABLE_NAME);

const minifyRecords = records => records.map(getMinifiedRecord);

const getMinifiedRecord = ({ fields, id }) => {
	if (!fields.private) {
		fields.private = false;
	}
	if (!fields.attachments) {
		fields.attachments = [];
	}
	return {
		id,
		fields,
	};
};

export { table, minifyRecords, getMinifiedRecord };
