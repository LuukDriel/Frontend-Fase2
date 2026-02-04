import AddSpotForm from '@/Components/AddSpotForm';
import Link from 'next/link';

export default function AddSpotPage() {
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

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-4">
            Voeg een Streetfood Spot toe
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Deel jouw favoriete streetfood plek met anderen!
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto">
          <AddSpotForm />
        </div>

        {/* Tips Section */}
        <div className="max-w-3xl mx-auto mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-3">💡 Tips voor een goede spot:</h3>
          <ul className="space-y-2 text-blue-800">
            <li>• Gebruik een duidelijke, herkenbare naam</li>
            <li>• Voeg een mooie foto toe die het eten goed laat zien</li>
            <li>• Beschrijf wat de spot speciaal maakt</li>
            <li>• Voeg media toe (TikTok video of Google Maps locatie)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
