'use client';

import Section from '@/components/General/Section';
import { Features } from '@/lib/data';
import { slideInFromBottom, slideInFromTop } from '@/lib/motion';
import { motion } from 'framer-motion';
import LeavesSvg from '../LeavesSvg';

type Props = {};

export default function About({}: Props) {
  return (
    <Section className='relative h-fit overflow-x-hidden overflow-y-hidden'>
      <LeavesSvg className='absolute hidden h-screen xl:inline-block' />
      <motion.div
        className='mx-auto max-w-2xl lg:text-center'
        initial='initial'
        animate='animate'
        variants={slideInFromTop()}
      >
        <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
          <span className='text-instagram'>Instagram</span> Follower/Following
          Analyzer
        </p>
        <p className='mt-6 text-lg leading-8 '>
          <span className='font-bold'>Easily and legally</span> manage your
          Instagram connections by identifying non-mutual followers,
          unreciprocated followers, and viewing detailed summary tables—all
          through simple JSON file uploads.
        </p>
      </motion.div>
      <motion.div
        className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'
        initial='initial'
        animate='animate'
        variants={slideInFromBottom()}
      >
        <div className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
          {Features.map(feature => (
            <div key={feature.name} className='relative pl-16'>
              <dt className='text-base font-semibold leading-7 '>
                <div className='instagram absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg'>
                  <feature.icon
                    className='h-6 w-6  text-primary-foreground'
                    aria-hidden='true'
                  />
                </div>
                {feature.name}
              </dt>
              <div className='mt-2 text-base leading-7 '>
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
