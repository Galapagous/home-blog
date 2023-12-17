import React from 'react'

function Footer() {
  return (
    <div className='w-[100vw] text-slate-100'>
        <div className='bg-blue-950 py-2 px-4 w-[80vw] mx-auto flex items-center justify-between'>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl'>Galapagous</h2>
            <p className='font-light'>blog</p>
        </div>
        <div>
            <p>Made with love for design</p>
        </div>
        </div>
    </div>
  )
}

export default Footer