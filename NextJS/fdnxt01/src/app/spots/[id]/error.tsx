'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-8xl mb-4">🍜</div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
          Fout bij laden spot
        </h1>
        <p className="text-xl text-gray-700">
          Deze spot kon niet worden geladen. Probeer het later opnieuw.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Probeer opnieuw
          </button>
          <a
            href="/spots"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-full transition-colors"
          >
            Alle spots bekijken
          </a>
        </div>
      </div>
    </div>
  );
}
