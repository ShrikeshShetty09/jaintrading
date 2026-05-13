'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Leaf, ArrowRight, CheckCircle, Shield } from 'lucide-react';

const herbs = [
  { name: 'Ashwagandha Roots', description: 'Adaptogenic herb for stress relief and vitality', image: '/images/herbs/ashwaganda roots.jpg' },
  { name: 'Ashwagandha Powder', description: 'Convenient powder form of the powerful adaptogen', image: '/images/herbs/ashwaganda powder.jpg' },
  { name: 'Akarkara Roots', description: 'Traditional herb for oral and general health', image: '/images/herbs/akarkara roots.jpg' },
  { name: 'Safed Musli', description: 'Ayurvedic herb for strength and vitality', image: '/images/herbs/safedmusli.jpg' },
  { name: 'Rose Petals', description: 'Natural aromatic petals for wellness and beauty', image: '/images/herbs/rosepetals.jpg' },
  { name: 'Baheda', description: 'Traditional Ayurvedic fruit for respiratory health', image: '/images/herbs/baheda.jpg' },
  { name: 'Neem Dry Leaf', description: 'Natural antibacterial and antifungal herb', image: '/images/herbs/neemdry.jpg' },
  { name: 'Shatawri', description: 'Rejuvenating herb for womens health', image: '/images/herbs/shatawri.jpg' },
  { name: 'Amla', description: 'Indian gooseberry rich in Vitamin C', image: '/images/herbs/amla.jpg' },
  { name: 'Heena Leaves', description: 'Natural herb for hair coloring and conditioning', image: '/images/herbs/heena.jpg' },
  { name: 'Neem Seeds', description: 'Medicinal seeds with multiple health benefits', image: '/images/herbs/neemseeds.jpg' },
  { name: 'Heena Powder', description: 'Pure henna powder for natural hair care', image: '/images/herbs/heenapow.jpg' },
  { name: 'Tulsi Panchang', description: 'Holy basil whole plant for immunity', image: '/images/herbs/tulsipachag.jpg' },
  { name: 'Harad', description: 'Ayurvedic herb for digestive health', image: '/images/herbs/harad.jpg' },
  { name: 'Mulethi', description: 'Licorice root for throat and digestive wellness', image: '/images/herbs/mulethi.jpg' },
  { name: 'Giloy', description: 'Immunity-boosting climbing herb', image: '/images/herbs/giloy.jpg' },
  { name: 'Ashwagandha Panchang', description: 'Whole plant ashwagandha for maximum benefits', image: '/images/herbs/ashwagandapanchang.jpg' },
  { name: 'Kalmegh', description: 'Bitter herb for liver and digestive health', image: '/images/herbs/kalmegh.jpg' },
  { name: 'Moringa Leaves', description: 'Nutrient-dense superfood leaves', image: '/images/herbs/moringa.jpg' },
  { name: 'Safflower Petals', description: 'American Kesar for natural coloring', image: '/images/herbs/safflowerpetal.jpg' },
  { name: 'Safflower Seeds', description: 'Seeds for oil extraction and health benefits', image: '/images/herbs/safflowerseeds.jpg' },
  { name: 'Isabgol', description: 'Natural fiber for digestive health', image: '/images/herbs/isabgol.jpg' },
  { name: 'Dry Ginger', description: 'Dried ginger root for culinary and medicinal use', image: '/images/herbs/dryginger.jpg' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

export default function HerbsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home/herbs.jpg"
            alt="Herbs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-900/90" />
        </div>

        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-16 sm:top-20 right-8 sm:right-20 w-40 h-40 sm:w-72 sm:h-72 bg-gold-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-16 sm:bottom-20 left-8 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-champagne-400/20 rounded-full blur-3xl"
        />

        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8"
            >
              <Leaf size={18} className="text-gold-300" />
              <span>Natural Wellness</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Natural <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-champagne-300">Herbs</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-primary-100 leading-relaxed"
            >
              Adding health to your life naturally with ancient Ayurvedic herbs. 
              Our extensive range includes traditional herbs for holistic wellness.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gradient-to-b from-champagne-100/60 via-white to-gold-50/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagne-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {herbs.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-500 border border-champagne-200 hover:border-gold-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Ayurvedic
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-br from-champagne-100/60 via-white to-gold-50/40 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-primary-600">Herbs</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Ayurvedic Tradition', description: 'Herbs sourced following traditional Ayurvedic practices for authenticity', icon: Leaf },
              { title: 'Pure & Natural', description: 'No artificial additives, preservatives, or chemicals used', icon: Shield },
              { title: 'Lab Tested', description: 'Quality tested for purity, potency, and safety standards', icon: CheckCircle },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300 border border-champagne-200 hover:border-gold-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need Bulk Herbs?</h2>
            <p className="text-xl text-primary-100 mb-10 leading-relaxed">
              We supply premium quality herbs in bulk quantities. Contact us for competitive rates and custom requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-gray-900 font-bold rounded-full hover:from-gold-500 hover:to-gold-600 transition-all duration-300 shadow-lg text-lg"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:07440744060"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 text-lg"
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
