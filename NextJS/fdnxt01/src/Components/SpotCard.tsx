import Link from 'next/link';
import { Star, MapPin } from 'lucide-react';
import { Spot, SpotWithExtras } from '@/types/spot';

/**
 * SpotCard Component
 * 
 * A reusable component for displaying food spot/vendor cards.
 * Works with database Spot interface.
 * 
 * Usage example:
 * <SpotCard 
 *   spot={spotFromDatabase}
 *   rating={4.9}
 * />
 */

export interface SpotCardProps {
    spot: Spot | SpotWithExtras;
    rating?: number;  // Optional - can be passed or from spot.rating
}

export default function SpotCard({ 
    spot,
    rating 
}: SpotCardProps) {
    const displayRating = rating || (spot as SpotWithExtras).rating || 0;
    const href = `/pages/spots/${spot.id}`;
    
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={spot.afbeelding_url} 
                    alt={spot.naam} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {displayRating > 0 && (
                    <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold text-orange-600 shadow-md flex items-center gap-1">
                        <Star className="w-4 h-4 fill-orange-500 text-orange-500" /> {displayRating.toFixed(1)}
                    </div>
                )}
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{spot.naam}</h3>
                <p className="text-gray-600 text-sm mb-3">{spot.omschrijving}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{spot.locatie}</span>
                </div>
                <Link 
                    href={href}
                    className="block w-full text-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}
