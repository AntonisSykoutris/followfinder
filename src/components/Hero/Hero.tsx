'use client';

import Section from '../General/Section';
import FileUpload from '../General/FileUpload';

type Props = {};

export default function Hero({}: Props) {
  return (
    <Section className='hero_section items-center justify-center'>
      <FileUpload className='active:shadow-none" w  relative flex  h-[30dvh] w-[90dvw]  flex-col  place-content-between gap-2 rounded-2xl border-2  border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px]  hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] sm:h-[40dvh] sm:w-[70dvw] 2xl:h-[30dvh] 2xl:w-[40dvw]  ' />
    </Section>
  );
}
