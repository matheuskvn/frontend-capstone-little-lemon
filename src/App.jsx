import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav.jsx'
import Main from './Components/Main.jsx'
import Footer from './Components/Footer.jsx'

function App() {

  return (
    <>
      <div id='root'>
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
