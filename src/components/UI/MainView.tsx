import {Box} from "@mui/material";
import LoremIpsum from "react-lorem-ipsum";

export const MainView = () => {
    return (
        <Box
            // Turn on to see the box
            // bgcolor="purple"
            flex={4} p={2}
            sx={{maxWidth: '96%', paddingLeft: 6}}>
            MainView
            <LoremIpsum p={20}/>
        </Box>
    );
};
