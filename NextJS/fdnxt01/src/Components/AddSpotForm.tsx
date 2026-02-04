'use client';

import { createSpot } from '@/app/actions';
import { useState } from 'react';

export default function AddSpotForm() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    try {
      setError(null);
      setIsSubmitting(true);
      
      // Client-side validation
      const naam = formData.get('naam') as string;
      const tiktok_url = formData.get('tiktok_url') as string;
      const google_maps_url = formData.get('google_maps_url') as string;
      
      if (!naam?.trim()) {
        throw new Error('Naam is verplicht');
      }
      
      if (!tiktok_url?.trim() && !google_maps_url?.trim()) {
        throw new Error('Minimaal één URL (TikTok of Google Maps) is verplicht');
      }
      
      await createSpot(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er is een fout opgetreden');
      setIsSubmitting(false);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Naam */}
      <div>
        <label htmlFor="naam" className="block text-gray-700 font-semibold mb-2">
          Naam van de spot <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="naam"
          name="naam"
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
          placeholder="Bijv. De Frietkar"
        />
      </div>

      {/* Soort eten */}
      <div>
        <label htmlFor="soort_eten" className="block text-gray-700 font-semibold mb-2">
          Soort eten <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="soort_eten"
          name="soort_eten"
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
          placeholder="Bijv. burgers, sushi, vegan, bubble tea"
        />
      </div>

      {/* Locatie */}
      <div>
        <label htmlFor="locatie" className="block text-gray-700 font-semibold mb-2">
          Locatie <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="locatie"
          name="locatie"
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
          placeholder="Bijv. Amsterdam Centrum"
        />
      </div>

      {/* Omschrijving */}
      <div>
        <label htmlFor="omschrijving" className="block text-gray-700 font-semibold mb-2">
          Omschrijving <span className="text-red-500">*</span>
        </label>
        <textarea
          id="omschrijving"
          name="omschrijving"
          required
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all resize-none"
          placeholder="Vertel iets over deze streetfood spot..."
        />
      </div>

      {/* Afbeelding URL */}
      <div>
        <label htmlFor="afbeelding_url" className="block text-gray-700 font-semibold mb-2">
          Afbeelding URL <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          id="afbeelding_url"
          name="afbeelding_url"
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
          placeholder="https://example.com/image.jpg"
        />
        <p className="text-sm text-gray-500 mt-1">Plak een directe link naar een afbeelding</p>
      </div>

      {/* TikTok URL */}
      <div>
        <label htmlFor="tiktok_url" className="block text-gray-700 font-semibold mb-2">
          TikTok URL (optioneel)
        </label>
        <input
          type="url"
          id="tiktok_url"
          name="tiktok_url"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
          placeholder="https://www.tiktok.com/@username/video/1234567890"
        />
        <p className="text-sm text-gray-500 mt-1">Optioneel: Link naar een TikTok video</p>
      </div>

      {/* Google Maps URL */}
      <div>
        <label htmlFor="google_maps_url" className="block text-gray-700 font-semibold mb-2">
          Google Maps URL (optioneel)
        </label>
        <input
          type="url"
          id="google_maps_url"
          name="google_maps_url"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
          placeholder="https://maps.google.com/?q=..."
        />
        <p className="text-sm text-gray-500 mt-1">Optioneel: Link naar de locatie op Google Maps</p>
      </div>

      <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
        <p className="text-sm text-amber-800">
          <strong>Let op:</strong> Minimaal één van de twee (TikTok URL of Google Maps URL) is verplicht.
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:hover:scale-100"
        >
          {isSubmitting ? 'Bezig met opslaan...' : '✨ Spot toevoegen'}
        </button>
      </div>
    </form>
  );
}
