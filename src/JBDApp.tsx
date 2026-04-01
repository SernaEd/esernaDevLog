import React from 'react';
import { Box, Stack, Typography, PaletteMode } from "@mui/material";
import { Navbar } from "./components/common/Navbar";
import { AnimationSection } from './features/animations/AnimationSection';
import {EvoTrasMix, EvoTrasNoMix, EvoTuneMix, EvoTuneNoMix} from "./data/simulations";

interface JBDAppProps {
    themeMode: PaletteMode;
}

export const JBDApp: React.FC<JBDAppProps> = ({ themeMode }) => {
    return (
        <Box>
            <Navbar themeMode={themeMode} />
            {/*<Stack direction="row" justifyContent="space-between" sx={{ maxWidth: "100%" }}>*/}
            {/*    <MainView />*/}
            {/*</Stack>*/}

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
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    Nanowire-Holes Quantum Scattering
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
                    Influenced by Rashba spin-orbit coupling and spin-polarized phenomena. Video simulation.
                </Typography>

                <AnimationSection
                    title="EvoTrasMix"
                    subtitle="Framework: We develop a rigorous mathematical framework ... using a Crank-Nicolson finite-difference scheme."
                    animations={EvoTrasMix}
                />

                <AnimationSection
                    title="EvoTrasNoMix"
                    subtitle="Observation: In the uncoupled regime, ... ."
                    animations={EvoTrasNoMix}
                />

                <AnimationSection
                    title="EvoTuneMix"
                    subtitle="Results: When ... ."
                    animations={EvoTuneMix}
                />

                <AnimationSection
                    title="EvoTuneNoMix"
                    subtitle="Summary: We ... ."
                    animations={EvoTuneNoMix}
                />

                <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid', borderColor: 'divider', textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        © 2026 Scientific Research Dept. All rights reserved. Confidential Data.
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};
