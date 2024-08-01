import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const framerMotionConfig = {
  type: 'spring',
  mass: 5,
  stiffness: 500,
  damping: 50,
  restDelta: 0.0001
};

export function formatFileSize(bytes?: number) {
  if (!bytes) {
    return '0 Bytes';
  }
  bytes = Number(bytes);
  if (bytes === 0) {
    return '0 Bytes';
  }
  const k = 1024;
  const dm = 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({
    behavior: 'smooth'
  });
};

// Helper function to convert timestamp to date string
export function formatTimestampToDate(timestamp: number): string {
  const date = new Date(timestamp * 1000); // Assuming timestamp is in seconds
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
