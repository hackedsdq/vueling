import React from 'react'
import Footer from '../../shared-components/footer/Footer'
import Navbar from '../../shared-components/navbar/Navbar'
import Main from './components/main/Main'
import "./style.css"
export default function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Main/>
      <Footer/>
    </div>
  )
}
