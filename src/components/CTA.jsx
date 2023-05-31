import React from "react";
import { Helmet } from "react-helmet";

function CTA() {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/stockastic_logo.svg" />
        <meta name="description" content="Stockastic'23 CTA Page" />
      </Helmet>
      <div
        id="cta"
        className="bg-[#7353BA] h-screen flex justify-between med:flex med:flex-col-reverse med:items-center tall:h-full"
      >
        <div className="w-4/5 flex justify-between flex-col my-9 med:w-full">
          <span className="text-5xl flex w-3/5 self-center text-center text-white-100 mt-7 leading-snug font-raleway">
            " Join us for an unforgettable experience - register now to secure
            your spot at our event, STOCKASTIC! "
          </span>
          <button className="rounded-xl bg-[#1E1B1E] text-white w-48 h-12 flex self-center items-center justify-center mt-6 mb-8 font-raleway font-bold">
            REGISTER
          </button>
        </div>
        <div className="w-2/5 mt-[8%] mb-9 flex items-center justify-center med:w-full">
          <img src="cta_vector.svg" className="h-fit w-fit" />
        </div>
      </div>
    </>
  );
}

export default CTA;
