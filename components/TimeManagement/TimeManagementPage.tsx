'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../layouts/Sidebar';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR to avoid hydration issues
const TimeTracker = dynamic(() => import('./TimeTracker'), { ssr: false });
const TimeHistory = dynamic(() => import('./TimeHistory'), { ssr: false });
const TimeSummary = dynamic(() => import('./TimeSummary'), { ssr: false });

export type ActivityCategory = 'exercise' | 'work' | 'study' | 'sleep' | 'leisure' | 'selfcare';

export interface TimeRecord {
  id: string;
  category: ActivityCategory;
  startTime: Date;
  endTime: Date | null;
  duration: number; // in seconds
  notes: string;
}

interface ParsedTimeRecord {
  id: string;
  category: ActivityCategory;
  startTime: string;
  endTime: string | null;
  duration: number;
  notes: string;
}

const TimeManagementPage: React.FC = () => {
  const [timeRecords, setTimeRecords] = useState<TimeRecord[]>([]);
  const [activeRecord, setActiveRecord] = useState<TimeRecord | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);
  
  // Set isMounted to true after component mounts to avoid hydration errors
  useEffect(() => {
    setIsMounted(true);
    setCurrentTime(new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }));
  }, []);
  
  // Update current time every second
  useEffect(() => {
    if (!isMounted) return;
    
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isMounted]);

  // Load time records from localStorage on component mount
  useEffect(() => {
    if (!isMounted) return;
    
    const savedRecords = localStorage.getItem('timeRecords');
    if (savedRecords) {
      try {
        const parsed = JSON.parse(savedRecords) as ParsedTimeRecord[];
        // Convert string dates back to Date objects
        const records = parsed.map((record) => ({
          ...record,
          startTime: new Date(record.startTime),
          endTime: record.endTime ? new Date(record.endTime) : null
        }));
        setTimeRecords(records);
      } catch (error) {
        console.error('Failed to parse time records', error);
      }
    }
  }, [isMounted]);

  // Save records to localStorage whenever they change
  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem('timeRecords', JSON.stringify(timeRecords));
  }, [timeRecords, isMounted]);

  // Handle starting a new activity
  const startActivity = (category: ActivityCategory, notes: string = '') => {
    // If there's an active record, stop it first
    if (activeRecord) {
      stopActivity();
    }

    const newRecord: TimeRecord = {
      id: Date.now().toString(),
      category,
      startTime: new Date(),
      endTime: null,
      duration: 0,
      notes
    };

    setActiveRecord(newRecord);
    setTimeRecords(prev => [...prev, newRecord]);
  };

  // Handle stopping the current activity
  const stopActivity = () => {
    if (!activeRecord) return;

    const endTime = new Date();
    const duration = Math.floor((endTime.getTime() - activeRecord.startTime.getTime()) / 1000);

    const updatedRecord = {
      ...activeRecord,
      endTime,
      duration
    };

    setTimeRecords(prev => prev.map(record => 
      record.id === activeRecord.id ? updatedRecord : record
    ));
    
    setActiveRecord(null);
  };

  // Calculate total time for each category
  const calculateCategorySummary = () => {
    const summary: Record<ActivityCategory, number> = {
      exercise: 0,
      work: 0,
      study: 0,
      sleep: 0,
      leisure: 0,
      selfcare: 0
    };

    timeRecords.forEach(record => {
      if (record.duration) {
        summary[record.category] += record.duration;
      }
    });

    return summary;
  };

  const deleteRecord = (id: string) => {
    setTimeRecords(prev => prev.filter(record => record.id !== id));
    if (activeRecord?.id === id) {
      setActiveRecord(null);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-[1240px] mx-auto">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold text-[#333]">Time Management</h1>
            <div className="flex justify-between items-center">
              <p className="text-[#777]">Track and manage your time spent on different activities</p>
              <div className="text-[#1180e6] font-medium text-[30px]">
                {isMounted ? currentTime : ''}
              </div>
            </div>
          </header>
          
          <div className="grid grid-cols-12 gap-7">
            <section className="col-span-12 lg:col-span-8">
              <div className="card mb-7">
                <div className="p-7">
                  <h2 className="text-lg font-medium mb-5">Track Your Time</h2>
                  <TimeTracker 
                    onStart={startActivity} 
                    onStop={stopActivity} 
                    activeRecord={activeRecord}
                  />
                </div>
              </div>
              
              <div className="card">
                <div className="p-7">
                  <h2 className="text-lg font-medium mb-5">Recent Activities</h2>
                  <TimeHistory 
                    records={timeRecords} 
                    onDelete={deleteRecord}
                  />
                </div>
              </div>
            </section>
            
            <aside className="col-span-12 lg:col-span-4">
              <div className="card mb-7">
                <div className="p-7">
                  <h2 className="text-lg font-medium mb-5">Activity Summary</h2>
                  <TimeSummary summary={calculateCategorySummary()} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TimeManagementPage; 