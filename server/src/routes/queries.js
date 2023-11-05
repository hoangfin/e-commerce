const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const { getPopularQueries } = require("../api/queries");

router.get("/popular-queries", asyncHandler(async (req, res) => {
	const { query } = req.query;
	const queries = await getPopularQueries(query);
	res.json(queries);
}));

module.exports = router;