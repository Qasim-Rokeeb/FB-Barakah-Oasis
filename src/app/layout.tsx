
import type { Metadata } from 'next';
import { Poppins, Lora } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { FirebaseClientProvider } from '@/firebase/client-provider';

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

const headlineFont = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const bodyFont = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
});

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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col', headlineFont.variable, bodyFont.variable)}>
        <FirebaseClientProvider>
          <ClientLayout>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <Header />
            <main id="main-content" className="flex-grow">{children}</main>
            <Footer />
            <Toaster />
            <ScrollToTopButton />
          </ClientLayout>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
