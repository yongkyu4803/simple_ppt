'use client';

import React from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedList: React.FC<AnimatedListProps> = ({ children, className }) => {
  const [scope, animate] = useAnimate();
  
  React.useEffect(() => {
    animate(
      "li, div, p",
      { opacity: [0, 1], y: [20, 0] },
      { delay: stagger(0.1), duration: 0.5 }
    );
  }, [animate]);
  
  return (
    <div ref={scope} className={cn("", className)}>
      {children}
    </div>
  );
};