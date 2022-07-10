import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../../context/UserContext'
import * as ROUTES from '../../constants/routes'
import './header.css'

import { 
  AppBar, 
  Container,
  Toolbar,
  Typography,
  Button,
  Box,

} from '@mui/material'


export default function Header() {

  const {user , setUser} = useContext(UserContext)
  
  const logOut = () => {
    setUser(null)  
  }

  useEffect(()=>{
    if(user == null){
      sessionStorage.removeItem('user');
    }
  },[user])

  return (
    <header>
      <AppBar position="static" color="success">
        <Container maxWidth="xl">
          <Toolbar sx={{padding: 0}}>
            <Typography variant="h4" component="h1">
              Food Tracker App
            </Typography>
            <Box
              sx={{ml: "auto"}}
            >
            {
              user ? (
                <>
                  <Button variant="outlined" color="primary" onClick={logOut}>
                    Log Out
                  </Button>
                </>
              ):(
                <>
                  <Button component={Link} to={ROUTES.LOGIN} variant="outlined" sx={{mr:"1rem"}} color="primary">
                    Login
                  </Button>
                  <Button component={Link} to={ROUTES.SIGN_UP} variant="contained" color="primary">
                    Sign Up
                  </Button>
                </>
              )
            }
            
              
            </Box>
          </Toolbar>

        </Container>
      </AppBar>
    </header>
  )
}