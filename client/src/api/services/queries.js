const baseUrl = "http://localhost:3000";

export const getPopularQueries = async (query) => {
	const params = new URLSearchParams({ query });
	const url = new URL(`/queries/search?${params.toString()}`, baseUrl);
	const response = await fetch(url.toString());
	return response.json();
};