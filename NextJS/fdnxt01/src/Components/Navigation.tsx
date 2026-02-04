'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🍔</span>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:to-amber-600 transition-all">
              StreetfoodSpotter
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/')
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              Home
            </Link>
            <Link
              href="/spots"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/spots')
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              Spots
            </Link>
            <Link
              href="/add-spot"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/add-spot')
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              ➕ Toevoegen
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
