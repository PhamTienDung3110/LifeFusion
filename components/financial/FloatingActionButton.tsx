'use client';

import React from 'react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-[#1180e6] to-[#0a6dc9] text-white flex items-center justify-center shadow-[0_8px_16px_rgba(17,128,230,0.4)] hover:shadow-[0_12px_24px_rgba(17,128,230,0.6)] transition-all hover:scale-110 z-50 group"
      aria-label="Add Transaction"
    >
      <div className="relative">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:rotate-45 transition-transform duration-300"
        >
          <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
        <div className="absolute -top-14 right-0 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1">
          <div className="bg-white text-[#333] py-2 px-4 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium">
            Add Transaction
          </div>
          <div className="w-3 h-3 bg-white transform rotate-45 absolute -bottom-1.5 right-6"></div>
        </div>
      </div>
    </button>
  );
};

export default FloatingActionButton; 