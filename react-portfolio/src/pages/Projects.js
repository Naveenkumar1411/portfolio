import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Smartphone, Database } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Star Pumps and Pipes",
      period: "Jan 2024 - Present",
      description: "A mobile application developed using React Native as part of an ERP system to help Sales Executives manage their daily tasks efficiently. The app streamlines workflow, improves task management, and enhances productivity for executives.",
      technologies: ["React Native", "JavaScript", "RESTful APIs", "ERP Integration"],
      features: [
        "Task management for sales executives",
        "Workflow optimization",
        "Real-time data synchronization",
        "User-friendly interface",
        "Performance analytics"
      ],
      icon: Smartphone,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "PoultryCare",
      period: "Oct 2024 - Present",
      description: "A mobile app for poultry farm staff to track feed, bird weight, and medications, improving accuracy and operational productivity.",
      technologies: ["React Native", "JavaScript", "Database Management", "Data Analytics"],
      features: [
        "Feed tracking system",
        "Bird weight monitoring",
        "Medication management",
        "Data analytics dashboard",
        "Operational efficiency tools"
      ],
      icon: Database,
      color: "from-green-500 to-teal-600"
    }
  ];

  const responsibilities = [
    "Develop application features to enhance user experience",
    "Write reusable, scalable code for future use",
    "Collaborate with backend developers to design and integrate RESTful APIs",
    "Perform testing and debugging to ensure usability and fix issues",
    "Oversee the development and maintenance of user interfaces",
    "Implement secure authentication and authorization mechanisms",
    "Continuously integrate new features and enhancements to improve functionality"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : ''}`} style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
              Here are some of the mobile applications I've developed using React Native, 
              focusing on creating efficient and user-friendly solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${isVisible ? 'animate-fadeInUp' : ''}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.8s ease-out ${index * 0.2}s`
                }}
              >
                <div className="card max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Project Info */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}>
                          <project.icon className="text-white" size={32} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                          <div className="flex items-center text-gray-600 mt-1">
                            <Calendar size={16} style={{ marginRight: '8px' }} />
                            <span>{project.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600" style={{ lineHeight: '1.7' }}>{project.description}</p>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <button className="btn-primary">
                          <ExternalLink size={18} />
                          <span>View Demo</span>
                        </button>
                        <button className="btn-secondary">
                          <Github size={18} />
                          <span>Source Code</span>
                        </button>
                      </div>
                    </div>

                    {/* Project Features */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold text-gray-900">Key Features</h4>
                      <div className="space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2" style={{ flexShrink: 0 }}></div>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Mock Phone Display */}
                      <div className="mt-8">
                        <div className="w-48 h-96 bg-gray-900 rounded-3xl p-2 mx-auto">
                          <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center">
                            <div className="text-white text-center">
                              <Smartphone size={48} style={{ margin: '0 auto 16px' }} />
                              <p className="text-sm font-medium">{project.title}</p>
                              <p className="text-xs" style={{ opacity: 0.75 }}>Mobile App</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`mb-12 ${isVisible ? 'animate-fadeInUp' : ''}`} style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Responsibilities</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className={`card ${isVisible ? 'animate-fadeInUp' : ''}`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                      transition: `all 0.8s ease-out ${index * 0.1}s`
                    }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mt-1" style={{ flexShrink: 0 }}>
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700" style={{ lineHeight: '1.7' }}>{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className={`${isVisible ? 'animate-fadeInUp' : ''}`} style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}>
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(238, 242, 255, 1)' }}>
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <a href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2">
              <Users size={20} />
              <span>Let's Connect</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;