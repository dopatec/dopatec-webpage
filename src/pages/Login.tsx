import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      await signIn(data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Logga in på ditt konto
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-postadress
              </label>
              <div className="mt-1">
                <input
                  {...register('email', { required: true })}
                  type="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.email && <span className="text-red-500 text-sm">Detta fält är obligatoriskt</span>}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Lösenord
              </label>
              <div className="mt-1">
                <input
                  {...register('password', { required: true })}
                  type="password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.password && <span className="text-red-500 text-sm">Detta fält är obligatoriskt</span>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Logga in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Har du inget konto?{' '}
                  <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                    Registrera dig här
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}