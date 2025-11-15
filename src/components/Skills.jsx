import React from 'react';
import { skills } from '../data/Skills';

const Skills = () => {
  const renderSkillCategory = (categoryData, title) => {
    if (!categoryData) return null;

    return (
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          {title}
        </h3>
        
        {Array.isArray(categoryData.skills) ? (
          categoryData.skills[0]?.name ? (
            // Programming skills with proficiency bars
            <div className="space-y-4">
              {categoryData.skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </h4>
                    {skill.proficiency && (
                      <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                        {skill.proficiency}%
                      </span>
                    )}
                  </div>
                  {skill.proficiency && (
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  )}
                  {skill.libraries && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {skill.libraries.map((lib, idx) => (
                        <span 
                          key={idx}
                          className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-xs"
                        >
                          {lib}
                        </span>
                      ))}
                    </div>
                  )}
                  {skill.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  )}
                  {skill.expertise && (
                    <ul className="mt-2 space-y-1">
                      {skill.expertise.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // Simple list of skills
            <div className="grid md:grid-cols-2 gap-3">
              {categoryData.skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <p className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          )
        ) : null}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Technical Skills
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8">
            {renderSkillCategory(skills.programmingAndComputational, "Programming & Computational Tools")}
            {renderSkillCategory(skills.machineLearning, "Deep Learning & Machine Learning")}
            {renderSkillCategory(skills.cfdAndThermal, "Computational Fluid Dynamics & Thermal Analysis")}
            {renderSkillCategory(skills.experimental, "Experimental Techniques")}
            {renderSkillCategory(skills.dataScience, "Data Science & Analysis")}
            {renderSkillCategory(skills.domainExpertise, "Domain Expertise")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;