'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({ 
  children, 
  className,
  ...props 
}) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-10 overflow-hidden rounded-md px-4 py-2",
        "transition-all duration-300 hover:scale-105",
        className
      )}
      {...props}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-blue-400/70 to-blue-400/30 opacity-0 hover:opacity-100"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};