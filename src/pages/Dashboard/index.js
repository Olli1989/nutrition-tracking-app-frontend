import { useContext } from 'react'

import Main from '../../layout/Main'
import UserContext from '../../context/UserContext'


export default function Dashboard () {
  

  const { user } = useContext(UserContext)

 

  return (
    <>
      <Main>
        {
          !user ? (
            <h1>Startseite</h1>
          ) : (
            <h1>Dashboard</h1>
          )
        }
      </Main>
    </>
  )
}