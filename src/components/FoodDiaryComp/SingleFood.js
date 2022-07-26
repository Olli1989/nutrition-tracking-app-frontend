import React, {useState, useContext, useEffect} from 'react'
import {Typography, Box, TextField, InputAdornment} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

import AddingFood from './AddingFood';

function SingleFood({productName , nutriments, date, addingCategory}) {

  const [amount, setAmount] = useState(1)
  const [kcal, setKcal] = useState(0)
  const [protein, setProtein] = useState(0)
  const [carb, setCarb] = useState(0)
  const [fat, setFat] = useState(0)
  const [openSingleFoodDialog,setOpenSingleFoodDialog] = useState(false)
  
  let addingDate = date


  return (
    <>
    {productName && 
      <Box onClick={()=>setOpenSingleFoodDialog(true)} >
        <Typography sx={{color: '#fff'}}><strong>{productName}</strong></Typography>
        
      </Box>

    }
    {openSingleFoodDialog && 
      <AddingFood 
        open={openSingleFoodDialog} 
        onClose={() => setOpenSingleFoodDialog(false)} 
        productName = {productName}
        nutriments = {nutriments}
        date = {date}
        addingCategory = {addingCategory}
      />
    }
    </>
  )
}

export default SingleFood