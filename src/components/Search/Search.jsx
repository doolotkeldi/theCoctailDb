import React, { useState } from 'react'

import './Search.css'
import SearchImage from '../../assets/svg/Search.svg'
import SearchImage1 from '../../assets/Images/4.png'
import SearchImage2 from '../../assets/Images/5.png'
import SearchImage3 from '../../assets/Images/6.png'

import { useParams , useNavigate, Link } from 'react-router-dom'

function Search() {

  const [text,setText] = useState("")
  const navigate = useNavigate()
  function submitHandler (event) {
    event.preventDefault()
    if(text.trim()!==''){

      navigate(`/search/${text}`)
    }

  }
  return (
    <section>
      
        <form onSubmit={submitHandler} className="search-content container">
            <div className="line-content"></div>
            <div className="input-content">
                <input onChange={(event)=>setText(event.target.value)} value={text} placeholder='Search for a Coctail...' type="text" />
                <button type='submit'><img src={SearchImage} alt="" /></button>
            </div>
            <div className="text-content-search">
                <img src={SearchImage1} alt="" />
                Total Drinks: 636
                <img src={SearchImage2} alt="" />
                Total Ingredients: 489
                <img src={SearchImage3}alt="" />
                Drink Images: 636(93cc)
            </div>
            <div className="line-content"></div>
        </form>
   
    </section>
  )
}

export default Search
