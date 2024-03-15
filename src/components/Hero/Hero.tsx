'use client';

import {
  MultiFileDropzone,
  type FileState
} from '@/components/General/MultiFileDropzone';
import { useEdgeStore } from '@/lib/edgestore';
import { useState } from 'react';
import Section from '../General/Section';
import FileUpload from '../General/FileUpload';
import Example from '../General/Example';

type Props = {};

export default function Hero({}: Props) {
  const [fileUrls, setFileUrls] = useState<string[] | undefined>();
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();

  function updateFileProgress(key: string, progress: FileState['progress']) {
    setFileStates(fileStates => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(fileState => fileState.key === key);
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  return (
    <Section className='hero_section'>
      <FileUpload className='active:shadow-none" flex  flex-col  gap-2 rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:cursor-pointer hover:rounded-md hover:shadow-[4px_4px_0px_black] ' />
    </Section>
  );
}
