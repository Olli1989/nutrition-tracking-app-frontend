import { useState, useEffect } from 'react'
import { Paper, Typography } from '@mui/material'

import UserDetails from './SignupComponents/UserDetails'
import PersonalDetails from './SignupComponents/PersonalDetails'
import Confirmation from './SignupComponents/Confirmation'
import Success from './SignupComponents/Success'
import SignupHeader from './SignupComponents/SignupHeader'
import LeftRightButton from './SignupComponents/LeftRightButton'
import SignupFooterText from './SignupComponents/SignupFooterText'
import * as api from '../../api/authApi'

const formDataInit = {
  step: 1,
  email: '',
  password:'',
  username:'',
  weight:0,
  height:0,
  age: 18,
  gender: 'w',
  activityLevel: 0,
  intenseSport: false,
  agb: false
}

function Signup() {

  const [formData, setFormData] = useState(formDataInit)
  const [errorMessageServer, setErrorMessageServer] = useState({status:0, message:''})
  const [isSignup, setIsSignup] = useState(false)

  const { step } = formData

  const prevStep = () => {
    setFormData(prevState => ({...prevState, step: prevState.step -1}))
  }

  const nextStep = () => {
    setFormData(prevState => ({...prevState, step: prevState.step + 1}))
  }

  const handleChange = (value, input) => {
    setFormData(prevState => ({...prevState, [input]: value}))
  }

  const handleSignUp = () => {
    setIsSignup(true)
  }

  useEffect(()=>{
    async function signupBackend () {
      try {
        console.log(formData.username, formData.email, formData.password)
        const { data } = await api.signUp({username: formData.username, email: formData.email, password: formData.password })
      } catch (e){
        setErrorMessageServer({status: e.response.request.status, message:  e.response.data.message})
      }
      setIsSignup(false)      
    }
    
    if(isSignup){
      signupBackend()
    }
  }, [isSignup])

  const renderSwitch = (steps) => {
    switch (steps) {
      case 1:
        return (
          <>
            <UserDetails
              handleChange = {handleChange}
              values = {formData}  
            />
          </>
        )
      case 2:
        return (
          <>
            
            <PersonalDetails
              handleChange = {handleChange}
              values = {formData}  
            />

          </>
        )
      case 3:
        return (
          <>
            <Confirmation
              handleChange = {handleChange}
              values = {formData} 
              handleSignUp = {handleSignUp}
            />
            
          </>
        )
      default:
        //there is nothing to do
      }
  }

  return (
    <Paper elevation={3} sx={{p:2, maxWidth:'400px', minWidth: '350px'}} >
      <Typography variant='h4' component='h2' sx={{mb: 2, textAlign:'center'}}>
        Sign Up
      </Typography>
      <SignupHeader step={step} />
      {renderSwitch(step)}
      <LeftRightButton prevDisabled={step===1||step===4?true:false} nextDisabled={step===3?true:false} prevStep={prevStep} nextStep={nextStep}/>
      <SignupFooterText />
    </Paper>
  )
}

export default Signup