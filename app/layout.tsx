import './globals.css';
import type { ReactNode } from 'react';
import { Barlow } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-barlow',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={barlow.variable}>
      <body className="bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
