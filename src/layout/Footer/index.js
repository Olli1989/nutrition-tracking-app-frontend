import React from 'react'

import { AppBar, Toolbar, Typography, Container, Button, Grid } from '@mui/material'
import './footer.css'

function Footer() {
  return (
    <footer>
      <AppBar position="static" xs={{marginTop: "auto"}}>
        <Container maxWidth="xl">
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Button color="secondary" sx={{pl: 0}}>
                  Impressum
                </Button>
                <Button color="secondary">
                  Privacy
                </Button>
              </Grid>
              <Grid item>
                <Typography  color="secondary">
                  copyright &copy; Olli
                </Typography>

              </Grid>
            </Grid>
            </Toolbar>  
        </Container>
      </AppBar>
    </footer>
  )
}

export default Footer
