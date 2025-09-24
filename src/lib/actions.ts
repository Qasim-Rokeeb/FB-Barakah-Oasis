// src/lib/actions.ts
'use server';

import { summarizeCauseDetails } from '@/ai/flows/summarize-cause-details';
import { unstable_cache as cache } from 'next/cache';
import { Cause, causes } from './data';

export const getSummary = cache(
  async (details: string): Promise<string> => {
    try {
      const result = await summarizeCauseDetails({ causeDetails: details });
      return result.summary;
    } catch (error) {
      console.error('Error generating summary:', error);
      // Return a short, generic summary as a fallback
      return 'This cause aims to provide critical support and resources to communities in need, fostering hope and enabling sustainable change.';
    }
  },
  ['cause-summaries'],
  { revalidate: 3600 } // Cache for 1 hour
);

export async function getCauseById(id: string): Promise<Cause | undefined> {
  // In a real app, this would fetch from a database
  return causes.find(cause => cause.id === id);
}
