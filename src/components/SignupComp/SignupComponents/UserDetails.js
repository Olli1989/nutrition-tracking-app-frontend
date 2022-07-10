import React, { useState } from 'react'
import { Box, Typography, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function UserDetails({handleChange, values, errorMessage, setErrorMessage, errorMessageServer, setErrorMessageServer}) {

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(prevState => !prevState)
  };

  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };

  return (
    <>
        <Typography variant="h5" component="h3" sx={{textAlign: 'center', mb: 1.5}}>
            Personal Details
        </Typography>

        <Box sx={{display:'flex', flexDirection:'column'}}>
            <TextField id="outlined-basic" label="Username" variant="outlined" color='secondary' sx={{mb: 1.5}} value={values.username} onChange={(e) => {handleChange(e.target.value, 'username')}}/>              
            <TextField label="E-Mail" variant="outlined" color='secondary' sx={{mb: 1.5}} value={values.email} onChange={(e) => {setErrorMessage(prevState => ({...prevState, email:""})); handleChange(e.target.value, 'email')}}/>
            

            <FormControl variant="outlined" color="secondary" sx={{mb: 1}}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={(e) => {
                    setErrorMessage(prevState => ({...prevState, password:""})); 
                    handleChange(e.target.value, 'password');
                    setErrorMessageServer({status:'', message:''})

                  }}
                  endAdornment={
                  <InputAdornment position="end">
                      <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                  </InputAdornment>
                  }
                  label="Password"
              />
            </FormControl>
        </Box>

        {(errorMessage.email) && <Typography color="error">{errorMessage.email}</Typography>}
        {(errorMessage.password) && <Typography color="error">{errorMessage.password}</Typography>}
        {(errorMessageServer.status == '400' ) && <Typography color="error">{errorMessageServer.message}</Typography>}

    </>
  )
}

export default UserDetails