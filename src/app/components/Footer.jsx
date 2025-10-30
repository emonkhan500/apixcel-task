import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" max-w-7xl mx-auto  md:px-0">
      <footer className="bg-[rgba(255,255,255,0.06)] text-white rounded-3xl">
        {/* Main Footer Content */}
        <div className="px-8 pt-16  lg:px-24">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
            {/* Left Section - Logo and Description */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #FFDD03 0%, #FBC403 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="text-6xl font-bold text-[--bg-gradient-yellow]"
                >
                  OK
                </span>
                <span className="text-xl font-medium text-white">
                  Meme <br />
                  Coin
                </span>
              </div>
              <p className="text-[#DFDFDF] text-lg  md:text-sm mb-6 lg:max-w-60 mt-8 md:mt-24">
                Lorem ipsum dolor sit
                
                amet consectetur.
              </p>
              <button className="w-full border border-[#FFDD03] bg-[linear-gradient(180deg,rgba(255,221,3,0.1)_0%,rgba(251,196,3,0.1)_100%)] text-[#FFF] px-2  lg:px-7 py-4 rounded-lg font-normal  transition-colors  flex justify-center items-center gap-3 mt-6">
                How To Feature A Coin <img src="/coin.png" alt="" />
              </button>
            </div>

            

            {/* Right Section  */}
            <div className="flex flex-col gap-4 xl:min-w-xl">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0">
  <input
    type="email"
    placeholder="Send us your Email"
    className="flex-1 bg-[rgba(255,255,255,0.10)] focus:outline-none text-[#DFDFDF] px-6 py-5 md:py-4 font-bold placeholder-[#DFDFDF]
               rounded-xl md:rounded-s-xl md:rounded-e-none"
  />
  <button
    className="cursor-pointer bg-[linear-gradient(180deg,#FFDD03_0%,#FBC403_100%)] text-[#191919] font-bold px-6 py-5 md:py-4 
               rounded-xl md:rounded-e-xl md:rounded-s-none"
  >
    Contact us
  </button>
</div>

              {/* Contact Info */}
            <div className="flex gap-8 md:gap-10 lg:gap-28 mt-15">
              <div>
                <h3 className="font-bold text-white mb-2">Contacts</h3>
                <p className="text-gray-400">+632 425 2251</p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Email</h3>
                <p className="text-gray-400">hey@okmemecoins.com</p>
              </div>
            </div>
              {/* Social Icons */}
              <div className="flex gap-8 mt-9 lg:mt-16">
              <FaTwitter  className="text-xl text-white"/>
              <FaFacebookF className="text-xl text-white"/>
              <FaInstagram className="text-xl text-white"/>

              <FaGithub className="text-xl text-white"/>
              </div>
            </div>
          </div>

          {/* Divider */}
         
        </div>
        <div className="border-t border-[gray-700]"></div>

{/* Bottom Footer */}
<div className="flex justify-between items-center pt-8 text-sm text-[#737373] px-8 lg:px-24 pb-10 max-w-7xl mx-auto">
  <a href="#" className="">
    Privacy Policy
  </a>
  <span className="">Copyright</span>
</div>
      </footer>
      
    </div>
  );
};

export default Footer;
