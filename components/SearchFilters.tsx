'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';

interface Props {
  makes: string[];
  prices: string[];
  years: string[];
  bodies: string[];
  ctaLabel: string;
  onSearch?: (filters: { make: string; price: string; year: string; body: string }) => void;
}

export default function SearchFilters({ makes, prices, years, bodies, ctaLabel, onSearch }: Props) {
  const [make, setMake] = React.useState(makes[0] || '');
  const [price, setPrice] = React.useState(prices[0] || '');
  const [year, setYear] = React.useState(years[0] || '');
  const [body, setBody] = React.useState(bodies[0] || '');

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ make, price, year, body });
    }
  };

  return (
    <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-6 text-white">
      <div className="grid gap-4 md:grid-cols-5">
        <Select value={make} onChange={(event) => setMake(event.target.value)}>
          {makes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select value={price} onChange={(event) => setPrice(event.target.value)}>
          {prices.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select value={year} onChange={(event) => setYear(event.target.value)}>
          {years.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select value={body} onChange={(event) => setBody(event.target.value)}>
          {bodies.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Button className="w-full bg-red-600 text-white hover:bg-red-500" onClick={handleSearch}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
