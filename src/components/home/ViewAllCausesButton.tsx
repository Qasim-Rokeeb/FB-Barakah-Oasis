
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/utils';

export default function ViewAllCausesButton() {
    return (
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="font-bold" onClick={() => trackEvent('view_all_causes_click')}>
              <Link href="/causes">View All Causes <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" /></Link>
            </Button>
        </div>
    );
}
