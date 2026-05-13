'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'Super Foods', href: '/products/superfoods', color: '#556B2F' },
  { name: 'Herbs', href: '/products/herbs', color: '#445826' },
  { name: 'Herbal Seeds', href: '/products/herbal-seeds', color: '#6b8c2a' },
  { name: 'Spices', href: '/products/spices', color: '#10b981' },
  { name: 'Oil Seeds', href: '/products/oil-seeds', color: '#059669' },
];

const companyLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1B240B] via-[#2D3B12] to-[#1B240B] text-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint-300/15 rounded-full blur-3xl" />

      {/* Main Footer */}
      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-14 h-14"
              >
                <Image
                  src="/images/logo/jaintraderslogo.png"
                  alt="Jain Trading Company Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gold-600">
                  Jain Trading
                </span>
                <span className="text-xs text-gold-600 -mt-1 tracking-wider">COMPANY</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Manufacturer and trader of premium herbs, 
              superfoods, spices, and oil seeds. Committed to quality since 2021.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" />
              Products
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    <div
                      className="w-2 h-2 rounded-full group-hover:scale-150 transition-transform"
                      style={{ backgroundColor: link.color }}
                    />
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" />
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-gray-300 group-hover:text-emerald-400 transition-colors">
                  Bunglow Behind Roadways, Bus Stand, Jaroli Trade Center, 
                  Maharana Pratap Marg, Neemuch, MP 458441
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <a href="tel:07440744060" className="text-gray-300 group-hover:text-emerald-400 transition-colors">
                  074407 44060
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <a href="mailto:jaintradingcomapany1996@gmail.com" className="text-gray-300 group-hover:text-emerald-400 transition-colors text-sm">
                  jaintradingcomapany1996@gmail.com
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Jain Trading Company. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Developed by{' '}
              <a 
                href="https://www.shridevfreelance.online/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
              >
                ShriDev Freelance
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

