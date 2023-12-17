import React, { useEffect } from 'react'
// import Gold from '../assets/gold.jpg'
import Prof from '../assets/prof.jpg'
import Postcard from '../Component/Postcard'
import TextCard from '../Component/TextCard'

function Category() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='w-[100vw] px-20'>
        {/* ------------------Recent section------------------ */}
      <div className='py-10'>
        <h1 className='w-full text-center text-bold text-3xl bg-slate-950 text-slate-100 p-5 my-10'>CODING</h1>
        <div className='w-full flex items-start gap-14 justify-between'>
          <div className='w-2/3'>
          <h2 className='text-3xl font-semibold text-left'>Recent Post</h2>
          <Postcard/>
          <Postcard/>
          <Postcard/>
          <Postcard/>
          <div className='w-full flex items-center justify-center gap-20 py-10'>
          <button className='bg-slate-300 px-3 py-2 text-lg  hover:text-white hover:bg-slate-500  font-semibold '>Previous</button>
          <button className='bg-slate-300 px-3 py-2 text-lg  hover:text-white hover:bg-slate-500  font-semibold'>Next</button>
          </div>
          </div>

          {/* --------------------------left bar section-------------------------- */}

          <div className='w-1/3'>
            <span>What's hot</span>
            <h2 className='text-2xl font-semibold text-left mb-5'>Most Popular</h2>
            <TextCard title={'coding'} link={'/post/1'}/>
            <TextCard title={'Food'} link={'/post/1'}/>
            <TextCard title={'Technology'} link={'/post/1'}/>

            {/* ----------discover by topic---------- */}
            {/* <div className='py-10'>
            <span>Discover by topic</span>
            <h2 className='text-2xl font-semibold text-left mb-5'>Category</h2>
            <div className='flex items-center gap-5 flex-wrap w-2/3'>
              <p onClick={()=>{navigate('/post/1')}} className='bg-[#02020c] cursor-pointer w-[fit-content] text-sm text-slate-100 px-2 py-1 rounded-lg'>Coding</p>
              <p onClick={()=>{navigate('/post/1')}} className='bg-[#02020c] cursor-pointer w-[fit-content] text-sm text-slate-100 px-2 py-1 rounded-lg'>Art</p>
              <p onClick={()=>{navigate('/post/1')}} className='bg-[#02020c] cursor-pointer w-[fit-content] text-sm text-slate-100 px-2 py-1 rounded-lg'>Technology</p>
              <p onClick={()=>{navigate('/post/1')}} className='bg-[#02020c] cursor-pointer w-[fit-content] text-sm text-slate-100 px-2 py-1 rounded-lg'>Food</p>
              <p onClick={()=>{navigate('/post/1')}} className='bg-[#02020c] cursor-pointer w-[fit-content] text-sm text-slate-100 px-2 py-1 rounded-lg'>Culture</p>
              <p onClick={()=>{navigate('/post/1')}} className='bg-[#02020c] cursor-pointer w-[fit-content] text-sm text-slate-100 px-2 py-1 rounded-lg'>Fashion</p>
            </div>
            </div> */}
            {/* ----------Editor's Pick---------- */}
            <div className='py-10'>
            <span>Discover by topic</span>
            <h2 className='text-2xl font-semibold text-left mb-5'>Category</h2>
            <div className='flex items-center justify-center gap-7'>
              <img src={Prof} alt="" className='w-[80px] h-[60px] rounded-full object-cover'/>
              <TextCard title={'coding'} link={'/post/1'}/>
            </div>
            <div className='flex items-center justify-center gap-5'>
              <img src={Prof} alt="" className='w-[80px] h-[60px] rounded-full object-cover'/>
              <TextCard title={'Lifestyle'} link={'/post/1'}/>
            </div>
            <div className='flex items-center justify-center gap-5'>
              <img src={Prof} alt="" className='w-[80px] h-[60px] rounded-full object-cover'/>
              <TextCard title={'Programming'} link={'/post/1'}/>
            </div>
            <div className='flex items-center justify-center gap-5'>
              <img src={Prof} alt="" className='w-[80px] h-[60px] rounded-full object-cover'/>
              <TextCard title={'Programming'} link={'/post/1'}/>
            </div>
            </div>
            {/* -----------------End of editors pick----------------- */}
            <div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Category