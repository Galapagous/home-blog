import React, { useState } from 'react'
import Cover from '../assets/register.jpg'
import Prof from '../assets/prof.jpg'
import TextCard from '../Component/TextCard'
import Postcard from '../Component/Postcard'
import { Cancel, Email, LocationOn, Person } from '@mui/icons-material'

function Profile() {
  const [update, SetUpdate] = useState(false)
  const handleShowUpdate = (type)=>{
      if(type == 'open'){
        return(SetUpdate(true))
      }else{
        return(SetUpdate(false))
      }
  }
  return (
    <div className='w-screen py-2 px-10'>
      <div className='w-full relative'>
        <img src={Cover} className='w-full h-[350px]' alt="" />
        <img className='w-[100px] h-[100px] object-cover rounded-full absolute right-1/2 border-white border-4 bottom-[-1rem]' src={Prof} alt="" />
      </div>
    <div className='py-10 flex flex-col items-center gap-5 mx-auto justify-center relative'>
      <h2><Person className='text-red-800'/> Muhammed Musa</h2>
      <span><Email className='text-red-800'/> galapagous@gmail.com</span>
      <div><LocationOn className='text-red-800'/> Nigeria</div>
      <button onClick={()=>{handleShowUpdate('open')}} className='px-4 py-2 bg-red-500 text-slate-50 mt-4'>Edit Profile</button>
      {update === true && <div className='absolute w-full h-screen flex items-center justify-center bg-gray-800 opacity-95'>
      <form action="" className='flex flex-col items-start justify-center gap-6'>
        <div className='w-auto text-white flex items-center gap-4'>
          <label className='w-20' htmlFor="">FirstName</label>
          <input className='border-b-2 p-1 border-gray-500' type="text" placeholder='Firstname'/>
        </div>
        <div className='w-auto text-white flex items-center gap-4'>
          <label className='w-20' htmlFor="">LastName</label>
          <input className='border-b-2 p-1 border-gray-500' type="text" placeholder='Lastname'/>
        </div>
        <div className='w-auto text-white flex items-center gap-4'>
          <label className='w-20' htmlFor="">Email</label>
          <input className='border-b-2 p-1 border-gray-500' type="text" placeholder='Email'/>
        </div>
        <div className='w-auto text-white flex items-center gap-4'>
          <label className='w-20' htmlFor="">Location</label>
          <input className='border-b-2 p-1 border-gray-500' type="text" placeholder='Location'/>
        </div>
        <button className='text-white text-center mx-auto bg-green-600 px-3 py-2'>Update</button>
        <span onClick={()=>{handleShowUpdate('close')}} className='absolute top-24 right-40 text-red-600 w-[60px] h-[60px] cursor-pointer'><Cancel/></span>
      </form>
      </div>}
    </div>
    <div>
    <h2 className='text-2xl font-semibold text-left mb-2 mt-5'>Your Posts</h2>
      <div className='flex items-center flex-wrap'>
      <Postcard/>
      <Postcard/>
      <Postcard/>
      <Postcard/>
      </div>
    </div>
    </div>
  )
}

export default Profile