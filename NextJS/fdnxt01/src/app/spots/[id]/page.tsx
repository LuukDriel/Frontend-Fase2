import { getSpotById } from '@/lib/db';
import { extractTikTokVideoId } from '@/lib/utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SpotDetailPage({ params }: PageProps) {
  const { id } = await params;
  const spot = getSpotById(parseInt(id));

  if (!spot) {
    notFound();
  }

  const videoId = extractTikTokVideoId(spot.tiktok_url);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/spots"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold mb-8 transition-colors"
        >
          ← Terug naar overzicht
        </Link>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Header Image */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            <img
              src={spot.afbeelding_url}
              alt={spot.naam}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{spot.naam}</h1>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-lg">
                <span className="bg-orange-500 px-3 sm:px-4 py-1 rounded-full font-medium">
                  {spot.soort_eten}
                </span>
                <span className="flex items-center gap-2">
                  📍 {spot.locatie}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Over deze spot</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{spot.omschrijving}</p>
            </div>

            {/* Media Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Media</h2>
              {videoId ? (
                <div className="max-w-md mx-auto">
                  <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-lg bg-gray-100">
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${videoId}`}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      title={`TikTok video voor ${spot.naam}`}
                    />
                  </div>
                </div>
              ) : spot.google_maps_url ? (
                <div className="text-center py-8">
                  <a
                    href={spot.google_maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    🗺️ Bekijk locatie op Google Maps
                  </a>
                </div>
              ) : (
                <p className="text-gray-500 italic text-center py-8">Geen media beschikbaar</p>
              )}
            </div>

            {/* Location Details */}
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Locatie details</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">📍 Locatie:</span>
                  {spot.locatie}
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">🍽️ Type eten:</span>
                  {spot.soort_eten}
                </p>
              </div>
              {spot.google_maps_url && (
                <a
                  href={spot.google_maps_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-500 hover:text-blue-700 underline font-medium"
                >
                  Open in Google Maps →
                </a>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/spots"
                className="flex-1 text-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors"
              >
                Terug naar overzicht
              </Link>
              <Link
                href="/add-spot"
                className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Voeg een nieuwe spot toe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
