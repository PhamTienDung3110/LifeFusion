'use client';

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TimeRecord } from './TimeManagementPage';

interface TimeHistoryProps {
  records: TimeRecord[];
  onDelete: (id: string) => void;
}

const TimeHistory: React.FC<TimeHistoryProps> = ({ records, onDelete }) => {
  // Format date to readable format
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Format time to readable format
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  // Format seconds to HH:MM:SS
  const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  // Get the icon for a specific category
  const getCategoryIcon = (category: string): string => {
    const icons: Record<string, string> = {
      'exercise': '🏋️',
      'work': '💼',
      'study': '📚',
      'sleep': '😴',
      'leisure': '🎮',
      'selfcare': '🧘',
    };
    
    return icons[category] || '📝';
  };

  // Get the color for a specific category
  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'exercise': '#ff9500',
      'work': '#1180e6',
      'study': '#5856d6',
      'sleep': '#8e44ad',
      'leisure': '#ff2d55',
      'selfcare': '#4cd964',
    };
    
    return colors[category] || '#777';
  };

  // Sort records by start time, most recent first
  const sortedRecords = [...records]
    .filter(record => record.endTime) // Only show completed records
    .sort((a, b) => b.startTime.getTime() - a.startTime.getTime());

  return (
    <div>
      {sortedRecords.length === 0 ? (
        <Box
          sx={{
            textAlign: 'center',
            py: 6,
            color: 'text.secondary'
          }}
        >
          <Typography variant="body1">
            No activity records yet. Start tracking to see your history.
          </Typography>
        </Box>
      ) : (
        <div className="space-y-4">
          {sortedRecords.map((record) => (
            <div 
              key={record.id}
              className="flex items-center border border-[#eee] rounded-xl p-4 hover:bg-[#f9f9f9] transition-colors"
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: `${getCategoryColor(record.category)}15` }}
              >
                <span className="text-xl">{getCategoryIcon(record.category)}</span>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <Typography variant="subtitle1" fontWeight={500} sx={{ color: getCategoryColor(record.category) }}>
                      {record.category.charAt(0).toUpperCase() + record.category.slice(1)}
                    </Typography>
                    {record.notes && (
                      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                        {record.notes}
                      </Typography>
                    )}
                  </div>
                  
                  <div className="flex items-center mt-2 sm:mt-0">
                    <Typography variant="body2" sx={{ color: 'text.secondary', mr: 3, fontSize: '0.85rem' }}>
                      {formatDate(record.startTime)} · {formatTime(record.startTime)} 
                      {record.endTime && (
                        <span> → {formatTime(record.endTime)}</span>
                      )}
                    </Typography>
                    <Typography variant="body2" fontWeight={500} sx={{ mr: 2 }}>
                      {formatDuration(record.duration)}
                    </Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => onDelete(record.id)}
                      sx={{ color: 'text.secondary' }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeHistory; 