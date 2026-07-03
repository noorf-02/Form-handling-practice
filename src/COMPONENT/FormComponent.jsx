import React, { useState } from 'react'

function FormComponent() {
    const [name , setName ] = useState('');
    const [email , setEmail ] = useState('');
    const [password , setPassword ] = useState('');

    function handleName(e){
        console.log(e.target.value)
        setName(e.target.value)
    }
    function handleEmail(e){
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    function handlePassword(e){
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    function submitDefault(e){
        e.preventDefault();
    }


  return (

    <>
    <div className='main-container wrapper flex items-center flex-col gap-10'>
      <h1 className='text-4xl font-medium mt-10'>Form with mutiple states</h1>

      <form action="" className='flex flex-col'>
        <div className='flex flex-col gap-3'>
            <label htmlFor="fullName" className='text-[20px] font-medium'>Full Name</label>
            <input className='border-1 py-2 px-5 border-gray-400 rounded-3xl w-[320px]' type="text" id='fullName' value={name} onChange={handleName} />
        </div>

        <div className='flex flex-col gap-3'>
            <label htmlFor="email" className='text-[20px] font-medium'>Email</label>
            <input className='border-1 py-2 px-5 border-gray-400 rounded-3xl w-[320px]' type="text" id='email' value={email} onChange={handleEmail} />
        </div>

        <div className='flex flex-col gap-3'>
            <label htmlFor="password" className='text-[20px] font-medium'>Password</label>
            <input className='border-1 py-2 px-5 border-gray-400 rounded-3xl w-[320px]' type="text" id='password' value={password} onChange={handlePassword} />
        </div>

        <button className='bg-green-700 text-white py-1 px-3 rounded-2xl font-medium hover:bg-green-800 w-fit my-5 text-[18px]' type='submit'>Submit</button>

      </form>
    </div>
    </>
  )
}

export default FormComponent
