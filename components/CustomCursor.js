'use client';
import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return <div className="cursor"></div>;
}
