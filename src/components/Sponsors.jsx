import React from 'react'
import { Helmet } from 'react-helmet'

function Sponsors() {
  return (
    <>
      <Helmet>
        <link rel='icon' type='image/svg+xml' href='/stockastic_logo.svg' />
        <meta name='description' content="Stockastic'23 Sponsors Page" />
      </Helmet>
      <div
        id='sponsors'
        className='h-screen flex justify-between med:flex-col med:items-center tall:h-full'
      >
        <div className='w-2/4 flex justify-center items-center med:w-full med:align-center'>
          <img src='sponsor_vector.svg' className='h-max w-max' />
        </div>
        <div className='flex justify-center items-center flex-col w-2/4 med:w-full'>
          <span className='text-white font-bold  text-5xl m-8 med:text-3xl'>
            OUR SPONSORS
          </span>
          <div className='flex flex-row '>
            <img
              src='sponsor_logo1.png'
              className='w-32 h-32 m-8 med:m-4 med:h-20 med:w-20'
            />
            <a href='https://stubbornfactory.com/' target={'_blank'}>
              <img
                src='https://cdn.shopify.com/s/files/1/0725/7423/9003/files/1Artboard_16_2x_ddd2a712-4705-4cef-a557-bc4f57b25b2a.png?v=1677922661&width=200'
                alt=''
                className='w-32 h-32 m-8 med:m-4 med:h-20 med:w-20 object-contain'
              />
            </a>
            <a href='https://www.milliondotsedu.com/' target={'_blank'}>
              <img
                src='https://www.milliondotsedu.com/assets/images/million-dots-logo.svg'
                alt='Million Dots'
                className='w-32 h-32 m-8 med:m-4 med:h-20 med:w-20 object-contain'
              />
            </a>
          </div>
          <div className='flex flex-row'>
            <a href='https://fairplays.in/' target={'_blank'}>
              <img
                src='https://fairplays.in/wp-content/uploads/2022/02/logo.webp'
                alt='Fairplay'
                className='w-32 h-32 m-8 med:m-4 med:h-20 med:w-20 object-contain'
              />
            </a>
            <a href='https://zerodha.com/' target={'_blank'}>
              <img
                src='https://zerodha.com/static/images/logo.svg'
                alt='Zerodha'
                className='w-32 h-32 m-8 med:m-4 med:h-20 med:w-20 object-contain'
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sponsors
