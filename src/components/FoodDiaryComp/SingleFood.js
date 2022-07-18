import React, {useState, useContext, useEffect} from 'react'
import {Typography, Box, TextField, InputAdornment} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

import UserContext from '../../context/UserContext'

function SingleFood({productName , nutriments, date, addingCategory}) {

  const {user, setUser} = useContext(UserContext)

  const [amount, setAmount] = useState(1)
  const [kcal, setKcal] = useState(0)
  const [protein, setProtein] = useState(0)
  const [carb, setCarb] = useState(0)
  const [fat, setFat] = useState(0)
  
  let addingDate = date

  
  const handleAddingFood = () => {
    console.log(user)
    


    if(user['diary'][addingDate]){
      let getState = {...user}
      let getday= {...user['diary']}
      console.log(getday)

      let getDay = {...user['diary'][date][addingCategory]}
      console.log(getDay)
      let newCategory = {...getDay, [productName]:{amount, kcal, protein, carb, fat}}
      setUser(prevState => {
        //return {...prevState, ['diary'][date][addingCategory]: newCategory })
        return {...prevState, ['diary']: {...prevState['diary'], [date]:{...prevState['diary'][date], [addingCategory]: newCategory }}}})
    } else {

      let newDayDummy = {breakfast: {}, lunch: {}, dinner: {}, snack: {}}
      newDayDummy[addingCategory] = {[productName]: {amount, kcal, protein, carb, fat}}
    
      setUser(prevState => {
        return {...prevState, ['diary']: {...prevState['diary'], [date]: newDayDummy}}
      })
    }
 
    

    
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  },[user])

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

  return (
    <>
      <Typography>{productName}</Typography>

      <Box
        sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
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

          <AddCircleIcon onClick={handleAddingFood}/>

      </Box>
      <Box
        sx={{display: 'flex'}}
      >
        
        <Typography>KCAL: {kcal} </Typography>
        <Typography>Protein: {protein} </Typography>
        <Typography>Carbs: {carb} </Typography>
        <Typography>Fats: {fat} </Typography>
      </Box>
    </>
  )
}

export default SingleFood