import React, { useState, useEffect, useContext } from 'react'
import { createPortal } from 'react-dom'


import { Box, Paper, Typography, IconButton, TextField, InputAdornment, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import UserContext from '../../context/UserContext'


function EditFood({open, setOpenEditFoodDialog, editFood, date, addingCategory}) {


  const {user, setUser} = useContext(UserContext)
  
  const [amount, setAmount] = useState(user?.diary[date][addingCategory][editFood[0]]['amount'] || 0)
  const [kcal, setKcal] = useState(user['diary'][date][addingCategory][editFood[0]]['kcal']/amount || 0)
  const [protein, setProtein] = useState(user['diary'][date][addingCategory][editFood[0]]['protein']/amount || 0)
  const [carb, setCarb] = useState(user['diary'][date][addingCategory][editFood[0]]['carb']/amount || 0)
  const [fat, setFat] = useState(user['diary'][date][addingCategory][editFood[0]]['fat']/amount || 0)
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e) => {
    setAmount(parseInt(e.target.value))
  }

  useEffect(()=>{
    if(isEditing){
      
      let getDay = {...user['diary'][date][addingCategory]}
      let newCategory = {...getDay, [editFood[0]]:{amount, kcal: parseFloat(kcal*amount).toFixed(2), protein: parseFloat(protein*amount).toFixed(2), carb: parseFloat(carb*amount).toFixed(2), fat: parseFloat(fat*amount).toFixed(2)}}

      setUser(prevState => {
        return {...prevState, ['diary']: {...prevState['diary'], [date]:{...prevState['diary'][date], [addingCategory]: newCategory }}}})

      setOpenEditFoodDialog(false)
    }
  },[isEditing])



  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
    
  },[user])



  return (
    open ?
      createPortal(
        <Box 
            sx={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems:'center', backgroundColor: 'rgba(0,0,0,.5)', position: 'fixed', top: 0, left: 0, right: 0, p: 3, zIndex:10000}}
        >
            <Paper
                sx={{display: 'flex', justifyContent: 'center', alignItems:'center', position: 'relative',  backgroundColor: 'rgb(209, 209, 209)', minWidth:'30vw', minHeight: '50vh', p:2}}
            >
              <IconButton
                sx={{position: 'absolute', top: 1, right: 1}}
                onClick = {()=>{setOpenEditFoodDialog(false)}}
              >
                <CloseIcon/>
              </IconButton>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>

              <Typography variant="h6" component="h2" >{editFood}</Typography>

              <Box
                sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column'}}
                >
                <TextField
                    type="number"
                    size="small"
                    value={amount}
                    onChange={(e) => {handleChange(e)}}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">g</InputAdornment>,
                    }}
                    sx={{my: 1}}
                    />

                  

                    </Box>
              <Box
                sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                >
                <Box>
                  <Typography>KCAL: {parseFloat(kcal*amount).toFixed(2)} </Typography>
                  <Typography>Protein: {parseFloat(protein*amount).toFixed(2)} </Typography>
                  <Typography>Carbs: {parseFloat(carb*amount).toFixed(2)} </Typography>
                  <Typography>Fats: {parseFloat(fat*amount).toFixed(2)} </Typography>
                </Box>
                <Button onClick={() => {setIsEditing(true)}}>
                  <EditIcon />
                </Button>
              </Box>
            </Box>
            </Paper>
        </Box>
        
      ,document.body)
    :
      null
  )
}

export default EditFood