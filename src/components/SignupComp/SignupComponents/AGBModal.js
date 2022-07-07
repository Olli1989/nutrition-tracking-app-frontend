import React from 'react'
import { createPortal } from 'react-dom'
import { Box, Paper, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

function AGBModal({open, onClose}) {
  return (
    open ?
      createPortal(
        <Box 
            sx={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems:'center'}}
            onClick = {onClose}
        >
            <Paper
                sx={{position: 'relative', backgroundColor: 'green', height: '500px'}}
            >
                <CloseIcon
                    sx={{position: 'absolute', top: 1, right: 1}}
                    onClick = {onClose}
                />
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

