import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-orange-600 to-amber-500 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              🍔 StreetfoodSpotter
            </h3>
            <p className="text-orange-100 leading-relaxed">
              Ontdek en deel de beste streetfood spots in Nederland. Van authentieke taco&apos;s tot verse sushi, vind het allemaal hier!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-orange-100 hover:text-white transition-colors hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/spots" className="text-orange-100 hover:text-white transition-colors hover:underline">
                  Alle Spots
                </Link>
              </li>
              <li>
                <Link href="/add-spot" className="text-orange-100 hover:text-white transition-colors hover:underline">
                  Spot Toevoegen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-orange-100">
              <li className="flex items-center gap-2">
                📧 info@streetfoodspotter.nl
              </li>
              <li className="flex items-center gap-2">
                📱 Volg ons op social media
              </li>
              <li className="flex items-center gap-2">
                🌍 Nederland
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-400 mt-8 pt-6 text-center text-orange-100">
          <p>
            &copy; {currentYear} StreetfoodSpotter. Gemaakt met ❤️ voor streetfood liefhebbers.
          </p>
        </div>
      </div>
    </footer>
  );
}
