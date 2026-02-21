# Detailing Bros

> Premium Auto Detailing & Car Sales

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## About

Austin's trusted source for premium pre-owned vehicles and professional auto detailing. Browse our inventory, book detailing services, or get pre-approved for financing today.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- SEO optimized with meta tags
- Hero section with call-to-action
- Customer testimonials
- Contact information & location
- Pricing plans display

## Tech Stack

| Technology | Description |
|-----------|-------------|
| Next.js | React framework with App Router & SSR |
| React | UI component library |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first CSS framework |

## Pages

- **Home** (`/`) — hero, featured, search, services, features, cta-banner, testimonials, contact
- **Inventory** (`/inventory`) — hero, inventory
- **Detailing Services** (`/services`) — hero, pricing, feature-highlight
- **About** (`/about`) — hero, story, team
- **Contact** (`/contact`) — hero, contact-form, location

## Project Structure

```
├── .env.example
├── _no_backend.txt
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── inventory/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── services/
│       └── page.tsx
├── components.json
├── components/
│   ├── ContactForm.tsx
│   ├── CtaBanner.tsx
│   ├── Footer.tsx
│   ├── HeroImage.tsx
│   ├── HoursTable.tsx
│   ├── Navbar.tsx
│   ├── PricingCard.tsx
│   ├── SearchFilters.tsx
│   ├── ServiceCard.tsx
│   ├── StatCounter.tsx
│   ├── TeamMemberCard.tsx
│   ├── TestimonialCard.tsx
│   ├── VehicleCard.tsx
│   ├── blocks/
│   │   ├── ContactForm.tsx
│   │   ├── FooterMultiColumn.tsx
│   │   ├── HeroImage.tsx
│   │   └── NavbarSticky.tsx
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       └── textarea.tsx
├── error.txt
├── lib/
│   ├── types.ts
│   └── utils.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | ![#D62828](https://via.placeholder.com/15/D62828/000000?text=+) | `#D62828` |
| Secondary | ![#C0C0C0](https://via.placeholder.com/15/C0C0C0/000000?text=+) | `#C0C0C0` |
| Accent | ![#1A1A1A](https://via.placeholder.com/15/1A1A1A/000000?text=+) | `#1A1A1A` |
| Background | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) | `#FFFFFF` |

## Typography

- **Headings:** Barlow
- **Body:** Barlow

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/CyberParv/proj_mlw70des.git

# Navigate to the project
cd proj_mlw70des

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CyberParv/proj_mlw70des)

Alternatively, you can build for production:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/CyberParv">Codex Studio</a>
</p>
