import { useContext, useEffect, useState } from 'react'
import { Link as BrowserLink } from 'react-router-dom'

import UserContext from '../../context/UserContext'
import * as ROUTES from '../../constants/routes'
import './header.css'
import Logo from '../../assets/images/logo-olli-white.svg'

import { 
  AppBar, 
  Container,
  Toolbar,
  Button,
  Box,
  Link

} from '@mui/material'

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function Header() {

  const {user , setUser} = useContext(UserContext)

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
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
       <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {
              user ? (
                <Box sx={{ml: 'auto'}}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button component={BrowserLink} to={ROUTES.FOODDIARY} variant="outlined" color="secondary" sx={{width: '100%'}}>
                      Food Diary
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button variant="contained" color="secondary" onClick={logOut} sx={{width: '100%'}}>
                      Log Out
                    </Button>
                  </MenuItem>
                  
                </Box>
              ):(
                <Box sx={{ml: 'auto'}}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button component={BrowserLink} to={ROUTES.LOGIN} variant="outlined" color="secondary" sx={{width: '100%'}}>
                      Login
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button component={BrowserLink} to={ROUTES.SIGN_UP} variant="contained" color="secondary" sx={{width: '100%'}}>
                      Sign Up
                    </Button>
                  </MenuItem>
                </Box>
              )
            }
              
            </Menu>
          </Box>
          <Box>
            
          </Box>
            <Link component={BrowserLink} to={ROUTES.DASHBOARD}>
              <img src={Logo} alt="Logo link to front page" height="40px"/>
            </Link>
          <Box sx={{ flexGrow: 1,  display: { xs: 'none', sm: 'flex' } }}>
            {user && 
              <Button component={BrowserLink} to={ROUTES.FOODDIARY} variant="outlined" color="secondary" sx={{ ml: 5}}>
                Food Diary
              </Button>
            }
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'flex' } }}>

              {
              user ? (
                <Box >
                  <Button variant="contained" color="secondary" onClick={logOut} >
                    Log Out
                  </Button>
                </Box>
              ):(
                <Box >
                  <Button component={BrowserLink} to={ROUTES.LOGIN} variant="outlined" sx={{ml: 'auto', mr:"1rem"}} color="secondary">
                    Login
                  </Button>
                  <Button component={BrowserLink} to={ROUTES.SIGN_UP} variant="contained" color="secondary">
                    Sign Up
                  </Button>
                </Box>
              )
            }

          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>

    </header>
  )
}

