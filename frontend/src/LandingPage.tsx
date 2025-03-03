import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Droplets, Sun, Syringe, Wand, User, Pill, HeartPulse, CalendarCheck, Microscope, Feather, Thermometer, SprayCan, Plus, Heart, Activity, ArrowRight, Clock, Menu, Star, UserPlus, Users, X } from "lucide-react";

import AuthModal from './components/authModal';
import AppointmentModal from './components/AppointmentModal';
import ContactSection from './components/contacts';

const LandingPage: React.FC = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const services = [
    { icon: <Droplets className="h-12 w-12 text-rose-600" />, title: "Fungal Infection Treatment", description: "Effective treatments to eliminate fungal infections and restore skin health." },
    { icon: <Scissors className="h-12 w-12 text-rose-600" />, title: "Keloid Removal", description: "Safe and precise removal of keloids for smoother skin." },
    { icon: <Feather className="h-12 w-12 text-rose-600" />, title: "Skin Tag Removal", description: "Quick and painless removal of skin tags." },
    { icon: <Scissors className="h-12 w-12 text-rose-600" />, title: "Mole Removal", description: "Expert mole removal with minimal scarring." },
    { icon: <Wand className="h-12 w-12 text-rose-600" />, title: "Micro Needling", description: "Stimulates collagen production for youthful skin." },
    { icon: <User className="h-12 w-12 text-rose-600" />, title: "Hair Loss/Alopecia Treatment", description: "Advanced therapies to promote hair regrowth." },
    { icon: <Thermometer className="h-12 w-12 text-rose-600" />, title: "Pimples Treatment", description: "Acne and pimple treatments for clearer skin." },
    { icon: <Syringe className="h-12 w-12 text-rose-600" />, title: "I.V Vitamin Drip", description: "Boost immunity and energy levels with IV therapy." },
    { icon: <Microscope className="h-12 w-12 text-rose-600" />, title: "Scar Removal", description: "Advanced techniques to reduce scar visibility." },
    { icon: <SprayCan className="h-12 w-12 text-rose-600" />, title: "Hydrafacial", description: "Deep cleansing and hydration for glowing skin." },
    { icon: <Pill className="h-12 w-12 text-rose-600" />, title: "Syringoma Removal", description: "Specialized treatment for syringoma removal." },
    { icon: <Sun className="h-12 w-12 text-rose-600" />, title: "Vitiligo Treatment", description: "Therapies to manage and improve vitiligo patches." },
    { icon: <Feather className="h-12 w-12 text-rose-600" />, title: "Stretch Marks Removal", description: "Reduce the appearance of stretch marks with effective treatments." },
    { icon: <CalendarCheck className="h-12 w-12 text-rose-600" />, title: "Hypo/Hyperpigmentation", description: "Even out skin tone and correct pigmentation issues." },
    { icon: <HeartPulse className="h-12 w-12 text-rose-600" />, title: "Allergy Treatment", description: "Relief from skin allergies with specialized care." },
    { icon: <Plus className="h-12 w-12 text-rose-600" />, title: "Other Skin Conditions", description: "Personalized treatments for various skin concerns." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {isAppointmentModalOpen && <AppointmentModal onClose={() => setIsAppointmentModalOpen(false)} />}
        {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} />}
      </AnimatePresence>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg fixed w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-rose-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                SilverRose
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-rose-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-rose-600 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-rose-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                onClick={() => setIsAppointmentModalOpen(true)}
                className="text-gray-600 hover:text-rose-600 transition-colors"
              >
                Appointment
              </a>

              {/* Render AppointmentModal when isAppointmentModalOpen is true */}
              {isAppointmentModalOpen && <AppointmentModal onClose={() => setIsAppointmentModalOpen(false)} />}

              <a
                href="#contact"
                className="text-gray-600 hover:text-rose-600 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-8 h-8 text-gray-800" />
              ) : (
                <Menu className="w-8 h-8 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              <a
                href="#home"
                className="text-gray-600 hover:text-rose-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-rose-600 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-rose-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                onClick={() => setIsAppointmentModalOpen(true)}
                className="text-gray-600 hover:text-rose-600 transition-colors"
              >
                Appointment
              </a>

              {/* Render AppointmentModal when isAppointmentModalOpen is true */}
              {isAppointmentModalOpen && <AppointmentModal onClose={() => setIsAppointmentModalOpen(false)} />}

              <a
                href="#contact"
                className="text-gray-600 hover:text-rose-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Render AuthModal if isAuthModalOpen is true */}
      {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} />}


      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        id="home"
        className="pt-20 bg-gradient-to-b from-rose-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Health, Our Priority
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Experience exceptional healthcare with SilverRose Clinic.
                We combine modern medical expertise with compassionate care.
              </p>
              <div className="mt-8 flex space-x-4">
                <button
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="bg-rose-600 text-white px-6 py-3 rounded-md hover:bg-rose-700 transition-colors flex items-center"
                >
                  Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-rose-600 text-rose-600 px-6 py-3 rounded-md hover:bg-rose-50 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
                alt="Medical Team"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="p-6 bg-rose-50 rounded-lg hover:shadow-lg transition-all duration-300"
              variants={fadeInUp}
            >
              <Clock className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock medical care for your peace of mind.</p>
            </motion.div>
            <motion.div
              className="p-6 bg-rose-50 rounded-lg hover:shadow-lg transition-all duration-300"
              variants={fadeInUp}
            >
              <Users className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Highly qualified medical professionals at your service.</p>
            </motion.div>
            <motion.div
              className="p-6 bg-rose-50 rounded-lg hover:shadow-lg transition-all duration-300"
              variants={fadeInUp}
            >
              <Heart className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Care</h3>
              <p className="text-gray-600">Personalized treatment with a caring approach.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">About SilverRose Clinic</h2>
            <p className="mt-4 text-xl text-gray-600">Delivering Excellence in Healthcare Since 2010</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
                alt="Clinic Interior"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-700 mb-6">
                At SilverRose Clinic, we believe in providing comprehensive healthcare solutions that put our patients first.
                Our state-of-the-art facility is equipped with the latest medical technology and staffed by experienced healthcare professionals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-rose-600 mr-2" />
                  <span>15+ Years of Excellence</span>
                </div>
                <div className="flex items-center">
                  <UserPlus className="h-6 w-6 text-rose-600 mr-2" />
                  <span>50,000+ Satisfied Patients</span>
                </div>
                <div className="flex items-center">
                  <Activity className="h-6 w-6 text-rose-600 mr-2" />
                  <span>99% Success Rate</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">Comprehensive Healthcare Solutions</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 border rounded-lg hover:shadow-lg transition-all duration-300 hover:border-rose-200"
                variants={fadeInUp}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-rose-500" />
                <span className="ml-2 text-xl font-bold">SilverRose</span>
              </div>
              <p className="text-gray-400">
                Providing quality healthcare services with compassion and expertise.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Kaloid Removal</li>
                <li className="text-gray-400">Scar Removal</li>
                <li className="text-gray-400">Vitiligo Treatment</li>
                <li className="text-gray-400">Allergy Treament</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Monday - Friday: 8:00 - 20:00</li>
                <li className="text-gray-400">Saturday: 9:00 - 18:00</li>
                <li className="text-gray-400">Sunday: 10:00 - 16:00</li>
                <li className="text-rose-500">Emergency: 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SilverRose Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;