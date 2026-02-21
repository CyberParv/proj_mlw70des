'use client';

import { Button } from '@/components/ui/button';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <h1 className="text-3xl font-bold md:text-5xl">Something went wrong</h1>
      <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
        We hit a snag while loading this page. Please try again or return to the homepage.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button onClick={reset} className="rounded-md px-8 py-4 font-bold uppercase tracking-wide">
          Try Again
        </Button>
        <Button asChild variant="secondary" className="rounded-md px-8 py-4 font-bold uppercase tracking-wide">
          <a href="/">Go Home</a>
        </Button>
      </div>
    </div>
  );
}
