import { Star, MapPin, Clock, Phone, Mail, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import ReviewCard from '../ReviewCard';
import { SpotDetailData } from '@/types/spotdetail';

interface SpotDetailProps {
    spot: SpotDetailData | null;
}

export default function SpotDetail({ spot }: SpotDetailProps) {
    
    if (!spot) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Spot Not Found</h1>
                    <p className="text-gray-600 mb-6">The spot you're looking for doesn't exist.</p>
                    <Link 
                        href="/pages/spots" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        Back to All Spots
                    </Link>
                </div>
            </div>
        );
    }
    


    return (
        <div className="spot-detail min-h-screen w-full bg-linear-to-br from-orange-50 via-white to-amber-50">
            {/* Back Button */}
            <div className="container mx-auto px-4 pt-6">
                <Link 
                    href="/pages/spots"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back to All Spots
                </Link>
            </div>

            {/* Hero Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="relative h-64 md:h-96">
                        <img 
                            src={spot.afbeelding_url} 
                            alt={spot.naam}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
                                    {spot.soort_eten}
                                </span>
                                {spot.priceRange && (
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
                                        {spot.priceRange}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{spot.naam}</h1>
                            <div className="flex items-center gap-4 text-white">
                                {spot.rating && (
                                    <div className="flex items-center gap-1">
                                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold">{spot.rating.toFixed(1)}</span>
                                        {spot.reviewCount && (
                                            <span className="text-white/80">({spot.reviewCount} reviews)</span>
                                        )}
                                    </div>
                                )}
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-5 h-5" />
                                    <span>{spot.locatie}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-10">
                        {/* Description */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
                            <p className="text-gray-600 leading-relaxed">{spot.omschrijving}</p>
                        </div>

                        {/* Menu */}
                        {spot.menu && spot.menu.length > 0 && (
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Menu</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                {spot.menu.map((item: any, index: number) => (
                                    <div key={index} className="bg-orange-50 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                            <span className="font-bold text-orange-600">{item.price}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        )}

                        {/* Info Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            {/* Hours */}
                            {spot.hours && Object.keys(spot.hours).length > 0 && (
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-orange-500" />
                                        Opening Hours
                                    </h2>
                                    <div className="space-y-2">
                                        {Object.entries(spot.hours).map(([day, hours]) => (
                                            <div key={day} className="flex justify-between text-sm">
                                                <span className="font-medium text-gray-700 capitalize">{day}</span>
                                                <span className="text-gray-600">{hours as string}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Contact */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Contact</h2>
                                <div className="space-y-4">
                                    {spot.phone && (
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-5 h-5 text-orange-500" />
                                            <a href={`tel:${spot.phone}`} className="text-gray-700 hover:text-orange-600 transition-colors">
                                                {spot.phone}
                                            </a>
                                        </div>
                                    )}
                                    {spot.email && (
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-5 h-5 text-orange-500" />
                                            <a href={`mailto:${spot.email}`} className="text-gray-700 hover:text-orange-600 transition-colors">
                                                {spot.email}
                                            </a>
                                        </div>
                                    )}
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                                        <span className="text-gray-700">{spot.locatie}</span>
                                    </div>
                                    {spot.google_maps_url && (
                                        <a 
                                            href={spot.google_maps_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                                        >
                                            View on Google Maps
                                        </a>
                                    )}
                                    {spot.tiktok_url && (
                                        <a 
                                            href={spot.tiktok_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
                                        >
                                            Follow on TikTok
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Reviews */}
                        {spot.reviews && spot.reviews.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {spot.reviews.map((review: any, index: number) => (
                                        <ReviewCard 
                                            key={index}
                                            rating={review.rating}
                                            text={review.text}
                                            name={review.name}
                                            location={review.location}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
