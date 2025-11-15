import React from 'react';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;