
import { initializeApp, getApps, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const adminApp = !getApps().length ? initializeApp() : getApp();
const adminDb = getFirestore(adminApp);

export { adminDb };
