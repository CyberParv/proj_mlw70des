import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  subtitle: string;
  quote: string;
  rating: number;
  imageSrc?: string;
}

export default function TestimonialCard({ title, subtitle, quote, rating, imageSrc }: Props) {
  return (
    <Card className="border-white/10 bg-[#0A0A0A] text-white">
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              width={800}
              height={600}
              className="h-14 w-14 rounded-full object-cover"
            />
          ) : (
            <div className="h-14 w-14 rounded-full bg-white/10" />
          )}
          <div>
            <div className="text-base font-semibold">{title}</div>
            <div className="text-xs uppercase tracking-wide text-white/50">{subtitle}</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cn('h-4 w-4', index < rating ? 'fill-red-500 text-red-500' : 'text-white/30')}
            />
          ))}
        </div>
        <p className="text-sm text-white/70">“{quote}”</p>
      </CardContent>
    </Card>
  );
}
