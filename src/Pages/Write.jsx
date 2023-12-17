import React, { useState } from 'react'
import Business from '../assets/login.jpg'
import Gold from '../assets/gold.jpg'
import { Upcoming, Upload } from '@mui/icons-material'

function Write() {
  const [postImage, setPostImage] = useState(null)
  const [checkValue, setCheckValue] = useState(null)
  const handleCheck = (option)=>{
    setCheckValue(option === checkValue ? null : option);
  }
  return (
    <div className='w-screen px-10 py-5'>
      <img src={Business} alt="" className='w-full h-[400px] object-cover'/>
      <div>
      <form action="" className='flex items-center flex-col mt-4'>
      <div className='flex items-center w-full gap-10'>
      <div className='w-2/3 flex flex-col items-start'>
        <input className='w-full border-2 p-2 mb-2' type='text' placeholder='Title'/>
        <textarea className='w-full border-2 p-2 my-2' placeholder='Make it interesting' name="" id="" cols="30" rows="10"></textarea>
        <div className='flex items-center py-5 w-full justify-center'>
        <div className='flex items-center justify-center w-auto gap-10'>
          <label htmlFor="upload" className='cursor-pointer mr-5 w-[30px] h-[30px] rounded-full border-2 border-[#02020c] flex items-center justify-center'><Upload className='text-[#02020c]'/></label>
          <input id='upload' name='upload' type="file" className='hidden'/>
        </div>
        <img src={Gold} alt="" className='w-[200px] h-[100px] object-cover rounded-md'/>
        </div>
      </div>
      <div className='w-1/3 flex flex-col items-start gap-4 justify-center'>
        <h1>Category</h1>
        <label htmlFor="">
          <input className='mr-2' checked={checkValue === 'Art'} onChange={()=>{handleCheck('Art')}} type='checkbox' />
          Art
        </label>
        <label htmlFor="">
          <input className='mr-2' checked={checkValue === 'Coding'} onChange={()=>{handleCheck('Coding')}} type='checkbox' />
          Technology
        </label>
        <label htmlFor="">
          <input className='mr-2' checked={checkValue === 'Technology'} onChange={()=>{handleCheck('Technology')}} type='checkbox' />
          Coding
        </label>
        <label htmlFor="">
          <input className='mr-2' checked={checkValue === 'Design'} onChange={()=>{handleCheck('Design')}} type='checkbox' />
          Design
        </label>
        <label htmlFor="">
          <input className='mr-2' checked={checkValue === 'Food'} onChange={()=>{handleCheck('Food')}} type='checkbox' />
          Food
        </label>
      </div>
      </div>
      <button className='px-4 py-1 bg-[#02020c] border-2 border-[#02020c] hover:bg-white hover:text-[#02020c] text-white'>Post</button>
      </form>
      </div>
    </div>
  )
}

export default Write