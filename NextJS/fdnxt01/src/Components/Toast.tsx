'use client';

import { useState, useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  }[type];

  const icon = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
  }[type];

  return (
    <div className={`fixed bottom-8 right-8 ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-4 z-50 max-w-md`}>
      <span className="text-2xl">{icon}</span>
      <p className="flex-1">{message}</p>
      <button
        onClick={onClose}
        className="text-white hover:text-gray-200 transition-colors text-xl"
        aria-label="Sluiten"
      >
        ×
      </button>
    </div>
  );
}
