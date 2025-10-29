import React from "react";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto  text-center mt-28    md:py-24">
      <div className="relative">
        <div className="z-20 xl:max-w-5xl mx-auto relative">
        <h1 className=" text-5xl lg:text-6xl xl:text-8xl text-white">
          Anin't{" "}
          <span>
            {" "}
            <h1
              className="text-5xl lg:text-6xl xl:text-8xl text-white bg-cover bg-center px-2 py-1 bg-no-repeat  inline-block rounded-2xl"
              style={{
                backgroundImage: "url('/22.png')",
              }}
            >
              Nobody
            </h1>
          </span>{" "}
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center max-w-auto md:max-w-120 lg:max-w-xl  xl:max-w-full mx-auto">
        <h1 className=" text-5xl lg:text-6xl xl:text-8xl text-white">Got time for </h1>
        <h1
          className="text-5xl lg:text-6xl xl:text-8xl text-black bg-cover bg-center px-2 py-1 bg-no-repeat  inline-block rounded-2xl w-50 mx-auto md:w-auto "
          style={{
            backgroundImage: "url('/24.png')",
          }}
        >
          Boring
        </h1>
        </div>
        <h1 className=" text-5xl lg:text-6xl xl:text-8xl text-[#FBC403]">Investments</h1>
        </div>
        {/* box */}
        <img className="absolute -top-2 md:-top-10 lg:-top-8 xl:-top-8 left-16 md:left-60 lg:left-95 xl:left-120 h-60 lg:h-64 xl:h-96" src="/group.png" alt="" />
        {/* clock */}
        <img className="z-20 absolute top-13 md:-top-10 lg:top-13 xl:top-20 left-62 md:left-100 lg:left-95 xl:left-120 w-8 xl:w-16" src="/clock.png" alt="" />
        {/* star */}
        <img className="z-20 absolute -top-10 md:-top-10 lg:-top-11 xl:-top-20 left-15 md:left-50 lg:left-62 xl:left-65 w-12 lg:w-18 xl:w-28" src="/star.png" alt="" />
         {/* light */}
         <img className="z-20 absolute top-23 md:top-19 lg:top-25 xl:top-35 left-68 md:left-97 lg:left-132 xl:left-170 w-16 lg:w-18 xl:w-28" src="/light.png" alt="" />
          {/* cake */}
        <img className="z-20 absolute top-20 md:top-35 lg:top-37 xl:top-65 -left-10 md:left-30 lg:left-48 xl:left-45 w-18 md:w-24 lg:w-28 xl:w-36" src="/cake.png" alt="" />
          {/* gold */}
        <img className=" hidden md:flex z-20 absolute top-10 md:top-25 lg:top-30 xl:top-45 left-15 md:-left-5 lg:-left-4 xl:-left-20 w-12 md:w-24 lg:w-36 xl:w-auto" src="/gold.png" alt="" />
          {/* medel */}
        <img className=" z-20 absolute top-25 md:top-25 lg:top-30 xl:top-45 left-84 md:left-162 lg:left-180 xl:left-250 w-20 md:w-28 lg:w-36 xl:w-auto" src="/medel.png" alt="" />
          {/* gold1 */}
        <img className="hidden md:flex z-20 absolute top-25 md:-top-25 lg:-top-20 xl:-top-20 left-84 md:left-159 lg:left-215 xl:left-296 w-20 md:w-28 lg:w-36 xl:w-auto" src="/gold1.png" alt="" />
          {/* x */}
        <img className=" z-20 absolute -top-26 md:-top-25 lg:-top-20 xl:-top-20 left-77 md:left-139 lg:left-185 xl:left-266   lg:w-auto xl:w-auto" src="/x.png" alt="" />
          {/* x1 */}
        <img className=" z-20 absolute -top-18 md:-top-25 lg:-top-20 xl:-top-10 left-67 md:left-129 lg:left-175 xl:left-256   lg:w-auto xl:w-auto" src="/x1.png" alt="" />
      </div>
      <h1 className='text-center text:lg md:text-xl font-light text-white mt-16 md:mt-28 mb-0 md:mb-16'>Trade the Hottest Meme Coins Effortlessly</h1>
    </div>
  );
};

export default Banner;
