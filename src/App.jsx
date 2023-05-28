import { useState } from 'react'
import './index.css'
import RegisterOrLogin from './components/RegisterOrLogin'
import Navbar from './components/Navbar'

export default function App() {
  const [modal, setModal] = useState(false)

  const handleModal = (e) => {
    e.preventDefault()
    setModal(!modal)
    console.log('modal')
  }

  return (
    <>
      <Navbar modal={handleModal} />
      {modal ? (
        <div>
          <RegisterOrLogin modal={handleModal} />
        </div>
      ) : (
        <div
          className='bg-white w-fit h-fit rounded-lg mx-auto shadow-lg'
          data-cy='welcome'
        >
          <div className='p-8 mt-44'>
            <p className='underline italic mb-6'>
              Welcome to my demo app for Cypress!
            </p>

            <p>username: felix@felix.com</p>
            <p>password: 1234</p>
          </div>
        </div>
      )}
    </>
  )
}
