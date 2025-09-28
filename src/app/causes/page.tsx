import { causes } from '@/lib/data';
import CauseCard from '@/components/CauseCard';
import { getSummary } from '@/lib/actions';

export default async function CausesPage() {
  const causeSummaries = await Promise.all(
    causes.map(cause => getSummary(cause.fullDescription))
  );

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1>Our Causes</h1>
          <p className="text-muted-foreground mb-12">
            Every cause represents an opportunity to change a life. Explore our projects and find where your heart connects. Your support, big or small, creates ripples of hope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((cause, index) => (
            <CauseCard key={cause.id} cause={cause} summary={causeSummaries[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}
