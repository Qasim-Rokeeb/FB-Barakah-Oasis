
import { causes } from '@/lib/data';
import CauseCard from '@/components/CauseCard';
import { getSummary } from '@/lib/actions';

export default async function CausesPage() {
  const causeSummaries = await Promise.all(
    causes.map(cause => getSummary(cause.fullDescription))
  );

  const ongoingCauses = causes.filter(c => c.status === 'ongoing');
  const completedCauses = causes.filter(c => c.status === 'completed');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1>Our Causes</h1>
          <p className="text-muted-foreground mb-12">
            Every cause represents an opportunity to change a life. Explore our projects and find where your heart connects. Your support, big or small, creates ripples of hope.
          </p>
        </div>

        {/* Ongoing Campaigns */}
        <section className="mb-24 animate-fade-in" aria-labelledby="ongoing-causes-heading">
          <h2 id="ongoing-causes-heading" className="text-3xl font-bold font-headline mb-8 text-center title-accent-border">Ongoing Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingCauses.map((cause, index) => {
              const summary = causeSummaries[causes.indexOf(cause)];
              return <CauseCard key={cause.id} cause={cause} summary={summary} />;
            })}
          </div>
        </section>

        {/* Completed Projects */}
        <section className="animate-fade-in" aria-labelledby="completed-causes-heading">
          <h2 id="completed-causes-heading" className="text-3xl font-bold font-headline mb-8 text-center title-accent-border">Completed Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCauses.map((cause, index) => {
               const summary = causeSummaries[causes.indexOf(cause)];
              return <CauseCard key={cause.id} cause={cause} summary={summary} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
