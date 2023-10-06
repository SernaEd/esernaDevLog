import {Navbar} from "./components/UI/Navbar";
import {MainView} from "./components/UI/MainView";
import {Rightbar} from "./components/UI/Rightbar";
import {PaletteMode, Stack} from "@mui/material";
import React from "react";
import PlaceholderCard from "./components/UI/PlaceholderCard";
import LoremIpsum from "react-lorem-ipsum";

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
            <Stack direction="row" justifyContent="space-evenly">
                <PlaceholderCard/>
                <PlaceholderCard/>
                <PlaceholderCard/>
            </Stack>
            <Stack direction="row" justifyContent="space-evenly">
                <PlaceholderCard/>
                <PlaceholderCard/>
                <PlaceholderCard/>
            </Stack>
            <LoremIpsum p={5}/>
            <Stack direction="row" justifyContent="space-evenly">
                <PlaceholderCard/>
                <PlaceholderCard/>
                <PlaceholderCard/>
            </Stack>
            <Stack direction="row" justifyContent="space-evenly">
                <PlaceholderCard/>
                <PlaceholderCard/>
                <PlaceholderCard/>
            </Stack>
            <Stack direction="row" justifyContent="space-evenly">
                <PlaceholderCard/>
                <PlaceholderCard/>
                <PlaceholderCard/>
            </Stack>
            <LoremIpsum p={5}/>
            <Stack direction="row" justifyContent="space-evenly">
                <PlaceholderCard/>
                <PlaceholderCard/>
                <PlaceholderCard/>
            </Stack>
            <Stack direction="row" justifyContent="space-evenly">
                <PlaceholderCard/>
                <PlaceholderCard/>
                <PlaceholderCard/>
            </Stack>
            <Stack direction="row" justifyContent="space-evenly">
                <PlaceholderCard/>
                <PlaceholderCard/>
                <PlaceholderCard/>
            </Stack>
            <LoremIpsum p={5}/>
            <Stack direction="row" justifyContent="space-evenly">
                <PlaceholderCard/>
                <PlaceholderCard/>
                <PlaceholderCard/>
            </Stack>
            
        </div>
    );
};
