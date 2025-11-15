import React from 'react';
import { education } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu) => (
            <div 
              key={edu.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.location}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-full text-sm font-medium">
                    {edu.duration}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <span className="font-semibold">Specialization:</span> {edu.specialization}
              </p>

              {edu.thesis && (
                <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Thesis:</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{edu.thesis.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Advisors:</span> {edu.thesis.advisors.join(', ')}
                  </p>
                </div>
              )}

              {edu.advisor && !edu.thesis && (
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-semibold">Advisor:</span> {edu.advisor}
                </p>
              )}

              {edu.coursework && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Key Coursework:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {edu.coursework.map((course, index) => (
                      <div 
                        key={index}
                        className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 flex-1">
                            {course.name}
                          </h5>
                          <span className="ml-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                            {course.grade}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {course.topics}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;