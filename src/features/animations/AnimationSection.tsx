import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import PlaceholderCard from '../../components/common/PlaceholderCard';
import { AnimationData } from '../../data/animations';

interface AnimationSectionProps {
    title: string;
    subtitle?: string;
    animations: AnimationData[];
}

export const AnimationSection: React.FC<AnimationSectionProps> = ({ title, subtitle, animations }) => {
    return (
        <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>
            {subtitle && (
                <Typography variant="body1" sx={{ mb: 2 }}>
                    {subtitle}
                </Typography>
            )}
            <Box display="flex" justifyContent="center" sx={{ maxWidth: '96%', pl: 0 }}>
                <Grid container spacing={3} maxWidth="lg">
                    {animations.map((anim) => (
                        <Grid item xs={12} sm={6} md={4} key={anim.title} sx={{ display: 'flex' }}>
                            <PlaceholderCard
                                title={anim.title}
                                videoUrl={anim.videoUrl}
                                description={anim.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};
