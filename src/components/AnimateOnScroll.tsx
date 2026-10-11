import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  scaleAmount?: number;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  className = '',
  distance = 35,
  scaleAmount = 0.9,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, scale: 1 };
      case 'down':
        return { opacity: 0, y: -distance, scale: 1 };
      case 'left':
        return { opacity: 0, x: distance, scale: 1 };
      case 'right':
        return { opacity: 0, x: -distance, scale: 1 };
      case 'zoom':
        return { opacity: 0, scale: scaleAmount, y: 0 };
      case 'fade':
      default:
        return { opacity: 0, scale: 1 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0, scale: 1 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0, scale: 1 };
      case 'zoom':
        return { opacity: 1, scale: 1, y: 0 };
      case 'fade':
      default:
        return { opacity: 1, scale: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: false, amount: 0.12 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1], // Smooth natural deceleration
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
