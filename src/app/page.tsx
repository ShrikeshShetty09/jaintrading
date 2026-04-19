'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
  Leaf,
  Shield,
  Award,
  Truck,
  ChevronRight,
  Star,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  Heart,
  Zap,
  ArrowRight,
  CheckCircle,
  Play,
  Quote,
} from 'lucide-react';

const products = [
  {
    name: 'Super Foods',
    description: 'Nutrient-rich superfoods including Chia Seeds, Flax Seeds, Quinoa, and more for optimal health.',
    icon: Sparkles,
    href: '/products/superfoods',
    color: '#22c55e',
    image: '/images/superfoods.jpg',
    items: ['Chia Seeds', 'Flax Seeds', 'Quinoa', 'Pumpkin Seeds'],
  },
  {
    name: 'Herbs',
    description: 'Premium quality natural herbs for Ayurvedic wellness and holistic health solutions.',
    icon: Leaf,
    href: '/products/herbs',
    color: '#10b981',
    image: '/images/herbs.jpg',
    items: ['Ashwagandha', 'Amla', 'Giloy', 'Tulsi'],
  },
  {
    name: 'Herbal Seeds',
    description: 'Medicinal herbal seeds for cultivation and therapeutic applications.',
    icon: Heart,
    href: '/products/herbal-seeds',
    color: '#14b8a6',
    image: '/images/seeds.jpg',
    items: ['Basil Seeds', 'Neem Seeds', 'Safflower Seeds'],
  },
  {
    name: 'Herbal Powders',
    description: 'Pure herbal powders for easy consumption and maximum potency.',
    icon: Zap,
    href: '/products/herbal-powders',
    color: '#06b6d4',
    image: '/images/powders.jpg',
    items: ['Ashwagandha Powder', 'Amla Powder', 'Moringa Powder'],
  },
  {
    name: 'Spices',
    description: 'Authentic Indian spices for rich flavor and aromatic cooking.',
    icon: Star,
    href: '/products/spices',
    color: '#f97316',
    image: '/images/spices.jpg',
    items: ['Turmeric', 'Cumin', 'Black Pepper', 'Cardamom'],
  },
  {
    name: 'Oil Seeds',
    description: 'High-quality oil seeds for extraction and culinary purposes.',
    icon: Award,
    href: '/products/oil-seeds',
    color: '#eab308',
    image: '/images/oil-seeds.jpg',
    items: ['Mustard Seeds', 'Sesame Seeds', 'Sunflower Seeds'],
  },
];

const features = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'ISO, GMP, NPOP & NOP certified with strict quality control at every stage.',
    color: '#22c55e',
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    description: 'Industry-leading practices for manufacturing, storage, and supply.',
    color: '#eab308',
  },
  {
    icon: Truck,
    title: 'Pan India Delivery',
    description: 'Reliable delivery network covering all regions across India.',
    color: '#3b82f6',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Dedicated to quality and customer satisfaction since 2019.',
    color: '#ef4444',
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
];

const stats = [
  { value: '5+', label: 'Years Experience', icon: Award },
  { value: '50+', label: 'Products Range', icon: Sparkles },
  { value: '100+', label: 'Happy Clients', icon: Heart },
  { value: '30+', label: 'Team Members', icon: Shield },
];

const certifications = ['ISO', 'GMP', 'NPOP', 'NOP'];

// Animation variants
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero Section - Full Screen with Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/family.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-primary-900/40" />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 sm:top-20 right-4 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 bg-secondary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-16 sm:bottom-20 left-4 sm:left-10 w-48 h-48 sm:w-80 sm:h-80 bg-primary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-secondary-400/10 rounded-full blur-3xl"
        />

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-white"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8"
              >
                <Shield size={18} className="text-secondary-400" />
                <span>ISO, GMP, NPOP & NOP Certified Company</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-white">Jain</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-300">Trading Company</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed max-w-xl"
              >
                Committed to Quality, Committed to Customers. Premium herbs, superfoods, 
                spices, and oil seeds from the heart of India.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 sm:gap-4 mb-12">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-secondary-500 text-gray-900 font-semibold rounded-full hover:bg-secondary-400 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/25 text-sm sm:text-base"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Watch Story
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-6 h-6 text-secondary-400 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-primary-200">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative w-full aspect-square max-w-sm mx-auto lg:max-w-lg">
                {/* Decorative rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border-2 border-dashed border-secondary-400/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 border-2 border-dashed border-primary-400/30 rounded-full"
                />

                {/* Main Image */}
                <div className="absolute inset-6 sm:inset-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/family.jpg"
                    alt="Natural Herbs and Spices"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
                </div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -right-2 sm:-right-4 top-1/4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">100% Natural</div>
                    <div className="text-xs sm:text-sm text-gray-500">Quality Assured</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -left-2 sm:-left-4 bottom-1/4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4"
                >
                  <div className="flex items-center gap-1 sm:gap-2 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-secondary-400 text-secondary-400" />
                    ))}
                  </div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base">100+ Happy Clients</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <div
                  className="absolute bottom-0 left-0 w-full h-1 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: feature.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our extensive range of certified organic and natural products 
              sourced directly from trusted farmers across India.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={product.href} className="block">
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ background: `linear-gradient(135deg, ${product.color}dd, ${product.color}99)` }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                        >
                          <product.icon className="w-10 h-10 text-white" />
                        </motion.div>
                      </div>
                      {/* Floating label */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold" style={{ color: product.color }}>
                        {product.items.length}+ Products
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                      {/* Product tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.items.slice(0, 3).map((item, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full"
                            style={{ backgroundColor: `${product.color}15`, color: product.color }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 font-semibold" style={{ color: product.color }}>
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

      {/* About Section with Image */}
      <section className="py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/choose.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/95 to-primary-900/80" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInLeft}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-secondary-400 rounded-full text-sm font-semibold mb-6">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Trusted Partner for <span className="text-secondary-400">Quality Products</span>
              </h2>
              <p className="text-xl text-primary-100 mb-6 leading-relaxed">
                Established in 2019 by Mr. Ayush Mehta, Jain Trading Company has grown to become 
                a trusted name in the herbs and superfoods industry.
              </p>
              <p className="text-primary-200 mb-8 leading-relaxed">
                Our mission is simple: supply the best quality products to our customers 
                instead of making heavy profits. With a dedicated team of 30-50 members, 
                we ensure every product meets the highest standards.
              </p>

              {/* Checkmarks */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['100% Natural Products', 'Direct from Farmers', 'Competitive Pricing', 'Pan India Delivery'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-500 text-gray-900 font-semibold rounded-full hover:bg-secondary-400 transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Certifications Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInRight}
              className="grid grid-cols-2 gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-secondary-400 mb-2">{cert}</div>
                  <div className="text-primary-200">Certified</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100 rounded-full blur-3xl opacity-30" />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Clients Say</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary-400 text-secondary-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-primary-100">
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
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-10" />
        </motion.div>

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-primary-100 mb-10 leading-relaxed">
              Contact us today to discuss your requirements. We deliver quality products 
              all across India with competitive rates and exceptional service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-secondary-500 text-gray-900 font-bold rounded-full hover:bg-secondary-400 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/25 text-lg"
              >
                Get in Touch
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href="tel:07440744060"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 text-lg"
              >
                <Phone className="w-6 h-6" />
                074407 44060
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInLeft}
            >
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                Our Location
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dealers <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">All Over India</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We supply our quality products across all regions of India. 
                Visit us at our location or contact us for inquiries.
              </p>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-5 p-4 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Bunglow Behind Roadways, Bus Stand, Jaroli Trade Center, 
                      Maharana Pratap Marg, Neemuch, Madhya Pradesh 458441
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-5 p-4 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Call Us</h3>
                    <a href="tel:07440744060" className="text-primary-600 hover:text-primary-700 text-lg font-semibold">
                      074407 44060
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-5 p-4 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Email Us</h3>
                    <a href="mailto:jaintradingcomapany1996@gmail.com" className="text-primary-600 hover:text-primary-700">
                      jaintradingcomapany1996@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInRight}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.8601587593635!2d74.87616996262273!3d24.455636596777133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3966751b44949e09%3A0x12ef07432a1555f4!2sJain%20Trading%20Company!5e0!3m2!1sen!2sin!4v1776619155894!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
