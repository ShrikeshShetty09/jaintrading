'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Shield,
  ArrowRight,
  MessageSquare,
  Building,
  Users,
  Truck,
  AlertCircle,
  Loader2,
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Bunglow Behind Roadways, Bus Stand, Jaroli Trade Center, Maharana Pratap Marg, Neemuch, MP 458441',
    link: null,
    color: '#556B2F',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '074407 44060',
    link: 'tel:07440744060',
    color: '#10b981',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'jaintradingcomapany1996@gmail.com',
    link: 'mailto:jaintradingcomapany1996@gmail.com',
    color: '#445826',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Sat: 9:00 AM - 6:00 PM',
    link: null,
    color: '#059669',
  },
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    console.log('=== Contact Page Form Submitting ===');
    console.log('Form Data:', formData);

    try {
      console.log('Calling API: /api/contact');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('API Response Status:', response.status);
      const data = await response.json();
      console.log('API Response Data:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      console.log('=== Form Submitted Successfully ===');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/family.jpg"
            alt="Contact Background"
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
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8"
            >
              <MessageSquare size={18} className="text-emerald-400" />
              <span>Get in Touch</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sage-300 to-emerald-300">Us</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-primary-100 leading-relaxed"
            >
              Have questions about our products? We&apos;re here to help. Reach out to us 
              and we&apos;ll respond within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-primary-50/40 via-white to-sage-50/40 relative overflow-hidden overflow-x-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint-200 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInLeft}
              className="min-w-0"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-mint-100 text-emerald-800 rounded-full text-sm font-semibold mb-4 border border-emerald-200">
                Send a Message
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words">
                Let&apos;s Start a <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-emerald-500 to-primary-500">Conversation</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 break-words">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-emerald-50 to-mint-50 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center border border-emerald-200"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  >
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-primary-50 border border-primary-200 rounded-xl p-4 flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <p className="text-primary-900 text-sm">{error}</p>
                    </motion.div>
                  )}
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-mint-200 focus:border-emerald-500 focus:ring-2 sm:focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-base sm:text-lg"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-mint-200 focus:border-emerald-500 focus:ring-2 sm:focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-base sm:text-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-mint-200 focus:border-emerald-500 focus:ring-2 sm:focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-base sm:text-lg"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-mint-200 focus:border-emerald-500 focus:ring-2 sm:focus:ring-4 focus:ring-emerald-100 transition-all outline-none bg-white text-base sm:text-lg"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="products">Product Inquiry</option>
                        <option value="quote">Request a Quote</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-mint-200 focus:border-emerald-500 focus:ring-2 sm:focus:ring-4 focus:ring-emerald-100 transition-all outline-none resize-none text-base sm:text-lg"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-3 sm:py-4 bg-emerald-500 text-white font-bold rounded-xl sm:rounded-2xl hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 text-base sm:text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        Sending...
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInRight}
              className="min-w-0"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-mint-100 text-emerald-800 rounded-full text-sm font-semibold mb-4 border border-emerald-200">
                Contact Information
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words">
                Get in <span className="text-primary-600">Touch</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 break-words">
                We&apos;d love to hear from you. Here&apos;s how you can reach us.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={staggerContainer}
                className="space-y-4"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="group flex items-start gap-4 bg-white/80 backdrop-blur-sm border border-mint-200 rounded-2xl p-5 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <info.icon className="w-7 h-7" style={{ color: info.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 rounded-3xl overflow-hidden shadow-xl h-[280px] relative"
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
                <div className="absolute inset-0 border-4 border-primary-200 rounded-3xl pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-primary-50/40 via-white to-sage-50/40 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/choose.jpg"
            alt="Stats Background"
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
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-mint-100 text-emerald-800 rounded-full text-sm font-semibold mb-6 border border-emerald-200">
              Pan India Presence
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dealers All Over <span className="text-primary-600">India</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We supply our quality products across all regions of India. 
              Partner with us for the best quality herbs, superfoods, and spices.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { value: '100+', label: 'Happy Clients', icon: Users },
                { value: '50+', label: 'Products', icon: Building },
                { value: 'Pan India', label: 'Delivery', icon: Truck },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-mint-200 hover:border-emerald-300 hover:bg-white transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-emerald-700 mb-2">{stat.value}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

