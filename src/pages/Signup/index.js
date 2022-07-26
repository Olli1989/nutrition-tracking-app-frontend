import React from 'react'
import { Box } from '@mui/material'

import SignupComp from '../../components/SignupComp'
import './signup.css'

function SignUp() {
  return (
    <main>
      <Box 
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        bgcolor="primary.main"
      >
        <SignupComp />
      </Box>
    </main>
    
  )
}

export default SignUp