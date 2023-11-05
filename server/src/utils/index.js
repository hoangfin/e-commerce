/**
 * @callback asyncExpressMiddleware
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {function(): void} [next]
 *
 * @returns {Promise<void>}
 */

/**
 *
 * @param {asyncExpressMiddleware} fn
 *
 * @returns {asyncExpressMiddleware}
 *
 */
exports.asyncHandler = fn => {
	return async (req, res, next) => {
		try {
			await fn(req, res, next);
		} catch (error) {
			next(error);
		}
	};
};