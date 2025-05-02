import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// Hook för att använda autentiseringskontext
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth måste användas inom en AuthProvider');
  }
  return context;
}
