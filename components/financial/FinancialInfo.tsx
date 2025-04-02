'use client';

import React from 'react';

const FinancialInfo: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col min-w-[280px]">
      <div className="mb-8">
        <p className="text-sm text-[#777] mb-1">Current balance</p>
        <h2 className="text-[32px] font-semibold text-[#1180e6]">$ 2850.75</h2>
      </div>
      
      <div className="space-y-5 flex-grow">
        <div className="bg-[#f8fafc] p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#deedfc]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19V5M12 5l-4 4M12 5l4 4" stroke="#1180e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-[#555]">Income</p>
              <p className="text-lg font-medium text-[#1180e6]">$ 1500.50</p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#f8fafc] p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#fdecec]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5v14M12 19l-4-4M12 19l4-4" stroke="#ff3b30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-[#555]">Outcome</p>
              <p className="text-lg font-medium text-[#ff3b30]">$ 350.60</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialInfo; 