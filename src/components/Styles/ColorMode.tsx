import React from "react";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {ColorModeContext, CVWebsiteApp} from "../../CVWebsiteApp";
import {getDesignTokens} from "../../theme";

export default function ToggleColorMode(){
    const [isDarkMode] = React.useState<boolean>(useMediaQuery("(prefers-color-scheme: dark)"));
    const [mode, setMode] = React.useState<'light'|'dark'>(isDarkMode ? 'dark' : 'light');

    const colorMode = React.useMemo(() => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    React.useEffect(() => {
        const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            colorMode.toggleColorMode()
        };

        mediaQueryList.addEventListener("change", handleChange);

        return () => {
            mediaQueryList.removeEventListener("change", handleChange);
        };
    }, [colorMode]);

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