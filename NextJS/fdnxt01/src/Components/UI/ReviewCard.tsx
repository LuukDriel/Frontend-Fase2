import { Star } from 'lucide-react';

/** 
 * @param rating - Number of stars (1-5)
 * @param text - The review text/testimonial
 * @param name - Reviewer's name
 * @param location - Reviewer's location
 * 
 * Usage example:
 * <ReviewCard 
 *   rating={5}
 *   text="Great app!"
 *   name="John Doe"
 *   location="Amsterdam"
 * />
 */

export interface ReviewCardProps {
    rating: number;
    text: string;
    name: string;
    location: string;
}

export default function ReviewCard({ rating, text, name, location }: ReviewCardProps) {
    return (
        <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-200">
            <div className="flex items-center mb-4 gap-1">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
                "{text}"
            </p>
            <div className="font-semibold text-gray-800">{name}</div>
            <div className="text-sm text-gray-600">{location}</div>
        </div>
    );
}
