import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Rocket, BarChart, ArrowRight, CheckCircle2, Layers, Menu, X } from 'lucide-react';
import './Home.css';


// === ANIMATION VARIANTS ===
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const navItem = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const floatAnimation = {
  y: [0, -15, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
};

const mobileMenuVariants = {
  closed: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
  open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

// === DATA ARRAYS ===
const services = [
  { icon: <Code size={34} />, title: 'Web Architecture', desc: 'High-performance web apps built for speed, scalability, and seamless user experiences.' },
  { icon: <Smartphone size={34} />, title: 'Mobile & App Dev', desc: 'Cross-platform mobile applications utilizing modern frameworks for native-like performance.' },
  { icon: <Layers size={34} />, title: 'Web3 & Blockchain', desc: 'Modern decentralized solutions and robust smart contracts for the future web.' },
  { icon: <BarChart size={34} />, title: 'Digital Marketing', desc: 'Data-driven marketing and SEO strategies that guarantee a massive increase in ROI.' },
];

const projects = [
  { title: 'Fintech Dashboard', stat: '900% ROI', desc: 'Analytics-driven decisions led to a surge in campaign effectiveness.', category: 'Web App' },
  { title: 'Telemedicine App', stat: '40% Less CAC', desc: 'Streamlined patient management and scheduling platform.', category: 'Mobile App' },
  { title: 'E-Commerce Hub', stat: '2.5x Sales', desc: 'Custom scalable online store implementation with high conversion.', category: 'Full Stack' },
];

const techStack = ["React", "Flutter", "Node.js", "Solana", "Next.js", "MongoDB", "Tailwind", "Figma", "AWS"];

export default function Home() {
    const [pauseMarquee, setPauseMarquee] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (


<div className="haktech-wrapper">
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Ambient Animated Background */}
      <div className="ambient-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Navbar */}
      <motion.nav 
        className="navbar glass-effect"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={navItem} className="logo">
          <Link to="/">HakTechSol<span className="dot">.</span></Link>
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="nav-links desktop-only">
          {['Services', 'About', 'Projects', 'Contact'].map((item) => (
            <motion.div key={item} variants={navItem}>
              <Link to={`/${item.toLowerCase()}`}>
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.button variants={navItem} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="nav-cta">
            Let's Talk
          </motion.button>
        </div>

        {/* Mobile Toggle Button */}
        <motion.button 
          className="mobile-toggle" 
          onClick={toggleMenu}
          variants={navItem}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay glass-effect"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="mobile-nav-links">
              {['Services', 'About', 'Projects'].map((item) => (
                <Link 
                  key={item} 
                  to={`/${item.toLowerCase()}`} 
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
              <button className="nav-cta mobile-cta">Let's Talk</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="hero-section">
        <motion.div 
          className="hero-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="badge">
            <span className="pulse-dot"></span> Welcome to the Future of Tech
          </motion.div>
          <motion.h1 variants={fadeInUp}>
            We Build Ideas <br />
            <span className="text-gradient">Driven by the Future</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="hero-subtitle">
            HakTechSol is a premium digital agency delivering modern web development, mobile apps, and scalable software solutions to help your business dominate online.
          </motion.p>
          <motion.div variants={fadeInUp} className="hero-buttons">
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.6)" }} className="btn-primary">
              Get Started <ArrowRight size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }} className="btn-secondary">
              View Our Work
            </motion.button>
          </motion.div>
        </motion.div>
      </header>

      {/* Infinite Tech Stack Marquee */}
      <div className="marquee-container">
        <motion.div 
          className="marquee-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
            <span key={idx} className="marquee-item">{tech}</span>
          ))}
        </motion.div>
      </div>

      {/* Services Section */}
      <section id="services" className="page-section">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="section-title">Discover Our Unique Features</h2>
          <p className="section-subtitle">End-to-end digital services tailored for modern businesses.</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          {services.map((srv, index) => (
            <motion.div 
              key={index} 
              className="service-card glass-effect" 
              variants={fadeInUp}
              whileHover={{ y: -15, scale: 1.03, transition: { duration: 0.3 } }}
            >
              <motion.div animate={floatAnimation} className="service-icon">{srv.icon}</motion.div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
              <div className="service-link">
                Explore <ArrowRight size={16} className="arrow-icon" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="page-section">
        <motion.div 
          className="about-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="about-image-wrapper glass-effect" variants={fadeInUp}>
            <div className="stat-badge floating">
              <span className="stat-number">1.5K+</span>
              <span className="stat-text">Satisfied Clients</span>
            </div>
            <div className="stat-badge bottom right floating-delayed">
              <span className="stat-number">99%</span>
              <span className="stat-text">Project Success</span>
            </div>
          </motion.div>
          
          <motion.div className="about-content" variants={fadeInUp}>
            <h2 className="section-title">Empowering Businesses with Next-Gen Tech</h2>
            <p>
              At HakTechSol, we merge creativity with complex engineering. We help businesses scale through custom websites, high-performance mobile applications, and result-driven strategies. With a strict focus on ROI and innovation, we deliver measurable results.
            </p>
            <ul className="about-list">
              <motion.li whileHover={{ x: 10, color: "#8B5CF6" }}><CheckCircle2 className="check-icon" /> Agile Development Process</motion.li>
              <motion.li whileHover={{ x: 10, color: "#8B5CF6" }}><CheckCircle2 className="check-icon" /> Transparent Communication</motion.li>
              <motion.li whileHover={{ x: 10, color: "#8B5CF6" }}><CheckCircle2 className="check-icon" /> 24/7 Dedicated Support</motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="work" className="page-section">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="section-title">Our Recent Impact</h2>
          <p className="section-subtitle">See the power of data and code in action.</p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          {projects.map((proj, index) => (
            <motion.div 
              key={index} 
              className="project-card glass-effect" 
              variants={fadeInUp}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="project-category">{proj.category}</div>
              <div className="project-stat-highlight">{proj.stat}</div>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <motion.button whileHover={{ x: 8 }} className="btn-text">
                Read Full Case Study <ArrowRight size={16}/>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer glass-effect">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>HakTechSol<span className="dot">.</span></h2>
            <p>Your dedicated IT partner for a digital-first world.</p>
          </div>
          <div className="footer-cta">
            <h3>Ready to scale your business?</h3>
            <motion.button whileHover={{ scale: 1.05 }} className="btn-primary">
              Book a Consultation
            </motion.button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 HakTechSol. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}