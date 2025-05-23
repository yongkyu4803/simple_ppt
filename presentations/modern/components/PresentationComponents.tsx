'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 페이드인 애니메이션
export const fadeIn = (delay: number = 0, duration: number = 0.7) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration, delay }
});

// 슬라이드업 애니메이션
export const slideUp = (delay: number = 0, duration: number = 0.7) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: [0.22, 1, 0.36, 1] }
});

// 좌측에서 우측으로 애니메이션
export const slideRight = (delay: number = 0, duration: number = 0.7) => ({
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration, delay, ease: [0.22, 1, 0.36, 1] }
});

// 우측에서 좌측으로 애니메이션
export const slideLeft = (delay: number = 0, duration: number = 0.7) => ({
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration, delay, ease: [0.22, 1, 0.36, 1] }
});

// 스케일업 애니메이션
export const scaleUp = (delay: number = 0, duration: number = 0.7) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration, delay, ease: [0.22, 1, 0.36, 1] }
});

// 제목 컴포넌트
interface TitleProps {
  children: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
  delay?: number;
}

export const Title: React.FC<TitleProps> = ({ 
  children, 
  subtitle, 
  center = true, 
  dark = false,
  delay = 0 
}) => {
  return (
    <motion.div className={`flex flex-col ${center ? 'items-center text-center' : 'items-start text-left'}`}>
      <motion.h1 
        className={`modern-title ${dark ? 'text-white' : 'text-gray-900'}`}
        {...slideUp(delay)}
      >
        {children}
      </motion.h1>
      
      {subtitle && (
        <motion.h2 
          className={`modern-subtitle ${dark ? 'text-gray-300' : 'text-gray-600'}`}
          {...slideUp(delay + 0.1)}
        >
          {subtitle}
        </motion.h2>
      )}
      
      <motion.div 
        className="accent-bar" 
        {...fadeIn(delay + 0.2)}
      />
    </motion.div>
  );
};

// 불릿 리스트 컴포넌트
interface BulletListProps {
  items: string[];
  dark?: boolean;
  delay?: number;
}

export const BulletList: React.FC<BulletListProps> = ({ 
  items, 
  dark = false,
  delay = 0 
}) => {
  return (
    <ul className="modern-list">
      {items.map((item, index) => (
        <motion.li 
          key={index} 
          className="modern-list-item"
          {...slideRight(delay + (index * 0.1))}
        >
          <div className="bullet-point">
            <div className="bullet-inner" />
          </div>
          <span className={dark ? 'text-gray-300' : 'text-gray-700'}>
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  );
};

// 카드 컴포넌트
interface CardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  delay?: number;
  dark?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  icon, 
  delay = 0,
  dark = false 
}) => {
  return (
    <motion.div 
      className="modern-card"
      {...slideUp(delay)}
    >
      {icon && (
        <div className={`rounded-full ${dark ? 'bg-blue-900' : 'bg-blue-100'} w-14 h-14 flex items-center justify-center mb-4`}>
          {icon}
        </div>
      )}
      
      <h3 className={`text-xl font-bold mb-3 ${dark ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h3>
      
      <div className={dark ? 'text-gray-300' : 'text-gray-600'}>
        {children}
      </div>
    </motion.div>
  );
};

// 버튼 컴포넌트
interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  delay?: number;
}

export const Button: React.FC<ButtonProps> = ({ 
  primary = true, 
  children, 
  onClick,
  delay = 0 
}) => {
  return (
    <motion.button
      className={primary ? 'primary-button' : 'secondary-button'}
      onClick={onClick}
      {...fadeIn(delay)}
    >
      {children}
    </motion.button>
  );
};

// 장식 요소
export const Decorations: React.FC = () => {
  return (
    <>
      <motion.div 
        className="decorative-circle-1"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div 
        className="decorative-circle-2"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      />
    </>
  );
};
