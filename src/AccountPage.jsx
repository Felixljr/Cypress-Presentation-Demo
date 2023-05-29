import { useState } from 'react'
import Navbar from './components/Navbar'
import Conatiner from './components/GeneralContainer'
import Dropdown from './components/Dropdown'

export default function AccountPage() {
  const [retrievedData, setRetrievedData] = useState('')

  const handleSignOut = (e) => {
    e.preventDefault()
    document.cookie = 'cookieForFelix=; max-age=0; path=/'
    setInterval(() => (window.location.href = '/'), 1000)
  }

  const handleInterceptSection = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts/1/messages')
      const data = await response.json()
      const dataAsString = JSON.stringify(data.success)

      setRetrievedData(dataAsString)
    } catch (error) {
      console.error('Error retrieving data:', error)
    }
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
          <p className='title'>Intercepting</p>
          <div className='flex flex-row justify-evenly py-1'>
            <div className='h-fit flex flex-col justify-between'>
              <p>Real Data Button</p>
              <button
                className='bg-purple-500 p-2 rounded-lg text-white'
                data-cy='GetRealData'
                onClick={handleInterceptSection}
              >
                Real Data
              </button>
              <p className='mt-3'>CYPRESS ONLY Button</p>
              <button
                className='bg-pink-500 p-2 rounded-lg text-white'
                data-cy='GetInterceptedData'
                onClick={handleInterceptSection}
              >
                Intercept Data
              </button>
            </div>
            <div className='flex justify-center min-h-[80%] min-w-[30%] bg-slate-200 rounded-lg'>
              <p
                className='flex self-center bg-slate-200 rounded-lg p-2'
                data-cy='DataDisplay'
              >
                {retrievedData}
              </p>
            </div>
          </div>
        </Conatiner>
      </div>
    </>
  )
}
