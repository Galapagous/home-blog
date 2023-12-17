import React from 'react'
import Movie from  '../assets/movie.jpg'
import { useNavigate } from 'react-router-dom'

function Postcard() {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-center py-10 gap-10'>
          <img src={Movie} alt="a movie" className='w-1/2 h-[300px] object-cover'/>
          <div className='w-1/2'>
            <p>2023-12-10 <span className='text-md font-semibold text-red-600'>movie</span></p>
            <h3 className='text-2xl py-5'>Best movie of this year so far</h3>
            <p className='pb-5 text-sm'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Vel deleniti aperiam commodi amet, vero modi dolores soluta possimus 
              assumenda, iure obcaecati magnam neque nobis ipsam.
            </p>
            <button onClick={()=>{navigate('/post/1')}} className='bg-slate-300 p-2 text-md hover:text-white hover:bg-slate-600'>
              Read More
            </button>
          </div>
        </div>
  )
}

export default Postcard