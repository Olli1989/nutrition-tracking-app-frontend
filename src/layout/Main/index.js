import Header from '../Header';
import Footer from '../Footer';
import { Container, Box } from '@mui/material'

function Main({children}) {
  return (

    <Box sx={{display:'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header/>
      <Container maxWidth="xl" sx={{flexGrow: 1}}>
        <main>
          {children}
        </main>
      </Container>
      <Footer/>
    </Box>
  )
}

export default Main