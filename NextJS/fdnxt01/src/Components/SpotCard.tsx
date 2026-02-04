'use client';

import { Spot } from '@/lib/db';
import { extractTikTokVideoId } from '@/lib/utils';
import Link from 'next/link';

interface SpotCardProps {
  spot: Spot;
}

export default function SpotCard({ spot }: SpotCardProps) {
  const videoId = extractTikTokVideoId(spot.tiktok_url);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={spot.afbeelding_url}
          alt={spot.naam}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
          {spot.soort_eten}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-gray-800">{spot.naam}</h3>
        <p className="text-gray-600 flex items-center gap-2">
          <span>📍</span>
          {spot.locatie}
        </p>
        <p className="text-gray-700 text-sm line-clamp-2">{spot.omschrijving}</p>

        {/* Media Preview */}
        <div className="pt-3">
          {videoId ? (
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <iframe
                src={`https://www.tiktok.com/embed/v2/${videoId}`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                title={`TikTok video voor ${spot.naam}`}
              />
            </div>
          ) : spot.google_maps_url ? (
            <a
              href={spot.google_maps_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:text-blue-700 underline text-sm transition-colors"
            >
              🗺️ Bekijk op Google Maps
            </a>
          ) : (
            <p className="text-sm text-gray-500 italic">Geen media beschikbaar</p>
          )}
        </div>

        {/* Button */}
        <Link
          href={`/spots/${spot.id}`}
          className="block w-full mt-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-lg text-center transition-all duration-200 transform hover:scale-105 active:scale-95"
          aria-label={`Bekijk meer informatie over ${spot.naam}`}
        >
          Meer info
        </Link>
      </div>
    </div>
  );
}
