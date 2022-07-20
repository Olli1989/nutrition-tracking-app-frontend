export default function calcBMI(weight, height){
  return (weight / (height/100 * height/100)).toFixed(2)
}

export function bmiTable (weight, height) {
  let bmi = calcBMI(weight, height)
  let bmiText = ''

  switch (true) {
    case (bmi<16):
      bmiText = 'starkes Untergewicht';
      break;
    case (bmi<17):
      bmiText = 'Mäßiges Untergewicht';
      break;
    case (bmi<18.5):
      bmiText = 'Leichtes Untergewicht';
      break;
    case (bmi<24.9):
      bmiText = 'Normalgewicht';
      break;
    case (bmi<29.9):
      bmiText = 'Präadipositas';
      break;
    case (bmi<34.9):
      bmiText = 'Adipositas Grad I';
      break;
    case (bmi<39.9):
      bmiText = 'Adipositas Grad II';
      break;
    case (bmi >= 40):
      bmiText = 'Adipositas Grad III';
      break;
    default:
      bmiText = '';
      break;
  }
  
  return bmiText
}