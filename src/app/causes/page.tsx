import { causes } from '@/lib/data';
import CauseCard from '@/components/CauseCard';

export default function CausesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1>Our Causes</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Every cause represents an opportunity to change a life. Explore our projects and find where your heart connects. Your support, big or small, creates ripples of hope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map(cause => (
            <CauseCard key={cause.id} cause={cause} />
          ))}
        </div>
      </div>
    </div>
  );
}
