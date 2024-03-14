'use client';

import { cn } from '@/lib/utils';
import { MotionValue, motion } from 'framer-motion';

type Props = {
  className?: string;
};

export default function UploadSvg({ className }: Props) {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={cn('h-6 w-6 transition duration-500', className)}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 6
        }}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z'
      />
    </motion.svg>
  );
}
