'use client';

import React from 'react';

const CardSection: React.FC = () => {
  return (
    <div className="flex-1 min-w-[280px]">
      <h2 className="text-lg font-medium mb-6">Cards</h2>
      
      <div className="relative mb-8">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 rounded-full w-10 h-10 bg-white shadow-md flex items-center justify-center z-10">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18l-6-6 6-6" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="w-full aspect-[1.58/1] rounded-2xl overflow-hidden text-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1180e6] to-[#0e6dca]"></div>
          <div className="absolute inset-0 p-5 flex flex-col justify-between">
            <div className="flex justify-between">
              <div>
                <p className="text-xs opacity-90 uppercase">cloudcash</p>
                <p className="text-[10px] opacity-90 uppercase">PREMIUM ACCOUNT</p>
              </div>
            </div>
            
            <div>
              <div className="mb-5">
                <p className="text-xl tracking-wider font-medium">5789 **** **** 2847</p>
              </div>
              
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] opacity-90 uppercase">CARD HOLDER</p>
                  <p className="text-sm">Mike Smith</p>
                </div>
                <div>
                  <p className="text-[10px] opacity-90 uppercase">EXPIRES</p>
                  <p className="text-sm">06/21</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 rounded-full w-10 h-10 bg-white shadow-md flex items-center justify-center z-10">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18l6-6-6-6" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-[#777] mb-1">Weekly payment limit</p>
          <div className="flex items-center gap-2">
            <div className="w-[200px] bg-gray-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#1180e6] h-full rounded-full" style={{ width: '40%' }}></div>
            </div>
            <p className="font-medium text-sm">$350.60 / $4000</p>
          </div>
        </div>
        
        <button className="text-sm text-[#1180e6] hover:underline font-medium">Deactivate card</button>
      </div>
    </div>
  );
};

export default CardSection; 