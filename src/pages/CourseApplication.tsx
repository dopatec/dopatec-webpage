import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../data/courses';

const MEMBERSHIP_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd90WsNsKHNbxBCNe3speUkqxPhGenN4_DnE5Ik5hfy2TmAHg/viewform';

export function CourseApplication() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) return null;

  const handleApply = () => {
    window.open(MEMBERSHIP_FORM_URL, '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="card">
          <h1 className="heading-lg mb-6">{course.name}</h1>
          
          <div className="mb-8">
            <h2 className="heading-sm mb-4">Kursinformation</h2>
            <p className="text-body mb-4">{course.fullDescription}</p>
            <p className="text-body-bold">
              Pris: {course.price} kr
              <span className="text-primary ml-2">(Medlemsrabatt tillgänglig)</span>
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="heading-sm mb-4">Vad du kommer lära dig:</h3>
              <ul className="space-y-2">
                {course.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-body">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleApply}
              className="btn-primary w-full"
            >
              Ansök nu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}