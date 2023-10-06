import {createTheme, PaletteMode} from "@mui/material";
import darkBanner from "./assets/DarkBanner.png";

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                primary: {
                    main: '#289279',
                },
                secondary: {
                    main: '#ab47bc',
                },
                text: {
                    primary: '#030f0e',
                    secondary: 'rgba(3,15,14,0.6)',
                    disabled: 'rgba(3,15,14,0.4)',
                },
                error: {
                    main: '#E32E22',
                },
                warning: {
                    main: '#ed6c02',
                },
                divider: 'rgba(20,110,88,0.36)',
            } : {
                primary: {
                    main: '#00df81',
                },
                secondary: {
                    main: '#ab47bc',
                },
                error: {
                    main: '#E32E22',
                },
                warning: {
                    main: '#ffff00',
                },
                divider: 'rgba(20,110,88,0.36)',
                success: {
                    main: '#0BE362',
                },
                background: {
                    default: '#030f0e',
                    paper: '#030f0e',
                },
                text: {
                    primary: '#e4ffff',
                },
            }),
    },
    typography: {
        fontFamily: 'Montserrat',
        fontSize: 18,
    },
    spacing: 6,
    shape: {
        borderRadius: 20,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                body {
                    background-image: url('${darkBanner}'); /* Your background image path */
                    background-size: cover;
                    background-repeat: no-repeat;
                    height: 100vh;
                    margin: 0;
                    scrollbar-color: ${mode === 'dark' ? '#289279' : '#00df81'} ${mode === 'dark' ? '#333' : '#fff'};
                    scrollbar-width: thin;

                    /* For Microsoft Edge and other Webkit browsers */
                    &::-webkit-scrollbar {
                        width: 12px;
                    }
                    &::-webkit-scrollbar-track {
                        background: ${mode === 'dark' ? '#333' : '#fff'};
                    }
                    &::-webkit-scrollbar-thumb {
                        background-color: ${mode === 'dark' ? '#289279' : '#00df81'};
                        border-radius: 20px;
                        border: 3px solid ${mode === 'dark' ? '#333' : '#fff'};
                        background-clip: padding-box;
                        box-shadow: inset 0 0 14px 14px ${mode === 'dark' ? '#289279' : '#00df81'}, 
                                    inset -1px -1px 0px 16px ${mode === 'dark' ? '#333' : '#fff'};
                    }
                }
            `,
        },
    },
});

// TODO: Insert Light Mode Background!



export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00df81',
        },
        secondary: {
            main: '#ab47bc',
        },
        error: {
            main: '#E32E22',
        },
        warning: {
            main: '#ffff00',
        },
        divider: 'rgba(20,110,88,0.36)',
        success: {
            main: '#0BE362',
        },
        background: {
            default: '#030f0e',
            paper: '#030f0e',
        },
        text: {
            primary: '#e4ffff',
        },
    },
    typography: {
        fontFamily: 'Montserrat',
        fontSize: 16,
    },
    spacing: 6,
    shape: {
        borderRadius: 20,
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#289279',
        },
        secondary: {
            main: '#ab47bc',
        },
        text: {
            primary: '#030f0e',
            secondary: 'rgba(3,15,14,0.6)',
            disabled: 'rgba(3,15,14,0.4)',
        },
        error: {
            main: '#E32E22',
        },
        warning: {
            main: '#ed6c02',
        },
        divider: 'rgba(20,110,88,0.36)',
    },
    typography: {
        fontFamily: 'Montserrat',
        fontSize: 16,
    },
    spacing: 6,
    shape: {
        borderRadius: 20,
    },
});