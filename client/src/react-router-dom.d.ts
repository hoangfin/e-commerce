import type { FutureConfig as RouterFutureConfig, HydrationState} from "@remix-run/router";

declare module "react-router-dom" {
	export type { Router as RemixRouter } from "@remix-run/router";
	export interface DOMRouterOpts {
		basename?: string;
		future?: Partial<Omit<RouterFutureConfig, "v7_prependBasename">>;
		hydrationData?: HydrationState;
		window?: Window;
	};
}
