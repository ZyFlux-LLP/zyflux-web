'use client';
import Link from 'next/link';
import {
  Linkedin,
  Twitter,
  Instagram,
} from 'lucide-react'; 
const Footer = () => {

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zyflux', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/zyflux_com', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/zyflux_com', icon: Instagram },
];

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
          <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-white -to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                ZyFlux
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Transforming ideas into digital reality with cutting-edge technology, creative excellence, and proven results.
            </p>
            <div className="flex space-x-4">
  {socials.map(({ name, href, icon: Icon }) => (
    <Link
      key={name}
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      aria-label={name}
    >
      <Icon size={20} />
    </Link>
  ))}
</div>

          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/#web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/#app-development" className="hover:text-white transition-colors">App Development</Link></li>
              <li><Link href="/services/#ai-solutions" className="hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link href="/services/#digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/#uiux-design" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services/#graphics-design" className="hover:text-white transition-colors">Graphics & Multimedias</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="mailto:team@zyflux.com" className="hover:text-white transition-colors">team@zyflux.com</Link></li>
              <li><Link href="tel:+919867787160" className="hover:text-white transition-colors">+91 9867787160 / +44 75545 39838</Link></li>
              <li>H-3/1001 Valley Shilp CHS Kharghar Sec-36 Navi Mumbai 410210</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ZyFlux. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
