import React from 'react';
import { Box, Grid, Stack, Typography, PaletteMode } from "@mui/material";
import { Navbar } from "./components/common/Navbar";
import { MainView } from "./components/common/MainView";
import { Rightbar } from "./components/common/Rightbar";
import comcapla from "./assets/ComcaplaBanner.png";
import DownloadPptxWithThumbnailComponent from "./components/common/DownloadPptxWithThumbnailComponent";
import DownloadPaperWithThumbnailComponent from "./components/common/DownloadPaperWithThumbnailComponent";
import { animation1D, animation2D, animationComplementary } from './data/animations';
import { AnimationSection } from './features/animations/AnimationSection';

interface CVWebsiteAppProps {
    themeMode: PaletteMode;
}

export const CVWebsiteApp: React.FC<CVWebsiteAppProps> = ({ themeMode }) => {
    return (
        <Box>
            <Navbar themeMode={themeMode} />
            <Stack direction="row" justifyContent="space-between" sx={{ maxWidth: "100%" }}>
                <MainView />
                <Rightbar />
            </Stack>
            
            <Stack direction="row" justifyContent="center">
                <Box component="img" src={comcapla} alt="Comcapla banner" sx={{ width: '100%' }} />
            </Stack>


            <Stack
                direction="column"
                sx={{
                    maxWidth: '96%',
                    px: { xs: 2, sm: 6 },
                    py: 6,
                    mx: 'auto',
                    my: 10,
                }}
            >
                <AnimationSection
                    title="Animaciones de Evolución Temporal de Paquetes de Onda (Propagación 1D)"
                    animations={animation1D}
                />

                <AnimationSection
                    title="Animaciones de Evolución Temporal de Paquetes de Onda (Propagación 2D)"
                    subtitle="Las siguientes animaciones muestran la propagación orientada sobre el eje 'y'."
                    animations={animation2D}
                />

                <AnimationSection
                    title="Animaciones complementarias"
                    animations={animationComplementary}
                />

                <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                    Abstract del Proyecto
                </Typography>
                <Box sx={{ mb: 6 }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={8}>
                            <Typography variant="body1" paragraph>
                                En este trabajo, presentamos un análisis teórico-computacional de los efectos de la interacción espín-órbita tipo Rashba (SOIR) en la dinámica y dispersión cuántica de fermiones de Dirac (fD) en el grafeno mono-capa (MLG).
                                Usando una aproximación de un paquete de ondas gaussiano (GWP), calculamos la evolución temporal del GWP, para diferentes valores de su número de onda, la energía inicial y la intensidad de la barrera de potencial.
                            </Typography>
                            <Typography variant="body1">
                                Mostramos que la SOIR provoca un cambio en la apariencia y en la intensidad del coeficiente de transmisión.
                                Esto aporta una importante cuestión a la investigación del grafeno, debido a que en el MLG no se había detectado variaciones en el coeficiente de transmisión bajo una incidencia normal.
                                Finalmente, se muestra una nueva propuesta para calcular la densidad de corriente de probabilidad de un flujo de fD en el MLG con interferencia de canales, algo que no se había reportado en la literatura.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <DownloadPptxWithThumbnailComponent />
                        </Grid>
                    </Grid>
                </Box>

                <Typography variant="h5" gutterBottom>
                    Artículo completo
                </Typography>
                <DownloadPaperWithThumbnailComponent />
            </Stack>

        </Box>
    );
};
