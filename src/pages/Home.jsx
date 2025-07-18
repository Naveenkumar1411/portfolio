import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = ['React Native', 'JavaScript', 'React', 'HTML/CSS', 'Java', 'SQL'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <div className={`lg:w-1/2 mb-12 lg:mb-0 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
              <div className="mb-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Hi, I'm{' '}
                  <span className="gradient-text">Naveen Kumar P</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-600 mb-6">
                  React | React Native Developer
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  I am a React Native developer with 1.7 years of experience building mobile applications. 
                  My expertise lies in writing high-quality, reusable code and developing complex UI components efficiently.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="tel:+919629398197" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors">
                  <Phone size={18} />
                  <span>+91 9629398197</span>
                </a>
                <a href="mailto:naveenbe2023@gmail.com" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors">
                  <Mail size={18} />
                  <span>naveenbe2023@gmail.com</span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/projects" className="btn-primary flex items-center space-x-2">
                  <span>View My Work</span>
                  <ArrowRight size={18} />
                </Link>
                <a 
                  href="/Naveen Kumar.P-Resume.pdf" 
                  download
                  className="btn-secondary flex items-center space-x-2"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/naveen-kumar-p-43661a211" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="text-blue-600" size={24} />
                </a>
                <a 
                  href="https://github.com/Naveenkumar-1411" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Github className="text-gray-800" size={24} />
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className={`lg:w-1/2 flex justify-center ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full animate-float"></div>
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.jpeg"
                    alt="Naveen Kumar P"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h3>
            <p className="text-gray-600">Technologies I work with</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="text-4xl font-bold gradient-text mb-2">1.7+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold gradient-text mb-2">2+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;