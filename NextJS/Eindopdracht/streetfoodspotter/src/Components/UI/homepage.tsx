export default function Homepage() {
  return (
    <div className="homepage min-h-screen w-full bg-linear-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background Image - Right Side with left corners rounded */}
      <div className="absolute right-0 top-0 w-96 h-screen">
        <div className="relative w-full h-full rounded-tl-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl">
          <img 
            src="/foodcar.jpg" 
            alt="Delicious Street Food" 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-l from-transparent to-orange-50/30"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent text-left leading-tight">
            Welcome to Streetfoodspotter
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed text-left font-medium">
            Your go-to platform for discovering the best street food around you!
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:bg-orange-200 transition-all duration-200 cursor-default">
              🍔 Local Vendors
            </span>
            <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:bg-amber-200 transition-all duration-200 cursor-default">
              🌮 Authentic Flavors
            </span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:bg-orange-200 transition-all duration-200 cursor-default">
              📍 Real-time Location
            </span>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95">
              Discover Street Food Near You
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}