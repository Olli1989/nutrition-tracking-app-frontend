import React from 'react'
import { Box, Typography } from '@mui/material'

import Main from '../../layout/Main'

function Impressum() {
  return (
    <Main>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3}}>
            <Box sx={{textAlign: 'center'}}>
                <Typography variant="h1" component="h4">Impressum</Typography>
                <Typography>Max Mustermann</Typography>
                <Typography>Musterstraße 12</Typography>
                <Typography>0650/1234567</Typography>
            </Box>
        </Box>
    </Main>

  )
}

export default Impressum