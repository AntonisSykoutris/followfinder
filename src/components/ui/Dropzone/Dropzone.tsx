'use client';

import { useState, FormEvent, useCallback } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';

import UploadSvg from '../UploadSvg';
import FilesList from './FilesList';
import axios from 'axios';
import { ToastDestructive } from '../ToastDestructive';
import { toast } from 'sonner';

type Props = {
  className?: string;
};

export default function Dropzone({ className }: Props) {
  const [files, setFiles] = useState<File[]>([]);
  const [rejected, setRejected] = useState<FileRejection[]>([]);
  const hasTwoFiles = files.length === 2;

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const totalFiles = files.length + acceptedFiles.length;

      if (totalFiles > 2) {
        // If adding the new files would exceed the limit, remove the first two files
        setFiles(previousFiles => previousFiles.slice(2));
      }

      const uniqueAcceptedFiles = acceptedFiles.filter(
        file => !files.find(existingFile => existingFile.name === file.name)
      );

      // Remove duplicates from the files array
      const filesSet = new Set(files.map(file => file.name));
      const uniqueFiles = [
        ...files,
        ...uniqueAcceptedFiles.filter(file => !filesSet.has(file.name))
      ];

      setFiles(previousFiles => {
        const newFiles = [...uniqueFiles.slice(0, 2)];

        // Limiting to 2 files
        return newFiles;
      });

      if (rejectedFiles?.length) {
        setRejected(previousFiles => [...previousFiles, ...rejectedFiles]);
      }
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/json': ['.json']
    },
    maxSize: 1024 * 1000,
    maxFiles: 2,
    noClick: hasTwoFiles,
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
    // Create FormData object
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });

    try {
      const res = await fetch('https://httpbin.org/post', {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formData,
        method: 'POST'
      });

      if (res.ok) {
        toast.success('analyzes successfully');
      }

      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log('Error with sending the POST request');
      toast.error('failed to send the POST request');
    }
  };

  return (
    <form onSubmit={handleSubmit} className=''>
      <div
        {...getRootProps({
          className: `${className} ${
            !hasTwoFiles ? 'cursor-pointer' : ''
          } active:shadow-none"   relative flex  h-[30vh] w-[90vw]  flex-col  bg-background place-content-between justify-center gap-2 rounded-2xl  border-2 border-dashed border-foreground bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300  hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] sm:h-[40dvh] sm:w-[80vw] md:w-[50vw] 2xl:h-[30dvh] 2xl:w-[30vw]  `
        })}
      >
        {!hasTwoFiles ? <input {...getInputProps()} /> : <></>}
        <div className='absolute left-1/2 top-2 flex w-full -translate-x-1/2 transform  justify-center align-top md:top-5'>
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>DRAG & DROP OR CLICK TO UPLOAD</p>
          )}
        </div>
        <UploadSvg
          className={`absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 transform self-center text-[#f7f6fd] opacity-60  ${
            files.length > 0 ? 'hidden' : ''
          }`}
        />
        <FilesList files={files} removeFile={removeFile} />
        <motion.button
          type='submit'
          disabled={!hasTwoFiles}
          whileHover={hasTwoFiles ? { scale: 1.05 } : 'none'}
          whileTap={hasTwoFiles ? { scale: 0.9 } : 'none'}
          className={` ${
            hasTwoFiles ? 'instagram' : 'bg-secondary'
          } absolute -bottom-5  self-center rounded-full px-8 py-2 text-lg font-bold text-primary-foreground ${
            hasTwoFiles ? 'hover:cursor-pointer' : 'cursor-default'
          } `}
        >
          Analyze
        </motion.button>
      </div>
    </form>
  );
}
