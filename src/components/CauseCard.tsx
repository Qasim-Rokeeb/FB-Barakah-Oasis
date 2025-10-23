'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { placeholderImages } from '@/lib/placeholder-images';
import type { Cause } from '@/lib/types';
import { formatCurrency, trackEvent } from '@/lib/utils';
import { Badge } from './ui/badge';

type CauseCardProps = {
  cause: Cause;
  summary: string;
};

export default function CauseCard({ cause, summary }: CauseCardProps) {
  const causeImage = placeholderImages.find(p => p.id === cause.imageId);
  const progress = (cause.raised / cause.goal) * 100;

  return (
    <Card className="group flex flex-col rounded-lg shadow-sm transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 hover:shadow-lg overflow-hidden">
      <CardHeader className="p-0">
        {causeImage && (
          <Link href={`/causes/${cause.id}`} aria-label={cause.title}>
            <div className="relative h-56 w-full">
              <Image
                src={causeImage.imageUrl}
                alt={cause.title}
                data-ai-hint={causeImage.imageHint}
                fill
                className="object-cover rounded-t-lg grayscale transition-all duration-300 group-hover:grayscale-0"
              />
               {cause.status === 'completed' && (
                <Badge className="absolute top-3 right-3" variant="secondary">Completed</Badge>
              )}
            </div>
          </Link>
        )}
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="font-headline text-xl mb-3">
          <Link href={`/causes/${cause.id}`} className="hover:text-primary transition-colors">{cause.title}</Link>
        </CardTitle>
        <div className="text-sm text-muted-foreground mb-4">
          <p className="text-sm text-muted-foreground">
            {summary}
          </p>
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
        <Button asChild className="w-full font-bold" onClick={() => trackEvent('learn_more_donate_click', { causeId: cause.id, causeTitle: cause.title, location: 'cause_card' })} disabled={cause.status === 'completed'}>
          <Link href={`/donate?cause=${cause.id}`}>{cause.status === 'completed' ? 'Campaign Ended' : 'Learn More & Donate'}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
