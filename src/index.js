import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider  } from '@mui/material';

import App from './App';
import { UserProvider } from './context/UserContext';
import { DiaryProvider } from './context/DiaryContext';

const appTheme = createTheme({
  palette: {
    primary: {
      main: '#90BF3D'
    },
    secondary: {
      main: '#126B58',
    },
    info: {
      main: '#B83255'
    },
    warning: {
      main: '#2AB899'
    },
    success: {
      main: '#526B28'
    }
    
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <DiaryProvider>
        <ThemeProvider theme={appTheme}>
          <App />
        </ThemeProvider>
      </DiaryProvider>
    </UserProvider>
  </React.StrictMode>
);

