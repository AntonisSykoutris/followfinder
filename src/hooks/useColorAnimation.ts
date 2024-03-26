import { useEffect } from 'react';
import { useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { COLORS_TOP } from '@/lib/data';

export const useColorAnimation = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(170% 170% at 50% 100%, #f7f6fd 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror'
    });
  }, [color]);

  return { color, backgroundImage, border, boxShadow };
};
