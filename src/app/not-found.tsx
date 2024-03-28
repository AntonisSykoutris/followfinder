'use client';

import Image from 'next/image';
import Section from '@/components/General/Section';

export default function PageNotFound() {
  return (
    <Section
      className='relative mx-auto flex h-screen w-screen
      flex-col items-center justify-center gap-y-10 overflow-x-hidden p-8'
      animate
    >
      <Image
        src='/404.png'
        width={500}
        height={500}
        alt='Picture of the author'
      />
      <h1 className='text-xl font-bold  sm:text-2xl md:text-3xl lg:text-5xl'>
        <span>This Page is Lost in the </span>{' '}
        <span className=' text-instagram'>Wind</span>
      </h1>
    </Section>
  );
}
