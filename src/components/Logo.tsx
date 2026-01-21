import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-bold font-headline", className)}>
      <span><span className="font-bold">Barakah Oasis</span></span>
    </Link>
  );
}
