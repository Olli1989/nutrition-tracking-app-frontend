import {lazy, Suspense, useContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import UserContext from './context/UserContext'
import ProtectedRoute from './services/protected-route/ProtectedRoute'

import './app.css'

const Dashboard = lazy(() => import('./pages/Dashboard'));
const FoodDiary = lazy(() => import('./pages/FoodDiary'));
const SignUp = lazy(() => import('./pages/Signup'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));



function App() {

  //const { user } = useContext(UserContext)

  let user = {};

  return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path={ROUTES.DASHBOARD} element={
                <ProtectedRoute user={user} redirectPath={ROUTES.LOGIN}>
                  <Dashboard/>
                </ProtectedRoute>
              } />
            <Route path={ROUTES.LOGIN} element={<Login/>} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp/>}/>
            <Route path={ROUTES.FOODDIARY} element={
              <ProtectedRoute user={user} redirectPath={ROUTES.LOGIN}>
                <FoodDiary/>
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
  );
}

export default App;
