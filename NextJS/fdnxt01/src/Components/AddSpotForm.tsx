'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Store, MapPin, Utensils, FileText, Image, Video, Map } from 'lucide-react';

export default function AddSpotForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    
    const [formData, setFormData] = useState({
        naam: '',
        soort_eten: '',
        locatie: '',
        omschrijving: '',
        afbeelding_url: '/foodcar.jpg',
        tiktok_url: '',
        google_maps_url: ''
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        
        try {
            const response = await fetch('/api/spots', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to add spot');
            }
            
            const data = await response.json();
            
            // Redirect to the new spot's page
            router.push(`/pages/spots/${data.id}`);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
            setIsSubmitting(false);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-6">
                Voeg Nieuwe Spot Toe
            </h2>
            
            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    {error}
                </div>
            )}
            
            <div className="space-y-5">
                {/* Naam */}
                <div>
                    <label htmlFor="naam" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                        <Store className="w-5 h-5 text-orange-500" />
                        Naam *
                    </label>
                    <input
                        type="text"
                        id="naam"
                        name="naam"
                        required
                        value={formData.naam}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Bijv. De Frites Meester"
                    />
                </div>
                
                {/* Soort Eten */}
                <div>
                    <label htmlFor="soort_eten" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                        <Utensils className="w-5 h-5 text-orange-500" />
                        Soort Eten *
                    </label>
                    <input
                        type="text"
                        id="soort_eten"
                        name="soort_eten"
                        required
                        value={formData.soort_eten}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Bijv. Dutch Fries, Vietnamese, Turkish"
                    />
                </div>
                
                {/* Locatie */}
                <div>
                    <label htmlFor="locatie" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                        <MapPin className="w-5 h-5 text-orange-500" />
                        Locatie *
                    </label>
                    <input
                        type="text"
                        id="locatie"
                        name="locatie"
                        required
                        value={formData.locatie}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Bijv. Dam Square, Amsterdam"
                    />
                </div>
                
                {/* Omschrijving */}
                <div>
                    <label htmlFor="omschrijving" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                        <FileText className="w-5 h-5 text-orange-500" />
                        Omschrijving *
                    </label>
                    <textarea
                        id="omschrijving"
                        name="omschrijving"
                        required
                        value={formData.omschrijving}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                        placeholder="Beschrijf de spot en wat ze serveren..."
                    />
                </div>
                
                {/* Afbeelding URL */}
                <div>
                    <label htmlFor="afbeelding_url" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                        <Image className="w-5 h-5 text-orange-500" />
                        Afbeelding URL *
                    </label>
                    <input
                        type="text"
                        id="afbeelding_url"
                        name="afbeelding_url"
                        required
                        value={formData.afbeelding_url}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="/foodcar.jpg"
                    />
                </div>
                
                {/* TikTok URL (Optional) */}
                <div>
                    <label htmlFor="tiktok_url" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                        <Video className="w-5 h-5 text-orange-500" />
                        TikTok URL
                    </label>
                    <input
                        type="url"
                        id="tiktok_url"
                        name="tiktok_url"
                        value={formData.tiktok_url}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="https://tiktok.com/@spotname"
                    />
                </div>
                
                {/* Google Maps URL (Optional) */}
                <div>
                    <label htmlFor="google_maps_url" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                        <Map className="w-5 h-5 text-orange-500" />
                        Google Maps URL
                    </label>
                    <input
                        type="url"
                        id="google_maps_url"
                        name="google_maps_url"
                        value={formData.google_maps_url}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="https://maps.google.com"
                    />
                </div>
            </div>
            
            <div className="mt-8 flex gap-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Toevoegen...' : 'Spot Toevoegen'}
                </button>
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-full transition-all duration-200"
                >
                    Annuleren
                </button>
            </div>
        </form>
    );
}
