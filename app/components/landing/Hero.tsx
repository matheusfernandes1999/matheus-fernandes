"use client";
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/app/lib/animations';

const Hero = () => (
  <motion.div
    className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-24 py-12 bg-background text-text-primary"
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
  >
    <motion.h1
      className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
      variants={fadeIn}
    >
      Olá, eu sou <span className="text-indigo-400">Matheus Fernandes</span> - Web Designer & Developer
    </motion.h1>
    <motion.p
      className="text-lg sm:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
      variants={fadeIn}
    >
      Eu crio websites bonitos e funcionais. Apaixonado por design moderno e tecnologias de ponta.
    </motion.p>
    <motion.a
      href="#projetos"
      className="bg-indigo-600 hover:bg-indigo-700 text-background font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-background"
      variants={fadeIn}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
    >
      Ver Meus Trabalhos
    </motion.a>
  </motion.div>
);

export default Hero;