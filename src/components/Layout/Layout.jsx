import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Outlet} from 'react-router-dom'
import FirstLetter from '../FirstLetter/FirstLetter'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <FirstLetter/>
        <Footer/>
      
    </div>
  )
}

export default Layout
