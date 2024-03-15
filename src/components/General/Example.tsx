'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimation, PanInfo } from 'framer-motion';

const initialItems = [0, 1, 2, 3, 4];
const height = 70;
const padding = 10;
const size = 150;

interface ItemProps {
  total: number;
  index: number;
  onDelete: (index: number) => void;
}

function Item({ total, index, onDelete }: ItemProps) {
  const scope = useRef<HTMLDivElement>(null);
  const animate = useAnimation();

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      animate.start({ x: '-100%' });
      setTimeout(() => onDelete(index), 200);
    } else {
      animate.start({ x: 0, opacity: 1 });
    }
  }

  return (
    <motion.div
      style={{
        width: 150,
        height: height,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: total - 1 === index ? 0 : 10,
        willChange: 'transform',
        cursor: 'grab'
      }}
      whileTap={{ cursor: 'grabbing' }}
      layout
      transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      drag='x'
      dragDirectionLock
      onDragEnd={handleDragEnd}
      ref={scope}
    >
      <motion.div
        style={{
          width: size,
          height: height,
          borderRadius: 20,
          backgroundColor: '#fff'
        }}
      />
    </motion.div>
  );
}

export default function Example() {
  const y = useMotionValue(0);

  const [items, setItems] = useState(initialItems);
  const constraints = useConstraints(items);
  const totalScroll = getHeight(items);
  const scrollContainer = 150;

  function onDelete(index: number) {
    const newItems = [...items];
    newItems.splice(index, 1);

    const newScrollHeight = getHeight(newItems);
    const bottomOffset = -y.get() + scrollContainer;
    const bottomWillBeVisible = newScrollHeight < bottomOffset;
    const isScrollHeightLarger = newScrollHeight >= scrollContainer;

    if (bottomWillBeVisible && isScrollHeightLarger) {
      y.set(-newScrollHeight + scrollContainer);
    }

    setItems(newItems);
  }

  return (
    <div
      className=' h-full w-full !bg-red-500'
      style={{
        width: size,
        height: size,
        borderRadius: 30,
        backgroundColor: 'transparent',
        overflow: 'hidden',
        position: 'relative',
        transform: 'translateZ(0)'
      }}
    >
      <motion.div
        style={{ y: y, height: totalScroll }}
        drag='y'
        dragDirectionLock
        dragConstraints={{ top: constraints.top, bottom: constraints.bottom }}
      >
        {items.map((value, index) => (
          <Item
            total={items.length}
            index={index}
            onDelete={onDelete}
            key={value}
          />
        ))}
      </motion.div>
    </div>
  );
}

function getHeight(items: number[]) {
  const totalHeight = items.length * height;
  const totalPadding = (items.length - 1) * padding;
  const totalScroll = totalHeight + totalPadding;
  return totalScroll;
}

function useConstraints(items: number[]) {
  const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    setConstraints({ top: size - getHeight(items), bottom: 0 });
  }, [items]);

  return constraints;
}
