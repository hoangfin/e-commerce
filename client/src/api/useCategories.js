import { useQuery } from "@tanstack/react-query";

const fetchCategories = async () => {
    return "Hello";
};

export const useCategories = () => useQuery({
    queryKey: ["categories/list"],
    queryFn: fetchCategories
});
