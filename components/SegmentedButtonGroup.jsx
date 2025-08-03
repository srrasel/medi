'use client';

import { ArrowRight } from 'lucide-react';

const buttons = [
  { label: 'Book Appointment', href: '/appointments' },
  { label: 'Find Doctor', href: '/all-consultants' },
  { label: 'Health Package', href: '/health-package' },
  { label: 'Department', href: '/department' },
];

export default function SegmentedButtonGroup() {
  return (
    <div className="flex overflow-hidden rounded-full shadow-md border border-[#c5dee5] divide-x divide-[#c5dee5] mx-auto max-w-[960px] w-full hidden md:flex">
      {buttons.map((btn, idx) => {
        const isFirst = idx === 0;
        const isLast = idx === buttons.length - 1;

        return (
          <a
            key={btn.label}
            href={btn.href}
            className={`
              flex items-center justify-between gap-2 px-6 py-4 w-1/4
              font-semibold text-[#003c5a] text-sm text-center
              ${isFirst ? 'rounded-l-full' : ''}
              ${isLast ? 'rounded-r-full' : ''}
              bg-[#e9f9fb] hover:bg-gradient-to-r hover:from-[#e9f9fb] hover:to-[#ffffff] transition-all
            `}
          >
            <span className="mx-auto">{btn.label}</span>
            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#003c5a]">
              <ArrowRight className="w-3.5 h-3.5 text-[#003c5a]" />
            </span>
          </a>
        );
      })}
    </div>
  );
}
