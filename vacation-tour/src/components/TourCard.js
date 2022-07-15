import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import yosemity from '../images/yosemity.png';

const TourCard = () => {
  return (
    <Grid item xs={3} >
      <Paper elevation={3}>
        <img src={yosemity}
          alt=''
          className='img'
        />

        <Typography variant='subtitle1' component='h2'>
          Camping with Nature
        </Typography>
      </Paper>
    </Grid>
  )
}

export default TourCard;