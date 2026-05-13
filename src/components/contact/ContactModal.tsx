'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
};

export default function ContactModal({
  open,
  onClose,
  title = 'Send a Message',
  subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
}: ContactModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-mint-200"
            >
              <div className="p-5 sm:p-6 border-b border-mint-200 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-mint-100 text-emerald-800 rounded-full text-sm font-semibold mb-3 border border-emerald-200">
                    {title}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 break-words">
                    Let&apos;s Start a <span className="block sm:inline text-primary-600">Conversation</span>
                  </h2>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base break-words">{subtitle}</p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 w-10 h-10 rounded-xl border border-mint-200 flex items-center justify-center text-gray-600 hover:bg-emerald-50 hover:border-emerald-300"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 sm:p-6 max-h-[70vh] overflow-y-auto">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

