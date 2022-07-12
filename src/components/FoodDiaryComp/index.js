import React, { useState} from 'react'
import { Paper, Button, ButtonGroup, Box, Container, TextField, MenuItem, Divider, Grid} from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function FoodDiaryComp() {

  const [weightValue, setWeightValue] = useState('')
  const [sleepQuality, setSleepQuality] = useState(3)

  return (
    <>
    <Box sx={{my: 2, display: 'flex', justifyContent: 'center'}}>
        <ButtonGroup variant="contained" aria-label="" >
          <Button><ArrowBackIosNewIcon/></Button>
          <Button sx={{px: 10}}>Today</Button>  
          <Button><ArrowForwardIosIcon/></Button>
        </ButtonGroup>
      </Box>
    
    <Box sx={{display: 'flex', pb:2, gap: 3}}>
      <Box sx={{width: '100%'}}>
        <Paper elevation={1}  sx={{px: 1, py: 2}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="Breakfast-content"
                >
                  <Typography>Breakfast</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{py:0}}>
                  <Divider />
                  <Button sx={{pl:0}}>Add Food</Button>
                </AccordionDetails>
              </Accordion>              
            </Grid>

            <Grid item xs={12} md={6}>
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

            <Grid item xs={12} md={6}>
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

            <Grid item xs={12} md={6}>
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

    </Box>

    </>

  )
}

export default FoodDiaryComp