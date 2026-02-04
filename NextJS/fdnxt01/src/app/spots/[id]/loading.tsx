export default function LoadingDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-48 mb-8"></div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="h-96 bg-gray-300"></div>
            
            <div className="p-8 space-y-8">
              <div className="space-y-3">
                <div className="h-8 bg-gray-300 rounded w-1/3"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded w-5/6"></div>
              </div>
              
              <div className="space-y-3">
                <div className="h-8 bg-gray-300 rounded w-1/4"></div>
                <div className="h-64 bg-gray-200 rounded-lg"></div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-1 h-12 bg-gray-300 rounded-lg"></div>
                <div className="flex-1 h-12 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
