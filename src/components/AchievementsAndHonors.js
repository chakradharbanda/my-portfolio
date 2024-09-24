import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const awards = [
  {
    title: 'Certificate of Appreciation 2024',
    description: 'Recognized for exceptional performance and dedication.',
    imgSrc: `${process.env.PUBLIC_URL}/hyper4.png`,
  },
  {
    title: 'Rookie of the Unit Award 2023',
    description: 'Awarded for outstanding contributions to development projects.',
    imgSrc: `${process.env.PUBLIC_URL}/hyper2.jpg`,
  },
  {
    title: 'Certificate of Excellence 2022',
    description: 'Recognized for exceptional performance and dedication.',
    imgSrc: `${process.env.PUBLIC_URL}/hyper1.jpeg`,
  },
];

const AchievementsAndHonors = () => {
  return (
    <Container id="honors">
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {awards.map((award, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined">
              <CardMedia
                component="img"
                image={award.imgSrc}
                alt={award.title}
                sx={{ height: 300, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {award.title}
                </Typography>
                <Typography variant="body2">
                  {award.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AchievementsAndHonors;
