import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState('');

  const onSubmit = async (data: any) => {
    try {
      setAuthError('');
      await signUp(data.email, data.password, {
        displayName: data.name,
        memberType: data.memberType,
        personalInfo: {
          address: data.address,
          city: data.city,
          dateOfBirth: data.dateOfBirth,
          areaOfInterest: data.areaOfInterest
        }
      });
      navigate('/dashboard');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setAuthError('En användare med denna e-postadress finns redan. Vänligen logga in eller använd en annan e-postadress.');
      } else {
        setAuthError('Ett fel uppstod vid registrering. Vänligen försök igen.');
      }
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Skapa ett nytt konto
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {authError && (
            <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
              {authError}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Namn
              </label>
              <div className="mt-1">
                <input
                  {...register('name', { required: true })}
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.name && <span className="text-red-500 text-sm">Detta fält är obligatoriskt</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-postadress
              </label>
              <div className="mt-1">
                <input
                  {...register('email', { 
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Ogiltig e-postadress"
                    }
                  })}
                  type="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.type === 'pattern' ? 'Ogiltig e-postadress' : 'Detta fält är obligatoriskt'}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Lösenord
              </label>
              <div className="mt-1">
                <input
                  {...register('password', { 
                    required: true, 
                    minLength: { 
                      value: 6,
                      message: "Lösenordet måste vara minst 6 tecken"
                    }
                  })}
                  type="password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message || 'Detta fält är obligatoriskt'}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Medlemstyp
              </label>
              <div className="mt-1">
                <select
                  {...register('memberType', { required: true })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="paid">Betalande medlem</option>
                  <option value="support">Stödmedlem</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Adress
              </label>
              <div className="mt-1">
                <input
                  {...register('address', { required: true })}
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.address && <span className="text-red-500 text-sm">Detta fält är obligatoriskt</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Stad
              </label>
              <div className="mt-1">
                <input
                  {...register('city', { required: true })}
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.city && <span className="text-red-500 text-sm">Detta fält är obligatoriskt</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Födelsedatum
              </label>
              <div className="mt-1">
                <input
                  {...register('dateOfBirth', { required: true })}
                  type="date"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.dateOfBirth && <span className="text-red-500 text-sm">Detta fält är obligatoriskt</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Intresseområde inom cybersäkerhet
              </label>
              <div className="mt-1">
                <input
                  {...register('areaOfInterest', { required: true })}
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.areaOfInterest && <span className="text-red-500 text-sm">Detta fält är obligatoriskt</span>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Registrera
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Har du redan ett konto?{' '}
                  <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                    Logga in här
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