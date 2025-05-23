'use client';

import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NumberTickerProps {
  value: number;
  className?: string;
}

export const NumberTicker: React.FC<NumberTickerProps> = ({ value, className }) => {
  const springValue = useSpring(value, { stiffness: 100, damping: 30 });
  const displayValue = useTransform(springValue, (current) => Math.round(current).toString());
  
  React.useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);
  
  return (
    <motion.div className={cn("font-mono", className)}>
      {displayValue}
    </motion.div>
  );
};