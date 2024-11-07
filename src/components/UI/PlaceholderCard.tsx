import React from 'react';
import {Card, CardContent, Typography, Skeleton, CardMedia} from '@mui/material';

interface CardProps {
    title?: string;
    videoUrl?: string;
    description?: string;
}

const PlaceholderCard: React.FC<CardProps> = ({ title, videoUrl, description }) => {
    return (
        <Card variant="outlined" style={{ minWidth: '100%', margin: 6 }}>
            {videoUrl ? (
                <CardMedia component="video" height="100%" src={videoUrl} controls />
            ) : (
                <Skeleton variant="rectangular" height={150} animation="wave" />
            )}
            <CardContent>
                <Typography variant="h6">
                    {title ?? <Skeleton animation="wave" />}
                </Typography>
                <Typography variant="body2">
                    {description ?? <Skeleton animation="wave" />}
                </Typography>
                {/*<Typography variant="body2">*/}
                {/*    <Skeleton animation="wave" />*/}
                {/*</Typography>*/}
            </CardContent>
        </Card>
    );
};

export default PlaceholderCard;