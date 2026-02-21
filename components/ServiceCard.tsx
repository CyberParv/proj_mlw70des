import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Props {
  title: string;
  price: string;
  subtitle: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
}

export default function ServiceCard({ title, price, subtitle, description, items, icon }: Props) {
  return (
    <Card className="border-white/10 bg-[#0A0A0A] text-white">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-red-500">
            {icon}
          </div>
          <Badge className="bg-white/10 text-white">{subtitle}</Badge>
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="text-2xl font-semibold text-red-500">{price}</div>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-white/70">
        <p>{description}</p>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
