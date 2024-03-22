'use client';
import React from 'react';
import { LuFacebook, LuInstagram, LuTwitter, LuLinkedin } from 'react-icons/lu';
import MagneticFramer from '../ui/magnetic-framer';

type Props = {};

export default function FooterSocial({}: Props) {
  return (
    <>
      <MagneticFramer>
        <LuFacebook className=' h-8 w-8 cursor-pointer   transition duration-200 ease-in-out hover:text-primary ' />
      </MagneticFramer>
      <MagneticFramer>
        <LuInstagram className=' h-8 w-8 cursor-pointer   transition duration-200 ease-in-out hover:text-primary ' />
      </MagneticFramer>
      <MagneticFramer>
        <LuTwitter className=' h-8 w-8 cursor-pointer   transition duration-200 ease-in-out hover:text-primary ' />
      </MagneticFramer>
      <MagneticFramer>
        <LuLinkedin className=' h-8 w-8 cursor-pointer   transition duration-200 ease-in-out hover:text-primary ' />
      </MagneticFramer>
    </>
  );
}
