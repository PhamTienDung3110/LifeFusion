'use client';

import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Button, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CategoryType = 'shopping' | 'food' | 'transport' | 'entertainment' | 'bills' | 'travel';

const TransactionModal: React.FC<TransactionModalProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState('');
  const [recipient, setRecipient] = useState('');
  const [category, setCategory] = useState<CategoryType>('shopping');

  // Reset form when opening modal
  useEffect(() => {
    if (isOpen) {
      setAmount('');
      setAmountError('');
      setRecipient('');
    }
  }, [isOpen]);

  const validateAmount = (value: string) => {
    // Allow empty value (for now), numbers, and decimal points
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      setAmount(value);
      setAmountError('');
    } else {
      setAmountError('Please enter a valid amount');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate before submission
    if (!amount) {
      setAmountError('Amount is required');
      return;
    }
    
    // Handle transaction submission logic here
    console.log({ amount, recipient, category });
    onClose();
  };

  const categories: {id: CategoryType; label: string; color: string; bgColor: string;}[] = [
    { id: 'shopping', label: 'Shopping', color: '#ff9500', bgColor: '#fff5e5' },
    { id: 'food', label: 'Food', color: '#4cd964', bgColor: '#e5f9e9' },
    { id: 'transport', label: 'Transport', color: '#5856d6', bgColor: '#eeeeff' },
    { id: 'entertainment', label: 'Fun', color: '#ff2d55', bgColor: '#ffeef1' },
    { id: 'bills', label: 'Bills', color: '#ff3b30', bgColor: '#ffeeee' },
    { id: 'travel', label: 'Travel', color: '#4c9aff', bgColor: '#e5f0ff' }
  ];

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="transaction-modal-title"
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 300,
        },
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Box 
        sx={{ 
          maxWidth: '500px',
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: '16px',
          boxShadow: 24,
          outline: 'none',
          overflow: 'hidden',
          opacity: 0,
          transform: 'scale(0.95) translateY(10px)',
          animation: isOpen ? 'fadeIn 0.3s forwards' : 'none',
          '@keyframes fadeIn': {
            '0%': {
              opacity: 0,
              transform: 'scale(0.95) translateY(10px)'
            },
            '100%': {
              opacity: 1,
              transform: 'scale(1) translateY(0)'
            },
          },
        }}
      >
        {/* Header with decorative element */}
        <Box 
          sx={{
            position: 'relative',
            background: 'linear-gradient(to right, #1180e6, #13a0ff)',
            color: 'white',
            p: 3,
            overflow: 'hidden'
          }}
        >
          <Box 
            sx={{
              position: 'absolute',
              top: -60,
              right: -60,
              width: 130,
              height: 130,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}
          />
          <Box 
            sx={{
              position: 'absolute',
              bottom: -40,
              left: -40,
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}
          />
          
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5" component="h2" id="transaction-modal-title" fontWeight={600}>
                Add Transaction
              </Typography>
              <IconButton 
                onClick={onClose} 
                size="small"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': { 
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)' 
                  }
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', mt: 0.5 }}>
              Create a new financial transaction
            </Typography>
          </Box>
        </Box>

        <Box sx={{ p: 3 }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box>
                <Typography 
                  variant="subtitle2" 
                  component="label" 
                  htmlFor="amount" 
                  sx={{ mb: 1, display: 'block', color: 'text.secondary' }}
                >
                  Amount
                </Typography>
                <TextField
                  id="amount"
                  fullWidth
                  value={amount}
                  onChange={(e) => validateAmount(e.target.value)}
                  placeholder="Enter amount"
                  error={!!amountError}
                  helperText={amountError}
                  InputProps={{
                    startAdornment: (
                      <Box component="span" sx={{ color: 'text.secondary', mr: 0.5 }}>
                        $
                      </Box>
                    ),
                    sx: { 
                      fontSize: '1.125rem',
                      borderRadius: '12px'
                    }
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
                    },
                    '& .MuiFormHelperText-root': {
                      margin: '4px 0 0 0',
                    }
                  }}
                />
              </Box>

              <Box>
                <Typography 
                  variant="subtitle2" 
                  component="label" 
                  htmlFor="recipient" 
                  sx={{ mb: 1, display: 'block', color: 'text.secondary' }}
                >
                  Recipient
                </Typography>
                <TextField
                  id="recipient"
                  fullWidth
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="Enter recipient name"
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
              </Box>

              <Box>
                <Typography 
                  variant="subtitle2" 
                  component="label" 
                  sx={{ mb: 1.5, display: 'block', color: 'text.secondary' }}
                >
                  Category
                </Typography>
                <Box 
                  sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(4, 1fr)', 
                    gap: 1 
                  }}
                >
                  {categories.map((cat) => (
                    <Button
                      key={cat.id}
                      variant={category === cat.id ? "contained" : "outlined"}
                      disableElevation
                      onClick={() => setCategory(cat.id)}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 1.5,
                        borderRadius: '12px',
                        minWidth: 0,
                        textTransform: 'none',
                        borderColor: 'rgba(0, 0, 0, 0.12)',
                        backgroundColor: category === cat.id 
                          ? `${cat.bgColor} !important`
                          : 'transparent',
                        color: category === cat.id ? cat.color : 'text.secondary',
                        '&:hover': {
                          backgroundColor: category === cat.id 
                            ? cat.bgColor
                            : 'rgba(0, 0, 0, 0.04)',
                          borderColor: category === cat.id ? cat.color : 'rgba(0, 0, 0, 0.23)'
                        }
                      }}
                    >
                      <Box 
                        sx={{ 
                          width: 40, 
                          height: 40, 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          backgroundColor: cat.bgColor,
                          mb: 0.5
                        }}
                      >
                        <CategoryIcon type={cat.id} color={cat.color} />
                      </Box>
                      <Typography variant="caption" fontWeight={500}>
                        {cat.label}
                      </Typography>
                    </Button>
                  ))}
                </Box>
              </Box>

              <Box sx={{ pt: 1 }}>
                <Button 
                  type="submit" 
                  fullWidth
                  variant="contained"
                  sx={{
                    py: 1.75,
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
                  Complete Transaction
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

interface CategoryIconProps {
  type: CategoryType;
  color: string;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ type, color }) => {
  switch (type) {
    case 'shopping':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7l-1.2 9.6c-.09.67-.634 1.174-1.306 1.195H6.506c-.672-.021-1.216-.525-1.306-1.195L4 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 7h20M16 11a4 4 0 11-8 0" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'food':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8h1a4 4 0 010 8h-1M5 8h11v9a4 4 0 01-4 4H9a4 4 0 01-4-4V8zM12 8V4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'transport':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9h14M5 9a2 2 0 00-2 2v6a2 2 0 002 2h2M5 9V7a2 2 0 012-2h10a2 2 0 012 2v2M19 9a2 2 0 012 2v6a2 2 0 01-2 2h-2M8 19H16M9 15H10M14 15H15M7 13V15M17 13V15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'entertainment':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15l-2-2H6l-2 2V9l2 2h4l2-2M12 15l2-2h4l2 2V9l-2 2h-4l-2-2M12 15V9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'bills':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 14l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'travel':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

export default TransactionModal; 