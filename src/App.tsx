import React, { useEffect, useState } from 'react';
import { Code2, Globe2, Server, Linkedin, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Github, ChevronDown } from 'lucide-react';
import Logo_Altlab2 from './logo2';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollIndicator = document.getElementById('scroll-indicator');
      if (scrollIndicator) {
        scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '1';
      }
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#eceae5]">
      {/* Header/Hero Section */}
      <header className="relative h-screen flex flex-col">
        <nav className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${scrolled ? 'bg-gradient-to-b from-[#3e7c95]/85 to-[#3e7c95]/65 backdrop-blur-sm' : 'bg-gradient-to-b from-[#3e7c95]/85 to-transparent'}`}>
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold flex items-center gap-2 text-white">
                <Logo_Altlab2 size={50} className={`transition-transform duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`} />
                <span className={`transition-opacity duration-300 ${scrolled ? 'opacity-90' : 'opacity-100'}`}>Altlab.io</span>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </nav>

        <div className="flex-1 relative">
          {/* Background Video */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3e7c95]/90 to-[#3e7c95]/70 z-10"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
            >
              <source
                src="https://cdn.coverr.co/videos/coverr-typing-on-computer-keyboard-2684/1080p.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
                  Innovate.<br />
                  Transform.<br />
                  Succeed.
                </h1>
                <p className="text-xl text-[#95b3bd] mb-8 max-w-2xl">
                  We turn complex challenges into elegant digital solutions that drive your business forward.
                </p>
                <button
                  onClick={scrollToServices}
                  className="bg-white text-[#3e7c95] px-8 py-4 rounded-lg font-semibold hover:bg-[#95b3bd] hover:text-white transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#3e7c95]"
                  aria-label="Learn more about our services"
                >
                  Discover Our Solutions
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            id="scroll-indicator"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce cursor-pointer z-20"
            onClick={scrollToServices}
            role="button"
            aria-label="Scroll to services section"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#95b3bd]/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#3e7c95]">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800&h=600"
                  alt="Custom software development showing modern code editor with programming interfaces"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Code2 className="absolute bottom-4 left-4 h-10 w-10 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#3e7c95]">Custom Software Development</h3>
                <p className="text-[#5b8ea2]">Tailored solutions designed to meet your specific business needs and challenges.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800&h=600"
                  alt="IT consulting showing business professionals analyzing digital transformation strategy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Server className="absolute bottom-4 left-4 h-10 w-10 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#3e7c95]">IT Consulting</h3>
                <p className="text-[#5b8ea2]">Expert guidance to help you make informed technology decisions and optimize your IT infrastructure.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800&h=600"
                  alt="Web hosting and management showing modern server infrastructure and cloud technology"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Globe2 className="absolute bottom-4 left-4 h-10 w-10 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#3e7c95]">Web Hosting & Management</h3>
                <p className="text-[#5b8ea2]">Reliable hosting solutions and comprehensive management services for your web applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#3e7c95]">Meet The Founders</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="relative inline-block transition-transform duration-300 group-hover:scale-105">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#3e7c95] to-[#78a1b0] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-black/10 rounded-full backdrop-blur-[2px]"></div>
                  <img
                    src="image/julian.jpg"
                    alt="Julian"
                    className="relative w-40 h-40 rounded-full mx-auto mb-4 object-cover ring-4 ring-white shadow-xl transform transition-all duration-300"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#3e7c95]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#3e7c95]">Julian</h3>
              <p className="text-[#5b8ea2] mb-3">Founder - Business Strategy</p>
              <a
                href="https://www.linkedin.com/in/julian-azwar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#3e7c95] hover:text-[#5b8ea2] transition-colors group-hover:scale-105 transform duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
            <div className="text-center group">
              <div className="relative inline-block transition-transform duration-300 group-hover:scale-105">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#78a1b0] to-[#3e7c95] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-black/10 rounded-full backdrop-blur-[2px]"></div>
                  <img
                    src="image/mike.jpg"
                    alt="Mike"
                    className="relative w-40 h-40 rounded-full mx-auto mb-4 object-cover ring-4 ring-white shadow-xl transform transition-all duration-300"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#3e7c95]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#3e7c95]">Mike</h3>
              <p className="text-[#5b8ea2] mb-3">Founder - Technical Lead</p>
              <a
                href="https://www.linkedin.com/in/mike-veilleux-54052610/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#3e7c95] hover:text-[#5b8ea2] transition-colors group-hover:scale-105 transform duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#95b3bd]/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#3e7c95]">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-[#3e7c95]">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#5b8ea2]">
                    <div className="bg-[#95b3bd]/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>2/F., Tern Centre, Tower 1, 237 Queen's Road Central, Hong Kong</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#5b8ea2]">
                    <div className="bg-[#95b3bd]/10 p-3 rounded-full">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p>+852 3703 8500</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#5b8ea2]">
                    <div className="bg-[#95b3bd]/10 p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>contact@altlab.io</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#3e7c95] p-8 rounded-lg shadow-lg text-white text-center">
                <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business?</h3>
                <p className="mb-6 text-[#95b3bd]">Let's discuss how we can help you achieve your digital goals.</p>
                <a
                  href="https://calendly.com/julian-altlab/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#3e7c95] px-6 py-3 rounded-lg font-semibold hover:bg-[#95b3bd] hover:text-white transition-colors"
                >
                  Schedule a Meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3e7c95] text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Logo_Altlab2 size={40} />
                <span className="text-xl font-bold">Altlab.io</span>
              </div>
              <p className="text-[#95b3bd] mb-6">
                Transforming businesses through innovative software solutions and expert consulting.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#95b3bd] transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-[#95b3bd] transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-[#95b3bd] transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-[#95b3bd] transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">Services</a>
                </li>
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">Blog</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">Custom Development</a>
                </li>
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">IT Consulting</a>
                </li>
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">Web Hosting</a>
                </li>
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">Cloud Solutions</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#95b3bd]/20 mt-8 pt-8 text-center text-[#95b3bd]">
            <p>© 2025 Altlab.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;