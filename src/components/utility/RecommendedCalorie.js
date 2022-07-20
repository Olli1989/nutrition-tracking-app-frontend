import React, {useContext, useEffect, useState} from 'react'
import {Box, Typography} from '@mui/material'

import UserContext from '../../context/UserContext'


function RecommendedCalorie({metabolism, date}) {
  const {user} = useContext(UserContext)
  let weight = user.personalData.weight
  let suggestedProtein = (weight*1.2) * 4.1
  let suggestedFat = (weight) * 9.1
  let suggestedCarb = metabolism - (suggestedProtein + suggestedFat)
  const [eatenKcal, setEatenKcal] = useState(0.0)
  const [eatenProtein, setEatenProtein] = useState(0)
  const [eatenCarb, setEatenCarb] = useState(0)
  const [eatenFat, setEatenFat] = useState(0)


  useEffect(()=>{
    let kcal =0, protein=0, carb=0, fat=0
    for(let category in user['diary'][date]){
      if(category != 'weight' && category != 'sleepQuality'){
        for(let food in user['diary'][date][category]) {
          kcal += parseFloat(user['diary'][date][category][food]['kcal'])
          protein += parseFloat(user['diary'][date][category][food]['protein'])
          carb += parseFloat(user['diary'][date][category][food]['carb'])
          fat += parseFloat(user['diary'][date][category][food]['fat'])
        }
        
      }
    }
    setEatenKcal(kcal)
    setEatenProtein(protein)
    setEatenCarb(carb)
    setEatenFat(fat)
  }, [user,date])

  return (
    <Box>
      <Typography>Kcal: {eatenKcal} /{metabolism} kcal</Typography>
      <Typography>Protein: {eatenProtein} /{Math.ceil(suggestedProtein/4.1)} g</Typography>
      <Typography>Carbs: {eatenCarb} /{Math.ceil(suggestedCarb/4.1)} g</Typography>
      <Typography>Fats: {eatenFat} /{Math.ceil(suggestedFat/9.1)} g</Typography>
    </Box>
  )
}

export default RecommendedCalorie