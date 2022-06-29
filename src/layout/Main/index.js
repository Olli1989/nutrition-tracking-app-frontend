import Header from '../Header';
import Footer from '../Footer';
import { Container } from '@mui/material'

function Main({children}) {
  return (
    <>
      <Header/>
      <main>
        <Container maxWidth="xl">
          {children}
        </Container>
      </main>
      <Footer/>
    </>
  )
}

export default Main