'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BorderBeamProps {
  children: React.ReactNode;
  className?: string;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({ children, className }) => {
  return (
    <div className={cn("relative", className)}>
      {children}
      <motion.div
        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
};