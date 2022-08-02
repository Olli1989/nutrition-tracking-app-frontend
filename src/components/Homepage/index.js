import React from 'react'
import { Typography, Grid, Box } from '@mui/material'

import HomepageFood from  '../../assets/images/homepage-food-small.webp'
import HomepageFitness from '../../assets/images/homepage-fitness-small.webp'
import HomepageHealth from '../../assets/images/homepage-health-small.webp'


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
        <Grid item xs={12} sm={6}  order={{ xs: 2, sm: 2}} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Box>
            <Typography variant="h6" component="h3" sx={{mb: 2}}>
              Food
            </Typography>
            <Box sx={{maxWidth: '450px'}}>
              <Typography >
              Die Nährstoffe Kohlenhydrate, Eiweiße und Fette sowie Vitamine, Mineralstoffe und Wasser haben im Körper viele 
              unterschiedliche Funktionen. Sie versorgen den Körper jeden Tag mit lebenswichtigen Substanzen, liefern Energie 
              und halten im Idealfall gesund und fit.
              Ist die Nahrung „optimal“, versorgt sie den Körper mit allen Nährstoffen in der nötigen Menge, die der Körper braucht, 
              um abgebaute und ausgeschiedene Stoffe auszugleichen. Außerdem liefert sie die dafür benötigte Energie.
              </Typography>
              <Typography sx={{mb: 1}}>
              (Redaktion Gesundheitsportal, 2022)
              </Typography>
              <Typography >
                <strong>„Wir leben nicht, um zu essen, sondern wir essen, um zu leben.“ </strong> - Sokrates
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} order={{ xs: 4, sm: 3}} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Box>
            <Typography variant="h6" component="h3" sx={{mb: 2}}>
              Sport
            </Typography>
            <Box sx={{maxWidth: '450px'}}>
              <Typography >
              Der menschliche Körper ist für ein Leben mit Bewegung gemacht. Bewegt man sich zu wenig, verfällt der Körper. 
              Durch Bewegung werden verschiedene Prozesse und Funktionen im Körper positiv beeinflusst und das Risiko für 
              Erkrankungen gemindert. 
              </Typography>
              <Typography sx={{mb: 1}}>
              (Stiftung Gesundheits Wissen, 2022)
              </Typography>
              <Typography >
              <strong>„Einen von zwei Schmerzen müssen wir ertragen: den Schmerz der Disziplin oder den eines schlechten Gewissens. 
              Der Unterschied ist, Disziplin wiegt Gramm, ein schlechtes Gewissen wiegt Tonnen.“</strong> – Jim Rohn
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} order={{xs: 3}}>
          <img src={HomepageFitness} alt="Person doing fitness" />
        </Grid>

        <Grid item xs={12} sm={6} order={{ xs: 5}}>
          <img src={HomepageHealth} alt="Monitor with health indicator" />
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 6}} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Box>
            <Typography variant="h6" component="h3" sx={{mb: 2}}>
              Health
            </Typography>
            <Box sx={{maxWidth: '450px'}}>
              <Typography >
              Mens sana in corpore sano – dieser Leitsatz gilt auch umgekehrt: Eine gesunde Psyche ist wichtig für das gesamte Wohlbefinden 
              des Menschen. Psychische Gesundheit macht robust, sie lässt uns das Leben genießen, sie hilft Schmerz und Enttäuschung besser zu verkraften. 
              </Typography>
              <Typography sx={{mb: 1}}>
              (Erste Hilfe für die Seele,2022)
              </Typography>
              <Typography >
                <strong>„Kümmere dich um deinen Körper. Es ist der einzige Ort, den du zum Leben hast.“</strong> - Jim Rohn
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      
    </>
  )
}

export default Homepage