export default function Conatiner({children}) {
  return (
    <div className='mx-auto w-[90%] shadow-md rounded-lg h-fit bg-white px-6 py-4 flex flex-col justify-center my-6 sm:px-6 lg:px-8 sm:w-[50%]'>
      {children}
    </div>
  )
}
