import React from "react";

function Home() {
  return (
    <div>
      <nav className="flex flex-wrap lg:w-full w-full fixed backdrop-filter backdrop-blur-lg bg-opacity-100 top-0 left-0 right-0 items-center justify-between p-3 bg-[#003f63] text-white max-w-screen">
        <div className="lg:flex items-center mr-4">
            <img src="stockastic_logo.svg" alt="logo" className="mx-auto h-16" />
          <div className="text-3xl font-bold ml-2 tracking-[3px]">STOCKASTIC</div>
        </div>
        <div className="lg:flex lg:justify-center">
          <div className="w-full flex flex-row p-0">
            <a
              href="#about"
              className="hidden my-auto m-3 text-white lg:inline-block lg:mt-0 hover:text-[#fff2ce] pt-2 text-xl"
            >
              About
            </a>
            <a
              href="#faq"
              className="hidden my-auto m-3 text-white lg:inline-block lg:mt-0 hover:text-[#fff2ce] pt-2 text-xl"
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="hidden my-auto m-3 text-white lg:inline-block lg:mt-0 hover:text-[#fff2ce] pt-2 text-xl"
            >
              Contact Us
            </a>
            <div>
              <button className="px-4 py-2 border transition duration-275 ease-in-out transform hover:scale-125 border-white text-[#003f63] font-semibold rounded-full ml-4 bg-[#fff2ce] hover:bg-[#003f63] hover:text-[#fff2ce] hover:shadow-md inline">
                REGISTER
              </button>
              <button className="px-4 py-2 border transition duration-275 ease-in-out transform hover:scale-125 border-white text-white font-semibold rounded-full ml-4 hover:bg-[#fff2ce] hover:text-[#003f63] hover:shadow-md inline">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full pt-24 mx-auto bg-transparent overflow-visible md:w-full">
        <div className="md:flex">
          <div className="p-8 md:w-1/2 mr-0">
            <div className="pl-6 text-9xl tracking-wider font-extrabold text-left align-center text-[#003f63]">
              Dream. Build. <br/>
              Inspire.
            </div>
            <p className="mt-2 text-[#003f63] text-center text-2xl px-2 py-8">
              A stock market simulator event is a virtual platform for
              participants to practice investing in stocks without using real
              money.
            </p>
          </div>
          <div className="md:shrink-0 md:w-1/2">
            <img
              className="h-auto w-auto object-cover md:h-auto md:w-auto mx-auto align-middle"
              src="./Hero-Image.svg"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      <div className="md:order-3 md:w-1/2 md:mx-auto my-8 text-center">
        <button className="border bg-[#003f63] rounded-full text-2xl px-9 py-6 shadow-2xl hover:shadow-inner border-[#003f63] text-white font-semibold ml-4 hover:bg-[#eef7fe] hover:text-[#003f63] transition duration-275 ease-in-out transform hover:scale-110">
          REGISTER NOW
        </button>
      </div>
    </div>
  );
}

export default Home;
