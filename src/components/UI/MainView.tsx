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
                        PÁGINA BAJO DESARROLLO
                    </Typography>
                    <Typography variant="body1" paragraph>
                        SCROLL DOWN TO SEE MORE - DESLICE HACIA ABAJO PARA VER MÁS
                    </Typography>
                    <Typography variant="h6">
                        WEBSITE IN DEVELOPMENT
                    </Typography>
            </Box>
    );
};
