# Wax On Wheels

Professional auto detailing and car audio installation website for Wax On Wheels, located in Ocean City, MD.

## About

Wax On Wheels is a business specializing in:
- **Auto Detailing** - Professional car cleaning and paint correction services
- **Car Audio Installation** - MECP certified audio system installation

The business is GTECHNIQ accredited and Detail King Craftsman certified with over 25 years of experience.

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui + Radix UI primitives
- **Forms**: React Hook Form + Zod validation

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
├── app/                  # Next.js app router pages
│   ├── about/           # About page
│   ├── audio/           # Car audio services page
│   ├── contact/         # Contact page
│   ├── services/        # Detailing services page
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── contact/         # Contact form components
│   ├── home/            # Home page sections
│   ├── ui/              # shadcn/ui components
│   ├── header.tsx       # Site header/navigation
│   └── footer.tsx       # Site footer
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
│   └── images/          # Hero images
└── styles/              # Global styles
```

## Contact

**Wax On Wheels**
Ocean City, MD
Phone: (410) 213-1154
