'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/spots?search=${encodeURIComponent(query)}`);
    } else {
      router.push('/spots');
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Zoek op naam of locatie..."
          className="flex-1 px-6 py-4 text-lg rounded-full border-2 border-gray-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          🔍 Zoeken
        </button>
      </div>
    </form>
  );
}
