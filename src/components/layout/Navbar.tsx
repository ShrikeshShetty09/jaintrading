'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Leaf, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Products',
    href: '/products',
    children: [
      { name: 'Super Foods', href: '/products/superfoods', color: '#556B2F' },
      { name: 'Herbs', href: '/products/herbs', color: '#445826' },
      { name: 'Herbal Seeds', href: '/products/herbal-seeds', color: '#6b8c2a' },
      { name: 'Herbal Powders', href: '/products/herbal-powders', color: '#C89B3C' },
      { name: 'Spices', href: '/products/spices', color: '#b08430' },
      { name: 'Oil Seeds', href: '/products/oil-seeds', color: '#8f6a23' },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 text-white py-2.5 hidden md:block relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-8">
              <motion.a
                href="tel:07440744060"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 hover:text-secondary-300 transition-colors"
              >
                <Phone size={14} />
                <span>074407 44060</span>
              </motion.a>
              <motion.a
                href="mailto:jaintradingcomapany1996@gmail.com"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 hover:text-secondary-300 transition-colors"
              >
                <Mail size={14} />
                <span>jaintradingcomapany1996@gmail.com</span>
              </motion.a>
            </div>
            <div className="flex items-center gap-2 text-primary-200">
              <MapPin size={14} className="text-gold-400" />
              <span>Neemuch, Madhya Pradesh</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'sticky top-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-xl shadow-primary-900/5'
            : 'bg-white/80 backdrop-blur-lg'
        )}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-14 h-14"
              >
                <Image
                  src="/images/logo/jaintraderslogo.png"
                  alt="Jain Trading Company"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gold-600">
                  Jain Trading
                </span>
                <span className="text-xs text-gold-600 -mt-1 tracking-wider">COMPANY</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'px-5 py-2.5 text-gray-700 font-medium rounded-xl transition-all duration-300',
                      'hover:text-gold-600 hover:bg-gold-50',
                      'flex items-center gap-1.5 relative group'
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        size={16}
                        className={cn(
                          'transition-transform duration-300',
                          activeDropdown === item.name && 'rotate-180'
                        )}
                      />
                    )}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold-500 rounded-full group-hover:w-3/4 transition-all duration-300" />
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl shadow-primaryaryary-900/10 border bgray 1verflow-hidden"
                        >
                          <div className="p-2">
                            {item.children.map((child, index) => (
                              <motion.div
                                key={child.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={child.href}
                                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gold-50 rounded-xl transition-all duration-200 group"
                                >
                                  <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: (child as any).color }}
                                  />
                                  <span className="group-hover:text-gold-600 transition-colors">{child.name}</span>
                                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-gold-500" />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          <div className="p-3 bg-gradient-to-r from-gold-50 to-champagne-50 border-t border-champagne-200">
                            <Link
                              href="/products"
                              className="flex items-center justify-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                            >
                              View All Products
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 via-gold-600 to-primary-500 text-white font-semibold rounded-xl hover:from-primary-700 hover:via-gold-700 hover:to-primary-600 transition-all duration-300 shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/30"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-gold-50 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-champagne-200 overflow-hidden"
            >
              <div className="container-custom py-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-700 hover:text-gold-600 transition-colors"
                        >
                          {item.name}
                          <ChevronDown
                            className={cn(
                              'w-5 h-5 text-gray-400 transition-transform duration-300',
                              activeDropdown === item.name && 'rotate-180'
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-3 space-y-1 border-l-2 border-gold-300 ml-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="flex items-center gap-2 py-2 text-gray-600 hover:text-gold-600 transition-colors"
                                  >
                                    <div
                                      className="w-2.5 h-2.5 rounded-full"
                                      style={{ backgroundColor: (child as any).color }}
                                    />
                                    {child.name}
                                  </Link>
                                ))}
                                <Link
                                  href="/products"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                  className="flex items-center gap-2 py-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors"
                                >
                                  <ArrowRight className="w-4 h-4" />
                                  View All Products
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-3 text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        {item.name}
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 mt-6 border-t border-champagne-200"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full text-center"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
