'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Award, ArrowRight, CheckCircle, Shield } from 'lucide-react';

const oilSeeds = [
  { name: 'Mustard Seeds (Sarson)', description: 'Pungent seeds for oil extraction and cooking', image: '/images/herbs/neemseeds.jpg' },
  { name: 'Sesame Seeds (Til)', description: 'Nutritious seeds for oil and culinary use', image: '/images/herbs/safflowerseeds.jpg' },
  { name: 'Sunflower Seeds', description: 'High oil content seeds for healthy cooking oil', image: '/images/products/sunflower.jpg' },
  { name: 'Flax Seeds (Alsi)', description: 'Omega-3 rich seeds for oil extraction', image: '/images/products/flax.jpg' },
  { name: 'Safflower Seeds', description: 'Seeds for healthy oil production', image: '/images/herbs/safflowerseeds.jpg' },
  { name: 'Niger Seeds (Ramtil)', description: 'Oil-rich seeds for bird feed and oil', image: '/images/herbs/isabgol.jpg' },
  { name: 'Groundnut (Peanut)', description: 'Protein and oil-rich legume seeds', image: '/images/products/pumpkin.jpg' },
  { name: 'Coconut (Copra)', description: 'Dried coconut for oil extraction', image: '/images/herbs/rosepetals.jpg' },
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

export default function OilSeedsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home/oilseeds.jpg"
            alt="Oil Seeds"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-900/90" />
        </div>

        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-16 sm:top-20 right-8 sm:right-20 w-40 h-40 sm:w-72 sm:h-72 bg-emerald-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-16 sm:bottom-20 left-8 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-mint-400/20 rounded-full blur-3xl"
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
              <Award size={18} className="text-emerald-300" />
              <span>Premium Quality</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Oil <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-mint-300">Seeds</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-primary-100 leading-relaxed"
            >
              Browse through our huge range of quality oil seeds for various 
              applications including oil extraction and commercial use.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gradient-to-b from-primary-50/40 via-white to-sage-50/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {oilSeeds.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border border-mint-200 hover:border-emerald-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    High Oil
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-br from-mint-100/60 via-white to-emerald-50/40 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-primary-600">Oil Seeds</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'High Oil Content', description: 'Seeds with excellent oil extraction yield for maximum efficiency', icon: Award },
              { title: 'Quality Graded', description: 'Properly cleaned and graded seeds for consistent quality', icon: Shield },
              { title: 'Bulk Supply', description: 'Available in bulk for commercial oil mills and industries', icon: CheckCircle },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 border border-mint-200 hover:border-emerald-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need Oil Seeds in Bulk?</h2>
            <p className="text-xl text-primary-100 mb-10 leading-relaxed">
              We supply premium quality oil seeds for oil mills and commercial purposes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-emerald-400 to-emerald-500 text-gray-900 font-bold rounded-full hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 shadow-lg text-lg"
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

