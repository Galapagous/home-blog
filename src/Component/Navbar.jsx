import React from 'react'
import Profile from '../assets/prof.jpg'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='w-[100vw] px-4 py-2 bg-[#02020c] text-slate-200'>
        <div className='px-3 flex items-center justify-between'>
            <div className='flex w-[150px] rounded-2xl items-center justify-between border-2 border-slate-100'>
                <input className='border-none bg-inherit w-2/4 outline-none px-2 text-sm font-bold' type="text" />
                <Search/>
            </div>
            <div>
                <h1 onClick={()=>{navigate(`/`)}} className='text-4xl cursor-pointer'>Galapagous.</h1>
            </div>
            <div className='flex items-center gap-2 cursor-pointer' onClick={()=>{navigate(`/profile/musa`)}} >
                <span>John</span>
                <img className='w-[30px] h-[30px] rounded-full object-cover' src={Profile} alt="profile" />
            </div>
        </div>
        <div className='w-full flex mt-2 items-center justify-center'>
            <div className='flex items-center gap-4'>
                {
                    [
                        'Art',
                        'Technology',
                        'Coding',
                        'Design',
                        'Food'
                    ].map(title=>(
                        (<span key={title} onClick={()=>{navigate(`/category/${title}`)}} className='hover:bg-slate-50 hover:text-blue-950 px-2 py-1 rounded-full cursor-pointer'>{title}</span>)
                    ))
                }
                <span onClick={()=>{navigate(`/write/1`)}} className='hover:bg-slate-50 hover:text-blue-950 px-2 py-1 rounded-full cursor-pointer'>Write</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar