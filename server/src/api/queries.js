const { getPopularQueries } = require("./typesense");

/**
 * @param {string} query
 * @param {object} [options]
 * @param {number} options.page
 * @param {number} options.hitsPerPage
 *
 * @returns {Promise<string[]>}
 */
exports["getPopularQueries"] = async (query, options) => {
	const computedOptions = {
		page: 1,
		hitsPerPage: 10,
		...options
	};
	return await getPopularQueries(query, computedOptions);
};