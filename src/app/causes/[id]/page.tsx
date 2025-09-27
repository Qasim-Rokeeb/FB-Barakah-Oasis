import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getCauseById, getAllCauses } from '@/lib/actions';
import { placeholderImages } from '@/lib/placeholder-images';
import { formatCurrency } from '@/lib/utils';
import CauseSummary from '@/components/CauseSummary';

export default async function CauseDetailPage({ params }: { params: { id: string } }) {
  const cause = await getCauseById(params.id);

  if (!cause) {
    notFound();
  }

  const causeImage = placeholderImages.find(p => p.id === cause.imageId);
  const progress = (cause.raised / cause.goal) * 100;

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {causeImage && (
              <div className="relative h-80 w-full rounded-lg overflow-hidden mb-8 shadow-lg">
                <Image
                  src={causeImage.imageUrl}
                  alt={cause.title}
                  data-ai-hint={causeImage.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <h1 className="mb-6">{cause.title}</h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>{cause.fullDescription}</p>
            </div>
          </div>

          {/* Donation Card */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Support this Cause</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-2xl font-bold text-primary">{formatCurrency(cause.raised)}</span>
                    <span className="text-sm text-muted-foreground">raised of {formatCurrency(cause.goal)}</span>
                  </div>
                  <Progress value={progress} className="h-3 mb-4" />
                  <div className="text-center text-sm text-muted-foreground mb-6">
                    {Math.round(progress)}% of our goal funded.
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button asChild size="lg" className="w-full font-bold text-base">
                      <Link href={`/donate?cause=${cause.id}`}>Donate Now</Link>
                    </Button>
                    <Button type="button" variant="outline" className="w-full font-bold" aria-label={`Share the ${cause.title} cause`}>Share</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 shadow-lg">
                 <CardHeader>
                  <CardTitle className="font-headline text-xl">Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<p className="text-muted-foreground m-0">Generating summary...</p>}>
                    <CauseSummary details={cause.fullDescription} />
                  </Suspense>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const causes = await getAllCauses();
  return causes.map((cause) => ({
    id: cause.id,
  }));
}
