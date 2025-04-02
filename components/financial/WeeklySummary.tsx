'use client';

import React from 'react';
import Image from 'next/image';

const WeeklySummary: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-[28px] font-semibold text-[#333] mb-1">Weekly sumup</h1>
        <p className="text-sm text-[#777]">Get summary of your weekly online transactions here.</p>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.73 21a1.999 1.999 0 01-3.46 0" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="User profile"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-sm">Andrew</p>
            <p className="text-xs text-[#999]">Admin account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySummary; 