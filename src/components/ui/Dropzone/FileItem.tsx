'use client';
import { formatFileSize } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';
import { LuFileJson, LuTrash2 } from 'react-icons/lu';

type Props = {
  file: File;
  key: number;
  removeFile: (name: string) => void;
};

export default function FileItem({ file, key, removeFile }: Props) {
  return (
    <motion.li
      layout
      key={key}
      className='mb-2 rounded-md border p-2'
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 600, damping: 30 }}
    >
      <div className='flex items-center gap-2  dark:text-black'>
        <LuFileJson
          size='30'
          className='shrink-0 text-[#f09433] transition duration-500 '
        />
        <div className='min-w-0 text-sm'>
          <div className='overflow-hidden overflow-ellipsis whitespace-nowrap'>
            {file.name}
          </div>
          <div className='text-xs  opacity-40'>{formatFileSize(file.size)}</div>
        </div>
        <div className='grow' />
        <div
          onClick={e => {
            e.stopPropagation();
            removeFile(file.name);
          }}
          className='h-6 w-6  cursor-pointer text-destructive transition duration-500 hover:scale-105'
        >
          <LuTrash2 className='h-full w-full' />
        </div>
      </div>
    </motion.li>
  );
}
