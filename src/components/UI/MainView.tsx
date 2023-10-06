import {Box, Typography} from "@mui/material";

export const MainView = () => {
    return (
            <Box
                // Turn on to see the box
                // bgcolor="purple"
                sx={{
                    maxWidth: '96%', 
                    paddingLeft: 6,
                    height: '100vh',
                    paddingTop: '20%'
                }}
                >
                    <Typography variant="h4" gutterBottom>
                        Everything can be done!
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Hello! In this website you will find everything you need to know about me.
                        <br/>
                        And if not, you can just ask!
                    </Typography>
                    <Typography variant="h6">
                        WEBSITE IN DEVELOPMENT
                    </Typography>
            </Box>
    );
};
