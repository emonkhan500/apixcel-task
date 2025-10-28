import React from 'react';
import { FaDiscord } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const Featured  = () => {
    return (
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-4xl font-semibold text-white my-10'>Featured Meme Coins</h1>
           <div className="bg-[rgba(255,255,255,0.06)] rounded-2xl  ">
      <div className="flex flex-col lg:flex-row gap-8 ">
        {/* Left - Coin Mascot Image */}
        <div className='flex flex-col md:flex-row gap-8 w-full lg:w-1/2'>
        <div className="hidden md:flex">
          <img
            src="/maskot.png"
            alt="Jackpot Meme Coin Mascot"
            className=" object-contain"
          />
        </div>
        <div className="flex  md:hidden">
          <img
            src="/maskot2.png"
            alt="Jackpot Meme Coin Mascot"
            className="w-full object-contain"
          />
        </div>

        {/* Center - Coin Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-[#FFDD03] mb-3">Jackpot</h2>
          <p className="text-white text-base mb-3 xl:mb-6">Jackpot - The Original Meme Coin</p>

          {/* Market Cap and Rank */}
          <div className="flex gap-4 mb-4 xl:mb-8">
            <div className='bg-[rgba(255,255,255,0.10)] px-3 py-2 rounded-lg'>
              <p className="text-gray-400 text-sm mb-1">Market Cap</p>
              <p className="text-2xl font-bold text-white">$950,000</p>
            </div>
            <div className='bg-[rgba(255,255,255,0.10)] px-3 py-2 rounded-lg'>
              <p className="text-gray-400 text-sm mb-1">Rank</p>
              <p className="text-2xl font-bold text-white">#1</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-white text-lg font-semibold mb-3">Links :</p>
            <div className="flex gap-4">
            <FaGlobe className='bg-[rgba(255,255,255,0.06)] p-2 text-4xl rounded-full text-white'/>
            <FaXTwitter className='bg-[rgba(255,255,255,0.06)] p-2 text-4xl rounded-full text-white' />
            <FaDiscord className='bg-[rgba(255,255,255,0.06)] p-2 text-4xl rounded-full text-white' />
            </div>
          </div>
        </div>
        </div>

        {/* Right - Description and CTA */}
        <div className="w-full lg:w-1/2 mt-4">
          <h3 className="text-white font-medium text-lg mb-3">Description:</h3>
          <p className="text-[#DFDFDF] text-base font-light  mb-6">
            Lorem ipsum dolor sit amet consectetur. Dolor in non vitae euismod. Lectus vivamus at volutpat lorem netus
            pellentesque platea aenean habitant. Vitae velit luctus id egestas mauris. Turpis sed magna id aliquet nec.
            Eleifend eu mauris gravida amet sed nascetur felis magna fringilla.
          </p>
          <button className="bg-[linear-gradient(180deg,#FFDD03_0%,#FBC403_100%)] text-[#191919] font-medium px-6 py-4 rounded-lg  flex justify-center items-center gap-2">
            Buy Now
            <GoArrowUpRight />
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Featured ;