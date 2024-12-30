import React from "react";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {ColorModeContext, CVWebsiteApp} from "../../CVWebsiteApp";
import {getDesignTokens} from "../../theme";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

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
                <BrowserRouter>
                    <Routes>
                        <Route path={'/COMCAPLA2024'} element={<CVWebsiteApp themeMode={theme.palette.mode}/>}/>
                        <Route path="*" element={<Navigate to="/COMCAPLA2024" replace/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}