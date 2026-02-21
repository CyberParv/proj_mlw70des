import { cn } from '@/lib/utils';

interface HourItem {
  day: string;
  hours: string;
}

interface Props {
  items: HourItem[];
}

export default function HoursTable({ items }: Props) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-6 text-white">
      <div className="text-sm font-semibold uppercase tracking-wide text-white/70">Hours</div>
      <div className="mt-4 space-y-3 text-sm">
        {items.map((item, index) => (
          <div
            key={item.day}
            className={cn('flex items-center justify-between border-b border-white/10 pb-2', index === items.length - 1 && 'border-b-0 pb-0')}
          >
            <span className="text-white/70">{item.day}</span>
            <span className="font-semibold">{item.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
