import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Nav from './Components/Nav.jsx'
import Main from './Components/Main.jsx'
import Footer from './Components/Footer.jsx'

function App() {

  return (
    <>
      <div id='root'>
        <div className='header-container'>
          <div className='header-content'>
            <Header />
            <Nav />
          </div>
        </div>
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
