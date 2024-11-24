import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { courses } from '../data/courses';
import { AlertCircle } from 'lucide-react';

export function Dashboard() {
  const { user, loading, error } = useAuth();

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Laddar din profil...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 p-4 rounded-lg max-w-md w-full">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
            <h3 className="text-sm font-medium text-red-800">Anslutningsfel</h3>
          </div>
          <div className="mt-2 text-sm text-red-700">
            {error}
          </div>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Försök igen
          </button>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const appliedCourses = courses.filter(course => 
    user.courses.applied.includes(course.id)
  );

  const completedCourses = courses.filter(course => 
    user.courses.completed.includes(course.id)
  );

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Medlemsprofil</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Personlig Information</h3>
              <div className="space-y-2 text-gray-600">
                <p>Namn: {user.displayName}</p>
                <p>E-post: {user.email}</p>
                <p>Adress: {user.personalInfo.address}</p>
                <p>Stad: {user.personalInfo.city}</p>
                <p>Födelsedatum: {user.personalInfo.dateOfBirth}</p>
                <p>Intresseområde: {user.personalInfo.areaOfInterest}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Medlemsstatus</h3>
              <p className="text-gray-600">
                {user.memberType === 'paid' ? 'Betalande medlem' : 'Stödmedlem'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Pågående Kurser</h2>
            {appliedCourses.length > 0 ? (
              <ul className="space-y-4">
                {appliedCourses.map(course => (
                  <li key={course.id} className="border-b pb-4 last:border-b-0">
                    <h3 className="font-semibold">{course.name}</h3>
                    <p className="text-gray-600">{course.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">Inga pågående kurser</p>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Avslutade Kurser</h2>
            {completedCourses.length > 0 ? (
              <ul className="space-y-4">
                {completedCourses.map(course => (
                  <li key={course.id} className="border-b pb-4 last:border-b-0">
                    <h3 className="font-semibold">{course.name}</h3>
                    <p className="text-gray-600">{course.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">Inga avslutade kurser</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}