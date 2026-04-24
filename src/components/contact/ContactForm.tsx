'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactFormProps = {
  onSubmitted?: () => void;
};

export default function ContactForm({ onSubmitted }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormValues>({
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

    console.log('=== Form Submitting ===');
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
      onSubmitted?.();
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-gold-50 to-champagne-50 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center border border-gold-200"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
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
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700 text-sm">{error}</p>
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
            className="w-full px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-champagne-200 focus:border-gold-500 focus:ring-2 sm:focus:ring-4 focus:ring-gold-100 transition-all outline-none text-base sm:text-lg"
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
            className="w-full px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-champagne-200 focus:border-gold-500 focus:ring-2 sm:focus:ring-4 focus:ring-gold-100 transition-all outline-none text-base sm:text-lg"
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
            className="w-full px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-champagne-200 focus:border-gold-500 focus:ring-2 sm:focus:ring-4 focus:ring-gold-100 transition-all outline-none text-base sm:text-lg"
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
            className="w-full px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-champagne-200 focus:border-gold-500 focus:ring-2 sm:focus:ring-4 focus:ring-gold-100 transition-all outline-none bg-white text-base sm:text-lg"
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
          className="w-full px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-champagne-200 focus:border-gold-500 focus:ring-2 sm:focus:ring-4 focus:ring-gold-100 transition-all outline-none resize-none text-base sm:text-lg"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <motion.button
        whileHover={{ scale: isLoading ? 1 : 1.02 }}
        whileTap={{ scale: isLoading ? 1 : 0.98 }}
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-gray-900 font-bold rounded-xl sm:rounded-2xl hover:from-gold-500 hover:to-gold-600 transition-all duration-300 shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/30 text-base sm:text-lg disabled:opacity-70 disabled:cursor-not-allowed"
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
  );
}
