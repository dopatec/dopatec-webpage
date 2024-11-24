import React, { createContext, useCallback, useState } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import type { User } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signUp: (email: string, password: string, userData: Partial<User>) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  clearError: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          if (userDoc.exists()) {
            setUser({ ...userDoc.data() as User, uid: firebaseUser.uid });
          }
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error('Auth state change error:', err);
        setError('Unable to fetch user data. Please check your connection.');
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const signUp = useCallback(async (email: string, password: string, userData: Partial<User>) => {
    try {
      setError(null);
      setLoading(true);
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', firebaseUser.uid), {
        ...userData,
        uid: firebaseUser.uid,
        email,
        courses: { applied: [], completed: [] }
      });
    } catch (err: any) {
      console.error('Sign up error:', err);
      setError(err.message || 'Failed to create account');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      console.error('Sign in error:', err);
      setError(err.message || 'Failed to sign in');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      await firebaseSignOut(auth);
      setUser(null);
    } catch (err: any) {
      console.error('Sign out error:', err);
      setError(err.message || 'Failed to sign out');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value = {
    user,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}