'use client';

import React from 'react';

const TransactionHistory: React.FC = () => {
  const transactions = [
    {
      id: 1,
      receiver: 'Tesco Market',
      type: 'Shopping',
      date: '13 Dec 2020',
      amount: '$75.67'
    },
    {
      id: 2,
      receiver: 'ElectroMen Market',
      type: 'Shopping',
      date: '14 Dec 2020',
      amount: '$250.00'
    },
    {
      id: 3,
      receiver: 'Fiorgio Restaurant',
      type: 'Food',
      date: '07 Dec 2020',
      amount: '$19.50'
    },
    {
      id: 4,
      receiver: 'John Mathew Kayne',
      type: 'Sport',
      date: '06 Dec 2020',
      amount: '$350'
    },
    {
      id: 5,
      receiver: 'Ann Martin',
      type: 'Shopping',
      date: '31 Nov 2020',
      amount: '$430'
    }
  ];

  return (
    <div>
      <h2 className="text-lg font-medium mb-6">Transaction history</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-[#999]">
              <th className="pb-5 font-normal">Receiver</th>
              <th className="pb-5 font-normal">Type</th>
              <th className="pb-5 font-normal">Date</th>
              <th className="pb-5 font-normal text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-t border-gray-100">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <TransactionIcon type={transaction.type} />
                    <span>{transaction.receiver}</span>
                  </div>
                </td>
                <td className="py-4 text-[#999]">{transaction.type}</td>
                <td className="py-4 text-[#999]">{transaction.date}</td>
                <td className="py-4 text-right font-medium">{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface TransactionIconProps {
  type: string;
}

const TransactionIcon: React.FC<TransactionIconProps> = ({ type }) => {
  const getIconByType = (type: string) => {
    switch (type) {
      case 'Shopping':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#fff5e5] flex items-center justify-center text-[#ff9500]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7l-1.2 9.6c-.09.67-.634 1.174-1.306 1.195H6.506c-.672-.021-1.216-.525-1.306-1.195L4 7" stroke="#ff9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 7h20M16 11a4 4 0 11-8 0" stroke="#ff9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
        
      case 'Food':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#e5f9e9] flex items-center justify-center text-[#4cd964]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8h1a4 4 0 010 8h-1M5 8h11v9a4 4 0 01-4 4H9a4 4 0 01-4-4V8zM12 8V4" stroke="#4cd964" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
        
      case 'Sport':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#e5f0ff] flex items-center justify-center text-[#4c9aff]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 22V12a6 6 0 0112 0v10M6 18h12" stroke="#4c9aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
        
      default:
        return (
          <div className="w-8 h-8 rounded-lg bg-[#f0f0f0] flex items-center justify-center text-[#777]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.31 8l-2.31 2.31L9.7 8 8 9.7l2.31 2.3L8 14.31 9.7 16l2.3-2.31L14.31 16 16 14.31 13.7 12 16 9.7 14.31 8z" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
    }
  };
  
  return getIconByType(type);
};

export default TransactionHistory; 