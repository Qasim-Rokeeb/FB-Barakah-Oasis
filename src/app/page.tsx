'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gift, HeartHandshake, Sprout, Truck, Users } from 'lucide-react';
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

const dynamicTexts = [
  "provide clean water and sanitation.",
  "support education for all children.",
  "deliver emergency relief with compassion.",
  "empower communities for a better future."
];

const approachItems = [
  {
    icon: Truck,
    title: 'Immediate Relief',
    description: 'Delivering life-saving aid like food, clean water, and shelter during emergencies and times of crisis.',
    image: placeholderImages.find(p => p.id === 'approach-relief'),
  },
  {
    icon: Sprout,
    title: 'Sustainable Development',
    description: 'Building long-term solutions for self-sufficiency, including education, healthcare, and livelihood programs.',
    image: placeholderImages.find(p => p.id === 'approach-development'),
  },
  {
    icon: Users,
    title: 'Community Empowerment',
    description: 'Working with local partners to empower communities, ensuring projects are owned and maintained for generations.',
    image: placeholderImages.find(p => p.id === 'approach-empowerment'),
  },
];

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === 'hero-home');
  const [topCauses, setTopCauses] = useState<Cause[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % dynamicTexts.length);
    }, 4000); // Change text every 4 seconds
    return () => clearInterval(interval);
  }, []);

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
      
      {/* Our Approach Section */}
      <section aria-labelledby="approach-heading" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 id="approach-heading" className="text-3xl md:text-4xl font-headline font-bold mb-4 text-foreground title-accent-border">Our Approach</h2>
            <p className="text-muted-foreground mb-12">
              We deliver lasting change by addressing immediate needs while building a foundation for a brighter future. Our work is rooted in three core pillars.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachItems.map((item) => (
              <Card key={item.title} className="text-center overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                {item.image && (
                  <div className="relative h-56 w-full">
                    <Image src={item.image.imageUrl} data-ai-hint={item.image.imageHint} alt={item.title} fill className="object-cover" />
                  </div>
                )}
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
                  <p className="text-muted-foreground m-0 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Causes Section */}
      <section aria-labelledby="top-causes-heading" className="py-16 md:py-24 bg-secondary/70 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 id="top-causes-heading" className="text-3xl md:text-4xl font-headline font-bold mb-4 title-accent-border">Urgent Campaigns</h2>
            <p className="text-muted-foreground mb-12">
              Your support can make an immediate impact. These projects are in critical need of funding to bring relief and create change.
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
      
      {/* How you can help section */}
      <section aria-labelledby="help-heading" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 id="help-heading" className="text-3xl md:text-4xl font-headline font-bold mb-4 title-accent-border">Join Us in Creating an Oasis of Hope</h2>
            <p className="text-muted-foreground mb-12">
              Your contribution, whether through a donation or by spreading the word, has the power to transform lives. Together, we can make a lasting impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="flex flex-col items-center text-center p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <Gift className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold font-headline mb-2">Give with an Open Heart</h3>
              <p className="text-muted-foreground mb-6 flex-grow">Every donation fuels our projects, providing critical resources and fostering sustainable change for communities in need.</p>
              <Button asChild size="lg" className="font-bold w-full">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </Card>
            <Card className="flex flex-col items-center text-center p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <HeartHandshake className="h-12 w-12 text-accent-warm mb-4" />
              <h3 className="text-2xl font-bold font-headline mb-2">Explore Our Causes</h3>
              <p className="text-muted-foreground mb-6 flex-grow">See the impact of our work firsthand. Learn more about our ongoing campaigns and find a cause that speaks to your heart.</p>
              <Button asChild size="lg" variant="outline" className="font-bold w-full">
                <Link href="/causes">See Our Work</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section aria-labelledby="testimonials-heading" className="py-16 md:py-24 bg-secondary/70 animate-fade-in">
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
