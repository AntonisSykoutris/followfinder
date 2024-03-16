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
      onClick={e => {
        e.stopPropagation(); // Stop event propagation here
        removeFile(file.name);
      }}
    >
      <div className='flex items-center gap-2 text-gray-500 dark:text-black'>
        <LuFileJson
          size='30'
          className='shrink-0 text-secondary transition duration-500 hover:text-secondary-content'
        />
        <div className='min-w-0 text-sm'>
          <div className='overflow-hidden overflow-ellipsis whitespace-nowrap'>
            {file.name}
          </div>
          <div className='text-xs text-gray-400 dark:text-gray-400'>
            {formatFileSize(file.size)}
          </div>
        </div>
        <div className='grow' />
        <div className='flex w-12 justify-end text-xs'>
          <motion.div // Wrap your trash icon in a motion.div
            whileHover={{ scale: 1.1 }} // Animation on hover
            whileTap={{ scale: 0.9 }} // Animation when tapped
            onClick={e => {
              e.stopPropagation(); // Stop event propagation here
              removeFile(file.name);
            }}
            className='h-6 w-6 shrink-0 cursor-pointer text-error transition duration-500 hover:text-error-content'
          >
            <LuTrash2 className='h-full w-full' />
          </motion.div>
        </div>
      </div>
    </motion.li>
  );
}
