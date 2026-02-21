import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <h1 className="text-4xl font-bold md:text-6xl">404</h1>
      <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
        The page you&apos;re looking for isn&apos;t in the garage. Let&apos;s get you back to the showroom.
      </p>
      <Button asChild className="mt-8 rounded-md px-8 py-4 font-bold uppercase tracking-wide">
        <a href="/">Return Home</a>
      </Button>
    </div>
  );
}
