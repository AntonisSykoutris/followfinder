'use client';

import Section from '@/components/General/Section';

export default function DocumentationPage() {
  return (
    <Section
      className='relative mx-auto flex h-screen w-screen
      flex-col items-center justify-center gap-y-10 overflow-x-hidden p-8'
      animate
    >
      <h1 className='text-xl font-bold  sm:text-2xl md:text-3xl lg:text-5xl'>
        <span className='text-instagram'>G</span>etting{' '}
        <span className=' text-instagram'>S</span>tarted
      </h1>
    </Section>
  );
}
