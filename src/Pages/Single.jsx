import React, { useEffect } from 'react'
import Profile from '../assets/prof.jpg'
import Cashier from '../assets/cashier.jpg'
import TextCard from '../Component/TextCard'
import { useNavigate } from 'react-router-dom'
import ProfileCard from '../Component/ProfileCard'

function Single() {
  const navigate = useNavigate()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='w-screen px-40'>
      <div className='flex items-center gap-4 justify-center w-full py-5'>
        <div className=''>
        <h1 className='text-3xl font-semibold mb-2'>
          Never Abandone the Truth
        </h1>
        <div className='flex items-center gap-5'>
          <img className='w-[40px] h-[40px] rounded-full object-cover' src={Profile} alt="" />
          <div>
            <p>George Orwel</p>
            <span>1999-10-12</span>
          </div>
        </div>
        </div>
        <img className='w-[450px] h-1/2' src={Cashier} alt="" />
      </div>
      {/* ------------bottom section------------ */}
      <div className='py-10 flex items-start justify-center gap-10'>
        <div className='w-2/3'>
        <p className=''>
          In his novel in 1984 orwell maintain that in order to protect ourselve from the authoritarian, 
          we must never abandone the truth. The authoritarian want absolute control over our thought, and
          in order to achieve this, they Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quis
           eveniet quisquam iusto, quasi nam itaque doloremque ducimus, laboriosam reprehenderit mollitia 
           sunt in incidunt id. Reiciendis ullam sint fugit deleniti?
          In his novel in 1984 orwell maintain that in order to protect ourselve from the authoritarian, 
          we must never abandone the truth. The authoritarian want absolute control over our thought, and
          in order to achieve this, they Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quis
           eveniet quisquam iusto, quasi nam itaque doloremque ducimus, laboriosam reprehenderit mollitia 
           sunt in incidunt id. Reiciendis ullam sint fugit deleniti?
          In his novel in 1984 orwell maintain that in order to protect ourselve from the authoritarian, 
          we must never abandone the truth. The authoritarian want absolute control over our thought, and
          in order to achieve this, they Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quis
           eveniet quisquam iusto, quasi nam itaque doloremque ducimus, laboriosam reprehenderit mollitia 
           sunt in incidunt id. Reiciendis ullam sint fugit deleniti?
        </p>
        {/* comment section */}
        <h3 className='text-lg my-4 font-bold'>Comment</h3>
        <span className='underline font-semibold text-md my-3'>Login to write a comment</span>
        <div className='my-8'>
          <ProfileCard/>
          <p className='pt-1'>Since the start of time, the few have always exploit the many</p>
        </div>
        <div className='my-8'>
          <ProfileCard/>
          <p className='pt-1'>Since the start of time, the few have always exploit the many</p>
        </div>
        <div className='my-8'>
          <ProfileCard/>
          <p className='pt-1'>Since the start of time, the few have always exploit the many</p>
        </div>
        <div className='my-8'>
          <ProfileCard/>
          <p className='pt-1'>Since the start of time, the few have always exploit the many</p>
        </div>
        </div>
        {/* -----------------------left panel----------------------- */}

        <div className='w-1/3'>
        <span>What's hot</span>
            <h2 className='text-2xl font-semibold text-left mb-5'>Most Popular</h2>
            <TextCard link={'/post/1'} title={'coding'}/>
            <TextCard link={'/post/1'} title={'Food'}/>
            <TextCard link={'/post/1'} title={'Technology'}/>

            {/* -----------------------discover by topic----------------------- */}
            <div className='py-10'>
            <span>Discover by topic</span>
            <h2 className='text-2xl font-semibold text-left mb-5'>Category</h2>
            <div className='flex items-center gap-5 flex-wrap w-2/3'>
              <p onClick={()=>{navigate('/category/1')}} className='bg-[#02020c] cursor-pointer w-[fit-content] text-sm text-slate-100 px-2 py-1 rounded-lg'>Coding</p>
              <p onClick={()=>{navigate('/category/1')}} className='bg-[#02020c] cursor-pointer w-[fit-content] text-sm text-slate-100 px-2 py-1 rounded-lg'>Art</p>
              <p onClick={()=>{navigate('/category/1')}} className='bg-[#02020c] cursor-pointer w-[fit-content] text-sm text-slate-100 px-2 py-1 rounded-lg'>Technology</p>
              <p onClick={()=>{navigate('/category/1')}} className='bg-[#02020c] cursor-pointer w-[fit-content] text-sm text-slate-100 px-2 py-1 rounded-lg'>Food</p>
              <p onClick={()=>{navigate('/category/1')}} className='bg-[#02020c] cursor-pointer w-[fit-content] text-sm text-slate-100 px-2 py-1 rounded-lg'>Culture</p>
              <p onClick={()=>{navigate('/category/1')}} className='bg-[#02020c] cursor-pointer w-[fit-content] text-sm text-slate-100 px-2 py-1 rounded-lg'>Fashion</p>
            </div>
            </div>
            {/* -----------------------Editor's Pick----------------------- */}
            <div  className='py-10'>
            <span>Discover by topic</span>
            <h2 className='text-2xl font-semibold text-left mb-5'>Category</h2>
            <div  className='flex items-center justify-center gap-7 mb-8 cursor-pointer' onClick={()=>{navigate('/post/1')}}>
              <img src={Profile} alt="" className='w-[80px] h-[60px] rounded-full object-cover'/>
              <TextCard title={'coding'}/>
            </div>
            <div  className='flex items-center justify-center gap-5 mb-8 cursor-pointer' onClick={()=>{navigate('/post/1')}}>
              <img src={Profile} alt="" className='w-[80px] h-[60px] rounded-full object-cover'/>
              <TextCard title={'Lifestyle'}/>
            </div>
            </div>
            {/* -----------------------------End of editors pick----------------------------- */}
            <div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Single