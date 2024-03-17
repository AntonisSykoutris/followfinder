'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type Props = {
  className?: string;
};

export default function ArrowSvg({ className }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className=' -bottom-10 -left-10 h-[83px] w-[83px] lg:-bottom-60  lg:-left-40 lg:h-[249px]  lg:w-[249px]'
      width='327'
      height='327'
      viewBox='0 0 327 327'
      fill='none'
    >
      <path
        d='M175.772 245.176C183.833 244.316 194.661 242.923 202.368 240.73M202.368 240.73C203.256 240.477 199.476 234.67 199.28 234.417C194.966 228.863 190.059 224.044 184.952 219.239M202.368 240.73C158.606 235.673 127.02 204.269 126.302 172.87C126.23 169.758 126.156 166.371 126.383 162.992M126.383 162.992C126.746 157.61 127.873 152.249 130.997 148.052C133.881 144.179 139.268 140.348 144.28 140.983C153.642 142.17 156.341 154.392 149.984 160.897C144.398 166.613 132.668 167.79 126.383 162.992ZM126.383 162.992C126.251 162.89 126.121 162.787 125.993 162.68C95.1909 136.963 112.891 93.2305 141.789 77.64'
        stroke='#A6D8D2'
        strokeWidth='5'
        strokeMiterlimit='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  );
}
