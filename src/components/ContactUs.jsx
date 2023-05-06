import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="mx-[25px] lg:px-0 px-6 rounded-[20px] grid lg:grid-cols-2 grid-cols-1 bg-[#003F63]">
        {/* Left */}
        <div className="stock mx-auto lg:my-[60px] mb-[60px] mt-[20px]">
          <a href="/">
            <img className="lg:h-64 h-40 mb-2" src="logo.svg" alt="logo.svg" />
            <div className="text-center text-[1.2rem] lg:text-[1.7rem] text-[#5DBEC7] tracking-[2px]">
              STOCKASTIC
            </div>
          </a>
        </div>
        {/* Right */}
        <div className="m-auto lg:text-[1.7rem] text-[1.4rem] text-white mb-9 lg:my-9">
          {/* Information */}
          <div>
            <a
              className="font-semibold block mb-2"
              href="#About-Us"
            >
              About Us
            </a>
            <a
              className="font-semibold block my-2"
              href="#Contact-Us"
            >
              Contact Us
            </a>
            <a
              className="font-semibold block my-2"
              href="#About-DM-Team"
            >
              About Dream Merchants
            </a>
            <a
              className="font-semibold block mt-2 mb-8"
              href="#Previous-Events"
            >
              Previous Events
            </a>
          </div>
          {/* Help Line */}
          <a href="tel:+91 9301303584" className="font-light lg:text-[1.8rem] text-[1.4rem]">
            Helpline - +91 93013 03584
          </a>
          {/* Social Media Handles */}
          <div className="grid grid-cols-4 mt-8 gap-3">
            <a href="mailto:dreammerchantsvit@gmail.com">
              <img src="gmail.svg" alt="Gmail.png" />
            </a>
            <a href="https://twitter.com/DM_VIT">
              <img src="twitter.svg" alt="Twitter.png" />
            </a>
            <a href="https://www.linkedin.com/company/dream-merchants-vit/">
              <img src="linkedin.svg" alt="LinkedIN.png" />
            </a>
            <a href="https://www.instagram.com/dreammerchantsvit/">
              <img src="instagram.svg" alt="Instagram.png" />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-black font-bold text-[1.3rem] text-center mt-1 mb-2">
        <span className="align-middle text-[2.4rem]">©</span><span className="align-middle">Dream Merchants VIT-2023 - All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
