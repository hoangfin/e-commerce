import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@src/api/firebase";

export const useSignIn = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ email, password }) => signInWithEmailAndPassword(auth, email, password),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["user"]
            });
        }
    });
};
