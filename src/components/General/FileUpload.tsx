'use client';

import React, { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import UploadSvg from './UploadSvg';
import { LuFileJson, LuTrash2 } from 'react-icons/lu';
import { formatFileSize } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  className?: string;
};

export default function FileUpload({ className }: Props) {
  const [files, setFiles] = useState<File[]>([]);
  const [rejected, setRejected] = useState<FileRejection[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const totalFiles = files.length + acceptedFiles.length;

      if (totalFiles > 2) {
        // If adding the new files would exceed the limit, remove the first two files
        setFiles(previousFiles => previousFiles.slice(2));
      }

      setFiles(previousFiles => {
        console.log('Files Length ' + previousFiles.length);
        const newFiles = [
          ...previousFiles.slice(0, 2),
          ...acceptedFiles.map((file: File) => Object.assign(file))
        ];

        // Limiting to 2 files
        return newFiles.slice(0, 2);
      });

      if (rejectedFiles?.length) {
        setRejected(previousFiles => [...previousFiles, ...rejectedFiles]);
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    // accept: {
    //   'application/json': ['.json	']
    // },
    maxSize: 1024 * 1000,
    maxFiles: 2,
    onDrop
  });

  const removeFile = (name: string) => {
    setFiles(files => files.filter(file => file.name !== name));
  };

  const removeAll = () => {
    setFiles([]);
    setRejected([]);
  };

  const removeRejected = (name: string) => {
    setRejected(files => files.filter(file => file.file.name !== name));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!hasTwoFiles) return;
  };

  //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     if (!file1 || !file2) {
  //       alert('Both files are required');
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append('file1', file1);
  //     formData.append('file2', file2);

  //     try {
  //       const response = await fetch('http://localhost:5000/api/FileUpload', {
  //         method: 'POST',
  //         body: formData
  //       });

  //       if (response.ok) alert('Files uploaded successfully');
  //       else alert('Failed to upload files');
  //     } catch (error) {
  //       console.error('Error uploading files:', error);
  //       alert('Failed to upload files');
  //     }
  //   };

  //   const handleFile1Change = (e: ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.files && e.target.files[0]) {
  //       setFile1(e.target.files[0]);
  //     }
  //   };

  //   const handleFile2Change = (e: ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.files && e.target.files[0]) {
  //       setFile2(e.target.files[0]);
  //     }
  //   };
  const [isHovered, setIsHovered] = useState(false);
  // Check if there are already 2 files uploaded
  const hasTwoFiles = files.length === 2;
  return (
    <form onSubmit={handleSubmit} className=''>
      <div
        {...getRootProps({ className: className })}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!hasTwoFiles && <input {...getInputProps()} />}
        <div className='flex flex-col items-center justify-center text-xs text-gray-400'>
          <UploadSvg className={`${isHovered ? 'text-blue-500' : ''}`} />
          <div className='text-gray-400'>
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>DRAG & DROP OR CLICK TO UPLOAD</p>
            )}
          </div>
        </div>
        {/* <input type='file' onChange={handleFile1Change} />
        <input type='file' onChange={handleFile2Change} /> */}
        <ul className=''>
          <AnimatePresence mode={'popLayout'}>
            {files.map((file, index) => (
              <motion.li
                layout
                key={index}
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
            ))}
          </AnimatePresence>
        </ul>

        <motion.button
          type='submit'
          disabled={hasTwoFiles}
          whileHover={hasTwoFiles ? { scale: 1.05 } : 'none'}
          whileTap={hasTwoFiles ? { scale: 0.9 } : 'none'}
          className={` ${hasTwoFiles ? 'instagram' : 'bg-[#e0e0e0]'}   self-center rounded-full px-8 py-2 text-lg font-bold text-white  hover:cursor-pointer`}
        >
          Upload
        </motion.button>
      </div>
    </form>
  );
}
