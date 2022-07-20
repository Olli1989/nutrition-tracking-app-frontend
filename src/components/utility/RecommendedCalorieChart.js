import React, {useContext, useEffect, useState} from 'react'
import {Box, Typography} from '@mui/material'
import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

import UserContext from '../../context/UserContext'
import './recommendedCalorieChart.css'


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

  const options = {


    plugins:{
      tooltip: {

        callbacks: {
          label: (data) => {
            let label = data.dataset.labels[0] + ' eaten: ' + data.dataset.data[0] + 'g, Left: ' + data.dataset.data[1] + 'g'



      
            return label;
          }
        }
      }
  }
  };
  
  const data = {
    datasets: [
      {
        data: [eatenCarb, Math.ceil(suggestedCarb/4.1-eatenCarb)],
        backgroundColor: ["rgb(80, 170, 80)", "#ccc"],
        labels: ['Carbs']

      },
      {
        data: [eatenProtein, Math.ceil(suggestedProtein/4.1-eatenProtein)],
        backgroundColor: ["goldenrod", "#ccc"],
        labels: ['Protein'],
      },
      {
        data: [eatenFat, Math.ceil((suggestedFat-eatenFat)/9.1)],
        backgroundColor: ["green", "#ccc"],
        labels: ['Fats']
      }
    ]
  };

  return (
    <div className="chartContainer">
      <Doughnut data={data} options={options} height={200} width={200} />
      <div className="chartInner">
        <div className="chartStatus">KCAL LEFT</div>
        <div className="chartValue">{metabolism-eatenKcal}</div>
      </div>
    </div>
  )
}

export default RecommendedCalorie