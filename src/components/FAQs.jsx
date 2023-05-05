import React from 'react'
import './FAQs.css'

function FAQs() {
  return (
    <div className="grid mx-auto grid-cols-7 w-2/3 pt-6 mb-[90px] place-items-center">
      <div className="container mx-auto col-span-7 lg:col-span-3">
        <h1 className="text-6xl font-medium text-center title-font text-[#003F63]">
          FAQ's
        </h1>
        <div className="w-full mx-auto my-2">
          {/* Question 1 */}
          <details className="mb-4 w-full my-7">
            <summary className="questions rounded-[15px] font-semibold tracking-[0.7px] list-none bg-[#D9D9D9] p-4">
              1. Question 1
            </summary>
            <div className="bg-white font-medium p-6 tracking-[0.5px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus sequi reiciendis officiis, minima ducimus iste aliquam quo! Illum assumenda deserunt voluptatum porro autem dignissimos et esse numquam commodi maxime?
            </div>
          </details>

          {/* Question 2 */}
          <details className="mb-4 w-full my-7">
            <summary className="questions rounded-[15px] font-semibold tracking-[0.7px] list-none bg-[#D9D9D9] p-4">
              2. Question 2
            </summary>
            <div className="bg-white font-medium p-6 tracking-[0.5px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus sequi reiciendis officiis, minima ducimus iste aliquam quo! Illum assumenda deserunt voluptatum porro autem dignissimos et esse numquam commodi maxime?
            </div>
          </details>

          {/* Question 3 */}
          <details className="mb-4 w-full my-7">
            <summary className="questions rounded-[15px] font-semibold tracking-[0.7px] list-none bg-[#D9D9D9] p-4">
              3. Question 3
            </summary>
            <div className="bg-white font-medium p-6 tracking-[0.5px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus sequi reiciendis officiis, minima ducimus iste aliquam quo! Illum assumenda deserunt voluptatum porro autem dignissimos et esse numquam commodi maxime?
            </div>
          </details>
          {/* Question 4 */}
          <details className="mb-4 w-full my-7">
            <summary className="questions rounded-[15px] font-semibold tracking-[0.7px] list-none bg-[#D9D9D9] p-4">
              4. Question 4
            </summary>
            <div className="bg-white font-medium p-6 tracking-[0.5px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus sequi reiciendis officiis, minima ducimus iste aliquam quo! Illum assumenda deserunt voluptatum porro autem dignissimos et esse numquam commodi maxime?
            </div>
          </details>

          {/* Question 5 */}
          <details className="mb-4 w-full my-7">
            <summary className="questions rounded-[15px] font-semibold tracking-[0.7px] list-none bg-[#D9D9D9] p-4">
              5. Question 5
            </summary>
            <div className="bg-white font-medium p-6 tracking-[0.5px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi possimus sequi reiciendis officiis, minima ducimus iste aliquam quo! Illum assumenda deserunt voluptatum porro autem dignissimos et esse numquam commodi maxime?
            </div>
          </details>

        </div>
      </div>
      {/* FAQ image */}
      <img className="hidden lg:inline-block col-span-4 mt-[80px] ml-[230px]" src="faq.svg" alt="FAQ.png" />
    </div>
  )
}

export default FAQs;
