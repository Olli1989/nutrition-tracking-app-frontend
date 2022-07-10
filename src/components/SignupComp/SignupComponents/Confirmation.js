import React, { useState } from 'react'
import { Typography, Checkbox, Box, Button } from '@mui/material'

import AGBModal from './AGBModal'

function Confirmation({handleChange, values, handleSignUp}) {
  const [openAGBModal, setOpenAGBModal] = useState(false)

  return (
    <>
      <Typography variant="h5" component="h3" sx={{textAlign: 'center', mb: 1.5}}>
        Confirmation
      </Typography>
      <Typography sx={{textAlign: 'center'}}>
        Please confirm the AGB's
      </Typography>
      <Box
        sx={{display: 'flex', justifyContent: 'center' ,alignItems: 'center', mb: 1.5}}
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
      <Box sx={{display: 'flex', justifyContent: 'center', mb:1.5}}>
        <Button 
          variant="outlined"
          color="primary"
          onClick={handleSignUp}
          disabled={values.agb ? false: true}
        >
          Let's sign in
        </Button>
      </Box>

      <AGBModal open={openAGBModal} onClose={() => setOpenAGBModal(false)} />

    </>
  )
}

export default Confirmation