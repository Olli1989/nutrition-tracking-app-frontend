import React from 'react'
import { Typography, TextField, InputAdornment,ListItemText, Box, FormControl, InputLabel, Select,MenuItem, ToggleButtonGroup, ToggleButton} from '@mui/material'

function getAgeArray () {
  let newArr = []

  for(let i = 18; i<101; i++){
    newArr.push(i)
  }

  return newArr
}

function getHeightArray () {
  let newArr = []

  for(let i = 100; i<221; i++){
    newArr.push(i)
    newArr.push(i+0.5)
  }

  newArr.pop()

  return newArr
}

function getWeightArray () {
  let newArr = []

  for(let i = 40; i<200; i++){
    newArr.push(i)
  }

  return newArr
}

function PersonalDetails({handleChange, values}) {

  const ages = getAgeArray()
    .map((age, i) => {
      return <MenuItem value={age} key={age+''+i}>{age}</MenuItem>
    })

  const weights = getWeightArray()
    .map((weight,i)=> {
      return <MenuItem value={weight} key={weight+''+i}>{weight}</MenuItem>
    })

  const heights = getHeightArray()
    .map((heigth,i)=> {
      return <MenuItem value={heigth} key={heigth+''+i}>{heigth}</MenuItem>
    })


  return (
    <>
      <Typography variant="h5" component="h3" sx={{textAlign: 'center', mb: 1.5}}>
        Personal Details
      </Typography>
      <Box sx={{display: 'flex', gap: 1, mb: 1.5}}>
        <TextField
          fullWidth
          value={values.weight}
          onChange={({target})=>{handleChange(target.value,'weight')}}
          select
          label="Weight in kg"
        >
          {weights}
        </TextField>

        <TextField
          fullWidth
          value={values.height}
          onChange={({target})=>{handleChange(target.value,'height')}}
          select
          label="Height in cm"
        >
          {heights}
        </TextField>
      </Box>


      <Box sx={{display: 'flex', gap: 1, mb: 1.5}}>
        <FormControl sx={{width: '100px'}}>
          <InputLabel>Age</InputLabel>
          <Select
            value={values.age}
            label="Age"
            onChange={({target})=>{handleChange(target.value,'age')}}
          >
            {ages}
          </Select>
        </FormControl>
        
        <FormControl sx={{width: '100%'}}>
          <InputLabel>Activity Level</InputLabel>
          <Select
            value={values.activityLevel}
            label="Activity Level"
            onChange={({target})=>{handleChange(target.value,'activityLevel')}}
          >
            <MenuItem value={1.2}>Nur sitzend oder liegend</MenuItem>
            <MenuItem value={1.45}>Sitzend, kaum aktiv</MenuItem>
            <MenuItem value={1.165}>Sitzend, gehend und stehend</MenuItem>
            <MenuItem value={1.85}>Vorwiegend stehend/gehend</MenuItem>
            <MenuItem value={2.2}>Anstrengende Arbeit/Sport</MenuItem>
          </Select>
        </FormControl>

        
      </Box>

      <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
          <Typography sx={{width: '100%'}}>Gender</Typography>
          <Typography sx={{width: '100%'}}>Intense Sport</Typography>
      </Box>

      <Box sx={{display: 'flex', mb:1.5, gap: 1}}>

        
        <ToggleButtonGroup 
            onChange={({target}) => handleChange(target.value,'gender')} 
            value={values.gender}
            label= "gender"
            name="gender" 
            exclusive={true} 
            fullWidth
          >   
            <ToggleButton  value="w">Woman</ToggleButton>
            <ToggleButton  value="m">Man  </ToggleButton>  
          </ToggleButtonGroup>

          <ToggleButtonGroup 
            onChange={({target}) => handleChange(target.value==='true','intenseSport')} 
            value={values.intenseSport}
            name="intensity" 
            exclusive={true} 
            fullWidth
          >
              <ToggleButton aria-pressed="true" value={true}>Ja</ToggleButton>
              <ToggleButton aria-pressed="false" value={false}>Nein</ToggleButton>
          </ToggleButtonGroup>
      </Box>
      
    </>
  )
}

export default PersonalDetails