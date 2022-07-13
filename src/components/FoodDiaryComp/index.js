import React, { useState, useEffect } from 'react'
import { Paper, Button, ButtonGroup, Box, Container, TextField, MenuItem, Divider, Grid} from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import SearchFood from './SearchFood'

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

  const [weightValue, setWeightValue] = useState('')
  const [sleepQuality, setSleepQuality] = useState(3)
  const [openDatePicker, setOpenDatePicker] = useState(false)
  const [date, setDate] = useState(new Date());
  const [openDialog, setOpenDialog] = useState(false)
  
  let pickedDate = getDateString(date)



  return (
    <>
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{my: 2, display: 'flex', justifyContent: 'center'}}>
          <ButtonGroup variant="contained" aria-label="" >
            <Button><ArrowBackIosNewIcon/></Button>
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
                      >
                        {pickedDate}
                      </Button>

                )}
              />
            </LocalizationProvider>
            <Button><ArrowForwardIosIcon/></Button>
          </ButtonGroup>
        </Box>

      </Grid>
    </Grid>

    


    
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} order={{md: 1, xs: 2}}>
        <Box sx={{width: '100%'}}>
          <Paper elevation={1}  sx={{px: 1, py: 2}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Accordion >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Breakfast-content"
                  >
                    <Typography>Breakfast</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{py:0}}>
                    <Divider />
                    <Button sx={{pl:0}} onClick={()=>setOpenDialog(true)}>Add Food</Button>
                  </AccordionDetails>
                </Accordion>              
              </Grid>

              <Grid item xs={12} sm={6}>
                <Accordion >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Lunch-content"
                  >
                    <Typography>Lunch</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{py:0}}>
                    <Divider />
                    <Button sx={{pl:0}}>Add Food</Button>
                  </AccordionDetails>
                </Accordion>              
              </Grid>

              <Grid item xs={12} sm={6}>
                <Accordion >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Dinner-content"
                  >
                    <Typography>Dinner</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{py:0}}>
                    <Divider />
                    <Button sx={{pl:0}}>Add Food</Button>
                  </AccordionDetails>
                </Accordion>               
              </Grid>

              <Grid item xs={12} sm={6}>
                <Accordion >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Snack-content"
                  >
                    <Typography>Snack</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{py:0}}>
                    <Divider />
                    <Button sx={{pl:0}}>Add Food</Button>
                  </AccordionDetails>
                </Accordion>              
              </Grid>
            </Grid>

            </Paper>
        </Box>
      </Grid>
      
      <Grid item xs={12} md={6} order={{md: 2, xs: 1}}>
      <Box sx={{width: '100%'}}>
        

        <Paper elevation={1}  sx={{ px: 1, py: 2}}>
          <Box sx={{display: 'flex', gap: 1}}>
  
            <TextField
              sx={{width: '100%'}}
              label="Weight Today"
              type="number"
              value={weightValue}
              onChange={(e)=>{setWeightValue(e.target.value)}}
              />
            <TextField
              sx={{width: '100%'}}
              select
              label="Sleeping Quality"
              value={sleepQuality}
              onChange={(e) => {setSleepQuality(e.target.value)}}
            >
              <MenuItem key={1} value={1}>&#129321; Very good sleep</MenuItem>
              <MenuItem key={2} value={2}>&#128516; Good sleep</MenuItem>
              <MenuItem key={3} value={3}>&#128528; OK sleep</MenuItem>
              <MenuItem key={4} value={4}>&#128532; Bad sleep</MenuItem>
              <MenuItem key={5} value={5}>&#128555; Very bad sleep</MenuItem>
            </TextField>
  
          </Box>
          </Paper>
        </Box>        
      </Grid>
    </Grid>

    <SearchFood openDialog={openDialog} setOpenDialog={setOpenDialog}/>

    </>

  )
}

export default FoodDiaryComp