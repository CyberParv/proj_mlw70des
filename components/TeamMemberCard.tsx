import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

export default function TeamMemberCard({ title, subtitle, description, imageSrc }: Props) {
  return (
    <Card className="border-white/10 bg-[#0A0A0A] text-white">
      <CardContent className="space-y-4">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={600}
          className="h-48 w-full rounded-md object-cover"
        />
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-xs uppercase tracking-wide text-white/50">{subtitle}</div>
        </div>
        <p className="text-sm text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
}
