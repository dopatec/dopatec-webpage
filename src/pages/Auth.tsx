import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

// Authentication components for login and registration
export function Auth() {
  const { user, signIn, signUp, isLoading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // If user is already logged in, redirect to home page
  if (user && !isLoading) {
    return <Navigate to="/" />;
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      if (isLogin) {
        // Log in user
        await signIn(email, password);
      } else {
        // Register new user
        await signUp(email, password, fullName);
        setSuccess('Registration successful! Check your email for a verification link.');
        setIsLogin(true);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center pt-20 min-h-screen bg-dark">
      <div className="p-8 w-full max-w-md rounded-xl shadow-lg bg-dark-lighter">
        <h1 className="mb-6 text-3xl font-bold text-center text-primary">
          {isLogin ? 'Sign In' : 'Register'}
        </h1>

        {error && <div className="p-3 mb-4 text-red-200 rounded bg-red-900/50">{error}</div>}

        {success && (
          <div className="p-3 mb-4 text-green-200 rounded bg-green-900/50">{success}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="fullName" className="block mb-2 font-mono text-gray-300">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="px-4 py-2 w-full font-mono text-white rounded-lg border border-gray-700 bg-black/30 focus:border-primary focus:outline-none"
                required
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block mb-2 font-mono text-gray-300">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-4 py-2 w-full font-mono text-white rounded-lg border border-gray-700 bg-black/30 focus:border-primary focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 font-mono text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="px-4 py-2 w-full font-mono text-white rounded-lg border border-gray-700 bg-black/30 focus:border-primary focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 w-full font-mono text-black rounded bg-primary hover:bg-primary-light disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : isLogin ? 'Sign In' : 'Register'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-mono text-primary hover:underline"
          >
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
