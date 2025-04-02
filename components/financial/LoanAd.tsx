'use client';

import React from 'react';

const LoanAd: React.FC = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden h-[170px]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] z-0"></div>
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -mt-12 -mr-12"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 -mb-8 -ml-8"></div>
      
      <div className="relative z-10 p-7 text-white h-full flex flex-col justify-center">
        <h3 className="text-xl font-bold mb-2">Get great loan!</h3>
        <p className="text-sm mb-4 opacity-90">Need cash for something important? We&apos;re here to help you!</p>
        <a 
          href="#" 
          className="bg-white text-[#ff7e5f] font-medium py-2.5 px-5 rounded-full inline-flex items-center gap-1 w-max"
        >
          Get loan! <span className="ml-1 text-lg">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default LoanAd; 