import React from 'react'

const App = () => {
  return (
    <div className='h-screen flex items-center justify-center'>App
       <div className='bg-white rounded-xl p-6 w-96'>
          <form className='flex flex-col items-enter gap-2'>
            <input className=' w-full border-2 border-black px-3 py-1 text-xl rounded' type="text" placeholder='Enter name here' />
            <input className=' w-full border-2 border-black px-3 py-1 text-xl rounded' type="email" placeholder='Enter your email'/>
            <input className=' w-full border-2 border-black px-3 py-1 text-xl rounded' type="password" placeholder='Enter password'/>
            <input className=' w-full border-2 border-black px-3 py-1 text-xl rounded' type="password" placeholder='Confirm password'/>
             <button className='text-xl px-4 py-2 rounded bg-emerald-600 font-semibold mt-5 w-full'>Submit</button>
          </form>
       </div>
    </div>
  )
}
 



export default App