export default function Navbar() {
  return (
    <div className='bg-white shadow mx-auto px-2 sm:px-6 lg:px-8'>
      <div className='relative flex h-16 justify-between items-center'>
        <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>
          Felix' Cypress Demo
        </h1>
        <div className='flex flex-row w-44 justify-end'>
          <button className='bg-black text-white rounded-md p-2 mr-2'>
            Register
          </button>
          <button className='bg-black text-white rounded-md p-2'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}