import React from 'react';

const Projects = () => {
  // You can add projects data later if needed
  const projects = [
    {
      id: 1,
      title: "ML-Based PV Defect Detection",
      description: "Deep learning framework using CNNs for automated thermal anomaly detection in photovoltaic modules using infrared thermography",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
      status: "In Progress"
    },
    {
      id: 2,
      title: "Fluidized Bed Characterization",
      description: "Experimental and computational analysis of multiphase flow dynamics in bubbling fluidized bed reactors",
      technologies: ["Python", "SciPy", "Pandas", "FFT Analysis", "FIJI"],
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                    : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;