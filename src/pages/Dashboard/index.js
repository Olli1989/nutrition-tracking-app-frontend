import { useContext } from 'react'
import Header from '../../layout/Header/'

import UserContext from '../../context/UserContext'


export default function Dashboard () {

  const { user } = useContext(UserContext)


  return (
    <>
      <Header />
      {
        !user ? (
          <h1>Startseite</h1>
        ) : (
          <h1>Dashboard</h1>
        )
      }
    </>
  )
}