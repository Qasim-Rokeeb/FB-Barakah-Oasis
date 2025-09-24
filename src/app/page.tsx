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
      <section className="relative w-full h-[60vh] min-h-[500px] text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">Barakah Oasis</h1>
          <p className="max-w-3xl text-lg md:text-xl text-primary-foreground/90 mb-8">
            Sowing seeds of hope, nurturing communities with compassion. Your generosity can create an oasis of blessings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="font-bold">
              <Link href="/causes">Our Causes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-primary-900">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Barakah Oasis is dedicated to providing relief, support, and sustainable solutions to communities in need. We believe in the power of collective action to bring about positive change and restore dignity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <HelpingHand className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Provide Aid</h3>
              <p className="text-muted-foreground">Delivering essential resources like food, water, and shelter to those affected by crisis.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Empower Futures</h3>
              <p className="text-muted-foreground">Creating long-term solutions through education, vocational training, and sustainable projects.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <HeartHandshake className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Build Community</h3>
              <p className="text-muted-foreground">Fostering a sense of belonging and support, connecting donors with impactful causes.</p>
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
            Your contribution, no matter the size, has the power to transform lives. Join the Barakah Oasis family today.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-bold text-foreground hover:bg-white/90">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
