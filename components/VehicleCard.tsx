import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Gauge, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpecItem {
  label: string;
  value: string;
}

interface Props {
  title: string;
  price: string;
  subtitle: string;
  imageSrc: string;
  items: SpecItem[];
  ctaLabel: string;
  ctaHref: string;
}

export default function VehicleCard({ title, price, subtitle, imageSrc, items, ctaLabel, ctaHref }: Props) {
  return (
    <Card className={cn('group overflow-hidden border-white/10 bg-[#0A0A0A] text-white')}>
      <div className="relative">
        <Image
          src={imageSrc}
          alt={title}
          width={1600}
          height={900}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="text-xs uppercase tracking-wide text-white/70">{subtitle}</div>
          <div className="text-lg font-bold">{title}</div>
        </div>
        <div className="absolute bottom-4 right-4 text-lg font-semibold text-red-500">{price}</div>
      </div>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm text-white/70">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              {item.label === 'Mileage' ? (
                <Gauge className="h-4 w-4 text-red-500" />
              ) : (
                <Settings className="h-4 w-4 text-red-500" />
              )}
              <div>
                <div className="text-xs uppercase text-white/50">{item.label}</div>
                <div className="text-sm font-semibold text-white">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
        <Button
          asChild
          className="w-full bg-white text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      </CardContent>
    </Card>
  );
}
