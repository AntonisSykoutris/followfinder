'use client';

import Section from '@/components/General/Section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

export default function FAQPage() {
  return (
    <Section
      className='relative mx-auto flex h-screen w-screen
      flex-col items-center justify-center gap-y-10 overflow-x-hidden p-8'
      animate
    >
      <h1 className='text-xl font-bold  sm:text-2xl md:text-3xl lg:text-5xl'>
        <span className='text-instagram'>F</span>requently{' '}
        <span className='text-instagram'>A</span>sked{' '}
        <span className=' text-instagram'>Q</span>uestions
      </h1>
      <Accordion
        type='single'
        collapsible
        className='relative z-50 w-full rounded-xl bg-background p-10 md:w-1/2'
      >
        <AccordionItem value='item-1' className=''>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-5'>
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
}
