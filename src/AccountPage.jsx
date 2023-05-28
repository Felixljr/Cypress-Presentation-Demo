import { useState } from 'react'
import Navbar from './components/Navbar'
import Conatiner from './components/GeneralContainer'
import Dropdown from './components/Dropdown'

export default function AccountPage() {
  const handleSignOut = (e) => {
    e.preventDefault()
    document.cookie = 'cookieForFelix=; max-age=0; path=/'
    setInterval(() => (window.location.href = '/'), 1000)
  }

  return (
    <>
      <Navbar signedIn={true} signOut={handleSignOut} />
      <div className='mt-10'>
        <Conatiner>
          <p className='title'>Dropdown</p>
          <div>
            <Dropdown />
          </div>
        </Conatiner>
      </div>
    </>
  )
}
