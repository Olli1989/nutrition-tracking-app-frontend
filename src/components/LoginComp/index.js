import React, { useEffect, useContext, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Paper, Typography, Button, TextField } from '@mui/material'

import PasswordInput from '../utility/PasswordInput'
import * as ROUTES from '../../constants/routes'
import * as userApi from '../../api/authApi'
import  UserContext from '../../context/UserContext'

function LoginComp() {

  const REGEX_EMAIL_VALITY = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState({value: '', showPassword: false})
  const [errorMessageEmail, setErrorMessageEmail] = useState('')
  const [serverError, setServerError] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  let isInputValid = emailAddress === '' || password === ''

  const handleLogin = () => {
    if(!REGEX_EMAIL_VALITY.test(emailAddress)){
      setErrorMessageEmail('Invalid E-Mail address')
    } else {
      setIsLogin(true)
    }
  }

  useEffect(()=>{
    async function loginWithEmailAndPassword () {

      try {
        const { data } = await userApi.logIn({email: emailAddress, password: password.value })
        let userObject = jwt_decode(data.token)
        console.log(data.result)
        setIsLogin(false)
        setUser({token: data.token, email: userObject.email, diary: data.result.diary, personalData:data.result.personalData})
  
      } catch (e){
        setServerError(e.response.data.message)
        console.log(e.response.data.message)
        setIsLogin(false)
      }
      
    }


    if(isLogin){
      loginWithEmailAndPassword()
    }
  },[isLogin])


  useEffect(()=>{
    if(user != null) {
      localStorage.setItem('user', JSON.stringify(user))
      navigate("/", { replace: true })
    }
  },[user])

  return (
    <Paper elevation={3} sx={{p:2, maxWidth:'400px'}} >
      <Typography variant='h4' component='h2' sx={{mb: 2, textAlign:'center'}}>
        Login to Member Area
      </Typography>
      
      <Box sx={{display:'flex', flexDirection:'column'}}>
        {errorMessageEmail ? 
          <TextField error id="outlined-error-helper-text" defaultValue="Hello World" sx={{mb: 1.5}} value={emailAddress} onChange={({target})=>{setEmailAddress(target.value); setErrorMessageEmail("")}} helperText={errorMessageEmail} label="Error" InputLabelProps={{ shrink: true }}/>
          :
          <TextField id="outlined-basic" label="E-Mail" variant="outlined" color='secondary' sx={{mb: 1.5}} value={emailAddress} onChange={({target})=>setEmailAddress(target.value)}/>
        }
        
        <PasswordInput password={password} setPassword={setPassword}/>

        <Button variant="outlined" color='secondary' onClick={handleLogin} sx={{mb: 1.5, p: 1}} disabled={isInputValid?true:false}>Log In</Button>
      </Box>
      
      <Typography>
        Do you do not have an account yet?<br /> Better be quick and start your journey today -{' '}
        <Button component={Link} to={ROUTES.SIGN_UP} color="secondary">
          Sign up
        </Button>

      </Typography>
    </Paper>
  )
}

export default LoginComp