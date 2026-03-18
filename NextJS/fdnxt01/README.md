# Spots & Reviews App

A Next.js application for discovering and reviewing spots. Built with TypeScript, Tailwind CSS, and SQLite.

## Features

- **Browse Spots**: View a collection of spots with details and images
- **Spot Details**: See comprehensive information about each spot
- **Add Spots**: Contribute new spots to the collection
- **Reviews System**: Read and write reviews for spots
- **About & Contact Pages**: Learn more about the project and get in touch

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Database**: [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Runtime**: React 19

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── pages/             # Application pages
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   └── spots/        # Spots pages
│   │       ├── [spot]/   # Dynamic spot detail page
│   │       └── add/      # Add new spot page
│   └── api/              # API routes
│       ├── reviews/      # Reviews API
│       └── spots/        # Spots API
├── Components/           # React components
│   ├── UI/              # UI components
│   │   ├── homepage.tsx
│   │   ├── spots.tsx
│   │   ├── spotdetail.tsx
│   │   ├── addspotform.tsx
│   │   ├── addreviewform.tsx
│   │   ├── about.tsx
│   │   └── contact.tsx
│   ├── Layout.tsx       # Main layout component
│   ├── SpotCard.tsx     # Card component for spots
│   └── ReviewCard.tsx   # Card component for reviews
├── lib/                 # Utilities
│   └── db.ts           # Database configuration
└── types/              # TypeScript type definitions
    ├── spot.ts
    ├── spotdetail.ts
    └── review.ts
```

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fdnxt01
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

The app will auto-reload when you make changes to the code.

### Build

Create a production build:

```bash
npm run build
```

### Production

Run the production server:

```bash
npm run start
```

## API Routes

### Spots API
- `GET /api/spots` - Retrieve all spots
- `POST /api/spots` - Create a new spot

### Reviews API
- `GET /api/reviews` - Retrieve reviews
- `POST /api/reviews` - Create a new review

## Pages

- **Home** (`/`) - Welcome page with overview
- **Spots** (`/pages/spots`) - Browse all spots
- **Spot Detail** (`/pages/spots/[spot]`) - View individual spot details
- **Add Spot** (`/pages/spots/add`) - Add a new spot
- **About** (`/pages/about`) - Information about the project
- **Contact** (`/pages/contact`) - Contact page

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript guide
- [Tailwind CSS](https://tailwindcss.com/docs) - Tailwind CSS utility classes
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3/wiki/API) - SQLite API

## Deploy

Deploy your Next.js app to [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<repository-url>)

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
