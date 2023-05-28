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
        <div className='bg-white w-fit h-24 rounded-lg mx-auto'>
          <div className='p-4 mt-44'>
            <p>Welcome to my demo app for Cypress!</p>
          </div>
        </div>
      )}
    </>
  )
}
