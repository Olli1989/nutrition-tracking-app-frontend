import React from 'react'
import { Box, Button, IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function LeftRightButton({prevDisabled, nextDisabled, prevStep, nextStep}) {

    

    return (
        <Box
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        >
            <IconButton
                sx={{ mr:1, borderRadius: '50%', p: 1}}
                color="secondary"
                variant="outlined"
                onClick={prevStep}
                disabled={prevDisabled}
            >
                <ArrowBackIosNewIcon />
            </IconButton>

            <IconButton
                sx={{borderRadius: '50%', p: 1}}
                color="secondary"
                variant="outlined"
                onClick={nextStep}
                disabled={nextDisabled}
            >
                <ArrowForwardIosIcon />
            </IconButton>

        </Box>
    )
}

export default LeftRightButton