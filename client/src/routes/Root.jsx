import { Outlet } from "react-router-dom";
import { Paper } from "@mui/material";
import { AppBar } from "./components";

export const Root = () =>
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
    </Paper>;

Root.displayName = "Root";
