import React from 'react';
import FileItem from './FileItem';
import { AnimatePresence } from 'framer-motion';

type Props = {
  files: File[];
  removeFile: (name: string) => void;
};

export default function FilesList({ files, removeFile }: Props) {
  return (
    <ul className=''>
      <AnimatePresence mode={'popLayout'}>
        {files.map((file: File, index: number) => (
          <FileItem file={file} key={index} removeFile={removeFile} />
        ))}
      </AnimatePresence>
    </ul>
  );
}
