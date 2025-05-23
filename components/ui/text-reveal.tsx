'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({ children, className }) => {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};