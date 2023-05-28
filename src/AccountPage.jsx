import { useState } from 'react'
import Navbar from './components/Navbar'


export default function AccountPage() {

  const handleSignOut = (e) => {
    e.preventDefault()
    document.cookie = 'cookieForFelix=; max-age=0; path=/'
    setInterval(() => (window.location.href = '/'), 1000)
  }

  return (
    <>
      <Navbar signedIn={true} signOut={handleSignOut} />
    </>
  )
}
