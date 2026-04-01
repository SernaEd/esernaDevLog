import React from "react";
import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {getDesignTokens} from "./theme";
import {CVWebsiteApp} from "./CVWebsiteApp";
import { ColorModeContext } from "./context/ColorModeContext";
import { UserProvider } from "./context/UserContext";
import { NetworkStatusProvider } from "./context/NetworkStatusContext";
import { CustomPage } from "./components/custom/CustomPage";

import { JBDApp } from "./JBDApp";
import {NotFoundPage} from "./components/common/NotFound";

export default function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [mode, setMode] = React.useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

    React.useEffect(() => {
        setMode(prefersDarkMode ? 'dark' : 'light');
    }, [prefersDarkMode]);

    const colorMode = React.useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    }), []);

    const theme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    return (
        <NetworkStatusProvider>
            <UserProvider>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <BrowserRouter>
                            <Routes>
                                <Route path='/COMCAPLA2024' element={<CVWebsiteApp themeMode={theme.palette.mode} />} />
                                <Route path='/jbd' element={<JBDApp themeMode={theme.palette.mode} />} />
                                <Route path='/404' element={<NotFoundPage themeMode={theme.palette.mode} />} />
                                <Route path="/:path" element={<CustomPage themeMode={theme.palette.mode} />} />
                                <Route path="*" element={<Navigate to="/404" replace />} />
                            </Routes>
                        </BrowserRouter>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </UserProvider>
        </NetworkStatusProvider>
    );
}
