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

const getProductByID = async (id) => {
    const searchParams = {
        q: "*",
        filter_by: `productID:=${id}`
    };
    const response = await typesenseClient.collections("products").documents().search(searchParams);
    return response.found ? response.hits[0].document : null;
};

export const useProduct = (id) => useQuery({
    queryKey: ["products", "detail", id],
    queryFn: () => getProductByID(id),
    staleTime: Infinity,
    enabled: Boolean(id)
});
