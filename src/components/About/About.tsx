'use client';

import Section from '@/components/General/Section';
import { UploadButton, UploadDropzone } from '@/lib/uploadthing';
import FileUpload from '../General/FileUpload';

type Props = {};

export default function About({}: Props) {
  return (
    <Section>
      <h1 className='text-6xl'>ABOUT SECTION</h1>
      {/* <UploadDropzone
        endpoint='fileUploader'
        onClientUploadComplete={res => {
          // Do something with the response
          console.log('Files: ', res);
          alert('Upload Completed');
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      /> */}
      <FileUpload className='active:shadow-none" flex  flex-col  gap-2 rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:cursor-pointer hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl' />
    </Section>
  );
}
