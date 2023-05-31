import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Conatiner from './components/GeneralContainer'
import Dropdown from './components/Dropdown'

export default function AccountPage() {
  const [retrievedData, setRetrievedData] = useState('')
  const [location, setLocation] = useState('')
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(
          `Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`
          // `Lat: 99, Long: 88`
        )
      })
    } else {
      setLocation('Geolocation is not supported by this browser.')
    }
  }, [])

  const handleSignOut = (e) => {
    e.preventDefault()
    document.cookie = 'cookieForFelix=; max-age=0; path=/'
    setInterval(() => (window.location.href = '/'), 100)
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

  const handleSaveToClipboard = () => {
    if (inputValue) {
      navigator.clipboard
        .writeText(inputValue)
        .then(() => {
          console.log('Text saved to clipboard:', inputValue)
        })
        .catch((error) => {
          console.error('Failed to save text to clipboard:', error)
        })
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
              <p>Data Button</p>
              <button
                className='bg-purple-500 p-2 rounded-lg text-white'
                data-cy='GetRealData'
                onClick={handleInterceptSection}
              >
                Get Data
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

        <Conatiner>
          <p className='title'>Stubbing</p>
          <div className='flex flex-row justify-evenly py-1'>
            <p>What is your location?</p>
            <div className='h-fit flex flex-row justify-between w-24'>
              <button
                className='bg-purple-500 p-2 rounded-lg text-white'
                data-cy='GetLocation'
                onClick={() => setLocation(location)}
              >
                Get Location
              </button>
            </div>
            <div className='flex justify-center min-h-[80%] min-w-[50%] bg-slate-200 rounded-lg ml-5'>
              <p
                className='flex self-center bg-slate-200 rounded-lg p-2'
                data-cy='LocationDisplay'
              >
                {location}
              </p>
            </div>
          </div>
        </Conatiner>
        <Conatiner>
          <p className='title'>Spying</p>
          <div className='flex flex-row justify-evenly py-1'>
            <div className='h-fit flex flex-col justify-between'>
              <input
                type='text'
                className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 hover:border-pink-500'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Enter text to be copied'
              />
              <button
                className='bg-pink-500 p-2 rounded-lg text-white mt-2 '
                onClick={handleSaveToClipboard}
              >
                Save to Clipboard
              </button>
            </div>
          </div>
        </Conatiner>
      </div>
    </>
  )
}
