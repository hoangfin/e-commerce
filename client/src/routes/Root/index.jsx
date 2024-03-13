import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";
import { Paper } from "@mui/material";

export default function Root() {
    return (
        <Paper square elevation={0}>
			<AppBar
				position="sticky"
				color="transparent"
				elevation={0}
				sx={theme => ({
					paddingY: 1,
					borderBottom: `1px solid ${theme.palette.divider}`
				})}
			/>
            <Outlet />
        </Paper>
    );
}
