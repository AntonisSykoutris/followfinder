'use client';

import Section from '../General/Section';
import FileUpload from '../Dropzone/Dropzone';
import ArrowSvg from '../General/ArrowSvg';

type Props = {};

export default function Hero({}: Props) {
  return (
    <Section className='hero_section relative items-center justify-center'>
      <h1 className='text-6xl'>Upload your files below</h1>
      <ArrowSvg />
      <FileUpload />
    </Section>
  );
}
