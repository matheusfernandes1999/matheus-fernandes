"use client";
import { motion } from 'framer-motion';
import { fadeIn, fadeInSlight, underlineVariants } from '@/app/lib/animations';

const About = () => (
  <section id="sobre" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-24 bg-container-background text-text-primary">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-8 text-text-primary relative inline-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInSlight}
      >
        Sobre Mim
        <motion.span
          className="block w-2/3 h-1 bg-indigo-500 mx-auto mt-2"
          variants={underlineVariants}
          viewport={{ once: true, amount: 0.5 }}
        ></motion.span>
      </motion.h2>
      <motion.p
        className="text-lg sm:text-xl text-text-secondary leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        Com 5 anos de experiência na área, sou especialista na criação de aplicações web responsivas e fáceis de usar. Minhas ferramentas incluem React, Next.js, Tailwind CSS e Figma. Dedico-me a dar vida a visões criativas através de código e design.
      </motion.p>
    </div>
  </section>
);

export default About;