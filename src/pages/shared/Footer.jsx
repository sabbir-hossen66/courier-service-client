import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 mt-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">MyCompany</h2>
            <p className="mt-3 text-sm text-gray-400">
              We build modern web solutions that help businesses grow and
              succeed in the digital era.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="hover:text-[#98ED28] transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-[#98ED28] transition-colors duration-300">About</a></li>
              <li><a href="/services" className="hover:text-[#98ED28] transition-colors duration-300">Services</a></li>
              <li><a href="/contact" className="hover:text-[#98ED28] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/blog" className="hover:text-[#98ED28] transition-colors duration-300">Blog</a></li>
              <li><a href="/faq" className="hover:text-[#98ED28] transition-colors duration-300">FAQ</a></li>
              <li><a href="/support" className="hover:text-[#98ED28] transition-colors duration-300">Support</a></li>
              <li><a href="/privacy" className="hover:text-[#98ED28] transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-[#98ED28] transition-colors duration-300"><Facebook /></a>
              <a href="#" className="hover:text-[#98ED28] transition-colors duration-300"><Twitter /></a>
              <a href="#" className="hover:text-[#98ED28] transition-colors duration-300"><Linkedin /></a>
              <a href="#" className="hover:text-[#98ED28] transition-colors duration-300"><Github /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
