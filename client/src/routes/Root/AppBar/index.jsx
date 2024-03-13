import { forwardRef } from "react";
import { Container, Link, AppBar as MuiAppBar, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { SearchModal } from "./SearchModal";
import { ToolBar } from "./ToolBar";
import { Logo } from "@src/icons";

/** @type {import("react").ForwardRefRenderFunction<?, import("@mui/material").AppBarProps>} */
export const AppBar = forwardRef(function AppBar(props, ref) {

	return (
		<MuiAppBar {...props} ref={ref}>
			<Container>
				<Link component={RouterLink} to="/">
					<Logo sx={{ width: "auto", height: "36px" }} />
				</Link>
				<ToolBar />
			</Container>
			<SearchModal />
		</MuiAppBar>
	);

});