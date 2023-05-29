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
      <div className='mt-4 h-fit flex flex-col justify-between'>
        <Conatiner>
          <p className='title'>Dropdown</p>
          <div>
            <Dropdown />
          </div>
        </Conatiner>

        <Conatiner>
          <p className='title'>Attributes</p>
          <div className='flex flex-row justify-evenly'>
            <button
              className='bg-purple-500 p-2 rounded-lg text-white'
              data-cy='active'
            >
              Active
            </button>
            <button
              className='bg-pink-500 p-2 rounded-lg text-white opacity-75 cursor-not-allowed'
              data-cy='notActive'
              disabled
            >
              Disabled
            </button>
          </div>
        </Conatiner>

        <Conatiner>
          <p className='title'>Attributes</p>
          
        </Conatiner>
      </div>
    </>
  )
}
