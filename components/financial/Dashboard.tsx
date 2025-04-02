'use client';

import React, { useState } from 'react';
import Sidebar from '../layouts/Sidebar';
import WeeklySummary from './WeeklySummary';
import CardSection from './CardSection';
import FinancialInfo from './FinancialInfo';
import GoalsSection from './GoalsSection';
import TransactionHistory from './TransactionHistory';
import NewTransaction from './NewTransaction';
import LoanAd from './LoanAd';
import FloatingActionButton from './FloatingActionButton';
import TransactionModal from './TransactionModal';

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-[1240px] mx-auto">
          <header className="mb-10">
            <WeeklySummary />
          </header>
          
          <div className="grid grid-cols-12 gap-7">
            <section className="col-span-12 lg:col-span-8">
              <div className="card mb-7">
                <div className="flex flex-col md:flex-row gap-8 p-7">
                  <CardSection />
                  <FinancialInfo />
                </div>
              </div>
              
              <div className="card">
                <div className="p-7">
                  <TransactionHistory />
                </div>
              </div>
            </section>
            
            <aside className="col-span-12 lg:col-span-4">
              <div className="card mb-7">
                <div className="p-7">
                  <GoalsSection />
                </div>
              </div>
              
              <div className="card mb-7">
                <div className="p-7">
                  <NewTransaction />
                </div>
              </div>
              
              <LoanAd />
            </aside>
          </div>
        </div>
      </main>
      
      <FloatingActionButton onClick={openModal} />
      <TransactionModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default Dashboard; 