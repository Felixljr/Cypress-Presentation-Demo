import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Register from './components/Register'

function App() {
  return (
    <>
      <Navbar />
      <div className=''>
        <Register />
      </div>
      
    </>
  )
}

export default App
