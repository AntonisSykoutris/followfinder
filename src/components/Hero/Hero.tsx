'use client';

import Dropzone from '../ui/Dropzone/Dropzone';
import ArrowSvg from '../ui/ArrowSvg';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate
} from 'framer-motion';
import { useEffect } from 'react';
type Props = {};

const COLORS_TOP = ['#bc1888', '#CE84CF', '#e6683c'];

export default function Hero({}: Props) {
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

  return (
    <motion.section
      className='relative mx-auto flex h-screen w-screen
      flex-col items-center justify-center gap-y-10 p-8'
      style={{
        backgroundImage
      }}
    >
      <div className='relative flex items-center'>
        <h1 className='text-xl font-bold  sm:text-2xl md:text-3xl lg:text-5xl'>
          Upload your files below
        </h1>
        <ArrowSvg className='rig absolute -right-10 -top-5 h-14 w-14 translate-x-2/3  transform opacity-5 md:-right-20 md:h-20 md:w-20' />
      </div>
      <Dropzone />
    </motion.section>
  );
}
