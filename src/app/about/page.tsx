import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Target, Users } from 'lucide-react';

const teamMembers = [
  { name: 'Aisha Rahman', role: 'Founder', imageId: 'testimonial-2' },
  { name: 'Yusuf Ahmed', role: 'Manager', imageId: 'testimonial-1' },
  { name: 'Fatima Khan', role: 'Charity Distribution Manager', imageId: 'testimonial-3' },
];

export default function AboutPage() {
  const visionImage = placeholderImages.find(p => p.id === 'about-us-vision');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">About <span className="font-bold">Barakah Oasis</span></h1>
          <p className="text-lg text-muted-foreground">
            Learn about our journey, our values, and the dedicated team working to make a difference in the world.
          </p>
        </div>

        {/* Vision and Mission Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold font-headline mb-4 text-primary">Our Vision</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                We envision a world where Muslim communities are empowered and uplifted, living with dignity and hope, guided by the principles of compassion and justice in Islam.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary/20 rounded-lg p-3">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Our Mission</h3>
                    <p className="text-muted-foreground">To serve and uplift Muslim communities by providing immediate relief and creating sustainable, long-term solutions rooted in Islamic values of compassion, integrity, and service to humanity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary/20 rounded-lg p-3">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Our Values</h3>
                    <p className="text-muted-foreground">Compassion (Rahmah), Integrity (Amanah), Transparency (Waduh), and Empowerment (Tamkin) guide every decision we make and every project we undertake.</p>
                  </div>
                </div>
              </div>
            </div>
            {visionImage && (
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={visionImage.imageUrl}
                  alt={visionImage.description}
                  data-ai-hint={visionImage.imageHint}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-24 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Inspired by the Islamic principles of charity (Sadaqah) and compassion (Rahmah), <span className="font-bold">Barakah Oasis</span> was founded in 2015. A small group of individuals, moved by the immense suffering they witnessed during a humanitarian trip, returned with a powerful conviction: that small, consistent acts of kindness, when multiplied, could create an "oasis" of blessings (Barakah) in the most desolate of circumstances. From delivering a few food parcels, we have grown into a global family of donors and volunteers, touching thousands of lives through diverse projects that serve the Ummah. Our core belief remains unchanged: every life has immense value, and together, we can restore hope and dignity.
          </p>
        </section>

        {/* Meet the Team Section */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-headline mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              We are a passionate group of professionals, volunteers, and community leaders dedicated to our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
              const memberImage = placeholderImages.find(p => p.id === member.imageId);
              return (
                <div key={member.name} className="text-center flex flex-col items-center">
                  {memberImage && (
                    <Avatar className="w-32 h-32 mb-4 border-4 border-accent">
                      <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint}/>
                      <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                  )}
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
