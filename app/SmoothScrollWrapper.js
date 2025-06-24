'use client'; // ✅ Mark as a client component

import dynamic from 'next/dynamic';

// Dynamically import SmoothScroll (client-only)
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), {
  ssr: false,
});

export default function SmoothScrollWrapper({ children }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
