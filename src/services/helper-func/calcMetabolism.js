import calcBMI from './calcBmi'

export default function calcCalorieRequiement(userObj) {
  let baseMetabolism = 0
  let weight = userObj.weight
  let height = userObj.height
  let age = userObj.age
  let intenseSport = userObj.intenseSport
  let gender = userObj.gender
  let activity = userObj.activity



  let bmi = calcBMI(weight, height)

  if(bmi > 30){
    weight = 0.75 * (height-100) + 0.25 * weight
  }


  if(gender === "w"){
    baseMetabolism = (655.1 + (9.56 * weight) + (1.85 * height) - (4.7 * age) )

  } else {
    baseMetabolism = (66.5 + (13.75 * weight) + (5.0 * height) - (6.76 * age) )
  }
 

  if(intenseSport){
    activity += 0.3
  }

  return Math.ceil(baseMetabolism * activity)

  

}