import HeroImage from '@/components/HeroImage';
import VehicleCard from '@/components/VehicleCard';
import SearchFilters from '@/components/SearchFilters';

const filters = [
  { name: 'Make', options: ['All Makes', 'BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Lexus', 'Tesla'] },
  { name: 'Price Range', options: ['Any Price', 'Under $30K', '$30K - $50K', '$50K - $75K', '$75K - $100K', '$100K+'] },
  { name: 'Year', options: ['Any Year', '2024', '2023', '2022', '2021', '2020 & Older'] },
  { name: 'Body Style', options: ['All Styles', 'Sedan', 'SUV', 'Coupe', 'Truck', 'Convertible'] },
];

const inventory = [
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
  {
    name: '2022 Tesla Model S Plaid',
    price: '$89,990',
    mileage: '9,400 mi',
    transmission: 'Automatic',
    fuel: 'Electric',
    badge: 'Performance',
  },
  {
    name: '2021 Lexus GX 460',
    price: '$58,750',
    mileage: '21,500 mi',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    badge: 'Luxury',
  },
];

export default function InventoryPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-black text-white">
        <HeroImage
          title="Our Inventory"
          subtitle="47 premium vehicles ready for immediate delivery"
          imageSrc="/images/hero.jpg"
          primaryCtaLabel="Filter Results"
          primaryCtaHref="#filters"
        />
      </section>

      <section id="filters" className="bg-white py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold md:text-5xl">Filter & Sort</h2>
            <p className="text-base text-muted-foreground md:text-lg">
              Sort by newest, price, or mileage to find your perfect ride
            </p>
          </div>
          <SearchFilters title="Browse Inventory" subtitle="47 vehicles in stock" items={filters} ctaLabel="Search" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inventory.map((vehicle) => (
              <VehicleCard key={vehicle.name} {...vehicle} imageSrc="/images/gallery.jpg" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
