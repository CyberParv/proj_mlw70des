import Image from 'next/image';
import { Card } from '@/components/ui/card';
import HeroImage from '@/components/HeroImage';
import VehicleCard from '@/components/VehicleCard';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import StatCounter from '@/components/StatCounter';
import SearchFilters from '@/components/SearchFilters';
import CtaBanner from '@/components/CtaBanner';
import HoursTable from '@/components/HoursTable';
import { ClipboardCheck, Infinity, Percent, ThumbsUp } from 'lucide-react';

const vehicles = [
  {
    name: '2023 BMW M4 Competition',
    price: '$78,995',
    mileage: '8,200 mi',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    badge: 'Just Arrived',
  },
  {
    name: '2022 Mercedes-AMG C63',
    price: '$72,500',
    mileage: '12,400 mi',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    badge: 'Low Miles',
  },
  {
    name: '2023 Audi RS5 Sportback',
    price: '$81,900',
    mileage: '5,100 mi',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    badge: 'Premium',
  },
  {
    name: '2021 Porsche 911 Carrera',
    price: '$119,500',
    mileage: '18,600 mi',
    transmission: 'PDK',
    fuel: 'Gasoline',
    badge: 'Certified',
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
  {
    name: 'Paint Protection Film',
    price: 'From $1,499',
    duration: '2-3 days',
    description: 'XPEL Ultimate Plus film, full front coverage, self-healing technology',
    icon: 'Layers',
  },
];

const testimonials = [
  {
    name: 'Marcus Thompson',
    role: '2023 BMW M3 Owner',
    quote:
      "The Bros found me the exact spec I wanted and threw in a full ceramic coating. Best car buying experience I've ever had.",
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Repeat Customer',
    quote:
      "I've bought 3 cars from Detailing Bros now. Their detailing work is unmatched — my 5-year-old Lexus still looks brand new.",
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    role: '2022 Porsche Cayenne Owner',
    quote:
      'No haggling, no games. They gave me a fair trade-in value and the financing was seamless. Highly recommend.',
    rating: 5,
  },
];

const filters = [
  { name: 'Make', options: ['All Makes', 'BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Lexus', 'Tesla'] },
  { name: 'Price Range', options: ['Any Price', 'Under $30K', '$30K - $50K', '$50K - $75K', '$75K - $100K', '$100K+'] },
  { name: 'Year', options: ['Any Year', '2024', '2023', '2022', '2021', '2020 & Older'] },
  { name: 'Body Style', options: ['All Styles', 'Sedan', 'SUV', 'Coupe', 'Truck', 'Convertible'] },
];

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <section className="relative min-h-screen bg-black text-white">
        <HeroImage
          title="Drive Your Dream"
          subtitle="Premium pre-owned vehicles and professional detailing services. The Bros have you covered from purchase to perfection."
          imageSrc="/images/hero.jpg"
          primaryCtaLabel="View Inventory"
          primaryCtaHref="#inventory"
          secondaryCtaLabel="Book Detailing"
          secondaryCtaHref="/contact"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-wrap items-center gap-6 px-6 pb-12 md:gap-8">
          <StatCounter value="500+" label="Vehicles Sold" />
          <StatCounter value="15+" label="Years Experience" />
          <StatCounter value="4.9" label="Google Rating" />
        </div>
      </section>

      <section id="inventory" className="bg-white py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-4">
            <h2 className="text-3xl font-bold md:text-5xl">Featured Inventory</h2>
            <p className="text-base text-muted-foreground md:text-lg">
              Hand-picked premium vehicles ready for the road
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.name} {...vehicle} imageSrc="/images/gallery.jpg" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white md:text-5xl">Find Your Perfect Ride</h2>
            <p className="text-base text-muted-foreground md:text-lg">
              Browse our complete inventory with advanced filters
            </p>
          </div>
          <SearchFilters
            title="Inventory Filters"
            subtitle="47 vehicles in stock"
            items={filters}
            ctaLabel="Search Inventory"
          />
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-4">
            <h2 className="text-3xl font-bold md:text-5xl">Professional Detailing</h2>
            <p className="text-base text-muted-foreground md:text-lg">
              From basic wash to full ceramic coating — we treat every car like it&apos;s our own
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 text-white">
          <div className="mb-12">
            <h2 className="text-3xl font-bold md:text-5xl">The Detailing Bros Difference</h2>
            <p className="text-base text-muted-foreground md:text-lg">
              Why thousands of drivers trust us with their vehicles
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="rounded-lg border border-border bg-card p-6">
              <ThumbsUp className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">No Pressure Sales</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;re car enthusiasts first. Browse at your pace, ask questions, and make informed decisions.
              </p>
            </Card>
            <Card className="rounded-lg border border-border bg-card p-6">
              <ClipboardCheck className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">150-Point Inspection</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every vehicle passes our rigorous inspection before hitting the lot. No surprises, guaranteed.
              </p>
            </Card>
            <Card className="rounded-lg border border-border bg-card p-6">
              <Percent className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Competitive Financing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Rates starting at 4.9% APR. We work with 15+ lenders to get you the best deal possible.
              </p>
            </Card>
            <Card className="rounded-lg border border-border bg-card p-6">
              <Infinity className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Free Lifetime Detailing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Buy from us and get complimentary express details for life. Your car stays showroom fresh.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <CtaBanner
            title="Get Pre-Approved in Minutes"
            subtitle="Quick online application with no impact to your credit score. Know your budget before you shop."
            primaryCtaLabel="Apply for Financing"
            primaryCtaHref="/contact"
            secondaryCtaLabel="Calculate Payment"
            secondaryCtaHref="#"
            items={['Rates from 4.9% APR', 'Terms up to 84 months', 'All credit welcome']}
            imageSrc="/images/hero.jpg"
          />
        </div>
      </section>

      <section className="bg-black py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 text-white">
          <div className="mb-12">
            <h2 className="text-3xl font-bold md:text-5xl">What Our Customers Say</h2>
            <p className="text-base text-muted-foreground md:text-lg">Real reviews from real drivers</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} imageSrc="/images/team.jpg" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-bold md:text-5xl">Visit the Showroom</h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                Come see our inventory in person or schedule your detailing appointment
              </p>
              <div className="mt-8 grid gap-4 text-sm">
                <p className="font-semibold">4521 Motor City Drive, Austin, TX 78745</p>
                <p>(512) 555-BROS</p>
                <p>hello@detailingbros.com</p>
              </div>
              <div className="mt-8">
                <HoursTable
                  items={[
                    { days: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
                    { days: 'Saturday', time: '10:00 AM - 6:00 PM' },
                    { days: 'Sunday', time: '12:00 PM - 5:00 PM' },
                  ]}
                />
              </div>
            </div>
            <Card className="relative overflow-hidden rounded-lg border border-border">
              <Image src="/images/about.jpg" alt="Detailing Bros showroom" fill className="object-cover" />
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
