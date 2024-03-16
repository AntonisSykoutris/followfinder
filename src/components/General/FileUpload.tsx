'use client';

import { useState, FormEvent, useCallback } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';

import UploadSvg from './UploadSvg';
import FilesList from './FilesList';

type Props = {
  className?: string;
};

export default function FileUpload({ className }: Props) {
  const [files, setFiles] = useState<File[]>([]);
  const [rejected, setRejected] = useState<FileRejection[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const hasTwoFiles = files.length === 2;

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const totalFiles = files.length + acceptedFiles.length;

      if (totalFiles > 2) {
        // If adding the new files would exceed the limit, remove the first two files
        setFiles(previousFiles => previousFiles.slice(2));
      }

      setFiles(previousFiles => {
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
    [files.length]
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!hasTwoFiles) return;
  };

  return (
    <form onSubmit={handleSubmit} className=''>
      <div
        {...getRootProps({
          className: `${className}${!hasTwoFiles ? 'cursor-pointer' : ''}`
        })}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!hasTwoFiles && <input {...getInputProps()} />}
        <div className='flex justify-center align-top text-gray-400'>
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>DRAG & DROP OR CLICK TO UPLOAD</p>
          )}
        </div>
        <UploadSvg
          className={`${isHovered ? 'text-blue-500 opacity-15' : 'text-blue-300 opacity-10'} absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 transform self-center  ${files.length > 0 ? 'hidden' : ''}`}
        />
        <FilesList files={files} removeFile={removeFile} />
        <motion.button
          type='submit'
          disabled={hasTwoFiles}
          whileHover={hasTwoFiles ? { scale: 1.05 } : 'none'}
          whileTap={hasTwoFiles ? { scale: 0.9 } : 'none'}
          className={` ${hasTwoFiles ? 'instagram' : 'bg-[#e0e0e0]'} absolute -bottom-5  self-center rounded-full px-8 py-2 text-lg font-bold text-white ${hasTwoFiles ? 'hover:cursor-pointer' : 'cursor-default'} `}
        >
          Analyze
        </motion.button>
      </div>
    </form>
  );
}
