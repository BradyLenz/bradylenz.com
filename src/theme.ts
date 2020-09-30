import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let themeBase = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: "#282c34"
        }
    }
});

export const theme = responsiveFontSizes(themeBase);
