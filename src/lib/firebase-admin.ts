import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

function initializeFirebase() {
  try {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
    };

    // Check if Firebase is already initialized
    if (!getApps().length) {
      return initializeApp(firebaseConfig);
    }

    return getApp();
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    throw new Error('Failed to initialize Firebase. Please check your configuration.');
  }
}

const app = initializeFirebase();
export const auth = getAuth(app);
export const db = getFirestore(app);