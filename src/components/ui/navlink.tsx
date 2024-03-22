'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type Props = {
  className?: string;
  key?: number;
  href: string;
  name: string;
};

export default function NavLink({ className, key, href, name }: Props) {
  return (
    <Link
      key={`link=${key}`}
      href={href}
      className={cn(
        'relative flex items-center space-x-1  text-secondary-foreground hover:text-secondary-foreground/65',
        className
      )}
    >
      <span className='relative text-sm after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#bc1888] after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 sm:text-base'>
        {name}
      </span>
    </Link>
  );
}
