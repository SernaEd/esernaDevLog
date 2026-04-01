import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type NotFoundPageProps = {
    themeMode?: "light" | "dark";
};

export function NotFoundPage({ themeMode }: NotFoundPageProps) {
    const theme = useTheme();
    const isDark = themeMode ? themeMode === "dark" : theme.palette.mode === "dark";

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
                textAlign: "center",
                background: isDark
                    ? "linear-gradient(180deg, rgba(15,23,42,1) 0%, rgba(2,6,23,1) 100%)"
                    : "linear-gradient(180deg, rgba(245,247,250,1) 0%, rgba(230,236,245,1) 100%)",
                color: "text.primary",
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "6rem", sm: "8rem" },
                        fontWeight: 800,
                        lineHeight: 1,
                        color: "primary.main",
                        textShadow: isDark ? "0 0 24px rgba(25, 118, 210, 0.35)" : "none",
                        mb: 1,
                    }}
                >
                    404
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    ¡Vaya! Te has aventurado demasiado lejos.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                        color: "text.secondary",
                        fontSize: { xs: "1rem", sm: "1.1rem" },
                    }}
                >
                    La página que buscas no existe o ha sido movida a otra dimensión.
                </Typography>

                {/*<Button*/}
                {/*    component={RouterLink}*/}
                {/*    to="/"*/}
                {/*    variant="contained"*/}
                {/*    size="large"*/}
                {/*    sx={{*/}
                {/*        borderRadius: 999,*/}
                {/*        px: 4,*/}
                {/*        py: 1.25,*/}
                {/*        textTransform: "none",*/}
                {/*        fontWeight: 600,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    Regresar a casa*/}
                {/*</Button>*/}
            </Container>
        </Box>
    );
}