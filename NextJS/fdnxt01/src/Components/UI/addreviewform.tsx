'use client';

import { useState } from 'react';
import { Star, User, MapPin } from 'lucide-react';

interface AddReviewFormProps {
    spotId: number;
    onReviewAdded?: () => void;
}

export default function AddReviewForm({ spotId, onReviewAdded }: AddReviewFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [hoveredRating, setHoveredRating] = useState(0);
    
    const [formData, setFormData] = useState({
        rating: 0,
        text: '',
        name: '',
        location: ''
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleRatingClick = (rating: number) => {
        setFormData({
            ...formData,
            rating
        });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSuccess(false);
        
        if (formData.rating === 0) {
            setError('Please select a rating');
            setIsSubmitting(false);
            return;
        }
        
        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    spot_id: spotId,
                    ...formData
                }),
            });
            
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to add review');
            }
            
            // Reset form
            setFormData({
                rating: 0,
                text: '',
                name: '',
                location: ''
            });
            setSuccess(true);
            
            // Reload the page to show new review
            if (onReviewAdded) {
                onReviewAdded();
            } else {
                window.location.reload();
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6 bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Write a Review
            </h3>
            
            {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    {error}
                </div>
            )}
            
            {success && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    Review submitted successfully!
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Rating */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        Rating *
                    </label>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => handleRatingClick(star)}
                                onMouseEnter={() => setHoveredRating(star)}
                                onMouseLeave={() => setHoveredRating(0)}
                                className="transition-transform hover:scale-110"
                            >
                                <Star
                                    className={`w-8 h-8 ${
                                        star <= (hoveredRating || formData.rating)
                                            ? 'fill-orange-500 text-orange-500'
                                            : 'text-gray-300'
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Review Text */}
                <div>
                    <label htmlFor="text" className="block text-gray-700 font-medium mb-2">
                        Your Review *
                    </label>
                    <textarea
                        id="text"
                        name="text"
                        required
                        value={formData.text}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                        placeholder="Share your experience..."
                    />
                </div>
                
                {/* Name */}
                <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                        <User className="w-5 h-5 text-orange-500" />
                        Your Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="e.g. John D."
                    />
                </div>
                
                {/* Location */}
                <div>
                    <label htmlFor="location" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                        <MapPin className="w-5 h-5 text-orange-500" />
                        Your Location *
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="e.g. Amsterdam"
                    />
                </div>
                
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </button>
            </form>
        </div>
    );
}
