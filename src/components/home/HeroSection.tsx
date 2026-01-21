
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';
import { trackEvent } from '@/lib/utils';

const dynamicTexts = [
  "provide clean water and sanitation.",
  "support education for all children.",
  "deliver emergency relief with compassion.",
  "empower communities for a better future."
];

export default function HeroSection() {
  const heroImage = placeholderImages.find(p => p.id === 'hero-home');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % dynamicTexts.length);
    }, 4000); // Change text every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section aria-labelledby="hero-heading" className="bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] md:min-h-[600px] py-12 md:py-0">
          <div className="max-w-xl text-left animate-fade-in">
            <h1 id="hero-heading" className="text-4xl md:text-6xl tracking-tight font-extrabold text-foreground">
              Sowing seeds of <span className="text-primary relative inline-block">
                hope
                <svg className="absolute -bottom-2 left-0 w-full h-auto" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6C17.6667 3.6 68.5 -2.5 98 4" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <br /> and nurturing communities.
            </h1>
            <div className="mt-8 text-lg text-muted-foreground h-14 md:h-auto">
              <p key={textIndex} className="animate-fade-in">We are a global community united by Islamic values, working to {dynamicTexts[textIndex]}</p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-bold text-lg" onClick={() => trackEvent('donate_button_click', { location: 'hero' })}>
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-bold text-lg" onClick={() => trackEvent('volunteer_button_click', { location: 'hero' })}>
                <Link href="/causes">Explore Causes</Link>
              </Button>
            </div>
          </div>
          {heroImage && (
            <div className="hidden lg:flex justify-center items-center animate-fade-in animation-delay-600">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={500}
                height={500}
                className="rounded-full shadow-2xl"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
