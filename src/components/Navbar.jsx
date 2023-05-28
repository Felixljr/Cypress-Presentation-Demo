export default function Navbar({ modal, signedIn }) {
  return (
    <>
      {signedIn ? (
        <div className='bg-white shadow mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 justify-between items-center'>
            <h1 className='text-xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text sm:text-3xl italic'>
              Felix' Cypress Demo
            </h1>

            <div className='flex flex-row w-44 justify-end'>
              <button
                className='bg-black text-white rounded-md p-2 mr-2'
                onClick={modal}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='bg-white shadow mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 justify-between items-center'>
            <h1 className='text-xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text sm:text-3xl italic'>
              Felix' Cypress Demo
            </h1>
            <div className='flex flex-row w-44 justify-end'>
              <button
                className='bg-black text-white rounded-md p-2 mr-2'
                onClick={modal}
              >
                Sign In / Register
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
