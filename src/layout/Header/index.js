import { useContext, useEffect } from 'react'
import { Link as BrowserLink } from 'react-router-dom'

import UserContext from '../../context/UserContext'
import * as ROUTES from '../../constants/routes'
import './header.css'
import Logo from '../../assets/images/logo-olli.svg'

import { 
  AppBar, 
  Container,
  Toolbar,
  Typography,
  Button,
  Box,
  Link

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
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar sx={{padding: 0}}>
            <Link component={BrowserLink} to={ROUTES.DASHBOARD}>
              <img src={Logo} alt="Logo link to front page" height="50px"/>
            </Link>
            <Box
              sx={{ml: "auto"}}
            >
            {
              user ? (
                <>
                  <Button variant="outlined" color="secondary" onClick={logOut}>
                    Log Out
                  </Button>
                </>
              ):(
                <>
                  <Button component={BrowserLink} to={ROUTES.LOGIN} variant="outlined" sx={{mr:"1rem"}} color="secondary">
                    Login
                  </Button>
                  <Button component={BrowserLink} to={ROUTES.SIGN_UP} variant="contained" color="secondary">
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