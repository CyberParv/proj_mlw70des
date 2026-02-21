import Image from 'next/image';
import HeroImage from '@/components/HeroImage';
import ContactForm from '@/components/ContactForm';
import HoursTable from '@/components/HoursTable';
import { Card } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-black text-white">
        <HeroImage
          title="Get in Touch"
          subtitle="Questions about a vehicle? Ready to book detailing? We’re here to help."
          imageSrc="/images/hero.jpg"
        />
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold md:text-5xl">Send Us a Message</h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                Tell us what you need and a Detailing Bros specialist will respond within 24 hours.
              </p>
              <div className="mt-8">
                <ContactForm
                  title="Contact Form"
                  submitLabel="Send Message"
                  successMessage="Thanks! We’ll get back to you within 24 hours."
                />
              </div>
            </div>
            <div className="space-y-6">
              <Card className="rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold">Visit Us</h3>
                <p className="mt-2 text-sm text-muted-foreground">4521 Motor City Drive, Austin, TX 78745</p>
                <p className="mt-2 text-sm text-muted-foreground">(512) 555-BROS</p>
                <p className="mt-2 text-sm text-muted-foreground">hello@detailingbros.com</p>
                <div className="mt-6">
                  <HoursTable
                    items={[
                      { days: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
                      { days: 'Saturday', time: '10:00 AM - 6:00 PM' },
                      { days: 'Sunday', time: '12:00 PM - 5:00 PM' },
                    ]}
                  />
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Located off I-35 South, exit Slaughter Lane. We&apos;re in the Motor City complex next to Discount Tire.
                </p>
              </Card>
              <Card className="relative min-h-[220px] overflow-hidden rounded-lg border border-border">
                <Image src="/images/about.jpg" alt="Detailing Bros location" fill className="object-cover" />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
