const { Client } = require("typesense");

const client = new Client({
	nodes: [{
		host: process.env.TYPESENSE_HOST,
		port: process.env.TYPESENSE_PORT,
		protocol: "http"
	}],
	apiKey: process.env.TYPESENSE_API_KEY,
	connectionTimeoutSeconds: 4
});

exports.getPopularQueries = async (query, options) => {
	return await client.collections("search-queries").documents().search({
		q: query,
		query_by: "query",
		sort_by: "count:desc,_text_match:desc"
	});
};
