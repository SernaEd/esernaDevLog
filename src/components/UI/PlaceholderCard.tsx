import React from 'react';
import { Card, CardContent, Typography, Skeleton } from '@mui/material';

const PlaceholderCard: React.FC = () => {
  return (
    <Card variant="outlined" style={{ maxWidth: 300, margin: 6, minWidth: '30%' }}>
      <Skeleton variant="rectangular" height={150} animation="wave" />
      <CardContent>
        <Typography variant="h5">
          <Skeleton animation="wave" />
        </Typography>
        <Typography variant="body2">
          <Skeleton animation="wave" />
        </Typography>
        <Typography variant="body2">
          <Skeleton animation="wave" />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlaceholderCard;