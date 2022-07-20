import React, { useEffect, useState, useContext } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { Typography, Box } from '@mui/material'

import UserContext from '../../context/UserContext'
import calcCalorieRequiement from '../../services/helper-func/calcMetabolism'
import calcBMI, { bmiTable } from '../../services/helper-func/calcBmi'
import RecommendedCalorie from '../utility/RecommendedCalorie'
import getFormatedDate from '../../services/helper-func/getFormatedDate'

function DashboardComp() {

  const {user} = useContext(UserContext)

  const [isGrapping, setIsGrapping] = useState(false)
  const [metabolism, setMetabolism] = useState(calcCalorieRequiement(user.personalData))
  const [bmi, setBmi] = useState(calcBMI(user.personalData.weight, user.personalData.height))
  const [bmiTableText, setBmiTableText] = useState(bmiTable(user.personalData.weight, user.personalData.height))
  const [quote, setQuote] = useState()

  const ResponsiveGridLayout = WidthProvider(Responsive)

  const layout = [
    { i: "first", x:0, y:0, w:1, h:1 , maxH:3 },
    { i: "second", x:1, y:0, w:1, h:1 , maxH:3 },
    { i: "third", x:2, y:0, w:1, h:2, minH: 2 , maxH:3 },
    { i: "fourth", x:3, y:0, w:1, h:2 , minH: 2, maxH:3 },
    { i: "fifth", x:4, y:0, w:1, h:1 , maxH:3 },
  ] 

  useEffect(()=>{
    fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
      .then(response => response.json())
      .then(data => setQuote(data.quotes[0].text))
  })


  return (
    <div>
      <ResponsiveGridLayout
        layouts={{lg: layout}}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 3, sm: 2, xs: 2, xxs: 1 }}
        rowHeight={100}
        width={1000}
        compactType={'horizontal'}
      >
        <div key="first" className="item">
            <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', height: '100%'}}>
              <div>
                <Typography>Lose weight: <b>{metabolism-300} kcal</b></Typography>
                <Typography>Maintain weight:  <b>{metabolism} kcal</b></Typography>
                <Typography>Gain weight:  <b>{metabolism+300} kcal</b></Typography>
              </div>
            </Box>          
        </div>
        <div key="second" className="item">
            <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', height: '100%'}}>
              <div>
                <Typography>Your BMI: <b>{bmi}</b> ({bmiTableText})</Typography>
              </div>
            </Box>   
        </div>
        <div key="third" className="item">
            <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', height: '100%'}}>
              <div>
                <Typography variant="h6" component="h2">Today's calorie intake</Typography>
                <RecommendedCalorie metabolism={calcCalorieRequiement(user.personalData)} date={getFormatedDate(new Date())}/>
              </div>
            </Box> 
        </div>
        <div key="fourth" className="item">
          <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', height: '100%', p:1}}>
            <div>
              <Typography variant="h6" component="h2" sx={{textAlign: 'center'}}>Today's Quote</Typography>
              <Typography sx={{textAlign: 'center'}}>{quote}</Typography>
            </div>
          </Box> 
        </div>
        <div key="fifth" className="item">
         <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', height: '100%', p:1}}>
            <div>
              <Typography variant="h6" component="h2" sx={{textAlign: 'center'}}>Playing Block</Typography>
            </div>
          </Box> 
        </div>

      </ResponsiveGridLayout>
    </div>
  )
}

export default DashboardComp