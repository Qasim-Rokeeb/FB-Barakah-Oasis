'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, HelpingHand, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images';
import { testimonials } from '@/lib/data';
import CauseCard from '@/components/CauseCard';
import { trackEvent } from '@/lib/utils';
import React, { useState, useEffect } from 'react';
import { getAllCauses } from '@/lib/actions';
import type { Cause } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';


export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === 'hero-home');
  const [topCauses, setTopCauses] = useState<Cause[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCauses() {
      try {
        setIsLoading(true);
        const allCauses = await getAllCauses();
        // Get top 3 ongoing causes
        setTopCauses(allCauses.filter(c => c.status === 'ongoing').slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch causes:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCauses();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="bg-background">
        <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl text-left animate-fade-in">
                    <h1 id="hero-heading" className="text-4xl md:text-6xl tracking-tight font-extrabold text-foreground">
                        The global community where <span className="text-primary">compassion</span> meets <span className="text-primary">action</span>.
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        We are a non-profit organization dedicated to providing clean water, education, and emergency relief to communities in need. Your contribution creates ripples of hope.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="font-bold" onClick={() => trackEvent('donate_button_click', { location: 'hero' })}>
                          <Link href="/donate">Get Started</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="font-bold" onClick={() => trackEvent('volunteer_button_click', { location: 'hero' })}>
                        <Link href="/contact">Learn More</Link>
                        </Button>
                    </div>
                </div>
                {heroImage && (
                    <div className="flex justify-center items-center animate-fade-in animation-delay-600">
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            data-ai-hint={heroImage.imageHint}
                            width={500}
                            height={500}
                            className="object-contain"
                            priority
                        />
                    </div>
                )}
            </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section aria-labelledby="mission-heading" className="py-16 md:py-24 bg-secondary animate-fade-in">
        <div className="container mx-auto px-4 max-w-[800px]">
          <div className="text-center">
            <h2 id="mission-heading" className="text-3xl md:text-4xl font-headline font-bold mb-4 text-foreground title-accent-border">Our Mission</h2>
            <p className="text-muted-foreground mb-12">
              <span className="font-bold">Barakah Oasis</span> is dedicated to serving the Ummah by providing relief, support, and sustainable solutions to Muslim communities in need. We believe in the power of collective action, inspired by Islamic principles, to bring about positive change and restore dignity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-background rounded-full p-4 mb-4">
                <HelpingHand className="h-12 w-12 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">Provide Aid</h3>
              <p className="text-muted-foreground">Delivering essential resources like food, water, and shelter to those affected by crisis, fulfilling our duty of Sadaqah.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-background rounded-full p-4 mb-4">
                <Leaf className="h-12 w-12 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">Empower Futures</h3>
              <p className="text-muted-foreground">Creating long-term solutions through education and skill development, fostering self-reliance within communities.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-background rounded-full p-4 mb-4">
                <HeartHandshake className="h-12 w-12 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">Build Community</h3>
              <p className="text-muted-foreground">Fostering a sense of brotherhood and sisterhood, connecting donors with impactful causes within the Ummah.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Causes Section */}
      <section aria-labelledby="top-causes-heading" className="py-16 md:py-24 bg-background animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 id="top-causes-heading" className="text-3xl md:text-4xl font-headline font-bold mb-4 title-accent-border">Our Top Causes</h2>
            <p className="text-muted-foreground mb-12">
              Join us in making a difference. These projects are in urgent need of your support to bring hope and change to communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i}><CardContent className="p-6"><Skeleton className="h-56 w-full mb-4" /><Skeleton className="h-6 w-3/4 mb-2" /><Skeleton className="h-4 w-full" /></CardContent></Card>
              ))
            ) : (
              topCauses.map((cause) => (
                <CauseCard key={cause.id} cause={cause} />
              ))
            )}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="font-bold" onClick={() => trackEvent('view_all_causes_click')}>
              <Link href="/causes">View All Causes <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section aria-labelledby="testimonials-heading" className="py-16 md:py-24 bg-secondary animate-fade-in">
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
    </div>
  );
}
