import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface SocialLink {
  label: string;
  href: string;
  icon: 'facebook' | 'instagram' | 'youtube' | 'twitter';
}

interface ContactInfoItem {
  label: string;
  value: string;
  icon?: string;
}

interface FooterMultiColumnProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  contactInfo?: ContactInfoItem[];
  socialLinks?: SocialLink[];
  copyright?: string;
}

const socialIconMap = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
};

export default function FooterMultiColumn({
  brand,
  description,
  columns,
  contactInfo,
  socialLinks,
  copyright,
}: FooterMultiColumnProps) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold">{brand}</h3>
            <p className="mt-3 text-sm text-background/70">{description}</p>
            {socialLinks && socialLinks.length > 0 && (
              <div className="mt-6 flex items-center gap-4">
                {socialLinks.map(function(link) {
                  const Icon = socialIconMap[link.icon];
                  return (
                    <Link key={link.href} href={link.href} aria-label={link.label} className="text-background/70 transition-colors hover:text-background">
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          {columns.map(function(col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function(link) {
                    return (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-background">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          {contactInfo && contactInfo.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
              <ul className="mt-4 space-y-3">
                {contactInfo.map(function(info, index) {
                  return (
                    <li key={index} className="text-sm text-background/70">
                      <span className="mr-2">{info.icon}</span>
                      <span className="font-semibold text-background">{info.label}:</span> {info.value}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <Separator className="my-8 bg-background/20" />
        <p className="text-center text-sm text-background/50">
          {copyright || ('\u00a9 ' + new Date().getFullYear() + ' ' + brand + '. All rights reserved.')}
        </p>
      </div>
    </footer>
  );
}
