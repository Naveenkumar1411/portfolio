import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email service or backend API
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9629398197",
      link: "tel:+919629398197",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "naveenbe2023@gmail.com",
      link: "mailto:naveenbe2023@gmail.com",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Namakkal, Tamil Nadu, India",
      link: "#",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/naveen-kumar-p-43661a211",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com",
      color: "hover:text-gray-800"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/919629398197",
      color: "hover:text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`card text-center group cursor-pointer ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a href={info.link} className="block">
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600 group-hover:text-indigo-600 transition-colors">{info.value}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2 py-4"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className={`${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
              
              <div className="space-y-6 mb-8">
                <p className="text-gray-600 leading-relaxed">
                  I'm currently working as a React Native Developer at Maaya Software Solutions Pvt. Ltd. 
                  in Namakkal, where I focus on creating efficient mobile applications and user-friendly interfaces.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                  I'd love to hear from you. I typically respond within 24 hours.
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What I Can Help With:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>React Native Mobile App Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>React Web Application Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>UI/UX Implementation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>API Integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Code Review & Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-100 rounded-full transition-all duration-300 hover:bg-gray-200 hover:scale-110 ${social.color}`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and turn them into amazing mobile applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919629398197" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <a 
                href="mailto:naveenbe2023@gmail.com" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;