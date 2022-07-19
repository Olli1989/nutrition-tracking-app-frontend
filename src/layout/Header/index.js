import { useContext, useEffect, useState } from 'react'
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

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


export default function Header() {

  const {user , setUser} = useContext(UserContext)

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
                    <Button component={BrowserLink} to={'/sfsf'} variant="outlined" color="secondary">
                      Food Diary
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button variant="outlined" color="secondary" onClick={logOut}>
                      Log Out
                    </Button>
                  </MenuItem>
                  
                </Box>
              ):(
                <Box sx={{ml: 'auto'}}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button component={BrowserLink} to={ROUTES.LOGIN} variant="outlined" color="secondary">
                      Login
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button component={BrowserLink} to={ROUTES.SIGN_UP} variant="contained" color="secondary">
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
            <Button component={BrowserLink} to={'/sfsf'} variant="outlined" color="secondary" sx={{ ml: 5}}>
              Food Diary
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'flex' } }}>

              {
              user ? (
                <Box >
                  <Button variant="outlined" color="secondary" onClick={logOut} >
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

