import { Outlet } from "react-router-dom";
import { Paper } from "@mui/material";

export default function Root() {
    return (
        <Paper square elevation={0}>
            <Outlet />
        </Paper>
    );
}