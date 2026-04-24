'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, MessageSquare } from 'lucide-react';

// WhatsApp Icon Component (Official Logo)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.377l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function QueryWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917440744060';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'jaintradingcompany1996@gmail.com';
  
  // Prefilled message for WhatsApp
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your products. Can you please help me with more information?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  // Mailto link
  const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent('Inquiry about Products')}&body=${encodeURIComponent('Hello,\n\nI am interested in your products. Please provide more information.\n\nRegards')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3"
          >
            {/* WhatsApp Button */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-7 h-7 text-white" />
            </motion.a>

            {/* Mail Button */}
            <motion.a
              href={mailtoUrl}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/30 hover:shadow-xl hover:shadow-gold-500/40 transition-all"
              title="Send Email"
            >
              <Mail className="w-6 h-6 text-gray-900" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          isOpen
            ? 'bg-gray-800 shadow-gray-800/30'
            : 'bg-gradient-to-br from-primary-600 to-primary-500 shadow-primary-500/30 hover:shadow-primary-500/40'
        }`}
        title="Contact Us"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="query"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Tooltip */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute right-20 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg border border-champagne-200 whitespace-nowrap"
        >
          <span className="text-sm font-medium text-gray-700">Need Help?</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white border-r border-b border-champagne-200 rotate-45" />
        </motion.div>
      )}
    </div>
  );
}
