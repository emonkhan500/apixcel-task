import React from 'react';

const Crypto = () => {
    return (
        <div className='max-w-7xl mx-auto mt-20 md:mt-40'>
            <section className="w-full bg-[#C2F929] rounded-3xl ">
      <div className="z-15 relative flex gap-0">
        <div className="relative w-[400px] lg:w-[530px] px-8 py-4 ">
          <span className="relative md:-top-3 z-30 text-md md:text-2xl font-bold text-[#444] md:pl-8">Blockchain-Based</span>
          <img className='absolute z-20 -top-6 md:-top-10 w-full h-28 left-0' src="/r1.png" alt="" />
        </div>
        <div className="relative w-42 lg:w-[520px]  px-8 py-4">
          <span className="hidden  lg:flex relative z-20 text-lg font-bold text-white">Low-Cost Transactions</span>
          <img className='absolute z-10 top-0 w-full h-15 -left-10' src="/r2.png" alt="" />
        </div>
        <div className=" relative w-42 lg:w-[480px] px-8 py-4">
          <span className="hidden lg:flex relative z-20 text-lg font-bold text-white">Speculative Nature</span>
          <img className='absolute z-5 top-0 w-full h-15 -left-23' src="/r3.png" alt="" />
        </div>
      </div>

      {/* Main content area */}
      <div className="p-6 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">The Fun Side of Crypto</h2>
            <div className="hidden md:block space-y-6 text-gray-800">
              <p>
                Lorem ipsum dolor sit amet consectetur. Dolor in non vitae euismod. Lectus vivamus at volutpat lorem
                netus pellentesque platea aenean habitant. Vitae velit luctus id egestas mauris. Turpis sed magna id
                aliquet nec. Eleifend eu mauris gravida amet sed nascetur felis magna fringilla.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Dolor in non vitae euismod. Lectus vivamus at volutpat lorem
                netus pellentesque platea aenean habitant. Vitae velit luctus id egestas mauris. Turpis sed magna id
                aliquet nec. Eleifend eu mauris gravida amet sed nascetur felis magna fringilla.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Stats */}
            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900">200+</div>
                <div className="text-gray-800 font-medium">Meme Coins</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900">12,350</div>
                <div className="text-gray-800 font-medium">Conversions</div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 text-gray-800">
              <p>
                Lorem ipsum dolor sit amet consectetur. Dolor in non vitae euismod. Lectus vivamus at volutpat lorem
                netus pellentesque platea aenean habitant. Vitae velit luctus id egestas mauris. Turpis sed magna id
                aliquet nec. Eleifend eu mauris gravida amet sed nascetur felis magna fringilla.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Dolor in non vitae euismod. Lectus vivamus at volutpat lorem
                netus pellentesque platea aenean habitant. Vitae velit luctus id egestas mauris. Turpis sed magna id
                aliquet nec. Eleifend eu mauris gravida amet sed nascetur felis magna fringilla.
              </p>
              <p className='hidden lg:flex'>
                Lorem ipsum dolor sit amet consectetur. Dolor in non vitae euismod. Lectus vivamus at volutpat lorem
                netus pellentesque platea aenean habitant. Vitae velit luctus id egestas mauris. Turpis sed magna id
                aliquet nec. Eleifend eu mauris gravida amet sed nascetur felis magna fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default Crypto;