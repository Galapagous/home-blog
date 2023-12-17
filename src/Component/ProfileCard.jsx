import React from 'react'
import Profile from '../assets/prof.jpg'

function ProfileCard() {
  return (
    <div>
        <div className='flex items-center gap-5'>
          <img className='w-[40px] h-[40px] rounded-full object-cover' src={Profile} alt="" />
          <div>
            <p>George Orwel</p>
            <span>1999-10-12</span>
          </div>
        </div>
    </div>
  )
}

export default ProfileCard