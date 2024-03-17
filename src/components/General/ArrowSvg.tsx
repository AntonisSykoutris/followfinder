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
      className={` ${className}`}
      viewBox='0 0 327 327'
      fill='none'
    >
      <path
        d='M137.84 272.286C146.04 276.085 157.231 280.911 166.089 282.94M166.089 282.94C167.11 283.174 167.883 274.128 167.887 273.715C167.971 264.646 166.953 256.084 165.736 247.419M166.089 282.94C128.808 250.936 122.536 195.371 145.21 158.214C147.457 154.531 149.906 150.524 152.631 146.707M152.631 146.707C156.974 140.628 162.017 135.029 168.067 131.982C173.652 129.171 181.553 127.901 185.781 131.632C193.679 138.601 187.122 154.507 176.323 158.326C166.834 161.683 154.958 156.067 152.631 146.707ZM152.631 146.707C152.583 146.509 152.538 146.311 152.497 146.11C142.732 97.6643 191.851 57.0601 230.545 56.0508'
        stroke='#A6D8D2'
        strokeWidth='5'
        strokeMiterlimit='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  );
}
