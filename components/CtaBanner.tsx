import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Props {
  title: string;
  subtitle: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  imageSrc: string;
}

export default function CtaBanner({
  title,
  subtitle,
  items,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  imageSrc,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-lg border border-white/10 bg-black text-white">
      <Image
        src={imageSrc}
        alt={title}
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative z-10 space-y-6 px-6 py-12 md:px-10 md:py-16">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <Badge key={item} className="bg-white/10 text-white">
                {item}
              </Badge>
            ))}
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="max-w-2xl text-sm text-white/70 md:text-base">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-red-600 text-white hover:bg-red-500">
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
            <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
