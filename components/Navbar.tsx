'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  title: string;
  items: NavItem[];
  ctaLabel: string;
  ctaHref: string;
}

export default function Navbar({ title, items, ctaLabel, ctaHref }: Props) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-black/90 backdrop-blur border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="text-lg font-bold uppercase tracking-widest text-white">
          {title}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide text-white/80 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="bg-red-600 text-white hover:bg-red-500">
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
