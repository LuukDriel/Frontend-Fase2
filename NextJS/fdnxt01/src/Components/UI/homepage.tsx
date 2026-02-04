import Link from 'next/link';

export default function Homepage() {
  return (
    <div className="homepage min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background Image - Right Side with left corners rounded */}
      <div className="hidden lg:block absolute right-0 top-0 w-96 h-screen">
        <div className="relative w-full h-full rounded-tl-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl">
          <img 
            src="/foodcar.jpg" 
            alt="Delicious Street Food" 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-orange-50/30"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent text-left leading-tight">
            Ontdek de Beste Streetfood
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed text-left font-medium">
            Vind en deel de lekkerste streetfood spots in jouw buurt!
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:bg-orange-200 transition-all duration-200 cursor-default">
              🍔 Lokale Verkopers
            </span>
            <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:bg-amber-200 transition-all duration-200 cursor-default">
              🌮 Authentieke Smaken
            </span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:bg-orange-200 transition-all duration-200 cursor-default">
              📍 Real-time Locaties
            </span>
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/spots"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95 text-center"
            >
              🔍 Bekijk Spots
            </Link>
            <Link
              href="/add-spot"
              className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95 text-center"
            >
              ➕ Voeg Spot Toe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}