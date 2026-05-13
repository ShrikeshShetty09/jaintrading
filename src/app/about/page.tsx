'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Leaf,
  Shield,
  Award,
  Users,
  Target,
  Star,
  CheckCircle,
  ArrowRight,
  Quote,
  Heart,
  Sparkles,
  Truck,
} from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Highly committed to Quality Assurance in every product we deliver.',
    color: '#556B2F',
  },
  {
    icon: Award,
    title: 'Premium Standards',
    description: 'Following industry best practices for manufacturing and supply.',
    color: '#C89B3C',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Our mission is to supply the best quality product to our customers.',
    color: '#445826',
  },
  {
    icon: Target,
    title: 'Integrity',
    description: 'We believe in authentic products with best competitive rates.',
    color: '#b08430',
  },
];

const testimonials = [
  {
    name: 'Charvi',
    text: 'Dealing with them for past 3 years, never disappointed with quality. Best source for CHIA, BASIL, FLAX SEEDS. Highly recommended!',
    rating: 5,
    image: '/images/testimonials/charvi.jpg',
    role: 'Health Food Retailer',
  },
  {
    name: 'Ankur',
    text: 'Team is very approachable and available for any query. Got the best and timely response each and every time. Excellent service!',
    rating: 5,
    image: '/images/testimonials/ankur.jpg',
    role: 'Ayurvedic Practitioner',
  },
  {
    name: 'Rajesh',
    text: 'Quick response, on-time delivery, right product and nice packaging. My go-to supplier for Ashwagandha root and Shatavari.',
    rating: 5,
    image: '/images/testimonials/rajesh.jpg',
    role: 'Herbal Products Manufacturer',
  },
  {
    name: 'Abhinav',
    text: 'Quality up to the mark, always available for queries. One-stop destination for superfoods and herbs. Great experience!',
    rating: 5,
    image: '/images/testimonials/abhinav.jpg',
    role: 'Organic Store Owner',
  },
];

const stats = [
  { value: '5+', label: 'Years Experience', icon: Award },
  { value: '50+', label: 'Products Range', icon: Sparkles },
  { value: '100+', label: 'Happy Clients', icon: Heart },
  { value: 'Pan India', label: 'Delivery Network', icon: Truck },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/family.jpg"
            alt="About Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-emerald-900/70 to-primary-900/80" />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-16 sm:top-20 right-8 sm:right-20 w-40 h-40 sm:w-64 sm:h-64 bg-emerald-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-16 sm:bottom-20 left-8 sm:left-20 w-48 h-48 sm:w-80 sm:h-80 bg-primary-400/20 rounded-full blur-3xl"
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
              About <span className="text-gold-600">Jain Trading Company</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-primary-100 leading-relaxed"
            >
              Trusted Supplier of Raw Herbs, Super Foods, Spices and Oil Seeds from Neemuch Mandi
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-mint-100/60 via-white to-emerald-50/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInLeft}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-mint-100 text-emerald-800 rounded-full text-sm font-semibold mb-6 border border-emerald-200">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Leading Supplier of Raw <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-emerald-500 to-primary-500">Herbs and Spices</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                Jain Trading Company, established in 2021, is a trusted and accredited supplier providing a wide range of raw herbs, super foods, spices, and oil seeds.
                Our products are sourced directly from farmers at the Neemuch market (Mandi Yard), allowing us to supply the best quality possible at very competitive prices.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our company&apos;s strength lies in our ability to deliver top-quality products at the lowest prices within the specified time. 
                As a quality-focused organization, we are committed to exceeding customer expectations and maintaining the highest standards.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We prioritize maintaining the highest standard of quality products under hygienic conditions, with each product being rigorously tested for quality. 
                With our dedicated services, we are emerging as the most dependable business partner in the herbal industry.
              </p>

              {/* Strengths */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '5+ Years Experience', icon: Award },
                  { label: 'Direct Sourcing from Farmers', icon: Truck },
                  { label: 'Competitive Pricing', icon: Sparkles },
                  { label: 'Bulk Supply Capability', icon: Heart },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white/80 backdrop-blur-sm border border-mint-200 rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                  >
                    <item.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-700">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInRight}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative aspect-square max-w-sm mx-auto lg:max-w-none">
                {/* Decorative rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border-2 border-dashed border-primary-200 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 border-2 border-dashed border-sage-200 rounded-full"
                />

                {/* Main Image */}
                <div className="absolute inset-6 sm:inset-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/family.jpg"
                    alt="Jain Trading Company"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute right-0 sm:-right-4 top-1/4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 border border-mint-200"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-600">2021</div>
                  <div className="text-xs sm:text-sm text-gray-600">Established</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute left-0 sm:-left-4 bottom-1/4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4"
                >
                  <div className="flex items-center gap-1 sm:gap-2 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base">100+ Happy Clients</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-primary-50/40 via-white to-sage-50/40 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/choose.jpg"
            alt="Mission Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/85 to-white/80" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-mint-100 text-emerald-800 rounded-full text-sm font-semibold mb-6 border border-emerald-200">
              Our Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Clean, Safe & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-emerald-500 to-emerald-600">Natural</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              We are committed to exceeding customer expectations by providing top-quality products at the lowest prices. 
              Our products are processed under hygienic conditions and rigorously tested for quality to ensure the highest standards for our partners.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                '100% Natural Products',
                'Direct from Farmers',
                'Pan India Delivery',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-3 text-gray-800"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-mint-100/60 via-white to-emerald-50/40 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-mint-100 text-emerald-800 rounded-full text-sm font-semibold mb-4 border border-emerald-200">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-emerald-500 to-emerald-600">Drives Us</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 text-center border border-mint-200 hover:border-emerald-300"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon className="w-8 h-8" style={{ color: value.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
                <div
                  className="absolute bottom-0 left-0 w-full h-1 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: value.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-primary-50/40 via-white to-sage-50/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-100 rounded-full blur-3xl opacity-30" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-mint-100 text-emerald-800 rounded-full text-sm font-semibold mb-4 border border-emerald-200">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-600">Clients Say</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 relative border border-mint-200 hover:border-emerald-300"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-100" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-emerald-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-primary-100 mb-10 leading-relaxed">
              Contact us today to discuss your requirements. We deliver quality products 
              all across India with competitive rates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 text-lg"
              >
                Contact Us
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 text-lg"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

