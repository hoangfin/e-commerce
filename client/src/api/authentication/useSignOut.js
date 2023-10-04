import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const useSignOut = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => signOut(auth),
        onSuccess: () => {
            queryClient.removeQueries("user");
        }
    });
};
