import Image from 'next/image';
import HeroImage from '@/components/HeroImage';
import TeamMemberCard from '@/components/TeamMemberCard';
import { Card } from '@/components/ui/card';

const team = [
  {
    name: 'Mike Reyes',
    role: 'Co-Founder & Sales Director',
    bio: "The car guy's car guy. Mike has been buying and selling vehicles for 20 years and can spot a lemon from a mile away.",
  },
  {
    name: 'Danny Reyes',
    role: 'Co-Founder & Detailing Director',
    bio: 'IDA-certified detailer with an obsessive eye for perfection. Danny personally trains every member of our detailing team.',
  },
  {
    name: 'Carlos Mendez',
    role: 'Finance Manager',
    bio: '15 years in automotive finance. Carlos works magic with lenders to get you the best rates possible.',
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-black text-white">
        <HeroImage
          title="Meet the Bros"
          subtitle="Two brothers, one passion: making every car look and drive its best."
          imageSrc="/images/hero.jpg"
        />
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold md:text-5xl">Our Story</h2>
              <div className="mt-6 flex flex-col gap-4 text-sm text-muted-foreground md:text-base">
                <p>
                  Detailing Bros started in 2009 when brothers Mike and Danny Reyes began detailing cars out of their
                  parents&apos; garage in South Austin. What started as a weekend side hustle quickly grew into a
                  full-time obsession.
                </p>
                <p>
                  By 2015, we opened our first proper shop. Customers kept asking if we could help them find quality used
                  cars, so we got our dealer license. Turns out, the same attention to detail that makes a car shine also
                  helps us spot the best vehicles on the market.
                </p>
                <p>
                  Today, we operate a 15,000 sq ft facility with a 12-car showroom and a state-of-the-art detailing bay.
                  We&apos;ve sold over 500 vehicles and detailed thousands more. But we&apos;re still the same two brothers who
                  geek out over a perfect paint correction.
                </p>
              </div>
            </div>
            <Card className="relative min-h-[320px] overflow-hidden rounded-lg border border-border">
              <Image src="/images/about.jpg" alt="Detailing Bros story" fill className="object-cover" />
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 text-white">
          <div className="mb-12">
            <h2 className="text-3xl font-bold md:text-5xl">The Team</h2>
            <p className="text-base text-muted-foreground md:text-lg">
              Experts who live and breathe premium automotive care
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamMemberCard key={member.name} {...member} imageSrc="/images/team.jpg" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
