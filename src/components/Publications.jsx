import React from 'react';
import { publications } from '../data/publications';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Publications & Presentations
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {pub.type}
                </span>
                {pub.status && (
                  <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                    {pub.status}
                  </span>
                )}
                {pub.date && (
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {pub.date}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {pub.title}
              </h3>

              {pub.authors && (
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-semibold">Authors:</span> {pub.authors.join(', ')}
                </p>
              )}

              {pub.institution && (
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Institution:</span> {pub.institution}
                </p>
              )}

              {pub.event && (
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Event:</span> {pub.event}
                </p>
              )}

              {pub.expectedDate && (
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Expected:</span> {pub.expectedDate}
                </p>
              )}

              {pub.description && (
                <p className="text-gray-700 dark:text-gray-300 mt-3 italic">
                  {pub.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;