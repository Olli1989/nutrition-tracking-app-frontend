import { useContext, useEffect } from 'react'
import axios from 'axios'

import Main from '../../layout/Main'
import UserContext from '../../context/UserContext'
//import { productInfoName, productInfoBarcode } from '../../api/nutritionApi'


/*API.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
  }

  return req;
});*/

const API = axios.create({ baseURL: 'http://localhost:5000' });


export default function Dashboard () {
  

  const { user } = useContext(UserContext)

  useEffect(()=>{
    function  productInfoName(data) {API.post('/product/productName', data);}
    const getNutritionNameFacts = async function(){
      
      try {
          const res = await axios.productInfoName({searchTerm: "huhn"});
          console.log(res)
          
      } catch (e){
          console.log(e)
      }
    }

  getNutritionNameFacts()


  },[])

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