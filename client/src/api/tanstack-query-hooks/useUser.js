import { useQuery } from "@tanstack/react-query";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@src/api/firebase";

const getCurrentUser = () => new Promise(resolve => {
    const unsub = onAuthStateChanged(auth, authUser => {
        unsub();
        resolve(authUser);
    });

});

export const useUser = () => useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    // initialData: JSON.parse(localStorage.getItem("user")),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
});