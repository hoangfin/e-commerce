import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { mirageTheme } from "@src/themes";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { Checkout, OrderHistory, Payment, Product, Search } from "pages";
import Root from "@src/routes/Root";
import Home from "@src/routes/Home";
// import "stores";

/* const stripePromise = loadStripe(
    "pk_test_51LBxovAczuSx9NaantjDoChzPMfN9Xz4FsZjpRwmVwnuIDUIVFxi" +
    "FOMyD066RxmhkGitDNaFZLLSxYLNmMtEzm3b005rgUhRoI"
); */

const queryClient = new QueryClient();

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            {/* <Route path="product/:id" lazy={() => import("@src/routes/Product")}/> */}
            {/* <Route path="order-history" element={<OrderHistory />} /> */}
            {/* <Route
                path="signin"
                loader={async () => "empty"}
                lazy={() => import("@src/routes/Root/Signin")}
            /> */}
            {/* <Route path="cart" lazy={() => import("@src/routes/Cart")} /> */}

            {/* <Route
                path="payment"
                element={
                    <Elements stripe={stripePromise}>
                        <Payment />
                    </Elements>
                }
            /> */}
        </Route>
    ),
    { basename: import.meta.env.BASE_URL }
);

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={mirageTheme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </QueryClientProvider>
    );
};