import React, { useEffect, useState } from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const education = [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
      institution: "M. Kumarasamy College of Engineering",
      period: "2019 - 2023",
      icon: GraduationCap
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Kamarajar Higher Secondary School",
      period: "2017 - 2019",
      icon: GraduationCap
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Kamarajar Matriculation School",
      period: "2016 - 2017",
      icon: GraduationCap
    }
  ];

  const certifications = [
    {
      title: "PEGA Certified Senior System Architect (Version: 8.7)",
      icon: Award
    },
    {
      title: "Udemy Certified React Developer",
      icon: Award
    }
  ];

  const experience = {
    position: "React Native Developer",
    company: "Maaya Software Solutions Pvt. Ltd., Namakkal",
    duration: "1.7 years of experience",
    description: "Developing mobile applications using React Native with focus on high-quality, reusable code and complex UI components."
  };

  const skills = {
    frontend: ['React', 'React Native', 'JavaScript', 'HTML', 'CSS'],
    backend: ['Java', 'SQL'],
    tools: ['Git', 'RESTful APIs']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I am a React Native developer with 1.7 years of experience building mobile applications. 
              My expertise lies in writing high-quality, reusable code and developing complex UI components efficiently. 
              I have a strong foundation in web development and a passion for creating user-friendly mobile applications 
              that deliver an exceptional user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h2>
            <div className="card max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.position}</h3>
                  <p className="text-indigo-600 font-semibold mb-2">{experience.company}</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{experience.duration}</span>
                  </div>
                  <p className="text-gray-600">{experience.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
                <div className="space-y-2">
                  {skills.frontend.map((skill, index) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
                <div className="space-y-2">
                  {skills.backend.map((skill, index) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Platforms</h3>
                <div className="space-y-2">
                  {skills.tools.map((skill, index) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <div key={index} className="card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <edu.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-indigo-600 font-semibold mb-2">{edu.institution}</p>
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div key={index} className="card">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <cert.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;