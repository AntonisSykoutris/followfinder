'use client';

import Section from '../General/Section';
import FileUpload from '../Dropzone/Dropzone';
import ArrowSvg from '../General/ArrowSvg';
import UnderlineArrow from '../General/UnderlineArrow';

type Props = {};

export default function Hero({}: Props) {
  return (
    <Section className='hero_section relative items-center gap-y-10'>
       <div className="flex items-center"> {/* Container for text and UnderlineArrow */}
          <h1 className='text-2xl md:text-5xl'>Upload your files below</h1>
          <UnderlineArrow className=" w-14 h-14 md:w-20 md:h-20 ml-2 " /> {/* Adjust width and margin as needed */}
        </div>

      <FileUpload />
    </Section>
  );
}
