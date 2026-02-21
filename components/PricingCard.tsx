import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  price: string;
  subtitle: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
}

export default function PricingCard({ title, price, subtitle, items, ctaLabel, ctaHref, popular }: Props) {
  return (
    <Card className={cn('border-white/10 bg-[#0A0A0A] text-white', popular && 'border-red-500/60')}>
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          {popular ? <Badge className="bg-red-600 text-white">Popular</Badge> : null}
        </div>
        <div className="text-3xl font-semibold text-red-500">{price}</div>
        <p className="text-sm text-white/70">{subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-6 text-sm text-white/70">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="w-full bg-white text-black hover:bg-white/90">
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      </CardContent>
    </Card>
  );
}
