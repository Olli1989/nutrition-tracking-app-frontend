import { useContext } from 'react'

import UserContext from '../../context/UserContext'

import * as Routes from '../../constants/routes'

export default function Header() {

  const {user , setUser} = useContext(UserContext)
  

  const logOut = () => {
    setUser(null)
  }

  return (
    <header>
      <h1>Header</h1>
    </header>
  )
}