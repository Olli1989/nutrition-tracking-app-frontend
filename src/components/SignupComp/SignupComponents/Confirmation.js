import React, { useState } from 'react'
import { Typography, Checkbox, Box, Button } from '@mui/material'

import AGBModal from './AGBModal'

function Confirmation({handleChange, values}) {
  const [openAGBModal, setOpenAGBModal] = useState(false)

  console.log(openAGBModal)
  return (
    <>
      <Typography variant="h5" component="h3" sx={{textAlign: 'center', mb: 1.5}}>
        Confirmation
      </Typography>

      <Box
        sx={{display: 'flex', justifyContent: 'center' ,alignItems: 'center'}}
      >
        <Checkbox
          checked={values.agb}
          onChange={()=> {handleChange(!values.agb, 'agb')}}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        
        <Button
          onClick={() => {setOpenAGBModal(true)}}
        >
          AGB's
        </Button>

      </Box>

      <AGBModal open={openAGBModal} onClose={() => setOpenAGBModal(false)} />

    </>
  )
}

export default Confirmation