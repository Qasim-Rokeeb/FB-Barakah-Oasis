
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Barakah Oasis',
  description: 'Barakah Oasis is a non-profit organization dedicated to providing clean water, education, and emergency relief to communities in need. Join us to make a difference.',
  openGraph: {
    title: 'Barakah Oasis',
    description: 'Sowing seeds of hope, nurturing communities with compassion.',
    url: 'https://barakahoasis.org',
    siteName: 'Barakah Oasis',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1502375751885-4f494926ce5c?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'A beautiful oasis in a desert, symbolizing hope and relief.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barakah Oasis',
    description: 'Sowing seeds of hope, nurturing communities with compassion.',
    images: ['https://images.unsplash.com/photo-1502375751885-4f494926ce5c?w=1200&h=630&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col')}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
