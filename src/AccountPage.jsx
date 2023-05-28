import { useState } from 'react'
import Navbar from './components/Navbar'


export default function AccountPage() {

  const handleSignOut = (e) => {
    e.preventDefault()
    //delete cookie
    document.cookie = 'cookieForFelix=; max-age=0; path=/'
    //redirect to home
    setInterval(() => (window.location.href = '/'), 200)
  }

  return (
    <>
      <Navbar signedIn={true} signOut={handleSignOut} />
    </>
  )
}
