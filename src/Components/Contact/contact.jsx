import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, ArrowRight } from 'lucide-react';
import './Contact.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.215, 0.610, 0.355, 1.0] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', projectType: 'Web Development', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted:", formState);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Reusable Header Navigation */}
      <Navbar />

      {/* Background Ambient Glows */}
      <div className="contact-ambient">
        <div className="cnt-blur cnt-blur-primary"></div>
        <div className="cnt-blur cnt-blur-accent"></div>
      </div>

      {/* Contact Hero Section */}
      <section className="contact-hero">
        <motion.div 
          className="contact-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="cnt-badge">
            ✨ LET'S COLLABORATE
          </motion.div>
          <motion.h1 variants={fadeInUp}>
            Let's Build Something <span className="cnt-gradient">Stellar Together</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="contact-hero-subtitle">
            Have an idea or a fully mapped-out system requirement? Drop us a line. Our engineering team is ready to scale your next digital product.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Contact Grid */}
      <section className="contact-interface-section">
        <motion.div 
          className="contact-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
        >
          {/* Left Column: Direct Contact Info */}
          <motion.div className="contact-info-column" variants={fadeInUp}>
            <div className="info-card glass-effect-cnt">
              <h3>Connect Directly</h3>
              <p>Prefer regular channels? Reach out directly to initiate project onboarding.</p>

              <div className="info-links-list">
                <a href="mailto:info@haktechsol.com" className="info-item-link">
                  <div className="info-icon-box"><Mail size={22} /></div>
                  <div className="info-text-box">
                    <span>Email Us</span>
                    <p>info@haktechsol.com</p>
                  </div>
                </a>

                <a href="tel:+923000000000" className="info-item-link">
                  <div className="info-icon-box"><Phone size={22} /></div>
                  <div className="info-text-box">
                    <span>Call / WhatsApp</span>
                    <p>+92 300 1234567</p>
                  </div>
                </a>

                <div className="info-item-link static-item">
                  <div className="info-icon-box"><MapPin size={22} /></div>
                  <div className="info-text-box">
                    <span>Our Headquarters</span>
                    <p>Pakistan Standard Time (PST)</p>
                  </div>
                </div>
              </div>

              <div className="info-footer-status">
                <span className="availability-indicator"></span>
                <p>Mon - Fri: Active Node Monitoring & Support Open</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Animated Form */}
          <motion.div className="contact-form-column" variants={fadeInUp}>
            <form onSubmit={handleSubmit} className="main-contact-form glass-effect-cnt">
              <div className="form-row-dual">
                <div className="input-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="projectType">What are we building?</label>
                <select 
                  id="projectType"
                  value={formState.projectType}
                  onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                >
                  <option value="Web Development">Full-Stack Web Architecture</option>
                  <option value="Mobile App Dev">Mobile App Engineering (Flutter)</option>
                  <option value="Web3 Ecosystems">Web3 & Blockchain Integration</option>
                  <option value="UI/UX Product Design">UI/UX Product Design</option>
                  <option value="Custom Software">Other Software Requirements</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="message">Project Description</label>
                <textarea 
                  id="message" 
                  rows="6" 
                  required 
                  placeholder="Tell us about your technical project vision, timelines, or performance goals..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <motion.button 
                type="submit" 
                className="form-submit-btn"
                whileHover={{ scale: 1.02, boxShadow: "0 4px 25px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                Transmit Briefing <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>

      {/* Reusable Footer Section */}
      <Footer />
    </div>
  );
}