import React from 'react';
import { courses } from '../data/courses';

const COURSE_FORM_URL = 'https://docs.google.com/forms/d/1sEmjiNj5Jp4QWIv3DzrBzWhXFx-ahIX5Vw_0QmiZA4M/edit';

export function Courses() {
  const handleCourseClick = () => {
    window.open(COURSE_FORM_URL, '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Kurser</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI Klubben erbjuder en rad olika kurser för att göra AI-teknologin tillgänglig och förståelig för alla, oavsett erfarenhetsnivå. Våra kurser leds av experter inom AI och maskininlärning, och de är utformade för att ge deltagarna praktiska verktyg för att använda AI i sitt arbete och vardagsliv.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-dark-lighter rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-3">{course.name}</h2>
                <p className="text-gray-300 mb-4">{course.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Längd</h3>
                    <p className="text-gray-300">{course.duration}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Priser</h3>
                    <div className="space-y-1">
                      <p className="text-gray-300">
                        Privatperson: <span className="font-bold text-accent">{course.price.regular} kr</span>
                      </p>
                      <p className="text-gray-300">
                        Medlem: <span className="font-bold text-primary">{course.price.member} kr</span>
                      </p>
                      <p className="text-gray-300">
                        Företag/Grupp: <span className="font-bold text-accent">{course.price.group} kr</span>
                      </p>
                      <p className="text-gray-300">
                        Medlemsföretag: <span className="font-bold text-primary">{course.price.groupMember} kr</span>
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCourseClick}
                  className="w-full bg-accent hover:bg-accent-light text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Boka
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}