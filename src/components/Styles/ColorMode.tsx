import React from "react";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {ColorModeContext, CVWebsiteApp} from "../../CVWebsiteApp";
import {getDesignTokens} from "../../theme";

export default function ToggleColorMode(){
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [mode, setMode] = React.useState<'light'|'dark'>(prefersDarkMode ? 'dark' : 'light');
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
                <CVWebsiteApp themeMode={theme.palette.mode}/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
// TODO: Make color mode toggle with user preference