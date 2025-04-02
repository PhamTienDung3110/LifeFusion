'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };
  
  return (
    <div className="bg-white w-[230px] min-h-screen py-10 border-r border-[#f0f0f0] hidden md:block">
      <div className="px-8 mb-12">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#1180e6] rounded-md flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 14.8S8 13 12 13s8 1.8 8 1.8V4a2 2 0 00-2-2H6a2 2 0 00-2 2v10.8z" fill="white" />
              <path d="M12 13c-4 0-8 1.8-8 1.8V19a2 2 0 002 2h12a2 2 0 002-2v-4.2S16 13 12 13z" fill="white" />
            </svg>
          </div>
          <span className="text-[#1180e6] font-bold text-xl">cloudcash</span>
        </Link>
      </div>
      
      <nav className="mb-auto">
        <ul className="space-y-1">
          <NavItem href="/" icon="chart-bar" label="Overview" active={isActive('/')} />
          <NavItem href="/time-management" icon="timer" label="Time Management" active={isActive('/time-management')} />
          <NavItem href="/transactions" icon="credit-card" label="Transactions" active={isActive('/transactions')} />
          <NavItem href="/cards" icon="card" label="Cards" active={isActive('/cards')} />
          <NavItem href="/invoices" icon="document" label="Invoices" active={isActive('/invoices')} />
          <NavItem href="/goals" icon="goal" label="Goals" active={isActive('/goals')} />
          <NavItem href="/settings" icon="settings" label="Settings" active={isActive('/settings')} />
        </ul>
      </nav>
      
      <div className="px-8 mt-auto pt-12">
        <div className="p-5 bg-[#f8fafc] rounded-xl text-center">
          <div className="w-14 h-14 mx-auto mb-3">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="#E6F0FD"/>
              <path d="M15.5 15.5c-1 1-2.5 1.5-3.5 1.5-2.5 0-4.5-2-4.5-4.5 0-1.5 1-2.5 2-3" stroke="#1180E6" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M17 11L14 8M14 8v3m0-3h3" stroke="#1180E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-xs text-[#666] mb-3">Only you can control your money</p>
          <button className="btn-primary text-xs w-full py-2.5">Upgrade to premium</button>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label, active }) => {
  return (
    <li className={`relative ${active ? 'text-[#1180e6]' : 'text-[#888]'} hover:text-[#1180e6]`}>
      <Link href={href} className="flex items-center gap-3 py-3 px-8">
        <div className="w-5 h-5">
          <NavIcon name={icon} active={active} />
        </div>
        <span className={`${active ? 'font-medium' : ''}`}>{label}</span>
        {active && (
          <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1180e6] rounded-r"></span>
        )}
      </Link>
    </li>
  );
};

interface NavIconProps {
  name: string;
  active?: boolean;
}

const NavIcon: React.FC<NavIconProps> = ({ name, active }) => {
  const color = active ? "#1180e6" : "#888";
  
  const icons: Record<string, JSX.Element> = {
    'chart-bar': (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 20V12M12 20V8M18 20V4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'timer': (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="2"/>
        <path d="M12 8v4l3 3" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <path d="M5 3l14 14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'credit-card': (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="20" height="15" rx="2" stroke={color} strokeWidth="2"/>
        <path d="M2 10h20" stroke={color} strokeWidth="2"/>
      </svg>
    ),
    'card': (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="20" height="15" rx="2" stroke={color} strokeWidth="2"/>
        <path d="M2 10h20" stroke={color} strokeWidth="2"/>
      </svg>
    ),
    'document': (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 21V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v16l-3-2-2 2-2-2-2 2-2-2-3 2z" stroke={color} strokeWidth="2"/>
        <path d="M9 7h6M9 11h6M9 15h4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'goal': (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2"/>
        <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="2"/>
        <circle cx="12" cy="12" r="1" fill={color}/>
      </svg>
    ),
    'settings': (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke={color} strokeWidth="2"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke={color} strokeWidth="2"/>
      </svg>
    )
  };
  
  return icons[name] || null;
};

export default Sidebar; 