import { useContext } from 'react'

import Main from '../../layout/Main'
import Homepage from '../../components/Homepage'
import DashboardComp from '../../components/DashboardComp'
import UserContext from '../../context/UserContext'

import './dashboard.css'

export default function Dashboard () {
  

  const { user } = useContext(UserContext)
  //const user ={}
 

  return (
    <>
      <Main>
        {
          !user ? (
            <Homepage />
          ) : (
            <DashboardComp />
          )
        }
      </Main>
    </>
  )
}