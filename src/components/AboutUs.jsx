import React from "react";
import { Helmet } from "react-helmet";

function AboutUs() {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/stockastic_logo.svg" />
        <meta name="description" content="Stockastic'23 About Us Page" />
      </Helmet>
      <div id="About-Us">
        <div className="grid lg:grid-cols-3 w-4/5 mx-auto mt-[100px] mb-[200px] text-white rounded-xl bg-[#7353BA] p-9 tracking-[1px]">
          <img
            className="lg:block hidden translate-x-[-7rem] mx-auto h-full w-full"
            src="phone.svg"
            alt="phone.svg"
          />
          <div className="col-span-2 lg:translate-x-[-4rem]">
            <div className="mb-6 text-3xl text-[#d6d1d1]">
              About{" "}
              <span className="text-4xl font-bold text-[#0f1020]">
                STOCKASTIC
              </span>
            </div>
            <div className="text-xl text-[#d6d1d1]">
              Join us for an exciting two-day online event hosted by Dream
              Merchants in collaboration with VIT Vellore, featuring a stock
              market simulator. Test your investment skills and strategies in a
              simulated environment and compete with other participants to win
              exciting prizes. Access informative webinars and interactive
              sessions with industry experts to gain insights into the workings
              of the stock market. Register through our website for a nominal
              fee and join us for a thrilling event!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
