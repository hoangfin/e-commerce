import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { userQueryKey } from "api/query-key-factory";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@src/api/firebase";

export const useSignUp = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ email, password }) => createUserWithEmailAndPassword(auth, email, password),

        onSuccess: (newUser) => {
            queryClient.invalidateQueries({
                queryKey: ["user"]
            })
        }
    });
};