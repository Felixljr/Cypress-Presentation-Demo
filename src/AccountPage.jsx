import { useState } from 'react'
import Navbar from './components/Navbar'
import Conatiner from './components/GeneralContainer'

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
          <p className='title'>Attributes</p>
        </Conatiner>
      </div>
    </>
  )
}
