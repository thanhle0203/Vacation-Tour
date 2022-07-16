import React from 'react'
import { Typography, Container, Box, ImageList } from '@mui/material'
import ImageLists from '../components/ImageLists'


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
    </Container>
  )
}

export default Tour
