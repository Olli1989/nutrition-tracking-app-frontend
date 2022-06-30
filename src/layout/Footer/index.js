import React from 'react'

import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import './footer.css'

function Footer() {
  return (
    <footer>
      <AppBar position="static" xs={{marginTop: "auto"}}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography>
              &copy; Olli
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </footer>
  )
}

export default Footer
