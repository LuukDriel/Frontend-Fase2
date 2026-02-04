export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Skeleton */}
        <div className="text-center mb-12 animate-pulse">
          <div className="h-12 bg-gray-300 rounded-lg max-w-md mx-auto mb-4"></div>
          <div className="h-6 bg-gray-200 rounded-lg max-w-lg mx-auto"></div>
        </div>

        {/* Search Bar Skeleton */}
        <div className="max-w-2xl mx-auto mb-8 animate-pulse">
          <div className="h-14 bg-gray-300 rounded-full"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-5 space-y-3">
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-10 bg-gray-300 rounded-lg mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
