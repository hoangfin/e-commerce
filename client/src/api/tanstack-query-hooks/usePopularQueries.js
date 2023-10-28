import { useQuery } from "@tanstack/react-query";
import { getPopularQueries } from "../services/queries";

export const usePopularQueries = query => useQuery({
    queryKey: ["popular-queries", "list", { query }],
    queryFn: () => getPopularQueries(query),
    staleTime: 60000,
    enabled: Boolean(query)
});

