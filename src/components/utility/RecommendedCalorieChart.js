import React, {useContext, useEffect, useState} from 'react'
import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

import UserContext from '../../context/UserContext'
import './recommendedCalorieChart.css'


function RecommendedCalorie({metabolism, date}) {
  const {user} = useContext(UserContext)
  let weight = user.personalData.weight
  let suggestedProtein = (weight*2) * 4.1
  let suggestedFat = (weight) * 9.1
  let suggestedCarb = Math.ceil((metabolism - (suggestedProtein + suggestedFat))/4.1)
  const [eatenKcal, setEatenKcal] = useState(0.0)
  const [eatenProtein, setEatenProtein] = useState(0)
  const [eatenCarb, setEatenCarb] = useState(0)
  const [eatenFat, setEatenFat] = useState(0)


  useEffect(()=>{
    let kcal =0, protein=0, carb=0, fat=0
    for(let category in user['diary'][date]){
      if(category !== 'weight' && category !== 'sleepQuality'){
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
            let label =""
            if(data.dataset.data[1] === 0){
              let calc = Math.ceil((data.dataset.helper[0]/9.1)-data.dataset.helper[1])
              label = data.dataset.labels[0] + ' eaten: ' + data.dataset.data[0] + 'g, Left: ' + calc   + 'g'
            } else {
              label = data.dataset.labels[0] + ' eaten: ' + data.dataset.data[0] + 'g, Left: ' + data.dataset.data[1] + 'g'
            }
     
            return label;
          }
        }
      }
  }
  };
  

  let fatLeft = (suggestedFat/9.1-eatenFat)
  let fatHigher = false
  if(fatLeft<0){
    fatLeft = 0;
    fatHigher = true;
  }

  let carbLeft = (suggestedCarb/4.1-eatenCarb)
  let carbHigher = false
  if(carbLeft<0){
    carbLeft = 0;
    carbHigher = true;
  }
  let proteinLeft = (suggestedProtein/4.1-eatenProtein)
  let proteinHigher = false
  if(proteinLeft<0){
    proteinLeft = 0;
    proteinHigher = true;
  }


  const data = {
    datasets: [
      {
        data: [eatenCarb, carbLeft],
        backgroundColor: [carbHigher? "red" : "rgb(80, 170, 80)", "#ccc"],
        labels: ['Carbs'],
        helper: [suggestedCarb, eatenCarb]

      },
      {
        data: [eatenProtein, proteinLeft],
        backgroundColor: [proteinHigher? "red" : "goldenrod", "#ccc"],
        labels: ['Protein'],
        helper: [suggestedProtein, eatenProtein]        
      },
      {
        data: [eatenFat, fatLeft],
        backgroundColor: [fatHigher? "red" : "green", "#ccc"],
        labels: ['Fats'],
        helper: [suggestedFat, eatenFat]
      }
    ]
  };

  return (
    <div className="chartContainer">
      <Doughnut data={data} options={options} height={200} width={200} />
      <div className="chartInner">
        <div className="chartStatus">KCAL LEFT</div>
        <div className={`chartValue ${(metabolism-eatenKcal)<0 && 'calorieSurplus'}`}>{metabolism-eatenKcal}</div>
      </div>
    </div>
  )
}

export default RecommendedCalorie