
"use client";

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export function FirebaseErrorListener() {
  const { toast } = useToast();

  useEffect(() => {
    const handleError = (error: Error) => {
      if (error instanceof FirestorePermissionError) {
        toast({
          variant: "destructive",
          title: "Permission Error",
          description: "You don't have permission to perform this action. Check Firestore rules.",
        });
        // We re-throw the error here so that Next.js can display its overlay in development
        if (process.env.NODE_ENV === 'development') {
           throw error;
        }
      } else {
         console.error("An unexpected error occurred:", error);
      }
    };

    errorEmitter.on('permission-error', handleError);

    return () => {
      errorEmitter.off('permission-error', handleError);
    };
  }, [toast]);

  return null; // This component does not render anything
}
