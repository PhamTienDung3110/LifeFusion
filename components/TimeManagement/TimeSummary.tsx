'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { ActivityCategory } from './TimeManagementPage';

interface TimeSummaryProps {
  summary: Record<ActivityCategory, number>;
}

const TimeSummary: React.FC<TimeSummaryProps> = ({ summary }) => {
  // Format seconds to hours and minutes
  const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes}m`;
    }
  };

  // Calculate total time
  const totalSeconds = Object.values(summary).reduce((acc, curr) => acc + curr, 0);
  
  const categoryDetails = [
    { id: 'exercise', label: 'Exercise', color: '#ff9500', bgColor: '#fff5e5', icon: '🏋️' },
    { id: 'work', label: 'Work', color: '#1180e6', bgColor: '#e5f0ff', icon: '💼' },
    { id: 'study', label: 'Study', color: '#5856d6', bgColor: '#eeeeff', icon: '📚' },
    { id: 'sleep', label: 'Sleep', color: '#8e44ad', bgColor: '#f5eeff', icon: '😴' },
    { id: 'leisure', label: 'Leisure', color: '#ff2d55', bgColor: '#ffeef1', icon: '🎮' },
    { id: 'selfcare', label: 'Self Care', color: '#4cd964', bgColor: '#e5f9e9', icon: '🧘' },
  ];
  
  return (
    <div>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
          Total Time Tracked
        </Typography>
        <Typography variant="h4" fontWeight={600} color="primary">
          {formatDuration(totalSeconds)}
        </Typography>
      </Box>
      
      <div className="space-y-3">
        {categoryDetails.map((category) => {
          const seconds = summary[category.id as ActivityCategory];
          const percentage = totalSeconds ? Math.round((seconds / totalSeconds) * 100) : 0;
          
          return (
            <Box key={category.id} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box 
                    sx={{ 
                      width: 28, 
                      height: 28, 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      backgroundColor: category.bgColor,
                      mr: 1.5
                    }}
                  >
                    <span>{category.icon}</span>
                  </Box>
                  <Typography variant="body2" fontWeight={500}>
                    {category.label}
                  </Typography>
                </Box>
                <Typography variant="body2" fontWeight={500}>
                  {formatDuration(seconds)}
                </Typography>
              </Box>
              
              <Box 
                sx={{ 
                  height: 6, 
                  backgroundColor: '#f0f0f0', 
                  borderRadius: 3, 
                  overflow: 'hidden' 
                }}
              >
                <Box 
                  sx={{ 
                    height: '100%', 
                    backgroundColor: category.color,
                    width: `${percentage}%`,
                    transition: 'width 0.5s ease-in-out'
                  }} 
                />
              </Box>
              
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', textAlign: 'right', mt: 0.5 }}>
                {percentage}%
              </Typography>
            </Box>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSummary; 