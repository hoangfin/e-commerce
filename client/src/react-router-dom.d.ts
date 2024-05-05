import type { FutureConfig as RouterFutureConfig, HydrationState} from "@remix-run/router";

declare module "react-router-dom" {
	interface DOMRouterOpts {
		basename?: string;
		future?: Partial<Omit<RouterFutureConfig, "v7_prependBasename">>;
		hydrationData?: HydrationState;
		window?: Window;
	};
}
