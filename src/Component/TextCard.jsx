import React from 'react'
import { useNavigate } from 'react-router-dom'

function TextCard({title, link}) {
  const navigate = useNavigate()
  return (
    <div className='py-5 cursor-pointer' onClick={()=>{link && navigate(link)}}>
        <p className='bg-[#02020c] w-[fit-content] text-sm text-slate-100 px-2 py-1 rounded-lg'>{title}</p>
        <h4 className='text-base font-semibold py-2'>18 popular Nodejs starter template for your next project</h4>
        <p className='text-sm'><span className='font-bold'>Muh'd Musa</span> - 2023-12-13</p>
    </div>
  )
}

export default TextCard