import { useState } from 'react'
import './index.css'
import RegisterOrLogin from './components/RegisterOrLogin'

export default function App() {
  const [modal, setModal] = useState(false)
  let whatWasSelected = ''

  const handleModal = (e) => {
    e.preventDefault()
    whatWasSelected = e.target.innerText
    if (whatWasSelected === 'Register') {
      setModal(true)
    }
    if (whatWasSelected === 'Sign In') {
      setModal(true)
    }
  }

  return (
    <>
      {modal ? (
        <div>
          <RegisterOrLogin />
        </div>
      ) : 
      <div className='bg-white w-fit h-24 rounded-lg mx-auto'>
        <div className='p-4 mt-44'>
          <p>Welcome to my demo app for Cypress!</p>
        </div>
      </div>
      }
    </>
  )
}
