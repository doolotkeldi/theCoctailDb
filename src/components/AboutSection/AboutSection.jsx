import React from 'react'
import './AboutSection.css'
import About1 from '../../assets/Images/about1.jpg'
import About2 from '../../assets/Images/about2.png'
import About3 from '../../assets/Images/about3.png'
import About4 from '../../assets/Images/about4.png'
import About5 from '../../assets/Images/about5.jpeg'
import About7 from '../../assets/Images/about7.jpeg'
import About8 from '../../assets/Images/about8.jpeg'
import About6 from '../../assets/Images/about6.jpg'

function AboutSection() {
  return (
    <section>
        <div className="container about-container">
            <h4>About</h4>

  <p>TheCocktailDB was built in 2015 to provide a free data source api for drinks online <br />
in the hope that developers would build applications and cool projects ontop of it. <br />
TheCocktailDB originated on the Kodi forums as a way to browse cocktail recipes on your TV.</p>

<img src={About1} alt="" />
<h4>There are also some supporting Apps</h4>
<p>JavaScript https://www.npmjs.com/package/cocktail-api-search</p>
<p>Many developers have since contributed to the project and built apps on top of it. You can see some of them listed below:</p>
<div className="about-images">
    <img src={About2} alt="" />
    <img src={About3} alt="" />
</div>
<p>TheCocktailDB is also used by universities to tech web design and programming as it has an easy to use API and cool content.
</p>
<img src={About4} alt="" />
<p>There are also some chatbots available that use our API:</p>
<p>Discord https://github.com/Richardson-Media-House/Kirbi/</p>
<p>And used in Apps for Android and iPhone!</p>
<p>There is also an app created for the pebble smart watch!</p>
<div className="about-images">

<img src={About5} alt="" />
<img src={About7} alt="" />
<img src={About8} alt="" />
</div>
<p style={{marginTop:"15px"}}>There is also an app created for the pebble smart watch!</p>
<img src={About6} alt="" />
        </div>
    </section>
  )
}

export default AboutSection
