'use client';

import Dropzone from '../Dropzone/Dropzone';
import ArrowSvg from '../ui/ArrowSvg';
import { motion } from 'framer-motion';
import { useColorAnimation } from '@/hooks/useColorAnimation';
type Props = {};

export default function Hero({}: Props) {
  const { backgroundImage } = useColorAnimation();

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
