'use client';

import React from 'react';
import UploadSvg from '../ui/UploadSvg';
import FooterList from './FooterList';
import { FooterCompanyLinks, FooterImportantLinks } from '@/lib/data';
import FooterSocial from './FooterSocial';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import BottomGradient from '../ui/bottom-gradient';
import { motion } from 'framer-motion';

type Props = {};

export default function Footer({}: Props) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=' relative  bg-foreground text-primary-foreground'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12'>
            <div className='px-0  py-20'>
              <div className='grid grid-cols-1 gap-[30px] md:grid-cols-12'>
                <div className='md:col-span-12 lg:col-span-4'>
                  <UploadSvg />
                  <p className='mt-6 text-primary-foreground'>
                    © 2024 Instagram Follower/Following Analyzer | Developed
                    with privacy and user data protection in mind. All data
                    processing is done locally and securely. We do not store or
                    share your personal information.
                  </p>
                  <div className='mt-6 flex justify-center gap-x-5   sm:justify-start'>
                    <FooterSocial />
                  </div>
                </div>
                <div className='md:col-span-4 lg:col-span-2'>
                  <FooterList title={'Company'} items={FooterCompanyLinks} />
                </div>
                <div className='md:col-span-4 lg:col-span-3'>
                  <FooterList
                    title={'Important Links'}
                    items={FooterImportantLinks}
                  />
                </div>
                <div className='md:col-span-4 lg:col-span-3'>
                  <h5 className='font-semibold tracking-wider text-gray-100'>
                    Newsletter
                  </h5>
                  <p className='mt-6'>
                    <span className='text-instagram'>Sign up </span> and receive
                    the latest tips via email.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1'>
                      <div className='mb-4 flex w-full flex-col space-y-2'>
                        <Label htmlFor='email'>
                          Email Address{' '}
                          <span className='text-instagram'>*</span>
                        </Label>
                        <Input
                          id='email'
                          placeholder='projectmayhem@fc.com'
                          type='email'
                        />
                      </div>

                      <motion.button
                        className='group/btn instagram relative block h-10 w-full rounded-md '
                        type='submit'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className='group text-primary-foreground transition duration-200 ease-in-out hover:text-primary-foreground/65'>
                          Subscribe{' '}
                          <span
                            aria-hidden='true'
                            className='inline-block translate-x-0 transition-transform duration-200 ease-in-out group-hover:translate-x-1'
                          >
                            →
                          </span>
                        </div>
                        <BottomGradient />
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-800 px-0 py-7'>
        <div className='container mx-auto px-6 text-center'>
          <div className='grid items-center md:grid-cols-2'>
            <div className='text-center md:text-left'>
              <span className='block text-center '>
                Copyright © {currentYear} by Antonis Sykoutris Inc. All rights
                reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('Form submitted');
};
