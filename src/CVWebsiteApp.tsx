import {Navbar} from "./components/UI/Navbar";
import {MainView} from "./components/UI/MainView";
import {Rightbar} from "./components/UI/Rightbar";
import {Stack} from "@mui/material";
import React from "react";

export const ColorModeContext = React.createContext({toggleColorMode: () => {}});

export const CVWebsiteApp = () => {
    return (
        <div>
            <Navbar/>
            <Stack direction="row" justifyContent="space-between">
                <MainView/>
                <Rightbar/>
            </Stack>
        </div>
    );
};
