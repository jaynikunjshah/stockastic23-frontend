import React from 'react'
import { Helmet } from 'react-helmet'

function AboutUs() {
  return (
    <>
      <Helmet>
        <link rel='icon' type='image/svg+xml' href='/stockastic_logo.svg' />
        <meta name='description' content="Stockastic'23 About Us Page" />
      </Helmet>
      <div id='About-Us'>
        <div className='grid lg:grid-cols-3 w-4/5 mx-auto mt-[100px] mb-[200px] text-white rounded-xl bg-[#7353BA] p-9 tracking-[1px]'>
          <img
            className='lg:block hidden translate-x-[-7rem] mx-auto h-full w-full'
            src='phone.svg'
            alt='phone.svg'
          />
          <div className='col-span-2 lg:translate-x-[-4rem]'>
            <div className='mb-6 text-3xl text-[#d6d1d1]'>
              About{' '}
              <span className='text-4xl font-bold text-[#0f1020]'>
                STOCKASTIC
              </span>
            </div>
            <div className='text-2xl text-[#d6d1d1]'>
              Welcome to an exciting event that will provide you with a holistic
              grasp of the trading world, while also creating a gathering point
              for enthusiastic students in the realms of finance and economics.
              By utilizing state-of-the-art technology and receiving valuable
              guidance from experienced experts, attendees will have the
              opportunity to simulate real-life market scenarios and enhance
              their trading abilities. So what are you waiting for? Register now and witnesss a plethora of learning.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
