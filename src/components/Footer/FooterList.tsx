'use client';

import React from 'react';
import NavLink from '../ui/navlink';
import { FooterNavLink } from '@/lib/types';

type Props = {
  title: string;
  items: FooterNavLink[];
};

export default function FooterList({ title, items }: Props) {
  return (
    <>
      <h5 className={'font-semibold tracking-[1px]'}>{title}</h5>
      <ul className='mt-6  list-none'>
        {items.map((item, index) => {
          return (
            <li key={index} className='mt-3'>
              <NavLink
                className='inline-block text-primary hover:text-primary/90'
                underline='after:bg-background'
                href={item.link}
                name={item.name}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
