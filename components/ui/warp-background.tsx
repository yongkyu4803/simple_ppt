'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface WarpBackgroundProps {
  className?: string;
}

export const WarpBackground: React.FC<WarpBackgroundProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20"
        initial={{ scale: 1.2, rotate: 0 }}
        animate={{ 
          scale: [1.2, 1.3, 1.2],
          rotate: [0, 3, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
};