'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, ArrowRight, CheckCircle, Shield } from 'lucide-react';

const herbalPowders = [
  { name: 'Ashwagandha Powder', description: 'Adaptogenic powder for stress relief and vitality', image: '/images/herbs/ashwaganda powder.jpg' },
  { name: 'Heena Powder', description: 'Pure henna powder for natural hair care', image: '/images/herbs/heenapow.jpg' },
  { name: 'Amla Powder', description: 'Indian gooseberry powder rich in Vitamin C', image: '/images/herbs/amla.jpg' },
  { name: 'Giloy Powder', description: 'Immunity-boosting powder from climbing herb', image: '/images/herbs/giloy.jpg' },
  { name: 'Moringa Powder', description: 'Nutrient-dense superfood leaf powder', image: '/images/herbs/moringa.jpg' },
  { name: 'Shatavari Powder', description: 'Rejuvenating powder for womens health', image: '/images/herbs/shatawri.jpg' },
  { name: 'Triphala Powder', description: 'Traditional Ayurvedic digestive formula', image: '/images/herbs/amla.jpg' },
  { name: 'Brahmi Powder', description: 'Memory and cognitive enhancement powder', image: '/images/herbs/moringa.jpg' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export default function HerbalPowdersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/herbs/ashwaganda powder.jpg"
            alt="Herbal Powders"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 via-blue-800/85 to-cyan-900/90" />
        </div>

        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-16 sm:top-20 right-8 sm:right-20 w-40 h-40 sm:w-72 sm:h-72 bg-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-16 sm:bottom-20 left-8 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-400/20 rounded-full blur-3xl"
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
              <Zap size={18} className="text-cyan-300" />
              <span>Pure Powders</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Herbal <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Powders</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-cyan-100 leading-relaxed"
            >
              Browse through our huge collection of Herbal Powders for variety 
              of medicinal plants and health benefits.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {herbalPowders.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Pure
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-cyan-600">Powders</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Fine Quality', description: 'Finely ground powder for better absorption and effectiveness', icon: Zap },
              { title: 'No Additives', description: 'Pure herbal powder without any additives or preservatives', icon: Shield },
              { title: 'Lab Tested', description: 'Quality tested for purity, potency, and safety standards', icon: CheckCircle },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
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
      <section className="py-24 bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-700 relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need Herbal Powders in Bulk?</h2>
            <p className="text-xl text-cyan-100 mb-10 leading-relaxed">
              We supply premium quality herbal powders for commercial and personal use.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-cyan-700 font-bold rounded-full hover:bg-cyan-50 transition-all duration-300 shadow-lg text-lg"
              >
                Get Quote
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
