import { useQuery } from "@tanstack/react-query";
import { Client } from "typesense";

const typesenseClient = new Client({
    "nodes": [{
        "host": import.meta.env.VITE_TYPESENSE_HOST,
        "port": import.meta.env.VITE_TYPESENSE_PORT,
        "protocol": "http"
    }],
    "apiKey": import.meta.env.VITE_TYPESENSE_API_KEY,

    "connectionTimeoutSeconds": 5
});

const fetchProducts = async ({ query, page }) => {
    console.log("fetchProducts");
    const searchParams = {
        q: query,
        query_by: "title",
        page,
        sort_by: "_text_match:desc",
        num_typos: 0,
        per_page: 12,
        exhaustive_search: true
    };
    const response = await typesenseClient.collections("products").documents().search(searchParams);
    console.log(response);
    return {
        products: response.hits.map(hit => hit.document),
        page: response.page,
        found: response.found
    };
};

export const useProductSearch = ({ query, page }) => useQuery({
    queryKey: ["products", "list", { query, page }],
    queryFn: () => fetchProducts({ query, page }),
    // initialData: "I am initialdata",
    staleTime: 60000,
    enabled: Boolean(query && page)
});

