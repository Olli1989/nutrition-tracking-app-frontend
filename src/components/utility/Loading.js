import React from 'react'
import { Typography, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <CircularProgress color="primary" />
        <Typography color="primary" variant="h4" component="h1" sx={{mt: 2}}>Loading</Typography>
      </Box>
    </Box>
  )
}

export default Loading