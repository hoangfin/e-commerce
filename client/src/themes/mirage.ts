import { createTheme } from "@mui/material";
// import { cyan } from "@mui/material/colors";

// const { palette } = createTheme();
// const { augmentColor } = palette;

export const mirageTheme = createTheme({
    typography: {
        // fontSize: 16,
        fontFamily: ["Nunito", "Arial", "sans-serif"].join(",")
    },
    components: {
        // MuiButtonBase: {
        //     styleOverrides: {
        //         root: {
        //             "&&:hover": {
        //                 backgroundColor: "transparent"
        //             }
        //         }
        //     }
        // },
        MuiSvgIcon: {
            defaultProps: {
                color: "primary"
            }
        }
    },
    palette: {
		mode: "light"
        // mode: "light",

        // cu: augmentColor({
        //     color: {
        //         main: "#D5D9D9",
        //         light: lighten("#D5D9D9", 0.2),
        //         dark: darken("#D5D9D9", 0.2)
        //     }
        // }),
        // overlay: {
        //     abc: "rgba(5, 75, 89, 0.03)"
        // },
        // gradient: {

        // }
    }
});

console.log(mirageTheme);