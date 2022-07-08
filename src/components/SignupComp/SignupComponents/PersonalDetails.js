import React from 'react'
import { Typography, TextField, InputAdornment, Box, FormControl, InputLabel, Select,MenuItem, ToggleButtonGroup, ToggleButton} from '@mui/material'

function getAgeArray () {
  let newArr = []

  for(let i = 18; i<100; i++){
    newArr.push(i)
  }

  return newArr
}

function PersonalDetails({handleChange, values}) {

  const ages = getAgeArray()
    .map((age, i) => {
      return <MenuItem value={age} key={age+''+i}>{age}</MenuItem>
    })



  return (
    <>
      <Typography variant="h5" component="h3" sx={{textAlign: 'center', mb: 1.5}}>
        Personal Details
      </Typography>
      <Box sx={{display: 'flex'}}>
        <TextField
          label="Weight"
          sx={{ m: 1, }}
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
          value={values.weight}
          onChange={({target})=>{handleChange(target.value,'weight')}}
        />

        <TextField
          label="Height"
          sx={{ m: 1,}}
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
          value={values.height}
          onChange={({target})=>{handleChange(target.value,'height')}}
        />
      </Box>

      <Box sx={{display: 'flex'}}>
        <FormControl>
          <InputLabel>Age</InputLabel>
          <Select
            value={values.age}
            label="Age"
            onChange={handleChange}
          >
            {ages}
          </Select>
        </FormControl>

        <ToggleButtonGroup 
          onChange={({target}) => handleChange(target.value,'gender')} 
          value={values.gender}
          name="gender" 
          exclusive={true} 
          size="small"
        >
            <ToggleButton value="w">Woman</ToggleButton>
            <ToggleButton value="m">Man</ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup 
          onChange={({target}) => handleChange(target.value,'gender')} 
          value={values.gender}
          name="intensity" 
          exclusive={true} 
          size="small"
        >
            <ToggleButton value="w">Woman</ToggleButton>
            <ToggleButton value="m">Man</ToggleButton>
        </ToggleButtonGroup>
      </Box>

    </>
  )
}

export default PersonalDetails