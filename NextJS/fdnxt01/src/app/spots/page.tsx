import { getAllSpots, searchSpots } from '@/lib/db';
import { seedDatabase } from '@/lib/seed';
import SpotCard from '@/Components/SpotCard';
import SearchBar from '@/Components/SearchBar';
import Link from 'next/link';

interface PageProps {
  searchParams: Promise<{ search?: string }>;
}

export default async function SpotsPage({ searchParams }: PageProps) {
  // Initialize database with seed data if needed
  seedDatabase();

  const params = await searchParams;
  const searchQuery = params.search;
  
  const spots = searchQuery ? searchSpots(searchQuery) : getAllSpots();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-4">
            Ontdek Streetfood Spots
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Vind de beste streetfood in jouw buurt
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-6 text-center">
            <p className="text-gray-700">
              Zoekresultaten voor: <span className="font-bold text-orange-600">&quot;{searchQuery}&quot;</span>
              {' '}({spots.length} {spots.length === 1 ? 'resultaat' : 'resultaten'})
            </p>
            <Link
              href="/spots"
              className="text-blue-500 hover:text-blue-700 underline text-sm mt-2 inline-block"
            >
              Toon alle spots
            </Link>
          </div>
        )}

        {/* Add Spot Button */}
        <div className="flex justify-center mb-8">
          <Link
            href="/add-spot"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            ➕ Voeg een spot toe
          </Link>
        </div>

        {/* Spots Grid */}
        {spots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spots.map((spot) => (
              <SpotCard key={spot.id} spot={spot} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500 mb-4">
              {searchQuery ? 'Geen spots gevonden voor je zoekopdracht' : 'Geen spots beschikbaar'}
            </p>
            <Link
              href="/add-spot"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Voeg de eerste spot toe!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
