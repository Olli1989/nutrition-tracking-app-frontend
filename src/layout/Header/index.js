import { useContext } from 'react'
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

} from '@mui/material'


export default function Header() {

  const {user , setUser} = useContext(UserContext)
  

  const logOut = () => {
    setUser(null)
  }

  return (
    <header>
      <AppBar position="static" color="success">
        <Container maxWidth="xl">
          <Toolbar sx={{padding: 0}}>
            <Typography variant="h4" component="h1">
              Food Tracker App
            </Typography>
            
            <Button component={Link} to={ROUTES.LOGIN} variant="outlined" sx={{marginLeft: "auto", mr:"1rem"}} color="secondary">
              Login
            </Button>
            <Button variant="contained" color="secondary">
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}