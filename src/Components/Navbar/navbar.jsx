import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const navItem = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const mobileMenuVariants = {
  closed: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
  open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
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
    </>
  );
}