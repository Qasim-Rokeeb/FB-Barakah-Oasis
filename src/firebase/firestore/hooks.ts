
'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  onSnapshot,
  collection,
  doc,
  query,
  where,
  orderBy,
  limit,
  startAt,
  endAt,
  type DocumentData,
  type Query,
  type DocumentReference,
} from 'firebase/firestore';
import { useFirestore } from '@/firebase/provider';

// A utility hook to memoize Firebase queries and references.
export const useMemoFirebase = <T>(
  factory: () => T,
  deps: React.DependencyList
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(factory, deps);
};

export function useDoc<T>(ref: DocumentReference<T> | null) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!ref) {
      setData(null);
      setIsLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        setData((snapshot.data() as T) ?? null);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching document:", error);
        setData(null);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [ref]);

  return { data, isLoading };
}

export function useCollection<T>(query: Query<T> | null) {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setData(null);
      setIsLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      query,
      (snapshot) => {
        const result: T[] = [];
        snapshot.forEach((doc) => result.push({ ...doc.data(), id: doc.id }));
        setData(result);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching collection:", error);
        setData(null);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [query]);

  return { data, isLoading };
}
