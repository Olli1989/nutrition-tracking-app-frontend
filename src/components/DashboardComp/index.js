import { fontWeight } from '@mui/system'
import React, { useEffect, useState, useContext } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'

import UserContext from '../../context/UserContext'

function DashboardComp() {

  const {user} = useContext(UserContext)

  const [isGrapping, setIsGrapping] = useState(false)

  const ResponsiveGridLayout = WidthProvider(Responsive)

  const layout = [
    { i: "first", x:0, y:0, w:1, h:1 },
    { i: "second", x:1, y:0, w:1, h:1 },
    { i: "third", x:2, y:0, w:1, h:1 },
    { i: "fourth", x:3, y:0, w:1, h:1 },
    { i: "fifth", x:4, y:0, w:1, h:1 },
  ]

  console.log(user.personalData)

  const calcCalorieRequiement = () => {
    let baseMetabolism = 0
   /* let weight = user.personalData.weight
    let height = user.personalData.height
    let age = user.personalData.age
    let intenseSport = user.personalData.intenseSport
    let gender = user.personalData.gender
    let activity = user.personalData.activity*/

    let weight = 120
    let height = 170
    let age = 30
    let intenseSport = user.personalData.intenseSport
    let gender = 'm'
    let activity = user.personalData.activity

    let brocaIndex = 0
    let bmi = weight / (height/100 * height/100)
    console.log(bmi)
    if(bmi > 30){
      weight = 0.75 * (height-100) + 0.25 * weight
      console.log(weight)
    }


    if(gender === "w"){
      baseMetabolism = (655.1 + (9.56 * weight) + (1.85 * height) - (4.7 * age) )

    } else {
      baseMetabolism = (66.5 + (13.75 * weight) + (5.0 * height) - (6.76 * age) )
    }

    console.log(baseMetabolism)
    

    if(intenseSport){
      activity += 0.3
    }

    let activationMetabolism = baseMetabolism * activity
    console.log(activationMetabolism)

    let totalMetabolicRate = baseMetabolism + activationMetabolism

    console.log(totalMetabolicRate)

  }

  calcCalorieRequiement()

 

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
          <div>
              first
          </div>
        </div>
        <div key="second" className="item">
          <div>
              second
          </div>
        </div>
        <div key="third" className="item">
          <div>
              third
          </div>
        </div>
        <div key="fourth" className="item">
          <div>
              fourth
          </div>
        </div>
        <div key="fifth" className="item">
          <div>
              fifth
          </div>
        </div>

      </ResponsiveGridLayout>
    </div>
  )
}

export default DashboardComp