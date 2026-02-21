'use client';

import { Button } from '@/components/ui/button';

interface HeroImageProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  overlayOpacity?: string;
}

export default function HeroImage({
  imageSrc,
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  overlayOpacity = 'bg-gradient-to-b from-black/80 via-black/50 to-black/80',
}: HeroImageProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(' + imageSrc + ')' }} />
      <div className={'absolute inset-0 ' + overlayOpacity} />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 text-center text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/70">Precision Performance Collection</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-white/90">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg font-bold uppercase tracking-wide bg-white text-black hover:bg-white/90" asChild>
            <a href={primaryCtaHref}>{primaryCtaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-bold uppercase tracking-wide border-white text-white hover:bg-white/10" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
