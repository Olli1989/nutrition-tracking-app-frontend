import { useState } from 'react'
import { Paper, Typography } from '@mui/material'

import UserDetails from './SignupComponents/UserDetails'
import PersonalDetails from './SignupComponents/PersonalDetails'
import Confirmation from './SignupComponents/Confirmation'
import Success from './SignupComponents/Success'
import SignupHeader from './SignupComponents/SignupHeader'
import LeftRightButton from './SignupComponents/LeftRightButton'
import SignupFooterText from './SignupComponents/SignupFooterText'

const formDataInit = {
  step: 1,
  email: '',
  password:'',
  username:'',
  weight:0,
  height:0,
  age: 0,
  gender: 'w',
  activityLevel: 0,
  intenseSport: false,
  agb: false
}

function Signup() {

  const [formData, setFormData] = useState(formDataInit);
  const [errorMessage, setErrorMessage] = useState('');
  const [hover, setHover] = useState({left:false,right:false})

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

  }

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
            />
            
          </>
        )
      case 4:
        return (
          <Success />
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