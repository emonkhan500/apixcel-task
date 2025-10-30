import React from "react";

const WhyMeme = () => {
  return (
    <div className=" ">
      {/* 1st 2 */}
      <div className="relative flex flex-col lg:flex-row gap-4 md:gap-10 max-w-7xl mx-auto">
        {/* 1 */}
        <div className="flex-1 mb-10">
          <div className=" md:rotate-[-7.718deg] relative bg-[#ADD753] flex w-full lg:max-w-120 mx-auto p-10 rounded-2xl">
            <div className="w-1/2 lg:max-w-62 text-start ">
              <h1 className="text-xl xl:text-3xl font-semibold mb-7 text-[#191919]">
                What are Meme Coins?
              </h1>
              <p className="text-sm font-light text-[#191919]">
                Meme coins are like the jokers of the crypto world! They’re fun,
                quirky, and inspired by internet memes or jokes. Take Dogecoin,
                for example—it started as a joke but became super popular thanks
                to its community and a little help from influencers like Elon
                Musk. Meme coins are more about fun and hype than serious
                business!
              </p>
            </div>
            <div className=" flex-1">
              <img
                className="absolute md:h-96 w-62 md:w-96 top-0 md:-top-15 lg:-top-35 left-40 md:left-85 lg:left-50 xl:left-60"
                src="/qs.png"
                alt=""
              />
              <img
                className="flex md:hidden lg:flex absolute lg:h-52 w-32 lg:w-52 top-55 lg:top-45 left-60 lg:left-60"
                src="/qs1.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="flex-1 relative">
          <div className="h-[600px] md:h-auto md:rotate-[2.603deg]  relative bg-[#B341FF] flex md:max-w-3xl mx-auto p-5 xl:p-10 rounded-2xl">
            <div className="flex-1 w-full   md:max-w-89 text-start">
              <h1 className="text-xl xl:text-3xl font-semibold mb-7 text-white">
                So, why are <br /> they so popular?
              </h1>
              <p className="text-sm font-light text-white">
                Meme coins are all about the community vibe and the buzz they
                create online. People love to jump on trends, and these coins
                ride the wave of internet culture. Coins like Shiba Inu and Pepe
                Coin became hits because they got everyone talking (and
                tweeting!). But remember, they’re mostly for fun—they don’t
                usually have fancy tech or big projects behind them.
              </p>
            </div>

            <div className=" flex-1"></div>
            {/* frame4 */}
            <img
              className="flex md:hidden lg:flex absolute top-20 lg:-top-25 left-55 lg:left-90 xl:left-135"
              src="/frame4.png"
              alt=""
            />
            
            {/* frame4 */}
            <img
              className="hidden lg:flex absolute top-18 lg:-top-23 left-0 lg:left-0 xl:left-0"
              src="/frame5.png"
              alt=""
            />

            <img
              className="absolute -bottom-2 -right-2 -rotate-[2.603deg] w-62 xl:w-80  h-85 xl:h-full"
              src="/dog.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* 3rd */}
      <div className=" relative bg-[#0FCDC8] flex max-w-2xl mx-auto p-10 rounded-2xl mt-8">
        <div className="flex-1"></div>
        <div className="max-w-90 text-end ">
          <h1 className="text-3xl font-semibold mb-7 text-[#191919]">
            Should you <br /> try them out?
          </h1>
          <p className="text-sm font-light text-[#191919]">
            If you’re curious and want to join the fun, meme coins can be
            exciting! But here’s the deal: they can be a bit of a
            rollercoaster—prices can shoot up or drop fast. If you’re just
            starting, only invest what you can afford to lose and enjoy the
            ride. Think of it like a fun experiment, not a serious plan to get
            rich!
          </p>
        </div>
        <div className="absolute -bottom-5 md:bottom-5 md:-left-10 lg:-left-30 text-base md:text-lg text-[#191919] px-3 lg:px-6 py-2 xl:py-3 rounded-xl bg-[#FFDD03]">
          Let me know if you’d like more tweaks!
        </div>
        {/* hand */}
        <img
          className="absolute -left-30 md:-left-40 lg:-left-50 -top-40 md:-bottom-15 lg:-bottom-6"
          src="hand.png"
          alt=""
        />
         {/* frame4 */}
         <img
              className="hidden lg:flex h-24 w-24 absolute  lg:-top-5  lg:left-70 xl:left-75"
              src="/frame4.png"
              alt=""
            />
            {/* frame6 */}
        <img
          className="absolute hidden lg:flex  lg:left-157 -top-40  lg:top-30"
          src="frame6.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default WhyMeme;
