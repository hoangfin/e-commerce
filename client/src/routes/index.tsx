import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import type { DOMRouterOpts, RouteObject } from "react-router-dom";
import type { Router as RemixRouter } from "@remix-run/router";
import Root from "@src/routes/Root";
import Home from "@src/routes/Home";

const routes: RouteObject[] = createRoutesFromElements(
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
);

const opts: DOMRouterOpts = { basename: import.meta.env.BASE_URL };

export const router: RemixRouter = createBrowserRouter(routes, opts);
