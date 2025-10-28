import React from 'react';

const Crypto = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <section className="w-full bg-lime-300 rounded-3xl overflow-hidden">
      <div className="flex gap-0">
        <div className="flex-1 bg-lime-300 px-8 py-4 ">
          <span className="text-lg font-bold text-gray-900 pl-8">Blockchain-Based</span>
        </div>
        <div className="flex-1 bg-purple-500 px-8 py-4">
          <span className="hidden md:flex text-lg font-bold text-white">Low-Cost Transactions</span>
        </div>
        <div className="flex-1 bg-cyan-400 px-8 py-4">
          <span className="hidden md:flex text-lg font-bold text-white">Speculative Nature</span>
        </div>
      </div>

      {/* Main content area */}
      <div className="p-12 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">The Fun Side of Crypto</h2>
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
              <p>
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