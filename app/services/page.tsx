import Image from 'next/image';
import HeroImage from '@/components/HeroImage';
import PricingCard from '@/components/PricingCard';
import ServiceCard from '@/components/ServiceCard';

const packages = [
  {
    name: 'Express',
    price: '$99',
    description: 'Quick refresh for busy schedules',
    features: ['Exterior hand wash', 'Interior vacuum', 'Dashboard wipe', 'Window cleaning', 'Tire shine'],
    popular: false,
  },
  {
    name: 'Full Detail',
    price: '$249',
    description: 'Complete interior and exterior restoration',
    features: [
      'Everything in Express',
      'Clay bar treatment',
      'One-step polish',
      'Carnauba wax',
      'Leather conditioning',
      'Engine bay cleaning',
    ],
    popular: true,
  },
  {
    name: 'Showroom',
    price: '$449',
    description: 'Concours-level perfection',
    features: [
      'Everything in Full Detail',
      'Two-step paint correction',
      '6-month sealant',
      'Headlight restoration',
      'Wheel coating',
      'Interior ceramic spray',
    ],
    popular: false,
  },
];

const services = [
  {
    name: 'Express Detail',
    price: '$99',
    duration: '1-2 hours',
    description: 'Exterior hand wash, interior vacuum, window cleaning, tire shine',
    icon: 'Sparkles',
  },
  {
    name: 'Full Detail',
    price: '$249',
    duration: '4-5 hours',
    description: 'Complete interior deep clean, exterior clay bar, polish, and wax protection',
    icon: 'Car',
  },
  {
    name: 'Ceramic Coating',
    price: '$799',
    duration: '1-2 days',
    description: 'Paint correction, 9H ceramic coating application, 5-year protection warranty',
    icon: 'Shield',
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-black text-white">
        <HeroImage
          title="Detailing Services"
          subtitle="Professional auto detailing by certified technicians. We bring out the best in every vehicle."
          imageSrc="/images/hero.jpg"
          primaryCtaLabel="Book Appointment"
          primaryCtaHref="/contact"
        />
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold md:text-5xl">Detailing Packages</h2>
            <p className="text-base text-muted-foreground md:text-lg">
              Choose the level of care your vehicle deserves
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} ctaLabel="Book Now" ctaHref="/contact" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 text-white">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold md:text-5xl">Ceramic Coating Specialists</h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                Long-term protection that keeps your paint flawless for years
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Our IDA-certified technicians apply industry-leading ceramic coatings in a controlled environment. Each
                coating comes with a warranty and maintenance plan.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-muted-foreground">
                <li>Hydrophobic water beading</li>
                <li>UV protection</li>
                <li>Chemical resistance</li>
                <li>Enhanced gloss</li>
                <li>Easier cleaning</li>
                <li>5-year warranty</li>
              </ul>
              <p className="mt-6 text-lg font-semibold">Starting at $799</p>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-border">
              <Image src="/images/about.jpg" alt="Ceramic coating detail" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold md:text-5xl">On-Demand Services</h2>
            <p className="text-base text-muted-foreground md:text-lg">
              Quick services available for walk-ins and appointments
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
