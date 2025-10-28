import React from 'react';

const Nav = () => {
    return (
        <div className='max-w-7xl bg-gray-900 text-white px-6 py-4 rounded-3xl  mx-auto'>
            <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <span   style={{
    background: 'linear-gradient(180deg, #FFDD03 0%, #FBC403 100%)',
    WebkitBackgroundClip: 'text',   WebkitTextFillColor: 'transparent', 
    
    
  }} className="text-6xl font-bold text-[--bg-gradient-yellow]">OK</span>
          <span className="text-xl font-medium text-white">Meme <br />Coin</span>
        </div>

        {/* Wallet Button */}
        <button className="bg-[linear-gradient(180deg,#FFDD03_0%,#FBC403_100%)] text-[#191919] px-4 py-3 rounded-2xl font-semibold flex gap-3 justify-center items-center  ">
        <img className='h-6 w-6' src="/wallet.png" alt="" />
          <span>0xDe1...6F33</span>
        </button>
      </div>
        </div>
    );
};

export default Nav;