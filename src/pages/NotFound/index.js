import React ,{ useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { Typography } from '@mui/material'

import Main from '../../layout/Main'
import * as ROUTES from '../../constants/routes'


function NotFound() {
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      navigate(ROUTES.DASHBOARD)
    },3000)
  },[])
  
  return (
    <Main>
      <Typography sx={{mt: 3, textAlign: 'center'}} variant="h1" component="h4">Page Not Found</Typography>
      <Typography sx={{textAlign: 'center'}} variant="h2" component="h5">Rediret in 3 seconds</Typography>

    </Main>
  )
}

export default NotFound