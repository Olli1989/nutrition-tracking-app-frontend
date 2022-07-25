import React, { useEffect, useState, useContext } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { Typography, Box } from '@mui/material'

import UserContext from '../../context/UserContext'
import calcCalorieRequiement from '../../services/helper-func/calcMetabolism'
import calcBMI, { bmiTable } from '../../services/helper-func/calcBmi'
import RecommendedCalorie from '../utility/RecommendedCalorie'
import getFormatedDate from '../../services/helper-func/getFormatedDate'
import RecommendedCalorieChart from '../../components/utility/RecommendedCalorieChart'


function DashboardComp() {

  const {user} = useContext(UserContext)

  const [isGrapping, setIsGrapping] = useState(false)
  const [metabolism, setMetabolism] = useState(calcCalorieRequiement(user.personalData))
  const [bmi, setBmi] = useState(calcBMI(user.personalData.weight, user.personalData.height))
  const [bmiTableText, setBmiTableText] = useState(bmiTable(user.personalData.weight, user.personalData.height))
  const [quote, setQuote] = useState()

  const ResponsiveGridLayout = WidthProvider(Responsive)

  const layout = [
    { i: "first", x:4, y:0, w:1, h:2 , maxH:3 },
    { i: "second", x:1, y:0, w:1, h:2 , maxH:3 },
    { i: "third", x:2, y:0, w:1, h:2, minH: 2 , maxH:3 },
    { i: "fourth", x:0, y:2, w:1, h:2 , minH: 2, maxH:3 },
    { i: "fifth", x:0, y:0, w:1, h:4 , minH:4, maxH:4},
  ] 

  const layoutsm = [
    { i: "first", x:1, y:2, w:1, h:2 , maxH:3 },
    { i: "second", x:1, y:2, w:1, h:2 , maxH:3 },
    { i: "third", x:1, y:0, w:1, h:2, minH: 2 , maxH:3 },
    { i: "fourth", x:0, y:4, w:1, h:2 , minH: 2, maxH:3 },
    { i: "fifth", x:0, y:0, w:1, h:4 , minH:4, maxH:4 },
  ] 

  useEffect(()=>{
    async function getQuote (){
      try{


        let response = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
        let data = await response.json()
        setQuote(data.quotes[0].text)
      } catch(e){
        setQuote("If you think lifting is dangerous, try being weak. Being weak is dangerous.")
      }
    }

    getQuote()
  },[])


  return (
    <div>
      <ResponsiveGridLayout
        layouts={{lg: layout, sm: layoutsm}}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={100}
        width={1000}
        compactType={'horizontal'}
      >
        <div key="first" className="item">
            <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', height: '100%'}} bgcolor="rgba(237,237,237,1)">
              <div>
                <Typography>Lose weight: <b>{metabolism-300} kcal</b></Typography>
                <Typography>Maintain weight:  <b>{metabolism} kcal</b></Typography>
                <Typography>Gain weight:  <b>{metabolism+300} kcal</b></Typography>
              </div>
            </Box>          
        </div>
        <div key="second" className="item">
            <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', height: '100%'}} bgcolor="rgba(237,237,237,1)">
              <div>
                <Typography>Your BMI: <b>{bmi}</b> ({bmiTableText})</Typography>
              </div>
            </Box>   
        </div>
        <div key="third" className="item">
            <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', height: '100%'}} bgcolor="rgba(237,237,237,1)">
              <div>
                <Typography variant="h6" component="h2">Today's calorie intake</Typography>
                <RecommendedCalorie metabolism={calcCalorieRequiement(user.personalData)} date={getFormatedDate(new Date())}/>
              </div>
            </Box> 
        </div>
        <div key="fourth" className="item">
          <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', height: '100%', p:1}} bgcolor="rgba(237,237,237,1)">
            <div>
              <Typography variant="h6" component="h2" sx={{textAlign: 'center'}}>Today's Quote</Typography>
              <Typography sx={{textAlign: 'center'}}>{quote}</Typography>
            </div>
          </Box> 
        </div>
        <div key="fifth" className="item">
         <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', height: '100%', p:1}} >
            <div>
              <RecommendedCalorieChart metabolism={calcCalorieRequiement(user.personalData)} date={getFormatedDate(new Date())}/>
            </div>
          </Box> 
        </div>

      </ResponsiveGridLayout>
    </div>
  )
}

export default DashboardComp