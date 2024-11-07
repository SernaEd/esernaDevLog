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
                <Typography variant="h1" gutterBottom>
                    ¡Hola
                </Typography>
                <Typography variant="h1" gutterBottom>
                    COMCAPLA!
                </Typography>
                <Typography variant="body1" paragraph>
                    Nos complace presentarles nuestra más reciente publicación, presentada en COMCAPLA celebrado en Veracruz, México del 7 de noviembre del 2024.
                    Este trabajo destaca nuestros últimos hallazgos en la <b>Dinámica de dispersión de fermiones de Dirac en el Grafeno</b>, ofreciendo una contribución significativa a la comunidad académica y profesional.
                    A continuación encontrarán algunos ejemplos de las animaciones que se presentaron en la plática así como otras animaciones complementarias.
                </Typography>
            </Box>
    );
};
