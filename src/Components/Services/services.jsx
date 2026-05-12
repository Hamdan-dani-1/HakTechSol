import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Layers, Palette, Cloud, ArrowRight, Check, Search, Terminal, Activity } from 'lucide-react';
import './Services.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
// Animation configs
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.215, 0.610, 0.355, 1.0] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const coreServices = [
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App Engineering",
    tag: "iOS & Android",
    desc: "Building blazing-fast cross-platform mobile applications. Specialized in robust state management and fluid user interfaces that feel entirely native.",
    features: ["Flutter & Dart Mastery", "GetX Architecture", "Offline-First Support", "App Store Deployment"]
  },
  {
    icon: <Code size={32} />,
    title: "Full-Stack Web Architecture",
    tag: "MERN & Next.js",
    desc: "Crafting highly scalable web applications optimized for speed, security, and exceptional performance under heavy user traffic.",
    features: ["React & Next.js Platforms", "Node.js Server Ecosystems", "Secure REST & GraphQL APIs", "MongoDB Architecture"]
  },
  {
    icon: <Layers size={32} />,
    title: "Web3 & Blockchain Dev",
    tag: "Decentralized Future",
    desc: "Integrating state-of-the-art decentralized systems, focusing heavily on secure smart contract architectures and seamless Web3 wallet implementations.",
    features: ["Solana Integration", "Anchor Framework Ecosystem", "Smart Contract Audits", "Custom Web3 Apps"]
  },
  {
    icon: <Palette size={32} />,
    title: "UI/UX Product Design",
    tag: "Figma Mastery",
    desc: "Transforming raw conceptual ideas into wireframes and gorgeous modern digital products that users love interacting with daily.",
    features: ["Interactive Prototyping", "Comprehensive Wireframing", "Modern Visual Frameworks", "Design System Creation"]
  },
  {
    icon: <Cloud size={32} />,
    title: "Cloud Infrastructure",
    tag: "AWS & Firebase",
    desc: "Setting up automated continuous integration deployment pipelines and robust NoSQL server systems for zero-downtime execution.",
    features: ["Firebase Real-time Architecture", "Secure AWS Infrastructures", "CI/CD Deployment Pipelines", "Ubuntu Server Configuration"]
  }
];

const processSteps = [
  {
    icon: <Search size={24} />,
    phase: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your project goals and refine product workflows into a definitive technical map before typing a single line of code."
  },
  {
    icon: <Palette size={24} />,
    phase: "02",
    title: "UI/UX Prototyping",
    desc: "Our design engineers architect a sleek interactive modern prototype, locking down layout structures and optimal visual user paths."
  },
  {
    icon: <Terminal size={24} />,
    phase: "03",
    title: "Agile Production",
    desc: "We dive straight into rapid development sprints using robust frameworks, updating code repositories live with full transparency."
  },
  {
    icon: <Activity size={24} />,
    phase: "04",
    title: "Deploy & Scale",
    desc: "Your modern software undergoes strict end-to-end optimizations before deploying seamlessly to live public cloud servers."
  }
];

export default function Services() {
  return (
    <div className="services-page-wrapper">
      {/* Reusable Header Navigation */}
      <Navbar />

      {/* Background Lighting Elements */}
      <div className="services-ambient">
        <div className="srv-blur srv-blur-primary"></div>
        <div className="srv-blur srv-blur-accent"></div>
      </div>

      {/* Services Hero Header */}
      <section className="services-hero">
        <motion.div 
          className="services-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="srv-badge">
            ⚡ EXCELLENCE IN ENGINEERING
          </motion.div>
          <motion.h1 variants={fadeInUp}>
            Our Technical <span className="srv-gradient">Capabilities</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="services-hero-subtitle">
            We turn highly complex software ideas into pristine, production-grade applications that perform at scale. Discover how HakTechSol accelerates your digital edge.
          </motion.p>
        </motion.div>
      </section>

      {/* Dynamic Detailed Services Grid */}
      <section className="services-showcase">
        <motion.div 
          className="services-grid-detailed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          {coreServices.map((srv, idx) => (
            <motion.div 
              key={idx} 
              className="service-card-detailed glass-effect-srv"
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
            >
              <div className="srv-card-top">
                <div className="srv-card-icon-box">{srv.icon}</div>
                <span className="srv-card-tag">{srv.tag}</span>
              </div>
              
              <h3 className="srv-card-title">{srv.title}</h3>
              <p className="srv-card-desc">{srv.desc}</p>
              
              <div className="srv-feature-list">
                {srv.features.map((feat, fIdx) => (
                  <div key={fIdx} className="srv-feature-item">
                    <Check size={16} className="srv-check-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Development Process Timeline Section */}
      <section className="process-timeline-section">
        <motion.div 
          className="srv-section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="srv-section-title">How We Ship Success</h2>
          <p className="srv-section-subtitle">Our streamlined framework moving from concepts to deployment.</p>
        </motion.div>

        <motion.div 
          className="process-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          {processSteps.map((step, idx) => (
            <motion.div 
              key={idx} 
              className="process-card glass-effect-srv"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="process-header">
                <div className="process-icon-wrapper">{step.icon}</div>
                <span className="process-number">{step.phase}</span>
              </div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Call to Action (CTA) */}
      <section className="services-cta-section">
        <motion.div 
          className="services-cta-box glass-effect-srv"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="cta-glow"></div>
          <h2>Have a project architecture in mind?</h2>
          <p>Let's map out your next system requirements and build something stellar together.</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="srv-btn-primary">
            Initiate Project Discovery <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* Reusable Footer Section */}
      <Footer />
    </div>
  );
}