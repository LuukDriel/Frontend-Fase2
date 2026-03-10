import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="contact-page min-h-screen w-full bg-linear-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse [animation-delay:2s]"></div>
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                        Have questions? We'd love to hear from you!
                    </p>
                </div>

                {/* Contact Form */}
                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    <form className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                                placeholder="Your name"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Subject Field */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                                placeholder="What is this about?"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none placeholder:text-gray-500"
                                placeholder="Your message..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-linear-to-r from-orange-600 to-amber-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-orange-700 hover:to-amber-600 transition duration-300 shadow-lg hover:shadow-xl"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Other ways to reach us</h3>
                        <div className="space-y-3 text-gray-600">
                            <p className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-orange-500" />
                                <span>info@streetfoodspotter.com</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-orange-500" />
                                <span>+31 6 1234 5678</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-orange-500" />
                                <span>Amsterdam, Netherlands</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
