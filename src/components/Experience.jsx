import React from 'react';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {experience.map((exp) => (
            <div 
              key={exp.id}
              className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-gray-800 dark:text-gray-200 font-semibold mb-1">
                    {exp.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    📍 {exp.location}
                  </p>
                  {exp.type && (
                    <span className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  )}
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                  <span className="inline-block bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold shadow">
                    {exp.duration}
                  </span>
                </div>
              </div>

              {exp.project && (
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Project:</p>
                  <p className="text-gray-700 dark:text-gray-300">{exp.project}</p>
                </div>
              )}

              {exp.focus && (
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Focus:</span> {exp.focus}
                  </p>
                </div>
              )}

              {(exp.advisors || exp.supervisors) && (
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-semibold">
                    {exp.advisors ? 'Advisors:' : 'Supervisors:'}
                  </span>{' '}
                  {(exp.advisors || exp.supervisors).join(', ')}
                </p>
              )}

              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Key Responsibilities & Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, index) => (
                    <li 
                      key={index}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">▪</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.impact && (
                <div className="mt-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-800 dark:text-green-400 mb-2">
                    Research Impact:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">{exp.impact}</p>
                </div>
              )}

              {exp.skills && (
                <div className="mt-4">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    Skills Developed:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
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

export default Experience;