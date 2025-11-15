import React from 'react';
import { teaching } from '../data/teaching';

const Teaching = () => {
  return (
    <section id="teaching" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Teaching Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {teaching.map((exp) => (
            <div 
              key={exp.id}
              className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-gray-800 dark:text-gray-200 font-semibold mb-1">
                    {exp.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    📍 {exp.location}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium">
                    {exp.duration}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-semibold">Subjects:</span> {exp.subjects.join(', ')}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Level:</span> {exp.level}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, index) => (
                    <li 
                      key={index}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-purple-600 dark:text-purple-400 mr-3 mt-1">▪</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teaching;