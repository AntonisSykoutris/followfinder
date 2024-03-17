'use client';

import Section from '../General/Section';
import FileUpload from '../Dropzone/Dropzone';
import ArrowSvg from '../General/ArrowSvg';

type Props = {};

export default function Hero({}: Props) {
  return (
    <Section className='hero_section relative items-center gap-y-10'>
      <div className='flex items-center'>
        <h1 className='text-xl sm:text-2xl md:text-5xl'>
          Upload your files below
        </h1>
        <ArrowSvg className=' ml-2 h-14 w-14 md:h-20 md:w-20 ' />
      </div>
      <FileUpload />
    </Section>
  );
}
