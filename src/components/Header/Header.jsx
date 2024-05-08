import React, { useState } from 'react'
import Logo from '../../assets/Images/logo.png'
import './Header.css'
import { Link,useNavigate } from 'react-router-dom'
function Header() {
  const navigate = useNavigate()

  const [text,setText] = useState('')
  document.addEventListener("keydown",function (event) {
    if(event.key==="Enter"){
  if(text.trim()!==""){
  navigate(`/search/${text}`)
  setText('')
  
}

}
})
  return (
    <header className='header'>
        
        <div className='container header-content'>
     <div>
        <img src={Logo} alt="" />
     </div>
     <div className="header-right">
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/api'>
        <h1>API</h1>
      </Link>
        <input onChange={(event)=>setText(event.target.value)} value={text} placeholder='Search' type="text" />
     </div>
     </div>
    </header>
  )
}

export default Header
