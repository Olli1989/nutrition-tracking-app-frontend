import { Box} from '@mui/material'

import LoginComp from '../../components/LoginComp'
import './login.css'


function Login() {
  
  return (
    <main>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        bgcolor="primary.main"
      >
        <LoginComp />
      </Box>
    </main>
  )
}

export default Login