'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const NewTransaction: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState('');
  
  const users = [
    { id: 1, name: 'Ann', img: 'https://randomuser.me/api/portraits/women/43.jpg' },
    { id: 2, name: 'Monica', img: 'https://randomuser.me/api/portraits/women/28.jpg' },
    { id: 3, name: 'John', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { id: 4, name: 'Mike', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 5, name: 'Mia', img: 'https://randomuser.me/api/portraits/women/33.jpg' }
  ];

  const validateAmount = (value: string) => {
    // Allow empty value (for now), numbers, and decimal points
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      setAmount(value);
      setAmountError('');
    } else {
      setAmountError('Please enter a valid amount');
    }
  };

  const handleTransfer = () => {
    if (!amount) {
      setAmountError('Amount is required');
      return;
    }
    
    // Process transfer logic here
    console.log('Transfer amount:', amount);
    // Reset field after successful transfer
    setAmount('');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">New transaction</h2>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-8">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mb-1">
              <Image 
                src={user.img} 
                alt={user.name}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs">{user.name}</span>
          </div>
        ))}
        
        <div className="flex flex-col items-center">
          <button 
            className="w-10 h-10 rounded-full border-2 border-dashed border-[#ddd] flex items-center justify-center mb-1"
            aria-label="Add new recipient"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5v14M5 12h14" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="text-xs">Add New</span>
        </div>
      </div>
      
      <div>
        <div className="flex flex-col gap-3">
          <div className="flex-1">
            <label htmlFor="transaction-amount" className="sr-only">Amount</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-400">$</div>
              <input 
                id="transaction-amount"
                type="text" 
                value={amount}
                onChange={(e) => validateAmount(e.target.value)}
                placeholder="Enter amount"
                className={`w-full px-10 py-2.5 border ${amountError ? 'border-red-500' : 'border-[#ddd]'} rounded-lg focus:outline-none focus:border-[#1180e6]`}
                aria-invalid={!!amountError}
                aria-describedby={amountError ? "amount-error" : undefined}
              />
            </div>
            {amountError && (
              <p id="amount-error" className="mt-1 text-sm text-red-500">{amountError}</p>
            )}
          </div>
          <button 
            onClick={handleTransfer}
            className="btn-primary py-2.5 px-5 flex items-center gap-1 whitespace-nowrap"
            disabled={!amount}
          >
            Send the transfer
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTransaction; 