import React from 'react'
import { createPortal } from 'react-dom'
import { Box, Paper, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

function AGBModal({open, onClose}) {
  return (
    open ?
      createPortal(
        <Box 
            sx={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems:'center', backgroundColo: 'red', position: 'fixed', top: 0, left: 0, right: 0, p: 1}}
            onClick = {onClose}
        >
            <Paper
                sx={{display: 'flex', justifyContent: 'center', alignItems:'center', position: 'relative', top: 4, left: 4, backgroundColor: 'rgb(209, 209, 209)', height: '500px', p:2}}
            >
              <IconButton
                sx={{position: 'absolute', top: 1, right: 1}}
                onClick = {onClose}
              >
                <CloseIcon/>
              </IconButton>
              <Typography variant="h6">
                  This project is way too small for real AGB's just enjoy the stay
              </Typography>
            </Paper>
        </Box>
        
      ,document.body)
    :
      null
  )
}

export default AGBModal

