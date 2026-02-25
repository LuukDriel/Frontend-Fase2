export default function Spots() {
  return (
    <div className="spots-page min-h-screen w-full bg-linear-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent text-left leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
          Discover Street Food Spots Near You
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed text-left font-medium mt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Explore a curated list of the best street food vendors in your area, complete with reviews, photos, and real-time location updates.
        </p>
        {/* Placeholder for spots list */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/foodcar.jpg" alt="Food Spot" className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Tasty Tacos</h2>
                    <p className="text-gray-600 text-sm mb-4">Authentic Mexican street food with a modern twist.</p>
                    <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-200">
                        View Details
                    </button>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/foodcar.jpg" alt="Food Spot" className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Sizzling Skewers</h2>
                    <p className="text-gray-600 text-sm mb-4">Grilled to perfection, our skewers are a must-try!</p>
                    <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-200">
                        View Details
                    </button>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/foodcar.jpg" alt="Food Spot" className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Sweet Treats</h2>
                    <p className="text-gray-600 text-sm mb-4">Indulge in our delicious desserts and sweet snacks.</p>
                    <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-200">
                        View Details
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}