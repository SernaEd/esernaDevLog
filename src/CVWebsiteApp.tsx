import {Navbar} from "./components/UI/Navbar";
import {MainView} from "./components/UI/MainView";
import {Rightbar} from "./components/UI/Rightbar";
import {Box, Grid, PaletteMode, Stack, Typography} from "@mui/material";
import React from "react";
import PlaceholderCard from "./components/UI/PlaceholderCard";
// import LoremIpsum from "react-lorem-ipsum";
import video1 from './assets/animations/vid1.mp4';
import video2 from './assets/animations/vid2.mp4';
import video3 from './assets/animations/vid3.mp4';
import video4 from './assets/animations/vid4.mp4';
import video5 from './assets/animations/vid5.mp4';
import video6 from './assets/animations/vid6.mp4';
import video7 from './assets/animations/vid7.mp4';
import video8 from './assets/animations/vid8.mp4';
import video9 from './assets/animations/vid9.mp4';
import comcapla from "./assets/ComcaplaBanner.png";
import DownloadPptxWithThumbnailComponent from "./components/UI/DownloadPptxWithThumbnailComponent";
import DownloadPaperWithThumbnailComponent from "./components/UI/DownloadPaperWithThumbnailComponent";

export const ColorModeContext = React.createContext({toggleColorMode: () => {}});

interface CVWebsiteAppProps {
    themeMode: PaletteMode
}

const animation1DTitles = [
    "Evolución Rápida",
    "Reflexión Total"
]

const animation1DDescriptions = [
    "Dispersión en Grafeno Prístino sin número de onda inicial y sin interacción espín-órbita tipo Rashba (SOIR)",
    "Caso de estudio en donde la resonancia dentro de la caja produce una transmisión ANTI-Klein (Con presencia de SOIR)"
]

const animation1DVideos = [
    video1,
    video2
]

const animation2DTitles = [
    "Pseudospin = (1,0) (low-res)",
    "Pseudospin = (1,0) (low-res)",
    "Pseudospin = (1,1) (low-res)",
    "Pseudospin = (1,i) (low-res)",
    "Pseudospin = (1,e^(i * pi / 4)) (low-res)",
    "Pseudospin = (1,0) (HIGH-res)"
]

const animation2DDescriptions = [
    "Se observa el paquete formando ondas similares a las de agua esparciéndose, con 2 \"picos“ dirigiéndose en ambos sentidos de \"y\"",
    "Paquete dispersándose a lo largo de \"x“ y de \"y\" simultáneamente, formando una especie de cilindro",
    "Se forma también parte del cilindro, pero sobre \"x\" se ve que de un lado no tiene altura",
    "Ahora el paquete se dispersa sólo en un sentido",
    "La dispersión ocurre en forma de luna menguante, cargada en una direccción y sentido",
    "Al ser de alta resolución, no se aprecia tanto la dispersión, se necesita una caja más grande"
]

const animation2DVideos = [
    video4,
    video5,
    video6,
    video7,
    video8,
    video9
]

const animationTitles = [
    "Representación visual del método de diferencias finitas para el caso de propagación en 2D",
];

const animationDescriptions = [
    "Una vez que el espacio se ha recorrido, empieza de nuevo desde el punto inicial, y se repite el proceso para cada paso en el tiempo."
];

const videoSources = [
    video3
];

export const CVWebsiteApp = ({themeMode}: CVWebsiteAppProps) => {
    return (
        <div>
            <Navbar themeMode={themeMode}/>
            <Stack direction="row" justifyContent="space-between" sx={{
                maxWidth: "100%"
            }}>
                <MainView/>
                <Rightbar/>
            </Stack>
            <Stack direction="row" justifyContent="center">
                <img src={comcapla} alt="Comcapla banner" width="100%"/>
            </Stack>
            <Stack direction="column" alignContent="center"
                   sx={{
                       maxWidth: '96%',
                       paddingLeft: 6,
                       paddingRight: 6,
                       paddingTop: 6,
                       paddingBottom: 6,
                       margin: 'auto',
                       marginTop: 10,
                       marginBottom: 10,
                   }}>
                <Typography variant="h5">
                    Animaciones de Evolución Temporal de Paquetes de Onda (Propagación 1D)
                </Typography>
                <Box display="flex" justifyContent="center"
                     sx={{
                         maxWidth: '96%',
                         paddingLeft: 6,
                     }}
                >
                    <Grid container spacing={3} maxWidth="lg">
                        {animation1DVideos.map((videoUrl, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={animation1DTitles[index]}
                                  sx={{
                                      padding: '8px',
                                      boxSizing: 'border-box',
                                      minWidth: '30%'
                                  }}>
                                <PlaceholderCard
                                    title={animation1DTitles[index]}
                                    videoUrl={videoUrl}
                                    description={animation1DDescriptions[index]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Typography variant="h5">
                    Animaciones de Evolución Temporal de Paquetes de Onda (Propagación 2D)
                </Typography>
                <Typography variant="body1">
                    Las siguientes animaciones muestran la propagación orientada sobre el eje "y".
                </Typography>
                <Box display="flex" justifyContent="center"
                     sx={{
                         maxWidth: '96%',
                         paddingLeft: 6,
                     }}
                >
                    <Grid container spacing={3} maxWidth="lg">
                        {animation2DVideos.map((videoUrl, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={animation2DTitles[index]}
                                  sx={{
                                      padding: '8px',
                                      boxSizing: 'border-box',
                                      minWidth: '30%'
                                  }}>
                                <PlaceholderCard
                                    title={animation2DTitles[index]}
                                    videoUrl={videoUrl}
                                    description={animation2DDescriptions[index]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Typography variant="h5">
                    Animaciones complementarias
                </Typography>
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
                <Typography variant="h5">
                    Abstract del Proyecto
                </Typography>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                En este trabajo, presentamos un análisis teórico-computacional de los efectos de la interacción espín-órbita tipo Rashba (SOIR) en la dinámica y dispersión cuántica de fermiones de Dirac (fD) en el grafeno mono-capa (MLG).
                                Usando una aproximación de un paquete de ondas gaussiano (GWP), calculamos la evolución temporal del GWP, para diferentes valores de su número de onda, la energía inicial y la intensidad de la barrera de potencial.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
                            <DownloadPptxWithThumbnailComponent/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1">
                                Mostramos que la SOIR provoca un cambio en la apariencia y en la intensidad del coeficiente de transmisión.
                                Esto aporta una importante cuestión a la investigación del grafeno, debido a que en el MLG no se había detectado variaciones en el coeficiente de transmisión bajo una incidencia normal.
                                Finalmente, se muestra una nueva propuesta para calcular la densidad de corriente de probabilidad de un flujo de fD en el MLG con interferencia de canales, algo que no se había reportado en la literatura.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Typography variant="h5">
                    Artículo completo
                </Typography>
                <DownloadPaperWithThumbnailComponent/>
            </Stack>
        </div>
    );
};
