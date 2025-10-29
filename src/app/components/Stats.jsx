import React from 'react';

const Stats = () => {
    return (
        <section className="h-[700px]  lg:h-auto relative max-w-7xl mx-auto bg-[linear-gradient(180deg,#FFDD03_0%,#FBC403_100%)] rounded-3xl px-5 md:px-12 py-8 lg:py-18 my-10 lg:my-20 mt-20 md:mt-0">
      <div className=" flex flex-col lg:flex-row items-center justify-start md:justify-between gap-16 lg:gap-40">
        {/* Left side - Heading */}
        <div className="">
          <h2 className="  text-4xl md:text-4xl xl:text-5xl font-bold text-black leading-tight text-center  md:text-start md:max-w-96 lg:max-w-xs  xl:max-w-96">Lorem ipsum what is Meme Coins</h2>
        </div>

        {/* Right side - Stats Grid */}
        <div className=" grid grid-cols-3 gap-10 lg:gap-8 xl:gap-12">
          <div className="text-start">
            <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-black mb-2">200+</div>
            <div className="text-sm font-medium text-black">Meme Coins</div>
          </div>
          <div className="text-start">
            <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-black mb-2">200+</div>
            <div className="text-sm font-medium text-black">Meme Coins</div>
          </div>
          <div className="text-start">
            <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-black mb-2">12,350</div>
            <div className="text-sm font-medium text-black">Conversions</div>
          </div>
          <div className="text-start">
            <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-black mb-2">200+</div>
            <div className="text-sm font-medium text-black">Meme Coins</div>
          </div>
          <div className="text-start">
            <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-black mb-2">200+</div>
            <div className="text-sm font-medium text-black">Meme Coins</div>
          </div>
          <div className="text-start">
            <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-black mb-2">12,350</div>
            <div className="text-sm font-medium text-black">Conversions</div>
          </div>
        </div>
      </div>
      <img className='absolute bottom-0 md:left-36 lg:left-47 xl:left-90 w-[400px] md:w-auto h-[340px] md:h-[360px]'  src="/cat.png" alt="" />
      <img className='h-44 xl:h-48 w-44 xl:w-48 absolute bottom-5 lg:-bottom-15 -left-20 lg:left-34 xl:left-47' src="/84.png" alt="" />
      <img className='absolute md:top-85 lg:-top-10 xl:-top-12 h-28 xl:h-32 w-28 xl:w-28 -right-5 lg:right-40 xl:right-75 rotate-x-12' src="/83.png" alt="" />
     
    </section>
    );
};

export default Stats;