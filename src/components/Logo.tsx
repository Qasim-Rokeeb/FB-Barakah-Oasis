import { HandHeart } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-bold font-headline", className)}>
      <HandHeart className="h-7 w-7 text-primary" />
      <span>Barakah Oasis</span>
    </Link>
  );
}
