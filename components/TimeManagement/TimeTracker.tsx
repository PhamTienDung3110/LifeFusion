'use client';

import React, { useState, useEffect } from 'react';
import { ActivityCategory, TimeRecord } from './TimeManagementPage';
import { Box, Button, TextField, Typography } from '@mui/material';

interface TimeTrackerProps {
  onStart: (category: ActivityCategory, notes: string) => void;
  onStop: () => void;
  activeRecord: TimeRecord | null;
}

interface CategoryOption {
  id: ActivityCategory;
  label: string;
  color: string;
  bgColor: string;
  icon: string;
}

const TimeTracker: React.FC<TimeTrackerProps> = ({ onStart, onStop, activeRecord }) => {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory>('work');
  const [notes, setNotes] = useState('');
  const [formattedTime, setFormattedTime] = useState('00:00:00');

  // Format seconds to HH:MM:SS
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return [hours, minutes, secs]
      .map(v => v < 10 ? "0" + v : v)
      .join(":");
  };

  // Update elapsed time every second when activity is active
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (activeRecord) {
      interval = setInterval(() => {
        const now = new Date();
        const elapsed = Math.floor((now.getTime() - activeRecord.startTime.getTime()) / 1000);
        setFormattedTime(formatTime(elapsed));
      }, 1000);
    } else {
      setFormattedTime('00:00:00');
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeRecord]);

  const handleStart = () => {
    onStart(selectedCategory, notes);
  };

  const handleStop = () => {
    onStop();
    setNotes('');
  };

  const categories: CategoryOption[] = [
    { id: 'exercise', label: 'Exercise', color: '#ff9500', bgColor: '#fff5e5', icon: '🏋️' },
    { id: 'work', label: 'Work', color: '#1180e6', bgColor: '#e5f0ff', icon: '💼' },
    { id: 'study', label: 'Study', color: '#5856d6', bgColor: '#eeeeff', icon: '📚' },
    { id: 'sleep', label: 'Sleep', color: '#8e44ad', bgColor: '#f5eeff', icon: '😴' },
    { id: 'leisure', label: 'Leisure', color: '#ff2d55', bgColor: '#ffeef1', icon: '🎮' },
    { id: 'selfcare', label: 'Self Care', color: '#4cd964', bgColor: '#e5f9e9', icon: '🧘' },
  ];

  return (
    <div className="bg-white">
      <div className={`flex items-center justify-center text-center mb-6 ${activeRecord ? '' : 'hidden'}`}>
        <div className="bg-[#f5f8fc] px-10 py-6 rounded-xl">
          <div className="text-[#777] mb-1">
            {activeRecord && (
              <span className="font-medium">
                {categories.find(cat => cat.id === activeRecord.category)?.label || 'Activity'} 
                {' '}{categories.find(cat => cat.id === activeRecord.category)?.icon}
              </span>
            )}
          </div>
          <div className="text-4xl font-semibold tracking-wider text-[#1180e6]">
            {formattedTime}
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <Typography 
          variant="subtitle2" 
          component="label"
          sx={{ mb: 1.5, display: 'block', color: 'text.secondary' }}
        >
          Activity Category
        </Typography>
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: 2 
          }}
        >
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? "contained" : "outlined"}
              disabled={!!activeRecord}
              disableElevation
              onClick={() => setSelectedCategory(cat.id)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 1.5,
                borderRadius: '12px',
                minWidth: 0,
                textTransform: 'none',
                borderColor: 'rgba(0, 0, 0, 0.12)',
                backgroundColor: selectedCategory === cat.id 
                  ? `${cat.bgColor} !important`
                  : 'transparent',
                color: selectedCategory === cat.id ? cat.color : 'text.secondary',
                '&:hover': {
                  backgroundColor: selectedCategory === cat.id 
                    ? cat.bgColor
                    : 'rgba(0, 0, 0, 0.04)',
                  borderColor: selectedCategory === cat.id ? cat.color : 'rgba(0, 0, 0, 0.23)'
                },
                '&.Mui-disabled': {
                  backgroundColor: selectedCategory === cat.id 
                    ? `${cat.bgColor} !important`
                    : 'rgba(0, 0, 0, 0.04)',
                  color: selectedCategory === cat.id ? cat.color : 'rgba(0, 0, 0, 0.26)',
                }
              }}
            >
              <Box 
                sx={{ 
                  fontSize: '1.5rem',
                  mb: 0.5 
                }}
              >
                {cat.icon}
              </Box>
              <Typography variant="caption" fontWeight={500}>
                {cat.label}
              </Typography>
            </Button>
          ))}
        </Box>
      </div>
      
      <div className="mb-6">
        <TextField
          fullWidth
          label="Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          disabled={!!activeRecord}
          placeholder="Add notes about this activity"
          InputProps={{
            sx: { borderRadius: '12px' }
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#1180e6',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1180e6',
                borderWidth: '1px',
              },
            }
          }}
        />
      </div>
      
      <div className="flex justify-center mt-8">
        {!activeRecord ? (
          <Button 
            variant="contained"
            onClick={handleStart}
            sx={{
              py: 1.5,
              px: 4,
              backgroundColor: '#1180e6',
              borderRadius: '12px',
              fontWeight: 500,
              fontSize: '1rem',
              textTransform: 'none',
              boxShadow: '0 4px 10px rgba(17, 128, 230, 0.3)',
              '&:hover': {
                backgroundColor: '#0a6dc9',
                boxShadow: '0 6px 15px rgba(17, 128, 230, 0.4)'
              }
            }}
          >
            Start Activity
          </Button>
        ) : (
          <Button 
            variant="contained"
            color="error"
            onClick={handleStop}
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: '12px',
              fontWeight: 500,
              fontSize: '1rem',
              textTransform: 'none',
            }}
          >
            Stop Activity
          </Button>
        )}
      </div>
    </div>
  );
};

export default TimeTracker; 