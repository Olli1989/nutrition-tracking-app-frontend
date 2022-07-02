import { useContext, useEffect } from 'react'
import axios from 'axios'

import Main from '../../layout/Main'
import UserContext from '../../context/UserContext'
import { productInfoName, productInfoBarcode } from '../../api/nutritionApi'
import { login } from '../../api/authApi'



const API = axios.create({ baseURL: 'http://localhost:5000' });


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