import React, { useState, useEffect, useContext} from 'react'
import { Paper, Button, ButtonGroup, Box, Container, TextField, MenuItem, Divider, Grid} from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EditIcon from '@mui/icons-material/Edit';
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import RemoveIcon from '@mui/icons-material/Remove';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import * as api from '../../api/authApi'
import calcCalorieRequiement from '../../services/helper-func/calcMetabolism'
import Usercontext from '../../context/UserContext'
import SearchFood from './SearchFood'
import RecommendedCalorie from '../utility/RecommendedCalorie'
import RecommendedCalorieChart from '../utility/RecommendedCalorieChart'
import getFormatedDate from '../../services/helper-func/getFormatedDate'
import EditFood from './EditFood'

function getDateString(pickedDate){

  let pickedDay = pickedDate.getUTCDate()
  let pickedMonth = pickedDate.getUTCMonth()+1
  let pickedYear = pickedDate.getUTCFullYear()
  let today = new Date()
  let todayDay = today.getUTCDate()
  let todayMonth = today.getUTCMonth()+1
  let todayYear = today.getUTCFullYear()

  if(pickedYear === todayYear && pickedMonth === todayMonth){
    if(pickedDay === todayDay){
      return "Today"
    } else if(pickedDay === todayDay-1){
      return "Yesterday"
    } else if(pickedDay === todayDay + 1){
      return "Tomorrow"
    }
  }

  return `${pickedDay}.${pickedMonth}.${pickedYear}`

}



function FoodDiaryComp() {
  const {user, setUser} = useContext(Usercontext)

  const [weightValue, setWeightValue] = useState(user.personalData.weightValue || 70)
  const [sleepQuality, setSleepQuality] = useState(0)
  const [openDatePicker, setOpenDatePicker] = useState(false)
  const [date, setDate] = useState(new Date());
  const [openDialog, setOpenDialog] = useState(false)
  const [openEditFoodDialog, setOpenEditFoodDialog] = useState(false)
  const [addingCategory, setAddingCategory] = useState('')
  const [saveData, setSaveData] = useState(false)
  const [editFood, setEditFood] = useState("")
  const [editCategoryFood, setEditCategoryFood] = useState("")
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }


  let pickedDate = getDateString(date)

  let todayDateFormated = getFormatedDate(date)


  function handleRemoveItem(productName, category){
    setUser(prevState => {
      delete prevState['diary'][todayDateFormated][category][productName]
      return {...prevState}
    })
    setOpenDialog(false)
  }

  function getCategoryArray (categoryObj, category){
    let renderArr = []

    for(let key in categoryObj){

      
      renderArr.push([key])
    }

    renderArr = renderArr.map((item,i) => {

      return (
        
        <Box
          bgcolor="#777"
          sx={{my: 1,p:1,borderRadius:'10px'}}
          key={item + "" + i}
        > 
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>

            <Button onClick={()=>{handleRemoveItem(item, category)}}>
              <RemoveIcon />
            </Button>
            <Button onClick={()=>{setEditFood(item);setOpenEditFoodDialog(true);setEditCategoryFood(category)}} >
              <EditIcon />
            </Button>
            </Box>
          
          <Typography><strong>{item}</strong></Typography>
          <Box>
            <Typography variant="body2">
              Amount: {categoryObj[item]['amount']}g
            </Typography>
            <Typography variant="body2">
              Kcal: {categoryObj[item]['kcal']}
            </Typography>
            <Typography variant="body2">
              Protein: {categoryObj[item]['protein']}
            </Typography>
            <Typography variant="body2">
              Carb: {categoryObj[item]['carb']}
            </Typography>
            <Typography variant="body2">
              Fat: {categoryObj[item]['fat']}
            </Typography>
          </Box>
        </Box>
        
      
      )
    })

    return renderArr
    
  }


  

  const addOrSubstrat1Day = (addOrSubstract) => {
    let newDate = new Date(date)
    newDate.setDate(newDate.getDate()+addOrSubstract)
    setDate(newDate)  
  }

  const handleSaveData = () => {
    setSaveData(true)
  }

  useEffect(()=>{
    async function saveFoodData () {
      try {
        const { data } = await api.saveData({email: user.email, diary: user.diary})
        setOpenAlert(true);

      } catch (e){
        console.log(e)

      }
      setSaveData(false)    
    }
    
    if(saveData){
      saveFoodData()
    }
  }, [saveData])
  
  const handleWeightChange = (e) => {
    setWeightValue(e.target.value)
    setUser(prevState => {
      return {...prevState, ['diary']: {...prevState['diary'], [todayDateFormated]:{...prevState['diary'][todayDateFormated], weight: e.target.value }}}
    })
  } 

  const handleSleepQualityChange = (e) => {
    setSleepQuality(e.target.value)
    setUser(prevState => {
      return {...prevState, ['diary']: {...prevState['diary'], [todayDateFormated]:{...prevState['diary'][todayDateFormated], sleepQuality: e.target.value }}}
    })
  }

  //Toast Snackbar for successfully update MongoDB

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [openAlert, setOpenAlert] = useState(false);

  const handleClick = () => {
    setOpenAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };


  return (
    <>
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{my: 2, display: 'flex', justifyContent: 'center'}}>
          <ButtonGroup variant="contained" aria-label="" >
            <Button color="secondary" onClick={()=>{addOrSubstrat1Day(-1)}}><ArrowBackIosNewIcon /></Button>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                open={openDatePicker}
                onClose={() => setOpenDatePicker(false)}
                label="Custom input"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue._d);
                }}
                renderInput={({ inputRef, inputProps }) => (
                      <Button
                        sx={{width: '200px'}}
                        ref={inputRef} {...inputProps}
                        onClick={() => setOpenDatePicker(isOpen => !isOpen)}
                        color="secondary"
                      >
                        {pickedDate}
                      </Button>

                )}
              />
            </LocalizationProvider>
            <Button color="secondary" onClick={()=>{addOrSubstrat1Day(1)}}><ArrowForwardIosIcon /></Button>
          </ButtonGroup>
        </Box>

      </Grid>
    </Grid>

    <Grid container justifyContent="center" >
      <Grid item sx={{mb: 2}}>
        <Button onClick={handleSaveData} variant="contained" color="secondary">
          Save Data
        </Button>
      </Grid>
    </Grid>


    
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} order={{md: 1, xs: 2}}>
        <Box sx={{width: '100%'}}>
          <Paper elevation={1}  sx={{px: 1, py: 2}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Accordion expanded={expanded === 'breakfast'} onChange={handleChange('breakfast')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Breakfast-content"
                  >
                    <Typography>Breakfast</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{py:0}}>
                  {user['diary'][todayDateFormated] ? getCategoryArray(user['diary'][todayDateFormated]['breakfast'], 'breakfast') : <Typography>No food added!</Typography>}
                    <Divider />
                    <Button sx={{pl:0}} onClick={()=>{setOpenDialog(true); setAddingCategory('breakfast')}} color="secondary">Add Food</Button>
                  </AccordionDetails>
                </Accordion>              
              </Grid>

              <Grid item xs={12} sm={6}>
                <Accordion expanded={expanded === 'lunch'} onChange={handleChange('lunch')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Lunch-content"
                  >
                    <Typography>Lunch</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{py:0}}>
                  {user['diary'][todayDateFormated] ? getCategoryArray(user['diary'][todayDateFormated]['lunch'], 'lunch') : <Typography>No food added!</Typography>}
                    <Divider />
                    <Button sx={{pl:0}} onClick={()=>{setOpenDialog(true); setAddingCategory('lunch')}} color="secondary">Add Food</Button>
                  </AccordionDetails>
                </Accordion>              
              </Grid>

              <Grid item xs={12} sm={6}>
                <Accordion expanded={expanded === 'dinner'} onChange={handleChange('dinner')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Dinner-content"
                  >
                    <Typography>Dinner</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{py:0}}>
                  {user['diary'][todayDateFormated] ? getCategoryArray(user['diary'][todayDateFormated]['dinner'],  'dinner') : <Typography>No food added!</Typography>}
                    <Divider />
                    <Button sx={{pl:0}}  onClick={()=>{setOpenDialog(true); setAddingCategory('dinner')}} color="secondary">Add Food</Button>
                  </AccordionDetails>
                </Accordion>               
              </Grid>

              <Grid item xs={12} sm={6}>
                <Accordion expanded={expanded === 'snack'} onChange={handleChange('snack')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Snack-content"
                  >
                    <Typography>Snack</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{py:0}} >
                  {user['diary'][todayDateFormated] ? getCategoryArray(user['diary'][todayDateFormated]['snack'], 'snack') : <Typography>No food added!</Typography>}
                    <Divider />
                    <Button sx={{pl:0}} onClick={()=>{setOpenDialog(true); setAddingCategory('snack')}} color="secondary">Add Food</Button>
                  </AccordionDetails>
                </Accordion>              
              </Grid>
            </Grid>

            </Paper>
        </Box>
      </Grid>
      
      <Grid item xs={12} md={6} order={{md: 2, xs: 1}}>
      <Box sx={{width: '100%'}}>
        
        <Paper elevation={1}  sx={{ px: 1, py: 2, mb: 3}}>
          <Box sx={{position: 'relative', zIndex: 100}}>
            <RecommendedCalorieChart metabolism={calcCalorieRequiement(user.personalData)} date={todayDateFormated}/>
  
          </Box>
        </Paper>

        <Paper elevation={1}  sx={{ px: 1, py: 2, mb: 3}}>
          <Box sx={{display: 'flex', gap: 1}}>
  
            <TextField
              sx={{width: '100%'}}
              label="Weight Today"
              type="number"
              value={weightValue}
              onChange={(e)=>{handleWeightChange(e)}}
              />
            <TextField
              sx={{width: '100%'}}
              select
              label="Sleeping Quality"
              value={sleepQuality}
              onChange={(e) => {handleSleepQualityChange(e)}}
            >
              <MenuItem value={0} disabled>
                <em>Select the value</em>
              </MenuItem>
              <MenuItem key={1} value={1}>&#129321; Very good sleep</MenuItem>
              <MenuItem key={2} value={2}>&#128516; Good sleep</MenuItem>
              <MenuItem key={3} value={3}>&#128528; OK sleep</MenuItem>
              <MenuItem key={4} value={4}>&#128532; Bad sleep</MenuItem>
              <MenuItem key={5} value={5}>&#128555; Very bad sleep</MenuItem>
            </TextField>
  
          </Box>
          </Paper>

          <Paper elevation={1}  sx={{ px: 1, py: 2, mb: 3}}>
          <Box>
            <Typography variant="h6" component="h2">Recommended Calorie Intake</Typography>
            <RecommendedCalorie metabolism={calcCalorieRequiement(user.personalData)} date={todayDateFormated}/>
  
          </Box>
          </Paper>
          

          
        </Box>        
      </Grid>
    </Grid>

      <SearchFood openDialog={openDialog} setOpenDialog={setOpenDialog} date={todayDateFormated} addingCategory={addingCategory}/>
      {openEditFoodDialog && <EditFood open={openEditFoodDialog} setOpenEditFoodDialog={setOpenEditFoodDialog} editFood={editFood} date={todayDateFormated} addingCategory={editCategoryFood}/>}
      
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Successfully Updated!
        </Alert>
      </Snackbar>
    
    </>

  )
}

export default FoodDiaryComp