import {Navbar} from "./components/UI/Navbar";
import {MainView} from "./components/UI/MainView";
import {Rightbar} from "./components/UI/Rightbar";
import {Box, Grid, PaletteMode, Stack} from "@mui/material";
import React from "react";
import PlaceholderCard from "./components/UI/PlaceholderCard";
import LoremIpsum from "react-lorem-ipsum";
import video1 from './assets/animations/vid1.mp4';
import video2 from './assets/animations/vid2.mp4';
import video3 from './assets/animations/vid3.mp4';
import video4 from './assets/animations/vid4.mp4';
import video5 from './assets/animations/vid5.mp4';
import video6 from './assets/animations/vid6.mp4';
import video7 from './assets/animations/vid7.mp4';
import video8 from './assets/animations/vid8.mp4';
import video9 from './assets/animations/vid9.mp4';

export const ColorModeContext = React.createContext({toggleColorMode: () => {}});

interface CVWebsiteAppProps {
    themeMode: PaletteMode
}


const animationTitles = [
    "Animation 1",
    "Animation 2",
    "Animation 3",
    "Animation 4",
    "Animation 5",
    "Animation 6",
    "Animation 7",
    "Animation 8",
    "Animation 9"
];

const animationDescriptions = [
    "Description for animation 1",
    "Description for animation 2",
    "Description for animation 3",
    "Description for animation 4",
    "Description for animation 5",
    "Description for animation 6",
    "Description for animation 7",
    "Description for animation 8",
    "Description for animation 9"
];

const videoSources = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9
];

export const CVWebsiteApp = ({themeMode}: CVWebsiteAppProps) => {
    return (
        <div>
            <Navbar themeMode={themeMode}/>
            <Stack direction="row" justifyContent="space-between">
                <MainView/>
                <Rightbar/>
            </Stack>
            <Box display="flex" justifyContent="center"
                 sx={{
                    maxWidth: '96%',
                    paddingLeft: 6,
                }}
            >
                <Grid container spacing={3} maxWidth="lg">
                    {videoSources.map((videoUrl, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={animationTitles[index]}
                              sx={{
                                  padding: '8px',
                                  boxSizing: 'border-box',
                                  minWidth: '30%'
                              }}>
                            <PlaceholderCard
                                title={animationTitles[index]}
                                videoUrl={videoUrl}
                                description={animationDescriptions[index]}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <LoremIpsum p={5}/>
            <Box display="flex" justifyContent="center"
                 sx={{
                    maxWidth: '96%',
                    paddingLeft: 6,
                 }}
                 >
                <Grid container spacing={3} maxWidth="lg">
                    {videoSources.map((videoUrl, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={animationTitles[index]}
                              sx={{
                                  padding: '8px',
                                  boxSizing: 'border-box',
                                  minWidth: '30%'
                              }}>
                            <PlaceholderCard/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <LoremIpsum p={5}/>
        </div>
    );
};
