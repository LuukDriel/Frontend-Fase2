'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SpotCard from '../SpotCard';
import { SpotWithExtras } from '@/types/spot';
import { Search, Plus } from 'lucide-react';

interface SpotsProps {
  spots: SpotWithExtras[];
  initialSearch?: string;
}

export default function Spots({ spots, initialSearch = '' }: SpotsProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/pages/spots?search=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/pages/spots');
    }
  };
  
  return (
    <div className="spots-page min-h-screen w-full bg-linear-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent text-left leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Discover Street Food Spots Near You
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed text-left font-medium mt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Explore a curated list of the best street food vendors in your area, complete with reviews, photos, and real-time location updates.
          </p>
        </div>
        
        {/* Search Bar with Add Button */}
        <div className="mb-8 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or location (e.g. 'Amsterdam' or 'Falafel')"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    router.push('/pages/spots');
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              )}
            </div>
          </form>
          
          <Link 
            href="/pages/spots/add"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
          >
            <Plus className="w-5 h-5" />
            Add Spot
          </Link>
        </div>
        
        {/* Results Count */}
        {initialSearch && (
          <p className="text-gray-600 mb-4">
            {spots.length} {spots.length === 1 ? 'result' : 'results'} found for "{initialSearch}"
          </p>
        )}
        
        {/* Spots Grid */}
        {spots.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {spots.map((spot) => (
              <SpotCard 
                key={spot.id}
                spot={spot}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No spots found. Try a different search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
