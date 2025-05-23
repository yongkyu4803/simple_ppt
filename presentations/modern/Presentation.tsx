'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoverPage from './pages/CoverPage';
import FeaturesPage from './pages/FeaturesPage';
import ThankYouPage from './pages/ThankYouPage';
import styles from './Presentation.module.css';

interface ModernPresentationProps {
  currentSlide: number;
}

const ModernPresentation: React.FC<ModernPresentationProps> = ({ currentSlide }) => {
  // 슬라이드 전환 애니메이션
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  // 현재 슬라이드 방향 (앞으로 가는지 뒤로 가는지)
  const [direction, setDirection] = React.useState(1);
  const [previousSlide, setPreviousSlide] = React.useState(0);
  
  React.useEffect(() => {
    // 슬라이드 이동 방향 감지
    setDirection(currentSlide > previousSlide ? 1 : -1);
    setPreviousSlide(currentSlide);
  }, [currentSlide, previousSlide]);
  
  // 슬라이드 렌더링
  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <CoverPage />;
      case 1:
        return <FeaturesPage />;
      case 2:
        return <ThankYouPage />;
      default:
        return <CoverPage />;
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ModernPresentation;