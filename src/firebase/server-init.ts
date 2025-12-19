// src/firebase/server-init.ts
import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOgag8oO-USYoMBVzlhJMrbepn493c_-c",
  authDomain: "gen-lang-client-0845556068.firebaseapp.com",
  projectId: "gen-lang-client-0845556068",
  storageBucket: "gen-lang-client-0845556068.firebasestorage.app",
  messagingSenderId: "255950860091",
  appId: "1:255950860091:web:5aebe195c04b06ee5fd11e",
  measurementId: "G-B5C75MBTCJ"
};

// This function initializes and returns the Firestore database instance for server-side use.
export function getFirestoreDB() {
  if (!getApps().length) {
    // If you have service account credentials, you would initialize with them here:
    // initializeApp({
    //   credential: cert(serviceAccount)
    // });
    // For this environment, we can initialize with the project ID.
    initializeApp({
        projectId: firebaseConfig.projectId,
    });
  }
  return getFirestore();
}
