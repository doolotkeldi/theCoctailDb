import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

const API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
function SearchByName() {
    
    const {text} = useParams()
    const [idText,setIdText] = (text)
    const [coctail,setCoctail] = useState([])
    async function getService () {

        try {

            const res = await axios.get(`${API}${idText}`)

            // if(res.status===200){
              setCoctail(res.data.drinks)
              console.log(res)
if(res.status>=400){
    setIdText("a")
}
        //   }
        //   else{
           

        //   }
            
        } catch (error) {
         console.log(error)
        }
    
 }
    // strDrinkThumb
    useEffect(()=>{
        getService()
    },[text])
 
  return (
    <div>

<div className="coctail-blocks container">
                {
                    coctail.map((item)=>(
                        <Link to={`/idCoctail/${item.idDrink}`} key={item.id} className="coctail-block">
                        <div className="coctail-block-image">
                            <img src={item.strDrinkThumb} alt="" />
                        </div>
                        {item.strDrink}
                    </Link>

                    ))
                }

            </div>
  
    </div>
  )
}

export default SearchByName
  