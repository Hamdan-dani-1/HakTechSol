import React from "react";
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';


export default function Footer(){
    return(
        <>
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
      </>
    )
}