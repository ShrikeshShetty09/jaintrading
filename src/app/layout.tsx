import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Jain Trading Company - Raw Herbs Supplier & Spices Wholesale from Neemuch',
  description: 'Leading supplier of raw herbs, herbal raw materials, Ayurvedic raw materials, and spices from Neemuch - Asia\'s largest herbal market. 20+ years experience in wholesale herbs and spices. ISO, GMP, NPOP & NOP certified.',
  keywords: [
    'raw herbs supplier',
    'herbal raw materials',
    'Neemuch herbs market',
    'Ayurvedic raw materials',
    'herbs and spices wholesale',
    'raw herbs',
    'spices wholesale',
    'herbal products',
    'superfoods supplier',
    'oil seeds supplier',
    'herbal seeds',
    'herbal powders',
    'Neemuch mandi',
    'Jain Trading Company',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
