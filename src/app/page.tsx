
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, HelpingHand, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images';
import { causes, testimonials } from '@/lib/data';
import CauseCard from '@/components/CauseCard';
import { trackEvent } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

const changingTexts = [
  "Sowing seeds of hope, nurturing communities with compassion.",
  "A place of blessing and community. Together, we uplift and empower.",
  "Your contribution, big or small, creates ripples of hope.",
  "Join us in sharing the Barakah with those in need.",
];


export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === 'hero-home');
  const topCauses = causes.slice(0, 3);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
    }, 4000); // Change text every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="relative w-full text-primary-foreground">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover object-center"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/50"></div>
        <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 py-24 md:py-40">
              <div className="max-w-3xl text-center mx-auto">
                <h1 id="hero-heading" className="tracking-wide font-extrabold [text-shadow:1px_1px_4px_rgba(0,0,0,0.3)] animate-fade-in">Welcome to Barakah Oasis</h1>
                <div className="mt-4 h-14 flex items-center justify-center">
                    <p key={textIndex} className="text-primary-foreground/90 text-lg md:text-xl animate-fade-in-down">
                        {changingTexts[textIndex]}
                    </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                    <Button asChild size="lg" className="font-bold" onClick={() => trackEvent('donate_button_click', { location: 'hero' })}>
                      <Link href="/donate">Donate Now</Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg" className="font-bold" onClick={() => trackEvent('volunteer_button_click', { location: 'hero' })}>
                    <Link href="/contact">Volunteer</Link>
                    </Button>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section aria-labelledby="mission-heading" className="py-16 md:py-24 bg-background animate-fade-in">
        <div className="container mx-auto px-4 max-w-[800px]">
          <div className="text-center">
            <h2 id="mission-heading" className="text-3xl md:text-4xl font-headline font-bold mb-4 text-primary title-accent-border">Our Mission</h2>
            <p className="text-muted-foreground mb-12">
              <span className="font-bold">Barakah Oasis</span> is dedicated to serving the Ummah by providing relief, support, and sustainable solutions to Muslim communities in need. We believe in the power of collective action, inspired by Islamic principles, to bring about positive change and restore dignity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <HelpingHand className="h-12 w-12 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">Provide Aid</h3>
              <p className="text-muted-foreground">Delivering essential resources like food, water, and shelter to those affected by crisis, fulfilling our duty of Sadaqah.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <Leaf className="h-12 w-12 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">Empower Futures</h3>
              <p className="text-muted-foreground">Creating long-term solutions through education and skill development, fostering self-reliance within communities.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <HeartHandshake className="h-12 w-12 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">Build Community</h3>
              <p className="text-muted-foreground">Fostering a sense of brotherhood and sisterhood, connecting donors with impactful causes within the Ummah.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Causes Section */}
      <section aria-labelledby="top-causes-heading" className="py-16 md:py-24 bg-secondary animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 id="top-causes-heading" className="text-3xl md:text-4xl font-headline font-bold mb-4 title-accent-border">Our Top Causes</h2>
            <p className="text-muted-foreground mb-12">
              Join us in making a difference. These projects are in urgent need of your support to bring hope and change to communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCauses.map((cause) => (
              <CauseCard key={cause.id} cause={cause} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="font-bold" onClick={() => trackEvent('view_all_causes_click')}>
              <Link href="/causes">View All Causes <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section aria-labelledby="testimonials-heading" className="py-16 md:py-24 bg-background animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-lg mx-auto">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-headline font-bold mb-12 title-accent-border">Words from the Heart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardContent className="p-8 text-center flex flex-col justify-center items-center h-full">
                  <blockquote className="text-muted-foreground mb-4 italic text-lg">"{testimonial.quote}"</blockquote>
                  <cite className="not-italic mt-auto">
                    <p className="font-bold text-primary m-0">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground m-0">{testimonial.location}</p>
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section aria-labelledby="cta-heading" className="bg-accent text-accent-foreground animate-fade-in">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-headline font-bold mb-4 title-accent-border">Ready to Make a Change?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-accent-foreground/90">
            Your contribution, no matter the size, has the power to transform lives. Join the <span className="font-bold">Barakah Oasis</span> family today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="primary" className="font-bold" onClick={() => trackEvent('donate_button_click', { location: 'cta' })}>
                <Link href="/donate">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold bg-transparent text-white border-white hover:bg-white hover:text-accent-foreground" onClick={() => trackEvent('volunteer_button_click', { location: 'cta' })}>
                <Link href="/contact">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
