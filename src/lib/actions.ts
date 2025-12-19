// src/lib/actions.ts
'use server';

import { summarizeCauseDetails } from '@/ai/flows/summarize-cause-details';
import { unstable_cache as cache } from 'next/cache';
import { Cause } from './types';
import { initializeFirebase } from '@/firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

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

export async function getAllCauses(): Promise<Cause[]> {
  const { firestore } = await initializeFirebase();
  const causesCollection = collection(firestore, 'causes');
  const snapshot = await getDocs(causesCollection);
  if (snapshot.empty) {
    return [];
  }
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Cause));
}

export async function getCauseById(id: string): Promise<Cause | undefined> {
  const { firestore } = await initializeFirebase();
  const causeDocRef = doc(firestore, 'causes', id);
  const snapshot = await getDoc(causeDocRef);
  if (!snapshot.exists()) {
    return undefined;
  }
  return { id: snapshot.id, ...snapshot.data() } as Cause;
}
