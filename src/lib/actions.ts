
'use server';

import { summarizeCauseDetails } from '@/ai/flows/summarize-cause-details';
import { unstable_cache as cache } from 'next/cache';
import { Cause } from './types';
import { adminDb } from '@/firebase/server-init';

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

export async function getAllCauses(): Promise<Cause[]> {
  const causesCollection = adminDb.collection('causes');
  const snapshot = await causesCollection.get();
  if (snapshot.empty) {
    return [];
  }
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Cause));
}

export async function getCauseById(id: string): Promise<Cause | undefined> {
  const causeDocRef = adminDb.collection('causes').doc(id);
  const snapshot = await causeDocRef.get();
  if (!snapshot.exists) {
    return undefined;
  }
  return { id: snapshot.id, ...snapshot.data() } as Cause;
}
