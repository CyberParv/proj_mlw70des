'use client';

import * as React from 'react';

interface Props {
  title: string;
  value: number;
  suffix?: string;
}

export default function StatCounter({ title, value, suffix }: Props) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const nextValue = Math.floor(progress * value);
      setCount(nextValue);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [value]);

  return (
    <div className="space-y-2 rounded-lg border border-white/10 bg-[#0A0A0A] p-6 text-center text-white">
      <div className="text-3xl font-bold text-red-500">
        {count}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-wide text-white/70">{title}</div>
    </div>
  );
}
