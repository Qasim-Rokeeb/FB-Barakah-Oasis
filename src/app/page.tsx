
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, HelpingHand, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images';
import { causes, testimonials } from '@/lib/data';
import CauseCard from '@/components/CauseCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === 'hero-home');
  const topCauses = causes.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full text-white bg-gradient-to-br from-primary to-accent">
        <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 py-24 md:py-32">
              <div className="max-w-3xl text-center mx-auto">
                <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-[1px]">Barakah Oasis</h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                    A serene and inviting charity website to highlight causes and facilitate community support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="font-bold">
                      <Link href="/donate">Donate Now</Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg" className="font-bold">
                    <Link href="/contact">Volunteer</Link>
                    </Button>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-[800px]">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-12">
              <span className="font-bold">Barakah Oasis</span> is dedicated to serving the Ummah by providing relief, support, and sustainable solutions to Muslim communities in need. We believe in the power of collective action, inspired by Islamic principles, to bring about positive change and restore dignity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <HelpingHand className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Provide Aid</h3>
              <p className="text-muted-foreground">Delivering essential resources like food, water, and shelter to those affected by crisis, fulfilling our duty of Sadaqah.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <Leaf className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Empower Futures</h3>
              <p className="text-muted-foreground">Creating long-term solutions through education and skill development, fostering self-reliance within communities.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <HeartHandshake className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Build Community</h3>
              <p className="text-muted-foreground">Fostering a sense of brotherhood and sisterhood, connecting donors with impactful causes within the Ummah.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Causes Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Top Causes</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Join us in making a difference. These projects are in urgent need of your support to bring hope and change to communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topCauses.map(cause => (
              <CauseCard key={cause.id} cause={cause} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="/causes">View All Causes <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12">Words from the Heart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => {
              const testimonialImage = placeholderImages.find(p => p.id === testimonial.imageId);
              return (
                <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    {testimonialImage && (
                      <Avatar className="w-24 h-24 mb-4 border-4 border-accent">
                        <AvatarImage src={testimonialImage.imageUrl} alt={testimonial.name} data-ai-hint={testimonialImage.imageHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <blockquote className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</blockquote>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Ready to Make a Change?</h2>
          <p className="max-w-2xl mx-auto text-lg text-primary-foreground/90 mb-8">
            Your contribution, no matter the size, has the power to transform lives. Join the <span className="font-bold">Barakah Oasis</span> family today.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-bold text-foreground hover:bg-white/90">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
