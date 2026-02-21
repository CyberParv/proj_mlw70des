'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface Props {
  title: string;
  subtitle: string;
  items: FooterColumn[];
}

export default function Footer({ title, subtitle, items }: Props) {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_2fr_1.2fr] lg:px-8">
        <div className="space-y-4">
          <div className="text-xl font-bold uppercase tracking-widest">{title}</div>
          <p className="text-sm text-white/70">{subtitle}</p>
          <div className="space-y-1 text-sm text-white/70">
            <div>420 Torque Avenue, Phoenix, AZ</div>
            <div>(602) 555-0199</div>
            <div>hello@detailingbros.com</div>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((column) => (
            <div key={column.title} className="space-y-3">
              <div className="text-sm font-semibold uppercase tracking-wide">{column.title}</div>
              <ul className="space-y-2 text-sm text-white/70">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="text-sm font-semibold uppercase tracking-wide">Newsletter</div>
          <p className="text-sm text-white/70">
            Get exclusive inventory drops and detailing specials from Detailing Bros.
          </p>
          <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Email address"
              className="bg-black text-white placeholder:text-white/60"
            />
            <Button className="bg-red-600 text-white hover:bg-red-500">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © 2024 Detailing Bros. Built for performance, crafted for detail.
      </div>
    </footer>
  );
}
