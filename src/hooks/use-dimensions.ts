import { MutableRefObject, useEffect, useRef, useState } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

export const useDimensions = (ref: MutableRefObject<HTMLElement | null>) => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight
        });
      }
    };

    // Initial measurement
    updateDimensions();

    // Attach resize listener to update dimensions
    window.addEventListener('resize', updateDimensions);

    // Cleanup function to remove the resize listener
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [ref]);

  return dimensions;
};
