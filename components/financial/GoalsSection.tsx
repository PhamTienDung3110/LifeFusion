'use client';

import React from 'react';

const GoalsSection: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Goals</h2>
        <div className="w-6 h-6 rounded-full bg-[#f8da5b] flex items-center justify-center text-yellow-800 font-medium text-sm">
          5
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-2">
        <GoalCard 
          icon="holidays"
          title="Holidays" 
          amount="$550" 
          date="12/20/20"
          color="#4c9aff"
          iconBg="#e5f0ff"
        />
        
        <GoalCard 
          icon="renovation"
          title="Renovation" 
          amount="$200" 
          date="12/20/20"
          color="#ff9500"
          iconBg="#fff5e5"
        />
        
        <GoalCard 
          icon="xbox"
          title="Xbox" 
          amount="$820" 
          date="12/20/20"
          color="#4cd964"
          iconBg="#e5f9e9"
        />
      </div>
      
      <div className="mt-10">
        <h3 className="text-base font-medium mb-6">Outcome Statistics</h3>
        
        <div className="space-y-6">
          <StatItem 
            label="Shopping" 
            percentage={52} 
            color="#ff9500"
            icon="shopping"
          />
          
          <StatItem 
            label="Electronics" 
            percentage={21} 
            color="#4cd964"
            icon="electronics"
          />
          
          <StatItem 
            label="Travels" 
            percentage={74} 
            color="#4c9aff"
            icon="travels"
          />
        </div>
      </div>
    </div>
  );
};

interface GoalCardProps {
  icon: string;
  title: string;
  amount: string;
  date: string;
  color: string;
  iconBg: string;
}

const GoalCard: React.FC<GoalCardProps> = ({ icon, title, amount, date, color, iconBg }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-sm p-3">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2`} style={{ backgroundColor: iconBg }}>
        <GoalIcon name={icon} color={color} />
      </div>
      <p className="font-medium text-base mb-0.5">{amount}</p>
      <p className="text-xs text-[#777] mb-0.5">{date}</p>
      <p className="text-sm">{title}</p>
    </div>
  );
};

interface StatItemProps {
  label: string;
  percentage: number;
  color: string;
  icon: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, percentage, color, icon }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
        <StatIcon name={icon} color={color} />
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <span className="text-sm">{label}</span>
          <span className="text-sm font-medium">{percentage}%</span>
        </div>
        <div className="w-full h-2 bg-[#f0f0f0] rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full" 
            style={{ 
              width: `${percentage}%`,
              backgroundColor: color
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

interface IconProps {
  name: string;
  color: string;
}

const GoalIcon: React.FC<IconProps> = ({ name, color }) => {
  const icons: Record<string, JSX.Element> = {
    'holidays': (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'renovation': (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3h4v18H2V3zM18 3h4v18h-4V3z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 3h6v18H9V3z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'xbox': (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15l-2-2H6l-2 2V9l2 2h4l2-2M12 15l2-2h4l2 2V9l-2 2h-4l-2-2M12 15V9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };
  
  return icons[name] || null;
};

const StatIcon: React.FC<IconProps> = ({ name, color }) => {
  const icons: Record<string, JSX.Element> = {
    'shopping': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7l-1.2 9.6c-.09.67-.634 1.174-1.306 1.195H6.506c-.672-.021-1.216-.525-1.306-1.195L4 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7h20M16 11a4 4 0 11-8 0" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'electronics': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="2" width="16" height="20" rx="2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18h.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'travels': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };
  
  return icons[name] || null;
};

export default GoalsSection; 