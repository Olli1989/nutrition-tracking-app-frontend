import {lazy, Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import './app.css'

const Dashboard = lazy(() => import('./pages/Dashboard'));
const FoodDiary = lazy(() => import('./pages/FoodDiary'));
const SignUp = lazy(() => import('./pages/Signup'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));



function App() {
  return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard/>} />
            <Route path={ROUTES.LOGIN} element={<Login/>} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp/>}/>
            <Route path={ROUTES.FOODDIARY} element={<FoodDiary/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
  );
}

export default App;
