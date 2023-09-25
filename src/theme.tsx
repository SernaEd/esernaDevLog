import {createTheme, PaletteMode} from "@mui/material";

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
        fontSize: 16,
    },
    spacing: 6,
    shape: {
        borderRadius: 20,
    }
});



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