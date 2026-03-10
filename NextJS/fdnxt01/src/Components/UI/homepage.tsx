import Link from 'next/link';
import { MapPin, Store, UtensilsCrossed, Smartphone, Search, Map, Smile, Star } from 'lucide-react';
import ReviewCard from './ReviewCard';

// This data can later be fetched from your database
const reviews = [
  {
    rating: 5,
    text: "This app helped me find the most amazing taco truck! The real-time location feature is a game changer.",
    name: "Sarah K.",
    location: "Amsterdam"
  },
  {
    rating: 5,
    text: "I love discovering new street food spots every weekend. This platform makes it so easy!",
    name: "Michael R.",
    location: "Rotterdam"
  },
  {
    rating: 5,
    text: "Best way to support local food vendors. The reviews are always spot on!",
    name: "Emma L.",
    location: "Utrecht"
  }
];

export default function Homepage() {
  return (
    <div className="homepage min-h-screen w-full bg-linear-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse [animation-delay:2s]"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse [animation-delay:4s]"></div>
      </div>

      {/* Background Image */}
      <div className="hidden lg:block absolute right-0 top-0 w-2/5 xl:w-96 h-screen">
        <div className="relative w-full h-full rounded-tl-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl">
          <img 
            src="/foodcar.jpg" 
            alt="Delicious Street Food" 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-orange-50/20 to-orange-50/60"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl lg:ml-auto lg:mr-auto lg:pr-32 space-y-10">

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-left leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="bg-linear-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Find Amazing
            </span>
            <br />
            <span className="text-gray-800">Street Food</span>
            <br />
            <span className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Near You
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed text-left animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Connect with local food vendors, explore authentic flavors, and discover hidden gems in your neighborhood.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="flex-1 flex items-center gap-3 px-4 py-3">
              <MapPin className="text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Enter your location or cuisine type..."
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              />
            </div>
            <Link 
              href="/pages/spots"
              className="px-8 py-3 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-center"
            >
              Search Now
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-orange-100">
              <Store className="w-5 h-5 text-orange-500" />
              <span>500+ Local Vendors</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-orange-100">
              <UtensilsCrossed className="w-5 h-5 text-orange-500" />
              <span>Authentic Cuisines</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-orange-100">
              <Smartphone className="w-5 h-5 text-orange-500" />
              <span>Live Tracking</span>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="flex flex-wrap gap-4 items-center pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <Link 
              href="/pages/spots"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Browse All Spots
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center space-y-2 p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200">
              <div className="text-3xl md:text-4xl font-bold text-orange-600">500+</div>
              <div className="text-sm md:text-base text-gray-600">Food Vendors</div>
            </div>
            <div className="text-center space-y-2 p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200">
              <div className="text-3xl md:text-4xl font-bold text-orange-600">50+</div>
              <div className="text-sm md:text-base text-gray-600">Cities</div>
            </div>
            <div className="text-center space-y-2 p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200">
              <div className="text-3xl md:text-4xl font-bold text-orange-600">10K+</div>
              <div className="text-sm md:text-base text-gray-600">Happy Users</div>
            </div>
            <div className="text-center space-y-2 p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200">
              <div className="text-3xl md:text-4xl font-bold text-orange-600">4.8★</div>
              <div className="text-sm md:text-base text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 lg:py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Finding your next favorite street food spot is easy with Streetfoodspotter
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 mx-auto bg-linear-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md">
                <Search className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">1. Search</h3>
              <p className="text-gray-600">
                Enter your location or browse nearby street food vendors
              </p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 mx-auto bg-linear-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md">
                <Map className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">2. Discover</h3>
              <p className="text-gray-600">
                View detailed info, menus, reviews, and real-time locations
              </p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 mx-auto bg-linear-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md">
                <Smile className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">3. Enjoy</h3>
              <p className="text-gray-600">
                Visit your favorite spot and enjoy delicious street food
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories Section */}
      <div className="bg-white py-16 lg:py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            Popular Categories
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore street food by your favorite cuisine type
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Link href="/pages/spots" className="group">
              <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer border-2 border-transparent group-hover:border-orange-300">
                <div className="text-5xl md:text-6xl mb-3">🍕</div>
                <h3 className="font-semibold text-gray-800 text-lg">Pizza</h3>
                <p className="text-sm text-gray-600 mt-1">120+ spots</p>
              </div>
            </Link>

            <Link href="/pages/spots" className="group">
              <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer border-2 border-transparent group-hover:border-orange-300">
                <div className="text-5xl md:text-6xl mb-3">🌮</div>
                <h3 className="font-semibold text-gray-800 text-lg">Tacos</h3>
                <p className="text-sm text-gray-600 mt-1">85+ spots</p>
              </div>
            </Link>

            <Link href="/pages/spots" className="group">
              <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer border-2 border-transparent group-hover:border-orange-300">
                <div className="text-5xl md:text-6xl mb-3">🍔</div>
                <h3 className="font-semibold text-gray-800 text-lg">Burgers</h3>
                <p className="text-sm text-gray-600 mt-1">150+ spots</p>
              </div>
            </Link>

            <Link href="/pages/spots" className="group">
              <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer border-2 border-transparent group-hover:border-orange-300">
                <div className="text-5xl md:text-6xl mb-3">🍜</div>
                <h3 className="font-semibold text-gray-800 text-lg">Asian</h3>
                <p className="text-sm text-gray-600 mt-1">95+ spots</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Spots Section */}
      <div className="py-16 lg:py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            Featured Spots
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Check out some of the top-rated street food vendors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Spot Card 1 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/foodcar.jpg" 
                  alt="Tasty Tacos Food Truck" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold text-orange-600 shadow-md flex items-center gap-1">
                  <Star className="w-4 h-4 fill-orange-500 text-orange-500" /> 4.9
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tasty Tacos</h3>
                <p className="text-gray-600 text-sm mb-3">Authentic Mexican street food with a modern twist</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Amsterdam Center</span>
                </div>
                <Link 
                  href="/pages/spots"
                  className="block w-full text-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Spot Card 2 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/foodcar.jpg" 
                  alt="Sizzling Skewers Stand" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold text-orange-600 shadow-md flex items-center gap-1">
                  <Star className="w-4 h-4 fill-orange-500 text-orange-500" /> 4.8
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sizzling Skewers</h3>
                <p className="text-gray-600 text-sm mb-3">Grilled to perfection, our skewers are a must-try!</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Rotterdam Market</span>
                </div>
                <Link 
                  href="/pages/spots"
                  className="block w-full text-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Spot Card 3 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/foodcar.jpg" 
                  alt="Sweet Treats Cart" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold text-orange-600 shadow-md flex items-center gap-1">
                  <Star className="w-4 h-4 fill-orange-500 text-orange-500" /> 4.7
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sweet Treats</h3>
                <p className="text-gray-600 text-sm mb-3">Indulge in delicious desserts and sweet snacks</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Utrecht Square</span>
                </div>
                <Link 
                  href="/pages/spots"
                  className="block w-full text-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/pages/spots"
              className="inline-block px-8 py-3 bg-white border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Spots →
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16 lg:py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of happy street food lovers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((review, index) => (
              <ReviewCard 
                key={index}
                rating={review.rating}
                text={review.text}
                name={review.name}
                location={review.location}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter/CTA Section */}
      <div className="py-16 lg:py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-linear-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Street Food Adventure?
            </h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Join our community and never miss out on the best street food in your area
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/pages/spots"
                className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Explore Spots Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}