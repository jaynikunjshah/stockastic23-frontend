import React from 'react'
import './FAQs.css'
import { Helmet } from 'react-helmet'

function FAQs() {
  // Array of faqs
  const qans = [
    {
      questions: '1. Can I team up with my friends?',
      answers:
        'Yes, this is a team event in which there will be a group of 2-4 participants. If you         register for the event separately, we will provide you with teammates so that you can form a   team and take part in the competition.',
    },
    {
      questions: '2. How to trade at Stockastic?',
      answers:
        'Your team will receive some virtual currency to invest in and trade among the equities of your choice on our platform.',
    },
    {
      questions: '3. How will stockastic benefit me in trading?',
      answers:
        "Gaining knowledge of the stock market's basics, learning about finance and business,                   and developing technical skills and decision-making abilities, all while not losing any real money.",
    },
    {
      questions:
        '4. Does participation in this event require any prerequisites?',
      answers: 'No prerequisites are required.',
    },
    {
      questions: '5. Is real money involved?',
      answers:
        'No, each team will receive virtual fake currency to invest in various stocks on our platform.',
    },
    {
      questions: '6. Is the event free?',
      answers:
        "Yes, the event is completely free of cost and doesn't require any registration fees.",
    },
    {
      questions: '7. What time and location will the event be held?',
      answers: 'The event will take place on 6 JUNE 2023 at TT VOC Gallery 2.',
    },
  ]

  const faq = qans.map((obj, id) => {
    return (
      <details
        key={id}
        className='mt-4 w-full open:bg-[#1E1B1E] open:rounded-[15px]'
      >
        <summary className='questions rounded-[15px] font-semibold tracking-[0.7px] list-none bg-[#1E1B1E] p-4 cursor-pointer'>
          {obj.questions}
        </summary>
        <div className='bg-[#1E1B1E] font-medium p-4 pt-0 tracking-[0.5px] delay-700 transition duration-150 ease-in-out rounded-[15px]'>
          {obj.answers}
        </div>
      </details>
    )
  })

  return (
    <>
      <Helmet>
        <link rel='icon' type='image/svg+xml' href='/stockastic_logo.svg' />
        <meta name='description' content="Stockastic'23 FAQs Page" />
      </Helmet>
      <div
        id='faq'
        className='grid mx-auto grid-cols-7 text-white w-2/3 pt-6 mb-[90px] place-items-center h-max mt-9'
      >
        <div className='container mx-auto col-span-7 lg:col-span-3'>
          <h1 className='text-6xl font-medium text-center title-font mb-6'>
            FAQ's
          </h1>
          <div className='w-full mx-auto my-2 '>{faq}</div>
        </div>
        {/* FAQ image */}
        <img
          className='hidden lg:flex col-span-4 ml-[190px]'
          src='faq.svg'
          alt='FAQ.png'
        />
      </div>
    </>
  )
}

export default FAQs
