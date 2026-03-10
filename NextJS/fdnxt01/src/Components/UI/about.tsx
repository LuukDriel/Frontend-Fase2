import { Target, Users, Zap, Rocket, Sparkles, Star, Search, Heart, TrendingUp } from 'lucide-react';

export default function About() {
    return (
        <div className="about-page min-h-screen w-full bg-linear-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse [animation-delay:2s]"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse [animation-delay:4s]"></div>
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        About FoodSpotter
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                        Connecting food lovers with authentic street food experiences, one vendor at a time.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="max-w-5xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-8">
                            We believe that the best food experiences often come from local street food vendors who bring authentic flavors and cultural traditions to their communities. Our mission is to make it easier for food enthusiasts to discover these hidden gems while supporting local entrepreneurs.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <div className="text-center space-y-3">
                                <div className="flex justify-center mb-3">
                                    <Target className="w-16 h-16 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Discover</h3>
                                <p className="text-gray-600">Find authentic local food vendors in your area with ease</p>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="flex justify-center mb-3">
                                    <Users className="w-16 h-16 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Connect</h3>
                                <p className="text-gray-600">Bridge the gap between food lovers and local vendors</p>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="flex justify-center mb-3">
                                    <Zap className="w-16 h-16 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Support</h3>
                                <p className="text-gray-600">Help local businesses thrive in their communities</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Story Section */}
                <div className="max-w-5xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Our Story
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                FoodSpotter was born from a simple idea: great food shouldn't be hard to find. We started as a small team of food enthusiasts who were frustrated by the difficulty of discovering amazing street food vendors in our own neighborhoods.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Today, we've grown into a thriving platform that connects thousands of food lovers with local vendors across multiple cities. Our community continues to grow as we help more people discover the incredible flavors hiding in plain sight.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <Rocket className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">2024</h3>
                                        <p className="text-gray-600">Founded with a vision to revolutionize street food discovery</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">500+ Vendors</h3>
                                        <p className="text-gray-600">Local food businesses now part of our community</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <Star className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">10K+ Reviews</h3>
                                        <p className="text-gray-600">Helping others find their next favorite meal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="max-w-5xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                        Our Values
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                            <div className="mb-4">
                                <Sparkles className="w-10 h-10 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Authenticity</h3>
                            <p className="text-gray-600">We celebrate genuine culinary traditions and real food experiences</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                            <div className="mb-4">
                                <Users className="w-10 h-10 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Community</h3>
                            <p className="text-gray-600">Building connections between vendors and food lovers</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                            <div className="mb-4">
                                <Search className="w-10 h-10 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Discovery</h3>
                            <p className="text-gray-600">Making it easy to find hidden culinary gems</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                            <div className="mb-4">
                                <Heart className="w-10 h-10 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Passion</h3>
                            <p className="text-gray-600">Fueled by our love for great food and local culture</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-900">
                    <div className="bg-linear-to-r from-orange-500 to-amber-500 rounded-2xl shadow-2xl p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Explore?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Join thousands of food lovers discovering amazing street food in their neighborhoods
                        </p>
                        <a
                            href="/pages/spots"
                            className="inline-block px-8 py-4 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200"
                        >
                            Browse Food Spots
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}