import React from 'react'
import mage from '../assets/prof.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Movie from '../assets/Movie.jpg'
import Gold from '../assets/gold.jpg'
import Prof from '../assets/prof.jpg'
import Postcard from '../Component/Postcard'
import TextCard from '../Component/TextCard'

function Home() {
  const navigate = useNavigate()
  return (
    <div className='w-[100vw] px-20'>
      {/* ---------------------the main page--------------------- */}
      <div className='w-full flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-thin w-2/3 py-5'>
          Hello, Welcome to <span className='font-medium'>galapagous</span> Discover my stories and ideas
        </h1>
        <div className='flex items-center justify-center py-10 gap-10'>
          <img src={Movie} alt="a movie" className='w-1/2 h-[400px] object-cover'/>
          <div className='w-1/2'>
            <h3 className='text-4xl py-5'>Best movie of this year so far</h3>
            <p className='pb-5'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Vel deleniti aperiam commodi amet, vero modi dolores soluta possimus 
              assumenda, iure obcaecati magnam neque nobis ipsam.
            </p>
            <button onClick={()=>{navigate('/post/1')}} className='bg-slate-300 p-2 text-lg hover:text-bold'>
              Read More
            </button>
          </div>
        </div>
        <div>
        </div>
      </div>
      {/* ------------------category section------------------ */}
      <div>
      <h2 className='text-3xl font-semibold text-left'>Popular Category</h2>
      <div className='py-10 flex items- justify-center gap-10'>
        {['Fashion','Lifestyle','Coding',"Food","Culture"].map((each_category)=>{
          return(
          <div onClick={()=>{navigate('/category/1')}} className='w-[fit-content] rounded-md cursor-pointer h-[50px] flex items-center gap-4 bg-[#02020c] p-3'>
          <img src={Gold} alt="" className='w-[30px] h-[30px] rounded-full object-cover'/>
          <span className='font-semibold text-white'>{each_category}</span>
          </div>
          )
        })}
      </div>
      </div>
        {/* ------------------Recent section------------------ */}
      <div className='py-10'>
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
              <img src={Prof} alt="" className='w-[80px] h-[60px] rounded-full object-cover'/>
              <TextCard title={'coding'}/>
            </div>
            <div  className='flex items-center justify-center gap-5 mb-8 cursor-pointer' onClick={()=>{navigate('/post/1')}}>
              <img src={Prof} alt="" className='w-[80px] h-[60px] rounded-full object-cover'/>
              <TextCard title={'Lifestyle'}/>
            </div>
            <div  className='flex items-center justify-center gap- mb-8 cursor-pointer' onClick={()=>{navigate('/post/1')}}>
              <img src={Prof} alt="" className='w-[80px] h-[60px] rounded-full object-cover'/>
              <TextCard title={'Programming'}/>
            </div>
            <div  className='flex items-center justify-center gap-5 mb-8 cursor-pointer' onClick={()=>{navigate('/post/1')}}>
              <img src={Prof} alt="" className='w-[80px] h-[60px] rounded-full object-cover'/>
              <TextCard title={'Programming'}/>
            </div>
            </div>
            {/* -----------------------------End of editors pick----------------------------- */}
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

export default Home