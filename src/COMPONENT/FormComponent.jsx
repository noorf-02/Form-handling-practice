import React from 'react'

function FormComponent() {
  return (
    <>
    <div className='main-container wrapper flex items-center flex-col gap-10'>
      <h1 className='text-4xl font-medium my-10'>Form with mutiple states</h1>

      <form action="" className='flex flex-col'>
        <div className='flex flex-col gap-3'>
            <label htmlFor="fullName" className='text-[20px] font-medium'>Full Name</label>
            <input className='border-1 py-1 border-gray-400 rounded-2xl w-[320px]' type="text" id='fullName' />
        </div>

        <div className='flex flex-col gap-3'>
            <label htmlFor="email" className='text-[20px] font-medium'>Email</label>
            <input className='border-1 py-1 border-gray-400 rounded-2xl w-[320px]' type="text" id='email' />
        </div>

        <div className='flex flex-col gap-3'>
            <label htmlFor="password" className='text-[20px] font-medium'>Password</label>
            <input className='border-1 py-1 border-gray-400 rounded-2xl w-[320px]' type="text" id='password' />
        </div>

        <button className='bg-green-700 text-white py-1 px-3 rounded-2xl font-medium hover:bg-green-800 w-fit my-3 text-[18px]'>Submit</button>

      </form>
    </div>
    </>
  )
}

export default FormComponent
