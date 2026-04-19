'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight, Shield, Award, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Super Foods', href: '/products/superfoods', color: '#22c55e' },
  { name: 'Herbs', href: '/products/herbs', color: '#10b981' },
  { name: 'Herbal Seeds', href: '/products/herbal-seeds', color: '#14b8a6' },
  { name: 'Spices', href: '/products/spices', color: '#f97316' },
  { name: 'Oil Seeds', href: '/products/oil-seeds', color: '#eab308' },
];

const companyLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

const certifications = [
  { name: 'ISO', icon: Shield },
  { name: 'GMP', icon: Award },
  { name: 'NPOP', icon: Heart },
  { name: 'NOP', icon: Shield },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />

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
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                  Jain Trading
                </span>
                <span className="text-xs text-gray-400 -mt-1 tracking-wider">COMPANY</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              ISO, GMP, NPOP & NOP certified manufacturer and trader of premium herbs, 
              superfoods, spices, and oil seeds. Committed to quality since 2019.
            </p>

            {/* Certifications */}
            <div className="flex gap-3 mb-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center gap-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2"
                >
                  <cert.icon className="w-5 h-5 text-secondary-400" />
                  <span className="text-xs font-bold text-white">{cert.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary-500 rounded-full" />
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
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
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
              <span className="w-8 h-1 bg-secondary-500 rounded-full" />
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
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
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
              <span className="w-8 h-1 bg-secondary-500 rounded-full" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                  <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  Bunglow Behind Roadways, Bus Stand, Jaroli Trade Center, 
                  Maharana Pratap Marg, Neemuch, MP 458441
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <a href="tel:07440744060" className="text-gray-400 group-hover:text-white transition-colors">
                  074407 44060
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <a href="mailto:jaintradingcomapany1996@gmail.com" className="text-gray-400 group-hover:text-white transition-colors text-sm">
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Jain Trading Company. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
