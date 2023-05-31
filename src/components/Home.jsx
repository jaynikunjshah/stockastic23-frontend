import React from "react";
import { Helmet } from "react-helmet";

function Home() {

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/stockastic_logo.svg" />
        <meta name="description" content="Stockastic'23 Home Page" />
      </Helmet>
      <div id="home">
        <nav
          className="flex flex-wrap lg:w-full w-full backdrop-filter backdrop-blur-lg 
      bg-opacity-100 top-0 left-0 right-0 items-center justify-between p-3
       text-[#7C7C7C] max-w-screen xsnavadj:content-center xsnavadj:justify-center"
        >
          <div className="lg:flex items-center mr-4 xsnavadj:mr-0">
            <img
              src="stockastic_logo.svg"
              alt="logo"
              className="mx-auto h-16"
            />
            <div className="text-3xl font-extrabold ml-2 mt-4 tracking-[3px]">
              STOCKASTIC
            </div>
          </div>
          <div className="lg:flex lg:justify-center">
            <div className="w-full flex flex-row p-0">
              <a
                href="#About-Us"
                className="hidden my-auto m-3 text-[#7C7C7C] lg:inline-block lg:mt-0 hover:text-[#7353BA] pt-2 text-xl"
              >
                About
              </a>
              <a
                href="#faq"
                className="hidden my-auto m-3 text-[#7C7C7C] lg:inline-block lg:mt-0 hover:text-[#7353BA] pt-2 text-xl"
              >
                FAQs
              </a>
              <a
                href="#Contact-Us"
                className="hidden my-auto m-3 text-[#7C7C7C] lg:inline-block lg:mt-0 hover:text-[#7353BA] pt-2 text-xl"
              >
                Contact Us
              </a>
              <div className="xsnavadj:mr-[0.5rem] xsnavadj:mt-4">
                <a href="/signup">
                  <button className="px-4 py-2  transition duration-275 ease-in-out transform hover:scale-125 border-white text-[#0F0F0F] font-semibold rounded-full ml-4 bg-[#7353BA] hover:bg-purple-300  hover:shadow-md inline">
                    REGISTER
                  </button>
                </a>
                <a href="/signin">
                  <button className="px-4 py-2 border transition duration-275 ease-in-out transform hover:scale-125 border-white text-[#7C7C7C] font-semibold rounded-full ml-4  hover:shadow-md inline">
                    LOGIN
                  </button>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="pt-2 mx-auto bg-transparent">
          <div className="md:flex flex justify-between flex-row large:flex large:flex-col large:items-center">
            <div className="p-8 md:w-3/8 mr-0 w-2/5 flex flex-col large:w-full">
              <div className="text-9xl tracking-wider font-extrabold text-left text-[#7353BA] xsmax:text-6xl large:flex large:justify-center">
                Dream. <br /> Build. <br />
                Inspire.
              </div>
              <p className="mt-2 text-[#7C7C7C] text-2xl px-2 py-8">
                Experience the thrill of trading in the stock market created by us, where real-life consequences await.
              </p>
            </div>
            <div className="md:shrink-0 md:w-5/8 w-3/5 flex align-center">
              <img
                className="h-auto w-auto object-contain mx-auto cover"
                src="./Hero-Image.svg"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
        <div className="md:order-3 md:w-1/2 md:mx-auto text-center">
          <a href="/signup">
            {" "}
            <button
              className=" bg-[#7353BA] rounded-full text-2xl px-9 py-6 shadow-xl 
        hover: font-semibold ml-4 hover:bg-purple-300 hover:text-[#0F0F0F] transition duration-275 ease-in-out transform hover:scale-110 mt-9 md:mt-0"
            >
              REGISTER NOW
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
