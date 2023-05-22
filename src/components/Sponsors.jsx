import React from 'react'

function Sponsors() {
  return (
    <>
      <div id="sponsors" className='h-screen flex justify-between med:flex-col med:items-center tall:h-full'>
        <div className='w-2/4 flex justify-center items-center med:w-full med:align-center'>
          <img src='sponsor_vector.svg' className='h-max w-max'/>
        </div>
        <div className='flex justify-center items-center flex-col w-2/4 med:w-full'>
          <span className='text-white font-bold  text-5xl m-8 med:text-3xl'>OUR SPONSORS</span>
          <div className='flex flex-row '>
            <img src='sponsor_logo1.png' className='w-32 h-32 m-8 med:m-4 med:h-20 med:w-20'/>
            <img src='sponsor_logo1.png' className='w-32 h-32 m-8 med:m-4 med:h-20 med:w-20'/>
            <img src='sponsor_logo1.png' className='w-32 h-32 m-8 med:m-4 med:h-20 med:w-20'/>
          </div>
          <div className='flex flex-row'>
            <img src='sponsor_logo1.png' className='w-32 h-32 m-8 med:m-4 med:h-20 med:w-20'/>
            <img src='sponsor_logo1.png' className='w-32 h-32 m-8 med:m-4 med:h-20 med:w-20'/>
            <img src='sponsor_logo1.png' className='w-32 h-32 m-8 med:m-4 med:h-20 med:w-20'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sponsors
