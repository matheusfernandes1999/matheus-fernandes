"use client";
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.footer
    className="py-10 bg-container-background text-text-secondary text-center border-t border-neutral-700"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}
  >
    <p className="text-sm">&copy; {new Date().getFullYear()} Matheus Fernandes. Todos os direitos reservados.</p>
  </motion.footer>
);

export default Footer;