import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { UserProvider } from './context/UserContext';
import { DiaryProvider } from './context/DiaryContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <DiaryProvider>
        <App />
      </DiaryProvider>
    </UserProvider>
  </React.StrictMode>
);

