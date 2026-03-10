import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navigation */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-2xl font-bold bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                                🍔 Streetfoodspotter
                            </span>
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                            >
                                Home
                            </Link>
                            <Link
                                href="/pages/spots"
                                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                            >
                                Spots
                            </Link>
                            <Link
                                href="/pages/about"
                                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/pages/contact"
                                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                            >
                                Contact
                            </Link>
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link
                                href="/pages/spots"
                                className="px-6 py-2 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                            >
                                Find Spots
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-gray-700 hover:text-orange-600">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white mt-auto">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Brand Column */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold bg-linear-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                                🍔 Streetfoodspotter
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Discover the best street food near you. From food trucks to market stalls.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold mb-4 text-orange-400">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pages/spots" className="text-gray-400 hover:text-orange-400 transition-colors">
                                        All Spots
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pages/about" className="text-gray-400 hover:text-orange-400 transition-colors">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pages/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Categories */}
                        <div>
                            <h4 className="font-semibold mb-4 text-orange-400">Categories</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="text-gray-400">🍕 Pizza</li>
                                <li className="text-gray-400">🌮 Tacos</li>
                                <li className="text-gray-400">🍔 Burgers</li>
                                <li className="text-gray-400">🍜 Asian</li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-semibold mb-4 text-orange-400">Contact</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>📧 info@streetfoodspotter.nl</li>
                                <li>📱 +31 6 12345678</li>
                                <li>📍 Amsterdam, Netherlands</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p>&copy; 2026 Streetfoodspotter. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/pages/privacy" className="hover:text-orange-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/pages/terms" className="hover:text-orange-400 transition-colors">
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
