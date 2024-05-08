import React from 'react'
import './Footer.css'
import FaceBook from '../../assets/Images/facebook_icon.png'
import Twitter from '../../assets/Images/twitter_icon.png'
import Discord from '../../assets/Images/discord_icon.png'
import theSport from '../../assets/Images/logo-tsdb.png'
import theAudio from '../../assets/Images/logo-tadb1.png'
import Themeal from '../../assets/Images/logo-tmdb2.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-content container">

      
      <div className='footer-text'>
        <h1>© 2024 TheCocktailDB. <br />
Proudly built in the UK <img src="https://www.thecocktaildb.com/images/icons/flags/big/16/gb.png" alt="" /></h1>
      </div>

<div className="main-footer">
  <div className="socials">
  Socials:
  <Link to='https://www.facebook.com/?locale=ru_RU'>
  <img src={FaceBook} alt="" />
  </Link>
  <Link to='https://twitter.com/?lang=ru'>
   <img src={Twitter} alt="" />
  </Link>
  <Link to='https://discord.com/'>
   <img src={Discord} alt="" />
  </Link>
  </div>
  
  <div className="theLogos">
    <Link to='https://www.thesportsdb.com/'>
  <img src={theSport} alt="" />
    </Link>
    <Link to='https://www.theaudiodb.com/'>
   <img src={theAudio} alt="" />
    </Link>
    <Link to='https://www.themealdb.com/'>
   <img src={Themeal} alt="" />
    </Link>
  </div>

</div>

<div className="footer-right">
  
  <Link to='/missing'>Missing
  </Link>
  <Link to='/about'>About</Link>
  <Link to='/fag'>Faq</Link>
   <Link to='/contact'>Contact</Link>
</div>

</div>
    </footer>
  )
}

export default Footer
