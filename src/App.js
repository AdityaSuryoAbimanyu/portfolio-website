import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, MapPin, Award, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Cartographic Map Production",
      description: "Pembuatan peta tematik profesional menggunakan ArcGIS Pro dengan standar kartografi, meliputi layout design, simbolisasi, dan visualisasi data spasial",
      tech: ["ArcGIS Pro", "Cartography", "Layout Design", "Map Visualization"],
      image: "/images/Peta.jpg"
    },
    {
      title: "Land Boundary Survey & Cadastral Mapping",
      description: "Pengukuran dan pengambilan koordinat batas desa menggunakan Total Station dan GNSS RTK untuk pembuatan peta kadaster dan administrasi pertanahan",
      tech: ["Total Station", "GNSS RTK", "Cadastral Survey", "Boundary Mapping"],
      image: "/images/ngukur.jpg"
    },
    {
      title: "Aerial Survey & Drone Mapping",
      description: "Melakukan pemetaan udara menggunakan drone untuk survei topografi dan pengumpulan data geospasial dengan akurasi tinggi",
      tech: ["DJI Phantom", "Pix4D", "Aerial Photography", "Photogrammetry"],
      image: "/images/drone.jpg"
    },
  ];

  const skills = [
    { 
      name: "Geospatial Technology", 
      icon: Code, 
      items: ["ArcGIS Pro", "QGIS", "Google Earth Engine", "PostGIS"] 
    },
    { 
      name: "Remote Sensing & Drone", 
      icon: Smartphone, 
      items: ["Drone Piloting", "Aerial Survey", "Pix4D Mapper", "Image Processing"] 
    },
    { 
      name: "Field Survey & Analysis", 
      icon: Palette, 
      items: ["GNSS/GPS", "Total Station", "Geodetic Control", "Spatial Analysis"] 
    }
  ];

  const stats = [
    { icon: Briefcase, label: "Projects Completed", value: "15+" },
    { icon: Award, label: "Certifications", value: "5+" },
    { icon: MapPin, label: "Field Surveys", value: "20+" }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-lg z-50 border-b border-purple-500/30 shadow-lg shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              My Portfolio
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-all duration-300 font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-all duration-300 font-medium">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition-all duration-300 font-medium">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-purple-400 transition-all duration-300 font-medium">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-all duration-300 font-medium">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden hover:text-purple-400 transition">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4 pb-4 animate-fadeIn">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-purple-400 transition py-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-purple-400 transition py-2">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-purple-400 transition py-2">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-purple-400 transition py-2">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-purple-400 transition py-2">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full mb-8 shadow-2xl shadow-purple-500/50 hover:scale-105 transition-transform duration-300 overflow-hidden border-4 border-purple-500/50 hover:border-purple-400">
              <img src="/images/Profil.jpg" alt="Aditya Suryo Abimanyu" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-fadeIn">
            Aditya Suryo Abimanyu
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            <span className="text-purple-400 font-semibold">GIS Specialist</span> | <span className="text-pink-400 font-semibold">Drone Pilot</span> | <span className="text-purple-400 font-semibold">Geospatial Analyst</span>
          </p>

          <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
            Mahasiswa D4 Sistem Informasi Geografis di Universitas Gadjah Mada dengan spesialisasi dalam 
            teknologi drone dan aerial survey. Berpengalaman dalam pemetaan udara, survei lapangan GNSS, 
            serta pengolahan dan analisis data geospasial dengan standar profesional.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105">
              View My Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="border-2 border-purple-500 hover:bg-purple-500/20 px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>
          
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-purple-500/30 shadow-2xl shadow-purple-500/10 hover:border-purple-500/50 transition-all duration-300">
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Saya adalah mahasiswa Sistem Informasi Geografis di Universitas Gadjah Mada dengan spesialisasi dalam 
              teknologi drone dan aerial survey. Memiliki pengalaman sebagai drone pilot untuk pemetaan udara, 
              pengolahan data geospasial, dan survei lapangan menggunakan GNSS. Aktif dalam berbagai praktikum 
              lapangan dan organisasi untuk mengembangkan kemampuan teknis dan soft skills.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Dengan pengalaman praktikum lapangan yang ekstensif, saya menguasai berbagai teknologi geospasial 
              mulai dari akuisisi data menggunakan drone, pengolahan citra udara, survei geodetik, hingga analisis 
              spasial. Saya berkomitmen untuk menghasilkan data berkualitas tinggi dengan standar profesional dan 
              terus belajar mengadopsi teknologi terbaru dalam bidang geospasial.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                <div className="h-56 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center justify-between text-white">
                    {project.title}
                    <ExternalLink size={20} className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition">
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

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 group">
                  <Icon className="w-14 h-14 text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-6 text-white">{skill.name}</h3>
                  <ul className="space-y-3">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-center group-hover:text-gray-300 transition">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:w-3 group-hover:h-3 transition-all"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-slate-900/30 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          
          <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
            Saya terbuka untuk diskusi project geospasial, kesempatan kolaborasi, atau peluang magang. 
            Jangan ragu untuk menghubungi saya!
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/AdityaSuryoAbimanyu" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 border border-purple-500/30 hover:border-purple-500 hover:scale-110 shadow-lg hover:shadow-purple-500/50">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/adityasuryoabimanyu/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 border border-purple-500/30 hover:border-purple-500 hover:scale-110 shadow-lg hover:shadow-purple-500/50">
              <Linkedin size={24} />
            </a>
            <a href="mailto:adityasuryoabimanyu@mail.ugm.ac.id" className="w-16 h-16 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 border border-purple-500/30 hover:border-purple-500 hover:scale-110 shadow-lg hover:shadow-purple-500/50">
              <Mail size={24} />
            </a>
          </div>
          <a href="mailto:adityasuryoabimanyu@mail.ugm.ac.id" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105">
            Send Me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/30 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="text-sm">© 2024 Aditya Suryo Abimanyu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}