import React from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, CVWebsiteApp} from "../../CVWebsiteApp";
import {getDesignTokens} from "../../theme";

export default function ToggleColorMode(){
    const [mode, setMode] = React.useState<'light'|'dark'>('light');
    const colorMode = React.useMemo(() => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme(getDesignTokens(mode)),
        [mode],
    );

    return(
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <CVWebsiteApp/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}