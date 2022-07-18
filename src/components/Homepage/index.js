import React from 'react'
import { Typography, Grid, Box } from '@mui/material'

import HomepageFood from  '../../assets/images/homepage-food.jpg'
import HomepageFitness from '../../assets/images/homepage-fitness.jpg'
import HomepageHealth from '../../assets/images/homepage-health.jpg'


function Homepage() {
  return (
    <>
      <Typography variant="h4" component="h2" sx={{textAlign: 'center', my: 4}}>
        The Food Tracking World
      </Typography>
      <Grid container spacing={2}  sx={{mb: 4}}>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 1}}>
          <img src={HomepageFood} alt="Healthy food" />
        </Grid>
        <Grid item xs={12} sm={6}  order={{ xs: 2, sm: 2}} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant="h6" component="h3">
            Food
          </Typography>
          <Box sx={{maxWidth: '450px'}}>
            <Typography >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit harum, nemo numquam repellat hic 
              nam architecto voluptates quasi aliquam. Laboriosam nisi quasi voluptates labore quia culpa obcaecati fugit debitis!
            </Typography>
            <Typography >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit harum, nemo numquam repellat hic 
              nam architecto voluptates quasi aliquam. Laboriosam nisi quasi voluptates labore quia culpa obcaecati fugit debitis!
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} order={{ xs: 4, sm: 3}} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant="h6" component="h3">
            Sport
          </Typography>
          <Box sx={{maxWidth: '450px'}}>
            <Typography >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit harum, nemo numquam repellat hic 
              nam architecto voluptates quasi aliquam. Laboriosam nisi quasi voluptates labore quia culpa obcaecati fugit debitis!
            </Typography>
            <Typography >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit harum, nemo numquam repellat hic 
              nam architecto voluptates quasi aliquam. Laboriosam nisi quasi voluptates labore quia culpa obcaecati fugit debitis!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} order={{xs: 3}}>
          <img src={HomepageFitness} alt="Person doing fitness" />
        </Grid>

        <Grid item xs={12} sm={6} order={{ xs: 5}}>
          <img src={HomepageHealth} alt="Monitor with health indicator" />
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 6}}sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant="h6" component="h3">
            Health
          </Typography>
          <Box sx={{maxWidth: '450px'}}>
            <Typography >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit harum, nemo numquam repellat hic 
              nam architecto voluptates quasi aliquam. Laboriosam nisi quasi voluptates labore quia culpa obcaecati fugit debitis!
            </Typography>
            <Typography >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit harum, nemo numquam repellat hic 
              nam architecto voluptates quasi aliquam. Laboriosam nisi quasi voluptates labore quia culpa obcaecati fugit debitis!
            </Typography>
          </Box>
        </Grid>
      </Grid>
      
    </>
  )
}

export default Homepage