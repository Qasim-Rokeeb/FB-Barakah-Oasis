
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { placeholderImages } from '@/lib/placeholder-images';
import type { Cause } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import CauseSummary from './CauseSummary';
import { Skeleton } from './ui/skeleton';

type CauseCardProps = {
  cause: Cause;
};

export default function CauseCard({ cause }: CauseCardProps) {
  const causeImage = placeholderImages.find(p => p.id === cause.imageId);
  const progress = (cause.raised / cause.goal) * 100;

  return (
    <Card className="flex flex-col transition-shadow duration-300 rounded-lg">
      <CardHeader className="p-0">
        {causeImage && (
          <Link href={`/causes/${cause.id}`} aria-label={cause.title}>
            <div className="relative h-56 w-full">
              <Image
                src={causeImage.imageUrl}
                alt={cause.title}
                data-ai-hint={causeImage.imageHint}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
          </Link>
        )}
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="font-headline text-xl mb-3">
          <Link href={`/causes/${cause.id}`} className="hover:text-primary transition-colors">{cause.title}</Link>
        </CardTitle>
        <div className="text-sm text-muted-foreground mb-4">
          <Suspense fallback={<div className="space-y-2"><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-5/6" /></div>}>
             <CauseSummary details={cause.fullDescription} />
          </Suspense>
        </div>
        <div>
          <div className="flex justify-between items-baseline mb-1 text-sm">
            <span className="font-bold text-primary">{formatCurrency(cause.raised)}</span>
            <span className="text-muted-foreground">{formatCurrency(cause.goal)}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full font-bold">
          <Link href={`/donate?cause=${cause.id}`}>Learn More & Donate</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
