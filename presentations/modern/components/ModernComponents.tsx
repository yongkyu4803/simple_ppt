'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Presentation.module.css';

// 배경 장식 컴포넌트
export const Decorations: React.FC = () => {
  return (
    <>
      <div className={`${styles.decoration} ${styles.decorationGrid}`} />
      <motion.div 
        className={`${styles.decoration} ${styles.decorationBlob1}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div 
        className={`${styles.decoration} ${styles.decorationBlob2}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      />
    </>
  );
};

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
    <div className={center ? 'text-center' : 'text-left'}>
      <motion.h1 
        className={`${styles.title} ${dark ? styles.titleDark : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.h1>
      
      {subtitle && (
        <motion.p 
          className={`${styles.subtitle} ${dark ? styles.subtitleDark : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className={styles.accentBar}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 96, opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
        style={{ margin: center ? '0 auto 3rem auto' : '0 0 3rem 0' }}
      />
    </div>
  );
};

// 아이콘 피처 컴포넌트
interface IconFeatureProps {
  icon: React.ReactNode;
  label: string;
  type?: 'blue' | 'purple' | 'teal';
  delay?: number;
  dark?: boolean;
}

export const IconFeature: React.FC<IconFeatureProps> = ({ 
  icon, 
  label, 
  type = 'blue',
  delay = 0,
  dark = false
}) => {
  const getIconClass = () => {
    switch(type) {
      case 'purple': return styles.iconPurple;
      case 'teal': return styles.iconTeal;
      case 'blue':
      default: return styles.iconBlue;
    }
  };
  
  return (
    <motion.div 
      className={styles.iconFeature}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className={`${styles.iconCircle} ${getIconClass()}`}>
        {icon}
      </div>
      <span className={`${styles.iconLabel} ${dark ? styles.iconLabelDark : ''}`}>
        {label}
      </span>
    </motion.div>
  );
};

export const IconFeatures: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className={styles.iconFeatures}>
      {children}
    </div>
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
      className={`${styles.card} ${dark ? styles.cardDark : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {icon && (
        <div className={styles.cardIcon}>
          {icon}
        </div>
      )}
      
      <h3 className={`${styles.cardTitle} ${dark ? styles.cardTitleDark : ''}`}>
        {title}
      </h3>
      
      <div>
        {children}
      </div>
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
    <div className={styles.bulletList}>
      {items.map((item, index) => (
        <motion.div 
          key={index} 
          className={`${styles.bulletItem} ${dark ? styles.bulletItemDark : ''}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: delay + (index * 0.1) }}
        >
          <div className={styles.bulletPoint}></div>
          <div>{item}</div>
        </motion.div>
      ))}
    </div>
  );
};

// 버튼 컴포넌트
interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  delay?: number;
  dark?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  primary = true, 
  children, 
  onClick,
  delay = 0,
  dark = false,
  icon
}) => {
  return (
    <motion.button
      className={`${styles.button} ${primary ? styles.primaryButton : dark ? styles.secondaryButtonDark : styles.secondaryButton}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      whileTap={{ y: 0, transition: { duration: 0.2 } }}
    >
      {icon && icon}
      {children}
    </motion.button>
  );
};

// 그리드 레이아웃 컴포넌트
interface GridContainerProps {
  children: React.ReactNode;
}

export const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
};

export const GridHeader: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className={styles.gridHeader}>
      {children}
    </div>
  );
};

export const GridContent: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className={styles.gridContent}>
      {children}
    </div>
  );
};

export const GridFooter: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className={styles.gridFooter}>
      {children}
    </div>
  );
};

// 카드 컨테이너
export const CardContainer: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className={styles.cardsContainer}>
      {children}
    </div>
  );
};
