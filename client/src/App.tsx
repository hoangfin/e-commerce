import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "@src/routes";
import { ThemeProvider } from "@mui/material";
import { mirageTheme } from "@src/themes";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { Checkout, OrderHistory, Payment, Product, Search } from "pages";

// import "stores";

/* const stripePromise = loadStripe(
    "pk_test_51LBxovAczuSx9NaantjDoChzPMfN9Xz4FsZjpRwmVwnuIDUIVFxi" +
    "FOMyD066RxmhkGitDNaFZLLSxYLNmMtEzm3b005rgUhRoI"
); */

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={mirageTheme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </QueryClientProvider>
    );
};