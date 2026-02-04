'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors"
        aria-label="Open menu"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 bottom-0 w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
          >
            🏠 Home
          </Link>
          <Link
            href="/spots"
            onClick={() => setIsOpen(false)}
            className="px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
          >
            🗺️ Spots
          </Link>
          <Link
            href="/add-spot"
            onClick={() => setIsOpen(false)}
            className="px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 transition-all font-medium text-center"
          >
            ➕ Toevoegen
          </Link>
        </nav>
      </div>
    </>
  );
}
