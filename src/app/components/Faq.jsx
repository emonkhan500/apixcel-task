import React from 'react';

const Faq = () => {
    return (
        <div className='max-w-7xl mx-auto mt-10 md:mt-20 mb-7'>
            
            {/* up */}
            <div className='relative bg-[rgba(255,255,255,0.06)] flex flex-col lg:flex-row gap-2 md:gap-32 justify-center items-center rounded-2xl px-10'>
                <div className='w-full lg:w-1/2 py-10'>
                    <h1 className='border border-[#FFDD03] bg-[linear-gradient(180deg,rgba(255,221,3,0.1)_0%,rgba(251,196,3,0.1)_100%)] text-[#FFDD03] p-2 rounded-full max-w-80 text-center'> FREQUENTLY ASKED QUESTIONS</h1>
                    <h1 className='text-white text-3xl md:text-6xl font-semibold mt-9'>What can <br /> we help you find?</h1>
                </div>
                <div className='relative w-full lg:w-1/2'>
                    <img className='' src="/monkey.png" alt="" />
                    <img className='absolute -top-2 right-25 lg:right-35 xl:right-60 h-10 w-10'  src="/7.png" alt="" />
                </div>
                <img className='absolute bottom-7 right-12 lg:right-16 xl:right-35'  src="/5.png" alt="" />
                <img className='absolute bottom-30 md:bottom-40 right-80 md:right-60 lg:right-105 xl:right-140'  src="/6.png" alt="" />
            </div>


            {/* faq */}
            <div>
            
        <div   className="overflow-hidden   my-13">
        <div >
        
          <div className="join join-vertical w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-2 collapse bg-[rgba(255,255,255,0.06)] rounded-2xl collapse-arrow   join-item ">
              <input type="radio" name="my-accordion-4" defaultChecked/>
              <div className="collapse-title text-2xl font-medium text-[#FBC403] ">
              Lorem ipsum dolore sit Amet
              </div>
              <div className="collapse-content font-light text-[#DFDFDF] ">
                <p>
                DogeCoin began as a playful and humorous cryptocurrency, drawing inspiration from the popular 'Doge' meme featuring a Shiba Inu dog. Launched in December 2013 by software engineers Billy Markus and Jackson Palmer.
                </p>
              </div>
            </div>
            <div className=" p-2 collapse bg-[rgba(255,255,255,0.06)] rounded-2xl collapse-arrow   join-item ">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-white ">
              Lorem ipsum dolore sit Amet
              </div>
              <div className="collapse-content font-light text-[#DFDFDF] ">
                <p>
                DogeCoin began as a playful and humorous cryptocurrency, drawing inspiration from the popular 'Doge' meme featuring a Shiba Inu dog. Launched in December 2013 by software engineers Billy Markus and Jackson Palmer.
                </p>
              </div>
            </div>
            <div className="p-2 collapse bg-[rgba(255,255,255,0.06)] rounded-2xl collapse-arrow   join-item ">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-white ">
              Lorem ipsum dolore sit Amet
              </div>
              <div className="collapse-content font-light text-[#DFDFDF] ">
                <p>
                DogeCoin began as a playful and humorous cryptocurrency, drawing inspiration from the popular 'Doge' meme featuring a Shiba Inu dog. Launched in December 2013 by software engineers Billy Markus and Jackson Palmer.
                </p>
              </div>
            </div>
            <div className="p-2 collapse bg-[rgba(255,255,255,0.06)] rounded-2xl collapse-arrow   join-item ">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-white ">
              Lorem ipsum dolore sit Amet
              </div>
              <div className="collapse-content font-light text-[#DFDFDF] ">
                <p>
                DogeCoin began as a playful and humorous cryptocurrency, drawing inspiration from the popular 'Doge' meme featuring a Shiba Inu dog. Launched in December 2013 by software engineers Billy Markus and Jackson Palmer.
                </p>
              </div>
            </div>
            <div className="p-2 collapse bg-[rgba(255,255,255,0.06)] rounded-2xl collapse-arrow   join-item ">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-white ">
              Lorem ipsum dolore sit Amet
              </div>
              <div className="collapse-content font-light text-[#DFDFDF] ">
                <p>
                DogeCoin began as a playful and humorous cryptocurrency, drawing inspiration from the popular 'Doge' meme featuring a Shiba Inu dog. Launched in December 2013 by software engineers Billy Markus and Jackson Palmer.
                </p>
              </div>
            </div>
            <div className="p-2 collapse bg-[rgba(255,255,255,0.06)] rounded-2xl collapse-arrow   join-item ">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-white ">
              Lorem ipsum dolore sit Amet
              </div>
              <div className="collapse-content font-light text-[#DFDFDF] ">
                <p>
                DogeCoin began as a playful and humorous cryptocurrency, drawing inspiration from the popular 'Doge' meme featuring a Shiba Inu dog. Launched in December 2013 by software engineers Billy Markus and Jackson Palmer.

                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
            </div>
        
    );
};

export default Faq;