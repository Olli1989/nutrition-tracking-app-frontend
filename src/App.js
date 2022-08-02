import {lazy, Suspense, useContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import UserContext from './context/UserContext'
import ProtectedRoute from './services/protected-route/ProtectedRoute'
import UserLoggedIn from './services/protected-route/UserLoggedIn'
import Loading from './components/utility/Loading'
import Privacy from './pages/Privacy'
import Impressum from './pages/Impressum';

import './app.css'

const Dashboard = lazy(() => import('./pages/Dashboard'));
const FoodDiary = lazy(() => import('./pages/FoodDiary'));
const SignUp = lazy(() => import('./pages/Signup'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));


function App() {

  const { user } = useContext(UserContext)
  
  return (
    <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard/>} />
            <Route path={ROUTES.LOGIN} element={
              <UserLoggedIn user={user} redirectPath={ROUTES.DASHBOARD}>
                <Login/>
              </UserLoggedIn>
            } />
            <Route path={ROUTES.SIGN_UP} element={
              <UserLoggedIn user={user} redirectPath={ROUTES.DASHBOARD}>
                <SignUp/>
              </UserLoggedIn>
            }/>
            <Route path={ROUTES.FOODDIARY} element={
              <ProtectedRoute user={user} redirectPath={ROUTES.DASHBOARD}>
                <FoodDiary/>
              </ProtectedRoute>
            } />
            <Route path={ROUTES.PRIVACY} element={<Privacy/>}/>
            <Route path={ROUTES.IMPRESSUM} element={<Impressum/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
  );
}

export default App;
