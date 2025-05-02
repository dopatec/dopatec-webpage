import React, { createContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

// Typer för användarroller
export type UserRole = 'admin' | 'user';

// Typ för användarprofil
export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  role: UserRole;
  avatar_url: string | null;
}

// Typ för autentiseringskontext
interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  isAdmin: boolean;
  isLoading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
}

// Skapa autentiseringskontext
export const AuthContext = createContext<AuthContextType | null>(null);

// Provider-komponent för autentiseringskontext
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Kontrollera om användaren är admin
  const isAdmin = profile?.role === 'admin';

  // Hämta användarprofil
  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();

      if (error) {
        console.error('Fel vid hämtning av profil:', error);
        return null;
      }

      return data as UserProfile;
    } catch (error: unknown) {
      console.error('Oväntat fel vid hämtning av profil:', error);
      return null;
    }
  };

  // Lyssna på autentiseringsändringar
  useEffect(() => {
    setIsLoading(true);

    // Hämta aktuell session
    const getInitialSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.user) {
          setUser(session.user);
          const userProfile = await fetchProfile(session.user.id);
          setProfile(userProfile);
        }
      } catch (error: unknown) {
        console.error('Fel vid hämtning av session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getInitialSession();

    // Prenumerera på autentiseringsändringar
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setUser(session.user);
        const userProfile = await fetchProfile(session.user.id);
        setProfile(userProfile);
      } else {
        setUser(null);
        setProfile(null);
      }
      setIsLoading(false);
    });

    // Avsluta prenumeration när komponenten avmonteras
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Registrera ny användare
  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        throw error;
      }

      // Användaren har registrerats, men måste bekräfta e-post
      console.log('Användare registrerad, bekräfta e-post:', data);
    } catch (error: unknown) {
      console.error('Fel vid registrering:', error);
      throw error;
    }
  };

  // Logga in användare
  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      // Användaren har loggat in
      console.log('Användare inloggad:', data);
    } catch (error: unknown) {
      console.error('Fel vid inloggning:', error);
      throw error;
    }
  };

  // Logga ut användare
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      // Användaren har loggat ut
      console.log('Användare utloggad');
    } catch (error: unknown) {
      console.error('Fel vid utloggning:', error);
      throw error;
    }
  };

  // Uppdatera användarprofil
  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user) {
      throw new Error('Ingen användare inloggad');
    }

    try {
      const { error } = await supabase.from('profiles').update(data).eq('id', user.id);

      if (error) {
        throw error;
      }

      // Uppdatera lokal profil
      setProfile(prev => (prev ? { ...prev, ...data } : null));
    } catch (error: unknown) {
      console.error('Fel vid uppdatering av profil:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isAdmin,
        isLoading,
        signUp,
        signIn,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook för att använda autentiseringskontext
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth måste användas inom en AuthProvider');
  }
  return context;
};
