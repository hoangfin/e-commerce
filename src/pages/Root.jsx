import { alpha, Paper } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { AppBar } from "./components/appbar";

export const Root = () => {
    const location = useLocation();
    const isAppBarVisible = location.pathname !== "/signin" && location.pathname !== "/signup";

    return (
        <>
            <Paper square elevation={0}>
                {isAppBarVisible &&
                    <AppBar
                        position="sticky"
                        elevation={0}
                        sx={theme => ({
                            zIndex: 9,
                            top: 0,
                            left: 0,
                            width: "100%",
                            backgroundColor: alpha(theme.palette.background.default, 0.9),
                            backdropFilter: "blur(5px)"
                        })}
                    />
                }
                <Outlet />
            </Paper>
        </>
    );
};

Root.displayName = "Root";
