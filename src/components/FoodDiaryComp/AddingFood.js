import React, { useState, useEffect, useContext } from 'react'
import { createPortal } from 'react-dom'

import { Box, Paper, Typography, IconButton, TextField, InputAdornment } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UserContext from '../../context/UserContext'


function AddingFood({open, onClose, productName, nutriments, date, addingCategory}) {
  console.log(nutriments)

  const {user, setUser} = useContext(UserContext)

  const [amount, setAmount] = useState(1)
  const [kcal, setKcal] = useState(0)
  const [protein, setProtein] = useState(0)
  const [carb, setCarb] = useState(0)
  const [fat, setFat] = useState(0)

  const handleChange = (e) => {
    setAmount(parseInt(e.target.value))
  }

  useEffect(() => {
    (nutriments['energy-kcal_100g']) ? 
      setKcal((nutriments['energy-kcal_100g']/100*amount).toFixed(2))
      : 
      setKcal((nutriments['energy_100g']/100*amount).toFixed(2))

      setProtein((nutriments['proteins_100g']/100*amount).toFixed(2))
      setCarb((nutriments['carbohydrates_100g']/100*amount).toFixed(2))
      setFat((nutriments['fat_100g']/100*amount).toFixed(2))
    
  }, [amount])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  },[user])

  const handleAddingFood = () => {
 


    if(user['diary'][date]){

      let getDay = {...user['diary'][date][addingCategory]}
      let newCategory = {...getDay, [productName]:{amount, kcal, protein, carb, fat}}

      setUser(prevState => {
        return {...prevState, ['diary']: {...prevState['diary'], [date]:{...prevState['diary'][date], [addingCategory]: newCategory }}}})

    } else {

      let newDayDummy = {breakfast: {}, lunch: {}, dinner: {}, snack: {}}
      newDayDummy[addingCategory] = {[productName]: {amount, kcal, protein, carb, fat}}
    
      setUser(prevState => {
        return {...prevState, ['diary']: {...prevState['diary'], [date]: newDayDummy}}
      })
    }
 
    
    onClose()
    
  }

  return (
    open ?
      createPortal(
        <Box 
            sx={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems:'center', backgroundColo: 'red', position: 'fixed', top: 0, left: 0, right: 0, p: 1, zIndex:10000}}
        >
            <Paper
                sx={{display: 'flex', justifyContent: 'center', alignItems:'center', position: 'relative', top: 4, left: 4, backgroundColor: 'rgb(209, 209, 209)', height: '80vh', p:2}}
            >
              <IconButton
                sx={{position: 'absolute', top: 1, right: 1}}
                onClick = {onClose}
              >
                <CloseIcon/>
              </IconButton>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>

              <Typography>{productName}</Typography>

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
                    sx={{width: '150px'}}
                    />

                  

                    </Box>
              <Box
                sx={{display: 'flex'}}
                >
                
                <Typography>KCAL: {kcal} </Typography>
                <Typography>Protein: {protein} </Typography>
                <Typography>Carbs: {carb} </Typography>
                <Typography>Fats: {fat} </Typography>
              </Box>
              <AddCircleIcon onClick={handleAddingFood}/>
                  </Box>
            </Paper>
        </Box>
        
      ,document.body)
    :
      null
  )
}

export default AddingFood