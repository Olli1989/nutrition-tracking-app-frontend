import { useState, useEffect, useContext } from 'react'
import { Paper, Typography } from '@mui/material'
import jwt_decode from 'jwt-decode'

import UserDetails from './SignupComponents/UserDetails'
import PersonalDetails from './SignupComponents/PersonalDetails'
import Confirmation from './SignupComponents/Confirmation'
import Success from './SignupComponents/Success'
import SignupHeader from './SignupComponents/SignupHeader'
import LeftRightButton from './SignupComponents/LeftRightButton'
import SignupFooterText from './SignupComponents/SignupFooterText'
import * as api from '../../api/authApi'
import UserContext from '../../context/UserContext'
import DiaryContext from '../../context/DiaryContext'

const formDataInit = {
  step: 1,
  email: '',
  password:'',
  username:'',
  weight:'70',
  height:'170',
  age: '18',
  gender: 'w',
  activityLevel: 1.2,
  intenseSport: false,
  agb: false
}

function Signup() {

  const REGEX_EMAIL_VALITY = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const { user, setUser } = useContext(UserContext)

  const [formData, setFormData] = useState(formDataInit)
  const [errorMessageServer, setErrorMessageServer] = useState({status:'', message:''})
  const [errorMessage, setErrorMessage] = useState({email:"", password:""})
  const [isSignup, setIsSignup] = useState(false)
  const [isSuccessfullySigned, setIsSuccessfullySigned] = useState(false)

  const { step } = formData

  const prevStep = () => {
    setFormData(prevState => ({...prevState, step: prevState.step -1}))
  }

  const nextStep = () => {
    if(step == 1){
      if(!REGEX_EMAIL_VALITY.test(formData.email)){
        setErrorMessage(prevState => ({...prevState, email:"Not a valid E-Mail address"}))
      }
      if(!formData.password){
        setErrorMessage(prevState => ({...prevState, password:"Enter a password"}))
      }

      if(REGEX_EMAIL_VALITY.test(formData.email) && formData.password){
        setFormData(prevState => ({...prevState, step: prevState.step + 1}))
      }
    } else {
      setFormData(prevState => ({...prevState, step: prevState.step + 1}))
    }    
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

        let personalData = {weight: formData.weight, height: formData.height, age: formData.age, gender: formData.gender, intenseSport: formData.intenseSport, activity: formData.activityLevel}
        const { data } = await api.signUp({username: formData.username, email: formData.email, password: formData.password, diary: {default: 0}, personalData })
        let userObject = jwt_decode(data.token)
        setIsSuccessfullySigned(true)
        setTimeout(()=>{
          setUser({token: data.token, email: userObject.email, diary: userObject.diary, personalData})
        },1500)
      } catch (e){
        setErrorMessageServer({status: e.response.request.status, message:  e.response.data.message})
        setFormData(prevState => ({...prevState, step:  1}))
      }
      setIsSignup(false)      
    }
    
    if(isSignup){
      signupBackend()
    }
  }, [isSignup])

  useEffect(()=>{
    if(user != null) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  },[user])

  

  const renderSwitch = (steps) => {
    switch (steps) {
      case 1:
        return (
          <>
            <UserDetails
              handleChange = {handleChange}
              values = {formData} 
              errorMessage = {errorMessage}
              setErrorMessage = {setErrorMessage}
              errorMessageServer = {errorMessageServer} 
              setErrorMessageServer = {setErrorMessageServer}

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
    <>
    {
      !isSuccessfullySigned ? 
      (
        <Paper elevation={3} sx={{p:4, maxWidth:'400px', width: '100%'}} >
          <Typography variant='h4' component='h2' sx={{mb: 2, textAlign:'center'}}>
            Sign Up
          </Typography>
          <SignupHeader step={step} />
          {renderSwitch(step)}
          <LeftRightButton prevDisabled={step===1||step===4?true:false} nextDisabled={step===3?true:false} prevStep={prevStep} nextStep={nextStep}/>
          <SignupFooterText />
        </Paper>
      ):(
        <Success/>
      )
    }
    </>
  )
}

export default Signup