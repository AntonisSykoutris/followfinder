'use client';

import Section from '../General/Section';
import FileUpload from '../Dropzone/Dropzone';
import ArrowSvg from '../General/ArrowSvg';

type Props = {};

export default function Hero({}: Props) {
  return (
    <Section className='hero_section relative items-center gap-y-10'>
      <div className='relative flex items-center'>
        <h1 className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl'>
          Upload your files below
        </h1>
        <ArrowSvg className='rig absolute -right-10 -top-5 h-14 w-14 translate-x-2/3  transform opacity-5 md:-right-20 md:h-20 md:w-20' />
      </div>
      <FileUpload />
    </Section>
  );
}
