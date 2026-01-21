'use server';

import { summarizeCauseDetails } from '@/ai/flows/summarize-cause-details';
import { unstable_cache as cache } from 'next/cache';

export const getSummary = cache(
  async (details: string): Promise<string> => {
    try {
      const result = await summarizeCauseDetails({ causeDetails: details });
      return result.summary;
    } catch (error) {
      console.error('Error generating summary:', error);
      return 'This cause aims to provide critical support and resources to communities in need, fostering hope and enabling sustainable change.';
    }
  },
  ['cause-summaries'],
  { revalidate: 3600 }
);
