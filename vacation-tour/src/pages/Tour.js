import React from 'react'
import {Paper, BottomNavigation, Typography, Container, Box, ImageList } from '@mui/material'
import ImageLists from '../components/ImageLists'
import CustomizedAccordions from '../components/Accordian'
import BasicModal from '../components/Modal'


const Tour = () => {
  return (
    <Container sx={{ width: 900}}>
      <Typography variant='h3' component='h1' marginTop={3}>
        Explore the World in Vegas
      </Typography>

      <Box marginTop={3} sx={{display: "flex"}}>
        <img  
          src='https://images.unsplash.com/photo-1577334928618-2ff2bf09e827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3348&q=80'
          alt=''
          height={325}
        />
        <ImageLists />
      </Box>

      <Box>
        <Typography variant='h6' component='h4' marginTop={3}>About this ticket</Typography>
        <Typography variant='paragraph' component='p' marginTop={3}>
          Las Vegas is known as the Entertainment Capital of the World, and it’s easy to see why. Whether you’re visiting today, next week, next month, or even next year, there’s guaranteed to be an almost-endless variety of events and entertainment to enjoy. Pick your poison: Concerts? Comedy? Magic? Dancing? Better than Broadway shows? Yep, we’ve got all that and much more.
        </Typography>
      </Box>

      <Box marginBottom={10}>
        <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>Frequently Asked Questions</Typography>
        <CustomizedAccordions />
      </Box>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation >
          <BasicModal />
        </BottomNavigation>
      </Paper>

    </Container>
  )
}

export default Tour
