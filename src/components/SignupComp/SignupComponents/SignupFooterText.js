import React from 'react'
import { Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../../constants/routes'

function SignupFooterText() {
  return (
    <Typography sx={{textAlign: 'center'}}>
        Do you already have an account?{' '}
        <Button component={Link} to={ROUTES.LOGIN} color="secondary">
        Login
        </Button>
    </Typography>
  )
}

export default SignupFooterText