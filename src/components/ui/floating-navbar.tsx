'use client';
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent
} from 'framer-motion';
import { cn } from '@/lib/utils';
import UploadSvg from './UploadSvg';
import NavLink from './navlink';
import { Dropdown } from '../Navbar/Dropdown';

export const FloatingNav = ({
  navItems,
  className
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    const previous = scrollY.getPrevious();

    if (latest > previous! && latest > 150) setVisible(false);
    else setVisible(true);
  });

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: -100
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className={cn(
          'fixed inset-x-0  top-0   z-[5000] mx-auto  flex w-full  items-center justify-between space-x-4 border border-transparent bg-background/70  px-5 py-2  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]   dark:border-white/[0.2] dark:bg-black',
          className
        )}
      >
        <UploadSvg />
        <div className='flex gap-x-4 sm:gap-x-10 '>
          {navItems.map((navItem: any, idx: number) => (
            <NavLink key={idx} href={navItem.link} name={navItem.name} />
          ))}
          <Dropdown />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
