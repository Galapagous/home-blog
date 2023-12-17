import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-900 flex items-center content-center'>
        <div className='w-3/4 h-4/5 m-auto flex items-center'>
        <div className='w-1/2 flex items-start px-6 justify-center bg-blue-950 text-slate-100 flex-col gap-8 h-full'>
            <h3 className='text-3xl font-bold'>Sign Up</h3>
            <p>Lorem ipsum dolor sit, amet consectetur
             adipisicing elit. Repellendus quod voluptas ad
            earum minima maxime inventore soluta impedit.
             Placeat nobis perspiciatis accusamus quae beatae 
             expedita quis laboriosam? Ut, recusandae?</p>
             <Link className='flex items-center justify-center p-1 bg-inherit border-slate-50 border-2 w-[200px] text-slate-50 font-semibold rounded-xl hover:bg-white hover:text-blue-950' to='/login'>Login</Link>
        </div>
        <div className='w-1/2 px-32 bg-white h-full flex items-start justify-center flex-col gap-10'>
            <h1 className='text-3xl font-bold'>Register</h1>
            <form action="" className='flex flex-col items-start content-center gap-4'>
                <input required className='border-2 border-gray-500 p-1 w-[200px]' type="text" placeholder='firstName'/>
                <input required className='border-2 border-gray-500 p-1 w-[200px]' type="text" placeholder='lastName'/>
                <input required className='border-2 border-gray-500 p-1 w-[200px]' type="email" placeholder='email'/>
                <input required className='border-2 border-gray-500 p-1 w-[200px]' type="password" placeholder='passwrd'/>
                <button className='p-1 bg-gradient-to-r from-pink-600 to-cyan-600 w-[200px] text-slate-50 font-semibold rounded-xl hover:bg-gradient-to-r hover:from-pink-900 hover:to-cyan-900'>Register</button>
            <p className='text-red-600 mx-auto'>Error signing in</p>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Register