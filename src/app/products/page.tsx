'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  Leaf,
  Heart,
  Zap,
  Star,
  Award,
  ArrowRight,
  Shield,
  CheckCircle,
} from 'lucide-react';

const productCategories = [
  {
    name: 'Super Foods',
    description: 'Nutrient-rich superfoods including Chia Seeds, Flax Seeds, Quinoa, and more for optimal health and wellness.',
    icon: Sparkles,
    href: '/products/superfoods',
    color: '#556B2F',
    image: '/images/superfoods.jpg',
    products: ['Chia Seeds', 'Flax Seeds', 'Quinoa', 'Pumpkin Seeds', 'Sunflower Seeds', 'Watermelon Seeds', 'Basil Seeds', 'Halim Seeds'],
  },
  {
    name: 'Herbs',
    description: 'Premium quality natural herbs for Ayurvedic wellness, including Ashwagandha, Amla, Giloy, and more.',
    icon: Leaf,
    href: '/products/herbs',
    color: '#445826',
    image: '/images/herbs.jpg',
    products: ['Ashwagandha Roots', 'Amla', 'Giloy', 'Tulsi', 'Mulethi', 'Baheda', 'Harad', 'Neem Leaves'],
  },
  {
    name: 'Herbal Seeds',
    description: 'Medicinal herbal seeds for cultivation and therapeutic applications, sourced from trusted farmers.',
    icon: Heart,
    href: '/products/herbal-seeds',
    color: '#6b8c2a',
    image: '/images/seeds.jpg',
    products: ['Basil Seeds', 'Neem Seeds', 'Flax Seeds', 'Chia Seeds', 'Safflower Seeds'],
  },
  {
    name: 'Herbal Powders',
    description: 'Pure herbal powders for easy consumption and maximum potency, processed with care.',
    icon: Zap,
    href: '/products/herbal-powders',
    color: '#10b981',
    image: '/images/powders.jpg',
    products: ['Ashwagandha Powder', 'Amla Powder', 'Giloy Powder', 'Moringa Powder', 'Shatavari Powder'],
  },
  {
    name: 'Spices',
    description: 'Authentic Indian spices for rich flavor and aromatic cooking, sourced directly from farms.',
    icon: Star,
    href: '/products/spices',
    color: '#059669',
    image: '/images/spices.jpg',
    products: ['Turmeric', 'Cumin', 'Black Pepper', 'Cardamom', 'Cinnamon', 'Cloves', 'Dry Ginger'],
  },
  {
    name: 'Oil Seeds',
    description: 'High-quality oil seeds for extraction and culinary purposes, meeting international standards.',
    icon: Award,
    href: '/products/oil-seeds',
    color: '#047857',
    image: '/images/oil-seeds.jpg',
    products: ['Mustard Seeds', 'Sesame Seeds', 'Sunflower Seeds', 'Flax Seeds', 'Safflower Seeds'],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/family.jpg"
            alt="Products Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/75 via-primary-800/65 to-primary-900/75" />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-16 sm:top-20 right-8 sm:right-20 w-40 h-40 sm:w-64 sm:h-64 bg-emerald-400/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-16 sm:bottom-20 left-8 sm:left-20 w-48 h-48 sm:w-80 sm:h-80 bg-mint-400/20 rounded-full blur-3xl"
        />

        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sage-300 to-emerald-300">Products</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-primary-100 leading-relaxed"
            >
              Discover our extensive range of premium quality herbs, superfoods, 
              spices, and oil seeds sourced directly from trusted farmers across India.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gradient-to-b from-mint-100/60 via-white to-emerald-50/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={category.href} className="block h-full">
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 h-full flex flex-col border border-mint-200 hover:border-emerald-300">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                        {category.products.length}+ Products
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1 line-clamp-2">{category.description}</p>

                      {/* Products Preview */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.products.slice(0, 3).map((product, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full"
                            style={{ backgroundColor: `${category.color}15`, color: category.color }}
                          >
                            {product}
                          </span>
                        ))}
                        {category.products.length > 3 && (
                          <span className="text-xs px-3 py-1 rounded-full bg-primary-50 text-gray-600">
                            +{category.products.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 font-semibold" style={{ color: category.color }}>
                        <span>View All Products</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-10" />
        </motion.div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Quote?
            </h2>
            <p className="text-xl text-primary-100 mb-10 leading-relaxed">
              Contact us today to discuss your specific requirements. We offer competitive 
              rates and can customize orders based on your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 text-lg"
              >
                Get in Touch
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href="tel:07440744060"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 text-lg"
              >
                074407 44060
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

