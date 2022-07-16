import React from 'react';
import { Paper, Grid, Typography, Box } from '@mui/material';
import yosemity from '../images/yosemity.png';
import { AccessTime } from '@mui/icons-material';

const TourCard = () => {
  return (
    <Grid item xs={3} >
      <Paper elevation={3}>
        <img src={yosemity}
          alt=''
          className='img'
        />
        <Box paddingX={1}>
          <Typography variant='subtitle1' component='h2'>
            Camping with Nature
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <AccessTime sx={{width: 12.5}} />
          <Typography variant='body2' component='p' marginLeft={0.5}>
            5 hours
          </Typography>
        </Box>
        
      </Paper>
    </Grid>
  )
}

export default TourCard;