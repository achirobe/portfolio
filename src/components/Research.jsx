import React from 'react';
import { experience } from '../data/experience';
import { researchInterests } from '../data/researchInterests';
import { awards } from '../data/awards';

const Research = () => {
  const researchExperience = experience.filter(exp => exp.type === 'Research');

  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Research
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Research Interests */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 text-center">
              Research Interests
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {researchInterests.map((interest) => (
                <div 
                  key={interest.id}
                  className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-indigo-600"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Experience */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 text-center">
              Research Experience
            </h3>
            <div className="space-y-6">
              {researchExperience.map((exp) => (
                <div 
                  key={exp.id}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.position}
                      </h4>
                      <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                        {exp.organization}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        📍 {exp.location}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-full text-sm font-medium">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {exp.project && (
                    <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Project:</p>
                      <p className="text-gray-700 dark:text-gray-300">{exp.project}</p>
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

                  {exp.impact && (
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mb-4">
                      <p className="font-semibold text-green-800 dark:text-green-400 mb-2">
                        Research Impact:
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">{exp.impact}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 text-center">
              Honors & Awards
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award) => (
                <div 
                  key={award.id}
                  className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-lg border-t-4 border-yellow-500"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white flex-1">
                      {award.title}
                    </h4>
                    <span className="ml-2 text-2xl">🏆</span>
                  </div>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                    {award.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {award.year}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;