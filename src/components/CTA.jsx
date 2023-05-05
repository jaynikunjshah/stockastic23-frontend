import React from 'react'

function CTA() {
  return (
    <>
      <div className='bg-blue_shade h-screen flex justify-between med:flex med:flex-col-reverse med:items-center tall:h-full'>
        <div className='w-3/5 flex justify-between align-center flex-col med:w-full'>
          <span className='text-6xl flex w-min self-center text-white-100 mt-8 leading-snug font-raleway'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <button className='rounded bg-sand w-48 h-12 flex self-center items-center justify-center mt-6 mb-8 font-raleway font-bold'>REGISTER</button>
        </div>
        <div className='w-2/5 flex items-center justify-center med:w-full'>
          <img src='cta_vector.svg' className='h-fit w-fit'/>
        </div>
      </div>
    </>
  )
}

export default CTA
