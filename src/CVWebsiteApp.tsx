import {Navbar} from "./components/UI/Navbar";
import {MainView} from "./components/UI/MainView";
import {Rightbar} from "./components/UI/Rightbar";
import {PaletteMode, Stack} from "@mui/material";
import React from "react";

export const ColorModeContext = React.createContext({toggleColorMode: () => {}});

interface CVWebsiteAppProps {
    themeMode: PaletteMode
}

export const CVWebsiteApp = ({themeMode}: CVWebsiteAppProps) => {
    return (
        <div>
            <Navbar themeMode={themeMode}/>
            <Stack direction="row" justifyContent="space-between">
                <MainView/>
                <Rightbar/>
            </Stack>
        </div>
    );
};
