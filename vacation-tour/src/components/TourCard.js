import React from 'react';
import { Paper, Grid } from '@mui/material';
import yosemity from '../images/yosemity.png';

const TourCard = () => {
  return (
    <Grid item xs={3} >
      <Paper elevation={3}>
        <img src={yosemity}
          alt=''
          className='img'
        />
      </Paper>
    </Grid>
  )
}

export default TourCard;